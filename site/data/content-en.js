/* English content. Sources: EXA-01_Exasite_Guide_EN_v1.9, EXA-02_Exasite_Guide_EN_v1.1, EXA-03_Exasite_Guide_EN_v1.1.
   EXA-04 has no English version yet — in English mode its articles are shown in Ukrainian with a notice.
   Same block syntax as the Ukrainian files. */
HC.en = HC.en || {};
HC.en.articles = [

{ slug: 'welcome', cat: 'start', level: 1,
  title: 'What Exasite is and where to start',
  source: 'EXA-01 · introduction, “What makes Exasite convenient?”, “Start with the first level”, contents',
  lead: 'Your website, under your control. Easier than you might think.',
  outcome: 'You will know what the platform can do, which editing levels it has and which level to start with.',
  blocks: [
    { t: 'p', html: 'Exasite is a website management platform that lets you update content, manage page structure, and adjust how pages are displayed without writing code.' },
    { t: 'p', html: 'The platform brings the tools you need for everyday website management into one place. You can find pages, work with their blocks, manage content, and check how the result looks.' },
    { t: 'p', html: 'This section explains how to find your way around the platform: find pages, use navigation, switch preview modes and check the result without making changes. This is the first level of working with Exasite — the foundation for all the sections that follow.' },
    { t: 'h2', id: 'benefits', text: 'What makes Exasite convenient?' },
    { t: 'features', items: [
      { n: '01', title: 'Clear website structure', html: 'Pages, zones, and blocks form a consistent structure. This makes it easier to locate content, understand where it belongs on a page, and navigate to the right place to edit it. <i>For example, to find contact information, open the Contacts page and locate the relevant zone and block.</i>' },
      { n: '02', title: 'Manage content independently', html: 'Update text, replace images, add materials, and manage available blocks without coding. Most routine updates can be handled without involving developers. <i>For example, update the company description or replace a team photo.</i>' },
      { n: '03', title: 'Flexible page creation', html: 'Exasite lets you assemble pages from ready-made blocks, combine them, and adjust content placement. This helps you build new pages while maintaining a consistent look across your site. <i>For example, combine heading, description, and image blocks for a new service page.</i>' },
      { n: '04', title: 'Convenient multilingual workflows', html: 'Manage multiple website language versions in one place. Automatic translation helps prepare content in other languages — either for individual blocks or for entire language versions. Always review translations before publishing. <i>For example, prepare an English version of a Ukrainian article and review the translation.</i>' },
      { n: '05', title: 'Settings for different devices', html: 'Switch between Desktop and Mobile, check how pages are displayed, and adjust spacing separately for computers and smartphones. Spacing is the distance between blocks and inside them: it determines how airy and tidy a page looks. See EXA-05 for details.' },
      { n: '06', title: 'Reuse what already works', html: 'Create your own block compositions, save them as snapshots — saved zones or blocks with all their content — and use them again. This saves time and helps keep pages visually consistent. <i>For example, reuse a successful block composition on another page of your website.</i> Snapshots are covered in detail in EXA-06.' }
    ] },
    { t: 'h2', id: 'levels', text: 'Start with the first level' },
    { t: 'p', html: 'At first, Exasite may seem to have a lot of buttons, menus, and settings. But the platform has several levels of editing, and you do not need to master them all at once: most everyday tasks can be handled at the first level.' },
    { t: 'levels', items: [
      { n: 'Level 1', title: 'Everyday updates', html: 'Find the page you need, change text or a photo, and check the result. <i>For example, update the phone number on the Contacts page.</i> This is where the guide begins, and it is enough for regular changes.', link: 'quickstart' },
      { n: 'Level 2', title: 'Working with pages', html: 'Add and arrange blocks, adjust spacing for computers and smartphones, and reuse successful compositions. <i>For example, assemble a new service page from ready-made blocks.</i>', link: 'cat-builder' },
      { n: 'Level 3', title: 'Advanced options', html: 'Language versions and translation, databases, SEO and page addresses, users and general settings. Some of these sections may be available only to certain roles in your project.' }
    ] },
    { t: 'callout', kind: 'tip', title: 'You do not need to memorize every feature', html: 'It is enough to understand the overall logic of the platform, know where to find the right instructions, and move on to the next level when you need it.' },
    { t: 'p', html: 'Let’s begin with the first section: it will help you find your way around the platform and everything you need for the first level.' },
    { t: 'h2', id: 'contents', text: 'Contents of the “Getting started” section' },
    { t: 'p', html: 'Start with the overall structure of the platform, then go directly to the topic you need. This complete contents list helps you find the right instructions quickly.' },
    { t: 'table', head: ['#', 'Topic', 'What you will learn'], rows: [
      ['01', '[[platform-basics|How the platform is organized]]', 'Page, zone, block and element'],
      ['02', '[[login|Sign in to the platform]]', 'Your first steps'],
      ['03', '[[workspace|Understanding the workspace]]', 'Where the tools are located'],
      ['04', '[[top-panel|Top navigation]]', 'Structure, menu and interface texts'],
      ['05', '[[left-panel|The left sidebar]]', 'Finding blocks in zones'],
      ['06', '[[desktop-mobile|Desktop and Mobile]]', 'Checking different screen layouts'],
      ['07', '[[grid-hidden|Grid and hidden blocks]]', 'Helpful editor display modes'],
      ['08', '[[profile-language|Your user profile]]', 'Interface language and account'],
      ['09', '[[visitor-preview|Visitor preview]]', 'Checking the page display'],
      ['10', '[[faq-start|Common questions]]', 'Answers to typical issues']
    ] }
  ],
  related: ['platform-basics', 'login', 'open-page']
},

{ slug: 'platform-basics', cat: 'start', level: 1,
  title: 'How a page is organized: page, zone, block, element',
  source: 'EXA-01 · topic 01 “Before you start: how the platform works”',
  lead: 'Four concepts you will meet in every guide.',
  outcome: 'You will understand the Page → Zone → Block → Element pattern and be able to decide exactly what needs changing.',
  blocks: [
    { t: 'p', html: 'Exasite is the platform where you manage your website. The editor shows the page much as a visitor would see it, but adds working tools around it: navigation menus, a block list, display-mode switches, and editing controls.' },
    { t: 'p', html: 'To understand how your website is organized, imagine an About Us page with headings, text, photos, and other content. Exasite arranges these parts into a clear structure:' },
    { t: 'h2', id: 'terms', text: 'Four levels of content' },
    { t: 'terms', items: [
      { term: 'Page', html: 'A separate website page with its own web address, such as About Us or Contacts. This is where the page content belongs.' },
      { term: 'Zone', html: 'An area of a page where blocks are placed. For example, the top of the website (Header), the main content area, or the bottom (Footer).' },
      { term: 'Block', html: 'The main building unit of a page. For example, a block may contain a photo, a heading, and text. The block determines how these elements are arranged and styled.' },
      { term: 'Element', html: 'The smallest part of a block that displays information. For example, an individual heading, a piece of text, or an image.' }
    ] },
    { t: 'callout', kind: 'note', title: 'The pattern', html: '<b>The structure follows a simple pattern: Page → Zone → Block → Element.</b> Once you understand it, it becomes easier to find content and decide exactly what needs changing.' },
    { t: 'p', html: 'In the following sections, we will show you how to find pages, work with blocks, and adjust how content is displayed.' },
    { t: 'callout', kind: 'important', title: 'Projects may look different', html: 'These screenshots come from a demo configuration using a super-administrator account. Some options may be absent on your project because of site settings or your permissions. That does not necessarily mean something is wrong.' }
  ],
  related: ['workspace', 'builder-basics', 'site-structure-basics']
},

{ slug: 'login', cat: 'start', level: 1,
  title: 'How to sign in to the platform',
  source: 'EXA-01 · topic 02 “Sign in to the platform”',
  lead: 'Start with the basics.',
  outcome: 'You will sign in and see the Exasite workspace.',
  blocks: [
    { t: 'p', html: 'Your site administrator will provide your personal sign-in address and credentials. There is no need to look for a sign-in link on the public website or to use a colleague’s account.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Open the platform sign-in address in your browser.' },
      { html: 'Enter the username or email you have been given in “Login or email”.' },
      { html: 'Enter your password in the “Password” field.' },
      { html: 'Select “Sign in”. When authentication succeeds, the Exasite workspace opens.' }
    ] },
    { t: 'missing', html: 'The sign-in form screenshot (EXA-01_S01_UI-EN) exists in the source but was not transferred to the prototype. Add it manually as <code>img/EXA-01_S01_EN.webp</code>.' },
    { t: 'p', html: 'Once you sign in, the Exasite workspace opens with the site page and management controls. [[workspace|Understanding the workspace]] explains where to find them.' },
    { t: 'callout', kind: 'tip', title: 'Tip', html: 'If sign-in fails, double-check the URL and your keyboard input. Do not share passwords in messages; ask your project administrator to help restore access.' },
    { t: 'check', title: 'Check the result', items: ['The Exasite workspace is open: the site page with management controls around it.', 'Your profile is visible in the upper-right corner.'] }
  ],
  related: ['workspace', 'profile-language', 'faq-start']
},

