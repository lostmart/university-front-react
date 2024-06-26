import { useState, useRef } from "react"
import ModalComp from "../components/ModalComp"
import "../signIn.scss"

type TFormData = {
	email: string
	password: string
	[key: string]: string // Index signature
}

// type TFormError = {
// 	type: string
// 	message: string
// 	[key: string]: string // Index signature
// }

const LogIn = () => {
	const [formData, setFormData] = useState<TFormData>({
		email: "",
		password: "",
	})

	// const [formError, setFormError] = useState({})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const modalRef = useRef<any>(null)

	const openModal = () => {
		modalRef.current?.show()
	}

	const closeModal = () => {
		modalRef.current?.hide()
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Handle form submission in frontend ! 🙄❌
		console.log(formData)
		if (formData.email !== "test@test.net" && formData.password !== "123") {
			console.log("error !!!")
			openModal()
		} else {
			console.log("you're good !!")
		}
	}

	return (
		<main className="container text-center m-auto form-signin">
			<form style={{ minHeight: "85dvh" }} onSubmit={handleSubmit}>
				<img
					className="mb-4"
					src="./img/favicons/android-chrome-192x192.png"
					alt="university icon"
				/>
				<h1 className="h3 mb-4 fw-normal">Please Log In</h1>

				<div className="form-floating my-4">
					<div className="invalid-feedback mb-2">nuncatemas</div>
					<input
						type="email"
						className="form-control"
						placeholder="name@example.com"
						name="email"
						required
						value={formData.email}
						onChange={handleChange}
					/>
					<label htmlFor="email">Email address</label>
				</div>
				<div className="form-floating my-4">
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						required
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<label htmlFor="password">Password</label>
				</div>

				<button className="w-100 btn btn-lg btn-primary my-4" type="submit">
					Sign in
				</button>
			</form>
			<ModalComp />
		</main>
	)
}

export default LogIn
