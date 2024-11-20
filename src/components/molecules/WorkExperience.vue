<template>
  <div class="pl-2 mt-4">
    <div class="flex flex-row items-center">
      <span class="work-icon-wrapper">
        <i class="fas fa-laptop-code fa-lg text-white relative top-px" />
      </span>
      <h4 class="ml-1.5 font-bebas font-medium text-cst-24 leading-5 text-gray-custom-medium">
        Work Experience
      </h4>
    </div>
    <hr class="h-px w-36 ml-12 mb-4 bg-gray-custom-dark border-gray-custom-dark opacity-25">
    <div class="-mt-4 ml-cst-22 timeline-decoration">
      <work-place 
        v-for="(workPlace, index) in workPlaces" 
        :key="workPlace" 
        :identifier="(workPlace as WorkplaceIdentifier)"
        :is-first="index === 0"
      />
    </div>
  </div>
</template>
      
<script setup lang="ts">
import { WorkplaceIdentifier } from '@/constants/identifiers';
import WorkPlace from '@/components/atoms/WorkPlace.vue';
import { type WorkExperience } from '@/types/workExperience.props.types';

defineProps<WorkExperience>();
</script>