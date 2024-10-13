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

import TableBodyCell from '~/components/TableBodyCell.vue';

import type { Meta, StoryObj } from '@nuxtjs/storybook'

import MyNuxtWelcome from './MyWelcome.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/TableBodyCell',
  component: TableBodyCell,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof TableBodyCell>

export default meta
type Story = StoryObj<typeof meta>

export const TableBodyCellStory: Story = {
  args: {},
}

