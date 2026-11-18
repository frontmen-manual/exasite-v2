/* Source: EXA-04_Exasite_Guide_EN_v1.0 (section “Page Builder”, translation of the approved UA v1.0; awaiting review).
   Screenshots: EXA-04_SNN_EN (EN interface). Added 12.11.2026. */
HC.en.articles.push(

{ slug: 'builder-basics', cat: 'builder', level: 2,
  title: 'How a page is built in the builder',
  source: 'EXA-04 · introduction, contents and topic 01 “How a page is built”',
  lead: 'Zones · Blocks · Micro blocks · Snapshots.',
  outcome: 'You will understand which parts a page is built from and see the result you will get after topics 02–05.',
  blocks: [
    { t: 'p', html: 'In Exasite, a page is built from ready-made parts: first you add a zone, and then you fill it. Most often, blocks are placed in a zone and their elements are filled in — headings, texts, buttons, images. But this order is not mandatory: you can add [[add-microblock|micro blocks]] to a zone right away — the smallest ready-made parts with one, sometimes two, elements. This section shows how to do it step by step, where to find the blocks you need and how to manage them on the page.' },
    { t: 'p', html: 'Topics 01–05 are enough for your first page. The rest will be useful when you want to reuse ready-made parts, build more complex layouts or fine-tune the appearance.' },
    { t: 'h2', id: 'levels', text: 'Three levels nested inside each other' },
    { t: 'p', html: 'Every page consists of three levels nested inside each other:' },
    { t: 'table', head: ['Level', 'What it is'], rows: [
      ['Zone', 'An area of the page where blocks are placed. A zone sets the frame of a section: how many columns it has and whether it takes up the full width of the screen.'],
      ['Block', 'The main building part of a page. A block combines elements and defines their arrangement and display style.'],
      ['Element', 'The smallest part inside a block that displays information: a heading, a paragraph of text, a button, an image.']
    ] },
    { t: 'p', html: 'Below is the result you will get after topics 02–05: one zone with four micro blocks in it — a title, text, a button and an image. Micro blocks are the simplest blocks with one, sometimes two, elements: they are used to quickly build ordinary text pages ([[add-microblock|micro blocks]]). So a zone does not have to be filled with complex blocks: for a simple page, it is enough to add micro blocks to it right away.' },
    { t: 'fig', img: 'EXA-04_S54_EN', cap: 'A finished page in visitor mode: title, text, button, image' },
    { t: 'example', html: 'For example, in the image above the “Block Title” heading, the text paragraphs, the “Button More details” button and the forest photo are four micro blocks in one zone. Visitors do not see the borders of zones and blocks: they are shown only in the platform workspace.' },
    { t: 'h2', id: 'contents', text: 'Contents of the “Page Builder” section' },
    { t: 'table', head: ['No.', 'Topic', 'What you will learn'], rows: [
      ['01', 'How a page is built', 'Zone → blocks or micro blocks → elements, with an example'],
      ['02', '[[create-zone|Creating a zone]]', 'Number of columns and zone theme'],
      ['03', '[[modules-library|The “Modules” library]]', 'Block categories and how to choose the right one'],
      ['04', '[[add-microblock|Micro blocks]]', 'Title, text, button, image; quick add'],
      ['05', '[[edit-text|Editing content]]', 'Text, heading style, button, image'],
      ['06', '[[announce-blocks|Base and announcement blocks]]', 'Ready-made blocks and blocks with data from a database'],
      ['07', '[[block-actions|Actions with zones and blocks]]', 'Order, hiding, deleting'],
      ['08', '[[snapshots|Snapshots]]', 'How to save a zone or block and insert it again'],
      ['09', '[[two-columns|Two-column zone]]', 'How to place blocks in two columns'],
      ['10', '[[spacing-basics|Spacing in brief]]', 'Basic rules for the distances between blocks'],
      ['11', '[[faq-builder|FAQ]]', 'Answers to common questions']
    ] }
  ],
  related: ['create-zone', 'platform-basics', 'modules-library']
},

{ slug: 'create-zone', cat: 'builder', level: 2, demo: 'create-zone',
  title: 'How to create a zone on a page',
  source: 'EXA-04 · topic 02 “Creating a zone”',
  lead: 'Filling a new page starts with the “Create zone” button.',
  outcome: 'A new zone with the “Add block” button appears on the page.',
  blocks: [
    { t: 'p', html: 'A new page is empty: it has only the header, the path and the “Create zone” button. This is where filling it starts.' },
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Open the page and click “Create zone”.', img: 'EXA-04_S01_EN', cap: 'An empty page with the “Create zone” button' },
      { html: 'In the “Create zone” window, choose the number of columns: “One”, “Two” or “Three”. Below, under “Saved zones”, the zones you save as snapshots will appear. A snapshot is a saved zone or block with all its content: you can insert it again so that you do not have to build the same part of a page from scratch ([[snapshots|more about snapshots]]).', img: 'EXA-04_S02_EN', cap: 'The “Create zone” window: number of columns and saved zones' },
      { html: 'After you choose the columns, the “Theme” item appears. Choose a theme and click the check mark button. If in doubt, choose “Transparent”: “Transparent full screen” is needed only when the content should reach the edges of the screen.', img: 'EXA-04_S03_EN', cap: 'Choosing the number of columns and the zone theme' },
      { html: 'A new zone with the “Add block” button appears on the page. In the left panel, it is labelled “Zone 1”.', img: 'EXA-04_S04_EN', cap: 'A created zone with the “Add block” button' }
    ] },
    { t: 'h2', id: 'columns', text: 'How many columns to choose' },
    { t: 'table', head: ['Columns', 'When to use'], rows: [
      ['One', 'For most sections: text, a banner, lists, galleries.'],
      ['Two', 'When you need to put two parts side by side: text and a photo, a description and a form.'],
      ['Three', 'For three equal short blocks: benefits, contacts, key figures.']
    ] },
    { t: 'h2', id: 'themes', text: 'Which theme to choose' },
    { t: 'table', head: ['Theme', 'What it does'], rows: [
      ['Transparent', 'The zone content stays within the outer margins of the page, like the main text of the site. This is the usual choice for most sections.'],
      ['Transparent full screen', 'The zone content stretches to the edges of the screen. Suitable, for example, for a wide banner or a full-width photo.']
    ] },
    { t: 'p', html: 'If you choose two columns, the zone will have two separate areas, each with its own “Add block” button ([[two-columns|two-column zone]]).' },
    { t: 'fig', img: 'EXA-04_S06_EN', cap: 'A zone with two columns' },
    { t: 'example', html: 'For example, for an ordinary section with text and a photo, choose “One” and the “Transparent” theme, and for a full-width banner — “Transparent full screen”.' }
  ],
  related: ['modules-library', 'add-microblock', 'two-columns']
},

