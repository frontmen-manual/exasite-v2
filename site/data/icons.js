/* Словник іконок. Іконки згруповано за місцем на екрані.
   crop — фрагмент оригінального скриншота (img/crops/…), full — повний скриншот для перевірки контексту.
   glyph — умовне позначення з набору прототипу (не скриншот). */
HC.iconGroups = [
  { id: 'left', crop: 'left-panel', full: 'EXA-01_S02', more: 'desktop-mobile',
    uk: { title: 'Ліва панель', where: 'Угорі лівої панелі робочого простору' },
    en: { title: 'Left sidebar', where: 'At the top of the workspace’s left sidebar' },
    items: [
      { glyph: 'monitor', uk: ['Монітор (Desktop)', 'Перемикає робочу область на широке представлення сторінки. Також вибирає, для якої версії ви налаштовуєте відступи.', 'desktop-mobile'], en: ['Monitor (Desktop)', 'Switches the workspace to the wide page view. Also selects which version you adjust spacing for.', 'desktop-mobile'] },
      { glyph: 'phone', uk: ['Смартфон (Mobile)', 'Перемикає на вузьке, мобільне представлення сторінки.', 'desktop-mobile'], en: ['Phone (Mobile)', 'Switches to the narrow, mobile page view.', 'desktop-mobile'] },
      { glyph: 'toggle', uk: ['Сітка', 'Показує колонки, за якими вирівнюються зони та блоки. Відвідувачі сітку не бачать.', 'grid-hidden'], en: ['Grid', 'Shows the columns that zones and blocks are aligned to. Visitors do not see the grid.', 'grid-hidden'] },
      { glyph: 'toggle', uk: ['Відображати приховане', 'Показує в редакторі приховані або неактивні блоки. Не публікує змін.', 'grid-hidden'], en: ['Show hidden', 'Shows hidden or inactive blocks in the editor. Does not publish anything.', 'grid-hidden'] }
    ] },
  { id: 'preview', crop: 'preview', full: 'EXA-12_S01', more: 'visitor-preview',
    uk: { title: 'Правий нижній кут', where: 'У правому нижньому куті робочого простору' },
    en: { title: 'Bottom-right corner', where: 'In the bottom-right corner of the workspace' },
    items: [
      { glyph: 'preview', uk: ['Перегляд як відвідувач', 'Відкриває сторінку в новій вкладці без службових рамок і кнопок.', 'visitor-preview'], en: ['Visitor preview', 'Opens the page in a new tab without working outlines and buttons.', 'visitor-preview'] }
    ] },
  { id: 'sitemap', crop: 'sitemap-actions', full: 'EXA-02_S13', more: 'create-page',
    uk: { title: 'Мапа сайту: кнопки сторінки', where: 'Ліворуч від сторінки в «Мапі сайту», коли наводите курсор' },
    en: { title: 'Sitemap: page buttons', where: 'To the left of a page in the “Sitemap” when you hover over it' },
    items: [
      { glyph: 'drag', uk: ['Перетягування', 'Змінює порядок сторінок і їхню вкладеність.', 'create-page#buttons'], en: ['Drag', 'Changes the order of pages and their nesting.', 'create-page#buttons'] },
      { glyph: 'plus', uk: ['Додати', 'Створює нову сторінку, вкладену в цю. Біля «Головної» — сторінку першого рівня.', 'create-page#steps'], en: ['Add', 'Creates a new page nested in this one. Next to “Main” — a first-level page.', 'create-page#steps'] },
      { glyph: 'eye', uk: ['Око', 'Приховує або активує сторінку.', 'page-language-options#active'], en: ['Eye', 'Hides or activates the page.', 'page-language-options#active'] },
      { glyph: 'pencil', uk: ['Олівець', 'Відкриває налаштування сторінки.', 'page-open-options'], en: ['Pencil', 'Opens the page settings.', 'page-open-options'] },
      { glyph: 'link', uk: ['Посилання', 'Підключає сторінку до бази даних.', 'create-page#buttons'], en: ['Link', 'Connects the page to a database.', 'create-page#buttons'] },
      { glyph: 'trash', uk: ['Кошик', 'Видаляє сторінку після підтвердження.', 'faq-pages'], en: ['Bin', 'Deletes the page after confirmation.', 'faq-pages'] }
    ] },
  { id: 'lang', crop: 'lang-actions', full: 'EXA-02_S08', more: 'languages',
    uk: { title: 'Мапа сайту: кнопки мовної колонки', where: 'Ліворуч від назви мовної колонки, коли наводите курсор' },
    en: { title: 'Sitemap: language column buttons', where: 'To the left of a language column name when you hover over it' },
    items: [
      { glyph: 'eye', uk: ['Око', 'Приховує або вмикає мовну версію сайту разом з усіма її сторінками.', 'languages#column-actions'], en: ['Eye', 'Hides or enables the language version together with all its pages.', 'languages#column-actions'] },
      { glyph: 'pencil', uk: ['Олівець', 'Відкриває налаштування мови.', 'languages#column-actions'], en: ['Pencil', 'Opens the language settings.', 'languages#column-actions'] },
      { glyph: 'trash', uk: ['Кошик', 'Видаляє мову.', 'languages#column-actions'], en: ['Bin', 'Deletes the language.', 'languages#column-actions'] }
    ] },
  { id: 'zone', crop: 'zone-strip', full: 'EXA-04_S14', more: 'block-actions', uaOnlyArticle: false,
    uk: { title: 'Смуга зони', where: 'На вертикальній смузі зліва від зони' },
    en: { title: 'Zone strip', where: 'On the vertical strip to the left of a zone' },
    items: [
      { glyph: 'gear', uk: ['Шестерня', 'Відкриває панель налаштувань зони.', 'block-actions'], en: ['Gear', 'Opens the zone settings panel.', 'block-actions'] },
      { glyph: 'half', uk: ['Тема зони', 'Змінює тему зони, наприклад з «Прозорий» на «Прозорий на весь екран».', 'create-zone#themes'], en: ['Zone theme', 'Changes the zone theme, for example from “Transparent” to “Transparent full screen”.', 'create-zone#themes'] },
      { glyph: 'updown', uk: ['Стрілки ↑ ↓', 'Переміщують зону на одну позицію вгору або вниз.', 'block-actions'], en: ['Arrows ↑ ↓', 'Move the zone one position up or down.', 'block-actions'] }
    ] },
  { id: 'addzone', crop: 'add-zone', full: 'EXA-04_S75', more: 'snapshots#zone', uaOnlyArticle: false,
    uk: { title: '«+» ліворуч від зони', where: 'Ліворуч від зони, поза сторінкою' },
    en: { title: '“+” left of a zone', where: 'To the left of a zone, outside the page' },
    items: [
      { glyph: 'plus', uk: ['Додати зону', 'Відкриває вікно «Створення зони»: нова зона або збережена.', 'snapshots#zone'], en: ['Add zone', 'Opens the “Create zone” window: a new zone or a saved one.', 'snapshots#zone'] }
    ] },
  { id: 'block', crop: 'block-btns', full: 'EXA-04_S12', more: 'block-actions', uaOnlyArticle: false,
    uk: { title: 'Кнопки блока', where: 'Ліворуч від блока, коли ви клацаєте на нього' },
    en: { title: 'Block buttons', where: 'To the left of a block when you click it' },
    items: [
      { glyph: 'gear', uk: ['Шестерня', 'Відкриває панель налаштувань блока.', 'block-actions'], en: ['Gear', 'Opens the block settings panel.', 'block-actions'] },
      { glyph: 'eye', uk: ['Око', 'Приховує блок від відвідувачів.', 'block-actions'], en: ['Eye', 'Hides the block from visitors.', 'block-actions'] },
      { glyph: 'pencil', uk: ['Олівець', 'Вмикає редагування вмісту блока.', 'edit-text'], en: ['Pencil', 'Turns on editing of the block content.', 'edit-text'] },
      { glyph: 'updown', uk: ['Стрілки ↑ ↓', 'Переміщують блок на одну позицію вгору або вниз.', 'block-actions'], en: ['Arrows ↑ ↓', 'Move the block one position up or down.', 'block-actions'] }
    ] },
  { id: 'panel', crop: 'announce-panel', full: 'EXA-04_S79', more: 'announce-blocks#panel-buttons', uaOnlyArticle: false,
    uk: { title: 'Панель налаштувань («шестерня»)', where: 'У розділі «Налаштування» панелі, яку відкриває «шестерня»' },
    en: { title: 'Settings panel (“gear”)', where: 'In the “Settings” part of the panel opened by the “gear”' },
    items: [
      { glyph: 'eye', uk: ['Око', 'Приховує зону чи блок від відвідувачів або знову показує.', 'block-actions'], en: ['Eye', 'Hides the zone or block from visitors or shows it again.', 'block-actions'] },
      { glyph: 'clip', uk: ['Скріпка (анонсний блок)', 'Відкриває «З’єднання з базою даних».', 'announce-blocks#db-fields'], en: ['Paperclip (announcement block)', 'Opens “Database connection”.', 'announce-blocks#db-fields'] },
      { glyph: 'gear', uk: ['Шестерня (анонсний блок)', 'Відкриває «Налаштування»: кількість записів і поля.', 'announce-blocks#announce'], en: ['Gear (announcement block)', 'Opens “Settings”: number of records and fields.', 'announce-blocks#announce'] },
      { glyph: 'snap', uk: ['Квадрат із плюсом', 'Зберігає зону чи блок як снапшот.', 'snapshots'], en: ['Square with plus', 'Saves the zone or block as a snapshot.', 'snapshots'] },
      { glyph: 'trash', uk: ['Кошик', 'Видаляє зону чи блок після підтвердження.', 'block-actions'], en: ['Bin', 'Deletes the zone or block after confirmation.', 'block-actions'] }
    ] },
  { id: 'quick', crop: 'quick-add', full: 'EXA-04_S20', more: 'add-microblock#quick-add',
    uk: { title: 'Рядок швидкого додавання', where: 'Під останнім блоком у зоні' },
    en: { title: 'Quick-add row', where: 'Below the last block in a zone' },
    items: [
      { glyph: 'plus', uk: ['Додати блок', 'Відкриває вікно «Модулі» з усіма категоріями.', 'modules-library'], en: ['Add block', 'Opens the block library with all categories.', 'modules-library'] },
      { text: 'ttl', uk: ['ttl', 'Заголовок (Title).', 'add-microblock#quick-add'], en: ['ttl', 'Heading (Title).', 'add-microblock#quick-add'] },
      { text: 'txt', uk: ['txt', 'Текст (Text or List).', 'add-microblock#quick-add'], en: ['txt', 'Text (Text or List).', 'add-microblock#quick-add'] },
      { text: 'gap', uk: ['gap', 'Розділювальна лінія (Gap).', 'add-microblock#quick-add'], en: ['gap', 'Divider line (Gap).', 'add-microblock#quick-add'] },
      { text: 'quo', uk: ['quo', 'Цитата (Quote).', 'add-microblock#quick-add'], en: ['quo', 'Quote.', 'add-microblock#quick-add'] },
      { text: 'img', uk: ['img', 'Зображення (Image fit width).', 'add-microblock#quick-add'], en: ['img', 'Image (Image fit width).', 'add-microblock#quick-add'] }
    ] },
  { id: 'dialog', crop: 'dialog-ok', full: 'EXA-02_S14', more: 'create-page#steps',
    uk: { title: 'Кнопки діалогових вікон', where: 'У правому нижньому куті вікон «Створення розділу», «Створення мови», «Модулі» та інших' },
    en: { title: 'Dialog buttons', where: 'In the bottom-right corner of “Create section”, “Create language” and other windows' },
    items: [
      { glyph: 'x', uk: ['Хрестик', 'Закриває вікно без змін.', 'languages#add'], en: ['Cross', 'Closes the window without changes.', 'languages#add'] },
      { glyph: 'check', uk: ['Галочка', 'Зберігає або підтверджує.', 'create-page#steps'], en: ['Check mark', 'Saves or confirms.', 'create-page#steps'] }
    ] }
];
