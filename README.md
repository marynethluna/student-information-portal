# Student Information Portal (SIP)

A modern, responsive single-page web application built with **React**, **React Router**, and **Reusable JSX Components**, developed according to the Laboratory Activity requirements and Grading Rubric.

---

## 📋 Laboratory Rubric Alignment & Features

| Rubric Criteria | Score | Implementation Details in this Project |
| :--- | :---: | :--- |
| **Project Structure** | 20 pts | Local Git repository properly initialized with configured Git username and email (`git config user.name`, `git config user.email`), modular folder structure (`src/components/`, `src/pages/`, `src/data/`), and clean `.gitignore`. |
| **Reusable Components** | 25 pts | Functional webpage using proper semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Implements modular, reusable `Navbar`, `StudentCard`, `CourseCard`, `StudentModal`, and `CourseModal` components. |
| **React Routing** | 30 pts | Client-side routing with `react-router-dom` v6 (`/`, `/students`, `/courses`, `/about`, and 404 fallback). Modern responsive CSS design system with interactive JavaScript features: live search filtering, multi-level dropdown filters, sort by GPA/name, dynamic counters, and interactive detail modals. |
| **Page Implementation** | 15 pts | Dual-branch Git version history: `no-style` branch maintains the unstyled HTML-only baseline, while `main` branch implements full styling, layout, and dynamic interactivity. Clear, descriptive commit history. |
| **Output & Display** | 10 pts | Verified local build and dev server. Ready for seamless connection to GitHub and multi-branch pushing (`git push -u origin main` and `git push -u origin no-style`). |

---

## 🗂️ Project Directory Structure

```text
student-portal/
├── public/                     # Static assets and icons
├── src/
│   ├── components/             # Reusable JSX components (Requirement 1 & 3)
│   │   ├── Navbar.jsx          # Reusable navigation bar with active links & mobile toggle
│   │   ├── StudentCard.jsx     # Reusable card for student profile display
│   │   ├── CourseCard.jsx      # Reusable card for course offering display
│   │   ├── StudentModal.jsx    # Interactive student profile & transcript modal
│   │   └── CourseModal.jsx     # Interactive course syllabus & enrollment modal
│   ├── pages/                  # Top-level routed views (Requirement 1 & 4)
│   │   ├── Home.jsx            # Welcome hero, dynamic KPI metrics, news & featured cards
│   │   ├── Students.jsx        # Searchable, filterable student directory with cards
│   │   ├── Courses.jsx         # Searchable, filterable course catalog with cards
│   │   └── About.jsx           # Mission, technical specs, FAQ accordion & inquiry form
│   ├── data/                   # Structured mock datasets
│   │   ├── studentsData.js     # Student records (GPA, major, year, enrolled courses)
│   │   └── coursesData.js      # Course records (credits, instructor, capacity, schedule)
│   ├── App.jsx                 # React Router provider and route layout (Requirement 5)
│   ├── App.css                 # Component and page styling
│   ├── index.css               # Global typography, color variables, and reset
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point with title and favicon
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration (0.0.0.0 host binding)
└── README.md                   # Documentation and submission guide
```

---

## 🌿 Git Branches & History

This repository is organized into two primary branches as required by the laboratory rubric:

1. **`no-style` branch**: Contains the unstyled, pure HTML-only semantic structure and React Routing.
2. **`main` branch**: Contains the complete, polished application with CSS styling, responsive layout, and dynamic JavaScript features (search, filter, sort, modals, inquiry feedback).

### Switching Between Branches
To review the unstyled version:
```bash
git checkout no-style
```

To return to the fully styled and interactive version:
```bash
git checkout main
```

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
```bash
npm run build
```

---

## 📤 Submitting to GitHub (Step-by-Step)

Follow these steps to connect your local repository to your GitHub account and push both branches:

### Step 1: Update your Git user info (if not already set)
```bash
git config user.name "Your Full Name"
git config user.email "your.email@university.edu"
```

### Step 2: Create a new empty repository on GitHub
1. Go to [https://github.com/new](https://github.com/new).
2. Name the repository `student-portal` (or your preferred name).
3. Leave "Initialize this repository with a README" **unchecked** (since your local repo already has one).
4. Click **Create repository**.
5. Copy your repository's HTTPS or SSH URL (e.g., `https://github.com/<username>/student-portal.git`).

### Step 3: Link your local repository to GitHub
```bash
# Add your GitHub repository as the remote origin
git remote add origin https://github.com/<your-username>/student-portal.git
```

### Step 4: Push both branches to GitHub
```bash
# Push the main branch
git push -u origin main

# Push the no-style branch
git push -u origin no-style
```

### Step 5: Verify on GitHub
Visit your repository link on GitHub and verify that:
- Both `main` and `no-style` branches appear in the branch dropdown.
- Your commits and files are displayed.
- Copy your repository URL (e.g. `https://github.com/<your-username>/student-portal`) for your submission.
