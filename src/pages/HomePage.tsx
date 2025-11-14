import HeroSection from "@/components/HeroSection"
import ParallaxBackground from "../components/ParallaxBackground"
import FeatureComp from "@/components/FeatureComp"
import ProgramsComp from "@/components/ProgramsComp"
import CallToAction from "@/components/CallToAction"

const HomePage = () => {
	return (
		<>
			<ParallaxBackground />
			<div className="min-h-screen relative">
				<HeroSection />

				<FeatureComp />

				<ProgramsComp />

				<CallToAction />
			</div>
		</>
	)
}

export default HomePage
