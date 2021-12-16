<template>
  <div
    v-if="$fetchState.pending"
    class="w-24 h-4 bg-gray-800 bg-opacity-30 animate-pulse"
  ></div>

<!--- thx mehmetali for fixing bugs lmao --->

<div class="flex bg-gray-800 bg-opacity-30 p-4 rounded-md" v-else>
  <div class="flex font-bold md:text-lg">
    <div class="grid content-center">
      <img class="" height="72" width="72" :src=icons() alt="">
    </div>
    <div class="grid ml-2 content-center">
    It's currently {{ weather.main.temp }}°C||{{ weather.weather[0].description }} on Izmir.
    </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      weather: {},
    }
  },
  async fetch() {
    const { data: weather } = await this.$axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Izmir&appid=e592e6ff1472a5177206326a12567fe4&units=metric'
    )
    this.weather = weather
  },
  methods: {
    icons() {
      const imgsrc = '/weatherIcons/' + this.weather.weather[0].icon + '.png'
      return imgsrc
    }
  }
}
</script>
