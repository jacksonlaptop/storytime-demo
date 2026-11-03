/* Storytime demo kit: the engine's transport (back, pause, next, mute) and sound prompt for the painted scenes. Load it in <head>, before the
   scene's own script: pausing works by holding the scene's clock (its timers, its frame loop, its media, its audio and its CSS animations).
   The scene keeps its own buttons (#go starts or restarts it, #snd turns its sound on and off, ArrowRight moves on) and the kit presses them. */
(function () {
  /* the pause card's lettering (the tale's): from the code repo, or the staged copy in the local preview */
  var GB = location.port === '3800' ? '/gh/' : 'https://raw.githack.com/jacksonlaptop/joes-journey-code/main/';
  var ff = document.createElement('style'); ff.textContent = '@font-face{font-family:"Sketch Gothic School";src:url("' + GB + 'sketch-gothic-school.woff2") format("woff2");font-display:swap;}'; document.head.appendChild(ff);

  /* ---- the pausable clock ---- */
  var ST = window.setTimeout.bind(window), CT = window.clearTimeout.bind(window), RAF = window.requestAnimationFrame.bind(window);
  var T = {}, nid = 1, paused = false, held = [], media = [], ctxs = [], anims = [];
  function arm(r) { r.due = performance.now() + r.left; r.h = ST(r.go, r.left); }
  function make(fn, ms, args, rep) {
    var id = nid++, r = { left: Math.max(0, +ms || 0), h: 0, due: 0 };
    r.go = function () { if (rep) { r.left = Math.max(1, +ms || 0); arm(r); } else delete T[id]; if (typeof fn === 'function') fn.apply(window, args); };
    T[id] = r; if (!paused) arm(r); return id;
  }
  function stop(id) { var r = T[id]; if (r) { CT(r.h); delete T[id]; } }
  window.setTimeout = function (fn, ms) { return make(fn, ms, [].slice.call(arguments, 2), false); };
  window.setInterval = function (fn, ms) { return make(fn, ms, [].slice.call(arguments, 2), true); };
  window.clearTimeout = window.clearInterval = stop;
  window.requestAnimationFrame = function (fn) { if (paused) { held.push(fn); return 0; } return RAF(fn); };
  var AC = window.AudioContext || window.webkitAudioContext;
  if (AC) { var W = function () { var c = new AC(); ctxs.push(c); return c; }; W.prototype = AC.prototype; window.AudioContext = window.webkitAudioContext = W; }

  function pause() {
    if (paused) return; paused = true;
    var now = performance.now(); Object.keys(T).forEach(function (k) { var r = T[k]; CT(r.h); r.left = Math.max(0, r.due - now); });
    media = [].filter.call(document.querySelectorAll('audio,video'), function (m) { return !m.paused; }).concat(KIT.sounds.filter(function (m) { return !m.paused; }));
    KIT._ms.forEach(function (m) { if (!m.paused && media.indexOf(m) < 0) media.push(m); });   // (the one flow's music lives on the flow page)
    media.forEach(function (m) { m.pause(); });
    ctxs.forEach(function (c) { try { if (c.state === 'running') c.suspend(); } catch (e) {} });
    try { anims = document.getAnimations().filter(function (a) { return a.playState === 'running'; }); anims.forEach(function (a) { a.pause(); }); } catch (e) { anims = []; }
    ui();
  }
  function resume() {
    if (!paused) return; paused = false;
    Object.keys(T).forEach(function (k) { arm(T[k]); });
    held.splice(0).forEach(function (fn) { RAF(fn); });
    media.forEach(function (m) { var p = m.play(); if (p && p.catch) p.catch(function () {}); }); media = [];
    ctxs.forEach(function (c) { try { if (c.state === 'suspended') c.resume(); } catch (e) {} });
    anims.forEach(function (a) { try { a.play(); } catch (e) {} }); anims = [];
    ui();
  }
  /* sounds the scene plays from Audio objects that are never put in the page (music, voice, effects) are tracked as they start */
  var KIT = window.jjKit = { pause: pause, resume: resume, paused: function () { return paused; }, sounds: [], _ms: [], base: GB };
  /* ---- the one-flow page (../story/): this scene plays in a frame with no cover and no end card; it says when it is ready, starts on its turn ('go'),
     says when it is done, plays the flow page's music (so the music carries on from scene to scene) and follows the flow page's moon (the one sound control) ---- */
  var FLOW = KIT.flow = /[?&]flow=1\b/.test(location.search) && window.parent !== window;
  function tell(m) { try { parent.postMessage({ jj: m }, location.origin); } catch (e) {} }
  var told = false; KIT.done = function () { if (told) return; told = true; tell('done'); };
  function keep(m) { if (KIT._ms.indexOf(m) < 0) KIT._ms.push(m); return m; }
  KIT.music = function (src) { var u = new URL(src, location.href).href; try { if (FLOW && parent.jjFlowMusic) return keep(parent.jjFlowMusic(u)); } catch (e) {} return new Audio(src); };
  /* the next part's music, brought in under the end of this one (the flow page plays it on, and the next part takes it over: see jjFlowLead) */
  KIT.lead = function (src, o) { try { if (FLOW && parent.jjFlowLead) return keep(parent.jjFlowLead(new URL(src, location.href).href, o)); } catch (e) {} return null; };
  /* muted, as the site counts it (the moon's flag, or every mixer level at 0) */
  function sndMuted() { var f = false, z = false; try { f = sessionStorage.getItem('jjUserMuted') === '1'; var x = JSON.parse(localStorage.getItem('jjMix') || 'null'); z = !!x && !(x.voice > 0 || x.sfx > 0 || x.music > 0); } catch (e) {} return f || z; }
  function sndSet(m) { try { sessionStorage.setItem('jjUserMuted', m ? '1' : '0'); if (!m) { var x = JSON.parse(localStorage.getItem('jjMix') || 'null'); if (x && !(x.voice > 0 || x.sfx > 0 || x.music > 0)) { var p = JSON.parse(localStorage.getItem('jjMixAllPrev') || 'null'); localStorage.setItem('jjMix', JSON.stringify(p && (p.voice > 0 || p.sfx > 0 || p.music > 0) ? p : { voice: 1, sfx: 1, music: 1 })); } } } catch (e) {} }
  if (FLOW) document.documentElement.classList.add('jjk-flow');
  var PLAY = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () { if (!this.isConnected && KIT.sounds.indexOf(this) < 0) { var me = this; KIT.sounds.push(me); me.addEventListener('ended', function () { var i = KIT.sounds.indexOf(me); if (i >= 0) KIT.sounds.splice(i, 1); }); }
    if (paused) { media.push(this); return Promise.resolve(); } return PLAY.apply(this, arguments); };

  /* ---- the transport and the sound prompt ---- */
  var ctl, hold, snd, asked = false;
  var SVG = {
    prev: '<svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM19 5v14L9 12z"/></svg>',
    pause: '<svg class="pa" viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg><svg class="pl" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM5 5v14l10-7z"/></svg>',
    mute: '<svg class="mn" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><svg class="mo" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M16 9l5 6m0-6l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  function $(id) { return document.getElementById(id); }
  function muted() { var b = $('snd'); return !!b && b.getAttribute('aria-pressed') === 'true'; }
  function running() { var c = $('cover'); return !!c && c.classList.contains('off'); }
  function ui() {
    if (!ctl) return;
    ctl.classList.toggle('on', running() && !snd.classList.contains('on'));
    ctl.classList.toggle('paused', paused); ctl.classList.toggle('muted', muted());
    ctl.querySelector('[data-k=pause]').setAttribute('aria-label', paused ? 'Play' : 'Pause');
    ctl.querySelector('[data-k=mute]').setAttribute('aria-label', muted() ? 'Sound on' : 'Mute');
    hold.classList.toggle('on', paused);
  }
  function btn(k, label) { var b = document.createElement('button'); b.type = 'button'; b.className = 'jb'; b.dataset.k = k; b.setAttribute('aria-label', label); b.innerHTML = SVG[k]; ctl.appendChild(b); return b; }
  function key(k) { document.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true })); }

  function build() {
    ctl = document.createElement('div'); ctl.id = 'jjk-ctl';
    btn('prev', 'Back to the start of the scene').addEventListener('click', function () { resume(); $('go').click(); });
    btn('pause', 'Pause').addEventListener('click', function () { if (paused) resume(); else pause(); });
    btn('next', 'Next').addEventListener('click', function () { if (!paused) key('ArrowRight'); });
    btn('mute', 'Mute').addEventListener('click', function () { var on = muted(); $('snd').click(); sndSet(!on); ui(); });   // (the same state as the moon's)
    hold = document.createElement('div'); hold.id = 'jjk-hold';
    hold.innerHTML = '<span>Paused</span><p>Press \u2018Space\u2019 to resume or pause whenever. You can also use the \u2018Left\u2019 &amp; \u2018Right\u2019 arrows to go to the next scene when ready</p>';   // (the tale's own pause card)
    hold.addEventListener('click', resume);
    snd = document.createElement('div'); snd.id = 'jjk-snd'; snd.setAttribute('role', 'dialog');
    snd.innerHTML = '<div class="card"><p class="q">I’ve noticed your sound is off!</p><p class="sub">You’ll only be experiencing <b>50%</b> of the story if you continue without, no worries if not!</p>' +
      '<div class="row"><button type="button" class="secondary" data-a="no">Continue without sound</button><button type="button" class="yes" data-a="yes">Turn on the sound!</button></div></div>';
    snd.addEventListener('click', function (e) { var a = e.target.closest('button'); if (!a) return; if (a.dataset.a === 'yes' && muted()) $('snd').click(); snd.classList.remove('on'); asked = true; $('go').click(); });
    document.body.appendChild(hold); document.body.appendChild(ctl); document.body.appendChild(snd);
    /* the first press of Play with the sound off asks first, as the tale does */
    $('go').addEventListener('click', function (e) { if (asked || !muted()) return; e.stopImmediatePropagation(); snd.classList.add('on'); ui(); }, true);
    $('go').addEventListener('click', function () { resume(); }, true);
    /* Space always pauses (the tale's rule) */
    addEventListener('keydown', function (e) { if (e.code !== 'Space' || !running() || snd.classList.contains('on')) return; e.preventDefault(); if (paused) resume(); else pause(); }, true);
    addEventListener('keydown', function (e) { if (paused && e.key !== ' ' && e.code !== 'Space') e.stopImmediatePropagation(); }, true);   // nothing moves on while paused
    addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft' && running() && !paused) $('go').click(); });   // Left: back to the start of the scene (the transport's back)
    new MutationObserver(ui).observe($('cover'), { attributes: true, attributeFilter: ['class'] });
    if (FLOW) {
      var follow = function () { var want = !sndMuted(); if (want === muted()) $('snd').click(); };   // the moon's state
      addEventListener('message', function (e) { if (e.origin !== location.origin || !e.data) return;
        if (e.data.jj === 'go') { asked = true; follow(); $('go').click(); }
        if (e.data.jj === 'sound') { follow(); ui(); } });
      if (document.readyState === 'complete') tell('ready'); else addEventListener('load', function () { tell('ready'); });
    }
    new MutationObserver(ui).observe($('snd'), { attributes: true, attributeFilter: ['aria-pressed'] });
    ui();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
