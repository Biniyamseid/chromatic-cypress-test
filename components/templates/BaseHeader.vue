<script lang="ts" setup>
import AppAlert from "../components/appalert.vue";
  import login from "../pages/login.vue";
  // import RegistrationForm from "../components/registrationform.vue";
const isAdmin = useAdmin();




  
  const isLoginVisible = ref(false);
  const isRegistrationMode = ref(false);
  const email = ref("");
  const currentUser = useAuthUser();
  
  const showLogin = () => {
    isLoginVisible.value = true;
    isRegistrationMode.value = false; // Show login by default
  };
  
  const handleLoginSuccess = (userEmail:any) => {
    console.log("Login successful for email:", userEmail);
    email.value = userEmail; // Store the email for registration
    isRegistrationMode.value = true; // Switch to registration mode
  };
  
  const goBackToLogin = () => {
    isRegistrationMode.value = false; // Switch back to login
  };


const { logout } = useAuth();

const form = reactive({
  pending: false,
});

async function onLogoutClick() {
  try {
    form.pending = true;

    await logout();

    await navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <header class="bg-slate-900">
    <div class="p-3 mx-auto w-full max-w-4xl">
      <nav class="flex gap-3">
        <NuxtLink to="/" class="flex flex-col text-center">
          <span class="font-bold text-lg uppercase leading-none">Aladia</span>
          <span class="text-sm leading-none text-slate-400"></span>
        </NuxtLink>
        <div class="ml-auto flex items-center gap-3">
          <template v-if="currentUser">
            <NuxtLink to="/private" class="px-3 font-semibold">Private</NuxtLink>
            <NuxtLink v-if="isAdmin" to="/admin" class="px-3 font-semibold">Admin</NuxtLink>
            <button
              class="py-1.5 px-3 rounded bg-light-100 font-semibold text-sm text-slate-950 hover:bg-light-700 transition-colors"
              :disabled="form.pending"
              @click="onLogoutClick"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/guest" class="px-3 font-semibold">Public</NuxtLink>
            <NuxtLink to="/login" class="px-3 font-semibold">Login</NuxtLink>
          </template>
        </div>
      </nav>
      <div class="landing-page">
      <!-- <header class="landing-header">
        <h1>Welcome to Aladia</h1>
        <p>Your learning journey starts here</p>
        <button @click="showLogin" class="cta-button">Get Started</button>
      </header> -->
  
      <!-- <section class="features">
        <h2>Features</h2>
        <div class="feature-item" v-for="feature in features" :key="feature.id">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </section> -->
  
      <AppAlert
        :visible="isLoginVisible"
        @update:visible="isLoginVisible = $event"
      >
        <login v-if="!isRegistrationMode" @loginSuccess="handleLoginSuccess" />
        <RegistrationForm
          v-if="isRegistrationMode"
          :email="email"
          @goBackToLogin="goBackToLogin"
        />
      </AppAlert>
    </div>
    </div>
  </header>
</template>
