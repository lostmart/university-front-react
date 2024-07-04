import React from "react"
import { Link } from "react-router-dom"
import boyImg from "../assets/img/boy-student-2.webp"
import girlImg from "../assets/img/girl-student.webp"

import { useIsAuthenticated } from "../hooks/useIsAuthenticated"

const About: React.FC = () => {
	useIsAuthenticated()
	return (
		<main className="container">
			<h1 className="m-4">About Page</h1>
			<div className="col-lg-10 mx-auto">
				<p className="lead my-2">
					Welcome to <strong>Horizon University</strong>, where inclusivity
					meets excellence in the field of law. At Unity, we believe in opening
					doors to a world-class legal education for students from all walks of
					life. Our mission is to cultivate a diverse and dynamic community
					where every student is valued, supported, and encouraged to achieve
					their fullest potential.
				</p>
				<img src={boyImg} alt="student success" />
				<h2 className="my-4">Our Vision</h2>
				<p className="lead my-2">
					Unity University envisions a future where the legal profession
					reflects the rich diversity of our global community. We are committed
					to fostering an environment where students from various
					backgrounds—including different ethnicities, religions, socio-economic
					statuses, and life experiences—can come together to learn, grow, and
					lead. Our goal is to equip students with not only legal knowledge but
					also the cultural competence to serve and advocate for all members of
					society.
				</p>
				<h2 className="my-4">Academic Excellence</h2>
				<p className="lead my-2">
					Our law program is designed to challenge students academically while
					providing them with the practical skills necessary for a successful
					legal career. From constitutional law to international human rights,
					our curriculum covers a broad spectrum of legal disciplines. Our
					faculty comprises respected scholars and practitioners who bring
					real-world experience and a passion for teaching to the classroom.
				</p>
				<img src={girlImg} alt="student excellence" />
				<h2 className="my-4">Join Us</h2>
				<p className="lead my-2">
					At <strong>Horizon University</strong>, you'll find more than just a
					law school—you'll find a community that champions inclusivity,
					embraces diversity, and fosters the leaders of tomorrow. We invite you
					to explore our programs, meet our community, and see how Unity can be
					part of your legal journey. Join us in shaping the future of law,
					together.
				</p>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center m-5">
					<Link to="/logIn" className="btn btn-outline-primary me-2">
						Login
					</Link>
					<Link to="/signUp" className="btn btn-primary">
						Sign-up
					</Link>
				</div>
			</div>
		</main>
	)
}

export default About
