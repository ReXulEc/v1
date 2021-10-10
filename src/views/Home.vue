<template>
  <div>
    <div class="h-2 bg-blue-900 justify items-center">
    </div>
    <navbar/>
      <div class="w-full p-4 flex flex-col items-center bg-gray-900 text-gray-50">
        <div class="flex items-center md:w-7/12 w-full justify-between">
          <div class="flex h-screen items-center bg-gray-800 p-5 h-50 w-full rounded-xl">
            <img src="../assets/logo.png" class="w-40 h-40 rounded-full border-4 border-gray-700" alt="Logo">
            <div class="ml-2">
            <p class="md:text-2xl text-gray-100">Student,<br/>
               Developer, Designer.</p>
               <p class="text-sm text-gray-400">
                 Hi! My name is Mert. I am 15-year-old dev from Turkey.
                 I built web apps using Vue.js, WindiCss and React.js.
               </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>
