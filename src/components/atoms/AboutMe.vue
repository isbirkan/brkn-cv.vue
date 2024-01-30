<template>
  <div class="mt-40">
    <h6 class="mb-0.5 font-medium uppercase leading-5 before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <i class="fas fa-quote-left fa-lg mb-1" />
    <p class="text-sm leading-4">
      {{ description }}
    </p>
    <i class="fas fa-quote-right fa-lg mt-1 float-end" />
  </div>
</template>
  
<script setup lang="ts">
import { type AboutMe } from '@/types/props.types';
defineProps<AboutMe>();
</script>