{ slug: 'workspace', cat: 'start', level: 1,
  title: 'The workspace: what is where',
  source: 'EXA-01 · topic 03 “Understanding the workspace”',
  lead: 'A map of the screen where all work on the platform begins.',
  outcome: 'You will know what each part of the screen is for and where to look for the buttons you need.',
  blocks: [
    { t: 'fig', img: 'EXA-01_S02_EN', cap: 'The editor workspace in desktop mode',
      marks: [
        { n: 1, x: 30, y: 4, label: 'Top bar' }, { n: 2, x: 2.7, y: 50, label: 'Left sidebar' }, { n: 3, x: 72, y: 88, label: 'Central workspace' },
        { n: 4, x: 10.6, y: 46, label: 'Controls beside blocks and zones' }, { n: 5, x: 97.6, y: 92, label: 'Bottom-right corner' }
      ] },
    { t: 'table', head: ['Area', 'What it is for'], rows: [
      ['① Top bar', 'Navigate pages, shared modules, and your user profile.'],
      ['② Left sidebar', 'Scan zones and jump between existing blocks.'],
      ['③ Central workspace', 'See the page content you are working with.'],
      ['④ Controls beside blocks and zones', 'Open context-specific actions for a block or zone.'],
      ['⑤ Bottom-right corner', 'Open a separate visitor-facing view of the page.']
    ] },
    { t: 'callout', kind: 'important', title: 'Remember the distinction', html: 'The editor displays the site together with working panels. Blue outlines, icons, highlights, and add buttons are working tools of the platform; they are not part of the public page.' }
  ],
  related: ['top-panel', 'left-panel', 'visitor-preview']
},

