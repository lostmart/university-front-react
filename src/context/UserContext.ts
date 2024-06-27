import { createContext } from "react"


export interface TAppContext {
	loggedIn: boolean
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = createContext<TAppContext | null>(null)

// checks user is not underfined | custom hook
// export function useUserContext() {
// 	const user = useContext(AppContext)

// 	if (!user) {
// 		throw new Error("useUserContext must be used with 'AppContext ")
// 	}

// 	return user
// }