{ slug: 'modules-library', cat: 'builder', level: 2,
  title: 'The “Modules” library: which block to choose',
  source: 'EXA-04 · topic 03 “The Modules library”',
  lead: 'The “Add block” button opens the block library of your site.',
  outcome: 'You will know which category to look in for the block you need.',
  blocks: [
    { t: 'p', html: 'The “Add block” button opens the “Modules” window — the block library of your site. The categories and the number of blocks in each are listed on the left, and thumbnails of the blocks in the selected category are on the right. Select a thumbnail and click the check mark button.' },
    { t: 'fig', img: 'EXA-04_S68_EN', cap: 'The “Modules” window, “Micro blocks” category' },
    { t: 'h2', id: 'categories', text: 'Library categories' },
    { t: 'table', head: ['Category', 'What it contains'], rows: [
      ['Micro blocks', 'The simplest blocks with one, sometimes two, elements: a title, text, a button, an image and so on. They are used to build content pages ([[add-microblock|micro blocks]]).'],
      ['Base blocks', 'Pre-designed blocks that are available in every project and take on the look of your site through its styles: text with an image, a gallery, a banner, contacts, FAQ and others ([[announce-blocks|base and announcement blocks]]).'],
      ['Announcement blocks', 'Blocks that show records from the site database (a structured list of materials) — news, articles, projects, products. For example, the “Other news” block shows the latest news from the database ([[announce-blocks|base and announcement blocks]]).'],
      ['Search blocks', 'A block with a site search field.'],
      ['Snapshots', 'Blocks that you or your team have saved for reuse ([[snapshots|snapshots]]).']
    ] },
    { t: 'gallery', items: [
      { img: 'EXA-04_S69_EN', cap: 'The “Base blocks” category' },
      { img: 'EXA-04_S70_EN', cap: 'The “Announcement blocks” category: 3-column and 4-column variants' },
      { img: 'EXA-04_S71_EN', cap: 'The “Search blocks” category' }
    ] },
    { t: 'p', html: 'Blocks developed specifically for your site (custom blocks) are located in a separate “Custom” tab on the right in the library. The demo site used for the images does not have this tab. The custom blocks of your project are described in a separate appendix to the guide (EXA-X).' },
    { t: 'h2', id: 'pick', text: 'What you need → which block to use' },
    { t: 'table', head: ['What you need', 'Which block to use'], rows: [
      ['Section title', 'Micro blocks → Title'],
      ['Text paragraph or list', 'Micro blocks → Text or List'],
      ['Button with a link', 'Micro blocks → Button'],
      ['Block-width photo', 'Micro blocks → Image fit width'],
      ['Quote', 'Micro blocks → Quote or Quote + Title'],
      ['Text next to an image', 'Base blocks → Text + Image (left) / (right)'],
      ['Banner with text', 'Base blocks → Hero + Text on it / Hero + Text above'],
      ['Gallery of three photos', 'Base blocks → Gallery 3 images'],
      ['Contacts, contacts with a map', 'Base blocks → Contacts / Contacts + Map'],
      ['Questions and answers', 'Base blocks → FAQ'],
      ['Latest news or articles', 'Announcement blocks → 3-column / 4-column'],
      ['Search field', 'Search blocks']
    ] },
    { t: 'callout', kind: 'important', title: 'Important', html: 'The set of blocks depends on your project. The images in this guide were made on a demo site, so the names and number of blocks you have may differ.' }
  ],
  related: ['add-microblock', 'announce-blocks', 'snapshots']
},

