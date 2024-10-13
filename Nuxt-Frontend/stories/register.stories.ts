// BaseHeader.stories.js
import BaseHeader from '../components/BaseHeader.vue';
import AppAlert from '../components/appalert.vue';
import Login from '../pages/login.vue';
import RegistrationForm from '../components/registrationform.vue';

// export default {
//   title: 'Components/BaseHeader',
//   component: BaseHeader,
//   argTypes: {
//     isAdmin: { control: 'boolean' },
//     currentUser: { control: 'object' },
//     isLoginVisible: { control: 'boolean' },
//     isRegistrationMode: { control: 'boolean' },
//     email: { control: 'text' },
//     onLogoutClick: { action: 'clicked' },
//     handleLoginSuccess: { action: 'loginSuccess' },
//     goBackToLogin: { action: 'goBackToLogin' },
//   },
// };

// const Template = (args) => ({
//   components: { BaseHeader, AppAlert, Login, RegistrationForm },
//   setup() {
//     return { args };
//   },
//   template: '<BaseHeader v-bind="args" />',
// });

// export const Default = Template.bind({});
// Default.args = {
//   isAdmin: false,
//   currentUser: null,
//   isLoginVisible: false,
//   isRegistrationMode: false,
//   email: '',
// };

import type { Meta, StoryObj } from '@nuxtjs/storybook'
import register from '~/pages/register.vue';

import MyNuxtWelcome from './MyWelcome.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/register',
  component: register,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof register>

export default meta
type Story = StoryObj<typeof meta>

export const registerStory: Story = {
  args: {},
}

