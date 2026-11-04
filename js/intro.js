// _____________________________________________________________________________________________________________________

/* // Temp Timer for animation timings

document.addEventListener("DOMContentLoaded", function () {
  // Create the timer element
  const timerElement = document.createElement("div");
  timerElement.style.position = "fixed";
  timerElement.style.top = "10px";
  timerElement.style.right = "10px";
  timerElement.style.zIndex = "9999"; // Ensure it's on top
  timerElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  timerElement.style.color = "white";
  timerElement.style.padding = "10px 15px";
  timerElement.style.borderRadius = "5px";
  timerElement.style.fontSize = "16px";
  timerElement.style.fontFamily = "Arial, sans-serif";
  timerElement.textContent = "Timer: 0.00s";

  document.body.appendChild(timerElement);

  let milliseconds = 0;
  const maxMilliseconds = 31000; // 31 seconds in milliseconds
  let timerStarted = false; // To prevent multiple intervals

  // Function to start the timer
  function startTimer() {
    if (timerStarted) return; // Prevent multiple intervals
    timerStarted = true;

    // Update the timer every 10 milliseconds
    const interval = setInterval(() => {
      milliseconds += 10;

      // Calculate seconds and format to 2 decimal places
      const seconds = (milliseconds / 1000).toFixed(2);
      timerElement.textContent = `Timer: ${seconds}s`;

      // Stop at 31 seconds (31000 milliseconds)
      if (milliseconds >= maxMilliseconds) {
        clearInterval(interval);
      }
    }, 10); // Update every 10ms for higher precision
  }

  // Add click event listener to the element with the class .enter-link_wrapper
  const startElement = document.querySelector(".enter-link_wrapper");
  if (startElement) {
    startElement.addEventListener("click", startTimer);
  } else {
    console.error("Element with class .enter-link_wrapper not found.");
  }
});
 */
// _____________________________________________________________________________________________________________________

// Entrance gate: when jj-loader.js is on the page (homepage), hold the intro
// animations until site-footer.js dispatches jj:entrance from the loader's
// onReady. Without the loader (other pages, or if it fails to load) run now.
function jjOnEntrance(fn) {
  // The decision is deferred to DOMContentLoaded so script order can never race it:
  // if this file parses before jj-loader.js has defined window.JJLoader, an immediate
  // check would decide "no loader" and run every landing animation under the loader.
  function decide() {
    if (!window.JJLoader || window.__jjEntranceDone) { fn(); return; }
    document.addEventListener("jj:entrance", function () { fn(); }, { once: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", decide);
  else decide();
}

// Intro Reveal animations

// Play the timeline after the DOM has finished loading
document.addEventListener("DOMContentLoaded", function () {
  jjOnEntrance(function () { blackscreenrevealtl.play(); });
});

// First timeline for animating assets (paused — played via the entrance gate above)
const blackscreenrevealtl = gsap.timeline({ paused: true });

blackscreenrevealtl
  .to(
    ".black-reveal_content.top",
    {
      y: "-100%",
      duration: 2,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.218,0 0.042,0.237 0.474,0.237 0.974,0.237 0.771,1 1,1 "
      ),
    },
    1
  )
  .to(
    ".black-reveal_content.bottom",
    {
      y: "100%",
      duration: 2,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.218,0 0.042,0.237 0.474,0.237 0.974,0.237 0.771,1 1,1 "
      ),
    },
    1
  )
  .to(
    ".body-main",
    {
      backgroundColor: "#091724",
      duration: 6,
      ease: "power4.out",
    },
    1
  );

// _____________________________________________________________________________________________________________________

// Moon animating in on svg path

// Register the MotionPathPlugin with GSAP
gsap.registerPlugin(MotionPathPlugin);

// Animate the .moonsvg element along the #moon-path
gsap.to(".moonsvg", {
  duration: 30,
  ease: "linear",
  repeat: -1, // Loop the animation indefinitely
  motionPath: {
    path: "#moon-path",
    align: "#moon-path",
    alignOrigin: [0.5, 0.5], // Center the element on the path
  },
});

// _____________________________________________________________________________________________________________________

// Character animayting in on svg path

// Animate the .flying-character element along the #character-path with a 10-second delay
jjOnEntrance(function () {
  gsap.to(".flying-character", {
    delay: 3, // Delay the start by 10 seconds
    duration: 5,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.071,0.279 0.149,0.433 0.454,0.498 0.776,0.566 0.536,1 1,1 "
    ),
    motionPath: {
      path: "#character-path",
      align: "#character-path",
      alignOrigin: [0.5, 0.5], // Center the element on the path
      autoRotate: true,
    },
  });
});

