import { useContext, useEffect, useRef, useState } from 'react'

import Header from 'components/Header'
import TodoInput from 'components/TodoInput'
import TodoList from 'components/TodoList'
import { ThemeContext } from 'context/ThemeContext'
import { motion } from 'framer-motion'
import utils, { TodoType } from 'utils'

const BOTTOM_MARGIN = 400

const Main = () => {
	const [todos, setTodos] = useState(utils.TODO_LIST)
	const [height, setHeight] = useState(0)
	const { theme } = useContext(ThemeContext)

	const todoListRef = useRef<HTMLSelectElement>(null)

	useEffect(() => {
		setHeight(todoListRef.current?.clientHeight || 0)
	})

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			style={{
				height: (height || 0) + BOTTOM_MARGIN,
			}}
			className={`
      ${theme === 'dark' ? 'bg-dark-700' : 'bg-light-200'}
      relative min-h-screen transition-all duration-300 ease-in-out`}
		>
			<Header />

			<section className='px-6 absolute top-[108px] sm:top-[160px] sm:w-[544px] sm:px-0 sm:left-1/2 sm:-translate-x-1/2 w-full'>
				<div className='mb-12'>
					<div>
						<TodoInput
							onAddTodo={(todo: string) => {
								const nextTodo = {
									id: String(todos.length),
									title: todo,
									completed: false,
								}
								const newTodos = [nextTodo, ...todos]

								setTodos(newTodos)
							}}
						/>
					</div>

					<TodoList
						ref={todoListRef}
						todos={todos}
						onRemoveTodo={(todoId: string) => {
							const newTodos = todos.filter((todo) => {
								return todo.id !== todoId
							})

							setTodos(newTodos)
						}}
						onChangeTodo={(nextTodo: TodoType) => {
							const newTodos = todos.map((todo) => {
								if (todo.id === nextTodo.id) {
									return nextTodo
								}

								return todo
							})

							setTodos(newTodos)
						}}
						onClearCompeleted={() => {
							const newTodos = todos.filter((todo) => {
								return !todo.completed
							})

							setTodos(newTodos)
						}}
					/>
				</div>

				<p
					className={`text-center ${
						theme === 'dark' ? 'text-dark-400' : 'text-light-400'
					} sm:text-[16px] text-[14px] pb-[72px] `}
				>
					Drag and drop to reorder list
				</p>
			</section>
		</motion.main>
	)
}

export default Main
