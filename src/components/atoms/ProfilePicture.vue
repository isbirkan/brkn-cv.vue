<template>
  <div class="profile-triangle" />
  <div class="flex justify-center relative mt-24 z-10">
    <img
      class="border-3 border-solid border-white rounded-full"
      :src="imageUrl"
      :width="`${width}px`"
      :height="`${125}px`"
    >
  </div>
</template>

<script setup lang="ts">
import { type Asset } from '@/types/asset.types';

const props = defineProps<Asset>();
const imageUrl = new URL(`../../assets/${props.src}`, import.meta.url).href;
</script>