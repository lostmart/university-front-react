import { JSX } from "react"
import { Link } from "react-router-dom"
// import { UserContext } from "../context/UserContext"

const HeaderComp = (): JSX.Element => {
	// const { user } = useContext(UserContext)

	return (
		<header>
			<nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 py-4">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-bold text-blue-600">
							Horizon University
						</h1>
						<div className="space-x-6">
							<Link to="#" className="text-gray-600 hover:text-blue-600">
								Programs
							</Link>
							<Link to="/signup" className="text-gray-600 hover:text-blue-600">
								Admissions
							</Link>
							<Link to="/about" className="text-gray-600 hover:text-blue-600">
								About
							</Link>
							<button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
								Apply Now
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default HeaderComp
