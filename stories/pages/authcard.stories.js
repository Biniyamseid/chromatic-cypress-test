import LoginCard from "../../components/organisms/OrgAuthCard.vue";

const meta = {
  title: "Pages/LoginPage",
  tags: ["autodocs"],
  component: LoginCard,
  parameters: {
    docs: {
      description: {
        component: "Login Component.",
      },
    },
  },
};

export default meta;
export const Default = {
  render: () => ({
    components: { LoginCard },
    template: `
      <div class="py-8 px-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <LoginCard />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default appearance of the LoginCard component.",
    },
  },
};

export const WithSubmitHandler = {
  render: () => ({
    components: { LoginCard },
    setup() {
      const handleLoginSubmit = (email) => {
        alert(`Email submitted: ${email}`);
      };
      return { handleLoginSubmit };
    },
    template: `
      <div class="py-8 px-4 max-w-sm bg-black flex justify-center items-center min-h-screen">
        <LoginCard @submitLogin="handleLoginSubmit" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "LoginCard with a handler for the email submission event.",
    },
  },
};
