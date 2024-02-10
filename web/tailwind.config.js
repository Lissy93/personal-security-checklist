

const applyCustomColors = (theme, front, back) => {
  return {
    ...require("daisyui/src/theming/themes")[`[data-theme=${theme}]`],
    "--front":front,
    "--back": back || `${front} /0.75`,
  };
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui'), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        "front": "hsl(var(--front, 0deg 0% 60% / 10%))",
        "back": "hsl(var(--back, 212 14% 10% / 1))",
      },
    },
  },
  daisyui: {
    themes: [
      { light: applyCustomColors("light", "237 9% 86% / 0.75", "237 9% 86% / 1") },
      { dark: applyCustomColors("dark", "217 14% 17%", "212 14% 10%") },
      { night: applyCustomColors("night", "220deg 44.68% 9.22%", "219.2, 38.2%, 13.3%") },

      { cupcake: applyCustomColors("cupcake", "297deg 77% 90%", "303.33deg 60% 94.12%") },
      { bumblebee: applyCustomColors("bumblebee", "75.5deg 40% 87%", "60deg 23.08% 92.35%") },
      { corporate: applyCustomColors("corporate", "211.67deg 43.9% 83.92%", "212.3, 25.5%, 90%") },
      { synthwave: applyCustomColors("synthwave", "253.3, 58.1%, 12.2%", "253.5, 47.6%, 16.5%") },
      { retro: applyCustomColors("retro", "41.9, 37.1%, 72%", "42.5, 36.4%, 87.1%") },
      { valentine: applyCustomColors("valentine", "320.4, 70.7%, 85.3%", "322.1, 61.3%, 93.9%") },
      { halloween: applyCustomColors("halloween", "0, 0%, 9%", "0, 0%, 16.9%") },
      { aqua: applyCustomColors("aqua", "230.5, 41%, 27.3%", "230.8, 33.9%, 22.5%") },
      { lofi: applyCustomColors("lofi", "228, 11.6%, 91.6%") },
      { fantasy: applyCustomColors("fantasy", "230.8, 33.9%, 22.5%", "210, 2.3%, 83.1%") },
      { dracula: applyCustomColors("dracula", "210, 2.3%, 83.1%, 0.03", "228, 20%, 14.7%") },
    ],
  },
  safelist: [
    { // TODO: This adds a lot of overhead. Go through code, and remove any un-needed variants.
      pattern: /(bg|outline|text|tw-color|border)-(yellow|lime|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|red)-(200|300|400|500|600)/,
      variants: ['light', 'dark', 'hover', 'focus'],
    },
    {
      pattern: /(badge|bg|checkbox|toggle)-(success|warning|error|info|neutral)/,
      variants: ['light', 'dark', 'hover', 'focus', 'checked'],
    }
  ],
};