{ slug: 'add-microblock', cat: 'builder', level: 2, demo: 'create-zone',
  title: 'How to add a title, text, button or image',
  source: 'EXA-04 · topic 04 “Micro blocks”, 4.1 and 4.2',
  lead: 'Micro blocks are the easiest way to fill a page.',
  outcome: 'The micro blocks you need appear in the zone — and the page section is built.',
  blocks: [
    { t: 'p', html: 'Micro blocks are the easiest way to fill a page. Each micro block is responsible for one thing: a title, text, a button or an image. By placing them one under another, you build a section of the page.' },
    { t: 'table', head: ['Micro block', 'What it is for'], rows: [
      ['Title', 'Title'], ['Button', 'Button with a link'], ['Text or List', 'Text paragraph or list'],
      ['Gap', 'A dividing line between parts of the content (not an empty space)'], ['WYSIWYG', 'Text in a standard text editor — with more formatting options than Text or List'],
      ['Text 2 Columns', 'Text in two columns'], ['Text 3 Columns', 'Text in three columns'], ['Quote', 'Quote'],
      ['Quote + Title', 'Quote with a title'], ['Image fit width', 'An image across the full width of the block']
    ] },
    { t: 'h2', id: 'add', text: 'Adding a micro block' },
    { t: 'steps', items: [
      { html: 'In the zone, click “Add block”.' },
      { html: 'In the “Modules” window, open “Micro blocks”, select the one you need (for example, Title) and click the check mark button.', img: 'EXA-04_S19_EN', cap: 'Selecting the Title micro block in the “Modules” window' },
      { html: 'The block appears in the zone. Below it is the quick add bar for the next block.', img: 'EXA-04_S20_EN', cap: 'An added title and the quick add bar under it' }
    ] },
    { t: 'h2', id: 'quick-add', text: 'Quick add' },
    { t: 'p', html: 'The bar under the last block lets you add the next micro block with one click, without opening the library:' },
    { t: 'table', head: ['Button', 'What it adds'], rows: [
      ['Add block', 'Opens the “Modules” window with all categories'], ['ttl', 'A title (Title)'], ['txt', 'Text (Text or List)'],
      ['gap', 'A dividing line (Gap)'], ['quo', 'A quote (Quote)'], ['img', 'An image (Image fit width)']
    ] },
    { t: 'p', html: 'So, by clicking “txt”, “Add block” → Button and “img” in turn, you can build a section like the one in the images below.' },
    { t: 'gallery', items: [
      { img: 'EXA-04_S22_EN', cap: 'Text added under the title' },
      { img: 'EXA-04_S24_EN', cap: 'The “More details” button added' },
      { img: 'EXA-04_S26_EN', cap: 'An image added — the section is complete' }
    ] },
    { t: 'example', html: 'For example, the “Interface Development” section in the last image consists of four micro blocks: Title (“Interface Development”), Text or List (three paragraphs), Button (“More details”) and Image fit width.' },
    { t: 'check', title: 'Check the result', items: [
      'All the micro blocks you need are in the zone in the right order.',
      'The sample content is replaced with yours ([[edit-text|how to change text]]).',
      'The page is checked in visitor mode.'
    ] }
  ],
  related: ['edit-text', 'modules-library', 'block-actions']
},

