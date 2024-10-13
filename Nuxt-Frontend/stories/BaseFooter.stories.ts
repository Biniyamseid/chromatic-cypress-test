import type { Meta, StoryObj } from '@nuxtjs/storybook'

import BaseFooter from '~/components/BaseFooter.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/BaseFooter',
  component: BaseFooter,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof BaseFooter>

export default meta
type Story = StoryObj<typeof meta>

export const BaseFooterStory: Story = {
  args: {},
}
