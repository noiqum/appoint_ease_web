import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const DefaultOne: Story = {
  args: {
    variant: 'default',
    size: 'default',
    label: 'default',
  },
}
