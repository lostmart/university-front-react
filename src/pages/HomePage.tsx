import HeroSection from "@/components/HeroSection"
import ParallaxBackground from "../components/ParallaxBackground"
import FeatureComp from "@/components/FeatureComp"
import ProgramsComp from "@/components/ProgramsComp"

const HomePage = () => {
	return (
		<>
			<ParallaxBackground />
			<div className="min-h-screen relative">
				<HeroSection />

				<FeatureComp />

				<ProgramsComp />

				{/* CTA */}
				<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
					<div className="max-w-4xl mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-6">
							Ready to Start Your Journey?
						</h2>
						<p className="text-xl mb-8 text-blue-100">
							Applications for Fall 2026 are now open
						</p>
						<div className="flex justify-center gap-4">
							<button className=" text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
								Apply Now
							</button>
							<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
								Schedule Tour
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default HomePage
