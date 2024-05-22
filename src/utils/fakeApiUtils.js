const BASE_URL = "https://api.example.com"

export const fetchData = async (endpoint, options = {}) => {
	const url = endpoint

	try {
		const response = await fetch(url, options)
		const data = await response.json()
		if (!data) {
			throw Error("Error fetching data ...")
		}
		return data
	} catch (error) {
		console.error("Error fetching data:", error)
		throw error
	}
}
