// slides
import slideOne from "../../assets/img/uni-01.jpg"
import slideTwo from "../../assets/img/uni-2.jpeg"
import slideThree from "../../assets/img/uni-03.jpeg"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"

const SwipperCarrousel = () => {
	const slides = [slideOne, slideTwo, slideThree]
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			{slides.map((slide) => {
				return (
					<SwiperSlide>
						<img
							src={slide}
							alt="horizon university"
							style={{ objectFit: "cover", width: "100%" }}
						/>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default SwipperCarrousel
