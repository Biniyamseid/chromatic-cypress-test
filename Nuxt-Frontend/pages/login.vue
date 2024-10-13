<script setup>
import { ref } from "vue";

const email = ref("");

import { defineProps } from 'vue';



const props = defineProps({
  email: String,
  isSubmitting: {

  type: Boolean,

  default: false,

  },
});


const handleLogin = () => {
  const redirecttot = "/register";
  navigateTo(redirecttot);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
};
</script>

<template>
    <div class="login-container">
      <div
        class="relative z-10 h-full p-5 text-13 flex justify-center border shadow-xl items-center"
      >
        <div class="pt-8">
          <div
            class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6"
          >
            <div class="gradient absolute inset-0 opacity-[0.15]"></div>
            <div
              class="relative flex w-full justify-between transition-all duration-300 opacity-100"
            >
              <img
                src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
                class="h-20 w-20 object-cover"
                alt="Aladia Logo"
              />
              <div>
                <div class="mb-2 text-base font-semibold">Welcome to Aladia,</div>
                <div class="text-white/70">
                  Create or access your <br />
                  account from here
                </div>
              </div>
            </div>
            <div
              class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0"
            >
              <i class="fa-solid fa-spinner animate-spin text-xs"></i>
            </div>
          </div>
          <div class="mb-6 text-center">Enter your email</div>
          <form
            @submit.prevent="handleLogin"
            class="mb-6 flex flex-col items-center px-4"
          >
            <div
              class="group relative mb-8 flex h-10 w-full rounded transition-all bg-white"
            >
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-envelope text-base text-black/70"></i>
              </div>
              <input
                v-model="email"
                maxlength="100"
                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
                autocomplete="off"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <button
              type="submit"
              class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm mb-6"
            >
              <div class="gradient absolute inset-0"></div>
              <div @click="onSubmit" class="text-white">Enter</div>
            </button>
          </form>
          <div class="w-full transition-all duration-300">
            <div class="mb-6 flex items-center justify-between gap-4">
              <div
                class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"
              ></div>
              <div>Or</div>
              <div
                class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"
              ></div>
            </div>
            <div class="mb-8 flex w-full flex-col gap-4">
              <div
                @click="continueWithGoogle"
                class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 shadow-[0px_3px_6px_#000000] active:scale-95"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.4284%2020.9199H43.7503V20.8334H25.0003V29.1667H36.7743C35.0566%2034.0178%2030.441%2037.5001%2025.0003%2037.5001C18.0972%2037.5001%2012.5003%2031.9032%2012.5003%2025.0001C12.5003%2018.097%2018.0972%2012.5001%2025.0003%2012.5001C28.1868%2012.5001%2031.0857%2013.7022%2033.293%2015.6657L39.1857%209.773C35.4649%206.30529%2030.4878%204.16675%2025.0003%204.16675C13.4951%204.16675%204.16699%2013.4949%204.16699%2025.0001C4.16699%2036.5053%2013.4951%2045.8334%2025.0003%2045.8334C36.5055%2045.8334%2045.8337%2036.5053%2045.8337%2025.0001C45.8337%2023.6032%2045.6899%2022.2397%2045.4284%2020.9199Z'%20fill='%23FFC107'/%3e%3cpath%20d='M6.56836%2015.3032L13.4132%2020.323C15.2652%2015.7376%2019.7507%2012.5001%2024.9996%2012.5001C28.1861%2012.5001%2031.085%2013.7022%2033.2923%2015.6657L39.185%209.773C35.4642%206.30529%2030.4871%204.16675%2024.9996%204.16675C16.9975%204.16675%2010.0579%208.68446%206.56836%2015.3032Z'%20fill='%23FF3D00'/%3e%3cpath%20d='M25%2045.8333C30.3812%2045.8333%2035.2708%2043.7739%2038.9677%2040.425L32.5198%2034.9687C30.4281%2036.5531%2027.8281%2037.5%2025%2037.5C19.5812%2037.5%2014.9802%2034.0448%2013.2469%2029.2229L6.45312%2034.4573C9.90104%2041.2041%2016.9031%2045.8333%2025%2045.8333Z'%20fill='%234CAF50'/%3e%3cpath%20d='M45.4281%2020.9197H43.75V20.8333H25V29.1666H36.774C35.949%2031.4968%2034.45%2033.5062%2032.5167%2034.9697C32.5177%2034.9687%2032.5187%2034.9687%2032.5198%2034.9676L38.9677%2040.4239C38.5115%2040.8385%2045.8333%2035.4166%2045.8333%2024.9999C45.8333%2023.603%2045.6896%2022.2395%2045.4281%2020.9197Z'%20fill='%231976D2'/%3e%3c/svg%3e"
                  class="h-6"
                />
                <div class="w-40">Continue with Google</div>
              </div>
              <div
                @click="continueWithFacebook"
                class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 shadow-[0px_3px_6px_#000000] active:scale-95"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='55'%20height='55'%20viewBox='0%200%2055%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.5003%205.72925C21.7263%205.72925%2016.1888%208.02295%2012.106%2012.1058C8.0232%2016.1886%205.72949%2021.7261%205.72949%2027.5001C5.72949%2033.2741%208.0232%2038.8116%2012.106%2042.8944C16.1888%2046.9772%2021.7263%2049.2709%2027.5003%2049.2709C33.2743%2049.2709%2038.8118%2046.9772%2042.8946%2042.8944C46.9774%2038.8116%2049.2701%2033.2741%2049.2701%2027.5001C49.2701%2021.7261%2046.9774%2016.1886%2042.8946%2012.1058C38.8118%208.02295%2033.2743%205.72925%2027.5003%205.72925Z' fill='%234E69B4'/%3e%3cpath%20d='M36.0633%2025H27.5003V45H18.9893V25H15V17H18.9893V13.1667C18.9893%2010.1395%2020.2673%207.615%2023.2573%207.615C24.8701%207.615%2026.5793%207.743%2028.4393%207.868V15.708H26.5013C25.1873%2015.708%2024.8577%2016.2045%2024.8577%2017.4572V19.9999H28.3833L27.5623%2025H24.8577V45H36.0633V25Z' fill='white'/%3e%3c/svg%3e"
                  class="h-6"
                />
  
                <div class="w-40">Continue with Facebook</div>
              </div>
              <div
                @click="continueWithApple"
                class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 shadow-[0px_3px_6px_#000000] active:scale-95"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='55'%20height='55'%20viewBox='0%200%2055%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_195_22359)'%3e%3cpath%20d='M37.2396%2050.4167C35.2023%2050.4167%2033.8009%2049.7556%2032.5646%2049.1724C31.3729%2048.6109%2030.3428%2048.1251%2028.6458%2048.1251C26.9489%2048.1251%2025.9188%2048.6109%2024.7271%2049.1724C23.4907%2049.7556%2022.0894%2050.4167%2020.0521%2050.4167C15.0952%2050.4167%206.875%2039.0397%206.875%2026.9271C6.875%2018.8948%2012.4117%2012.6042%2019.4792%2012.6042C21.8018%2012.6042%2023.2134%2013.27%2024.459%2013.8566C25.6415%2014.4146%2026.6635%2014.8959%2028.6458%2014.8959C30.6281%2014.8959%2031.6502%2014.4146%2032.8327%2013.8566C34.0782%2013.27%2035.4899%2012.6042%2037.8125%2012.6042C40.865%2012.6042%2043.5795%2013.7294%2045.8815%2015.9512C46.2688%2016.3247%2046.459%2016.8599%2046.3936%2017.395C46.3283%2017.9301%2046.0167%2018.4033%2045.5515%2018.6737C42.8977%2020.2171%2041.25%2023.4885%2041.25%2027.2136C41.25%2031.4085%2043.5462%2035.0156%2046.9631%2036.1866C47.4111%2036.3402%2047.7755%2036.6713%2047.9703%2037.1021C48.1663%2037.5318%2048.1766%2038.0245%2047.9967%2038.4634C45.2157%2045.2777%2040.59%2050.4167%2037.2396%2050.4167ZM29.2188%2011.4584C28.8085%2011.4584%2028.4075%2011.3117%2028.0913%2011.0367C27.6753%2010.6746%2027.4565%2010.1338%2027.5069%209.58266C27.5206%209.44173%2027.8541%206.0936%2030.478%203.41579C32.9461%200.894955%2035.349%200.14558%2035.6136%200.0676633C36.174%20-0.095045%2036.779%200.0378717%2037.219%200.42058C37.6601%200.802143%2037.8767%201.38193%2037.7953%201.96058C37.7564%202.23673%2037.3496%204.75183%2035.2378%207.57402C32.9771%2010.5944%2029.7481%2011.3805%2029.6118%2011.4126C29.4811%2011.4435%2029.3494%2011.4584%2029.2188%2011.4584Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_195_22359'%3e%3crect%20width='55'%20height='55'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  class="h-6"
                />
                <div class="w-40">Continue with Apple</div>
              </div>
            </div>
          </div>
          <div class="cursor-pointer text-center text-white/40">
            Terms &amp; Conditions
          </div>
        </div>
      </div>
    </div>
  </template>
  
 
  