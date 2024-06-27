import { createContext } from "react"

export interface TAppContext {
	userName: string | null
	setUser: () => void
}
export const AppContext = createContext<TAppContext | null>(null)

// checks user is not underfined | custom hook
// export function useUserContext() {
// 	const user = useContext(AppContext)

// 	if (!user) {
// 		throw new Error("useUserContext must be used with 'AppContext ")
// 	}

// 	return user
// }
