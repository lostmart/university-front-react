# 🎓 University Frontend - Authentication Integration

Complete authentication system connecting your React frontend to your deployed microservice at:
**https://auth-microservice-ywe0.onrender.com/**

---

## 📦 Files Included

| File                      | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `authService.js`          | Main authentication service - handles all API calls  |
| `useAuth.js`              | React Hook + Context for managing auth state         |
| `Login.jsx`               | Login form component                                 |
| `SignUp.jsx`              | Registration form component (updated from your code) |
| `ProtectedRoute.jsx`      | Route guard for authenticated pages                  |
| `App.jsx`                 | Example routing setup                                |
| `.env.example`            | Environment variables template                       |
| `IMPLEMENTATION_GUIDE.md` | **READ THIS FIRST** - Complete step-by-step guide    |

---

## 🚀 Quick Start (3 Steps)

### 1. Install Dependencies

```bash
npm install react-router-dom
```

### 2. Add Your API Key

Create `.env` file in project root:

```env
VITE_API_KEY=your-api-key-here
```

Get your API key from your microservice environment variables.