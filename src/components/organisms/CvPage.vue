<template>
  <section class="sheet">
    <div class="flex flex-row h-full">
      <sidebar 
        v-if="pageConfiguration?.isSidebarVisible" 
        :sidebar-elements="pageConfiguration?.sidebarElements"
        :sidebar-recommendation-items="pageConfiguration?.sidebarRecommendationItems"
      />
      <main-content 
        :page-identifier="identifier"
        :is-signature-visible="pageConfiguration?.isSidebarVisible"
        :is-work-place-visible="pageConfiguration?.isWorkPlaceVisible"
        :is-education-visible="pageConfiguration?.isEducationVisible"
        :work-place-items="pageConfiguration?.workPlaceItems"
        :education-items="pageConfiguration?.educationItems"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePage } from '@/stores/page';
import { type CvPage } from '@/types/page.props.types';
import { PageIdentifier } from '@/constants/identifiers';

import Sidebar from '@/components/molecules/Sidebar.vue';
import MainContent from '@/components/molecules/MainContent.vue';

const props = defineProps<CvPage>();
const store = usePage();
const pageConfiguration = store.getPageByIdentifier(props.identifier as PageIdentifier);
</script>