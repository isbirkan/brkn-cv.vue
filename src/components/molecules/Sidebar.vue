<template>
  <section class="flex-shrink-0 flex-col w-240 h-full bg-gray-custom-dark text-white-left font-aller">
    <profile-picture
      v-if="profilePictureConfiguration !== null"
      :src="profilePictureConfiguration?.data.src || ''"
      :width="profilePictureConfiguration?.data.width"
      :height="profilePictureConfiguration?.data.width"
    />
  </section>
</template>
  
<script setup lang="ts">
import { useSidebar } from '@/stores/sidebar';
import { type Sidebar } from '@/types/props.types';
import { sidebarIdentifier } from '@/constants/elements';
import ProfilePicture from '@/components/atoms/ProfilePicture.vue';

defineProps<Sidebar>();
const store = useSidebar();
const profilePictureConfiguration = store.getElementByIdentifier(sidebarIdentifier.profilePicture);
</script>