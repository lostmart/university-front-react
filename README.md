# University Frontend - React

## Features

- User Authentication: Secure login and registration for users.
- Student Management: CRUD operations for managing student data.
- Course Management: CRUD operations for managing course information.
- Responsive Design: Optimized for both desktop and mobile devices.
- API Integration: Communicates with a backend API for data persistence.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/lostmart/university-front-react.git
```

2. Navigate to the project directory:

```bash
cd university-front-react
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
   Create a .env file in the root directory and add the necessary environment variables as specified in the Environment Variables section.

5. Start the development server:

```bash
npm start
```

## Usage

Once the development server is running, you can access the application in your browser at http://localhost:3000.

## Environment Variables

The following environment variables need to be set in a .env file at the root of the project:

- `REACT_APP_API_URL:` The base URL of the backend API.

Example .env file:

```bash
REACT_APP_API_URL=http://localhost:5000/api
```

## Project Structure

The project structure is as follows:

```bash
university-front-react/
├── public/             # Public assets
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── services/       # API service functions
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   ├── App.css         # Global styles
│   └── index.css       # Global styles
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # NPM package configuration
└── README.md           # Project README file
```