// _____________________________________________________________________________________________________________________

// CText hiding when character flys over

// Create a new GSAP timeline (built at entrance so the 6.3s delay counts from reveal)
jjOnEntrance(function () {
  const textrevealtl = gsap.timeline({ delay: 6.3 });

  // Add animations to the timeline
  textrevealtl
    .to(
      ".text-alien_wrapper",
      { x: "-100%", duration: 0.15, ease: "power4.out" },
      0
    ) // Start immediately after delay
    .to(".text_container", { x: "100%", duration: 0.15, ease: "power4.out" }, 0); // Run simultaneously
});

// _____________________________________________________________________________________________________________________

// scramble text reveal

// Define the letters and symbols for the scramble effect
const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_=+;:<>".split(
  ""
);

// Function to initialize the text animation
function initAlienHeadingAnimation() {
  // Select the .alien_heading element and split it into characters
  const alienHeading = document.querySelector(".alien_heading");
  if (!alienHeading) return;

  // Use SplitType to split the text into letter spans
  const splitText = new SplitType(alienHeading, { types: "chars" });
  const chars = splitText.chars;

  // Create a timeline with an initial delay of 2 seconds
  const timeline = gsap.timeline({ delay: 2 });

  // Add each character animation to the timeline with a staggered effect
  chars.forEach((char, index) => {
    const originalChar = char.innerHTML; // Store the original character
    let scrambleCount = 0; // Counter to control scramble frequency

    // Animate each character with fade-in, slower scramble, and staggered stop
    timeline.fromTo(
      char,
      {
        opacity: 0, // Start fully transparent
      },
      {
        opacity: 1,
        duration: 1.5, // Duration for fade-in and scramble effect
        ease: "power1.out",
        onUpdate: () => {
          // Scramble each letter on every 20th update
          if (scrambleCount % 20 === 0) {
            char.textContent =
              lettersAndSymbols[
                Math.floor(Math.random() * lettersAndSymbols.length)
              ];
          }
          scrambleCount++;
        },
        onComplete: () => {
          // Ensure it ends on the correct character
          char.textContent = originalChar;
        },
      },
      index * 0.2 // Stagger each letter by 0.3 seconds for a smoother sequential effect
    );
  });
}

// Call initAlienHeadingAnimation once the entrance is revealed
jjOnEntrance(initAlienHeadingAnimation);

// _____________________________________________________________________________________________________________________

