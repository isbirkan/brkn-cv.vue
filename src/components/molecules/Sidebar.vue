<template>
  <section class="flex-shrink-0 flex-col w-240 h-full bg-gray-custom-dark text-white-left font-aller leading-4">
    <profile-picture
      v-if="profilePictureConfiguration !== null"
      :src="profilePictureConfiguration?.data.src || ''"
      :width="profilePictureConfiguration?.data.width"
      :height="profilePictureConfiguration?.data.width"
    />
    <div class="container w-full h-auto pl-24 pr-24">
      <about-me
        v-if="aboutMeConfiguration !== null" 
        :title="aboutMeConfiguration?.title || ''"
        :description="aboutMeConfiguration?.data || ''"
      />
      <contact
        v-if="contactConfiguration !== null" 
        :title="contactConfiguration?.title || ''"
        :contact-information="contactConfiguration?.data || []"
      />
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { useSidebar } from '@/stores/sidebar';
import { type Sidebar } from '@/types/props.types';
import { sidebarIdentifier } from '@/constants/elements';

import ProfilePicture from '@/components/atoms/ProfilePicture.vue';
import AboutMe from '@/components/atoms/AboutMe.vue';
import Contact from '@/components/atoms/Contact.vue';

defineProps<Sidebar>();
const store = useSidebar();
const profilePictureConfiguration = store.getElementByIdentifier(sidebarIdentifier.profilePicture);
const aboutMeConfiguration = store.getElementByIdentifier(sidebarIdentifier.aboutMe);
const contactConfiguration = store.getElementByIdentifier(sidebarIdentifier.contact);
</script>