import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

// components
import NavBar from "./components/ui/NavBar"

// pages
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"

import "./styles.scss"

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	)
}

export default App
