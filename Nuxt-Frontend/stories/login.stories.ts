import BaseHeader from '../components/BaseHeader.vue';
import AppAlert from '../components/appalert.vue';

import login from '~/pages/login.vue';



import type { Meta, StoryObj } from '@nuxtjs/storybook'

import MyNuxtWelcome from './MyWelcome.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/login',
  component: login,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof login>

export default meta
type Story = StoryObj<typeof meta>

export const loginStory: Story = {
  args: {},
}

