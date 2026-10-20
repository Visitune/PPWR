/* PPWR WIKI — application (vanilla JS, file:// compatible) */
"use strict";

/* ---------------- helpers ---------------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g,
  c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const safeDecode = s => { try { return decodeURIComponent(s); } catch (e) { return s; } };
const norm = s => String(s || "").toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

const ICONS = {
  menu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
  ext: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
  star: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z"/></svg>',
  chev: '<span class="chev">▶</span>'
};

/* ---------------- i18n ---------------- */
const T = {
  fr: {
    appName: "Wiki PPWR", appSub: "Règlement (UE) 2025/40", searchPh: "Rechercher un article, un mot-clé…",
    home: "Accueil", tools: "Outils", related: "Textes liés", timeline: "Échéances réglementaires", register: "Vérifier un site de recyclage",
    actors: "Vues métiers", glossary: "Glossaire", acts: "Suivi des actes et normes",
    toc: "Sommaire", recitals: "Préambule — considérants", annexes: "Annexes",
    officialText: "Texte officiel sur EUR-Lex", pdf: "PDF",
    prev: "Précédent", next: "Suivant", favorites: "Favoris", noFav: "Aucun favori pour l'instant.",
    results: "Résultats", noResults: "Aucun résultat", searchInDoc: "dans le texte",
    chapters: "chapitres", articles: "articles", annexesN: "annexes", recitalsN: "considérants",
    statusAdopted: "Adopté", statusInprogress: "En cours", statusExpected: "Attendu", statusReview: "À vérifier",
    dueBy: "Échéance", baseArticle: "Article de base", type: "Type", note: "Note", source: "Source officielle",
    dutiesOf: "Obligations clés", backToActors: "Toutes les vues métiers",
    quickAccess: "Accès rapide", keyDates: "Dates clés", repealedNote: "Directive abrogée par le règlement 2025/40 — conservée ici à titre de référence et de comparatif.",
    actsDisclaimer: "Suivi éditorial indicatif (vérification : 20 octobre 2026). La date d'adoption d'un acte et sa date d'application peuvent différer ; la source officielle fait foi.",
    guidance: "Lire les orientations officielles de la Commission", faq: "Consulter la FAQ officielle (août 2026)",
    heroTitle: "PPWR — le wiki du paquet européen emballages",
    heroSub: "Naviguez dans l'intégralité du règlement (UE) 2025/40 relatif aux emballages et aux déchets d'emballages, ainsi que les textes liés. Textes officiels complets, échéances, obligations par métier."
  },
  en: {
    appName: "PPWR Wiki", appSub: "Regulation (EU) 2025/40", searchPh: "Search an article, keyword…",
    home: "Home", tools: "Tools", related: "Related texts", timeline: "Regulatory deadlines", register: "Check a recycling site",
    actors: "Business views", glossary: "Glossary", acts: "Acts and standards tracker",
    toc: "Table of contents", recitals: "Preamble — recitals", annexes: "Annexes",
    officialText: "Official text on EUR-Lex", pdf: "PDF",
    prev: "Previous", next: "Next", favorites: "Favourites", noFav: "No favourites yet.",
    results: "Results", noResults: "No results", searchInDoc: "in the text",
    chapters: "chapters", articles: "articles", annexesN: "annexes", recitalsN: "recitals",
    statusAdopted: "Adopted", statusInprogress: "In progress", statusExpected: "Expected", statusReview: "To verify",
    dueBy: "Due", baseArticle: "Base article", type: "Type", note: "Note", source: "Official source",
    dutiesOf: "Key obligations", backToActors: "All business views",
    quickAccess: "Quick access", keyDates: "Key dates", repealedNote: "Directive repealed by Regulation 2025/40 — kept here for reference and comparison.",
    actsDisclaimer: "Indicative editorial tracker (checked: 20 October 2026). An act's adoption date and application date may differ; the official source prevails.",
    guidance: "Read the Commission’s official guidance", faq: "Open the official FAQ (August 2026)",
    heroTitle: "EU Packaging Regulation — the PPWR wiki",
    heroSub: "Browse the full text of Regulation (EU) 2025/40 on packaging and packaging waste, plus related texts. Complete official texts, deadlines, duties per business role."
  }
};
const DOC_LABELS = {
  fr: { ppwr: "Règlement (UE) 2025/40 — PPWR", sup: "Directive (UE) 2019/904 — SUP", d94: "Directive 94/62/CE (abrogée)" },
  en: { ppwr: "Regulation (EU) 2025/40 — PPWR", sup: "Directive (EU) 2019/904 — SUP", d94: "Directive 94/62/EC (repealed)" }
};

/* ---------------- data access ---------------- */
function getDoc(key, lang) {
  if (key === "ppwr") return window.PPWR_DATA && window.PPWR_DATA[lang];
  const arr = (window.PPWR_RELATED && window.PPWR_RELATED[lang]) || [];
  return arr.find(d => d.kind === key);
}
function allArticles(doc) {
  const out = [];
  doc.chapters.forEach(c => c.articles.forEach(a => out.push({ ch: c, art: a })));
  return out;
}
function flatSeq(doc) {
  const seq = [];
  allArticles(doc).forEach(x => seq.push({ type: "art", id: x.art.id, num: x.art.num, title: x.art.title }));
  doc.annexes.forEach(a => seq.push({ type: "anx", id: a.id, num: a.num, title: a.title }));
  return seq;
}

