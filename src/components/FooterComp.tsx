const FooterComp = () => {
	const year = new Date().getFullYear()

	return (
		<footer className="container">
			<p className="float-end">
				<a href="#">Back to top</a>
			</p>
			<p>
				&copy; {year} Company, Inc. &middot;
				<a href="#">Privacy</a> &middot; <a href="#">Terms</a>
			</p>
		</footer>
	)
}

export default FooterComp
