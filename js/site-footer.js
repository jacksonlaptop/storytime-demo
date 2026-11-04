/* BUILD f-1008a (2026-10-08) · performance round 2: one lenis.raf per frame (it was stepped twice, the wrong way and back); the modal guard's nav rule no longer re-styles the whole page. f-1007a · loading: the site's music is streamed and only created when it is first played (it was an 8.6 MB download and a full decode on every page load); the menu's card art loads when the menu is first reached for; the starfield can fetch three.js itself. */
window.JJ_FOOTER_BUILD = 'f-1025a';   // f-1025a: window.jjSoundOff (one-press mute for Storytime's transport) ·   // f-1021a: with the menu open, the first-achievement card and the Part Two offer take clicks only while they are SHOWING (.on); hidden, they lay over the whole page and swallowed every click and hover in the menu
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
/* jjClipSrc(base[, query]): ONE <source> per clip, the format this browser should use (Safari: the HEVC-alpha .mov; everyone else: the VP9-alpha .webm), so nothing downloads or probes the other */
if (!window.jjClipSrc) window.jjClipSrc = (function () { var hevc = null; return function (b, q) { if (hevc === null) { try { hevc = !window.chrome && !!document.createElement('video').canPlayType('video/mp4; codecs="hvc1"'); } catch (e) { hevc = false; } } q = q || ''; return hevc ? '<source src="' + b + '.mov' + q + '" type=\'video/mp4; codecs="hvc1"\'>' : '<source src="' + b + '.webm' + q + '" type="video/webm">'; }; })();
document.addEventListener("DOMContentLoaded", function () {
  /* f-1007a: the starfield only exists on the homepage, but three.min.js (153 KB) was a parser-blocking tag on every page. With the tag
     still there this runs exactly as before; once the tag is removed from the site settings, the homepage fetches three.js here, off the
     parser's path, and no other page pays for it. */
  if (typeof THREE === "undefined") { if (document.getElementById("threejs-container")) { var th = document.createElement('script'); th.src = 'https://cdn.jsdelivr.net/npm/three@0.146.0/build/three.min.js'; th.async = true; th.onload = jjStars; document.head.appendChild(th); } return; }
  jjStars();
  function jjStars() {
  if (typeof THREE !== "undefined") {
    let scene, camera, renderer, shapes = [], svgPositionX = 0, clock, bgW = 0, bgH = 0;
    const container = document.getElementById("threejs-container");
    if (!container) return;
    container.style.overflow = "hidden";
    const config = {
      minCircleSize: 3, maxCircleSize: 10, circleSizeRandomness: 1,
      circleSpacing: 20, movementDirection: { x: -1, y: 0 }, movementSpeed: 0.4,
      shapeCount: 50, svgMovementSpeed: 0.004, minSvgSize: 20, maxSvgSize: 50,
      svgStarCount: 20, twinkleSpeedRange: { min: 0.2, max: 10 }, twinkleAmplitude: 1
    };
    let svgWrapper1, svgWrapper2;
    addSvgBackgrounds(); init(); animate();
    window.addEventListener("resize", onWindowResize);
    function addSvgBackgrounds() {
      svgWrapper1 = createSvgWrapper(); svgWrapper2 = createSvgWrapper();
      svgWrapper1.style.left = "0%"; svgWrapper2.style.left = "100%";
      container.insertBefore(svgWrapper1, container.firstChild);
      container.insertBefore(svgWrapper2, container.firstChild);
    }
    function createSvgWrapper() {
      const svgWrapper = document.createElement("div");
      svgWrapper.classList.add("svg-wrapper");
      svgWrapper.style.cssText = "z-index:-10;object-fit:cover;background-image:url('https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/6718f10874b12a196e30db11_Starry%20Board.svg');background-size:cover;width:646%;height:100%;position:absolute;top:0;pointer-events:none;";
      return svgWrapper;
    }
    function init() {
      const { width, height } = container.getBoundingClientRect();
      bgW = width; bgH = height;
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(width/-2, width/2, height/2, height/-2, 1, 1000);
      camera.position.z = 10;
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
      clock = new THREE.Clock();
      const svgUrls = [
        "https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/67212bf05ed02917043863f9_x-star.svg",
        "https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/67212bf05ed02917043863f5_whirl-star.svg",
        "https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/67212bf0d1377a501ae28dc4_star-star.svg",
        "https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/67212bf072ae1d89db07fec6_target-star.svg"
      ];
      let svgCount = 0, attempts = 0;
      while (shapes.length < config.shapeCount && attempts < 500) {
        const x = Math.random() * width - width / 2;
        const y = Math.random() * height - height / 2;
        const radius = config.minCircleSize + Math.random() * (config.maxCircleSize - config.minCircleSize) * config.circleSizeRandomness;
        if (!isOverlapping(x, y, radius)) {
          const speedFactor = Math.random() * 0.5 + 0.5;
          if (svgCount < config.svgStarCount) {
            createSvgShape(x, y, config.minSvgSize + Math.random() * (config.maxSvgSize - config.minSvgSize), svgUrls[Math.floor(Math.random() * svgUrls.length)], speedFactor);
            svgCount++;
          } else { createCircle(x, y, radius, speedFactor); }
        }
        attempts++;
      }
    }
    function createCircle(x, y, radius, speedFactor) {
      const mesh = new THREE.Mesh(new THREE.CircleGeometry(radius, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 }));
      mesh.position.set(x, y, 0);
      mesh.userData = { speedFactor, isCircle: true, twinkleSpeed: Math.random() * (config.twinkleSpeedRange.max - config.twinkleSpeedRange.min) + config.twinkleSpeedRange.min, twinkleOffset: Math.random() * Math.PI * 2 };
      scene.add(mesh); shapes.push(mesh);
    }
    function createSvgShape(x, y, size, svgUrl, speedFactor) {
      new THREE.TextureLoader().load(svgUrl, (texture) => {
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
        mesh.position.set(x, y, 0); mesh.userData.speedFactor = speedFactor;
        scene.add(mesh); shapes.push(mesh);
      });
    }
    function isOverlapping(x, y, radius) {
      return shapes.some(s => Math.sqrt((s.position.x-x)**2 + (s.position.y-y)**2) < radius + config.circleSpacing);
    }
    function animate() {
      requestAnimationFrame(animate);
      animate.n = (animate.n || 0) + 1; if (animate.n & 1) return;
      if (animate.n % 30 === 0) { animate.hid = false; for (var se = container, sd = 0; se && se.nodeType === 1 && sd < 5; se = se.parentElement, sd++) { var scs = getComputedStyle(se); if (scs.visibility === 'hidden' || scs.display === 'none' || !(parseFloat(scs.opacity) > 0.01)) { animate.hid = true; break; } } }   /* f-1012d: hidden, or faded right out (the whole horizontal scroll: it was still being drawn at opacity 0) */   /* f-1012c: looked at twice a second: while the sky is hidden (the chooser has covered the page) nothing is drawn */
      if (animate.hid) return;   /* f-1010b: the starfield is drawn on every other frame (30 a second: slow drift and twinkle), its steps doubled so it moves at the same speed. A full-screen WebGL canvas redrawn 60 times a second made everything laid over it be composited again each time */
      const elapsed = clock.getElapsedTime();
      // Cached size — reading getBoundingClientRect here forced a layout every frame.
      const width = bgW, height = bgH;
      shapes.forEach(shape => {
        shape.position.x += 2 * config.movementDirection.x * config.movementSpeed * shape.userData.speedFactor;
        shape.position.y += 2 * config.movementDirection.y * config.movementSpeed * shape.userData.speedFactor;
        if (shape.position.x > width/2) shape.position.x = -width/2;
        if (shape.position.x < -width/2) shape.position.x = width/2;
        if (shape.position.y > height/2) shape.position.y = -height/2;
        if (shape.position.y < -height/2) shape.position.y = height/2;
        if (shape.userData.isCircle) shape.material.opacity = 1 - config.twinkleAmplitude * (0.5 + 0.5 * Math.sin(elapsed * shape.userData.twinkleSpeed + shape.userData.twinkleOffset));
      });
      svgPositionX -= 2 * config.svgMovementSpeed;
      svgWrapper1.style.transform = `translateX(${svgPositionX}%)`;
      svgWrapper2.style.transform = `translateX(${svgPositionX + 100}%)`;
      if (Math.abs(svgPositionX) >= 50) svgPositionX = 0;
      renderer.render(scene, camera);
    }
    function onWindowResize() {
      const { width, height } = container.getBoundingClientRect();
      bgW = width; bgH = height;
      renderer.setSize(width, height);
      camera.left = -width/2; camera.right = width/2; camera.top = height/2; camera.bottom = -height/2;
      camera.updateProjectionMatrix();
    }
  }
  }
});

(function () {
  var TARGET_VOLUME    = 0.6;
  var AUTO_START_DELAY = 3000;   // begin a few seconds after the visitor enters
  var FADE_MS          = 5000;   // long, slow fade-in

  /* THE SITE'S MUSIC IS STREAMED, AND MADE ONLY WHEN IT IS FIRST PLAYED (f-1007a).
     It used to be a Web Audio Howl built as this file was evaluated: 8.6 MB fetched whole on every page load (36% of the homepage's
     bytes before "Click to begin", and all through Storytime, where it is not heard until the tale ends) and decoded to ~190 MB of PCM.
     Now jjAudio.ambient is a stand-in with the Howl's own methods; nothing is fetched until something really plays it (the landing,
     the lift into My Story, a visit to My Story or Contact), and then it is an HTML5 stream: it starts within a moment and holds a few
     seconds of audio, not the whole track. jj:mystory-wake (the tale's cover is up) makes it early, so it is ready for the lift.
     - Before it is made: playing() is false, volume() / fade() only remember the level, pause / stop do nothing, on / once / off are
       kept for it; anything else (play, load, seek...) makes it and passes straight through.
     - The mixer and Mute all reach it as they reach any <audio> (its volume is scaled by the Music level); the sound button's bars still
       dance to it because the element is also fed through Howler's master gain, where the bars listen (the file is served with
       access-control-allow-origin: *, so the element is made with crossOrigin = 'anonymous'). If that wiring fails it simply plays. */
  function jjStream(src) {
    var real = null, vol = 0, pend = [], P;
    function make() {
      if (real) return real;
      var node = null, o = window.Howler && Howler._obtainHtml5Audio;
      if (o) Howler._obtainHtml5Audio = function () { var a = o.apply(Howler, arguments); try { a.crossOrigin = 'anonymous'; } catch (e) {} node = a; return a; };
      try { real = new Howl({ src: [src], loop: true, volume: vol, html5: true }); } finally { if (o) Howler._obtainHtml5Audio = o; }
      real._src = src; real._jjCat = 'music';
      /* f-1008c: Howler puts its audio engine to sleep after 30 s in which no WEB AUDIO sound has played. The streamed music is an <audio> element fed THROUGH that
         engine (the tap below), and Howler does not count it: on a quiet stretch (My Story, with nothing else sounding) the engine slept and the music went silent
         and froze, until some other sound woke it (measured: suspended at 30 s, signal 0). The engine now stays awake while the site streams its music. */
      try { Howler.autoSuspend = false; if (Howler._suspendTimer) { clearTimeout(Howler._suspendTimer); Howler._suspendTimer = null; } if (Howler.state === 'suspended' || Howler.state === 'suspending') Howler._autoResume(); } catch (e) {}
      try { if (node && Howler.usingWebAudio && Howler.ctx && Howler.masterGain && !node._jjTap) { node._jjTap = Howler.ctx.createMediaElementSource(node); node._jjTap.connect(Howler.masterGain); } } catch (e) {}
      pend.forEach(function (a) { try { real[a[0]].apply(real, a[1]); } catch (e) {} }); pend = [];
      return real;
    }
    P = new Proxy({ _jjStream: true }, {
      get: function (o, k) {
        if (k === '_jjStream') return true; if (k === '_jjMake') return make; if (k === 'then') return undefined;
        if (real) { var v = real[k]; return typeof v === 'function' ? function () { var r = v.apply(real, arguments); return r === real ? P : r; } : v; }
        if (k === '_src') return src;
        if (k === 'playing') return function () { return false; };
        if (k === 'state') return function () { return 'unloaded'; };
        if (k === 'volume') return function (v) { if (arguments.length) { vol = +v || 0; return P; } return vol; };
        if (k === 'fade') return function (a, b) { vol = +b || 0; return P; };
        if (k === 'pause' || k === 'stop' || k === 'unload' || k === 'mute') return function () { return P; };
        if (k === 'on' || k === 'once' || k === 'off') return function () { pend.push([k, arguments]); return P; };
        if (typeof k !== 'string' || k.charAt(0) === '_') return o[k];
        return function () { var r = make(), f = r[k]; if (typeof f !== 'function') return f; var x = f.apply(r, arguments); return x === r ? P : x; };
      },
      set: function (o, k, v) { if (real) real[k] = v; else if (k === '_src') src = v; else o[k] = v; return true; }
    });
    return P;
  }
  var ambient = jjStream('https://cdn.prod.website-files.com/6a19b8f4191d4fbca532591e/6a19b8f4191d4fbca53259a5_Lotro-ambient.mp3');
  window.addEventListener('jj:mystory-wake', function () { try { if (window.jjAudio && window.jjAudio.ambient && window.jjAudio.ambient._jjMake) window.jjAudio.ambient._jjMake(); } catch (e) {} });   /* the tale's cover is up: begin buffering, so the music can start with the lift */

  window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 };
  if (window.jjAudio.sounds.indexOf(ambient) === -1) window.jjAudio.sounds.push(ambient);
  window.jjAudio.ambient = ambient;
  window.jjAudio.ambientTarget = TARGET_VOLUME;
  ambient._src = 'https://cdn.prod.website-files.com/6a19b8f4191d4fbca532591e/6a19b8f4191d4fbca53259a5_Lotro-ambient.mp3';
  /* music themes (jj-score's store): swap the ambient track in place — the new one picks up wherever the old one was in its fade */
  window.jjAudio.swapAmbient = function (src) {
    if (!src || ambient._src === src) return;
    var old = ambient, wasOn = false, vol = 0; try { wasOn = old.playing(); vol = old.volume(); } catch (e) {}
    var n = jjStream(src);   /* streamed, like the first track */
    ambient = n; window.jjAudio.ambient = n; window.jjAudio.sounds.push(n);
    if (wasOn) { n.play(); n.fade(0, window.jjAudio.muted ? 0 : TARGET_VOLUME, 1500); faded = true; }
    try { old.fade(vol, 0, 900); setTimeout(function () { try { old.stop(); old.unload(); } catch (e) {} }, 1000); } catch (e) {}
  };

  var faded = false;
  function playWithFade() {
    if (window.jjAudio && window.jjAudio.takeover) return;
    if (!ambient.playing()) ambient.play();
    if (faded) return;
    // If it's already audible (e.g. the load-time fade-in is mid-flight), don't yank it back to 0 —
    // that's what caused the "fade out then back in" on the first click after the ambient had started.
    if (ambient.volume() > 0.01) { faded = true; return; }
    faded = true;
    ambient.volume(0);
    ambient.fade(0, TARGET_VOLUME, FADE_MS);
  }

  function armInteractionFallback() {
    function onInteract() {
      try { if (window.Howler && Howler.ctx && Howler.ctx.state === 'suspended') Howler.ctx.resume(); } catch (e) {}
      playWithFade();
      document.removeEventListener('click', onInteract);
      document.removeEventListener('scroll', onInteract);
      document.removeEventListener('touchstart', onInteract);
      document.removeEventListener('keydown', onInteract);
    }
    document.addEventListener('click', onInteract);
    document.addEventListener('scroll', onInteract);
    document.addEventListener('touchstart', onInteract);
    document.addEventListener('keydown', onInteract);
  }

  function begin(delayMs) {
    setTimeout(function () {
      var suspended = (window.Howler && Howler.ctx && Howler.ctx.state === 'suspended');
      if (suspended) {
        // Browser is blocking autoplay — wait for the first gesture, then fade in.
        armInteractionFallback();
      } else {
        playWithFade();
        // Safety re-check in case it didn't actually start.
        setTimeout(function () {
          if (!ambient.playing() || (window.Howler && Howler.ctx && Howler.ctx.state === 'suspended')) {
            faded = false;
            armInteractionFallback();
          }
        }, 700);
      }
    }, delayMs);
  }

  function scheduleBegin() {
    // Homepage with the loader: hold the ambient until the loader reveals, so the
    // sound button shown OVER the loader lets visitors mute before any audio starts.
    var onHome = window.location.pathname.replace(/\/$/, '') === '';
    if (onHome && window.JJLoader && !window.__jjEntranceDone) {
      document.addEventListener('jj:entrance', function () { begin(800); }, { once: true });
    } else {
      begin(AUTO_START_DELAY);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleBegin);
  else scheduleBegin();
})();