/* ---------------- favorites ---------------- */
function storageGet(key, fallback = "") { try { return localStorage.getItem(key) ?? fallback; } catch (e) { return fallback; } }
function storageSet(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* private browsing / blocked storage */ } }
function favGet() { try { return JSON.parse(storageGet("ppwrwiki_fav", "{}")) || {}; } catch (e) { return {}; } }
function favToggle(key, meta) {
  const f = favGet();
  if (f[key]) delete f[key]; else f[key] = meta;
  storageSet("ppwrwiki_fav", JSON.stringify(f));
}
function favHas(key) { return !!favGet()[key]; }

/* ---------------- router ---------------- */
let state = { lang: "fr", view: "home", doc: null, item: null };
function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  const seg = h.split("/").filter(Boolean);
  let lang = seg[0] && /^[a-z]{2}$/.test(seg[0]) ? seg[0] : (storageGet("ppwrwiki_lang", "fr") || "fr");
  if (!T[lang]) lang = "fr";
  const view = seg[1] || "home";
  return { lang, view, p1: safeDecode(seg[2] || ""), p2: safeDecode(seg[3] || "") };
}

/* ---------------- linkify legal cross-references ---------------- */
function linkify(html, lang, curDoc = "ppwr") {
  const parts = String(html).split(/(<[^>]*>)/);
  const wordArt = lang === "fr" ? "article" : "article";
  const wordAnn = lang === "fr" ? "annexe" : "annex";
  const doc = getDoc(curDoc, lang) || getDoc("ppwr", lang);
  const artIds = new Set(allArticles(doc).map(x => x.art.id));
  const anxIds = new Set(doc.annexes.map(a => a.id.toLowerCase()));
  const ROMAN = "[IVXLCDM]+";
  const reArt = new RegExp("\\b(" + wordArt + "x?\\s+)(\\d{1,3})(\\s+(?:à|to|et|and)\\s+\\d{1,3})?(\\s+(?:bis|ter))?\\b", "gi");
  const reAnx = new RegExp("\\b(" + wordAnn + "x?\\s+)(" + ROMAN + ")\\b", "gi");
  return parts.map(p => {
    if (p.startsWith("<")) return p;
    p = p.replace(reArt, (m, pre, n, range, bis) => {
      const id = "art_" + parseInt(n, 10);
      if (!artIds.has(id)) return m;
      const tail = (range || "") + (bis || "");
      return pre + '<a href="#/' + lang + '/doc/' + curDoc + '/' + id + '" class="xref">' + n + "</a>" + tail;
    });
    p = p.replace(reAnx, (m, pre, rom) => {
      const id = "anx_" + rom.toUpperCase();
      if (!anxIds.has(id.toLowerCase())) return m;
      return pre + '<a href="#/' + lang + '/doc/' + curDoc + '/' + id + '" class="xref">' + rom + "</a>";
    });
    return p;
  }).join("");
}

