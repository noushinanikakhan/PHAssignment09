# 🎯 SkillSwap - Local Skill Exchange Platform

**Live Demo:** [https://ph-assignment-09-skillswap.web.app/](https://ph-assignment-09-skillswap.web.app/)  

## 📖 Project Overview

SkillSwap is an interactive platform that connects individuals within their local communities to exchange skills and knowledge. Whether you want to learn guitar, practice a new language, get coding help, or teach yoga, SkillSwap makes it easy to find local experts and share your own expertise in a collaborative environment.

## ✨ Key Features

### 🔐 Authentication & Security
- **User Registration & Login** - Secure email/password authentication
- **Google Social Login** - Quick access with Google accounts
- **Password Validation** - Strong password requirements for security
- **Profile Management** - Customizable profiles with photos and display names
- **Protected Routes** - Secure access to authenticated content

### 🎯 Skill Management
- **Browse Popular Skills** - Discover trending skills in your area
- **Rating-Based Sorting** - Find the best instructors based on user ratings
- **Detailed Listings** - Comprehensive skill information with provider details
- **Diverse Categories** - Music, Language, Coding, Yoga, and many more
- **Session Booking** - Easy scheduling with form validation

### 🎨 User Experience
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Interactive Navigation** - Seamless user journey with profile integration
- **Toast Notifications** - Real-time feedback for user actions
- **Smooth Animations** - Enhanced visual experience with AOS and Animate.css
- **Image Sliders** - Engaging visual content with Swiper.js

### 🔒 Security & Performance
- **Firebase Authentication** - Enterprise-grade security
- **Environment Variables** - Secure configuration management
- **Error Handling** - User-friendly error messages
- **Optimized Performance** - Fast loading and smooth interactions

## 🛠️ Technology Stack

### Frontend
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.4"
}
```
### Styling & UI
```json

{
  "tailwindcss": "^4.1.15",
  "daisyui": "^5.3.8"
}
```
Development Tools
```json

{
  "vite": "^7.1.7",
  "eslint": "^9.36.0",
  "@vitejs/plugin-react": "^5.0.4"
}
```

## 📦 NPM Packages Used

### Core Dependencies
- **React** - Modern UI framework with latest features
- **React Router** - Client-side routing and navigation
- **Firebase** - Backend services and authentication

### Animation & Effects
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Animate.css** - Cross-browser CSS animations
- **Swiper** - Modern touch slider for carousels

### UI & Notifications
- **React Toastify** - Beautiful toast notifications
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS

## 🎨 Animation Features

### AOS (Animate On Scroll)
- Scroll-triggered animations for skill cards
- Fade-in effects for page sections
- Slide animations for enhanced engagement

### Animate.css
- Pre-built CSS animations for interactive elements
- Hover effects on buttons and cards
- Cross-browser compatibility

### Swiper.js
- Hero section sliders with smooth transitions
- Responsive image carousels for skill galleries
- Touch-friendly navigation

### React Toastify
- Success notifications for form submissions
- Error messages for user feedback
- Customizable toast positions and styles

## 🚀 Getting Started
### Prerequisites
- Node.js (version 18 or higher recommended)
- Firebase account for authentication
- Git for version control


## Installation
1. Clone the repository

```bash
bash
git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-noushinanikakhan.git
cd skillswap
```

2. Install dependencies
```bash
bash
npm install
```

3. Environment Setup

Create .env file in the root directory:
```env
env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start development server
```bash
bash
npm run dev
```

5. Access the application
Navigate to http://localhost:5173 in your browser

### Available Scripts
- npm run dev - Start development server with hot reload
- npm run build - Create optimized production build


## 📁 Project Structure
```
text
skillswap/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── auth/          # Authentication components
│   │   ├── common/        # Shared components
│   │   └── ui/            # Basic UI elements
│   ├── pages/             # Route components
│   │   ├── Home/          # Landing page
│   │   ├── Auth/          # Authentication pages
│   │   ├── Skills/        # Skill management
│   │   └── Profile/       # User profile
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── firebase/          # Firebase configuration
│   └── styles/            # Global styles
├── public/                # Static assets
└── package.json          # Project dependencies
```

## 🌐 Deployment
### Firebase Hosting
```bash
bash
# Build the project
npm run build
# Deploy to Firebase
firebase deploy
```
### Environment Configuration
- Configure Firebase project in Firebase Console
- Set up authentication providers (Email/Password, Google)
- Update environment variables for production

## 🎯 Key Components
### Authentication Flow
- **Login/Register** - Secure user authentication
- **Social Login** - Google OAuth integration
- **Protected Routes** - Route guarding for authenticated content

### Skill Management
- **Skill Listings** - Browse available skills with filters
- **Skill Details** - Comprehensive skill information
- **Booking System** - Session scheduling and management

### User Interface
- **Responsive Design** - Mobile-first approach
- **Interactive Elements** - Engaging user interactions
- **Accessibility** - WCAG compliant components

## 🔧 Customization
### Adding New Skill Categories
- Update category list in constants
- Add corresponding icons and images
- Update filtering logic

### Styling Customization
- Modify Tailwind CSS configuration
- Customize DaisyUI themes
- Add custom animations

### Feature Extensions
- Real-time messaging
- Payment integration
- Advanced search filters
-Rating and review system

## 🤝 Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful commit messages
- Write clean, documented code
- Test changes thoroughly

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors
**Noushin Anika Khan** - noushinanikakhan

## 🙏 Acknowledgments
- **Firebase** - For robust authentication and hosting services
- **Tailwind CSS** - For the excellent utility-first CSS framework
- **React Community** - For comprehensive documentation and resources
- **Programming Hero** - For guidance and learning resources

<div align="center">
🎯 Share Skills. Build Community. Grow Together. 🌟

Connect with local experts and unlock new learning opportunities

</div> ```