{ slug: 'top-panel', cat: 'start', level: 1,
  title: 'Top navigation: “Site structure”, “Menu”, “Interface texts”',
  source: 'EXA-01 · topic 04 “Top navigation: where to go for each task” (4.1–4.3, quick reference)',
  lead: 'Three main entry points and your user profile.',
  outcome: 'You will know where to go for each task: open a page, find resources or change an interface label.',
  blocks: [
    { t: 'p', html: 'The top bar has three main entry points: “Site structure”, “Menu”, and “Interface texts”. Your user profile sits on the right. We will look at each option first, then summarize them in a quick-reference table at the end.' },
    { t: 'h2', id: 'structure', text: 'Site structure — start here when working with pages' },
    { t: 'p', html: 'Imagine you need to check the Projects page. Open “Site structure” in the top bar, find Projects in the list, and select it. The editor takes you to that page. The separate “Edit” command in this menu is for managing the page hierarchy — a different task covered in EXA-02.' },
    { t: 'fig', img: 'EXA-02_S01_EN', cap: 'The Site structure dropdown with available pages' },
    { t: 'callout', kind: 'tip', title: 'Tip', html: 'Page names come from the structure of each website. Another project might list Services, News, About Us, or other sections instead of Projects.' },
    { t: 'h2', id: 'menu', text: 'Menu — shared resources and site settings' },
    { t: 'p', html: '“Menu” opens the site management tools. The demo project shows Photobank, Video bank, Tags, Redirects, Databases, Settings, plus separate spacing and grid settings.' },
    { t: 'terms', items: [
      { term: 'Photobank and Video bank', html: 'Store the site’s images and videos that you add to pages (EXA-08).' },
      { term: 'Tags', html: 'Labels used to group content.' },
      { term: 'Redirects', html: 'Automatically send visitors from an old page address to a new one (EXA-09).' },
      { term: 'Databases', html: 'Structured lists of content such as news or products (EXA-10).' }
    ] },
    { t: 'p', html: 'The availability of these options depends on your role and the project configuration.' },
    { t: 'fig', img: 'EXA-01_S06_EN', cap: 'The demo project’s tools menu' },
    { t: 'callout', kind: 'example', title: 'Example', html: 'Your task is to replace a photo on a page. First determine whether the image is selected from the Photobank or edited directly in a page block. Use Photobank for the first case and the block editor for the second. See EXA-08 for the full workflow.' },
    { t: 'h2', id: 'interface-texts', text: 'Interface texts — managing the site’s interface labels' },
    { t: 'p', html: 'Besides ordinary content — headings, descriptions and article text — a website has short labels that help visitors use its features.' },
    { t: 'p', html: 'These can be button names, form hints, a message confirming that a request has been sent, search labels and other standard phrases.' },
    { t: 'p', html: '<b>In Exasite, these labels are managed in a dedicated section — “Interface texts”.</b>' },
    { t: 'fig', img: 'EXA-08_S01_EN', cap: 'The Interface texts menu for finding text records' },
    { t: 'callout', kind: 'mistake', title: 'Avoid this mistake', html: 'If you are unsure where a text string comes from, first check whether it belongs to a page block or an Interface texts record. Do not change a vaguely similar record without confirming where it appears.' },
    { t: 'h2', id: 'cheatsheet', text: 'Quick reference: where to go' },
    { t: 'table', head: ['Your task', 'Go to'], rows: [
      ['Find or open a page', 'Site structure'],
      ['Manage images, redirects, databases, or global settings', 'Menu'],
      ['Find text records managed separately from page content blocks', 'Interface texts'],
      ['Change the platform interface language or sign out', 'User profile']
    ] }
  ],
  related: ['open-page', 'profile-language', 'replace-image']
},

{ slug: 'left-panel', cat: 'start', level: 1,
  title: 'How to find a block on a page quickly',
  source: 'EXA-01 · topic 05 “The left sidebar: your shortcut around a page”',
  lead: 'The left sidebar shows block thumbnails grouped by zone.',
  outcome: 'You will find the right part of even a long page without scrolling through everything.',
  blocks: [
    { t: 'p', html: 'The Exasite left sidebar groups blocks by zone. For example, Header is the top area of the site, Zone 1 holds the main content, and Footer is the bottom area. Block thumbnails help you find the right part of a long page without scrolling through everything. Zone names and counts depend on your site configuration.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Find the relevant zone in the left sidebar.' },
      { html: 'Select a block thumbnail to navigate toward the corresponding part of the page.' },
      { html: 'Hover over a block thumbnail to see the available controls. Their exact set depends on the block type and your permissions.', img: 'EXA-01_S05_EN', cap: 'Zone thumbnails and contextual actions in the left sidebar' }
    ] },
    { t: 'callout', kind: 'example', title: 'Real-world example', html: 'You need to find a block with text and an image in the middle of the home page. Rather than scrolling from the top, open the relevant zone and choose a thumbnail that resembles the block. Then find the actual block in the central workspace.' }
  ],
  related: ['workspace', 'grid-hidden', 'block-actions']
},

{ slug: 'desktop-mobile', cat: 'start', level: 1, demo: 'visitor-check',
  title: 'How to check a page on a computer and a smartphone',
  source: 'EXA-01 · topic 06 “Desktop and Mobile: two views of the same page”',
  lead: 'The Desktop / Mobile switch at the top of the left sidebar.',
  outcome: 'You will see how text and images are arranged on a narrow screen and know which version you are adjusting spacing for.',
  blocks: [
    { t: 'p', html: 'The monitor and phone icons at the top of the left sidebar change the workspace between wide and narrow page views. This helps you notice how text, images, and other parts of the layout are arranged at different screen widths.' },
    { t: 'example', html: 'For example, if a long heading wraps awkwardly on a narrow screen, inspect it in Mobile and check the final appearance on a real smartphone.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Select the monitor icon to use the desktop view.' },
      { html: 'Select the phone icon to switch to the mobile view.', img: 'EXA-01_S03_EN', cap: 'The page shown in mobile mode inside the editor' },
      { html: 'Compare block order, text wrapping, and spacing. For a final visual check, open the [[visitor-preview|visitor view]] as well.' }
    ] },
    { t: 'callout', kind: 'important', title: 'Please note', html: 'The mobile view inside the editor is a useful reference, not an exact simulation of every smartphone. Animations, interactive components, and other graphical effects may sometimes look different from their appearance on a real device. This does not necessarily indicate an issue with the website. For a final check, open the page on a phone; if the difference also appears there, investigate it separately.' },
    { t: 'callout', kind: 'note', title: 'Device-specific spacing', html: 'The Desktop/Mobile switch also determines which version of the page you are adjusting spacing for: choose Desktop for desktop spacing and Mobile for mobile spacing. Check the active mode before making changes. Spacing and grid settings are covered in detail in EXA-05.' },
    { t: 'p', html: '<b>Expected result:</b> the workspace width and displayed layout change. Switching modes alone does not mean you edited content or published a page.' },
    { t: 'check', title: 'Check the result', items: ['Block order in Mobile is as expected.', 'Headings and text wrap without awkward breaks.', 'Spacing between blocks looks tidy.', 'The final appearance is checked on a real smartphone.'] }
  ],
  related: ['visitor-preview', 'grid-hidden', 'spacing-basics']
},

