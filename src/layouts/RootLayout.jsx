import { Outlet } from "react-router-dom"
import HeaderComp from "../components/ui/HeaderComp"
import FooterComp from "../components/ui/FooterComp"

const RootLayout = () => {
	return (
		<div className="container">
			<HeaderComp />
			<main style={{ minHeight: "70dvh" }}>
				<Outlet />
			</main>
			<FooterComp />
		</div>
	)
}

export default RootLayout
