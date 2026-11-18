/* Інтерактивні демонстрації. Інтерфейс відтворено за скриншотами з Google Drive (02_Screenshots).
   Кожен крок: scene — що показати, target — елемент, на який треба натиснути, tip — підказка.
   Демонстрації працюють лише всередині прототипу й не підключаються до реальної платформи. */
(function () {
  const I = {
    menu: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 5h10M3 8h10M3 11h10" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>',
    chev: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>',
    chevR: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>',
    user: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5" r="3" fill="currentColor"/><path d="M2.5 14c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5z" fill="currentColor"/></svg>',
    home: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 7l5-4 5 4v6H3z" fill="currentColor"/></svg>',
    plus: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    x: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    eye: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z" stroke="currentColor" stroke-width="1.2" fill="none"/><circle cx="8" cy="8" r="2" fill="currentColor"/></svg>',
    pencil: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13l1-3.5 6.5-6.5 2.5 2.5L6.5 12z" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round"/></svg>',
    trash: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 5h9M6.5 5V3.5h3V5M5 5l.6 8h4.8L11 5" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round"/></svg>',
    link: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7 9l2-2M6 11l-1 1a2 2 0 01-3-3l2-2M10 5l1-1a2 2 0 013 3l-2 2" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>',
    drag: '<svg viewBox="0 0 16 16" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="4" r="1"/><circle cx="10" cy="4" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="12" r="1"/><circle cx="10" cy="12" r="1"/></g></svg>',
    gear: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="2.2" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M8 1.8v2M8 12.2v2M1.8 8h2M12.2 8h2M3.6 3.6l1.4 1.4M11 11l1.4 1.4M3.6 12.4L5 11M11 5l1.4-1.4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
    half: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M8 3a5 5 0 010 10z" fill="currentColor"/></svg>',
    snap: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.5" y="2.5" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M8 5.5v5M5.5 8h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
    up: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>',
    down: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>',
    search: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.2" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M10.2 10.2L14 14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
    comment: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3.5h10v7H7l-3 2.5v-2.5H3z" stroke="currentColor" stroke-width="1.1" fill="none" stroke-linejoin="round"/></svg>',
    preview: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6h8l-2-2M13 10H5l2 2" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    monitor: '<svg viewBox="0 0 22 16" aria-hidden="true"><rect x="1" y="1" width="20" height="11" rx="1.5" fill="currentColor"/><path d="M8 15h6" stroke="currentColor" stroke-width="1.5"/></svg>',
    phone: '<svg viewBox="0 0 12 18" aria-hidden="true"><rect x="1" y="1" width="10" height="16" rx="2" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>',
    upload: '<svg viewBox="0 0 40 32" aria-hidden="true"><rect x="6" y="10" width="28" height="16" rx="2" fill="#d9dbe0"/><rect x="10" y="4" width="20" height="10" rx="1" fill="#eceef1"/><circle cx="31" cy="6" r="5" fill="#e3e5ea"/></svg>'
  };
  HC.icons = I;
  HC.mockLang = 'uk';
  const hot = (id, inner, cls, extra) => `<button type="button" tabindex="-1" class="m-hot ${cls || ''}" data-hot="${id}" ${extra || ''}>${inner}</button>`;

  /* ---------- спільна «оболонка» робочого простору ---------- */
  function shell(o) {
    o = o || {};
    const mobile = o.mobile;
    const rail = `<div class="m-rail">
      <img class="m-logo" src="img/logo.png" alt="">
      <div class="m-dev">
        ${hot('desktop-icon', I.monitor, 'm-devbtn' + (mobile ? '' : ' on'))}
        ${hot('mobile-icon', I.phone, 'm-devbtn' + (mobile ? ' on' : ''))}
      </div>
      <div class="m-tg"><span>Сітка</span><i class="m-switch"></i></div>
      <div class="m-tg"><span>Відображати приховане</span><i class="m-switch on"></i></div>
      ${(o.zones || ['Хедер', 'Зона 1', 'Футер']).map(z => `<div class="m-thumbgrp"><span>${z}</span><i></i></div>`).join('')}
    </div>`;
    const top = `<div class="m-top">
      ${hot('structure-btn', `Структура сайту <span class="m-ic">${o.structureOpen ? '<span style="display:inline-block;transform:rotate(180deg)">' + I.chev + '</span>' : I.chev}</span>`, 'm-structbtn' + (o.structureOpen ? ' open' : ''))}
      <span class="m-pill">Меню <span class="m-ic">${I.menu}</span></span>
      <span class="m-pill">Тексти інтерфейсу <span class="m-ic">${I.menu}</span></span>
      <span class="m-user"><span class="m-ic">${I.user}</span><span><small>Супер-адміністратор</small>frontmen</span></span>
    </div>`;
    return `<div class="m-app${mobile ? ' is-mobile' : ''}">${rail}<div class="m-main">${top}
      <div class="m-crumb"><span class="m-ic">${I.home}</span> / ${o.crumb || 'Головна'}</div>
      <div class="m-body">${o.body || ''}</div>
      ${o.overlay || ''}
      ${hot('preview-btn', I.preview, 'm-preview', 'title="Відкрити сторінку в новій вкладці як відвідувач"')}
    </div></div>`;
  }
  function siteHeader() {
    return `<div class="m-sitehead"><b>Frontmen</b><span>Про нас</span><span>Новини</span><span>Проєкти</span><span>FAQ</span><span>Контакти</span><span class="m-ic">${I.search}</span><span>UA</span></div>`;
  }
  function canvas(inner, o) {
    o = o || {};
    return `<div class="m-canvas${o.narrow ? ' narrow' : ''}">
      <div class="m-zone m-zone-head"><div class="m-strip"><em>Хедер</em></div><div class="m-zin">${siteHeader()}</div></div>
      ${inner}
      <div class="m-zone m-zone-foot"><div class="m-strip"><em>Футер</em></div><div class="m-zin m-foot"><b>Frontmen</b><span>Про нас</span><span>Новини</span><span>Проєкти</span><span>FAQ</span></div></div>
    </div>`;
  }
  function zone(label, inner, o) {
    o = o || {};
    const strip = `<div class="m-strip lav">
      ${o.gearHot ? hot('gear', I.gear, 'm-sbtn') : `<span class="m-sbtn">${I.gear}</span>`}
      <span class="m-sbtn">${I.half}</span><span class="m-sbtn">${I.up}</span><span class="m-sbtn">${I.down}</span>
      <em>${label}</em></div>`;
    const add = o.addZoneHot ? hot('add-zone', I.plus, 'm-addzone', 'title="Додати зону"') : `<span class="m-addzone">${I.plus}</span>`;
    return `<div class="m-zone ${o.cls || ''}">${add}${strip}<div class="m-zin">${inner}</div>${o.panel || ''}</div>`;
  }
  const dialog = (title, inner, foot, cls) => `<div class="m-dim"></div><div class="m-dialog ${cls || ''}"><div class="m-dhead"><b>${title}</b><span class="m-ic m-close">${I.x}</span></div>${inner}${foot || ''}</div>`;
  const okbar = (hotOk) => `<div class="m-okbar"><span class="m-round">${I.x}</span>${hotOk ? hot('ok', I.check, 'm-round ok') : `<span class="m-round ok">${I.check}</span>`}</div>`;
  const field = (label, val, id, ph) => `<label class="m-field"><span>${label}</span>${id ? hot(id, val ? `<span data-notr>${val}</span>` : `<i>${ph || ''}</i>`, 'm-input' + (val ? ' filled' : '')) : `<span data-notr class="m-input${val ? ' filled' : ''}">${val || ''}</span>`}</label>`;

  /* ---------- сцени ---------- */
  const PAGES = [['Головна', 'Main', 'Startseite'], ['Про нас', 'About us', 'Über uns'], ['Новини', 'News', 'Nachrichten'], ['Проєкти', 'Projects', 'Projekte'], ['Корпоративні сайти', 'Corporate Websites', 'Unternehmenswebsites', 1], ['FAQ', 'FAQ', 'FAQ'], ['Контакти', 'Contacts', 'Kontakte']];

  function structureMenu(s) {
    const items = [
      `<li class="cur">Головна</li>`, `<li>Про нас</li>`, `<li>Новини</li>`,
      `<li class="has">Проєкти ${s.expanded ? `<span class="m-ic m-exp">${I.chev}</span>` : hot('expand-projects', I.chevR, 'm-exp')}</li>`,
      s.expanded ? `<li class="sub">${hot('page-corp', 'Корпоративні сайти', 'm-linkbtn')}</li>` : '',
      `<li>FAQ</li>`, `<li>Контакти</li>`
    ].join('');
    return `<div class="m-dropdown"><div class="m-ddhead"><b>Структура сайту</b>${s.editHot ? hot('edit-link', 'Редагувати', 'm-editlink') : '<span class="m-editlink">Редагувати</span>'}</div>
      <div class="m-tabs"><span${HC.mockLang === 'en' ? ' class="on"' : ''}>EN</span><span${HC.mockLang === 'en' ? '' : ' class="on"'}>UA</span><span>DE</span></div><ul>${items}</ul></div>`;
  }

  function sitemap(s) {
    const rows = PAGES.slice();
    if (s.newRow) rows.splice(5, 0, [s.newRow[0], s.newRow[1], s.newRow[2], 1, 'new']);
    const body = rows.map((r) => {
      const isProj = r[0] === 'Проєкти';
      const isNew = r[4] === 'new';
      const rowHot = (isProj && s.rowHot === 'projects') || (isNew && s.rowHot === 'new');
      const showActs = (isProj && s.actions === 'projects') || (isNew && s.actions === 'new');
      const acts = showActs ? `<div class="m-acts">
        <span>${I.drag}</span>${s.plusHot ? hot('plus', I.plus) : `<span>${I.plus}</span>`}<span>${I.eye}</span>
        ${s.pencilHot ? hot('pencil', I.pencil) : `<span>${I.pencil}</span>`}<span>${I.link}</span><span>${I.trash}</span></div>` : '';
      const cell = (t, i) => `<span data-notr class="m-smcell${r[3] ? ' nested' : ''}${isNew ? ' inactive' : ''}${showActs && i === 0 ? ' sel' : ''}">${t} <span class="m-ic m-cm">${I.comment}</span></span>`;
      const cells = [cell(r[1], 0), cell(r[0], 1), cell(r[2], 2)].join('');
      return `<div class="m-smrow${isNew ? ' is-new' : ''}">${acts}${rowHot ? hot(isNew ? 'row-new' : 'row-projects', cells, 'm-rowhot') : cells}</div>`;
    }).join('');
    return `<div class="m-sitemap"><div class="m-smhead"><b>Мапа сайту</b>${s.addLangHot ? hot('add-lang', `Додати мову ${I.plus}`, 'm-btn-or') : `<span class="m-btn-or">Додати мову ${I.plus}</span>`}</div>
      <div class="m-smcols"><span>EN</span><span>UA</span><span>DE</span></div>${body}</div>`;
  }

  function emptyPage(o) {
    o = o || {};
    return canvas(`<div class="m-zone m-crumbzone"><div class="m-strip"><em>Хлібні крихти</em></div><div class="m-zin"><div class="m-sitecrumb">Головна → Нова сторінка</div></div></div>
      <div class="m-emptyarea">${o.createHot ? hot('create-zone', `Створити зону ${I.plus}`, 'm-btn-or') : `<span class="m-btn-or">Створити зону ${I.plus}</span>`}</div>`);
  }

  function zoneDialog(s) {
    const col = (n, label) => s.colsHot && n === 1 ? hot('cols-1', `<i></i><span>${label}</span>`, 'm-colopt') : `<span class="m-colopt${s.cols === n ? ' on' : ''}"><i></i><span>${label}</span></span>`;
    const theme = s.cols ? `<div class="m-dsub">Тема</div><div class="m-themes">
        ${s.themeHot ? hot('theme-transparent', '<i></i><span>Прозорий</span>', 'm-theme') : `<span class="m-theme${s.theme ? ' on' : ''}"><i></i><span>Прозорий</span></span>`}
        <span class="m-theme"><i></i><span>Прозорий на весь екран</span></span></div>` : '';
    const saved = s.savedZone ? (s.savedHot ? hot('saved-zone', 'Банер Головна сторінка', 'm-chip') : '<span class="m-chip">Банер Головна сторінка</span>') : '<span class="m-muted-or">Ще немає збережених зон</span>';
    return dialog('Створення зони', `<div class="m-dsub">Кількість колонок</div><div class="m-cols">${col(1, 'Одна')}${col(2, 'Дві')}${col(3, 'Три')}</div>${theme}<div class="m-dsub">Збережені зони</div>${saved}`, s.cols ? okbar(s.okHot) : '', 'm-dlg-zone');
  }

  function modules(s) {
    const mbs = ['Title', 'Button', 'Text or List', 'Gap', 'WYSIWYG', 'Text 2 Columns', 'Text 3 Columns', 'Quote', 'Quote + Title', 'Image fit width'];
    const grid = mbs.map((m, i) => i === 0 && s.titleHot ? hot('mb-title', '<i></i><span>Title</span>', 'm-mb') : `<span class="m-mb${i === 0 && s.titleSel ? ' on' : ''}"><i></i><span>${m}</span></span>`).join('');
    return `<div class="m-dim"></div><div class="m-modules"><div class="m-modcats"><b>Модулі:</b>
      <span class="on">Мікро блоки<small>10 блоків</small></span><span>Базові блоки<small>10 блоків</small></span><span>Анонсні блоки<small>2 блоки</small></span><span>Блоки пошуку<small>1 блок</small></span><span>Снапшоти<small>0 блоків</small></span></div>
      <div class="m-modgrid"><div class="m-dhead"><b>Мікро блоки</b><span class="m-ic m-close">${I.x}</span></div><div class="m-mbs">${grid}</div>${okbar(s.okHot)}</div></div>`;
  }

  const quickRow = `<div class="m-quick"><span class="m-qadd">Додати блок</span><span>ttl</span><span>txt</span><span>gap</span><span>quo</span><span>img</span></div>`;

  function imagePage(o) {
    o = o || {};
    const block = o.imageHot ? hot('image', '', 'm-imgblock m-imghot') : `<div class="m-imgblock${o.newPhoto ? ' forest' : ''}"></div>`;
    return canvas(zone('Зона 1', `<div class="m-title-sm">Продукція</div><div class="m-txtlines"><i></i><i></i><i></i></div><span class="m-ghostbtn">Детальніше</span>${block}`));
  }

  function imageDialog(s) {
    const thumb = (label, filled, hl) => `<div class="m-imgslot${filled ? ' forest' : ''}${hl ? ' hl' : ''}"></div><span class="m-imglabel${hl ? ' or' : ''}">${label}</span>`;
    let right;
    if (s.mode === 'upload') right = `<div class="m-dhead"><b>Завантаження фото</b><span class="m-ic m-close">${I.x}</span></div>
      <div class="m-uprow"><span class="m-pill2">Завантажити ще (1/10)</span><span class="m-pill2">Очистити все</span></div>
      <div class="m-file"><span class="m-imgslot forest sm"></span>forest-photo.jpg</div>
      <div class="m-bottomright">${hot('add-to-bank', 'Додати до фотобанку (1)', 'm-btn-or')}</div>`;
    else right = `<div class="m-dhead"><b>Фотобанк</b><span class="m-ic m-close">${I.x}</span></div>
      ${s.bank ? `<div class="m-bank">${s.photoHot ? hot('photo', '', 'm-imgslot forest') : `<span class="m-imgslot forest hl"></span>`}<small>1279 × 853</small></div>` : `<div class="m-empty">${I.upload}<span>Фото не знайдено</span></div>`}
      ${okbar(s.okHot)}`;
    return `<div class="m-dim"></div><div class="m-imgdlg"><div class="m-imgleft"><b>Зображення</b>
      ${thumb('Основне зображення', s.assigned, true)}${thumb('Мобільне зображення', s.assigned, false)}
      ${s.uploadHot ? hot('upload', 'Завантажити фото', 'm-btn-or wide') : '<span class="m-btn-or wide">Завантажити фото</span>'}</div><div class="m-imgright">${right}</div></div>`;
  }

  function bannerZone(label, o) {
    o = o || {};
    return zone(label, `<div class="m-banner"><b>Інновації</b><span>Веб-дизайн</span></div>`, o);
  }
  const zonePanel = (snapHot) => `<div class="m-zpanel"><small>Налаштування</small><div class="m-zpicons"><span>${I.eye}</span>${snapHot ? hot('snap', I.snap) : `<span>${I.snap}</span>`}<span>${I.trash}</span></div>
    <small>Відступи</small><div class="m-seg"><span class="on">Авто</span><span>Вручну</span></div><small>Ліва межа</small><span class="m-sel">1 ${I.chev}</span><small>Права межа</small><span class="m-sel">24 ${I.chev}</span></div>`;

  function previewTab(narrow) {
    return `<div class="m-browser"><div class="m-btabs"><span>Exasite</span><span class="on">Головна — Frontmen</span></div>
      <div class="m-bpage">${siteHeader()}<div class="m-hero"><b>Innovative Approaches to Digital Product Creation</b><span>Design</span></div></div></div>`;
  }
  const heroCanvas = (narrow) => canvas(zone('Зона 1', `<div class="m-hero"><b>Innovative Approaches to Digital Product Creation</b><span>Design</span></div>`), { narrow });

  /* ---------- демонстрації ---------- */
  HC.demos = {
    'open-page': {
      title: 'Як знайти й відкрити сторінку', article: 'open-page', source: 'EXA-02 · тема 02',
      result: 'Платформа відкрила сторінку «Корпоративні сайти». Шлях угорі показує, де ви зараз.',
      steps: [
        { tip: 'Натисніть «Структура сайту» у верхній панелі.', target: 'structure-btn', render: () => shell({ crumb: 'Головна', body: heroCanvas() }) },
        { tip: 'Поруч із «Проєкти» є стрілка — у сторінки є вкладені сторінки. Натисніть стрілку, щоб розгорнути їх.', target: 'expand-projects', render: () => shell({ structureOpen: true, crumb: 'Головна', body: heroCanvas(), overlay: structureMenu({}) }) },
        { tip: 'Натисніть назву сторінки «Корпоративні сайти» — платформа відкриє її в робочому просторі.', target: 'page-corp', render: () => shell({ structureOpen: true, crumb: 'Головна', body: heroCanvas(), overlay: structureMenu({ expanded: true }) }) },
        { final: true, render: () => shell({ crumb: 'Корпоративні сайти', body: canvas(zone('Зона 1', `<div class="m-title-sm">Корпоративні сайти</div><div class="m-txtlines"><i></i><i></i></div>`)) }) }
      ]
    },

    'create-page': {
      title: 'Як створити нову сторінку', article: 'create-page', source: 'EXA-02 · тема 05',
      result: 'Нова сторінка «Вебдизайн» з’явилася в «Мапі сайту» в усіх мовних колонках, вкладеною в «Проєкти». Вона поки порожня й неактивна, тому показана світлим текстом.',
      steps: [
        { tip: 'У меню «Структура сайту» натисніть «Редагувати», щоб відкрити «Мапу сайту».', target: 'edit-link', render: () => shell({ structureOpen: true, crumb: 'Головна', body: heroCanvas(), overlay: structureMenu({ editHot: true }) }) },
        { tip: 'Наведіть курсор на сторінку, всередині якої має з’явитися нова, — тут це «Проєкти». На сенсорному екрані просто торкніться рядка.', target: 'row-projects', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({ rowHot: 'projects' }) }) },
        { tip: 'Ліворуч з’явилися кнопки дій. Натисніть «+» — нова сторінка буде вкладеною в «Проєкти».', target: 'plus', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({ actions: 'projects', plusHot: true }) }) },
        { tip: 'У вікні «Створення розділу» введіть назву для кожної мови. Натисніть перше поле — у демонстрації назви підставляться автоматично.', target: 'name-en', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({}), overlay: dialog('Створення розділу', field('Назва сторінки (English)', '', 'name-en', 'Web Design') + field('Назва сторінки (Українська)', '') + field('Назва сторінки (Deutsch)', ''), okbar(false)) }) },
        { tip: 'Підтвердьте кнопкою з галочкою.', target: 'ok', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({}), overlay: dialog('Створення розділу', field('Назва сторінки (English)', 'Web Design') + field('Назва сторінки (Українська)', 'Вебдизайн') + field('Назва сторінки (Deutsch)', 'Webdesign'), okbar(true)) }) },
        { final: true, render: () => shell({ crumb: 'Мапа сайту', body: sitemap({ newRow: ['Вебдизайн', 'Web Design', 'Webdesign'] }) }) }
      ]
    },

    'activate-page': {
      title: 'Як налаштувати й увімкнути сторінку', article: 'page-language-options', source: 'EXA-03 · теми 01, 02, 04',
      result: 'У демонстрації українську версію сторінки позначено «Активний» і налаштування збережено. Далі відкрийте сторінку через «Структура сайту» й перевірте її в режимі відвідувача. Порада з інструкції: активуйте сторінку, коли вона повністю готова.',
      steps: [
        { tip: 'У «Мапі сайту» наведіть курсор на потрібну сторінку (або торкніться рядка) — ліворуч з’являться кнопки дій.', target: 'row-new', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({ newRow: ['Нова сторінка', 'New Page', 'Neue Seite'], rowHot: 'new' }) }) },
        { tip: 'Натисніть «олівець». Відкриється форма «Редагування сторінки».', target: 'pencil', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({ newRow: ['Нова сторінка', 'New Page', 'Neue Seite'], actions: 'new', pencilHot: true }) }) },
        { tip: 'Форма має окремий блок для кожної мови. В українському блоці позначте «Активний» — це робить мовну версію сторінки доступною на сайті.', target: 'active-ua', render: () => shell({ crumb: 'Мапа сайту / Редагування сторінки', body: pageForm({ activeHot: true }) }) },
        { tip: 'Натисніть «Зберегти». Щоб вийти без змін, є «Скасувати».', target: 'save', render: () => shell({ crumb: 'Мапа сайту / Редагування сторінки', body: pageForm({ active: true, saveHot: true }) }) },
        { final: true, render: () => shell({ crumb: 'Мапа сайту / Редагування сторінки', body: pageForm({ active: true }) }) }
      ]
    },

    'add-language': {
      title: 'Як додати мову сайту', article: 'languages', source: 'EXA-02 · тема 04',
      result: 'Поля заповнено, кнопка з галочкою зберігає мову. Пам’ятайте: додавання чи видалення мови впливає на весь сайт, тому зазвичай це робить адміністратор проєкту.',
      steps: [
        { tip: 'У «Мапі сайту» натисніть «Додати мову» у правому верхньому куті.', target: 'add-lang', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({ addLangHot: true }) }) },
        { tip: 'Заповніть поля вікна «Створення мови». Натисніть поле «Назва» — у демонстрації приклад із інструкції підставиться автоматично.', target: 'lang-name', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({}), overlay: langDialog({}) }) },
        { tip: 'Поле «Пріоритет мови» видно, якщо прокрутити вікно вниз: перша мова за пріоритетом стає основною мовою сайту. Натисніть кнопку з галочкою, щоб зберегти мову.', target: 'ok', render: () => shell({ crumb: 'Мапа сайту', body: sitemap({}), overlay: langDialog({ filled: true, okHot: true }) }) },
        { final: true, render: () => shell({ crumb: 'Мапа сайту', body: sitemap({}) }) }
      ]
    },

    'create-zone': {
      title: 'Як створити зону й додати заголовок', article: 'create-zone', source: 'EXA-04 · теми 02 і 04',
      result: 'На сторінці з’явилася «Зона 1» з мікроблоком Title. Під ним — рядок швидкого додавання: ttl, txt, gap, quo, img. Тепер замініть зразковий текст своїм.',
      steps: [
        { tip: 'Нова сторінка порожня. Натисніть «Створити зону».', target: 'create-zone', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Футер'], body: emptyPage({ createHot: true }) }) },
        { tip: 'Виберіть кількість колонок. Для звичайного розділу з текстом і фото — «Одна».', target: 'cols-1', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Футер'], body: emptyPage(), overlay: zoneDialog({ colsHot: true }) }) },
        { tip: 'З’явився пункт «Тема». Виберіть «Прозорий» — вміст триматиметься в межах зовнішніх полів сторінки.', target: 'theme-transparent', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Футер'], body: emptyPage(), overlay: zoneDialog({ cols: 1, themeHot: true }) }) },
        { tip: 'Натисніть кнопку з галочкою.', target: 'ok', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Футер'], body: emptyPage(), overlay: zoneDialog({ cols: 1, theme: 1, okHot: true }) }) },
        { tip: 'На сторінці з’явилася «Зона 1». Натисніть «Додати блок».', target: 'add-block', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Зона 1', 'Футер'], body: canvas(zone('Зона 1', `<div class="m-emptyzone">${hot('add-block', `Додати блок ${I.plus}`, 'm-btn-or')}</div>`)) }) },
        { tip: 'Відкрилося вікно «Модулі». У категорії «Мікро блоки» виберіть Title.', target: 'mb-title', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Зона 1', 'Футер'], body: canvas(zone('Зона 1', '<div class="m-emptyzone"></div>')), overlay: modules({ titleHot: true }) }) },
        { tip: 'Натисніть кнопку з галочкою.', target: 'ok', render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Зона 1', 'Футер'], body: canvas(zone('Зона 1', '<div class="m-emptyzone"></div>')), overlay: modules({ titleSel: true, okHot: true }) }) },
        { final: true, render: () => shell({ crumb: 'Нова сторінка', zones: ['Хедер', 'Хлібні крихти', 'Зона 1', 'Футер'], body: canvas(zone('Зона 1', `<div class="m-title-lg">Заголовок блоку</div>${quickRow}`)) }) }
      ]
    },

    'replace-image': {
      title: 'Як замінити зображення', article: 'replace-image', source: 'EXA-04 · тема 05.3',
      result: 'Нове фото призначено основним і мобільним зображенням блока. Перевірте сторінку в режимах Desktop і Mobile, а потім як відвідувач.',
      steps: [
        { tip: 'Клікніть зображення в блоці — відкриється вікно «Зображення».', target: 'image', render: () => shell({ crumb: 'Нова сторінка', body: imagePage({ imageHot: true }) }) },
        { tip: 'Відкрилося вікно «Зображення» з фотобанком. Потрібного фото ще немає — натисніть «Завантажити фото».', target: 'upload', render: () => shell({ crumb: 'Нова сторінка', body: imagePage(), overlay: imageDialog({ uploadHot: true }) }) },
        { tip: 'Файл вибрано. Натисніть «Додати до фотобанку».', target: 'add-to-bank', render: () => shell({ crumb: 'Нова сторінка', body: imagePage(), overlay: imageDialog({ mode: 'upload' }) }) },
        { tip: 'Фото з’явилося у фотобанку. Виберіть його — воно з’явиться в полях зображення.', target: 'photo', render: () => shell({ crumb: 'Нова сторінка', body: imagePage(), overlay: imageDialog({ bank: true, photoHot: true }) }) },
        { tip: 'Фото призначено основним і мобільним зображенням. Натисніть кнопку з галочкою.', target: 'ok', render: () => shell({ crumb: 'Нова сторінка', body: imagePage(), overlay: imageDialog({ bank: true, assigned: true, okHot: true }) }) },
        { final: true, render: () => shell({ crumb: 'Нова сторінка', body: imagePage({ newPhoto: true }) }) }
      ]
    },

    'snapshot-zone': {
      title: 'Як зберегти зону як снапшот і вставити її', article: 'snapshots', source: 'EXA-04 · тема 08.1',
      result: 'Копія зони з банером «Інновації» з’явилася на сторінці як «Зона 2» з усім вмістом. Цю ж збережену зону можна вставити й на інші сторінки.',
      steps: [
        { tip: 'Відкрийте налаштування зони: натисніть «шестерню» на смузі ліворуч від неї.', target: 'gear', render: () => shell({ crumb: 'Головна', body: canvas(bannerZone('Зона 1', { gearHot: true })) }) },
        { tip: 'У розділі «Налаштування» панелі натисніть «квадрат із плюсом» — він зберігає зону як снапшот.', target: 'snap', render: () => shell({ crumb: 'Головна', body: canvas(bannerZone('Зона 1', { panel: zonePanel(true) })) }) },
        { tip: 'Введіть зрозумілу назву снапшота. Натисніть поле — у демонстрації підставиться «Банер Головна сторінка».', target: 'snap-name', render: () => shell({ crumb: 'Головна', body: canvas(bannerZone('Зона 1')), overlay: dialog('Назва снапшота', field('Назва', '', 'snap-name', 'Назва'), okbar(false)) }) },
        { tip: 'Натисніть кнопку з галочкою.', target: 'ok', render: () => shell({ crumb: 'Головна', body: canvas(bannerZone('Зона 1')), overlay: dialog('Назва снапшота', field('Назва', HC.mockLang === 'en' ? 'Banner Main Page' : 'Банер Головна сторінка'), okbar(true)) }) },
        { tip: 'Щоб вставити зону, натисніть «+» ліворуч від зони («Додати зону»).', target: 'add-zone', render: () => shell({ crumb: 'Головна', body: canvas(bannerZone('Зона 1', { addZoneHot: true })) }) },
        { tip: 'У вікні «Створення зони», у «Збережені зони», виберіть «Банер Головна сторінка».', target: 'saved-zone', render: () => shell({ crumb: 'Головна', body: canvas(bannerZone('Зона 1')), overlay: zoneDialog({ savedZone: true, savedHot: true }) }) },
        { final: true, render: () => shell({ crumb: 'Головна', zones: ['Хедер', 'Зона 1', 'Зона 2', 'Футер'], body: canvas(bannerZone('Зона 1') + bannerZone('Зона 2', { cls: 'm-new' })) }) }
      ]
    },

    'visitor-check': {
      title: 'Як перевірити сторінку на смартфоні й очима відвідувача', article: 'visitor-preview', source: 'EXA-01 · теми 06 і 09',
      result: 'Сторінка відкрилася в новій вкладці без службових рамок. Перевірте текст, зображення, відступи й потрібні блоки. Пам’ятайте: це перевірка відображення, а не доказ публікації.',
      steps: [
        { tip: 'Натисніть іконку смартфона вгорі лівої панелі, щоб побачити mobile-представлення.', target: 'mobile-icon', render: () => shell({ crumb: 'Головна', body: heroCanvas() }) },
        { tip: 'Порівняйте порядок блоків, переноси тексту й відстані. Потім поверніться в desktop-режим — натисніть іконку монітора.', target: 'desktop-icon', render: () => shell({ mobile: true, crumb: 'Головна', body: heroCanvas(true) }) },
        { tip: 'Натисніть кнопку в правому нижньому куті, щоб відкрити сторінку в новій вкладці як відвідувач.', target: 'preview-btn', render: () => shell({ crumb: 'Головна', body: heroCanvas() }) },
        { final: true, render: () => previewTab() }
      ]
    }
  };

  function pageForm(s) {
    const lang = (code, name, open) => `<div class="m-langblk"><div class="m-langhead"><b>${code} (${name})</b><span class="m-ic">${I.eye}</span><span class="m-ic">${I.chev}</span></div>
      ${open ? field('Назва сторінки', HC.mockLang === 'en' ? 'New Page' : 'Нова сторінка') + field('Назва в меню', '') + field('Alias', HC.mockLang === 'en' ? 'new-page' : 'nova-storinka') + field('Redirect URL', '') +
        `<div class="m-checkrow">${s.activeHot ? hot('active-ua', '<i class="m-cb"></i>', 'm-cbbtn') : `<i class="m-cb${s.active ? ' on' : ''}">${s.active ? I.check : ''}</i>`}<span>Активний</span></div>` : ''}</div>`;
    return `<div class="m-form"><div class="m-formhead"><b>Редагування сторінки</b><span class="m-ic">${I.trash}</span></div>
      ${lang('EN', 'English', HC.mockLang === 'en')}${lang('UA', 'Українська', HC.mockLang !== 'en')}${lang('DE', 'Deutsch')}
      <div class="m-formfoot"><span class="m-pill2">Скасувати</span>${s.saveHot ? hot('save', 'Зберегти', 'm-btn-or') : '<span class="m-btn-or">Зберегти</span>'}</div></div>`;
  }
  function langDialog(s) {
    const f = s.filled;
    return dialog('Створення мови',
      field('Назва', f ? 'UA' : '', f ? '' : 'lang-name', 'UA') + field('Аліас', f ? 'ua' : '') + field('Повна назва', f ? 'Українська' : '') + field('Код мови', f ? 'uk' : '') +
      '<small class="m-hint">Вкажіть двобуквений код мови за стандартом ISO 639-1, наприклад: uk, en, de</small>' + (f ? field('Пріоритет мови', '') : ''),
      okbar(s.okHot), 'm-dlg-lang');
  }
})();

/* Англійські підписи відтвореного інтерфейсу (з EN-скриншотів) і тексти EN-демонстрацій EXA-01…03 */
HC.mockEn = {
  'Структура сайту': 'Site structure', 'Меню': 'Menu', 'Тексти інтерфейсу': 'Interface texts', 'Супер-адміністратор': 'Super-administrator',
  'Сітка': 'Grid', 'Відображати приховане': 'Show hidden', 'Хедер': 'Header', 'Зона 1': 'Zone 1', 'Зона 2': 'Zone 2', 'Футер': 'Footer',
  'Про нас': 'About us', 'Новини': 'News', 'Проєкти': 'Projects', 'Контакти': 'Contacts', 'Головна': 'Main', 'Редагувати': 'Edit',
  'Корпоративні сайти': 'Corporate Websites', 'Мапа сайту': 'Sitemap', 'Додати мову': 'Add language', 'Створення розділу': 'Create section',
  'Назва сторінки (English)': 'Title page (English)', 'Назва сторінки (Українська)': 'Title page (Українська)', 'Назва сторінки (Deutsch)': 'Title page (Deutsch)',
  'Редагування сторінки': 'Edit page', 'Мапа сайту / Редагування сторінки': 'Sitemap / Edit page', 'Назва сторінки': 'Title page', 'Назва в меню': 'Menu title',
  'Активний': 'Active', 'Скасувати': 'Cancel', 'Зберегти': 'Save', 'Створення мови': 'Create language', 'Назва': 'Name', 'Аліас': 'Slug', 'Alias': 'Slug',
  'Повна назва': 'Full name', 'Код мови': 'Language code', 'Пріоритет мови': 'Priority', 'Нова сторінка': 'New Page',
  'Вкажіть двобуквений код мови за стандартом ISO 639-1, наприклад: uk, en, de': 'Enter the two-letter language code according to ISO 639-1, for example: uk, en, de',
  'Відкрити сторінку в новій вкладці як відвідувач': 'Open the page in a new tab as a visitor', 'Головна — Frontmen': 'Main — Frontmen'
};
HC.demoText = { en: {
  'open-page': { title: 'How to find and open a page', source: 'EXA-02 · topic 02', result: 'The platform opened the “Corporate Websites” page. The path at the top shows where you are.',
    tips: ['Click “Site structure” in the top panel.', 'There is an arrow next to “Projects” — the page has nested pages. Click the arrow to expand them.', 'Click the “Corporate Websites” page name — the platform opens it in the workspace.'] },
  'create-page': { title: 'How to create a new page', source: 'EXA-02 · topic 05', result: 'The new page “Web Design” appeared in the “Sitemap” in all language columns, nested in “Projects”. It is empty and inactive for now, so it is shown in light text.',
    tips: ['In the “Site structure” menu, click “Edit” to open the “Sitemap”.', 'Hover over the page inside which the new one should appear — here “Projects”. On a touch screen, just tap the row.', 'Action buttons appeared on the left. Click “+” — the new page will be nested in “Projects”.', 'In the “Create section” window, enter the name for each language. Click the first field — in the demo the names are filled in automatically.', 'Confirm with the check-mark button.'] },
  'activate-page': { title: 'How to set up and enable a page', source: 'EXA-03 · topics 01, 02, 04', result: 'In the demo, the English version of the page is marked “Active” and the settings are saved. Next, open the page via “Site structure” and check it in visitor view. Tip from the guide: activate the page when it is completely ready.',
    tips: ['In the “Sitemap”, hover over the page (or tap the row) — action buttons appear on the left.', 'Click the “pencil”. The “Edit page” form opens.', 'The form has a block for each language. In the English block, tick “Active” — it makes this language version available on the site.', 'Click “Save”. To leave without changes, use “Cancel”.'] },
  'add-language': { title: 'How to add a site language', source: 'EXA-02 · topic 04', result: 'The fields are filled in; the check-mark button saves the language. Remember: adding or deleting a language affects the whole site, so this is usually done by the project administrator.',
    tips: ['In the “Sitemap”, click “Add language” in the top right corner.', 'Fill in the “Create language” fields. Click the “Name” field — in the demo the example from the guide is filled in automatically.', 'The “Priority” field is visible when you scroll the window down: the first language by priority becomes the main site language. Click the check-mark button to save the language.'] },
  'visitor-check': { title: 'How to check a page on a smartphone and as a visitor', source: 'EXA-01 · topics 06 and 09', result: 'The page opened in a new tab without working outlines. Check the text, images, spacing and the expected blocks. Remember: this is a display check, not proof of publication.',
    tips: ['Click the phone icon at the top of the left sidebar to see the mobile view.', 'Compare block order, text wrapping and spacing. Then return to the desktop view — click the monitor icon.', 'Click the button in the bottom-right corner to open the page in a new tab as a visitor.'] }
} };

/* EXA-04: англійські підписи (з EN v1.0 та EN-скриншотів; 12.11.2026) і тексти EN-демонстрацій конструктора */
Object.assign(HC.mockEn, {
  'Хлібні крихти': 'Breadcrumbs', 'Головна → Нова сторінка': 'Main → New Page', 'Створити зону': 'Create zone', 'Створення зони': 'Create zone',
  'Кількість колонок': 'Number of columns', 'Одна': 'One', 'Дві': 'Two', 'Три': 'Three', 'Збережені зони': 'Saved zones', 'Ще немає збережених зон': 'No saved zones yet',
  'Тема': 'Theme', 'Прозорий': 'Transparent', 'Прозорий на весь екран': 'Transparent full screen', 'Додати блок': 'Add block', 'Модулі:': 'Modules:',
  'Мікро блоки': 'Micro blocks', '10 блоків': '10 blocks', 'Базові блоки': 'Base blocks', 'Анонсні блоки': 'Announcement blocks', '2 блоки': '2 blocks',
  'Блоки пошуку': 'Search blocks', '1 блок': '1 block', 'Снапшоти': 'Snapshots', '0 блоків': '0 blocks', 'Заголовок блоку': 'Block Title',
  'Продукція': 'Products', 'Детальніше': 'More details', 'Зображення': 'Images', 'Основне зображення': 'Main image', 'Мобільне зображення': 'Mobile image',
  'Завантажити фото': 'Upload new', 'Фотобанк': 'Photo Bank', 'Фото не знайдено': 'No photos found', 'Завантаження фото': 'Upload photos',
  'Завантажити ще (1/10)': 'Upload more (1/10)', 'Очистити все': 'Clear all', 'Додати до фотобанку (1)': 'Add to the photo bank (1)',
  'Інновації': 'Innovations', 'Веб-дизайн': 'Web Design', 'Налаштування': 'Settings', 'Відступи': 'Spacing', 'Авто': 'Auto', 'Вручну': 'Manual',
  'Ліва межа': 'Left border', 'Права межа': 'Right border', 'Назва снапшота': 'Snapshot name', 'Банер Головна сторінка': 'Banner Main Page', 'Нова сторінка': 'New Page'
});
Object.assign(HC.demoText.en, {
  'create-zone': { title: 'How to create a zone and add a title', source: 'EXA-04 · topics 02 and 04',
    result: '“Zone 1” with a Title micro block appeared on the page. Below it is the quick add bar: ttl, txt, gap, quo, img. Now replace the sample text with your own.',
    tips: ['The new page is empty. Click “Create zone”.', 'Choose the number of columns. For an ordinary section with text and a photo — “One”.', 'The “Theme” item appeared. Choose “Transparent” — the content will stay within the outer margins of the page.', 'Click the check mark button.', '“Zone 1” appeared on the page. Click “Add block”.', 'The “Modules” window opened. In the “Micro blocks” category, select Title.', 'Click the check mark button.'] },
  'replace-image': { title: 'How to replace an image', source: 'EXA-04 · topic 05.3',
    result: 'The new photo is set as the block’s main and mobile image. Check the page in Desktop and Mobile modes, and then as a visitor.',
    tips: ['Click the image in the block — the “Images” window opens.', 'The “Images” window with the Photo Bank opened. The photo you need is not there yet — click “Upload new”.', 'The file is selected. Click “Add to the photo bank”.', 'The photo appeared in the Photo Bank. Select it — it appears in the image fields.', 'The photo is set as the main and mobile image. Click the check mark button.'] },
  'snapshot-zone': { title: 'How to save a zone as a snapshot and insert it', source: 'EXA-04 · topic 08.1',
    result: 'A copy of the zone with the “Innovations” banner appeared on the page as “Zone 2” with all its content. You can insert the same saved zone on other pages too.',
    tips: ['Open the zone settings: click the “gear” on the strip to the left of it.', 'In the “Settings” part of the panel, click the “square with a plus” — it saves the zone as a snapshot.', 'Enter a clear snapshot name. Click the field — in the demo “Banner Main Page” is filled in.', 'Click the check mark button.', 'To insert the zone, click “+” to the left of the zone (“Add zone”).', 'In the “Create zone” window, under “Saved zones”, select “Banner Main Page”.'] }
});
