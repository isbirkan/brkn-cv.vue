import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Sidebar } from '@/types/sidebar.types';
import { type IGetElementByIdentifier } from '@/interfaces/sidebar.interfaces';
import { sidebarIdentifier } from '@/constants/elements';

export const useSidebar = defineStore('sidebar', () => {
  const sidebarElements = ref<Sidebar>({
    [sidebarIdentifier.profilePicture]: {
      data: {
        src: '92D916C7-8305-452B-B343-DF844876E65A.jpg',
        width: '125',
        height: '125'
      }
    },
    [sidebarIdentifier.aboutMe]: {
      title: 'about me',
      data: 'A creative and curious software developer, ready to bring youthful joy and energy into my work. Motivated and eager to grow, you will always find me ready to learn, face new challenges and discover interesting areas. Being sociable and friendly makes me integrate with ease into any environment and easily resonate with people around me.'
    }
  });

  const getElementByIdentifier: IGetElementByIdentifier = (identifier) =>
    computed(() => sidebarElements.value[identifier]).value || null;

  return { sidebarElements, getElementByIdentifier };
});
