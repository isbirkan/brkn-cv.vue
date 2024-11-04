<template>
  <section class="flex-shrink-0 flex-col w-cst-240 h-full bg-gray-custom-medium text-white-left font-aller leading-4">
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
      <recommendations
        v-if="recommendationConfiguration !== null"
        :title="recommendationConfiguration?.title || ''"
        :recommendation-list="recommendationConfiguration?.data || []"
      />
    </div>
    <div class="absolute bottom-1 left-36 text-xs">
      #designedbyme
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebar } from '@/stores/sidebar';
import { type Sidebar } from '@/types/sidebar.props.types';
import { SidebarIdentifier } from '@/constants/identifiers';

import ProfilePicture from '@/components/atoms/ProfilePicture.vue';
import AboutMe from '@/components/atoms/AboutMe.vue';
import Contact from '@/components/atoms/Contact.vue';
import Languages from '@/components/atoms/Languages.vue';
import SocialLinks from '@/components/atoms/SocialLinks.vue';
import Recommendations from '../atoms/Recommendations.vue';

const props = defineProps<Sidebar>();
const store = useSidebar();

const profilePictureConfiguration =
  props.sidebarElements?.includes(SidebarIdentifier.profilePicture)
    ? store.getElementByIdentifier(SidebarIdentifier.profilePicture)
    : null;
const aboutMeConfiguration =
  props.sidebarElements?.includes(SidebarIdentifier.aboutMe)
    ? store.getElementByIdentifier(SidebarIdentifier.aboutMe)
    : null;
const contactConfiguration =
  props.sidebarElements?.includes(SidebarIdentifier.contact)
    ? store.getElementByIdentifier(SidebarIdentifier.contact)
    : null;
const languagesConfiguration =
  props.sidebarElements?.includes(SidebarIdentifier.languages)
    ? store.getElementByIdentifier(SidebarIdentifier.languages)
    : null;
const socialLinksConfiguration =
  props.sidebarElements?.includes(SidebarIdentifier.socialLinks)
    ? store.getElementByIdentifier(SidebarIdentifier.socialLinks)
    : null;
const recommendationConfiguration = computed(() => {
  if (props.sidebarElements?.includes(SidebarIdentifier.recommendation)) {
    const recommendations = store.getElementByIdentifier(SidebarIdentifier.recommendation);
    if (recommendations && recommendations.data && props.sidebarRecommendationItems) {
      const filteredRecommendations = {
        ...recommendations,
        data: recommendations.data.filter((recommendation) =>
          props.sidebarRecommendationItems?.includes(recommendation.identifier)
        )
      };

      return filteredRecommendations;
    }

    return recommendations;
  }

  return null;
});
</script>