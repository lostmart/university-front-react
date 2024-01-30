import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"

// Pages
import Home from "./pages/HomePage.jsx"
import About from "./pages/AboutPage.jsx"
import LogInPage from "./pages/LogInPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import NotFound from "./pages/NotFound.jsx"

//layouts
import RootLayout from "./layouts/RootLayout.jsx"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="logIn" element={<LogInPage />} />
			<Route path="signUp" element={<SignUpPage />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

export default router
