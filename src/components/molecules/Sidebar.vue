<template>
  <section class="flex-shrink-0 flex-col w-cst-240 h-full bg-gray-custom-dark text-white-left font-aller leading-4">
    <profile-picture
      v-if="profilePictureConfiguration !== null"
      :src="profilePictureConfiguration?.data.src || ''"
      :width="profilePictureConfiguration?.data.width"
      :height="profilePictureConfiguration?.data.width"
    />
    <div class="container w-full h-auto pl-cst-24 pr-cst-24">
      <about-me
        v-if="aboutMeConfiguration !== null"
        :title="aboutMeConfiguration?.title || ''"
        :description="aboutMeConfiguration?.data || ''"
      />
      <contact
        v-if="contactConfiguration !== null"
        :title="contactConfiguration?.title || ''"
        :contact-list="contactConfiguration?.data || []"
      />
      <languages
        v-if="languagesConfiguration !== null"
        :title="languagesConfiguration?.title || ''"
        :language-list="languagesConfiguration?.data || []"
      />
      <social-links
        v-if="socialLinksConfiguration !== null"
        :title="socialLinksConfiguration?.title || ''"
        :social-link-list="socialLinksConfiguration?.data || []"
      />
    </div>
    <div class="absolute bottom-1 left-36 text-xs">
      #designedbyme
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
import Languages from '@/components/atoms/Languages.vue';
import SocialLinks from '@/components/atoms/SocialLinks.vue';

const props = defineProps<Sidebar>();
const store = useSidebar();

const profilePictureConfiguration =
  props.sidebarElements?.includes(sidebarIdentifier.profilePicture)
    ? store.getElementByIdentifier(sidebarIdentifier.profilePicture)
    : null;
const aboutMeConfiguration =
  props.sidebarElements?.includes(sidebarIdentifier.aboutMe)
    ? store.getElementByIdentifier(sidebarIdentifier.aboutMe)
    : null;
const contactConfiguration =
  props.sidebarElements?.includes(sidebarIdentifier.contact)
    ? store.getElementByIdentifier(sidebarIdentifier.contact)
    : null;
const languagesConfiguration =
  props.sidebarElements?.includes(sidebarIdentifier.languages)
    ? store.getElementByIdentifier(sidebarIdentifier.languages)
    : null;
const socialLinksConfiguration =
  props.sidebarElements?.includes(sidebarIdentifier.socialLinks)
    ? store.getElementByIdentifier(sidebarIdentifier.socialLinks)
    : null;
</script>