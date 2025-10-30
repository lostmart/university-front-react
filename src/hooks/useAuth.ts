// src/hooks/useAuth.tsx
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import authService, {
	User,
	LoginCredentials,
	UserData,
	LoginResponse,
	RegisterResponse,
	UserResponse,
} from '../services/authService';

// Auth Context Type
interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	loading: boolean;
	login: (credentials: LoginCredentials) => Promise<LoginResponse>;
	register: (userData: UserData) => Promise<RegisterResponse>;
	logout: () => void;
	updateProfile: (updates: Partial<User>) => Promise<UserResponse>;
	isAdmin: boolean;
	hasRole: (role: string) => boolean;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | null>(null);

// Auth Provider Props
interface AuthProviderProps {
	children: ReactNode;
}

/**
 * Auth Provider Component
 * Wrap your app with this to provide authentication context
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		// Check if user is already logged in on mount
		const checkAuth = async () => {
			if (authService.isAuthenticated()) {
				const storedUser = authService.getUser();
				setUser(storedUser);
				setIsAuthenticated(true);

				// Optionally fetch fresh user data
				const result = await authService.getCurrentUser();
				if (result.success && result.data) {
					setUser(result.data);
				}
			}
			setLoading(false);
		};

		checkAuth();
	}, []);

	const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
		const result = await authService.login(credentials);
		if (result.success && result.data) {
			setUser(result.data.user);
			setIsAuthenticated(true);
		}
		return result;
	};

	const register = async (userData: UserData): Promise<RegisterResponse> => {
		const result = await authService.register(userData);
		if (result.success && result.data) {
			setUser(result.data.user);
			setIsAuthenticated(true);
		}
		return result;
	};

	const logout = (): void => {
		authService.logout();
		setUser(null);
		setIsAuthenticated(false);
	};

	const updateProfile = async (updates: Partial<User>): Promise<UserResponse> => {
		const result = await authService.updateProfile(updates);
		if (result.success && result.data) {
			setUser(result.data);
		}
		return result;
	};

	const value: AuthContextType = {
		user,
		isAuthenticated,
		loading,
		login,
		register,
		logout,
		updateProfile,
		isAdmin: authService.isAdmin(),
		hasRole: authService.hasRole.bind(authService),
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to use authentication context
 * @returns {AuthContextType} Auth context value
 */
export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export default useAuth;