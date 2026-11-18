/* Exasite Help Center — логіка прототипу (мова, маршрутизація, пошук, глосарій, прогрес, модальні вікна, демонстрації).
   Контент лежить у data/*.js, тексти інтерфейсу — в i18n.js. */
(function () {
  'use strict';
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const I = HC.icons;
  const svg = (vb, d) => `<svg viewBox="${vb}" aria-hidden="true">${d}</svg>`;
  const st = 'stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const SV = {
    search: I.search, x: I.x, check: I.check, chevR: I.chevR, chev: I.chev,
    menu: svg('0 0 20 20', `<path d="M3 6h14M3 10h14M3 14h14" ${st}/>`),
    zoom: svg('0 0 16 16', '<circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10.5 10.5L14 14M5 7h4M7 5v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
    play: svg('0 0 16 16', '<path d="M5 3.5v9l7.5-4.5z" fill="currentColor"/>'),
    pause: svg('0 0 16 16', '<path d="M5 3.5v9M11 3.5v9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'),
    target: svg('0 0 24 24', `<circle cx="12" cy="12" r="9" ${st}/><path d="M8 12.5l2.8 2.8L16.5 9" ${st}/>`),
    alert: svg('0 0 20 20', '<path d="M10 2.5l8 14H2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M10 8v4M10 14.3v.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
    info: svg('0 0 20 20', '<circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 9v5M10 6.2v.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
    bulb: svg('0 0 20 20', '<path d="M7 14h6M8 17h4M10 3a5 5 0 00-3 9v2h6v-2a5 5 0 00-3-9z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>'),
    arrow: svg('0 0 20 20', `<path d="M4 10h11M11 6l4 4-4 4" ${st}/>`),
    left: svg('0 0 20 20', `<path d="M16 10H5M9 6l-4 4 4 4" ${st}/>`),
    restart: svg('0 0 20 20', `<path d="M4 10a6 6 0 101.8-4.3M4 3.5v3h3" ${st}/>`),
    file: svg('0 0 20 20', '<path d="M5 2.5h7l3 3v12H5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M8 9h4M8 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
    compass: svg('0 0 24 24', '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor"/>'),
    tree: svg('0 0 24 24', `<rect x="9" y="3" width="6" height="5" rx="1.2" ${st}/><rect x="3" y="16" width="6" height="5" rx="1.2" ${st}/><rect x="15" y="16" width="6" height="5" rx="1.2" ${st}/><path d="M12 8v4M6 16v-4h12v4" ${st}/>`),
    sliders: svg('0 0 24 24', `<path d="M4 7h10M18 7h2M4 17h4M12 17h8" ${st}/><circle cx="16" cy="7" r="2" ${st}/><circle cx="10" cy="17" r="2" ${st}/>`),
    blocks: svg('0 0 24 24', `<rect x="3.5" y="3.5" width="17" height="5" rx="1.2" ${st}/><rect x="3.5" y="11" width="8" height="9.5" rx="1.2" ${st}/><rect x="14" y="11" width="6.5" height="9.5" rx="1.2" ${st}/>`),
    book: svg('0 0 24 24', `<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5zM4 20.5A2.5 2.5 0 006.5 23H20M8 7.5h8M8 11h6" ${st}/>`),
    shapes: svg('0 0 24 24', `<circle cx="7" cy="7" r="3.5" ${st}/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" ${st}/><path d="M7 13.5l3.8 6.5H3.2zM17 13.5v7M13.5 17h7" ${st}/>`),
    mail: svg('0 0 20 20', `<rect x="2.5" y="4.5" width="15" height="11" rx="2" ${st}/><path d="M3 5.5l7 5.5 7-5.5" ${st}/>`),
    copy: svg('0 0 20 20', `<rect x="7" y="7" width="10" height="10" rx="2" ${st}/><path d="M13 4.5V4a1.5 1.5 0 00-1.5-1.5h-7A1.5 1.5 0 003 4v7a1.5 1.5 0 001.5 1.5H5" ${st}/>`),
    list: svg('0 0 20 20', `<path d="M7 5h10M7 10h10M7 15h10M3.5 5h.01M3.5 10h.01M3.5 15h.01" ${st}/>`)
  };
  /* Іконки плиток завдань на головній */
  const TILE = {
    find: svg('0 0 24 24', `<circle cx="10.5" cy="10.5" r="6" ${st}/><path d="M15 15l5 5" ${st}/>`),
    text: svg('0 0 24 24', `<path d="M5 6V4.5h14V6M12 4.5v15M9 19.5h6" ${st}/>`),
    image: svg('0 0 24 24', `<rect x="3" y="4.5" width="18" height="15" rx="2" ${st}/><circle cx="9" cy="10" r="1.8" ${st}/><path d="M21 16l-5-5-8.5 8.5" ${st}/>`),
    newpage: svg('0 0 24 24', `<path d="M13.5 3H6.5A1.5 1.5 0 005 4.5v15A1.5 1.5 0 006.5 21h11a1.5 1.5 0 001.5-1.5V8.5zM13.5 3v5.5H19M12 11.5v6M9 14.5h6" ${st}/>`),
    eye: svg('0 0 24 24', `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" ${st}/><circle cx="12" cy="12" r="3" ${st}/>`),
    blocks: svg('0 0 24 24', `<rect x="3.5" y="3.5" width="7" height="7" rx="1.5" ${st}/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" ${st}/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" ${st}/><path d="M17 14v6M14 17h6" ${st}/>`),
    phone: svg('0 0 24 24', `<rect x="6.5" y="2.5" width="11" height="19" rx="2.5" ${st}/><path d="M11 18.5h2" ${st}/>`),
    link: svg('0 0 24 24', `<path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1 1M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1-1" ${st}/>`)
  };
  /* Умовні позначення кнопок платформи для словника іконок */
  const GLYPH = Object.assign({}, I, {
    toggle: svg('0 0 24 14', '<rect x="1" y="1" width="22" height="12" rx="6" stroke="currentColor" stroke-width="1.4" fill="none"/><circle cx="17" cy="7" r="4" fill="currentColor"/>'),
    updown: svg('0 0 16 16', '<path d="M5 13V3M2.5 5.5L5 3l2.5 2.5M11 3v10M8.5 10.5L11 13l2.5-2.5" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'),
    clip: svg('0 0 16 16', '<path d="M10.5 5.5l-4.3 4.3a1.2 1.2 0 001.7 1.7l4.6-4.6a2.4 2.4 0 00-3.4-3.4L4.5 8.1a3.6 3.6 0 005.1 5.1l3.4-3.4" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round"/>')
  });

  /* ---------- мова інтерфейсу ---------- */
  const LKEY = 'exasite-hc:lang';
  let LANG = 'uk';
  try { const l = localStorage.getItem(LKEY); if (l === 'en' || l === 'uk') LANG = l; } catch (e) { }
  const T = (k, v) => { let s = (HC_T[LANG][k] !== undefined ? HC_T[LANG][k] : HC_T.uk[k]); if (v) Object.keys(v).forEach(n => { s = s.split('{' + n + '}').join(v[n]); }); return s; };
  const EN_IMG = new Set();
  (HC.en.articles || []).forEach(a => { const walk = (b) => { if (b.img) EN_IMG.add(b.img); (b.items || []).forEach(it => it && it.img && EN_IMG.add(it.img)); (b.blocks || []).forEach(walk); }; a.blocks.forEach(walk); });

  /* ---------- дані для кожної мови ---------- */
  function build(lang) {
    const cats = lang === 'en' ? HC.en.categories : HC.categories;
    const enBy = {}; if (lang === 'en') HC.en.articles.forEach(a => { enBy[a.slug] = a; });
    const order = [];
    cats.forEach(c => HC.articles.filter(a => a.cat === c.id).forEach(ua => {
      const src = lang === 'en' && enBy[ua.slug] ? enBy[ua.slug] : ua;
      const a = Object.assign({}, src);
      if (lang === 'en' && !enBy[ua.slug]) a.uaOnly = true;
      ['demo', 'level', 'related'].forEach(k => { if (a[k] === undefined && ua[k] !== undefined) a[k] = ua[k]; });
      order.push(a);
    }));
    const BY = {}; order.forEach((a, i) => { a.idx = i; BY[a.slug] = a; });
    const CAT = {}; cats.forEach(c => { CAT[c.id] = c; });
    const CODE2CAT = {}; cats.forEach(c => { CODE2CAT[c.code] = c; });
    return { lang, cats, order, BY, CAT, CODE2CAT, idx: null };
  }
  const DATA = { uk: build('uk'), en: build('en') };
  let S = DATA[LANG];
  const artLang = (a) => (a && a.uaOnly ? 'uk' : LANG);

  /* ---------- глосарій (компіляція шаблонів пошуку термінів) ---------- */
  const W = '\\p{L}\\p{N}_';
  function compile(src, lang) {
    let s = src.replace(/\[\\w/g, '[' + W).replace(/\\w/g, '[' + W + ']');
    try { return new RegExp(`(?<![${W}])(?:${s})(?![${W}])`, 'iu'); } catch (e) { return null; }
  }
  const GL = {};
  ['uk', 'en'].forEach(l => {
    GL[l] = HC.glossary.filter(g => g[l]).map(g => ({ id: g.id, more: g.more, term: g[l].term, def: g[l].def, src: g[l].match, re: compile(g[l].match, l) }))
      .sort((a, b) => b.src.length - a.src.length);
  });
  const glossaryById = (l, id) => GL[l].find(g => g.id === id);
  const moreHref = (m) => { const [s, sec] = m.split('#'); return '#' + s + (sec ? '--' + sec : ''); };

  /* ---------- прогрес (localStorage) ---------- */
  const KEY = 'exasite-hc:v1';
  let P = { read: {}, checks: {}, demos: {} };
  try { const raw = localStorage.getItem(KEY); if (raw) P = Object.assign(P, JSON.parse(raw)); } catch (e) { /* сховище недоступне — працюємо без нього */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { } };
  const isRead = (s) => !!P.read[s];

  /* ---------- форматування контенту ---------- */
  function linkify(text) {
    return text.split(/(<[^>]+>)/).map(part => {
      if (part.startsWith('<')) return part;
      return part.replace(/\bEXA-(0[1-9]|1[0-2]|X)(?![\w-])/g, (m) => {
        const c = S.CODE2CAT[m];
        if (c) return `<a class="chip-link" href="#cat-${c.id}">${m}</a>`;
        const t = HC.meta.planned[m];
        return `<span class="chip-planned" title="${esc(T('planned', { t: t || '' }))}">${m}</span>`;
      });
    }).join('');
  }
  const TOKENS = { clip: GLYPH.clip, arrows: I.up };
  function rich(html) {
    let s = String(html);
    s = s.replace(/\[\[([a-z0-9-]+)(?:#([a-z0-9-]+))?\|([^\]]+)\]\]/g, (m, slug, sec, txt) => {
      if (!S.BY[slug]) return txt;
      return `<a href="#${slug}${sec ? '--' + sec : ''}">${txt}</a>`;
    });
    s = s.replace(/:(eye|pencil|trash|plus|link|drag|gear|snap|clip|arrows|half|monitor|phone):\s*/g, (m, k) => `<span class="ticon">${TOKENS[k] || I[k]}</span>`);
    return linkify(s);
  }
  const plain = (html) => String(html).replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, '$1').replace(/:[a-z]+:\s*/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();

  /* ---------- пошук: словоформи, одруківки, розкладка ---------- */
  const norm = (s) => String(s).toLowerCase().replace(/[’'ʼ`]/g, '').replace(/ё/g, 'е');
  const UA_END = ['ування', 'ювання', 'ення', 'ання', 'ями', 'ами', 'ові', 'еві', 'ого', 'ому', 'ими', 'іми', 'ити', 'ати', 'іти', 'яти', 'ують', 'юють', 'ете', 'іть', 'ить', 'ять', 'ать', 'ий', 'ій', 'ої', 'ою', 'ею', 'ах', 'ях', 'ам', 'ям', 'ом', 'ем', 'ів', 'їв', 'ти', 'ть', 'ся', 'сь', 'ок', 'а', 'я', 'у', 'ю', 'і', 'ї', 'и', 'о', 'е', 'є', 'ь', 'й'];
  function stem(w) {
    if (w.length <= 3) return w;
    if (/[a-z]/.test(w)) {
      let s = w.replace(/(ing|ed|es|s)$/, '');
      return s.length >= 3 ? s : w;
    }
    let s = w;
    for (const e of UA_END) {
      if (s.endsWith(e) && s.length - e.length >= (e === 'ок' ? 4 : 3)) { s = s.slice(0, -e.length); break; }
    }
    if (s.endsWith('ся') && s.length > 5) s = s.slice(0, -2);
    while (s.length > 3 && /[аеєиіїоуюяьй]$/.test(s)) s = s.slice(0, -1);
    return s;
  }
  const words = (q) => norm(q).split(/[^\p{L}\p{N}]+/u).filter(t => t.length >= 2);
  function buildIndex() {
    const vocab = new Map();
    const add = (txt) => words(txt).forEach(w => { if (w.length >= 3) vocab.set(w, (vocab.get(w) || 0) + 1); });
    const docs = S.order.map(a => {
      const head = [], body = [];
      const walk = (b) => {
        if (b.t === 'h2' || b.t === 'h3') head.push(b.text);
        ['html', 'title', 'summary'].forEach(k => b[k] && body.push(plain(b[k])));
        if (b.items) b.items.forEach(it => typeof it === 'string' ? body.push(plain(it)) : ['html', 'title', 'q', 'a', 'term', 'cap'].forEach(k => it[k] && body.push(plain(it[k]))));
        if (b.rows) b.rows.forEach(r => body.push(plain(r.join(' · '))));
        if (b.cap) body.push(b.cap);
        if (b.blocks) b.blocks.forEach(walk);
      };
      a.blocks.forEach(walk);
      const bodyText = body.join(' · ');
      add(a.title); add(head.join(' ')); add(bodyText);
      return { a, title: norm(a.title), lead: norm(a.lead + ' ' + a.outcome), head: norm(head.join(' ')), body: norm(bodyText), raw: bodyText };
    });
    GL[LANG].forEach(g => add(g.term));
    return { docs, vocab: Array.from(vocab.entries()) };
  }
  const index = () => (S.idx || (S.idx = buildIndex()));
  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i]; let best = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], prev[j - 2 < 0 ? 0 : j - 2] + 1);
        if (cur[j] < best) best = cur[j];
      }
      if (best > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }
  const QW = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.', YC = 'йцукенгшщзхїфівапролджєячсмитьбю';
  const swapLayout = (w) => w.split('').map(ch => { const i = QW.indexOf(ch); return i >= 0 ? YC[i] : ch; }).join('');
  function matchDocs(terms) {
    const res = [];
    index().docs.forEach(d => {
      let score = 0;
      for (const t of terms) {
        const s = stem(t), has = (f) => f.includes(t) || f.includes(s);
        const inT = has(d.title), inL = has(d.lead), inH = has(d.head), inB = has(d.body);
        if (!(inT || inL || inH || inB)) return;
        score += (inT ? 10 : 0) + (inH ? 5 : 0) + (inL ? 4 : 0) + (inB ? 1 + Math.min(4, d.body.split(s).length - 1) * .5 : 0) + (d.title.includes(t) ? 3 : 0);
      }
      res.push({ a: d.a, score, snip: snippet(d, terms) });
    });
    return res.sort((x, y) => y.score - x.score);
  }
  const anyDoc = (t) => { const s = stem(t); return index().docs.some(d => d.title.includes(s) || d.head.includes(s) || d.lead.includes(s) || d.body.includes(s)); };
  function correct(t) {
    if (anyDoc(t)) return t;
    if (LANG === 'uk' && /^[a-z;'\[\],.]+$/.test(t)) { const sw = swapLayout(t); if (anyDoc(sw)) return sw; }
    if (t.length < 4) return null;
    const max = t.length <= 5 ? 1 : t.length <= 9 ? 2 : 3;
    let best = null, bd = max + 1, bf = 0;
    for (const [w, f] of index().vocab) {
      const d = lev(t, w.length > t.length + 3 ? w.slice(0, t.length + 1) : w, max);
      if (d < bd || (d === bd && f > bf)) { best = w; bd = d; bf = f; }
    }
    return bd <= max ? best : null;
  }
  /* Повертає { results, terms, corrected } */
  function search(q) {
    const terms = words(q);
    if (!terms.length) return { results: [], terms };
    let results = matchDocs(terms);
    if (results.length) return { results, terms };
    const fixed = terms.map(correct);
    if (fixed.every(Boolean) && fixed.join(' ') !== terms.join(' ')) {
      results = matchDocs(fixed);
      if (results.length) return { results, terms: fixed, corrected: fixed.join(' ') };
    }
    const suggest = terms.map(t => correct(t)).filter(Boolean).filter(t => !terms.includes(t));
    return { results: [], terms, suggest };
  }
  function glossaryHits(terms) {
    if (!terms.length) return [];
    return GL[LANG].filter(g => { const n = norm(g.term); return terms.every(t => n.includes(stem(t)) || n.includes(t)); }).slice(0, 4);
  }
  function snippet(d, terms) {
    const low = norm(d.raw); let pos = -1;
    for (const t of terms) { for (const x of [t, stem(t)]) { const p = low.indexOf(x); if (p >= 0 && (pos < 0 || p < pos)) pos = p; } }
    let text = pos < 0 ? d.a.lead : d.raw.slice(Math.max(0, pos - 70), pos + 150);
    if (pos > 70) text = '…' + text.replace(/^\S*\s/, '');
    if (pos >= 0 && pos + 150 < d.raw.length) text = text.replace(/\s\S*$/, '') + '…';
    return hl(plain(text), terms);
  }
  function hl(text, terms) {
    let out = esc(text);
    const stems = Array.from(new Set(terms.map(stem))).sort((a, b) => b.length - a.length);
    stems.forEach(t => {
      const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split('').join('[’\'ʼ`]?') + '[\\p{L}’ʼ]*)', 'giu');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }
  let lastQuery = '';
  const correctedNote = (q, r) => r.corrected ? `<p class="sr-fix">${T('corrected', { q: esc(q), c: `<b>${esc(r.corrected)}</b>` })}</p>` : '';
  const suggestHtml = (r) => r.suggest && r.suggest.length ? `<p class="sr-fix">${T('didYouMean')} ${r.suggest.map(s => `<button type="button" class="linkish" data-suggest="${esc(s)}">${esc(s)}</button>`).join(', ')}</p>` : '';

  function searchUI(opts) {
    opts = opts || {};
    const id = 'q-' + (opts.id || Math.random().toString(36).slice(2, 7));
    const wrap = document.createElement('div');
    wrap.className = 'search' + (opts.big ? ' big' : '');
    wrap.setAttribute('role', 'search');
    wrap.innerHTML = `<label class="sr-only" for="${id}">${T('searchLabel')}</label>
      <div class="search-box">${SV.search}<input id="${id}" type="search" autocomplete="off" spellcheck="false" placeholder="${esc(opts.placeholder || T('searchPh'))}" aria-controls="${id}-pop" aria-expanded="false" enterkeyhint="search">
      <button type="button" class="search-clear" aria-label="${T('clearSearch')}" hidden>${SV.x}</button>${opts.kbd ? '<span class="search-kbd" aria-hidden="true">/</span>' : ''}</div>
      <div class="search-pop" id="${id}-pop" role="listbox" aria-label="${T('searchResults')}" hidden></div>`;
    const input = $('input', wrap), clear = $('.search-clear', wrap), pop = $('.search-pop', wrap), kbd = $('.search-kbd', wrap);
    input.value = opts.value || '';
    let active = -1;
    const sync = () => { clear.hidden = !input.value; if (kbd) kbd.hidden = !!input.value; };
    const close = () => { pop.hidden = true; input.setAttribute('aria-expanded', 'false'); active = -1; };
    const renderPop = () => {
      const q = input.value.trim();
      if (opts.onInput) return opts.onInput(q);
      if (q.length < 2) return close();
      const r = search(q);
      pop.innerHTML = r.results.length ? correctedNote(q, r) + r.results.slice(0, 6).map((x, i) => `<a href="#${x.a.slug}" role="option" id="${id}-o${i}"><div class="sr-meta">${esc(S.CAT[x.a.cat].title)}</div><div class="sr-title">${hl(x.a.title, r.terms)}</div><div class="sr-snip">${x.snip}</div></a>`).join('') + `<a class="all" href="#search" role="option" id="${id}-all" data-q="${esc(r.corrected || q)}">${T('allResults')} (${r.results.length}) →</a>`
        : `<div class="search-empty"><b>${T('nothing', { q: esc(q) })}</b> ${suggestHtml(r) || T('nothingHint')} <a href="#search" data-q="${esc(q)}">${T('support')} →</a></div>`;
      pop.hidden = false; input.setAttribute('aria-expanded', 'true'); active = -1;
      $$('a', pop).forEach(a => a.addEventListener('click', () => { if (a.dataset.q) lastQuery = a.dataset.q; close(); }));
      $$('[data-suggest]', pop).forEach(b => b.addEventListener('click', () => { input.value = b.dataset.suggest; sync(); renderPop(); input.focus(); }));
    };
    input.addEventListener('input', () => { sync(); renderPop(); });
    input.addEventListener('focus', () => { if (input.value.trim().length >= 2 && !opts.onInput) renderPop(); });
    input.addEventListener('keydown', (e) => {
      const opts2 = $$('a[role="option"]', pop);
      if (e.key === 'Escape') { if (!pop.hidden) { close(); e.stopPropagation(); } else if (input.value) { input.value = ''; sync(); renderPop(); e.stopPropagation(); } }
      else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !pop.hidden && opts2.length) {
        e.preventDefault(); active = (active + (e.key === 'ArrowDown' ? 1 : -1) + opts2.length) % opts2.length;
        opts2.forEach((o, i) => o.classList.toggle('active', i === active)); input.setAttribute('aria-activedescendant', opts2[active].id || '');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (active >= 0 && opts2[active]) { const o = opts2[active], href = o.getAttribute('href'); o.click(); location.hash = href; return; }
        const q = input.value.trim(); if (!q) return;
        lastQuery = q; close();
        if (opts.onSubmit) opts.onSubmit(q); else go('search');
      }
    });
    clear.addEventListener('click', () => { input.value = ''; sync(); renderPop(); input.focus(); });
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close(); });
    sync();
    return wrap;
  }
  const go = (h) => { if (location.hash.slice(1) === h) route(); else location.hash = h; };

  /* ---------- контакт підтримки ---------- */
  function supportCard(compact) {
    const s = HC.support; if (!s) return '';
    return `<aside class="support${compact ? ' compact' : ''}" aria-labelledby="sup-h-${compact ? 'c' : 'f'}">
      <div class="sup-ic">${SV.mail}</div>
      <div class="sup-body"><h2 id="sup-h-${compact ? 'c' : 'f'}">${T('support')}</h2><p>${T('supportText')}</p>
        <p class="sup-who"><b>${esc(s.name)}</b> · ${esc(s.role[LANG] || s.role.uk)}${s.test ? ` <span class="badge draft">${T('testData')}</span>` : ''}</p></div>
      <div class="sup-acts"><a class="btn primary" href="mailto:${esc(s.email)}">${SV.mail}<span>${esc(s.email)}</span></a><button type="button" class="btn" data-copy="${esc(s.email)}">${SV.copy}${T('copyEmail')}</button></div></aside>`;
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    const txt = b.dataset.copy;
    const done = (ok) => announce(ok ? T('copied') : T('copyFail'));
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(() => done(true), () => done(fallbackCopy(txt)));
      else done(fallbackCopy(txt));
    } catch (err) { done(fallbackCopy(txt)); }
  });
  function fallbackCopy(txt) {
    try { const t = document.createElement('textarea'); t.value = txt; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); const ok = document.execCommand('copy'); t.remove(); return ok; } catch (e) { return false; }
  }

  /* ---------- оболонка ---------- */
  const app = $('#app');
  function header() {
    const h = $('#hdr');
    h.innerHTML = `<div class="wrap"><a class="brand" href="#home" aria-label="Exasite — ${T('helpCenter')}, ${T('home')}"><img src="img/logo.png" alt="Exasite" width="43" height="30"><span>${T('helpCenter')}</span></a>
      <nav class="hdr-nav" aria-label="${T('mainNav')}"><a href="#start" data-nav="start">${T('quickstart')}</a><a href="#cat-start" data-nav="cats">${T('instructions')}</a><a href="#demos" data-nav="demos">${T('demos')}</a></nav>
      <div class="hdr-search"></div>
      ${langSwitch()}
      <button type="button" class="menu-btn" aria-haspopup="dialog" aria-label="${T('openMenu')}">${SV.menu}<span>${T('menu')}</span></button></div>`;
    $('.hdr-search', h).appendChild(searchUI({ id: 'hdr', kbd: true }));
    $('.menu-btn', h).addEventListener('click', (e) => openDrawer(e.currentTarget));
    $('#skip').textContent = T('skip');
    $('#ftr').innerHTML = `<div class="wrap ftr-in"><span>Exasite · ${T('helpCenter').toLowerCase()} (${LANG === 'en' ? 'prototype' : 'прототип'}). ${LANG === 'en' ? 'Content: EXA-01 EN v1.9, EXA-02 EN v1.1, EXA-03 EN v1.1, EXA-04 EN v1.0 (under review).' : 'Контент: EXA-01 v1.9, EXA-02 v1.1, EXA-03 v1.1, EXA-04 v1.0.'}</span>
      <span><a href="#glossary">${T('glossary')}</a> · <a href="#icons">${T('icons')}</a> · <a href="#map">${T('map')}</a> · <a href="#start">${T('resetProgress')}</a></span></div>`;
  }
  const langSwitch = () => `<div class="lang-sw" role="group" aria-label="${T('lang')}"><button type="button" data-lang="uk" lang="uk" aria-pressed="${LANG === 'uk'}" aria-label="Українська">UA</button><button type="button" data-lang="en" lang="en" aria-pressed="${LANG === 'en'}" aria-label="English">EN</button></div>`;
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lang]'); if (!b || b.dataset.lang === LANG) return;
    setLang(b.dataset.lang, b.closest('.drawer') ? null : `#hdr [data-lang="${b.dataset.lang}"]`);
  });
  function setLang(l, focusSel) {
    LANG = l; S = DATA[l]; try { localStorage.setItem(LKEY, l); } catch (e) { }
    document.documentElement.lang = l === 'en' ? 'en' : 'uk';
    closeTerm(); closeAllModals(true); $$('.drawer, .drawer-bg').forEach(n => n.remove()); $$('[inert]').forEach(n => n.removeAttribute('inert')); document.body.style.overflow = '';
    header(); const y = scrollY; route(true); scrollTo(0, y);
    const f = focusSel && $(focusSel); if (f) f.focus();
    announce(l === 'en' ? 'English' : 'Українська');
  }

  let navOpen = new Set();
  function sidebar(cur) {
    const curA = S.BY[cur];
    const curCat = curA ? curA.cat : (cur.startsWith('cat-') ? cur.slice(4) : null);
    const top = (h, k) => `<li><a href="#${h}"${cur === h ? ' aria-current="page"' : ''}>${T(k)}</a></li>`;
    return `<nav class="side" aria-label="${T('sections')}">
      <ul class="nav-top">${top('home', 'home')}${top('start', 'quickstart')}${top('demos', 'demos')}</ul>
      ${S.cats.map(c => {
        const arts = S.order.filter(a => a.cat === c.id), r = arts.filter(a => isRead(a.slug)).length;
        const open = navOpen.has(c.id) || c.id === curCat;
        return `<div class="nav-grp${open ? ' open' : ''}" data-grp="${c.id}"><div class="nav-gh"><a href="#cat-${c.id}"${cur === 'cat-' + c.id ? ' aria-current="page"' : ''}><small>${c.code}${c.uaOnly ? ' · ' + T('uaOnlyBadge') : ''}</small><span>${esc(c.title)}</span><span class="nav-cnt">${T('readOf', { a: r, b: arts.length })}</span></a>
          <button type="button" class="nav-tg" data-navtg="${c.id}" aria-expanded="${open}" aria-label="${esc(T(open ? 'collapse' : 'expand', { t: c.title }))}">${SV.chev}</button></div>
        <ul${open ? '' : ' hidden'}>
        ${arts.map(a => `<li><a href="#${a.slug}"${curA && curA.slug === a.slug ? ' aria-current="page"' : ''}${a.uaOnly ? ' lang="uk"' : ''}><span>${esc(a.title)}</span>${isRead(a.slug) ? `<span class="tick" role="img" aria-label="${T('read')}">${SV.check}</span>` : ''}</a></li>`).join('')}
      </ul></div>`; }).join('')}
      <ul class="nav-top nav-refs">${top('glossary', 'glossary')}${top('icons', 'icons')}${top('map', 'map')}</ul></nav>`;
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-navtg]'); if (!b) return;
    const id = b.dataset.navtg, grp = b.closest('.nav-grp'), open = !grp.classList.contains('open');
    open ? navOpen.add(id) : navOpen.delete(id);
    grp.classList.toggle('open', open); $('ul', grp).hidden = !open; b.setAttribute('aria-expanded', open);
    b.setAttribute('aria-label', T(open ? 'collapse' : 'expand', { t: S.CAT[id].title }));
  });
  const lvlLabel = (n) => T('lvl' + n);
  function badges(a) {
    return `<span class="badge lvl${a.level}">${lvlLabel(a.level).split(' · ')[0]}</span>${S.CAT[a.cat].draft ? `<span class="badge draft">${T('draft')}</span>` : ''}${a.uaOnly ? `<span class="badge">${T('uaOnlyBadge')}</span>` : ''}${a.demo ? `<span class="badge">${SV.play}${T('demo')}</span>` : ''}${isRead(a.slug) ? `<span class="badge read">${SV.check}${T('read')}</span>` : ''}`;
  }
  function crumbs(list) {
    return `<nav class="crumbs" aria-label="${LANG === 'en' ? 'Breadcrumbs' : 'Хлібні крихти'}">${list.map((c, i) => (i ? '<span aria-hidden="true">/</span>' : '') + (c[1] ? `<a href="#${c[1]}">${esc(c[0])}</a>` : `<span aria-current="page">${esc(c[0])}</span>`)).join('')}</nav>`;
  }
  const qsLessons = () => HC.quickstart.lessons.map(l => Object.assign({}, l, { note: LANG === 'en' ? (HC.en.quickstart.notes[l.slug] || l.note) : l.note }));
  const qsLead = () => (LANG === 'en' ? HC.en.quickstart.lead : HC.quickstart.lead);
  const popular = () => (LANG === 'en' ? HC.en.popular : HC.popular);
  const popHref = (p) => `#${p.slug}${p.section ? '--' + p.section : ''}`;
  const tiles = (list) => `<div class="tiles">${list.map(p => `<a class="tile" href="${popHref(p)}"><span class="tile-ic">${TILE[p.icon] || TILE.find}</span><span class="tile-t">${esc(p.title)}</span>${S.BY[p.slug] && S.BY[p.slug].uaOnly ? `<span class="tile-b">${T('uaOnlyBadge')}</span>` : ''}${SV.chevR}</a>`).join('')}</div>`;

  /* ---------- сторінки ---------- */
  function viewHome() {
    const qs = qsLessons(), done = qs.filter(l => isRead(l.slug)).length;
    const demos = Object.keys(HC.demos);
    app.innerHTML = `<div class="wrap">
      <section class="hero"><span class="eyebrow">${T('heroEyebrow')}</span>
        <h1 tabindex="-1">${T('heroTitle')}</h1>
        <p>${T('heroLead')}</p>
        <div id="home-search"></div>
        <div class="hero-hints"><span>${T('oftenSearch')}</span>${T('hints').map(t => `<button type="button" data-hint="${esc(t)}">${esc(t)}</button>`).join('')}</div>
      </section>
      <section class="sec" aria-labelledby="h-tasks"><div class="sec-head"><h2 id="h-tasks">${T('whatToDo')}</h2></div>${tiles(popular())}</section>
      <section class="sec"><div class="qs-card"><div><span class="eyebrow">${T('startLevel1')}</span><h2>${T('quickstart')}</h2><p>${esc(qsLead())}</p>
        <div class="progress-row"><div class="progress" role="progressbar" aria-label="${T('qsProgress')}" aria-valuemin="0" aria-valuemax="${qs.length}" aria-valuenow="${done}"><i style="width:${done / qs.length * 100}%"></i></div><span>${done} / ${qs.length}</span></div>
        <a class="btn primary" href="#${(qs.find(l => !isRead(l.slug)) || qs[0]).slug}">${done ? (done === qs.length ? T('repeatLearning') : T('continueLearning')) : T('startLearning')} ${SV.arrow}</a> <a class="btn ghost" href="#start">${T('allLessons')}</a></div>
        <ol class="qs-mini">${qs.map((l, i) => `<li class="${isRead(l.slug) ? 'done' : ''}"><a href="#${l.slug}"${S.BY[l.slug].uaOnly ? ' lang="uk"' : ''}><span class="qs-num">${isRead(l.slug) ? SV.check : String(i + 1).padStart(2, '0')}</span><span>${esc(S.BY[l.slug].title)}</span>${l.demo ? `<span class="badge">${SV.play}${T('demo')}</span>` : '<span></span>'}</a></li>`).join('')}</ol></div></section>
      <section class="sec"><div class="sec-head"><h2>${T('sections')}</h2></div><div class="cats">${S.cats.map(c => {
        const arts = S.order.filter(a => a.cat === c.id), r = arts.filter(a => isRead(a.slug)).length;
        return `<a class="cat-card" href="#cat-${c.id}"><span class="ci">${SV[c.icon]}</span><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p><span class="cmeta"><span>${c.code}</span><span>${arts.length} ${T('articles')}</span>${r ? `<span>${T('readOf', { a: r, b: arts.length })}</span>` : ''}${c.draft ? `<span class="badge draft">${T('draft')}</span>` : ''}${c.uaOnly ? `<span class="badge">${T('uaOnlyBadge')}</span>` : ''}</span></a>`;
      }).join('')}</div></section>
      <section class="sec"><div class="sec-head"><h2>${T('tryDemo')}</h2><a href="#demos">${T('allDemos')} (${demos.length}) →</a></div><div class="demo-list">${demos.slice(0, 3).map(id => demoCard(id)).join('')}</div></section>
      <section class="sec"><div class="sec-head"><h2>${T('toolsTitle')}</h2></div><div class="refs">
        <a class="ref-card" href="#glossary"><span class="ci">${SV.book}</span><span><b>${T('glossary')}</b><span>${T('glossaryLead')}</span></span>${SV.chevR}</a>
        <a class="ref-card" href="#icons"><span class="ci">${SV.shapes}</span><span><b>${T('icons')}</b><span>${T('iconsLead')}</span></span>${SV.chevR}</a></div></section>
      <section class="sec">${supportCard()}</section>
      <section class="sec"><div class="about">
        <div><h3>${T('aboutTitle')}</h3><p>${T('aboutText')}</p></div>
        <div><h3>${T('coverageTitle')}</h3><p>${T('coverageText')}</p></div>
        <div><h3>${T('progressTitle')}</h3><p>${T('progressText')}</p></div>
      </div></section></div>`;
    const s = searchUI({ id: 'home', big: true, placeholder: T('searchPhBig') });
    $('#home-search').appendChild(s);
    $$('[data-hint]').forEach(b => b.addEventListener('click', () => { const inp = $('input', s); inp.value = b.dataset.hint; inp.dispatchEvent(new Event('input')); inp.focus(); }));
    bindDemoButtons();
    return 'Exasite — ' + T('helpCenter');
  }
  const demoMeta = (id) => { const D = HC.demos[id], en = LANG === 'en' && HC.demoText.en[id]; return { D, en, title: en ? en.title : D.title, source: en ? en.source : D.source, result: en ? en.result : D.result }; };
  function demoCard(id) {
    const m = demoMeta(id), D = m.D, art = DATA.uk.BY[D.article];
    const img = art && findFirstImg(art);
    return `<div class="demo-card"><div class="dthumb">${img ? `<img src="img/${img}.webp" alt="" loading="lazy">` : ''}</div>
      <h3${LANG === 'en' && !m.en ? ' lang="uk"' : ''}>${esc(m.title)}</h3><div class="dmeta"><span>${D.steps.length - 1} ${T('steps')}</span><span>${esc(m.source)}</span>${LANG === 'en' && !m.en ? `<span class="badge">${T('uaOnlyBadge')}</span>` : ''}${P.demos[id] ? `<span class="badge read">${SV.check}${T('passedDemo')}</span>` : ''}</div>
      <button type="button" class="btn primary" data-demo="${id}">${SV.play}${T('startDemo')}</button></div>`;
  }
  function findFirstImg(a) {
    for (const b of a.blocks) { if (b.img) return b.img; if (b.items) for (const it of b.items) if (it && it.img) return it.img; }
    return null;
  }
  function bindDemoButtons(root) { $$('[data-demo]', root).forEach(b => b.addEventListener('click', () => openDemo(b.dataset.demo, b))); }

  function viewStart() {
    const qs = qsLessons(), done = qs.filter(l => isRead(l.slug)).length;
    app.innerHTML = `<div class="wrap layout">${sidebar('start')}<main id="main" class="art" style="max-width:820px">
      ${crumbs([[T('home'), 'home'], [T('quickstart')]])}
      <div class="page-head"><span class="eyebrow">${T('lvl1')}</span><h1 tabindex="-1">${T('quickstart')}</h1><p>${esc(qsLead())}</p></div>
      <div class="progress-row"><div class="progress" role="progressbar" aria-label="${T('qsProgress')}" aria-valuemin="0" aria-valuemax="${qs.length}" aria-valuenow="${done}"><i style="width:${done / qs.length * 100}%"></i></div><span>${T('passed', { a: done, b: qs.length })}</span></div>
      <ol class="qs-list">${qs.map((l, i) => { const a = S.BY[l.slug], r = isRead(l.slug);
        return `<li class="qs-item${r ? ' done' : ''}"><span class="qn" aria-hidden="true">${r ? SV.check : i + 1}</span><div><h3><a href="#${a.slug}"${a.uaOnly ? ' lang="uk"' : ''}>${esc(a.title)}</a>${a.uaOnly ? ` <span class="badge">${T('uaOnlyBadge')}</span>` : ''}</h3><p>${esc(l.note)}</p></div>
          <div class="qa">${l.demo ? `<button type="button" class="btn" data-demo="${l.demo}">${SV.play}${T('demo')}</button>` : ''}<button type="button" class="btn${r ? ' is-read' : ''}" data-toggle-read="${a.slug}" aria-pressed="${r}">${r ? SV.check + T('passedBtn') : T('markPassed')}</button></div></li>`; }).join('')}</ol>
      <div style="margin-top:28px" id="reset-zone"><button type="button" class="btn ghost" id="reset-btn">${SV.restart}${T('resetProgress')}</button></div>
      <p style="color:var(--muted);font-size:14px;margin-top:10px">${T('resetNote')}</p>
    </main></div>`;
    $$('[data-toggle-read]').forEach(b => b.addEventListener('click', () => { const s = b.dataset.toggleRead; P.read[s] = !P.read[s]; if (!P.read[s]) delete P.read[s]; save(); const y = scrollY; viewStart(); scrollTo(0, y); $(`[data-toggle-read="${s}"]`).focus(); }));
    bindDemoButtons();
    $('#reset-btn').addEventListener('click', () => {
      const z = $('#reset-zone');
      z.innerHTML = `<div class="confirm-row" role="alertdialog" aria-labelledby="rq"><span id="rq">${T('resetQ')}</span><button type="button" class="btn primary" id="rs-yes">${T('resetYes')}</button><button type="button" class="btn" id="rs-no">${T('cancel')}</button></div>`;
      $('#rs-no').focus();
      $('#rs-no').addEventListener('click', () => { viewStart(); $('#reset-btn').focus(); });
      $('#rs-yes').addEventListener('click', () => { P = { read: {}, checks: {}, demos: {} }; save(); viewStart(); announce(T('resetDone')); $('#reset-btn').focus(); });
    });
    return T('quickstart') + ' — Exasite';
  }

  function viewCat(id) {
    const c = S.CAT[id]; if (!c) return null;
    const arts = S.order.filter(a => a.cat === id);
    const src = HC.meta.sources.find(s => s.code === c.code);
    app.innerHTML = `<div class="wrap layout">${sidebar('cat-' + id)}<main id="main">
      ${crumbs([[T('home'), 'home'], [c.title]])}
      <div class="page-head"><span class="eyebrow">${T('sectionN', { c: c.code })}</span><h1 tabindex="-1">${esc(c.title)}</h1><p>${esc(c.desc)}</p></div>
      ${c.draft ? `<div class="notice">${SV.alert}<div>${T('draftNotice', { v: src.code + ' ' + (LANG === 'en' && src.en ? src.en : src.version) })}</div></div>` : ''}
      <ol class="alist">${arts.map((a, i) => `<li><a href="#${a.slug}"${a.uaOnly ? ' lang="uk"' : ''}><span class="an">${String(i + 1).padStart(2, '0')}</span><span><span class="at">${esc(a.title)}</span><span class="al">${esc(a.outcome)}</span></span><span class="ab">${badges(a)}</span></a></li>`).join('')}</ol>
      <p style="color:var(--muted);font-size:14px;margin-top:18px">${T('sourceLine', { c: src.code, t: esc(LANG === 'en' ? c.title : src.title), v: LANG === 'en' && src.en ? src.en : src.version, s: esc(src.status) })}</p>
    </main></div>`;
    return c.title + ' — Exasite';
  }

  function viewDemos() {
    app.innerHTML = `<div class="wrap layout">${sidebar('demos')}<main id="main">
      ${crumbs([[T('home'), 'home'], [T('demos')]])}
      <div class="page-head"><span class="eyebrow">${T('demosEyebrow')}</span><h1 tabindex="-1">${T('demos')}</h1><p>${T('demosLead')}</p></div>
      <div class="demo-list">${Object.keys(HC.demos).map(id => demoCard(id)).join('')}</div>
      <div class="missing" style="margin-top:24px">${SV.file}<div>${T('noLoginDemo')}</div></div>
    </main></div>`;
    bindDemoButtons();
    return T('demos') + ' — Exasite';
  }

  function viewSearch() {
    app.innerHTML = `<div class="wrap layout">${sidebar('search')}<main id="main" style="max-width:820px">
      ${crumbs([[T('home'), 'home'], [T('searchTitle')]])}
      <div class="page-head"><h1 tabindex="-1">${T('searchTitle')}</h1></div><div id="sp-box"></div><div id="sp-res" aria-live="polite" style="margin-top:20px"></div></main></div>`;
    const render = (q) => {
      lastQuery = q; const out = $('#sp-res');
      if (!q || q.trim().length < 2) { out.innerHTML = `<p style="color:var(--muted)">${T('minChars')}</p>`; return; }
      const r = search(q), g = glossaryHits(r.terms);
      const gHtml = g.length ? `<div class="sr-terms"><span>${T('termsMatch')}:</span>${g.map(x => `<a href="#glossary--${x.id}">${esc(x.term)}</a>`).join('')}</div>` : '';
      out.innerHTML = r.results.length ? `${correctedNote(q, r)}<p style="color:var(--muted);margin:0 0 8px">${T('found')}: ${r.results.length}</p>${gHtml}<div class="alist">${r.results.map(x => `<a class="sr-item" href="#${x.a.slug}"${x.a.uaOnly ? ' lang="uk"' : ''}><div class="sr-meta"><span>${esc(S.CAT[x.a.cat].title)}</span><span>${S.CAT[x.a.cat].code}</span></div><div class="sr-title">${hl(x.a.title, r.terms)}</div><div class="sr-snip">${x.snip}</div></a>`).join('')}</div>`
        : `<div class="empty-state"><div class="es-head">${SV.search}<div><h2>${T('nothing', { q: esc(q) })}</h2><p>${T('nothingHint')}</p>${suggestHtml(r)}</div></div>${gHtml}
            <h3>${T('tryTopics')}</h3>${tiles(popular().slice(0, 6))}${supportCard(true)}</div>`;
      $$('[data-suggest]', out).forEach(b => b.addEventListener('click', () => { const inp = $('#sp-box input'); inp.value = b.dataset.suggest; inp.dispatchEvent(new Event('input')); inp.focus(); }));
    };
    const box = searchUI({ id: 'page', big: true, value: lastQuery, onInput: render, onSubmit: render });
    $('#sp-box').appendChild(box);
    render(lastQuery);
    setTimeout(() => $('input', box).focus(), 0);
    return T('searchTitle') + ' — Exasite';
  }

  function viewGlossary() {
    const list = GL[LANG].slice().sort((a, b) => a.term.localeCompare(b.term, LANG));
    app.innerHTML = `<div class="wrap layout">${sidebar('glossary')}<main id="main" style="max-width:860px">
      ${crumbs([[T('home'), 'home'], [T('glossary')]])}
      <div class="page-head"><span class="eyebrow">${T('toolsTitle')}</span><h1 tabindex="-1">${T('glossary')}</h1><p>${T('glossaryLead')}</p></div>
      <div class="gl-filter"><label class="sr-only" for="gl-q">${T('glossaryFilter')}</label><div class="search-box">${SV.search}<input id="gl-q" type="search" autocomplete="off" placeholder="${T('glossaryFilter')}"></div></div>
      <dl class="gl-list">${list.map(g => { const m = g.more.split('#')[0], ma = S.BY[m];
        return `<div class="gl-item" id="glossary--${g.id}" data-text="${esc(norm(g.term + ' ' + g.def))}"><dt>${esc(g.term)}</dt><dd><p>${esc(g.def)}</p>${ma ? `<a href="${moreHref(g.more)}">${T('more')}</a>${ma.uaOnly ? ` <span class="badge">${T('uaOnlyBadge')}</span>` : ''}` : ''}</dd></div>`; }).join('')}</dl>
      <p class="gl-none" hidden>${T('glossaryNone')}</p>
    </main></div>`;
    $('#gl-q').addEventListener('input', (e) => {
      const ts = words(e.target.value); let n = 0;
      $$('.gl-item').forEach(it => { const ok = ts.every(t => it.dataset.text.includes(stem(t)) || it.dataset.text.includes(t)); it.hidden = !ok; if (ok) n++; });
      $('.gl-none').hidden = n > 0;
    });
    return T('glossary') + ' — Exasite';
  }

  function viewIcons() {
    figList = [];
    app.innerHTML = `<div class="wrap layout">${sidebar('icons')}<main id="main" style="max-width:900px">
      ${crumbs([[T('home'), 'home'], [T('icons')]])}
      <div class="page-head"><span class="eyebrow">${T('toolsTitle')}</span><h1 tabindex="-1">${T('icons')}</h1><p>${T('iconsLead')}</p></div>
      <nav class="ic-jump" aria-label="${T('inArticle')}">${HC.iconGroups.map(g => `<a href="#icons--${g.id}">${esc((g[LANG] || g.uk).title)}</a>`).join('')}</nav>
      ${HC.iconGroups.map(g => {
        const t = g[LANG] || g.uk, full = LANG === 'en' && EN_IMG.has(g.full + '_EN') ? g.full + '_EN' : g.full;
        const fi = figList.length; figList.push({ img: full, cap: t.title + ' — ' + t.where });
        return `<section class="ic-grp" id="icons--${g.id}" aria-labelledby="ich-${g.id}"><h2 id="ich-${g.id}">${esc(t.title)}</h2>
          <p class="ic-where"><b>${T('whereOnScreen')}:</b> ${esc(t.where)}</p>
          <div class="ic-body"><figure class="ic-crop"><button type="button" class="fig-btn" data-fig="${fi}" aria-label="${T('fullShot')}: ${esc(t.title)}"><img src="img/crops/${g.crop}.webp" alt="${esc(t.title)}" loading="lazy"><span class="zoom">${SV.zoom}</span></button><figcaption>${T('fragNote')} · ${g.full}${LANG === 'en' && full === g.full ? '_UI-UA' : ''}</figcaption></figure>
          <div class="tbl-wrap"><table class="icons"><thead><tr><th scope="col">${T('iconCol')}</th><th scope="col">${T('meaning')}</th></tr></thead><tbody>
          ${g.items.map(it => { const v = it[LANG] || it.uk, sl = v[2].split('#')[0], ta = S.BY[sl];
            return `<tr><td class="ic-g">${it.glyph ? `<span class="ticon big">${GLYPH[it.glyph] || ''}</span>` : `<code>${esc(it.text)}</code>`}</td><td><b>${esc(v[0])}</b><br>${esc(v[1])}${ta ? ` <a href="${moreHref(v[2])}"${ta.uaOnly ? ' lang="uk"' : ''}>${T('more')}</a>` : ''}</td></tr>`; }).join('')}
          </tbody></table></div></div>
          ${g.clarify ? `<aside class="clarify">${SV.alert}<div><b>${T('clarify')}</b> ${T('clarifyIcons')}</div></aside>` : ''}</section>`; }).join('')}
    </main></div>`;
    $$('[data-fig]').forEach(b => b.addEventListener('click', () => openZoom(+b.dataset.fig, b)));
    return T('icons') + ' — Exasite';
  }

  function viewMap() {
    const U = DATA.uk;
    const covered = new Set(HC.sourceMap.map(r => r[2]));
    app.innerHTML = `<div class="wrap layout">${sidebar('map')}<main id="main">
      ${crumbs([[T('home'), 'home'], [T('map')]])}
      ${LANG === 'en' ? `<div class="notice">${SV.info}<div>${T('mapUaOnly')}</div></div>` : ''}
      <div lang="uk"><div class="page-head"><span class="eyebrow">Перевірка повноти</span><h1 tabindex="-1">Карта відповідності</h1><p>Кожен розділ і тема вихідних посібників та сторінка прототипу, на яку їх перенесено. Натисніть посилання, щоб перевірити текст.</p></div>
      <div class="stat-row"><div><b>${HC.meta.sources.length}</b>посібники-джерела</div><div><b>${HC.sourceMap.length}</b>розділів і тем джерела</div><div><b>${U.order.length}</b>статей прототипу</div><div><b>${Object.keys(HC.demos).length}</b>демонстрацій</div><div><b>${HC.en.articles.length}</b>статей англійською</div><div><b>${U.order.filter(a => !covered.has(a.slug)).length}</b>статей без джерела</div></div>
      <h2 style="font-size:20px">Джерела</h2>
      <div class="tbl-wrap"><table><thead><tr><th>Код</th><th>Посібник</th><th>Версія</th><th>Статус</th></tr></thead><tbody>${HC.meta.sources.map(s => `<tr><td>${s.code}</td><td>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.title)}</a>` : esc(s.title)}</td><td>${s.version}</td><td>${esc(s.status)}</td></tr>`).join('')}</tbody></table></div>
      <h2 style="font-size:20px;margin-top:32px">Розділи джерела → сторінки</h2>
      <div class="tbl-wrap"><table class="map-tbl"><thead><tr><th>Джерело</th><th>Розділ / тема</th><th>Сторінка прототипу</th><th>Примітка</th></tr></thead><tbody>
      ${HC.sourceMap.map(r => `<tr><td>${r[0]}</td><td>${esc(r[1])}</td><td><a href="#${r[2]}${r[3] ? '--' + r[3] : ''}">${esc(U.BY[r[2]] ? U.BY[r[2]].title : r[2])}</a>${r[3] ? ` <small style="color:var(--muted)">› ${r[3]}</small>` : ''}</td><td>${esc(r[4])}</td></tr>`).join('')}</tbody></table></div></div>
    </main></div>`;
    return T('map') + ' — Exasite';
  }

  function viewNotFound(h) {
    app.innerHTML = `<div class="wrap"><main id="main" class="nf"><span class="code" aria-hidden="true">404</span><h1 tabindex="-1">${T('nfTitle')}</h1>
      <p>${T('nfText', { h: esc(h) })}</p>
      <div id="nf-search"></div><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn primary" href="#home">${T('toHome')}</a><a class="btn" href="#start">${T('quickstart')}</a></div>
      <div style="margin-top:36px;text-align:left">${supportCard(true)}</div></main></div>`;
    $('#nf-search').appendChild(searchUI({ id: 'nf', placeholder: T('nfSearch') }));
    return '404 — Exasite';
  }

  /* ---------- стаття ---------- */
  let figList = [];
  const imgLabel = (img) => /_EN$/.test(img) ? img.replace(/_EN$/, '') + '_UI-EN' : img + '_UI-UA';
  function fig(img, cap, extra) {
    extra = extra || {};
    const i = figList.length; figList.push({ img, cap });
    const marks = (extra.marks || []).map(m => `<span class="mark-dot" style="left:${m.x}%;top:${m.y}%" aria-hidden="true">${m.n}</span>`).join('');
    return `<figure class="fig"><button type="button" class="fig-btn" data-fig="${i}" aria-label="${T('zoomImg')}: ${esc(cap)}"><img src="img/${img}.webp" alt="${esc(cap)}" loading="lazy" width="1420" height="770">${marks}<span class="zoom">${SV.zoom}</span></button>
      <figcaption>${T('image')} ${i + 1}. ${esc(cap)} <span class="sid">· ${imgLabel(img)}</span>${extra.note ? `<span class="fig-note">${esc(extra.note)}</span>` : ''}${extra.marks ? `<span style="display:block">${T('marks')}: ${extra.marks.map(m => `${m.n} — ${esc(m.label)}`).join('; ')}</span>` : ''}</figcaption></figure>`;
  }
  const CALLI = { important: SV.alert, tip: SV.bulb, mistake: SV.alert, note: SV.info, next: SV.arrow, example: SV.file };
  let tocItems = [], TL = (k) => T(k);
  function block(b, a) {
    switch (b.t) {
      case 'p': return `<p>${rich(b.html)}</p>`;
      case 'example': return `<p class="ex">${rich(b.html)}</p>`;
      case 'h2': case 'h3': tocItems.push({ id: b.id, text: b.text, lvl: b.t }); return `<${b.t} id="${a.slug}--${b.id}">${esc(b.text)}<a class="anchor" href="#${a.slug}--${b.id}" aria-label="${esc(TL('anchorTo').replace('{t}', b.text))}">#</a></${b.t}>`;
      case 'steps': return `<ol class="steps">${b.items.map(it => `<li><div><p>${rich(it.html)}</p>${it.img ? fig(it.img, it.cap, { note: it.note }) : ''}</div></li>`).join('')}</ol>`;
      case 'fig': return fig(b.img, b.cap, b);
      case 'gallery': return `<div class="gallery">${b.items.map(it => fig(it.img, it.cap)).join('')}</div>`;
      case 'callout': { const k = CALLI[b.kind] ? b.kind : 'note', ttl = b.title || TL('call_' + k); return `<aside class="callout ${b.kind}" aria-label="${esc(ttl)}"><b class="ct">${CALLI[k]}${esc(ttl)}</b><p>${rich(b.html)}</p></aside>`; }
      case 'clarify': return `<aside class="clarify" aria-label="${TL('clarify')}">${SV.alert}<div><b>${TL('clarify')}</b> ${rich(b.html)}</div></aside>`;
      case 'missing': return `<aside class="missing" aria-label="${TL('missing')}">${SV.file}<div><b>${TL('missing')}</b> ${rich(b.html)}</div></aside>`;
      case 'table': return `<div class="tbl-wrap" tabindex="0" role="region" aria-label="${TL('table')}"><table class="${b.icons ? 'icons' : ''}"><thead><tr>${b.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      case 'list': return `<ul class="plain">${b.items.map(i => `<li>${rich(i)}</li>`).join('')}</ul>`;
      case 'features': return `<div class="features">${b.items.map(f => `<div class="feature"><span class="fn">${f.n} /</span><h3>${esc(f.title)}</h3><p>${rich(f.html)}</p></div>`).join('')}</div>`;
      case 'levels': return `<div class="levels">${b.items.map(l => `<div class="level"><span class="ln">${l.n}</span><div><h3>${esc(l.title)}</h3><p>${rich(l.html)}</p>${l.link ? `<a href="#${l.link === 'quickstart' ? 'start' : l.link}">${l.link === 'quickstart' ? TL('toQuickstart') : TL('toSection')}</a>` : ''}</div></div>`).join('')}</div>`;
      case 'terms': return `<dl class="terms">${b.items.map(t => `<div><dt>${esc(t.term)}${t.en ? `<small>${t.en}</small>` : ''}</dt><dd>${rich(t.html)}</dd></div>`).join('')}</dl>`;
      case 'faq': return `<div class="faq">${b.items.map(f => `<details><summary>${esc(f.q)}</summary><div>${rich(f.a)}</div></details>`).join('')}</div>`;
      case 'check': { const s = P.checks[a.slug] || [];
        return `<fieldset class="check" style="margin-inline:0"><legend class="sr-only">${esc(b.title)}</legend><b class="ct">${esc(b.title)}<span data-check-count>${s.length} / ${b.items.length}</span></b>${b.items.map((it, i) => `<label class="${s.includes(i) ? 'done' : ''}"><input type="checkbox" data-check="${i}" id="ck-${a.slug}-${i}"${s.includes(i) ? ' checked' : ''}><span>${rich(it)}</span></label>`).join('')}</fieldset>`; }
      default: return '';
    }
  }
  function viewArticle(slug) {
    const a = S.BY[slug]; if (!a) return null;
    figList = []; tocItems = [];
    const al = artLang(a);
    TL = (k) => (HC_T[al][k] !== undefined ? HC_T[al][k] : HC_T.uk[k]);
    const c = S.CAT[a.cat];
    const body = a.blocks.map(b => block(b, a)).join('');
    TL = (k) => T(k);
    const prev = S.order[a.idx - 1], next = S.order[a.idx + 1];
    const dm = a.demo && HC.demos[a.demo] && demoMeta(a.demo);
    const demoBox = dm ? `<div class="demo-launch" style="margin-bottom:26px"><div><b>${T('tryInDemo')}</b><span>${esc(dm.title)} · ${dm.D.steps.length - 1} ${T('steps')} · ${T('noRealData')}</span></div><button type="button" class="btn primary" data-demo="${a.demo}">${SV.play}${T('start')}</button></div>` : '';
    const tocHtml = tocItems.map(t => `<a href="#${slug}--${t.id}" data-toc="${t.id}" class="${t.lvl === 'h3' ? 'sub' : ''}">${esc(t.text)}</a>`).join('');
    const L = al !== LANG ? ' lang="uk"' : '';
    app.innerHTML = `<div class="wrap layout">${sidebar(slug)}<main id="main"><div class="art-grid"><article class="art">
      ${crumbs([[T('home'), 'home'], [c.title, 'cat-' + c.id], [a.title]])}
      ${a.uaOnly ? `<div class="notice lang-notice">${SV.info}<div>${T('uaOnlyBanner')}</div></div>` : ''}
      <div${L}><h1 tabindex="-1">${esc(a.title)}</h1><p class="lead">${rich(a.lead)}</p></div>
      <div class="art-meta">${badges(a)}<span class="src"${L}>${T('source')}: ${linkify(esc(a.source))}</span></div>
      <div class="outcome">${SV.target}<div><b>${T('result')}</b><p${L}>${rich(a.outcome)}</p></div></div>
      ${tocItems.length > 1 ? `<details class="toc-inline"><summary>${T('articleToc')} ${SV.chev}</summary><nav class="toc" aria-label="${T('articleToc')}"${L}>${tocHtml}</nav></details>` : ''}
      ${demoBox}
      <div class="prose"${L}>${body}</div>
      <div class="art-end">
        <div class="read-row"><p>${isRead(slug) ? T('readDone') : T('readQ')}</p><button type="button" class="btn${isRead(slug) ? ' is-read' : ''}" id="read-btn" aria-pressed="${isRead(slug)}">${isRead(slug) ? SV.check + T('read') : T('markRead')}</button></div>
        ${a.related && a.related.length ? `<section class="related" aria-labelledby="rel-h"><h2 id="rel-h">${T('related')}</h2><ul>${a.related.filter(r => S.BY[r]).map(r => `<li><a href="#${r}"${S.BY[r].uaOnly ? ' lang="uk"' : ''}><small>${esc(S.CAT[S.BY[r].cat].title)}</small>${esc(S.BY[r].title)}</a></li>`).join('')}</ul></section>` : ''}
        <nav class="pn" aria-label="${T('prevNext')}">${prev ? `<a class="prev" href="#${prev.slug}"><small>${T('prev')}</small><b${prev.uaOnly ? ' lang="uk"' : ''}>${esc(prev.title)}</b></a>` : ''}${next ? `<a class="next" href="#${next.slug}"><small>${T('next')}</small><b${next.uaOnly ? ' lang="uk"' : ''}>${esc(next.title)}</b></a>` : ''}</nav>
        ${supportCard(true)}
      </div></article>
      <aside class="toc-side" aria-label="${T('articleToc')}">${tocItems.length ? `<div class="eyebrow">${T('inArticle')}</div><nav class="toc"${L}>${tocHtml}</nav>` : ''}${dm ? `<div class="toc-demo"><button type="button" class="btn" data-demo="${a.demo}" style="width:100%">${SV.play}${T('dpDemo')}</button></div>` : ''}</aside>
      </div></main></div>`;
    termify($('.prose', app), a, al);
    bindDemoButtons();
    $$('[data-fig]').forEach(b => b.addEventListener('click', () => openZoom(+b.dataset.fig, b)));
    $('#read-btn').addEventListener('click', () => {
      P.read[slug] = !P.read[slug]; if (!P.read[slug]) delete P.read[slug]; save();
      const y = scrollY; viewArticle(slug); scrollTo(0, y); $('#read-btn').focus();
      announce(P.read[slug] ? T('markedRead') : T('unmarkedRead'));
    });
    $$('[data-check]').forEach(cb => cb.addEventListener('change', () => {
      const s = new Set(P.checks[slug] || []); const i = +cb.dataset.check;
      cb.checked ? s.add(i) : s.delete(i); P.checks[slug] = Array.from(s); save();
      cb.closest('label').classList.toggle('done', cb.checked);
      const fs = cb.closest('fieldset'); $('[data-check-count]', fs).textContent = `${$$('input:checked', fs).length} / ${$$('input', fs).length}`;
    }));
    $$('.toc-inline a').forEach(l => l.addEventListener('click', () => { l.closest('details').open = false; }));
    spy();
    return a.title + ' — Exasite';
  }
  let spyObs;
  function spy() {
    if (spyObs) spyObs.disconnect();
    const heads = $$('.prose h2, .prose h3'); if (!heads.length || !('IntersectionObserver' in window)) return;
    const set = (id) => $$('.toc-side .toc a').forEach(l => l.classList.toggle('active', l.dataset.toc === id));
    spyObs = new IntersectionObserver((ents) => {
      const vis = ents.filter(e => e.isIntersecting).sort((x, y) => x.boundingClientRect.top - y.boundingClientRect.top);
      if (vis[0]) set(vis[0].target.id.split('--')[1]);
    }, { rootMargin: '-80px 0px -65% 0px' });
    heads.forEach(h => spyObs.observe(h));
  }

  /* ---------- підказки на термінах ---------- */
  const TERM_MAX = 10;
  function termify(root, a, lang) {
    if (!root) return;
    const skip = 'h1,h2,h3,h4,a,button,summary,code,figcaption,.term,.ticon,.mark-dot,.ct,label,th';
    let n = 0;
    for (const g of GL[lang]) {
      if (n >= TERM_MAX) break;
      if (!g.re || g.more.split('#')[0] === a.slug) continue;
      const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (t) => (t.parentElement.closest(skip) || !t.nodeValue.trim()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      let node, m = null;
      while ((node = tw.nextNode())) { m = g.re.exec(node.nodeValue); if (m) break; }
      if (!m) continue;
      const after = node.splitText(m.index); after.splitText(m[0].length);
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'term'; btn.dataset.term = g.id; btn.dataset.tl = lang;
      btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', (HC_T[lang].termShow || T('termShow')).replace('{t}', g.term) + ': ' + after.nodeValue);
      btn.textContent = after.nodeValue;
      after.parentNode.replaceChild(btn, after);
      n++;
    }
  }
  let termPop = null, termBtn = null;
  function closeTerm(focus) {
    if (!termPop) return;
    termPop.remove(); termPop = null;
    if (termBtn) { termBtn.setAttribute('aria-expanded', 'false'); termBtn.removeAttribute('aria-describedby'); if (focus) termBtn.focus(); }
    termBtn = null;
  }
  function openTerm(btn) {
    const same = termBtn === btn; closeTerm(); if (same) return;
    const l = btn.dataset.tl, g = glossaryById(l, btn.dataset.term); if (!g) return;
    const ma = S.BY[g.more.split('#')[0]];
    termPop = document.createElement('div'); termPop.className = 'term-pop'; termPop.id = 'term-pop'; termPop.setAttribute('role', 'tooltip'); termPop.lang = l;
    termPop.innerHTML = `<b>${esc(g.term)}</b><p>${esc(g.def)}</p><div class="tp-links">${ma ? `<a href="${moreHref(g.more)}">${HC_T[l].more}</a>` : ''}<a href="#glossary--${g.id}">${HC_T[LANG].glossary}</a></div>`;
    document.body.appendChild(termPop);
    termBtn = btn; btn.setAttribute('aria-expanded', 'true'); btn.setAttribute('aria-describedby', 'term-pop');
    const r = btn.getBoundingClientRect(), pw = termPop.offsetWidth, ph = termPop.offsetHeight;
    let left = r.left + scrollX + r.width / 2 - pw / 2; left = Math.max(scrollX + 12, Math.min(scrollX + document.documentElement.clientWidth - pw - 12, left));
    let top = r.bottom + scrollY + 10; if (r.bottom + ph + 20 > innerHeight && r.top - ph - 10 > 0) top = r.top + scrollY - ph - 10;
    termPop.style.left = left + 'px'; termPop.style.top = top + 'px';
    $$('a', termPop).forEach(x => x.addEventListener('click', () => closeTerm()));
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.term'); if (b) { e.preventDefault(); openTerm(b); return; }
    if (termPop && !termPop.contains(e.target)) closeTerm();
  });
  document.addEventListener('keydown', (e) => {
    if (!termPop) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeTerm(true); }
    else if (e.key === 'Tab' && document.activeElement === termBtn && !e.shiftKey) { const f = $('a', termPop); if (f) { e.preventDefault(); f.focus(); } }
  }, true);
  document.addEventListener('focusin', (e) => { if (termPop && !termPop.contains(e.target) && e.target !== termBtn) closeTerm(); });
  window.addEventListener('resize', () => closeTerm());

  /* ---------- маршрутизація ---------- */
  function route(keepScroll) {
    closeAllModals(true); closeTerm();
    const h = decodeURIComponent(location.hash.slice(1));
    const [base, sec] = h.split('--');
    let title = null, navKey = '';
    const curA = S.BY[base];
    navOpen = new Set(curA ? [curA.cat] : []);
    if (!h || h === 'home') { title = viewHome(); }
    else if (h === 'start') { title = viewStart(); navKey = 'start'; }
    else if (h === 'demos') { title = viewDemos(); navKey = 'demos'; }
    else if (h === 'search') { title = viewSearch(); }
    else if (h === 'map') { title = viewMap(); }
    else if (base === 'glossary') { title = viewGlossary(); }
    else if (base === 'icons') { title = viewIcons(); }
    else if (h.startsWith('cat-')) { title = viewCat(h.slice(4)); navKey = 'cats'; }
    else if (h.startsWith('demo-') && HC.demos[h.slice(5)]) { title = viewDemos(); navKey = 'demos'; setTimeout(() => openDemo(h.slice(5), null), 0); }
    else { title = viewArticle(base); if (title) navKey = 'cats'; }
    if (!title) title = viewNotFound(h);
    document.title = title;
    $$('.hdr-nav a').forEach(a => { if (a.dataset.nav === navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (keepScroll === true) { firstRender = false; return; }
    const target = sec && document.getElementById(h);
    if (target) {
      target.classList.add('flash'); setTimeout(() => target.classList.remove('flash'), 1600);
      requestAnimationFrame(() => { target.scrollIntoView({ block: 'start' }); target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); });
    } else {
      scrollTo(0, 0);
      if (!firstRender && h !== 'search') { const h1 = $('h1', app); if (h1) h1.focus({ preventScroll: true }); }
    }
    firstRender = false;
  }
  let firstRender = true;

  /* ---------- модальні вікна ---------- */
  const modals = [];
  function openModal(el, opts) {
    const bg = document.createElement('div'); bg.className = opts.cls || 'modal-bg';
    bg.appendChild(el); document.body.appendChild(bg);
    $$('body > :not(.modal-bg):not(.drawer):not(.drawer-bg):not(script)').forEach(n => n.setAttribute('inert', ''));
    const m = { bg, el, opener: opts.opener, onClose: opts.onClose };
    modals.push(m);
    bg.addEventListener('mousedown', (e) => { if (e.target === bg && opts.closeOnBg !== false) closeModal(m); });
    document.body.style.overflow = 'hidden';
    const f = $(opts.focus || '[data-close]', el) || el; setTimeout(() => f.focus(), 0);
    return m;
  }
  function closeModal(m, silent) {
    const i = modals.indexOf(m); if (i < 0) return;
    modals.splice(i, 1); m.bg.remove();
    if (!modals.length) { $$('[inert]').forEach(n => n.removeAttribute('inert')); document.body.style.overflow = ''; }
    if (m.onClose) m.onClose();
    if (!silent && m.opener && document.contains(m.opener)) m.opener.focus();
  }
  function closeAllModals(silent) { while (modals.length) closeModal(modals[modals.length - 1], silent); }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modals.length) { e.preventDefault(); closeModal(modals[modals.length - 1]); return; }
    if (e.key === 'Tab' && modals.length) {
      const box = modals[modals.length - 1].el;
      const f = $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', box).filter(n => n.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
    if (e.key === '/' && !modals.length && !/input|textarea/i.test(document.activeElement.tagName)) {
      const inp = $('.hdr-search input'); if (inp && inp.offsetParent) { e.preventDefault(); inp.focus(); }
    }
  });

  function openZoom(i, opener) {
    const box = document.createElement('div'); box.className = 'zoom-box';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-labelledby', 'zcap');
    const draw = () => {
      const f = figList[i];
      box.innerHTML = `<div class="zoom-head"><p id="zcap">${T('image')} ${i + 1} ${LANG === 'en' ? 'of' : 'з'} ${figList.length}. ${esc(f.cap)} <span style="color:var(--muted)">· ${imgLabel(f.img)}</span></p>
        <div class="zoom-nav">${figList.length > 1 ? `<button type="button" class="icon-btn" data-zp aria-label="${T('prevImg')}"${i === 0 ? ' disabled' : ''}>${SV.left}</button><button type="button" class="icon-btn" data-zn aria-label="${T('nextImg')}"${i === figList.length - 1 ? ' disabled' : ''}>${SV.arrow}</button>` : ''}
        <button type="button" class="icon-btn" data-close aria-label="${T('closeImg')}">${SV.x}</button></div></div>
        <div class="zoom-body"><img src="img/${f.img}.webp" alt="${esc(f.cap)}"></div>`;
      $('[data-close]', box).addEventListener('click', () => closeModal(m));
      const p = $('[data-zp]', box), n = $('[data-zn]', box);
      if (p) p.addEventListener('click', () => { i--; draw(); ($('[data-zp]', box).disabled ? $('[data-zn]', box) : $('[data-zp]', box)).focus(); });
      if (n) n.addEventListener('click', () => { i++; draw(); ($('[data-zn]', box).disabled ? $('[data-zp]', box) : $('[data-zn]', box)).focus(); });
    };
    draw();
    box.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' && i < figList.length - 1) { i++; draw(); $('[data-close]', box).focus(); } if (e.key === 'ArrowLeft' && i > 0) { i--; draw(); $('[data-close]', box).focus(); } });
    const m = openModal(box, { opener });
  }

  function openDrawer(opener) {
    const bg = document.createElement('div'); bg.className = 'drawer-bg';
    const d = document.createElement('div'); d.className = 'drawer'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-label', T('menu'));
    const cur = decodeURIComponent(location.hash.slice(1)).split('--')[0] || 'home';
    d.innerHTML = `<div class="drawer-head"><a class="brand" href="#home"><img src="img/logo.png" alt="Exasite" width="43" height="30"><span>${T('helpCenter')}</span></a>${langSwitch()}<button type="button" class="icon-btn" data-close aria-label="${T('closeMenu')}">${SV.x}</button></div><div class="dsearch"></div>${sidebar(cur)}`;
    $('.dsearch', d).appendChild(searchUI({ id: 'drawer' }));
    const close = (silent) => { bg.remove(); d.remove(); $$('[inert]').forEach(n => n.removeAttribute('inert')); document.body.style.overflow = ''; document.removeEventListener('keydown', key); if (!silent && opener && document.contains(opener)) opener.focus(); };
    const key = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); close(); }
      if (e.key === 'Tab') { const f = $$('a[href], button, input', d).filter(n => n.offsetParent !== null); if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); } }
    };
    document.body.append(bg, d);
    $$('body > :not(.drawer):not(.drawer-bg):not(script)').forEach(n => n.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', key);
    bg.addEventListener('click', () => close());
    $('[data-close]', d).addEventListener('click', () => close());
    $$('a[href^="#"]', d).forEach(a => a.addEventListener('click', () => close(true)));
    window.addEventListener('hashchange', () => { if (document.contains(d)) close(true); }, { once: true });
    setTimeout(() => $('[data-close]', d).focus(), 0);
  }

  /* ---------- демонстрації ---------- */
  function translateMock(root) {
    const dict = HC.mockEn || {};
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (t) => t.parentElement.closest('[data-notr]') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    let n; while ((n = tw.nextNode())) { const k = n.nodeValue.trim(), k2 = k.replace(/^\/\s*/, ''); if (k && dict[k]) n.nodeValue = n.nodeValue.replace(k, dict[k]); else if (k2 && dict[k2]) n.nodeValue = n.nodeValue.replace(k2, dict[k2]); }
    $$('[placeholder],[title]', root).forEach(el => ['placeholder', 'title'].forEach(at => { const v = el.getAttribute(at); if (v && dict[v.trim()]) el.setAttribute(at, dict[v.trim()]); }));
  }
  const reduceMotion = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function openDemo(id, opener) {
    const D = HC.demos[id]; if (!D) return;
    const meta = demoMeta(id), en = meta.en;
    const total = D.steps.length - 1;
    const tips = D.steps.map((s, i) => (s.final ? meta.result : (en && en.tips[i]) || s.tip));
    const uaDemo = LANG === 'en' && !en;
    HC.mockLang = LANG === 'en' && en ? 'en' : 'uk';
    let k = 0, wrong = false, playing = false, timer = null, showAll = false;
    const box = document.createElement('div'); box.className = 'dp';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-labelledby', 'dp-title');
    box.innerHTML = `<div class="dp-head"><h2 id="dp-title"${uaDemo ? ' lang="uk"' : ''}><small>${T('dpDemo')} · ${esc(meta.source)}</small>${esc(meta.title)}</h2><button type="button" class="icon-btn" data-close aria-label="${T('dpClose')}">${SV.x}</button></div>
      <div class="dp-prog"><span id="dp-count"></span><div class="progress" role="progressbar" aria-label="${T('dpProgress')}" aria-valuemin="0" aria-valuemax="${total}"><i></i></div></div>
      <div class="dp-main">${uaDemo ? `<div class="dp-note">${SV.info}<span>${T('dpUaOnly')}</span></div>` : ''}<div class="dp-body"><div class="dp-stagewrap"><div class="dp-stage" aria-hidden="true"${uaDemo ? ' lang="uk"' : ''}><div class="dp-scale"></div><div class="dp-bubble" hidden></div><div class="dp-cursor" hidden></div></div></div>
        <section class="dp-list" aria-labelledby="dp-lh"><div class="dp-lhead"><h3 id="dp-lh">${T('dpStepsList')}</h3><button type="button" class="linkish" data-all aria-expanded="false">${T('dpAllSteps')} (${total})</button></div><ol${uaDemo ? ' lang="uk"' : ''}></ol></section></div></div>
      <div class="dp-panel"><div class="dp-tip"></div><div class="dp-actions"></div></div><div class="sr-only" aria-live="polite" id="dp-live"></div>`;
    const stage = $('.dp-stage', box), scaleEl = $('.dp-scale', box), bubble = $('.dp-bubble', box), cursor = $('.dp-cursor', box), tip = $('.dp-tip', box), acts = $('.dp-actions', box), list = $('.dp-list ol', box), listSec = $('.dp-list', box);
    cursor.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 3l14 8-6.2 1.6L10 19z" fill="#1c1e23" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>';
    let curS = 1;
    const target = () => { const s = D.steps[k]; return s.target && $(`[data-hot="${s.target}"]`, scaleEl); };
    const fit = () => {
      const w = stage.clientWidth || 960, t = target();
      let s = w / 960, tx = 0, ty = 0, H = 560 * s;
      if (w < 640 && t) {
        /* Вузький екран: збільшуємо фрагмент навколо потрібного елемента, щоб його було видно й зручно натиснути */
        const sr = scaleEl.getBoundingClientRect(), tr = t.getBoundingClientRect();
        const cx = (tr.left - sr.left + tr.width / 2) / curS, cy = (tr.top - sr.top + tr.height / 2) / curS;
        const tw = tr.width / curS, th = tr.height / curS;
        s = Math.max(w / 960, Math.min(0.85, (w - 24) / tw)); H = Math.min(380, 560 * s);
        if (th * s > H - 24) { s = Math.max(w / 960, (H - 24) / th); H = Math.min(380, 560 * s); }
        tx = Math.min(0, Math.max(w - 960 * s, w / 2 - cx * s));
        ty = Math.min(0, Math.max(H - 560 * s, H / 2 - cy * s));
      }
      curS = s;
      scaleEl.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`; stage.style.height = Math.round(H) + 'px';
      placeBubble();
    };
    const placeBubble = () => {
      const t = target();
      if (!t || stage.clientWidth < 640) { bubble.hidden = true; return; }
      const sr = stage.getBoundingClientRect(), tr = t.getBoundingClientRect();
      bubble.hidden = false; bubble.innerHTML = `<b>${T('stepWord')} ${k + 1}</b>${esc(tips[k])}`;
      const bw = bubble.offsetWidth, bh = bubble.offsetHeight;
      let left = tr.left - sr.left + tr.width / 2 - bw / 2; left = Math.max(10, Math.min(sr.width - bw - 10, left));
      let top = tr.bottom - sr.top + 14, below = true;
      if (top + bh > sr.height - 6) { top = tr.top - sr.top - bh - 14; below = false; }
      if (top < 6) { top = Math.min(sr.height - bh - 6, tr.bottom - sr.top + 14); below = true; }
      bubble.style.left = left + 'px'; bubble.style.top = top + 'px';
      bubble.classList.toggle('below', below); bubble.classList.toggle('above', !below);
      bubble.style.setProperty('--ax', Math.max(12, Math.min(bw - 24, tr.left - sr.left + tr.width / 2 - left - 6)) + 'px');
    };
    const drawList = () => {
      list.innerHTML = D.steps.map((s, i) => {
        const cls = i === k ? 'cur' : i < k ? 'done' : '';
        return `<li class="${cls}${s.final ? ' fin' : ''}"><button type="button" data-jump="${i}"${i === k ? ' aria-current="step"' : ''}><span class="dl-n">${i < k ? SV.check : s.final ? SV.target : i + 1}</span><span class="dl-t">${s.final ? `<b>${T('dpResult')}</b>` : ''}${esc(tips[i])}</span></button></li>`;
      }).join('');
      listSec.classList.toggle('all', showAll);
      $$('[data-jump]', list).forEach(b => b.addEventListener('click', () => { stopPlay(); k = +b.dataset.jump; wrong = false; draw(`[data-jump="${k}"]`, true); }));
      const cur = $('li.cur', list);
      if (cur && list.scrollHeight > list.clientHeight) list.scrollTop = Math.max(0, cur.offsetTop - list.offsetTop - 40);
    };
    const playBtn = () => `<button type="button" class="btn${playing ? ' is-playing' : ''}" data-play aria-pressed="${playing}">${playing ? SV.pause + T('dpPause') : SV.play + T('dpPlay')}</button>`;
    const draw = (focusSel, focusInList) => {
      const s = D.steps[k];
      scaleEl.innerHTML = s.render();
      if (LANG === 'en' && en) translateMock(scaleEl);
      $$('.m-hot', scaleEl).forEach(h => h.setAttribute('tabindex', '-1'));
      const t = target();
      if (t) t.classList.add('is-target');
      $('#dp-count', box).textContent = s.final ? T('dpDone', { b: total }) : T('dpStep', { a: k + 1, b: total });
      const pr = $('.dp-prog .progress', box); pr.setAttribute('aria-valuenow', s.final ? total : k); $('i', pr).style.width = (s.final ? 100 : k / total * 100) + '%';
      if (s.final) {
        P.demos[id] = true; save();
        tip.innerHTML = `<div class="dp-result">${SV.target}<div><b style="color:var(--ok)">${T('dpReady')}</b><span${uaDemo ? ' lang="uk"' : ''}>${esc(meta.result)}</span></div></div>`;
        acts.innerHTML = `<button type="button" class="btn" data-back>${SV.left}${T('dpBack')}</button><button type="button" class="btn" data-restart>${SV.restart}${T('dpAgain')}</button>${D.article ? `<a class="btn primary" href="#${D.article}" data-toart>${T('dpOpenArticle')}</a>` : ''}`;
      } else {
        tip.innerHTML = `<div class="dp-tipnow"${uaDemo ? ' lang="uk"' : ''}><b>${T('dpStep', { a: k + 1, b: total })}</b>${esc(tips[k])}</div>${wrong ? `<span class="dp-wrong">${T('dpWrong')}</span>` : ''}${playing ? `<span class="dp-playing">${T('dpPlaying')}</span>` : ''}`;
        acts.innerHTML = `${playBtn()}<button type="button" class="btn" data-back${k === 0 ? ' disabled' : ''}>${SV.left}${T('dpBack')}</button><button type="button" class="btn ghost" data-restart${k === 0 ? ' disabled' : ''}>${SV.restart}<span>${T('dpRestart')}</span></button><button type="button" class="btn primary" data-do>${T('dpDo')} ${SV.arrow}</button>`;
      }
      $('#dp-live', box).textContent = s.final ? T('dpReady') + '. ' + meta.result : T('dpStep', { a: k + 1, b: total }) + '. ' + tips[k];
      $('[data-back]', acts).addEventListener('click', () => { stopPlay(); if (k > 0) { k--; wrong = false; draw('[data-back]'); } });
      $('[data-restart]', acts).addEventListener('click', () => { stopPlay(); k = 0; wrong = false; draw('[data-do]'); });
      const doBtn = $('[data-do]', acts); if (doBtn) doBtn.addEventListener('click', () => { stopPlay(); advance('[data-do]'); });
      const pb = $('[data-play]', acts); if (pb) pb.addEventListener('click', () => { playing ? stopPlay(true) : startPlay(); });
      const ta = $('[data-toart]', acts); if (ta) ta.addEventListener('click', () => closeModal(m, true));
      drawList();
      fit();
      if (focusSel) { const f = focusInList ? $(focusSel, list) : $(focusSel, acts); (f && !f.disabled ? f : $('[data-do], [data-restart]', acts)).focus(); }
      schedule();
    };
    const advance = (focusSel) => { if (k < D.steps.length - 1) { k++; wrong = false; draw(D.steps[k].final ? '[data-restart]' : focusSel); } };
    /* «Покажи мені»: демонстрація проходить сама — курсор підводиться до елемента, натискає, пауза на читання */
    const startPlay = () => { if (D.steps[k].final) { k = 0; } playing = true; wrong = false; cursor.hidden = false; draw('[data-play]'); };
    const stopPlay = (redraw) => {
      const was = playing; playing = false; clearTimeout(timer); timer = null; cursor.hidden = true; cursor.classList.remove('click');
      if (redraw && was) draw('[data-play]');
    };
    const moveCursor = () => {
      const t = target(); if (!t) return;
      const sr = stage.getBoundingClientRect(), tr = t.getBoundingClientRect();
      cursor.style.transform = `translate(${tr.left - sr.left + tr.width / 2 - 4}px, ${tr.top - sr.top + tr.height / 2 - 2}px)`;
    };
    const schedule = () => {
      clearTimeout(timer);
      if (!playing) return;
      if (D.steps[k].final) { playing = false; cursor.hidden = true; const pb = $('[data-play]', acts); if (pb) pb.remove(); return; }
      const rm = reduceMotion();
      const read = Math.min(5600, 1800 + tips[k].length * 32);
      timer = setTimeout(() => {
        cursor.classList.toggle('instant', rm); moveCursor();
        timer = setTimeout(() => {
          cursor.classList.add('click');
          timer = setTimeout(() => { cursor.classList.remove('click'); if (playing) advance('[data-play]'); }, rm ? 200 : 420);
        }, rm ? 100 : 950);
      }, read);
    };
    scaleEl.addEventListener('click', (e) => {
      const s = D.steps[k]; if (s.final) return;
      if (playing) { stopPlay(true); return; }
      const h = e.target.closest('[data-hot]');
      if (h && h.dataset.hot === s.target) advance('[data-do]');
      else { wrong = true; draw(); }
    });
    $('[data-all]', box).addEventListener('click', (e) => { showAll = !showAll; e.currentTarget.setAttribute('aria-expanded', showAll); listSec.classList.toggle('all', showAll); });
    $('[data-close]', box).addEventListener('click', () => closeModal(m));
    const ro = 'ResizeObserver' in window ? new ResizeObserver(fit) : null;
    const m = openModal(box, { opener, cls: 'modal-bg', closeOnBg: false, focus: '[data-do]', onClose: () => { stopPlay(); if (ro) ro.disconnect(); window.removeEventListener('resize', fit); } });
    draw();
    if (ro) ro.observe(stage); window.addEventListener('resize', fit);
  }

  /* ---------- службове ---------- */
  const live = document.createElement('div'); live.className = 'sr-only'; live.setAttribute('aria-live', 'polite'); document.body.appendChild(live);
  function announce(t) { live.textContent = ''; setTimeout(() => { live.textContent = t; }, 50); }

  $('#skip').addEventListener('click', (e) => { e.preventDefault(); const m = $('h1', app) || $('#main'); if (m) { m.setAttribute('tabindex', '-1'); m.focus(); } });
  document.documentElement.lang = LANG;
  header();
  window.addEventListener('hashchange', () => route());
  route();
  /* Для автоматичних перевірок */
  window.HCdebug = { search: (q) => search(q), setLang, stem };
})();
