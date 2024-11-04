import { PageIdentifier } from '@/constants/identifiers';

export type Page = {
  [key in PageIdentifier]?: {
    isSidebarVisible: boolean;
    isWorkPlaceVisible: boolean;
    isEducationVisible: boolean;
    sidebarElements?: string[];
    sidebarRecommendationItems?: string[];
    workPlaces?: string[];
    educationItems?: string[]
  };
};