{ slug: 'grid-hidden', cat: 'start', level: 1,
  title: 'Grid and Show hidden: helpful editor views',
  source: 'EXA-01 · topic 07 “Grid and Show hidden: useful editor views”',
  lead: 'Two toggles in the left sidebar that help you inspect a page.',
  outcome: 'You will know when to turn on Grid and when Show hidden — and why neither of them publishes changes.',
  blocks: [
    { t: 'p', html: 'The left sidebar includes “Grid” and “Show hidden”. Both help you inspect a page, but they serve different purposes.' },
    { t: 'table', head: ['Control', 'What it does', 'When to use it'], rows: [
      ['Grid', 'Shows the grid — the columns that zones and blocks are aligned to (24 on Desktop). Visitors do not see the grid. See EXA-05 for details.', 'When checking the layout or alignment.'],
      ['Show hidden', 'Lets you see hidden or inactive blocks while editing.', 'When a block exists on the platform but is not visible in the ordinary view.']
    ] },
    { t: 'example', html: 'For example, enable Grid to inspect the alignment of blocks. If a block exists on the platform but is not visible in the normal view, try Show hidden.' },
    { t: 'fig', img: 'EXA-05_S01_EN', cap: 'The Grid switch in the platform workspace' },
    { t: 'fig', img: 'EXA-01_S04_EN', cap: 'The Show hidden toggle in the left sidebar' },
    { t: 'callout', kind: 'important', title: 'Do not confuse', html: 'These toggles change what you see inside the editor. They are not publication controls and do not replace the visibility settings of a particular block. To change what visitors can see, follow the workflows in EXA-04 and EXA-12.' }
  ],
  related: ['left-panel', 'block-actions', 'desktop-mobile']
},

{ slug: 'profile-language', cat: 'start', level: 1,
  title: 'How to change the platform interface language',
  source: 'EXA-01 · topic 08 “Your profile and the interface language”',
  lead: 'Your profile is in the upper-right corner.',
  outcome: 'Platform menu labels will use the language you selected.',
  blocks: [
    { t: 'p', html: 'Your profile is in the upper-right corner. In the demo project, it lets you choose an interface language, open the user management area, and sign out.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Select your profile in the upper-right corner.' },
      { html: 'Choose EN, UA, or DE, depending on the available languages.', img: 'EXA-01_S07_EN', cap: 'User profile with the interface language switcher' },
      { html: 'Return to the workspace and check that menu labels use the language you selected.' }
    ] },
    { t: 'callout', kind: 'note', title: 'Learn more', html: 'Platform users and access permissions are covered in EXA-11. Website language versions and automatic translations are explained in EXA-07. Changing the platform interface language does not change the language of website pages.' },
    { t: 'callout', kind: 'mistake', title: 'Two different language settings', html: 'The language of the platform interface is not the same as the language of the website content. For example, you may use the platform interface in English while editing a Ukrainian page. Do not confuse this menu with page translation; automatic translation is covered in EXA-07.' }
  ],
  related: ['languages', 'top-panel', 'faq-start']
},

{ slug: 'visitor-preview', cat: 'start', level: 1, demo: 'visitor-check',
  title: 'How to preview a page as a visitor',
  source: 'EXA-01 · topic 09 “Preview the page as a visitor”',
  lead: 'The button in the bottom-right corner opens the page without working controls.',
  outcome: 'You will see the page in a new tab the way a visitor sees it.',
  blocks: [
    { t: 'p', html: 'While you edit, the page shows working outlines and buttons. To see a page without these controls, use the button in the bottom-right corner. In the demo, its tooltip indicates that the page opens in a new tab as a visitor.' },
    { t: 'example', html: 'For example, after replacing a photo, open the page as a visitor and check that the image, text, and spacing appear as expected.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Make sure the correct page is open in the editor.' },
      { html: 'Select the visitor preview button in the bottom-right corner.', img: 'EXA-12_S01_EN', cap: 'The button that opens a page in a separate visitor tab' },
      { html: 'In the new tab, check the text, imagery, spacing, and expected blocks.' },
      { html: 'Return to the platform tab when you are ready to continue.' }
    ] },
    { t: 'check', title: 'Check in the new tab', items: ['Text', 'Images', 'Spacing', 'The expected blocks'] },
    { t: 'callout', kind: 'important', title: 'Important', html: 'Visitor view is a way to inspect the output; it is not proof that draft changes have been published. Saving, activation, and publication behavior depend on the function and project configuration (EXA-12).' }
  ],
  related: ['desktop-mobile', 'page-save-check', 'replace-image']
},

{ slug: 'faq-start', cat: 'start', level: 1, faq: true,
  title: 'Common questions when getting started',
  source: 'EXA-01 · topic 10 “Common questions when getting started” and the closing recommendation',
  lead: 'Short answers to questions that come up in the first days.',
  outcome: 'You will quickly resolve typical first-level situations.',
  blocks: [
    { t: 'faq', items: [
      { q: 'A menu item in the guide is missing on my screen.', a: 'Check your account role and the modules enabled on your project; these can differ.' },
      { q: 'I switched to Mobile. Did I change the live site?', a: 'No. You switched the editor’s viewing mode. Editing content or layout requires separate actions.' },
      { q: 'Why can I see a block in the editor but not as a visitor?', a: 'Show hidden might be enabled. Check the block’s visibility status and the visitor view.' },
      { q: 'Why is the interface in English but my page in Ukrainian?', a: 'The platform interface language and the language of the current page are separate settings.' },
      { q: 'Where should I edit a piece of text?', a: 'First determine whether it is part of a block or an Interface texts record. See EXA-08.' }
    ] },
    { t: 'callout', kind: 'next', title: 'What’s next', html: 'Next, continue with EXA-02 — Site Structure. Then explore EXA-04 (blocks and micro blocks), EXA-05 (grid, spacing, and responsive settings), EXA-07 (language versions and translation), EXA-08 (text and media), and EXA-12 (preview and publishing).' }
  ],
  related: ['grid-hidden', 'profile-language', 'site-structure-basics']
},

