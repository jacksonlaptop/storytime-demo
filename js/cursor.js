/* ============================================================================
   Joe's Journey — "Bubble (Expand)" custom cursor  (site-wide)

   A glowing dot + comet trail that expands into a bubble with contextual
   states — and, since v3, dressed to the site theme (html[data-jj-theme] from jj-score):
   medieval = a sword that shrinks into a gold ring · retro = pixel arrow / hand / starburst ·
   space = cyan dot with a moon in orbit that rides the ring on hover · special = the golden orb in its stone ring (idle / sparkle on hover / beam on press, purple flush). Self-contained: injects its own CSS + markup, hides the system
   cursor, and reacts to hovered elements via event DELEGATION (so it also
   works on buttons that are added to the page later, e.g. the contact orbs).

   IN WEBFLOW — Project Settings → Custom Code → Footer Code (loads on EVERY
   page), add ONLY:
     <script src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/cursor.js?v=13"></script>

   STATE TRIGGERS (add the attribute to any element):
     data-cursor="hover"     → plain expanding bubble (also automatic on <a>/<button>)
     data-cursor="external"  → bubble + ↗  (opens something off-site)
     data-cursor="page"      → the pack's page arrow →  (also automatic on links to another page; the storybook's right-hand page: next)
     data-cursor="prev"      → the same arrow, pointing left ←  (the storybook's left-hand page: back)
     data-cursor="drag"      → bubble + ••• (draggable / playful object)
     data-cursor="project"   → big bubble + "VIEW PROJECT" (case-study cards)
   ============================================================================ */
