import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Page } from '@/types/page.types';
import { pageIdentifier } from '@/constants/elements';

export const usePage = defineStore('page', () => {
  const pageConfiguration = ref<Page>({
    [pageIdentifier.pageOne]: {
      isSidebarVisible: true,
      sidebarElements: ['profile-picture', 'about-me', 'contact', 'languages', 'social-links']
    },
    [pageIdentifier.pageTwo]: {
      isSidebarVisible: true,
      sidebarElements: []
    }
  });

  const getPageByIdentifier = (key: pageIdentifier): Page[keyof Page] | null =>
    computed(() => pageConfiguration.value[key]).value || null;

  return { pageConfiguration, getPageByIdentifier };
});
