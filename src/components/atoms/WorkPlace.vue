<template>
  <div
    class="relative w-3 h-3 -ml-cst-6.72 top-8 bg-white border-solid border-2 border-gray-custom-medium-opaque rounded-full"
  />
  <div class="flex flex-col mt-2 ml-2.5 mr-2.5 pl-3 text-sm leading-4 text-gray-custom-medium">
    <div v-if="isWorkPlaceHeaderVisible">
      <div class="flex flex-row text-sm">
        <img
          v-if="workPlaceImageUrl"
          :src="workPlaceImageUrl"
          :style="{
            width: `${workPlaceDetails?.logo.width}px`,
            height: `${workPlaceDetails?.logo.height}px`,
            marginLeft: `${workPlaceDetails?.logo.marginLeft}px`,
            marginRight: `${workPlaceDetails?.logo.marginRight}px`
          }"
        >
        <div v-if="workPlaceDetails" class="flex flex-col self-center w-full leading-cst-14">
          <span>
            <label class="font-bold">{{ workPlaceDetails?.position }}</label>
            {{ ' ' }}
            <label class="font-bold text-blue-custom">@{{ workPlaceDetails?.name }}</label>
          </span>
          <span>
            <label class="italic">{{ workPlaceDetails?.period }}</label>
            <label class="text-xs float-end">{{ `${workPlaceDetails?.location} / ${workPlaceDetails?.hireType}`
            }}</label>
          </span>
        </div>
      </div>
      <div v-if="workPlaceDetails?.intermediary" class="flex flex-row mb-1 text-sm">
        <img
          v-if="workPlaceDetails?.intermediary"
          :src="workPlaceIntermediaryImageUrl"
          :style="{
            width: `${workPlaceDetails?.intermediary?.logo.width}px`,
            height: `${workPlaceDetails?.intermediary?.logo.height}px`,
            marginLeft: `${workPlaceDetails?.intermediary?.logo.marginLeft}px`,
            marginRight: `${workPlaceDetails?.intermediary?.logo.marginRight}px`
          }"
        >
        <span class="self-center">
          <label class="italic">through</label>
          {{ ' ' }}
          <label class="font-bold text-blue-custom">@{{ workPlaceDetails?.intermediary?.name }}</label>
        </span>
      </div>
    </div>
    <div
      v-if="workPlaceDescription"
      class="mt-1 text-cst-12.8 leading-cst-14 text-gray-custom-medium"
      v-html="workPlaceDescription"
    />
    <div class="mt-2">
      <span v-for="tag in workPlaceTags" :key="tag.text" :class="tag.isHiglighted ? 'pill-highlited' : 'pill-normal'">
        {{ tag.text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWorkExperience } from '@/stores/workExperience';
import { type WorkPlace as WorkPlaceProps } from '@/types/mainContent.props.types';

const props = defineProps<WorkPlaceProps>();
const store = useWorkExperience();

const workPlaceConfiguration = store.getWorkplaceByIdentifier(props.identifier);
const isWorkPlaceHeaderVisible = workPlaceConfiguration?.isWorkPlaceSectionVisible ?? false;
const workPlaceImageUrl = new URL(`../../assets/${workPlaceConfiguration?.workPlaceSection?.logo.src}`, import.meta.url).href;
const workPlaceDetails = workPlaceConfiguration?.workPlaceSection;
const workPlaceIntermediaryImageUrl = computed(() => {
  return workPlaceDetails?.intermediary?.logo ? new URL(`../../assets/${workPlaceDetails?.intermediary?.logo.src}`, import.meta.url).href : '';
});
const workPlaceDescription = computed(() => {
  const descriptionSection = workPlaceConfiguration?.descriptionSection;
  if (descriptionSection) {
    const { description, overflow } = descriptionSection;
    if (description.length > 1 && overflow && props.isFirst) {
      return description[1];
    }
    return description[0];
  }
  return null;
});
const workPlaceTags = computed(() => {
  const tagSection = workPlaceConfiguration?.tagSection;
  if (tagSection && (!tagSection.overflow || (tagSection.overflow && props.isFirst))) {
    return tagSection.tags;
  }

  return null;
});
</script>