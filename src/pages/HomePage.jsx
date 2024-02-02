import HorizontalSeparator from "../components/atoms/HorizontalSeparator"
import TitleComp from "../components/atoms/TitleComp"
import SwipperCarrousel from "../components/ui/SwipperCarrousel"

import styles from "./HomePage.module.scss"

import grandImg from "../assets/img/grand.jpg"
import grandImg2 from "../assets/img/grand-02.jpg"
import grandImg3 from "../assets/img/grand-03.jpg"

const Home = () => {
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
			<section className={styles.homeSection}>
				<article style={{ padding: "10px" }}>
					<h2 className={styles.titleStyle}>
						First featurette heading.
						<span className={styles.titleMuted}>It’ll blow your mind.</span>
					</h2>
					<p style={paragraphStyle}>
						Some great placeholder content for the first featurette here.
						Imagine some exciting prose here.
					</p>
				</article>
				<figure>
					<img src={grandImg} alt="" />
				</figure>
			</section>
			<HorizontalSeparator />
			<section className={styles.homeSection}>
				<figure>
					<img src={grandImg2} alt="" />
				</figure>
				<article style={{ padding: "10px" }}>
					<h2 className={styles.titleStyle}>
						First featurette heading.
						<span className={styles.titleMuted}>It’ll blow your mind.</span>
					</h2>
					<p style={paragraphStyle}>
						Some great placeholder content for the first featurette here.
						Imagine some exciting prose here.
					</p>
				</article>
			</section>
			<HorizontalSeparator />
			<section className={styles.homeSection}>
				<article style={{ padding: "10px" }}>
					<h2 className={styles.titleStyle}>
						First featurette heading.
						<span className={styles.titleMuted}>It’ll blow your mind.</span>
					</h2>
					<p style={paragraphStyle}>
						Some great placeholder content for the first featurette here.
						Imagine some exciting prose here.
					</p>
				</article>
				<figure>
					<img src={grandImg3} alt="" />
				</figure>
			</section>
		</>
	)
}

export default Home
