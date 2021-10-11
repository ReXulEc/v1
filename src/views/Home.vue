<template>
  <div>

    <div class="h-2 bg-blue-900 justify items-center">
    </div>

    <navbar/>

      <div class="w-full p-4 flex flex-col items-center bg-gray-900 text-gray-50">
        <div class="flex items-center md:w-8/13 w-full justify-between">

          <div class="flex h-screen items-center bg-gray-800 p-5 h-50 w-full rounded-xl">
            <img src="../assets/logo.png" class="w-40 h-40 rounded-full border-4 border-gray-700" alt="Logo">
            <div class="ml-2">
            <p class="md:text-2xl text-gray-100">Student,<br/>
               Developer, Designer.</p>
               <p class="text-sm text-gray-400">
                 Hi! My name is Mert. I am 15-year-old dev from Turkey.
                 I built web apps using Vue.js, WindiCss, React and Ejs
               </p>
            </div>
          </div>
        </div>
          <div class="mt-5">
            <p class="text-xl mb-1">My Projects</p>
            <div class="md:flex flex-none">
              <div class="bg-gray-800 p-5 rounded-2xl md:mr-5 md:w-100 w-75 mb-2">
                <a class="text-lg" v-bind:href="links[0].to">{{ links[0].name }}</a>
                <p class="text-gray-400 text-sm break-words">{{ links[0].bio }}</p>
              </div>
              <div class="bg-gray-800 p-5 rounded-2xl md:w-100 w-75 mb-2">
                <a class="text-lg" v-bind:href="links[1].to">{{ links[1].name }}</a>
                <p class="text-gray-400 text-sm break-words">{{ links[1].bio }}</p>
              </div>
            </div>

            <div class="md:flex flex-none mt-2">
              <div class="bg-gray-800 p-5 rounded-2xl md:mr-5 md:w-100 w-75 mb-2">
                <a class="text-lg" v-bind:href="links[2].to">{{ links[2].name }}</a>
                <p class="text-gray-400 text-sm break-words">{{ links[2].bio }}</p>
              </div>
              <div class="bg-gray-800 p-5 rounded-2xl md:w-100 w-75 mb-2">
                <a class="text-lg" v-bind:href="links[3].to">{{ links[3].name }}</a>
                <p class="text-gray-400 text-sm break-words">{{ links[3].bio }}</p>
              </div>
            </div>
          </div>

            <div class="md:flex flex-none md:mt-2">
              <div class="bg-gray-800 p-5 rounded-2xl md:mr-5 md:w-100 w-75 mb-2">
                <a class="text-lg" v-bind:href="links[4].to">{{ links[4].name }}</a>
                <p class="text-gray-400 text-sm break-words">{{ links[4].bio }}</p>
              </div>
              <div class="bg-gray-800 p-5 rounded-2xl md:w-100 w-75 mb-2">
                <a class="text-lg" v-bind:href="links[5].to">{{ links[5].name }}</a>
                <p class="text-gray-400 text-sm break-words">{{ links[5].bio }}</p>
              </div>
            </div>

      </div>

  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
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
  components: {
    navbar
  }
}
</script>
