<template>
  <div>
    <div class="w-full p-4 flex flex-col items-center bg-black text-gray-200">
        <div class="flex items-center md:w-8/13 w-full inter500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="ml-2">{{currentDateTime()}} • {{ time }}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
methods: {
    currentDateTime() {
      const current = new Date();

      if(current.getMonth()+1 == 1){
          var gm = 'January'
      } else if(current.getMonth()+1 == 2){
          var gm = 'February'
      } else if(current.getMonth()+1 == 3){
          var gm = 'March'
      } else if(current.getMonth()+1 == 4){
          var gm = 'April'
      } else if(current.getMonth()+1 == 5){
          var gm = 'May'
      } else if(current.getMonth()+1 == 6){
          var gm = 'June'
      } else if(current.getMonth()+1 == 7){
          var gm = 'July'
      } else if(current.getMonth()+1 == 8){
          var gm = 'August'
      } else if(current.getMonth()+1 == 9){
          var gm = 'September'
      } else if(current.getMonth()+1 == 10){
          var gm = 'October'
      } else if(current.getMonth()+1 == 11){
          var gm = 'November'
      } else if(current.getMonth()+1 == 12){
          var gm = 'December'
      }

      const date = current.getDate()+' '+(gm)+ ' ' + current.getFullYear()
      const dateTime = date;
      
      return dateTime;
    },
},
  data() {
    return {
      interval: null,
      time: null
    }
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        date: 'numeric'
      }).format()
    }, 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

.inter500 {
  font-family: "Inter";
  font-weight: 500;
}
</style>
