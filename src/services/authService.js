// src/services/authService.js

const API_BASE_URL = "https://auth-microservice-ywe0.onrender.com/api/v1"
const API_KEY = import.meta.env.VITE_API_KEY // Add this to your .env file

/**
 * Authentication Service
 * Handles all authentication-related API calls to the microservice
 */
class AuthService {
	/**
	 * Get common headers including API key
	 * @param {boolean} includeAuth - Whether to include JWT token
	 * @returns {Object} Headers object
	 */
	getHeaders(includeAuth = false) {
		const headers = {
			"Content-Type": "application/json",
			"X-API-Key": API_KEY,
		}

		if (includeAuth) {
			const token = this.getToken()
			if (token) {
				headers["Authorization"] = `Bearer ${token}`
			}
		}

		return headers
	}

	/**
	 * Register a new user
	 * @param {Object} userData - User registration data
	 * @param {string} userData.email - User email
	 * @param {string} userData.password - User password
	 * @param {string} userData.userName - User name
	 * @param {string} [userData.role] - User role (optional, defaults to 'customer')
	 * @returns {Promise<Object>} Registration response
	 */
	async register(userData) {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/register`, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify({
					email: userData.email,
					password: userData.password,
					name: userData.userName,
					role: userData.role || "customer", // Default to customer role
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message || "Registration failed")
			}

			// Store token if registration is successful
			if (data.token) {
				this.setToken(data.token)
				this.setUser(data.user)
			}

			return {
				success: true,
				data: data,
				message: data.message || "Registration successful",
			}
		} catch (error) {
			console.error("Registration error:", error)
			return {
				success: false,
				message: error.message || "Registration failed. Please try again.",
			}
		}
	}

	/**
	 * Login user
	 * @param {Object} credentials - Login credentials
	 * @param {string} credentials.email - User email
	 * @param {string} credentials.password - User password
	 * @returns {Promise<Object>} Login response
	 */
	async login(credentials) {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/login`, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify({
					email: credentials.email,
					password: credentials.password,
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message || "Login failed")
			}

			// Store token and user data
			if (data.token) {
				this.setToken(data.token)
				this.setUser(data.user)
			}

			return {
				success: true,
				data: data,
				message: data.message || "Login successful",
			}
		} catch (error) {
			console.error("Login error:", error)
			return {
				success: false,
				message:
					error.message || "Login failed. Please check your credentials.",
			}
		}
	}

	/**
	 * Get current user profile
	 * @returns {Promise<Object>} User profile data
	 */
	async getCurrentUser() {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/me`, {
				method: "GET",
				headers: this.getHeaders(true),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message || "Failed to fetch user data")
			}

			// Update stored user data
			this.setUser(data.user)

			return {
				success: true,
				data: data.user,
			}
		} catch (error) {
			console.error("Get current user error:", error)
			return {
				success: false,
				message: error.message || "Failed to fetch user data",
			}
		}
	}

	/**
	 * Update user profile
	 * @param {Object} updates - Profile updates
	 * @returns {Promise<Object>} Update response
	 */
	async updateProfile(updates) {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/profile`, {
				method: "PUT",
				headers: this.getHeaders(true),
				body: JSON.stringify(updates),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message || "Profile update failed")
			}

			// Update stored user data
			this.setUser(data.user)

			return {
				success: true,
				data: data.user,
				message: data.message || "Profile updated successfully",
			}
		} catch (error) {
			console.error("Update profile error:", error)
			return {
				success: false,
				message: error.message || "Failed to update profile",
			}
		}
	}

	/**
	 * Logout user
	 */
	logout() {
		localStorage.removeItem("token")
		localStorage.removeItem("user")
		// Optionally redirect to login page
		window.location.href = "/login"
	}

	/**
	 * Check if user is authenticated
	 * @returns {boolean} Authentication status
	 */
	isAuthenticated() {
		const token = this.getToken()
		if (!token) return false

		// Check if token is expired
		try {
			const payload = JSON.parse(atob(token.split(".")[1]))
			const isExpired = payload.exp * 1000 < Date.now()

			if (isExpired) {
				this.logout()
				return false
			}

			return true
		} catch (error) {
			return false
		}
	}

	/**
	 * Get stored JWT token
	 * @returns {string|null} JWT token
	 */
	getToken() {
		return localStorage.getItem("token")
	}

	/**
	 * Store JWT token
	 * @param {string} token - JWT token
	 */
	setToken(token) {
		localStorage.setItem("token", token)
	}

	/**
	 * Get stored user data
	 * @returns {Object|null} User data
	 */
	getUser() {
		const userStr = localStorage.getItem("user")
		return userStr ? JSON.parse(userStr) : null
	}

	/**
	 * Store user data
	 * @param {Object} user - User data
	 */
	setUser(user) {
		localStorage.setItem("user", JSON.stringify(user))
	}

	/**
	 * Get user role
	 * @returns {string|null} User role
	 */
	getUserRole() {
		const user = this.getUser()
		return user ? user.role : null
	}

	/**
	 * Check if user has specific role
	 * @param {string} role - Role to check
	 * @returns {boolean} Whether user has the role
	 */
	hasRole(role) {
		return this.getUserRole() === role
	}

	/**
	 * Check if user is admin
	 * @returns {boolean} Whether user is admin
	 */
	isAdmin() {
		return this.hasRole("admin")
	}

	/**
	 * Health check
	 * @returns {Promise<Object>} Health status
	 */
	async healthCheck() {
		try {
			const response = await fetch(`${API_BASE_URL}/health`, {
				method: "GET",
			})

			const data = await response.json()

			return {
				success: response.ok,
				data: data,
			}
		} catch (error) {
			console.error("Health check error:", error)
			return {
				success: false,
				message: "Service unavailable",
			}
		}
	}
}

// Export singleton instance
export default new AuthService()