{ slug: 'edit-text', cat: 'builder', level: 1,
  title: 'How to change text or a title',
  source: 'EXA-04 · topic 05 “Editing content”, 5.1 “Text and title”',
  lead: 'After it is added, a micro block contains sample content. Replace it with your own.',
  outcome: 'Your text appears in the block, and the title gets the style and alignment you need.',
  blocks: [
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Click the block — its buttons appear on the left.' },
      { html: 'Click the “pencil” — it enables editing of the block content.', img: 'EXA-04_S12_EN', cap: 'The “pencil” button next to a block' },
      { html: 'Replace the sample text with your own.' }
    ] },
    { t: 'h2', id: 'heading-style', text: 'Title style and alignment' },
    { t: 'p', html: 'When you edit a title, a panel appears on the right: “Alignment” (left, centre, right) and “Text style” — from Heading 1 to Heading 6. The styles are set in your site theme, so headings of the same level look the same everywhere.' },
    { t: 'fig', img: 'EXA-04_S31_EN', cap: 'The alignment and heading style panel' },
    { t: 'example', html: 'For example, in the image above the Heading 2 style is selected for the “Interface Development” title.' },
    { t: 'callout', kind: 'mistake', title: 'Common mistake', html: 'Looking for the text in the wrong place. If you are not sure where a label is changed, first find out whether it belongs to a page block or to [[top-panel#interface-texts|“Interface texts”]] (EXA-01, topic 04).' },
    { t: 'check', title: 'Check the result', items: [
      'Your text is in the block instead of the sample.',
      'The title has the style (Heading 1–6) and alignment you need.',
      'The page is checked in [[visitor-preview|visitor mode]].'
    ] }
  ],
  related: ['edit-button', 'replace-image', 'visitor-preview']
},

{ slug: 'edit-button', cat: 'builder', level: 2,
  title: 'How to change a button’s text and link',
  source: 'EXA-04 · topic 05 “Editing content”, 5.2 “Button”',
  lead: 'Click the button in the block — the “Editing a button” window opens.',
  outcome: 'The button will have your text and lead to the right page.',
  blocks: [
    { t: 'p', html: 'Click the button in the block — the “Editing a button” window opens:' },
    { t: 'fig', img: 'EXA-04_S36_EN', cap: 'The “Editing a button” window' },
    { t: 'table', head: ['Field', 'What to enter'], rows: [
      ['Button text', 'The text on the button, for example “More details”.'],
      ['Link URL', 'The address of the page the button leads to.'],
      ['Open link in...', 'Where the page opens, for example “Current window”.']
    ] },
    { t: 'p', html: 'To save the changes, click the check mark button.' },
    { t: 'check', title: 'Check the result', items: [
      'The button shows your text.',
      'In visitor mode, the button leads to the right address and opens where you specified.'
    ] }
  ],
  related: ['edit-text', 'replace-image', 'add-microblock']
},