/* ---------------- sidebar ---------------- */
function buildSidebar(route) {
  const L = T[route.lang];
  const sb = $("#sb-nav");
  const cur = route.lang + "/" + route.view + "/" + route.p1 + "/" + route.p2;
  const link = (label, href, match) =>
    '<a class="tree-link' + (cur === match ? " active" : "") + '" href="' + href + '">' + esc(label) + "</a>";

  function docTree(key, label) {
    const doc = getDoc(key, route.lang);
    if (!doc) return "";
    let h = '<div class="tree-item"><button class="tree-btn" aria-expanded="false">' + esc(label) + ICONS.chev + "</button><div class=\"tree-sub\">";
    h += link(L.toc, "#/" + route.lang + "/doc/" + key + "/toc", route.lang + "/doc/" + key + "/toc//");
    h += link(L.recitals, "#/" + route.lang + "/doc/" + key + "/recitals", route.lang + "/doc/" + key + "/recitals//");
    doc.chapters.forEach((c, ci) => {
      if (!c.articles.length && !c.label && !c.title) return;
      let sub = '<div class="tree-item"><button class="tree-btn" aria-expanded="false">' +
        esc(c.label ? c.label + " — " : "") + esc(c.title || ("[" + (ci + 1) + "]")) + ICONS.chev +
        '</button><div class="tree-sub">';
      c.articles.forEach(a => {
        const match = route.lang + "/doc/" + key + "/" + a.id + "//";
        sub += link((a.num || a.id) + (a.title ? " · " + a.title : ""), "#/" + route.lang + "/doc/" + key + "/" + a.id, match);
      });
      sub += "</div></div>";
      h += sub;
    });
    if (doc.annexes.length) {
      h += '<div class="tree-item"><button class="tree-btn" aria-expanded="false">' + esc(L.annexes) + ICONS.chev + '</button><div class="tree-sub">';
      doc.annexes.forEach(a => {
        const name = (a.num || a.id) + (a.title ? " · " + a.title : "");
        h += link(name, "#/" + route.lang + "/doc/" + key + "/" + a.id, route.lang + "/doc/" + key + "/" + a.id + "//");
      });
      h += "</div></div>";
    }
    return h + "</div></div>";
  }

  function toolTree() {
    const meta = window.PPWR_META[route.lang];
    let h = '<div class="tree-item"><button class="tree-btn" aria-expanded="false">' + esc(L.tools) + ICONS.chev + '</button><div class="tree-sub">';
    h += link(L.timeline, "#/" + route.lang + "/timeline", route.lang + "/timeline///");
    h += '<div class="tree-item"><button class="tree-btn" aria-expanded="false">' + esc(L.actors) + ICONS.chev + '</button><div class="tree-sub">';
    meta.actors.forEach(a => {
      h += link(a.name, "#/" + route.lang + "/actor/" + a.id, route.lang + "/actor/" + a.id + "//");
    });
    h += "</div></div>";
    h += link(L.glossary, "#/" + route.lang + "/glossary", route.lang + "/glossary///");
    h += link(L.register, "#/" + route.lang + "/register", route.lang + "/register///");
    h += link(L.acts, "#/" + route.lang + "/acts", route.lang + "/acts///");
    return h + "</div></div>";
  }

  const fav = favGet();
  const favKeys = Object.keys(fav);

  let h = "";
  h += link(L.home, "#/" + route.lang + "/home", route.lang + "/home///");
  h += '<div class="tree-group-label">' + esc(DOC_LABELS[route.lang].ppwr) + "</div>";
  h += docTree("ppwr", DOC_LABELS[route.lang].ppwr);
  h += '<div class="tree-group-label">' + esc(L.related) + "</div>";
  h += docTree("sup", DOC_LABELS[route.lang].sup);
  h += docTree("d94", DOC_LABELS[route.lang].d94);
  h += '<div class="tree-group-label">' + esc(L.tools) + "</div>";
  h += toolTree();
  if (favKeys.length) {
    h += '<div class="tree-group-label">★ ' + esc(L.favorites) + "</div>";
    favKeys.forEach(k => {
      const segs = k.split("|");
      const dk = segs[0], idk = segs[1];
      h += link(fav[k].t || idk, "#/" + route.lang + "/doc/" + dk + "/" + idk, "__fav_" + k);
    });
  }
  sb.innerHTML = h;

  // expandable behavior
  $$(".tree-btn", sb).forEach(btn => {
    btn.addEventListener("click", () => {
      const open = btn.parentElement.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  });
  // auto-open path to current item
  const act = $(".tree-link.active", sb);
  if (act) {
    let node = act.parentElement;
    while (node && node.classList) {
      if (node.classList.contains("tree-item")) {
        node.classList.add("open");
        const button = $(".tree-btn", node);
        if (button) button.setAttribute("aria-expanded", "true");
      }
      node = node.parentElement;
    }
  }
}

/* ---------------- views ---------------- */
function vHome(r) {
  const L = T[r.lang], meta = window.PPWR_META[r.lang], doc = getDoc("ppwr", r.lang);
  const nArt = allArticles(doc).length;
  const upcoming = meta.timeline.filter(t => new Date(t.date) >= new Date()).slice(0, 3);
  const pastOrNext = upcoming.length ? upcoming : meta.timeline.slice(-3);
  return `
  <section class="hero">
    <h1>${esc(L.heroTitle)}</h1>
    <p>${esc(L.heroSub)}</p>
    <div class="chips">
      <span class="chip">CELEX 32025R0040</span>
      <span class="chip">${r.lang === "fr" ? "Applicable" : "Applies"} : 12/08/2026</span>
      <span class="chip">FR · EN</span>
      <span class="chip">${r.lang === "fr" ? "Texte intégral" : "Full text"}</span>
    </div>
    <div class="hero-links"><a class="hero-link" target="_blank" rel="noopener" href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC03084">${ICONS.ext} ${esc(L.guidance)}</a><a class="hero-link" target="_blank" rel="noopener" href="https://environment.ec.europa.eu/publications/faq-packaging-and-packaging-waste-regulation-ppwr_en">${ICONS.ext} ${esc(L.faq)}</a></div>
  </section>
  <div class="grid cols-3">
    ${statCard(doc.chapters.length, L.chapters)}
    ${statCard(nArt, L.articles)}
    ${statCard(doc.annexes.length, L.annexesN)}
    ${statCard(doc.recitals.length, L.recitalsN)}
  </div>
  <h2 class="sec-title">${esc(L.quickAccess)}</h2>
  <div class="grid cols-2">
    ${actorCardsShort(r)}
  </div>
  <h2 class="sec-title">${esc(L.keyDates)}</h2>
  ${pastOrNext.map(tlItemHtml.bind(null, r)).join("")}`;
}
function statCard(n, lbl) {
  return `<div class="stat-card"><div class="stat-num">${n}</div><div class="stat-lbl">${esc(lbl)}</div></div>`;
}
function actorCardsShort(r) {
  const meta = window.PPWR_META[r.lang];
  return meta.actors.map(a => `
    <a class="actor-card" href="#/${r.lang}/actor/${a.id}">
      <div class="actor-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
      <div><div class="actor-name">${esc(a.name)}</div><div class="actor-sum">${esc(a.summary)}</div></div>
    </a>`).join("");
}
function tlItemHtml(r, t) {
  const L = T[r.lang];
  const items = (t.items || []).map(it =>
    `<li>${linkified(it[0], r)} <a class="xref" href="#/${r.lang}/doc/ppwr/${it[1]}">[${it[1].replace("art_", "art. ")}]</a></li>`).join("");
  const refs = (t.refs || []).map(x =>
    `<a class="badge blue" style="text-decoration:none;margin-right:6px" href="#/${r.lang}/doc/ppwr/${x}">${x.replace("art_", "art. ")}</a>`).join("");
  const d = t.date.split("-");
  return `<div class="tl-item${t.major ? " major" : ""}">
    <span class="tl-dot"></span>
    <div class="tl-date">${d[2]}/${d[1]}/${d[0]}</div>
    <div class="tl-card">
      <div class="tl-title">${esc(t.title)}</div>
      ${t.desc ? `<div class="tl-desc">${linkified(t.desc, r)}</div>` : ""}
      ${items ? `<ul class="tl-items">${items}</ul>` : ""}
      ${refs ? `<div style="margin-top:8px">${refs}</div>` : ""}
    </div></div>`;
}
function linkified(text, r) { return linkify(esc(text), r.lang); }

function vTimeline(r) {
  const L = T[r.lang];
  const items = window.PPWR_META[r.lang].timeline;
  return `<h2 class="sec-title">${esc(L.timeline)}</h2>
  <div class="card"><div class="card-body"><div class="tl">${items.map(t => tlItemHtml(r, t)).join("")}</div></div></div>`;
}

function vActors(r) {
  const L = T[r.lang];
  return `<h2 class="sec-title">${esc(L.actors)}</h2>
  <div class="grid cols-2">${actorCardsShort(r)}</div>`;
}
function vActor(r, id) {
  const L = T[r.lang], meta = window.PPWR_META[r.lang];
  const a = meta.actors.find(x => x.id === id);
  if (!a) return emptyView();
  const duties = a.duties.map(d => `<div class="duty"><span class="duty-ref"><a class="badge gray" style="text-decoration:none" href="#/${r.lang}/doc/ppwr/${d[1]}">${d[1].replace("art_", "art. ")}</a></span><span>${linkify(esc(d[0]), r.lang)}</span></div>`).join("");
  return `<div class="crumbs-page"><a href="#/${r.lang}/actors">${esc(L.backToActors)}</a></div>
  <h2 class="sec-title">${esc(a.name)}</h2>
  <div class="card"><div class="card-head"><span class="badge blue">${esc(L.dutiesOf)}</span></div>
  <div class="card-body">${duties}</div></div>`;
}

function vGlossary(r) {
  const L = T[r.lang], g = window.PPWR_META[r.lang].glossary;
  return `<h2 class="sec-title">${esc(L.glossary)}</h2>
  <div class="grid cols-2">${g.map(x => `
    <div class="card" style="margin:0"><div class="card-body" style="padding:16px 18px">
      <div class="gloss-term">${esc(x[0])}</div>
      <div class="gloss-def">${linkify(esc(x[1]), r.lang)}</div>
      <div style="margin-top:8px"><a class="badge gray" style="text-decoration:none" href="#/${r.lang}/doc/ppwr/${x[2]}">${x[2].replace("art_", "art. ")}</a></div>
    </div></div>`).join("")}</div>`;
}

function vRegister(r) {
  const fr = r.lang === "fr";
  const official = "https://food.ec.europa.eu/food-safety/chemical-safety/food-contact-materials/plastic-recycling_en";
  const fip = "https://ec.europa.eu/food/food-feed-portal/screen/home";
  return `<section class="register-hero">
    <span class="badge blue">${fr ? "Registre de l'Union — règlement (UE) 2022/1616" : "Union Register — Regulation (EU) 2022/1616"}</span>
    <h1>${fr ? "Vérifier un site de recyclage plastique" : "Check a plastic recycling site"}</h1>
    <p>${fr ? "Utilisez le numéro officiel publié par la Commission pour retrouver un opérateur, une installation ou un site de recyclage. Cet outil contrôle le format puis vous dirige vers la source officielle." : "Use the official number published by the Commission to find an operator, facility or recycling installation. This tool checks the format and then directs you to the official source."}</p>
  </section>
  <div class="register-notice">
    <strong>${fr ? "État du registre au 20 octobre 2026" : "Register status on 20 October 2026"}</strong>
    <span>${fr ? "La Commission indique que la liste publique reste en ligne, mais que les données sont gelées depuis le 11 septembre 2026 pendant une migration. Le résultat final doit donc toujours être confirmé directement dans le portail FIP." : "The Commission says that the public list remains online, but data has been frozen since 11 September 2026 during a migration. The final result must therefore always be confirmed directly in the FIP portal."}</span>
  </div>
  <div class="card register-card"><div class="card-body">
    <form id="registerForm" novalidate>
      <div class="register-grid">
        <label><span>${fr ? "Type de référence" : "Reference type"}</span>
          <select id="registerType">
            <option value="ron">RON — ${fr ? "opérateur de recyclage" : "recycling operator"}</option>
            <option value="rfn">RFN — ${fr ? "installation/facilité de recyclage" : "recycling facility"}</option>
            <option value="rin">RIN — ${fr ? "installation de recyclage" : "recycling installation"}</option>
          </select>
        </label>
        <label><span>${fr ? "Référence officielle (9 caractères)" : "Official reference (9 characters)"}</span>
          <input id="registerNumber" inputmode="text" autocomplete="off" placeholder="Ex. AE67-HE3FU" maxlength="17" required>
        </label>
      </div>
      <div class="register-actions">
        <button class="btn-primary" type="submit">${fr ? "Vérifier dans le registre officiel" : "Check the official register"}</button>
        <a class="extlink" target="_blank" rel="noopener" href="${fip}">${ICONS.ext} ${fr ? "Ouvrir le portail FIP" : "Open the FIP portal"}</a>
      </div>
      <p id="registerMessage" class="register-message" role="status" aria-live="polite"></p>
    </form>
  </div></div>
  <div id="registerResult" class="register-result" hidden></div>
  <div class="grid cols-2 register-links">
    <div class="card"><div class="card-body"><h3>${fr ? "Comment lire le résultat" : "How to read the result"}</h3><p>${fr ? "Une référence valide respecte le format à 9 caractères alphanumériques. Seule la fiche officielle du FIP permet ensuite de confirmer le nom, le pays, le statut et les éventuelles installations liées." : "A valid reference follows the 9-character alphanumeric format. Only the official FIP record can then confirm the name, country, status and any linked facilities."}</p></div></div>
    <div class="card"><div class="card-body"><h3>${fr ? "Sources réglementaires" : "Regulatory sources"}</h3><p><a class="extlink" target="_blank" rel="noopener" href="${official}">${ICONS.ext} ${fr ? "Page de la Commission sur le recyclage plastique" : "Commission plastic recycling page"}</a></p></div></div>
  </div>`;
}

let REGISTER_INDEX_PROMISE = null;
function loadRegisterIndex() {
  if (!REGISTER_INDEX_PROMISE) REGISTER_INDEX_PROMISE = fetch("data/register-index.json", { cache: "no-store" }).then(res => {
    if (!res.ok) throw new Error("register index unavailable");
    return res.json();
  });
  return REGISTER_INDEX_PROMISE;
}

function bindRegister(r) {
  const form = $("#registerForm");
  if (!form) return;
  const input = $("#registerNumber"), type = $("#registerType"), message = $("#registerMessage"), result = $("#registerResult");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const raw = input.value.trim();
    const number = raw.replace(/[\s-]/g, "").toUpperCase();
    const fr = r.lang === "fr";
    if (!/^[A-Z0-9]{9}$/.test(number)) {
      message.className = "register-message error";
      message.textContent = fr ? "Format non valide : saisissez exactement 9 caractères alphanumériques (les espaces et tirets sont ignorés)." : "Invalid format: enter exactly 9 alphanumeric characters (spaces and hyphens are ignored).";
      result.hidden = true;
      input.focus();
      return;
    }
    const kind = type.value.toUpperCase();
    const labels = { RON: fr ? "opérateur" : "operator", RFN: fr ? "installation/facilité" : "facility", RIN: fr ? "installation" : "installation" };
    const urls = { RON: "https://ec.europa.eu/food/food-feed-portal/screen/fcm/ron", RFN: "https://ec.europa.eu/food/food-feed-portal/screen/fcm/rfn", RIN: "https://ec.europa.eu/food/food-feed-portal/screen/fcm/rin" };
    message.className = "register-message";
    message.textContent = fr ? "Recherche dans l’index du registre officiel…" : "Searching the official register index…";
    result.hidden = true;
    try {
      const index = await loadRegisterIndex();
      const entry = (index.entries || []).find(x => x.type === kind && String(x.id).toUpperCase() === number);
      result.hidden = false;
      if (entry) {
        const fields = entry.fields || {};
        const name = fields.fcmCompanyName || fields.fcmRecyclingFacilityName || fields.fcmRecyclingInstallationName || "";
        const country = fields.fcmHoCountryName || fields.fcmRfCountry || "";
        message.className = "register-message success";
        message.textContent = fr ? "Référence trouvée dans l’index officiel." : "Reference found in the official index.";
        result.innerHTML = `<strong>${fr ? `Référence ${kind} trouvée : ${esc(number)}` : `${kind} reference found: ${esc(number)}`}</strong><p>${esc([name, country].filter(Boolean).join(" · ") || (fr ? "La fiche existe dans le registre." : "The record exists in the register."))}</p><small>${fr ? `Index synchronisé le ${esc(index.generatedAt || "")}. Vérifiez la fiche FIP pour le détail complet.` : `Index synchronised on ${esc(index.generatedAt || "")}. Open FIP for full details.`}</small><p><a class="btn-primary" target="_blank" rel="noopener" href="${urls[kind]}">${ICONS.ext} ${fr ? "Ouvrir la fiche officielle" : "Open the official record"}</a></p>`;
      } else {
        message.className = "register-message error";
        message.textContent = fr ? "Référence non trouvée dans l’index public synchronisé." : "Reference not found in the synchronised public index.";
        result.innerHTML = `<strong>${fr ? "Aucun résultat correspondant" : "No matching result"}</strong><p>${fr ? `Aucune référence ${kind} correspondant à ${esc(number)} n’a été trouvée dans la copie publique synchronisée.` : `No ${kind} reference matching ${esc(number)} was found in the synchronised public copy.`}</p><a class="btn-primary" target="_blank" rel="noopener" href="${urls[kind]}">${ICONS.ext} ${fr ? "Contrôler directement dans le FIP" : "Check directly in FIP"}</a>`;
      }
    } catch (err) {
      message.className = "register-message error";
      message.textContent = fr ? "Vérification indisponible : l’index officiel n’est pas accessible." : "Verification unavailable: the official index cannot be reached.";
      result.hidden = false;
      result.innerHTML = `<strong>${fr ? "Aucune conclusion possible" : "No conclusion possible"}</strong><p>${fr ? "Le format est valide, mais cela ne prouve pas l’enregistrement. Consultez directement le portail officiel." : "The format is valid, but this does not prove registration. Check the official portal directly."}</p><a class="btn-primary" target="_blank" rel="noopener" href="${urls[kind]}">${ICONS.ext} ${fr ? "Ouvrir le FIP" : "Open FIP"}</a>`;
    }
  });
}

