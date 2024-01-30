import { pageIdentifier } from '@/constants/elements';

export type Page = {
  [key in pageIdentifier]?: {
    isSidebarVisible: boolean;
    sidebarElements?: string[];
  };
};
