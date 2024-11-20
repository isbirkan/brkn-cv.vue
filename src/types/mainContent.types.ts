import { type Asset } from './asset.types';

export type Tag = {
  text: string;
  isHiglighted?: boolean | false;
};

export type Intermediary = {
  name: string,
  logo: Asset
};

export type WorkPlaceHeader = {
  name: string;
  position: string;
  period: string;
  location: string;
  hireType: string;
  logo: Asset;
  intermediary?: Intermediary;
}

export type WorkPlace = {
  identifier: string;
  workPlaceSection?: WorkPlaceHeader;
  descriptionSection?: {
    overflow?: boolean | false;
    description: readonly [string?, string?];
  },
  tagSection?: { 
    tags: Tag[],
    overflow?: boolean | false;
  };
};

export type EducationHeader = {
  degree: string;
  institution: string;
  specialisation: string;
  period: string;
  logo: Asset;
}

export type Education = {
  identifier: string;
  educationSection?: EducationHeader;
  descriptionSection?: {
    overflow?: boolean | false;
    description: readonly [string?, string?];
  }
};
