# Creative Portfolio - Next.js with Tailwind CSS

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS, showcasing creative design work with smooth animations and interactive features.

## Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- 📱 **Fully Responsive** - Works perfectly on all device sizes
- 🚀 **Performance Optimized** - Built with Next.js for optimal performance
- ✨ **Interactive Elements** - Smooth scrolling, hover effects, and micro-interactions
- 🖼️ **Portfolio Gallery** - Filterable portfolio with modal viewing
- 📝 **Contact Form** - Functional contact form with validation
- 🎭 **Animations** - Framer Motion powered animations and transitions

## Tech Stack

- **Next.js 14** - React framework with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library
- **Font Awesome** - Additional icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
portfolio-website/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Services.js     # Services section
│   ├── Portfolio.js    # Portfolio gallery
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer component
├── data/               # Data files
│   └── portfolio.js    # Portfolio items and content data
├── pages/              # Next.js pages
│   ├── _app.js         # App component
│   └── index.js        # Home page
├── styles/             # CSS files
│   └── globals.css     # Global styles with Tailwind
├── Images/             # Portfolio images
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── README.md           # This file
```

## Customization

### Adding Portfolio Items

Edit `data/portfolio.js` to add or modify portfolio items:

```javascript
export const portfolioItems = [
  {
    id: 1,
    title: 'Project Title',
    category: 'logos',
    description: 'Project Description',
    image: '/Images/your-image.jpg',
  },
  // Add more items...
];
```

### Modifying Colors

Update `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      secondary: {
        // Your custom secondary colors
      },
    },
  },
}
```

### Adding Sections

1. Create a new component in `components/`
2. Import and add it to `pages/index.js`
3. Add the section ID to the navigation in `components/Navbar.js`

## Features Details

### Navigation
- Sticky navigation with scroll effects
- Mobile-responsive hamburger menu
- Smooth scrolling to sections
- Active section highlighting

### Hero Section
- Animated typing effect
- Floating design showcase
- Call-to-action buttons
- Parallax scroll effects

### Portfolio Gallery
- Category filtering
- Modal image viewing
- Smooth animations
- Grid layout with hover effects

### Contact Form
- Form validation
- Success notifications
- Responsive design
- Modern styling

### Animations
- Scroll-triggered animations
- Hover effects
- Loading animations
- Smooth transitions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact:
- Email: hello@creativestudio.com
- Phone: +1 234 567 8900

---

Built with ❤️ using Next.js and Tailwind CSS
