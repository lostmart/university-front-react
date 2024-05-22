import { useState, useEffect } from "react"

import { fetchData } from "../utils/fakeApiUtils"

const Login = () => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				const result = await fetchData("mockData/users.json")
				setTimeout(() => {
					setData(result)
					setLoading(false)
					setError(null)
				}, 1500)
			} catch (error) {
				setError(error)
				setData(null)
				setLoading(false)
				console.log(error)
			}
		}

		fetchDataFromApi()
	}, [])

	return (
		<div className="container">
			<h2>login page</h2>
			{loading && "loading ...."}
			{error && "something terrible happened !!!"}
			{data && "everything is beautiful !"}
		</div>
	)
}

export default Login
