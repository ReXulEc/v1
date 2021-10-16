<template>
  <div>
    <navbar/>
      <div class="w-full p-4 flex flex-col items-center bg-black text-gray-50">
        <div class="flex items-center md:w-8/13 w-full justify-between">

          <div class="flex h-screen items-center bg-gray-800 p-5 h-50 w-full rounded-xl">
            <img src="../assets/logo.png" class="w-40 h-40 rounded-full border-4 border-gray-700" alt="Logo">
            <div class="ml-2">
            <p class="md:text-2xl text-gray-100">Student,<br/>
               Developer, Designer.</p>
               <p></p>
               <p class="text-sm text-gray-400">
                 Hi! My name is Mert. I am 15-year-old dev from Turkey.
                 I built web apps using Vue.js, WindiCss, React and Ejs
               </p>
            </div>
          </div>
        </div>


      </div>

  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default{
components: {
  navbar
},
data() {
  return {
    links: [
      {
        name: "RepeatPay/RepeatPay",
        bio: "🎯 Innovative payment solution for your websites.",
        to: "https://github.com/RepeatPay/RepeatPay",
      },
      {
        name: "v1",
        bio: "🎄 A simple portfolio website made by using Vue.js",
        to: "https://github.com/ReXulEc/v1",
      },
      {
        name: "LightLogin",
        bio: "🔑 Customizable Basic Login Form For Libraries, Business... With 💖 and PyQt5.",
        to: "https://github.com/ReXulEc/LightLogin",
      },
      {
        name: "eba-canli-ders-bot",
        bio: "✨Eba canlı derslerinize otomatik olarak girer",
        to: "https://github.com/ReXulEc/eba-canli-ders-bot",
      },
      {
        name: "Esp8266-Telegram-Panic-Button",
        bio: "🥨 This is a portable panic button.",
        to: "https://github.com/ReXulEc/Esp8266-Telegram-Panic-Button",
      },
      {
        name: "craftrise-api",
        bio: "🎮 Craftrise'dan kullanıcıları çekebileceğiniz bir Api!",
        to: "https://github.com/ReXulEc/craftrise-api",
      },
    ],
  };
},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

body {
  font-family: "Inter";
}
</style>
