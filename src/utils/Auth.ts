// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"

// // get the "token" sessionStorage
// export const getAccessToken = (): string | null => {
// 	return sessionStorage.getItem("token")
// }

// // evaluates of there is a token
// // export const isAuthenticated = () => {
// //     const token = getAccessToken();

// //     if (!token) {
// //         return false;
// //     } else {
// //        authUser(token)
// //     }
// // }

// const { setUser } = useContext(UserContext)

// const API_AUTH_USER = "https://dummyjson.com/user/me"

// export const authUser = async (token: string) => {
// 	/* providing token in bearer */
// 	try {
// 		const res = await fetch(API_AUTH_USER, {
// 			method: "GET",
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})
// 		const userData = await res.json()
// 		console.log(userData)
// 		setUser((prev) => ({
// 			...prev,
// 		}))
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// export const getUserIdFromToken = (): string | null => {
// 	const token = localStorage.getItem("token")
// 	if (!token) return null
// 	const payload = JSON.parse(atob(token.split(".")[1]))
// 	return payload.userId // or payload.sub
// }
