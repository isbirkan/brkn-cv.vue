import { WorkplaceIdentifier, EducationIdentifier } from '@/constants/identifiers';
import { type WorkPlace, type Education } from '@/types/mainContent.types';

export interface IGetWorkplaceByIdentifier {
  <Key extends WorkplaceIdentifier>(identifier: Key): WorkPlace | null;
}

export interface IGetEducationByIdentifier {
  <Key extends EducationIdentifier>(identifier: Key): Education | null;
}
