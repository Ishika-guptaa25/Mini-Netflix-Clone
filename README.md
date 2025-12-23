# 🎬 Netflix Clone

A modern, responsive Netflix clone built with HTML, CSS, and vanilla JavaScript. Features dynamic movie data from TMDB API, smooth animations, and a beautiful UI that closely mimics the Netflix experience.

![Netflix Clone](https://img.shields.io/badge/version-1.0.0-red?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-5-orange?style=flat-square&logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript)

## 📸 Preview



## ✨ Features

- 🎥 **Netflix-inspired UI** - Authentic design matching Netflix's aesthetic
- 🔥 **Dynamic Content** - Real movie data from TMDB API
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Smooth Animations** - Hover effects and transitions
- 🎯 **Multiple Categories** - Trending, Action, Comedy, Horror, Romance, Documentaries
- 🎬 **Movie Modal** - Detailed movie information popup
- ⚡ **Fast Performance** - Optimized loading and rendering
- 🌐 **Easy Deployment** - Ready for Vercel deployment

## 🚀 Live Demo

[View Live Demo](https://mini-netflix-clone-psvv.vercel.app/) 

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **TMDB API** - Movie database
- **Google Fonts** - Roboto font family

## 📋 Prerequisites

Before you begin, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your machine
- A text editor (VS Code recommended)
- A TMDB API key (free)
- A GitHub account
- A Vercel account (for deployment)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ishika-guptaa25/Mini-Netflix-Clone.git
cd netflix-clone
```

### 2. Get Your TMDB API Key

1. Visit [TMDB](https://www.themoviedb.org/)
2. Create a free account
3. Go to **Settings** → **API**
4. Click **Create` → **Developer**
5. Fill in the required details
6. Copy your **API Key (v3 auth)**

### 3. Configure Your API Key

Open `js/script.js` and replace the placeholder:

```javascript
const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your actual API key
```

### 4. Run Locally

#### Option A: Direct File Opening
Simply open `index.html` in your browser

#### Option B: Using a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
Install the "Live Server" extension and click "Go Live"

Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
netflix-clone/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   └── script.js          # JavaScript logic
├── README.md              # Project documentation
├── LICENSE                # MIT License
├── .gitignore            # Git ignore rules
└── vercel.json           # Vercel configuration
```

## 🎨 Customization

### Change Primary Color

Edit `css/style.css`:

```css
:root {
    --netflix-red: #e50914;  /* Change this */
}
```

### Add More Movie Categories

Edit `js/script.js`:

```javascript
const endpoints = {
    // Add your category
    scifi: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
    thriller: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53`
};
```

Then add corresponding HTML sections and fetch calls.

### Genre IDs (TMDB)

- Action: 28
- Comedy: 35
- Horror: 27
- Romance: 10749
- Sci-Fi: 878
- Thriller: 53
- Drama: 18
- Animation: 16

## 🌐 Deployment

### Deploy to Vercel (Recommended)

#### Method 1: Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. **Import** your GitHub repository
5. Click **"Deploy"**
6. Done! Your site is live 🎉

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click **"New site from Git"**
4. Connect your repository
5. Click **"Deploy site"**

### Deploy to GitHub Pages

```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages
```

Enable GitHub Pages in repository settings.

## 🔐 Environment Variables (Optional)

For better security, use environment variables:

1. Create `.env` file:
```
TMDB_API_KEY=your_api_key_here
```

2. Update your fetch calls to use the environment variable
3. Add `.env` to `.gitignore`

**Note:** For pure frontend apps, API keys will be visible. For production, consider using a backend proxy.

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. **Fork** the repository
2. Create your **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Development Guidelines

- Follow existing code style
- Test on multiple browsers
- Update README if needed
- Add comments for complex logic

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [Netflix](https://www.netflix.com)
- Movie data provided by [TMDB](https://www.themoviedb.org/)
- Icons and fonts from various open-source projects
- Built with ❤️ for learning purposes

## 🗺️ Roadmap

- [ ] Add user authentication
- [ ] Implement video playback
- [ ] Add search functionality
- [ ] Create watchlist feature
- [ ] Add movie trailers
- [ ] Implement dark/light theme toggle
- [ ] Add multi-language support
- [ ] Create user profiles
- [ ] Add rating system
- [ ] Implement infinite scroll

## 📊 Project Status

This project is currently in **active development**. New features and improvements are being added regularly.

## 🎯 Learning Outcomes

This project demonstrates:
- DOM manipulation
- API integration
- Responsive design
- Modern CSS techniques
- ES6+ JavaScript
- Git workflow
- Project deployment

## 💡 Tips

- Keep your API key private (don't commit it to public repos)
- Use browser DevTools for debugging
- Test responsive design on actual devices
- Optimize images for better performance
- Use semantic HTML for better SEO

## 🌟 Show Your Support

Give a ⭐️ if this project helped you learn something new!

---

**Built with passion for the web** 🚀

*This is a demo project for educational purposes. Not affiliated with Netflix, Inc.*