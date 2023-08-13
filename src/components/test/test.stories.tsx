// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import Test from './test'

const meta: Meta<typeof Test> = {
  component: Test,
}

export default meta
type Story = StoryObj<typeof Test>

export const Primary: Story = {
  render: () => <Test />,
}
