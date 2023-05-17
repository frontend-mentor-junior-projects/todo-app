import { useContext } from 'react'

import TodoListItemContainer from 'components/TodoListItemContainer'
import { ThemeContext } from 'context/ThemeContext'
import utils, { Filter } from 'utils'

type TodoListFilterProps = {
	selected: Filter
	onFilter: (filter: Filter) => void
	className: string
}

const TodoListFilter = ({
	onFilter,
	selected,
	className,
}: TodoListFilterProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<TodoListItemContainer
			className={`rounded space-x-6 sm:space-x-4 justify-center font-bold shadow-sm ${className}`}
		>
			{utils.FILTERS.map((filter) => {
				const isSelected = filter === selected

				return (
					<button
						key={filter}
						type='button'
						onClick={() => {
							onFilter(filter)
						}}
						className={`transition duration-300 ease-out
            ${
							isSelected && theme === 'dark'
								? 'text-primary-100'
								: 'text-dark-400'
						}
            ${
							isSelected && theme === 'light'
								? 'text-primary-100'
								: 'text-light-400'
						}
            ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}
            `}
					>
						{filter}
					</button>
				)
			})}
		</TodoListItemContainer>
	)
}

export default TodoListFilter
