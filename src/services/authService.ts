// src/services/authService.ts

import { BackendUser, TFullUser } from "../types/User"

const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1"
const API_KEY = import.meta.env.VITE_API_KEY

// Helper function to get auth headers
const getAuthHeaders = (includeToken: boolean = false): HeadersInit => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		"X-API-Key": API_KEY,
	}

	if (includeToken) {
		const token = localStorage.getItem("token")
		if (token) {
			headers["Authorization"] = `Bearer ${token}`
		}
	}

	return headers
}

// Helper: Convert backend user (snake_case) to frontend user (camelCase)
const mapBackendToFrontend = (backendUser: BackendUser): TFullUser => ({
	firstName: backendUser.first_name,
	lastName: backendUser.last_name,
	email: backendUser.email,
	phone: backendUser.phone || "",
	role: backendUser.role,
	logged: true,
	image: "",
	isVerified: Boolean(backendUser.is_verified),
})

// Helper: Convert frontend user (camelCase) to backend format (snake_case)
const mapFrontendToBackend = (
	frontendUser: Partial<TFullUser>
): Partial<BackendUser> => {
	const backendUser: Partial<BackendUser> = {}

	if (frontendUser.firstName) backendUser.first_name = frontendUser.firstName
	if (frontendUser.lastName) backendUser.last_name = frontendUser.lastName
	if (frontendUser.email) backendUser.email = frontendUser.email
	if (frontendUser.phone) backendUser.phone = frontendUser.phone
	if (frontendUser.role) backendUser.role = frontendUser.role

	return backendUser
}

export const userApi = {
	// Login user
	login: async (credentials: {
		email: string
		password: string
	}): Promise<{ token: string; user: TFullUser }> => {
		const response = await fetch(`${API_BASE_URL}/auth/login`, {
			method: "POST",
			headers: getAuthHeaders(),
			body: JSON.stringify(credentials),
		})

		if (!response.ok) {
			const error = await response.json()
			throw new Error(error.message || "Failed to login")
		}

		const data = await response.json()
		return {
			token: data.token,
			user: mapBackendToFrontend(data.user),
		}
	},

	// Register new user
	register: async (userData: {
		email: string
		password: string
		firstName: string
		lastName: string
		phone?: string
		role?: string
	}): Promise<{ token: string; user: TFullUser }> => {
		const response = await fetch(`${API_BASE_URL}/auth/register`, {
			method: "POST",
			headers: getAuthHeaders(),
			body: JSON.stringify({
				email: userData.email,
				password: userData.password,
				first_name: userData.firstName,
				last_name: userData.lastName,
				phone: userData.phone,
				role: userData.role || "customer",
			}),
		})

		if (!response.ok) {
			const error = await response.json()
			throw new Error(error.message || "Failed to register")
		}

		const data = await response.json()
		return {
			token: data.token,
			user: mapBackendToFrontend(data.user),
		}
	},

	// Get current user profile
	getCurrentUser: async (): Promise<TFullUser> => {
		const response = await fetch(`${API_BASE_URL}/auth/me`, {
			method: "GET",
			headers: getAuthHeaders(true),
		})

		if (!response.ok) {
			throw new Error("Failed to fetch user profile")
		}

		const data = await response.json()
		return mapBackendToFrontend(data.user)
	},

	// Update user profile
	updateProfile: async (updates: Partial<TFullUser>): Promise<TFullUser> => {
		const response = await fetch(`${API_BASE_URL}/auth/profile`, {
			method: "PUT",
			headers: getAuthHeaders(true),
			body: JSON.stringify(mapFrontendToBackend(updates)),
		})

		if (!response.ok) {
			const error = await response.json()
			throw new Error(error.message || "Failed to update profile")
		}

		const data = await response.json()
		return mapBackendToFrontend(data.user)
	},

	// Get all users (admin only)
	getAllUsers: async (): Promise<TFullUser[]> => {
		const response = await fetch(`${API_BASE_URL}/users`, {
			method: "GET",
			headers: getAuthHeaders(true),
		})

		if (!response.ok) {
			throw new Error("Failed to fetch users")
		}

		const data = await response.json()
		return data.users.map(mapBackendToFrontend)
	},

	// Health check
	healthCheck: async (): Promise<{ status: string; timestamp: string }> => {
		const response = await fetch(`${API_BASE_URL}/health`, {
			method: "GET",
		})

		if (!response.ok) {
			throw new Error("Service unavailable")
		}

		return response.json()
	},
}
