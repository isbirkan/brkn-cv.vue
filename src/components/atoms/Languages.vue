<template>
  <div class="mt-12">
    <h6 class="sidebar-title-font before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <div class="flex flex-row justify-around mt-4">
      <div v-for="language in languageList" :key="language.replace(/\s+/g, '')" class="flex flex-col items-center w-1/3">
        <div :class="`language-level ${language}`" />
        <label class="text-sm leading-4 capitalize">
          {{ language }}
        </label>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { type Langauges } from '@/types/sidebar.props.types';
defineProps<Langauges>();
</script>