(function () {
  if (window.__jjCursor) return;                                   // init once
  window.__jjCursor = true;
  // site-footer.js ships a simpler dot cursor (#jj-cursor) — this one replaces it
  var legacy = document.getElementById('jj-cursor');
  if (legacy) legacy.remove();
  // touch / no-hover devices: leave the native cursor alone
  try { if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return; } catch (e) {}

  var GB = window.JJ_SCORE_BASE || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/';   // asset base (local preview overrides)
  var THEMES = ['classic', 'medieval', 'retro', 'alien', 'mixed'], STATES = ['home', 'external', 'page', 'project'];
  var ART = THEMES.map(function (t) {                       // cur-<theme>-<state>.webp — the ring/bubble with its icon already inside
    if (t === 'classic') return STATES.map(function (st) { return 'html[data-jj-cursor="classic"] .custom-cursor.is-' + st + ' .cursor-art{background-image:url("' + GB + 'cur-ico-' + st + '.webp");}'; }).join('') +
      /* the normal classic bubble stays exactly as it is — white 50% border, translucent black — with the icon dropped inside */
      'html[data-jj-cursor="classic"] .custom-cursor.is-art{background:rgba(0,0,0,.20)!important;border:2px solid rgba(255,255,255,.5)!important;box-shadow:0 0 28px rgba(141,125,255,.35)!important;}' +
      'html[data-jj-cursor="classic"] .cursor-art{width:24px;height:24px;margin:-12px 0 0 -12px;}' +
      'html[data-jj-cursor="classic"] .custom-cursor.is-art.is-project .cursor-art{display:none;}' +
      'html[data-jj-cursor="classic"] .custom-cursor.is-art.is-project .cursor-label{opacity:1!important;}';
    return STATES.map(function (st) { return 'html[data-jj-cursor="' + t + '"] .custom-cursor.is-' + st + ' .cursor-art{background-image:url("' + GB + 'cur-' + t + '-' + st + '.webp");}'; }).join('') +
      '';   // story / work are the two orbs below on every theme; change is a bare label (below)
  }).join('');
  var CSS = `
  body{cursor:none;}
  a,button,[data-cursor]{cursor:none;}
  input,textarea,select,[contenteditable="true"]{cursor:auto;}
  .custom-cursor{position:fixed;top:0;left:0;width:14px;height:14px;border-radius:999px;pointer-events:none;z-index:2147483647;transform:translate(-50%,-50%);background:#fff;border:2px solid #080d18;box-shadow:0 0 0 5px rgba(141,125,255,.28),0 0 22px rgba(141,125,255,.65);transition:width .22s ease,height .22s ease,background .22s ease,border .22s ease,box-shadow .22s ease;}
  .cursor-trail{position:fixed;top:0;left:0;width:44px;height:8px;border-radius:999px;pointer-events:none;z-index:2147483646;transform:translate(-50%,-50%);opacity:0;background:linear-gradient(90deg,rgba(141,125,255,0),rgba(141,125,255,.32),rgba(255,255,255,.5));filter:blur(6px);transition:opacity .18s ease;}
  .cursor-label{position:absolute;inset:0;z-index:1;display:flex;align-items:center;justify-content:center;color:#fff;font-size:8px;font-weight:700;line-height:1;text-align:center;text-transform:uppercase;opacity:0;transition:opacity .14s ease;}
  .custom-cursor.is-hovering{width:58px;height:58px;background:rgba(0,0,0,.20);border:2px solid rgba(255,255,255,.5);box-shadow:0 0 28px rgba(141,125,255,.35);-webkit-backdrop-filter:none;backdrop-filter:none;}   /* the click-to-begin glass, but you can always read the page through it */
  .custom-cursor .cursor-fill{position:absolute;inset:0;border-radius:inherit;background:rgba(0,0,0,.24);transform:scaleY(0);transform-origin:bottom center;transition:transform .4s cubic-bezier(.4,0,.2,1);pointer-events:none;}
  .custom-cursor.is-hovering .cursor-fill{transform:scaleY(1);}   /* fills up black while you hover, drains when you leave */
  html[data-jj-cursor]:not([data-jj-cursor="classic"]) .cursor-fill{display:none;}
  /* themed hover rings live on their own layer, so the ring fades and scales in with the box instead of popping (the rule: 50% fill, the page stays visible) */
  .cursor-ring{position:absolute;inset:0;border-radius:50%;display:none;opacity:0;transform:scale(.6);transition:opacity .22s ease,transform .22s ease;background:rgba(8,13,24,.5) center/100% 100% no-repeat;pointer-events:none;}
  html[data-jj-cursor="medieval"] .cursor-ring,html[data-jj-cursor="alien"] .cursor-ring{display:block;}
  html[data-jj-cursor="medieval"] .custom-cursor.is-hovering .cursor-ring,html[data-jj-cursor="alien"] .custom-cursor.is-hovering .cursor-ring{opacity:1;transform:scale(1);}
  html[data-jj-cursor="medieval"] .cursor-ring{background-image:url("${GB}cur-ring-gold.webp");}html[data-jj-cursor="alien"] .cursor-ring{background-image:url("${GB}cur-ring-space.webp");}
  html[data-jj-cursor]:not([data-jj-cursor="classic"]) .custom-cursor.is-hovering{-webkit-backdrop-filter:none;backdrop-filter:none;}
  .custom-cursor.is-external .cursor-label{opacity:1;font-size:28px;}
  .custom-cursor.is-external .cursor-label::before{content:"\\2197";}
  .custom-cursor.is-page .cursor-label{opacity:1;font-size:26px;}
  .custom-cursor.is-page .cursor-label::before{content:"\\2192";}
  .custom-cursor.is-prev .cursor-label::before{content:"\\2190";}.custom-cursor.is-prev .cursor-art{scale:-1 1;}   /* ← : data-cursor="prev" (back a page, in the storybook): every pack's own page arrow, mirrored */   /* → : this link goes to another page of the site */
  .custom-cursor.is-drag .cursor-label{opacity:1;font-size:18px;letter-spacing:3px;}
  .custom-cursor.is-drag .cursor-label::before{content:"\\2022\\2022\\2022";}
  .custom-cursor.is-project{width:96px;height:96px;}
  /* ---------- the composed states: home / external / another page / a case study ---------- */
  .cursor-art{position:absolute;left:50%;top:50%;width:62px;height:62px;margin:-31px 0 0 -31px;background:center/contain no-repeat;opacity:0;transform:scale(.55);transition:opacity .2s ease,transform .26s cubic-bezier(.22,1,.36,1);pointer-events:none;z-index:2;}
  .custom-cursor.is-art .cursor-art{opacity:1;transform:scale(1);}
  .custom-cursor.is-art .cursor-ring,.custom-cursor.is-art .cursor-fill,.custom-cursor.is-art .cursor-label{opacity:0!important;}
  .custom-cursor.is-art{background:transparent!important;border-color:transparent!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;}
  .custom-cursor.is-art.is-project .cursor-art{width:104px;height:104px;margin:-52px 0 0 -52px;}
  html[data-jj-cursor="retro"] .cursor-art{left:24px;top:auto;bottom:24px;margin:0;transform-origin:0 100%;width:74px;height:74px;image-rendering:pixelated;}
  html[data-jj-cursor="retro"] .custom-cursor.is-art.is-project .cursor-art{width:104px;height:104px;margin:0;}
  html[data-jj-cursor="retro"] .custom-cursor.is-art .cursor-icon{opacity:1;}   /* the pixel hand stays, the bubble pops beside it */
  .custom-cursor.is-project .cursor-label{opacity:1;font-size:10px;line-height:1.1;}
  .custom-cursor.is-project .cursor-label::before{content:"VIEW\\A PROJECT";white-space:pre;}

  /* ---------- press state (mousedown → mouseup) ---------- */
  .custom-cursor.is-pressing{transform:translate(-50%,-50%) scale(.82);}
  .cursor-icon,.cursor-orbit{position:absolute;pointer-events:none;display:none;}
  /* ---------- MEDIEVAL: the sword ---------- */
  html[data-jj-cursor="medieval"] .custom-cursor{width:14px;height:14px;background:transparent;border:1px solid transparent;box-shadow:none;}
  html[data-jj-cursor="medieval"] .cursor-trail{display:none;}
  html[data-jj-cursor="medieval"] .cursor-icon{display:block;left:50%;top:50%;width:24px;height:44px;margin:-2px 0 0 -12px;background:url("${GB}cur-sword.webp") center/contain no-repeat;transform-origin:12px 2px;transform:rotate(-38deg);opacity:1;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .22s ease;filter:drop-shadow(0 2px 3px rgba(0,0,0,.5));}
  html[data-jj-cursor="medieval"] .custom-cursor.is-hovering{width:58px;height:58px;background:transparent;border:0;box-shadow:0 0 22px rgba(244,197,96,.35);}
  html[data-jj-cursor="medieval"] .custom-cursor.is-hovering .cursor-icon{transform:rotate(-38deg) scale(.3);opacity:0;}   /* the sword melts away as the ring grows */
  html[data-jj-cursor="medieval"] .custom-cursor.is-project{width:96px;height:96px;}
  html[data-jj-cursor="medieval"] .cursor-icon::after{content:"✦";position:absolute;right:-6px;top:-8px;color:#ffe08a;font-size:14px;opacity:0;transform:scale(.3);transition:opacity .15s ease,transform .25s cubic-bezier(.34,1.56,.64,1);text-shadow:0 0 8px #ffd66b;}
  html[data-jj-cursor="medieval"] .custom-cursor.is-pressing .cursor-icon::after{opacity:1;transform:scale(1);}
  html[data-jj-cursor="medieval"] .custom-cursor.is-pressing{transform:translate(-50%,-50%) scale(.96);}html[data-jj-cursor="medieval"] .custom-cursor.is-pressing::after,html[data-jj-cursor="alien"] .custom-cursor.is-pressing .cursor-orbit::after{content:"";position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;border:2px solid currentColor;animation:jjBurst .45s ease-out forwards;}html[data-jj-cursor="medieval"] .custom-cursor{color:#f4c560;}html[data-jj-cursor="alien"] .custom-cursor{color:#4fe3ff;}@keyframes jjBurst{0%{transform:scale(.4);opacity:1;}100%{transform:scale(5);opacity:0;}}html[data-jj-cursor="alien"] .cursor-orbit,html[data-jj-cursor="mixed"] .cursor-orbit{display:block;}
  html[data-jj-cursor="medieval"] .custom-cursor.is-hovering .cursor-label{color:#f4c560;}
  /* ---------- RETRO: pixel arrow · hand · starburst ---------- */
  html[data-jj-cursor="retro"] .custom-cursor{width:28px;height:28px;background:transparent;border:0;box-shadow:none;transform:translate(-2px,-2px);border-radius:0;}
  html[data-jj-cursor="retro"] .cursor-trail{display:none;}
  html[data-jj-cursor="retro"] .cursor-icon{display:block;left:0;top:0;width:28px;height:28px;image-rendering:pixelated;background:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' shape-rendering='crispEdges'%3E%3Cpath d='M2 1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-4v1h1v1h1v2h-1v-1h-1v-1h-1v-1h-1v2h-1v1h-1V1z' fill='%23ff2d95'/%3E%3Cpath d='M3 3h1v1h1v1h1v1h1v1h1v1h1v1h-3v1h1v1h1v1h-1v-1h-1v-1h-1v-1h-1v2h-1V3z' fill='%23fff'/%3E%3C/svg%3E") center/contain no-repeat;}
  html[data-jj-cursor="retro"] .custom-cursor.is-hovering{width:32px;height:32px;background:transparent;border:0;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;transform:translate(-10px,-2px);}
  html[data-jj-cursor="retro"] .custom-cursor.is-hovering .cursor-icon{width:32px;height:32px;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' shape-rendering='crispEdges'%3E%3Cpath d='M6 1h3v6h2V4h3v3h2v7h-1v1H5v-1H4v-3H3V9h1V8h2V1z' fill='%23ff2d95'/%3E%3Cpath d='M7 2h1v6h1V5h1v3h1V5h1v3h1V8h1v5h-1v1H6v-1H5v-2H4V9h2V8h1V2z' fill='%23fff'/%3E%3C/svg%3E");}
  html[data-jj-cursor="retro"] .custom-cursor.is-pressing .cursor-icon{background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' shape-rendering='crispEdges'%3E%3Cpath d='M7 0h2v4H7zM7 12h2v4H7zM0 7h4v2H0zM12 7h4v2h-4zM2 2h2v2H2zM12 2h2v2h-2zM2 12h2v2H2zM12 12h2v2h-2z' fill='%23ff2d95'/%3E%3Cpath d='M6 6h4v4H6z' fill='%23ffd400'/%3E%3C/svg%3E")!important;}
  html[data-jj-cursor="retro"] .custom-cursor.is-project{width:32px;height:32px;}
  html[data-jj-cursor="retro"] .cursor-label{inset:auto;left:26px;bottom:26px;width:78px;height:66px;opacity:0;image-rendering:pixelated;background:url("${GB}cur-ico-arrow.webp") center/34px auto no-repeat,url("${GB}cur-bubble-arrow.webp") center/100% 100% no-repeat;background-position:50% 40%,center;transform:scale(.6);transform-origin:0 100%;transition:opacity .14s ease,transform .18s cubic-bezier(.34,1.56,.64,1);}
  html[data-jj-cursor="retro"] .cursor-label::before{content:none!important;}
  html[data-jj-cursor="retro"] .custom-cursor.is-page .cursor-label,html[data-jj-cursor="retro"] .custom-cursor.is-external .cursor-label,html[data-jj-cursor="retro"] .custom-cursor.is-project .cursor-label{opacity:1;transform:scale(1);}   /* the speech bubble only when you are about to leave this page */
  html[data-jj-cursor="retro"] .custom-cursor.is-hovering .cursor-label{background-image:url("${GB}cur-ico-arrow.webp"),url("${GB}cur-ring-retro-bubble.webp");background-size:34px auto,100% 100%;}
  html[data-jj-cursor="retro"] .custom-cursor.is-external .cursor-label{background-image:url("${GB}cur-ico-external.webp"),url("${GB}cur-ring-retro-bubble.webp");background-size:30px auto,100% 100%;}
  html[data-jj-cursor="retro"] .custom-cursor.is-project .cursor-label{width:104px;height:88px;background-image:url("${GB}cur-ico-viewproject-pixel.webp"),url("${GB}cur-ring-retro-bubble.webp");background-size:64px auto,100% 100%;background-position:50% 38%,center;}
  /* ---------- SPACE: cyan dot, a moon in orbit, gradient ring on hover ---------- */
  html[data-jj-cursor="alien"] .custom-cursor{width:12px;height:12px;background:#dffbff;border:0;box-shadow:0 0 10px #4fe3ff,0 0 22px rgba(79,227,255,.6);}
  html[data-jj-cursor="alien"] .cursor-trail{background:linear-gradient(90deg,rgba(79,227,255,0),rgba(79,227,255,.7));}
  html[data-jj-cursor="alien"] .cursor-orbit{display:block;left:50%;top:50%;width:0;height:0;animation:jjOrbit 4.5s linear infinite;}
  html[data-jj-cursor="alien"] .cursor-orbit::before{content:"";position:absolute;left:0;top:0;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:#fff;box-shadow:0 0 6px #4fe3ff;transform:translateX(15px);transition:transform .3s ease;}
  @keyframes jjOrbit{to{transform:rotate(360deg);}}
  html[data-jj-cursor="alien"] .custom-cursor.is-hovering{width:58px;height:58px;background:transparent;border:0;box-shadow:0 0 22px rgba(79,227,255,.3);}
  html[data-jj-cursor="alien"] .custom-cursor.is-hovering::after{content:"";position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:#fff;box-shadow:0 0 8px #4fe3ff;}
  html[data-jj-cursor="alien"] .custom-cursor.is-hovering .cursor-orbit::before{transform:translateX(28px);}   /* the moon rides the ring */
  html[data-jj-cursor="alien"] .custom-cursor.is-project{width:96px;height:96px;}html[data-jj-cursor="alien"] .custom-cursor.is-project .cursor-orbit::before{transform:translateX(47px);}
  html[data-jj-cursor="alien"] .custom-cursor.is-pressing{background:transparent;border-color:transparent;box-shadow:none;}
  html[data-jj-cursor="alien"] .custom-cursor.is-pressing::before{content:"(";}html[data-jj-cursor="alien"] .custom-cursor.is-pressing .cursor-label::after{content:")";}
  html[data-jj-cursor="alien"] .custom-cursor.is-pressing::before,html[data-jj-cursor="alien"] .custom-cursor.is-pressing .cursor-label::after{position:absolute;top:50%;transform:translateY(-54%);color:#4fe3ff;font:700 26px/1 "Joes Journey Headline",sans-serif;text-shadow:0 0 8px #4fe3ff;}
  html[data-jj-cursor="alien"] .custom-cursor.is-pressing::before{left:-16px;}html[data-jj-cursor="alien"] .custom-cursor.is-pressing .cursor-label::after{right:-16px;position:absolute;}
  html[data-jj-cursor="alien"] .custom-cursor.is-pressing .cursor-label{opacity:1;}
  /* ---------- SPECIAL: gold dot in a stone ring ---------- */
  /* Special = the golden orb in its stone ring (the user's sheet): the idle frame rides the pointer; on hover it crossfades to the sparkling frame and grows; a beam frame flashes on press; now and then it flushes portal-purple */
  html[data-jj-cursor="mixed"] .custom-cursor{width:38px;height:38px;background:transparent;border:0;box-shadow:none;}
  html[data-jj-cursor="mixed"] .cursor-trail{display:none;}html[data-jj-cursor="mixed"] .cursor-orbit{display:none;}html[data-jj-cursor="mixed"] .cursor-fill{display:none;}
  html[data-jj-cursor="mixed"] .cursor-icon{display:block;left:50%;top:50%;width:52px;height:52px;margin:-26px 0 0 -26px;background:url("${GB}cur-sp-idle.webp") center/contain no-repeat;transform-origin:50% 50%;opacity:1;transition:opacity .28s ease,transform .32s cubic-bezier(.22,1,.36,1);filter:drop-shadow(0 2px 4px rgba(0,0,0,.45));}
  html[data-jj-cursor="mixed"] .cursor-ring{display:block;inset:-14px;border-radius:0;background:url("${GB}cur-sp-spark.webp") center/contain no-repeat;opacity:0;transform:scale(.7);transition:opacity .28s ease,transform .32s cubic-bezier(.22,1,.36,1);filter:drop-shadow(0 0 12px rgba(255,197,49,.55));}
  html[data-jj-cursor="mixed"] .custom-cursor.is-hovering{width:54px;height:54px;background:transparent;border:0;box-shadow:none;}
  html[data-jj-cursor="mixed"] .custom-cursor.is-hovering .cursor-icon{opacity:0;transform:scale(1.25);}html[data-jj-cursor="mixed"] .custom-cursor.is-hovering .cursor-ring{opacity:1;transform:scale(1);rotate:90deg;}
  html[data-jj-cursor="mixed"] .cursor-art{width:30px;height:30px;margin:-15px 0 0 -15px;filter:drop-shadow(0 0 6px rgba(0,0,0,.6));}html[data-jj-cursor="mixed"] .custom-cursor.is-art .cursor-ring{opacity:1!important;transform:scale(1);rotate:90deg;background-image:url("${GB}cur-sp-ring.webp");}   /* Special: the composed states keep the ring round the icon (the shared rule above hides it) — Joe's hollow stone ring (Sep 12) */
  html[data-jj-cursor="mixed"] .custom-cursor.is-art .cursor-art{width:34px;height:34px;margin:-17px 0 0 -17px;filter:drop-shadow(0 0 6px rgba(255,197,49,.8)) drop-shadow(0 0 14px rgba(255,150,30,.4));animation:jjRune 1.8s ease-in-out infinite;}   /* Joe's gold orb icons (castle = home, arrow = page, box-arrow = external) sit in the ring's opening and breathe */
  @keyframes jjRune{0%,100%{opacity:.86;}50%{opacity:1;}}html[data-jj-cursor="mixed"] .custom-cursor.is-art.is-project .cursor-art{width:44px;height:44px;margin:-22px 0 0 -22px;}
  html[data-jj-cursor="mixed"] .cursor-ring{transition:opacity .25s ease .32s,transform .3s cubic-bezier(.34,1.56,.64,1),rotate .35s ease;}
  html[data-jj-cursor="mixed"] .custom-cursor.is-hovering .cursor-ring{transition:opacity .25s ease,transform .3s cubic-bezier(.34,1.56,.64,1),rotate .35s ease;}
  html[data-jj-cursor="mixed"] .custom-cursor.is-project{width:136px;height:136px;}html[data-jj-cursor="mixed"] .custom-cursor.is-project .cursor-ring{inset:-6px;background-image:url("${GB}cur-sp-ring.webp");rotate:0deg!important;}/* the chooser: Story Time / Work orbs (Joe's art) on EVERY cursor theme; nothing of the pack shows behind them */html[data-jj-cursor] .custom-cursor.is-story .cursor-art{background-image:url("${GB}cur-mixed-story.webp")!important;}html[data-jj-cursor] .custom-cursor.is-work .cursor-art{background-image:url("${GB}cur-mixed-work.webp")!important;}html[data-jj-cursor] .custom-cursor.is-story,html[data-jj-cursor] .custom-cursor.is-work{width:128px!important;height:128px!important;background:transparent!important;border-color:transparent!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;}html[data-jj-cursor] .custom-cursor.is-change,html[data-jj-cursor] .custom-cursor.is-edit{width:84px!important;height:84px!important;background:transparent!important;border-color:transparent!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;}html[data-jj-cursor] .custom-cursor.is-change .cursor-ring,html[data-jj-cursor] .custom-cursor.is-change .cursor-fill,html[data-jj-cursor] .custom-cursor.is-change .cursor-orbit,html[data-jj-cursor] .custom-cursor.is-change .cursor-icon,html[data-jj-cursor] .custom-cursor.is-change .cursor-art,html[data-jj-cursor] .custom-cursor.is-edit .cursor-ring,html[data-jj-cursor] .custom-cursor.is-edit .cursor-fill,html[data-jj-cursor] .custom-cursor.is-edit .cursor-orbit,html[data-jj-cursor] .custom-cursor.is-edit .cursor-icon,html[data-jj-cursor] .custom-cursor.is-edit .cursor-art{opacity:0!important;}html[data-jj-cursor] .custom-cursor.is-change .cursor-label,html[data-jj-cursor] .custom-cursor.is-edit .cursor-label{opacity:1!important;flex-direction:column;gap:2px;font-size:15px!important;line-height:1!important;letter-spacing:.06em;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.95),0 0 12px rgba(0,0,0,.8);transform:none!important;width:auto!important;height:auto!important;background:none!important;background-image:none!important;}html[data-jj-cursor] .custom-cursor.is-change .cursor-label::before,html[data-jj-cursor] .custom-cursor.is-edit .cursor-label::before{content:"CHANGE";}html[data-jj-cursor] .custom-cursor.is-change .cursor-label::after,html[data-jj-cursor] .custom-cursor.is-edit .cursor-label::after{content:"";display:block;width:24px;height:24px;background:currentColor;-webkit-mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 18L18 6M9 6h9v9' fill='none' stroke='black' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/></svg>") center/contain no-repeat;mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 18L18 6M9 6h9v9' fill='none' stroke='black' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/></svg>") center/contain no-repeat;filter:drop-shadow(0 1px 2px rgba(0,0,0,.9));}html[data-jj-cursor="medieval"] .custom-cursor.is-change .cursor-label,html[data-jj-cursor="medieval"] .custom-cursor.is-edit .cursor-label{color:#FFC531;}html[data-jj-cursor="retro"] .custom-cursor.is-change .cursor-label,html[data-jj-cursor="retro"] .custom-cursor.is-edit .cursor-label{inset:0!important;left:0!important;bottom:0!important;width:auto!important;height:auto!important;background:none!important;background-image:none!important;color:#fff8e6;text-shadow:2px 2px 0 #FF00F5;image-rendering:auto;}html[data-jj-cursor="retro"] .custom-cursor.is-change .cursor-label::before,html[data-jj-cursor="retro"] .custom-cursor.is-edit .cursor-label::before{content:"CHANGE"!important;}html[data-jj-cursor="alien"] .custom-cursor.is-change .cursor-label,html[data-jj-cursor="alien"] .custom-cursor.is-edit .cursor-label{color:#DFF6FF;text-shadow:0 0 8px rgba(79,227,255,.9);}html[data-jj-cursor="mixed"] .custom-cursor.is-change .cursor-label,html[data-jj-cursor="mixed"] .custom-cursor.is-edit .cursor-label{color:#FFE9B0;}html[data-jj-cursor] .custom-cursor.is-edit .cursor-label::before{content:"EDIT";}html[data-jj-cursor] .custom-cursor.is-story.is-art .cursor-art,html[data-jj-cursor] .custom-cursor.is-work.is-art .cursor-art{left:50%!important;top:50%!important;bottom:auto!important;width:128px!important;height:128px!important;margin:-64px 0 0 -64px!important;image-rendering:auto!important;filter:drop-shadow(0 6px 14px rgba(0,0,0,.5));animation:none;transform:scale(1)!important;}html[data-jj-cursor] .custom-cursor.is-story .cursor-ring,html[data-jj-cursor] .custom-cursor.is-work .cursor-ring,html[data-jj-cursor] .custom-cursor.is-story .cursor-fill,html[data-jj-cursor] .custom-cursor.is-work .cursor-fill,html[data-jj-cursor] .custom-cursor.is-story .cursor-orbit,html[data-jj-cursor] .custom-cursor.is-work .cursor-orbit,html[data-jj-cursor] .custom-cursor.is-story .cursor-icon,html[data-jj-cursor] .custom-cursor.is-work .cursor-icon,html[data-jj-cursor] .custom-cursor.is-story .cursor-label,html[data-jj-cursor] .custom-cursor.is-work .cursor-label{opacity:0!important;}html[data-jj-cursor="mixed"] .custom-cursor.is-art.is-project .cursor-art{display:none;}html[data-jj-cursor="mixed"] .custom-cursor.is-art.is-project .cursor-label{opacity:1!important;font-size:11px;line-height:1.15;letter-spacing:.1em;color:#fff;text-shadow:none;}html[data-jj-cursor="mixed"] .custom-cursor.is-art.is-project .cursor-label::before{background:rgba(0,0,0,.62);padding:7px 9px;border-radius:12px;}html[data-jj-cursor="mixed"] .custom-cursor.is-project .cursor-label{color:#ffe9b0;text-shadow:0 0 8px rgba(0,0,0,.9),0 0 14px rgba(255,197,49,.6);}
  html[data-jj-cursor="mixed"] .custom-cursor.is-pressing{transform:translate(-50%,-50%) scale(.9);}html[data-jj-cursor="mixed"] .custom-cursor.is-pressing .cursor-ring{background-image:url("${GB}cur-sp-beam-d.webp");}html[data-jj-cursor="mixed"] .custom-cursor.is-pressing:not(.is-hovering) .cursor-icon{background-image:url("${GB}cur-sp-beam-d.webp");}
  html[data-jj-cursor="mixed"] .custom-cursor.flash .cursor-icon,html[data-jj-cursor="mixed"] .custom-cursor.flash .cursor-ring{animation:jjSpFlash .9s ease-in-out;}
  @keyframes jjSpFlash{0%,100%{filter:none;}45%{filter:hue-rotate(225deg) saturate(1.4) brightness(1.15) drop-shadow(0 0 14px rgba(176,76,255,.95));}}
  
  @media (hover:none) and (pointer:coarse){.custom-cursor,.cursor-trail{display:none;}body,a,button,[data-cursor]{cursor:auto;}}
  `;
  var style = document.createElement('style');
  style.textContent = CSS + ART;
  document.head.appendChild(style);

  var cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<div class="cursor-fill"></div><div class="cursor-ring"></div><div class="cursor-art"></div><div class="cursor-icon"></div><div class="cursor-orbit"></div><div class="cursor-label"></div>';
  var trail = document.createElement('div');
  trail.className = 'cursor-trail';

  /* v17 (Joe, 13 Oct: 'users will be annoyed their mouse doesn't show from the beginning: make it work always'). There is ALWAYS a pointer now. The site's head code
     hides the system pointer on every element (* {cursor:none!important}) from the first paint, so until this file had loaded AND the mouse had moved there was no
     pointer at all, and through a loader (where v15 put the drawn cursor away) there was none either. The gate below gives the system pointer back, on every element,
     until html.jj-cur-live: set once the drawn cursor has a position (the first mouse move) and no loader is up. So: system pointer from the first paint and through a
     loader (it never stutters, however busy the page is), the drawn cursor from then on. jj-loader.js writes the same gate at the top of the page, before this file
     has arrived. If this file never loads, the system pointer simply stays. */
  var moved = false;
  function liveSync(){ var de = document.documentElement, on = moved && !document.getElementById('jjld'); if (de.classList.contains('jj-cur-live') !== on) de.classList.toggle('jj-cur-live', on); }
  function ldWatch(){ if (!document.getElementById('jj-cur-gate')) { var st = document.createElement('style'); st.id = 'jj-cur-gate'; st.textContent = 'html:not(.jj-cur-live),html:not(.jj-cur-live) *{cursor:revert!important}html:not(.jj-cur-live) .custom-cursor,html:not(.jj-cur-live) .cursor-trail{display:none!important}'; document.head.appendChild(st); }
    liveSync(); try { new MutationObserver(liveSync).observe(document.body, { childList: true }); } catch (e) {} }
  function mount(){ document.body.appendChild(trail); document.body.appendChild(cursor); start(); ldWatch(); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  function start(){
    var mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, trailX = 0, trailY = 0, lastX = 0, lastY = 0, seen = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX; mouseY = e.clientY;
      if (!seen) { seen = true; cursorX = trailX = lastX = mouseX; cursorY = trailY = lastY = mouseY; moved = true; liveSync(); }   // jump in, don't fly from the corner
    });

    /* v14 (2026-10-10, Joe's Intel Mac: 'laggy the second the mouse entered'): the cursor and its trail are moved with `translate`, not left / top. left / top
       made every frame of a mouse move a full pass of the page (layout, paint, the layer tree, a commit: measured 250 ms a second on a mid laptop); `translate`
       on a layer of its own is the compositor's alone. And the loop stops when the pointer has come to rest (it ran for ever), started again by the next move. */
    var XL = false; try { XL = !!(window.CSS && CSS.supports && CSS.supports('translate', '1px 1px')); } catch (e) {}
    if (XL) { cursor.style.willChange = 'translate, transform'; trail.style.willChange = 'translate, transform, opacity'; }
    var place = XL ? function (el, x, y) { el.style.translate = x.toFixed(2) + 'px ' + y.toFixed(2) + 'px'; } : function (el, x, y) { el.style.left = x + 'px'; el.style.top = y + 'px'; };
    var running = false, wake = function () { if (!running) { running = true; requestAnimationFrame(tick); } };
    window.addEventListener('mousemove', wake, { passive: true });
    /* v16 (Joe, 12 Oct: 'the cursor is a split second behind, and a slower screen shows it even more'). The cursor eased toward the pointer by a fixed share
       per FRAME: at 20 frames a second it took three times as long to arrive as at 60. The easing is now by TIME, so it trails by the same short moment at any
       frame rate; and in the lite level (a machine measured to be slow) it follows tighter still. */
    var lastTick = 0, ease = function (k, dt) { return 1 - Math.pow(1 - k, dt / 16.667); };
    function tick(now){
      var dt = lastTick ? Math.min(100, Math.max(1, (now || performance.now()) - lastTick)) : 16.667; lastTick = now || performance.now();
      var lite = !!(window.jjLite && window.jjLite.on), kc = ease(lite ? 0.55 : 0.28, dt), kt = ease(0.16, dt), kl = ease(0.2, dt);
      cursorX += (mouseX - cursorX) * kc; cursorY += (mouseY - cursorY) * kc;
      trailX  += (mouseX - trailX)  * kt; trailY  += (mouseY - trailY)  * kt;
      place(cursor, cursorX, cursorY); place(trail, trailX, trailY);

      var dx = mouseX - lastX, dy = mouseY - lastY;
      trail.style.opacity = Math.sqrt(dx * dx + dy * dy) > 1 ? '0.45' : '0';   // subtle trail, not too noticeable
      var angle = Math.atan2(dy, dx) * 180 / Math.PI;
      trail.style.transform = 'translate(-50%, -50%) rotate(' + (angle + 180) + 'deg)';
      lastX += (mouseX - lastX) * kl; lastY += (mouseY - lastY) * kl;
      if (Math.abs(mouseX - cursorX) < .05 && Math.abs(mouseY - cursorY) < .05 && Math.abs(mouseX - trailX) < .05 && Math.abs(mouseY - trailY) < .05 && Math.abs(mouseX - lastX) < .05 && Math.abs(mouseY - lastY) < .05) {
        cursorX = trailX = lastX = mouseX; cursorY = trailY = lastY = mouseY; place(cursor, cursorX, cursorY); place(trail, trailX, trailY); trail.style.opacity = '0'; running = false; lastTick = 0; return; }   // at rest: nothing to do until the pointer moves again
      requestAnimationFrame(tick);
    }
    wake();

    // delegated hover detection — works for elements added after load
    function stateFor(t){
      if (!t || !t.closest) return null;
      var d = t.closest('[data-cursor]');
      var dflt = null;
      if (d) { var dv = d.getAttribute('data-cursor'); if (dv === 'none') return null; if (dv && dv !== 'hover') return dv; dflt = 'hover'; }   // an explicit state wins; a plain 'hover' still lets a link upgrade it, but never gets lost
      if (t.closest('a[href*="/case-studies/"]')) return 'project';   // case-study cards: VIEW PROJECT
      var a = t.closest('a[href]');
      if (a) { var h = a.getAttribute('href') || '', p = '';
        try { p = a.pathname.replace(/\/+$/, '') || '/'; } catch (e) {}
        if (/^https?:\/\//i.test(h) && a.host !== location.host) return 'external';                       // off-site: the ↗ badge
        if (!/^(mailto|tel|javascript):/i.test(h) && h.charAt(0) !== '#') {
          if (p === '/') return 'home';                                                                     // the logo and the Home link: the house / the earth — on every page, the homepage too
          var here = (location.pathname.replace(/\/+$/, '') || '/') + location.search;                     // Credits and Contact share a path but are two different places
          if (p + (a.search || '') !== here) return 'page';                                                 // another page of the site: the arrow
        } }
      if (t.closest('a, button, [role="button"], [role="tab"], .w-inline-block, .w-nav-link, .tab, label, summary, select, [onclick], [data-jj="btn"], [data-jj="cta"], .jj-poke-sprite')) return 'hover';   // only the button markers — data-jj="menu" tags the whole top bar, which is not a target
      return dflt;
    }
    function apply(s){
      cursor.classList.toggle('is-hovering', !!s);
      cursor.classList.toggle('is-external', s === 'external');
      cursor.classList.toggle('is-drag', s === 'drag');
      cursor.classList.toggle('is-project', s === 'project');
      cursor.classList.toggle('is-page', s === 'page' || s === 'prev');   // 'prev' (the storybook's left-hand page: back a page) is the page arrow, pointing left
      cursor.classList.toggle('is-prev', s === 'prev');
      cursor.classList.toggle('is-home', s === 'home');
      cursor.classList.toggle('is-story', s === 'story');                 // the chooser's two halves: Story Time / Work orbs (Joe's art; other packs show their page arrow)
      cursor.classList.toggle('is-work', s === 'work');
      cursor.classList.toggle('is-change', s === 'change');               // over the companion: CHANGE ↗, one per pack
      cursor.classList.toggle('is-edit', s === 'edit');                   // over a decoration: EDIT ↗ (same look)
      cursor.classList.toggle('is-art', s === 'home' || s === 'external' || s === 'page' || s === 'prev' || s === 'project' || s === 'story' || s === 'work');
    }
    document.addEventListener('mouseover', function (e) { apply(stateFor(e.target)); });
    (function flush() { setTimeout(function () { if (document.documentElement.getAttribute('data-jj-cursor') === 'mixed') { cursor.classList.remove('flash'); void cursor.offsetWidth; cursor.classList.add('flash'); setTimeout(function () { cursor.classList.remove('flash'); }, 950); } flush(); }, 3500 + Math.random() * 5500); })();   // Special: every 3.5–9s the orb flushes portal-purple
    document.addEventListener('mousedown', function () { cursor.classList.add('is-pressing'); });
    window.addEventListener('mouseup', function () { cursor.classList.remove('is-pressing'); });
    window.addEventListener('blur', function () { apply(null); });
  }
})();