/* ===== Menu information rail + hard background interaction lock ===== */
(function () {
  function ready() {
    var wrap = document.querySelector('.menu-wrap');
    var btn = document.querySelector('.menu-container');
    var list = document.querySelector('.menu-wrap .flex-down.left') || document.querySelector('.menu-wrap .flex-down');
    if (!wrap || !btn || !list || document.getElementById('jj-menu-meta')) return;

    var st = document.createElement('style'); st.id = 'jj-menu-polish'; st.textContent =
      'body.jj-menu-open *{pointer-events:none!important}body.jj-menu-open .menu-wrap,body.jj-menu-open .menu-wrap *,body.jj-menu-open .menu-container,body.jj-menu-open .menu-container *,body.jj-menu-open .nav-logo-link,body.jj-menu-open .nav-logo-link *,body.jj-menu-open #jj-sound-btn,body.jj-menu-open #jj-sound-btn *,body.jj-menu-open .audio-container-controller,body.jj-menu-open .audio-container-controller *,body.jj-menu-open #jj-sc-hud,body.jj-menu-open #jj-sc-hud *,body.jj-menu-open #jj-co-nav,body.jj-menu-open #jj-co-nav *{pointer-events:auto!important}' +
      'body.jj-menu-open .jjst-ov.on,body.jj-menu-open .jjst-ov.on *,body.jj-menu-open #jj-first.on,body.jj-menu-open #jj-first.on *,body.jj-menu-open #jj-t2offer.on,body.jj-menu-open #jj-t2offer.on *{pointer-events:auto!important}body.jj-menu-open{overflow:hidden!important}body.jj-menu-open .menu-wrap{isolation:isolate;cursor:default}' +
      '.menu-wrap::before{content:"";position:fixed;inset:0;z-index:-3;background:rgba(4,7,16,.92);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px);pointer-events:none;opacity:0;transition:opacity .9s ease}' +   // the dim + blur eases in behind the wipe, never snaps
      'body.jj-menu-open .menu-wrap::before{opacity:1}' +
      /* Close pressed: everything the menu put on screen — the art, the links, the rail, the moon, the companion card — is gone
         before the circle wipe starts, so the wipe closes over an empty dark room */
      'body.jj-menu-closing .menu-wrap::before{opacity:0!important;transition:opacity .45s ease!important}' +
      'body.jj-menu-closing .menu-wrap .images-row,body.jj-menu-closing .menu-wrap .flex-down,body.jj-menu-closing #jj-menu-meta,body.jj-menu-closing .jjmm-moon,body.jj-menu-closing #jj-co-nav{opacity:0!important;transition:opacity .16s ease!important;pointer-events:none!important}' +
      '.menu-wrap .jjmm-moon{position:fixed;left:25vw;top:-7vh;width:20vw;height:auto;z-index:1;pointer-events:none;opacity:0;transform:scale(.5);transform-origin:50% 55%;filter:drop-shadow(0 0 40px rgba(198,220,255,.45)) drop-shadow(0 0 120px rgba(140,175,255,.28));transition:opacity .12s ease}' +
      '.menu-wrap .jjmm-moon.out{opacity:0!important;animation:none!important;transform:scale(1)!important;transition:opacity .34s ease!important}' +
      'body.jj-menu-open .menu-wrap .jjmm-moon{opacity:1;animation:jjmmMoonIn 2.6s cubic-bezier(.16,1,.3,1) 1.4s both,jjmmMoonGlow 7.5s ease-in-out 4s infinite;transition:opacity 1.1s ease 1.4s}' +
      '@keyframes jjmmMoonIn{from{transform:scale(.5);filter:drop-shadow(0 0 40px rgba(198,220,255,.45)) drop-shadow(0 0 120px rgba(140,175,255,.28));}to{transform:scale(1);filter:drop-shadow(0 0 40px rgba(198,220,255,.45)) drop-shadow(0 0 120px rgba(140,175,255,.28));}}' +
      '@keyframes jjmmMoonGlow{0%,100%{transform:scale(1);filter:drop-shadow(0 0 40px rgba(198,220,255,.45)) drop-shadow(0 0 120px rgba(140,175,255,.28))}50%{transform:scale(1.06);filter:drop-shadow(0 0 95px rgba(220,236,255,.95)) drop-shadow(0 0 230px rgba(150,185,255,.62))}}' +
      '.menu-wrap .flex-down.left,.menu-wrap .flex-down{position:relative;z-index:3}' +   // the menu dims and blurs the page behind it; the preview art (z-index -1) still reads over the top
      '.menu-wrap .menu-hover-image{filter:saturate(1.02)}' +
      '.menu-wrap .images-row{pointer-events:none!important;position:fixed!important;inset:6vh -18vw 5vh 2vw!important;width:auto!important;height:auto!important;display:flex!important;align-items:center!important;gap:1.2vw!important;z-index:-1!important;transform:translateX(0);opacity:.9}' +
      '.menu-wrap .menu-hover-image{pointer-events:none!important;position:relative!important;inset:auto!important;width:36vw!important;height:72vh!important;min-width:36vw!important;object-fit:cover!important;border:1px solid rgba(255,255,255,.28)!important;border-radius:20px!important;clip-path:polygon(10% 0,100% 0,90% 100%,0 100%);transform:rotate(-3deg);box-shadow:0 30px 90px rgba(0,0,0,.55)!important}' +
      '.menu-wrap .menu-hover-image:nth-child(even){transform:rotate(3deg) translateY(4vh)}' +
      '.menu-wrap .flex-down.left,.menu-wrap .flex-down{position:relative;z-index:3}' +
      '.menu-wrap .menu-open-link{position:relative;transition:color .25s ease,text-shadow .25s ease!important}' +
      '.menu-wrap .menu-open-link>div{white-space:nowrap}' +   // a link never breaks mid-word (Storytim / e on narrow screens)
      '@media (max-width:1000px){.menu-wrap .menu-open-link{font-size:clamp(34px,7.2vw,72px)!important;line-height:1.12!important}}' +
      '.menu-wrap .menu-open-link:hover{color:#fff!important;text-shadow:0 0 28px rgba(255,0,245,.55)}' +
      '.menu-wrap .menu-open-link[aria-current="page"]{color:#fff!important}' +
      '.menu-wrap .menu-open-link[aria-current="page"]>div{position:relative;display:inline-block;padding-left:16px}' +
      '.menu-wrap .menu-open-link[aria-current="page"]>div::before{content:"";position:absolute;left:-8px;top:50%;width:10px;height:10px;border-radius:50%;background:#FF00F5;box-shadow:0 0 16px #FF00F5;transform:translateY(-50%);animation:jjMenuDot 1.6s ease-in-out infinite}@keyframes jjMenuDot{0%,100%{transform:translateY(-50%) scale(1);box-shadow:0 0 10px #FF00F5}50%{transform:translateY(-50%) scale(1.35);box-shadow:0 0 22px #FF00F5,0 0 0 6px rgba(255,0,245,.18)}}' +
      '#jj-menu-meta{position:fixed;left:5vw;right:5vw;top:120px;bottom:4vh;z-index:6;display:block;color:#fff;font-family:"Joes Journey Headline",sans-serif;pointer-events:none!important;opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .7s cubic-bezier(.22,1,.36,1)}#jj-menu-meta.in{opacity:1;transform:none}' +
      '#jj-menu-meta .jjmm-left{position:absolute;left:50%;bottom:0;transform:translateX(-50%);text-align:center;pointer-events:none!important}' +
      '#jj-menu-meta .jjmm-pct{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-top:9px}#jj-menu-meta .jjmm-pct b{color:#fff;font-weight:700}' +
      '#jj-menu-meta .jjmm-theme{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.62);margin-bottom:10px}#jj-menu-meta .jjmm-theme b{color:#fff}' +
      '#jj-menu-meta .jjmm-actions{position:fixed;left:32px;right:auto;bottom:32px;pointer-events:auto!important;display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:flex-start}' +
      '#jj-menu-meta button,#jj-menu-meta a{position:relative;width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,255,255,.65);background:rgba(4,7,14,.62);color:#fff;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font:700 18px/1 "Joes Journey Headline",sans-serif;cursor:pointer;transition:transform .25s ease,background .25s ease,box-shadow .25s ease}' +
      '#jj-menu-meta a img{width:32px;height:32px;object-fit:contain;transition:opacity .2s ease}#jj-menu-meta a img.f{position:absolute;left:50%;top:50%;translate:-50% -50%;opacity:0}#jj-menu-meta a:hover img.f{opacity:1}#jj-menu-meta a:hover img:not(.f){opacity:0}' +
      '#jj-menu-meta button.wide{width:auto;border-radius:26px;padding:0 18px;gap:9px;font-size:13px;text-transform:uppercase;letter-spacing:.06em}' +
      '#jj-menu-meta button:hover,#jj-menu-meta a:hover{transform:translateY(-4px);background:rgba(255,0,245,.25);box-shadow:0 10px 28px rgba(255,0,245,.28)}' +
      '#jj-menu-meta .jjmm-score{display:flex;gap:8px;align-items:center;justify-content:center;font-size:14px}#jj-menu-meta .jjmm-score img{width:22px;height:22px;object-fit:contain}' +
      'html[data-jj-theme="medieval"] #jj-menu-meta{--jj-accent:#FFC531}html[data-jj-theme="retro"] #jj-menu-meta{--jj-accent:#FFD400}html[data-jj-theme="alien"] #jj-menu-meta{--jj-accent:#4FE3FF}' +
      '#jj-menu-meta .jjmm-left::after{content:"";display:block;margin:12px auto 0;width:110px;height:2px;background:var(--jj-accent,#FF00F5);box-shadow:0 0 12px var(--jj-accent,#FF00F5)}' +
      '@media(max-width:760px){.menu-wrap .images-row{opacity:.36!important}.menu-wrap .menu-hover-image{width:78vw!important;min-width:78vw!important}#jj-menu-meta{left:24px;right:24px;top:100px;bottom:22px}#jj-menu-meta .jjmm-actions{left:0;right:auto;justify-content:flex-start}#jj-menu-meta button.wide{height:46px}}';
    document.head.appendChild(st);

    var moon = document.createElement('img'); moon.className = 'jjmm-moon'; moon.alt = '';
    moon.src = 'data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 200%27%3E%3Cdefs%3E%3CradialGradient id=%27o%27%3E%3Cstop offset=%27.52%27 stop-color=%27%23c8d8ff%27 stop-opacity=%27.22%27/%3E%3Cstop offset=%27.78%27 stop-color=%27%23a8c0ff%27 stop-opacity=%27.09%27/%3E%3Cstop offset=%271%27 stop-color=%27%2393aaff%27 stop-opacity=%270%27/%3E%3C/radialGradient%3E%3CradialGradient id=%27i%27%3E%3Cstop offset=%27.42%27 stop-color=%27%23ffffff%27 stop-opacity=%27.5%27/%3E%3Cstop offset=%27.74%27 stop-color=%27%23dbe7ff%27 stop-opacity=%27.3%27/%3E%3Cstop offset=%271%27 stop-color=%27%23c3d4ff%27 stop-opacity=%270%27/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%27100%27 fill=%27url(%23o)%27/%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%2772%27 fill=%27url(%23i)%27/%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%2746%27 fill=%27%23ffffff%27/%3E%3Cellipse cx=%2785%27 cy=%2782%27 rx=%278%27 ry=%277%27 fill=%27%23e6e6ee%27/%3E%3Cellipse cx=%27114%27 cy=%2796%27 rx=%276%27 ry=%275.5%27 fill=%27%23e6e6ee%27/%3E%3Cellipse cx=%2796%27 cy=%27118%27 rx=%279%27 ry=%277.5%27 fill=%27%23e6e6ee%27/%3E%3Cellipse cx=%2776%27 cy=%27107%27 rx=%274.5%27 ry=%274%27 fill=%27%23e6e6ee%27/%3E%3C/svg%3E';
    wrap.appendChild(moon);                                        // the moon itself, over the art and under the links
    var meta = document.createElement('div'); meta.id = 'jj-menu-meta';
    meta.innerHTML = '<div class="jjmm-left"><div class="jjmm-theme">Current theme · <b>Classic</b></div><div class="jjmm-pct"><span class="pa">Achievements <b>0/0</b> · 0%</span><span class="ps">Store <b>0/0</b> · 0%</span></div></div><div class="jjmm-actions"><a href="mailto:jackson.laptop95@gmail.com" aria-label="Email Joe" data-cursor="external"><img src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/icon-mail.webp" alt=""><img class="f" src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/icon-mail-fill.webp" alt=""></a><a href="https://www.linkedin.com/in/joseph-jackson-ui/" target="_blank" rel="noopener" aria-label="Joe on LinkedIn" data-cursor="external"><img src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/icon-linkedin.webp" alt=""><img class="f" src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/icon-linkedin-fill.webp" alt=""></a><a href="/contact" aria-label="Joe on WhatsApp" data-cursor="external"><img src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/icon-phone.webp" alt=""><img class="f" src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/icon-phone-fill.webp" alt=""></a></div>';
    wrap.appendChild(meta);

    function update() {
      var score = window.jjScore, key = score ? score.theme() : (document.documentElement.getAttribute('data-jj-theme') || 'classic');
      var names = { classic:'Classic', medieval:'Medieval', retro:'Retro', alien:'Space', mixed:'Special' };
      meta.querySelector('.jjmm-theme b').textContent = names[key] || 'Classic';
      var pct = function (n, t) { return t ? Math.round(n / t * 100) : 0; };
      try { var A = score && score.ACH ? score.ACH : [], ad = A.filter(function (a) { return score.has(a.id); }).length;
        meta.querySelector('.pa').innerHTML = 'Achievements <b>' + ad + '/' + A.length + '</b> · ' + pct(ad, A.length) + '%'; } catch (e) {}
      try { var c = window.jjCompanion && window.jjCompanion.count ? window.jjCompanion.count() : null;
        if (c) meta.querySelector('.ps').innerHTML = 'Store <b>' + c.own + '/' + c.total + '</b> · ' + pct(c.own, c.total) + '%'; } catch (e) {}

      Array.prototype.forEach.call(list.querySelectorAll('a[href]'), function (a) {
        var p; try { p = new URL(a.href, location.href).pathname.replace(/\/$/,'') || '/'; } catch(e) { return; }
        var here = location.pathname.replace(/\/$/,'') || '/'; var lc = (/[?&]choose=([a-z0-9]+)/.exec(a.href) || [])[1] || '', hc = (/[?&]choose=([a-z0-9]+)/.exec(location.search) || [])[1] || ''; var lp = (/[?&]part=([a-z0-9]+)/.exec(a.href) || [])[1] || '', hp = (/[?&]part=([a-z0-9]+)/.exec(location.search) || [])[1] || ''; if (p === here && !/credits=1/.test(a.href) && lc === hc && lp === hp) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');   // Work lives at /?choose=work: it is current only there, and Home only without it
      });
    }
    function closeThen(fn) { if (document.body.classList.contains('jj-menu-open')) btn.click(); setTimeout(fn, 180); }

    function visible() { var c = getComputedStyle(wrap), r = wrap.getBoundingClientRect(); return r.width > 2 && r.height > 2 && c.display !== 'none' && c.visibility !== 'hidden' && parseFloat(c.opacity || 1) > .02; }
    var inT = null;
    /* The moon leaves by fading, never by shrinking: pin its current size inline before the
       body.jj-menu-open rule (and with it the grow animation) is taken away. */
    var moonClosing = false;                                       // Close has been pressed: the menu is still fading out, so don't let sync() bring the moon back
    function moonOut() { moonClosing = true; if (moon.classList.contains('out')) return; moon.style.transform = 'scale(1)'; moon.classList.add('out'); }
    function moonIn() { moon.classList.remove('out'); moon.style.transform = ''; }
    function sync() { var on = visible(); if (!on) { moonOut(); moonClosing = false; document.body.classList.remove('jj-menu-closing'); } document.body.classList.toggle('jj-menu-open', on); meta.style.display = on ? 'flex' : 'none'; if (on) update();
      if (on && !moonClosing) moonIn();
      if (on) { if (!meta.classList.contains('in') && !inT) inT = setTimeout(function () { inT = null; meta.classList.add('in'); }, 1150); } else { clearTimeout(inT); inT = null; meta.classList.remove('in'); }
      if (on !== sync._was) { sync._was = on; try { window.dispatchEvent(new Event(on ? 'jj:menu:open' : 'jj:menu:close')); } catch (e) {} } }   // NOT jj:score:pause — that pauses the global GSAP timeline, which is what animates this menu   // the rail is the LAST thing to arrive: after the links have staggered in
    meta.style.display = 'none'; btn.addEventListener('click', function () {
      if (document.body.classList.contains('jj-menu-open')) { moonOut(); document.body.classList.add('jj-menu-closing'); }   // Close: the room empties first, then the wipe
      else document.body.classList.remove('jj-menu-closing');
      setTimeout(sync, 80); setTimeout(sync, 700); setTimeout(sync, 1400); });
    document.addEventListener('keydown', function (e) {           // Esc opens and closes the menu anywhere on the site (unless a modal has the keyboard)
      if (e.key !== 'Escape' || e.defaultPrevented) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '')) return;
      if (document.body.classList.contains('jj-modal-open') && !document.body.classList.contains('jj-menu-open')) return;
      e.preventDefault(); btn.click(); });
    document.addEventListener('wheel', function (e) { if (document.body.classList.contains('jj-menu-open') && !(e.target.closest && e.target.closest('.menu-wrap'))) e.preventDefault(); }, { passive:false, capture:true });
    document.addEventListener('touchmove', function (e) { if (document.body.classList.contains('jj-menu-open') && !(e.target.closest && e.target.closest('.menu-wrap'))) e.preventDefault(); }, { passive:false, capture:true });
    new MutationObserver(sync).observe(wrap, { attributes:true, attributeFilter:['class','style'] });
    window.addEventListener('jj:score', update); setInterval(function () { if (document.body.classList.contains('jj-menu-open')) { sync(); update(); } }, 500);
    /* a modal that pops up while the menu is open (the sound prompt, an unlock card) would sit dead under the menu's
       pointer-events lock with no way out: the menu steps aside the moment any modal opens */
    new MutationObserver(function () { var b = document.body.classList; if (b.contains('jj-modal-open') && b.contains('jj-menu-open') && !b.contains('jj-menu-closing')) btn.click(); }).observe(document.body, { attributes: true, attributeFilter: ['class'] });   // re-check visibility too: a Themes/Store click closes the menu without a class change we can see
    sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();

document.addEventListener("DOMContentLoaded", function () {
  const audioTrigger = document.querySelector('.enter-link_wrapper');
  const audioController = document.querySelector('.audio-container-controller');
  let isMuted = false;
  let currentVolume = 1.0;
  window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 };
  const activeSounds = window.jjAudio.sounds;

  // Subtitle element
  var subEl = document.getElementById('jj-subtitle');
  if (!subEl) {
    subEl = document.createElement('div');
    subEl.id = 'jj-subtitle';
    document.body.appendChild(subEl);
  }
  var subTimers = [];
  function showSub(text) { subEl.textContent = text; subEl.classList.add('is-visible'); }
  function hideSub() { subEl.classList.remove('is-visible'); }
  function clearSubs() { subTimers.forEach(clearTimeout); subTimers = []; }

  var subCues = [
    { time: 0,     text: 'Long, long ago, in a land far away…' },
    { time: 5950,  text: 'all things were born in a single flash of light,' },
    { time: 9950,  text: 'and from it, a wizard came to be.' },
    { time: 14900, text: 'Often he would turn his gaze to the stars,' },
    { time: 18550, text: 'wondering if they were doorways into another world.' },
    { time: 22950, text: 'Poetic, indeed.' },
    { time: 25000, text: 'But what if something beyond them gazed back upon us?' },
    { time: 29900, text: null }

  ];


  if (audioTrigger) {
    audioTrigger.addEventListener('click', function playAudio() {
      // Cross the seek under a fade so there's no audible jump: fade the current loop out over 5s, then
      // (silently) seek to 0:37.1 and fade back in over 24.9s — the track reaches 1:02 at full volume
      // exactly when the scroll unlocks (~29.9s after click, end of the wizard speech).
      // 37.1 + 24.9 = 62s;  5 + 24.9 = 29.9s.
      var amb = window.jjAudio.ambient;
      var ambBack = window.jjAudio.ambientTarget || 0.6;
      window.jjAudio.takeover = true; // we drive the ambient from here — stop the autoplay-fallback touching it
      if (amb) {
        if (!amb.playing()) amb.play();
        amb.fade(amb.volume(), 0, 5000);
        setTimeout(function () {
          amb.volume(0);             // force silence FIRST so the seek (and any seek-pop) is inaudible
          try { amb.seek(37.1); } catch (e) {}
          amb.fade(0, ambBack, 24900);
        }, 5000);
      }
      // Fade out / stop any OTHER active sounds, but leave the ambient running.
      activeSounds.slice().forEach(function (s) {
        if (s === amb) return;
        s.fade(s.volume(), 0, 1500);
        setTimeout(function () { s.stop(); }, 1500);
        var i = activeSounds.indexOf(s); if (i > -1) activeSounds.splice(i, 1);
      });

      const speech = new Howl({
        // Hosted as a Webflow asset — raw.githack refuses to serve mp3s (403).
        src: ['https://cdn.prod.website-files.com/6a19b8f4191d4fbca532591e/6a7ce4c53f264355f46a1d4e_wizard-speech.mp3'],
        volume: 0,
               onend: function () {
          speech.fade(0.8, 0, 1500);
          setTimeout(function () {
            var idx = activeSounds.indexOf(speech);
            if (idx > -1) activeSounds.splice(idx, 1);
          }, 1500);
          hideSub();
          clearSubs();
        }
      });


      activeSounds.push(speech);
      // Short fade — this take starts speaking immediately, so a 3s ramp would swallow "Long, long ago".
      const speechId = speech.play();
      speech.fade(0, 0.8, 1200, speechId);

      document.dispatchEvent(new CustomEvent('jj:audio:start'));

      subCues.forEach(function (cue) {
        subTimers.push(setTimeout(function () {
          if (cue.text) { showSub(cue.text); } else { hideSub(); }
        }, cue.time));
      });

      audioTrigger.removeEventListener('click', playAudio);

      if (audioController) {
        audioController.addEventListener('click', function () {
          activeSounds.forEach(function (s) {
            if (isMuted) { s.fade(0.0, currentVolume, 500); } else { s.fade(currentVolume, 0.0, 500); }
          });
          isMuted = !isMuted;
        });
      }
    });
  }

  const lastScrollTrigger = document.querySelector('.scroll-trigger.last');
  if (lastScrollTrigger) {
    ScrollTrigger.create({
      trigger: lastScrollTrigger,
      start: "top center",
      onEnter: function () { activeSounds.forEach(function (s) { s.fade(currentVolume, 0.0, 4500); }); }
    });
  }
});

