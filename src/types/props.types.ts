export type Sidebar = {
  sidebarElements?: string[];
};

export type CvPage = {
  identifier: string;
  sidebarVisible: boolean;
} & Sidebar;
