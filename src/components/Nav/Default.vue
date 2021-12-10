<template>
  <div
    class="
      w-full
      flex flex-col
      bg-gray-200
      dark:bg-black
      bg-opacity-60
      dark:bg-opacity-60
      items-end
    "
  >
  <div
    class="
    w-screen
    h-2
  bg-indigo-700
    ">
  </div>
    <div class="w-full flex justify-center mt-4">
      <div class="flex w-9/12 justify-between">
        <nuxt-link to="/">
          <div class="flex items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="randomImg()"></path></svg>
            <h1 class="font-bold hidden sm:block text-2xl ml-4">
              rexulec!
            </h1>
          </div>
        </nuxt-link>

        <div class="hidden md:flex items-center space-x-5">
              <nuxt-link
                class="text-lg font-bold"
                to="/projects"
                >projects</nuxt-link
              >
              <a 
                class="text-lg font-bold"
                href="https://repeatpay.ga/rexulec">donate</a>
          <Color />
        </div>
        <div
          class="flex flex-col md:hidden relative justify-center items-center"
        >
          <h1 class="font-bold cursor-pointer text-lg" @click="showMenu()">
            Menu
          </h1>
          <transition name="fade" mode="out-in">
            <div
              v-if="menu"
              class="
                bg-gray-900
                absolute
                top-10
                bg-opacity-50
                p-4
                flex flex-col
                items-end
                rounded-md
              "
            >
              <nuxt-link
                class="text-lg font-bold"
                to="/projects"
                >projects</nuxt-link
              >
              <a 
                class="text-lg font-bold"
                href="https://repeatpay.ga/rexulec">donate</a>
              <Color />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      links: [
        {
          name: 'projects',
          to: '/projects',
        },
        {
          name: 'donate',
          to: '/donate',
        },
      ],
    }
  },
  methods: {
    showMenu() {
      if (this.menu === false) {
        this.menu = true
      } else {
        this.menu = false
      }
    },
    randomImg() {
      const images = [
        'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
        'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',
      ]
      var rand = images[(Math.random() * images.length) | 0]
      return rand
    }
  },
}
</script>

<style></style>
