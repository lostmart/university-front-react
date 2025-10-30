import { Link } from "react-router-dom"

const CarrouselComp = () => {
	return (
		<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="./img/uni-01.jpg" alt="university" />

					<div className="container">
						<div className="carousel-caption text-start">
							<h2 className="display-5">Breaking Boundaries in Education</h2>
							<p>
								Explore the Infinite Possibilities at
								<span className="display-6">Horizon University</span>
							</p>
							<p>
								<Link to="/login" className="btn btn-lg btn-primary">
									Sign up today
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<img src="./img/uni-2.jpeg" alt="university two" />

					<div className="container">
						<div className="carousel-caption text-start">
							<h2 className="display-5">Empowering Minds, Inspiring Futures</h2>
							<p>
								Your Journey Begins at
								<span className="display-6">Horizon University</span>
							</p>
							<p>
								<Link to="/login" className="btn btn-lg btn-primary">
									Learn More
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<img src="./img/uni-03.jpeg" alt="another university" />

					<div className="container">
						<div className="carousel-caption text-start">
							<h2 className="display-5">Do somee stuff, then do some other</h2>
							<p>
								Do it now or never at
								<span className="display-6"> Horizon University</span>
							</p>
							<p>
								<Link to="/login" className="btn btn-lg btn-primary">
									Sign up today
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#myCarousel"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#myCarousel"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	)
}

export default CarrouselComp
