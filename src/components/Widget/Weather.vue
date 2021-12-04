<template>
  <div
    v-if="$fetchState.pending"
    class="w-24 h-4 bg-gray-900 bg-opacity-30 animate-pulse"
  ></div>

<!--- thx mehmetali for fixing bugs lmao --->

<div class="bg-gray-900 bg-opacity-30 p-4 rounded-md" v-else>
  <div class="flex font-bold text-lg">
    It's currently {{ weather.main.temp }}°K 
    <div class="flex text-sm font-light text-gray-400">
      {{ weather.weather[0].description }}
    </div>
    <div class="flex ml-2">
      <p> on Izmir.</p>
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
      'https://api.openweathermap.org/data/2.5/weather?q=Izmir&appid=e592e6ff1472a5177206326a12567fe4'
    )
    this.weather = weather
  },
}
</script>