{ slug: 'site-structure-basics', cat: 'structure', level: 1,
  title: 'How the site structure works',
  source: 'EXA-02 · introduction, contents and topic 01 “How the site structure works”',
  lead: 'Page tree · Sitemap · Language versions.',
  outcome: 'You will understand how pages relate to each other and why this helps you find the right one quickly.',
  blocks: [
    { t: 'p', html: 'This section explains how your website is organised as a whole: which pages it has, how they relate to each other and how to reach the one you need quickly. You will also get to know the “Sitemap” screen, where all pages are shown together with all language versions.' },
    { t: 'p', html: 'For everyday changes, it is enough to know how to find and open the page you need. Adding pages and languages is needed less often: we will show where it is done, and the detailed page settings are covered in EXA-03.' },
    { t: 'h2', id: 'tree', text: 'First-level and nested pages' },
    { t: 'p', html: 'The site structure is the list of all its pages, arranged as a tree. Some pages are on the first level: “Main”, “About us”, “News”, “Contacts”. Others are nested inside sections: for example, the “Corporate Websites” page belongs to the “Projects” section.' },
    { t: 'example', html: 'For example, if your site has a “Services” section with a separate page for each service, the structure shows “Services” with the pages of individual services below it.' },
    { t: 'p', html: 'The structure matters for two reasons: it helps you find the right page quickly, and it shows how pages are related — the same way visitors see them in the site menu.' },
    { t: 'fig', img: 'EXA-02_S03_EN', cap: 'Example of a site structure: first-level pages and the nested page “Corporate Websites”' },
    { t: 'callout', kind: 'important', title: 'Projects may look different', html: 'Page names and their number depend on your website. The screenshots show a demo project with super-administrator rights; some actions may be missing in your project because of access rights. This is not necessarily an error.' },
    { t: 'h2', id: 'contents', text: 'Contents of the “Site Structure” section' },
    { t: 'table', head: ['No.', 'Topic', 'What you will learn'], rows: [
      ['01', 'How the site structure works', 'Pages, nested pages, status'],
      ['02', '[[open-page|The “Site structure” menu]]', 'How to find and open a page'],
      ['03', '[[sitemap|The “Sitemap” screen]]', 'All pages and languages on one screen'],
      ['04', '[[languages|Site language versions]]', 'How languages work and where to add them'],
      ['05', '[[create-page|New page]]', 'How to create a page in the “Sitemap”'],
      ['06', '[[faq-structure|FAQ]]', 'Answers to common questions']
    ] }
  ],
  related: ['open-page', 'sitemap', 'platform-basics']
},

{ slug: 'open-page', cat: 'structure', level: 1, demo: 'open-page',
  title: 'How to find and open a page',
  source: 'EXA-02 · topic 02 “The “Site structure” menu: finding and opening a page” and 2.1',
  lead: 'The “Site structure” menu is the quickest way to the page you need.',
  outcome: 'The page opens in the workspace so you can check or change it.',
  blocks: [
    { t: 'p', html: 'The “Site structure” menu is on the left of the top panel. It opens the list of the site’s pages — the quickest way to get to the page you want to check or change.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Click “Site structure” in the top panel.', img: 'EXA-02_S02_EN', cap: 'The “Site structure” menu in the top panel' },
      { html: 'Find the page you need in the list that opens.' },
      { html: 'If there is an arrow next to a name, the page contains nested pages. Click the arrow to expand or collapse them.' },
      { html: 'Click the page name — the platform opens it in the workspace.' }
    ] },
    { t: 'example', html: 'For example, to check the “Corporate Websites” page, open “Site structure”, expand “Projects” and select the page.' },
    { t: 'h2', id: 'marks', text: 'What the marks in the list mean' },
    { t: 'table', head: ['What you see', 'What it means'], rows: [
      ['Highlighted name (on the screenshot — “Main”)', 'The page currently open in the workspace.'],
      ['Arrow next to a name', 'The page has nested pages; the arrow expands or collapses them.'],
      ['Grey text and the “Inactive” label', 'The page is inactive: it is not shown in the site menu, and visitors who open its direct link get a 404 error page (“Page not found”) unless a redirect is set — an automatic forwarding to another address (see EXA-09).'],
      ['EN, UA, DE tabs above the list', 'Switch the language version: the list shows the pages of the selected language.']
    ] },
    { t: 'callout', kind: 'tip', title: 'Tip', html: 'The “Edit” link in the top right corner of the menu opens the [[sitemap|“Sitemap”]] screen. You need it when working with the structure — adding pages or languages. To simply open a page, the list is enough.' },
    { t: 'check', title: 'Check the result', items: ['The path at the top of the workspace shows the name of the open page.', 'The page is now highlighted in the “Site structure” menu.'] }
  ],
  related: ['sitemap', 'top-panel', 'left-panel']
},

{ slug: 'sitemap', cat: 'structure', level: 2,
  title: 'The “Sitemap” screen: all pages and languages together',
  source: 'EXA-02 · topic 03 “The “Sitemap” screen”',
  lead: 'The working screen for the site structure.',
  outcome: 'You will open the “Sitemap” and see what each page is called in each language.',
  blocks: [
    { t: 'p', html: 'The “Sitemap” is the working screen for the structure: all pages of the site are shown in all languages at once, in columns side by side. Each page takes one row, so it is easy to see what it is called in each language.' },
    { t: 'h2', id: 'steps', text: 'How to open it' },
    { t: 'steps', items: [
      { html: 'Open “Site structure” in the top panel.' },
      { html: 'Click “Edit” in the top right corner of the menu.', img: 'EXA-02_S04_EN', cap: 'The “Edit” link in the “Site structure” menu' },
      { html: 'The “Sitemap” screen opens. The path at the top (“⌂ / Sitemap”) shows where you are.', img: 'EXA-02_S05_EN', cap: 'The “Sitemap” screen with EN, UA and DE language columns' }
    ] },
    { t: 'example', html: 'For example, on the screenshot above one row contains “About us” in the EN column, “Про нас” in UA and “Über uns” in DE. This is one “About us” page in three language versions.' },
    { t: 'callout', kind: 'important', title: 'Please note', html: 'The “Sitemap” shows the structure, but the content of pages is not changed here. Texts, images and blocks are edited on the page itself (EXA-04, EXA-08).' }
  ],
  related: ['create-page', 'languages', 'open-page']
},

