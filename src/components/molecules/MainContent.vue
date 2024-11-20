<template>
  <section class="flex-1 flex-col px-3 bg-white leading-4">
    <cv-header v-if="pageIdentifier === page.pageOne" />
    <work-experience 
      v-if="isWorkPlaceVisible"
      :work-places="workPlaceItems || []"
    />
    <education-experience
      v-if="isEducationVisible"
      :educations="educationItems || []"
    />
    <div v-if="isSignatureVisible" class="absolute bottom-1 left-cst-244 font-aller text-xs">
      @BRKN.Digital
    </div>
  </section>
</template>
    
<script setup lang="ts">
import {type MainContent} from '@/types/mainContent.props.types';
import { PageIdentifier as page } from '@/constants/identifiers';

import CvHeader from '@/components/atoms/Header.vue';
import WorkExperience from '@/components/molecules/WorkExperience.vue';
import EducationExperience from '@/components/molecules/EducationExperience.vue';

defineProps<MainContent>();
</script>