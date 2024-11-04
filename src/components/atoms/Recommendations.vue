<template>
  <div class="mt-4">
    <h6 class="sidebar-title-font before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <div v-for="recommendation in recommendationList" :key="recommendation.name.replace(/\s+/g, '')" class="mt-2">
      <i class="fas fa-quote-left fa-xs mb-2" />
      <p class="text-xs leading-4 -mt-3">
        &emsp;&emsp; {{ recommendation.content }}
      </p>
      <i class="fas fa-quote-right fa-xs -mt-2 mb-4 float-end" />
      <span class="text-xs italic leading-3 flex flex-col mr-5 mt-1">
        <p class="font-bold self-end">{{ recommendation.name }}</p>
        <p class="self-end text-right">{{ recommendation.position }}</p>
      </span>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { type Recommendations } from '@/types/sidebar.props.types';
defineProps<Recommendations>();
</script>