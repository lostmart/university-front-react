import { useTheme } from "@/context/ThemeContext"
import { FiSun, FiMoon } from "react-icons/fi"

const ThemeSelectComp = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div role="radiogroup" className="flex gap-2 items-center">
			<button
				type="button"
				role="radio"
				aria-checked={theme === "light"}
				onClick={() => setTheme("light")}
				className={`rounded-full p-1.5 transition-all cursor-pointer ${
					theme === "light"
						? "bg-white ring ring-gray-900/40 dark:bg-gray-700 dark:text-white"
						: "hover:bg-gray-100 dark:hover:bg-gray-800"
				}`}
				aria-label="Light mode"
			>
				<FiSun className="w-5 h-5 dark:text-gray-300" />
			</button>

			<button
				type="button"
				role="radio"
				aria-checked={theme === "dark"}
				onClick={() => setTheme("dark")}
				className={`rounded-full p-1.5 transition-all cursor-pointer ${
					theme === "dark"
						? "bg-white ring ring-gray-950/20 dark:bg-gray-700 dark:text-white"
						: "hover:bg-gray-100 dark:hover:bg-gray-800"
				}`}
				aria-label="Dark mode"
			>
				<FiMoon className="w-5 h-5" />
			</button>
		</div>
	)
}

export default ThemeSelectComp
