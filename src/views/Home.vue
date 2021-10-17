<template>
  <div class="min-h-[100vh] justify-items-start bg-black">
    <navbar class="p-4 pt-20"/>
    <home class="md:pt-12 md:pl-15 pl-5"/>
    <timee class="md:pl-15 pl-5"/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import home from '@/components/index.vue'
import timee from '@/components/time.vue'

export default{
components: {
  navbar,
  home,
  timee
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

.inter700 {
  font-family: "Inter";
  font-weight: 700;
}
</style>
