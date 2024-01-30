import HorizontalSeparator from "../components/atoms/HorizontalSeparator"
import TitleComp from "../components/atoms/TitleComp"
import SwipperCarrousel from "../components/ui/SwipperCarrousel"

import grandImg from "../assets/img/grand.jpg"
import grandImg2 from "../assets/img/grand-02.jpg"
import grandImg3 from "../assets/img/grand-03.jpg"

const Home = () => {
	const titleStyle = {
		fontSize: "50px",
		letterSpacing: "-0.05rem",
		lineHeight: "1",
		fontWeight: "200",
	}
	const titleMuted = {
		color: "#6c757d",
		fontSize: "46px",
		fontWeight: "400",
	}
	const paragraphStyle = {
		fontSize: "1.25rem",
		lineHeight: 1.5,
		marginTop: "1em",
	}
	return (
		<>
			<TitleComp
				titleText="Horizon University"
				titleType="h1"
				nameOfClass="mainTitle"
			/>
			<SwipperCarrousel />
			<HorizontalSeparator />
			<section style={{ display: "flex" }}>
				<article style={{ padding: "10px" }}>
					<h2 style={titleStyle}>
						First featurette heading.
						<span style={titleMuted}>It’ll blow your mind.</span>
					</h2>
					<p style={paragraphStyle}>
						Some great placeholder content for the first featurette here.
						Imagine some exciting prose here.
					</p>
				</article>
				<figure style={{ padding: "10px", width: "50%" }}>
					<img src={grandImg} alt="" />
				</figure>
			</section>
			<HorizontalSeparator />
			<section style={{ display: "flex" }}>
				<figure style={{ padding: "10px", width: "50%" }}>
					<img src={grandImg2} alt="" />
				</figure>
				<article style={{ padding: "10px" }}>
					<h2 style={titleStyle}>
						First featurette heading.
						<span style={titleMuted}>It’ll blow your mind.</span>
					</h2>
					<p style={paragraphStyle}>
						Some great placeholder content for the first featurette here.
						Imagine some exciting prose here.
					</p>
				</article>
			</section>
			<HorizontalSeparator />
			<section style={{ display: "flex" }}>
				<article style={{ padding: "10px" }}>
					<h2 style={titleStyle}>
						First featurette heading.
						<span style={titleMuted}>It’ll blow your mind.</span>
					</h2>
					<p style={paragraphStyle}>
						Some great placeholder content for the first featurette here.
						Imagine some exciting prose here.
					</p>
				</article>
				<figure style={{ padding: "10px", width: "50%" }}>
					<img src={grandImg3} alt="" />
				</figure>
			</section>
		</>
	)
}

export default Home