function vActs(r) {
  const L = T[r.lang], acts = window.PPWR_META[r.lang].acts;
  const badge = s => s === "adopted" ? '<span class="badge green">' + esc(L.statusAdopted) + "</span>"
    : s === "inprogress" ? '<span class="badge amber">' + esc(L.statusInprogress) + "</span>"
      : s === "review" ? '<span class="badge red">' + esc(L.statusReview) + "</span>"
        : '<span class="badge gray">' + esc(L.statusExpected) + "</span>";
  return `<h2 class="sec-title">${esc(L.acts)}</h2>
  <p style="color:var(--text-2);font-size:13px;margin-bottom:14px">${esc(L.actsDisclaimer)}</p>
  ${acts.map(a => `<div class="card"><div class="card-body" style="padding:16px 20px">
    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      <b>${esc(a.topic)}</b> ${badge(a.status)}
    </div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:12.5px;color:var(--text-2);margin-top:8px">
      <span>${esc(L.type)} : <b>${esc(a.type)}</b></span>
      ${a.due ? `<span>${esc(L.dueBy)} : <b>${a.due.split("-").reverse().join("/")}</b></span>` : ""}
      <span>${esc(L.baseArticle)} : <a href="#/${r.lang}/doc/ppwr/${a.base}">${a.base.replace("art_", "art. ")}</a></span>
    </div>
     <div style="font-size:13px;color:var(--text-2);margin-top:6px">${esc(a.note)}</div>
     ${a.source ? `<a class="extlink" target="_blank" rel="noopener" href="${esc(a.source)}">${ICONS.ext} ${esc(L.source)}</a>` : ""}
  </div></div>`).join("")}`;
}

