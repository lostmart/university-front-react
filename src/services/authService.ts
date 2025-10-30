// src/services/authService.ts

const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1"
const API_KEY = import.meta.env.VITE_API_KEY

// Types
interface UserData {
	email: string
	password: string
	userName: string
	role?: string
}

interface LoginCredentials {
	email: string
	password: string
}

interface User {
	id: string
	email: string
	name: string
	role: string
	createdAt?: string
	updatedAt?: string
}

interface AuthResponse {
	success: boolean
	data?: any
	message?: string
}

interface LoginResponse extends AuthResponse {
	data?: {
		token: string
		user: User
	}
}

interface RegisterResponse extends AuthResponse {
	data?: {
		token: string
		user: User
	}
}

interface UserResponse extends AuthResponse {
	data?: User
}

interface HealthResponse extends AuthResponse {
	data?: {
		status: string
		timestamp: string
	}
}

/**
 * Authentication Service
 * Handles all authentication-related API calls to the microservice
 */
class AuthService {
	/**
	 * Get common headers including API key
	 * @param {boolean} includeAuth - Whether to include JWT token
	 * @returns {HeadersInit} Headers object
	 */
	private getHeaders(includeAuth: boolean = false): HeadersInit {
		const headers: Record<string, string> = {
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
	 * @param {UserData} userData - User registration data
	 * @returns {Promise<RegisterResponse>} Registration response
	 */
	async register(userData: UserData): Promise<RegisterResponse> {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/register`, {
				method: "POST",
				headers: this.getHeaders(),
				body: JSON.stringify({
					email: userData.email,
					password: userData.password,
					name: userData.userName,
					role: userData.role || "customer",
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
				message:
					error instanceof Error
						? error.message
						: "Registration failed. Please try again.",
			}
		}
	}

	/**
	 * Login user
	 * @param {LoginCredentials} credentials - Login credentials
	 * @returns {Promise<LoginResponse>} Login response
	 */
	async login(credentials: LoginCredentials): Promise<LoginResponse> {
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
					error instanceof Error
						? error.message
						: "Login failed. Please check your credentials.",
			}
		}
	}

	/**
	 * Get current user profile
	 * @returns {Promise<UserResponse>} User profile data
	 */
	async getCurrentUser(): Promise<UserResponse> {
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
				message:
					error instanceof Error ? error.message : "Failed to fetch user data",
			}
		}
	}

	/**
	 * Update user profile
	 * @param {Partial<User>} updates - Profile updates
	 * @returns {Promise<UserResponse>} Update response
	 */
	async updateProfile(updates: Partial<User>): Promise<UserResponse> {
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
				message:
					error instanceof Error ? error.message : "Failed to update profile",
			}
		}
	}

	/**
	 * Logout user
	 */
	logout(): void {
		localStorage.removeItem("token")
		localStorage.removeItem("user")
		window.location.href = "/login"
	}

	/**
	 * Check if user is authenticated
	 * @returns {boolean} Authentication status
	 */
	isAuthenticated(): boolean {
		const token = this.getToken()
		if (!token) return false

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
	 * @returns {string | null} JWT token
	 */
	getToken(): string | null {
		return localStorage.getItem("token")
	}

	/**
	 * Store JWT token
	 * @param {string} token - JWT token
	 */
	private setToken(token: string): void {
		localStorage.setItem("token", token)
	}

	/**
	 * Get stored user data
	 * @returns {User | null} User data
	 */
	getUser(): User | null {
		const userStr = localStorage.getItem("user")
		return userStr ? JSON.parse(userStr) : null
	}

	/**
	 * Store user data
	 * @param {User} user - User data
	 */
	private setUser(user: User): void {
		localStorage.setItem("user", JSON.stringify(user))
	}

	/**
	 * Get user role
	 * @returns {string | null} User role
	 */
	getUserRole(): string | null {
		const user = this.getUser()
		return user ? user.role : null
	}

	/**
	 * Check if user has specific role
	 * @param {string} role - Role to check
	 * @returns {boolean} Whether user has the role
	 */
	hasRole(role: string): boolean {
		return this.getUserRole() === role
	}

	/**
	 * Check if user is admin
	 * @returns {boolean} Whether user is admin
	 */
	isAdmin(): boolean {
		return this.hasRole("admin")
	}

	/**
	 * Health check
	 * @returns {Promise<HealthResponse>} Health status
	 */
	async healthCheck(): Promise<HealthResponse> {
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

// Also export types for use in other files
export type {
	UserData,
	LoginCredentials,
	User,
	AuthResponse,
	LoginResponse,
	RegisterResponse,
	UserResponse,
	HealthResponse,
}
