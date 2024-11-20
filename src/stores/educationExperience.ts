import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Education } from '@/types/mainContent.types';
import { type IGetEducationByIdentifier } from '@/interfaces/mainContent.interfaces';
import { EducationIdentifier } from '@/constants/identifiers';

export const useEducation = defineStore('education', () => {
  const education = ref<Education[]>([
    {
      identifier: EducationIdentifier.upbMaster,
      educationSection: {
        degree: 'Master of Engineering',
        institution: 'University POLITEHNICA of Bucharest',
        specialisation: 'Advanced Technology for Digital Imaging',
        logo: {
          src: 'upb.png',
          width: '30',
          marginRight: '12'
        },
        period: '2014-2016'
      },
      descriptionSection: { description: [] }
    },
    {
      identifier: EducationIdentifier.upbEngineer,
      educationSection: {
        degree: 'Engineer\'s Degree',
        institution: 'University POLITEHNICA of Bucharest',
        specialisation: 'Computer Science and Information Technology',
        logo: {
          src: 'upb.png',
          width: '30',
          marginRight: '12'
        },
        period: '2010-2014'
      },
      descriptionSection: { description: [] }
    },
    {
      identifier: EducationIdentifier.ichc,
      educationSection: {
        degree: 'High School Diploma',
        institution: 'International Computer High School of Constanța',
        specialisation: 'Mathematics-Informatics',
        logo: {
          src: 'ichc.png',
          width: '30',
          marginRight: '12'
        },
        period: '2006-2010'
      },
      descriptionSection: { description: [] }
    }
  ]);

  const getEducationByIdentifier: IGetEducationByIdentifier = (identifier) =>
    computed(() => education.value.find((w) => w.identifier === identifier)).value || null;

  return { education, getEducationByIdentifier };
});
