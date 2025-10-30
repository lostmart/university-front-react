// src/context/UserContext.tsx
import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext,
} from "react"
import { userApi } from "../services/authService"
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

// Context type with both user state and auth methods
export interface TAppContext {
	user: TFullUser
	setUser: React.Dispatch<React.SetStateAction<TFullUser>>
	loading: boolean
	login: (credentials: LoginCredentials) => Promise<void>
	register: (userData: RegisterData) => Promise<void>
	logout: () => void
	updateProfile: (updates: Partial<TFullUser>) => Promise<void>
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

// Helper: Check if token is expired
const isTokenExpired = (token: string): boolean => {
	try {
		const payload = JSON.parse(atob(token.split(".")[1]))
		return payload.exp * 1000 < Date.now()
	} catch {
		return true
	}
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
			const token = localStorage.getItem("token")

			if (token && !isTokenExpired(token)) {
				try {
					// Fetch fresh user data from API
					const userData = await userApi.getCurrentUser()
					setUser(userData)
				} catch (error) {
					console.error("Failed to fetch user:", error)
					// Clear invalid token
					localStorage.removeItem("token")
				}
			}

			setLoading(false)
		}

		checkAuth()
	}, [])

	const login = async (credentials: LoginCredentials): Promise<void> => {
		try {
			const { token, user: userData } = await userApi.login(credentials)

			// Store token
			localStorage.setItem("token", token)

			// Update user state
			setUser(userData)
		} catch (error) {
			console.error("Login error:", error)
			throw error // Re-throw so component can handle it
		}
	}

	const register = async (userData: RegisterData): Promise<void> => {
		try {
			const { token, user: newUser } = await userApi.register(userData)

			// Store token
			localStorage.setItem("token", token)

			// Update user state
			setUser(newUser)
		} catch (error) {
			console.error("Register error:", error)
			throw error
		}
	}

	const logout = (): void => {
		// Clear storage
		localStorage.removeItem("token")

		// Reset user state
		setUser(initialUser)

		// Redirect to login
		window.location.href = "/login"
	}

	const updateProfile = async (updates: Partial<TFullUser>): Promise<void> => {
		try {
			const updatedUser = await userApi.updateProfile(updates)
			setUser(updatedUser)
		} catch (error) {
			console.error("Update profile error:", error)
			throw error
		}
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

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
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
