import { sidebarIdentifier } from '@/constants/elements';
import { type Sidebar } from '@/types/sidebar.types';

export interface IGetElementByIdentifier {
  <Key extends sidebarIdentifier>(identifier: Key): Sidebar[Key] | null;
}
