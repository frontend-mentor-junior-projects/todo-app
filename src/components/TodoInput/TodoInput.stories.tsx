import { Meta, StoryObj } from '@storybook/react'

import TodoInput from '.'

const meta: Meta<typeof TodoInput> = {
	title: 'Components/TodoInput',
	component: TodoInput,
}

export default meta
type Story = StoryObj<typeof TodoInput>

export const Default: Story = {}
