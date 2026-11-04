/* jjClipSrc(base[, query]): ONE <source> per clip, the format this browser should use (Safari: the HEVC-alpha .mov; everyone else: the VP9-alpha .webm), so nothing downloads or probes the other */
if (!window.jjClipSrc) window.jjClipSrc = (function () { var hevc = null; return function (b, q) { if (hevc === null) { try { hevc = !window.chrome && !!document.createElement('video').canPlayType('video/mp4; codecs="hvc1"'); } catch (e) { hevc = false; } } q = q || ''; return hevc ? '<source src="' + b + '.mov' + q + '" type=\'video/mp4; codecs="hvc1"\'>' : '<source src="' + b + '.webm' + q + '" type="video/webm">'; }; })();
/* L23: THERE IS ALWAYS A POINTER. The site's head code hides the system pointer on every element; cursor.js (which arrives later) takes that over. Until its drawn
   cursor is live (html.jj-cur-live: the mouse has moved and no loader is up) the system pointer shows. The same rule, under the same id, is in cursor.js. */
(function () { if (document.getElementById('jj-cur-gate')) return; var st = document.createElement('style'); st.id = 'jj-cur-gate';
  st.textContent = 'html:not(.jj-cur-live),html:not(.jj-cur-live) *{cursor:revert!important}html:not(.jj-cur-live) .custom-cursor,html:not(.jj-cur-live) .cursor-trail{display:none!important}'; (document.head || document.documentElement).appendChild(st); })();
/* THE SOUND MOON, FROM THE FIRST PAINT (Joe, 2026-09-30: "the sound button should always be there, and it should still work and expand...
   no matter what, between pages etc"). The same function lives in jj-loader.js (the first of the site's scripts on every page, so the
   moon is drawn in the same frame as the loader) and in site-footer.js (in case a page has no loader). It draws the moon in its resting
   state (quiet: nothing plays before the page has loaded) and pins it, its mist and its panel above every loader, overlay and curtain,
   pressable whatever else is blocking the page. site-footer.js adopts this button and wires it; a hover or press that arrives before
   that is remembered and answered as soon as it is wired. */
(function () {
  if (window.jjSoundEarly && window.jjSoundEarly.v >= 2) { window.jjSoundEarly(); return; }   /* v2 = muted and quiet are two looks; an older copy (a cached loader / footer) is replaced, style and all */
  window.jjSoundEarly = function () {
    var old = document.getElementById('jj-snd-early');
    if (!old || old.getAttribute('data-v') !== '2') {
      if (old && old.parentNode) old.parentNode.removeChild(old);
      var st = document.createElement('style'); st.id = 'jj-snd-early'; st.setAttribute('data-v', '2');
      st.textContent =
        '#jj-sound-btn{position:fixed;bottom:32px;right:32px;width:64px;height:64px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fff 0%,#e7f1fb 55%,#cfe0f2 100%);border:none;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:3px;overflow:hidden;transform-origin:center center;box-shadow:0 0 18px rgba(199,231,255,.5),0 0 40px rgba(160,190,255,.28);transition:background .25s ease;}' +
        '#jj-sound-btn .jj-crater{position:absolute;border-radius:50%;background:#93a9c6;pointer-events:none;z-index:0;}#jj-sound-btn .jj-bar{width:3px;background:#111;border-radius:2px;height:6px;position:relative;z-index:2;}' +
        '#jj-sound-btn .jj-sound-fill{position:absolute;border-radius:50%;background:#FF00F5;pointer-events:none;transform:scale(0);opacity:0;z-index:1;}' +
        /* MUTED (the visitor muted, or every channel at 0) = the dark disc with dots. QUIET (sound is on, nothing is playing this moment) = the
           light moon with its bars at rest: short still bars of slightly different heights, an equaliser waiting (Joe, 2026-10-02: the dark
           disc read as muted while the mixer said 100%) */
        '#jj-sound-btn.is-muted{background:#111;}#jj-sound-btn.is-muted .jj-bar{background:#fff;height:3px!important;}#jj-sound-btn.is-muted .jj-crater{background:rgba(255,255,255,.16);}' +
        '#jj-sound-btn.is-quiet:not(.is-muted) .jj-bar{transition:height .35s ease;}' +
        '#jj-sound-btn.is-quiet:not(.is-muted) .jj-crater + .jj-bar{height:6px!important;}#jj-sound-btn.is-quiet:not(.is-muted) .jj-bar + .jj-bar{height:9px!important;}#jj-sound-btn.is-quiet:not(.is-muted) .jj-bar + .jj-bar + .jj-bar{height:12px!important;}#jj-sound-btn.is-quiet:not(.is-muted) .jj-bar + .jj-bar + .jj-bar + .jj-bar{height:8px!important;}#jj-sound-btn.is-quiet:not(.is-muted) .jj-bar + .jj-bar + .jj-bar + .jj-bar + .jj-bar{height:5px!important;}' +
        '#jj-sound-mist{position:fixed;bottom:-38px;right:-38px;width:200px;height:200px;pointer-events:none;display:flex;align-items:center;justify-content:center;gap:9px;filter:blur(24px);opacity:.55;border-radius:50%;}#jj-sound-mist .jj-mist-bar{width:10px;background:#fff;border-radius:6px;height:18px;}' +
        /* above everything (loaders 2147483000, the page-leave curtains 2147483646), pressable while anything blocks the page (two ids outrank
           every page's own rule, even the !important ones); only the finale's suck-in (a second) may still take it */
        '#jj-sound-btn#jj-sound-btn{z-index:2147483647!important;pointer-events:auto!important;visibility:visible!important;}html:not(.jjms-suck) #jj-sound-btn#jj-sound-btn{opacity:1!important;}' +
        '#jj-sound-mist#jj-sound-mist{z-index:2147483645!important;visibility:visible!important;}' +
        '#jj-mixer#jj-mixer{z-index:2147483646!important;}#jj-mixer#jj-mixer.open,#jj-mixer#jj-mixer.open *{pointer-events:auto!important;}.jj-mx-bub.jj-mx-bub{z-index:2147483647!important;}' +
        '@media print{#jj-sound-btn,#jj-sound-mist{display:none!important;}}';
      (document.head || document.documentElement).appendChild(st);
    }
    if (!document.body || document.getElementById('jj-sound-btn')) return;
    var b = document.createElement('button'); b.id = 'jj-sound-btn'; b.type = 'button'; var mu = false; try { mu = sessionStorage.getItem('jjUserMuted') === '1'; var mx = JSON.parse(localStorage.getItem('jjMix') || 'null'); if (mx && !(mx.voice > 0 || mx.sfx > 0 || mx.music > 0)) mu = true; } catch (e) {}   /* the stored state: muted by the visitor, or every channel at 0 */
    b.className = 'jj-early ' + (mu ? 'is-muted' : 'is-quiet'); b.setAttribute('aria-label', 'Sound settings'); b.setAttribute('aria-expanded', 'false');
    var h = '<div class="jj-sound-fill"></div>';
    [[11, 11, 13, 15, .2], [7, 7, 41, 32, .14], [8, 8, 24, 43, .12]].forEach(function (c) { h += '<div class="jj-crater" style="width:' + c[0] + 'px;height:' + c[1] + 'px;left:' + c[2] + 'px;top:' + c[3] + 'px;opacity:' + c[4] + ';"></div>'; });
    for (var i = 0; i < 5; i++) h += '<div class="jj-bar"></div>';
    b.innerHTML = h;
    var m = document.createElement('div'); m.id = 'jj-sound-mist'; m.className = 'jj-early'; for (var k = 0; k < 5; k++) m.innerHTML += '<div class="jj-mist-bar"></div>';
    b.addEventListener('mouseenter', function () { if (!b._jjWired) b._jjWant = 'hover'; });
    b.addEventListener('mouseleave', function () { if (!b._jjWired && b._jjWant === 'hover') b._jjWant = null; });
    b.addEventListener('click', function () { if (!b._jjWired) b._jjWant = 'open'; });
    document.body.appendChild(m); document.body.appendChild(b);
  };
  window.jjSoundEarly.v = 2;
  if (document.body) window.jjSoundEarly(); else document.addEventListener('DOMContentLoaded', window.jjSoundEarly);
})();
/* ============================================================================
   Joe's Journey — accurate page loader  (hosted via GitHub + raw.githack.com)

   A REAL progress loader, not a timed spinner. It measures the actual bytes of a
   known set of heavy assets as they download and moves Joe by that true %.
   Two looks (A/B):
     variant:'journey' — whole route on screen, Joe trots past the story landmarks
     variant:'scroll'  — Joe centred, the world slides past him, progress bar below
   Joe is a FEW-FRAME trot cycle (frames:[url,url,...] @ fps). Reveals only when the
   assets are truly ready (+ a small minTime so fast loads still read as a journey).

     JJLoader.start({
       variant:'journey',                       // or 'scroll'
       assets:['https://.../fly-2.riv', ...],   // what to gate on (real bytes)
       frames:['joe-trot-1.png', ... ], fps:8,  // the trot cycle
       minTime:900, maxWait:15000, decode:true,
       onReady:function(){ ...start the intro / fade the page in... }
     });
   No fake trickle: the bar only moves on real bytes; it eases toward the true
   value (never past it). Supply opts.driver(onProgress,onDone) to feed your own
   source (e.g. an AJAX page fetch, or a controlled demo).
   ============================================================================ */