{ slug: 'replace-image', cat: 'builder', level: 1, demo: 'replace-image',
  title: 'How to replace an image',
  source: 'EXA-04 · topic 05 “Editing content”, 5.3 “Image”',
  lead: 'An image is selected from the site’s Photo Bank.',
  outcome: 'The new photo is set as the block’s main and mobile image.',
  blocks: [
    { t: 'h2', id: 'steps', text: 'Step by step' },
    { t: 'steps', items: [
      { html: 'Click the image in the block. The “Images” window opens with the “Main image” and “Mobile image” fields and the Photo Bank — the storage of site images from which they are added to pages. “Mobile image” is a separate photo for smartphones: you set it when the specifics of the mobile version require a different image.', img: 'EXA-04_S39_EN', cap: 'The “Images” window and the “Photo Bank”' },
      { html: 'If the photo you need is not in the Photo Bank yet, click “Upload new”, select a file and click “Add to the photo bank”.', img: 'EXA-04_S40_EN', cap: 'Uploading a new photo to the Photo Bank' },
      { html: 'Select a photo in the Photo Bank — it appears in the image fields. Click the check mark button.', img: 'EXA-04_S41_EN', cap: 'The selected photo set as the main and mobile image' }
    ] },
    { t: 'p', html: 'More about the Photo Bank — in section EXA-08.' },
    { t: 'check', title: 'Check the result', items: [
      'The new photo is visible in the block in Desktop mode.',
      'Switch to Mobile and check the mobile image.',
      'Open the page [[visitor-preview|as a visitor]]: the image, text and spacing are displayed correctly.'
    ] }
  ],
  related: ['edit-text', 'desktop-mobile', 'visitor-preview']
},

{ slug: 'announce-blocks', cat: 'builder', level: 3,
  title: 'Base blocks and how to set up a news block',
  source: 'EXA-04 · topic 06 “Base and announcement blocks”',
  lead: 'Ready-made layouts and blocks that show records from a database.',
  outcome: 'The announcement block will show the right records from the database in the right number.',
  blocks: [
    { t: 'h2', id: 'base', text: 'Base blocks' },
    { t: 'p', html: 'Base blocks are ready-made layouts made of several elements. They are added the same way as micro blocks: “Add block” → “Base blocks” → thumbnail → check mark button. On the demo site, the following are available: Tags, Text + Image (left), Text + Image (right), Gallery 3 images, Hero + Text on it, Hero + Text above, Contacts, Contacts + Map, FAQ and a block for embedding code ([[modules-library#categories|the “Modules” library]]). The content of base blocks is edited the same way as described in topic 05 ([[edit-text|editing content]]).' },
    { t: 'h2', id: 'announce', text: 'Announcement blocks' },
    { t: 'p', html: 'An announcement block does not store content itself; it shows records from the site database: news, articles, projects, products.' },
    { t: 'fig', img: 'EXA-04_S83_EN', cap: 'The “Other news” announcement block on the page' },
    { t: 'steps', items: [
      { html: 'Click the announcement block and click the “gear” on the left.', img: 'EXA-04_S78_EN', cap: 'The announcement block settings button' },
      { html: 'The block settings panel opens. At the top there are five buttons.', img: 'EXA-04_S79_EN', cap: 'The announcement block settings panel' },
      { html: 'In the “Connecting to a database” window, choose the source of records and click the check mark button.', img: 'EXA-04_S85_EN', cap: 'The “Connecting to a database” window' },
      { html: 'In the “Settings” window, set “Items count” and tick the “Collection fields” to be shown: “Image”, “Publication datetime”, “Short description”, “Title”.', img: 'EXA-04_S84_EN', cap: 'The announcement block “Settings” window' }
    ] },
    { t: 'h3', id: 'panel-buttons', text: 'Announcement block panel buttons' },
    { t: 'table', icons: true, head: ['Button', 'What it does'], rows: [
      [':eye: Eye', 'Hides the block from visitors or shows it again.'],
      [':clip: Paperclip', 'Opens “Connecting to a database”: which database and which records to take the content from.'],
      [':gear: Gear', 'Opens “Settings”: how many records to show and which fields.'],
      [':snap: Square with a plus', 'Saves the block as a snapshot ([[snapshots|snapshots]]).'],
      [':trash: Bin', 'Deletes the block after confirmation.']
    ] },
    { t: 'h3', id: 'db-fields', text: 'Fields of the “Connecting to a database” window' },
    { t: 'table', head: ['Field', 'What it does'], rows: [
      ['Select database', 'The database the records are taken from, for example “News”.'],
      ['Selection', 'Which records to show, for example “Latest”.'],
      ['Tags', 'Limits the records by tags; “Any tag” — no limit.'],
      ['Sections', 'The database sections from which materials are shown.']
    ] },
    { t: 'example', html: 'For example, the “Other news” block in the first image is set up like this: the “News” database, the “Latest” selection, 4 items, with the image, title, short description and date shown.' },
    { t: 'p', html: 'How to add and edit the records themselves in the database — in section EXA-10.' }
  ],
  related: ['modules-library', 'block-actions', 'snapshots']
},

