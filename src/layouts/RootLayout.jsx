import { Outlet } from "react-router-dom"

const RootLayout = () => {
	return (
		<div className="container">
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default RootLayout
