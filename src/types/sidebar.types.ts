import type { Asset } from './asset.types';
import type { Recommendation } from './recommendation.props.types';
import { SidebarIdentifier } from '@/constants/identifiers';

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

export type Recommendations = {
  data: Recommendation[];
} & BaseIdentifier;

export type Sidebar = {
  [key in SidebarIdentifier]?
    : key extends SidebarIdentifier.profilePicture ? ProfilePicture
    : key extends SidebarIdentifier.aboutMe ? AboutMe
    : key extends SidebarIdentifier.contact ? Contact
    : key extends SidebarIdentifier.languages ? Languages
    : key extends SidebarIdentifier.socialLinks ? SocialLinks
    : key extends SidebarIdentifier.recommendation ? Recommendations
    : null
  };
