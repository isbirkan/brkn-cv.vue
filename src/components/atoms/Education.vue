<template>
  <div
    class="relative w-3 h-3 -ml-cst-6.72 top-8 bg-white border-solid border-2 border-gray-custom-medium-opaque rounded-full"
  />
  <div class="flex flex-col mt-2 ml-2.5 mr-2.5 pl-3 text-sm leading-4 text-gray-custom-medium">
    <div class="flex flex-row text-sm">
      <img
        v-if="educationImageUrl"
        :src="educationImageUrl"
        :style="{
          width: `${educationDetails?.logo.width}px`,
          height: `${educationDetails?.logo.height}px`,
          marginLeft: `${educationDetails?.logo.marginLeft}px`,
          marginRight: `${educationDetails?.logo.marginRight}px`
        }"
      >
      <div v-if="educationDetails" class="flex flex-col self-center w-full leading-cst-14">
        <span>
          <label class="font-bold">{{ educationDetails?.degree }}</label>
          {{ ' ' }}
          <label class="font-bold text-blue-custom">@{{ educationDetails?.institution }}</label>
        </span>
        <span>
          <label class="italic">{{ educationDetails?.specialisation }}</label>
          {{ ' - ' }}
          <label class="">{{ educationDetails?.period }}</label>
        </span>
      </div>
    </div>
    <div
      v-if="educationDescription"
      class="mt-1 text-cst-12.8 leading-cst-14 text-gray-custom-medium"
      v-html="educationDescription.description || ''"
    />
  </div>
</template>
    
<script setup lang="ts">
import { useEducation } from '@/stores/educationExperience';
import { type Education as EducationProps } from '@/types/mainContent.props.types';

const props = defineProps<EducationProps>();
const store = useEducation();

const educationConfiguration = store.getEducationByIdentifier(props.identifier);
const educationImageUrl = new URL(`../../assets/${educationConfiguration?.educationSection?.logo.src}`, import.meta.url).href;
const educationDetails = educationConfiguration?.educationSection;
const educationDescription = educationConfiguration?.descriptionSection || null;
</script>