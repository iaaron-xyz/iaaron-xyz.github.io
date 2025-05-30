# Personal Portfolio Website

![Portfolio Screenshot](https://raw.githubusercontent.com/iaaron-xyz/iaaron-xyz.github.io/main/public/kb16.png)

A modern, responsive personal portfolio website built with Astro and TailwindCSS. This website showcases my skills, projects, and blog posts as a developer, physicist, and artist.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle option
- **Project Showcase**: Dedicated section to highlight personal and professional projects
- **Skills Section**: Organized display of technical skills by category
- **Blog**: Integrated blog functionality for sharing knowledge and experiences
- **Fast Performance**: Built with Astro for optimal loading speed and performance
- **Custom Fonts**: Includes custom fonts (Reddit Mono, Inter, Sentient) for a unique look and feel

## 🧰 Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- JavaScript - For interactive elements
- Markdown - For blog content

## 📂 Project Structure

```
/
├── public/              # Static assets
│   ├── fonts/           # Custom fonts
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page components and routes
│   │   └── posts/       # Blog posts (Markdown)
│   ├── scripts/         # JavaScript utilities
│   └── styles/          # Global styles and CSS
├── portfolio_info/      # JSON data for portfolio content
└── package.json         # Project dependencies
```

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/iaaron-xyz/iaaron-xyz.github.io.git
   cd iaaron-xyz.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌐 Deployment

This site is configured to be deployed on GitHub Pages. After building the project with `npm run build`, the contents of the `dist` directory can be deployed to your GitHub Pages repository.

## 🎨 Customization

The portfolio content is managed through the `portfolio_info/portfolio.json` file, making it easy to update projects and skills without modifying the code structure.

### Adding a New Project

Add a new project entry to the `projects` array in `portfolio_info/portfolio.json`:

```json
{
  "title": "Project Title",
  "description": "Project description...",
  "images": ["URL to image"],
  "urlRepository": "GitHub repository URL",
  "urlProject": "Live project URL",
  "tags": [
    {
      "name": "Technology",
      "textColor": "color",
      "bgColor": "color"
    }
  ],
  "categories": ["category"]
}
```

### Adding a New Blog Post

Create a new Markdown file in the `src/pages/posts/` directory with the following frontmatter:

```markdown
---
title: "Post Title"
pubDate: 2023-01-01
description: "Brief description of the post"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 📝 License

[MIT License](LICENSE)

## 🔗 Contact

- GitHub: [iaaron-xyz](https://github.com/iaaron-xyz)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ by Aaron