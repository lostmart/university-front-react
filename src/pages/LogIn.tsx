// src/pages/Login.tsx
import { useState, useRef, useContext, JSX } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import ModalComp from "../components/ModalComp" 
import EyeClose from "../components/EyeClose"
import LittlEye from "../components/LittlEye"

type TFormData = {
	email: string
	password: string
}

type TFormError = {
	error: boolean
	status?: number
	message?: string
}

const Login = (): JSX.Element => {
	const [formData, setFormData] = useState<TFormData>({
		email: "",
		password: "",
	})

	const context = useContext(UserContext)
	if (!context) throw new Error("UserContext must be used within UserProvider")

	const { login } = context

	const [formError, setFormError] = useState<TFormError | null>(null)
	const [hidePass, setHidePass] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// Validate empty fields
		if (formData.email.trim() === "" || formData.password.trim() === "") {
			setFormError({
				error: true,
				message: "Please fill in all fields",
			})
			openModal()
			return
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(formData.email)) {
			setFormError({
				error: true,
				message: "Please enter a valid email address",
			})
			openModal()
			return
		}

		setIsLoading(true)

		try {
			// Call login from context (uses userApi internally)
			await login({
				email: formData.email,
				password: formData.password,
			})

			// Success - navigate to profile/dashboard
			navigate("/profile")
		} catch (error) {
			// Handle login error
			const errorMessage =
				error instanceof Error
					? error.message
					: "Login failed. Please try again."

			setFormError({
				error: true,
				message: errorMessage,
			})

			openModal()
		} finally {
			setIsLoading(false)
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

				{/* Email Field */}
				<div className="form-floating my-4">
					<input
						type="email"
						className="form-control"
						placeholder="Email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
						disabled={isLoading}
						autoComplete="email"
					/>
					<label htmlFor="email">Email</label>
				</div>

				{/* Password Field */}
				<div className="form-floating my-4 pass-cont">
					<input
						type={hidePass ? "password" : "text"}
						className="form-control"
						placeholder="Password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						disabled={isLoading}
						autoComplete="current-password"
					/>
					<label htmlFor="password">Password</label>
					<span onMouseDown={() => setHidePass(!hidePass)}>
						{hidePass ? <EyeClose /> : <LittlEye />}
					</span>
				</div>

				{/* Submit Button */}
				<button
					className="w-100 btn btn-lg btn-primary my-4"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ? (
						<>
							<span
								className="spinner-border spinner-border-sm me-2"
								role="status"
								aria-hidden="true"
							></span>
							Signing in...
						</>
					) : (
						"Sign in"
					)}
				</button>

				{/* Demo Credentials Helper (remove in production) */}
				<div className="mt-3 p-3 bg-light rounded text-start">
					<small className="text-muted">
						<strong>Demo Accounts:</strong>
						<br />
						Admin: admin@parisclassictours.fr / admin123
						<br />
						Customer: marie.lefevre@email.fr / customer123
					</small>
				</div>
			</form>

			{/* Error Modal */}
			<ModalComp
				ref={modalRef}
				message={formError?.message || ""}
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

export default Login