{ slug: 'block-actions', cat: 'builder', level: 2,
  title: 'How to move, hide or delete a zone or block',
  source: 'EXA-04 · topic 07 “Actions with zones and blocks”',
  lead: 'Zone control buttons are on the strip on the left; block buttons appear when you click the block.',
  outcome: 'You will change the order of a zone or block, hide it or delete it.',
  blocks: [
    { t: 'p', html: 'The zone control buttons are located on the vertical strip to the left of it, and the block buttons appear when you click the block.' },
    { t: 'fig', img: 'EXA-04_S14_EN', cap: 'Zone control buttons on the strip on the left' },
    { t: 'table', icons: true, head: ['Button', 'What it does'], rows: [
      [':arrows: Arrows ↑ ↓', 'Move the block one position up or down. The whole zone is moved the same way.'],
      [':gear: Gear', 'Opens the settings panel of the zone or block.'],
      [':half: Zone theme', 'Changes the zone theme, for example from “Transparent” to “Transparent full screen” ([[create-zone#themes|available themes]]).'],
      [':pencil: Pencil', 'Enables editing of the block content.'],
      [':eye: Eye', 'Hides the zone or block from visitors. The button is on the block strip and in the settings panel. Hidden items remain in the workspace; to see them, turn on “Show hidden” in the left panel.'],
      [':snap: Square with a plus', 'Saves the zone or block as a snapshot ([[snapshots|snapshots]]).'],
      [':trash: Bin', 'Deletes the zone or block. A confirmation window appears before deletion.']
    ] },
    { t: 'p', html: 'The “eye”, “square with a plus” and “bin” are in the “Settings” part of the panel that the “gear” opens. Below in this panel are the spacing settings. Spacing is the distance between blocks and inside them; it determines how spacious and tidy the page looks ([[spacing-basics|spacing basics]], details in section EXA-05).' },
    { t: 'fig', img: 'EXA-04_S15_EN', cap: 'The zone settings panel' },
    { t: 'callout', kind: 'tip', title: 'Tip', html: 'To remove a section from the site temporarily, hide it with the “eye” instead of deleting it. This way you can quickly bring it back without filling it in again.' }
  ],
  related: ['snapshots', 'grid-hidden', 'spacing-basics']
},

