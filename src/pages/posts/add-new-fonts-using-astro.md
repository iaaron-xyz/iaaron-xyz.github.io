---
layout: ../../layouts/MarkdownPostLayout.astro
title: Add new font families to your Astro project
author: iaaron
description: "Learn how to add new custom fonts to any astro project step-by-step"
image:
    url: "https://images.pexels.com/photos/1198741/pexels-photo-1198741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt: "Foto de Abbass Karnib de Pexels: A photo of live green leaves."
pubDate: 2025-10-15
upDate: 2025-10-16
tags: ["astro", "fonts", "custom"]
---
## Search a font

You can find fonts on sites like [Google Fonts](https://fonts.google.com/), once you find it, you can download it. After that unzip the fonts if necessary and place them in the public folder of your project: `project-folder/public`

<div class="note">
  Remember that font files typically come in formats like .ttf, .woff, or .woff2. The .woff2 format is recommended for web use as it provides the best compression and performance.
</div>

## Steps to add custom fonts

1. Download the font and place it in your folder project.
2. Create a .css for that file.
3. Add a font name to the tailwindcss file.
4. Call the css file into your main css file.

### Creating the CSS file

Here's an example of how to create a CSS file for your custom font:

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2'),
       url('/fonts/MyCustomFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

<div class="tip">
  Using `font-display: swap` ensures text remains visible during font loading, improving perceived performance.
</div>

### Adding to Tailwind CSS

To use your custom font with Tailwind CSS, add it to your `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'custom': ['MyCustomFont', 'sans-serif'],
      },
    },
  },
}
```

<div class="warning">
  Make sure the font name in your Tailwind config matches exactly with the font-family name in your CSS file.
</div>
