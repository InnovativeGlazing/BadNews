<template>
  <div class="flex flex-col gap-36 relative w-5/6 mx-auto py-12">
    <Nav class="absolute top-0 left-0 right-0" />
    <Hero />
    <Tokenomics />
  </div>
</template>

<script setup lang="ts">
import Nav from './sections/Nav.vue'
import Hero from './sections/Hero.vue'
import Tokenomics from "./sections/Tokenomics.vue";
</script>