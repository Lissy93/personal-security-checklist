
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  safelist: [
    {
      pattern: /(bg|outline|text|tw-color)-(yellow|lime|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|red)-(200|300|400|500|600)/,
      variants: ['light', 'dark', 'hover', 'focus'],
    },
    {
      pattern: /(badge|bg)-(success|warning|error|info|neutral)/,
      variants: ['light', 'dark', 'hover', 'focus'],
    }
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5b6d5b',
        'custom-pink': {
          100: '#ffecef',
          400: '#ff69b4',
          800: '#ff1493',
        },
        // Add more custom colors or extend existing ones here
      },
    },
  },
};