(function () {
  if (window.location.pathname.replace(/\/$/, '') !== '') return;

  function jjStartFlyRive() {
    var attempts = 0;
    function tryTrigger() {
      var rivePlugin = window.Webflow && Webflow.require && Webflow.require('rive');
      if (!rivePlugin) { if (++attempts < 20) setTimeout(tryTrigger, 500); return; }
      var flyEl = document.querySelector('.fly-rive');
      if (!flyEl) return;
      var inst = rivePlugin.getInstance(flyEl);
      if (!inst || !inst.rive) { if (++attempts < 20) setTimeout(tryTrigger, 500); return; }
      var riveObj = inst.rive;
      function trigger() {
        try { riveObj.play('State Machine 1'); } catch (e) {}
        var inputs = riveObj.stateMachineInputs('State Machine 1');
        if (inputs) inputs.forEach(function (i) { if (i.name === 'Fly') i.value = true; });
      }
      if (riveObj.loaded) { trigger(); } else { riveObj.on('load', trigger); }
    }
    tryTrigger();
  }

  /* The Joe's Journey title is a Rive with a Webflow interaction on it, so it autoplays and
     fades itself in the moment the page loads — under the loader, finished before anyone sees it.
     Hold it at frame one with a class Webflow can't override, and stop the state machine as soon
     as the instance exists; jjStartIntroRive below is what actually lets it play. */
  (function holdIntroRive() {
    var st = document.createElement('style');
    st.textContent = 'html:not(.jj-rive-go) .rive{opacity:0!important}';
    (document.head || document.documentElement).appendChild(st);
    var n = 0;
    (function grab() {
      var pl = window.Webflow && Webflow.require && Webflow.require('rive');
      var el = document.querySelector('.rive');
      var inst = pl && el && pl.getInstance(el);
      if (inst && inst.rive) { try { inst.rive.stop(); } catch (e) {} return; }
      if (++n < 60) setTimeout(grab, 200);
    })();
  })();

  function jjStartIntroRive() {
    document.documentElement.classList.add('jj-rive-go');
    var attempts = 0;
    function tryTrigger() {
      var rivePlugin = window.Webflow && Webflow.require && Webflow.require('rive');
      if (!rivePlugin) { if (++attempts < 20) setTimeout(tryTrigger, 500); return; }
      var riveEl = document.querySelector('.rive');
      if (!riveEl) return;
      var inst = rivePlugin.getInstance(riveEl);
      if (!inst || !inst.rive) { if (++attempts < 20) setTimeout(tryTrigger, 500); return; }
      var riveObj = inst.rive;
      function trigger() {
        var riveEl2 = document.querySelector('.rive');
        if (riveEl2) gsap.set(riveEl2, { opacity: 1 });
        try { riveObj.play('State Machine 1'); } catch (e) {}
        var inputs = riveObj.stateMachineInputs('State Machine 1');
        if (inputs) inputs.forEach(function (i) { if (i.name === 'Start') i.value = true; });
      }
      if (riveObj.loaded) { trigger(); } else { riveObj.on('load', trigger); }
    }
    tryTrigger();
  }

  function dustExit(el) {
    if (el._dusted) return;
    el._dusted = true;
    if (typeof SplitType === 'undefined') return;
    var split = new SplitType(el, { types: 'chars' });
    split.chars.forEach(function (c) {
      c.style.fontFamily = 'var(--jj-alien-font, monospace)';
      c.style.letterSpacing = '0.15em';
    });
    gsap.to(split.chars, {
      y: function () { return gsap.utils.random(-50, -120); },
      x: function () { return gsap.utils.random(-30, 30); },
      rotation: function () { return gsap.utils.random(-90, 90); },
      scale: function () { return gsap.utils.random(0, 0.6); },
      opacity: 0,
      duration: function () { return gsap.utils.random(0.4, 1.0); },
      ease: 'power2.out',
      stagger: { each: 0.02, from: 'random' }
    });
  }





  function revealPage() {
    var flyRiveEl = document.querySelector('.fly-rive');
if (flyRiveEl) { flyRiveEl.style.display = 'block'; flyRiveEl.style.opacity = '1'; }

    if (!window.jjFlyerIn) jjStartFlyRive();   // the local flyer (homepage-footer.js) replaces the Rive blob
    var overlay   = document.querySelector('.joes-journey-overlay');
    var introSec  = document.querySelector('.intro-section');
    var introWrap = document.querySelector('.intro-reveal_wrapper');
    var sticky    = document.querySelector('.sticky-scroll-wrapper');
    var nextBtn   = document.querySelector('.next-section-button');
    if (introWrap) introWrap.style.display = 'none';
    // setTimeout instead of gsap `delay`: gsap's delayed tweens ride the rAF ticker,
    // which stalls when the tab is unfocused — the speech choreography (setTimeout-
    // based) then runs while these fades never fire, leaving the JoesJourney overlay
    // stuck over the revealed page. Wall-clock timers keep both on the same clock.
    setTimeout(function () {
      if (overlay)  gsap.to(overlay,  { opacity: 0, duration: 1.0, onComplete: function () { overlay.style.pointerEvents = 'none'; } });
      if (introSec) gsap.to(introSec, { opacity: 0, duration: 1.0, onComplete: function () { introSec.style.pointerEvents = 'none'; } });
      if (sticky)   gsap.to(sticky,   { opacity: 1, duration: 3.5 });
    }, 13000);
    setTimeout(function () {
      if (nextBtn) gsap.to(nextBtn, { opacity: 1, duration: 0.5 });
    }, 16500);

  }

  window.revealPage = revealPage;

  function init() {
    var riveDiv      = document.querySelector('.rive');
    var topPanel     = document.querySelector('.black-reveal_content.top');
    var botPanel     = document.querySelector('.black-reveal_content.bottom');
    var introWrapper = document.querySelector('.intro-reveal_wrapper');
    var btn          = document.querySelector('.enter-link_wrapper');
    if (riveDiv) gsap.set(riveDiv, { opacity: 0 });
    var flyRiveEl = document.querySelector('.fly-rive');
    if (flyRiveEl) flyRiveEl.style.display = 'none';

        var sticky = document.querySelector('.sticky-scroll-wrapper');
    if (sticky) gsap.set(sticky, { opacity: 0 });

    if (btn) {
      btn.addEventListener('click', function (e) { e.preventDefault(); revealPage(); });
    }

    function runEntrance() {
      // Everything gated on jj:entrance (intro.js timelines, the landing alien in
      // homepage-footer.js) starts counting from here instead of page load.
      window.__jjEntranceDone = true;
      document.dispatchEvent(new CustomEvent('jj:entrance'));
      if (topPanel && botPanel && typeof gsap !== 'undefined') {
        gsap.to(topPanel, { y: -5000, duration: 1.4, ease: 'power2.inOut', delay: 0.2 });
        gsap.to(botPanel, { y:  5000, duration: 1.4, ease: 'power2.inOut', delay: 0.2 });
        if (introWrapper) {
          gsap.to(introWrapper, { opacity: 0, duration: 0.3, delay: 1.3, onComplete: function () { introWrapper.style.display = 'none'; } });
        }
      }
      setTimeout(jjStartIntroRive, 6000);
    }

    // First-entrance loader (jj-loader.js, 'scroll' variant — galloping knight-Joe).
    // Measures the real bytes of everything that makes the intro stutter — the Rive
    // files, the Big Bang cast (philosopher/wizard + alien sprites), the wizard
    // speech — and reveals only when downloaded + decoded. No loader script = no gate.
    var WF1 = 'https://cdn.prod.website-files.com/6a19b8f4191d4fbca532591e/';
    var WF2 = 'https://cdn.prod.website-files.com/69c2e676c74b81c8dcbd3651/';
    var GH  = 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/';
    /* HEAVY = only what the LANDING itself needs, so the loader is short. Everything the
       Big Bang and the scenes after "Click to begin" need is in LATER, fetched quietly
       from the moment the landing appears — the visitor is reading the title and waiting
       on the CTA for ~7s, which is more than enough time. */
    var HEAVY = [
      WF1 + '6a19b8f4191d4fbca532592c_rive-animation.riv',      // the Joe's Journey title
      WF1 + '6a19b8f4191d4fbca532593b_Waves.riv',               // landing backdrop
      WF1 + '6a19b8f4191d4fbca5325935_Bigbang.riv'              // tiny, and it fires the instant the CTA is clicked
    ];
    var LATER = [
      WF1 + '6a19b8f4191d4fbca5325984_code-loop.riv',
      WF1 + '6a19b8f4191d4fbca5325938_rocket-2.riv',
      WF1 + '6a19b8f4191d4fbca5325956_Roads-new.riv',
      WF1 + '6a19b8f4191d4fbca532595e_mars-2.riv',
      WF1 + '6a7ce4c53f264355f46a1d4e_wizard-speech.mp3',
      GH + 'bb-wizard.webm',                                   // the Big Bang wizard (was the two philosopher SVGs)
      WF2 + '6a0d815469fc93c75834b57d_Spright%20top%20right.svg',
      WF2 + '6a0d8154cab30401d9e344dd_Sprite%20top%20left.svg',
      WF2 + '6a0d8154e295fd12e49f8f0e_Sprite%20top%20middle.svg',
      WF2 + '6a1020606c5b65a83f63a171_sassy%20boy%201.svg',
      WF2 + '6a102060d6130fe4145e128e_happy%20boy.svg',
      'https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/6718f10874b12a196e30db11_Starry%20Board.svg',
      // doorway beat (homepage-footer.js spawnDoorway) — lottie json + world glimpses
      GH + 'arch-still.webp', GH + 'arch-hole.png', GH + 'world-tavern.webp', GH + 'world-village.webp', GH + 'world-woods.webp', GH + 'world-cave.webp',
      GH + 'story-vil-bg.webp',
      GH + 'story-wood-bg.webp',
      GH + 'story-cas-bg.webp'
    ];
    document.addEventListener('jj:entrance', function () {
      LATER.forEach(function (u, i) { setTimeout(function () { fetch(u, { mode: 'no-cors', cache: 'force-cache' }).catch(function () {}); }, i * 120); });
    }, { once: true });
    if (window.JJLoader) {
      JJLoader.start({
        variant: 'precam',    // dark moon-window scene, rolling jelly precam guy (see page-loader README)
        assets: HEAVY,
        body:  GH + 'blob-body.webp',
        eye:   GH + 'blob-eye.webp',
        grass: GH + 'loader-grass.webp',
        minTime: 2800,   // the show always plays at least this long (anti-snap); the reveal now costs ~.76s of its own, so this came down to keep the total the same
        maxWait: 20000,  // hard safety — never traps the visitor
        decode: true,
        onReady: runEntrance
      });
    } else {
      runEntrance();
    }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();

(function () {
  var STATES = {
     def: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" fill="white" stroke="#000000" stroke-opacity="0.5" stroke-width="1"/></svg>',
    hover: '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#4F4F4F"/><circle cx="26" cy="26" r="2" fill="white"/></svg>',
    external: '<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="30.5" stroke="white" stroke-opacity="0.3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.9671 37.4243C31.1233 37.5805 31.3766 37.5805 31.5328 37.4243L37.6742 31.2829C37.8304 31.1267 37.8304 30.8734 37.6742 30.7172L31.5328 24.5758C31.3766 24.4196 31.1233 24.4196 30.9671 24.5758L30.1186 25.4243C29.9623 25.5805 29.9623 25.8338 30.1186 25.99L33.1043 28.9758C33.4823 29.3538 33.2146 30.0001 32.6801 30.0001L24.443 30.0001C24.2221 30.0001 24.043 30.1791 24.043 30.4001V31.6001C24.043 31.821 24.2221 32.0001 24.443 32.0001L32.6801 32.0001C33.2146 32.0001 33.4823 32.6463 33.1044 33.0243L30.1186 36.0101C29.9623 36.1663 29.9623 36.4196 30.1186 36.5758L30.9671 37.4243Z" fill="white"/></svg>',
    caseStudy: '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="99" height="99" rx="49.5" stroke="white"/><path d="M40.5684 48.11L37.6084 41.5H39.0584L40.6984 45.54C40.7184 45.59 40.7484 45.59 40.7684 45.54L42.2784 41.5H43.6484L40.8884 48.11H40.5684ZM44.3214 48V41.5H45.6214V48H44.3214ZM46.88 48V41.5H51.13V42.74H48.13V43.99H50.88V45.21H48.13V46.78H51.13V48H46.88ZM57.4625 48.11L55.9625 43.4L54.4825 48.11H54.1425L51.6625 41.5H53.1025L54.2825 45.28C54.3025 45.33 54.3325 45.33 54.3525 45.28L55.3325 41.5H56.6625L57.6825 45.28C57.7025 45.33 57.7325 45.33 57.7525 45.28L58.8925 41.5H60.2825L57.8025 48.11H57.4625ZM31.8165 58V51.5H33.9465C35.3665 51.5 36.2165 52.31 36.2165 53.55C36.2165 54.79 35.3665 55.64 33.9465 55.64H33.0965V58H31.8165ZM33.0965 54.47H33.9465C34.5765 54.47 34.9165 54.08 34.9165 53.55C34.5765 53.06 34.5765 52.69 33.9465 52.69H33.0965V54.47ZM36.9142 58V51.5H39.1442C40.5642 51.5 41.4142 52.26 41.4142 53.5C41.4142 54.38 40.9842 55.03 40.2342 55.34L41.7742 58H40.3442L38.9342 55.54H38.1942V58H36.9142ZM38.1942 54.37H39.1442C39.7742 54.37 40.1142 54.03 40.1142 53.5C39.7742 53.01 39.7742 52.69 39.1442 52.69H38.1942V54.37ZM49.7577 58.15C49.2677 58.15 48.7977 57.97 48.5577 57.72L48.9577 56.64C49.1277 56.79 49.3777 56.91 49.6777 56.91C50.1177 56.91 50.4577 56.65 50.4577 56.04V51.5H51.7577V56.02C51.7577 57.49 50.8277 58.15 49.7577 58.15ZM52.9493 58V51.5H57.1993V52.74H54.1993V53.99H56.9493V55.21H54.1993V56.78H57.1993V58H52.9493ZM61.0337 58.1C59.2037 58.1 57.8537 56.64 57.8537 54.75C57.8537 52.81 59.2037 51.4 61.0537 51.4C61.9237 51.4 62.6837 51.71 63.1437 52.15L62.5937 53.24C62.2637 52.96 61.7037 52.72 61.1137 52.72C59.9737 52.72 59.1937 53.59 59.1937 54.75C59.9437 55.87 59.9437 56.8 61.1137 56.8C61.7137 56.8 62.3037 56.55 62.6437 56.2L63.1837 57.3C62.7337 57.76 61.9237 58.1 61.0337 58.1ZM65.425 58V52.66H63.525V51.5H68.625V52.66H66.725V58H65.425Z" fill="white"/><path d="M45.3325 58.1C43.4625 58.1 42.0725 56.64 42.0725 54.75C42.0725 52.81 43.4725 51.4 45.3325 51.4C47.1925 51.4 48.5925 52.81 48.5925 54.75C48.5925 56.64 47.2025 58.1 45.3325 58.1ZM43.3725 54.75C43.3725 55.88 44.1425 56.82 45.3325 56.82C46.5225 56.82 47.2925 55.88 47.2925 54.75C47.2925 53.58 46.4925 52.7 45.3325 52.7C44.1725 52.7 43.3725 53.58 43.3725 54.75Z" fill="#FF00F5"/></svg>'
  };
  var el = document.createElement('div');
  el.id = 'jj-cursor';
  if (window.__jjCursor) el.style.display = 'none';   // cursor.js (the stardust one) owns the pointer
  document.body.appendChild(el);
  var current = null;
  var mx = 0, my = 0, cx = 0, cy = 0;
  function setState(s) {
    if (s === current) return;
    current = s;
    el.innerHTML = STATES[s];
    el.classList.remove('is-entering');
    void el.offsetWidth;
    el.classList.add('is-entering');
  }
  setState('def');
  function tick() {
    if (window.__jjCursor) { el.style.display = 'none'; return; }   /* f-1010b: cursor.js owns the pointer: this older cursor's loop ends (it wrote left / top on a hidden element every frame, for ever) */
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    el.style.left = cx + 'px';
    el.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  }
  tick();
  document.addEventListener('mousemove', function (e) { if (window.__jjCursor) return; mx = e.clientX; my = e.clientY; el.style.opacity = '1'; });
  document.addEventListener('mouseleave', function () { el.style.opacity = '0'; });
  document.addEventListener('mouseover', function (e) {
    var t = e.target;
    if (t.closest('a[href*="/case-studies/"]')) { setState('caseStudy'); return; }
    if (t.closest('a[target="_blank"]') || t.closest('a[href^="http"]:not([href*="joes-journey"])')) { setState('external'); return; }
    if (t.closest('a, button, [role="button"], [data-cursor], [data-jj="cta"], [data-jj="btn"], .enter-link_wrapper, .jj-poke-sprite, #jj-sitting-alien, label, input, select, textarea')) { setState('hover'); return; }
    setState('def');
  });
  window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 };
  var jjUserMuted = false;
  try { if (sessionStorage.getItem('jjUserMuted') === '1') jjUserMuted = true; } catch (e) {}
  function jjMasterVolume() { return (window.jjAudio && window.jjAudio.volume != null) ? window.jjAudio.volume : 1.0; }
  function jjApplyMute() {
    if (typeof window.Howler === 'undefined') return;
    try { Howler.volume(jjUserMuted ? 0 : jjMasterVolume()); } catch (e) {}
  }
  /* f-1012a (Joe, 12 Oct: 'it doesn't have to go directly with the music if it's causing lag: a set loop to show sound is playing, nothing when muted').
     The bars no longer follow the sound. There was a loop here that read the audio every frame and wrote ten heights, a glow and a scale: every write of a height
     a layout, the mist's bars under a 24 px blur redrawn each time, on every page, for ever. Now the look is three states and no script per frame at all:
       muted   the style sheet's flat dots (as before)
       quiet   the resting bars (as before)
       playing a set loop: each bar is one full-height bar scaled up and down by a CSS animation (transform only: the graphics chip's alone), each on its own
               beat; the mist behind breathes as one piece.
     jjMoonState keeps .is-muted / .is-quiet on the button (it always did); playing = neither. */
  function jjStartAudioBars(btn) {
    if (!document.getElementById('jj-bar-loop')) { var st = document.createElement('style'); st.id = 'jj-bar-loop';
      st.textContent = '#jj-sound-btn.jj-loop:not(.is-muted):not(.is-quiet) .jj-bar{height:30px!important;transform:scaleY(.3);will-change:transform;animation:jjBarLoop var(--bd,1.1s) ease-in-out var(--bl,0s) infinite alternate;}' +
        '@keyframes jjBarLoop{0%{transform:scaleY(calc(var(--bm,1) * .22));}40%{transform:scaleY(calc(var(--bm,1) * .95));}68%{transform:scaleY(calc(var(--bm,1) * .48));}100%{transform:scaleY(calc(var(--bm,1) * .8));}}' +
        '#jj-sound-mist.jj-loop-on{will-change:transform,opacity;animation:jjMistLoop 2.3s ease-in-out infinite alternate;}@keyframes jjMistLoop{from{transform:scale(.9);opacity:.42;}to{transform:scale(1.08);opacity:.62;}}' +
        '#jj-sound-mist .jj-mist-bar{transition:height .5s ease;}' +
        '@media (prefers-reduced-motion:reduce){#jj-sound-btn.jj-loop .jj-bar,#jj-sound-mist.jj-loop-on{animation:none!important;}#jj-sound-btn.jj-loop:not(.is-muted):not(.is-quiet) .jj-bar{transform:scaleY(calc(var(--bm,1) * .6));}}';
      (document.head || document.documentElement).appendChild(st); }
    var bars = btn.querySelectorAll('.jj-bar'), mist = document.getElementById('jj-sound-mist'), mistBars = document.querySelectorAll('#jj-sound-mist .jj-mist-bar');
    var gain = [0.5, 0.78, 1, 0.78, 0.5], dur = [0.92, 1.24, 1.06, 1.38, 0.84], lag = [-0.2, -0.75, -0.4, -1.1, -0.6];
    for (var i = 0; i < bars.length; i++) { bars[i].style.height = ''; bars[i].style.setProperty('--bm', gain[i % 5]); bars[i].style.setProperty('--bd', dur[i % 5] + 's'); bars[i].style.setProperty('--bl', lag[i % 5] + 's'); }
    btn.style.boxShadow = ''; btn.style.transform = ''; btn.classList.add('jj-loop');
    var was = null, sync = function () { var st2 = btn.classList.contains('is-muted') ? 'muted' : btn.classList.contains('is-quiet') ? 'quiet' : 'playing'; if (st2 === was) return; was = st2;   /* the mist follows the state (three writes a change of state, none between) */
      if (mist) mist.classList.toggle('jj-loop-on', st2 === 'playing');
      for (var k = 0; k < mistBars.length; k++) mistBars[k].style.height = (st2 === 'playing' ? 22 + 34 * gain[k % 5] : st2 === 'quiet' ? 12 + 10 * gain[k % 5] : 10).toFixed(0) + 'px'; };
    sync(); try { new MutationObserver(sync).observe(btn, { attributes: true, attributeFilter: ['class'] }); } catch (e) { setInterval(sync, 500); }
  }
  function jjSetupSoundButton() {
    var btn = document.getElementById('jj-sound-btn'), fill, adopt = false;
    if (btn && (btn._jjWired || !btn.classList.contains('jj-early'))) return;   /* someone else's, already wired */
    if (btn) { adopt = true; fill = btn.querySelector('.jj-sound-fill'); }   /* the moon jj-loader drew at first paint: wire it where it is, no second one, no fade */
    else {
    btn = document.createElement('button');
    btn.id = 'jj-sound-btn';
    btn.setAttribute('aria-label', 'Toggle sound');
    fill = document.createElement('div');
    fill.className = 'jj-sound-fill';
    btn.appendChild(fill);
    var craters = [
      { w: 11, h: 11, l: 13, t: 15, o: 0.20 },
      { w: 7,  h: 7,  l: 41, t: 32, o: 0.14 },
      { w: 8,  h: 8,  l: 24, t: 43, o: 0.12 }
    ];
    craters.forEach(function (cr) {
      var d = document.createElement('div');
      d.className = 'jj-crater';
      d.style.cssText = 'width:' + cr.w + 'px;height:' + cr.h + 'px;left:' + cr.l + 'px;top:' + cr.t + 'px;opacity:' + cr.o + ';';
      btn.appendChild(d);
    });
    for (var i = 0; i < 5; i++) {
      var bar = document.createElement('div');
      bar.className = 'jj-bar';
      btn.appendChild(bar);
    }
    var mist = document.createElement('div');
    mist.id = 'jj-sound-mist';
    for (var k = 0; k < 5; k++) {
      var mb = document.createElement('div');
      mb.className = 'jj-mist-bar';
      mist.appendChild(mb);
    }
    document.body.appendChild(mist);
    document.body.appendChild(btn);
    }
    btn._jjWired = true; jjMoonState();   /* on from the first frame now: no fade-in (the moon never leaves between pages) */
    btn.addEventListener('mouseenter', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = (e.clientX - rect.left), y = (e.clientY - rect.top);
      var maxDist = Math.max(Math.hypot(x, y), Math.hypot(rect.width - x, y), Math.hypot(x, rect.height - y), Math.hypot(rect.width - x, rect.height - y));
      var size = maxDist * 2.4;
      fill.style.width = size + 'px'; fill.style.height = size + 'px';
      fill.style.left = (x - size / 2) + 'px'; fill.style.top = (y - size / 2) + 'px';
      if (typeof gsap !== 'undefined') {
        gsap.killTweensOf(fill);
        gsap.fromTo(fill, { scale: 0, opacity: 0.9 }, { scale: 1, opacity: 1, duration: 0.42, ease: 'power2.out' });
      } else { fill.style.transform = 'scale(1)'; fill.style.opacity = '1'; fill.style.transition = 'transform 0.42s ease, opacity 0.3s ease'; }
    });
    btn.addEventListener('mouseleave', function () {
      if (typeof gsap !== 'undefined') { gsap.killTweensOf(fill); gsap.to(fill, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.in' }); }
      else { fill.style.transform = 'scale(0)'; fill.style.opacity = '0'; }
    });
    btn.setAttribute('aria-label', 'Sound settings'); btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function (e) {
      if (btn._jjSync) { btn._jjSync = false; return; }   /* a re-dispatched click only tells the other scripts to re-read the mute */
      if (jjMixP && jjMixP.classList.contains('open')) { btn._jjHold = true; jjMixClose(); } else jjMixOpen();   /* open, the moon IS the close button; a tap opens it on touch */
    });
    btn.addEventListener('mouseenter', function () { if (!btn._jjHold) jjMixOpen(); });
    btn.addEventListener('mouseleave', function (e) { btn._jjHold = false; if (jjMixP && !(e.relatedTarget && jjMixP.contains(e.relatedTarget))) jjMixClose(); });   /* out to the page closes it; up into the pane keeps it */
    if (!btn.querySelector('.jj-mx-xm')) { var xm = document.createElement('span'); xm.className = 'jj-mx-xm'; btn.appendChild(xm); }
    jjStartAudioBars(btn);
    if (adopt && btn._jjWant) { var want = btn._jjWant; btn._jjWant = null; if (want === 'open' || btn.matches(':hover')) jjMixOpen(); }   /* a hover / press that came before the wiring */
  }
  /* Mute everything (the mixer's "Mute all"): the same state the old one-press button kept, and a synthetic click on the moon
     so the page scripts that listen to it (My Story, the homepage) re-read sessionStorage */
  function jjSetMuted(m) {
    jjUserMuted = !!m;
    if (window.jjAudio) window.jjAudio.muted = jjUserMuted;
    try { sessionStorage.setItem('jjUserMuted', jjUserMuted ? '1' : '0'); } catch (e) {}
    var b = document.getElementById('jj-sound-btn'); if (b) { jjMoonState(); b._jjSync = true; b.click(); b._jjSync = false; }
    jjApplyMute(); jjMixPaint();
  }

  /* ---- THE MIXER: three levels (voice, effects, music) kept in localStorage.
     Every Howl is sorted when it plays: its Web Audio node is re-wired through a gain for its group (voice/sfx/music -> master),
     and an HTML5 <audio> gets a volume property that quietly multiplies by its group's level. Sorting: an explicit h._jjCat,
     else the file name (nar-/narr/speech/voice = voice; the ambient and the songs = music), else effects. */
  var JJ_MIX = { voice: 1, sfx: 1, music: 1 };
  try { var jm = JSON.parse(localStorage.getItem('jjMix') || 'null'); if (jm) ['voice', 'sfx', 'music'].forEach(function (k) { if (typeof jm[k] === 'number') JJ_MIX[k] = Math.max(0, Math.min(1, jm[k])); }); } catch (e) {}
  window.jjMix = JJ_MIX;
  function jjCatOf(src, tag) {
    if (tag) return tag;
    src = String(src || '');
    if (/nar-|narr|speech|voice/i.test(src)) return 'voice';
    if (/lotro|ambient|music|song|theme|glbml|soundtrack/i.test(src)) return 'music';
    return 'sfx';
  }
  var jjMixG = null, jjMixCtx = null, jjMixMaster = null;
  function jjMixGains() {
    if (!window.Howler || !Howler.ctx || !Howler.masterGain || !Howler.usingWebAudio) return null;
    /* f-1008b: Howler throws its audio engine away and builds a new one at its first unlock when the output device does not run at 44.1 kHz (Howler.unload()).
       Group gains made before that belonged to the dead engine: every sound was unplugged from the old output and could not be plugged into them (it threw, silently)
       so the whole site was silent on a 48 kHz device. The gains now follow the engine: made again whenever the context or the master node is not the one they were made on. */
    if (jjMixG && jjMixCtx === Howler.ctx && jjMixMaster === Howler.masterGain) return jjMixG;
    jjMixG = {}; jjMixCtx = Howler.ctx; jjMixMaster = Howler.masterGain;
    ['voice', 'sfx', 'music'].forEach(function (k) { var g = Howler.ctx.createGain(); g.gain.value = JJ_MIX[k]; g.connect(Howler.masterGain); jjMixG[k] = g; });
    return jjMixG;
  }
  var mediaVol = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');
  function jjMixEl(el, cat) {                               /* an <audio>: its volume reads as set, but lands scaled by its group */
    el._jjCat = cat;
    if (el._jjMixed || !mediaVol) { if (el._jjMixed) mediaVol.set.call(el, Math.max(0, Math.min(1, el._jjBase * JJ_MIX[el._jjCat]))); return; }
    el._jjMixed = true; el._jjBase = mediaVol.get.call(el);
    Object.defineProperty(el, 'volume', { configurable: true,
      get: function () { return el._jjBase; },
      set: function (v) { el._jjBase = v; mediaVol.set.call(el, Math.max(0, Math.min(1, v * JJ_MIX[el._jjCat]))); } });
    el.volume = el._jjBase;
    (jjMixEl.all || (jjMixEl.all = [])).push(el);
  }
  function jjMixRoute(h) {
    try {
      var cat = jjCatOf(h._src && (h._src.join ? h._src[0] : h._src), h._jjCat);
      (h._sounds || []).forEach(function (sd) { var n = sd._node; if (!n) return;
        if (h._webAudio) { var G = jjMixGains(); if (!G || (n._jjCat === cat && n._jjG === G[cat])) return; try { n.disconnect(); } catch (e) {}
          try { n.connect(G[cat]); n._jjCat = cat; n._jjG = G[cat]; } catch (e) { n._jjCat = null; n._jjG = null; try { n.connect(Howler.masterGain); } catch (e2) {} } }   /* f-1008b: a sound that cannot join its group still reaches the output (never unplugged and left); and a sound routed to a dead engine's group is routed again */
        else jjMixEl(n, cat); });
    } catch (e) {}
  }
  if (window.Howl && !Howl.prototype._jjMixPlay) {
    var hp = Howl.prototype.play; Howl.prototype._jjMixPlay = true;
    Howl.prototype.play = function () { var r = hp.apply(this, arguments); jjMixRoute(this); return r; };
  }
  var ap = HTMLMediaElement.prototype.play;                 /* plain new Audio(...) elsewhere on the site (videos keep their own controls) */
  HTMLMediaElement.prototype.play = function () { if (this.tagName === 'AUDIO') jjMixEl(this, jjCatOf(this.currentSrc || this.src, this._jjTag)); return ap.apply(this, arguments); };
  function jjMixSet(k, v) {
    JJ_MIX[k] = v; try { localStorage.setItem('jjMix', JSON.stringify(JJ_MIX)); } catch (e) {}
    var G = jjMixGains(); if (G) { try { G[k].gain.setTargetAtTime(v, Howler.ctx.currentTime, 0.04); } catch (e) { G[k].gain.value = v; } }
    (jjMixEl.all || []).forEach(function (el) { if (el._jjCat === k) el.volume = el._jjBase; });
    try { window.dispatchEvent(new CustomEvent('jj:mix', { detail: { group: k, level: v } })); } catch (e) {}
    jjMoonState();
  }

  /* the panel: the moon bubbles out into a rounded glass square in the corner (it keeps its own place as the corner handle) */
  var jjMixP = null;
  function jjMixBuild() {
    if (jjMixP) return jjMixP;
    var st = document.createElement('style'); st.id = 'jj-mix-style';
    st.textContent =
      '#jj-mixer{position:fixed;right:32px;bottom:64px;width:64px;height:32px;border-radius:32px;z-index:9998;box-sizing:border-box;background:rgba(0,0,0,.4);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.5);box-shadow:0 18px 50px rgba(0,0,0,.4),0 0 40px rgba(160,190,255,.18);opacity:0;pointer-events:none;overflow:hidden;font-family:"Joes Journey Headline","Quicksand",sans-serif;color:#fff;transform-origin:100% 100%;' +
        'transition:width .62s cubic-bezier(.3,1.5,.5,1),height .62s cubic-bezier(.3,1.5,.5,1) .04s,border-radius .5s ease,opacity .12s ease,background .45s ease;}' +
      '#jj-mixer.open{width:min(300px,calc(100vw - 48px));height:370px;border-radius:28px 28px 32px 28px;opacity:1;pointer-events:auto;}' +
      /* open, the moon stays put and becomes the close: its bars fold away and an X turns in */
      '#jj-sound-btn .jj-bar{transition:height 60ms linear,background .2s ease,opacity .2s ease;}html.jj-mx-on #jj-sound-btn .jj-bar{opacity:0;}' +
      '#jj-sound-btn .jj-mx-xm{position:absolute;left:50%;top:50%;width:22px;height:22px;translate:-50% -50%;z-index:3;pointer-events:none;opacity:0;rotate:-90deg;scale:.4;color:#111;transition:opacity .2s ease,rotate .45s cubic-bezier(.3,1.5,.5,1),scale .45s cubic-bezier(.3,1.5,.5,1);}' +
      '#jj-sound-btn .jj-mx-xm::before,#jj-sound-btn .jj-mx-xm::after{content:"";position:absolute;left:0;right:0;top:50%;height:3px;margin-top:-1.5px;border-radius:3px;background:currentColor;rotate:45deg;}#jj-sound-btn .jj-mx-xm::after{rotate:-45deg;}' +
      '#jj-sound-btn.is-muted .jj-mx-xm{color:#fff;}html.jj-mx-on #jj-sound-btn .jj-mx-xm{opacity:1;rotate:0deg;scale:1;}html.jj-mx-on #jj-sound-mist{opacity:0!important;}' +
      '#jj-mixer.closing{transition:width .38s cubic-bezier(.6,0,.4,1),height .34s cubic-bezier(.6,0,.4,1),border-radius .38s ease,opacity .22s ease .16s;}' +
      '#jj-mixer .mx-in{position:absolute;left:0;top:0;width:min(300px,calc(100vw - 48px));height:370px;box-sizing:border-box;padding:22px 24px 0;}' +
      '#jj-mixer h4{margin:0 0 14px;font-size:20px;font-weight:700;letter-spacing:.02em;line-height:1;}' +
      '#jj-mixer .mx-row{margin-bottom:14px;opacity:0;transform:translateY(10px);transition:opacity .3s ease,transform .45s cubic-bezier(.3,1.4,.5,1);}' +
      '#jj-mixer.open .mx-row,#jj-mixer.open h4{opacity:1;transform:none;}' +
      '#jj-mixer h4{opacity:0;transform:translateY(10px);transition:opacity .3s ease,transform .45s cubic-bezier(.3,1.4,.5,1);}' +
      '#jj-mixer.open h4{transition-delay:.16s;}#jj-mixer.open .mx-row:nth-of-type(1){transition-delay:.22s;}#jj-mixer.open .mx-row:nth-of-type(2){transition-delay:.28s;}#jj-mixer.open .mx-row:nth-of-type(3){transition-delay:.34s;}' +
      '#jj-mixer .mx-lab{display:flex;justify-content:space-between;align-items:baseline;font-size:15px;margin-bottom:8px;}#jj-mixer .mx-lab b{font-weight:700;}#jj-mixer .mx-lab span{font-size:12px;opacity:.7;letter-spacing:.06em;font-variant-numeric:tabular-nums;}' +
      '#jj-mixer .mx-line{display:flex;align-items:center;gap:10px;}' +
      '#jj-mixer .mx-mu{flex:none;width:28px;height:28px;padding:0;border-radius:50%;border:1px solid rgba(255,255,255,.5);background:rgba(0,0,0,.4);color:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s ease,border-color .2s ease,scale .25s cubic-bezier(.3,1.6,.5,1);}' +
      '#jj-mixer .mx-mu svg{width:15px;height:15px;}#jj-mixer .mx-mu .sl{display:none;}#jj-mixer .mx-mu.off .sl{display:inline;}#jj-mixer .mx-mu.off .w{display:none;}' +
      '#jj-mixer .mx-mu:hover{background:rgba(255,255,255,.14);scale:1.08;}#jj-mixer .mx-mu:active{border-color:#ff5fc8;box-shadow:0 0 0 3px rgba(255,95,200,.35);scale:.94;}#jj-mixer .mx-mu.off{background:#ff5fc8;border-color:#ff9de2;color:#fff;}' +
      '#jj-mixer input[type=range]{-webkit-appearance:none;appearance:none;display:block;flex:1;min-width:0;height:22px;margin:0;background:transparent;cursor:pointer;--v:100%;}' +
      '#jj-mixer input[type=range]::-webkit-slider-runnable-track{height:6px;border-radius:6px;background:linear-gradient(90deg,#c7e7ff,#ff9de2) 0 0/var(--v) 100% no-repeat,rgba(255,255,255,.18);box-shadow:0 0 12px rgba(199,231,255,.25);}' +
      '#jj-mixer input[type=range]::-moz-range-track{height:6px;border-radius:6px;background:linear-gradient(90deg,#c7e7ff,#ff9de2) 0 0/var(--v) 100% no-repeat,rgba(255,255,255,.18);}' +
      '#jj-mixer input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;margin-top:-7px;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fff,#e7f1fb 55%,#cfe0f2);box-shadow:0 0 14px rgba(199,231,255,.8);transition:transform .2s cubic-bezier(.3,1.6,.5,1),box-shadow .2s ease;}' +
      '#jj-mixer input[type=range]::-moz-range-thumb{width:20px;height:20px;border:none;border-radius:50%;background:radial-gradient(circle at 34% 30%,#fff,#e7f1fb 55%,#cfe0f2);box-shadow:0 0 14px rgba(199,231,255,.8);}' +
      '#jj-mixer input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.15);}#jj-mixer input[type=range]:active::-webkit-slider-thumb{transform:scale(1.25);box-shadow:0 0 0 5px rgba(255,95,200,.35),0 0 18px #ff5fc8;}' +
      '#jj-mixer input[type=range]:focus-visible{outline:none;}#jj-mixer input[type=range]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 4px rgba(255,255,255,.45);}' +
      /* MUTE ALL (Joe, 2026-09-30): one press silences the three groups, the next brings back the levels they had. The panel's own glass
         pill, pink while it is holding everything quiet (like the per-group mutes), dressed per theme like them. */
      '#jj-mixer .mx-all{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;height:40px;margin:4px 0 0;padding:0 16px;box-sizing:border-box;border-radius:999px;border:1px solid rgba(255,255,255,.5);background:rgba(0,0,0,.4);color:inherit;font-family:inherit;font-size:15px;font-weight:700;line-height:1;letter-spacing:.02em;cursor:pointer;opacity:0;transform:translateY(10px);transition:opacity .3s ease,transform .45s cubic-bezier(.3,1.4,.5,1),background .2s ease,border-color .2s ease,scale .25s cubic-bezier(.3,1.6,.5,1);}' +
      '#jj-mixer.open .mx-all{opacity:1;transform:none;transition-delay:.4s,.4s,0s,0s,0s;}#jj-mixer .mx-all svg{width:17px;height:17px;flex:none;}#jj-mixer .mx-all .sl{display:none;}#jj-mixer .mx-all.off .sl{display:inline;}#jj-mixer .mx-all.off .w{display:none;}' +
      '#jj-mixer .mx-all:hover{background:rgba(255,255,255,.14);scale:1.03;}#jj-mixer .mx-all:active{border-color:#ff5fc8;box-shadow:0 0 0 3px rgba(255,95,200,.35);scale:.97;}#jj-mixer .mx-all.off{background:#ff5fc8;border-color:#ff9de2;color:#fff;}#jj-mixer .mx-all:focus-visible{outline:2px solid rgba(255,255,255,.6);outline-offset:2px;}' +
      'html[data-jj-theme="medieval"] #jj-mixer .mx-all:not(.off){border-color:#3a2a12;background:rgba(58,42,18,.08);color:#3a2a12;}html[data-jj-theme="alien"] #jj-mixer .mx-all{border-color:#4fe3ff;box-shadow:0 0 8px rgba(79,227,255,.35);}' +
      'html[data-jj-theme="retro"] #jj-mixer .mx-all{border-radius:0;border:2px solid #FFD400;box-shadow:3px 3px 0 rgba(0,0,0,.35);}html[data-jj-theme="retro"] #jj-mixer .mx-all:not(.off){background:#0b1e5a;}html[data-jj-theme="retro"] body #jj-mixer.shown .mx-in{height:346px;}' +
      'html[data-jj-theme="mixed"] #jj-mixer .mx-all{box-shadow:0 0 0 3px #6d6d6d;outline:2px dashed #a8a8a8;outline-offset:2px;}' +
      /* the bubbles that pop off the moon as it opens */
      '.jj-mx-bub{position:fixed;z-index:9999;width:var(--s);height:var(--s);border-radius:50%;pointer-events:none;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.95),rgba(199,231,255,.55) 45%,rgba(199,231,255,0) 72%);animation:jjMxBub var(--d) cubic-bezier(.2,.8,.3,1) forwards;}' +
      '@keyframes jjMxBub{0%{transform:translate(0,0) scale(.3);opacity:0;}18%{opacity:1;}100%{transform:translate(var(--x),var(--y)) scale(1);opacity:0;}}' +
            /* closed, the moon says whether anything is audible: white while sound plays, black when all is quiet */
      /* (closed, the moon says what the mixer says: dark with dots only when muted; sound on but nothing playing = the light moon, bars at rest: see the early style) */
      '';
    document.head.appendChild(st);
    var p = document.createElement('div'); p.id = 'jj-mixer'; p.setAttribute('role', 'dialog'); p.setAttribute('aria-label', 'Sound');
    p.innerHTML = '<div class="mx-in"><h4>Sound</h4>' +
      [['voice', 'Voice'], ['sfx', 'Sound effects'], ['music', 'Music']].map(function (r) {
        return '<label class="mx-row"><span class="mx-lab"><b>' + r[1] + '</b><span data-v="' + r[0] + '"></span></span><span class="mx-line"><button type="button" class="mx-mu" data-m="' + r[0] + '" data-cursor="hover" aria-label="Mute ' + r[1].toLowerCase() + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path class="w" d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path class="sl" d="M16 9l6 6M22 9l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><input type="range" min="0" max="100" step="1" data-k="' + r[0] + '" aria-label="' + r[1] + ' volume"></span></label>'; }).join('') +
      '<button type="button" class="mx-all" data-cursor="hover" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path class="w" d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path class="sl" d="M16 9.5l5 5M21 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span>Mute all</span></button>' +
      '</div>';
    document.body.appendChild(p);
    var mixPrev = jjMixPrev;
    p.querySelector('.mx-all').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); var K = ['voice', 'sfx', 'music'], prev = null;
      try { prev = JSON.parse(localStorage.getItem('jjMixAllPrev') || 'null'); } catch (x) {}
      if (K.some(function (k) { return JJ_MIX[k] > 0; })) { var keep = {}; K.forEach(function (k) { keep[k] = JJ_MIX[k]; if (JJ_MIX[k] > 0) mixPrev[k] = JJ_MIX[k]; jjMixSet(k, 0); });   /* Mute all: remember exactly what each was */
        try { localStorage.setItem('jjMixAllPrev', JSON.stringify(keep)); } catch (x) {} }
      else { if (jjUserMuted) jjSetMuted(false); K.forEach(function (k) { jjMixSet(k, prev && prev[k] != null && K.some(function (q) { return prev[q] > 0; }) ? prev[k] : (mixPrev[k] || 1)); });   /* Unmute all: those levels back (a group that was already off stays off) */
        try { localStorage.removeItem('jjMixAllPrev'); } catch (x) {} }
      jjMixPaint(); });                               /* each group's own mute: remembers the level to come back to */
    p.querySelectorAll('.mx-mu').forEach(function (mb) { mb.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); var k = mb.getAttribute('data-m');
      if (JJ_MIX[k] > 0) { mixPrev[k] = JJ_MIX[k]; jjMixSet(k, 0); } else { if (jjUserMuted) jjSetMuted(false); jjMixSet(k, mixPrev[k] || 1); } jjMixPaint(); }); });
    p.querySelectorAll('input[type=range]').forEach(function (inp) {
      inp.addEventListener('input', function () { var k = inp.getAttribute('data-k'), v = inp.value / 100; if (jjUserMuted && v > 0) jjSetMuted(false); jjMixSet(k, v); jjMixPaint(); });
    });
    var leaveT = 0;                                       /* hover away and it folds back into the moon */
    p.addEventListener('mouseleave', function (e) { clearTimeout(leaveT); if (!(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('#jj-sound-btn'))) jjMixClose(); });   /* hover out closes straight away (down onto the moon keeps it) */
    p.addEventListener('mouseenter', function () { clearTimeout(leaveT); });
    document.addEventListener('pointerdown', function (e) { if (p.classList.contains('open') && !p.contains(e.target) && !(e.target.closest && e.target.closest('#jj-sound-btn'))) jjMixClose(); }, true);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && p.classList.contains('open')) jjMixClose(); });
    jjMixP = p; jjMixPaint(); return p;
  }
  /* the old all-or-nothing mute (the "continue without sound" choice) is shown the only way the mixer knows: all three groups at 0,
     each remembering its level, so the sliders and the moon never disagree with what you hear */
  var jjMixPrev = {};
  function jjMixAbsorbMute() {
    var m = jjUserMuted || (window.jjAudio && window.jjAudio.muted); try { if (sessionStorage.getItem('jjUserMuted') === '1') m = true; } catch (e) {}
    if (!m) return;
    ['voice', 'sfx', 'music'].forEach(function (k) { if (JJ_MIX[k] > 0) { jjMixPrev[k] = JJ_MIX[k]; jjMixSet(k, 0); } });
    jjSetMuted(false);
  }
  function jjMixPaint() {
    if (!jjMixP) return;
    jjMixP.querySelectorAll('input[type=range]').forEach(function (inp) { var k = inp.getAttribute('data-k'), v = Math.round(JJ_MIX[k] * 100);
      if (document.activeElement !== inp) inp.value = v; inp.style.setProperty('--v', v + '%'); jjMixP.querySelector('[data-v="' + k + '"]').textContent = v + '%'; var mb = jjMixP.querySelector('.mx-mu[data-m="' + k + '"]'); if (mb) { mb.classList.toggle('off', v === 0); mb.setAttribute('aria-pressed', v === 0 ? 'true' : 'false'); } });
    var all = jjMixP.querySelector('.mx-all'); if (all) { var silent = ['voice', 'sfx', 'music'].every(function (k) { return !(JJ_MIX[k] > 0); }); all.classList.toggle('off', silent); all.setAttribute('aria-pressed', silent ? 'true' : 'false'); all.querySelector('span').textContent = silent ? 'Unmute all' : 'Mute all'; }
  }
  function jjMixBubbles() {
    var b = document.getElementById('jj-sound-btn'); if (!b) return; var r = b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for (var i = 0; i < 9; i++) { var d = document.createElement('i'); d.className = 'jj-mx-bub'; var a = Math.PI * (1 + 0.5 * (i / 8)) + (Math.random() - .5) * .3, dist = 90 + Math.random() * 170, sz = 6 + Math.random() * 16;
      d.style.cssText = 'left:' + (cx - sz / 2) + 'px;top:' + (cy - sz / 2) + 'px;--s:' + sz.toFixed(0) + 'px;--x:' + (Math.cos(a) * dist).toFixed(0) + 'px;--y:' + (Math.sin(a) * dist).toFixed(0) + 'px;--d:' + (600 + Math.random() * 500).toFixed(0) + 'ms;animation-delay:' + (i * 25) + 'ms';
      document.body.appendChild(d); (function (el) { setTimeout(function () { el.remove(); }, 1400); })(d); }
  }
  function jjMixOpen() { var p = jjMixBuild(), b = document.getElementById('jj-sound-btn'); jjMixPaint(); p.classList.remove('closing');
    if (p.classList.contains('open')) return;
    if (b) { b.setAttribute('aria-expanded', 'true'); document.documentElement.classList.add('jj-mx-on'); } clearTimeout(p._shT); p.classList.add('shown');
    jjMixBubbles(); requestAnimationFrame(function () { p.classList.add('open'); }); }
  function jjMixClose() { if (!jjMixP) return; var b = document.getElementById('jj-sound-btn'); if (!jjMixP.classList.contains('open')) return; jjMixP.classList.add('closing'); jjMixP.classList.remove('open'); if (b) b.setAttribute('aria-expanded', 'false'); setTimeout(function () { if (!jjMixP.classList.contains('open')) document.documentElement.classList.remove('jj-mx-on'); }, 300); clearTimeout(jjMixP._shT); jjMixP._shT = setTimeout(function () { if (!jjMixP.classList.contains('open')) jjMixP.classList.remove('shown', 'closing'); }, 460); }   /* it keeps its theme until it has faded, so it never goes pale on the way back */
  function jjMixToggle() { if (jjMixP && jjMixP.classList.contains('open')) jjMixClose(); else jjMixOpen(); }
  window.jjMixOpen = jjMixOpen;
  window.jjSoundOff = function () { jjSetMuted(true); };   /* f-1025a: one-press mute, for Storytime's transport (?ui=2): the mixer's own 'Mute all' state */
  /* f-1008b: "sound on", for a page script that asks the visitor (Storytime's prompt). It pressed the moon, which toggled mute before the mixer existed; the moon now
     opens the mixer, so "Yes" opened a panel and left every group at 0. This is the mixer's own "Unmute all": the levels the visitor last had, or full. */
  window.jjSoundOn = function () { var K = ['voice', 'sfx', 'music'], prev = null; if (jjUserMuted) jjSetMuted(false);
    if (!K.some(function (k) { return JJ_MIX[k] > 0; })) { try { prev = JSON.parse(localStorage.getItem('jjMixAllPrev') || 'null'); } catch (x) {}
      K.forEach(function (k) { jjMixSet(k, prev && prev[k] != null && K.some(function (q) { return prev[q] > 0; }) ? prev[k] : (jjMixPrev[k] || 1)); }); }
    try { jjMixPaint(); jjMoonState(); } catch (e) {} };

  jjSetupSoundButton();
  jjApplyMute();
  jjMixBuild();                                             /* the panel (and its styles) wait, folded, in the corner */
  jjMixAbsorbMute();
  function jjAudible() {                                    /* is anything actually reaching the speakers? */
    if (jjUserMuted) return false;
    var hs = (window.Howler && Howler._howls) || [];
    for (var i = 0; i < hs.length; i++) { var h = hs[i]; try { if (h.playing() && h.volume() > 0.01 && JJ_MIX[jjCatOf(h._src && (h._src.join ? h._src[0] : h._src), h._jjCat)] > 0) return true; } catch (e) {} }
    var els = jjMixEl.all || [];
    for (var j = 0; j < els.length; j++) { var el = els[j]; if (!el.paused && !el.muted && el._jjBase > 0.01 && JJ_MIX[el._jjCat] > 0) return true; }
    return false;
  }
  /* THE MOON'S STATE, one place (Joe, 2026-10-02): MUTED = the visitor muted (jjUserMuted) or every mixer channel is at 0, the same test the
     mixer's "Unmute all" label uses, so the two can never disagree; QUIET = not muted and nothing audible this moment; otherwise it plays. */
  function jjMuted() { return !!jjUserMuted || (!!JJ_MIX && !(JJ_MIX.voice > 0 || JJ_MIX.sfx > 0 || JJ_MIX.music > 0)); }
  function jjMoonState() { var b = document.getElementById('jj-sound-btn'); if (!b) return; var m = jjMuted(); var q = !m && !jjAudible(); b.classList.toggle('is-muted', m); b.classList.toggle('is-quiet', q); b._jjQuiet = q; }
  setInterval(function () { jjMixAbsorbMute(); jjMoonState(); }, 400);
  /* NARRATION: window.jjSay('my-way') plays nar-my-way.mp3 once per page. Silent when muted, never on top of another line,
     and the ambient ducks under the voice. opt.delay waits first; opt.wait queues it behind a line already playing; opt.again lets a line repeat. */
  (function () {
    var said = {}, cur = null, NB = window.JJ_SCORE_BASE || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/';
    var NAR_GAIN = 0.45;   /* Jim’s narration sits at 45% of its old level (Joe, 2026-09-30: 60%, then "still loud"); the Voice slider still scales it */
    window.jjSay = function (name, opt) { opt = opt || {};
      if (opt.delay) { var d = opt.delay; opt.delay = 0; setTimeout(function () { window.jjSay(name, opt); }, d); return; }
      var A = window.jjAudio || {}; if (A.muted || jjUserMuted || JJ_MIX.voice <= 0 || (said[name] && !opt.again) || typeof Howl === 'undefined') return;
      if (cur) { if (opt.wait) { opt.tries = (opt.tries || 0) + 1; if (opt.tries < 40) setTimeout(function () { window.jjSay(name, opt); }, 300); } return; }   /* opt.wait: queue behind the line that is playing */
      said[name] = 1;
      var amb = A.ambient, back = A.ambientTarget || 0.6, h = new Howl({ src: [NB + 'nar-' + name + '.mp3'], volume: (A.volume == null ? 1 : A.volume) * NAR_GAIN });
      function done() { clearTimeout(h._safe); if (cur === h) cur = null; try { if (amb && amb.playing() && !A.muted) amb.fade(amb.volume(), back, 900); } catch (e) {} var i = (A.sounds || []).indexOf(h); if (i > -1) A.sounds.splice(i, 1); setTimeout(function () { try { h.unload(); } catch (e) {} }, 200); }
      h.once('play', function () { try { if (amb && amb.playing()) amb.fade(amb.volume(), back * 0.35, 400); } catch (e) {} });
      h.once('end', done); h.once('loaderror', done); h.once('playerror', done);
      cur = h; h._safe = setTimeout(done, 20000); if (A.sounds) A.sounds.push(h); h.play(); };   /* cur is busy from the request, not from the first sound, so two lines asked for together never overlap */
  })();
  function setupCTA(el) {
    if (el.querySelector('.jj-cta-fill')) return;
    var fill = document.createElement('div'); fill.className = 'jj-cta-fill';
    el.insertBefore(fill, el.firstChild);
    var textEl = el.querySelector('span, div, p, a') || el;
    el.addEventListener('click', function (e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left, y = e.clientY - rect.top;
      var maxDist = Math.max(Math.hypot(x, y), Math.hypot(rect.width-x, y), Math.hypot(x, rect.height-y), Math.hypot(rect.width-x, rect.height-y));
      var size = maxDist * 2.4;
      var circle = document.createElement('div'); circle.className = 'jj-cta-pink';
      circle.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+(x-size/2)+'px;top:'+(y-size/2)+'px;';
      el.appendChild(circle);
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(circle, { scale: 0, opacity: 0.9 }, { scale: 1, opacity: 1, duration: 0.42, ease: 'power2.out',
          onComplete: function () {
            textEl.classList.add('jj-alien-text');
            gsap.to(circle, { scale: 0, opacity: 0, duration: 0.35, delay: 0.55, ease: 'power2.in',
              onComplete: function () { textEl.classList.remove('jj-alien-text'); circle.parentNode && circle.parentNode.removeChild(circle); }
            });
          }
        });
      } else { setTimeout(function () { circle.remove(); }, 700); }
    });
  }
  document.querySelectorAll('[data-jj="cta"]').forEach(setupCTA);
  document.querySelectorAll('.enter-link_wrapper').forEach(function (el) { el.setAttribute('data-jj', 'cta'); setupCTA(el); });

  function setupBtn(el) {
    if (el.querySelector('.jj-btn-fill')) return;
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    var f = document.createElement('div'); f.className = 'jj-btn-fill';
    el.insertBefore(f, el.firstChild);
    el.addEventListener('pointerdown', function (e) {
      if (/^(medieval|retro)$/.test(document.documentElement.getAttribute('data-jj-theme') || '')) return;   // rounded pills only
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left, y = e.clientY - rect.top;
      var maxDist = Math.max(Math.hypot(x, y), Math.hypot(rect.width - x, y), Math.hypot(x, rect.height - y), Math.hypot(rect.width - x, rect.height - y));
      var size = maxDist * 2.4;
      var c = document.createElement('div'); c.className = 'jj-btn-pink';
      c.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (x - size / 2) + 'px;top:' + (y - size / 2) + 'px;';
      el.appendChild(c);
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(c, { scale: 0, opacity: 0.95 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out',
          onComplete: function () { gsap.to(c, { opacity: 0, duration: 0.4, delay: 0.2, onComplete: function () { c.parentNode && c.parentNode.removeChild(c); } }); }
        });
      } else { setTimeout(function () { c.parentNode && c.parentNode.removeChild(c); }, 800); }
    });
  }
  document.querySelectorAll('.next-section-button').forEach(function (el) { el.setAttribute('data-jj', 'btn'); });
  document.querySelectorAll('[data-jj="btn"]').forEach(setupBtn);
})();