// Horizontal Scroll Animation with Lenis and Scramble Effect
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Ensure no horizontal scrollbar appears globally
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";

  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.05, // Smooth scroll factor
    wheelMultiplier: 0.5,
    smoothTouch: true,
  });
  window.lenis = lenis;   // exposed so page code (e.g. the My Story big-bang hold) can stop/start it

  // Ensure the page always loads at the top — re-assert after the browser's scroll restoration so a
  // Back navigation can't leave us parked at the (now black) end of the scroll.
  if (window.location.pathname === "/") {
    const resetTop = () => {
      try { history.scrollRestoration = "manual"; } catch (e) {}
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    };
    resetTop();
    lenis.stop(); // Disable scroll on load
    window.addEventListener("load", resetTop);
    setTimeout(resetTop, 100);
    setTimeout(resetTop, 400);
  }

  // Returned to the homepage via the back/forward cache: snap to the top first (so the brief reload
  // window shows the blue first panel, not the black end-of-scroll), then reload for a clean restart.
  window.addEventListener("pageshow", function (e) {
    if (window.location.pathname !== "/") return;
    var ov = document.getElementById("jj-exit-overlay");
    if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
    if (!e.persisted) return;
    try { window.scrollTo(0, 0); } catch (err) {}
    try { lenis.scrollTo(0, { immediate: true }); } catch (err) {}
    setTimeout(function () { window.location.reload(); }, 60);
  });

  // Lenis animation loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const horizontalScrollWrapper = document.querySelector(
    ".horizontal-scroll-wrapper"
  );
  const sections = document.querySelectorAll(
    ".horizontal-scroll-content_wrapper"
  );
  const triggers = document.querySelectorAll(".scroll-trigger"); // New trigger elements

  if (window.location.pathname === "/") {
    // Total scroll distance (700vw -> horizontally moved) only for the homepage
    const totalScrollWidth =
      horizontalScrollWrapper.scrollWidth - window.innerWidth;

    // Set up the horizontal scrolling animation
    gsap.to(horizontalScrollWrapper, {
      x: () => -totalScrollWidth, // Moves left as we scroll vertically
      ease: "none",
      scrollTrigger: {
        trigger: ".sticky-scroll-wrapper",
        start: "top top",
        end: "bottom bottom",
        pin: ".sticky-scroll-flex-container",
        scrub: true,
      },
    });

    // Pre-split text on page load and set initial opacity
    const allIntroTexts = document.querySelectorAll(".intro-text");
    allIntroTexts.forEach((textElement) => {
      const splitText = new SplitType(textElement, { types: "chars" });
      const chars = splitText.chars;

      // Set all split characters to initial state: invisible and scaled down
      gsap.set(chars, {
        opacity: 0,
        scale: 0.1,
        fontSize: "3vw",
        color: "#FF00F5",
      });
    });

    // Trigger animations for each section based on the new scroll-trigger elements
    triggers.forEach((trigger, index) => {
      const section = sections[index]; // Corresponding horizontal-scroll-content_wrapper

      ScrollTrigger.create({
        trigger: trigger, // Use the .scroll-trigger as the trigger
        start: "top bottom", // Trigger when it enters from the bottom
        onEnter: () => {
          console.log(`Triggering animation for section ${index + 1}`);
          const introTexts = section.querySelectorAll(".intro-text");

          // Animate intro-texts sequentially
          const timeline = gsap.timeline();
          introTexts.forEach((textElement) => {
            timeline.add(() => initScrambleTextAnimation(textElement));
          });

          // Disable scrolling, fade buttons, and (cancellable) auto-advance for the last trigger
          if (trigger.classList.contains("last") && !window.__jjLastArmed) {
            window.__jjLastArmed = true;
            const cancelCaseRedirect = () => {
              clearTimeout(window.__jjCaseRedirect);
              window.removeEventListener("wheel", onBackScroll);
              window.removeEventListener("touchmove", onBackScroll);
              window.removeEventListener("keydown", onBackScroll);
            };
            const onBackScroll = (e) => {
              const back =
                (e.type === "wheel" && e.deltaY < 0) ||
                e.type === "touchmove" ||
                (e.type === "keydown" && ["ArrowUp", "PageUp", "Home"].indexOf(e.key) !== -1);
              if (!back) return;
              cancelCaseRedirect();
              if (window.jjChoose) window.jjChoose.close();   // the Story Time / Work chooser, if it is up
              lenis.start();
              gsap.to(".next-section-button", { opacity: 1, duration: 0.5, ease: "power2.out" });
            };
            const goCaseStudies = () => {
              cancelCaseRedirect();
              const currentURL = window.location.href.replace(/\/$/, "");
              // Fade the ambient out with the visuals as we leave for the project picker.
              var amb = window.jjAudio && window.jjAudio.ambient;
              if (amb) { try { amb.fade(amb.volume(), 0, 450); } catch (e) {} }
              const ov = document.createElement("div");
              ov.id = "jj-exit-overlay";
              ov.style.cssText =
                "position:fixed;inset:0;z-index:2147483646;pointer-events:none;opacity:0;" +
                "background:radial-gradient(ellipse at center, #0a1024 0%, #04060e 100%);";
              document.body.appendChild(ov);
              gsap.to(ov, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => { window.location.href = `${currentURL}/?choose=choice`; },   // the picker page is retired: the choice lives on the homepage
              });
            };
            ScrollTrigger.create({
              trigger: trigger,
              start: "top center", // Arm when the last trigger is centered
              onEnter: () => {
                // Ignore a spurious trigger from a restored scroll position right after a reload —
                // a real visitor can't reach the end until well after the ~20s scroll-unlock.
                if (performance.now() < 15000) return;
                lenis.stop(); // Disable scrolling

                // Fade out the on-screen UI quickly
                gsap.to(".next-section-button", { opacity: 0, duration: 0.3, ease: "power2.out" });
                gsap.to(".fly-rive, #jj-flyer", { opacity: 0, duration: 0.3, ease: "power2.out" });

                // Short beat (1s), then a smooth fade-to-deep-space into the case studies page.
                // Scrolling / keying back up during the beat cancels it and re-enables scrolling.
                clearTimeout(window.__jjCaseRedirect);
                window.addEventListener("wheel", onBackScroll, { passive: true });
                window.addEventListener("touchmove", onBackScroll, { passive: true });
                window.addEventListener("keydown", onBackScroll);
                window.__jjCaseRedirect = setTimeout(() => { if (window.jjChoose) window.jjChoose.open(); else goCaseStudies(); }, 400);   // the chooser (homepage-footer.js) — Story Time or Work; the old straight exit stays as the fallback
              },
            });
          }
        },
      });
    });
  }

  // Enable scrolling after 10 seconds when clicking .enter-link_wrapper, only on the homepage
  if (window.location.pathname === "/") {
    const enterLink = document.querySelector(".enter-link_wrapper");
    if (enterLink) {
      enterLink.addEventListener("click", () => {
        setTimeout(() => {
          lenis.start();
          console.log("Scrolling enabled!");
        }, 10000); // 10-second delay
      });
    }
  }

  // Scroll down by the next 100vh increment on .next-section-button click
  // Advance one 100vh "scene" per click. Track a target so rapid clicks — and Lenis landing a hair
  // short of a multiple (e.g. 1499.98, which made the old calc return the current spot = no move) —
  // each advance exactly one step. Re-sync to the real position after a gap (settled / manual scroll).
  let nsTarget = 0, nsLast = 0;
  const nextSectionButtons = document.querySelectorAll(".next-section-button");
  nextSectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const vh = window.innerHeight;
      const now = Date.now();
      if (now - nsLast > 1200) {
        nsTarget = Math.round(lenis.scroll / vh) * vh; // re-sync to where we actually are
      }
      nsLast = now;
      nsTarget += vh;
      lenis.scrollTo(nsTarget);
    });
  });
});

