import "../signIn.scss"

const LogIn = () => {
	return (
		<main className="container text-center m-auto form-signin">
			<form id="logInForm" style={{ minHeight: "85dvh" }}>
				<img
					className="mb-4"
					src="./img/favicons/android-chrome-192x192.png"
					alt="university icon"
				/>
				<h1 className="h3 mb-4 fw-normal">Please Log In</h1>
				<div className="invalid-feedback mb-2">...</div>

				<div className="form-floating my-4">
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="name@example.com"
						required
					/>
					<label htmlFor="email">Email address</label>
				</div>
				<div className="form-floating my-4">
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Password"
						required
					/>
					<label htmlFor="password">Password</label>
				</div>

				<button className="w-100 btn btn-lg btn-primary my-4" type="submit">
					Sign in
				</button>
			</form>
		</main>
	)
}

export default LogIn
