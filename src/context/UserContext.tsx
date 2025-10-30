// src/context/UserContext.tsx
import { createContext, useState, useEffect, ReactNode, useContext } from "react"
import authService from "../services/authService"
import { TFullUser } from "../types/User"

// Auth method types
interface LoginCredentials {
	email: string
	password: string
}

interface RegisterData {
	email: string
	password: string
	firstName: string
	lastName: string
	phone?: string
	role?: string
}

interface AuthResponse {
	success: boolean
	message?: string
	data?: any
}

// Context type with both user state and auth methods
export interface TAppContext {
	user: TFullUser
	setUser: React.Dispatch<React.SetStateAction<TFullUser>>
	loading: boolean
	login: (credentials: LoginCredentials) => Promise<AuthResponse>
	register: (userData: RegisterData) => Promise<AuthResponse>
	logout: () => void
	updateProfile: (updates: Partial<TFullUser>) => Promise<AuthResponse>
	isAdmin: () => boolean
	hasRole: (role: string) => boolean
}

interface AppProviderProps {
	children: ReactNode
}

// Initial empty user
const initialUser: TFullUser = {
	firstName: "",
	lastName: "",
	email: "",
	logged: false,
	role: "guest",
	phone: "",
	image: "",
	isVerified: false,
}

// Create user context
export const UserContext = createContext<TAppContext | null>(null)

// User Provider Component
const UserProvider = ({ children }: AppProviderProps) => {
	const [user, setUser] = useState<TFullUser>(initialUser)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		// Check if user is already logged in on mount
		const checkAuth = async () => {
			if (authService.isAuthenticated()) {
				const storedUser = authService.getUser()
				
				if (storedUser) {
					// Map backend user (snake_case) to TFullUser format (camelCase)
					setUser({
						firstName: storedUser.first_name || "",
						lastName: storedUser.last_name || "",
						email: storedUser.email,
						logged: true,
						role: storedUser.role,
						phone: storedUser.phone || "",
						image: "",
						isVerified: Boolean(storedUser.is_verified),
					})
				}

				// Optionally fetch fresh user data
				const result = await authService.getCurrentUser()
				if (result.success && result.data) {
					setUser({
						firstName: result.data.first_name || "",
						lastName: result.data.last_name || "",
						email: result.data.email,
						logged: true,
						role: result.data.role,
						phone: result.data.phone || "",
						image: "",
						isVerified: Boolean(result.data.is_verified),
					})
				}
			}
			setLoading(false)
		}

		checkAuth()
	}, [])

	const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
		const result = await authService.login(credentials)
		
		if (result.success && result.data) {
			// Map backend user (snake_case) to TFullUser format (camelCase)
			setUser({
				firstName: result.data.user.first_name || "",
				lastName: result.data.user.last_name || "",
				email: result.data.user.email,
				logged: true,
				role: result.data.user.role,
				phone: result.data.user.phone || "",
				image: "",
				isVerified: Boolean(result.data.user.is_verified),
			})
		}
		
		return result
	}

	const register = async (userData: RegisterData): Promise<AuthResponse> => {
		const result = await authService.register(userData)
		
		if (result.success && result.data) {
			// Map backend user (snake_case) to TFullUser format (camelCase)
			setUser({
				firstName: result.data.user.first_name || "",
				lastName: result.data.user.last_name || "",
				email: result.data.user.email,
				logged: true,
				role: result.data.user.role,
				phone: result.data.user.phone || "",
				image: "",
				isVerified: Boolean(result.data.user.is_verified),
			})
		}
		
		return result
	}

	const logout = (): void => {
		authService.logout()
		setUser(initialUser)
	}

	const updateProfile = async (updates: Partial<TFullUser>): Promise<AuthResponse> => {
		// Convert TFullUser format (camelCase) to backend format (snake_case)
		const backendUpdates: any = {}
		
		if (updates.firstName) backendUpdates.first_name = updates.firstName
		if (updates.lastName) backendUpdates.last_name = updates.lastName
		if (updates.email) backendUpdates.email = updates.email
		if (updates.phone) backendUpdates.phone = updates.phone
		if (updates.image) backendUpdates.image = updates.image

		const result = await authService.updateProfile(backendUpdates)
		
		if (result.success && result.data) {
			setUser({
				firstName: result.data.first_name || user.firstName,
				lastName: result.data.last_name || user.lastName,
				email: result.data.email || user.email,
				logged: true,
				role: result.data.role || user.role,
				phone: result.data.phone || user.phone,
				image: result.data.image || user.image,
				isVerified: Boolean(result.data.is_verified) || user.isVerified,
			})
		}
		
		return result
	}

	const isAdmin = (): boolean => {
		return user.role === "admin"
	}

	const hasRole = (role: string): boolean => {
		return user.role === role
	}

	const value: TAppContext = {
		user,
		setUser,
		loading,
		login,
		register,
		logout,
		updateProfile,
		isAdmin,
		hasRole,
	}

	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider

// Custom hook to use the context
export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error("useUser must be used within a UserProvider")
	}
	return context
}