function vToc(r, key) {
  const doc = getDoc(key, r.lang), L = T[r.lang];
  const head = docHead(r, key, doc, L.toc);
  let body = "";
  doc.chapters.forEach(c => {
    body += `<h2 class="sec-title">${esc(c.label)}${c.title ? " — " + esc(c.title) : ""}</h2>`;
    c.sections.forEach(s => { if (s.label || s.title) body += `<div style="color:var(--text-muted);font-size:12px;text-transform:uppercase;letter-spacing:.08em;margin:10px 0 2px">${esc(s.label)} ${esc(s.title)}</div>`; });
    c.articles.forEach(a => {
      body += `<div class="card" style="margin-bottom:10px"><a style="text-decoration:none;color:inherit" href="#/${r.lang}/doc/${key}/${a.id}">
      <div class="card-body" style="padding:12px 18px;display:flex;gap:10px;align-items:baseline">
        <span class="art-num" style="white-space:nowrap">${esc(a.num || a.id)}</span>
        <span style="font-weight:600">${esc(a.title || "")}</span>
      </div></a></div>`;
    });
  });
  if (doc.annexes.length) {
    body += `<h2 class="sec-title">${esc(L.annexes)}</h2>`;
    doc.annexes.forEach(a => {
      body += `<div class="card" style="margin-bottom:10px"><a style="text-decoration:none;color:inherit" href="#/${r.lang}/doc/${key}/${a.id}">
      <div class="card-body" style="padding:12px 18px;display:flex;gap:10px;align-items:baseline">
        <span class="art-num" style="white-space:nowrap">${esc(a.num || a.id)}</span>
        <span style="font-weight:600">${esc(a.title || "")}</span>
      </div></a></div>`;
    });
  }
  return head + body;
}

