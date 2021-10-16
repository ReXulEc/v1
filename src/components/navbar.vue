<template>
  <div
    class="w-full p-4 pt-20 flex flex-col items-center bg-black text-gray-50"
  >
    <div class="flex items-center md:w-8/13 w-full justify-between">
      <div class="flex items-center space-x-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      </div>
      <div class="hidden sm:flex items-center space-x-5">
      <a
        v-for="(link, index) in links"
        :key="`link-${index}`"
        class=" text-base w-max"
        v-bind:href="link.to"
      >{{ link.name }}</a>
      </div>
      <div class="sm:hidden flex items-center space-x-3">
        <div @click="showMenu()" class="text-lg font-bold md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </div>
    </div>
    <div class="grid mt-4 w-full items-center space-y-2 rounded-b-md" v-if="menu">
      <a
        v-for="(link, index) in links"
        :key="`link-${index}`"
        class="text-lg w-max"
        v-bind:href="link.to"
      >{{ link.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "projects",
          to: "/projects",
        },
        {
          name: "donate",
          to: "https://repeatpay.ga/rexulec",
        },
        {
          name: "blog",
          to: "#blog",
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

body {
  font-family: "Inter";
}
</style>