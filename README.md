# Shreya Kamble - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and professional experience as a Software Developer.

![Portfolio](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Interactive Elements**: Animated buttons, cards with hover effects, and scroll-to-top functionality
- **Glassmorphism Navigation**: Sticky navbar with blur backdrop effect
- **Professional Sections**:
  - Hero section with animated gradient background
  - About Me with contact details
  - Technical Skills organized by category
  - Projects showcase with GitHub links
  - Work Experience timeline
  - Education background
  - Contact section with social links

## 🚀 Technologies Used

- **Frontend Framework**: React 18.x
- **Build Tool**: Vite 5.x
- **Styling**: CSS3 with modern features (Flexbox, Grid, CSS Variables, Animations)
- **Icons**: Inline SVG icons
- **Version Control**: Git

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreya-Kamble30/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles and component-specific CSS
│   ├── index.css        # Base CSS reset
│   ├── main.jsx         # Application entry point
│   └── assets/          # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Updating Personal Information

Edit `src/App.jsx` to update:
- Name and title in the hero section
- Contact details (email, phone, location)
- Skills and projects
- Work experience and education
- Social media links

### Styling

The design uses CSS variables defined in `src/App.css`. You can customize the color scheme by modifying the `:root` variables:

```css
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #818cf8;
  --secondary: #10b981;
  --accent: #f59e0b;
  /* ... more variables */
}
```

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect it as a Vite project
4. Click Deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📸 Screenshots

<!-- Add screenshots of your portfolio here -->

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

- **Email**: shreyakamble3012@gmail.com
- **LinkedIn**: [shreya-kamble-166507308](https://www.linkedin.com/in/shreya-kamble-166507308/)
- **GitHub**: [Shreya-Kamble30](https://github.com/Shreya-Kamble30)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Icons from various open-source SVG libraries

---

Made with ❤️ by [Shreya Kamble](https://github.com/Shreya-Kamble30)
