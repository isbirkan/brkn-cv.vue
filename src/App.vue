<template>
  <cv-page
    :identifier="pageIdentifier.pageOne"
  />
  <cv-page
    :identifier="pageIdentifier.pageTwo"
  />
</template>

<script setup lang="ts">
import { pageIdentifier } from '@/constants/elements';
import CvPage from '@/components/organisms/CvPage.vue';
</script>