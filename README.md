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

# Optional

SEED_DATABASE=true

````

### Generate Secrets
```bash
# Generate JWT_SECRET
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate API_KEY
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
````

---

## 📖 API Documentation

### Base URL

```
Local:      http://localhost:3000
Production: https://your-railway-url.railway.app
```

### Authentication

All endpoints (except health check) require an API key:

```bash
X-API-Key: your-api-key-here
```

Protected endpoints also require JWT:

```bash
Authorization: Bearer
```

---

### Endpoints

#### **Public Endpoints** (API Key required)

##### Register User

```http
POST /api/v1/auth/register
Content-Type: application/json
X-API-Key: your-api-key

{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+33612345678",
  "role": "customer"
}
```

**Response:**

```json
{
	"message": "User registered successfully",
	"token": "eyJhbGciOiJIUzI1NiIs...",
	"user": {
		"first_name": "John",
		"last_name": "Doe",
		"email": "user@example.com",
		"role": "customer",
		"is_verified": 0,
		"created_at": "2025-11-10T12:00:00.000Z"
	}
}
```

##### Login

```http
POST /api/v1/auth/login
Content-Type: application/json
X-API-Key: your-api-key

{
  "email": "admin@parisclassictours.fr",
  "password": "admin123"
}
```

**Response:**

```json
{
	"message": "Login successful",
	"token": "eyJhbGciOiJIUzI1NiIs...",
	"user": {
		"first_name": "Admin",
		"last_name": "User",
		"email": "admin@parisclassictours.fr",
		"role": "admin"
	}
}
```

##### Health Check

```http
GET /api/v1/health
```

**Response:**

```json
{
	"status": "ok",
	"timestamp": "2025-11-10T12:00:00.000Z"
}
```

---

#### **Protected Endpoints** (API Key + JWT required)

##### Get Current User Profile

```http
GET /api/v1/auth/me
X-API-Key: your-api-key
Authorization: Bearer
```

##### Update Profile

```http
PUT /api/v1/auth/profile
Content-Type: application/json
X-API-Key: your-api-key
Authorization: Bearer

{
  "first_name": "Updated",
  "last_name": "Name",
  "phone": "+33698765432"
}
```

---

#### **Admin Endpoints** (API Key + JWT + Admin Role)

##### List All Users

```http
GET /api/v1/users
X-API-Key: your-api-key
Authorization: Bearer
```

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

### Test Demo Accounts

Pre-seeded demo accounts for testing:

| Role     | Email                                | Password      |
| -------- | ------------------------------------ | ------------- |
| Admin    | `admin@parisclassictours.fr`         | `admin123`    |
| Driver   | `pierre.martin@parisclassictours.fr` | `driver123`   |
| Customer | `marie.lefevre@email.fr`             | `customer123` |

### Example cURL Requests

```bash
# Register
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "email": "test@example.com",
    "password": "Test123!",
    "first_name": "Test",
    "last_name": "User"
  }'

# Login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "email": "admin@parisclassictours.fr",
    "password": "admin123"
  }'

# Get Profile (use token from login)
curl -X GET http://localhost:3000/api/v1/auth/me \
  -H "X-API-Key: your-api-key" \
  -H "Authorization: Bearer "
```

---

## 🗄️ Database

### Schema

```prisma
model User {
  id           String    @id @default(uuid())
  firstName    String
  lastName     String
  email        String    @unique
  passwordHash String
  phone        String?
  role         String    @default("customer")
  isVerified   Boolean   @default(false)
  isActive     Boolean   @default(true)
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  @@map("users")
}
```

### Migrations

```bash
# Create migration
npx prisma migrate dev --name your_migration_name

# Deploy to production
npx prisma migrate deploy

# Reset database (dev only)
npx prisma migrate reset

# Seed database
npm run seed
```

### Prisma Studio

```bash
# Open database GUI
npx prisma studio
```

---

## 🚢 Deployment

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Docker

```bash
# Build image
docker build -t auth-microservice .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://..." \
  -e JWT_SECRET="your-secret" \
  -e API_KEY="your-key" \
  auth-microservice
```

### Environment Variables (Production)

Set these in your Railway/hosting dashboard:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Strong random secret (64+ chars)
- `API_KEY` - API authentication key
- `NODE_ENV=production`

---

## 🔒 Security

### Password Requirements

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (!@#$%^&\*)

### Rate Limiting

- Login: 5 attempts per 15 minutes
- Register: 3 accounts per hour per IP
- General API: 100 requests per 15 minutes

### Best Practices

- Passwords hashed with Argon2
- JWT tokens expire after 24 hours
- API keys for service authentication
- CORS enabled with configurable origins
- Helmet.js for security headers

---

## 🛠️ Development

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run seed         # Seed database
```

### Code Style

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

---

## 📊 Tech Stack

- **Runtime:** Node.js 18
- **Language:** TypeScript 5.9
- **Framework:** Express 5
- **Database:** PostgreSQL 15
- **ORM:** Prisma 6
- **Authentication:** JWT + Argon2
- **Testing:** Jest + Supertest
- **CI/CD:** GitHub Actions
- **Deployment:** Railway + Docker
- **Security:** Helmet, CORS, Rate Limiting

---

## 📝 License

ISC

---

## 👨‍💻 Author

**Martin P** ([@lostmart](https://github.com/lostmart))

- Portfolio: [Your Portfolio](https://yoursite.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

---

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Express Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [JWT Best Practices](https://curity.io/resources/learn/jwt-best-practices/)
- [Railway Docs](https://docs.railway.app/)

---

⭐ **Star this repo if you find it helpful!**
