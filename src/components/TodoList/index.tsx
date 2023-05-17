import { forwardRef, useState } from 'react'

import Todo from 'components/Todo'
import TodoListFilter from 'components/TodoListFilter'
import TodoListFooter from 'components/TodoListFooter'
import TodoListItemContainer from 'components/TodoListItemContainer'
import { Filter, TodoType } from 'utils'

type TodoListProps = {
	todos: TodoType[]
	onRemoveTodo: (todoId: string) => void
	onChangeTodo: (nextTodo: TodoType) => void
	onClearCompeleted: () => void
}

const TodoList = (
	{ todos, onRemoveTodo, onChangeTodo, onClearCompeleted }: TodoListProps,
	ref: React.Ref<HTMLSelectElement>
) => {
	const [selectedFilter, setSelectedFilter] = useState<Filter>('All')

	const todosLeft = todos.filter((todo) => {
		return !todo.completed
	}).length

	const filteredTodos = todos.filter((todo) => {
		if (selectedFilter === 'Active') {
			return !todo.completed
		}

		if (selectedFilter === 'Completed') {
			return todo.completed
		}

		return todo
	})

	return (
		<section ref={ref}>
			<div className='mb-4 rounded overflow-hidden shadow-sm'>
				{filteredTodos.length !== 0 ? (
					<>
						{filteredTodos.map((todo) => {
							return (
								<Todo
									key={todo.id}
									todo={todo}
									onRemoveTodo={onRemoveTodo}
									onChangeTodo={onChangeTodo}
								/>
							)
						})}
					</>
				) : (
					<TodoListItemContainer>
						<p className='text-center text-dark-300 w-full'>
							You have no {selectedFilter === 'Completed' && 'completed'}
							{selectedFilter === 'Active' && 'active'} todos
						</p>
					</TodoListItemContainer>
				)}

				<TodoListFooter
					todosLeft={todosLeft}
					onClearCompeleted={onClearCompeleted}
					filter={
						<TodoListFilter
							selected={selectedFilter}
							onFilter={(filter: Filter) => {
								setSelectedFilter(filter)
							}}
							className=''
						/>
					}
				/>
			</div>

			<TodoListFilter
				selected={selectedFilter}
				onFilter={(filter: Filter) => {
					setSelectedFilter(filter)
				}}
				className='sm:hidden'
			/>
		</section>
	)
}

export default forwardRef(TodoList)
