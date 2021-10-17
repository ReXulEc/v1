<template>
  <div class="min-h-[100vh] justify-items-start bg-black">
    <navbar class="p-4 pt-20"/>
    <home class="pt-12 pl-15"/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import home from '@/components/index.vue'

export default{
components: {
  navbar,
  home
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
