import { SidebarIdentifier } from '@/constants/identifiers';
import { type Sidebar } from '@/types/sidebar.types';

export interface IGetElementByIdentifier {
  <Key extends SidebarIdentifier>(identifier: Key): Sidebar[Key] | null;
}