{ slug: 'languages', cat: 'structure', level: 3, demo: 'add-language',
  title: 'How to add a site language',
  source: 'EXA-02 · topic 04 “Site language versions”, 4.1 and 4.2',
  lead: 'Each column in the “Sitemap” is a separate language version of the site.',
  outcome: 'You will know where a new language is added, what to enter in each field and what happens when a language is disabled.',
  blocks: [
    { t: 'p', html: 'Each column in the “Sitemap” is a separate language version of the site. The short language name (EN, UA, DE) is shown above the column, and the page names in that language below it.' },
    { t: 'h2', id: 'add', text: 'Adding a new language' },
    { t: 'p', html: 'A new language is added with the “Add language” button in the top right corner of the “Sitemap”. Languages are usually added by the project administrator, so other users may not see this button.' },
    { t: 'fig', img: 'EXA-02_S06_EN', cap: 'The “Add language” button on the “Sitemap” screen' },
    { t: 'p', html: 'Clicking it opens the “Create language” window with five fields. The “Priority” field becomes visible when you scroll the window down.' },
    { t: 'table', head: ['Field', 'Example', 'What to enter'], rows: [
      ['Name', 'UA', 'Short language name shown above the column and in the tabs.'],
      ['Slug', 'ua', 'Language slug — a Latin-letter code used in page addresses, for example /ua/.'],
      ['Full name', 'Українська', 'Full language name. Visitors see it, for example, in the language switcher on the site.'],
      ['Language code', 'uk', 'Two-letter language code according to ISO 639-1, for example uk, en, de (hint below the field).'],
      ['Priority', '—', 'The first language by priority becomes the main language of the site. The priority of the other languages defines their order in the language switcher on the site.']
    ] },
    { t: 'fig', img: 'EXA-02_S07_EN', cap: 'The “Create language” window' },
    { t: 'p', html: 'To save the language, click the check-mark button; to close the window without changes, click the cross button.' },
    { t: 'h2', id: 'column-actions', text: 'Language column actions' },
    { t: 'p', html: 'When you hover over the name of a language column, action buttons for that language appear on the left.' },
    { t: 'table', icons: true, head: ['Button', 'What it does'], rows: [
      [':eye: Eye', 'Hides or enables the language version. If a language is disabled, neither the language nor any of its pages is shown on the site.'],
      [':pencil: Pencil', 'Opens the language settings.'],
      [':trash: Bin', 'Deletes the language.']
    ] },
    { t: 'fig', img: 'EXA-02_S08_EN', cap: 'Language column action buttons' },
    { t: 'callout', kind: 'important', title: 'Important', html: 'Adding or deleting a language affects the whole site. If you are not sure, check with your project administrator. Automatic translation and working with language versions of content are covered in EXA-07.' }
  ],
  related: ['sitemap', 'profile-language', 'page-language-options']
},

{ slug: 'create-page', cat: 'structure', level: 2, demo: 'create-page',
  title: 'How to create a new page',
  source: 'EXA-02 · topic 05 “New page”',
  lead: 'New pages are created in the “Sitemap” with the “+” button.',
  outcome: 'The new page appears in the “Sitemap” in all language columns.',
  blocks: [
    { t: 'p', html: 'New pages are also created in the “Sitemap”. When you hover over a page, action buttons for it appear on the left. The “+” button adds a new page.' },
    { t: 'fig', img: 'EXA-02_S13_EN', cap: 'Page action buttons in the “Sitemap”' },
    { t: 'h2', id: 'buttons', text: 'What each button does' },
    { t: 'p', html: 'The “Main” page has fewer buttons than other pages.' },
    { t: 'table', icons: true, head: ['Button', 'What it does'], rows: [
      [':drag: Drag', 'Changes the order of pages and their nesting: drag a page above, below or inside another one.'],
      [':plus: Add', 'Creates a new page nested in this one. Next to “Main” — a first-level page.'],
      [':eye: Eye', 'Hides or activates the page.'],
      [':pencil: Pencil', 'Opens the page settings (EXA-03).'],
      [':link: Link', 'Connects the page to a database — a structured list of site content, such as news or products (EXA-10).'],
      [':trash: Bin', 'Deletes the page after confirmation.']
    ] },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Open the [[sitemap|“Sitemap”]].' },
      { html: 'Hover over the page inside which the new one should appear and click “+”. The new page is created as a nested page. To create a first-level page, click “+” next to “Main”.' },
      { html: 'In the “Create section” window, enter the name of the new page for each language of the site.', img: 'EXA-02_S14_EN', cap: 'The “Create section” window with page names for each language' },
      { html: 'Confirm with the check-mark button. The new page appears in the “Sitemap” in all language columns.', img: 'EXA-02_S15_EN', cap: 'The new page in the “Sitemap”' }
    ] },
    { t: 'example', html: 'For example, to add a new service to the “Services” section, click “+” next to that section and enter “Web Design”, “Вебдизайн” and “Webdesign” — the page appears in all three columns.' },
    { t: 'callout', kind: 'next', title: 'What’s next', html: 'A new page is empty and inactive at first, so it is shown in light text in the “Sitemap” and is not yet visible on the site. You can enable it with the “eye” button. How to set its name, address, activity and menu display is covered in EXA-03 ([[page-language-options|settings for each language]]); how to fill it with zones and blocks — in EXA-04 ([[create-zone|creating a zone]]).' },
    { t: 'check', title: 'Check the result', items: ['The new page is in all language columns of the “Sitemap”.', 'It sits inside the right section (or on the first level if you clicked “+” next to “Main”).', 'Its name is shown in light text — the page is still inactive. This is expected.'] }
  ],
  related: ['page-open-options', 'page-language-options', 'create-zone']
},

{ slug: 'faq-structure', cat: 'structure', level: 1, faq: true,
  title: 'FAQ: site structure',
  source: 'EXA-02 · topic 06 “FAQ” and the closing recommendation',
  lead: 'What to do if a button or page is missing or a page is marked “Inactive”.',
  outcome: 'You will quickly resolve typical situations with the site structure.',
  blocks: [
    { t: 'faq', items: [
      { q: 'I don’t see the “Add language” or “+” button.', a: 'These actions are not available to all roles. Contact your project administrator.' },
      { q: 'A page is missing from the list.', a: 'Check whether it is nested in another section: expand the arrows next to the names.' },
      { q: 'What is the difference between “Site structure” and the “Sitemap”?', a: 'The menu list is for opening a page quickly. The “Sitemap” is for working with the structure: seeing all languages, adding pages and languages.' },
      { q: 'A page is marked “Inactive”. Is this an error?', a: 'No. An inactive page is not visible on the site. You can enable it with the “eye” button in the “Sitemap” or in the page settings (EXA-03).' }
    ] },
    { t: 'callout', kind: 'next', title: 'What’s next', html: 'Next, we recommend EXA-03 — “Page Management”: page settings, its address, activity and menu display.' }
  ],
  related: ['open-page', 'create-page', 'faq-pages']
},

