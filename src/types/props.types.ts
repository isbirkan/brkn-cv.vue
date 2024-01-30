import { type Asset } from './asset.types';

export type CvPage = {
  identifier: string;
  sidebarVisible: boolean;
} & Sidebar;

export type Sidebar = {
  sidebarElements?: string[];
};

export type ProfilePicture = Asset;

export type AboutMe = {
  title: string;
  description: string;
};
