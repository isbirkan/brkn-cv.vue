import { type Asset } from './asset.types';
import { type Recommendation } from './recommendation.props.types';
import { type ContactLine, type SocialLink } from './sidebar.types';

export type Sidebar = {
  sidebarElements?: string[];
  sidebarRecommendationItems?: string[];
};

export type ProfilePicture = Asset;

export type AboutMe = {
  title: string;
  description: string;
};

export type Contact = {
  title: string;
  contactList: ContactLine[];
};

export type Langauges = {
  title: string;
  languageList: string[];
};

export type SocialLinks = {
  title: string;
  socialLinkList: SocialLink[];
};

export type Recommendations = {
  title: string;
  recommendationList: Recommendation[];
}