{ slug: 'page-open-options', cat: 'pages', level: 2, demo: 'activate-page',
  title: 'How to open page settings',
  source: 'EXA-03 · introduction, contents and topic 01 “Where to open page settings”',
  lead: 'Page settings · Language versions · Display on the site.',
  outcome: 'The “Edit page” form opens for the page you need.',
  blocks: [
    { t: 'p', html: 'In the previous section you [[create-page|created a new page]] in the “Sitemap”. This section explains how to set it up: the name for each language, the address, activity, template and the places where the page appears on the site.' },
    { t: 'p', html: 'These settings are not needed for everyday changes to texts and images: you use them when you create a new page or change its role on the site.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'p', html: 'Page settings are opened from the “Sitemap” screen (EXA-02).' },
    { t: 'steps', items: [
      { html: 'Open “Site structure” → “Edit”.' },
      { html: 'Hover over the page you need — action buttons appear on the left.', img: 'EXA-02_S16_EN', cap: 'Action buttons next to the new page' },
      { html: 'Click the “pencil”. The “Edit page” form opens.', img: 'EXA-02_S17_EN', cap: 'The page edit button' }
    ] },
    { t: 'example', html: 'For example, to set up the newly created “New Page”, hover over it in the “Sitemap” and click the “pencil”.' },
    { t: 'h2', id: 'contents', text: 'Contents of the “Page Management” section' },
    { t: 'table', head: ['No.', 'Topic', 'What you will learn'], rows: [
      ['01', 'Where to open page settings', 'The path from the “Sitemap” to the form'],
      ['02', '[[page-language-options|Settings for each language]]', 'Title, menu title, Slug, Redirect URL, activity'],
      ['03', '[[page-general-options|General settings]]', 'Template, access, HTML Sitemap, menu and footer'],
      ['04', '[[page-save-check|Saving and checking]]', 'What happens after “Save”'],
      ['05', '[[faq-pages|FAQ]]', 'Answers to common questions']
    ] }
  ],
  related: ['page-language-options', 'create-page', 'sitemap']
},

{ slug: 'page-language-options', cat: 'pages', level: 2, demo: 'activate-page',
  title: 'Page title, address and activity for each language',
  source: 'EXA-03 · topic 02 “Settings for each language”',
  lead: 'Each language version of a page is set up separately.',
  outcome: 'You will set the title, address (Slug) and activity of the page for the languages you need.',
  blocks: [
    { t: 'p', html: 'The “Edit page” form consists of blocks — one for each language of the site: EN (English), UA (Українська), DE (Deutsch).' },
    { t: 'p', html: 'To the right of the language name there is an “eye” button: it enables or hides this language version of the page. The “bin” button in the top right corner of the form deletes the whole page with all its language versions, not a single language.' },
    { t: 'fig', img: 'EXA-02_S18_EN', cap: 'The “Edit page” form: the English version block' },
    { t: 'h2', id: 'fields', text: 'Fields of a language block' },
    { t: 'table', head: ['Field', 'Example', 'What to enter'], rows: [
      ['Title page', 'New Page', 'The page title in this language. It is shown in the “Sitemap” and in the path at the top of the page.'],
      ['Menu title', '—', 'A shorter name for the site menu if it should differ from the page title. If the field is empty, the menu shows the page title.'],
      ['Slug', 'new-page', 'The part of the page address in Latin letters. It is filled in automatically from the title. If you change the Slug of a published page, its address changes, so a redirect from the old address to the new one is needed — an automatic forwarding of visitors to the new address.'],
      ['Redirect URL', '—', 'The address visitors are redirected to from this page. It is filled in when the page has moved to a new address (for example, after changing the Slug), when it has been replaced by another page, or when the page is disabled and visitors should go to a current section instead of a 404 page. Redirects are covered in detail in EXA-09.'],
      ['Active', '☐', 'Makes this language version of the page available on the site. An inactive page is not in the menu, and its direct link shows a 404 page (“Page not found”) unless Redirect URL is filled in.']
    ] },
    { t: 'h3', id: 'alias', text: 'How to change the page address' },
    { t: 'p', html: 'The page address is formed from the Slug field. After changing it, set up a redirect from the old address to the new one so that old links and search engines don’t lead to a 404 page.' },
    { t: 'callout', kind: 'mistake', title: 'Common mistake', html: 'Changing the Slug of a published page without setting up a redirect. Old links then lead to a 404 page.' },
    { t: 'h3', id: 'active', text: 'How to make a page visible on the site' },
    { t: 'p', html: 'Tick “Active” for the language you need and save the form. Another way is the “eye” button next to the page in the “Sitemap” (EXA-02).' },
    { t: 'fig', img: 'EXA-02_S19_EN', cap: 'The Ukrainian and German version blocks' },
    { t: 'callout', kind: 'tip', title: 'Tip', html: 'Each language version is set up separately. For example, you can prepare a page in Ukrainian and English and activate the German version later. If a whole site language is disabled (EXA-02), no pages in that language are shown on the site.' }
  ],
  related: ['page-general-options', 'page-save-check', 'languages']
},

{ slug: 'page-general-options', cat: 'pages', level: 2,
  title: 'Template, menu, footer and HTML Sitemap',
  source: 'EXA-03 · topic 03 “General settings”',
  lead: 'Settings that apply to the page in all languages.',
  outcome: 'You will decide where on the site a link to the page appears and who can see it.',
  blocks: [
    { t: 'p', html: 'The general settings are below the language blocks — they apply to the page in all languages. The “Display locations” block here defines where a link to the page appears on the site.' },
    { t: 'fig', img: 'EXA-02_S20', cap: 'General settings and display locations of the page', note: 'This screenshot shows the Ukrainian interface: the English version (EXA-02_S20_UI-EN) could not be transferred.' },
    { t: 'table', head: ['Setting', 'Default', 'What it does'], rows: [
      ['Template', 'default', 'Defines which template the page is built with. Usually the home page uses the index template and all other pages use default. Other templates are added by developers only for very specific pages, so there is no need to change this field.'],
      ['Display in bread crumbs', 'on', 'Shows the page in the path line on the site (for example, “Main → New Page”).'],
      ['Available only to authorized users', 'off', 'Only users signed in to the Exasite platform can see the page. Regular site visitors will not see it.'],
      ['Show in HTML Sitemap', 'on', 'Adds the page to the HTML sitemap. It is used for SEO: it helps search engines find the pages of the site (EXA-09).'],
      ['Show in the main navigation menu', 'on', 'Adds the page to the main menu of the site.'],
      ['Show in the footer', 'on', 'Adds a link to the page to the bottom part of the site.']
    ] },
    { t: 'example', html: 'For example, a service page such as “Terms of user agreement” is usually shown only in the footer, while “Services” is shown in the main menu.' },
    { t: 'callout', kind: 'mistake', title: 'Common mistake', html: 'Changing the “Template” field without a reason. Other templates are added by developers only for very specific pages.' }
  ],
  related: ['page-save-check', 'page-language-options', 'faq-pages']
},

{ slug: 'page-save-check', cat: 'pages', level: 2, demo: 'activate-page',
  title: 'How to save the settings and check the page',
  source: 'EXA-03 · topic 04 “Saving and checking”',
  lead: 'What happens after “Save”.',
  outcome: 'The settings are saved and the new page can be opened and filled.',
  blocks: [
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Check the settings for each language and the general settings.' },
      { html: 'Click “Save”. To leave without changes, click “Cancel”.' },
      { html: 'Open the page via “Site structure”. A new page is empty at first: it only has the header, the path and the “Create zone” button.', img: 'EXA-02_S21_EN', cap: 'A new empty page in the workspace' },
      { html: 'Check the result in [[visitor-preview|visitor view]] (EXA-01, topic 09).' }
    ] },
    { t: 'callout', kind: 'tip', title: 'Tip', html: 'Activate the page when it is completely ready and filled with content. This way visitors immediately see a finished page, not an empty or unfinished one.' },
    { t: 'callout', kind: 'next', title: 'What’s next', html: 'To fill the page, add a zone and blocks — this is the topic of EXA-04 “Page Builder” ([[create-zone|creating a zone]]).' },
    { t: 'callout', kind: 'important', title: 'Important', html: 'Visitor view shows how the page will look but does not prove that it has already been published. The rules for saving and publishing are in EXA-12.' },
    { t: 'check', title: 'Check the result', items: ['After “Save” the page opens via “Site structure”.', 'The new page has the header, the path and the “Create zone” button.', 'The page has been checked in visitor view.'] }
  ],
  related: ['create-zone', 'visitor-preview', 'faq-pages']
},

