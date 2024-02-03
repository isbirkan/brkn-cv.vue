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
        logo: {
          src: 'logo-grey-no-circle.png',
          width: '40',
          marginLeft: '-9'
        },
        position: 'Owner / Software Developer',
        period: 'July 2021 - present',
        location: 'Bucharest, RO',
        hireType: 'Global'
      },
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
        logo: {
          src: 'arnia-software.jpg',
          width: '30',
          marginLeft: '-4',
          marginRight: '4'
        },
        position: 'Software Developer',
        period: 'February 2024 - present',
        location: 'Bucharest, RO',
        hireType: 'Contract'
      },
      tagSection: {
        tags: [
          { text: 'C#', isHiglighted: true },
          { text: '.NET Core', isHiglighted: true },
          { text: 'ASP.NET Core' },
          { text: 'Vue.js 3', isHiglighted: true },
          { text: 'Typescript' },
          { text: 'Pinia' },
          { text: 'Git' },
          { text: 'Azure', isHiglighted: true }
        ]
      }
    },
    {
      identifier: WorkplaceIdentifier.sodexoFrance,
      workPlaceSection: {
        name: 'Sodexo France',
        logo: {
          src: 'sodexo-france.jpg',
          width: '50',
          marginLeft: '-10',
          marginRight: '4'
        },
        position: 'Software Developer',
        period: 'March 2022 - February 2024',
        location: 'Bucharest, RO',
        hireType: 'Contract'
      },
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
              Infrastructure analysis, improvement and documentation
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
              Constantly verifying, improving, deploying and testing
              both the Web and Native Mobile capabilities of the
              product applications(s)
            </li>
            <li>
              Legacy code migration for different backend systems,
              such as Authentication server and Microsoft Dynamics
              Query services
            </li>
            <li>
              Improving, updating and migrating various parts of the
              frontend product applications towards modern concepts,
              such as hooks, typescript support, RTK Query,
              translations and new styling libraries
            </li>
          </ul>
          <p class="mt-2 mb-1">✔️ Achievements:</p>
          <ul class="pl-5 list-disc list-inside">
            <li>
              Improved knowledge about enterprise level Azure
              Pipelines and different components that come in-play
            </li>
            <li>
              Continued to gather experience on various backend
              related concepts, patterns and technologies such as CQRS
              with Mediator, different Caching Mechanisms,
              Authentication solutions and E2E WebAPI testing
            </li>
            <li>
              Continued to gather experience with ReactJS and various
              new related-concepts
            </li>
            <li>
              Gained knowledge on the React/Ionic/Capacitor native
              mobile development and release ecosystem
            </li>
            <li>
              Better knowledge about Microsoft Dynamics 365 and how to
              efficiently communicate directly and through service
              layers, using OData and XML querying
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
        logo: {
          src: 'arnia-software.jpg',
          width: '30',
          marginLeft: '-4',
          marginRight: '4'
        },
        position: 'Software Developer',
        period: 'February 2018 - March 2022',
        location: 'Bucharest, RO',
        hireType: 'Full-time'
      },
      descriptionSection: {
        description: [
          `
          <p class="mt-2 mb-1">
            Involved in different kind of client projects, both small
            and large scale alike:
          </p>
          <ul class="mb-1">
            <li>
              Finance system with a business model revolving around
              different kinds of loaning mechanisms
            </li>
            <li>
              Government oriented systems and platforms, which have
              aided in processes such as national/internation
              export/import flows and a country-wide number plate
              generation system
            </li>
            <li>
              Different kind of smaller projects for e-commerce and
              Business-to-Client providers
            </li>
          </ul>
          <p class="mt-0 mb-1">✒️ Responsibilities:</p>
          <ul class="mb-1">
            <li>
              Develop/extend a finance website using ASP.NET MVC with
              jQuery and Kendo UI
            </li>
            <li>
              Develop/extend government administration websites using
              ASP.NET Core with Vue.js (v2 initially & later on, v3)
            </li>
            <li>
              Develop/extend an image generation web application using
              ASP.NET Core with Vue.js and fabric.js
            </li>
            <li>
              Develop/extend websites using ReactJS and additional
              libraries and packages
            </li>
            <li>
              Create and improve UI/UX design using HTML5 and CSS
              (SCSS)
            </li>
            <li>Develop/extend backend services and APIs</li>
            <li>
              Participation in the process of design, planning and
              implementation of a multi-tenant website
            </li>
            <li>
              Write acceptance tests using SpecFlow with Selenium in
              C#.
            </li>
          </ul>
          <p class="mt-3 mb-1">✔️ Achievements:</p>
          <ul class="mb-1">
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
      identifier: WorkplaceIdentifier.editec,
      workPlaceSection: {
        name: 'EDITEC',
        logo: {
          src: 'editec.jpg',
          width: '30',
          marginLeft: '-2',
          marginRight: '4'
        },
        position: 'Software Developer',
        period: 'September 2017 - February 2018',
        location: 'Bucharest, RO',
        hireType: 'Full-time'
      },
      descriptionSection: {
        description: [
          `
          <p class="mt-1 mb-1">
            Improving and developing new features for a large scale
            Lottery & Gambling software model, with a large underlying
            infrastructure of services that provide game mechanisms &
            algorithms, payment gateways, different kind of stationary
            and portable device integrations, promotions and many
            others.
          </p>
          <p class="mt-1 mb-1">✒️ Responsibilities:</p>
          <ul class="mb-0">
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
          <p class="mt-0 mb-1">✔️ Achievements:</p>
          <ul class="mb-1">
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
        logo: {
          src: 'eminus-software.jpg',
          width: '33',
          marginLeft: '-5',
          marginRight: '2'
        },
        position: 'Software Developer',
        period: 'April 2015 - September 2017',
        location: 'Bucharest, RO',
        hireType: 'Full-time'
      },
      descriptionSection: {
        description: [
          `
          <p class="mt-1 mb-1">
            Solution for an automobile retail platform – Web and
            Mobile applications, which enable users to evaluate their
            own asset by configuring various options while the Website
            and Services return suggestions, such as pricing. In the
            next steps, the user can decide to sell, and other clients
            can make use of complex biding mechanisms, which are prone
            to event, promotions, etc.
          </p>
          <p class="mt-1 mb-1">✒️ Responsibilities:</p>
          <ul class="mb-1">
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
          <p class="mb-1">✔️ Achievements:</p>
          <ul class="mb-1">
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
        logo: {
          src: 'rbc.png',
          width: '40',
          marginLeft: '-8',
          marginRight: '-2'
        },
        position: 'C# Programmer',
        period: 'April 2013 - September 2013',
        location: 'Bucharest, RO',
        hireType: 'Part-time'
      },
      descriptionSection: {
        description: [
          `
          <p class="mt-2 mb-1">
            Providing software and hardware solutions for the Food
            retail industry, such as Back and Front Office
            applications, POS software and integrations, mechanical &
            electric scales configuration, automatic RFID scanners and
            many others.
          </p>
          <p class="mt-1 mb-1">✒️ Responsibilities:</p>
          <ul class="mb-1">
            <li>
              Develop and maintain new modules for a Windows Forms
              Desktop Application.
            </li>
            <li>
              Create complex stored procedures to retrieve data for
              Crystal Reports.
            </li>
            <li>
              Setup and configure retail handheld devices, POS devices
              and electrical scales.
            </li>
          </ul>
          <p class="mt-0 mb-1">✔️ Achievements:</p>
          <ul class="mb-1">
            <li>
              Started to understand the business side of software
              applications.
            </li>
            <li>Developed PL/SQL skills and database logic.</li>
            <li>Enhanced my previous C# programming skills.</li>
            <li>
              Learned to work with production-ready software and
              devices.
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
