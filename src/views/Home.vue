<template>
  <div class="min-h-[100vh] justify-items-start bg-black">
    <navbar class="p-4 pt-20"/>
    <home class="md:pt-15 md:pl-15 pt-10 pl-5"/>
    <timeOutput class="md:pl-15 pl-5"/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import home from '@/components/index.vue'
import timeOutput from '@/components/time.vue'

export default{
components: {
  navbar,
  home,
  timeOutput,
  },
metaInfo() {
        return { 
            title: "rexulec.",
            meta: [
                { name: 'description', content:  '15-year-old Developer and student from the Turkey'},
                { property: 'og:title', content: "rexulec. - v1"},
                { property: 'og:site_name', content: 'rexulec'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content: 'https://i.hizliresim.com/6j0bvr6.png' },    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

.inter700 {
  font-family: "Inter";
  font-weight: 700;
}
</style>
