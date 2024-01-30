<template>
  <section class="flex-1 flex-col bg-white px-3 leading-4">
    <cv-header v-if="pageIdentifier === page.pageOne" />
    <div class="absolute bottom-1 left-cst-244 font-aller text-xs">
      @BRKN.Digital
    </div>
  </section>
</template>
    
<script setup lang="ts">
import {type MainContent} from '@/types/mainContent.props.types';
import { pageIdentifier as page } from '@/constants/elements';
import CvHeader from '@/components/atoms/Header.vue';

const props = defineProps<MainContent>();
</script>