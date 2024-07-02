import { createContext, useState, ReactNode, Dispatch } from "react"
import { TFullUser } from "../types/User"

export interface TAppContext {
	loggedIn: boolean
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface AppProviderProps {
	children: ReactNode
}

export type TUserName = {
	user: TFullUser
	setUser: Dispatch<React.SetStateAction<TFullUser>>
}

export const LoginContext = createContext<TAppContext | null>(null)

// empty valued user
const initialUser = {
	username: "Guest",
	logged: false,
}

// create auth context
export const UserContext = createContext<TUserName>({
	user: initialUser,
	setUser: () => {},
}) // default value

// 2. Component provider
const UserProvider = ({ children }: AppProviderProps) => {
	// useState
	const [user, setUser] = useState(initialUser)
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
