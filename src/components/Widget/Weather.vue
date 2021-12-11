<template>
  <div
    v-if="$fetchState.pending"
    class="w-24 h-4 bg-gray-800 bg-opacity-30 animate-pulse"
  ></div>

<!--- thx mehmetali for fixing bugs lmao --->

<div class="bg-gray-800 bg-opacity-30 p-4 rounded-md" v-else>
  <div class="font-bold text-lg">
    It's currently {{ Number.parseFloat(weather.main.temp-273).toFixed(2) }}°C||{{ weather.weather[0].description }} on Izmir.
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
      'https://api.openweathermap.org/data/2.5/weather?q=Izmir&appid=e592e6ff1472a5177206326a12567fe4'
    )
    this.weather = weather
  },
}
</script>