(function () {
  var JJ = (window.JJLoader = window.JJLoader || {});
  JJ.version = 'L23 · the system pointer shows until the drawn cursor is live (never a moment without one) · L22 · the story never stands still at the start: it eases up to 12% by itself while the first bytes are awaited · L21 · the early sound moon starts quiet (light moon, resting bars) unless the stored state is muted; muted and quiet no longer share a look; L20 · the sound moon is drawn here, at first paint, and pinned above every loader / overlay / curtain (site-footer adopts it); L19 · pill: deep blur fade (F 125, runs into the bleed) and the title kept by its own letters, not a box — no straight line above the scene; L18 · pill art bleeds past its edge: no hard line round any pill; L17 · pill loaders: deep feather, hint as a subtitle; L16 · precam moon behind the grass; L15 pill variant (Storytime fight, My Story evolution)';   // bump every edit — verify in console
  window.JJ_LOADER_BUILD = JJ.version;
  try { console.log('%c[JJ] jj-loader.js build: ' + JJ.version, 'color:#FF00F5;font-weight:bold'); } catch (e) {}

  /* ---------- 1. MEASURE: true byte progress of a known asset set ---------- */
  function measure(urls, onProgress, onReady) {
    urls = (urls || []).filter(Boolean);
    if (!urls.length) { onProgress(1); onReady(); return; }
    var NOMINAL = 400 * 1024, size = {}, got = {}, done = {}, finished = false;
    function total() { var t = 0; urls.forEach(function (u) { t += (size[u] || NOMINAL); }); return t; }
    function loaded() { var l = 0; urls.forEach(function (u) { l += Math.min(got[u] || 0, size[u] || NOMINAL); }); return l; }
    function tick() {
      if (finished) return;
      onProgress(Math.min(0.999, loaded() / total()));
      if (urls.every(function (u) { return done[u]; })) { finished = true; onProgress(1); onReady(); }
    }
    function complete(u) { got[u] = size[u] = (size[u] || got[u] || NOMINAL); done[u] = true; tick(); }
    urls.forEach(function (u) {
      got[u] = 0;
      fetch(u, { cache: 'force-cache', mode: 'cors' }).then(function (res) {
        var len = +res.headers.get('content-length'); if (len > 0) size[u] = len;
        if (!res.body || !res.body.getReader) { res.arrayBuffer().then(function (b) { got[u] = b.byteLength; if (!size[u]) size[u] = b.byteLength; done[u] = true; tick(); }).catch(function () { complete(u); }); return; }
        var reader = res.body.getReader();
        (function pump() { reader.read().then(function (r) { if (r.done) { if (!size[u]) size[u] = got[u]; done[u] = true; tick(); return; } got[u] += r.value.length; tick(); pump(); }).catch(function () { complete(u); }); })();
        tick();
      }).catch(function () { complete(u); });
    });
    tick();
  }
  function decodeImgs(urls, cb) {
    var left = 0, fired = false; function one() { if (--left <= 0 && !fired) { fired = true; cb(); } }
    (urls || []).forEach(function (u) { if (/\.(png|jpe?g|webp|gif|avif|svg)(\?|$)/i.test(u)) { left++; var im = new Image(); im.onload = im.onerror = one; im.src = u; } });
    if (left === 0) cb();
  }

  /* ---------- shape helpers (story landmarks) ---------- */
  function house(c){ return '<polygon points="-18,0 0,-16 18,0" fill="'+c+'"/><rect x="-15" y="0" width="30" height="22" fill="'+c+'"/><rect x="-4" y="8" width="9" height="14" fill="#2a2030"/>'; }
  function mug(c){ return '<rect x="-11" y="-4" width="20" height="26" rx="3" fill="'+c+'"/><rect x="7" y="2" width="9" height="14" rx="4" fill="none" stroke="'+c+'" stroke-width="4"/><ellipse cx="-1" cy="-5" rx="12" ry="5" fill="#fff7e6"/>'; }
  function pine(c){ return '<rect x="-3" y="18" width="6" height="10" fill="#5a4632"/><polygon points="0,-14 -14,6 14,6" fill="'+c+'"/><polygon points="0,-2 -16,20 16,20" fill="'+c+'"/>'; }
  function mtn(c){ return '<polygon points="-22,22 -2,-20 16,22" fill="'+c+'"/><polygon points="-2,-20 -9,-6 5,-6" fill="#e9eef7"/><polygon points="6,22 22,-6 34,22" fill="'+c+'"/>'; }
  function castle(c){ return '<rect x="-26" y="-6" width="52" height="40" fill="'+c+'"/><rect x="-26" y="-16" width="10" height="12" fill="'+c+'"/><rect x="-6" y="-16" width="12" height="12" fill="'+c+'"/><rect x="16" y="-16" width="10" height="12" fill="'+c+'"/><rect x="-4" y="14" width="10" height="20" fill="#2a2030"/><line x1="22" y1="-16" x2="22" y2="-42" stroke="'+c+'" stroke-width="3"/><polygon points="22,-42 44,-36 22,-30" fill="#FF00F5"/>'; }
  var STARS = '<circle cx="120" cy="50" r="2" fill="#fff" opacity=".5"/><circle cx="300" cy="35" r="1.5" fill="#fff" opacity=".4"/><circle cx="560" cy="60" r="2" fill="#fff" opacity=".5"/><circle cx="820" cy="40" r="1.5" fill="#fff" opacity=".4"/><circle cx="700" cy="85" r="1.5" fill="#fff" opacity=".35"/><circle cx="440" cy="80" r="1.3" fill="#fff" opacity=".3"/><circle cx="220" cy="140" r="1.4" fill="#aeb6c4" opacity=".35"/><circle cx="640" cy="150" r="1.3" fill="#aeb6c4" opacity=".3"/><circle cx="930" cy="120" r="1.5" fill="#aeb6c4" opacity=".35"/>';
  var DEFS = '<defs><linearGradient id="jjsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101c34"/><stop offset="1" stop-color="#0a1222"/></linearGradient></defs>';

  /* ---- shared night dressing (the landing-loader look): swirl clouds, star sprites, moon ---- */
  var NIGHT_SCDN = 'https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/';
  var NIGHT_XSTAR = NIGHT_SCDN + '67212bf05ed02917043863f9_x-star.svg';
  var NIGHT_WHIRL = NIGHT_SCDN + '67212bf05ed02917043863f5_whirl-star.svg';
  var NIGHT_MOON = 'https://cdn.prod.website-files.com/69c2e676c74b81c8dcbd3651/6a0d67bbb86603f359ae1311_289a8c92ed8a9b7dd3efdae788f3d0ae_Moon.svg';
  var NIGHT_SWIRLS = '<path d="M154.13 722.786C134.663 792.359 165.679 872.402 227.582 912.349C282.721 947.932 354.831 951.928 409.47 988.229C452.604 1016.88 481.494 1063.58 527.571 1087.54C582.4 1116.06 648.881 1106.53 710.776 1112.68C780.82 1119.65 847.293 1147.45 917.329 1154.52C1039.66 1166.88 1164.57 1115.37 1284.4 1142.26C1381.64 1164.08 1464.1 1235.61 1563.63 1242.87C1667.6 1250.45 1761.11 1186.59 1844.42 1125.82C1929.04 1064.09 2014.48 1001.62 2082.34 922.811C2150.21 843.994 2199.9 746.164 2200.46 643.502C2200.65 608.178 2195.07 573.054 2188.2 538.363C2183.39 514.085 2172.64 484.884 2147.36 481.655C2116.19 509.279 2130.73 558.094 2129.87 599.034C2129.19 630.988 2117.53 661.64 2106.01 691.583C2051.54 833.173 1986.58 986.761 1848.88 1057.57C1806.87 1079.17 1760.2 1091.62 1719.22 1114.99C1692.52 1130.22 1668.63 1149.88 1641.26 1163.92C1582.89 1193.85 1510.64 1195.54 1449.63 1171.05C1401.49 1151.73 1360.68 1117.55 1311.85 1099.97C1208.56 1062.78 1090.4 1105.98 984.137 1077.77C942.062 1066.6 903.998 1044.73 866.51 1023.11C820.175 996.389 773.841 969.666 727.506 942.935C683.408 917.497 639.019 891.867 600.533 858.97C534.206 802.279 488.017 725.907 458.18 645.213C443.034 604.24 430.142 559.363 395.632 531.513C377.112 516.571 353.867 507.986 335.2 493.219C273.581 444.487 279.244 345.897 221.042 293.369C186.549 262.241 131.943 254.199 89.4727 273.997C75.9699 280.287 63.3879 289.465 56.133 302.171C49.4634 313.851 47.7938 327.517 46.2447 340.783L4.22152 700.769C0.512325 732.573 -2.96451 766.079 10.1425 795.454" fill="#142846"/>' +
      '<path d="M1505.77 382.415C1505.57 412.05 1463.29 429.37 1437.65 413.234C1412 397.107 1407.16 359.822 1421.98 333.9C1436.82 307.987 1466.44 292.702 1496.41 286.82C1601.58 266.171 1700.23 345.163 1760.98 430.913C1804.57 492.443 1839.18 570.718 1811.19 640.257C1787.34 699.493 1724.87 735.126 1688.93 788.313C1674.35 809.88 1664.2 834.267 1647.49 854.34C1617.62 890.207 1570.78 907.877 1525.74 922.653C1474.76 939.372 1418.22 954.223 1368.31 934.709C1333.65 921.159 1307.12 892.635 1272.83 878.234C1238.56 863.851 1199.9 864.836 1162.75 861.14C1008.02 845.722 861.913 727.442 846.285 577.401C844.874 563.86 844.392 549.902 838.849 537.404C828.445 513.935 803.074 500.961 782.902 484.526C739.613 449.26 717.608 391.033 727.143 337.004C736.283 285.227 770.991 241.643 804.58 200.42C835.691 162.242 866.793 124.064 897.904 85.8861C935.641 39.5738 975.565 -8.43214 1031.13 -32.5519C1064.27 -46.9437 1100.83 -51.7993 1136.82 -56.5048C1194.66 -64.072 1252.5 -71.6308 1310.34 -79.1979C1333.57 -82.2348 1364.85 -80.3243 1370.37 -58.2485C1375.75 -36.7401 1350.3 -21.1136 1329.4 -12.2032C1272.5 12.0417 1217.97 41.5011 1166.76 75.6492C1116.91 108.888 1066.15 154.066 1064.09 212.684C1062.77 250.52 1082.5 286.236 1085.43 323.98C1089.74 379.562 1057.43 433.399 1062.47 488.922C1069.31 564.344 1140.25 616.797 1204.87 659.313C1277.09 706.835 1357.31 756.468 1444.19 748.291C1498.11 743.219 1546.83 716.196 1593.66 689.782C1608.92 681.18 1624.55 672.253 1635.41 658.762C1650.08 640.549 1654.09 616.58 1657.62 593.728C1664.03 552.196 1670.29 508.837 1656.66 468.983C1643.03 429.128 1602.84 394.421 1560.04 400.92C1535.9 404.591 1503.9 417.222 1492.46 396.29" fill="#142846"/>' +
      '<path d="M1389.13 1490.13C1536.66 1489.47 1693.44 1486.25 1817.01 1408.1C1854.86 1384.17 1888.31 1353.83 1927.75 1332.46C1968.62 1310.32 2014.45 1298.6 2058.25 1282.57C2158.75 1245.8 2249.9 1185.29 2321.61 1107.75C2373.87 1051.25 2417.21 981.481 2417.82 905.601C2418.45 827.41 2373.75 751.68 2385.71 674.348C2393.89 621.495 2427.39 576.167 2450.56 527.669C2494.32 436.07 2500.15 324.874 2452.27 235.236C2431.88 197.059 2401.62 160.616 2401.67 117.624C2401.74 45.0647 2485.2 1.45559 2558.5 -13.2449C2628.46 -27.2696 2709.41 -27.2779 2761.77 19.852C2822.98 74.9496 2819.19 167.382 2832.46 247.325C2851.95 364.771 2916.3 470.06 2957.18 582.224C2993.44 681.723 3011.21 786.812 3019.96 892.002C3027.75 985.577 3028.44 1080.51 3009.05 1172.49C2987.69 1273.75 2942.63 1368.62 2897.94 1462.46C2874.26 1512.18 2849.94 1562.84 2811.31 1602.8C2755.54 1660.47 2675.44 1690.07 2595.91 1707.58C2428.45 1744.45 2253.83 1735.67 2084.2 1761.62C1896.31 1790.37 1705.89 1861.62 1521.44 1816.54C1431.22 1794.49 1338.97 1728.71 1339 1638.51" fill="#142846"/>';
  function nightStars() {
    var stars = '';
    var SPK = [[227, 183, 16, .85], [400, 178, 12, .75], [621, 62, 14, .8], [560, 172, 9, .65], [790, 120, 12, .7]];
    for (var i = 0; i < SPK.length; i++)
      stars += '<image href="' + NIGHT_XSTAR + '" x="' + SPK[i][0] + '" y="' + SPK[i][1] + '" width="' + SPK[i][2] + '" height="' + SPK[i][2] + '" opacity="' + SPK[i][3] + '"/>';
    var WHR = [[272, 78, 22], [718, 176, 24], [488, -60, 18], [148, 150, 18]];
    for (i = 0; i < WHR.length; i++)
      stars += '<image href="' + NIGHT_WHIRL + '" x="' + WHR[i][0] + '" y="' + WHR[i][1] + '" width="' + WHR[i][2] + '" height="' + WHR[i][2] + '" opacity=".85"/>';
    var DOTS = [[330, 96, 3, .7], [478, 33, 2.6, .65], [652, 118, 3.4, .6], [560, 5, 2.4, .6], [178, 40, 2.6, .55],
      [814, 60, 2.8, .6], [872, 200, 2.4, .55], [140, 210, 2.6, .5], [700, -80, 2.4, .5], [250, -60, 2.4, .5]];
    for (i = 0; i < DOTS.length; i++)
      stars += '<circle cx="' + DOTS[i][0] + '" cy="' + DOTS[i][1] + '" r="' + DOTS[i][2] + '" fill="white" fill-opacity="' + DOTS[i][3] + '"/>';
    return stars;
  }
  /* the site's space swirls (darker strokes on the sky, like the homepage/game bg) + its grey moon */
  var SWIRLS = '<g fill="none" stroke="#0a1120" stroke-linecap="round" opacity=".85">' +
      '<path d="M120,140 q150,-100 340,-50 q170,45 260,-35" stroke-width="46"/>' +
      '<path d="M520,210 q180,-60 330,-10" stroke-width="34" opacity=".7"/>' +
      '<path d="M-20,230 q120,-50 260,-14" stroke-width="30" opacity=".6"/></g>';
  var MOON = '<g transform="translate(872,64)"><defs><clipPath id="jjmoonc"><circle r="46"/></clipPath></defs>' +
      '<circle r="46" fill="#49525f"/><g clip-path="url(#jjmoonc)"><circle cx="-15" cy="12" r="46" fill="#333c49"/></g>' +
      '<circle cx="14" cy="-12" r="7" fill="#3c4552"/><circle cx="26" cy="8" r="4.5" fill="#3c4552"/><circle cx="2" cy="-26" r="4" fill="#3c4552"/></g>';
  /* a drifting cartoon wave band in the site's style: navy body + grey foam crests + curl dots.
     `humps` = [[w,h],...] repeated; the pattern period = sum of widths, and the CSS drift distance
     must equal that period so the loop is seamless. Alternating hump sizes keeps it organic. */
  function waveBand(cls, yTop, humps, body, foam, foamOp) {
    var period = 0; humps.forEach(function (hp) { period += hp[0]; });
    var d = 'M' + (-period) + ',' + yTop, foamD = '', curls = '', x = -period;
    while (x < 1000 + period) {
      for (var i = 0; i < humps.length; i++) {
        var w = humps[i][0], h = humps[i][1], x1 = x + w;
        d += ' A' + (w / 2) + ' ' + h + ' 0 0 1 ' + x1 + ',' + yTop;
        foamD += 'M' + x + ',' + yTop + ' A' + (w / 2) + ' ' + h + ' 0 0 1 ' + x1 + ',' + yTop + ' ';
        if (h > 15) curls += '<circle cx="' + (x + w * 0.16) + '" cy="' + (yTop - h * 0.55) + '" r="' + (h * 0.22) + '" fill="' + foam + '" opacity="' + (foamOp || 1) + '"/>';
        x = x1;
      }
    }
    d += ' L' + x + ',340 L' + (-period) + ',340 Z';
    return '<g class="' + cls + '"><path d="' + d + '" fill="' + body + '"/>' +
      '<path d="' + foamD + '" fill="none" stroke="' + foam + '" stroke-width="4.5" stroke-linecap="round" opacity="' + (foamOp || 1) + '"/>' + curls + '</g>';
  }

  var LOADER_BASE = window.JJ_LOADER_BASE || window.JJ_SCORE_BASE || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/';

  /* The night dressing is the same handful of files on every loader and it gates the reveal,
     so ask for it the moment this script parses rather than when a loader is started. */
  ['loader-grass.webp', 'loader-guy.webp'].forEach(function (f) {
    var l = document.createElement('link'); l.rel = 'preload'; l.as = 'image'; l.href = LOADER_BASE + f;
    try { l.fetchPriority = 'high'; } catch (e) {}
    (document.head || document.documentElement).appendChild(l);
  });
  [NIGHT_XSTAR, NIGHT_WHIRL, NIGHT_MOON].forEach(function (u) { if (u) { var i = new Image(); i.src = u; } });
  var CSS =
    '@font-face{font-family:"Sketch Gothic School";src:url("' + LOADER_BASE + 'sketch-gothic-school.ttf") format("truetype");font-display:swap;}' +
    '#jjld{position:fixed;inset:0;z-index:2147483000;background:#05070d;display:flex;align-items:center;justify-content:center;transition:opacity .6s ease;font-family:"Joes Journey Headline",Georgia,serif;}' +
    '#jjld.hide{opacity:0;pointer-events:none;}' +
    '#jjld .jjld-curtain{position:absolute;inset:0;background:#000;z-index:99;opacity:1;pointer-events:none;transition:opacity .72s ease;}' +
    '#jjld.revealed .jjld-curtain{opacity:0;}#jjld.to-black .jjld-curtain{opacity:1;}' +
    '#jjld svg{width:100vw;height:100vh;display:block;overflow:visible;}' +   // full-bleed: scene art extends past the viewBox to cover any screen
    '#jjld::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 45%,transparent 55%,rgba(0,0,0,.42) 100%);}' +
    '#jjld .wp{opacity:.34;transition:opacity .45s ease,filter .45s ease;}' +
    '#jjld .wp.lit{opacity:1;filter:drop-shadow(0 0 7px rgba(255,45,149,.75));}' +
    '#jjld .pct{fill:#f0e4c4;font-size:30px;}#jjld .cap{fill:rgba(240,228,196,.55);font-size:13px;letter-spacing:4px;}' +
    '#jjld .trail{transition:none;}' +
    '@keyframes jjdriftB{to{transform:translateX(-170px);}}' +
    '@keyframes jjdriftF{to{transform:translateX(-220px);}}' +
    '@keyframes jjbob{0%,100%{transform:translateY(0);}50%{transform:translateY(-4px);}}' +
    '#jjld .wback{animation:jjdriftB 11s linear infinite;}' +
    '#jjld .wfront{animation:jjdriftF 6.5s linear infinite;}' +
    '#jjld .joe{animation:jjbob 1.7s ease-in-out infinite;}' +
    '#jjld .jjbobw{animation:jjbob 1.7s ease-in-out infinite;}' +   // ONE bob wrapper in fill mode → layers can't drift
    /* evolution stage life-cycle: frozen grey → shiver while painting → alive once coloured */
    '#jjld .evoStage{transform-box:fill-box;transform-origin:50% 100%;}' +
    '@keyframes jjshiver{0%,100%{transform:translateX(0);}25%{transform:translateX(-1px);}75%{transform:translateX(1px);}}' +
    '@keyframes jjwalk{0%,100%{transform:translateY(0) rotate(0deg);}25%{transform:translateY(-3px) rotate(-1.2deg);}50%{transform:translateY(0) rotate(0deg);}75%{transform:translateY(-3px) rotate(1.2deg);}}' +
    '@keyframes jjswim{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-4px) rotate(2deg);}}' +
    '@keyframes jjsquish{0%,100%{transform:scale(1,1);}50%{transform:scale(1.07,0.9);}}' +
    '@keyframes jjtwinkle{0%,100%{opacity:.12;}50%{opacity:.75;}}' +
    '#jjld .jjtw{animation:jjtwinkle 3s ease-in-out infinite;}' +
    /* the intro-style parallax: swirl board drifts one way, starfield + decor the other — like the homepage */
    '@keyframes jjparS{from{transform:translateX(0);}to{transform:translateX(-130px);}}' +
    '@keyframes jjparT{from{transform:translateX(0);}to{transform:translateX(44px);}}' +
    '@keyframes jjparD{from{transform:translateX(0);}to{transform:translateX(-56px);}}' +
    '#jjld .jjparSwirl{animation:jjparS 38s ease-in-out infinite alternate;}' +
    '#jjld .jjparStars{animation:jjparT 38s ease-in-out infinite alternate;}' +
    '#jjld .jjparDeco{animation:jjparD 38s ease-in-out infinite alternate;}' +
    '@keyframes jjspin{to{transform:rotate(360deg);}}' +
    '#jjld .jjsp{transform-box:fill-box;transform-origin:50% 50%;}' +
    /* spotlight mode: the beam pair sways gently and glides between figures */
    '@keyframes jjsway{0%,100%{transform:rotate(-1.4deg);}50%{transform:rotate(1.4deg);}}' +
    '#jjld .jjbeams{transform-box:fill-box;transform-origin:50% 0;animation:jjsway 5.5s ease-in-out infinite;}' +
    '#jjld .jjspot{transition:transform 1s cubic-bezier(.5,0,.2,1);}' +
    '#jjld .evoStage{transition:filter .8s ease;}' +
    '#jjld .evoFillin{animation:jjshiver .18s linear infinite;}' +
    '#jjld .evoWalk{animation:jjwalk .9s ease-in-out infinite;}' +
    '#jjld .evoSwim{animation:jjswim 1.4s ease-in-out infinite;}' +
    '#jjld .evoSquish{animation:jjsquish 1.2s ease-in-out infinite;}' +
    /* the one-shot STEP the moment a figure finishes painting (wrapper), idles live on the inner group */
    '#jjld .evoInner{transform-box:fill-box;transform-origin:50% 100%;}' +
    '@keyframes jjstep{0%{transform:translateX(0) translateY(0);}45%{transform:translateX(5px) translateY(-7px);}100%{transform:translateX(9px) translateY(0);}}' +
    '#jjld .evoStepped{animation:jjstep .5s ease-out forwards;}' +
    /* precam variant: sound waves ripple out, notes drift up, the little guy grows by progress */
    '@keyframes jjsndw{0%{opacity:0;}30%{opacity:.85;}70%{opacity:.3;}100%{opacity:0;}}' +
    '#jjld .jjsndw{animation:jjsndw 2.2s ease-out infinite;}' +
    '@keyframes jjnote{0%{opacity:0;transform:translateY(8px);}25%{opacity:.9;}100%{opacity:0;transform:translateY(-18px);}}' +
    '#jjld .jjnote{transform-box:fill-box;animation:jjnote 2.6s ease-out infinite;}' +
    '@keyframes jjdimK{0%,100%{opacity:.76;}50%{opacity:.36;}}' +
    '#jjld .jjdim{animation:jjdimK 7s ease-in-out infinite;}' +
    '@keyframes jjmpulseK{0%,100%{opacity:.25;}50%{opacity:1;}}' +
    '#jjld .jjmpulse{animation:jjmpulseK 7s ease-in-out infinite;}' +
    '@keyframes jjjelly{0%,100%{transform:translateY(0) scale(1.22,.78);}40%{transform:translateY(-6px) scale(.86,1.18);}68%{transform:translateY(-0.5px) scale(1.1,.92);}82%{transform:translateY(-2px) scale(.95,1.06);}}' +
    '#jjld .jjjelly{animation:jjjelly 1s ease-in-out infinite;}' +
    '@keyframes jjmoonwK{0%,100%{transform:scale(.9);}50%{transform:scale(1.14);}}' +
    '#jjld .jjmoonw{transform-box:fill-box;transform-origin:50% 50%;animation:jjmoonwK 7s ease-in-out infinite;}';

  function mount(html) {
    if (!document.getElementById('jjld-style')) { var st = document.createElement('style'); st.id = 'jjld-style'; st.textContent = CSS + '#jjld svg.jjld-title{position:absolute;left:50%;top:3vh;transform:translateX(-50%);width:min(96vw,1500px);height:26vh;overflow:visible;filter:drop-shadow(0 6px 30px rgba(0,0,0,.75));opacity:0;animation:jjldTtl 1.2s ease .3s forwards;pointer-events:none;z-index:3}.jjld-title text{font-family:"Sketch Gothic School",Georgia,serif;font-size:62px;fill:#eadbb7;letter-spacing:1px}@keyframes jjldTtl{to{opacity:1}}'; document.head.appendChild(st); }
    var el = document.createElement('div'); el.id = 'jjld'; el.innerHTML = html + '<i class="jjld-curtain" aria-hidden="true"></i>'; document.body.appendChild(el);
    if (mount.title) { var tt = document.createElementNS('http://www.w3.org/2000/svg','svg'); tt.setAttribute('class','jjld-title'); tt.setAttribute('viewBox','0 0 1500 260'); tt.setAttribute('role','img'); tt.setAttribute('aria-label',mount.title); tt.innerHTML='<defs><path id="jjld-title-arc" d="M90 185 Q750 35 1410 185"/></defs><text text-anchor="middle"><textPath href="#jjld-title-arc" startOffset="50%">'+String(mount.title).replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</textPath></text>'; el.appendChild(tt); }
    return el;
  }
  function joeSvg(frames) {
    return frames && frames.length ? '<image class="joe" href="' + frames[0] + '" />' : '<circle class="joe" r="10" fill="#FF00F5"/>';
  }

  /* ---------- VARIANT A — the journey (whole route in view) ---------- */
  function Journey(opts, frames) {
    var ROUTE = 'M15,252 C150,252 230,234 360,240 S600,258 745,240 S915,226 985,236';
    var WP = [ {x:120,at:.10,s:house('#3a4256'),lc:'#ff7df4'}, {x:320,at:.30,s:mug('#3a4256'),lc:'#ff7df4'},
      {x:515,at:.52,s:pine('#3a5a48'),lc:'#4fbf87'}, {x:720,at:.74,s:mtn('#3a4256'),lc:'#8a93a8'}, {x:935,at:.97,s:castle('#556'),lc:'#8a93a8'} ];
    var wpHtml = WP.map(function (w, i) { return '<g class="wp" id="jjwp' + i + '" transform="translate(' + w.x + ',150)">' + w.s + '</g>'; }).join('');
    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<rect x="-50" y="-50" width="1100" height="420" fill="url(#jjsky)"/>' + STARS +
        '<path d="M-50,250 Q200,215 460,245 T980,235 L980,330 L-50,330 Z" fill="#141b2b"/>' + wpHtml +
        '<path d="' + ROUTE + '" fill="none" stroke="#2c3346" stroke-width="12" stroke-linecap="round"/>' +
        '<path d="' + ROUTE + '" fill="none" stroke="#232a3a" stroke-width="12" stroke-linecap="round" stroke-dasharray="3 18"/>' +
        '<path class="trail" d="' + ROUTE + '" fill="none" stroke="#FF00F5" stroke-width="8" stroke-linecap="round" opacity=".9"/>' +
        joeSvg(frames) +
        '<text class="pct" x="500" y="293" text-anchor="middle">0%</text>' +
        '<text class="cap" x="500" y="314" text-anchor="middle">THE JOURNEY</text>' +
      '</svg>');
    var trail = el.querySelector('.trail'), L = trail.getTotalLength();
    trail.style.strokeDasharray = L; trail.style.strokeDashoffset = L;
    var AR = opts.frameAR || (200 / 175), FOOT = opts.footFrac != null ? opts.footFrac : (150 / 175);
    var joe = el.querySelector('.joe'), JH = opts.joeH || 66, JW = JH * AR;
    if (joe.tagName.toLowerCase() === 'image') { joe.setAttribute('width', JW); joe.setAttribute('height', JH); }
    var pct = el.querySelector('.pct');
    return { el: el, joe: joe, render: function (p) {
      var pt = trail.getPointAtLength(Math.max(0.001, Math.min(0.999, p)) * L);
      if (joe.tagName.toLowerCase() === 'image') { joe.setAttribute('x', (pt.x - JW / 2).toFixed(1)); joe.setAttribute('y', (pt.y - JH * FOOT).toFixed(1)); }
      else { joe.setAttribute('cx', pt.x.toFixed(1)); joe.setAttribute('cy', (pt.y - 14).toFixed(1)); }
      trail.style.strokeDashoffset = (L * (1 - p)).toFixed(1);
      WP.forEach(function (w, i) { if (p >= w.at) el.querySelector('#jjwp' + i).classList.add('lit'); });
      pct.textContent = Math.round(p * 100) + '%';
    }};
  }

  /* ---------- VARIANT B — scrolling world (Joe centred) ---------- */
  function Scroll(opts, frames) {
    // landmarks live in a wide world; the group slides so each passes centre by progress
    var world = [ {vx:0,s:house('#4a5468'),k:1.7}, {vx:350,s:mug('#4a5468'),k:1.6},
      {vx:700,s:pine('#3f7a58'),k:1.7}, {vx:1050,s:mtn('#4a5468'),k:1.5}, {vx:1400,s:castle('#8a93a8'),k:1.6} ];
    var worldHtml = world.map(function (w) { return '<g transform="translate(' + w.vx + ',150) scale(' + w.k + ')">' + w.s + '</g>'; }).join('');
    var AR = opts.frameAR || (200 / 175), FOOT = opts.footFrac != null ? opts.footFrac : (150 / 175);
    var JH = opts.joeH || 150, JW = JH * AR, CENTER = 505, ROAD = 258;   // hooves ride the front crests
    var JX = CENTER - JW / 2, JY = ROAD - JH * FOOT;
    var greys = (opts.fillFrames || []).filter(Boolean);

    /* paint-fill mode: grey Joe underneath, colour Joe on top clipped by a rising liquid.
       ALL frames (grey + colour) are mounted ONCE as stacked <image>s and swapped by toggling
       visibility — swapping href on two live images decodes async per layer, so grey and colour
       could show DIFFERENT gallop poses (looked like two horses). A style flip is synchronous:
       both layers always show the same pose. One bob wrapper keeps them phase-locked too. */
    var joeHtml, liq = null;
    if (greys.length && frames.length) {
      var lw = 34, lx0 = JX - 100, surf = 'M' + lx0 + ',0', n = Math.ceil((JW + 240) / lw);
      for (var li = 0; li < n; li++) surf += ' A' + (lw / 2) + ' 5 0 0 1 ' + (lx0 + (li + 1) * lw) + ',0';
      surf += ' L' + (lx0 + n * lw) + ',' + (JH + 80) + ' L' + lx0 + ',' + (JH + 80) + ' Z';
      var stackImgs = function (urls, cls) {
        var s = '';
        for (var si = 0; si < urls.length; si++)
          s += '<image class="' + cls + '" href="' + urls[si] + '" x="' + JX.toFixed(1) + '" y="' + JY.toFixed(1) + '" width="' + JW + '" height="' + JH + '"' + (si ? ' style="display:none"' : '') + '/>';
        return s;
      };
      joeHtml =
        /* NOTE: clipPath children may only be shapes/text/use — a <g> here is ignored and empties the clip */
        '<clipPath id="jjliq" clipPathUnits="userSpaceOnUse"><path class="liqP" transform="translate(0,' + (JY + JH + 10) + ')" d="' + surf + '"/></clipPath>' +
        '<g class="jjbobw"><g>' + stackImgs(greys, 'jfg') + '</g>' +
        '<g clip-path="url(#jjliq)">' + stackImgs(frames, 'jfc') + '</g></g>';
    } else {
      joeHtml = joeSvg(frames);
    }

    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<rect x="-50" y="-50" width="1100" height="420" fill="url(#jjsky)"/>' + SWIRLS + STARS + MOON +
        '<g id="jjmid">' + worldHtml + '</g>' +
        /* speed streaks above the water */
        '<g stroke="rgba(255,255,255,.14)" stroke-width="3" stroke-linecap="round">' +
          '<line x1="415" y1="196" x2="378" y2="196"/><line x1="398" y1="212" x2="352" y2="212"/><line x1="420" y1="228" x2="390" y2="228"/></g>' +
        /* the sea: back band (slate, slow) + front band (navy, faster) drifting seamlessly */
        waveBand('wback', 246, [[95, 18], [75, 12]], '#39434f', '#78818c', .9) +
        waveBand('wfront', 266, [[130, 30], [90, 20]], '#142a47', '#c9cfd9', .95) +
        joeHtml +
        '<rect x="340" y="300" width="320" height="9" rx="4.5" fill="rgba(255,255,255,.14)"/>' +
        '<rect class="bar" x="340" y="300" width="0" height="9" rx="4.5" fill="#FF00F5"/>' +
        '<text class="pct" x="500" y="292" text-anchor="middle" style="font-size:22px">0%</text>' +
      '</svg>');
    var mid = el.querySelector('#jjmid'), bar = el.querySelector('.bar'), pct = el.querySelector('.pct');
    var joe = el.querySelector('.joe');
    liq = el.querySelector('.liqP');
    if (joe && joe.tagName.toLowerCase() === 'image') { joe.setAttribute('width', JW); joe.setAttribute('height', JH); joe.setAttribute('x', JX.toFixed(1)); joe.setAttribute('y', JY.toFixed(1)); }
    else if (joe && joe.tagName.toLowerCase() !== 'image') { joe.setAttribute('cx', CENTER); joe.setAttribute('cy', ROAD - 14); }
    var slice = function (sel) { return Array.prototype.slice.call(el.querySelectorAll(sel)); };
    var colImgs = slice('.jfc'), gryImgs = slice('.jfg'), curF = 0;
    var setFrame = colImgs.length ? function (i) {
      if (i === curF) return;
      colImgs[curF].style.display = 'none'; gryImgs[curF].style.display = 'none';
      colImgs[i].style.display = ''; gryImgs[i].style.display = '';
      curF = i;
    } : null;
    return { el: el, joe: joe, setFrame: setFrame, render: function (p) {
      mid.setAttribute('transform', 'translate(' + (500 - p * 1400).toFixed(1) + ',0)');
      if (liq) {   // surface rises with real %; slosh via attribute transform (CSS anims don't reach clip content)
        var sx = -((performance.now() / 23) % 68);
        liq.setAttribute('transform', 'translate(' + sx.toFixed(1) + ',' + (JY - 10 + (JH + 20) * (1 - p)).toFixed(1) + ')');
      }
      bar.setAttribute('width', (320 * p).toFixed(1));
      pct.textContent = Math.round(p * 100) + '%';
    }};
  }

  /* ---------- VARIANT C — evolution row (each stage paint-fills in turn) ---------- */
  function Evolution(opts) {
    var colour = (opts.stages || []).filter(Boolean), grey = (opts.stagesGrey || []).filter(Boolean);
    var colourB = (opts.stagesB || []).filter(Boolean);          // optional 2nd pose per stage → real steps once alive
    var N = colour.length, S = 84, GAP = 8, GROUND = 243, hasB = colourB.length === N;
    var SPOT = !!opts.spotlight;                                 // movie-premiere mode: shadows + roaming spotlights
    var total = N * S + (N - 1) * GAP, X0 = (1000 - total) / 2;
    var bounds = opts.stageBounds || [];    // per-stage [topFrac,botFrac] of the art's content (for seating)
    var boundsX = opts.stageBoundsX || [];  // per-stage [leftFrac,rightFrac] — the fill sweeps this span
    var clips = '', row = '', xs = [];
    /* fill goes LEFT→RIGHT: the clip is a big rect whose RIGHT edge is a vertical wavy line
       (humps bulge toward the unfilled side); it slides across the figure by progress and the
       wave pattern drifts vertically for the slosh. SPAN covers box + drift period. */
    var lw = 26, SPAN = S + 112;
    for (var i = 0; i < N; i++) {
      var bt = bounds[i] || [0, 1], xb = boundsX[i] || [0, 1];
      var bx = X0 + i * (S + GAP), by = GROUND - S * bt[1];   // seat the CONTENT (not the canvas) on the ground
      xs.push([bx + S * xb[0] - 6, bx + S * xb[1] + 6]);       // content left→right edges of the sweep
      var hn = Math.ceil(SPAN / lw), d = 'M0,0';
      for (var h = 0; h < hn; h++) d += ' A4 ' + (lw / 2) + ' 0 0 1 0,' + ((h + 1) * lw);   // vertical chord → rx is the 4px bulge, ry the half-chord
      d += ' L' + (-S - 160) + ',' + (hn * lw) + ' L' + (-S - 160) + ',0 Z';
      clips += '<clipPath id="jjevo' + i + '" clipPathUnits="userSpaceOnUse"><path class="evoclip" transform="translate(' + xs[i][0] + ',' + (GROUND - S - 60) + ')" d="' + d + '"/></clipPath>';
      /* whole stage (grey + clipped colour) in ONE wrapper so any animation moves both layers —
         and the userSpaceOnUse clip rides along with the transforms, so the fill level stays glued
         to the figure while it moves. Wrapper = one-shot step-forward on completion; inner = the
         infinite idle (phase-offset so the line doesn't march in sync). */
      var box = ' x="' + bx + '" y="' + by.toFixed(1) + '" width="' + S + '" height="' + S + '"';
      row +=
        '<g class="evoStage"><g class="evoInner" style="animation-delay:-' + (i * 0.13).toFixed(2) + 's">' +
          '<image class="evoG" href="' + grey[i] + '"' + box + '/>' +
          '<g clip-path="url(#jjevo' + i + ')">' +
            '<image class="evoA" href="' + colour[i] + '"' + box + '/>' +
            (hasB ? '<image class="evoB" style="display:none" href="' + colourB[i] + '"' + box + '/>' : '') +
          '</g>' +
        '</g></g>';
    }
    /* the landing loader's night dressing: grass line, moon window, sound-on message */
    var GRASS = opts.grass || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/loader-grass.webp';
    var MSG1 = opts.msg1 || 'Please keep the sound on,';
    var MSG2 = opts.msg2 || 'This is an audio enhanced journey\u2026';
    var GRW = 1160, GRH = Math.round(627 / 2508 * 1160);
    var GRTOP = GROUND - Math.round(165 / 627 * GRH);
    [GRASS, NIGHT_MOON].forEach(function (u) { var im = new Image(); im.src = u; });
    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<filter id="jjsoft" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="1.2"/></filter>' +
        '<filter id="jjfeather" filterUnits="userSpaceOnUse" x="-3500" y="-1440" width="8000" height="3200"><feGaussianBlur stdDeviation="85"/></filter>' +
        '<g filter="url(#jjsoft)">' +
          '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#0E1F33"/>' +
          '<g transform="translate(0,-152.5) scale(0.3472)">' + NIGHT_SWIRLS + '</g>' +
          nightStars() +
          '<image href="' + GRASS + '" x="-80" y="' + GRTOP + '" width="' + GRW + '" height="' + GRH + '" preserveAspectRatio="none"/>' +
          '<rect x="-3500" y="' + (GRTOP + GRH - 6) + '" width="8000" height="1600" fill="#504438"/>' +
        '</g>' +
        '<rect class="jjdim" x="-3500" y="-1440" width="8000" height="3200" fill="#000"/>' +
        '<mask id="jjveil"><rect x="-3500" y="-1440" width="8000" height="3200" fill="#fff"/>' +
          '<rect x="150" y="-15" width="700" height="430" rx="160" fill="#000" filter="url(#jjfeather)"/></mask>' +
        '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#000" opacity=".985" mask="url(#jjveil)"/>' +
        '<radialGradient id="jjmoonl" gradientUnits="userSpaceOnUse" cx="500" cy="140" r="185"><stop offset="0" stop-color="#C5E7FF" stop-opacity=".22"/><stop offset=".55" stop-color="#C5E7FF" stop-opacity=".08"/><stop offset="1" stop-color="#C5E7FF" stop-opacity="0"/></radialGradient>' +
        '<radialGradient id="jjmoonpool" gradientUnits="userSpaceOnUse" cx="500" cy="' + GROUND + '" r="230"><stop offset="0" stop-color="#eaf5ff" stop-opacity=".2"/><stop offset="1" stop-color="#eaf5ff" stop-opacity="0"/></radialGradient>' +
        '<g class="jjmpulse"><ellipse cx="500" cy="' + (GROUND + 2) + '" rx="230" ry="24" fill="url(#jjmoonpool)"/></g>' +
        '<g class="jjmoonw">' +
          '<g class="jjmpulse"><circle cx="500" cy="140" r="185" fill="url(#jjmoonl)"/></g>' +
          '<image href="' + NIGHT_MOON + '" x="445" y="85" width="110" height="110"/>' +
        '</g>' +
        '<text x="500" y="58" text-anchor="middle" fill="white" style="font-size:19px">' + MSG1 + '</text>' +
        '<text x="500" y="79" text-anchor="middle" fill="rgba(255,255,255,.85)" style="font-size:12px">' + MSG2 + '</text>' +
        '<rect x="335" y="272" width="339" height="2.6" rx="1.3" fill="rgba(255,255,255,.18)"/>' +
        '<rect class="jjpbar" x="335" y="272" width="0" height="2.6" rx="1.3" fill="#FF00F5"/>' +
        (SPOT ? '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#000" opacity=".93"/>' : '') +  // house lights down — a true black stage, only light and shadow remain
        clips + row +
        (SPOT ?
          '<filter id="jjblur" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>' +
          '<linearGradient id="jjbeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8e8" stop-opacity="0"/><stop offset=".3" stop-color="#fff8e8" stop-opacity=".09"/><stop offset="1" stop-color="#fff8e8" stop-opacity=".22"/></linearGradient>' +
          '<radialGradient id="jjpool"><stop offset="0" stop-color="#fff6dd" stop-opacity=".3"/><stop offset="1" stop-color="#fff6dd" stop-opacity="0"/></radialGradient>' +
          '<g class="jjspot"><g class="jjbeams">' +
            '<path d="M-200,-430 L-152,-430 L70,' + (GROUND + 6) + ' L-86,' + (GROUND + 6) + ' Z" fill="url(#jjbeam)" filter="url(#jjblur)" style="mix-blend-mode:screen"/>' +
            '<path d="M152,-430 L200,-430 L86,' + (GROUND + 6) + ' L-70,' + (GROUND + 6) + ' Z" fill="url(#jjbeam)" filter="url(#jjblur)" style="mix-blend-mode:screen"/>' +
          '</g>' +
          '<ellipse cx="0" cy="' + (GROUND + 6) + '" rx="100" ry="16" fill="url(#jjpool)" style="mix-blend-mode:screen"/></g>'
        : '') +
        '<text class="pct" x="500" y="298" text-anchor="middle" style="font-size:13px">0%</text>' +
      '</svg>');
    var sb = document.getElementById('jj-sound-btn'), sbPrev = null;
    var sbMist = document.getElementById('jj-sound-mist'), sbMistPrev = null;
    if (sb) { sbPrev = sb.style.zIndex; sb.style.zIndex = '2147483200'; }
    if (sbMist) { sbMistPrev = sbMist.style.zIndex; sbMist.style.zIndex = '2147483190'; }
    if (sb || sbMist) {
      var zint = setInterval(function () {
        if (!document.body.contains(el) || el.classList.contains('hide')) {
          if (sb) sb.style.zIndex = sbPrev || '';
          if (sbMist) sbMist.style.zIndex = sbMistPrev || '';
          clearInterval(zint);
        }
      }, 400);
    }
    var pct = el.querySelector('.pct'), pbar = el.querySelector('.jjpbar');
    var clipEls = Array.prototype.slice.call(el.querySelectorAll('.evoclip'));
    var stageEls = Array.prototype.slice.call(el.querySelectorAll('.evoStage'));
    var innerEls = Array.prototype.slice.call(el.querySelectorAll('.evoInner'));
    var aEls = Array.prototype.slice.call(el.querySelectorAll('.evoA'));
    var bEls = Array.prototype.slice.call(el.querySelectorAll('.evoB'));
    var gEls = Array.prototype.slice.call(el.querySelectorAll('.evoG'));
    /* the art arrives over 21 separate CDN fetches — each figure fades in once BOTH its grey and
       colour layers exist, so the row never shows half-loaded */
    stageEls.forEach(function (st) { st.style.opacity = '0'; st.style.transition = 'opacity .5s ease'; });
    (function () {
      for (var si = 0; si < N; si++) (function (si) {
        var left = 2, done = false;
        function one() { if (done || --left > 0) return; done = true; stageEls[si].style.opacity = '1'; }
        [grey[si], colour[si]].forEach(function (u) { var im = new Image(); im.onload = im.onerror = one; im.src = u; });
        setTimeout(function () { if (!done) { done = true; stageEls[si].style.opacity = '1'; } }, 6000);   // never stay blank
      })(si);
    })();
    /* per-stage idle animation once alive: amoeba squishes, fish swims, the rest walk (overridable) */
    var anims = opts.stageAnims || [];
    function animClass(i) { var a = anims[i] || (i === 0 ? 'squish' : (i === 1 ? 'swim' : 'walk'));
      return a === 'squish' ? 'evoSquish' : (a === 'swim' ? 'evoSwim' : 'evoWalk'); }
    /* only ONE character is animated at a time — the latest to be painted. Earlier ones settle
       into a still coloured stance (keeping their stepped-forward spot). Modes per stage:
       frozen (grey) · fill (shiver) · walk (step hop + idle + pose A/B cycle) · done (still). */
    var modes = [], poseFr = [];
    var spotEl = el.querySelector('.jjspot'), curSpot = -1;
    var LIGHT = { fill: 'none', walk: 'none', done: 'brightness(.5) saturate(.8)', frozen: 'brightness(.18) saturate(.35)' };
    return { el: el, joe: null, render: function (p) {
      var now = performance.now();
      var sy = (GROUND - S - 60) - ((now / 26) % 52);            // wave pattern drifts vertically (52 = 2 hump periods)
      var locals = [], aliveIdx = -1;
      for (var i = 0; i < N; i++) {
        locals[i] = Math.max(0, Math.min(1, p * N - i));         // stage i fills during its 1/N slice of the load
        if (locals[i] >= 1) aliveIdx = i;                        // highest completed stage = the one that walks
      }
      if (spotEl) {                                              // glide the beams to the figure whose moment it is
        var act = 0;
        for (i = 0; i < N; i++) if (locals[i] > 0 && locals[i] < 1) { act = i; break; }
        if (locals[N - 1] >= 1) act = N - 1; else if (aliveIdx >= 0 && locals[aliveIdx + 1] === 0) act = aliveIdx;
        if (act !== curSpot) { curSpot = act; spotEl.style.transform = 'translate(' + ((xs[act][0] + xs[act][1]) / 2).toFixed(1) + 'px,0)'; }   // CSS transform → the .jjspot transition tweens the glide
      }
      for (i = 0; i < clipEls.length; i++) {
        var local = locals[i];
        var x = local >= 1 ? xs[i][1] + 24                       // done → park the edge clear of the step-forward hop
                           : xs[i][0] + local * (xs[i][1] - xs[i][0]);   // else sweep left → right across the figure
        clipEls[i].setAttribute('transform', 'translate(' + x.toFixed(1) + ',' + sy.toFixed(1) + ')');
        var mode = local <= 0 ? 'frozen' : (local < 1 ? 'fill' : (i === aliveIdx ? 'walk' : 'done'));
        if (mode !== modes[i]) {
          modes[i] = mode;
          stageEls[i].setAttribute('class', 'evoStage' + (local >= 1 ? ' evoStepped' : ''));   // hop persists once done (forwards fill)
          innerEls[i].setAttribute('class', 'evoInner' + (mode === 'fill' ? ' evoFillin' : (mode === 'walk' ? ' ' + animClass(i) : '')));
          if (SPOT) stageEls[i].style.filter = LIGHT[mode];      // lit in the beam, half-shadow when done, silhouette while waiting
          if (hasB) {
            if (gEls[i]) gEls[i].style.display = local >= 1 ? 'none' : '';
            if (mode !== 'walk') { poseFr[i] = 0; aEls[i].style.display = ''; bEls[i].style.display = 'none'; }   // settled → rest on pose A
          }
        }
        if (hasB && mode === 'walk') {                           // the current one steps: alternate pose A/B
          var fr = Math.floor(now / 320) % 2;
          if (fr !== poseFr[i]) { poseFr[i] = fr; aEls[i].style.display = fr ? 'none' : ''; bEls[i].style.display = fr ? '' : 'none'; }
        }
      }
      pbar.setAttribute('width', Math.max(0, 339 * p).toFixed(1));
      pct.textContent = Math.round(p * 100) + '%';
    }};
  }

  /* ---------- VARIANT G — Precam: the first little guy asks for sound on ---------- */
  function Precam(opts) {
    /* v4 — the user's dark "moon window" frame: full-bleed night scene visible through a big
       FEATHERED ROUNDED-RECT window in the darkness (black to every corner outside it). The
       moon is the site's own Moon.svg and the ONLY light: its glow breathes on a 7s cycle and
       the whole scene brightens with it (the uniform dim layer thins as the glow peaks).
       Moon, texts, progress bar and the guy sit ABOVE the darkness at full opacity.
       Perf: the blurred scene group is static (rasterized once); the breathing is two pure
       opacity animations on separate layers — compositor-only. */
    var GUY = opts.guy || opts.joe;                              // fallback single image (394x297)
    var BODY = opts.body, EYE = opts.eye;                        // split sprite: body rolls, eye stays level
    var GRASS = opts.grass;                                      // loader-grass.webp (2508x627, grass line at row 165)
    var MSG1 = opts.msg1 || 'Please keep the sound on,';
    var MSG2 = opts.msg2 || 'This is an audio enhanced journey\u2026';
    var XSTAR = NIGHT_XSTAR, WHIRL = NIGHT_WHIRL, MOON = NIGHT_MOON;
    [GUY, BODY, EYE, GRASS, XSTAR, WHIRL, MOON].forEach(function (u) { if (u) { var im = new Image(); im.src = u; } });
    var SWIRLS = NIGHT_SWIRLS;
    var stars = nightStars();
    /* layout */
    var LINE = 243;                                              // walkable grass line
    var GW2 = 53, GH2 = 40, GY2 = Math.round(LINE + 2 - GH2 * 0.919);   // fallback single-image seat
    var BX0 = 335, BX1 = 674, BW = BX1 - BX0, BY = 256;
    var GXBASE = BX0 - GW2 / 2;
    /* split-sprite geometry (blob-body.webp 458x376, content bbox (11,6,443,367); eye = eyeball disc) */
    var BW2 = 48.7, BH2 = 40, BY2 = LINE + 2 - 39;               // content bottom seated on the green
    var RCX = GXBASE + 24.1, RCY = BY2 + 19.8;                   // body content centre = roll axis
    var ROLL_D = 38.4;                                           // rolling diameter ~ content height
    var EW = 11.5, EX = GXBASE + 30.1 - EW / 2, EY = BY2 + 22.0 - EW / 2;   // eye centred at (63%,56%) of the blob
    var GRW = 1160, GRH = Math.round(627 / 2508 * 1160);
    var GRTOP = LINE - Math.round(165 / 627 * GRH);
    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<filter id="jjsoft" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="1.2"/></filter>' +
        '<filter id="jjfeather" filterUnits="userSpaceOnUse" x="-3500" y="-1440" width="8000" height="3200"><feGaussianBlur stdDeviation="85"/></filter>' +
        /* ---- blurred, static scene (no moon — he lives above the darkness) ---- */
        '<g filter="url(#jjsoft)">' +
          '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#0E1F33"/>' +
          '<g transform="translate(0,-152.5) scale(0.3472)">' + SWIRLS + '</g>' +
          stars +
          '<image href="' + GRASS + '" x="-80" y="' + GRTOP + '" width="' + GRW + '" height="' + GRH + '" preserveAspectRatio="none"/>' +
          '<rect x="-3500" y="' + (GRTOP + GRH - 6) + '" width="8000" height="1600" fill="#504438"/>' +
        '</g>' +
        /* ---- the darkness: a uniform dim that thins as the moon glows (breathes) ... ---- */
        '<rect class="jjdim" x="-3500" y="-1440" width="8000" height="3200" fill="#000"/>' +
        /* ---- ...and black to every corner outside a feathered rounded-rect window ---- */
        '<mask id="jjveil"><rect x="-3500" y="-1440" width="8000" height="3200" fill="#fff"/>' +
          '<rect x="165" y="-15" width="670" height="420" rx="160" fill="#000" filter="url(#jjfeather)"/></mask>' +
        '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#000" opacity=".985" mask="url(#jjveil)"/>' +
        /* ---- full-opacity layer: the moon (site asset, glow breathing), guy, bar, text ---- */
        '<radialGradient id="jjmoonl" gradientUnits="userSpaceOnUse" cx="497" cy="205" r="200"><stop offset="0" stop-color="#C5E7FF" stop-opacity=".22"/><stop offset=".55" stop-color="#C5E7FF" stop-opacity=".08"/><stop offset="1" stop-color="#C5E7FF" stop-opacity="0"/></radialGradient>' +
        '<radialGradient id="jjmoonpool" gradientUnits="userSpaceOnUse" cx="497" cy="' + LINE + '" r="220"><stop offset="0" stop-color="#eaf5ff" stop-opacity=".2"/><stop offset="1" stop-color="#eaf5ff" stop-opacity="0"/></radialGradient>' +
        '<g class="jjmpulse"><ellipse cx="497" cy="' + (LINE + 2) + '" rx="220" ry="26" fill="url(#jjmoonpool)"/></g>' +
        '<filter id="jjblk" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"/></filter>' +
        '<mask id="jjbehindgrass"><rect x="-3500" y="-1440" width="8000" height="3200" fill="#fff"/>' +
          '<image href="' + GRASS + '" x="-80" y="' + GRTOP + '" width="' + GRW + '" height="' + GRH + '" preserveAspectRatio="none" filter="url(#jjblk)"/>' +
          '<rect x="-3500" y="' + (GRTOP + GRH - 6) + '" width="8000" height="1600" fill="#000"/></mask>' +
        '<g class="jjmoonw" mask="url(#jjbehindgrass)">' +                    // the moon rises BEHIND the grass line
          '<g class="jjmpulse"><circle cx="497" cy="205" r="200" fill="url(#jjmoonl)"/></g>' +
          '<image href="' + MOON + '" x="432" y="140" width="130" height="130"/>' +
        '</g>' +
        '<text x="500" y="134" text-anchor="middle" fill="white" style="font-size:19px">' + MSG1 + '</text>' +
        '<text x="500" y="155" text-anchor="middle" fill="rgba(255,255,255,.85)" style="font-size:12px">' + MSG2 + '</text>' +
        '<rect x="' + BX0 + '" y="' + BY + '" width="' + BW + '" height="2.6" rx="1.3" fill="rgba(255,255,255,.18)"/>' +
        '<rect class="jjpbar" x="' + BX0 + '" y="' + BY + '" width="0" height="2.6" rx="1.3" fill="#FF00F5"/>' +
        '<g class="jjslug"><g class="evoInner jjjelly">' +
          (BODY && EYE
            ? '<g class="jjroll"><image href="' + BODY + '" x="' + GXBASE + '" y="' + BY2 + '" width="' + BW2 + '" height="' + BH2 + '"/></g>' +
              '<image href="' + EYE + '" x="' + EX.toFixed(1) + '" y="' + EY.toFixed(1) + '" width="' + EW + '" height="' + EW + '"/>'
            : '<image href="' + GUY + '" x="' + GXBASE + '" y="' + GY2 + '" width="' + GW2 + '" height="' + GH2 + '"/>') +
        '</g></g>' +
        '<text class="pct" x="500" y="287" text-anchor="middle" style="font-size:13px">0%</text>' +
      '</svg>');
    var pct = el.querySelector('.pct'), bar = el.querySelector('.jjpbar');
    var slug = el.querySelector('.jjslug');
    /* the site's moon sound button rides ABOVE the loader so visitors can mute
       before any audio begins; z restored once the loader has revealed */
    var sb = document.getElementById('jj-sound-btn'), sbPrev = null;
    var sbMist = document.getElementById('jj-sound-mist'), sbMistPrev = null;
    if (sb) { sbPrev = sb.style.zIndex; sb.style.zIndex = '2147483200'; }
    if (sbMist) { sbMistPrev = sbMist.style.zIndex; sbMist.style.zIndex = '2147483190'; }
    if (sb || sbMist) {
      var zint = setInterval(function () {
        if (!document.body.contains(el) || el.classList.contains('hide')) {
          if (sb) sb.style.zIndex = sbPrev || '';
          if (sbMist) sbMist.style.zIndex = sbMistPrev || '';
          clearInterval(zint);
        }
      }, 400);
    }
    var roll = el.querySelector('.jjroll');
    return { el: el, joe: null, render: function (p) {
      pct.textContent = Math.round(p * 100) + '%';
      var tx = BW * p;
      slug.setAttribute('transform', 'translate(' + tx.toFixed(1) + ',0)');
      if (roll) {
        // true rolling: one full turn per circumference of ground covered
        var deg = (tx / (Math.PI * ROLL_D)) * 360;
        roll.setAttribute('transform', 'rotate(' + deg.toFixed(2) + ' ' + RCX.toFixed(1) + ' ' + RCY.toFixed(1) + ')');
      }
      bar.setAttribute('width', tx.toFixed(1));
    }};
  }

  /* ---------- VARIANT F — Joe vs Trogdor (storytime) — the keyed Seedance fight when it lands, the still plate until then ---------- */
  function Fight(opts) {
    var MSG1 = opts.msg1 || 'Please keep the sound on,', MSG2 = opts.msg2 || 'This is an audio enhanced journey\u2026';
    var GRASS = opts.grass || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/loader-grass.webp';
    var GROUND = 243, GRW = 1160, GRH = Math.round(627 / 2508 * 1160), GRTOP = GROUND - Math.round(165 / 627 * GRH);
    var FH = opts.figH || 158, AR = opts.figAR || (908 / 471), FW = Math.round(FH * AR), FX = 500 - FW / 2, FY = GROUND + 6 - FH;
    var clip = opts.clip || null;
    [GRASS, NIGHT_MOON].forEach(function (u) { var im = new Image(); im.src = u; });
    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<filter id="jjsoft" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="1.2"/></filter>' +
        '<g filter="url(#jjsoft)">' +                                   // the same night scene as the other loaders
          '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#0E1F33"/>' +
          '<g transform="translate(0,-152.5) scale(0.3472)">' + NIGHT_SWIRLS + '</g>' +
          nightStars() +
          '<image href="' + GRASS + '" x="-80" y="' + GRTOP + '" width="' + GRW + '" height="' + GRH + '" preserveAspectRatio="none"/>' +
          '<rect x="-3500" y="' + (GRTOP + GRH - 6) + '" width="8000" height="1600" fill="#504438"/>' +
        '</g>' +
        '<radialGradient id="jjmoonl2" gradientUnits="userSpaceOnUse" cx="782" cy="120" r="165"><stop offset="0" stop-color="#C5E7FF" stop-opacity=".2"/><stop offset=".55" stop-color="#C5E7FF" stop-opacity=".07"/><stop offset="1" stop-color="#C5E7FF" stop-opacity="0"/></radialGradient>' +
        '<g class="jjmoonw"><g class="jjmpulse"><circle cx="782" cy="120" r="165" fill="url(#jjmoonl2)"/></g>' +
          '<image href="' + NIGHT_MOON + '" x="740" y="78" width="84" height="84"/></g>' +
        '<ellipse cx="500" cy="' + (GROUND + 6) + '" rx="' + Math.round(FW * 0.42) + '" ry="11" fill="rgba(0,0,0,.32)"/>' +
        '<g class="jjfight" style="transform-box:fill-box;transform-origin:50% 100%">' +
          (clip ? '<foreignObject x="' + FX + '" y="' + FY + '" width="' + FW + '" height="' + FH + '"><video xmlns="http://www.w3.org/1999/xhtml" class="jjfv" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:contain;display:block;background:transparent" poster="' + (opts.img || '') + '">' + ((clip.mov && (!clip.webm || jjClipSrc('').indexOf('.mov') > 0)) ? '<source src="' + clip.mov + '" type=\'video/mp4; codecs="hvc1"\'/>' : clip.webm ? '<source src="' + clip.webm + '" type="video/webm"/>' : '') + '</video></foreignObject>' : '') +
          '<image class="jjfimg" href="' + (opts.img || '') + '" x="' + FX + '" y="' + FY + '" width="' + FW + '" height="' + FH + '" preserveAspectRatio="xMidYMax meet" style="' + (clip ? 'opacity:0;' : '') + 'transition:opacity .4s ease"/>' +
        '</g>' +
        '<text x="500" y="58" text-anchor="middle" fill="white" style="font-size:19px">' + MSG1 + '</text>' +
        '<text x="500" y="79" text-anchor="middle" fill="rgba(255,255,255,.85)" style="font-size:12px">' + MSG2 + '</text>' +
        '<rect x="335" y="272" width="339" height="2.6" rx="1.3" fill="rgba(255,255,255,.18)"/>' +
        '<rect class="bar" x="335" y="272" width="0" height="2.6" rx="1.3" fill="#FF00F5"/>' +
        '<text class="pct" x="500" y="298" text-anchor="middle" style="font-size:16px">0%</text>' +
      '</svg>');
    var pct = el.querySelector('.pct'), bar = el.querySelector('.bar'), g = el.querySelector('.jjfight'), v = el.querySelector('.jjfv'), im = el.querySelector('.jjfimg');
    if (v) { var fb = function () { im.style.opacity = '1'; if (v.parentNode) v.parentNode.style.display = 'none'; };
      v.addEventListener('error', fb); setTimeout(function () { if (v.readyState < 2) fb(); }, 4500);
      var pp = v.play(); if (pp && pp.catch) pp.catch(function () {}); }
    return { el: el, joe: null, render: function (p) {
      pct.textContent = Math.round(p * 100) + '%'; bar.setAttribute('width', (339 * p).toFixed(1));
      if (!v || v.readyState < 2) { var now = performance.now(); g.style.transform = 'translateY(' + (Math.sin(now / 260) * 2).toFixed(2) + 'px)'; }   // the still plate breathes until the clip is ready
    }};
  }
  /* ---------- VARIANT G — Precam: the first little guy asks for sound on ---------- */
  function Precam(opts) {
    /* v4 — the user's dark "moon window" frame: full-bleed night scene visible through a big
       FEATHERED ROUNDED-RECT window in the darkness (black to every corner outside it). The
       moon is the site's own Moon.svg and the ONLY light: its glow breathes on a 7s cycle and
       the whole scene brightens with it (the uniform dim layer thins as the glow peaks).
       Moon, texts, progress bar and the guy sit ABOVE the darkness at full opacity.
       Perf: the blurred scene group is static (rasterized once); the breathing is two pure
       opacity animations on separate layers — compositor-only. */
    var GUY = opts.guy || opts.joe;                              // fallback single image (394x297)
    var BODY = opts.body, EYE = opts.eye;                        // split sprite: body rolls, eye stays level
    var GRASS = opts.grass;                                      // loader-grass.webp (2508x627, grass line at row 165)
    var MSG1 = opts.msg1 || 'Please keep the sound on,';
    var MSG2 = opts.msg2 || 'This is an audio enhanced journey\u2026';
    var XSTAR = NIGHT_XSTAR, WHIRL = NIGHT_WHIRL, MOON = NIGHT_MOON;
    [GUY, BODY, EYE, GRASS, XSTAR, WHIRL, MOON].forEach(function (u) { if (u) { var im = new Image(); im.src = u; } });
    var SWIRLS = NIGHT_SWIRLS;
    var stars = nightStars();
    /* layout */
    var LINE = 243;                                              // walkable grass line
    var GW2 = 53, GH2 = 40, GY2 = Math.round(LINE + 2 - GH2 * 0.919);   // fallback single-image seat
    var BX0 = 335, BX1 = 674, BW = BX1 - BX0, BY = 256;
    var GXBASE = BX0 - GW2 / 2;
    /* split-sprite geometry (blob-body.webp 458x376, content bbox (11,6,443,367); eye = eyeball disc) */
    var BW2 = 48.7, BH2 = 40, BY2 = LINE + 2 - 39;               // content bottom seated on the green
    var RCX = GXBASE + 24.1, RCY = BY2 + 19.8;                   // body content centre = roll axis
    var ROLL_D = 38.4;                                           // rolling diameter ~ content height
    var EW = 11.5, EX = GXBASE + 30.1 - EW / 2, EY = BY2 + 22.0 - EW / 2;   // eye centred at (63%,56%) of the blob
    var GRW = 1160, GRH = Math.round(627 / 2508 * 1160);
    var GRTOP = LINE - Math.round(165 / 627 * GRH);
    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<filter id="jjsoft" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="1.2"/></filter>' +
        '<filter id="jjfeather" filterUnits="userSpaceOnUse" x="-3500" y="-1440" width="8000" height="3200"><feGaussianBlur stdDeviation="85"/></filter>' +
        /* ---- blurred, static scene (no moon — he lives above the darkness) ---- */
        '<g filter="url(#jjsoft)">' +
          '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#0E1F33"/>' +
          '<g transform="translate(0,-152.5) scale(0.3472)">' + SWIRLS + '</g>' +
          stars +
          '<image href="' + GRASS + '" x="-80" y="' + GRTOP + '" width="' + GRW + '" height="' + GRH + '" preserveAspectRatio="none"/>' +
          '<rect x="-3500" y="' + (GRTOP + GRH - 6) + '" width="8000" height="1600" fill="#504438"/>' +
        '</g>' +
        /* ---- the darkness: a uniform dim that thins as the moon glows (breathes) ... ---- */
        '<rect class="jjdim" x="-3500" y="-1440" width="8000" height="3200" fill="#000"/>' +
        /* ---- ...and black to every corner outside a feathered rounded-rect window ---- */
        '<mask id="jjveil"><rect x="-3500" y="-1440" width="8000" height="3200" fill="#fff"/>' +
          '<rect x="165" y="-15" width="670" height="420" rx="160" fill="#000" filter="url(#jjfeather)"/></mask>' +
        '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#000" opacity=".985" mask="url(#jjveil)"/>' +
        /* ---- full-opacity layer: the moon (site asset, glow breathing), guy, bar, text ---- */
        '<radialGradient id="jjmoonl" gradientUnits="userSpaceOnUse" cx="497" cy="205" r="200"><stop offset="0" stop-color="#C5E7FF" stop-opacity=".22"/><stop offset=".55" stop-color="#C5E7FF" stop-opacity=".08"/><stop offset="1" stop-color="#C5E7FF" stop-opacity="0"/></radialGradient>' +
        '<radialGradient id="jjmoonpool" gradientUnits="userSpaceOnUse" cx="497" cy="' + LINE + '" r="220"><stop offset="0" stop-color="#eaf5ff" stop-opacity=".2"/><stop offset="1" stop-color="#eaf5ff" stop-opacity="0"/></radialGradient>' +
        '<g class="jjmpulse"><ellipse cx="497" cy="' + (LINE + 2) + '" rx="220" ry="26" fill="url(#jjmoonpool)"/></g>' +
        '<filter id="jjblk" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"/></filter>' +
        '<mask id="jjbehindgrass"><rect x="-3500" y="-1440" width="8000" height="3200" fill="#fff"/>' +
          '<image href="' + GRASS + '" x="-80" y="' + GRTOP + '" width="' + GRW + '" height="' + GRH + '" preserveAspectRatio="none" filter="url(#jjblk)"/>' +
          '<rect x="-3500" y="' + (GRTOP + GRH - 6) + '" width="8000" height="1600" fill="#000"/></mask>' +
        '<g class="jjmoonw" mask="url(#jjbehindgrass)">' +                    // the moon rises BEHIND the grass line
          '<g class="jjmpulse"><circle cx="497" cy="205" r="200" fill="url(#jjmoonl)"/></g>' +
          '<image href="' + MOON + '" x="432" y="140" width="130" height="130"/>' +
        '</g>' +
        '<text x="500" y="134" text-anchor="middle" fill="white" style="font-size:19px">' + MSG1 + '</text>' +
        '<text x="500" y="155" text-anchor="middle" fill="rgba(255,255,255,.85)" style="font-size:12px">' + MSG2 + '</text>' +
        '<rect x="' + BX0 + '" y="' + BY + '" width="' + BW + '" height="2.6" rx="1.3" fill="rgba(255,255,255,.18)"/>' +
        '<rect class="jjpbar" x="' + BX0 + '" y="' + BY + '" width="0" height="2.6" rx="1.3" fill="#FF00F5"/>' +
        '<g class="jjslug"><g class="evoInner jjjelly">' +
          (BODY && EYE
            ? '<g class="jjroll"><image href="' + BODY + '" x="' + GXBASE + '" y="' + BY2 + '" width="' + BW2 + '" height="' + BH2 + '"/></g>' +
              '<image href="' + EYE + '" x="' + EX.toFixed(1) + '" y="' + EY.toFixed(1) + '" width="' + EW + '" height="' + EW + '"/>'
            : '<image href="' + GUY + '" x="' + GXBASE + '" y="' + GY2 + '" width="' + GW2 + '" height="' + GH2 + '"/>') +
        '</g></g>' +
        '<text class="pct" x="500" y="287" text-anchor="middle" style="font-size:13px">0%</text>' +
      '</svg>');
    var pct = el.querySelector('.pct'), bar = el.querySelector('.jjpbar');
    var slug = el.querySelector('.jjslug');
    /* the site's moon sound button rides ABOVE the loader so visitors can mute
       before any audio begins; z restored once the loader has revealed */
    var sb = document.getElementById('jj-sound-btn'), sbPrev = null;
    var sbMist = document.getElementById('jj-sound-mist'), sbMistPrev = null;
    if (sb) { sbPrev = sb.style.zIndex; sb.style.zIndex = '2147483200'; }
    if (sbMist) { sbMistPrev = sbMist.style.zIndex; sbMist.style.zIndex = '2147483190'; }
    if (sb || sbMist) {
      var zint = setInterval(function () {
        if (!document.body.contains(el) || el.classList.contains('hide')) {
          if (sb) sb.style.zIndex = sbPrev || '';
          if (sbMist) sbMist.style.zIndex = sbMistPrev || '';
          clearInterval(zint);
        }
      }, 400);
    }
    var roll = el.querySelector('.jjroll');
    return { el: el, joe: null, render: function (p) {
      pct.textContent = Math.round(p * 100) + '%';
      var tx = BW * p;
      slug.setAttribute('transform', 'translate(' + tx.toFixed(1) + ',0)');
      if (roll) {
        // true rolling: one full turn per circumference of ground covered
        var deg = (tx / (Math.PI * ROLL_D)) * 360;
        roll.setAttribute('transform', 'rotate(' + deg.toFixed(2) + ' ' + RCX.toFixed(1) + ' ' + RCY.toFixed(1) + ')');
      }
      bar.setAttribute('width', tx.toFixed(1));
    }};
  }

  /* ---------- VARIANT F — Joe vs Trogdor (storytime) — the keyed Seedance fight when it lands, the still plate until then ---------- */
  /* ---------- VARIANT G — the portal (Part Two) — the four frames of the sheet wake up with progress, the orb circles the arch ---------- */
  function Portal(opts) {
    var MSG1 = opts.msg1 || 'Grab your popcorn, it\u2019s about to go down', MSG2 = opts.msg2 || '';
    var FR = (opts.frames || []).filter(Boolean); if (!FR.length) FR = [''];
    var GROUND = 268, PH = 230, PW = Math.round(PH * 1.04), PX = (1000 - PW) / 2, PY = GROUND - PH + 10;
    var el = mount(
      '<svg viewBox="0 0 1000 320">' + DEFS +
        '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#04060c"/>' +
        '<radialGradient id="jjpglow"><stop offset="0" stop-color="#b04cff" stop-opacity=".55"/><stop offset=".6" stop-color="#7a2cff" stop-opacity=".18"/><stop offset="1" stop-color="#7a2cff" stop-opacity="0"/></radialGradient>' +
        '<ellipse class="jjpg" cx="500" cy="' + (GROUND - PH * .45) + '" rx="' + (PW * .9) + '" ry="' + (PH * .8) + '" fill="url(#jjpglow)" style="opacity:.35;transition:opacity 1.2s ease"/>' +
        '<rect x="-3500" y="' + GROUND + '" width="8000" height="1600" fill="#0a0f1c"/><line x1="-3500" y1="' + GROUND + '" x2="4500" y2="' + GROUND + '" stroke="#1a2334" stroke-width="2"/>' +
        FR.map(function (u, i) { return '<image class="jjpf" data-i="' + i + '" href="' + u + '" x="' + PX + '" y="' + PY + '" width="' + PW + '" height="' + PH + '" preserveAspectRatio="xMidYMax meet" style="opacity:' + (i ? 0 : 1) + ';transition:opacity .9s ease"/>'; }).join('') +
        '<g class="jjorb"><circle r="9" fill="#ffd54a" stroke="#1b1030" stroke-width="2"/><circle r="3.5" cx="-2.5" cy="-2.5" fill="#fff6c8"/></g>' +
        '<text x="500" y="52" text-anchor="middle" fill="white" style="font-size:19px">' + MSG1 + '</text>' +
        '<text x="500" y="73" text-anchor="middle" fill="rgba(255,255,255,.85)" style="font-size:12px">' + MSG2 + '</text>' +
        '<rect x="335" y="288" width="330" height="4" rx="2" fill="rgba(255,255,255,.14)"/><rect class="bar" x="335" y="288" width="0" height="4" rx="2" fill="#b04cff"/>' +
        '<text class="pct" x="500" y="311" text-anchor="middle" style="font-size:16px">0%</text>' +
      '</svg>');
    var pct = el.querySelector('.pct'), bar = el.querySelector('.bar'), fr = el.querySelectorAll('.jjpf'), orb = el.querySelector('.jjorb'), glow = el.querySelector('.jjpg'), cur = 0;
    return { el: el, joe: null, render: function (p) {
      pct.textContent = Math.round(p * 100) + '%'; bar.setAttribute('width', (330 * p).toFixed(1));
      var want = Math.min(fr.length - 1, Math.floor(p * (fr.length - 1) + 0.0001)); if (p > .96) want = fr.length - 1;
      if (want !== cur) { cur = want; fr.forEach(function (f, i) { f.style.opacity = i === cur ? '1' : '0'; }); glow.style.opacity = cur === fr.length - 1 ? '1' : (.35 + cur * .15).toFixed(2); }
      var t = performance.now() / 1000, cx = 500 + Math.cos(t * 1.1) * (PW * .34), cy = (PY + 8) + Math.sin(t * 2.2) * 10 - Math.abs(Math.sin(t * 1.1)) * 14;   // the orb rides an arc over the top of the portal
      orb.setAttribute('transform', 'translate(' + cx.toFixed(1) + ',' + cy.toFixed(1) + ')');
    }};
  }
  /* ---------- VARIANT E — Trogdor flies to the wizard (contact) — black stage + tracking spotlight ---------- */
  function Trogdor(opts) {
    /* the dragon = the CONTACT PAGE's own sprite sheet (9×8 grid, 72 frames @ 12fps), stepped by
       moving the sheet under a fixed clip window — the exact animation the user knows from the game */
    var SHEET = opts.sheet, WIZ = opts.wizard, COLS = 9, ROWS = 8, NF = 72;
    var DW = 200, DH = 104;                                      // one cell, at display size (cell aspect 340:177)
    var GROUND = 272, FLY_X0 = -80, FLY_X1 = 830, FLY_Y = 128;
    var WX = 880, WW = 96, WH = 150;
    [SHEET, WIZ].forEach(function (u) { var im = new Image(); im.src = u; });
    var el = mount(
      '<svg viewBox="0 0 1000 320">' +
        '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#04060c"/>' +                       // the dark stage
        '<rect x="-3500" y="' + GROUND + '" width="8000" height="1600" fill="#0a0f1c"/>' +
        '<line x1="-3500" y1="' + GROUND + '" x2="4500" y2="' + GROUND + '" stroke="#1a2334" stroke-width="2"/>' +
        '<image class="wiz" href="' + WIZ + '" x="' + WX + '" y="' + (GROUND - WH) + '" width="' + WW + '" height="' + WH + '" style="filter:brightness(.2) saturate(.35);transition:filter 1s ease"/>' +
        '<clipPath id="jjtcell" clipPathUnits="userSpaceOnUse"><rect x="0" y="0" width="' + DW + '" height="' + DH + '"/></clipPath>' +
        '<g class="trogW" style="will-change:transform"><g clip-path="url(#jjtcell)">' +
          '<image class="sheet" href="' + SHEET + '" x="0" y="0" width="' + (DW * COLS) + '" height="' + (DH * ROWS) + '"/>' +
        '</g></g>' +
        '<filter id="jjblur" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>' +
        '<linearGradient id="jjbeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8e8" stop-opacity="0"/><stop offset=".3" stop-color="#fff8e8" stop-opacity=".09"/><stop offset="1" stop-color="#fff8e8" stop-opacity=".22"/></linearGradient>' +
        '<radialGradient id="jjpool"><stop offset="0" stop-color="#fff6dd" stop-opacity=".28"/><stop offset="1" stop-color="#fff6dd" stop-opacity="0"/></radialGradient>' +
        '<g class="jjspot" style="transition:transform .4s cubic-bezier(.4,0,.3,1)"><g class="jjbeams">' +
          '<path d="M-230,-430 L-176,-430 L96,' + (GROUND + 6) + ' L-116,' + (GROUND + 6) + ' Z" fill="url(#jjbeam)" filter="url(#jjblur)" style="mix-blend-mode:screen"/>' +
          '<path d="M176,-430 L230,-430 L116,' + (GROUND + 6) + ' L-96,' + (GROUND + 6) + ' Z" fill="url(#jjbeam)" filter="url(#jjblur)" style="mix-blend-mode:screen"/>' +
        '</g><ellipse cx="0" cy="' + (GROUND + 6) + '" rx="130" ry="18" fill="url(#jjpool)" style="mix-blend-mode:screen"/></g>' +
        '<text class="pct" x="500" y="306" text-anchor="middle" style="font-size:22px">0%</text>' +
      '</svg>');
    var trog = el.querySelector('.trogW'), sheet = el.querySelector('.sheet'), wiz = el.querySelector('.wiz'),
        spot = el.querySelector('.jjspot'), pct = el.querySelector('.pct');
    var fi = 0, lastF = 0, wizLit = false;
    return { el: el, joe: null, render: function (p) {
      var now = performance.now();
      var tx = FLY_X0 + p * (FLY_X1 - FLY_X0 - DW * 0.4);
      var ty = FLY_Y + Math.sin(now / 480) * 13 + Math.sin(now / 1370) * 7;   // layered bob = organic hover
      trog.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px)';
      if (now - lastF > 1000 / (opts.fps || 12)) {               // step the sheet under the clip window — like the game
        lastF = now; fi = (fi + 1) % NF;
        sheet.setAttribute('x', String(-(fi % COLS) * DW)); sheet.setAttribute('y', String(-Math.floor(fi / COLS) * DH));
      }
      spot.style.transform = 'translate(' + (tx + DW / 2).toFixed(1) + 'px,0)';   // the beams chase him (CSS-eased lag)
      if (!wizLit && p > 0.9) { wizLit = true; wiz.style.filter = 'none'; }       // the wizard lights up as Trogdor arrives
      pct.textContent = Math.round(p * 100) + '%';
    }};
  }

  /* ---------- VARIANT F — Joe juggles the BBC blocks (BBC case studies) — fixed spotlight ---------- */
  var TILE_B = 'M3.11662 95.7805C0.558848 96.8213 -0.67092 99.7385 0.369871 102.296L92.7113 329.228C93.7521 331.786 96.6693 333.016 99.2271 331.975L333.701 236.564C336.259 235.524 337.489 232.606 336.448 230.049L244.107 3.11674C243.066 0.558968 240.149 -0.67079 237.591 0.370001L3.11662 95.7805ZM236.275 195.231C234.414 202.656 230.275 209.394 223.84 215.669C217.404 221.944 208.769 227.178 197.915 231.595L147.896 251.948C145.339 252.989 142.421 251.759 141.381 249.201L91.0875 125.605C90.0467 123.047 91.2765 120.13 93.8342 119.089L140.616 100.053C155.755 93.8927 168.762 92.0412 179.448 94.5755C190.134 97.1098 197.74 103.801 202.245 114.873C204.798 121.147 205.527 127.302 204.453 133.116C204.078 135.141 203.474 137.13 202.647 139.078C200.877 143.249 203.858 149.33 208.301 150.217C212.307 151.017 215.982 152.409 219.32 154.382C225.895 158.266 230.863 164.203 234.167 172.322C237.453 180.126 238.137 187.806 236.275 195.231ZM174.998 144.457C177.567 139.862 177.745 134.843 175.53 129.4C171.25 118.882 161.683 116.645 146.926 122.65L130.516 129.327C127.958 130.368 126.728 133.285 127.769 135.843L137.44 159.611C138.481 162.168 141.398 163.398 143.956 162.357L160.366 155.68C167.602 152.736 172.428 149.051 174.998 144.457ZM172.374 175.098L152.441 183.209C149.883 184.25 148.653 187.167 149.694 189.725L160.529 216.353C161.57 218.91 164.487 220.14 167.045 219.099L186.692 211.105C194.976 207.734 200.849 203.623 204.085 198.758C207.321 193.892 207.746 188.665 205.419 182.945C200.33 170.712 189.416 168.163 172.374 175.098Z';
  var TILE_C = 'M1.2739 184.248C-0.56744 186.306 -0.391882 189.466 1.66602 191.308L190.316 360.105C192.374 361.946 195.535 361.771 197.376 359.713L360.744 177.132C362.585 175.074 362.409 171.913 360.352 170.071L171.702 1.27398C169.644 -0.567354 166.483 -0.391803 164.642 1.66609L1.2739 184.248ZM184.052 263.46C182.821 264.836 180.927 265.435 179.153 264.921C173.272 263.217 167.225 260.676 161.014 257.298C153.7 253.294 146.755 248.416 140.09 242.453C131.281 234.57 124.443 226.18 119.588 217.425C114.799 208.595 112.012 199.686 111.294 190.622C110.576 181.559 112.013 172.553 115.519 163.394C118.959 154.308 124.498 145.497 132.136 136.96C139.576 128.646 147.663 122.383 156.322 118.101C164.981 113.819 174.002 111.599 183.375 111.297C192.681 111.07 202.131 112.842 211.513 116.692C220.895 120.543 229.991 126.409 238.8 134.291C244.928 139.774 250.142 145.509 254.529 151.706C258.27 156.882 261.343 162.242 263.748 167.785C264.497 169.511 264.123 171.505 262.868 172.907L252.409 184.596C249.774 187.541 244.849 186.423 243.302 182.787C241.835 179.339 240.082 176.003 238.03 172.765C234.313 166.9 229.768 161.496 224.253 156.562C216.669 149.776 209.039 145.355 201.219 143.303C193.4 141.252 185.819 141.554 178.259 144.145C170.775 146.806 163.674 151.813 157.032 159.236C150.39 166.659 146.123 174.203 144.165 181.941C142.273 189.604 142.67 197.177 145.422 204.585C148.173 211.992 153.335 219.017 160.842 225.734C170.017 233.943 180.321 239.795 191.68 243.291C195.383 244.431 196.918 249.081 194.335 251.968L184.052 263.46Z';
  function Juggle(opts) {
    var JOE = opts.joe, GROUND = 272;
    var JH = 200, JY = GROUND - JH * 0.843, JX = 500 - JH * 0.528;   // seat his feet on the ground, centre stage
    /* the juggle loop is ANCHORED TO HIS RAISED PALM (content ~x .72, y .42 of his canvas):
       the ellipse's lowest point = the palm, so tiles visibly leave from and return to the hand */
    var PALMX = JX + JH * 0.72, PALMY = JY + JH * 0.42;
    var RX = 118, RY = 88, CX = PALMX - 6, CY = PALMY - RY;
    var im = new Image(); im.src = JOE;
    /* three tiles: B, B, C — each centred on its own origin so it can spin while orbiting */
    var tiles = [
      { d: TILE_B, s: 0.255, cx: 168.5, cy: 166.5 },
      { d: TILE_B, s: 0.225, cx: 168.5, cy: 166.5 },
      { d: TILE_C, s: 0.24, cx: 181.5, cy: 181 }
    ];
    var tileHtml = '';
    for (var i = 0; i < 3; i++)
      tileHtml += '<g class="jtile" style="opacity:0;transition:opacity .6s ease"><path d="' + tiles[i].d + '" fill="#f4f6fa"/></g>';
    var el = mount(
      '<svg viewBox="0 0 1000 320">' +
        '<rect x="-3500" y="-1440" width="8000" height="3200" fill="#04060c"/>' +
        '<rect x="-3500" y="' + GROUND + '" width="8000" height="1600" fill="#0a0f1c"/>' +
        '<line x1="-3500" y1="' + GROUND + '" x2="4500" y2="' + GROUND + '" stroke="#1a2334" stroke-width="2"/>' +
        '<filter id="jjblur" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>' +
        '<linearGradient id="jjbeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8e8" stop-opacity="0"/><stop offset=".3" stop-color="#fff8e8" stop-opacity=".09"/><stop offset="1" stop-color="#fff8e8" stop-opacity=".22"/></linearGradient>' +
        '<radialGradient id="jjpool"><stop offset="0" stop-color="#fff6dd" stop-opacity=".28"/><stop offset="1" stop-color="#fff6dd" stop-opacity="0"/></radialGradient>' +
        '<g class="jjspot" transform="translate(505,0)"><g class="jjbeams">' +
          '<path d="M-230,-430 L-176,-430 L96,' + (GROUND + 6) + ' L-116,' + (GROUND + 6) + ' Z" fill="url(#jjbeam)" filter="url(#jjblur)" style="mix-blend-mode:screen"/>' +
          '<path d="M176,-430 L230,-430 L116,' + (GROUND + 6) + ' L-96,' + (GROUND + 6) + ' Z" fill="url(#jjbeam)" filter="url(#jjblur)" style="mix-blend-mode:screen"/>' +
        '</g><ellipse cx="0" cy="' + (GROUND + 6) + '" rx="130" ry="18" fill="url(#jjpool)" style="mix-blend-mode:screen"/></g>' +
        '<image href="' + JOE + '" x="' + JX.toFixed(1) + '" y="' + JY.toFixed(1) + '" width="' + JH + '" height="' + JH + '"/>' +   // still — no bob (user request)
        tileHtml +
        '<rect x="390" y="288" width="220" height="6" rx="3" fill="rgba(255,255,255,.14)"/>' +
        '<rect class="bar" x="390" y="288" width="0" height="6" rx="3" fill="#FF00F5"/>' +
        '<text class="pct" x="500" y="312" text-anchor="middle" style="font-size:18px">0%</text>' +
      '</svg>');
    var tileEls = Array.prototype.slice.call(el.querySelectorAll('.jtile')), pct = el.querySelector('.pct');
    var bar = el.querySelector('.bar');
    var shown = [false, false, false];
    return { el: el, joe: null, render: function (p) {
      var now = performance.now();
      var inPlay = 1 + (p > 1 / 3 ? 1 : 0) + (p > 2 / 3 ? 1 : 0);   // blocks join the juggle as loading advances
      for (var k = 0; k < 3; k++) {
        if (k < inPlay && !shown[k]) { shown[k] = true; tileEls[k].style.opacity = '1'; }
        var ph = now / 1500 * 2 * Math.PI / 3 + k * 2.094;           // one lap ~4.5s, evenly phased
        var x = CX + RX * Math.cos(ph), y = CY - RY * Math.sin(ph);
        var rot = Math.sin(now / 700 + k * 2.1) * 26;            // jaunty tilt, letters stay readable (like the mock)
        var t = tiles[k];
        tileEls[k].setAttribute('transform', 'translate(' + x.toFixed(1) + ',' + y.toFixed(1) + ') rotate(' + rot.toFixed(1) + ') scale(' + t.s + ') translate(' + (-t.cx) + ',' + (-t.cy) + ')');
      }
      bar.setAttribute('width', (220 * p).toFixed(1));
      pct.textContent = Math.round(p * 100) + '%';
    }};
  }

  /* ---------- RUN ---------- */
  /* ---------- VARIANT P — the pill window (Joe's Sep '26 loaders) ----------
     Drawn in Joe's 2880x1800 artboard space and scaled to fit, so it matches the Figma frame on any screen: a
     pre-rendered pill of night scene (loader-pill-*.webp — sky, swirls, moon, ground, bar track, and for Storytime the
     gothic title arched above it) with the live parts on top: the pink bar, the texts, and
       layout 'storytime' — the Joe vs Trogdor fight clip where the two stand in the frame, the hint, and the %
       layout 'mystory'   — the seven evolution figures, each painted in from grey as the load passes it; the newest walks */
  function Pill(opts) {
    var ST = opts.layout === 'storytime';
    var BG = opts.bg, BOX0 = ST ? [560, 430, 1740, 910] : [594, 695, 1693, 507], PAD = 260, BOX = [BOX0[0] - PAD, BOX0[1] - PAD, BOX0[2] + 2 * PAD, BOX0[3] + 2 * PAD];   // the art carries a 260px bleed of its own edge colours, so the feather melts into black with no hard edge anywhere (L18)
    var esc = function (t) { return String(t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    if (!document.getElementById('jjld-pill-style')) { var ps = document.createElement('style'); ps.id = 'jjld-pill-style';
      ps.textContent = '@keyframes jjwalkP{0%,100%{transform:translateY(0) rotate(0deg);}25%{transform:translateY(-9px) rotate(-1.2deg);}50%{transform:translateY(0) rotate(0deg);}75%{transform:translateY(-9px) rotate(1.2deg);}}' +
        '@keyframes jjswimP{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-12px) rotate(2deg);}}' +
        '@keyframes jjstepP{0%{transform:translate(0,0);}45%{transform:translate(14px,-20px);}100%{transform:translate(26px,0);}}' +
        '@keyframes jjshiverP{0%,100%{transform:translateX(0);}25%{transform:translateX(-3px);}75%{transform:translateX(3px);}}' +
        '#jjld.jjld-pill{background:#000;}#jjld.jjld-pill::after{display:none;}' +
        '#jjld .jjpill .evoWalk{animation-name:jjwalkP;}#jjld .jjpill .evoSwim{animation-name:jjswimP;}#jjld .jjpill .evoStepped{animation-name:jjstepP;}#jjld .jjpill .evoFillin{animation-name:jjshiverP;}';
      document.head.appendChild(ps); }
    /* the window is FEATHERED into the black, like the loaders before it — never a hard-edged box. The pill is a
       blurred rounded rect used as a mask; for Storytime the arched title above it stays crisp (its own mask patch). */
    var PILL = ST ? [658, 713, 1565, 620, 310] : [594, 695, 1693, 507, 253];
    var F = 125;                                                        // L19: a much deeper blur fade, like the fight loader before it (Joe's reference) — it runs out into the art's 260px bleed, so no edge shows
    var html = '<svg class="jjpill" viewBox="0 0 2880 1800" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + esc(opts.title || 'Loading') + '">' +
      '<filter id="jjpfeather" filterUnits="userSpaceOnUse" x="-600" y="-600" width="4080" height="3000"><feGaussianBlur stdDeviation="' + F + '"/></filter>' +
      '<filter id="jjplum" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.6" intercept="-.55"/><feFuncG type="linear" slope="2.6" intercept="-.55"/><feFuncB type="linear" slope="2.6" intercept="-.55"/></feComponentTransfer></filter>' +
      (ST ? '<clipPath id="jjptclip" clipPathUnits="userSpaceOnUse"><rect x="' + BOX[0] + '" y="' + BOX0[1] + '" width="' + BOX[2] + '" height="' + (PILL[1] + 17 - BOX0[1]) + '"/></clipPath>' : '') +
      '<mask id="jjpmask" maskUnits="userSpaceOnUse" x="-600" y="-600" width="4080" height="3000"><rect x="' + (PILL[0] + F * .15) + '" y="' + (PILL[1] + F * .15) + '" width="' + (PILL[2] - F * .3) + '" height="' + (PILL[3] - F * .3) + '" rx="' + PILL[4] + '" fill="#fff" filter="url(#jjpfeather)"/>' +
        (ST ? '<g clip-path="url(#jjptclip)"><image href="' + BG + '" x="' + BOX[0] + '" y="' + BOX[1] + '" width="' + BOX[2] + '" height="' + BOX[3] + '" filter="url(#jjplum)"/></g>' : '') +   /* the arched title stays crisp by its own light letters only — no box, so no straight edge above the scene (L19) */
      '</mask>' +
      '<g mask="url(#jjpmask)"><image href="' + BG + '" x="' + BOX[0] + '" y="' + BOX[1] + '" width="' + BOX[2] + '" height="' + BOX[3] + '"/></g>';
    var POS = [[557, 973], [812, 963], [1066, 939], [1321, 931], [1576, 925], [1830, 909], [2085, 909]], S = 239;
    var N = 0, figs = [];
    if (ST) {
      var clip = opts.clip || null, FX = 1180, FY = 791, FW = 621, FH = 360;   // the pair stands where Joe drew the knight and Trogdor
      html +=
        '<text x="1440" y="712" text-anchor="middle" fill="rgba(255,255,255,.88)" style="font-size:40px">' + esc(opts.msg1 || 'Hint: This is an interactive story') + '</text>' +   // a subtitle under the title
        '<ellipse cx="1490" cy="1150" rx="250" ry="16" fill="rgba(0,0,0,.28)"/>' +
        '<g class="jjfight">' +
          (clip ? '<foreignObject x="' + FX + '" y="' + FY + '" width="' + FW + '" height="' + FH + '"><video xmlns="http://www.w3.org/1999/xhtml" class="jjfv" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:contain;object-position:50% 100%;display:block;background:transparent" poster="' + (opts.img || '') + '">' + ((clip.mov && (!clip.webm || jjClipSrc('').indexOf('.mov') > 0)) ? '<source src="' + clip.mov + '" type=\'video/mp4; codecs="hvc1"\'/>' : clip.webm ? '<source src="' + clip.webm + '" type="video/webm"/>' : '') + '</video></foreignObject>' : '') +
          '<image class="jjfimg" href="' + (opts.img || '') + '" x="' + FX + '" y="' + FY + '" width="' + FW + '" height="' + FH + '" preserveAspectRatio="xMidYMax meet" style="' + (clip ? 'opacity:0;' : '') + 'transition:opacity .4s ease"/>' +
        '</g>' +
        '<text class="pct" x="1440" y="1262" text-anchor="middle" style="font-size:66px;fill:#fff">0%</text>';
    } else {
      var col = (opts.stages || []).filter(Boolean), grey = (opts.stagesGrey || []).filter(Boolean), colB = (opts.stagesB || []).filter(Boolean);
      var bx = opts.stageBoundsX || [];
      N = Math.min(col.length, POS.length);
      html +=
        '<text x="1440" y="800" text-anchor="middle" fill="#fff" style="font-size:62px">' + esc(opts.msg1 || 'To be continued') + '</text>' +
        '<text x="1440" y="856" text-anchor="middle" fill="#A7AEB4" style="font-size:38px">' + esc(opts.msg2 || 'Perhaps there’s more to be discovered…') + '</text>';
      for (var i = 0; i < N; i++) {
        var x = POS[i][0], y = POS[i][1], b = bx[i] || [0, 1], box = ' x="' + x + '" y="' + y + '" width="' + S + '" height="' + S + '"';
        figs.push({ x0: x - 20, l: x + S * b[0] - 4, r: x + S * b[1] + 4 });
        html += '<clipPath id="jjpc' + i + '" clipPathUnits="userSpaceOnUse"><rect class="jjpcr" x="' + (x - 20) + '" y="' + (y - 20) + '" width="0" height="' + (S + 40) + '"/></clipPath>' +
          '<g class="evoStage"><g class="evoInner" style="animation-delay:-' + (i * .13).toFixed(2) + 's">' +
            '<image class="evoG" href="' + (grey[i] || col[i]) + '"' + box + (grey[i] ? '' : ' style="filter:grayscale(1) brightness(.45)"') + '/>' +
            '<g clip-path="url(#jjpc' + i + ')"><image class="evoA" href="' + col[i] + '"' + box + '/>' +
              (colB[i] ? '<image class="evoB" style="display:none" href="' + colB[i] + '"' + box + '/>' : '') + '</g>' +
          '</g></g>';
      }
    }
    html += '<rect class="jjpbar" x="943" y="1164" width="0" height="6" rx="3" fill="#FF00F5"/></svg>';
    var el = mount(html); el.classList.add('jjld-pill');                 // true black around the pill, as drawn — no vignette
    var sb = document.getElementById('jj-sound-btn'), sbPrev = null, sbMist = document.getElementById('jj-sound-mist'), sbMistPrev = null;   // the moon sound button stays reachable over the loader
    if (sb) { sbPrev = sb.style.zIndex; sb.style.zIndex = '2147483200'; }
    if (sbMist) { sbMistPrev = sbMist.style.zIndex; sbMist.style.zIndex = '2147483190'; }
    if (sb || sbMist) { var zint = setInterval(function () { if (!document.body.contains(el) || el.classList.contains('hide')) { if (sb) sb.style.zIndex = sbPrev || ''; if (sbMist) sbMist.style.zIndex = sbMistPrev || ''; clearInterval(zint); } }, 400); }
    var bar = el.querySelector('.jjpbar'), pct = el.querySelector('.pct');
    if (ST) {
      var v = el.querySelector('.jjfv'), im = el.querySelector('.jjfimg'), g = el.querySelector('.jjfight');
      if (v) { var fb = function () { im.style.opacity = '1'; if (v.parentNode) v.parentNode.style.display = 'none'; };
        v.addEventListener('error', fb); setTimeout(function () { if (v.readyState < 2) fb(); }, 4500);
        var pp = v.play(); if (pp && pp.catch) pp.catch(function () {}); }
      return { el: el, joe: null, render: function (p) {
        pct.textContent = Math.round(p * 100) + '%'; bar.setAttribute('width', (995 * p).toFixed(1));
        if (!v || v.readyState < 2) g.style.transform = 'translateY(' + (Math.sin(performance.now() / 260) * 3).toFixed(2) + 'px)';   // the still plate breathes until the clip plays
      }};
    }
    var rects = Array.prototype.slice.call(el.querySelectorAll('.jjpcr')), stages = Array.prototype.slice.call(el.querySelectorAll('.evoStage'));
    var inners = Array.prototype.slice.call(el.querySelectorAll('.evoInner'));
    var aEls = Array.prototype.slice.call(el.querySelectorAll('.evoA')), bAll = el.querySelectorAll('.evoB'), bEls = bAll.length === N ? Array.prototype.slice.call(bAll) : null;
    var anims = opts.stageAnims || [], modes = [], pose = [];
    function animClass(i) { var a = anims[i] || (i === 0 ? 'squish' : (i === 1 ? 'swim' : 'walk')); return a === 'squish' ? 'evoSquish' : (a === 'swim' ? 'evoSwim' : 'evoWalk'); }
    return { el: el, joe: null, render: function (p) {
      bar.setAttribute('width', (995 * p).toFixed(1));
      var alive = -1, loc = [], i;
      for (i = 0; i < N; i++) { loc[i] = Math.max(0, Math.min(1, p * N - i)); if (loc[i] >= 1) alive = i; }
      for (i = 0; i < N; i++) {
        var f = figs[i], w = loc[i] >= 1 ? S + 400 : (f.l - f.x0) + loc[i] * (f.r - f.l);   // the colour sweeps left to right across the figure
        rects[i].setAttribute('width', Math.max(0, w).toFixed(1));
        var m = loc[i] <= 0 ? 'frozen' : (loc[i] < 1 ? 'fill' : (i === alive ? 'walk' : 'done'));
        if (m !== modes[i]) {
          modes[i] = m;
          stages[i].setAttribute('class', 'evoStage' + (loc[i] >= 1 ? ' evoStepped' : ''));
          inners[i].setAttribute('class', 'evoInner' + (m === 'fill' ? ' evoFillin' : (m === 'walk' ? ' ' + animClass(i) : '')));
          if (bEls && m !== 'walk') { pose[i] = 0; aEls[i].style.display = ''; bEls[i].style.display = 'none'; }
        }
        if (bEls && m === 'walk') { var fr = Math.floor(performance.now() / 320) % 2;
          if (fr !== pose[i]) { pose[i] = fr; aEls[i].style.display = fr ? 'none' : ''; bEls[i].style.display = fr ? '' : 'none'; } }
      }
    }};
  }

  JJ.start = function (opts) {
    opts = opts || {}; mount.title = opts.variant === 'pill' ? '' : (opts.title || '');   // the pill's title is part of its art
    var prev = document.getElementById('jjld');                  // starting anew replaces a running loader
    if (prev) prev.remove();                                     // (its rAF loop exits via the isConnected check)
    var frames = (opts.frames || []).filter(Boolean);
    frames.concat(opts.fillFrames || [], opts.stages || [], opts.stagesGrey || [], opts.stagesB || []).forEach(function (u) {   // preload + decode all art up front
      var im = new Image(); im.src = u; if (im.decode) im.decode().catch(function () {});
    });
    var scene = (opts.variant === 'pill' ? Pill(opts)
      : opts.variant === 'juggle' ? Juggle(opts)
      : opts.variant === 'fight' ? Fight(opts)
      : opts.variant === 'portal' ? Portal(opts)
      : opts.variant === 'trogdor' ? Trogdor(opts)
      : opts.variant === 'evolution' ? Evolution(opts)
      : opts.variant === 'precam' ? Precam(opts)
      : (opts.variant === 'scroll' ? Scroll : Journey)(opts, frames));
    /* pitch black first: the loader's own art (grass, moon, first figures) is given a beat to land, then the whole
       stage eases in and the clock starts — no half-drawn ground, and every page begins from the same black */
    scene.el.style.opacity = '1';
    var playing = false;                                           // the clock does not start until the curtain is fully up
    (function easeIn() {
      /* Gate on the art the FIRST frame needs — the ground and the figure — not on every
         star and flourish in the scene. Holding black for the whole set just moves the wait. */
      var urls = [opts.bg, opts.grass, opts.body, opts.eye, opts.img].filter(Boolean);
      if (!urls.length) scene.el.querySelectorAll('image, img').forEach(function (n) {
        var u = n.getAttribute('href') || n.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || n.getAttribute('src'); if (u) urls.push(u);
      });
      var left = urls.length, done = false;
      function go() {
        if (done) return; done = true;
        try { scene.render(0); } catch (e) {}                      // draw the opening frame BEHIND the curtain, so nothing pops in mid-fade
        scene.el.classList.add('revealed');
        setTimeout(function () { playing = true; startT = performance.now(); }, 760);   // .72s curtain + a beat, then the animation begins
      }
      if (!left) return setTimeout(go, 120);
      urls.forEach(function (u) {
        var im = new Image();
        var ok = function () { if (--left <= 0) setTimeout(go, 60); };
        im.onload = function () { if (im.decode) im.decode().then(ok, ok); else ok(); };   // decoded, not merely downloaded — the ground is really there
        im.onerror = ok;
        im.src = u;
      });
      setTimeout(go, 1800);                                        // never hold the black longer than this
    })();
    var startT = performance.now(), minTime = opts.minTime != null ? opts.minTime : 900;
    var fps = opts.fps || 8, fi = 0, lastF = 0;
    var target = 0, shown = 0, revealed = false, downloaded = false, decoded = !opts.decode;

    (function loop(now) {
      if (!scene.el.isConnected) return;                         // replaced by a newer start — stop this orphaned loop
      if (!playing) return requestAnimationFrame(loop);           // still black, or still fading up: hold the story at frame one
      /* pace the show: displayed progress may never outrun the minTime ramp, so even an instant
         load plays the full story — but it still can't outrun the REAL progress either */
      var ramp = Math.min(1, (now - startT) / minTime);
      /* L22 (Joe, 12 Oct: 'the homepage loader doesn't play the blob for like 5 seconds, it's just still at first'): the story followed the bytes alone, and on a slow
         start (the first files not answering yet) there are no bytes, so the figure stood still. The story now eases itself up to 12% in its first seconds whatever
         the bytes say; from there the real progress leads as before. It still cannot finish before everything is really in. */
      var creep = 0.12 * (1 - Math.exp(-(now - startT) / 2500));
      var capped = Math.min(Math.max(target, creep), ramp);
      shown += (capped - shown) * 0.12; if (capped - shown < 0.001) shown = capped;
      scene.render(shown);
      if (frames.length && now - lastF > 1000 / fps) {
        lastF = now; fi = (fi + 1) % frames.length;
        if (scene.setFrame) scene.setFrame(fi);
        else if (scene.joe && scene.joe.tagName && scene.joe.tagName.toLowerCase() === 'image') scene.joe.setAttribute('href', frames[fi]);
      }
      var ready = downloaded && decoded && shown > 0.995 && (now - startT) >= minTime;
      if (ready && !revealed) { revealed = true; finish(); return; }
      requestAnimationFrame(loop);
    })(startT);

    function finish() {
      /* Hand over on a clear screen. The loader closes to full black, then leaves — black on
         black, so the swap is invisible — and only THEN does the page play its own reveal.
         Firing onReady during the fade meant the page's curtains were already half open
         by the time the loader had gone. */
      scene.el.classList.add('to-black');
      setTimeout(function () {
        scene.el.style.transition = 'opacity .45s ease'; scene.el.classList.add('hide');
        setTimeout(function () {
          if (scene.el.parentNode) scene.el.remove();
          if (typeof opts.onReady === 'function') opts.onReady();
        }, 470);
      }, 720);
    }
    var safety = setTimeout(function () { target = 1; downloaded = true; decoded = true; }, opts.maxWait || 15000);
    function onProgress(p) { target = Math.max(target, p); }
    function onDownloaded() { clearTimeout(safety); downloaded = true; target = 1; if (opts.decode) decodeImgs(opts.assets, function () { decoded = true; }); else decoded = true; }
    if (typeof opts.driver === 'function') opts.driver(onProgress, onDownloaded);
    else measure(opts.assets, onProgress, onDownloaded);
    JJ.setProgress = function (p) { target = Math.max(target, Math.min(1, p)); };
  };
})();
