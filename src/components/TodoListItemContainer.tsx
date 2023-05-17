import { useContext } from 'react'

import { ThemeContext } from 'context/ThemeContext'
import { motion } from 'framer-motion'

type TodoListItemContainerProps = {
	children: React.ReactNode | React.ReactNode[]
	// eslint-disable-next-line react/require-default-props
	todo?: boolean
	// eslint-disable-next-line react/require-default-props
	className?: string
}

const TodoListItemContainer = ({
	children,
	todo = false,
	className = '',
}: TodoListItemContainerProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<motion.div
			className={`flex flex-row items-center p-4 sm:p-6 leading-none text-[12px]
        ${theme === 'dark' ? 'bg-dark-500' : 'bg-light-100'} 
        ${
					todo && theme === 'dark'
						? 'justify-between border-b border-dark-400'
						: ''
				}
        ${
					todo && theme === 'light'
						? 'justify-between border-b border-light-200'
						: ''
				}
        ${todo ? 'sm:text-[16px]' : 'sm:text-[14px]'}
        ${className}`}
		>
			{children}
		</motion.div>
	)
}

export default TodoListItemContainer
