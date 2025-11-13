import { JSX } from "react"
import { Link } from "react-router-dom"
import ThemeSelectComp from "./ui/ThemeSelectComp"
// import { UserContext } from "../context/UserContext"

const HeaderComp = (): JSX.Element => {
	// const { user } = useContext(UserContext)

	return (
		<header>
			<nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm dark:shadow-gray-800/50 sticky top-0 z-50 transition-colors duration-200">
				<div className="container mx-auto px-4 py-4">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
							Horizon University
						</h1>
						<div className="flex gap-4 justify-center items-center">
							<Link
								to="#"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
							>
								Programs
							</Link>
							<Link
								to="/signup"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
							>
								Admissions
							</Link>
							<Link
								to="/about"
								className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
							>
								About
							</Link>
							<button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
								Apply Now
							</button>
							<ThemeSelectComp />
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default HeaderComp
