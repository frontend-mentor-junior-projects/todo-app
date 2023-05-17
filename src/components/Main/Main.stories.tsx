import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'context/ThemeContext'

import Main from '.'

const meta: Meta<typeof Main> = {
	title: 'Components/App',
	component: Main,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => {
			return (
				<ThemeProvider>
					<Story />
				</ThemeProvider>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {}
