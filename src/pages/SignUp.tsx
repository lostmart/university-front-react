import "../signIn.scss"

const SignUp = () => {
	return (
		<main className="text-center m-auto form-signin">
			<form id="newUserForm">
				<img
					className="mb-4"
					src="./img/favicons/android-chrome-192x192.png"
					alt="university icon"
				/>
				<h1 className="h3 mb-4 fw-normal">Sign Up Form</h1>

				<div className="invalid-feedback mb-2">...</div>

				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="name@example.com"
						required
					/>
					<label htmlFor="email">Email address</label>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="userName"
						placeholder="User Name"
						required
					/>
					<label htmlFor="userName">Username</label>
				</div>

				<div className="mb-3">
					<label htmlFor="birthDate">Date of Birth</label>
					<input type="date" className="form-control" id="birthDate" required />
				</div>

				<div className="form-floating mb-4">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						required
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>

				<div className="form-floating mb-2">
					<input
						type="password"
						className="form-control"
						id="confirmFloatingPassword"
						placeholder="Confirm Password"
						required
					/>
					<label htmlFor="confirmFloatingPassword">Confirm Password</label>
				</div>

				<div className="avatar-container">
					<img
						src="./img/user-default-avatar.png"
						alt="user avatar"
						className="avatar-img"
					/>
					<img
						role="button"
						src="./img/camera.svg"
						alt="camera edit"
						className="camera-edit"
						data-bs-toggle="modal"
						data-bs-target="#formModal"
						style={{ left: "50%", transform: "translateX(-50%)" }}
					/>
					<input type="text" className="d-none" id="imageUrl" />
				</div>

				<button
					className="w-100 btn btn-lg btn-primary submit mt-3 mb-5"
					type="submit"
				>
					Sign in
				</button>
			</form>
		</main>
	)
}

export default SignUp
