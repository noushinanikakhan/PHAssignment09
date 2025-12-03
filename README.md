## 🎯 SkillSwap – Local Skill Exchange Platform

## 🌐 Live Demo:
👉 https://ph-assignment-09-skillswap.web.app/

## 📖 Project Overview

SkillSwap is an interactive platform that connects individuals within their local communities to exchange skills and knowledge.
Whether you want to learn guitar, practice a new language, get help with coding, or teach yoga — SkillSwap makes it simple to find local experts and share your expertise in a collaborative and friendly environment.

## ✨ Key Features
### 🔐 Authentication & Security

Secure Email/Password Authentication

Google Login for quick access

Strong Password Validation

Profile Management (name, photo, email)

Protected Routes for authenticated users only

### 🎯 Skill Management

Browse Popular Skills

Rating-Based Sorting

Detailed skill descriptions

Diverse categories:
Music, Coding, Yoga, Languages, Art & more

Session Booking (with form validation)

### 🎨 User Experience

Fully Responsive UI (mobile → desktop)

Smooth navigation with React Router

Toast Notifications

AOS animations & smooth transitions

Swiper.js — modern hero slider

### 🔒 Security & Performance

Firebase Authentication

Environment variable protection

Error handling for clean UX

Fast performance with Vite

## 🛠️ Technology Stack
### Frontend
```
json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.4"
}
```
### Styling & UI
```
json
{
  "tailwindcss": "^4.1.15",
  "daisyui": "^5.3.8"
}
```

### Development Tools
```
{
  "vite": "^7.1.7",
  "eslint": "^9.36.0",
  "@vitejs/plugin-react": "^5.0.4"
}
```

## 📦 NPM Packages Used
### Core Dependencies

React

React Router

Firebase

### Animation & Effects

AOS (Animate On Scroll)

Animate.css

Swiper.js

### UI & Notifications

React Toastify

Tailwind CSS

DaisyUI

## 🎨 Animation Features
### AOS

Scroll-triggered animations

Fade & zoom effects

Smooth card animations

### Animate.css

Button and card hover animations

CSS-driven transitions

### Swiper.js

Auto-slide hero carousel

Responsive images

Touch-friendly navigation

### React Toastify

Success and error notifications

Custom positions

Clean mobile UI

## 🚀 Getting Started
### Prerequisites

Node.js 18+

Firebase account

Git installed

## 1️⃣ Clone the Repository
```
bash
git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-noushinanikakhan.git
cd skillswap
```

### 2️⃣ Install Dependencies
```
bash
npm install
```

### 3️⃣ Create .env File
```
ini
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Run the Project
```
bash
npm run dev
```

👉 Open browser at http://localhost:5173

## 📁 Project Structure
```
skillswap/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # App pages (Home, Login, Skills, Profile)
│   ├── firebase/          # Firebase config
│   ├── styles/            # Global styles
│   └── utils/             # Helpers
├── public/                # Static assets
└── package.json           # Dependencies
```

### 🌐 Deployment (Firebase Hosting)
```
bash
npm run build
firebase deploy
```

### Environment Configuration

Enable Email/Password & Google login in Firebase

Add environment variables for production

## 🎯 Key Components
### Authentication Flow

Login / Register

Google OAuth

Protected pages

### Skill Management

Skill listings

Detailed skill pages

Booking form

### User Interface

Mobile-first design

AOS animations

Accessible components

## 🔧 Customization
### Add New Skill Categories

Update skills.json

Add new UI cards

Adjust filtering

### Add New Animations

Modify AOS settings

Add Animate.css classes

### Feature Extensions

Real-time messaging

Payments

Reviews & ratings system

### 🤝 Contributing

We welcome contributions!
```
bash
# 1. Fork the repo
# 2. Create a branch
git checkout -b feature/amazing-feature

# 3. Commit changes
git commit -m "Add amazing feature"

# 4. Push branch
git push origin feature/amazing-feature
```

Submit a Pull Request 🎉

## 📄 License

This project is licensed under the MIT License.

## 👥 Author

Noushin Anika Khan
GitHub: @noushinanikakhan

## 🙏 Acknowledgments

Firebase

Tailwind CSS & DaisyUI

React Community

Programming Hero

### 🌟 Share Skills. Build Community. Grow Together.

Connect with local experts and unlock new learning opportunities.