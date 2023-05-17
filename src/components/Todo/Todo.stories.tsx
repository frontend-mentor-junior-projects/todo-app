import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import Todo from '.'

const meta: Meta<typeof Todo> = {
	title: 'Components/Todo',
	component: Todo,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		todo: { id: '0', title: 'Jog around the park 3x', completed: false },
	},
	decorators: [
		(Story) => {
			return (
				<div className='bg-dark-700 p-6 min-h-screen'>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof Todo>

export const Default: Story = {}

export const Active: Story = {
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const checkTodo = canvas.getByAltText('check')
		expect(checkTodo).toHaveClass('opacity-0')

		userEvent.click(checkTodo)
		expect(checkTodo).toHaveClass('opacity-100')

		const crossTodo = canvas.getByAltText('cross')
		userEvent.click(crossTodo)

		const todo = canvas.getByDisplayValue('Jog around the park 3x')
		expect(todo).toHaveClass('line-through')
	},
}

export const Completed: Story = {
	args: {
		todo: { id: '0', title: 'Jog around the park 3x', completed: true },
	},
}
