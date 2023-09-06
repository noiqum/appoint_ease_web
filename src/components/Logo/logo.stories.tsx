// Import necessary dependencies and the Logo component
import React from 'react'
import { Meta, Story } from '@storybook/react'
import Logo from './logo' // Adjust the import path as needed

// Define the Meta information for your story
const meta: Meta = {
  title: 'Components/Logo',
  component: Logo,
}

export default meta

// Create a Story with args
const Template: Story = (args) => <Logo {...args} />

// Export a Default Story
export const Default = Template.bind({})
Default.args = {}
