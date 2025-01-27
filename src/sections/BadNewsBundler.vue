<template>
  <div class="flex flex-col items-center gap-10" id="bnb">
    <div class="md:w-3/4 border rounded-lg px-8 py-4">
      <video
          :src="videoSrc"
          width="100%"
          height="100%"
          controls
      ></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import videoSrc from '/src/assets/videos/launch.mp4';

</script>
