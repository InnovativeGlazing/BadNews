<template>
  <div class="h-screen flex flex-col items-center justify-center gap-6">
    <div ref="title" class="h-36 relative" >
    <div ref="slogan" class="h-20 absolute -top-28 -left-28"><Slogan /></div>

    <TextLogo/>
    </div>

    <div ref="cta" class="flex gap-4">
      <button class="px-2.5 py-2 border rounded-md hover:bg-bear-blue">Get Started</button>
      <button class="px-2.5 py-2 border rounded-md">Learn More</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import TextLogo from "../common/TextLogo.vue";
import Slogan from "../common/Slogan.vue";

const title = ref(null);
const slogan = ref(null);
const cta = ref(null);
const heroImage = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from(title.value, {
    y: -50,
    opacity: 0,
    duration: 1
  })
      .from(slogan.value, {
        y: 100,
        rotate: 15,
        opacity: 0,
        duration: 1.5,
      })
      .from(cta.value.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      }, '-=0.5');
});
</script>

<style scoped>


.hero-image {
  max-width: 50%;
  height: auto;
}
</style>
