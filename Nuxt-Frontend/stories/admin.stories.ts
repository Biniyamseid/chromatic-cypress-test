import type { Meta, StoryObj } from '@nuxtjs/storybook'

import admin from '~/pages/admin.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/admin',
  component: admin,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof admin>

export default meta
type Story = StoryObj<typeof meta>

export const adminStory: Story = {
  args: {},
}
