<template>
  <cv-page
    :identifier="pageIdentifier.pageOne"
    :sidebar-visible="pageOneConfiguration?.isSidebarVisible || false"
    :sidebar-elements="pageOneConfiguration?.sidebarElements"
  />
  <cv-page
    :identifier="pageIdentifier.pageTwo"
    :sidebar-visible="pageTwoConfiguration?.isSidebarVisible || false"
    :sidebar-elements="pageTwoConfiguration?.sidebarElements"
  />
</template>

<script setup lang="ts">
import { usePage } from '@/stores/page';
import { pageIdentifier } from '@/constants/elements';
import CvPage from '@/components/organisms/CvPage.vue';

const store = usePage();
const pageOneConfiguration = store.getPageByIdentifier(pageIdentifier.pageOne);
const pageTwoConfiguration = store.getPageByIdentifier(pageIdentifier.pageTwo);
</script>