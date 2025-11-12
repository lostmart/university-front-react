// This script runs BEFORE React hydrates to prevent theme flicker
;(function () {
	const storageKey = "horizon-university-theme"
	const defaultTheme = "system"

	function getSystemTheme() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	}

	function resolveTheme(theme) {
		if (theme === "system") return getSystemTheme()
		return theme
	}

	try {
		const storedTheme = localStorage.getItem(storageKey)
		const theme =
			storedTheme && ["light", "dark", "system"].includes(storedTheme)
				? storedTheme
				: defaultTheme

		const resolvedTheme = resolveTheme(theme)
		document.documentElement.classList.add(resolvedTheme)
	} catch (e) {
		// If localStorage fails, use system preference
		document.documentElement.classList.add(getSystemTheme())
	}
})()
