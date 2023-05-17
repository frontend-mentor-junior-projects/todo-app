import { useContext, useState } from 'react'

import TodoListItemContainer from 'components/TodoListItemContainer'
import { ThemeContext } from 'context/ThemeContext'

type TodoInputProps = {
	onAddTodo: (todo: string) => void
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
	const { theme } = useContext(ThemeContext)

	const [todo, setTodo] = useState('')

	return (
		<TodoListItemContainer className='rounded mb-4 sm:mb-6 sm:text-[16px]'>
			<div
				className={`w-6 h-6 rounded-full mr-4 border-2 
        ${theme === 'dark' ? 'border-dark-400' : 'border-light-200'}`}
			/>

			<input
				value={todo}
				onChange={(event) => {
					setTodo(event.target.value)
				}}
				onKeyDown={(event) => {
					if ((event.key === 'Enter' || event.key === 'enter') && todo !== '') {
						onAddTodo(todo)
						setTodo('')
					}
				}}
				placeholder='Create a new todo...'
				className={`${theme === 'dark' ? 'text-dark-100' : 'text-light-500'} 
        outline-none caret-primary-100 leading-none placeholder:leading-none
        flex-1 bg-transparent`}
			/>
		</TodoListItemContainer>
	)
}

export default TodoInput