/* Site-wide: make the footer + menu "Contact" and "Credits" links work on every page.
   Contact  -> /contact
   Credits  -> /contact?credits=1   (the contact page auto-plays the credits sequence on arrival)
   On /contact itself, contact.js does the richer wiring (launch credits in place), so we stay out of its way there. */
(function () {
  function onContactPage() { return /(^|\/)contact\/?$/.test(location.pathname); }
  function labelOf(el) { return (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase(); }
  function isCredits(t) { return /\bcredits\b/.test(t); }   // "Credits", "View Credits", etc.

  function wireMenuLinks() {
    if (onContactPage()) return;
    try {
      var links = document.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        var a = links[i];
        if (a._jjMenuWired) continue;
        var t = labelOf(a);
        if (isCredits(t)) {
          a._jjMenuWired = 1;
          a.setAttribute('href', '/contact?credits=1');
        } else if (t === 'contact') {
          var h = a.getAttribute('href');
          if (!h || h === '#' || h === '') { a._jjMenuWired = 1; a.setAttribute('href', '/contact'); }
        } else if (t === 'work') {
          a._jjMenuWired = 1; a.setAttribute('href', '/?choose=work');   // Work opens the Story Time / Work chooser with Work picked — the picker, in place (2026-09-12)
        }
      }
    } catch (e) {}
  }

  // Bulletproof: whatever the Credits control's tag or href, a plain left-click forces the param through
  // (so the contact page sees ?credits=1 and auto-plays the sequence). Cmd/middle-click still uses the href above.
  document.addEventListener('click', function (e) {
    if (onContactPage()) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var el = e.target && e.target.closest ? e.target.closest('a, button, [role="button"], .w-inline-block, .w-nav-link') : null;
    if (el && el.closest('#jj-ach, #jj-sc-hud, .jj-tmenu, #jj-first, #jj-co')) return;   // the score UI mentions "Credits Complete" — that is not the Credits link
    if (el && isCredits(labelOf(el))) { e.preventDefault(); location.href = '/contact?credits=1'; }
  }, true);

  function run() { wireMenuLinks(); setTimeout(wireMenuLinks, 1200); setTimeout(wireMenuLinks, 3000); setTimeout(wireMenuLinks, 6000); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();


/* ===== Back: the project picker and every case study get a way back (picker → home, case study → picker).
   The classic glass pill — 50% white border, black .4 + blur, wipe hover, pink press — under the logo. ===== */
(function () {
  var path = location.pathname.replace(/\/+$/, '');
  if (!/^\/case-studies(\/|$)/.test(path)) return;
  var toPicker = path !== '/case-studies';
  var st = document.createElement('style');
  st.textContent = '#jj-back{position:fixed;left:32px;top:112px;z-index:9000;display:inline-flex;align-items:center;gap:8px;padding:11px 18px 11px 14px;border-radius:999px;' +
      'border:1px solid rgba(255,255,255,.5);background:rgba(0,0,0,.4);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;text-decoration:none;' +
      'font-size:11px;letter-spacing:.14em;text-transform:uppercase;overflow:hidden;isolation:isolate;opacity:0;transform:translateY(-6px);transition:opacity .6s ease .9s,transform .6s ease .9s;}' +
    '#jj-back.in{opacity:1;transform:none;}' +
    '#jj-back::before{content:"";position:absolute;inset:0;background:rgba(255,255,255,.5);transform:translateX(-101%);transition:transform .35s cubic-bezier(.2,.7,.3,1);z-index:-1;}' +
    '#jj-back:hover::before{transform:none;}#jj-back:active{background:#FF00F5;border-color:#FF00F5;}' +
    '#jj-back svg{width:14px;height:14px;display:block;}' +
    'body.jj-modal-open #jj-back,body.jj-menu-open #jj-back{opacity:0;pointer-events:none;transition:opacity .2s ease;}body.jj-menu-open #jj-ach,body.jj-menu-open #jj-ach *{pointer-events:auto!important}';
  document.head.appendChild(st);
  var a = document.createElement('a'); a.id = 'jj-back'; a.href = toPicker ? '/?choose=work' : '/';   // back from a case study → the Work chooser on the homepage (the picker page is retired)
  a.setAttribute('data-cursor', 'hover'); a.setAttribute('data-jj', 'btn');
  a.innerHTML = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3 5 8l5 5"/></svg><span>' + (toPicker ? 'All projects' : 'Back') + '</span>';
  function mount() { if (document.body) { document.body.appendChild(a); setTimeout(function () { a.classList.add('in'); }, 400); } else setTimeout(mount, 50); }
  mount();
})();

/* ===== Super menu: Storytime link + interactive overhaul =====
   Site-wide. Takes over the open-menu behavior injected by the Webflow embed:
   the original links are clone-replaced (strips the embed's listeners), a
   Storytime link is added, each link gets its own preview image (repo art via
   raw.githack), and the package gains: hieroglyph scramble on hover, magnetic
   pull, staggered entrance + scramble sweep when the menu opens, and a peeking
   alien. The Menu/Close button hover embed is left untouched. */
(function () {
  var GH = window.JJ_SCORE_BASE || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/';   // JJ_SCORE_BASE: the local preview serves the staged art
  var IMGS = {                                     // the user's menu art (jj-menu-*.png, keyed to menu-*.webp)
    'home': GH + 'menu-home.webp',
    'work': GH + 'menu-work.webp',
    'storytime': GH + 'menu-story.webp',
    'part two': GH + 'menu-part2.webp',
    'contact': GH + 'menu-contact.webp',
    'credits': GH + 'menu-credits.webp'
  };
  var GLYPHS = 'abcdefghijklmnopqrstuvwxyz<>-_\\/[]{}=+*^?#'.split('');

  function init() {
    var wrap = document.querySelector('.menu-wrap');
    var list = document.querySelector('.flex-down.left') || document.querySelector('.flex-down');
    if (!wrap || !list || typeof gsap === 'undefined') return;
    if (list._jjSuper) return;
    list._jjSuper = true;

    // Storytime link (after Work) + real hrefs on the dead ones
    var orig = Array.prototype.slice.call(list.querySelectorAll('.menu-open-link'));
    if (!orig.some(function (a) { return /storytime/i.test(a.textContent); })) {
      var work = null;
      orig.forEach(function (a) { if (/work/i.test(a.textContent)) work = a; });
      var st = document.createElement('a');
      st.href = '/storytime';
      st.className = 'menu-open-link w-inline-block';
      st.innerHTML = '<div>Storytime</div>';
      if (work && work.nextSibling) list.insertBefore(st, work.nextSibling);
      else list.appendChild(st);
    }
    /* Part Two of the tale: always listed, disabled with a lock until the 'tale2' achievement (the tale, then the quiz); a locked click opens that achievement.
       The super menu below clones every link, so nothing here holds a reference — the lock is re-found by class and the click is delegated. */
    if (!list.querySelector('.jj-tale2')) {
      var p2 = document.createElement('a'); p2.href = '/storytime?part=2'; p2.className = 'menu-open-link w-inline-block jj-tale2 locked'; p2.innerHTML = '<div><span class="jjmm-new">New!</span>Part Two</div>';
      var stl = Array.prototype.slice.call(list.querySelectorAll('.menu-open-link')).filter(function (a) { return /storytime/i.test(a.textContent); })[0];
      if (stl && stl.nextSibling) list.insertBefore(p2, stl.nextSibling); else list.appendChild(p2);
      var lockSt = document.createElement('style'); lockSt.textContent = '.menu-wrap .jj-tale2{position:relative;}.menu-wrap .jj-tale2.locked{opacity:.45;cursor:not-allowed;}.menu-wrap .jj-tale2.locked *{cursor:not-allowed;}.menu-wrap .jj-tale2 .jjmm-new{display:none;font-family:inherit;font-size:14px;line-height:1;font-weight:700;letter-spacing:.12em;text-transform:uppercase;vertical-align:middle;margin-right:14px;padding:7px 12px 6px;border-radius:999px;background:var(--jj-pill,#FF00F5);border:0;color:var(--jj-pill-ink,#fff);box-shadow:0 0 18px var(--jj-pill-glow,rgba(255,0,245,.45));}html[data-jj-theme="medieval"] .menu-wrap,html[data-jj-theme="mixed"] .menu-wrap{--jj-pill:#FFC531;--jj-pill-ink:#3a2a12;--jj-pill-glow:rgba(255,197,49,.45);}html[data-jj-theme="retro"] .menu-wrap{--jj-pill:#FFD400;--jj-pill-ink:#0b1e5a;--jj-pill-glow:rgba(255,212,0,.45);}html[data-jj-theme="alien"] .menu-wrap{--jj-pill:#4FE3FF;--jj-pill-ink:#08111f;--jj-pill-glow:rgba(79,227,255,.45);}.menu-wrap .jj-tale2.fresh .jjmm-new{display:inline-block;}.menu-wrap .jj-tale2.locked:hover{color:inherit!important;text-shadow:none!important;}' +
        '.menu-wrap .jj-tale2.locked>div{position:relative;display:inline-block!important;}.menu-wrap .jj-tale2.locked>div::after{content:"";position:absolute;left:100%;top:50%;transform:translateY(-50%);margin-left:.4em;width:.55em;height:.55em;background:url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272.4%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%274%27 y=%2710.5%27 width=%2716%27 height=%2711%27 rx=%272.5%27/%3E%3Cpath d=%27M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3%27/%3E%3C/svg%3E") center/contain no-repeat;}';
      document.head.appendChild(lockSt);
    }
    /* PART TWO, TWO WAYS IN (Joe, 2026-09-24): take the History Exam, or unlock it with a star. One card, used by the menu and the doors. */
    window.jjTale2Offer = function () {
      var old = document.getElementById('jj-t2offer'); if (old) old.remove();
      if (!document.getElementById('jj-t2offer-st')) { var cs = document.createElement('style'); cs.id = 'jj-t2offer-st';
        cs.textContent = '#jj-t2offer{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;background:rgba(2,4,12,.62);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;transition:opacity .35s ease;font-family:"Joes Journey Headline","Quicksand",sans-serif;color:#fff;}#jj-t2offer.on{opacity:1;}' +
          '#jj-t2offer .c{width:min(92vw,480px);padding:30px 30px 26px;border-radius:26px;border:1.5px solid rgba(255,255,255,.5);background:rgba(0,0,0,.4);-webkit-backdrop-filter:blur(26px);backdrop-filter:blur(26px);box-shadow:0 0 60px rgba(0,0,0,.5);text-align:center;transform:translateY(12px) scale(.97);transition:transform .45s cubic-bezier(.3,1.4,.5,1);}#jj-t2offer.on .c{transform:none;}' +
          '#jj-t2offer .k{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#ffc531;font-weight:800;}#jj-t2offer h3{margin:10px 0 8px;font-size:clamp(22px,2vw,30px);line-height:1.15;}#jj-t2offer p{margin:0 0 20px;opacity:.8;font-size:15px;line-height:1.4;}' +
          '#jj-t2offer .r{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}#jj-t2offer button{padding:.8em 1.5em;border-radius:999px;font:inherit;font-weight:700;font-size:15px;cursor:pointer;border:1.5px solid rgba(255,255,255,.85);background:#000;color:#fff;transition:scale .2s ease;}#jj-t2offer button:hover{scale:1.05;}#jj-t2offer button.p{border-color:transparent;background:linear-gradient(90deg,#ff00f5,#8a3cff);box-shadow:0 8px 30px rgba(255,0,245,.4);}' +
          '#jj-t2offer .x{position:absolute;top:18px;right:18px;width:34px;height:34px;padding:0;border-radius:50%;font-size:18px;line-height:1;}';
        document.head.appendChild(cs); }
      var S = window.jjScore, stars = S && S.stars ? S.stars() : 0;
      var o = document.createElement('div'); o.id = 'jj-t2offer'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Unlock Part Two');
      function card(html) { o.innerHTML = '<div class="c">' + html + '</div>'; }
      function close() { o.classList.remove('on'); setTimeout(function () { o.remove(); }, 380); }
      var talesDone = !!(S && S.has && S.has('storytime'));
      function choose() {
        if (!talesDone) { card('<div class="k">Locked</div><h3>Part Two of the tale</h3><p>Part Two carries on where the first tale ends, so watch The Tale of Trogdor &amp; Joe the Righteous first. Then it is the History Exam or a star.</p><div class="r"><button type="button" class="p" data-a="tale">Watch Storytime</button><button type="button" data-a="close">Maybe later</button></div>'); return; }
        card('<div class="k">Locked</div><h3>Part Two of the tale</h3><p>Prove you paid attention in the History Exam, or skip straight in with a star.</p><div class="r"><button type="button" class="p" data-a="exam">Take the History Exam</button><button type="button" data-a="star">Unlock with a \u2b50</button></div><div class="r" style="margin-top:12px"><button type="button" data-a="close" style="border-color:rgba(255,255,255,.3);font-weight:400">Maybe later</button></div>'); }
      function confirmStar() {
        if (stars < 1) { card('<div class="k">Not quite</div><h3>You need a star</h3><p>You have no stars to spend yet. Stars come from the bigger discoveries around the site.</p><div class="r"><button type="button" class="p" data-a="ach">See Achievements</button><button type="button" data-a="back">Back</button></div>'); return; }
        card('<div class="k">Are you sure?</div><h3>Spend 1 \u2b50 on Part Two?</h3><p>You have ' + stars + ' star' + (stars === 1 ? '' : 's') + '. It unlocks for good.</p><div class="r"><button type="button" class="p" data-a="buy">Unlock for 1 \u2b50</button><button type="button" data-a="back">Back</button></div>'); }
      function unlocked() { card('<div class="k">Unlocked</div><h3>Part Two is yours</h3><p>The tale continues whenever you are ready.</p><div class="r"><button type="button" class="p" data-a="play">Play Part Two</button><button type="button" data-a="close">Later</button></div>'); }
      o.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) { if (e.target === o) close(); return; } var a = b.getAttribute('data-a');
        if (a === 'close') close(); else if (a === 'back') choose(); else if (a === 'star') confirmStar();
        else if (a === 'ach') { close(); if (S && S.open) S.open(); }
        else if (a === 'exam') { close(); if (document.getElementById('jjms-quiz') && !(window.jjMyStory && window.jjMyStory.dormant)) window.dispatchEvent(new Event('jj:exam')); else location.href = '/storytime?exam=1#my-story'; }   /* a My Story that is not built yet, or asleep under a replayed tale, cannot open it: go to its own address */
        else if (a === 'buy') { if (S && S.spend && S.spend('star', 1)) { S.award('tale2'); if (window.jjSyncTale2) window.jjSyncTale2(); try { window.dispatchEvent(new CustomEvent('jj:score', { detail: { id: 'tale2' } })); } catch (x) {} unlocked(); } else { stars = 0; confirmStar(); } }
        else if (a === 'play') { location.href = '/storytime?part=2'; }
        else if (a === 'tale') { close(); location.href = '/storytime'; } });
      document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
      choose(); document.body.appendChild(o); requestAnimationFrame(function () { o.classList.add('on'); });   /* (it sits over the menu too: z 100000 and exempt from the menu's click lock) */
    };
    window.jjSyncTale2 = function () { var ok = !!(window.jjScore && window.jjScore.has && window.jjScore.has('tale2'));
      var seen = false; try { seen = localStorage.getItem('jjTale2Seen') === '1'; } catch (e) {}
      document.querySelectorAll('.jj-tale2').forEach(function (a) { a.classList.toggle('fresh', ok && !seen); a.classList.toggle('locked', !ok); a.setAttribute('aria-disabled', ok ? 'false' : 'true'); if (ok) a.removeAttribute('data-cursor'); else a.setAttribute('data-cursor', 'none'); }); };
    window.jjSyncTale2(); window.addEventListener('jj:score', window.jjSyncTale2); setTimeout(window.jjSyncTale2, 1500); setTimeout(window.jjSyncTale2, 4000);
    document.addEventListener('click', function (e) { var a = e.target && e.target.closest && e.target.closest('.jj-tale2'); if (!a) return; window.jjSyncTale2();
      if (!a.classList.contains('locked')) { try { localStorage.setItem('jjTale2Seen', '1'); } catch (x) {} window.jjSyncTale2(); return; }
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); window.jjTale2Offer(); }, true);   // locked: the choice of the exam or a star   // goto() closes the menu itself (once) and waits for it — pressing the button here too re-opened it under the panel
    Array.prototype.forEach.call(list.querySelectorAll('.menu-open-link'), function (a) {
      var t = (a.textContent || '').trim().toLowerCase();
      if (t === 'contact') a.setAttribute('href', '/contact');
      if (t === 'credits') a.setAttribute('href', '/contact?credits=1');
      if (t === 'work') a.setAttribute('href', '/?choose=work');
    });

    // Clone-replace links: strips the Webflow embed's hover listeners so we own the show
    var links = [];
    Array.prototype.slice.call(list.querySelectorAll('.menu-open-link')).forEach(function (a) {
      var c = a.cloneNode(true);
      a.parentNode.replaceChild(c, a);
      links.push(c);
    });

    // One preview image per link (the embed's old nodes are discarded with the row content)
    var row = document.querySelector('.images-row');
    var imgs = [];
    if (row) {
      var proto = row.querySelector('.menu-hover-image');
      var defaultSrc = proto ? proto.getAttribute('src') : '';
      row.innerHTML = '';
      links.forEach(function (a) {
        var im = document.createElement('img');
        im.className = 'menu-hover-image';
        im.alt = '';
        var key = (a.querySelector('.jjmm-new') ? a.textContent.replace(a.querySelector('.jjmm-new').textContent, '') : a.textContent || '').trim().toLowerCase();
        im.decoding = 'async'; im.setAttribute('data-src', IMGS[key] || defaultSrc);   /* f-1007a: six cards, 0.8 MB, were fetched on every page load for a menu most visits never open */
        row.appendChild(im);
        imgs.push(im);
      });
      var artIn = false, artLoad = function () { if (artIn) return; artIn = true; imgs.forEach(function (im) { var u = im.getAttribute('data-src'); if (u) { im.src = u; im.removeAttribute('data-src'); } }); };
      /* loaded the moment the menu is reached for: the pointer over the nav, a press or a focus on the button, or the menu opening by any other route */
      var navEl = document.querySelector('.nav'), mBtn = document.querySelector('.menu-container');
      [navEl, mBtn].forEach(function (el) { if (!el) return; ['pointerenter', 'pointerdown', 'touchstart', 'focusin'].forEach(function (ev) { el.addEventListener(ev, artLoad, { passive: true }); }); });
      window.addEventListener('jj:menu:open', artLoad);
      if (document.body.classList.contains('jj-menu-open')) artLoad();
    }

    // The luxury cascade, rebuilt for N links
    function setActive(activeIdx) {
      imgs.forEach(function (img, idx) {
        var dist = Math.abs(idx - activeIdx);
        var dir = idx < activeIdx ? -1 : 1;
        gsap.to(img, {
          opacity: idx === activeIdx ? 1 : 0.17,
          y: idx === activeIdx ? 0 : dist * 140,
          rotateZ: idx === activeIdx ? 0 : dist * 3 * dir,
          scale: idx === activeIdx ? 1.08 : 0.94,
          duration: 0.8, delay: dist * 0.03, ease: 'power3.inOut', overwrite: 'auto'
        });
      });
    }

    // Hieroglyph scramble: letters flicker through alien glyphs, settle left to right
    function prepChars(a) {
      var d = a.querySelector('div');
      if (!d) return null;
      if (d._jjChars) return d._jjChars;
      var pill = d.querySelector('.jjmm-new');                     // the Part Two pill is a real node, not letters — keep it out of the scramble
      var text = (pill ? d.textContent.replace(pill.textContent, '') : d.textContent).trim();
      d.textContent = '';
      if (pill) d.appendChild(pill);
      d._jjChars = text.split('').map(function (ch) {
        var s = document.createElement('span');
        s.textContent = ch;
        s._orig = ch;
        s.style.display = 'inline-block';
        s.style.whiteSpace = 'pre';
        d.appendChild(s);
        return s;
      });
      return d._jjChars;
    }
    function scramble(a) {
      var chars = prepChars(a);
      if (!chars) return;
      chars.forEach(function (s, idx) {
        var flicks = 0, max = 2 + Math.round(Math.random() * 3);
        clearInterval(s._t);
        s._t = setInterval(function () {
          if (flicks++ >= max) {
            s.textContent = s._orig;
            s.style.fontFamily = '';
            clearInterval(s._t);
            return;
          }
          s.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          s.style.fontFamily = 'var(--jj-alien-font, monospace)';
        }, 45 + idx * 9);
      });
    }

    /* Resting state: with the pointer off the links the whole strip drops away and the
       last-hovered scene takes a 20% black wash, so it reads as "nothing selected" but still shows where you were. */
    var curIdx = 0, idleOn = false, idleT = null;
    function setIdle(on) {
      if (on === idleOn) return;
      idleOn = on;
      if (row) gsap.to(row, { yPercent: on ? 15 : 0, duration: 0.85, ease: 'power3.inOut' });
      imgs.forEach(function (img, idx) {
        gsap.to(img, { filter: 'saturate(1.02) brightness(' + (on && idx === curIdx ? 0.8 : 1) + ')', duration: 0.5, ease: 'power2.out' });
      });
    }
    // The menu always opens in the resting state (art low, last-hovered scene dimmed) until the pointer finds a link
    window.addEventListener('jj:menu:open', function () { idleOn = false; if (row) gsap.set(row, { yPercent: 0 }); setTimeout(function () { setIdle(true); }, 1200); });
    var mwrap = document.querySelector('.menu-wrap');
    if (mwrap) mwrap.addEventListener('mousemove', function (e) {
      var over = e.target && e.target.closest && e.target.closest('.menu-open-link');
      if (over) { clearTimeout(idleT); idleT = null; setIdle(false); }
      else if (!idleT) idleT = setTimeout(function () { idleT = null; setIdle(true); }, 140);
    });

    links.forEach(function (a, i) {
      a.style.willChange = 'transform';
      a.addEventListener('mouseenter', function () {
        if (a.classList.contains('locked')) return;
        clearTimeout(idleT); idleT = null;
        curIdx = i; setIdle(false);
        if (row) gsap.to(row, { x: (-i * 42) + 'vw', duration: 1.0, ease: 'power3.inOut' });
        setActive(i);
        scramble(a);
      });
      // Magnetic pull toward the cursor; elastic snap home on leave
      a.addEventListener('mousemove', function (e) {
        if (a.classList.contains('locked')) return;
        var r = a.getBoundingClientRect();
        gsap.to(a, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.18,
          y: (e.clientY - (r.top + r.height / 2)) * 0.3,
          duration: 0.4, ease: 'power2.out'
        });
      });
      a.addEventListener('mouseleave', function () {
        gsap.to(a, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.45)' });
      });
    });
    setActive(0);

    // Peeking alien: pops up from the bottom edge a beat after the menu opens
    var SPRITE = 'https://cdn.prod.website-files.com/69c2e676c74b81c8dcbd3651/6a0d8154f8c9d157143146cf_Sprite%20bottom%20middle.svg';
    var peeker = null;
    function peek() {
      if (peeker) return;
      peeker = document.createElement('img');
      peeker.src = SPRITE;
      peeker.style.cssText = 'position:fixed;bottom:0;left:8vw;width:130px;height:auto;z-index:10000;pointer-events:auto;transform:translateY(100%);transition:transform 0.9s cubic-bezier(0.34,1.56,0.64,1);';
      peeker.addEventListener('click', function () { hidePeek(); });
      document.body.appendChild(peeker);
      requestAnimationFrame(function () { peeker.style.transform = 'translateY(24%)'; });
    }
    function hidePeek() {
      if (!peeker) return;
      var p = peeker;
      peeker = null;
      p.style.transition = 'transform 0.45s cubic-bezier(0.5,0,0.75,0)';
      p.style.transform = 'translateY(100%)';
      setTimeout(function () { if (p.parentNode) p.parentNode.removeChild(p); }, 500);
    }

    // Menu-open detection: entrance stagger + scramble sweep + alien
    var menuBtn = document.querySelector('.menu-container');
    var isOpen = false;
    function menuVisible() {
      return wrap.offsetParent !== null && getComputedStyle(wrap).display !== 'none' && getComputedStyle(wrap).opacity !== '0';
    }
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        setTimeout(function () {
          var vis = menuVisible();
          if (vis && !isOpen) {
            isOpen = true;
            gsap.fromTo(links,
              { y: 46, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out', clearProps: 'opacity' });
            links.forEach(function (a, i) { setTimeout(function () { scramble(a); }, 120 + i * 90); });
            if (row && row.parentNode) {
              gsap.fromTo(row.parentNode, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' });
            }
            idleOn = false; if (row) gsap.set(row, { yPercent: 0 }); setTimeout(function () { setIdle(true); }, 1100);
            setTimeout(function () { if (isOpen) peek(); }, 900);
          } else if (!vis) {
            isOpen = false;
            hidePeek();
          }
        }, 120);
      });
    }
    // Safety: if the menu is closed by any other path, retire the alien and reset
    setInterval(function () {
      if (isOpen && !menuVisible()) { isOpen = false; hidePeek(); }
    }, 700);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* Speech subtitles sit in the middle of the screen (where the "Hey I'm Joe" headline lives), not at the foot. */
(function () { var st = document.createElement('style'); st.id = 'jj-sub-centre';
  st.textContent = '#jj-subtitle{top:50%!important;bottom:auto!important;transform:translate(-50%,-50%)!important;width:86%!important;max-width:980px!important;font-size:clamp(26px,3.6vw,58px)!important;line-height:1.15!important;font-weight:700;text-shadow:0 0 18px rgba(4,6,18,.9),0 0 6px rgba(4,6,18,.8),0 2px 3px rgba(0,0,0,.6);}';   /* a soft dark halo: the words stay readable when the big-bang moon passes behind them */
  (document.head || document.documentElement).appendChild(st); })();

/* ===== ONE lenis.raf PER FRAME (f-1008a, performance round 2). intro.js steps the page's smooth scroll twice in every frame, from two
   clocks: its own requestAnimationFrame loop (page time, ms) and gsap.ticker (GSAP's time, which starts about a second later). Lenis works
   out its step from the previous call, so each frame it was handed one step of about MINUS a second and then one of about PLUS a second.
   Measured on My Story for one wheel notch: 188 calls in 94 frames, steps -946 / +979 ms, and in 75 of those calls the page was really
   scrolled the wrong way (from 3000 px to the very top) and back again inside the same frame, with ScrollTrigger.update run on both.
   The two steps cancel to one frame's worth, which is why it looked right; the detour was pure waste (and it grows with the gap between
   the two clocks, i.e. with a slow load). Here: the first call in a frame steps Lenis with the frame's own time, the second is ignored.
   The scroll curve is the same to the pixel (checked frame by frame). intro.js itself is not touched. ===== */
(function () {
  function one() { var L = window.lenis; if (!L || L.__jjOneRaf || typeof L.raf !== 'function') return; L.__jjOneRaf = true;
    var raf0 = L.raf, lastF = -1, lastT = -1e9;
    try { L.time = 0; } catch (e) {}   /* forget the old clock: the first step on the new one is 0 */
    L.raf = function () { var tl = document.timeline, f = tl ? tl.currentTime : null, pn = performance.now();
      if (typeof f !== 'number') f = pn;                       /* f: the frame's own timestamp, the same for every callback in a frame */
      if (f === lastF) { if (pn - lastT < 50) return; f = pn; }   /* the second call of the frame: ignored. (Same stamp but 50 ms on = a clock that is not ticking: step by real time, never freeze) */
      else lastF = f;
      lastT = pn; return raf0.call(L, f); }; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', one); else one();   /* after intro.js has made it (its listener was added first) */
  window.addEventListener('load', one);
})();

/* ===== Modal guard (2026-09-17). While ANY overlay is up — the achievements / store panel, a first-unlock card, a Storytime
   dialog, a My Story lightbox (html.jjms-lb), the companion's full-screen view — nothing in the nav underneath can be pressed,
   and for a beat AFTER it closes too: the press that closes a modal must never land on the Menu / pills sitting under its X.
   RULE 0 said "behind and unclickable"; this makes it true for every overlay in one place. ===== */
(function () {
  if (window.__jjModalGuard) return; window.__jjModalGuard = true;
  var st = document.createElement('style');
  /* f-1008a: the "everything inside the nav" half now hangs off .nav.jj-gd (a mirror of body.jj-guard, set below in the same breath) and not off
     a class on <body>/<html>: "body.jj-guard .nav *" made the browser re-style every element of the page whenever a modal, a lightbox or a
     cut-scene opened or closed (5,934 elements on My Story: ~35 ms here, ~130 ms on a slow laptop, twice per close). Same rule, same strength. */
  st.textContent = 'body.jj-modal-open .nav,html.jjms-lb .nav,body.jj-guard .nav{pointer-events:none!important;}body .nav.jj-gd *{pointer-events:none!important;}';
  document.head.appendChild(st);
  var until = 0, was = false;
  function up() { return document.body.classList.contains('jj-modal-open') || document.documentElement.classList.contains('jjms-lb') || !!document.getElementById('jjco-full') || !!document.getElementById('jjco-vid'); }
  function setG(on) { var b = document.body.classList; if (on !== b.contains('jj-guard')) b.toggle('jj-guard', on); var ns = document.querySelectorAll('.nav'); for (var i = 0; i < ns.length; i++) if (ns[i].classList.contains('jj-gd') !== on) ns[i].classList.toggle('jj-gd', on); }   // NEVER re-add a class that is already there: even a no-op classList.add queues a mutation record, and this observer would then feed itself for ever (it froze the page)
  function sync() { var now = up(); if (was && !now) { until = performance.now() + 500; setG(true); setTimeout(function () { if (!up()) setG(false); }, 520); } else if (now) setG(true); was = now; }
  var mo = new MutationObserver(sync); mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  mo.observe(document.body, { attributes: true, attributeFilter: ['class'], childList: true });   // html + body classes, and overlays appended to body — no subtree
  ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click', 'touchstart', 'touchend'].forEach(function (t) {
    window.addEventListener(t, function (e) { if (!(up() || performance.now() < until)) return;
      var tg = e.target; if (tg && tg.closest && tg.closest('.nav') && !tg.closest('#jj-ach,#jj-first,.jj-tmenu.stp,.jj-tmenu.thp')) { e.stopImmediatePropagation(); e.preventDefault(); } }, true); });
})();

