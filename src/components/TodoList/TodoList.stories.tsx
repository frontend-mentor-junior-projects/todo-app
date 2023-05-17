import { Meta, StoryObj } from '@storybook/react'

import TodoList from '.'

const meta: Meta<typeof TodoList> = {
	title: 'Components/TodoList',
	component: TodoList,
	parameters: {
		layout: 'fullscreen',
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
type Story = StoryObj<typeof TodoList>

export const Default: Story = {}