function vRecitals(r, key) {
  const doc = getDoc(key, r.lang), L = T[r.lang];
  const head = docHead(r, key, doc, L.recitals);
  const list = doc.recitals.map(rc =>
    `<div class="recital"><span class="recital-n">${esc(rc.n)}</span><div>${linkify(rc.html, r.lang, key)}</div></div>`).join("");
  return head + `<div class="card"><div class="card-body">${list}</div></div>`;
}

function docHead(r, key, doc, crumbLabel) {
  const L = T[r.lang];
  const note = key === "d94" ? `<p style="color:var(--ifs-coral);font-size:13px;margin-top:8px">${esc(L.repealedNote)}</p>` : "";
  return `<div class="card"><div class="card-body">
    <div class="doc-meta">
      <span class="badge blue">${esc(DOC_LABELS[r.lang][key])}</span>
      <span class="badge gray">CELEX ${esc(doc.celex)}</span>
      <a class="extlink" target="_blank" rel="noopener" href="${esc(doc.url)}">${ICONS.ext} ${esc(L.officialText)}</a>
      <a class="extlink" target="_blank" rel="noopener" href="${esc(doc.pdf)}">${ICONS.ext} PDF</a>
    </div>
    <h1 style="font-size:19px;font-weight:800;margin-top:10px;line-height:1.35">${esc(doc.title)}</h1>
    ${note}
  </div></div>`;
}

