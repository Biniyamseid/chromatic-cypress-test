<script setup>
  import { ref } from "vue";
  import AppAlert from "../components/appalert.vue";
  import login from "../pages/login.vue";
  import RegistrationForm from "../components/registrationform.vue";
  
  const isLoginVisible = ref(false);
  const isRegistrationMode = ref(false);
  const email = ref("");
  const currentUser = useAuthUser();
  
  const showLogin = () => {
    isLoginVisible.value = true;
    isRegistrationMode.value = false; // Show login by default
  };
  
  const handleLoginSuccess = (userEmail) => {
    console.log("Login successful for email:", userEmail);
    email.value = userEmail; // Store the email for registration
    isRegistrationMode.value = true; // Switch to registration mode
  };
  
  const goBackToLogin = () => {
    isRegistrationMode.value = false; // Switch back to login
  };
  </script>
  
  <style scoped>
  .landing-page {
    text-align: center;
    padding: 20px;
  }
  
  .landing-header {
    background-color: #f8f9fa;
    padding: 50px;
    border-bottom: 1px solid #ddd;
  }
  
  .cta-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .features {
    margin: 50px 0;
  }
  
  .feature-item {
    margin: 20px 0;
  }
  
  .landing-footer {
    margin-top: 50px;
    padding: 20px;
    background-color: #f8f9fa;
  }
  </style>
   




<template>
  <div>
    <PageTitle title="Home" />
    <PageDescription description="Aladia Authentication" />
    <PageUser :user="currentUser" />

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
</template>



<!-- <template>
    <div class="landing-page">
      <header class="landing-header">
        <h1>Welcome to Aladia</h1>
        <p>Your learning journey starts here</p>
        <button @click="showLogin" class="cta-button">Get Started</button>
      </header>
  
      <section class="features">
        <h2>Features</h2>
        <div class="feature-item" v-for="feature in features" :key="feature.id">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </section>
  
      <footer class="landing-footer">
        <p>&copy; 2024 Aladia. All rights reserved.</p>
      </footer>
  
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
  </template> -->

<!--   
  
  <script setup>
  import { ref } from "vue";
  import AppAlert from "../components/appalert.vue";
  import login from "../pages/login.vue";
  import RegistrationForm from "../components/registrationform.vue";
  
  const isLoginVisible = ref(false);
  const isRegistrationMode = ref(false);
  const email = ref("");
  
  const showLogin = () => {
    isLoginVisible.value = true;
    isRegistrationMode.value = false; // Show login by default
  };
  
  const handleLoginSuccess = (userEmail) => {
    console.log("Login successful for email:", userEmail);
    email.value = userEmail; // Store the email for registration
    isRegistrationMode.value = true; // Switch to registration mode
  };
  
  const goBackToLogin = () => {
    isRegistrationMode.value = false; // Switch back to login
  };
  </script>
  
  <style scoped>
  .landing-page {
    text-align: center;
    padding: 20px;
  }
  
  .landing-header {
    background-color: #f8f9fa;
    padding: 50px;
    border-bottom: 1px solid #ddd;
  }
  
  .cta-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .features {
    margin: 50px 0;
  }
  
  .feature-item {
    margin: 20px 0;
  }
  
  .landing-footer {
    margin-top: 50px;
    padding: 20px;
    background-color: #f8f9fa;
  }
  </style>
   -->