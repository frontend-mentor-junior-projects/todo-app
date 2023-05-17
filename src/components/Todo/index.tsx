import { useContext } from 'react'

import TodoListItemContainer from 'components/TodoListItemContainer'
import { ThemeContext } from 'context/ThemeContext'
import { TodoType } from 'utils'

type TodoProps = {
	todo: TodoType
	onRemoveTodo: (todoId: string) => void
	onChangeTodo: (nextTodo: TodoType) => void
}

const Todo = ({ todo, onRemoveTodo, onChangeTodo }: TodoProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<TodoListItemContainer todo className='group lg:hover:cursor-pointer'>
			<div className='flex flex-row items-center flex-1'>
				<button
					type='button'
					onClick={() => {
						onChangeTodo({ ...todo, completed: !todo.completed })
					}}
					className={`w-6 h-6 rounded-full mr-4 border-[1px] flex flex-row items-center justify-center
					${theme === 'dark' ? 'border-dark-400' : ''}
					${
						todo.completed
							? 'bg-completed-todo border-none'
							: 'hover:bg-completed-todo hover:p-[1px] hover:border-none'
					}
          `}
				>
					{todo.completed ? (
						<img
							alt='check'
							src='assets/images/icon-check.svg'
							className={`${
								todo.completed ? 'opacity-100' : 'opacity-0'
							} transition duration-300 ease-in-out`}
						/>
					) : (
						<div
							className={`w-full h-full rounded-full
              ${theme === 'dark' ? 'bg-dark-500' : 'bg-white'}
              ${todo.completed ? 'hidden' : ''}
              `}
						/>
					)}
				</button>

				<span
					className={`
          ${todo.completed ? 'line-through' : ''}

          ${theme === 'dark' && !todo.completed ? 'text-dark-100' : ''}
          ${theme === 'dark' && todo.completed ? ' text-dark-400' : ''}
          
          ${theme === 'light' && !todo.completed ? 'text-light-500' : ''}
          ${theme === 'light' && todo.completed ? ' text-light-300' : ''}
          
          break-words break-all line-clamp-1 mr-4 leading-normal flex-1`}
				>
					{todo.title}
				</span>
			</div>

			<button
				type='button'
				onClick={() => {
					onRemoveTodo(todo.id)
				}}
				className=' w-4 h-4 flex flex-col items-center justify-center'
			>
				<img
					alt='cross'
					src='assets/images/icon-cross.svg'
					className='lg:hidden lg:group-hover:flex'
				/>
			</button>
		</TodoListItemContainer>
	)
}

export default Todo
