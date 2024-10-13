// BaseHeader.stories.js
import BaseHeader from '../components/BaseHeader.vue';
import AppAlert from '../components/appalert.vue';
import Login from '../pages/login.vue';
import RegistrationForm from '../components/registrationform.vue';

import guest from '~/pages/guest.vue';

import type { Meta, StoryObj } from '@nuxtjs/storybook'

import MyNuxtWelcome from './MyWelcome.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/guest',
  component: guest,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof guest>

export default meta
type Story = StoryObj<typeof meta>

export const guestStory: Story = {
  args: {},
}

