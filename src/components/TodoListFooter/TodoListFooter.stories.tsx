import { Meta, StoryObj } from '@storybook/react'

import TodoListFooter from '.'

const meta: Meta<typeof TodoListFooter> = {
	title: 'Components/TodoListFooter',
	component: TodoListFooter,
}

export default meta
type Story = StoryObj<typeof TodoListFooter>

export const Default: Story = {}
