/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        night: "#161717",
        "night-200": "#272727",
      },
      fontFamily: {
        "sentient-regular": ["Sentient-Regular", "serif"],
        "sentient-light": ["Sentient-Light", "serif"],
        "inter-light": ["Inter-Light", "sans"],
        "inter-regular": ["Inter-Regular", "sans"],
        "inter-black": ["Inter-Black", "sans"],
        "redditmono-light": ["RedditMono-ExtraLight", "sans"],
        "redditmono-regular": ["RedditMono-Regular", "sans"],
        "redditmono-bold": ["RedditMono-Bold", "sans"],
      },
    },
  },
  plugins: [],
};