function vItem(r, key, id) {
  const doc = getDoc(key, r.lang), L = T[r.lang];
  const isAnx = /^anx/i.test(id);
  if (id === "toc") return vToc(r, key);
  if (id === "recitals") return vRecitals(r, key);
  const seq = flatSeq(doc);
  const idx = seq.findIndex(s => s.id.toLowerCase() === id.toLowerCase());
  if (idx < 0) return emptyView();
  const cur = seq[idx];
  const prev = seq[idx - 1], next = seq[idx + 1];

  let inner = "", title = "", subtitle = "";
  if (cur.type === "art") {
    const found = (() => {
      for (const c of doc.chapters) { const a = c.articles.find(x => x.id === cur.id); if (a) return { a, c }; }
      return {};
    })();
    const a = found.a || {}, ch = found.c || {};
    title = a.num || cur.id; subtitle = a.title || "";
    inner = (a.blocks || []).map(b => b.t === "note"
      ? `<div class="oj-note-block">${linkify(b.html, r.lang, key)}</div>`
      : `<div class="prov">${linkify(b.html, r.lang, key)}</div>`).join("")
      || `<div class="empty">${esc("(—)")}</div>`;
    if (ch.label || ch.title) {
      inner = `<div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px">${esc(ch.label)} ${esc(ch.title)}</div>` + inner;
    }
    if (a.section) {
      inner = `<div style="font-size:12px;color:var(--ifs-purple);margin-bottom:4px">${esc(a.section)}</div>` + inner;
    }
  } else {
    const a = doc.annexes.find(x => x.id === cur.id) || {};
    title = a.num || cur.id; subtitle = a.title || "";
    inner = `<div class="prov">${linkify(a.html || "", r.lang)}</div>`;
  }

  const favKey = key + "|" + cur.id;
  const starred = favHas(favKey);
  const pager = (prev || next) ? `<div class="pager">
    ${prev ? `<a href="#/${r.lang}/doc/${key}/${prev.id}"><div class="dir">◀ ${esc(L.prev)}</div><div class="lbl">${esc(prev.num)} ${esc(prev.title || "")}</div></a>` : "<span></span>"}
    ${next ? `<a class="next" href="#/${r.lang}/doc/${key}/${next.id}"><div class="dir">${esc(L.next)} ▶</div><div class="lbl">${esc(next.num)} ${esc(next.title || "")}</div></a>` : ""}
  </div>` : "";

  return `${docHead(r, key, doc, title)}
  <div class="card"><div class="card-head">
    <h2><span class="art-num">${esc(title)}</span> ${esc(subtitle)}</h2>
    <span class="topbar-spacer"></span>
    <button class="icon-btn" id="favBtn" title="${esc(L.favorites)}" style="${starred ? "color:var(--ifs-amber);border-color:var(--ifs-amber)" : ""}">${ICONS.star}</button>
  </div>
  <div class="card-body" id="itemBody">${inner}</div></div>
  ${pager}`;
}

function emptyView() { return '<div class="empty">404</div>'; }

