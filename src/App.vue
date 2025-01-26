<template>
  <div class="flex flex-col items-center relative w-5/6 mx-auto py-12">
    <Nav class="absolute top-0 left-0 right-0" />
    <Hero />
    <BadNewsBundler />
    <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">
    <img src="/assets/pump.gif" alt="pump fun" />
    </a>
  </div>
</template>

<script setup lang="ts">
import Nav from './sections/Nav.vue'
import Hero from './sections/Hero.vue'
import BadNewsBundler from "./sections/BadNewsBundler.vue";
</script>