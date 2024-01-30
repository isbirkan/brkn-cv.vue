<template>
  <section class="sheet">
    <div class="flex flex-row h-full">
      <sidebar 
        v-if="pageConfiguration?.isSidebarVisible" 
        :sidebar-elements="pageConfiguration?.sidebarElements"
      />
      <main-content :page-identifier="identifier" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePage } from '@/stores/page';
import { type CvPage } from '@/types/page.props.types';
import { pageIdentifier } from '@/constants/elements';

import Sidebar from '@/components/molecules/Sidebar.vue';
import MainContent from '@/components/molecules/MainContent.vue';

const props = defineProps<CvPage>();
const store = usePage();
const pageConfiguration = store.getPageByIdentifier(props.identifier as pageIdentifier);
</script>