<template>
  <div class="flex flex-col items-center relative w-5/6 mx-auto pt-12">
    <Nav class="absolute top-0 left-0 right-0" />
    <Hero />
    <BadNewsBundler />
    <a href="https://pump.fun/coin/D67a1LAerQZ522nDMh9BPkmPoLXfF5qHUDFSZqjDpump" target="_blank" rel="noopener noreferrer">
      <img :src="pumpGif" alt="pump fun" />
    </a>
    <footer>
      <div class="copyright text-xs mt-20 mb-5">
        BadNewsBears © 2025
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Nav from './sections/Nav.vue'
import Hero from './sections/Hero.vue'
import BadNewsBundler from "./sections/BadNewsBundler.vue";
import pumpGif from './assets/pump.gif'
</script>
