import { useRef, useState } from "react"
import ModalComp from "../components/ModalComp"

type TFormData = {
	email: string
	password: string
	[key: string]: string // Index signature
}

// type TFormError = {
// 	message: string
// 	[key: string]: string // Index signature
// }

const ParentComponent = (): JSX.Element => {
	const [formData, setFormData] = useState<TFormData>({
		email: "",
		password: "",
	})

	// const [formError, setFormError] = useState<TFormError>({
	// 	message: "",
	// })

	// const navigate = useNavigate() // Initialize useNavigate

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault()
	// 	// Handle form submission in frontend ! 🙄❌
	// 	if (formData.email !== "test@test.net" || formData.password !== "123") {
	// 		setFormData({
	// 			...formData,
	// 			password: "",
	// 		})
	// 		setFormError({
	// 			message: "Password or email wrong !!",
	// 		})
	// 		openModal()
	// 	} else {
	// 		navigate("/profile")
	// 		setLoggedIn(true)
	// 	}
	// }

	const modalRef = useRef<{ show: () => void; hide: () => void } | null>(null)

	// const openModal = () => {
	// 	modalRef.current?.show()
	// }

	return (
		<main className="container text-center m-auto form-signin">
			<form style={{ minHeight: "85dvh" }} onSubmit={() => {}}>
				<img
					className="mb-4"
					src="./img/favicons/android-chrome-192x192.png"
					alt="university icon"
				/>
				<h1 className="h3 mb-4 fw-normal">Please Log In</h1>

				<div className="form-floating my-4">
					<input
						type="text"
						className="form-control"
						placeholder="User Name"
						name="username"
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
				</div>

				<button className="w-100 btn btn-lg btn-primary my-4" type="submit">
					Sign in
				</button>
			</form>
			<ModalComp ref={modalRef} message={""} />
		</main>
	)
}

export default ParentComponent
