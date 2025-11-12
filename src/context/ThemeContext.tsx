import {
	createContext,
	useContext,
	useEffect,
	useState,
	useRef,
	ReactNode,
} from "react"

type Theme = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

interface ThemeContextType {
	theme: Theme
	resolvedTheme: ResolvedTheme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
	children: ReactNode
	defaultTheme?: Theme
	storageKey?: string
}

export const ThemeProvider = ({
	children,
	defaultTheme = "system",
	storageKey = "horizon-university-theme",
}: ThemeProviderProps) => {
	// Use refs for props that shouldn't trigger re-initialization
	const defaultThemeRef = useRef(defaultTheme)
	const storageKeyRef = useRef(storageKey)

	// Lazy initialization to avoid double-render
	const [theme, setThemeState] = useState<Theme>(() => {
		// Check if we're in browser environment
		if (typeof window === "undefined") {
			return defaultThemeRef.current
		}

		try {
			const storedTheme = localStorage.getItem(
				storageKeyRef.current
			) as Theme | null
			if (storedTheme && ["light", "dark", "system"].includes(storedTheme)) {
				return storedTheme
			}
		} catch (error) {
			// localStorage might be blocked (private browsing, etc.)
			console.warn("Failed to read theme from localStorage:", error)
		}

		return defaultThemeRef.current
	})

	const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
		if (typeof window === "undefined") return "light"

		const getSystemTheme = (): ResolvedTheme => {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light"
		}

		return theme === "system" ? getSystemTheme() : theme
	})

	// Get system preference
	const getSystemTheme = (): ResolvedTheme => {
		if (typeof window === "undefined") return "light"
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	}

	// Resolve the actual theme to apply
	const resolveTheme = (currentTheme: Theme): ResolvedTheme => {
		if (currentTheme === "system") {
			return getSystemTheme()
		}
		return currentTheme
	}

	// Apply theme to document
	const applyTheme = (appliedTheme: ResolvedTheme) => {
		if (typeof window === "undefined") return

		const root = window.document.documentElement
		root.classList.remove("light", "dark")
		root.classList.add(appliedTheme)
		setResolvedTheme(appliedTheme)
	}

	// Apply theme on mount and when theme changes
	useEffect(() => {
		const resolved = resolveTheme(theme)
		applyTheme(resolved)
	}, [theme])

	// Listen for system theme changes when theme is 'system'
	useEffect(() => {
		if (theme !== "system" || typeof window === "undefined") return

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

		const handleChange = (e: MediaQueryListEvent) => {
			const newSystemTheme = e.matches ? "dark" : "light"
			applyTheme(newSystemTheme)
		}

		mediaQuery.addEventListener("change", handleChange)

		return () => {
			mediaQuery.removeEventListener("change", handleChange)
		}
	}, [theme])

	// Update theme
	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme)

		// Persist to localStorage
		if (typeof window !== "undefined") {
			try {
				localStorage.setItem(storageKeyRef.current, newTheme)
			} catch (error) {
				console.warn("Failed to save theme to localStorage:", error)
			}
		}
	}

	// Toggle between light and dark
	const toggleTheme = () => {
		if (theme === "system") {
			setTheme(resolvedTheme === "light" ? "dark" : "light")
		} else {
			setTheme(theme === "light" ? "dark" : "light")
		}
	}

	const value: ThemeContextType = {
		theme,
		resolvedTheme,
		setTheme,
		toggleTheme,
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Custom hook
export const useTheme = () => {
	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider")
	}

	return context
}
