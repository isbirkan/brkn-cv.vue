<template>
  <div class="mt-cst-40">
    <h6 class="sidebar-title-font before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <i class="fas fa-quote-left fa-lg mb-1" />
    <p class="text-sm leading-4">
      &emsp;&emsp; {{ description }}
    </p>
    <i class="fas fa-quote-right fa-lg mt-1 float-end" />
  </div>
</template>
  
<script setup lang="ts">
import { type AboutMe } from '@/types/sidebar.props.types';
defineProps<AboutMe>();
</script>