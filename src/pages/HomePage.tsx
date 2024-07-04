import { useContext, useEffect, useCallback } from "react"
import CarrouselComp from "../components/CarrouselComp"
import FeaturesComp from "../components/FeaturesComp"

import { TFullUser } from "../types/User"

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
		message = "Unknown Error..."
	}

	return message
}

const authUser = async (token: string): Promise<TFullUser | Error> => {
	const API_AUTH_USER = "https://dummyjson.com/user/me"

	try {
		const res = await fetch(API_AUTH_USER, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const userData: TFullUser = await res.json()
		return userData
	} catch (error) {
		console.log(error)
		return new Error(getErrorMessage(error))
	}
}

const Home = (): JSX.Element => {
	const { setUser } = useContext(UserContext)

	const isAuthenticated = useCallback(async () => {
		const token = sessionStorage.getItem("token")

		// if no token in sessionStorage stop here
		if (!token) {
			return false
		} else {
			const user = await authUser(token)

			if (!(user instanceof Error)) {
				setUser((prev) => ({
					...prev,
					//...user,
					logged: true,
				}))
			} else {
				return false
			}
		}
	}, [setUser])

	useEffect(() => {
		isAuthenticated()
	}, [isAuthenticated])

	return (
		<main aria-label="Horizon University">
			<h1 aria-hidden="true" className="hidden-h1">
				Horizon University
			</h1>
			<CarrouselComp></CarrouselComp>

			<FeaturesComp />
		</main>
	)
}

export default Home
