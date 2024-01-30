import type { Asset } from './asset.types';
import { sidebarIdentifier } from '@/constants/elements';

type BaseIdentifier = {
  title?: string;
};

export type ProfilePicture = {
  data: Asset;
} & BaseIdentifier;

export type AboutMe = {
  data: string;
} & BaseIdentifier;

export type ContactLine = {
  icon?: string;
  text: string;
};

export type Contact = {
  data: ContactLine[];
} & BaseIdentifier;

export type Languages = {
  data: string[];
} & BaseIdentifier;

export type SocialLink = {
  icon?: string;
  url: string;
};

export type SocialLinks = {
  data: SocialLink[];
} & BaseIdentifier;

export type Sidebar = {
  [key in sidebarIdentifier]?
    : key extends sidebarIdentifier.profilePicture ? ProfilePicture
    : key extends sidebarIdentifier.aboutMe ? AboutMe
    : key extends sidebarIdentifier.contact ? Contact
    : key extends sidebarIdentifier.languages ? Languages
    : key extends sidebarIdentifier.socialLinks ? SocialLinks
    : null
  };
