import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Page } from '@/types/page.types';
import {
  PageIdentifier,
  SidebarIdentifier,
  WorkplaceIdentifier,
  EducationIdentifier,
  RecommendationIdentifier
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
      workPlaceItems: [
        //WorkplaceIdentifier.brknDigital,
        WorkplaceIdentifier.arniaSoftwareSecond,
        WorkplaceIdentifier.sodexoFrancePart1
      ]
    },
    [PageIdentifier.pageTwo]: {
      isSidebarVisible: true,
      isWorkPlaceVisible: true,
      isEducationVisible: false,
      sidebarElements: [SidebarIdentifier.recommendation],
      sidebarRecommendationItems: [
        RecommendationIdentifier.recommendationAntoine,
        RecommendationIdentifier.recommendationSylvain
      ],
      workPlaceItems: [
        WorkplaceIdentifier.sodexoFrancePart2, 
        WorkplaceIdentifier.arniaSoftwarePrime, 
        WorkplaceIdentifier.editecPart1]
    },
    [PageIdentifier.pageThree]: {
      isSidebarVisible: true,
      isWorkPlaceVisible: true,
      isEducationVisible: false,
      sidebarElements: [SidebarIdentifier.recommendation],
      sidebarRecommendationItems: [
        RecommendationIdentifier.recommendationMarius,
        RecommendationIdentifier.recommendationAndreea
      ],
      workPlaceItems: [
        WorkplaceIdentifier.editecPart2,
        WorkplaceIdentifier.eminusSoftware, 
        WorkplaceIdentifier.romanianBusinessConsult],
      educationItems: [
        EducationIdentifier.upbMaster,
        EducationIdentifier.upbEngineer,
        EducationIdentifier.ichc
      ]
    },
    [PageIdentifier.pageFour]: {
      isSidebarVisible: false,
      isWorkPlaceVisible: false,
      isEducationVisible: true,
      sidebarElements: [],
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
