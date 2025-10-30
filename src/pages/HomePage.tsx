import CarrouselComp from "../components/CarrouselComp"
import FeaturesComp from "../components/FeaturesComp"

import { useIsAuthenticated } from "../hooks/authService"

const Home = (): JSX.Element => {
	useIsAuthenticated()
	return (
		<main aria-label="Horizon University">
			<h1 aria-hidden="true" className="hidden-h1">
				Horizon University
			</h1>
			<CarrouselComp></CarrouselComp>

			<FeaturesComp />
		</main>
	)
}

export default Home
