<template>
  <div class="profile-triangle" />
  <div class="flex justify-center relative mt-cst-24 z-10">
    <img
      class="border-cst-3 border-solid border-white rounded-full"
      :src="imageUrl"
      :width="`${width}px`"
      :height="`${125}px`"
    >
  </div>
</template>

<script setup lang="ts">
import { type ProfilePicture } from '@/types/props.types';

const props = defineProps<ProfilePicture>();
const imageUrl = new URL(`../../assets/${props.src}`, import.meta.url).href;
</script>