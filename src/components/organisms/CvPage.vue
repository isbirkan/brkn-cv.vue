<template>
  <section class="sheet">
    <div class="flex flex-row h-full">
      <sidebar 
        v-if="sidebarVisible" 
        :sidebar-elements="sidebarElements"
      />
      <div id="right-section" class="w-full h-full">
        {{ identifier }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Sidebar from '@/components/molecules/Sidebar.vue';
import { type CvPage } from '@/types/props.types';

defineProps<CvPage>();
</script>