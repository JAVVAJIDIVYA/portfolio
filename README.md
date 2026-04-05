# Javvaji Divya - Portfolio

A professional, minimalist portfolio website showcasing my technical skills, projects, and experience. Built with React, TypeScript, Vite, and Tailwind CSS, featuring a clean Wix-inspired design.

## 🚀 Live Demo
View my portfolio live at: [https://JAVVAJIDIVYA.github.io/portfolio/](https://JAVVAJIDIVYA.github.io/portfolio/)

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/UI, Lucide React (Icons)
- **Build Tool**: Vite
- **Animations**: Framer Motion / Custom CSS Transitions
- **Deployment**: GitHub Pages (via GitHub Actions)

## 📁 Project Structure
- `src/components/`: Reusable UI sections (Hero, About, Projects, etc.)
- `src/pages/`: Individual page layouts
- `src/assets/`: Images and static assets
- `public/`: Public assets including `resume.pdf`

## 💻 Run Locally

1. **Clone the repository**:
```bash
git clone https://github.com/JAVVAJIDIVYA/portfolio.git
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
Go to `http://localhost:8080`

## 📄 Resume Setup
To update the resume:
1. Replace `public/resume.pdf` with your new file.
2. If the filename changes, update `resumePath` in `src/config/site.ts`.

## 🚀 Deployment (GitHub Pages)
This project is configured with GitHub Actions for automatic deployment.
1. Push your changes to the `main` branch.
2. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the site.
3. Ensure **Settings > Pages > Build and deployment > Source** is set to **GitHub Actions**.

## 🤝 Contact
- **Email**: javvajidivya333@gmail.com
- **LinkedIn**: [javvaji-divya-2b1330340](https://www.linkedin.com/in/javvaji-divya-2b1330340/)
- **GitHub**: [JAVVAJIDIVYA](https://github.com/JAVVAJIDIVYA)
