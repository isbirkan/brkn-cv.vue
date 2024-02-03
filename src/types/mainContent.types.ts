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
  logo: Asset;
  position: string;
  period: string;
  location: string;
  hireType: string;
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
