// src/routes/articles/[slug].tsx
import { component$, Resource, useResource$, useStore } from '@builder.io/qwik';
import { type DocumentHead, useLocation } from '@builder.io/qwik-city';
import { marked } from "marked";

import articles from '~/data/articles';

import styles from './article.module.css';

export default component$(() => {
  const location = useLocation();
  const store = useStore({ article: null, notFound: false });

  const slug = location.params.slug;
  const article = articles.find(a => a.slug === slug);

  // useDocumentHead(() => {
  //   if (!article) {
  //     return {
  //       title: '404 Not Found | Your Site Name',
  //       meta: [{ name: 'description', content: 'The requested article was not found.' }],
  //     };
  //   }

  //   return {
  //     title: `${article.title} | Your Site Name`,
  //     meta: [{ name: 'description', content: article.description }],
  //   };
  // });

  const parseMarkdown = (text: string | undefined): string => {
    if (!text) return '';

    // Custom renderer
    const renderer = new marked.Renderer();

    // Override function to handle headings
    renderer.heading = (text, level) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${level} id="${escapedText}">${text}</h${level}>`;
    };

    // Override function to handle links
    renderer.link = (href, title, text) => {
      if (href.startsWith('/')) {
        href = `https://github.com/Lissy93/personal-security-checklist/blob/old-version/${href}`;
      }
      title = title ? `title="${title}"` : '';
      return `<a href="${href}" ${title} target="_blank" rel="noopener noreferrer">${text}</a>`;
    };

    // Sanitize the input to remove <script> tags
    const sanitizeHtml = (html: string): string => {
      return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    };

    // Configure marked with the custom renderer
    marked.use({ renderer });

    // Parse the markdown, then sanitize the HTML to remove <script> tags
    const rawHtml = marked.parse(text, { async: false}) as string;
    const sanitizedHtml = sanitizeHtml(rawHtml);

    return sanitizedHtml;
  };


  const articleResource = useResource$<string>(async () => {
    if (!article) {
      store.notFound = true;
      return '';
    }

    const response = await fetch(article.markdown);
    if (!response.ok) {
      store.notFound = true;
      return '';
    }
    return response.text();
  });

  if (store.notFound) {
    return <div>404 Article Not Found</div>;
  }

  return (


    <Resource
      value={articleResource}
      onResolved={(content) => (
        <article class={[
          'prose bg-back my-4 mx-auto rounded-lg shadow-lg p-8',
          'max-w-max sm:w-11/12 md:w-4/5 xl:w-3/4 2xl:2/4',
          styles.psc_article
          ]}>

          {article?.warningMessage && (
          <div role="alert" class="alert alert-warning opacity-75 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span><b>Warning</b>: {article.warningMessage}</span>
          </div>
          )}

          <div dangerouslySetInnerHTML={parseMarkdown(content)}></div>
        </article>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Article | Digital Defense",
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
};

