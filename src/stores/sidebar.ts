import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Sidebar } from '@/types/sidebar.types';
import { type IGetElementByIdentifier } from '@/interfaces/sidebar.interfaces';
import { SidebarIdentifier, RecommendationIdentifier } from '@/constants/identifiers';

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
    },
    [SidebarIdentifier.recommendation]: {
      title: '// recommendations',
      data: [{
        identifier: RecommendationIdentifier.recommendationAntoine,
        name: 'Antoine Hubert',
        position: 'Head of Engineering and Delivery',
        content: `Birkan joined my team as a full-stack developer at a time we were still in the forming phase of the Sodexo Group Digital organization (at the time: DSP). Two years later, I can say without hesitation that I recommend Birkan.
                  A very adaptable and reliable professional, Birkan understood the organizational implications of working in a young setup, and kept his engagement and delivery consistent in the face of change. Not everybody is suited for a full-remote setup. Birkan is. I personally very much appreciated his emotional stability and consistent engagement along our journey to success.
                  When we stabilized the setup, Birkan was a member of a scrum team in charge of the Australia mining consumer experience value stream. In this team, Birkan was surrounded by very senior and exceptionally talented developers. As a factory director, I know very well that individual talents are not always and by far a recipe for high-performing teams, and that less senior developers may find it difficult to find their place in such a context. Not Birkan. Humble but not subdued, curious, recognized as a strong team player, his positive attitude and fun was an important factor in keeping the team mood high along the way, contributing to the exceptional delivery of the team.`
      },
      {
        identifier: RecommendationIdentifier.recommendationSylvain,
        name: 'Sylvain Durand',
        position: 'Lead Developer',
        content: `Working with Birkan has been a real pleasure. He's reliable and dependable, and managed to adapt perfectly to multiple business contexts. He has successfully delivered features in full autonomy, and has been able to work in peer programming with colleagues of varying skills and areas of expertise.
                  Birkan is also a fast learner, able to stand up to technical challenges and someone who definitely has not yet reached his glass ceiling. On top of his professionalism, he is a great person to work with, capable of voicing valuable opinions in an articulated manner and eager to learn from peers.`
      },
      {
        identifier: RecommendationIdentifier.recommendationMarius,
        name: 'Marius Ene',
        position: 'Senior QA Engineer',
        content: `It has been a pleasure working with Birkan and also a breeze. He is very reliable and he was always there to support even in most stressful of times.
                  He does not only posses the technical knowledge to make products work, he also was able to provide feedback on functional gaps in requirements and he was able to assess and discuss them with examples, making sure everyone 'speaks the same language'.
                  One more thing I would add, is that Birkan's playfulness can inspire most of the teammates to get out of their shell, be innovative and do more. His demostration and presentation skills have been out of this world, putting a smile on everyones faces and keeping them engaged, both colleagues and clients alike.`
      }]
    }
  });

  const getElementByIdentifier: IGetElementByIdentifier = (identifier) =>
    computed(() => sidebarElements.value[identifier]).value || null;

  return { sidebarElements, getElementByIdentifier };
});