{ slug: 'faq-pages', cat: 'pages', level: 2, faq: true,
  title: 'FAQ: page settings',
  source: 'EXA-03 · topic 05 “FAQ”',
  lead: 'The page is not visible, not in the menu, needs a new address or should be deleted.',
  outcome: 'You will quickly resolve typical situations with page settings.',
  blocks: [
    { t: 'faq', items: [
      { q: 'I created a page but don’t see it on the site.', a: 'A new page is inactive by default. Enable it with the “eye” button in the “Sitemap” or with the “Active” checkbox for the required language, and check the display locations.' },
      { q: 'The page is on the site but not in the menu.', a: 'Check “Show in the main navigation menu”.' },
      { q: 'Can I change the page address?', a: 'Yes, the page address is formed from the Slug field. After changing it, set up a redirect from the old address to the new one so that old links and search engines don’t lead to a 404 page.' },
      { q: 'How do I delete a page?', a: 'Click the “bin” next to the page in the “Sitemap” or at the top of the “Edit page” form. The whole page is deleted with all its language versions. A deletion confirmation window appears.' }
    ] }
  ],
  related: ['page-language-options', 'page-general-options', 'faq-structure']
}

];

HC.en.categories = [
  { id: 'start', code: 'EXA-01', title: 'Getting started', icon: 'compass', desc: 'Signing in, the workspace, navigation and checking pages. The first level of working with the platform.' },
  { id: 'structure', code: 'EXA-02', title: 'Site Structure', icon: 'tree', desc: 'The page tree, the “Sitemap” screen, language versions and creating a new page.' },
  { id: 'pages', code: 'EXA-03', title: 'Page Management', icon: 'sliders', desc: 'Title, address, activity, template and where the page is shown on the site.' },
  { id: 'builder', code: 'EXA-04', title: 'Page Builder', icon: 'blocks', draft: true, desc: 'Zones, blocks, micro blocks, snapshots and spacing basics.' }
];

HC.en.quickstart = {
  title: 'Quick start',
  lead: 'Nine short first-level lessons. After them you will be able to find a page, change text or a photo and check the result. That is all you need for everyday updates.',
  notes: {
    'welcome': 'What the platform can do and its editing levels', 'platform-basics': 'Page → Zone → Block → Element', 'login': 'First sign-in and what to do if it fails',
    'workspace': 'Where the panels and buttons are', 'open-page': 'How to get to the page you need', 'edit-text': 'How to replace text and change a heading style',
    'replace-image': 'How to replace a photo via the Photobank', 'desktop-mobile': 'How to view the page in the narrow layout', 'visitor-preview': 'The final check without working outlines'
  }
};

HC.en.popular = [
  { slug: 'open-page', title: 'Find and open a page', icon: 'find' },
  { slug: 'edit-text', title: 'Change text or a heading', icon: 'text' },
  { slug: 'replace-image', title: 'Replace an image', icon: 'image' },
  { slug: 'create-page', title: 'Create a new page', icon: 'newpage' },
  { slug: 'page-language-options', section: 'active', title: 'Make a page visible on the site', icon: 'eye' },
  { slug: 'add-microblock', title: 'Add a block to a page', icon: 'blocks' },
  { slug: 'desktop-mobile', title: 'Check a page on a smartphone', icon: 'phone' },
  { slug: 'page-language-options', section: 'alias', title: 'Change a page address', icon: 'link' }
];
