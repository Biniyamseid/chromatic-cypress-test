<template>
    <div class="relative z-10 h-full p-5 text-13 .registration-form">
      <div>
        
        <div
          class="button next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95"
          @click="goBackToLogin"
        >
          <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="octicon arrow-symbol-mktg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                class="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          Back to Log in
        </div>
  
        <div class="flex flex-col items-center px-4">
          <div class="mb-4 flex w-full items-end gap-6 px-4">
            <div
              class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white"
            >
              <div class="gradient absolute inset-0 opacity-20"></div>
              <img
                id="profile-picture-preview"
                class="absolute inset-0 h-full w-full rounded object-cover"
                alt="Profile Picture Preview"
              />
              <input
                type="file"
                accept="image/*"
                class="absolute inset-0 opacity-0"
                id="profile-picture-upload"
                @change="previewProfilePicture"
              />
            </div>
            <div>
              <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
              <div class="text-xs text-white/70">
                Upload a profile picture <br />and complete your presentation
              </div>
            </div>
          </div>
  
         
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-user text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black border text-center transition-all"
              v-model="formData.name"
              autocomplete="new-password"
              type="text"
              placeholder="Name"
            />
          </div>
  
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-user text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black border text-center transition-all"
              v-model="formData.surname"
              autocomplete="new-password"
              type="text"
              placeholder="Surname"
            />
          </div>
  
        
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-user text-base text-black/70"></i>
            </div>
            <input
              disabled
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none border text-center"
              v-model="formData.email"
              type="text"
            />
          </div>
  
        
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-key text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="autofill-input h-full flex-1 rounded bg-transparent text-sm text-black outline-none border text-center"
              v-model="formData.password"
              type="password"
              placeholder="Password"
            />
          </div>
  
          <div class="group relative mb-6 flex h-10 w-full rounded bg-white">
            <div class="flex w-10 items-center justify-center text-xl">
              <i class="fa-solid fa-key text-base text-black/70"></i>
            </div>
            <input
              maxlength="100"
              class="autofill-input h-full flex-1 rounded bg-transparent text-sm text-black outline-none border text-center"
              v-model="formData.confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
  
          
          <div class="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              v-model="formData.termsAccepted"
              id="terms-checkbox"
            />
            <div class="text-xs text-white/70">
              I accept
              <span class="underline text-white">Terms & Conditions</span> and
              <span class="underline text-white">Privacy Policy</span>
            </div>
          </div>
  
          
          <button
            :disabled="!formIsValid"
            class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border bg-black text-center text-sm"
          >
            <div class="gradient absolute inset-0 opacity-50"></div>
            <div>Enter</div>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const emit = defineEmits("goBackToLogin");
  
  const props = defineProps({
    email: String, 
  });
  const formData = ref({
    name: "",
    surname: "",
    email: props.email, 
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  
  const goBackToLogin = () => {
    emit("goBackToLogin");
  };
  
  const handleSubmit = () => {
    // Handle registration form submission logic
    console.log("Registration submitted for email:", props.email);
  };
  </script>
 