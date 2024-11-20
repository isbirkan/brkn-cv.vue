<template>
  <cv-page
    :identifier="PageIdentifier.pageOne"
  />
  <cv-page
    :identifier="PageIdentifier.pageTwo"
  />
  <cv-page
    :identifier="PageIdentifier.pageThree"
  />
  <cv-page
    :identifier="PageIdentifier.pageFour"
  />
</template>

<script setup lang="ts">
import { PageIdentifier } from '@/constants/identifiers';
import CvPage from '@/components/organisms/CvPage.vue';
</script>