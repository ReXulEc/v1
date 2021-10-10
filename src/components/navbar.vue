<template>
  <div
    class="w-full p-4 flex flex-col items-center bg-gray-900 text-gray-50"
  >
    <div class="flex items-center md:w-7/12 w-full justify-between">
      <div class="flex items-center space-x-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
        <router-link class="text-xl sm:text-2xl font-thin pollyRounded tracking-tighter" to="/">ReXulEc</router-link>
      </div>
      <div class="hidden sm:flex items-center space-x-5">
        <router-link
          v-for="(link, index) in links"
          :key="`link-${index}`"
          class="text-lg font-bold"
          :to="link.to"
        >{{ link.name }}</router-link>
      </div>
      <div class="sm:hidden flex items-center space-x-3">
        <div @click="showMenu()" class="text-lg font-bold md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </div>
    </div>
    <div class="grid mt-4 w-full items-center space-y-2 rounded-b-md" v-if="menu">
      <router-link
        v-for="(link, index) in links"
        :key="`link-${index}`"
        class="text-lg font-bold w-max"
        :to="link.to"
      >{{ link.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Donate",
          to: "/#donate",
        },
        {
          name: "Blog",
          to: "/blog",
        },
      ],
      menu: false,
    };
  },
  methods: {
    showMenu() {
      if (this.menu === false) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "PollyRounded";
  src: local("PollyRounded"),
   url(../fonts/PollyRounded-Bold.otf) format("OpenType");
}

.pollyRounded{
  font-family: "PollyRounded";
}
</style>