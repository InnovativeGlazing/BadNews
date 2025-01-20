<template>
  <div class="flex items-center justify-between mx-auto py-4">

    <Logo class="h-8 w-fit" />

    <div class="flex items-center gap-6">
      <a href="https://gitbook.badnewsbears.ai" target="_blank"><GitBookLogo class="h-6 fill-white hover:fill-bear-blue duration-300" /> </a>
      <a href="https://x.com/badnewsbearsai" target="_blank" class="hover:text-bear-blue duration-300"><XLogo class="h-4 fill-white hover:fill-bear-blue duration-300"  /></a>
      <a href="https://t.me/badnewsbearsAI" class="hover:text-bear-blue duration-300" target="_blank"><TelegramLogo class="h-5 fill-white hover:fill-bear-blue duration-300"  /> </a>
      <a href="#" class="hover:text-bear-blue duration-300" target="_blank"><DexScreenerLogo class="h-5 fill-white hover:fill-bear-blue duration-300"  /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import XLogo from "../components/common/XLogo.vue";
import GitBookLogo from "../components/common/GitBookLogo.vue";
import DexScreenerLogo from "../components/common/DexScreenerLogo.vue";
import TelegramLogo from "../components/common/TelegramLogo.vue";
import Logo from "../components/common/Logo.vue";
</script>