import { useContext, useRef, useState } from "react"
import ModalComp from "../components/ModalComp"
import { useNavigate } from "react-router-dom"
import { TFormData } from "../types/FormData"
import { TFormError } from "../types/FormError"
import { UserContext } from "../context/UserContext"

const getErrorMessage = (error: unknown): string => {
	let message: string

	if (error instanceof Error) {
		message = error.message
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message)
	} else if (typeof error === "string") {
		message = error
	} else {
		message = "Unknown Error...git status"
	}

	return message
}

const ParentComponent = (): JSX.Element => {
	const [formData, setFormData] = useState<TFormData>({
		username: "",
		password: "",
	})

	const { setUser } = useContext(UserContext)

	const [formError, setFormError] = useState<TFormError | null>(null)

	const navigate = useNavigate() // Initialize useNavigate

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	// emilys
	// emilyspass
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// test empty
		if (formData.username.trim() === "" || formData.password.trim() === "") {
			return false
		}
		try {
			const API_ENDPOINT = "https://dummyjson.com/auth/login"
			const res = await fetch(API_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: formData.username,
					password: formData.password,
					expiresInMins: 30,
				}),
			})
			// if (res.ok) {
			// 	console.log(res, "all good !!")
			// }
			const data = await res.json()

			// handle error
			if (data.message === "Invalid credentials") {
				const { message } = data
				setFormError((prev) => ({
					...prev,
					message,
				}))

				openModal()
				return
			}
			// if no errors navigate and setUser in Context
			const { token } = data
			sessionStorage.setItem("token", token)
			navigate("/profile")
			// console.log(data)
			setUser((prev) => ({
				...prev,
				...data,
				logged: true,
			}))
		} catch (error) {
			console.log(error, "no no!")
			return {
				error: getErrorMessage(error),
			}
		}
	}

	const modalRef = useRef<{ show: () => void; hide: () => void } | null>(null)

	const openModal = () => {
		modalRef.current?.show()
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
					<input
						type="text"
						className="form-control"
						placeholder="User Name"
						name="username"
						id="username"
						value={formData.email}
						onChange={handleChange}
					/>
					<label htmlFor="username">User Name</label>
				</div>
				<div className="form-floating my-4">
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						id="password"
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
			<ModalComp
				ref={modalRef}
				message={formError?.message ? formError.message : ""}
				onClick={() => {
					setFormError(null)
					setFormData((prev) => ({
						...prev,
						password: "",
					}))
				}}
			/>
		</main>
	)
}

export default ParentComponent