{ slug: 'snapshots', cat: 'builder', level: 2, demo: 'snapshot-zone',
  title: 'How to save and reuse a zone or block',
  source: 'EXA-04 · topic 08 “Snapshots”, 8.1 and 8.2',
  lead: 'A snapshot is a saved part of a page that you can insert again.',
  outcome: 'The saved zone or block appears on this or another page with all its content.',
  blocks: [
    { t: 'p', html: 'A snapshot is a saved part of a page that you can insert again on the same or another page. A snapshot saves everything: the content, the spacing for Desktop and Mobile and the current visibility status. You can save a whole zone or a single block:' },
    { t: 'table', head: ['What was saved', 'Where to find it'], rows: [
      ['A zone', '“Create zone” → “Saved zones”'],
      ['A block', '“Modules” → “Snapshots”']
    ] },
    { t: 'p', html: 'Inserting a snapshot is also a convenient way to duplicate a zone or block.' },
    { t: 'h2', id: 'zone', text: 'Save and insert a zone' },
    { t: 'steps', items: [
      { html: 'Open the zone settings with the “gear” and click the “square with a plus”.', img: 'EXA-04_S73_EN', cap: 'The settings panel of a zone with a banner' },
      { html: 'In the “Snapshot name” window, enter a clear name and click the check mark button.', img: 'EXA-04_S74_EN', cap: 'A name for the saved zone' },
      { html: 'To insert the zone, click “+” to the left of the zone (“Add zone”) or “Create zone”.', img: 'EXA-04_S75_EN', cap: 'The “Add zone” button' },
      { html: 'In the “Create zone” window, select the zone you need under “Saved zones”.', img: 'EXA-04_S76_EN', cap: 'The saved zone in the “Create zone” window' },
      { html: 'The zone appears on the page with all its content — in the image it is “Zone 2”.', img: 'EXA-04_S77_EN', cap: 'The inserted copy of the zone' }
    ] },
    { t: 'h2', id: 'block', text: 'Save and insert a block' },
    { t: 'steps', items: [
      { html: 'Open the block settings and click the “square with a plus” (see [[announce-blocks#panel-buttons|the block settings panel]]).' },
      { html: 'Enter a snapshot name and click the check mark button.', img: 'EXA-04_S80_EN', cap: 'A name for the saved block' },
      { html: 'Click “Add block”, open “Snapshots”, select the saved block and click the check mark button.', img: 'EXA-04_S81_EN', cap: 'The saved block in the “Snapshots” category' },
      { html: 'A copy of the block appears in the zone.', img: 'EXA-04_S82_EN', cap: 'The inserted copy of the block' }
    ] },
    { t: 'example', html: 'For example, the “Products” banner can be saved as the “Banner Main Page” zone and inserted on other pages, and the news block — as “Block 3 cards (img, title, text)”.' },
    { t: 'p', html: 'How to manage saved snapshots — in section EXA-06.' },
    { t: 'callout', kind: 'mistake', title: 'Common confusion', html: '“Snapshots” is the general name for saved parts of a page. “Saved zones” are snapshots of whole zones; saved blocks are in “Modules” → “Snapshots”.' }
  ],
  related: ['block-actions', 'create-zone', 'modules-library']
},

{ slug: 'two-columns', cat: 'builder', level: 2,
  title: 'How to place blocks in two columns',
  source: 'EXA-04 · topic 09 “Two-column zone”',
  lead: 'A two-column zone lets you place content side by side, for example text on the left and a photo on the right.',
  outcome: 'A zone with two columns appears on the page, each with its own blocks.',
  blocks: [
    { t: 'steps', items: [
      { html: 'Click “Create zone”, choose “Two”, a theme and click the check mark button.', img: 'EXA-04_S57_EN', cap: 'Creating a zone with two columns' },
      { html: 'Two columns appear in the zone, each with its own “Add block” button.', img: 'EXA-04_S58_EN', cap: 'Two empty columns' },
      { html: 'Fill each column with blocks the same way as an ordinary zone.', img: 'EXA-04_S59_EN', cap: 'The left column is filled, the right one is still empty' }
    ] },
    { t: 'p', html: 'The column width and the spacing in each of them can be set up separately (section EXA-05).' }
  ],
  related: ['create-zone', 'add-microblock', 'spacing-basics']
},