/* ---- f-1012c · THE LITE LEVEL (the first quality tier). Joe's Intel Mac (UHD 630 driving 1680 x 842 at 2x) ran the homepage at 20 to 26 frames a second with its
   scripts idle: the graphics chip could not fill the screen fast enough, and no single effect was to blame. So a machine that is measured to be slow gets a lighter
   picture, and a fast one keeps everything.
   ON when: the address says ?jjlite=1; or an earlier page of this visit turned it on; or the page is MEASURED slow: once the loader has gone and the visitor has
   moved the pointer, 3 s of frames under 38 a second (with no pointer at all, after 10 s: under 24). ?jjlite=0 keeps it off.
   What it does here: html.jj-lite (every script can hang its own lighter rules off that; 'jj:lite' is sent on window); no glass blur; no blurred mist behind the
   sound button; no blurred cursor trail; and every big Rive canvas is drawn at 1x, a quarter of the pixels (the small logo stays sharp). ---- */
(function () {
  var de = document.documentElement, q = location.search, forced = /[?&]jjlite=1\b/.test(q) ? 1 : /[?&]jjlite=0\b/.test(q) ? 0 : null, stored = null;
  try { stored = sessionStorage.getItem('jjLite'); } catch (e) {}
  var st = document.createElement('style'); st.id = 'jj-lite-css';
  st.textContent = 'html.jj-lite *,html.jj-lite *::before,html.jj-lite *::after{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;}html.jj-lite #jj-sound-mist,html.jj-lite .cursor-trail{display:none!important;}';
  (document.head || de).appendChild(st);
  function riveLow() { if (!window.jjLite.on) return; try { var W = window.Webflow && Webflow.require && Webflow.require('rive'); if (!W || !W.getInstance) return; var big = innerWidth * innerHeight * 0.3;
      document.querySelectorAll('canvas').forEach(function (c) { var i = W.getInstance(c.parentElement), r = i && i.rive; if (!r || typeof r.resizeDrawingSurfaceToCanvas !== 'function') return; var w = c.clientWidth, h = c.clientHeight;
        if (w * h < big) return; if (Math.abs(c.width - w) < 3) return; r.resizeDrawingSurfaceToCanvas(1); if (!r.isPlaying && r.drawFrame) { try { r.drawFrame(); } catch (e) {} } }); } catch (e) {} }
  function set(v, why) { v = !!v; if (window.jjLite.on === v) return; window.jjLite.on = v; window.jjLite.why = why || ''; de.classList.toggle('jj-lite', v); try { sessionStorage.setItem('jjLite', v ? '1' : '0'); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('jj:lite', { detail: { on: v, why: why || '' } })); } catch (e) {} if (v) { riveLow(); setTimeout(riveLow, 2000); setTimeout(riveLow, 6000); } }
  window.jjLite = { on: false, why: '', set: set, fps: null, low: riveLow };
  var rzT = 0; window.addEventListener('resize', function () { clearTimeout(rzT); rzT = setTimeout(riveLow, 500); });   /* Webflow sizes its canvases back to the screen's own density on a resize */
  window.addEventListener('load', function () { setTimeout(riveLow, 1500); });
  if (forced != null) { set(forced, 'the address'); return; }
  if (stored === '1') { set(true, 'an earlier page this visit'); return; }
  if (stored === '0') return;                                          /* measured fine already this visit */
  var moved = 0, t0 = performance.now(), frames = [], done = false;
  var onMove = function () { if (!moved) moved = performance.now(); }; window.addEventListener('pointermove', onMove, { passive: true }); window.addEventListener('touchstart', onMove, { passive: true });
  (function raf(t) { if (done) return; requestAnimationFrame(raf); if (document.hidden || document.getElementById('jjld')) { frames = []; moved = 0; t0 = performance.now(); return; }   /* never while a loader is up or the tab is away */
    frames.push(t); var now = performance.now(), from = moved ? moved : t0, need = moved ? 3000 : 10000; if (now - from < need) return;
    var n = 0; for (var i = frames.length - 1; i >= 0 && frames[i] >= now - 3000; i--) n++; var fps = n / 3; window.jjLite.fps = Math.round(fps);
    if (fps < (moved ? 38 : 24)) { done = true; set(true, 'measured ' + fps.toFixed(0) + ' frames a second'); window.removeEventListener('pointermove', onMove); return; }
    if (moved && now - moved > 9000) { done = true; try { sessionStorage.setItem('jjLite', '0'); } catch (e) {} window.removeEventListener('pointermove', onMove); return; }   /* two looks with the pointer moving, both fine: this machine keeps everything */
    if (frames.length > 2000) frames.splice(0, 1000); })(performance.now());
})();

