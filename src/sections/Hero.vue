<template>
  <div class="h-screen flex flex-col items-center justify-center gap-12 relative" id="hero">
    <div ref="title" class="h-16 md:h-36 relative">
      <div ref="slogan" class="h-20 absolute  -top-28 -left-20 md:-left-28"><Slogan /></div>

      <TextLogo />
    </div>

    <div ref="cta" class="flex gap-4">
      <a href="#tokenomics"><div class="px-2.5 py-2 border rounded-md cursor-pointer hover:bg-bear-blue duration-300">Tokenomics</div></a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import TextLogo from "../components/common/TextLogo.vue";
import Slogan from "../components/common/Slogan.vue";

const title = ref(null);
const slogan = ref(null);
const cta = ref(null);
const bearImage = ref(null);

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
      }, '-=0.5')
      .from(cta.value.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      }, '<') // Starts at the same time as the slogan
      .from(bearImage.value, {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, '<') // Starts at the same time as the slogan and CTA
      .to(slogan.value, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, '-=0.8'); // Adjust this value to fine-tune when the floating starts
});


</script>

<style scoped>


.hero-image {
  max-width: 50%;
  height: auto;
}
</style>