{ slug: 'spacing-basics', cat: 'builder', level: 2,
  title: 'Spacing in brief',
  source: 'EXA-04 · topic 10 “Spacing in brief”',
  lead: 'The distances between blocks and inside them are set in the panel that the “gear” opens.',
  outcome: 'You will know the basic rules that keep the same rhythm on the page.',
  blocks: [
    { t: 'p', html: 'The distances between blocks and inside them are set in the same settings panel that the “gear” opens.' },
    { t: 'fig', img: 'EXA-04_S28_EN', cap: 'Spacing in the block settings panel' },
    { t: 'table', head: ['Setting', 'What it does'], rows: [
      ['Auto / Manual', '“Auto” takes the values from the general site settings. “Manual” lets you enter your own.'],
      ['Left border / Right border', 'The site grid columns on which the zone or block starts and ends. The grid is shown by the “Grid” switch in the left panel.'],
      ['Inner padding', 'Four values in pixels: top, right, bottom, left.']
    ] },
    { t: 'h2', id: 'devices', text: 'Desktop and Mobile are set up separately' },
    { t: 'p', html: 'Spacing is set separately for Desktop and Mobile. First select the mode with the switch at the top of the left panel, and then change the values.' },
    { t: 'gallery', items: [
      { img: 'EXA-04_S62_EN', cap: 'The Desktop / Mobile switch' },
      { img: 'EXA-04_S64_EN', cap: 'Spacing settings in Mobile mode' }
    ] },
    { t: 'h2', id: 'rules', text: 'Rules for the same page rhythm' },
    { t: 'p', html: 'A few rules that will help keep the same rhythm on the page:' },
    { t: 'list', items: [
      'Start with “Auto”. Change manually only what differs from the design layout.',
      'The distance between two blocks is set by the bottom spacing of the upper block. The first block in a zone gets top and bottom spacing, each next one — only bottom spacing.',
      'On Mobile, it is more convenient to set the side spacing in pixels — usually 20 px on the left and right.',
      'After making changes, check the page in both Desktop and Mobile, and finally on a real phone.'
    ] },
    { t: 'callout', kind: 'next', title: 'What’s next', html: 'Section EXA-05 explains the grid, borders, spacing and column ratios in detail.' },
    { t: 'check', title: 'Check the result', items: ['The page in Desktop mode', 'The page in Mobile mode', 'The page on a real phone'] }
  ],
  related: ['desktop-mobile', 'grid-hidden', 'two-columns']
},

{ slug: 'faq-builder', cat: 'builder', level: 2, faq: true,
  title: 'FAQ about the page builder',
  source: 'EXA-04 · topic 11 “FAQ”',
  lead: 'A block is not visible, you need to swap blocks, copy a zone or find a block.',
  outcome: 'You will quickly solve common situations in the builder.',
  blocks: [
    { t: 'faq', items: [
      { q: 'I added a block, but I don’t see it on the site.', a: 'Check that the block or its zone is not hidden with the “eye” and that the page itself is active. Check the result in visitor mode.' },
      { q: 'How do I swap blocks?', a: 'Click the block and click the ↑ ↓ arrows until the block is in the right place. A zone is moved the same way.' },
      { q: 'How do I copy a zone or block?', a: 'Save it as a snapshot with the “square with a plus” and then insert it: a zone — via “Saved zones”, a block — via “Modules” → “Snapshots”.' },
      { q: 'How are “Snapshots” different from “Saved zones”?', a: '“Snapshots” is the general name for saved parts of a page. “Saved zones” are snapshots of whole zones; saved blocks are in “Modules” → “Snapshots”.' },
      { q: 'The block I need is not in “Modules”.', a: 'The set of blocks depends on the project. Check the “Custom” tab or contact the administrator of your project.' },
      { q: 'Spacing looks different on the phone.', a: 'Spacing for Mobile is set separately. Switch to Mobile mode and check the values.' },
      { q: 'What is the Gap micro block for?', a: 'Gap is a dividing line between parts of the content, not an empty space. Distances are set with spacing ([[spacing-basics|spacing in brief]]).' }
    ] }
  ],
  related: ['block-actions', 'snapshots', 'spacing-basics']
}

);