/* ---------------- search ---------------- */
let INDEX = { lang: null, entries: [] };
function buildIndex(lang) {
  if (INDEX.lang === lang) return INDEX.entries;
  const entries = [];
  const push = (docKey, type, id, label, html) => {
    const text = norm(String(html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " "));
    entries.push({ docKey, type, id, label, text });
  };
  ["ppwr", "sup", "d94"].forEach(k => {
    const doc = getDoc(k, lang);
    if (!doc) return;
    allArticles(doc).forEach(({ art }) =>
      push(k, "art", art.id, (art.num || art.id) + (art.title ? " · " + art.title : ""),
        (art.num + " " + art.title + " " + (art.blocks || []).map(b => b.html).join(" "))));
    doc.annexes.forEach(a => push(k, "anx", a.id, (a.num || a.id) + " · " + (a.title || ""), a.num + " " + a.title + " " + (a.html || "")));
    doc.recitals.forEach(rc => push(k, "rec", rc.n, DOC_LABELS[lang][k] + " — considérant/recital " + rc.n, rc.html));
  });
  window.PPWR_META[lang].glossary.forEach(g =>
    entries.push({ docKey: "_meta", type: "gloss", id: g[2], label: "📖 " + g[0], text: norm(g[0] + " " + g[1]) }));
  INDEX = { lang, entries };
  return entries;
}
function doSearch(q, lang) {
  q = norm(q).trim();
  const panel = $("#searchPanel");
  if (q.length < 2) { panel.hidden = true; panel.innerHTML = ""; $("#q").setAttribute("aria-expanded", "false"); return; }
  const entries = buildIndex(lang);
  const scored = [];
  for (const e of entries) {
    const idx = e.text.indexOf(q);
    if (idx >= 0) scored.push({ e, pos: idx, count: e.text.split(q).length - 1 });
    else {
      const words = q.split(/\s+/).filter(Boolean);
      if (words.length > 1 && words.every(w => e.text.includes(w)))
        scored.push({ e, pos: e.text.indexOf(words[0]), count: 1 });
    }
  }
  scored.sort((a, b) => (b.e.label.startsWith("📖") - a.e.label.startsWith("📖")) || b.count - a.count || a.pos - b.pos);
  const top = scored.slice(0, 25);
  const L = T[lang];
  panel.innerHTML = top.length
    ? `<div class="tree-group-label" style="padding:6px 10px 2px">${top.length} ${esc(L.results)}</div>` + top.map(s => {
      const snippet = s.e.text.substr(Math.max(0, s.pos - 60), 150);
      const hl = esc(snippet).replace(new RegExp("(" + q.split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi"), "<mark>$1</mark>");
      const href = s.e.docKey === "_meta"
        ? "#/" + lang + "/glossary"
        : "#/" + lang + "/doc/" + s.e.docKey + "/" + (s.e.type === "rec" ? "recitals" : s.e.id);
      return `<a class="search-hit" role="option" href="${href}" onclick="document.getElementById('searchPanel').hidden=true">
        <div style="font-weight:700;font-size:13px">${hlMark(esc(s.e.label), q)}</div>
        <div style="font-size:12px;color:var(--text-muted);overflow:hidden;max-height:34px">…${hl}…</div></a>`;
    }).join("")
    : `<div style="padding:14px;color:var(--text-muted);font-size:13px">${esc(L.noResults)}</div>`;
  panel.hidden = false;
  $("#q").setAttribute("aria-expanded", "true");
}
function hlMark(label, q) {
  const w = q.split(/\s+/)[0];
  if (!w) return label;
  return label.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>");
}

/* ---------------- render root ---------------- */
function render() {
  const r = parseHash();
  state = { ...state, ...r };
  storageSet("ppwrwiki_lang", r.lang);
  const theme = storageGet("ppwrwiki_theme", "light") || "light";
  document.documentElement.setAttribute("data-theme", theme);

  $("#sb-appname").textContent = T[r.lang].appName;
  $("#sb-appsub").textContent = T[r.lang].appSub;
  $("#q").placeholder = T[r.lang].searchPh;
  $("#btnFr").classList.toggle("on", r.lang === "fr");
  $("#btnEn").classList.toggle("on", r.lang === "en");
  $("#btnFr").setAttribute("aria-pressed", r.lang === "fr");
  $("#btnEn").setAttribute("aria-pressed", r.lang === "en");
  $("#btnTheme").setAttribute("aria-label", theme === "dark" ? (r.lang === "fr" ? "Activer le thème clair" : "Use light theme") : (r.lang === "fr" ? "Activer le thème sombre" : "Use dark theme"));

  let html = "";
  switch (r.view) {
    case "timeline": html = vTimeline(r); break;
    case "actors": html = vActors(r); break;
    case "actor": html = vActor(r, r.p1); break;
    case "glossary": html = vGlossary(r); break;
    case "register": html = vRegister(r); break;
    case "acts": html = vActs(r); break;
    case "doc": html = vItem(r, r.p1, r.p2 || "toc"); break;
    default: html = vHome(r);
  }
  const content = $("#content");
  content.innerHTML = html;
  content.scrollTop = 0;
  window.scrollTo(0, 0);

  // crumbs
  const crumbs = [`<a href="#/${r.lang}/home">${esc(T[r.lang].home)}</a>`];
  if (r.view === "doc" && r.p1) {
    crumbs.push(`<a href="#/${r.lang}/doc/${r.p1}/toc">${esc(DOC_LABELS[r.lang][r.p1] || r.p1)}</a>`);
    if (r.p2 && r.p2 !== "toc") {
      const doc = getDoc(r.p1, r.lang);
      const seq = flatSeq(doc);
      const it = seq.find(s => s.id.toLowerCase() === r.p2.toLowerCase());
      if (it) crumbs.push(`<b>${esc(it.num || it.id)}${it.title ? " · " + esc(it.title) : ""}</b>`);
    }
  } else if (r.view !== "home") {
    const lbl = { timeline: T[r.lang].timeline, actors: T[r.lang].actors, actor: T[r.lang].actors, glossary: T[r.lang].glossary, register: T[r.lang].register, acts: T[r.lang].acts }[r.view];
    crumbs.push(`<b>${esc(lbl || r.view)}</b>`);
  }
  $("#crumbs").innerHTML = crumbs.join('<span>›</span>');

  buildSidebar(r);
  if (r.view === "register") bindRegister(r);

  // favorite button binding
  const fb = $("#favBtn");
  if (fb) {
    fb.addEventListener("click", () => {
      const doc = r.p1, id = r.p2;
      const seq = flatSeq(getDoc(doc, r.lang));
      const it = seq.find(s => s.id.toLowerCase() === id.toLowerCase());
      favToggle(doc + "|" + id, { t: (it ? it.num + " " + (it.title || "") : id) });
      render();
    });
  }
  document.body.classList.remove("nav-open");
}

/* ---------------- boot ---------------- */
window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  $("#btnNav").innerHTML = ICONS.menu;
  const initialTheme = storageGet("ppwrwiki_theme", "light") || "light";
  $("#btnTheme").innerHTML = initialTheme === "dark" ? ICONS.sun : ICONS.moon;
  $("#btnTheme").addEventListener("click", () => {
    const cur = storageGet("ppwrwiki_theme", "light") || "light";
    const nxt = cur === "dark" ? "light" : "dark";
    storageSet("ppwrwiki_theme", nxt);
    document.documentElement.setAttribute("data-theme", nxt);
    $("#btnTheme").innerHTML = nxt === "dark" ? ICONS.sun : ICONS.moon;
  });
  $("#btnNav").addEventListener("click", () => {
    if (innerWidth <= 900) document.body.classList.toggle("nav-open");
    else document.body.classList.toggle("nav-collapsed");
  });
  $("#scrim").addEventListener("click", () => document.body.classList.remove("nav-open"));
  $("#btnFr").addEventListener("click", () => {
    const seg = location.hash.replace(/^#\//, "").split("/");
    seg[0] = "fr"; location.hash = "#/" + seg.join("/");
  });
  $("#btnEn").addEventListener("click", () => {
    const seg = location.hash.replace(/^#\//, "").split("/");
    seg[0] = "en"; location.hash = "#/" + seg.join("/");
  });
  $("#q").addEventListener("input", debounce(e => doSearch(e.target.value, parseHash().lang), 140));
  $("#q").addEventListener("keydown", e => {
    if (e.key === "Escape") { $("#q").value = ""; $("#searchPanel").hidden = true; $("#q").blur(); }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") document.body.classList.remove("nav-open");
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("#q").focus(); }
  });
  document.addEventListener("click", e => {
    if (!$("#searchWrap").contains(e.target)) {
      $("#searchPanel").hidden = true;
      $("#q").setAttribute("aria-expanded", "false");
    }
  });
  if (!location.hash) location.hash = "#/" + (storageGet("ppwrwiki_lang", "fr") || "fr") + "/home";
  render();
});
