import { NavLink } from "react-router-dom"

import styles from "./Swipper.module.scss"

// slides
import slideOne from "../../assets/img/uni-01.jpg"
import slideTwo from "../../assets/img/uni-2.jpeg"
import slideThree from "../../assets/img/uni-03.jpeg"
import slideFour from "../../assets/img/uni-04.jpeg"
import slideFive from "../../assets/img/uni-05.webp"
import slideSix from "../../assets/img/uni-06.webp"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Navigation } from "swiper/modules"

const SwipperCarrousel = () => {
	const slides = [
		{
			imgUrl: slideOne,
			title: "Breaking Boundaries in Education",
			description: "Your Journey Begins at Horizon University",
		},
		{
			imgUrl: slideTwo,
			title: "Empowering Minds, Inspiring Futures",
			description: "Your Journey Begins at Horizon University",
		},
		{
			imgUrl: slideThree,
			title: "Do somee stuff, then do some other",
			description: "Do it now or never at Horizon University",
		},
		{
			imgUrl: slideFour,
			title: "Breaking Boundaries in Education",
			description: "Your Journey Begins at Horizon University",
		},
		{
			imgUrl: slideFive,
			title: "Empowering Minds, Inspiring Futures",
			description: "Your Journey Begins at Horizon University",
		},
		{
			imgUrl: slideSix,
			title: "Empowering Minds, Inspiring Futures",
			description: "Your Journey Begins at Horizon University",
		},
	]
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={20}
			centeredSlides={true}
			loop={true}
			// autoplay={{ delay: 2300 }}
			pagination={{
				clickable: true,
			}}
			breakpoints={{
				620: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
			}}
			navigation={true}
			modules={[Navigation, Autoplay]}
			className="mySwiper"
		>
			{slides.map((slide, i) => {
				return (
					<SwiperSlide key={i}>
						<figure className={styles.figure}>
							<img
								src={slide.imgUrl}
								alt={slide.title}
								className={styles.swiperImg}
							/>
							<figcaption className={styles.caption}>
								<h2>{slide.title}</h2>
								<p>{slide.description}</p>
								<NavLink
									to="/"
									className="btn btn-primary-outline"
									style={{ width: "82px" }}
								>
									Login
								</NavLink>
							</figcaption>
						</figure>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default SwipperCarrousel
