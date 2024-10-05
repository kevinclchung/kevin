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
    skills: {
      design: [
        'Figma',
        'Sketch',
        'Material Design',
        'Adobe Photoshop',
        'Adobe InDesign',
        'Adobe Lightroom',
        'daVinci Resolve',
        'Design Systems'
      ],
      development: [
        'Typescript/Javascript',
        'HTML5',
        'SCSS (CSS)',
        'Web Components',
        'Vue',
        'Angular',
        'React',
        'Ionic',
        'Jira/Confluence',
        'Cross-Browser Testing',
        'Unit Testing',
        'Agile/SCRUM',
        'Git (GitHub)',
        'npm/yarn',
        'Docker',
        'Vite'
      ]
    },
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
        societies: ['Beta Gamma Sigma Honor Society', 'Golden Key International Honor Society']
      }
    ],
    experience: [
      {
        id: 'xp-spoton',
        company: 'SpotOn',
        title: 'UI/UX Designer and Frontend Engineer',
        years: 6,
        specificDates: 'Nov 2019',
        events: [
          `
            Designed and built new systems, including a sales executive portal and a
            payment data manipulation and reporting system.
          `,
          `
            Modernized legacy systems for operations teams by introducing new 
            technologies such as Vue, TypeScript, React, Vite, and Web Components.
          `,
          `
            Designed, built, and maintained tools for the company’s primary CRM system, 
            including ticketing and fraud mitigation systems, leading to improved 
            customer communication and reduced financial risk.
          `
        ],
        examples: `
            At SpotOn, I was assigned to projects focused on creating internal services 
            and tools. These projects are not public, are still in use today, and are 
            considered "trade secrets." Unfortunately, this means I cannot share them with 
            you here. The technologies and tools I regularly used include Figma, Vue, 
            Docker, Git, and React.
          `
      },
      {
        id: 'xp-tsys-cpay',
        company: 'TSYS / Central Payment',
        title: 'UI/UX Architect and Frontend Engineer',
        years: 6,
        specificDates: 'Oct 2013 - Nov 2019',
        events: [
          `
            Designed and built customer and partner portals and the main marketing 
            websites, increasing visibility for partners and customers.
          `,
          `
            Developed the front end of more than a dozen tools and reports to modernize 
            and improve the usability of the company’s custom CRM system, including a 
            complete sales proposal creation tool using Angular, resulting in high 
            conversion rates.
          `,
          `
            Designed and coded the front end of the CRM hybrid mobile app for agents 
            from the ground up using Angular and Ionic. Created and implemented design 
            language style guides for more consistent branding and communication 
            standards.
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
                Central Payment's greatest asset was its network of thousands of sales 
                agents. The Agent App was a hybrid mobile app created to help these 
                agents keep track of their clients (merchants) and access the resources 
                they needed for successful conversions.
              `,
              `
                It was designed through a collaborative effort between two small teams 
                over the course of several design sprints, resulting from weeks of user 
                testing. I created all finalized designs, coded the frontend, and 
                integrated it with a Laravel-driven REST backend.
              `,
              `
                Since the app was built with Ionic, it was designed and engineered with 
                a UI that adapted to its platform, conforming to Apple's Human Interface 
                Guidelines on iOS and Google's Material Design on Android. Notice the 
                differences in phones and UI elements in the images above.
              `,
              `
                These images were created by me for use in the App Store (for iOS) and 
                Google Play (for Android).
              `,
              `
                Core technologies and tools: Sketch (Design), Angular (Frontend), Ionic 
                (Frontend), and Photoshop (Promotional Material).
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
                When I joined Central Payment, the company lacked a cohesive marketing 
                voice. To improve company-wide marketing communication, I created brand 
                guidelines that provided solid recommendations not only for a unified 
                design language (such as colors and font families) but also for writing 
                tone, grammar, and formatting.
              `,
              `
                I wrote all the instructions and rules, created all illustrations 
                except for the product logos, and laid out all the pages.
              `,
              `
                Core tools: Sketch, Photoshop, and InDesign.
              `
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
              `
                One of the biggest success stories at Central Payment was its updated 
                system for creating sales proposals. The company would have achieved 
                little success without its ability to convert new merchants at high 
                rates. A significant contributor to this success was the Sales 
                department's capacity to create attractive proposals quickly and 
                easily.
              `,
              `
                For days, I observed team members in the Sales department using the 
                old system and identified key areas for improvement, including:
              `,
              {
                type: 'unordered-list',
                content: [
                  'A streamlined process for entering existing and proposed fee structures',
                  'An arrow-key-based navigation system to move from field to field',
                  'The use of drag-and-drop functionality to customize the order of supplemental material',
                  'Attractive ways to highlight savings for prospective merchants'
                ]
              },
              `
                While the rest of the industry relied on inflexible third-party services
                or unattractive spreadsheet-based systems, Central Payment gained a 
                competitive edge.
              `,
              `
                Core technologies and tools: OmniGraffle (design), and Angular (frontend).
              `
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
                When I joined Central Payment, its main website (hosted at 
                www.cpay.com, now defunct due to the company's acquisition) was 
                barely five pages long and addressed agents more than the company's 
                actual customers, the merchants.
              `,
              `
                I transformed the website into a central repository of information 
                where prospective merchants could learn about the products and 
                services the company offered. This effort involved weeks of 
                information gathering and collaboration with Sales and Marketing 
                leadership.
              `,
              `
                As a result, the company gained a new and improved public face for 
                its customers, as well as a valuable resource that agents could 
                reference to build a larger client portfolio.
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
                Richly formatted emails use a pared-down version of HTML. Since I had 
                the most experience in creating nicely formatted HTML content within 
                the company, one of my responsibilities was to update important 
                merchant-facing email communications.
              `,
              `
                These projects were particularly challenging (but also very 
                enjoyable) because:
              `,
              {
                type: 'unordered-list',
                content: [
                  'You cannot rely on scripting.',
                  'You cannot use any frontend frameworks or libraries.',
                  'All styling must be inline.',
                  'Obfuscated links are discouraged, especially in financial industries.',
                  'The design needs to be highly responsive to various screen widths, as emails are viewed on a range of devices and window sizes.'
                ]
              },
              `
                This example is an email design that merchants received when a 
                package was shipped from the company’s shipping center. Notice how 
                the layout adapts to smaller screen widths instead of simply 
                shrinking. I used an animated hero image to catch the reader\'s eye 
                in an effort to keep them engaged.
              `,
              `
                Core technologies and tools: Sketch (design), HTML, CSS, and 
                Laravel “Blade” templates.
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
                Central Payment was continually expanding its network of sales 
                agents. To support this growth, I designed and developed a web-based 
                form that allowed prospective agents to schedule interviews with 
                recruiters.
              `,
              `
                The UI was tailored to meet the project's constraints, displaying 
                only a limited list of available time slots based on the recruiting 
                team's availability.
              `,
              `
                Core technologies and tools: Omnigraffle (design), Angular 
                (frontend), and Moment (time and date library).
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
                One of Central Payment's key operational responsibilities was 
                assisting merchants who needed a clearer pricing outlook for their 
                business. To address this, I created a tool within the company's 
                custom CRM, which provided a single-page view of a merchant's 
                financial outlook and the impact of proposed pricing structure 
                changes. Prior to this, no such top-down view of a merchant's 
                financials existed.
              `,
              `
                I designed the entire page to align with the company's UI Style 
                Guide (which I also created) and developed the tool to be fully 
                responsive across all screen widths.
              `,
              `
                Core technologies and tools: Sketch (design), Angular (frontend), 
                and AngularMaterial (UI library).
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
                Central Payment's custom CRM initially had a clunky search 
                mechanism, with separate pages for each type of search. I 
                redesigned the system to provide users with a single search 
                field at the top of every page, allowing them to enter one 
                search string and receive a unified set of results across 
                multiple search types.
              `,
              `
                Core technologies and tools: Sketch (design) and Material Design.
              `
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
                This project involved updating the user profile page in Central 
                Payment's custom CRM system, a key tool that helped team leaders 
                gain insight into their team members and foster skill development.
              `,
              `
                The updated design consolidated more information onto a single 
                page, improving the user experience for enterprise needs. This was 
                a shift from the previous design, which had separate pages and tabs 
                for nearly every section.
              `,
              `
                Core technologies and tools: Sketch (design), Angular (frontend), 
                and AngularMaterial (UI library).
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
                One of Central Payment's core strengths was its customer engagement, 
                supported by an on-campus call center in California that provided 
                customer service and technical support in English, Vietnamese, 
                Chinese, and Spanish. This high level of service was maintained by 
                closely monitoring the call queue system to ensure no merchant was 
                left on hold for too long.
              `,
              `
                I designed a new version of the wallboard that kept team members and 
                leaders constantly updated on call queue status. The previous design 
                displayed only plain numbers, while the updated version introduced 
                graphical indicators for quicker comprehension and a hot-vs.-cool 
                color scheme to immediately highlight potential issues.
              `,
              `
                Core technologies and tools: Sketch (design), Angular (frontend), 
                and Google Charts (UI library).
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
                One of my first assignments at Central Payment was to update the 
                company's merchant portal. I applied a modern, more visually 
                appealing design to the site and streamlined the front page to 
                display the most important information for merchants. The new 
                system also included an on-page feature tour for first-time 
                visitors.
              `,
              `
                Core technologies and tools: OmniGraffle (design), HTML5, SCSS, 
                and Laravel "Blade" templates.
              `
            ]
          }
        ]
      },
      {
        id: 'xp-payhub',
        company: 'PayHub, Inc.',
        title: 'Director of Product and Design',
        years: 3,
        specificDates: 'Apr 2011 - Oct 2013',
        events: [
          `
            Designed and managed product specifications for all PayHub products, 
            including a web-based virtual terminal, financial reporting portal, 
            iOS and Android credit card transaction apps, e-commerce solutions, 
            the main website, and back-office boarding and data storage systems, 
            leading to the company’s successful acquisition.
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
                PayHub Mobile was an app available for iPhone, iPad, and Android, 
                designed to make credit card transactions as simple as possible 
                (similar to Square).
              `,
              `
                From the outset, we decided to develop the apps natively—using Java 
                for Android and Objective-C for iOS. This required me to create 
                three separate versions for each design.
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
                Each version utilizes native elements and fonts. The phone and 
                tablet versions are optimized to make the best use of space, 
                displaying the most relevant information at any given time. Despite 
                the differences in layout, users of the phone apps could 
                seamlessly transition to the tablet version without confusion.
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
                The transaction view was designed to resemble a real receipt. At 
                the time of its creation, no other company was doing this—now, 
                it's a common practice.
              `,
              `
                All of these assets were created by me for the company's main 
                website (which I also built), using screenshots from actual 
                devices. None of the visuals are artificially rendered.
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
                Side note: You might notice that some iPhones appear upside down. 
                That's because the swiper plugged into the headphone jack, which 
                was located on the bottom of the phone. It's all in the details.
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
                PayHub's main product was a virtual terminal, a website where 
                merchants could process credit card transactions without needing a 
                physical machine. Our product featured customer tracking, 
                recurring billing, employee management, and powerful reporting 
                tools that helped merchants stay up-to-date on their business's 
                financial progress.
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
        title: 'Content Producer and Designer',
        years: 3,
        specificDates: 'Mar 2008 — Apr 2010',
        events: [
          `
            Produced designs for an e-commerce bidding website and pricing community.
          `,
          `
            Wrote and produced how-to articles and video content, resulting in 
            higher adoption rates.
          `
        ],
        examples: null
      },
      {
        id: 'xp-apple-store',
        company: 'Apple, Inc.',
        title: 'Business Partner',
        years: 1,
        specificDates: 'Apr 2007 — Aug 2007',
        events: [
          `
            Helped local businesses acquire and integrate Apple technology into 
            their IT environments.
          `,
          `
            Sold and provided troubleshooting support for Apple customers at the 
            flagship San Francisco store during Apple’s rise to becoming the 
            world’s leading consumer electronics manufacturer with the launch of 
            the first-generation iPhone.
          `
        ],
        examples: null
      },
      {
        id: 'xp-n2k',
        company: 'Network 2000',
        title: 'Inside Sales Representative and Trainer',
        years: 3,
        specificDates: 'Feb 2004 — Feb 2006',
        events: [
          `
            Assisted in building Network 2000 as the leading IT sales, repair, 
            and engineering outsourcer for public and private K-12 education 
            institutions statewide.
          `,
          `
            Led training workshops and demos in company and conference settings, 
            covering a variety of IT topics, including VPN tunneling and basic 
            laptop maintenance, for up to thirty attendees per session.
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
            Assisted in sales and troubleshooting for Apple customers at several 
            higher education institutions statewide during Apple’s resurgence with 
            the launch of iTunes and the first-generation iPod.
          `,
          `
            Conducted demos and workshops on Apple software, including Mac OS X, 
            iMovie and iPhoto.
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
