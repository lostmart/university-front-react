import { Link } from "react-router-dom"

const FooterComp = () => {
	const year = new Date().getFullYear()

	return (
		<footer className="container">
			<p className="float-end">
				<a href="/#">Back to top</a>
			</p>
			<p>
				&copy; {year} Company, Inc. &middot;
				<Link to="/">Privacy</Link>todd/t; <Link to="/">Terms</Link>
			</p>
		</footer>
	)
}

export default FooterComp
