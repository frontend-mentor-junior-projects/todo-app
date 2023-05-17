import { useContext } from 'react'

import { ThemeContext } from 'context/ThemeContext'

const Header = () => {
	const { theme, changeTheme } = useContext(ThemeContext)

	return (
		<header
			className={`
      ${
				theme === 'dark'
					? 'bg-mobile-dark sm:bg-desktop-dark'
					: 'bg-mobile-light sm:bg-desktop-light'
			}
      h-[200px] sm:h-[296px] pt-12 sm:pt-[80px] px-6 bg-cover bg-no-repeat`}
		>
			<div className='flex flex-row items-center justify-between sm:w-[544px] mx-auto'>
				<h1 className='text-white tracking-[8px] text-[24px] sm:text-[32px]'>
					TODO
				</h1>

				<button
					type='button'
					onClick={changeTheme}
					className='self-center p-0 m-0'
				>
					{theme === 'dark' ? (
						<img src='assets/images/icon-moon.svg' alt='moon' />
					) : (
						<img src='assets/images/icon-sun.svg' alt='sun' />
					)}
				</button>
			</div>
		</header>
	)
}

export default Header
