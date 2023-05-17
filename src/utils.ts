const Colors = {
	'primary-100': 'hsl(220, 98%, 61%)',
	'light-100': 'hsl(0, 0%, 98%)',
	'light-200': 'hsl(236, 33%, 92%)',
	'light-300': 'hsl(233, 11%, 84%)',
	'light-400': 'hsl(236, 9%, 61%)',
	'light-500': 'hsl(235, 19%, 35%)',
	'dark-100': 'hsl(236, 33%, 92%)',
	'dark-200': 'hsl(234, 39%, 85%)',
	'dark-300': 'hsl(234, 11%, 52%)',
	'dark-400': 'hsl(233, 14%, 35%)',
	'dark-500': 'hsl(237, 14%, 26%)',
	'dark-600': 'hsl(235, 21%, 11%)',
	'dark-700': 'hsl(235, 24%, 19%)',
}

export type TodoType = {
	id: string
	title: string
	completed: boolean
}

const TODO_LIST: TodoType[] = [
	{
		id: '0',
		title: 'Jog around the park 3x',
		completed: false,
	},
	{
		id: '1',
		title: '10 minutes meditation',
		completed: false,
	},
	{
		id: '2',
		title: 'Read for 1 hour',
		completed: false,
	},
	{
		id: '3',
		title: 'Pick up groceries',
		completed: false,
	},
	{
		id: '4',
		title: 'Complete Todo App on Frontend Mentor',
		completed: true,
	},
]

export type Filter = 'All' | 'Active' | 'Completed'

const FILTERS: Filter[] = ['All', 'Active', 'Completed']

export default {
	Colors,
	TODO_LIST,
	FILTERS,
}
