const HeaderComp = (): JSX.Element => {
	return (
		<header className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
			<a
				href="/"
				className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
			>
				<img
					src="./img/favicons/android-chrome-192x192.png"
					alt="horizon university"
					className="university_icon"
				/>
			</a>

			<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-light">
				<li>
					<a href="#" className="nav-link px-2 link-light">
						Home
					</a>
				</li>
				<li>
					<a href="#features" className="nav-link px-2 link-light">
						Features
					</a>
				</li>
			</ul>

			<div className="col-md-3 text-end login-section">
				<a href="./logIn.html" className="btn btn-outline-primary me-2">
					Login
				</a>
				<a href="./signUp.html" className="btn btn-primary">
					Sign-up
				</a>
			</div>
		</header>
	)
}

export default HeaderComp
