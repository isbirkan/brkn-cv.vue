<template>
  <div class="pl-2 mt-4">
    <div class="flex flex-row items-center">
      <span class="education-icon-wrapper">
        <i class="fas fa-book fa-lg text-white relative top-px -right-1" />
      </span>
      <h4 class="ml-1.5 font-bebas font-medium text-cst-24 leading-5 text-gray-custom-medium">
        Education
      </h4>
    </div>
    <hr class="h-px w-36 ml-12 mb-4 bg-gray-custom-dark border-gray-custom-dark opacity-25">
    <div class="-mt-4 ml-cst-22 timeline-decoration">
      <education 
        v-for="education in educations" 
        :key="education" 
        :identifier="(education as EducationIdentifier)"
      />
    </div>
  </div>
</template>
      
<script setup lang="ts">
import { EducationIdentifier } from '@/constants/identifiers';
import Education from '@/components/atoms/Education.vue';
import { type EducationExperience } from '@/types/educationExperience.props.types';

defineProps<EducationExperience>();
</script>