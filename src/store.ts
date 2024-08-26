import { reactive } from 'vue'

export const store = reactive({
  activeId: 'summary',
  updateActiveId(newActiveId: string) {
    this.activeId = newActiveId
  },
  cv: {
    summary: {
      name: 'Kevin Chung, MFA',
      statement: [
        'I’m a unique combination of designer and frontend engineer. I understand design ' +
          'intentions while engineering, and engineering capabilities while designing.',
        'I’ve been designing and coding for the web since 1996. I first learned programming ' +
          'with Pascal in 1997.'
      ]
    },
    skills: [
      'Typescript/Javascript',
      'HTML5',
      'SCSS (CSS)',
      'Web Components',
      'Vue',
      'Angular',
      'React',
      'Ionic',
      'Agile/SCRUM',
      'Git (GitHub)',
      'npm/yarn',
      'Docker',
      'Vite',
      'VS Code',
      'Figma',
      'Sketch',
      'Jira/Confluence'
    ],
    education: [
      {
        id: null,
        years: 15
      },
      {
        id: 'edu-aau',
        school: 'Academy of Art University',
        degree: 'Master of Fine Arts',
        field: 'Motion Pictures and Television',
        dateGraduated: '2010',
        years: 4,
        honors: 'With Honors',
        societies: []
      },
      {
        id: null,
        years: 3
      },
      {
        id: 'edu-uh',
        school: 'University of Hawaii',
        degree: 'Bachelor of Business Administration',
        field: 'Information Technology Management',
        dateGraduated: '2002',
        years: 4,
        honors: 'With Distinction',
        societies: ['Beta Gamma Sigma Honor Society', 'Golden Key International Honour Society']
      }
    ],
    experience: [
      {
        id: 'xp-spoton',
        company: 'SpotOn Transact',
        title: 'UI Designer / Frontend Engineer',
        years: 6,
        specificDates: 'Nov 2019',
        events: [
          'From the ground-up, designed and built brand-new systems, including the company’s ' +
            'sales-agent-facing portal, and a new system for payment-data configurations and ' +
            'reporting.',
          'Modernized existing systems for operations teams, using new technologies to the team, ' +
            'including Vue, Typescript, React, Vite and Web Components.',
          'Built and maintained tools for the company’s custom CRM system, including a ticketing ' +
            'system and fraud-mitigation systems.'
        ]
      },
      {
        id: 'xp-tsys-cpay',
        company: 'TSYS / Central Payment',
        title: 'UI/UX Architect',
        years: 6,
        specificDates: 'Oct 2013 - Nov 2019',
        events: [
          'From the ground up, designed and coded customer and partner portals, and main company ' +
            'marketing websites.',
          'Designed and coded the front-end of more than a dozen tools and reports to modernize ' +
            'the company’s main back-office custom CRM system, including a complete sales proposal ' +
            'creation tool, using Angular.',
          'From the ground up, designed and coded the front-end of the CRM hybrid mobile app for ' +
            'agents, using Angular and Ionic.',
          'Wrote and implemented brand and design language style guides for four major Central ' +
            'Payment custom applications.'
        ]
      },
      {
        id: 'xp-payhub',
        company: 'PayHub, Inc.',
        title: 'Director of Product & Design',
        years: 3,
        specificDates: 'Apr 2011 - Oct 2013',
        events: [
          'Designed and managed product specifications of all PayHub products, including a ' +
            'web-based virtual terminal and financial reporting portal, iOS (native) and Android ' +
            '(native) credit card transaction apps, e-commerce solutions, its marketing website, ' +
            'and back-office boarding and data storage systems—until the company’s successful ' +
            'acquisition.'
        ]
      },
      {
        id: 'xp-wigix',
        company: 'Wigix',
        title: 'Content Producer & Designer',
        years: 3,
        specificDates: 'Mar 2008 — Apr 2010',
        events: [
          'Produced designs for Wigix.com, an e-commerce bidding website and pricing community.',
          'Wrote how-to and marketing articles, and produced how-to video content for wigix.com.'
        ]
      },
      {
        id: 'xp-apple-store',
        company: 'Apple, Inc.',
        title: 'Business Consultant',
        years: 1,
        specificDates: 'Apr 2007 — Aug 2007',
        events: [
          'Helped local businesses acquire and integrate Apple technology into their IT ' +
            'environments.',
          'Sold and provided troubleshooting for Apple customers at the flagship San Francisco ' +
            'storefront, during Apple’s ascension to becoming the world’s number one consumer ' +
            'electronics manufacturer, including the launch of the first generation iPhone.'
        ]
      },
      {
        id: 'xp-n2k',
        company: 'Network 2000',
        title: 'Inside Sales Representative & Trainer',
        years: 3,
        specificDates: 'Feb 2004 — Feb 2006',
        events: [
          'Assisted in building Network 2000 as a leading IT sales, repair and engineering ' +
            'outsourcer for a majority of the public and private K-12 education institutions ' +
            'state-wide.',
          'Led training workshops and demos, in company and conference settings, covering a ' +
            'variety of IT topics—including VPN tunneling and basic laptop maintenance—for up to ' +
            'thirty attendees per session.'
        ]
      },
      {
        id: 'xp-apple',
        company: 'Apple, Inc.',
        title: 'Campus Representative',
        years: 2,
        specificDates: 'Jun 2001 — Dec 2002',
        events: [
          'Assisted in sales and troubleshooting for Apple customers in a number of hi-ed ' +
            'institutions in the state, during Apple’s resurgence, including the launch of the ' +
            'iTunes and the first-generation iPod.'
        ]
      }
    ],
    ids: [
      'summary',
      'skills',
      'xp-spoton',
      'xp-tsys-cpay',
      'xp-payhub',
      'xp-wigix',
      'xp-apple-store',
      'xp-n2k',
      'xp-apple',
      'education'
    ]
  }
})