/* ---- f-1010a · THE PERFORMANCE PROBE. Only with ?jjperf=1 on the address; without it nothing here runs.
   For a machine we cannot measure ourselves (Joe's Intel Mac ran the homepage at about 21 updates a second, on every screen alike). A small panel shows the live
   frame rate; "Run the test" then switches one kind of drawing work off at a time for a few seconds each (glass blur, filters, masks, animations, canvases,
   videos, the cursor) and shows what each one buys back, with the machine's details, as text that can be copied and sent. Nothing is changed for good. ---- */
(function () {
  if (!/[?&]jjperf=1\b/.test(location.search)) return;
  var G = '*,*::before,*::after', NOT = ':not(#jj-perf):not(#jj-perf *)';
  /* f-1012b: the first run on Joe's Intel Mac (UHD 630, 1680 x 842 at 2x) said: scripts idle, 26 frames a second, NO single switch helps, all of them together 58.
     So it is the graphics chip's total load, and a frame that costs 38 ms shows as "about 26" until it drops under 16: one switch at a time cannot show its share.
     The test is now a LADDER (each step keeps the ones before it), then a few single suspects. [name, css, on(), off()] */
  var FX = G + '{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;-webkit-mask-image:none!important;mask-image:none!important;}*' + NOT + ',*::before,*::after{filter:none!important;}';
  var CV = 'canvas{visibility:hidden!important;}', AN = '*' + NOT + ',*::before,*::after{animation-play-state:paused!important;}', VD = 'video{visibility:hidden!important;}';
  var rivHeld = [], rivOff = function () { rivHeld = []; try { var W = window.Webflow && Webflow.require && Webflow.require('rive'); document.querySelectorAll('canvas').forEach(function (c) { var i = W && W.getInstance && W.getInstance(c.parentElement), r = i && i.rive; if (r && r.isPlaying) { r.pause(); rivHeld.push(r); } }); } catch (e) {} },
      rivOn = function () { rivHeld.forEach(function (r) { try { r.play(); } catch (e) {} }); rivHeld = []; };
  var T = [['As it is', ''],
    ['Step 1: blurs, glows and soft edges off', FX],
    ['Step 2: and canvases off (Rive, stars)', FX + CV, rivOff, rivOn],
    ['Step 3: and animations paused', FX + CV + AN, rivOff, rivOn],
    ['Step 4: and videos hidden', FX + CV + AN + VD, rivOff, rivOn],
    ['Only canvases off', CV, rivOff, rivOn],
    ['Only animations paused', AN],
    ['Only sky layers hidden', '.svg-wrapper,.gradient-overlay,#threejs-container{visibility:hidden!important;}'],
    ['Only nav and sound button hidden', '.nav,.menu-container,.nav-logo-link,#jj-sc-hud,#jj-sound-btn,#jj-sound-mist{display:none!important;}'],
    ['Only custom cursor hidden', '.custom-cursor,.cursor-trail{display:none!important;}']];
  var box = document.createElement('div'); box.id = 'jj-perf';
  box.style.cssText = 'position:fixed;left:14px;bottom:14px;z-index:2147483000;width:340px;max-width:calc(100vw - 28px);padding:14px 16px;border-radius:12px;background:#0b0f1a;border:1px solid rgba(255,255,255,.35);color:#fff;font:13px/1.45 system-ui,-apple-system,sans-serif;pointer-events:auto;box-shadow:0 8px 30px rgba(0,0,0,.5);';
  box.innerHTML = '<div style="font-weight:700;font-size:14px">Performance probe</div><div class="now" style="margin:4px 0 10px;opacity:.85">Measuring…</div><div class="rows"></div>' +
    '<div class="info" style="margin:8px 0;opacity:.6;font-size:11px"></div><button type="button" class="go" data-cursor="hover" style="all:unset;cursor:pointer;padding:7px 12px;border-radius:8px;background:#ff00f5;color:#fff;font-weight:700">Run the test (about 45 seconds)</button> ' +
    '<button type="button" class="cp" data-cursor="hover" style="all:unset;cursor:pointer;padding:7px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.5);display:none">Copy results</button>' +
    '<div style="margin-top:8px"><button type="button" class="su" data-cursor="hover" style="all:unset;cursor:pointer;padding:6px 10px;border-radius:8px;border:1px solid rgba(255,255,255,.5);font-size:12px">Copy start-up report</button></div>';
  var add = function () { if (!document.body) { setTimeout(add, 200); return; } document.body.appendChild(box); }; add();
  /* f-1012d · THE START-UP RECORDER (Joe: the loader's blob stands still then stutters; the logo's reveal freezes for seconds; on his Mac only). From this script's
     first moment, for 45 s: every gap between frames over 120 ms, every stretch a script held the page for 50 ms or more, and when things happened (loader up /
     gone, page loaded, first press, lite on). "Copy start-up report" gives it as text: a freeze with no script behind it is the graphics chip's. */
  var SU = { gaps: [], lts: [], marks: [] }, suLast = 0, suLd = null, suMark = function (w) { SU.marks.push([Math.round(performance.now()), w]); };
  try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { if (e.startTime < 45000) SU.lts.push([Math.round(e.startTime), Math.round(e.duration)]); }); }).observe({ type: 'longtask', buffered: true }); } catch (e) {}
  (function suRaf(t) { if (t > 45000) return; if (suLast && t - suLast > 120) SU.gaps.push([Math.round(suLast), Math.round(t - suLast)]); suLast = t;
    var ld = !!document.getElementById('jjld'); if (ld !== suLd) { suMark(ld ? 'loader up' : (suLd === null ? 'no loader on screen yet' : 'loader gone')); suLd = ld; } requestAnimationFrame(suRaf); })(performance.now());
  suMark('probe started'); window.addEventListener('load', function () { suMark('page loaded'); }); window.addEventListener('pointerdown', function () { suMark('first press'); }, { once: true, capture: true }); window.addEventListener('jj:lite', function (e) { suMark('lite ' + (e.detail && e.detail.on ? 'on' : 'off')); });
  var suText = function () { var sec = function (ms) { return (ms / 1000).toFixed(1) + ' s'; }, held = function (a, d) { var n = 0; SU.lts.forEach(function (q) { var x = Math.min(a + d, q[0] + q[1]) - Math.max(a, q[0]); if (x > 0) n += x; }); return Math.round(n); };
    var tot = SU.gaps.reduce(function (a, g) { return a + g[1]; }, 0), ltot = SU.lts.reduce(function (a, g) { return a + g[1]; }, 0);
    return 'Joe\'s Journey start-up report (first 45 s)\n' + mkInfo() + '\nWhen: ' + SU.marks.map(function (m) { return m[1] + ' at ' + sec(m[0]); }).join(' · ') +
      '\nFreezes over 120 ms: ' + SU.gaps.length + ', ' + tot + ' ms in all · scripts held the page for ' + ltot + ' ms in all (' + SU.lts.length + ' stretches)\n' +
      SU.gaps.slice().sort(function (a, b) { return b[1] - a[1]; }).slice(0, 24).sort(function (a, b) { return a[0] - b[0]; }).map(function (g) { var h = held(g[0], g[1]); return 'at ' + sec(g[0]) + ': frozen ' + g[1] + ' ms, of which scripts ' + h + ' ms' + (h < g[1] * 0.3 ? ' (graphics)' : h > g[1] * 0.7 ? ' (scripts)' : ' (both)'); }).join('\n') +
      '\nLongest script stretches: ' + SU.lts.slice().sort(function (a, b) { return b[1] - a[1]; }).slice(0, 10).map(function (q) { return q[1] + ' ms at ' + sec(q[0]); }).join(', '); };
  box.querySelector('.su').addEventListener('click', function (e) { e.stopPropagation(); var b = this, t = suText(); try { navigator.clipboard.writeText(t).then(function () { b.textContent = 'Start-up report copied'; }, function () { b.textContent = 'Could not copy'; }); } catch (x) { b.textContent = 'Could not copy'; } window.jjPerfStartup = t; });
  var ft = [], lastT = 0; (function raf(t) { if (lastT) ft.push([t, t - lastT]); lastT = t; if (ft.length > 4000) ft.splice(0, 2000); requestAnimationFrame(raf); })(0);
  var lt = []; try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { lt.push([e.startTime, e.duration]); }); if (lt.length > 600) lt.splice(0, 300); }).observe({ entryTypes: ['longtask'] }); } catch (e) {}   // scripts holding the page for 50 ms or more at a go
  var rate = function (ms) { var now = performance.now(), n = 0, worst = 0, busy = 0; for (var i = ft.length - 1; i >= 0 && ft[i][0] >= now - ms; i--) { n++; if (ft[i][1] > worst) worst = ft[i][1]; } lt.forEach(function (q) { if (q[0] >= now - ms) busy += q[1]; }); return { fps: n / (ms / 1000), worst: worst, busy: 100 * busy / ms }; };
  var nowEl = box.querySelector('.now'), rows = box.querySelector('.rows'), running = false, text = '';
  setInterval(function () { if (running) return; var r = rate(1000); nowEl.textContent = 'Now: ' + r.fps.toFixed(0) + ' frames a second (60 is smooth)'; }, 500);
  var gpu = ''; try { var c = document.createElement('canvas'), gl = c.getContext('webgl'), x = gl && gl.getExtension('WEBGL_debug_renderer_info'); gpu = x ? String(gl.getParameter(x.UNMASKED_RENDERER_WEBGL)) : ''; } catch (e) {}
  var mkInfo = function () { return 'Graphics: ' + (gpu || 'unknown') + ' · screen ' + innerWidth + ' x ' + innerHeight + ' at ' + (window.devicePixelRatio || 1) + 'x · ' + (navigator.hardwareConcurrency || '?') + ' cores · ' + ((/Chrome\/(\d+)/.exec(navigator.userAgent) || /Version\/(\d+).*Safari/.exec(navigator.userAgent) || /Firefox\/(\d+)/.exec(navigator.userAgent) || ['', '?']).join(' ').replace(/\/\d+ /, ' ')) +
    ' · lite ' + (window.jjLite && window.jjLite.on ? 'ON (' + window.jjLite.why + ')' : 'off') + ' · page ' + location.pathname + ' · builds ' + [window.JJ_FOOTER_BUILD, window.JJ_HOME_BUILD, String(window.JJ_STORY_BUILD || '').slice(0, 4), String(window.JJ_MYSTORY_BUILD || '').slice(0, 7)].filter(Boolean).join(' '); }, info = mkInfo();
  box.querySelector('.info').textContent = info; setTimeout(function () { info = mkInfo(); box.querySelector('.info').textContent = info; }, 4000);
  box.querySelector('.go').addEventListener('click', function (e) { e.stopPropagation(); if (running) return; running = true; rows.innerHTML = ''; info = mkInfo(); box.querySelector('.info').textContent = info; text = 'Joe\'s Journey performance probe\n' + info + '\n'; var st = document.createElement('style'); document.head.appendChild(st); var i = 0, base = 0;
    box.querySelector('.cp').style.display = 'none'; nowEl.textContent = 'Testing: leave the mouse still…';
    (function next() { if (i >= T.length) { st.remove(); running = false; box.querySelector('.cp').style.display = 'inline-block'; return; }
      var t = T[i++]; st.textContent = t[1]; if (t[2]) { try { t[2](); } catch (e) {} } nowEl.textContent = 'Testing ' + i + ' of ' + T.length + ': ' + t[0].toLowerCase() + '…';
      setTimeout(function () { setTimeout(function () { var r = rate(3000); if (i === 1) base = r.fps; var gain = i === 1 ? '' : (r.fps - base >= 1.5 ? '  +' + (r.fps - base).toFixed(0) : r.fps - base <= -1.5 ? '  ' + (r.fps - base).toFixed(0) : '  same');
          var line = t[0] + ': ' + r.fps.toFixed(0) + ' frames a second' + gain + ' (longest frame ' + r.worst.toFixed(0) + ' ms, scripts busy ' + r.busy.toFixed(0) + '%)'; text += line + '\n';
          var d = document.createElement('div'); d.textContent = line; d.style.cssText = 'padding:2px 0;' + (i > 1 && r.fps - base >= 5 ? 'color:#7dffb0;font-weight:700' : ''); rows.appendChild(d); if (t[3]) { try { t[3](); } catch (e) {} } next(); }, 3000); }, 900); })(); });
  box.querySelector('.cp').addEventListener('click', function (e) { e.stopPropagation(); var b = this; try { navigator.clipboard.writeText(text).then(function () { b.textContent = 'Copied'; }, function () { b.textContent = 'Could not copy: take a screenshot'; }); } catch (x) { b.textContent = 'Could not copy: take a screenshot'; } });
})();
