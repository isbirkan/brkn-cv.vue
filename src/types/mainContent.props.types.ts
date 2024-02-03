import { WorkplaceIdentifier, EducationIdentifier } from '@/constants/identifiers';

export type MainContent = {
  pageIdentifier: string;
  isSignatureVisible?: boolean | true;
  isWorkPlaceVisible?: boolean | false;
  isEducationVisible?: boolean | false;
  workPlaces?: string[];
  educationItems?: string[]
};

export type WorkPlace = {
  identifier: WorkplaceIdentifier;
  isFirst: boolean;
}

export type Education = {
  identifier: EducationIdentifier;
}