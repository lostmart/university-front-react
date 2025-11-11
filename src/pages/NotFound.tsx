import { JSX } from "react"
import { Link } from "react-router-dom"

const NotFound = (): JSX.Element => {
	return (
		<section
			className="d-flex flex-column justify-content-center align-items-center"
			style={{
				minHeight: "86dvh",
			}}
		>
			<h2>Not Found</h2>
			<p>sorry...</p>
			<Link to="/" className="btn btn-primary">
				Go Back Home
			</Link>
		</section>
	)
}

export default NotFound
