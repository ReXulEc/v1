<template>
  <div>
    <div class="h-2 bg-blue-900 justify items-center">
    </div>
    <navbar/>
      <div class="w-full p-4 flex flex-col items-center bg-gray-900 text-gray-50">
        <div class="flex items-center md:w-7/12 w-full justify-between">
          <div class="bg-gray-800 p-30 w-full rounded-xl">
            <p>one</p>
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
