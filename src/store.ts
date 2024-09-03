import { reactive } from 'vue'

type ActiveExampleType = {
  id: string | null
  exampleIndex: number
}

export const store = reactive({
  activeId: 'summary',
  updateActiveId(newActiveId: string) {
    this.activeId = newActiveId
  },
  activeExample: <ActiveExampleType>{
    id: null,
    exampleIndex: 0
  },
  updateActiveExample(id: string | null, exampleIndex: number) {
    this.activeExample = { id, exampleIndex }
  },
  /** The content below will remain largely static, but will be stored here because it is accessed
   * in mulitple places.
   */
  cv: {
    summary: {
      name: 'Kevin Chung, MFA',
      statement: [
        `
          I'm a unique combination of designer and frontend engineer. I understand design
          intentions while engineering, and engineering capabilities while designing.
        `,
        `
          I've been designing and coding for the web since 1996. I first learned programming
          'with Pascal in 1997.
        `
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
          `
            From the ground-up, designed and built brand-new systems, including the company's
            sales-agent-facing portal, and a new system for payment-data configurations and
            reporting.
          `,
          `
            Modernized existing systems for operations teams, using new technologies to the team,
            including Vue, Typescript, React, Vite and Web Components.
          `,
          `
            Built and maintained tools for the company’s custom CRM system, including a ticketing
            system and fraud-mitigation systems.
          `
        ],
        examples: `
            At SpotOn, I was assigned to projects creating internal services and tools. They have
            not been made public, are still in use today, and are considered "trade secrets."
            Dissappointingly, that means that I cannot show them to you here.
            The technologies and tools regularly used: Figma, Vue, Docker, Git, and React.
          `
      },
      {
        id: 'xp-tsys-cpay',
        company: 'TSYS / Central Payment',
        title: 'UI/UX Architect',
        years: 6,
        specificDates: 'Oct 2013 - Nov 2019',
        events: [
          `
            From the ground up, designed and coded customer and partner portals, and main company
            marketing websites.
          `,
          `
            Designed and coded the front-end of more than a dozen tools and reports to modernize
            the company’s main back-office custom CRM system, including a complete sales proposal
            creation tool, using Angular.
          `,
          `
            From the ground up, designed and coded the front-end of the CRM hybrid mobile app for
            agents, using Angular and Ionic.
          `,
          `
            Wrote and implemented brand and design language style guides for four major Central
            Payment custom applications.
          `
        ],
        examples: [
          {
            title: 'The Agent App',
            thumb: 'cpay/thumbs/agent-mobile.png',
            content: [
              {
                type: 'image',
                src: 'cpay/agent-mobile-app-store-assets.png',
                sizing: 'static',
                scale: 1,
                width: 1508,
                height: 447,
                title: 'On iPhone'
              },
              `
                Central Payment's greatest asset was its network of thousands of sales agents. The
                Agent App was a hybrid mobile app created to help these agents keep track of their
                clients (merchants), and get the resources they needed to make successful
                conversions.
              `,
              `
                It was designed in a collaborative effort between two small teams, over the course of
                several design sprints, and was the result of weeks of user testing. I composed
                all finalized designs, coded the frontend, and hooked into an Laravel-driven REST
                backend.
              `,
              `
                Since the app was built with Ionic, it was designed and engineered with UI that
                adapted to its platform and conformed to Apple's HIG on iOS and Google's
                Material on Android. Notice the differences in phones, and UI elements in the
                images above.
              `,
              `
                These images were composed by me to use in the App Store (for iOS) and
                Google Play (for Android).
              `,
              `
                Core technologies and tools: Sketch (Design), Angular (Frontend), Ionic (Frontend),
                Photoshop (Promotional Material).
              `,
              {
                type: 'image',
                src: 'cpay/agent-mobile-play-store-assets.png',
                sizing: 'static',
                scale: 1,
                width: 1734,
                height: 479,
                title: 'On Android'
              }
            ]
          },
          {
            title: 'The Central Payment Brand Guidelines',
            thumb: 'cpay/thumbs/brand-guidelines.png',
            content: [
              {
                type: 'pdf',
                src: 'cpay/CPAY-Brand-Guidelines.pdf',
                title: null
              },
              `
                When I joined Central Payment, the company had no cohesive marketing voice. So
                in an effort for better company-wide marketing communication, I
                created these brand guidelines, which provided solid recommendations not
                just for single design language (like colors and font families), but also
                writing tone, grammar and formatting.
              `,
              `
                I wrote all instructions and rules, created all illustrations except product
                logos, and laid-out all pages.
              `,
              'Core tools: Sketch, Photoshop and InDesign.'
            ]
          },
          {
            title: 'Proposals',
            thumb: 'cpay/thumbs/proposals.png',
            content: [
              {
                type: 'image',
                src: 'cpay/proposals.png',
                sizing: 'cover',
                scale: 1,
                width: 1128,
                height: 2825,
                title: null
              },
              'One of the biggest success stories at Central Payment was its updated system ' +
                'to create sales proposals. The company would have achieved little success if ' +
                'it weren’t for its ability to convert new merchants at high rates. No small ' +
                'contributor to this success was the ability of its Sales department to ' +
                'create attractive proposals quickly and easily.',
              'For days, I observed Sales department team members using the old system and ' +
                'identified keys areas of improvement, including:',
              {
                type: 'unordered-list',
                content: [
                  'A streamlined process to enter existing and proposed fee structures',
                  'An arrow-key based navigation system to move from field to field',
                  'The use of drag-and-drop to customize the order of supplemental material',
                  'Attractive ways to highlight savings to prospective merchants'
                ]
              },
              'The rest of the industry was using inflexible third-party services, or ugly ' +
                'spreadsheet-based systems. This gave Central Payment a leg-up on the ' +
                'competition.',
              'Core technologies and tools: OmniGraffle (Design), Angular (Frontend).'
            ]
          },
          {
            title: 'THE Web Site',
            thumb: 'cpay/thumbs/www-front.png',
            content: [
              {
                type: 'image',
                src: 'cpay/www-front-desktop.png',
                sizing: 'cover',
                scale: 2,
                width: 2560,
                height: 11618,
                title: 'Front Page on Desktop'
              },
              {
                type: 'image',
                src: 'cpay/www-front-mobile.png',
                sizing: 'cover',
                scale: 2,
                width: 750,
                height: 10382,
                title: 'Front Page on Mobile'
              },
              `
                When I joined Central Payment, its main website (hosted at www.cpay.com, but now
                defunct due to the company's acquisition) was barely 5 pages long and
                addressed agents more than the company's actual customer, the merchants.
              `,
              `
                I changed that by transforming its website into a central repository of
                information where prospective merchants could learn about the products and
                services that the company actually sold. This effort entailed weeks of
                information gathering and collaboration with Sales
                and Marketing team members.
              `,
              `
                In the end, the company gained a new, greater public face for its customers, as well
                as a good source of information that agents could point to in order to build
                a larger client portfolio.
              `,
              {
                type: 'image',
                src: 'cpay/www-industry-food-desktop.png',
                sizing: 'cover',
                scale: 2,
                width: 2560,
                height: 10976,
                title: 'Food Industry on Desktop'
              },
              {
                type: 'image',
                src: 'cpay/www-solution-gift-cards-desktop.png',
                sizing: 'cover',
                scale: 2,
                width: 2560,
                height: 6880,
                title: 'Gift Cards Solution on Desktop'
              },
              {
                type: 'image',
                src: 'cpay/www-solutions-rio-desktop.png',
                sizing: 'cover',
                scale: 2,
                width: 2560,
                height: 16384,
                title: 'Point of Sale for Restaurants Solution on Desktop'
              },
              {
                type: 'image',
                src: 'cpay/www-solutions-rio-mobile.png',
                sizing: 'cover',
                scale: 2,
                width: 750,
                height: 16384,
                title: 'Point of Sale for Restaurants Solution on Mobile'
              }
            ]
          },
          {
            title: 'Shipping Email',
            thumb: 'cpay/thumbs/shipping-email.png',
            content: [
              {
                type: 'image',
                src: 'cpay/email-item-shipped-desktop.png',
                sizing: 'cover',
                scale: 1,
                height: 901,
                width: 1930,
                title: 'On Desktop'
              },
              {
                type: 'image',
                src: 'cpay/email-item-shipped-mobile.png',
                sizing: 'cover',
                scale: 1,
                width: 321,
                height: 2132,
                title: 'On Mobile'
              },
              `
                Richly-formatted emails use a pared-down version of HTML. Since I was the one
                person in the company that had the most experience in creating nicely
                formatted HTML content, one of my responsibilities was to update important
                merchant-facing email communications.
              `,
              'These projects were extra-challenging (but super-fun), because:',
              {
                type: 'unordered-list',
                content: [
                  'You cannot rely on scripting.',
                  'You cannot rely on any frontend frameworks/libraries.',
                  'All styling should be inline.',
                  'Obfuscated links are discouraged, especially in financial industries.',
                  `
                    The design needs to be highly responsive to a number of port widths, because
                    email is viewed in a variety of devices and window sizes.
                  `
                ]
              },
              `
                This example is an email design that merchants received when a package was
                shipped from the company’s shipping center. Notice how the layout adapts to
                smaller port widths, and does not simply shrink. I used an animated hero image
                to catch the reader's eye, in an effort to keep them from skipping over it.
              `,
              `
                Core technologies and tools: Sketch (Design), HTML, CSS and Laravel “Blade”
                Templates.
              `
            ]
          },
          {
            title: 'Recruiting Interview Scheduler',
            thumb: 'cpay/thumbs/recruiting-scheduler.png',
            content: [
              {
                type: 'image',
                src: 'cpay/recruiting-interview-self-scheduler.png',
                sizing: 'cover',
                scale: 1,
                width: 1440,
                height: 1857,
                title: null
              },
              `
                Central Payment was constantly growing its network of sales agents. To
                facilitate this growth, I designed and developed a web-based form to
                help prospective agents schedule interviews with recruiters.
              `,
              `
                The UI was designed around the constraints of the project, showing only a
                short list of available time slots based on our recruiting team's
                availability.
              `,
              `
                Core technologies and tools: Omnigraffle (Design), Angular (Frontend),
                Moment (Time and Date Library).
              `
            ]
          },
          {
            title: "Central Station's Pricing Review Tool",
            thumb: 'cpay/thumbs/pricing-review.png',
            content: [
              {
                type: 'image',
                src: 'cpay/back-office-crm-pricing-review.png',
                sizing: 'cover',
                scale: 1,
                width: 1440,
                height: 2131,
                title: null
              },
              `
                One of the primary responsibilities of Central Payment's operations was to
                help merchants that needed a better pricing outlook for their business. This
                tool, housed in the company's custom CRM, was created as a single-page view
                of a merchant's financial outlook and the effects of a proposed pricing
                structure change. Prior to this, no such top-down view of a merchant existed.
              `,
              `
                I designed the entire page to conform to the company's UI Style Guide (also created
                by me). I also coded the tool to be responsive to all port widths.
              `,
              `
                Core technologies and tools: Sketch (Design), Angular (Frontend), AngularMaterial
                (UI Library).
              `
            ]
          },
          {
            title: "Central Station's Universal Search",
            thumb: 'cpay/thumbs/universal-search.png',
            content: [
              {
                type: 'image',
                src: 'cpay/back-office-crm-universal-search.png',
                sizing: 'cover',
                scale: 1,
                width: 1379,
                height: 2625,
                title: null
              },
              `
                Central Payment's custom CRM incorporated a clunky search mechanism, with
                separate pages for each kind of search. This updated design
                gave users one single search field at
                the top of every page, where they could enter a single search string and be met
                with page that sets of results across different search types.
              `,
              'Core technologies and tools: Sketch (Design).'
            ]
          },
          {
            title: "Central Station's User Profile",
            thumb: 'cpay/thumbs/user-profile.png',
            content: [
              {
                type: 'image',
                src: 'cpay/back-office-crm-user-profile.png',
                sizing: 'cover',
                scale: 1,
                width: 1381,
                height: 1796,
                title: null
              },
              `
                This was an update to Central Payment's custom CRM system's user
                profile, a page that helped team leaders gain insight into and help grow their
                team members' skills.
              `,
              `
                The updated design sports more information on a single page (better for
                enterprise UX), differing from the previous design, which had separate pages
                and tabs for nearly every section.
              `,
              `
                Core technologies and tools: Sketch (Design), Angular (Frontend),
                AngularMaterial (UI Library).
              `
            ]
          },
          {
            title: 'Call Queue Wallboard',
            thumb: 'cpay/thumbs/call-queue-wallboard.png',
            content: [
              {
                type: 'image',
                src: 'cpay/call-queue-wallboard.png',
                sizing: 'contain',
                scale: 1,
                width: 990,
                height: 558,
                title: null
              },
              `
                One of Central Payment's core strengths was its customer engagement, utilizing
                an on-campus (in California) call center for customer service and technical
                support in English, Vietnamese, Chinese, and Spanish. This was made possible
                by constantly monitoring the call queue system, making sure that no
                merchant was placed on hold for too long.
              `,
              `
                I designed this version of the wallboard that enabled team members and leaders
                to be constantly informed of call queue status. The previous
                design had nothing but plain numbers. This updated design incorporated
                graphical indicators for a more immediate effect, and a hot-vs.-cool color
                scheme that immediately indicated trouble.
              `,
              `
                Core technologies and tools: Sketch (Design), Angular (Frontend), Google
                Charts (UI Library)
              `
            ]
          },
          {
            title: 'MyStoreCentral',
            thumb: 'cpay/thumbs/my-store-central.png',
            content: [
              {
                type: 'image',
                src: 'cpay/merchant-portal-dashboard.png',
                sizing: 'cover',
                scale: 2,
                width: 3360,
                height: 7266,
                title: null
              },
              `
                One of my first assignments at Central Payment was to update the company's
                merchant portal. A modern, more-pleasing design was applied to the
                site, and the front page was sifted down to show the most
                important information for the merchant. The new system featured an
                on-page feature tour for first-time visitors.
              `,
              `
                Core technologies and tools: OmniGraffle (Design), HTML5, SCSS and Laravel
                “Blade” Templates
              `
            ]
          }
        ]
      },
      {
        id: 'xp-payhub',
        company: 'PayHub, Inc.',
        title: 'Director of Product & Design',
        years: 3,
        specificDates: 'Apr 2011 - Oct 2013',
        events: [
          `
            Designed and managed product specifications of all PayHub products, including a
            web-based virtual terminal and financial reporting portal, iOS (native) and Android
            (native) credit card transaction apps, e-commerce solutions, its marketing website,
            and back-office boarding and data storage systems—until the company's successful
            acquisition.
          `
        ],
        examples: [
          {
            title: 'PayHub Mobile',
            thumb: 'pay-hub/thumbs/payhub-mobile.jpg',
            content: [
              {
                type: 'image',
                src: 'pay-hub/payhub-mobile-group-ios-and-android@2x.jpg',
                sizing: 'contain',
                scale: 1,
                height: 2000,
                width: 959,
                title: null
              },
              `
                PayHub Mobile was an app available for iPhone, iPad and Android that made
                it easy to take credit card transactions (a la Square).
              `,
              `
                From the very beginning, we made the decision to write the apps natively (Java
                for Android and Objective-C for iOS). That meant that I needed to create
                three versions for every design.
              `,
              {
                type: 'image',
                src: 'pay-hub/payhub-mobile-group-man-entry@2x.jpg',
                sizing: 'contain',
                scale: 1,
                height: 1500,
                width: 720,
                title: 'Manual Transactions'
              },
              `
                Notice that each version uses native elements and fonts. The differences in
                phone-sized and the tablet versions make the best use of space and displays
                the most pertinent information possible at any one time. And despite those
                differences, users of the phone apps
                could hop on to the tablet version without getting lost.
              `,
              {
                type: 'image',
                src: 'pay-hub/payhub-mobile-group-txn-hist@2x.jpg',
                sizing: 'contain',
                scale: 1,
                height: 1500,
                width: 720,
                title: 'Transaction History'
              },
              `
                Also notice that the transaction view looks like a real receipt. When this was
                created, no company was doing this. Now, everyone does.
              `,
              `
                These assets were created by me for the company's main website (also created
                by me) by capturing screenshots from real devices. None of it is
                artificially rendered.
              `,
              {
                type: 'image',
                src: 'pay-hub/payhub-mobile-group-swipe@2x.jpg',
                sizing: 'contain',
                scale: 1,
                height: 1500,
                width: 720,
                title: 'Swipers'
              },
              `
                Side note: Did you notice that some iPhones are
                upside down? That's because the swiper plugged in to the headphone jack,
                and the jack was on the bottom. It's all in the details.
              `,
              {
                type: 'image',
                src: 'pay-hub/payhub-mobile-group-login@2x.jpg',
                sizing: 'contain',
                scale: 1,
                height: 1102,
                width: 720,
                title: 'Login'
              }
            ]
          },
          {
            title: 'PayHub Virtual Terminal',
            thumb: 'pay-hub/thumbs/virtual-terminal.jpg',
            content: [
              {
                type: 'image',
                src: 'pay-hub/virtual-terminal-home.jpg',
                sizing: 'contain',
                scale: 1,
                height: 1400,
                width: 847,
                title: 'Home'
              },
              `
                PayHub's main product was a virtual terminal, and website where merchants
                can run credit card transactions without a physical machine. Our product
                sported customer tracking, recurrent billing, employee management, and
                powerful reports that kept the merchants up-to-date on the financial
                progress of their business.
              `,
              {
                type: 'image',
                src: 'pay-hub/virtual-terminal-run-transaction.jpg',
                sizing: 'contain',
                scale: 1,
                height: 2000,
                width: 933,
                title: 'Run a Transaction'
              },
              {
                type: 'image',
                src: 'pay-hub/virtual-terminal-admin.jpg',
                sizing: 'contain',
                scale: 1,
                height: 2000,
                width: 933,
                title: 'Administration'
              }
            ]
          }
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
        ],
        examples: null
      },
      {
        id: 'xp-apple-store',
        company: 'Apple, Inc.',
        title: 'Business Consultant',
        years: 1,
        specificDates: 'Apr 2007 — Aug 2007',
        events: [
          `
            Helped local businesses acquire and integrate Apple technology into their IT
            environments.
          `,
          `
            Sold and provided troubleshooting for Apple customers at the flagship San Francisco
            storefront, during Apple's ascension to becoming the world's number one consumer
            electronics manufacturer, including the launch of the first generation iPhone.
          `
        ],
        examples: null
      },
      {
        id: 'xp-n2k',
        company: 'Network 2000',
        title: 'Inside Sales Representative & Trainer',
        years: 3,
        specificDates: 'Feb 2004 — Feb 2006',
        events: [
          `
            Assisted in building Network 2000 as a leading IT sales, repair and engineering
            outsourcer for a majority of the public and private K-12 education institutions
            state-wide.
          `,
          `
            Led training workshops and demos, in company and conference settings, covering a
            variety of IT topics—including VPN tunneling and basic laptop maintenance—for up to
            thirty attendees per session.
          `
        ],
        examples: null
      },
      {
        id: 'xp-apple',
        company: 'Apple, Inc.',
        title: 'Campus Representative',
        years: 2,
        specificDates: 'Jun 2001 — Dec 2002',
        events: [
          `
            Assisted in sales and troubleshooting for Apple customers in a number of hi-ed
            institutions in the state, during Apple's resurgence, including the launch of the
            iTunes and the first-generation iPod.
          `
        ],
        examples: null
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
