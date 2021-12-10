<template>
  <header class="w-full flex flex-col items-start space-y-2">
    <div class="items-start">
      <div class="grid items-center about mt-2">
        <h1 class="font-bold text-2xl text-2xl">rexulec.</h1>
        <p>
          I am <b>15-years-old</b> dev and student from <b>Turkey</b>. I am a student who spends most all of his free time doing open source <b>projects/websites/softwares</b>
        </p>
      </div>
    </div>
    <WidgetDiscord />
    <WidgetSpotify />
    <WidgetWeather />

  </header>
</template>

<script>
export default {}
</script>

<style>
@media screen and (max-device-width: 950px) {
  .profile {
    @apply grid;
  }
  .about {
    @apply mt-2 ml-0;
  }
}
</style>
