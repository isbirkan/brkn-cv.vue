import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Page } from '@/types/page.types';
import {
  PageIdentifier,
  SidebarIdentifier,
  WorkplaceIdentifier,
  EducationIdentifier
} from '@/constants/identifiers';

export const usePage = defineStore('page', () => {
  const pageConfiguration = ref<Page>({
    [PageIdentifier.pageOne]: {
      isSidebarVisible: true,
      isWorkPlaceVisible: true,
      isEducationVisible: false,
      sidebarElements: [
        SidebarIdentifier.profilePicture,
        SidebarIdentifier.aboutMe,
        SidebarIdentifier.contact,
        SidebarIdentifier.languages,
        SidebarIdentifier.socialLinks
      ],
      workPlaces: [
        WorkplaceIdentifier.brknDigital,
        WorkplaceIdentifier.arniaSoftwareSecond,
        WorkplaceIdentifier.sodexoFrance
      ]
    },
    [PageIdentifier.pageTwo]: {
      isSidebarVisible: true,
      isWorkPlaceVisible: true,
      isEducationVisible: false,
      sidebarElements: [SidebarIdentifier.recommndation],
      workPlaces: [WorkplaceIdentifier.arniaSoftwarePrime, WorkplaceIdentifier.editec]
    },
    [PageIdentifier.pageThree]: {
      isSidebarVisible: false,
      isWorkPlaceVisible: true,
      isEducationVisible: true,
      workPlaces: [WorkplaceIdentifier.eminusSoftware, WorkplaceIdentifier.romanianBusinessConsult],
      educationItems: [
        EducationIdentifier.upbMaster,
        EducationIdentifier.upbEngineer,
        EducationIdentifier.ichc
      ]
    }
  });

  const getPageByIdentifier = (key: PageIdentifier): Page[keyof Page] | null =>
    computed(() => pageConfiguration.value[key]).value || null;

  return { pageConfiguration, getPageByIdentifier };
});
