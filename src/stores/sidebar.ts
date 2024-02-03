import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Sidebar } from '@/types/sidebar.types';
import { type IGetElementByIdentifier } from '@/interfaces/sidebar.interfaces';
import { SidebarIdentifier } from '@/constants/identifiers';

export const useSidebar = defineStore('sidebar', () => {
  const sidebarElements = ref<Sidebar>({
    [SidebarIdentifier.profilePicture]: {
      data: {
        src: 'profile-picture.jpg',
        width: '125',
        height: '125'
      }
    },
    [SidebarIdentifier.aboutMe]: {
      title: '// about me',
      data: 'A creative and curious software developer, ready to bring youthful joy and energy into my work. Motivated and eager to grow, you will always find me ready to learn, face new challenges and discover interesting areas. Being sociable and friendly makes me integrate with ease into any environment and easily resonate with people around me.'
    },
    [SidebarIdentifier.contact]: {
      title: '// contact',
      data: [
        {
          icon: 'far fa-flag fa-lg mt-1 mb-1',
          text: 'Romanian'
        },
        {
          icon: 'fas fa-map-marker-alt fa-lg mt-1 mb-1',
          text: 'Bucharest, Romania'
        },
        {
          icon: 'fas fa-birthday-cake fa-lg mt-1 mb-1',
          text: '27 October 1990'
        },
        {
          icon: 'fas fa-envelope fa-lg mt-1 mb-1',
          text: 'isbirkan@gmail.com'
        },
        {
          icon: 'far fa-envelope fa-lg mt-1 mb-1',
          text: 'isbirkan@pm.me'
        },
        {
          icon: 'fas fa-phone-alt fa-lg mt-1 mb-1',
          text: '+40728 247526'
        },
        {
          text: '+40728 BIRKAN'
        }
      ]
    },
    [SidebarIdentifier.languages]: {
      title: '// languages',
      data: ['romanian', 'english', 'turkish']
    },
    [SidebarIdentifier.socialLinks]: {
      title: '// find me on the web',
      data: [
        {
          icon: 'fab fa-linkedin fa-lg mt-1 mb-1',
          url: 'linkedin.com/in/isbirkan'
        },
        {
          icon: 'fab fa-facebook-square fa-lg mt-1 mb-1',
          url: 'fb.me/isbirkan'
        },
        {
          icon: 'fab fa-instagram fa-lg mt-1 mb-1',
          url: 'istagr.am/isbirkan'
        },
        {
          icon: 'fab fa-github fa-lg mt-1 mb-1',
          url: 'github.com/isbirkan'
        }
      ]
    }
  });

  const getElementByIdentifier: IGetElementByIdentifier = (identifier) =>
    computed(() => sidebarElements.value[identifier]).value || null;

  return { sidebarElements, getElementByIdentifier };
});
