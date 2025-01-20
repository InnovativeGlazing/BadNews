<template>
  <div class="flex items-center justify-between mx-auto py-4">

    <Logo class="h-8 w-fit" />

    <div class="flex items-center gap-6">
      <a href="#"><GitBookLogo class="h-6 fill-white hover:fill-bear-blue duration-300" /> </a>
      <a href="#" class="hover:text-bear-blue duration-300"><XLogo class="h-4 fill-white hover:fill-bear-blue duration-300"  /></a>
      <a href="#" class="hover:text-bear-blue duration-300"><TelegramLogo class="h-5 fill-white hover:fill-bear-blue duration-300"  /> </a>
      <a href="#" class="hover:text-bear-blue duration-300"><DexScreenerLogo class="h-5 fill-white hover:fill-bear-blue duration-300"  /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoWithText from "../components/common/LogoWithText.vue";
import XLogo from "../components/common/XLogo.vue";
import GitBookLogo from "../components/common/GitBookLogo.vue";
import DexScreenerLogo from "../components/common/DexScreenerLogo.vue";
import TelegramLogo from "../components/common/TelegramLogo.vue";
import Logo from "../components/common/Logo.vue";
</script>