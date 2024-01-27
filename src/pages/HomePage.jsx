import TitleComp from "../components/atoms/TitleComp"
import SwipperCarrousel from "../components/ui/SwipperCarrousel"

const Home = () => {
	return (
		<>
			<TitleComp
				titleText="Horizon University"
				titleType="h1"
				nameOfClass="mainTitle"
			/>
			<SwipperCarrousel />
		</>
	)
}

export default Home
