import { Meta, StoryObj } from '@storybook/react'

import TodoListFilter from '.'

const meta: Meta<typeof TodoListFilter> = {
	title: 'Components/TodoListFilter',
	component: TodoListFilter,
}

export default meta
type Story = StoryObj<typeof TodoListFilter>

export const Default: Story = {}
