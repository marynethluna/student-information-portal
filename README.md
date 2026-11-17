# Student Information Portal (SIP)

A responsive, modular single-page application built with React, React Router, and reusable JSX components.

## Branch: `no-style`
This branch contains the baseline HTML-only / unstyled structural implementation:
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, `<address>`, etc.)
- Reusable components: `Navbar`, `StudentCard`, `CourseCard`
- Page routing via React Router (`/`, `/students`, `/courses`, `/about`)
- Unstyled presentation to demonstrate pure component hierarchy and semantic structure.

*Note: For the fully styled and interactive application with modern CSS and dynamic JavaScript features, switch to the `main` branch (`git checkout main`).*

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
