# Gxpixamo's Portfolio

A modern, premium personal portfolio website for Gxpixamo - Developer, AI App Builder, and Website Creator.

## 🎨 Features

- **Modern Dark Theme** - Clean, minimal UI with glassmorphism effects
- **Smooth Animations** - Framer Motion powered transitions and interactions
- **Responsive Design** - Looks amazing on desktop and mobile devices
- **Interactive Particles** - Animated particle background with connections
- **Cursor Glow Effect** - Elegant cursor tracking effect
- **Gradient Text** - Eye-catching gradient text elements
- **Smooth Scrolling** - Scroll-based reveal animations
- **Sticky Navigation** - Modern navbar that adapts to scroll position
- **Mobile Menu** - Hamburger menu for mobile devices

## 🚀 Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server
- **React Scroll** - Smooth scroll navigation

## 📋 Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal introduction and background
3. **Skills** - Interactive skill cards with hover effects
4. **Projects** - Featured project showcases with links
5. **Social** - Social media links and contact info
6. **Contact** - Contact form and alternative contact methods
7. **Footer** - Minimal footer with copyright

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/GxpixamoDev/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🎯 Customization

### Update Personal Information

- **Contact Email**: Update in `Contact.jsx` and `Social.jsx`
- **Discord Username**: Update in `Social.jsx`
- **Social Links**: Update links in `Social.jsx` and `Footer.jsx`

### Add Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tags: ['Tech1', 'Tech2'],
    image: '🎨',
    live: 'https://your-project.com',
    github: 'https://github.com/yourname/project',
  },
  // ... more projects
]
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    purple: '#a78bfa',
    blue: '#60a5fa',
    cyan: '#06b6d4',
  },
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### GitHub Pages

1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to GitHub Pages

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📞 Contact

- **Email**: your-email@example.com
- **Discord**: @GxpixamoDev
- **GitHub**: [@GxpixamoDev](https://github.com/GxpixamoDev)

---

**Made with ❤️ by Gxpixamo**
