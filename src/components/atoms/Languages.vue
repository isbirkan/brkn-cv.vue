<template>
  <div class="mt-12">
    <h6 class="mb-0.5 font-medium uppercase leading-5 before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <div class="flex flex-row justify-around mt-4">
      <div 
        v-for="line in languageLine" 
        :key="line.replace(/\s+/g, '')" 
        class="flex flex-col items-center w-1/3"
      >
        <div :class="`language-level ${line}`" />
        <label class="text-sm leading-4 capitalize">
          {{ line }}
        </label> 
      </div>
    </div>
  </div>
</template>
    
  <script setup lang="ts">
  import { type Langauges } from '@/types/props.types';
  defineProps<Langauges>();
  </script>