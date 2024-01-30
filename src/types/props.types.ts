import { type Asset } from './asset.types';
import { type ContactLine } from './sidebar.types';

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

export type Contact = {
  title: string;
  contactLine: ContactLine[];
};

export type Langauges = {
  title: string;
  languageLine: string[];
};