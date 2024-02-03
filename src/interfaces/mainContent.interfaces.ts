import { WorkplaceIdentifier } from '@/constants/identifiers';
import { type WorkPlace } from '@/types/mainContent.types';

export interface IGetWorkplaceByIdentifier {
  <Key extends WorkplaceIdentifier>(identifier: Key): WorkPlace | null;
}