// Scramble Text Reveal Animation
const scrambleLettersAndSymbols =
  "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_=+;:<>".split("");

// Function to initialize scramble text animation for a specific element
function initScrambleTextAnimation(targetElement) {
  if (!targetElement || targetElement.dataset.animated) return;

  // Mark this element as animated to prevent repeat triggers
  targetElement.dataset.animated = true;

  // Find the pre-split characters
  const chars = targetElement.querySelectorAll(".char");

  // Create a timeline for the text reveal
  const timeline = gsap.timeline();

  chars.forEach((char, index) => {
    const originalChar = char.innerHTML;
    let scrambleCount = 0;
    const maxScrambles = 10;

    timeline.to(
      char,
      {
        opacity: 1, // Fade in effect
        scale: 1,
        duration: 0.7,
        ease: "power4.out",
        color: "white",
        fontSize: "3.5vw",
        fontFamily: "Joes Journey Hieroglyphics",
        onUpdate: () => {
          if (scrambleCount < maxScrambles) {
            char.textContent =
              scrambleLettersAndSymbols[
                Math.floor(Math.random() * scrambleLettersAndSymbols.length)
              ];
          }
          scrambleCount++;
        },
        onComplete: () => {
          char.textContent = originalChar;
          char.style.fontFamily = "Joes Journey Headline";
        },
      },
      index * 0.05 // Stagger for smooth effect
    );
  });
}

gsap.fromTo(
  ".angle-reveal-content-container",
  {
    clipPath: "polygon(36% 29%, 85% 60%, 82% 80%, 0% 63%)", // Starting clip-path
  },
  {
    clipPath: "polygon(10% 20%, 90% 20%, 90% 95%, 10% 95%)", // Ending clip-path
    ease: "none", // Linear animation for smooth scrubbing
    scrollTrigger: {
      trigger: ".angle-reveal-content-container", // Element to track
      start: "top top", // When the top of the container hits the top of the viewport
      end: "bottom bottom", // When the bottom of the container hits the bottom of the viewport
      scrub: true, // Smooth scrubbing
    },
  }
);

// _____________________________________________________________________________________________________________________

// Pointer Event for button container set to none after click

document.addEventListener("DOMContentLoaded", () => {
  // Grab all enter-link elements and the text-reveal element(s)
  const enterLinks = document.querySelectorAll(".enter-link_wrapper");
  const textReveals = document.querySelectorAll(".text-reveal_wrapper");

  enterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // optional: stops default link behavior
      textReveals.forEach((el) => {
        el.style.pointerEvents = "none";
      });
    });
  });
});
