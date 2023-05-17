import { useContext } from 'react'

import TodoListItemContainer from 'components/TodoListItemContainer'
import { ThemeContext } from 'context/ThemeContext'

type TodoListFooterProps = {
	todosLeft: number
	onClearCompeleted: () => void
	filter: React.ReactNode
}

const TodoListFooter = ({
	todosLeft,
	onClearCompeleted,
	filter,
}: TodoListFooterProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<TodoListItemContainer
			className={`justify-between
      ${theme === 'dark' ? 'text-dark-300' : 'text-light-400'} sm:py-0`}
		>
			<span>
				{todosLeft} item{todosLeft > 1 || todosLeft === 0 ? 's' : ''} left
			</span>

			{/* Padding on left added to mimic the look of the div being centered. */}
			<div className='sm:block hidden pl-8'>{filter}</div>

			<button
				type='button'
				onClick={onClearCompeleted}
				className={`${
					theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
				}`}
			>
				Clear Completed
			</button>
		</TodoListItemContainer>
	)
}

export default TodoListFooter
