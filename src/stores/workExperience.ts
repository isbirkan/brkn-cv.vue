import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type WorkPlace } from '@/types/mainContent.types';
import { type IGetWorkplaceByIdentifier } from '@/interfaces/mainContent.interfaces';
import { WorkplaceIdentifier } from '@/constants/identifiers';

export const useWorkExperience = defineStore('workExperience', () => {
  const workExperience = ref<WorkPlace[]>([
    {
      identifier: WorkplaceIdentifier.brknDigital,
      workPlaceSection: {
        name: 'BRKN Digital',
        position: 'Owner / Software Developer',
        period: 'July 2021 - present',
        location: 'Bucharest, RO',
        hireType: 'Global',
        logo: {
          src: 'logo-grey-no-circle.png',
          width: '40',
          marginLeft: '-9'
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `&emsp; Continuously working on improving my professional
          skills as an individual and as a software developer, while
          keeping in touch with the latest and greatest languages,
          frameworks, libraries and tooling, both inside and outside my
          area of expertise.`
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.arniaSoftwareSecond,
      workPlaceSection: {
        name: 'Arnia Software',
        position: 'Software Developer',
        period: 'February 2024 - present',
        location: 'Bucharest, RO',
        hireType: 'Contract',
        logo: {
          src: 'arnia-software.jpg',
          width: '30',
          marginLeft: '-4',
          marginRight: '4'
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `
          <p>
            &emsp; I began my journey as part of an established and experienced team responsible for managing diverse integrations and services within a large-scale infrastructure. 
            Our team oversaw the primary entry point and front-facing application, playing a pivotal role in the broader ecosystem. 
            Over time, our responsibilities expanded to include the core authentication system and its associated services.
          </p>
          <p class="mt-2 mb-1">✒️ Responsibilities:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Develop and maintain a .NET Core backend service application involved in integration processes
            </li>
            <li>
              Extend, maintain, and resolve issues in the Vue.js frontend application
            </li>
            <li>
              Learn and enhance the Auth0 authentication infrastructure, including configuration and deployment ecosystems
            </li>
            <li>
              Take on the responsibility of "Admin of the Week," which involves:
              <ul class="pl-5 list-disc list-inside">
                <li>Monitoring and addressing issues</li>
                <li>Reporting and resolving incidents</li>
                <li>Providing summaries and overviews of various systems</li>
                <li>Guiding important meetings</li>
                <li>Offering support to the team</li>
              </ul>
            </li>
            <li>
              Offer on-demand support for external teams and clients
            </li>
            <li>
              Conduct infrastructure analysis, implement improvements, and create detailed documentation
            </li>
          </ul>
          <p class="mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Gained hands-on experience with Auth0, including its system, configuration, and deployment processes.
            </li>
            <li>
              Expanded my knowledge of Vue.js 3 and the Composition API.
            </li>
            <li>
              Enhanced my skills in investigating and resolving real-world issues, focusing on the complete user journey in real-case scenarios.
            </li>
          </ul>`
        ]
      },
      tagSection: {
        tags: [
          { text: 'C#', isHiglighted: true },
          { text: '.NET Core', isHiglighted: true },
          { text: 'ASP.NET Core' },
          { text: 'Vue.js 3', isHiglighted: true },
          { text: 'Typescript' },
          { text: 'Pinia' },
          { text: 'Auth0', isHiglighted: true },
          { text: 'Git' },
          { text: 'Azure', isHiglighted: true },
          { text: 'CI/CD' },
          { text: 'SendGrid' }
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.sodexoFrancePart1,
      workPlaceSection: {
        name: 'Sodexo France',
        position: 'Software Developer',
        period: 'March 2022 - February 2024',
        location: 'Bucharest, RO',
        hireType: 'Contract',
        logo: {
          src: 'sodexo-france.jpg',
          width: '50',
          marginLeft: '-10',
          marginRight: '4'
        },
        intermediary: {
          name: 'Extia France',
          logo: {
            src: 'extia-france.jpeg',
            width: '35',
            marginLeft: '-1',
            marginRight: '10'
          }
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `
          <p>
            &emsp; I was initially part of a Core team, which was meant to
            facilitate the needs of the product-oriented teams
            (food-retail, accommodation, various service providers, logistics
            and many more). Ultimately, I have been onboarded to work on
            one of the mobile products, which aimed to provide new
            features, improvements and configuration for the Australian
            market and its needs.
          </p>
          <p class="mt-2 mb-1">✒️ Responsibilities:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Infrastructure analysis, improvements and documentation
            </li>
            <li>
              Both .NET Core backend and ReactJS frontend
              technological/feature development, improvements, bug
              fixes, architecture design and process documentation
            </li>
            <li>
              Constantly verifying, improving, deploying and testing
              both the Web and Native Mobile capabilities of the
              product applications(s)
            </li>
            <li>
              Legacy code migration for various backend systems,
              such as Authentication server and Microsoft Dynamics
              Query services
            </li>
            <li>
              Improving, updating and migrating different parts of the
              frontend product applications towards modern concepts,
              such as hooks, typescript support, RTK Query,
              translations and new styling libraries
            </li>
          </ul>
          `
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.sodexoFrancePart2,
      isWorkPlaceSectionVisible: false,
      descriptionSection: {
        description: [
          `
          <p class="-mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Improved my knowledge about enterprise level Azure
              Pipelines and different components that come in-play
            </li>
            <li>
              Continued to gather experience on various backend
              related concepts, patterns and technologies such as CQRS
              with Mediator, different Caching Mechanisms,
              Authentication solutions and E2E Web API testing
            </li>
            <li>
              Continued to gather experience with ReactJS and various
              related-concepts
            </li>
            <li>
              Gained knowledge on the React/Ionic/Capacitor ecosystem of native
              mobile development and release
            </li>
            <li>
              Better understanding about Microsoft Dynamics 365 and how to
              efficiently communicate directly and through service
              layers by making use of OData and XML querying
            </li>
            <li>
              Improved analysis, architecture and documentation
              skills
            </li>
          </ul>`
        ]
      },
      tagSection: {
        tags: [
          { text: 'C#', isHiglighted: true },
          { text: '.NET Core', isHiglighted: true },
          { text: 'ASP.NET Core' },
          { text: 'ReactJS', isHiglighted: true },
          { text: 'Ionic' },
          { text: 'Typescript' },
          { text: 'Microsoft Dynamics 365' },
          { text: 'Git' },
          { text: 'Azure', isHiglighted: true },
          { text: 'CI/CD' },
          { text: 'Specflow' },
          { text: 'xUnit' },
          { text: 'CQRS' },
          { text: 'OData' },
          { text: 'RTK Query' }
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.arniaSoftwarePrime,
      workPlaceSection: {
        name: 'Arnia Software',
        position: 'Software Developer',
        period: 'February 2018 - March 2022',
        location: 'Bucharest, RO',
        hireType: 'Full-time',
        logo: {
          src: 'arnia-software.jpg',
          width: '30',
          marginLeft: '-4',
          marginRight: '4'
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `
          <p class="mt-1">
            &emsp; Involved in different kind of client projects, both small
            and large scale alike:
          </p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Finance system with a business model revolving around
              different kinds of loaning mechanisms
            </li>
            <li>
              Government oriented systems and platforms, which have
              aided in processes such as national/international
              export/import flows and a country-wide number plate
              generation flow
            </li>
            <li>
              Different kinds of smaller projects for e-commerce and
              Business-to-client providers
            </li>
          </ul>
          <p class="mt-2 mb-1">✒️ Responsibilities:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Develop/extend a finance website using ASP.NET MVC with
              jQuery and Kendo UI
            </li>
            <li>
              Develop/extend government administration websites using
              ASP.NET Core with Vue.js (initially v2, followed by v3)
            </li>
            <li>
              Develop/extend an image generation web application using
              ASP.NET Core with Vue.js and fabric.js
            </li>
            <li>
              Develop/extend websites using ReactJS and additional
              related libraries and packages
            </li>
            <li>
              Create and improve UI/UX design using HTML5 and CSS
              (SCSS)
            </li>
            <li>Develop/extend backend services and APIs</li>
            <li>
              Participation in the processes of design, planning and
              implementation of a multi-tenant website
            </li>
            <li>
              Write acceptance tests using SpecFlow with Selenium in
              C#.
            </li>
          </ul>
          <p class="mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>Learned about Azure Pipelines, Releases, CI/CD</li>
            <li>Better knowledge about the finance business model</li>
            <li>
              Increased experience with Javascript frameworks and
              libraries, such as ReactJS, Vue.js and fabric.js
            </li>
            <li>Learned to work with Canvas API</li>
          </ul>`
        ]
      },
      tagSection: {
        tags: [
          { text: 'C#', isHiglighted: true },
          { text: '.NET Core', isHiglighted: true },
          { text: 'ASP.NET Core' },
          { text: 'ASP.NET MVC' },
          { text: 'Identity Server' },
          { text: 'SQL Server', isHiglighted: true },
          { text: 'WCF' },
          { text: 'Rest API' },
          { text: 'ReactJS', isHiglighted: true },
          { text: 'Vue.js 2', isHiglighted: true },
          { text: 'Vue.js 3', isHiglighted: true },
          { text: 'Fabric.js' },
          { text: 'Canvas API' },
          { text: 'jQuery' },
          { text: 'Bootstrap' },
          { text: 'Kendo UI' },
          { text: 'Git' },
          { text: 'Azure', isHiglighted: true },
          { text: 'CI/CD' },
          { text: 'Specflow' },
          { text: 'Terraforming' },
          { text: 'CSS' },
          { text: 'Sass' }
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.editecPart1,
      workPlaceSection: {
        name: 'EDITEC',
        position: 'Software Developer',
        period: 'September 2017 - February 2018',
        location: 'Bucharest, RO',
        hireType: 'Full-time',
        logo: {
          src: 'editec.jpg',
          width: '30',
          marginLeft: '-2',
          marginRight: '4'
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `
          <p class="mt-1">
            &emsp; Improving and developing new features for a large scale
            Lottery & Gambling software model, with a large underlying
            infrastructure of services that provide game mechanisms &
            algorithms, payment gateways, different kind of stationary
            and portable device integrations, promotions and many
            others.
          </p>
          `
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.editecPart2,
      isWorkPlaceSectionVisible: false,
      descriptionSection: {
        description: [
          `
          <p class="-mt-2 mb-1">✒️ Responsibilities:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Develop and maintain components for a gateway
              application involving communication with Web and WCF
              services through an API
            </li>
            <li>
              Develop and extend functionalities for a website
              developed with ASP.NET MVC and jQuery
            </li>
            <li>
              Maintain windows applications developed for the gambling
              and lottery business
            </li>
          </ul>
          <p class="mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Understanding of the gambling and lottery business model
            </li>
          </ul>`
        ]
      },
      tagSection: {
        tags: [
          { text: 'C#' },
          { text: '.NET Framework' },
          { text: 'ASP.NET MVC' },
          { text: 'Identity Server' },
          { text: 'SQL Server' },
          { text: 'WCF' },
          { text: 'Rest API' },
          { text: 'jQuery' }
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.eminusSoftware,
      workPlaceSection: {
        name: 'Eminus Software',
        position: 'Software Developer',
        period: 'April 2015 - September 2017',
        location: 'Bucharest, RO',
        hireType: 'Full-time',
        logo: {
          src: 'eminus-software.jpg',
          width: '33',
          marginLeft: '-5',
          marginRight: '2'
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `
          <p class="mt-1">
            &emsp; Solution for an automobile retail platform (Web and
            Mobile applications), which enable users to evaluate their
            own asset by configuring various options, during which the Website
            and Services return suggestions, such as pricing. In the
            next steps, the user can decide to sell and other clients
            can make use of complex biding mechanisms, which are prone
            to events, promotions, etc.
          </p>
          <p class="mt-2 mb-1">✒️ Responsibilities:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Develop/extend/maintain websites built with the help of
              ASP.NET MVC, ASP.NET Core, C# and JavaScript
            </li>
            <li>
              Develop/extend/maintain Web APIs and REST APIs in order
              to decouple data retrieval
            </li>
            <li>
              Develop/extend/maintain micro-services, such as WCF and
              Web services and plan the infrastructure connecting them
            </li>
            <li>
              Setup server infrastructure, deployment process, service
              tiers and configure them
            </li>
            <li>
              Participation in the process of design, planning and
              implementation of a multi-tenant website
            </li>
            <li>Problem investigation, solving and code analysis</li>
          </ul>
          <p class="mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Good understanding of a complex software structure,
              hierarchy and inner-communication
            </li>
            <li>Understanding the multi-tenant and domain concept</li>
            <li>
              Increased problem investigation and solving skills
            </li>
            <li>Better communication and group interaction</li>
          </ul>`
        ]
      },
      tagSection: {
        tags: [
          { text: 'C#' },
          { text: '.NET Framework' },
          { text: '.NET Core' },
          { text: 'ASP.NET MVC' },
          { text: 'ASP.NET Core' },
          { text: 'Identity Server' },
          { text: 'SQL Server' },
          { text: 'WCF' },
          { text: 'Rest API' },
          { text: 'jQuery' },
          { text: 'TFS' },
          { text: 'Dapper' },
          { text: 'RabbitMQ' },
          { text: 'CacheCow' },
          { text: 'StyleCop' },
          { text: 'WiX' }
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.romanianBusinessConsult,
      workPlaceSection: {
        name: 'Romanian Business Consult',
        position: 'C# Programmer',
        period: 'April 2013 - September 2013',
        location: 'Bucharest, RO',
        hireType: 'Part-time',
        logo: {
          src: 'rbc.png',
          width: '45',
          marginLeft: '-8',
          marginRight: '-2'
        }
      },
      isWorkPlaceSectionVisible: true,
      descriptionSection: {
        description: [
          `
          <p class="mt-1">
            &emsp; Providing software and hardware solutions for the Food
            retail industry, such as Back and Front Office
            applications, POS software and integrations, mechanical &
            electric scales configuration, automatic RFID scanners and
            many others.
          </p>
          <p class="mt-2 mb-1">✒️ Responsibilities:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Develop and maintain new modules for a Windows Forms
              Desktop Application
            </li>
            <li>
              Create complex stored procedures to retrieve data for
              Crystal Reports
            </li>
            <li>
              Setup and configure retail handheld devices, POS devices
              and electrical scales
            </li>
          </ul>
          <p class="mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Started to understand the business side of software
              applications
            </li>
            <li>Developed PL/SQL skills and database logic</li>
            <li>Enhanced my previous C# programming skills</li>
            <li>
              Learned to work with production-ready software and
              devices
            </li>
          </ul>`
        ]
      },
      tagSection: {
        tags: [
          { text: 'C#' },
          { text: '.NET Framework' },
          { text: 'Windows Forms Desktop Application' },
          { text: 'ASP Web Forms' },
          { text: 'SQL Server' },
          { text: 'Crystal Reports' }
        ]
      }
    }
  ]);

  const getWorkplaceByIdentifier: IGetWorkplaceByIdentifier = (identifier) =>
    computed(() => workExperience.value.find((w) => w.identifier === identifier)).value || null;

  return { workExperience, getWorkplaceByIdentifier };
});
