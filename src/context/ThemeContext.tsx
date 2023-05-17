import { createContext, useState } from 'react'

type ThemeType = 'light' | 'dark'

type ThemeContextType = {
	theme: ThemeType
	changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'dark',
	changeTheme: () => {},
})

type ThemeProviderProps = {
	children: React.ReactNode | React.ReactNode[]
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<ThemeType>('dark')

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		}

		if (theme === 'dark') {
			setTheme('light')
		}
	}

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		theme,
		changeTheme,
	}
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
