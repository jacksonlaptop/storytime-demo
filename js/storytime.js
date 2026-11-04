/* jjClipSrc(base[, query]): ONE <source> per clip, the format this browser should use (Safari: the HEVC-alpha .mov; everyone else: the VP9-alpha .webm), so nothing downloads or probes the other */
if (!window.jjClipSrc) window.jjClipSrc = (function () { var hevc = null; return function (b, q) { if (hevc === null) { try { hevc = !window.chrome && !!document.createElement('video').canPlayType('video/mp4; codecs="hvc1"'); } catch (e) { hevc = false; } } q = q || ''; return hevc ? '<source src="' + b + '.mov' + q + '" type=\'video/mp4; codecs="hvc1"\'>' : '<source src="' + b + '.webm' + q + '" type="video/webm">'; }; })();
/* ============================================================================
   Joe's Journey — Storytime page  (hosted via GitHub + raw.githack.com)

   IN WEBFLOW (Storytime page → Page Settings):
     Inside <head>:  <style>.nav-logo-link,.menu-container{opacity:0}</style>
     Before </body>: <script src="https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/storytime.js?v=16"></script>

   Every scene is COMPOSED FROM LAYERS in code (not a flat image): the night sky
   backdrop → a transparent scene bg → positioned character layers (some animated)
   → the J-swirl caption banner. Chapters switch on words as the line types.
   Positions live in COMP below as plain CSS strings — easy to nudge.
   ============================================================================ */
(function () {
  window.JJ_STORY_BUILD = 's151 · the burning village holds 4 s after “Trogdor the Burninator” before the black (blackout@ms) · s150 · Intel-graphics Macs start the tale in the lite level; lite coming on mid-shot fades the running effect videos out · s149 · the lite level is watched through the whole tale (two 4 s windows under 24 fps turn it on), not only at the start · s148 · api.jump(i): straight to a line, for the Storytime 2 scene picker (?scenes=1) · s147 · ?ui=2: every bubble and Next as the painted scenes’ · s146 · ?ui=2 test: the new dialogue box, portraits, a mute button · s145 · ?vx=2 test: the painted vortex at the end · s144 · ?ns=1 test: the village as one new-style video · s143 · the sky, the moon and the stars ride the camera at a far depth · s142 · the pencil look for Part One (?look=c) · s141 · the bubble tail blurs the scene like the bubble; the look=c switch · s140 · the letterbox: every scene in one 16:9 pane at the device width, black above and below on a taller window · s139 · the village: Trogdor’s new clip (the whole shot at its true size: he swoops in, burns the well, the roofs, the well again) · s138 · the lite level (a machine measured to be slow): the effect layers are stills and the particles are halved · s137 · loading: the whole tale\u2019s clips are fetched ahead in story order from the start, the nearest first (only the next scene was: the storybook\u2019s half minute fetched nothing) · s136 · the storybook opens both tales by default (?book=0: without it); /storytime?part=2 is Storytime 2 · s135 · the storybook (?book=1 only): a page\u2019s pictures and decorations arrive together, then a beat, then the words; slower writing; Joe falls in as the last line starts; ?bookfont= to try faces · s134 · the storybook\u2019s puppets ease back to rest before their page lifts and carry on through the push-in: nothing jumps (?book=1 only) · s133 · a tale you paused yourself stays paused after a panel, the menu or the Skip card closes · s132 · a card or panel opening no longer re-styles the whole page (the tale under it is unclickable exactly as before) · s131 · the storybook’s miniatures move (?book=1 only): poses change by hard cuts, a chicken hops, the swirl turns; nothing on a frame loop · s130 · performance: the hand-over contract with a dormant My Story; the particles of both tales drawn on a canvas a shot; the loader waits for the first scene only and the tale fetches a scene ahead, in order · s129 · bugs (bubble tails, bubble fit, the clips under the book), the book’s creeping camera, transport and music · s128 · the storybook opening (?book=1 only): the last picture fills the screen before the bloom; a tighter working text, lettered bigger · s127 · the storybook opening (a prototype, only behind ?book=1; without the flag nothing runs and nothing changes): Joe’s painted pages, book, ornaments and props are in (the code-drawn ones stay as fallbacks) · s124 · a scene can set its own typing pace (typeK; Storytime 2 only, Part One unchanged) · s123 · on a phone held upright a \u2018Turn your phone sideways for Storytime\u2019 card waits over the tale (paused; it starts or carries on when the phone is turned; one link skips to My Story; ?rotate=1 to try it on a desktop); ' + 's122 · every line is laid out whole from its first character, so the narration and the bubbles never shift or resize while they type; ' + 's121 · Space always pauses / resumes and the arrows always go to the previous / next line whatever has the focus (a focused Next used to fire again on Space); while paused only the transport takes a press; the village\u2019s fire no longer shows in the tavern\u2019s first second; the stars no longer show on the mountain in the rolling hills; the tavern window\u2019s Trogdor goes in a burst of fire when pressed; the three teaching bubbles stay 1\u20132s longer; the bubble\u2019s look: Retro\u2019s box and its pink shadow are rounded with its white line, Medieval\u2019s tail is a notch of the stone frame, each theme has its underline colour; the narration banner is the painted one in every theme (the themed boxes preview is retired); ' + 's120 · the speech bubbles take each theme\u2019s nav design (classic = the click-to-begin glass, medieval = stone and parchment, retro = the navy pixel pill, alien = the cyan glass, special = the dashed ring), with a tail that joins without a seam in every one; a faint progress line under the banner\u2019s Next hint shows how long until the line moves on (a picture of the existing wait: no timer added or changed); preview flag ?nartheme=1: the narration box follows the theme too (the painted banner stays for medieval); the glass drops its blur on heavy shots and narrow screens; ' + 's119 · the tavern cheer is the new huzzah clip (Joe draws the sword, holds it up with a glint, lowers it and is back where he began; held on its last frame), placed on the old clip\u2019s figure (same height, feet on the same line); the ta-da sound is unchanged and starts .3s in so its hit lands as the sword reaches the top; his teaching bubble now reads \u2018Huzzah!\u2019 and comes up on that hit; ' + 's118 · teaching bubbles: four short speech bubbles in Part One so visitors meet the idea early (a villager \u2018Is that...Trogdor!!!\u2019 as he swoops in, Joe\u2019s cheer in the tavern, a villager \u2018Joe the Righteous!\u2019 at the send-off, Joe\u2019s thought \u2018What on earth is that...?\u2019 at the arch). They never wait, pause or block: no Next, no pointer events, about 3s, they keep clear of the transport, the hint pill and the props, a pause holds them, Prev / Next clears them, and no line or scene timing changes. The bubble look (parchment, themed, a tail that joins without a seam) now lives here and Storytime 2 shares it; ' + 's117 · the village fire no longer glitches halfway through Trogdor\u2019s flame: as the roofs caught (\u2018many names\u2019, \u2018put fear\u2019) each new stage\u2019s flames came up under the old cool night grade and showed as dark / green ghost flames while the whole frame changed colour; now each stage\u2019s warmer grade leads (1.6s) and its flames follow .6s later (1.1s), crossing with the last stage\u2019s, so the fire simply spreads; the fairies\u2019 ending is planned from the Replay CTA and My Story\u2019s music (the site\u2019s ambient) waits until they are silent — no overlap; a lift or skip before then ends them with a quick 1.2s fade; ' + 's116 · the village camera makes two moves in all (a slow drift across the houses to Trogdor as his flame starts, a slow push on \u2018Trogdor!\u2019); \u2018Trogdor! Trogdor The Burninator...\u2019 holds 1.5s longer on the banner over the black before the tavern (Joe: the one timing change; everything after is 1.5s later); the mountain theme is audible from the first seconds in the cave and rises gently, carries on into the forest and stops at the end of its phrase as Joe dismounts; the fairies start on the aura, a little louder, stay up through the portal and the pull and come up louder still as Joe floats through the vortex, then end on their phrase; every sound effect 20% quieter (SFX_TRIM); the loader\u2019s line is Joe\u2019s cleaned-up \u2018that was something\u2019; ' + 's115 · the forest music is Joe\u2019s fairies track: it comes in very slowly (~9s from silence) as the mountain theme fades, loops gaplessly on its 16-bar cycle (on the story clock) through the aura, the walk-up, the inspect and the tap wait, sinks to ~28% under the portal and the vortex through the pull and the tunnel, and at the end finishes on a musical boundary (the end of its phrase, or of its cycle if that is near) instead of stopping; leaving early ends it at the next bar line; the portal\u2019s turn-on is Joe\u2019s new sound: its build starts with the orb tap and its big hit lands on the portal\u2019s gem and runes lighting (held to the clip\u2019s clock), the vortex coming in under its decay; the music ducks a little less under Jim\u2019s narration (now at 60%); no line or scene timing and nothing visual changed; ' + 's114 · music: one track from the cave to the forest (the mountain fantasy theme, from the start of the tale on its clock): a quiet bed under the cave, the village and the tavern, rising slowly, low under the \u2018Joe the Righteous\u2019 cheer, then up for the ride over the hills and mountains, and a slow 3s fade as the forest arrives (the battle and hills tracks are unwired); the forest music now plays on through the orb\u2019s tap wait and stays in, well under the vortex, until the black on \u2018now...\u2019; the music ducks under every prominent sound by that sound\u2019s own loudness (quick down, smooth back up, only while it is loud; the long beds take a small fixed dip), the ta-da included; every flash of light has a flash sound on its peak (the orb tap\u2019s gold bloom, the portal\u2019s pull flash, its closing flare, the hand-over into the tunnel, the Replay press); jumps from Joe\u2019s run: the village Trogdor\u2019s landing no longer kicks at the end of his swoop (its last leg started at full speed), the three chickens start their startle from their last idle frame (the seek landed on the clip\u2019s own blend into the hop), and the tavern-window Trogdor fades in only once his clip is running (a slow start showed him frozen, then leaping ahead); no line or scene timing changed; ' + 's113 · sound: Joe\u2019s music is in (music group): the battle theme from the cave to the end of the tavern, very quiet in the cave, a little up for the village, a small dip for the \u2018Trogdor! Trogdor\u2019 black, full in the tavern, on the story\u2019s own clock so its last hit lands on \u2018Joe the Righteous\u2019 and it ends by itself; the hills theme from \u2018Joe the Righteous\u2019 over the ride, out as the forest arrives; the forest theme from the forest until the orb wakes (\u2018shake and glow\u2019); Prev / Next, ?scene= and a replay put each track where the story is; stand-in effects (sfx group): the orb\u2019s shimmer, its whoosh up, the portal switching on, the vortex bed (from the portal opening, a murmur once it shuts, up again with the tunnel, soft under Replay, out under the loader) and the orb\u2019s thud on the path; the ta-da\u2019s held chord (the ringing as Trogdor reached the window) is eased out after its hit; the woodland cheer plays again (it waited for the end of the whole line and the hills took over first); pause holds every sound by instance; glitches from Joe\u2019s s112 run: the banner no longer vanishes for a frame in the tavern (it is its own layer now, the village\u2019s effects leaving no longer take it with them); the walk-up really crossfades into the inspect shot (the near forest\u2019s effects started with the crossfade and stalled it ~0.8s into a cut; they now wait for it); the orb\u2019s fall can no longer leave nothing behind (a clip that never starts gets the plain drop, a missing still keeps the orb art, dimmed); the portal\u2019s closing streak is feathered out just past the arch; the pull flash\u2019s ring comes in soft (re-encoded); no line or scene timing changed; ' + 's112 · cavern Trogdor is hovered and pressed only on his own pixels (his whole 1140px video box used to take the pointer), and the castle portal likewise (a precomputed mask of its poster); the story’s own buttons are sentence case (Back to the story, Skip this part, Continue without sound, Turn on the sound!, the line’s ‘- Next’) and keep the themes jj-score gives them; s111 · the village camera is calmer: one move fewer (no creep-in on ‘many names’), every push gentler (the slam 1.36 → 1.24) and slower; Trogdor arrives in the tavern window in a burst of flame and smoke that clears to show him (held on his first frame until then), and the burnt village sits far off low in the window with a warm glow (a 20KB still); the opening forest’s horse no longer drifts in its clip — the drift is baked out of a new dismount clip (ride-dismount2) and the board simply holds its old final slide, so nothing chases anything (the old board lagged and jumped up to 15px a frame); the Replay Storytime button grows from its centre on hover (it grew to the left); s110 · glitch sweep: My Story is no longer drawn underneath the tale (its whole animated page was composited under the story — with the tale’s own layers that came to ~85 screens of GPU layers at 2x, past the tile budget, so tiles dropped and the background blinked through); faded-out Blender plates are not drawn, the code grade steps aside with display:none, two boards are pre-decoded instead of four and figures’ stills are warmed small (composited layers ~550 → ~190, full-screen layers 48 → 23); the aura’s dip and the walk-up dip only lift once the new shot is painted under the black (at 800px the close-up popped in half-lit); the move into the inspect beat is a plain soft crossfade (no gold light before anything magical happens); the village Trogdor is re-keyed from the source (no green rim) and runs forward only — huff, flame at 2.2s, then a seamless forward fire loop (vil-dragon-fire2; the old clip ran the flame backwards); s109 · the tavern fireplace is never empty: the Seedance flame stays until the Blender hearth is actually playing (frames advancing), then they crossfade (the render comes up with its board, the flame fades out over 1.2s); if the render never arrives the flame simply stays; a rig that has gone can no longer hide or un-hide the new shot’s flames (Prev / Next into the tavern showed both, or neither); s108 · fixes after Joe’s s106/s107 run: the ending’s loader is back (the forest’s Blender plates and lights sat over it as a black mist — they now go with the black, with the orb and the hidden scene’s clips); far fewer clips decode at once through the handovers (cave → village 7 → 5, village → tavern 14 → 5: an outgoing shot’s fx hold their frame as they dissolve, the village stops under its black before the tavern builds, a new board’s Blender layers start once its crossfade is through, a fire stage the village has burnt past is let go, the tavern’s Seedance flames never start under the black when the render replaces them); a hidden tab / browser pane pauses the tale and picks it up on return (Chrome stopped the clips on a hidden page while the words and CSS ran on — figures lost or stuck); a clip refused on resume gets a second try; the forest backs up on the frame actually on screen, along a smooth curve (the horse no longer jolts as the board slides); the aura starts as Joe steps off the horse (‘dismount’, ~1.2s sooner) and still ends where it did; the orb stays in the air until the portal’s closing flash, then drops straight down from exactly where it hangs and lies flat and dead on the path (Blender fall + flat still; phones / reduced motion: a plain drop, then the still; nothing changes after); no line or scene timing changed except the aura’s start; s107 · the circle that opens the tale (and the story’s own fades) is now pure black like the loader’s fade and the rest of the site (#05080f read a touch lighter, so the handover jumped); s106 · the Blender fx pass reaches the rest of the tale (blender-fx/<scene>, ?fx=0 = the s105 look): the village gets mist + motes, embers + ash, dark foliage in the corners and its roofs catching fire in three stages — the first ~.5s after his flame, the next on ‘many names’, the full blaze on ‘put fear’ — each stage joining the last on its clock so the fire grows, with a warmer multiply grade per stage kept clear round the moon; the tavern’s hearth is now the Blender fire burning inside the fireplace (the Seedance flame steps aside and stops decoding; hover still swells it), with smoke under the beams, motes and deep warm corners; the hills get valley mist on the board’s own pan, the castle mist, rock lips and his flame’s light on the clip’s clock, the forest boards mist + motes + foliage (the wide board’s set rides its slide and comes in close with the aura); the orb is a real object on the ground: its contact shadow, a moonbeam when it is first seen, the Blender orb turning on its point (woken and glowing on ‘shake and glow’; Safari keeps the lit still), a tap flash, a light burst that resolves the gold into the portal shot, and after the drop it lands, hops and settles on the path; in forest4b its point now sits on the contact shadow the inspect clip paints (it hung above it); the portal’s pull is the Blender flash (streaks spiral in, the bloom peaks on the clip’s own starburst, the s105 flash kept only as a soft wash to the corners) and the hand-over to the tunnel is the Blender bloom; phones get stills (no orb clips, no one-shots), reduced motion gets stills and the s105 CSS blooms; each scene’s fx load a scene ahead and only decode while they show; pause holds all of it; no line or scene timing changed; s105 · the last line is now ‘Well, it is for now...Anyway this is Designer Joe...I heard he’s pretty magical too.’ (the cut to black moves onto ‘now...’, same 3s hold); pause holds everything that moves: the rides over the hills, the mountains and the send-off, Trogdor across the sky and the orb’s flight are CSS glides that used to carry on under a pause (they freeze now and pick up from where they stopped), and the dismount no longer leaps on resume; the tavern fire is pinned to the fireplace on the board (it floated on the wall in portrait), fills the hearth and sits on the logs, with a second flame behind it and a flickering glow inside the hearth; the woodland aura close-up goes in and out through a soft dip to black (the instant 1.75x cut and the zoom-out + walk-up arrival used to show); the portal flashes purple / white as it swallows Joe, and blooms once more as it hands over to the tunnel; the orb breathes a halo while it waits, lifts on hover, pops with sparkles and a soft ring when pressed, and a gold bloom from the orb carries the tale into the portal shot (the walk-up into the inspect beat goes through the same gold light instead of a dip to black); the tap rings are soft light, not lines; the Blender fx wiring is generic (any rig, lights-only ones too; stills, code-drawn grades, per-shot layers, word triggers fx:key / fx:key=0 / fx:key=.6); no line or scene timing changed (the new last line is shorter as written); s104 · glitch pass (no line or scene timing changed): a new shot’s clips dissolve in with its board instead of snapping on over the old one (the village kids stood in the cave, the send-off riders over the tavern, the portal clip over the close board); the next boards and their figures’ stills / posters are mounted invisibly ahead of time so the GPU has them decoded — the handover no longer stalls ~100-350ms and jumps into the crossfade; the night sky is only moved once the old one has faded (the moon used to blink out the frame a scene changed); the aura pose fades out instead of vanishing; the banner’s snow cap settles in; the tunnel’s black lifts only once its first frame is up (it stalled, then jumped in half-faded); Prev / Next: a line’s closing pause can no longer fire after a jump (it restarted the new line, or sent L8’s tap prompt back), rebuilt clips fade in, ‘Luckily’ starts in the tavern and ‘Joe the Righteous’ on the send-off, and Next into ‘Out of his control’ keeps the running portal; s103 · the cavern gets a Blender atmosphere pass (a pilot): four layers rendered in Blender ride the camera rig at their own depths — moonlit mist + drifting dust motes over the floor behind the figures (warm round Trogdor, cool toward the cave mouth), Trogdor’s heat on his box (the hoard’s glow breathing, embers rising off the hoard and his nostrils), a few big soft out-of-focus motes + the odd bit of falling grit in front, and out-of-focus rock lips in the four corners (a still); seamless 4–6s loops of light on black, screen-blended, loaded only once the loader has handed over and faded in as they play; the code’s fire pools stand down under them (the chest’s gold pool stays); ‘darkness’ sinks the mist, not his glow; pause holds them; phones get stills of the mist + heat only, reduced motion gets the stills; no line or scene timing changed; ?fx=0 = the s102 look; s102 · the rest of Part One gets the light pass: the send-off eases in after Joe on ‘set off’ (moonlight grade, mist); the hills and mountains keep their own pan as the camera and get lights only (a halo round the moon, valley mist / a cold glow off the snow, night-shadowed edges, Trogdor’s sky kept clear); the forest to the portal is lights only too (its boards shift with the horse, the aura push, the dip, the orb’s tap prompt): moonlight shafts through the canopy, dappled light on the path, deep blue-green shadow at the edges, the orb’s gold once it wakes on ‘shake and glow’, the portal’s purple on the path while it is open (on the clip’s clock); the ending (black, vortex, Replay) is left as it was; no line or scene timing changed; ?cam=0 = the old shots; s101 · the tavern and the castle get the camera + light pass: the tavern comes up out of the black on the hearth, pushes over to Joe on ‘a brave young man’, eases out and up to the window on ‘stop this evil’ (Trogdor circles past on a plate of his own behind the wall, a little parallax in the window) and drifts back to the full room 3s after the line lands; hearth light across the floor and onto Joe (always burning, quick flicker), lantern + candle glows, smoke under the beams, deep warm shadow on the far side and corners, window kept clear; the castle (Part Two) opens on a low two-shot, closes in on ‘toe to toe’, over to Trogdor on ‘facing fire’, straight back out on ‘Wait a minute’, leans in to his shrink on ‘Ah yes’, over to Joe on ‘different Joe’, one hard push on ‘story of a Designer’ and a creep into the fade; moonlight grade, the portal’s purple on the ground, fire light only while his flame burns (clip clock), a torch in the gate, a gold bloom behind the Designer, ground mist, shadowed rocks; new figures in a shot join the rig mid-move (no restart); no line or scene timing changed; ?cam=0 = the old shots; s100 · the village gets the camera + light pass (the rig is now one config per scene, CAM_RIGS): it opens on the right-hand cottage and drifts across the houses, pushes in on ‘the local villagers’, goes over to Trogdor as his flame starts, creeps in on ‘many names’, back to the locals on ‘put fear’, hard in on ‘Trogdor!’ as the black comes; a cool night grade clear round the moon, warm window glows riding the board, fire light + a glow on the far sky that burn only while his flame does, the sky darkening at the frame’s edges, vignette; no line or scene timing changed; ?cam=0 = the old shots; s99 · the Replay banner draws in to a big button (half size on desktop, wide + raised clear of the chat bubble on phones); s98 · Replay Storytime: a beat after the last line, its banner turns into the CTA while the vortex spins (the words blow away as motes, the scroll lights purple / gold, runes orbit, the title writes itself in with a shimmer; hover spins the runes faster; Enter / Space); it stays over the loader until My Story lifts; pressed: a burst, black, the ending is undone and the tale restarts from line 1 behind the opening iris; reduced motion = a plain fade; s96 · the cavern gets a camera (2.5D push in on Trogdor, over to the chest, back out) and a light pass (vignette, rock shade, fire + gold pools); ?cam=0 = the old shot; s95 · the move into the inspect beat dips to black and back (no more push/crossfade); stepping into ‘Out of his control’ with Next/Previous opens the portal (the clip used to sit on its first frame); Joe stands on the path through the portal scenes; s94 · Trogdor’s fire clip loops as it did (soft restart dropped); s93 · the forest backs up with the horse on the clip’s clock (no stutter, nothing slides), Trogdor’s fire stops and he huffs again (soft restart), push-in + aura pose + motes on ‘woodland aura’, fewer pose changes and re-measured pose heights, one orb still drifting in front of the arch to the end, real grass in front of the portal, slow black from ‘No where’, the fall runs under the whole last line then loader in / banner out together; s92 · Joe after the gallop is the new knight (ten poses, swapped on the words), in front of the portal; the horse stays planted through the dismount (the clip’s back-drift is cancelled on its clock); the tunnel goes to a held black before the loader; s91 · the dismount only travels while the clip gallops (tied to its clock), the transport sits on the Menu’s centre line, motes stream into Joe and he glows on the energy line, the force shudders him and drags him in steps, the tunnel’s black breathes, new last line with a 2s hold; s90 · the fall through the portal plays under a 75% black before the loader; the orb rises slowly and wanders in shot; the dismount clip no longer slides the horse back; chickens wait for Trogdor; the trio stands behind the mushroom; bigger PAUSED hint; My Story gets its own address (#my-story) so Back replays the tale; s89 · from the cut to black the transport, Skip, space and the arrows are gone (the loader is next); s88 · the village breathes before Trogdor lands and its black is short, mountains move on 1s after Joe leaves frame, no background slide at the dismount, the portal wakes on the close board (no cut out), the quake holds to the end of its scene, the lone spirit stands on the ground, NEXT 2px smaller, no NEXT on the last line and its banner leaves at once, forest motes go with the black; s87 · a glowing NEXT fades in after each line, every scene lingers 5s longer, pause holds the slide / progress / late sounds, PAUSED carries the key hints, the horse rides on the path, the spirit trio stands still on the path, one spirit on the banner, mushrooms glow with spores; s86 · a PAUSED card (the medieval face) with a dim over the scene while the visitor has it paused; s85 · the sound prompt’s Continue is the secondary CTA (Turn on the sound is primary); s84 · no companion during the tale (the follow hook stays unregistered); s83 · previous / next always play the new scene (pause no longer carries over); s82 · the chest (every pressable still) lifts and glows under the pointer; s81 · opening the portal with the Special cursor no longer removes it at the next shot (it was marked taken, like a caught prop); s80 · stepping back out of the ending can no longer strand a see-through story over My Story; s79 · Trogdor brighter over the mountains; prod him in the cave → he jolts + Rise and Shine; s78 · pause on ‘rolling hills…’ not ‘nighttime fell’; pause catches clips born under it; a scene reached while paused settles before freezing; s77 · the three spirits + mushroom perch on the banner stone, a crystal on the other side; s76 · village to black on ‘Trogdor! Trogdor’, back with the tavern; stepping while paused stays paused; label font back; s75 · night sky over hills/mountains (big moons, design-system stars), forest mushrooms + glowing shards, spirit + mushroom on the banner, portal ????? in the Special font, sparkles bigger/denser/glowing, transport debounce; s74 · sparkles re-scatter every shot, denser and coloured round the portal; s73 · Trogdor small, grows in/shrinks away; the wide forest board drifts with the horse at the dismount; bars +16px; s72 · glides never skip on a fresh layer (Joe missing on the hills), bars reset on next/previous; s71 · first-scene hints (arrows + themed pill), montage letterbox on ‘set off’ → off at the dismount, forest sparkle, Trogdor crosses the mountain sky, the line reworded; s70 · the ride crosses the frame (hills on ‘nighttime fell’, mountains on ‘treacherous’), the dismount clip into the wide forest board, the close shot is its own board, Joe’s snow cap + flakes, hearth hover + Chicken Run fixes; s69 · Joe’s gallop clip on the ride (hills, mountains, into the forest), stronger pan; s68 · snow over the mountains + on the banner; tree spirits tappable → Forest Friend; s67 · forest spirits (kodama tilt + rattle, in code), Skip CTA retired; s66 · previous / pause / next transport top centre (also arrow keys + space); s65 · Part One ends on the journey: hills, mountains, the forest, the portal takes Joe; the fight is Part Two';
  try { console.log('%c[JJ] storytime.js build: ' + window.JJ_STORY_BUILD, 'color:#FF00F5;font-weight:bold'); } catch (e) {}

  var GB = window.JJ_STORY_BASE || 'https://cdn.jsdelivr.net/gh/jacksonlaptop/joes-journey-code@main/';
  var ST2 = /[?&](st2=1|part=2)\b/.test(location.search), XP = null;   /* s136: ?part=2 (the menu's Part Two link) is Storytime 2 */     // st2 · Storytime 2 (the sequel) runs behind ?st2=1: its data + ui live in storytime2.js, loaded only then; XP = the registered part (its scenes, comps, rigs, hooks)
  var PART2 = !ST2 && /[?&]part=2\b/.test(location.search);            // Part Two of the tale (unlocked by the 'tale2' achievement: the tale, then the quiz). For now it opens on the final fight.
  /* s130 · THE HAND-OVER CONTRACT with a dormant My Story (mystory.js builds nothing it does not need while the tale plays; measured: My Story alive under the tale was
     2 ms of every frame). Both files implement exactly this:
       window.jjTale = { active: true }   set here, as this file is evaluated (before DOMContentLoaded), when the tale is going to play: not on the #my-story address.
                                          It goes false at the wake and true again when the tale is replayed.
       jj:mystory-prefetch   (window)     once, late in the tale (the forest; Storytime 2: its credits): My Story may start fetching its first screen, quietly.
       jj:mystory-wake                    once the tale's cover is fully up (the black / the loader after the vortex; Skip; the rotate card's skip; Storytime 2's end).
       jj:mystory-ready                   My Story's answer: it is built, measured and standing under the cover.
       jj:mystory-lift                    as the cover lifts (My Story's genesis cue).
       jj:mystory-sleep                   the tale was replayed from the banner after a wake: My Story goes dormant again.
     The cover is HELD until 'ready' arrives, or 6 s (a warning is logged). Harmless until the other side lands: when window.jjMyStory.dormant is not true nobody is
     asleep, so nothing is held (where a cover is up anyway, an answer is given 300 ms; a Skip lifts at once, as it always did). MS.held = the lift is being held
     past its own time: the site's music waits with it (releaseAfterMusic). */
  var MS = { pre: false, woke: false, tok: 0, onReady: null, held: false, endAsk: false, endOk: false, skipping: false, log: [] };
  try { window.jjTale = { active: location.hash !== '#my-story' }; } catch (e) {}
  function msSay(n){ try { MS.log.push([n, Math.round(performance.now())]); window.dispatchEvent(new CustomEvent(n)); } catch (e) {} }
  window.addEventListener('jj:mystory-ready', function () { MS.log.push(['(ready heard)', Math.round(performance.now())]); var f = MS.onReady; MS.onReady = null; if (f) f(); });
  function msPrefetch(){ if (MS.pre) return; MS.pre = true; msSay('jj:mystory-prefetch'); }
  function msDormant(){ try { return !!(window.jjMyStory && window.jjMyStory.dormant === true); } catch (e) { return false; } }
  /* (a wait that passes 0.6 s shows the tale's small gold ring on the black, so a slow machine never looks stuck; it goes with the black. Not over the loader: that is
     its own sign of life. The ring is put there BEFORE My Story is woken, unseen, already turning, set to fade in after 0.6 s: both its turning and its fading-in are
     the compositor's, so they carry on while My Story's build holds the page's own thread: measured, at 4x that build is one 1.6 s task, and a ring made by a timer
     only appeared once it was over) */
  function msCue(on){ var st = document.getElementById('jjst'), e = document.getElementById('jjst-mscue'); if (!on) { if (!e) return; var o = '0'; try { o = getComputedStyle(e).opacity; e.getAnimations().forEach(function (a) { if (!a.animationName) a.cancel(); }); } catch (x) {} if (+o < .02) { e.remove(); return; } e.style.opacity = o; void e.offsetWidth; e.style.transition = 'opacity .3s ease'; e.style.opacity = '0'; return; }
    if (!st || e) return; e = document.createElement('div'); e.id = 'jjst-mscue'; e.setAttribute('aria-hidden', 'true');
    e.style.cssText = 'position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-27px 0 0 -27px;border-radius:50%;border:4px solid rgba(244,197,96,.22);border-top-color:#f4c560;animation:jjst-spin .9s linear infinite;opacity:0;will-change:opacity,transform;z-index:2147483001;pointer-events:none;'; st.appendChild(e);
    try { e.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 600, easing: 'ease', fill: 'forwards' }); } catch (x) {} }
  function msWake(then, grace, cue){                         // call with the cover fully up; then() runs when My Story is ready (at once when nobody is asleep)
    var tok = ++MS.tok, done = false, tA = 0, tC = 0, dorm = msDormant();
    var go = function (why) { if (done) return; done = true; clearTimeout(tA); clearTimeout(tC); msCue(false); if (MS.onReady === onR) MS.onReady = null; if (tok !== MS.tok) return; MS.held = false; MS.log.push(['(go: ' + why + ')', Math.round(performance.now())]);
      if (why === 'timeout') { try { console.warn('[JJ] storytime: My Story did not answer jj:mystory-wake within 6 s; lifting anyway'); } catch (e) {} } if (then) then(); };
    var onR = function () { go('ready'); };
    MS.onReady = onR; MS.woke = true; try { if (window.jjTale) window.jjTale.active = false; } catch (e) {}
    var fired = false, fire = function () { if (fired) return; fired = true; if (tok !== MS.tok) return; msSay('jj:mystory-wake'); if (done) return;
      if (dorm || msDormant()) tA = setTimeout(function () { go('timeout'); }, 6000);
      else if (grace) tA = setTimeout(function () { go('nobody'); }, grace);
      else go('nobody'); };
    if (dorm && cue !== false) { msCue(true); requestAnimationFrame(function () { requestAnimationFrame(fire); }); tC = setTimeout(fire, 150); }   // (two frames first, so the ring is with the compositor before My Story's build takes the thread)
    else fire();
  }
  function msSleep(){ if (!MS.woke) return; MS.woke = false; MS.tok++; MS.onReady = null; MS.held = false; MS.endAsk = MS.endOk = false; MS.skipping = false; try { if (window.jjTale) window.jjTale.active = true; } catch (e) {} msSay('jj:mystory-sleep'); }
  /* s132 · #jjst carries .jj-mo whenever <body> carries .jj-modal-open (a card, a panel, the tale's own Skip and sound dialogs): set in the same breath where the tale
     flips the body class itself, and by a watcher for whoever else does (jj-score.js keeps the same mirror; the two agree) */
  function moSync(){ try { var st = document.getElementById('jjst'), on = document.body.classList.contains('jj-modal-open'); if (st && st.classList.contains('jj-mo') !== on) st.classList.toggle('jj-mo', on); } catch (e) {} }
  var START_SCENE = 0;
  try { var _sq = /[?&]scene=(\d+)/.exec(location.search); if (_sq) START_SCENE = parseInt(_sq[1], 10) || 0; } catch (e) {}   // ?scene=N jumps straight to a scene, for checking a single beat without sitting through the tale
  /* s96 · the cavern camera: a 2.5D rig over the first shot (push in on Trogdor, over to the treasure, back out) and a
     Blender-style light pass. ?cam=0 = the old flat shot, to compare; ?cam=1 forces it on. */
  var CAMERA_PASS = true;
  try { var _cq = /[?&]cam=([01])\b/.exec(location.search); if (_cq) CAMERA_PASS = _cq[1] === '1'; } catch (e) {}
  /* s103 · the Blender atmosphere pass (a pilot, the cavern only): looping light layers rendered in Blender ride the camera rig's
     plates (CAM_RIGS.cavern.fx). ?fx=0 = the s102 look, to compare; ?fx=1 forces it on. It rides the rig, so ?cam=0 drops it too. */
  var FX_PASS = true;
  try { var _fq = /[?&]fx=([01])\b/.exec(location.search); if (_fq) FX_PASS = _fq[1] === '1'; } catch (e) {}
  if (PART2) setTimeout(function () { if (window.jjScore && window.jjScore.has && !window.jjScore.has('tale2')) { location.replace('/storytime'); } }, 1500);   // the lock in the menu is the front door; a typed URL goes back to Part One
  var AV = '?a=6';
  var PC_LOOK = /[?&]look=c\b/.test(location.search);
  window.JJ_PC = window.JJ_PC || {}; 'arch-off arch-vid banner banner-snow bones-rattle bones-rattle-poster book-band-1 book-band-2 book-band-3 book-band-4 book-band-5 book-corner-1 book-corner-2 book-corner-3 book-corner-4 book-cover book-divider-acorn book-divider-dragon book-divider-sunmoon book-initial-blue book-initial-gold book-initial-green book-initial-red book-medal-arch book-medal-chicken book-medal-dragon book-medal-knight book-orn-diamond book-orn-fleur book-orn-rosette book-orn-star book-p1-1 book-p1-2 book-p1-2-bg book-p1-2-blue-a book-p1-2-blue-b book-p1-2-chickhead-a book-p1-2-chickqueue-a book-p1-2-green-a book-p1-2-green-b book-p1-2-woman-a book-p1-2-woman-b book-p1-3 book-p1-3-bg book-p1-3-table-a book-p1-3-table-b book-p1-4 book-p1-4-bg book-p1-4-chicken-a book-p1-4-woman-a book-p1-4-woman-b book-p1-5 book-p1-5-bg book-p1-5-shadow-a book-p1-5-shadow-b book-p1-5-villagers-a book-p1-5-villagers-b book-p1-6 book-p1-6-bg book-p1-6-trogdor-a book-p1-6-trogdor-b book-p2-1 book-p2-1-bg book-p2-1-runners-a book-p2-1-runners-b book-p2-1-trogdor-a book-p2-1-trogdor-b book-p2-2 book-p2-2-bg book-p2-2-joe-a book-p2-2-wavers-a book-p2-2-wavers-b book-p2-3 book-p2-3-bg book-p2-3-joe-a book-p2-4 book-p2-4-bg book-p2-4-horse-a book-p2-4-horse-b book-p2-4-joe-a book-p2-5 book-p2-5-joe-a book-p2-5-swirl-a book-p2-6 book-p2-6-bg book-p2-6-joe-a book-p2-6-joe-fall book-p2-6-joe-land book-prop-candle book-prop-coins book-prop-feather book-prop-tankard book-spread cas-bg cas-designer-1 cas-designer-2 cas-dragon-1 cas-dragon-2 cas-dragon-3 cas-dragon-4 cas-dragon-conf cas-dragon-conf-poster cas-dragon-fc cas-dragon-fc-poster cas-hurrah cas-hurrah-poster cas-hurrah2 cas-hurrah2-poster cas-joe-1 cas-joe-2 cas-joe-3 cas-joe-shield cas-joe-shield-poster cas-joe-sword cas-joe-sword-poster cas-joe-sword2 cas-joe-sword2-poster cas-pants cas-pants-poster cas-pants2 cas-pants2-poster cas-smoke cas-smoke-1 cas-smoke-2 cas-smoke-poster cav-bg cav-chest-closed cav-chest-open cav-dragon-1 cav-dragon-2 cav-dragon-3 cav-dragon-loop cav-dragon-loop-poster forest-bg forest-far forest-joe forest-near fx-cav-rocks fx-orb-flat hills-bg joe-aura joe-cower joe-hip joe-idle joe-inspect joe-kneel joe-recoil joe-step joe-stepback joe-think mtn-bg mush-blue mush-purple mush-yellow orb-active orb-float orb-float-poster orb-ground portal-1 portal-2 portal-3 portal-4 portal-grass portal-grass2 portal-loop portal-loop-poster ride-dismount ride-dismount-poster ride-dismount2 ride-dismount2-poster ride-joe ride-loop ride-loop-poster shards sky-alien sky-alien-poster spirit-1 spirit-3 tav-bg tav-bg-2 tav-char-1 tav-char-2 tav-char-3 tav-crowd tav-crowd-poster tav-fire-loop tav-fire-loop-poster tav-joe tav-joe-huzzah tav-joe-huzzah-poster tav-joe-loop tav-joe-loop-poster tav-trogdor-fly tav-trogdor-fly-poster tav-window-village vil-bg vil-char-1 vil-char-2 vil-char-3 vil-char-4 vil-char-5 vil-char-6 vil-char-7 vil-chicken vil-chicken-poster vil-chickens vil-chickens-poster vil-curly-run vil-curly-run-poster vil-dragon-1 vil-dragon-2 vil-dragon-3 vil-dragon-4 vil-dragon-fire vil-dragon-fire-poster vil-dragon-fire2 vil-dragon-fire2-poster vil-dragon-loop vil-dragon-loop-poster vil-flame-loop vil-flame-loop-poster vil-flame-loop2 vil-flame-loop2-poster vil-pitch-drop vil-pitch-run vil-pitch-run-poster vil-pitch-run2 vil-pitch-run2-poster vil-trogdor-well vil-trogdor-well-poster vil-trogdor-well-s vil-trogdor-well-s-poster vortex-joe vortex-joe-poster wood-bg wood-char-1 wood-char-1-loop wood-char-1-loop-poster wood-char-2 wood-char-2-loop wood-char-2-loop-poster wood-joe wood-joe-inspect2 wood-joe-inspect2-poster wood-joe-loop wood-joe-loop-poster wood-joe-loop2 wood-joe-loop2-poster wood-joe-loop3 wood-joe-loop3-poster wood-joe-walkup wood-joe-walkup-poster wood-portal-15 wood-portal-15-poster wood-portal-pull wood-portal-pull-poster wood-vortex wood-vortex-poster'.split(' ').forEach(function (n) { if (n) window.JJ_PC[n] = 1; });   // s142: Part One's pencil files (258)   // s141: the pencil look (a picture or clip in window.JJ_PC loads its -pc version)
  function SB(name){ name = String(name); if (PC_LOOK && window.JJ_PC && window.JJ_PC[name]) name += '-pc'; return GB + (name.indexOf('story2-') === 0 ? '' : 'story-') + name; }   // st2: the sequel's own files are named story2-<scene>-<name>
  function F(name){ return /^(data:|blob:|https?:)/.test(name) ? name : SB(name) + '.webp' + AV; }   // (st2: a comp may carry a ready-made URL — the placeholder boards)
  /* pressable-pixel masks, precomputed from the posters / the tavern board (96px wide, 1 bit per pixel) — so hover and click land
     only on the character in EVERY browser, with no canvas read of a cross-origin image (that read silently failed for some visitors → box fallback) */
  var MASK = {
    'tav-joe-huzzah': '96,107,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAAAAAAAAH//gAAAAAAAAAAAAP//wAAAAAAAAAAAAP//4AAAAAAAAAAAAf//8AAAAAAAAAAAA///+AAAAAAAAAAAB////AAAAAAAAAAAD////wAAAAAAAAAAH////4AAAAAAAAAAH////8AAAAAAAAAAP////+AAAAAAAAAAP/////AAAAAAAAAAf/////AAAAAAAAAAf////+AAAAAAAAAAf////+AAAAAAAAAAf////8AAAAAAAAAAf////4AAAAAAAAAAf////wAAAAAAAAAAf////wAAAAAAAAAAf////wAAAAAAAAAAf////4AAAAAAAAAAf////4AAAAAAAAAAP////4AAAAAAAAAAH////wAAAAAAAAAB/////wAAAAAAAAAD/////wAAAAAAAAAD/////gAAAAAAAAAD+////gAAAAAAAAAB/f///gAAAAAAAAAAf////AAAAAAAAAAAP///4AAAAAAAAAAAP///wAAAAAAAAAAAH///4AAAAAAAAAAAP///4AAAAAAAAAAAf///8AAAAAAAAAAA////8AAAAAAAAAAA////+AAAAAAAAAAB////+AAAAAAAAAAB////8AAAAAAAAAAA////+AAAAAAAAAAA////+AAAAAAAAAAAf////gAAAAAAAAAAf////wAAAAAAAAAAf////4AAAAAAAAAAf////8AAAAAAAAAA//////AAAAAAAAAA//////gAAAAAAAAA//////wAAAAAAAAB//////4AAAAAAAAB//////4AAAAAAAAD//////wAAAAAAAAD//////gAAAAAAAAD//////gAAAAAAAAH//////AAAAAAAAAH/////4AAAAAAAAAH/////gAAAAAAAAAP/////gAAAAAAAAAP/////gAAAAAAAAAf/////wAAAAAAAAAf/////wAAAAAAAAAf/////wAAAAAAAAAf/////wAAAAAAAAAf/////wAAAAAAAAAP/////wAAAAAAAAAD////wAAAAAAAAAAB////wAAAAAAAAAAAP/7/4AAAAAAAAAAAA/7/+AAAAAAAAAAAB/z/+AAAAAAAAAAAB/7//AAAAAAAAAAAD/7//AAAAAAAAAAAD/7//AAAAAAAAAAAD/4AAAAAAAAAAAAAAGAAAAA',   // s119: his standing frames, merged
    'portal-loop': '96,105,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAP+AAAAAAAAAAAAAAf/AAAAAAAAAAAAAB//4AAAAAAAAAAAAf///AAAAAAAAAAAB////4AAAAAAAAA4H////+AAAAAAAAB4f/////GAAAAAAAA4//////vAAAAAAAAR//////2AAAAAAAAD//////wAAAAAAAAD//////+AAAAAAAAH///////gAAAAAAAP///////4AAAAAAw////////+AAAAABx/////////AAAAAA3/////////gAAAAA//////////gAAAAB//////////wAAAAD//////////wAAAAP//////////4AAAAf//////////4AAAA///////////4AAAB///////////4AAAB+//////////4AAAD8//////////4AAAD5//////////4AAAD5//////////8AAAH5//////////8AAAH7//////////4AAAH7//////////4wAAH///////////54AAD///////////54AAD///////////54AAD///////////4AAAH///////////4AAAf///////////8AAAf///////////8HAAe///////////+yAAOf///////////4AAA////////////+AAB////////////+AAB/////////////AAD/////////////gAT////////////3gA7////////////3gAz////////////3wAH////////////3wAH////////////3gAP/////////////gAf/////////////gA//////////////gA//////////////gB//////////////AB//////////////AB//////////////wB/////////////+wD/////////////+AD/////////////8AB/////////////8AB/////////////8AB/////////////4AA/////////////4AB/////////////4AB/////////////4AD/////////////54H//////////////4H//////////////4Hf////////////8wDn////////////5wDj////////////xwBx////////////jgfw////////////D+/4////////////H//4X///////////HvcYH////wB/////mOeAP///8AAf////wcPAP///8AAf////w4HgP///8AAf////54DwP///8AAP////9gAgP///8AAP////8AAAP///4AAH////8AAAD///gAAB////8AAAAAAAAAAAAA//4AAAAAAAAAAAAAH/AA',   // s112: the portal is pressed on its own pixels, not its whole box
    'cav-dragon-loop': '96,87,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//AAAAAAAAAAAAOD//8AAAAAAAAAAAcB///AAAAAAAAAAA4A//8AAAAAAAAAAH4M//4AAAAAAAAAAf48f/wAAAAAAAAAA//4f/wAAAAAAAAAB//wf/gAAAAAAAAAB//gf4AAAAAAAAAAD//gfxwAAAAAAAAAD//wf/xAAAAAAAAAH//////gAAAAAAAAH//////gAAAAAAAAP//////wAAAAAAAD///////+AAAAAAAH///////+AAAAAAAH///////+AAAAAAAH///////+AAAAAAAH///////+AAAAAAAH////////gAAAAAAB/H//////wAAAAAAAYP//////gAAAAAAAAP//////gAAAAAAAAH//////gAAAAAAAAz//////wAAAAAAAAz//////wAAAAAAAA7////+/wAAAAAAAB8////+/gAAAAAAAB8P//+A/gAAAAAAAB+f///g/gAAAAAAAB8f///w/gAAAAAAAAOD///5/gAAAAAAAAHg///7+AAAAAAAAAD4////+AAAAAAAAAB/B///8AAAAAAAAAA/+f//4AAAAAAAAAAP////wAAAAAAAAAAD////gAAAAAAAAAAA////AAAAAAAAAAAAH//8AAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'tav-joe-loop': '96,96,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAAf/AAAAAAAAAAAAAB//wAAAAAAAAAAAAH//8AAAAAAAAAAAAP//+AAAAAAAAAAAA////AAAAAAAAAAAB////gAAAAAAAAAAD////wAAAAAAAAAAH////wAAAAAAAAAAH////4AAAAAAAAAAP////8AAAAAAAAAAf////8AAAAAAAAAAf////+AAAAAAAAAAf////+AAAAAAAAAA/////+QAAAAAAAAA//////wAAAAAAAAA//////gAAAAAAAAB//////AAAAAAAAAB//////AAAAAAAAAB//////AAAAAAAAAD//////AAAAAAAAAD//////AAAAAAAAAD//////gAAAAAAAAD//////gAAAAAAAAB//////gAAAAAAAAA//////gAAAAAAAAAf/////gAAAAAAAAAf/////AAAAAAAAAAf/////AAAAAAAAAHf/////AAAAAAAAAH/////+AAAAAAAAAH/////+AAAAAAAAADn////8AAAAAAAAAAx////4AAAAAAAAAAwf///wAAAAAAAAAAYH///AAAAAAAAAAAdv//+AAAAAAAAAAAP////AAAAAAAAAAAP////AAAAAAAAAAAf////gAAAAAAAAAAf////gAAAAAAAAAAH////gAAAAAAAAAAP////gAAAAAAAAAAf////wAAAAAAAAAA/////4AAAAAAAAAB/////8AAAAAAAAAB/////8AAAAAAAAAD/////+AAAAAAAAAH/////+AAAAAAAAAH//////AAAAAAAAAP//////AAAAAAAAAf//////gAAAAAAAA///////gAAAAAAAA///////wAAAAAAAB///////wAAAAAAAB///////wAAAAAAAD///////4AAAAAAAD///////4AAAAAAAA///////4AAAAAAAAB/////AAAAAAAAAAAP////AAAAAAAAAAAB/gB/gAAAAAAAAAAB/gB/wAAAAAAAAAAD/AB/wAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'vil-dragon-loop': '96,62,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAPgAAAAAAAAAAAAAAfgAAAAAAAAAAAAAA/+AAAAAAAAAAAAA5/4AAAAAAAAAAAAA//wAAAAAAAAAAAAA//wAAAAAAAAAAAAA3/wAAAAAAAAAAAAAf/gAAAAAAAAAAAAADfgAAAAAAAAAAAAAAPAEAAAAAAAAAAAAAHAcAAAAAAAAAAAAAHD8AAAAAAAAAAAAAHD8ACAAAAAAAAAAAHjwAHAAAAAAAAAAAHjwAHAAAAAAAAAAAHjkAGAAAAAAAAAAAHkH4CAAAAAAAAAAAP0PwCAAAAAAAAAAAP4/gCAAAAAAAAAAAP5/gCAAAAAAAAAAAP8MACAAAAAAAAAAAP+AACAAAAAAAAAAAP/gAGAAAAAAAAAAAP/8AMAAAAAAAAAAAP/9AcAAAAAAAAAAAP//44AAAAAAAAAAAf///4AAAAAAAAAAAP///wAAAAAAAAAAAD///gAAAAAAAAAAAB///AAAAAAAAAAAAA//+AAAAAAAAAAAAAf/4AAAAAAAAAAAAAH/wAAAAAAAAAAAAAH/AAAAAAAAAAAAAADngAAAAAAAAAAAAADjwAAAAAAAAAAAAABxwAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'tav-trogdor-fly': '96,63,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAPgAAAAAAAAAAAA///wB/gAAAAAAAAH///x9/9AAAAAAAD////////4AAAAAAP////////8AAAAAAP/////////AAAAAA//////////gAAAAD//////////wAAAAB//////////wAAAAD//////////8AAAAP//////////+AAAA////////////wAAD////////////8AAP////////////+AA//////////////gB//////////////wD//////////////4H//////////////8P//////////////+P//////////////+f//////////////8P//////////////4H//////////////wB//////////////AB/////////////8AB/////////////8AB/////////////4AA/////////////8AA/////////////4AB/////////////gAB/////////////AAB////////////8AAD////////////wAAB////////////gAAB////////////gAAB////////////gAAB////////////gAAB////////////AAAA////////////AAAA////////////AAAA///////////+AAAAf//////////+AAAAf//////////8AAAAf//////////4AAAAP//////////wAAAAF//////////gAAAAB//////////gAAAAB/////////+AAAAAA/////////8AAAAAAf////////4AAAAAAf////////gAAAAAAH////////AAAAAAAF///////8AAAAAAAA///////wAAAAAAAAf/j///+AAAAAAAAAX+AL//gAAAAAAAAAHwAAvQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'tav-bg-2': '96,72,//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AA/////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf////////////+AAf/////////////AA///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
  };
  var maskCache = {};
  function maskHit(name){ if (!MASK[name]) return null; if (maskCache[name]) return maskCache[name];
    var p = MASK[name].split(','), w = +p[0], h = +p[1], bin = atob(p[2]), d = new Uint8Array(w * h * 4);
    for (var i = 0; i < w * h; i++) if (bin.charCodeAt(i >> 3) & (128 >> (i & 7))) d[i * 4 + 3] = 255;
    return (maskCache[name] = { w: w, h: h, ar: w / h, d: d }); }
  var BANNER = GB + 'story-banner.webp' + AV;             // J-swirl caption frame
  var SKY = GB + 'story-nightsky.svg' + AV;
  /* the loader's night dressing, reused behind the transparent scene boards (moon + whirls + dot stars).
     Coordinates live in a 1000x560 sky (slice-fitted), chosen per board to sit in clear sky. */
  var NSC = 'https://cdn.prod.website-files.com/615edb5c549d52cd108ed268/';
  var N_XSTAR = NSC + '67212bf05ed02917043863f9_x-star.svg', N_WHIRL = NSC + '67212bf05ed02917043863f5_whirl-star.svg';
  var N_MOON = 'https://cdn.prod.website-files.com/69c2e676c74b81c8dcbd3651/6a0d67bbb86603f359ae1311_289a8c92ed8a9b7dd3efdae788f3d0ae_Moon.svg';
  var NIGHT = {
    'cav-bg':  { moon:[300,150,50], whirls:[[120,105,20],[720,70,17],[520,40,14],[880,230,16]], xs:[[560,120,12],[840,150,10],[200,60,9],[430,210,9]], stars:[[80,60],[180,190],[420,60],[640,40],[900,60],[470,230],[240,40],[760,240],[990,200],[360,120],[600,180],[820,90],[140,140],[700,20],[950,140]] },
    'vil-bg':  { moon:[430,100,48], whirls:[[150,80,18],[830,60,20],[560,30,14],[720,230,15]], xs:[[300,40,12],[700,160,10],[180,120,9],[860,190,9]], stars:[[60,50],[230,150],[400,190],[620,70],[900,110],[960,40],[280,220],[580,220],[760,40],[120,220],[340,110],[500,40],[660,200],[930,220],[20,120]] },
    'wood-bg': { moon:[400,80,44], whirls:[[250,150,16],[600,40,18],[440,220,13],[300,240,12]], xs:[[300,120,11],[520,40,10],[420,150,9]], stars:[[230,50],[360,190],[480,160],[640,110],[700,180],[170,230],[560,200],[330,20],[250,100],[600,220],[520,100],[380,240]] },
    'cas-bg':  { moon:[220,110,52], whirls:[[90,50,18],[440,60,20],[600,160,14],[360,230,13]], xs:[[330,40,12],[520,120,10],[160,60,9],[680,40,9]], stars:[[40,150],[130,200],[400,170],[600,40],[720,90],[300,240],[480,220],[560,20],[80,40],[260,60],[440,110],[660,200],[540,180]] },
    'hills-bg':{ over:true, moon:[790,105,62], whirls:[[120,70,20],[330,40,16],[600,180,14],[930,240,15]], xs:[[210,150,12],[470,90,11],[700,60,12],[880,150,9],[60,230,9]], stars:[[40,60],[150,200],[290,120],[400,40],[520,210],[640,120],[730,230],[860,60],[960,130],[990,40],[250,250],[560,30],[680,260],[820,30]] },
    'mtn-bg':  { over:true, moon:[230,120,70], whirls:[[520,50,18],[760,150,20],[920,60,14],[420,220,13]], xs:[[380,120,12],[640,40,11],[840,220,10],[100,240,9],[970,180,9]], stars:[[60,40],[140,220],[330,60],[470,170],[590,120],[700,30],[790,250],[880,120],[950,30],[1000,230],[270,250],[610,230],[720,190],[40,150]] },
    'tav-bg-2':{ moon:[530,100,36], whirls:[[458,175,10]], xs:[[470,70,7]], stars:[[452,140],[550,190],[480,200],[560,60],[500,45],[540,150]] }   // all inside the window (x430–570, y60–210); moon 2× with a big glow
  };
  function nightSvg(c){
    var m = c.moon, r = m[2], h = '';
    (c.stars || []).forEach(function (st, i) { h += '<circle class="jjst-tw" style="--d:' + (2.6 + (i % 4) * .7).toFixed(1) + 's;--o:-' + (i * .53 % 3).toFixed(2) + 's" cx="' + st[0] + '" cy="' + st[1] + '" r="' + (2.2 + (i % 3) * .5) + '" fill="#eaf5ff"/>'; });
    (c.xs || []).forEach(function (x, i) { h += '<image class="jjst-tw" style="--d:' + (3.4 + i) + 's;--o:-' + i + 's" href="' + N_XSTAR + '" x="' + (x[0] - x[2] / 2) + '" y="' + (x[1] - x[2] / 2) + '" width="' + x[2] + '" height="' + x[2] + '"/>'; });
    (c.whirls || []).forEach(function (w, i) { h += '<image class="jjst-wh" style="--d:' + (16 + i * 5) + 's" href="' + N_WHIRL + '" x="' + (w[0] - w[2] / 2) + '" y="' + (w[1] - w[2] / 2) + '" width="' + w[2] + '" height="' + w[2] + '" opacity=".9"/>'; });
    h += '<g class="jjst-moonw"><g class="jjst-mpulse"><circle cx="' + m[0] + '" cy="' + m[1] + '" r="' + (r * 2.4) + '" fill="url(#jjstml)"/></g>' +
         '<image href="' + N_MOON + '" x="' + (m[0] - r) + '" y="' + (m[1] - r) + '" width="' + (r * 2) + '" height="' + (r * 2) + '"/></g>';
    return '<svg viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="jjstml" gradientUnits="userSpaceOnUse" cx="' + m[0] + '" cy="' + m[1] + '" r="' + (r * 2.4) + '">' +
           '<stop offset="0" stop-color="#DDF0FF" stop-opacity=".55"/><stop offset=".45" stop-color="#C5E7FF" stop-opacity=".2"/><stop offset="1" stop-color="#C5E7FF" stop-opacity="0"/></radialGradient></defs>' + h + '</svg>';
  }
  var nightEl = null, nightCur = null;
  function setNight(bg){
    if (!nightEl || bg === nightCur) return; var had = !!nightCur; nightCur = bg;
    var over = !!(NIGHT[bg] && NIGHT[bg].over);                    // an opaque board (hills, mountains): the sky goes OVER it, under the figures
    var place = function () {                                    // s104: moved only when it must be, and only once the old sky has faded — moving an element kills its fade, so the moon used to blink out the frame a scene changed
      var b0 = bgWrap.querySelector('.jjst-bg');
      if (nightEl.parentNode !== bgWrap || (b0 && !(nightEl.compareDocumentPosition(b0) & 4))) bgWrap.insertBefore(nightEl, b0 || null);
      nightEl.classList.toggle('over', over); };
    nightEl.classList.remove('on');
    if (!had) place();
    setTimeout(function () { if (nightCur !== bg) return; var c = NIGHT[bg];
      if (had) place();
      nightEl.innerHTML = c ? nightSvg(c) : '';
      if (c) setTimeout(function () { nightEl.classList.add('on'); }, 30);     // timeout, not rAF: rAF pauses in a hidden tab
    }, had ? 500 : 0);
  }

  /* ---- compositions: each chapter = a transparent bg + character layers (src OR anim).
         `css` is the layer's position/size — tweak freely. Dragons use right/bottom anchoring
         (their image has transparent smoke/fire room at the top-left). ---- */
  var CAS_JOE = 'left:20%;bottom:25cqh;width:min(16cqw,320px)';
  var CAS_JOE_SW = 'left:calc(20% - 3.43cqw);bottom:calc(25cqh - 2.29cqw);width:min(22.86cqw,457px)';   // same knight size on a 1000×900 canvas — the swings never clip            // the knight (700² canvas = cas-joe-1/2 geometry)
  var CAS_JOE2 = 'left:19.2%;bottom:25cqh;width:min(17.5cqw,350px)';       // pants + designer, sized up to the knight's height and centred on him — feet on the same line
  var CAS_DRAGON = 'right:6cqw;bottom:19cqh;width:52cqw';                   // the village huff-and-puff loop + flame, same canvas geometry as the village
  var CAS_DRAGON_FC = 'right:5.2cqw;bottom:calc(19cqh - 4.7cqw);width:63.9cqw';   // the 16:9 fire→confused clip, body matched to the old loop's box (flame tip ~35cqw = the shield)       // the puzzled clip (cas-dragon-3 geometry)
  var CAS_POOFJ = 'left:15cqw;bottom:24cqh;width:26cqw';                    // smoke column centred on Joe
  /* Feet on the path (s87). The banner's stone top = 7cqh + its height; the path is a band of each board. The ride boards
     (1584x993) are covered + scaled 1.2 about the centre, so the path follows max(100cqh, 62.7cqw); the forest board is so
     wide it is always height-fitted. Where the banner hides the path (wide screens) the feet stand at the banner's top. */
  var CAP_TOP = /[?&]ui=2\b/.test(location.search) ? 'var(--jjcap, 0px)' : 'calc(7cqh + min(12.82cqw, 208.5px) - .4cqw)';   /* s146 */
  var HILLS_FEET = 'max(calc(50cqh - .25 * max(100cqh, 62.7cqw)), ' + CAP_TOP + ')';
  var FOREST_FEET = 'max(28.5cqh, ' + CAP_TOP + ')';
  var TRIO_B = 'max(27.5cqh, ' + CAP_TOP + ')';                  // the three spirits stand still on the path's far edge
  /* Joe after the gallop (s92): the knight pose pack, keyed from Joe's green screens. [aspect w/h, height relative to the
     standing idle] — the sources were drawn at different scales, so every pose is sized from ONE standing height and sits
     on its feet. JOE(pose, centre-x, bottom, standing height in vw). --fs (the force's steps) rides every one of them. */
  var POSES = { inspect:[.796,.780], kneel:[.792,.886], think:[.760,.793], idle:[.524,1], step:[.590,.899], hip:[.532,.976], recoil:[.610,.902], cower:[.824,.798], stepback:[.772,.936], aura:[.608,.982] };   // heights re-measured off the helmet's ear disc (s93) so he no longer grows and shrinks between poses
  function JOE(pose, cx, bottom, H){ var P = POSES[pose], w = H * P[1] * P[0];
    return 'left:calc(' + cx + ' + var(--fs, 0cqw) - ' + (w / 2).toFixed(2) + 'cqw);bottom:' + bottom + ';width:' + w.toFixed(2) + 'cqw;z-index:3'; }   // z 3: in front of the portal and its grass
  var JOE_WIDE = ['calc(13.3% + 16.96cqw)', FOREST_FEET, 14.9];   // exactly where (and how tall) the dismount clip leaves him
  var JOE_CLOSE = ['calc(13.2% + 7.3cqw)', '31cqh', 26];   // where he stands on the wide board (where the dismount leaves him) and the close one
  function joeL(pose, at){ return { key:'joe', src:'joe-' + pose, cls:'idle', joe:at, css:JOE(pose, at[0], at[1], at[2]) }; }
  /* The dismount clip backs the horse up ~98px (of 556) between 4.25s and 5.75s without moving his legs. `back` is that drift,
     measured off the clip. s93: rather than walking the horse's box forward (it stuttered), the SCENE backs up with him on the
     clip's clock — the board, the mushrooms and the spirits all carry --sl — so he never slides over the ground (rule 30).
     The sliders start 6.47cqw to the right so they finish where they used to stand, on screen. */
  /* s111: ride-dismount2 has the horse's drift baked out (it drifted back 192px in the clip, in uneven steps with doubled frames, and the board chased
     it on a timer — it always lagged a little, worse in the pane). Stabilised on the horse's rump, on a canvas 196px wider on the left (6.469cqw), so
     its last frame sits exactly where the old one did; the forest board simply sits at its old final slide (--sl -6.469cqw) from the start. */
  var RIDE_TRACK2 = { end:3.0 };
  var RIDE_TRACK = { end:3.0, w:36.7, back:[[4.25,0],[4.5,2],[4.75,15],[5,35],[5.25,62],[5.5,84],[5.75,97],[6,98]] };
  var CLOSE_ARCH = 'left:32%;bottom:33.4cqh;width:75.3cqw';     // the arch on the close board (forest4) — the portal clip takes the same box
  var CLOSE_ORB = '--ow:11cqw;left:calc(45% - var(--ow)/2);bottom:58cqh;';   // the orb's hover spot: in frame at any shape, left of the portal, clear of the nav and the banner; it wanders from here (jjstDrift)
  var PORTAL_CROP = ';clip-path:polygon(0 0,100% 0,100% 78%,96% 78%,96% 100%,8.5% 100%,8.5% 78%,0 78%)';
  var LONE_B = 'max(31.5cqh, ' + CAP_TOP + ')';                  // the lone spirit stands on the path's far edge (no more hanging in the air)
  /* s105 · ON THE BOARD: a layer pinned to a point of the cover-fitted board art, so it stays on its spot at any window shape (the hearth fire
     was placed in vw / vh and floated on the wall in portrait). cx = centre across, by = the layer's bottom edge down the art, w = its width,
     all as fractions of the art; ar = the art's aspect. */
  function ONBOARD(ar, cx, by, w){ var D = 'max(100cqw, ' + (100 * ar).toFixed(2) + 'cqh)';
    return 'left:calc(50% + ' + (cx - .5 - w / 2).toFixed(4) + ' * ' + D + ');bottom:calc(50% - ' + ((by - .5) / ar).toFixed(4) + ' * ' + D + ');width:calc(' + w.toFixed(4) + ' * ' + D + ')'; }
  var TAV_AR = 1448 / 1086;                                   // the tavern board; its fireplace opening spans x .142–.220, logs at y .50–.51
  var COMP = {
    cavern: { bg:'cav-bg', snd:{ src:'dragon-snore', vol:.225, pre:.08, fadeIn:3000 }, layers:[   // snore: barely there under the loader, swells when the cave is revealed, fades before the village
      /* the AI-made loop (breathing, eye opens halfway) — transparent video over the static cave.
         The smoke, the coin glints and the hover glow/label are all drawn in code on an 'aura'
         box that sits exactly over the video. */
      /* the treasure chest: closed still, swaps to the open art on the word "jewels" with a gold
         bloom + sparkle burst, then shuts again (see runFx). Faces right, per the mockup. */
      { key:'chest', hint:true, src:'cav-chest-closed', css:'left:16.3%;bottom:28.9cqh;width:min(20.6cqw,420px)',
        aura:{ glow:'rgba(255,214,120,.65)' }, tap:'chest' },
      { key:'dragonloop', hint:true, tap:'wake', vid:'cav-dragon-loop', ar:1400/1276, css:'right:7%;bottom:8cqh;width:min(57cqw,1140px)',
        hero:{ label:'Trogdor the Burninator', glow:'rgba(255,96,120,.55)', lt:25, hit:[.27,.31,.84,.8] },
        /* snd: the Seedance breathing had a music pad under it — a proper snore is coming from the user */
        fx:[ { type:'smoke', at:[28, 46] }, { type:'glint', at:[[46,70],[58,74],[66,66],[52,78]] } ] },
      { key:'bones1', hint:true, vid:'bones-rattle', ar:722/424, idle:true, hoverPlay:true, cls:'prop', tap:'bones', hoverSnd:'bone-jiggle', css:'left:44%;bottom:38cqh;width:min(5.5cqw,110px)' },   // Bone Collector 1/2 — further back on the cave floor; still until hovered, whisks away on click
      { key:'chick', hint:true, vid:'vil-chicken', ar:548/646, seg:[0.1, 3.5], hop:[3.6, 6.0], tap:'chick', cls:'prop', aura:{ glow:'rgba(255,214,120,.6)' }, css:'left:6.5%;bottom:31cqh;width:min(8.5cqw,170px)' }   // in the gap between the rocks and the chest   // the lone chicken by its friend's bones: shivers on a loop; tap → bones twitch, squawk, hop
    ]},
    /* tavern per the "3 - Tavern 1" mockup: Joe mid-left on the floor, grandma back-right,
       hooded guy far right, the old man BIG in the foreground (so he's last = on top). */
    tavern: { bg:'tav-bg-2', snd:{ src:'tav-fire', vol:.15 }, layers:[     // fireplace crackle bed for the whole shot; the board's window is a real hole onto the sky
      { key:'hearth2', vid:'tav-fire-loop', ar:1, start:4.2, cls:'hearthback', css:ONBOARD(TAV_AR, .171, .509, .074) },   // s105: a second, smaller flame behind (mirrored, 4.2s out of phase) — the fire has body instead of one sticker flame
      { key:'hearth', vid:'tav-fire-loop', ar:1, cls:'hearthy', hoverBoost:1.4, aura:{ glow:'rgba(255,150,60,.85)', hearth:true }, css:ONBOARD(TAV_AR, .182, .512, .096) },   // hover: the fire swells and the crackle comes up 40%   // Seedance flame on the logs (listed first → behind Joe). s105: pinned to the fireplace on the board (it floated on the wall in portrait), sized to fill the opening, a flickering glow inside the hearth behind it
      { key:'joe', vid:'tav-joe-huzzah', ar:906/1014, hold:true, css:'left:calc(15% - .1637 * min(26cqw, 520px));bottom:calc(24cqh + .1721 * min(26cqw, 520px));width:calc(.8907 * min(26cqw, 520px))',   /* s119 · the huzzah: he draws the sword (1.3–2.3s), holds it up with a glint (~4s), lowers it and is back in his start pose by the end (6.7s, held). Placed on the old loop's figure: same height, feet on the same line */
        hero:{ label:'Joe the Righteous', glow:'rgba(255,214,120,.6)', seekTo:1.0, lt:26, hit:[.5,.3,.93,1] },
        snd:{ src:'tav-joe-tada', vol:.075, once:true, delay:.3, fadeOutAt:2.1, fadeOut:700 } },   // the ta-da as it was; started .3s in so its hit (1.9s into the sound) lands as the sword reaches the top (2.2s into the clip)   // s113: the ta-da's held chord (2.0-3.3s, the 'ringing' as Trogdor reaches the window) eased out after its hit
      { key:'crowd', vid:'tav-crowd', ar:16/9, css:'right:-4.6cqw;bottom:calc(22cqh - 2.2cqw);width:44cqw' },   // all three villagers, full-body, one clip; feet on the front boards
      { key:'winvil', src:'tav-window-village', behind:true, css:ONBOARD(TAV_AR, .5, .418, .193) }   // s111: the burnt village far off through the window (rooftops low in it, a warm glow), under Trogdor's sky; a 20KB still
    ]},
    woodland: { bg:'wood-bg', snd:{ src:'horse-gallop', vol:.2, fadeIn:1500 }, cue:{ src:'villager-cheer', vol:.225 }, layers:[   // hooves under the ride; one cheer centred in whatever time the shot has
      { key:'joe', vid:'wood-joe-loop3', ar:1400/1520, cls:'gallop', css:'left:47%;bottom:26cqh;width:min(18cqw,360px)',   // gallop loop; rides off into the distance, weaving
        to:{ css:'left:48.5%;bottom:40cqh;width:min(9cqw,180px)', delay:1200, dur:6500 } },
      { key:'v1', vid:'wood-char-1-loop', ar:1, css:'left:29%;bottom:26cqh;width:min(12cqw,240px)' },   // one Seedance clip, split down the middle
      { key:'v2', vid:'wood-char-2-loop', ar:1, css:'left:68%;bottom:26cqh;width:min(13cqw,260px)' },
      { key:'ufo', vid:'sky-alien', ar:314/360, cls:'prop sky', tap:'ufo', css:'left:58%;top:15cqh;width:min(5.5cqw,100px)' }   // a little alien hangs in the sky the whole ride; click = Stopped an Alien Invasion
    ]},
    /* ---- THE JOURNEY (Part One's ending since Sep '26): rolling hills → treacherous mountains → the enchanted forest,
       the arch and the orb, the portal waking, Joe taken. Positions traced from the "Adventure 1-3 / Forest 1-11"
       mockups (1627×1019 frame). `bgFx` dims the board, `pan` slides it against Joe's ride, `zoom` is the camera on
       the board alone (the figures are re-placed per shot, as in the mockups). ---- */
    hills: { bg:'hills-bg', bgFx:'brightness(.75)', pan:true, snd:{ src:'horse-gallop', vol:.2, fadeIn:800 }, layers:[   // 25% darker; Joe rides right, the hills roll left
      { key:'ride', vid:'ride-loop', ar:640/480, css:'left:calc(-30% - 19.4cqw);bottom:calc(' + HILLS_FEET + ' - 12.8cqw);width:60.1cqw', to:{ css:'left:calc(108% - 19.4cqw)', delay:0, dur:5600, ease:'linear' } } ]},   // in from the left, out on the right   // Joe's gallop clip (the pair is 22cqw of a 60.1cqw frame, keyed at the clip's native 1112x834 so he stays sharp)
    mountains: { bg:'mtn-bg', bgFx:'brightness(.5)', pan:true, snow:true, snd:{ src:'horse-gallop', vol:.2, fadeIn:800 }, layers:[   // 50% darker; Trogdor crosses the sky once, far back
      { key:'trogfly', vid:'tav-trogdor-fly', ar:1080/710, hold:true, cls:'trogfly', css:'left:-14cqw;top:6cqh;width:14cqw;filter:brightness(.85)', to:{ css:'left:104cqw', delay:600, dur:9500, ease:'linear' } },   // small and far back; grows in, shrinks away (like the companion dragons)
      { key:'ride3', vid:'ride-loop', ar:640/480, css:'left:calc(-30% - 19.4cqw);bottom:calc(' + HILLS_FEET + ' - 12.8cqw);width:60.1cqw', to:{ css:'left:calc(108% - 19.4cqw)', delay:0, dur:6200, ease:'linear' } } ]},   // and across the mountains
    forest1: { bg:'forest-far', shift:true, sparkle:true, snd:{ src:'horse-gallop', vol:.2, fadeIn:400 }, layers:[ { key:'spirit3', src:'spirit-3', cls:'prop kodama still', tap:'spirit', aura:{ glow:'rgba(190,255,225,.55)' }, css:'left:calc(1.2% + 6.47cqw);bottom:' + TRIO_B + ';width:7.5cqw;filter:brightness(.82);translate:var(--sl, 0cqw) 0' },   // behind the mushroom
      { key:'mushP', src:'mush-purple', cls:'mush', aura:{ glow:'rgba(196,130,255,.75)', spores:true }, css:'left:calc(3% + 6.47cqw);bottom:20cqh;width:6.5cqw;translate:var(--sl, 0cqw) 0' }, { key:'mushB', src:'mush-blue', cls:'mush', aura:{ glow:'rgba(120,200,255,.75)', spores:true }, css:'left:93%;bottom:23cqh;width:5.5cqw;translate:var(--sl, 0cqw) 0' },                               // the wide board: in from the left on the horse; the forest spirits watch from the undergrowth
      
      { key:'spirit1', src:'spirit-1', cls:'prop kodama', tap:'spirit', aura:{ glow:'rgba(190,255,225,.55)' }, css:'left:52%;bottom:' + LONE_B + ';width:2.8cqw;filter:brightness(.8);animation-duration:6.1s;animation-delay:-4.1s;translate:var(--sl, 0cqw) 0' },
      { key:'ride2', vid:'ride-dismount2', ar:1308/834, hold:true, track:RIDE_TRACK2, css:'left:calc(-30% - 13.469cqw);translate:calc(43.3cqw * var(--p, 0)) 0;bottom:calc(' + FOREST_FEET + ' - 4cqw);width:43.169cqw' } ]},   // RULE: he only travels while he gallops. The clip gallops for its first 3s, so --p follows the clip's own clock (a late or paused clip can never skate)   // the dismount clip: gallops in, halts at ~3s, dismounts, holds
    forest2: { bg:'forest-far', shift:true, sparkle:true, layers:[ { key:'spirit3', src:'spirit-3', cls:'prop kodama still', tap:'spirit', aura:{ glow:'rgba(190,255,225,.55)' }, css:'left:calc(1.2% + 6.47cqw);bottom:' + TRIO_B + ';width:7.5cqw;filter:brightness(.82);translate:var(--sl, 0cqw) 0' },   // behind the mushroom
      { key:'mushP', src:'mush-purple', cls:'mush', aura:{ glow:'rgba(196,130,255,.75)', spores:true }, css:'left:calc(3% + 6.47cqw);bottom:20cqh;width:6.5cqw;translate:var(--sl, 0cqw) 0' }, { key:'mushB', src:'mush-blue', cls:'mush', aura:{ glow:'rgba(120,200,255,.75)', spores:true }, css:'left:93%;bottom:23cqh;width:5.5cqw;translate:var(--sl, 0cqw) 0' },  { key:'spirit1', src:'spirit-1', cls:'prop kodama', tap:'spirit', aura:{ glow:'rgba(190,255,225,.55)' }, css:'left:52%;bottom:' + LONE_B + ';width:2.8cqw;filter:brightness(.8);animation-duration:6.1s;animation-delay:-4.1s;translate:var(--sl, 0cqw) 0' },
      { key:'ride2', vid:'ride-dismount2', ar:1308/834, hold:true, track:RIDE_TRACK2, css:'left:calc(-30% - 13.469cqw);translate:calc(43.3cqw * var(--p, 1)) 0;bottom:calc(' + FOREST_FEET + ' - 4cqw);width:43.169cqw' } ]},   // dismounted: the clip holds its last frame beside the horse   // dismounted
    forest3: { bg:'forest-far', shift:true, sparkle:true, dip:[300, 450], layers:[   // s105: out of the aura close-up through a soft dip (the zoom-out + pose swap + walk-up arrival used to show)
      { key:'spirit3', src:'spirit-3', cls:'prop kodama still', tap:'spirit', aura:{ glow:'rgba(190,255,225,.55)' }, css:'left:calc(1.2% + 6.47cqw);bottom:' + TRIO_B + ';width:7.5cqw;filter:brightness(.82);translate:var(--sl, 0cqw) 0' },   // behind the mushroom
      { key:'mushP', src:'mush-purple', cls:'mush', aura:{ glow:'rgba(196,130,255,.75)', spores:true }, css:'left:calc(3% + 6.47cqw);bottom:20cqh;width:6.5cqw;translate:var(--sl, 0cqw) 0' }, { key:'mushB', src:'mush-blue', cls:'mush', aura:{ glow:'rgba(120,200,255,.75)', spores:true }, css:'left:93%;bottom:23cqh;width:5.5cqw;translate:var(--sl, 0cqw) 0' },                                                                                 // the arch and the strange object up ahead
      
      { key:'joe', vid:'wood-joe-walkup', ar:16/9, hold:true, now:true, css:'left:calc(13.3% - 22.6cqw);bottom:calc(' + FOREST_FEET + ' - 5.3cqw);width:74cqw;z-index:3;filter:brightness(1.25) saturate(1.04)' },   /* the walk-up clip: he stops at 53.5% of its frame, 35.8% tall, so the frame is sized and placed to land him on JOE_WIDE */
      { key:'arch', src:'arch-vid', css:'left:57.6%;bottom:32.1cqh;width:44.2cqw' },
      { key:'orb',  src:'orb-ground', css:'left:53.3%;bottom:27.6cqh;width:6cqw;rotate:-16.5deg' } ]},
    forest4b: { bg:'forest-near', sparkle:'near', xfade:true, layers:[   // s110: into the inspect beat on a plain soft crossfade (Joe: the gold light made no sense before anything magical happens); the gold stays for the tap and 'shake and glow'
                                                                         // the inspect clip: crouch, jolt, then its own cut to the close-up (Joe: try the zoom first)
      { key:'joe', vid:'wood-joe-inspect2', ar:16/9, hold:true, now:true, css:'left:6cqw;bottom:calc(31cqh - 6.4cqw);width:88cqw;z-index:3;filter:brightness(1.14)' },   /* the clip now ends at 3.5s, before its close-up cut: he holds, shocked, on the wide shot. his feet (87% down the frame) on the 31cqh ground line, above the caption box */
      { key:'arch', src:'arch-vid', css:'left:56cqw;bottom:calc(31cqh + 1cqw);width:58cqw' },
      { key:'orb',  src:'orb-ground', css:'left:47.1cqw;bottom:calc(31cqh - 2.13cqw);width:7cqw;rotate:-16.5deg' } ]},   // s106: its point on the contact shadow the inspect clip paints (the clip's 51.9% / 88.4%): it hung ~1cqw above it and 3cqw right, 'frozen mid-air'
    forest4: { bg:'forest-near', sparkle:'near', cut:true, layers:[                                                                     // CUT to the close board, no scaling
      joeL('inspect', JOE_CLOSE),
      { key:'arch', src:'arch-vid', css:'left:32%;bottom:33.4cqh;width:75.3cqw' },
      { key:'orb',  src:'orb-ground', css:'left:24.5%;bottom:25.7cqh;width:10.2cqw;rotate:-16.5deg' } ]},
    /* s88: no cut back out after the quake — the close board stays (forest4's framing) and the portal wakes right there.
       A shocked Joe and his being-pulled-in clip are to come; until then the still stands in. The arch is 75.3cqw here,
       so on wide screens its keystone is above the frame: the orb flies up and out of shot. */
    forest5b: { bg:'forest-far', shift:true, sparkle:'portal', layers:[
      { key:'pull', vid:'wood-portal-15', ar:16/9, hold:true, idle:true, css:'left:calc(57.6% - 40.32cqw);bottom:calc(' + FOREST_FEET + ' - 7.1cqw);width:95.34cqw;z-index:3' },   /* the 15 s Dreamina shot (clip arch = 46.36% of the frame from 42.29%, foot at 90.83%; Joe's feet at 86.76% = 7.1cqw up the 53.63cqw-tall frame). Joe's feet sit on FOREST_FEET — the same path line as the dismount and the walk-up (he stood on the grass above the path when the arch was pinned to the walk-up's 32.1cqh) */   /* waits on its first frame (Joe shaking and glowing) until 'force'; then plays once and holds its last frame */
      { key:'orb', src:'orb-active', cls:'orbrise orbfly', css:'left:53.3%;bottom:27.6cqh;width:6cqw;z-index:4' } ]},   // shoots up on 'The orb' (fx orbUp), hovers, drops when the portal dies
    forest5: { bg:'forest-near', sparkle:'portal', layers:[ { key:'shards', src:'shards', cls:'shards', css:'left:25.5%;bottom:27cqh;width:8cqw' },   // the orb (active now) shoots up, the portal wakes
      joeL('recoil', JOE_CLOSE),
      { key:'portal', vid:'portal-loop', ar:896/984, now:true, tap:'portal', aura:{ glow:'rgba(214,120,255,.55)', label:'?????', lt:2 }, css:CLOSE_ARCH + PORTAL_CROP },
      { key:'pgrass', src:'portal-grass2', css:CLOSE_ARCH + ';z-index:2' },   // the unlit arch's own grass, exactly where it stood a scene ago, IN FRONT of the clip (whose green was keyed away, leaving hollow outlines — the clip's two corner tufts are cropped off)
      { key:'orb',    src:'orb-active', css:'left:24.5%;bottom:25.7cqh;width:10.2cqw;z-index:4', cls:'orbrise', to:{ css:CLOSE_ORB + 'width:var(--ow)', delay:0, dur:3200, ease:'cubic-bezier(.25,.1,.2,1)' } } ]},   // rises slowly, spinning and pulsing, then wanders — the same still all the way to the end, so it never stops or jumps
    forest6: { bg:'forest-near', sparkle:'portal', layers:[ { key:'shards', src:'shards', cls:'shards', css:'left:25.5%;bottom:27cqh;width:8cqw' },   // pulled toward it; the orb circles the portal, spinning and pulsing, as in the castle
      joeL('stepback', JOE_CLOSE),
      { key:'portal', vid:'portal-loop', ar:896/984, tap:'portal', aura:{ glow:'rgba(214,120,255,.55)', label:'?????', lt:2 }, css:CLOSE_ARCH + PORTAL_CROP },
      { key:'pgrass', src:'portal-grass2', css:CLOSE_ARCH + ';z-index:2' },   // the unlit arch's own grass, exactly where it stood a scene ago, IN FRONT of the clip (whose green was keyed away, leaving hollow outlines — the clip's two corner tufts are cropped off)
      { key:'orb',    src:'orb-active', cls:'orbrise', css:CLOSE_ORB + 'width:var(--ow);z-index:4' } ]},
    forest7: { bg:'forest-near', sparkle:'portal', layers:[ { key:'shards', src:'shards', cls:'shards', css:'left:25.5%;bottom:27cqh;width:8cqw' },   // gone — a puff where he stood
      { key:'portal', vid:'portal-loop', ar:896/984, tap:'portal', aura:{ glow:'rgba(214,120,255,.55)', label:'?????', lt:2 }, css:CLOSE_ARCH + PORTAL_CROP },
      { key:'pgrass', src:'portal-grass2', css:CLOSE_ARCH + ';z-index:2' },   // the unlit arch's own grass, exactly where it stood a scene ago, IN FRONT of the clip (whose green was keyed away, leaving hollow outlines — the clip's two corner tufts are cropped off)
      { key:'orb',    src:'orb-active', cls:'orbrise', css:CLOSE_ORB + 'width:var(--ow);z-index:4' },
      { key:'poofV',  vid:'cas-smoke', ar:1, hold:true, pop:true, now:true, css:'left:calc(13.2% + var(--fs, 16cqw) - 11.4cqw);bottom:calc(29cqh - 3.4cqw);width:37.4cqw' } ]},   // where the steps left him
    /* CASTLE = 7-shot sequence traced from the "5 - Castle 1/2/3/4/5/6/13" mockups. Keys persist
       across shots so the engine morphs/crossfades: `joe` = knight arts → designer arts (the
       swap happens while `joecloud` covers him); `dragon` crossfades pose → then SHRINKS via a
       width/position morph in castle6 → gone by castle13 (only the `wisp` remains). Smoke clouds
       are the cas-smoke assets; a --flip:-1 on a cloud mirrors it (the idle keyframe reads it). */
    /* ---- CASTLE on video. One-shot clips hold their last frame (hold:true → no loop). Joe's shield clip
       carries on across castle2→3→4 (same key + src → never restarted): braced for 2s, then straightens and
       looks confused at the camera — landing right on 'Wait a minute'. Costume changes = a smoke clip that
       pops over him (pop:true, now:true) with the comp's swapAt delaying the actual swap under the cloud. ---- */
    castle1: { bg:'cas-bg', layers:[          // standoff — sword swings, Trogdor huffs
      { key:'joe', vid:'cas-joe-sword2', ar:1000/900, hold:true, css:CAS_JOE_SW },
      { key:'cdragon', vid:'cas-dragon-fc', ar:16/9, hold:true, css:CAS_DRAGON_FC, snd:{ src:'vil-dragon-roar', vol:.225, once:true, fadeIn:1200 } }   // one clip across castle1→4: fire at 2.2s, puzzled by ~6s
    ]},
    castle2: { bg:'cas-bg', layers:[          // fire vs shield — the flame reaches the shield in under a second
      { key:'joe', vid:'cas-joe-shield', ar:1, hold:true, css:CAS_JOE },
      { key:'cdragon', vid:'cas-dragon-fc', ar:16/9, hold:true, css:CAS_DRAGON_FC }
    ]},
    castle3: { bg:'cas-bg', layers:[          // both suddenly unsure — flame sucked back in, Trogdor crossfades to the puzzled clip
      { key:'joe', vid:'cas-joe-shield', ar:1, hold:true, css:CAS_JOE },
      { key:'cdragon', vid:'cas-dragon-fc', ar:16/9, hold:true, css:CAS_DRAGON_FC }
    ]},
    castle4: { bg:'cas-bg', layers:[          // 'Ah yes, sorry.' — Trogdor shrinks into a puff and is gone
      { key:'joe', vid:'cas-joe-shield', ar:1, hold:true, css:CAS_JOE },
      { key:'cdragon', vid:'cas-dragon-fc', ar:16/9, hold:true, css:CAS_DRAGON_FC, sc:0, so:'78% 80%', scDur:1100 },   // shrinks to his own feet inside the poof
      { key:'poofD', vid:'cas-smoke', ar:1, hold:true, pop:true, now:true, css:'left:68cqw;bottom:calc(19cqh + .2cqw);width:26cqw' }
    ]},
    castle5: { bg:'cas-bg', swapAt:300, layers:[   // 'that's a different Joe' — poof: knight → the man in his pants
      { key:'joe2', vid:'cas-pants2', ar:700/900, hold:true, css:CAS_JOE2 },
      { key:'poofD', vid:'cas-smoke', ar:1, hold:true, css:'left:68cqw;bottom:calc(19cqh + .2cqw);width:26cqw' },
      { key:'poofJ1', vid:'cas-smoke', ar:1, hold:true, pop:true, now:true, css:CAS_POOFJ }
    ]},
    castle6: { bg:'cas-bg', swapAt:300, layers:[   // 'yet still…' — poof: pants → the Designer, who cheers with his brush
      { key:'joe3', vid:'cas-hurrah2', ar:700/900, hold:true, css:CAS_JOE2 },
      { key:'poofJ1', vid:'cas-smoke', ar:1, hold:true, css:CAS_POOFJ },
      { key:'poofJ2', vid:'cas-smoke', ar:1, hold:true, pop:true, now:true, css:CAS_POOFJ }
    ]},
    castle13: { bg:'cas-bg', layers:[         // the Designer holds his pose while the tale fades out
      { key:'joe3', vid:'cas-hurrah2', ar:700/900, hold:true, css:CAS_JOE2 }
    ]}
  };
  Object.keys(COMP).forEach(function (n) { if (/^castle/.test(n)) COMP[n].layers.unshift(   // the portal — huge, behind the whole fight; the secret achievement (click it with the Special cursor) lives here
    { key:'portal', vid:'portal-loop', ar:896/984, cls:'prop portal', tap:'portal', now:true, css:'left:50%;bottom:38cqh;width:min(31cqw,600px);transform:translateX(-50%)' }); });   // far back on the plain, behind everything
  Object.keys(COMP).forEach(function (n) { if (/^castle/.test(n)) COMP[n].layers.splice(1, 0,   // the orb — straight after the portal: in front of it, behind everyone else
    { key:'orb', vid:'orb-float', ar:1, cls:'prop orbit', now:true, css:'--pw:min(31cqw,600px);--ow:min(8.25cqw,148px);left:calc(50% - var(--ow)/2);bottom:calc(38cqh + var(--pw)*.80 - var(--ow)/2);width:var(--ow)' }); });
  Object.keys(COMP).forEach(function (n) { if (/^castle/.test(n)) COMP[n].layers.push(   // Bone Collector 2/2 — mid-ground between Joe and Trogdor, every castle shot
    { key:'bones2', vid:'bones-rattle', ar:722/424, idle:true, hoverPlay:true, cls:'prop', tap:'bones', hoverSnd:'bone-jiggle', now:true, css:'left:47%;bottom:36cqh;width:min(5cqw,100px)' }); });
  /* the orb's moods: now and then a quick full spin, or a swell and settle. Separate `rotate`/`scale`
     properties, so they ride on top of the figure-of-eight (which only moves `translate`). */
  setInterval(function () {
    var o = document.querySelector('#jjst .jjst-layer.orbit'); if (!o || !o.animate || o._fx) return;
    var r = Math.random(), a = null;
    if (r < .22) a = o.animate([{ rotate: '0deg' }, { rotate: (Math.random() < .5 ? '-' : '') + '360deg' }], { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(.45,0,.2,1)' });
    else if (r < .5) { var big = 1.18 + Math.random() * .2; a = o.animate([{ scale: 1 }, { scale: big }, { scale: .92 }, { scale: 1 }], { duration: 1300, easing: 'ease-in-out' }); }
    if (a) { o._fx = true; a.onfinish = a.oncancel = function () { o._fx = false; }; }
  }, 1600);
  var taken = {};                                            // props the reader has picked up — never rebuilt

  /* ---- VILLAGE = 4-panel storyboard, sizes + positions traced from the "2 - Village 1..4"
         mockups (grid-measured, canvas padding factored in). Same bg + same characters (matched
         by `key`): the dragon FIRE crossfades in place (body pixel-locked) while villagers MORPH.
         Design choreography: pitchfork trio holds mid-left; the redhead (v3) flees UP the centre
         path shrinking; the old man (v1) watches from the RIGHT house doorway then ducks into the
         window; the bonnet girl (v2) starts by the right house and flees off right in P2; the
         mustache kid (v7) runs in from bottom-centre in P2 and flees left; in P4 only the
         terrified drop-guy + v7 remain. Panels advance on an equal timer (see runVillageSeq). ---- */
  /* tavern2 = the same room, plus Trogdor BEHIND the board: a 95cqw copy of the huff-and-puff loop sits behind the
     wall (behind:true → mounted under the bg, over the sky) and rises so only his head shows in the window. */
  COMP.tavern2 = { bg:'tav-bg-2', snd:COMP.tavern.snd, layers: COMP.tavern.layers.concat([
    { key:'peek', vid:'tav-trogdor-fly', ar:1080/710, behind:true, puffIn:[.45, .34], through:{ bg:'tav-bg-2' }, css:'left:38cqw;top:calc(23cqh - 6.6cqw);width:24cqw' } ]) };   // Trogdor circling in the night sky behind the window (Seedance loop, keyed off its own static sky); pressable only where he shows through the hole → Catch Trogdor!   // 25% smaller; head centred in the window
  var VIL_DRAGON = 'right:17%;bottom:21cqh;width:min(46.5cqw,930px)';
  var VIL_DRAGON_FIRE = 'right:16.3cqw;bottom:calc(21cqh - 4.2cqw);width:56.9cqw';   // the 16:9 fire clip, body matched to the old loop's box (flame tip lands ~30cqw)   // 25% smaller than the traced size (the 1400px loop went soft at full width); right nudged so the mouth stays put   // Trogdor — body 25cqw; nudged 1% left so the tail clears the old man's window
  var VIL_TROGDOR_WELL = 'left:calc(28.6cqw - clamp(100cqw, 203.2cqh - 10.8cqw, 128cqw) * 0.286);bottom:calc(21cqh + 4.2cqw - clamp(100cqw, 203.2cqh - 10.8cqw, 128cqw) * 0.01750);width:clamp(100cqw, 203.2cqh - 10.8cqw, 128cqw)';   /* s139: the keyed whole-shot clip's crop, placed so its frame is the screen: full width, his feet on the old clip's ground line (21cqh + 4.2cqw) */
  var VIL_TW = function () { return ((window.jjLite && window.jjLite.on) || innerWidth < 900) ? 'vil-trogdor-well-s' : 'vil-trogdor-well'; };   /* two cuts of the same clip: 2240 px wide, and 1280 px for the lite level and narrow windows (it covers the whole stage, so its size is its cost) */
  window.addEventListener('jj:lite', function () { try { if (typeof curComp === 'string' && curComp.indexOf('village') === 0) return;   /* never under a village that is already playing: a change of clip would restart him */
    ['village1', 'village2', 'village3', 'village4'].forEach(function (n) { ((COMP[n] || {}).layers || []).forEach(function (L) { if (L.key === 'vildragon') L.vid = VIL_TW(); }); }); } catch (e) {} });
  var VIL_LATE = 1400;                                       // the village gets a few seconds of its own (villagers, chickens) before Trogdor lands
  function vil(dragon, p){
    /* kept simple on purpose: just the pitchfork guy and the scared curly kid.
       The dragon is the AI huff-and-puff loop (mouth opens ~2.8s in, then stays angry); the flame is
       its own layer on the SAME canvas geometry, scaled from the mouth — 0 in shot 1, growing to
       full in shot 2. Both use VIL_DRAGON. The flicker clip is registered so its thin neck sits in the mouth
       wedge and its pointed base hides inside the head; the origin (58.4% 46%) is the mouth interior. */
    var L = [
      /* the three chickens by the house: a Seedance one-shot that waits on its first frame — tap → squawk + a little hop, and they stay worried */
      /* one Seedance clip does it all now: he huffs (his own smoke puffs), the fire starts at 2.2s — the same beat the
         old two-layer flame used to grow on — and the blaze is held by a swung tail. Body sits where the old loop's did. */
      /* both are Seedance one-shots (turn-back at the very end trimmed, last stride held): the class in `run` lands on
         the first 'playing' event and drives the travel — pitchfork charges 3.1s then turns and flees; curly bolts at 1.45s */
      { key:'v5', vid:'vil-curly-run', ar:1, hold:true, late:VIL_LATE, lateShow:true, run:'fleeC2', snd:{ src:'vil-curly', vol:.1, once:true, fadeIn:300 }, css:p.v5 },   // his own yelp, kept quiet
      { key:'pitch', vid:'vil-pitch-run2', ar:1200/1000, hold:true, late:VIL_LATE, lateShow:true, run:'chargeP', css:p.pitch },   // foreground → after the kid
      { key:'chicks', vid:'vil-chickens', ar:898/592, hold:true, idle:true, tap:'chicks', cls:'prop', aura:{ glow:'rgba(255,214,120,.6)' }, css:'left:4%;bottom:27cqh;width:min(21cqw,420px);z-index:4' },   // the three by the house: wait on frame 0; tap → squawk + hop, they stay worried
      /* s139: the whole shot, keyed: the well at the front left from the first frame, Trogdor swooping in from the top right (baked into the clip), three blasts.
         It waits on its first frame (the well alone) and plays at VIL_LATE; its frame is the screen, so nothing in it meets an edge. Listed LAST → in front of the fleeing villagers. */
      { key:'vildragon', vid:VIL_TW(), ar:2.415, late:VIL_LATE, lateShow:true, loopBack:[15.9, 1.0417], cls:'twell', css:VIL_TROGDOR_WELL,
        snd:{ src:'vil-dragon-roar', vol:.275, once:true, fadeIn:1200, delay:0.8 } }
    ];
    return { bg:'vil-bg', snd:{ src:'villagers-shouting', vol:.175, loop:false, fadeIn:2000 }, layers:L };   // same bed across the village shots → it carries on
  }
  COMP.village1 = vil('vil-dragon-1', {        // smoke puff — old man at the LIT WINDOW (grounded, not floating on the wall)
    pitch:'left:calc(19% - 3.93cqw);bottom:calc(31cqh - 3.93cqw);width:min(18.86cqw,377px)', v5:'left:39.5%;bottom:33cqh;width:min(10cqw,200px)',
    v3:'left:37%;bottom:37cqh;width:min(8cqw,160px)',     v1:'left:75%;bottom:49cqh;width:min(10cqw,200px)',
    v2:'left:85%;bottom:33cqh;width:min(16cqw,320px)' });
  COMP.village2 = vil('vil-dragon-2', {        // the fire comes: flame grows from the mouth to full over ~4.5s
    flame:1,
    pitch:'left:calc(19% - 3.93cqw);bottom:calc(31cqh - 3.93cqw);width:min(18.86cqw,377px)', v5:'left:39.5%;bottom:33cqh;width:min(10cqw,200px)',
    v3:'left:43%;bottom:43cqh;width:min(6cqw,120px)',      v1:'left:76%;bottom:51cqh;width:min(8cqw,160px)',
    v7:'left:34%;bottom:24cqh;width:min(10cqw,200px)',     v2:'left:91%;bottom:27cqh;width:min(15cqw,300px)' });
  /* village3/4 = the same shot held: caption 4 still says comp:'village4', and it must NOT swap the video
     dragon for the static frame-4 art (that was the 'jumps up at the end' bug) — same keys, same art, flame stays full. */
  COMP.village3 = vil('vil-dragon-3', { flame:1,
    pitch:'left:calc(19% - 3.93cqw);bottom:calc(31cqh - 3.93cqw);width:min(18.86cqw,377px)', v5:'left:39.5%;bottom:33cqh;width:min(10cqw,200px)' });
  COMP.village4 = vil('vil-dragon-4', { flame:1,
    pitch:'left:calc(19% - 3.93cqw);bottom:calc(31cqh - 3.93cqw);width:min(18.86cqw,377px)', v5:'left:39.5%;bottom:33cqh;width:min(10cqw,200px)' });
  COMP._village4_old = { bg:'vil-bg', layers:[   // (unused) the traced frame-4 design, kept for reference
    { key:'dragon', src:'vil-dragon-4', css:VIL_DRAGON },
    { key:'pitchdrop', src:'vil-pitch-drop', cls:'idle', css:'left:12%;bottom:26cqh;width:min(13.5cqw,270px)' },
    { key:'v7', src:'vil-char-7', cls:'idle', css:'left:1%;bottom:26cqh;width:min(10cqw,200px)' }
  ]};   // key 'pitch' absent → the charging guy fades out as the terrified drop-guy fades in

  /* ---- captions: each = the line + the chapter it's on + word `triggers` that switch chapter ---- */
  var SCENES = [
    { text:"Many moons ago in a mysterious land there lived a cunning and evil beast who dwelled deep in the darkness....", comp:'cavern', triggers:[ { at:'beast', fx:'cam:trogdor' }, { at:'darkness', fx:'dark' }, { at:'darkness....', fx:'cam:settle' } ] },   // the cave dims, the sky broods   // cam: beats never pause the line (s96)
    { text:"He had a fascination for gold, jewels, treasures and anything that sparkled...but also something more sinister...the local villagers!",
      comp:'cavern', linger:4000,   /* s129 · C1: its hold a second shorter (the default linger is 5000) */ triggers:[ { at:'He had', fx:'cam:chest' }, { at:'jewels', fx:'chest' }, { at:'sparkled', fx:'cam:wide' }, { at:'sparkled', fx:'bedOut' }, { at:'more sinister', comp:'village1' }, { at:'local villagers', fx:'fx:stage=1@9500' } ] },   // s116: no camera move on 'the local villagers' (Joe: too many moves)   // s106: the first roof's fallback (it normally catches on his flame's clock)
    { text:"He had many names, Beast, Dragon, Death, but the one that put fear into the hearts of the locals was...Trogdor! Trogdor The Burninator...",
      comp:'village1', read:6500,   /* s151 · Joe: the burning village held 4 s after the line before the black (it went black as the name finished, too fast to read) */   /* s129 · C1: 2000 → 3000 (the black now starts when the line has finished, about 1.2 s later: the name still holds over it as long) */ linger:0, triggers:[ { at:'many names', fx:'fx:stage=2@5200' },   /* s116: read 500 → 2000 — the name holds 1.5s longer on the banner over the black before the tavern (Joe); no move on 'put fear' */ { at:'put fear', fx:'fx:stage=3@5200' }, { at:'Trogdor!', fx:'cam:slam' }, { at:'Trogdor!', fx:'bedOut' }, { at:'Burninator...', fx:'blackout@4000' } ] },   /* s129 · C1: was at 'Trogdor! Trogdor' (he left before the line had finished) */   // the scene goes to black under the banner; the tavern fades it back in   // shots advance on a timer (runVillageSeq); the shouting fades before the tavern
    { text:"Luckily one day a brave young man appeared to try and best this beast! His goal? To save the villagers and stop this evil...",
      comp:'village4', jumpComp:'tavern', triggers:[ { at:'Luckily one day', comp:'tavern' }, { at:'stop this evil', comp:'tavern2' }, { at:'brave young man', fx:'cam:joe' }, { at:'stop this evil', fx:'cam:window' }, { at:'evil...', fx:'cam:back' } ] },   // s101: the tavern camera (cam: beats carry no pause)   // Trogdor rises into the window ~2s before the tavern ends
    { text:"“Joe the Righteous” they called! And so he set off to find the beast...as nighttime fell he rode over rolling hills...and treacherous mountains...",
      comp:'tavern2', jumpComp:'woodland', read:2300, linger:0, triggers:[ { at:'Joe the Righteous', comp:'woodland' }, { at:'set off', fx:'barsIn' }, { at:'set off', fx:'cam:follow' }, { at:'find the beast...', pause:2000 },
        { at:'nighttime fell', comp:'hills' }, { at:'rolling hills...', pause:3600 }, { at:'treacherous mountains...', comp:'mountains', pause:4600 } ] },   // the line waits while he rides through each
    { text:"Then he encountered a forest, but something felt...different...enchanted perhaps...Joe decided to dismount to take in the woodland aura",
      comp:'forest1', linger:3000, triggers:[ { at:'perhaps...', pause:1200 }, { at:'dismount', comp:'forest2', fx:'barsOut' }, { at:'dismount', fx:'auraZoom' } ] },   // s108: the aura starts as he steps off the horse ('dismount', the clip ~5.5s), not on 'woodland aura' ~1.4s later; it still ends where it did (the next line's dip)
    { text:"He then saw something strange up ahead, a large stone structure like nothing he had ever seen before and in front of it a strange object...",
      comp:'forest3', linger:600 },   /* the walk-up starts the moment the aura line is done (Joe, 2026-09-23) */
    { text:"He leaned over to inspect. Instantly it began to shake and glow then Joe felt an energy flow through him. The ground began to vibrate...",
      comp:'forest4b', waitTap:'orb', noNext:true, triggers:[ { at:'shake and glow', fx:'orbGlow' }, { at:'shake and glow', fx:'cam:orb' }, { at:'energy flow', fx:'energy' }, { at:'vibrate...', fx:'quake', pause:1400 } ] },   /* the clip does the crouch, the jolt and its own cut to the close-up */
    { text:"The orb shot into the air and a glowing purple swirl appeared in the stone with runes lighting up! Joe was in shock...suddenly he felt a force...",
      comp:'forest5b', noNext:true, read:0, linger:0, triggers:[ { at:'The orb', fx:'orbUp' }, { at:'The orb', fx:'pullGo' }, { at:'felt a force...', pause:1800 } ] },   /* no NEXT: it runs straight on, the vortex never stops */   /* 'force': runes light and the vortex opens; he stands at its edge */   /* Joe stands shaking and glowing; the orb shoots up on its word; on 'force' the clip plays once through */
    { text:"Out of his control, he moves closer to the portal when suddenly... He vanishes into thin air...Nowhere to be seen...Is this the last of Joe?",
      comp:'forest5b', pullAt:6.5, triggers:[ { at:'suddenly...', pause:2600 } ],   /* pullAt: stepped straight into this line (Next / Previous / ?scene=), the clip was waiting on its first frame — no portal, no pull. It starts where the last line would have left it */   /* the clip, running since 'force' at 1.2x, drags him through this line and yanks him in on 'suddenly' */   /* dragged through the line, yanked in on 'suddenly' */   /* same shot: the clip is still running under this line */
      end:{ delay:1600, run:function(){ dimScene(function () { runScene(curScene + 1); }); } } },   // the cut-away: Joe tumbling through the vortex; then the forest dims and the last lines type over it
    { text:"Well, it is for now...Anyway this is Designer Joe...I heard he’s pretty magical too.",
      noNext:true, triggers:[ { at:'now...', fx:'black', pause:3000 } ],   // s105: cut to black on 'now...' (was 'anyway.'), same 3s hold; the portal's closing bloom rides the black (toBlack). Nothing else fires in this line: the evolution loader comes after the Replay CTA (endCta, s98)
      end:{ delay:1400, run:function(){ endCta(); } } },   // s98: a beat to read it, then this banner turns into the Replay Storytime CTA while the vortex spins; the loader follows (endCta)   // the fall runs under the whole line; 1s after it lands the tunnel goes to black, the loader eases in and the banner fades out together   // the banner goes a few seconds into the loader, before the loader ends
    /* ---- Part Two picks up here (the fight) ---- */
    { text:"He went toe to toe with the beast in an epic battle lasting for days, facing fire and all his might and...Wait a minute...I think this is the wrong story...",
      comp:'castle1', read:500, triggers:[ { at:'facing fire', comp:'castle2' }, { at:'Wait a minute', comp:'castle3' }, { at:'toe to toe', fx:'cam:battle' }, { at:'facing fire', fx:'cam:fire' }, { at:'Wait a minute', fx:'cam:wait' } ] },   // short read: less time on confused Joe
    { text:"Ah yes, sorry. Oops, that's a different Joe. This one is the story of a Designer...yet still an all great and powerful Designer...",
      comp:'castle4', triggers:[ { at:'sorry.', comp:'castle5' }, { at:'story of a Designer', comp:'castle6' }, { at:'Ah yes', fx:'cam:shrink' }, { at:'different Joe', fx:'cam:pants' }, { at:'story of a Designer', fx:'cam:designer' }, { at:'powerful Designer', fx:'cam:creep' } ],   // pants on 'sorry.', Designer on 'Designer'
      end:{ delay:600, run:function(){ setComp('castle13'); sched(fadeToBlack, 800); } } }   // the cheer has landed by now — straight out
  ];

  /* ---- timings (ms) ---- */
  var T = { revealAt:700, revealDur:2200, boxFadeAt:2700, menuDropAt:3000, firstTypeAt:3500,
    typeSpeed:30, pauseDot:200, pauseEllipsis:400, readPerChar:10, readMin:1200, linger:5000, bgFade:600, endFade:1500,
    villagePanel:2200 };   // the village's 2nd shot lands this long after the 1st (equal timing, not word-driven)

  /* the logo + menu stay hidden (beating Webflow's own nav styles) until the story drops them in */
  (function () { var st = document.createElement('style'); st.textContent = 'html:not(.jj-nav-in) .nav-logo-link,html:not(.jj-nav-in) .menu-container{opacity:0!important}' +
    /* s110: while the tale covers the page, My Story underneath is not drawn at all. Its whole page (13,600px of animated layers) was composited under
       the story; with the tale's own layers that came to ~85 screens of layers at 2x — past the GPU's tile budget, so tiles were dropped and the
       background showed through in blinks ('randomly seeing the background'). It comes back the moment the story lifts. */
    'html.jjst-cover #jjms,html.jjst-cover #jjms-bg,html.jjst-cover [id^="jjms-"],html.jjst-cover .jjms-eraghost{visibility:hidden!important;opacity:0!important;}';
    (document.head || document.documentElement).appendChild(st); document.documentElement.classList.add('jjst-cover'); })();
  /* ---- styles ---- */
  function gallopFrames(){                                   // 12 stops: a slow S-weave (x, tilt); the stride bob lives in the clip
    var k = '@keyframes jjst-gallop{';
    for (var i = 0; i <= 12; i++) { var a = Math.sin(Math.PI * 2 * i / 12);
      k += (i / 12 * 100).toFixed(2) + '%{transform:translate(' + (a * 7).toFixed(2) + '%,0) rotate(' + (a * 2.4).toFixed(2) + 'deg);}'; }
    return k + '}';
  }
  var CSS =
  '#jjst{position:fixed;inset:0;z-index:2000;overflow:hidden;background:#0b1b2e;font-family:\'Joes Journey Headline\',sans-serif;}'+
  '#jjst-pane{display:contents;}'+'#jjst.lb{background:#04060b;}'+'#jjst.lb #jjst-pane{display:block;position:absolute;overflow:hidden;container-type:size;z-index:3;width:min(100cqw, 220cqh);height:calc(min(100cqw, 220cqh) * .5625);left:calc((100cqw - min(100cqw, 220cqh)) / 2);top:calc((100cqh - calc(min(100cqw, 220cqh) * .5625)) / 2);}'+'@media (min-aspect-ratio:16/9){#jjst.lb #jjst-pane{top:calc((100cqh - calc(min(100cqw, 220cqh) * .5625)) * .75);}}'+'#jjst-lbf{display:none;}'+'@media (max-aspect-ratio:1776/1000){#jjst.lb #jjst-lbf{display:block;position:absolute;left:0;right:0;top:calc((100cqh - calc(min(100cqw, 220cqh) * .5625)) / 2);height:calc(min(100cqw, 220cqh) * .5625);z-index:4;pointer-events:none;background:linear-gradient(to bottom,#04060b 0,rgba(4,6,11,0) 4.5%,rgba(4,6,11,0) 95.5%,#04060b 100%);}}'+'@media (min-aspect-ratio:220/100){#jjst.lb #jjst-lbf{display:block;position:absolute;top:0;bottom:0;left:calc((100cqw - min(100cqw, 220cqh)) / 2);width:min(100cqw, 220cqh);z-index:4;pointer-events:none;background:linear-gradient(to right,#04060b 0,rgba(4,6,11,0) 3%,rgba(4,6,11,0) 97%,#04060b 100%);}}'+
  '#jjst-bgwrap{position:absolute;inset:0;overflow:hidden;}'+
  '#jjst-sky{position:absolute;top:0;left:0;width:100%;height:auto;display:block;transition:filter 1.8s ease;}'+
  '#jjst.moody #jjst-sky{filter:brightness(.5) saturate(.65) contrast(1.12);}#jjst.moody #jjst-night{opacity:.5;}'+   // "…deep in the darkness": the sky broods
  '#jjst-dark{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 1.8s ease;background:radial-gradient(ellipse at 50% 62%,rgba(4,8,22,.18) 0%,rgba(3,6,18,.55) 62%,rgba(2,4,14,.78) 100%);}'+
  '#jjst-dark.on{opacity:1;}'+
  '#jjst-paused{position:absolute;inset:0;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;background:rgba(2,4,14,.42);opacity:0;transition:opacity .35s ease;}'+
  '#jjst.user-paused #jjst-paused{opacity:1;pointer-events:auto;z-index:16;cursor:default;}#jjst.user-paused #jjst-ctl{z-index:17;}'+   // s121 · R2: the pause card swallows every press on the stage, the bubbles, the prompts and the banner; only the transport sits over it
  '#jjst .jjst-trogfire{position:absolute;border-radius:50%;pointer-events:none;opacity:0;background:radial-gradient(closest-side,#fff6c8,#ffd35a 22%,#ff8a2a 46%,rgba(255,70,24,.6) 68%,rgba(255,40,10,0));}'+
  '#jjst-paused span{font-family:"Sketch Gothic School",Georgia,serif;font-size:clamp(56px,9cqw,150px);color:#fff;display:block;line-height:1.15;letter-spacing:.06em;text-shadow:0 4px 0 rgba(0,0,0,.6),0 0 26px rgba(255,214,120,.55),0 0 60px rgba(255,197,49,.35);animation:jjstPausedBreathe 2.6s ease-in-out infinite;}'+
  '#jjst-paused{padding-bottom:12cqh;box-sizing:border-box;}#jjst-paused p{margin:2.4cqh 0 0;max-width:min(720px,84cqw);text-align:center;color:#fff;font-size:clamp(16px,1.5cqw,24px);line-height:1.45;opacity:.9;text-shadow:0 2px 6px rgba(0,0,0,.7);}'+
  '@keyframes jjstPausedBreathe{0%,100%{opacity:.85;scale:1;}50%{opacity:1;scale:1.03;}}'+   // over the cave board, under the chest / bones / Trogdor
  '#jjst-night{position:absolute;inset:0;opacity:0;transition:opacity .9s ease;pointer-events:none;}'+   // sits between the sky and the boards (DOM order)
  '#jjst-night.on{opacity:1;}#jjst-night svg{width:100%;height:100%;display:block;}#jjst-night.over svg{height:62%;}'+   /* s121: the over sky keeps its band layout but sits under the board like the others (the hills / mountain boards have a transparent sky: its stars showed on the mountain) */   // over a board: the sky band only
  '#jjst-night .jjst-moonw{transform-box:fill-box;transform-origin:50% 50%;animation:jjstMoonW 7s ease-in-out infinite;}'+
  '#jjst-night .jjst-mpulse{animation:jjstMPulse 7s ease-in-out infinite;}'+
  '#jjst-night .jjst-tw{animation:jjstTw var(--d,3s) ease-in-out var(--o,0s) infinite;filter:drop-shadow(0 0 4px rgba(255,255,255,.95)) drop-shadow(0 0 10px rgba(199,231,255,.7));}'+
  '#jjst-night .jjst-wh{transform-box:fill-box;transform-origin:50% 50%;animation:jjstWh var(--d,18s) linear infinite;filter:drop-shadow(0 0 5px rgba(255,255,255,.8));}'+
  '#jjst-night .jjst-moonw image{filter:drop-shadow(0 0 14px rgba(255,255,255,.9)) drop-shadow(0 0 40px rgba(199,231,255,.6));}'+
  '@keyframes jjstWh{to{transform:rotate(360deg);}}'+
  '@keyframes jjstMoonW{0%,100%{transform:scale(.92);}50%{transform:scale(1.16);}}'+
  '@keyframes jjstMPulse{0%,100%{opacity:.3;}50%{opacity:1;}}'+
  '@keyframes jjstTw{0%,100%{opacity:.2;transform:scale(.85);}50%{opacity:1;transform:scale(1.25);}}'+
  '#jjst-night circle.jjst-tw,#jjst-night image.jjst-tw{transform-box:fill-box;transform-origin:50% 50%;}'+
  '#jjst .jjst-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;will-change:opacity;}#jjst .jjst-bg.shift{width:calc(100% + 7cqw);max-width:none;}'+
  '#jjst-layers{position:absolute;inset:0;z-index:3;pointer-events:none;}'+
  '#jjst .jjst-layer,#jjst-bgwrap .jjst-layer{position:absolute;height:auto;display:block;will-change:transform,opacity;}'+
  /* ---- video layers + their aura ---- */
  '#jjst video.jjst-layer,#jjst-bgwrap video.jjst-layer{object-fit:contain;background:transparent;pointer-events:none;}'+
  '#jjst .jjst-mote.halo{animation:jjstHalo var(--hd,4s) linear infinite;}#jjst .jjst-mote.gone{opacity:0!important;transition:opacity 1.2s ease!important;}@keyframes jjstHalo{from{transform:translate(var(--hx),var(--hy)) rotate(var(--ha)) translateX(var(--hr)) scaleY(.6) scale(.7);}to{transform:translate(var(--hx),var(--hy)) rotate(calc(var(--ha) + 360deg)) translateX(var(--hr)) scaleY(.6) scale(.7);}}'+
  '#jjst .jjst-tapme{position:absolute;z-index:6;translate:-50% -50%;border-radius:50%;border:0;background:transparent;cursor:pointer;padding:0;}#jjst .jjst-tapme::before,#jjst .jjst-tapme::after{content:"";position:absolute;inset:0;border-radius:50%;background:radial-gradient(closest-side,rgba(255,214,120,0) 58%,rgba(255,222,140,.75) 76%,rgba(255,214,120,.22) 88%,rgba(255,214,120,0) 100%);animation:jjstTapRing 1.6s ease-out infinite;pointer-events:none;}#jjst .jjst-tapme::after{animation-delay:.8s;}@keyframes jjstTapRing{from{transform:scale(.55);opacity:1;}to{transform:scale(1.35);opacity:0;}}'+
  '#jjst .jjst-tapme span{position:absolute;left:50%;bottom:calc(100% + 8px);translate:-50% 0;white-space:nowrap;padding:.4em .9em;border-radius:999px;background:rgba(20,12,4,.72);color:#ffd978;font:700 clamp(12px,1cqw,16px)/1 inherit;letter-spacing:.04em;animation:jjstTapBob 1.4s ease-in-out infinite alternate;}@keyframes jjstTapBob{to{transform:translateY(-5px);}}'+
  /* s105 · the orb (forest4b): a breathing halo behind it while it waits to be pressed; hover lifts it and swells the halo; a press pops it and throws a
     burst of four-point sparkles and a soft ring; the gold bloom (jjst-bloom) carries the tale into the next shot. Radial light only, no edges. */
  '#jjst .jjst-puff{position:absolute;width:0;height:0;pointer-events:none;}#jjst .jjst-puff i{position:absolute;left:0;top:0;border-radius:50%;display:block;}'+
  '#jjst .jjst-puff .fl{mix-blend-mode:screen;background:radial-gradient(closest-side,rgba(255,244,200,.95),rgba(255,170,70,.85) 30%,rgba(255,100,40,.4) 62%,rgba(255,90,30,0));}'+
  '#jjst .jjst-puff .sm{background:radial-gradient(closest-side,rgba(96,86,98,.9),rgba(80,72,86,.55) 45%,rgba(70,64,78,.18) 75%,rgba(70,64,78,0));}#jjst .jjst-puff .em{background:radial-gradient(closest-side,#fff3c4,rgba(255,160,60,.9) 45%,rgba(255,120,40,0));mix-blend-mode:screen;}'+
  '#jjst .jjst-orbhalo{position:absolute;pointer-events:none;mix-blend-mode:screen;border-radius:50%;background:radial-gradient(closest-side,rgba(255,236,170,.85) 0%,rgba(255,206,100,.5) 34%,rgba(255,180,70,.16) 66%,rgba(255,180,70,0) 100%);opacity:0;transition:opacity .6s ease,scale .45s cubic-bezier(.34,1.56,.64,1);animation:jjstOrbHalo 2.4s ease-in-out infinite;}'+
  '#jjst .jjorb{position:absolute;pointer-events:none;}#jjst .jjorb>*{position:absolute;display:block;max-width:none;}#jjst .jjorb .sh{opacity:0;transition:opacity .6s ease;}#jjst .jjorb .sh.on{opacity:1;}'+
  '#jjst .jjorb .v{opacity:0;object-fit:fill;}#jjst .jjorb .v.on{opacity:1;}#jjst .jjorb-lt{position:absolute;display:block;max-width:none;pointer-events:none;mix-blend-mode:screen;object-fit:fill;opacity:0;}#jjst .jjorb-lt.on{opacity:1;}#jjst .jjorb-lt.gl{transition:opacity .9s ease;}#jjst .jjst-layer.jjorb-hid{visibility:hidden!important;}'+
  '#jjst .jjorb .v.orbwait{transition:transform .4s cubic-bezier(.34,1.56,.64,1);transform-origin:50% 60%;}#jjst .jjorb .v.orbwait.orbhov{transform:translateY(-.8cqw) scale(1.08);}'+
  '#jjst .jjst-orbhalo.on{opacity:.75;}#jjst .jjst-orbhalo.hov{opacity:1;scale:1.22;animation-duration:1.3s;}'+
  '@keyframes jjstOrbHalo{0%,100%{transform:scale(.88);}50%{transform:scale(1.1);}}'+
  '@media (prefers-reduced-motion:reduce){#jjst .jjst-orbhalo{animation:none;}#jjst .jjst-layer.orbwait.orbhov{transform:none;}}'+
  '#jjst .jjst-layer.orbwait{transition:transform .4s cubic-bezier(.34,1.56,.64,1);transform-origin:50% 60%;}#jjst .jjst-layer.orbwait.orbhov{transform:translateY(-.8cqw) scale(1.08);}'+
  '#jjst .jjst-spk{position:absolute;left:0;top:0;width:var(--s);height:var(--s);margin:calc(var(--s) / -2) 0 0 calc(var(--s) / -2);pointer-events:none;z-index:10;background:radial-gradient(circle,#fff 0 12%,rgba(255,255,255,0) 30%),radial-gradient(closest-side,rgba(255,244,200,.95),rgba(255,214,120,0)) center/100% 16% no-repeat,radial-gradient(closest-side,rgba(255,244,200,.95),rgba(255,214,120,0)) center/16% 100% no-repeat;filter:drop-shadow(0 0 6px rgba(255,220,140,.9));}'+
  '#jjst .jjst-spk.ring{background:radial-gradient(closest-side,rgba(255,230,160,0) 52%,rgba(255,230,160,.8) 70%,rgba(255,200,110,.3) 84%,rgba(255,200,110,0) 100%);filter:none;}'+
  '#jjst .jjst-bloom{position:absolute;inset:0;z-index:10;pointer-events:none;overflow:hidden;}#jjst .jjst-bloom i{position:absolute;display:block;opacity:0;}#jjst .jjst-bloom .wash{inset:0;}'+
  '#jjst .jjst-bloom .core{border-radius:50%;mix-blend-mode:screen;}#jjst .jjst-bloom.portal .wash{mix-blend-mode:screen;}'+
  '#jjst .jjst-vortex{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:4;opacity:0;transition:opacity .7s ease;pointer-events:none;}#jjst .jjst-vortex.on{opacity:1;}'+
  '#jjst .jjst-layer.swoop{animation:jjstSwoop 1.1s cubic-bezier(.2,.8,.3,1) both;transform-origin:70% 60%;}@keyframes jjstSwoop{0%{transform:translate(38cqw,-55cqh) scale(.35) rotate(-14deg);opacity:0;}25%{opacity:1;}80%{transform:translate(-1cqw,1cqh) scale(1.02) rotate(2deg);animation-timing-function:cubic-bezier(.45,0,.55,1);}100%{transform:none;}}'+
  '#jjst.rumble #jjst-bgwrap,#jjst.rumble #jjst-layers{animation:jjstJitter .16s steps(2) infinite;}#jjst .jjst-layer.archback{opacity:0!important;transition:opacity 1.6s ease!important;}#jjst .jjst-layer.archback.on{opacity:1!important;}@keyframes jjstJitter{0%{translate:0 0;}25%{translate:.18cqw -.1cqw;}50%{translate:-.14cqw .12cqw;}75%{translate:.1cqw .16cqw;}100%{translate:-.16cqw -.12cqw;}}'+
  '#jjst .jjst-layer.orbfly{transition:left 3s cubic-bezier(.25,.1,.2,1),bottom 3s cubic-bezier(.25,.1,.2,1),width 3s ease!important;}#jjst .jjst-layer.orbdrop{transition:bottom .9s cubic-bezier(.5,0,1,.6),translate .9s cubic-bezier(.5,0,1,.6),filter .8s ease!important;}'+
  '#jjst video.jjst-layer.hero{pointer-events:auto;cursor:pointer;transform-origin:50% 100%;transition:scale .4s cubic-bezier(.34,1.56,.64,1);}'+
  '#jjst video.jjst-layer.hero.hov{scale:1.04;}'+
  '#jjst .jjst-aura,#jjst-bgwrap .jjst-aura{position:absolute;pointer-events:none;z-index:2;}'+
  '#jjst .jjst-aura .aglow{position:absolute;left:-12%;top:-8%;width:124%;height:116%;border-radius:50%;'+
    'background:radial-gradient(ellipse at 50% 58%,var(--gc,rgba(255,255,255,.4)) 0%,transparent 62%);filter:blur(18px);'+
    'opacity:0;transform:scale(.92);transition:opacity .45s ease,transform .45s ease;}'+
  '#jjst .jjst-aura.hov .aglow{opacity:1;transform:scale(1);}'+
  '@font-face{font-family:"Sketch Gothic School";src:url("' + GB + 'sketch-gothic-school.woff2") format("woff2"),url("' + GB + 'sketch-gothic-school.ttf") format("truetype");font-display:swap;}'+
  '#jjst .jjst-aura .alabel{position:absolute;left:50%;top:-4%;transform:translate(-50%,8px);padding:6px 16px;border-radius:999px;'+
    'background:rgba(10,14,26,.72);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:clamp(12px,1.05cqw,17px);font-weight:700;letter-spacing:.04em;white-space:nowrap;'+
    'opacity:0;transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);}'+
  '#jjst .jjst-aura.hov .alabel{opacity:1;transform:translate(-50%,0);}'+
  '#jjst .jjst-aura.lit .aglow{opacity:1;transform:scale(1);}'+
  '#jjst .jjst-layer.pop{animation:jjstPop .55s cubic-bezier(.34,1.56,.64,1);transform-origin:50% 100%;}'+
  '#jjst .jjst-layer.hearthy{transform-origin:50% 100%;transition:transform .35s cubic-bezier(.34,1.56,.64,1);}#jjst .jjst-layer.hearthy.warm{transform:scale(1.14);}'+
  /* s105 · the hearth: a back flame (mirrored, out of phase) and a glow inside the fireplace that flickers with it — soft radial light only */
  '#jjst .jjst-layer.hearthback{scale:-1 1;filter:brightness(.9) saturate(1.08);}'+
  '#jjst .jjst-aura.hearth .aglow{opacity:1;transform:none;left:-30%;top:-24%;width:160%;height:132%;mix-blend-mode:screen;filter:blur(14px);background:radial-gradient(ellipse 50% 50% at 50% 66%,rgba(255,196,110,.78) 0%,rgba(255,140,60,.42) 38%,rgba(255,110,50,.12) 66%,rgba(255,110,50,0) 100%);animation:jjstHearth 2.3s ease-in-out infinite;}'+
  '#jjst .jjst-aura.hearth.warm .aglow{animation-duration:1.1s;}'+
  '@keyframes jjstHearth{0%,100%{opacity:.82;scale:1;}13%{opacity:.62;scale:.96 .94;}27%{opacity:.95;scale:1.03 1.06;}41%{opacity:.7;scale:.98;}58%{opacity:1;scale:1.04 1.08;}74%{opacity:.74;scale:.97;}88%{opacity:.9;scale:1.01 1.03;}}'+
  '@media (prefers-reduced-motion:reduce){#jjst .jjst-aura.hearth .aglow{animation:none;opacity:.85;}}'+
  'body #jjst.jj-mo>:not(.jjst-ov),body.jj-modal-open #jj-sound-btn,body.jj-modal-open #jj-sound-mist{pointer-events:none!important;}'+   /* s132: (.jj-mo on #jjst = body.jj-modal-open, mirrored: moSync. Written `body.jj-modal-open #jjst>:not(…)` this rule re-styled every element of the page at each flip) */   // achievements / Storytime prompt open → the scene and page chrome sleep while the active overlay remains usable
  '#jjst .jjst-layer.sky{animation:jjst-float 7s ease-in-out infinite;transition:scale .35s ease,filter .3s ease;z-index:2;}#jjst .jjst-layer.sky:hover{scale:1.12;}'+
  '#jjst .jjst-layer.sky.gone{opacity:0;translate:28cqw -45cqh;scale:.25;transition:translate 1.1s cubic-bezier(.5,0,.8,1),scale 1.1s cubic-bezier(.5,0,.8,1),opacity .5s ease .5s;pointer-events:none!important;}'+
  '@keyframes jjst-float{0%,100%{transform:translate(0,0) rotate(-3deg);}50%{transform:translate(1.2cqw,-2.4cqh) rotate(3deg);}}'+
  '#jjst .jjst-layer.portal{z-index:0;filter:drop-shadow(0 0 40px rgba(150,60,255,.35));animation:jjstPortal 4s ease-in-out infinite;}@keyframes jjstPortal{0%,100%{filter:drop-shadow(0 0 30px rgba(150,60,255,.3));}50%{filter:drop-shadow(0 0 70px rgba(190,90,255,.6));}}'+
  '#jjst .jjst-layer.orbit{z-index:0;pointer-events:none!important;animation:jjstOrbit 14s linear infinite;filter:drop-shadow(0 0 16px rgba(255,190,80,.55));}'+
  '#jjst .jjst-layer.orbit.drift{animation:jjstDrift 24s ease-in-out infinite,jjstOrbPulse 2.4s ease-in-out infinite;}'+   // the forest's orb: a slow wander round the shot (never out of it), pulsing
  '@keyframes jjstDrift{0%,100%{translate:0 0;}16%{translate:9cqw -7cqh;}33%{translate:20cqw 3cqh;}50%{translate:30cqw -9cqh;}66%{translate:16cqw -14cqh;}83%{translate:-6cqw -5cqh;}}'+
  '@keyframes jjstOrbPulse{0%,100%{scale:1;filter:drop-shadow(0 0 14px rgba(255,190,80,.5));}50%{scale:1.1;filter:drop-shadow(0 0 30px rgba(255,200,90,.95));}}'+
  '#jjst .jjst-layer.orbrise{animation:jjstOrbSpin 5s linear infinite,jjstOrbPulse 2.4s ease-in-out infinite,jjstDrift 24s ease-in-out 3.2s infinite;}@keyframes jjstOrbSpin{to{rotate:360deg;}}'+
  '@keyframes jjstOrbit{0.00%{translate:calc(var(--pw) * 0.0000) calc(var(--pw) * -0.0000)}3.12%{translate:calc(var(--pw) * 0.0842) calc(var(--pw) * -0.0546)}6.25%{translate:calc(var(--pw) * 0.1556) calc(var(--pw) * -0.1072)}9.38%{translate:calc(var(--pw) * 0.2033) calc(var(--pw) * -0.1556)}12.50%{translate:calc(var(--pw) * 0.2200) calc(var(--pw) * -0.1980)}15.62%{translate:calc(var(--pw) * 0.2033) calc(var(--pw) * -0.2328)}18.75%{translate:calc(var(--pw) * 0.1556) calc(var(--pw) * -0.2587)}21.88%{translate:calc(var(--pw) * 0.0842) calc(var(--pw) * -0.2746)}25.00%{translate:calc(var(--pw) * 0.0000) calc(var(--pw) * -0.2800)}28.12%{translate:calc(var(--pw) * -0.0842) calc(var(--pw) * -0.2746)}31.25%{translate:calc(var(--pw) * -0.1556) calc(var(--pw) * -0.2587)}34.38%{translate:calc(var(--pw) * -0.2033) calc(var(--pw) * -0.2328)}37.50%{translate:calc(var(--pw) * -0.2200) calc(var(--pw) * -0.1980)}40.62%{translate:calc(var(--pw) * -0.2033) calc(var(--pw) * -0.1556)}43.75%{translate:calc(var(--pw) * -0.1556) calc(var(--pw) * -0.1072)}46.88%{translate:calc(var(--pw) * -0.0842) calc(var(--pw) * -0.0546)}50.00%{translate:calc(var(--pw) * -0.0000) calc(var(--pw) * -0.0000)}53.12%{translate:calc(var(--pw) * 0.0842) calc(var(--pw) * 0.0546)}56.25%{translate:calc(var(--pw) * 0.1556) calc(var(--pw) * 0.1072)}59.38%{translate:calc(var(--pw) * 0.2033) calc(var(--pw) * 0.1556)}62.50%{translate:calc(var(--pw) * 0.2200) calc(var(--pw) * 0.1980)}65.62%{translate:calc(var(--pw) * 0.2033) calc(var(--pw) * 0.2328)}68.75%{translate:calc(var(--pw) * 0.1556) calc(var(--pw) * 0.2587)}71.88%{translate:calc(var(--pw) * 0.0842) calc(var(--pw) * 0.2746)}75.00%{translate:calc(var(--pw) * 0.0000) calc(var(--pw) * 0.2800)}78.12%{translate:calc(var(--pw) * -0.0842) calc(var(--pw) * 0.2746)}81.25%{translate:calc(var(--pw) * -0.1556) calc(var(--pw) * 0.2587)}84.38%{translate:calc(var(--pw) * -0.2033) calc(var(--pw) * 0.2328)}87.50%{translate:calc(var(--pw) * -0.2200) calc(var(--pw) * 0.1980)}90.62%{translate:calc(var(--pw) * -0.2033) calc(var(--pw) * 0.1556)}93.75%{translate:calc(var(--pw) * -0.1556) calc(var(--pw) * 0.1072)}96.88%{translate:calc(var(--pw) * -0.0842) calc(var(--pw) * 0.0546)}100.00%{translate:calc(var(--pw) * -0.0000) calc(var(--pw) * 0.0000)}}'+
  '#jjst img.jjst-layer[data-cursor="hover"]{transition:filter .25s ease,scale .25s ease;}#jjst img.jjst-layer[data-cursor="hover"]:hover{scale:1.04;filter:brightness(1.1) drop-shadow(0 0 18px rgba(255,214,120,.75));}'+   // every pressable still (the chest) answers the pointer (s82)
  '#jjst .jjst-layer.portal:hover,#jjst .jjst-layer.portal.hov{filter:drop-shadow(0 0 60px rgba(200,110,255,.8));}#jjst .jjst-layer.nope{animation:jjstNope .5s ease;}@keyframes jjstNope{0%,100%{translate:0 0;}25%{translate:-6px 0;filter:drop-shadow(0 0 60px rgba(255,0,245,.9));}75%{translate:6px 0;}}#jjst .jjst-layer.lit{animation:none;filter:drop-shadow(0 0 90px rgba(255,80,255,.95)) brightness(1.15);}'+
  '#jjst .jjst-layer.prop{transition:filter .3s ease,opacity .6s ease;}#jjst .jjst-layer.prop:hover{filter:drop-shadow(0 0 10px rgba(255,240,180,.95)) drop-shadow(0 0 28px rgba(255,220,120,.6));}'+
  '#jjst .jjst-layer.taken{animation:jjstTaken .7s cubic-bezier(.4,0,.7,1) forwards!important;pointer-events:none!important;}'+
  '@keyframes jjstTaken{0%{translate:0 0;scale:1;rotate:0deg;opacity:1;}30%{translate:0 -3cqh;scale:1.12;rotate:-8deg;opacity:1;}100%{translate:0 -12cqh;scale:.25;rotate:30deg;opacity:0;}}'+
  '@keyframes jjstPop{0%{scale:1;}40%{scale:1.07 .95;}70%{scale:.98 1.03;}100%{scale:1;}}'+
  /* nostril smoke: a soft puff that drifts up-left, grows and thins */
  '#jjst .jjst-aura .puff{position:absolute;width:5.5%;aspect-ratio:1;border-radius:50%;margin:-2.75% 0 0 -2.75%;'+
    'background:radial-gradient(circle,rgba(226,232,240,.85) 0%,rgba(200,208,220,.55) 45%,rgba(200,208,220,0) 70%);'+
    'animation:jjstPuff 2.6s ease-out forwards;}'+
  '@keyframes jjstPuff{0%{opacity:0;transform:translate(0,0) scale(.4);}18%{opacity:.9;}100%{opacity:0;transform:translate(-14%,-140%) scale(1.9);}}'+
  /* coin glints: a four-point sparkle that blinks in and out */
  '#jjst .jjst-aura .glint{position:absolute;width:3.2%;aspect-ratio:1;margin:-1.6% 0 0 -1.6%;'+
    'background:radial-gradient(circle,#fff 0%,rgba(255,255,255,.9) 18%,rgba(255,255,255,0) 22%),'+
    'linear-gradient(#fff,#fff) center/100% 12% no-repeat,linear-gradient(#fff,#fff) center/12% 100% no-repeat;'+
    'animation:jjstGlint .9s ease-in-out forwards;filter:drop-shadow(0 0 6px rgba(255,255,255,.9));}'+
  '@keyframes jjstGlint{0%{opacity:0;transform:scale(.2) rotate(0deg);}50%{opacity:1;transform:scale(1) rotate(45deg);}100%{opacity:0;transform:scale(.2) rotate(90deg);}}'+
  '@keyframes jjst-scared{0%,100%{transform:rotate(-2.2deg);}50%{transform:rotate(2.2deg);}}'+   // tremble in place — no lift, feet stay planted
  '.jjst-layer.scared{animation:jjst-scared .5s ease-in-out infinite;transform-origin:center bottom;}'+
  '@keyframes jjst-idle{0%,100%{transform:scaleX(var(--flip,1)) scaleY(1);}50%{transform:scaleX(var(--flip,1)) scaleY(.965);}}'+   // grounded squash bob (origin bottom) — nothing floats
  '.jjst-layer.idle{animation:jjst-idle 2.5s ease-in-out infinite;transform-origin:center bottom;}'+
  '.jjst-layer.gallop{animation:jjst-gallop 2.8s ease-in-out infinite;transform-origin:center bottom;}'+
  '.jjst-layer.chargeP{animation:jjstChargeP 8.5s linear forwards;transform-origin:50% 100%;}'+     // 0–3.1s charge right, then turn + run up the path, tiny and gone by 8.5s
  '@keyframes jjstChargeP{0%{transform:translate(0,0) scale(1);opacity:1;}36%{transform:translate(1.6cqw,0) scale(1);opacity:1;}75%{opacity:1;}100%{transform:translate(17cqw,-6cqh) scale(.28);opacity:0;}}'+
  '.jjst-layer.fleeC{animation:jjstFleeC 7s linear forwards;transform-origin:50% 100%;}'+           // frozen 1.45s, then bolts first
  '#jjst .jjst-layer.poof{animation:jjstPoof 2s ease-out forwards;transform-origin:50% 100%;}'+   // smoke: bursts up, hangs, drifts off (the chest owns .pop)
  '@keyframes jjstPoof{0%{transform:scale(.15);opacity:0;}14%{transform:scale(1.06);opacity:1;}22%{transform:scale(1);}60%{transform:scale(1) translateY(0);opacity:1;}100%{transform:scale(.7) translateY(-25%);opacity:0;}}'+           // frozen 1.45s, then bolts first
  '@keyframes jjstFleeC{0%,21%{transform:translate(0,0) scale(1);opacity:1;}75%{opacity:1;}100%{transform:translate(13cqw,-6cqh) scale(.28);opacity:0;}}'+
  '.jjst-layer.fleeC2{animation:jjstFleeC2 7s linear forwards;transform-origin:50% 100%;}'+         // s139: the kid from his new spot right of the well: frozen 1.45s, then away up the path, most of the way in the first two seconds
  '@keyframes jjstFleeC2{0%,21%{transform:translate(0,0) scale(1);opacity:1;}34%{transform:translate(.8cqw,-2.6cqh) scale(.66);}48%{transform:translate(1.6cqw,-4.4cqh) scale(.44);opacity:1;}75%{opacity:1;}100%{transform:translate(2.6cqw,-6cqh) scale(.28);opacity:0;}}'+
  '@media (max-aspect-ratio:146/100){#jjst:not(.lb) .jjst-layer.twell{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 14%);mask-image:linear-gradient(to bottom,transparent 0,#000 14%);}}'+   // s139: a tall window: the clip cannot reach the top of the screen there, so its top edge melts away
  gallopFrames()+
  '.jjst-layer.morph{transition:left .8s cubic-bezier(.4,0,.2,1),right .8s cubic-bezier(.4,0,.2,1),bottom .8s cubic-bezier(.4,0,.2,1),width .8s cubic-bezier(.4,0,.2,1),opacity .55s ease;}'+
  '@keyframes jjstPan{from{transform:scale(1.2) translateX(8.5%);}to{transform:scale(1.2) translateX(-8.5%);}}'+
  '#jjst .jjst-bg.pan{animation:jjstPan 15s linear infinite alternate;}'+                                   // the land slides against the ride                                   // the land slides against the ride
  '@keyframes jjstShake{0%,100%{translate:0 0;}25%{translate:3px -2px;}50%{translate:-3px 1px;}75%{translate:2px 2px;}}'+
  '.jjst-layer.glow{filter:drop-shadow(0 0 10px #ffd76a) drop-shadow(0 0 26px rgba(255,215,106,.75)) brightness(1.15);animation:jjstShake .11s linear infinite;transition:filter .6s ease;}'+
  '@keyframes jjstQuake{0%,100%{translate:0 0;}20%{translate:-6px 4px;}40%{translate:6px -3px;}60%{translate:-4px -4px;}80%{translate:4px 3px;}}'+
  '#jjst.quake #jjst-bgwrap,#jjst.quake #jjst-layers{animation:jjstQuake .45s ease-in-out infinite;}'+   // holds until the scene moves on (runScene clears it)
  '#jjst .jjst-layer.cut{transition:none!important;}'+
  /* forest spirits: the whole head tilts slowly on its neck, holds, tilts the other way, then a quick rattle — kodama */
  '@keyframes jjstKodama{0%,100%{rotate:0deg;}12%{rotate:-7deg;}30%{rotate:-7deg;}42%{rotate:6deg;}58%{rotate:6deg;}61%{rotate:-9deg;}63%{rotate:9deg;}65%{rotate:-8deg;}67%{rotate:7deg;}69%{rotate:-5deg;}71%{rotate:3deg;}74%{rotate:0deg;}}'+
  '#jjst .jjst-layer.kodama{transform-origin:50% 88%;animation:jjstKodama 7s ease-in-out infinite;}'+
  /* mushrooms: a breathing glow of their own colour, and spores drifting up off the cap */
  '#jjst .jjst-layer.mush{animation:jjstMush 3.2s ease-in-out infinite;}@keyframes jjstMush{0%,100%{filter:drop-shadow(0 0 .35cqw var(--mg,rgba(200,150,255,.55))) brightness(1.05);}50%{filter:drop-shadow(0 0 1.1cqw var(--mg,rgba(200,150,255,.95))) brightness(1.22);}}'+
  '#jjst .jjst-aura.spores .aglow{opacity:.9;transform:scale(1.15);animation:jjstMushGlow 3.2s ease-in-out infinite;}@keyframes jjstMushGlow{0%,100%{opacity:.55;}50%{opacity:1;}}'+
  '#jjst .jjst-aura .spore,#jjst-cap .jjst-capdeco .spore{position:absolute;left:var(--x);top:var(--y,35%);width:var(--s,.32cqw);height:var(--s,.32cqw);border-radius:50%;background:#fff;box-shadow:0 0 .5cqw .12cqw var(--gc,rgba(200,150,255,.9));opacity:0;animation:jjstSpore var(--d,4s) ease-in-out var(--dl,0s) infinite;pointer-events:none;}'+
  '@keyframes jjstSpore{0%{opacity:0;transform:translate(0,0) scale(.5);}18%{opacity:1;}60%{opacity:.85;transform:translate(var(--sx,.6cqw),-3.4cqw) scale(1);}100%{opacity:0;transform:translate(calc(var(--sx,.6cqw) * -1),-6.5cqw) scale(.6);}}'+
  /* the fall through the portal (s90): plays under a 75% black between the cut to black and the To-be-continued loader.
     Big shapes only — a spinning swirl, rings rushing out, streaks and runes flying past, Joe tumbling away to a point. */
  '#jjst-tunnel .vx{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}#jjst-tunnel{position:absolute;inset:0;z-index:9;overflow:hidden;pointer-events:none;background:radial-gradient(circle at 50% 50%,#3a0f6e 0%,#16062e 45%,#05030c 100%);opacity:0;transition:opacity .6s ease;}#jjst-tunnel.on{opacity:1;}'+
  /* the energy: motes stream into Joe and he keeps a light glow; the force: he shudders and is dragged toward the portal a step at a time (--fs) */
  '#jjst .jjst-mote{position:absolute;left:0;top:0;width:.55cqw;height:.55cqw;margin:-.27cqw 0 0 -.27cqw;border-radius:50%;background:#fff;box-shadow:0 0 .9cqw .25cqw var(--mc,rgba(200,150,255,.95));z-index:6;pointer-events:none;opacity:0;transition:transform var(--md,1.4s) cubic-bezier(.55,0,.85,.4),opacity .5s ease;}'+
  '#jjst.charged .jjst-layer[src*="story-joe-"]{animation:jjst-idle 2.5s ease-in-out infinite,jjstCharged 2.2s ease-in-out infinite;}'+
  '@keyframes jjstCharged{0%,100%{filter:drop-shadow(0 0 .5cqw rgba(210,160,255,.55)) brightness(1.06);}50%{filter:drop-shadow(0 0 1.3cqw rgba(225,180,255,.95)) brightness(1.18);}}'+
  '#jjst.forced .jjst-layer[src*="story-joe-"]{transition:left .4s cubic-bezier(.2,.8,.3,1)!important;animation:jjstShudder .16s linear infinite,jjstCharged 2.2s ease-in-out infinite;}'+
  '@keyframes jjstShudder{0%,100%{translate:0 0;}25%{translate:-.12cqw .05cqw;}50%{translate:.1cqw -.05cqw;}75%{translate:-.06cqw 0;}}'+
  '#jjst-fade.pulse{animation:jjstFadePulse 2.2s ease-in-out infinite;}@keyframes jjstFadePulse{0%,100%{opacity:.75;}30%{opacity:.56;}72%{opacity:.86;}}'+
  '#jjst-tunnel .sw{position:absolute;left:50%;top:50%;width:190cqmax;height:190cqmax;margin:-95cqmax 0 0 -95cqmax;border-radius:50%;background:repeating-conic-gradient(from 0deg,rgba(214,120,255,.95) 0deg 14deg,rgba(90,30,170,.2) 14deg 36deg,rgba(255,120,245,.8) 36deg 46deg,rgba(40,10,90,.1) 46deg 72deg);-webkit-mask:radial-gradient(circle,transparent 0 4%,#000 16%,rgba(0,0,0,.55) 45%,transparent 72%);mask:radial-gradient(circle,transparent 0 4%,#000 16%,rgba(0,0,0,.55) 45%,transparent 72%);animation:jjstTunSpin 7s linear infinite;filter:blur(6px);}'+
  '#jjst-tunnel .sw.b{animation-duration:11s;animation-direction:reverse;opacity:.55;scale:.6;filter:blur(3px);}'+
  '@keyframes jjstTunSpin{to{rotate:360deg;}}'+
  '#jjst-tunnel .rg{position:absolute;left:50%;top:50%;width:20cqmax;height:20cqmax;margin:-10cqmax 0 0 -10cqmax;border-radius:50%;border:.5cqmax solid rgba(240,190,255,.9);box-shadow:0 0 3cqmax rgba(214,120,255,.9),inset 0 0 3cqmax rgba(214,120,255,.7);opacity:0;animation:jjstTunRing 2.4s cubic-bezier(.5,0,.9,.5) var(--dl) infinite;}'+
  '@keyframes jjstTunRing{0%{transform:scale(.02);opacity:0;}15%{opacity:1;}100%{transform:scale(9);opacity:0;}}'+
  '#jjst-tunnel .st{position:absolute;left:50%;top:50%;width:0;height:0;rotate:var(--a);}'+
  '#jjst-tunnel .st i{position:absolute;left:0;top:-.12cqmax;height:.24cqmax;width:9cqmax;border-radius:1cqmax;background:linear-gradient(90deg,transparent,var(--c,#fff));transform-origin:0 50%;opacity:0;animation:jjstTunStreak var(--d) cubic-bezier(.6,0,1,.6) var(--dl) infinite;}'+
  '@keyframes jjstTunStreak{0%{transform:translateX(2cqmax) scaleX(.1);opacity:0;}20%{opacity:1;}100%{transform:translateX(75cqmax) scaleX(1.6);opacity:0;}}'+
  '#jjst-tunnel .st b{position:absolute;left:0;top:-1.6cqmax;font:700 3.2cqmax/1 Georgia,serif;color:#ffc531;text-shadow:0 0 1.4cqmax rgba(255,190,60,.95);opacity:0;animation:jjstTunRune var(--d) cubic-bezier(.6,0,1,.6) var(--dl) infinite;}'+
  '@keyframes jjstTunRune{0%{transform:translateX(3cqmax) scale(.15) rotate(0deg);opacity:0;}20%{opacity:1;}100%{transform:translateX(70cqmax) scale(2.4) rotate(200deg);opacity:0;}}'+
  '#jjst-tunnel .core{position:absolute;left:50%;top:50%;width:16cqmax;height:16cqmax;margin:-8cqmax 0 0 -8cqmax;border-radius:50%;background:radial-gradient(circle,#fff 0%,rgba(255,200,255,.9) 18%,rgba(214,120,255,.5) 42%,transparent 70%);animation:jjstTunCore 1.6s ease-in-out infinite;}'+
  '@keyframes jjstTunCore{0%,100%{scale:.85;opacity:.85;}50%{scale:1.15;opacity:1;}}'+
  '#jjst-tunnel .jo{position:absolute;left:50%;top:50%;width:22cqmin;margin:-16cqmin 0 0 -11cqmin;filter:brightness(1.35) drop-shadow(0 0 2cqmin rgba(255,255,255,.8));animation:jjstTunJoe 9.5s cubic-bezier(.3,0,.7,1) forwards;}'+
  '#jjst-tunnel .jo.jov{width:36cqmin;height:auto;max-width:none;margin:-13.8cqmin 0 0 -18cqmin;filter:brightness(1.08) drop-shadow(0 0 2cqmin rgba(255,255,255,.55));animation-name:jjstTunJoeV;}'+
    '@keyframes jjstTunJoeV{0%{transform:translate(-26cqw,20cqh) scale(1.35) rotate(-8deg);opacity:0;}10%{opacity:1;}55%{transform:translate(5cqw,-4cqh) scale(.8) rotate(10deg);opacity:1;}100%{transform:translate(0,0) scale(.04) rotate(160deg);opacity:0;}}'+
    '@keyframes jjstTunJoe{0%{transform:translate(-30cqw,22cqh) scale(1.5) rotate(-20deg);opacity:0;}10%{opacity:1;}55%{transform:translate(6cqw,-5cqh) scale(.6) rotate(380deg);opacity:1;}100%{transform:translate(0,0) scale(.02) rotate(900deg);opacity:0;}}'+
  '@keyframes jjstRattle{0%,100%{rotate:0deg;}10%{rotate:-13deg;}25%{rotate:12deg;}40%{rotate:-11deg;}55%{rotate:10deg;}70%{rotate:-7deg;}85%{rotate:4deg;}}'+
  '#jjst .jjst-layer.kodama.still{animation:none;}'+
  '#jjst .jjst-layer.kodama.rattle{animation:jjstRattle .7s linear 1;}'+
  '@keyframes jjstJolt{0%{translate:0 0;scale:1;}12%{translate:0 -3cqh;scale:1.04 .96;}30%{translate:1cqw -1cqh;scale:.98 1.03;}48%{translate:-.6cqw 0;}66%{translate:.4cqw 0;}100%{translate:0 0;scale:1;}}#jjst .jjst-layer.jolt{animation:jjstJolt 1s ease-out 1!important;}'+
  /* snow: a layer of drifting flakes over the mountains, and a soft cap of snow settling on the banner */
  '#jjst-snow{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:0;transition:opacity 1.6s ease;overflow:hidden;}#jjst-snow.on{opacity:1;}'+
  '#jjst-snow i{position:absolute;top:-4cqh;border-radius:50%;background:#fff;box-shadow:0 0 6px rgba(255,255,255,.9);opacity:.85;animation:jjstSnow var(--d,9s) linear var(--dl,0s) infinite;will-change:transform;}'+
  '@keyframes jjstSnow{0%{transform:translate3d(0,0,0);}25%{transform:translate3d(calc(var(--sw) * .6),27cqh,0);}50%{transform:translate3d(calc(var(--sw) * -.2),54cqh,0);}75%{transform:translate3d(calc(var(--sw) * .8),81cqh,0);}100%{transform:translate3d(var(--sw),110cqh,0);}}'+
  '#jjst-cap .jjst-capsnow{position:absolute;left:.8%;width:96.2%;top:-2.4%;height:25.5%;object-fit:fill;pointer-events:none;opacity:0;transition:opacity 3s ease;z-index:2;}#jjst-cap.snowy .jjst-capsnow{opacity:1;}'+
  '#jjst-snow i.fk{border-radius:0;background:none;box-shadow:none;background-image:url("data:image/svg+xml;utf8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%271.6%27 stroke-linecap=%27round%27%3E%3Cpath d=%27M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l-2 2%27/%3E%3C/svg%3E");background-size:contain;filter:drop-shadow(0 0 3px rgba(255,255,255,.9));animation:jjstSnow var(--d,9s) linear var(--dl,0s) infinite,jjstSpin var(--sp,7s) linear infinite;}'+
  '@keyframes jjstSpin{to{rotate:360deg;}}'+
  /* enchanted-forest sparkle: motes twinkle in place and drift slowly up */
  '#jjst-sparkle{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:0;transition:opacity 1.4s ease;overflow:hidden;}#jjst-sparkle.on{opacity:1;}'+
  '#jjst-sparkle i{position:absolute;border-radius:50%;background:var(--c,#fff7d6);box-shadow:0 0 6px var(--c,#fff2b8),0 0 14px var(--c,rgba(190,255,225,.7));animation:jjstTwk var(--d,3s) ease-in-out var(--dl,0s) infinite,jjstFloat var(--fd,12s) ease-in-out var(--dl,0s) infinite alternate;}'+
  '#jjst-sparkle i.st{border-radius:0;background:none;box-shadow:none;background-image:radial-gradient(circle,#fff 0 18%,transparent 19%),conic-gradient(from 0deg,transparent 0 40deg,var(--c,#fff6c8) 45deg 50deg,transparent 55deg 130deg,var(--c,#fff6c8) 135deg 140deg,transparent 145deg 220deg,var(--c,#fff6c8) 225deg 230deg,transparent 235deg 310deg,var(--c,#fff6c8) 315deg 320deg,transparent 325deg);filter:drop-shadow(0 0 4px var(--c,#fff2b8));}'+
  '#jjst .jjst-layer.shards{filter:drop-shadow(0 0 10px rgba(255,120,220,.85)) drop-shadow(0 0 22px rgba(200,120,255,.6));animation:jjstShardGlow 2.6s ease-in-out infinite;}@keyframes jjstShardGlow{0%,100%{filter:drop-shadow(0 0 8px rgba(255,120,220,.7)) drop-shadow(0 0 18px rgba(200,120,255,.45));}50%{filter:drop-shadow(0 0 16px rgba(255,140,230,1)) drop-shadow(0 0 34px rgba(210,130,255,.8));}}'+
  '#jjst-cap .jjst-capdeco{position:absolute;right:12%;bottom:91%;height:34%;display:flex;align-items:flex-end;gap:.5cqw;pointer-events:none;opacity:0;transition:opacity 1.2s ease;z-index:2;}#jjst-cap.forest .jjst-capdeco,#jjst-cap.forest .jjst-capcrystal{opacity:1;}'+   // perched ON the stone
  '#jjst-cap .jjst-capdeco img{height:100%;width:auto;display:block;}#jjst-cap .jjst-capdeco img.sp{transform-origin:50% 88%;animation:jjstKodama 6.4s ease-in-out -1.7s infinite;}#jjst-cap .jjst-capdeco .muw{position:relative;height:62%;display:block;}#jjst-cap .jjst-capdeco img.mu{height:100%;animation:jjstMush 3.2s ease-in-out infinite;}'+
  '#jjst-cap .jjst-capcrystal{position:absolute;left:12.5%;bottom:91%;height:30%;width:auto;pointer-events:none;opacity:0;transition:opacity 1.2s ease;z-index:2;filter:drop-shadow(0 0 8px rgba(255,120,220,.8)) drop-shadow(0 0 18px rgba(200,120,255,.5));}'+
  '#jjst-sparkle.portal::before{content:"";position:absolute;left:58%;bottom:26cqh;width:44cqw;height:44cqw;transform:translateX(0);border-radius:50%;background:radial-gradient(circle,rgba(214,120,255,.42) 0%,rgba(255,106,213,.22) 32%,rgba(125,249,255,.10) 52%,transparent 70%);filter:blur(6px);animation:jjstGlow 3.2s ease-in-out infinite;}'+
  '@keyframes jjstGlow{0%,100%{opacity:.7;scale:.94;}50%{opacity:1;scale:1.06;}}'+
  '@keyframes jjstTwk{0%,100%{opacity:.15;scale:.6;}50%{opacity:1;scale:1.25;}}@keyframes jjstFloat{to{translate:var(--fx,0) var(--fy,-4cqh);}}'+
  /* the first scene's hints */
  '#jjst-hints{position:absolute;inset:0;z-index:7;pointer-events:none;opacity:0;transition:opacity .7s ease;}#jjst-hints.on{opacity:1;}'+
  '#jjst-hints .ar{position:absolute;width:30px;height:30px;translate:-50% -100%;animation:jjstArrow 1.3s ease-in-out infinite;filter:drop-shadow(0 2px 4px rgba(0,0,0,.5));transition:opacity .4s ease;}#jjst-hints .ar svg{width:100%;height:100%;fill:#FF00F5;}'+
  '@keyframes jjstArrow{0%,100%{transform:translateY(-8px);}50%{transform:translateY(2px);}}'+
  '#jjst-hint{position:absolute;left:50%;top:22%;transform:translate(-50%,-50%);isolation:isolate;padding:14px 24px;border-radius:24.5px;color:#fff;font-size:15px;letter-spacing:.06em;white-space:nowrap;}#jjst-hint>span{position:relative;z-index:1;}'+
  '#jjst .jjst-layer.trogfly{transform-origin:50% 50%;animation:jjstTrog 9.5s ease-in-out .6s both;}@keyframes jjstTrog{0%{scale:.25;opacity:0;}14%{scale:1;opacity:.9;}86%{scale:1;opacity:.9;}100%{scale:.25;opacity:0;}}'+
  /* the montage bars */
  '#jjst-bars .b{position:absolute;left:0;right:0;height:calc(9cqh + 16px);background:#000;z-index:6;transition:transform 1.4s cubic-bezier(.22,1,.36,1);}#jjst-bars .t{top:0;transform:translateY(-101%);}#jjst-bars .d{bottom:0;transform:translateY(101%);}#jjst-bars.on .b{transform:none;}'+
  '.jjst-layer.enter{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s cubic-bezier(.22,1,.36,1);}'+
  '.jjst-layer.enter.in{opacity:1;transform:translateY(0);}'+
  '#jjst-black{position:absolute;left:50%;top:55%;width:0;height:0;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 90px 24px rgba(255,176,84,.35) inset,0 0 0 9999px #000;z-index:8;pointer-events:none;}'+
  '#jjst-fade{position:absolute;inset:0;background:#000;opacity:0;z-index:10;pointer-events:none;transition:opacity '+T.endFade+'ms ease;}'+
  '#jjst-cap{z-index:11!important;}'+                                                                              // the banner reads over the end dim / black
  '#jjst-loader{position:absolute;inset:0;z-index:20;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;transition:opacity .6s ease;}'+
  '#jjst-loader.hide{opacity:0;pointer-events:none;}'+
  '#jjst-loader .ring{width:46px;height:46px;border-radius:50%;border:4px solid rgba(244,197,96,.22);border-top-color:#f4c560;animation:jjst-spin .9s linear infinite;}'+
  '#jjst-loader .txt{font-family:\'Joes Journey Headline\',sans-serif;color:#e8d9b5;font-size:15px;letter-spacing:1px;}'+
  '@keyframes jjst-spin{to{transform:rotate(360deg);}}'+
  '#jjst-progress{position:absolute;left:0;bottom:0;width:100%;height:5px;background:rgba(255,255,255,.08);z-index:6;opacity:0;transition:opacity .6s ease;}'+
  '#jjst-progress.on{opacity:1;}'+
  '#jjst-progress-fill{height:100%;width:0;background:linear-gradient(90deg,#FF00F5,#ff7df4);box-shadow:0 0 12px rgba(255,0,245,.7);transition:width .6s ease;}'+
  '#jjst video.pclose{-webkit-mask-image:radial-gradient(ellipse 31% 120% at 65.3% 55.5%,#000 78%,rgba(0,0,0,.45) 90%,transparent 100%);mask-image:radial-gradient(ellipse 31% 120% at 65.3% 55.5%,#000 78%,rgba(0,0,0,.45) 90%,transparent 100%);}' +   /* s113: the portal clip's closing streak, feathered out just past the arch */
  '#jjst-cap{position:absolute;left:50%;bottom:7cqh;translate:-50% 0;width:min(83cqw,1350px);aspect-ratio:1295 / 200;z-index:5;opacity:0;will-change:transform;transition:opacity .8s ease;background:url(\''+BANNER+'\') no-repeat center/contain;display:flex;align-items:center;justify-content:center;pointer-events:auto;cursor:pointer;}'+
  '#jjst-cap.on{opacity:1;}#jjst-cap.xp-hide{opacity:0!important;pointer-events:none!important;}#jjst-cap.xp-dim{opacity:.5!important;filter:saturate(.6);pointer-events:none!important;}#jjst-cap.xp-dim .jjst-nx{display:none;}'+
  '#jjst-cap-text .jjst-nx{font-size:calc(1em - 2px);color:#8a5a22;font-weight:inherit;text-transform:none;letter-spacing:.03em;white-space:nowrap;opacity:0;transition:opacity .9s ease,color .2s ease;cursor:pointer;}'+
  '#jjst-cap-text .jjst-nx{position:relative;}#jjst-cap-text .jjst-pg{position:absolute;left:.95em;right:0;bottom:-.22em;height:2px;border-radius:2px;overflow:hidden;opacity:.4;pointer-events:none;-webkit-mask:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);mask:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);}#jjst-cap-text .jjst-pg b{display:block;height:100%;background:currentColor;transform-origin:0 50%;transform:scaleX(0);}'+   // s120: the faint progress line under the Next hint
  '#jjst-cap-text .jjst-nx.on{opacity:1;animation:jjstNx 1.8s ease-in-out .9s infinite;}#jjst-cap-text .jjst-nx:hover{color:#5e3a10;}'+
  '@keyframes jjstNx{0%,100%{text-shadow:0 0 0 rgba(255,190,80,0);}50%{text-shadow:0 0 10px rgba(255,190,80,.95),0 0 22px rgba(255,160,40,.6);}}'+
  '#jjst-cap-text{width:72%;overflow:visible;text-align:left;color:#3a2a12;font-size:clamp(15px,1.6cqw,27px);line-height:1.26;white-space:pre-wrap;}'+   // height is set per line to its FINISHED size (see typeText) — centred in the box, line 1 never moves
  /* the reader's own pace: a Next chip appears once the line has finished typing */
  /* Previous / Next scene — always there under the banner (per the Figma frame) */
  /* Skip the story — the horizontal scroll's NEXT SCENE element verbatim (div.next-section-button > div.button-text + icon), so the site CSS gives it
     the white card, radius, Joes Journey Headline label and the grey hover. Bottom-left, 32px in — the mirror of the sound moon (bottom:32px;right:32px). */
  '#jjst-skipcta{position:absolute!important;left:32px;right:auto;bottom:32px;z-index:9;opacity:0;pointer-events:none;transform:translateY(14px);transition:opacity .6s ease,transform .6s cubic-bezier(.22,1,.36,1),background-color .2s;}'+
  /* the homepage button behaviour, scoped here: black fills up on hover (text + icon go white), pink circle on press */
  '#jjst [data-jj="btn"],#jjst [data-jj="cta"]{position:relative;overflow:hidden!important;}'+
  '#jjst .jj-btn-fill,#jjst .jj-cta-fill{position:absolute;inset:0;background:#111;transform:scaleY(0);transform-origin:bottom center;transition:transform .4s cubic-bezier(.4,0,.2,1);pointer-events:none;z-index:0;border-radius:inherit;}'+
  '#jjst .jj-cta-fill{background:rgba(0,0,0,.92);}'+
  '#jjst [data-jj="btn"]:hover .jj-btn-fill,#jjst [data-jj="cta"]:hover .jj-cta-fill{transform:scaleY(1);}'+
  '#jjst [data-jj="btn"]>*:not(.jj-btn-fill):not(.jj-btn-pink),#jjst [data-jj="cta"]>*:not(.jj-cta-fill):not(.jj-cta-pink){position:relative;z-index:2;transition:color .3s ease,fill .3s ease;}'+
  '#jjst [data-jj="btn"]:hover,#jjst [data-jj="btn"]:hover *{color:#fff!important;}#jjst [data-jj="btn"]:hover path{fill:#fff!important;}'+
  '#jjst .jj-btn-pink,#jjst .jj-cta-pink{position:absolute;border-radius:50%;background:#FF00F5;opacity:.9;pointer-events:none;z-index:1;transform:scale(0);transition:transform .4s ease-out,opacity .4s ease;}'+
  '#jjst-skipcta{display:none!important;}'+
  '#jjst-skipcta .button-text{white-space:nowrap;}'+
  /* the transport: previous / pause / next, top centre, three HUD-style pills (jj-score paints their ::before theme for theme) */
  '.nav{pointer-events:none;}.nav>*{pointer-events:auto;}.nav-container{pointer-events:none;}.nav-container>*{pointer-events:auto;}'+   // the nav's full-width bands (.nav and .nav-container) were swallowing clicks on the transport beneath them — only the logo, the pills and the menu catch the mouse
  '#jjst-ctl{position:absolute;left:50%;top:30px;transform:translateX(-50%);z-index:12;display:flex;gap:8px;opacity:0;pointer-events:none;transition:opacity .6s ease;}'+
  ''+                                                              // under the nav band when the pills crowd the centre
  '#jjst-ctl.on{opacity:1;pointer-events:auto;}body.jj-menu-open #jjst-ctl,body.jj-modal-open #jjst-ctl{opacity:0!important;pointer-events:none!important;}'+
  '#jjst-ctl .jb{position:relative;isolation:isolate;width:48px;height:48px;border:0;background:none;padding:0;border-radius:24.5px;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;}'+
  '#jjst-ctl .jb>*{position:relative;z-index:1;}#jjst-ctl .jb svg{width:18px;height:18px;display:block;fill:currentColor;}#jjst-ctl .jb:hover::before{filter:brightness(1.25);}'+
  '#jjst-ctl .jb[disabled]{opacity:.35;cursor:default;}#jjst-ctl .jb .pl{display:none;}#jjst.paused #jjst-ctl .jb .pl{display:block;}#jjst.paused #jjst-ctl .jb .pa{display:none;}'+
  '#jjst-skipcta .ico{width:1.6cqw;height:1.6cqw;min-width:18px;min-height:18px;display:block;}'+
  '.jjst-ov{position:absolute;inset:0;z-index:40;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s ease,visibility 0s linear .3s;}'+
  '.jjst-ov.on{opacity:1;visibility:visible;pointer-events:auto;transition:opacity .3s ease,visibility 0s;}'+
  /* the homepage glass button, drawn here (its Webflow class carries hover interactions + the site-wide Credits/Contact link hijack) */
  '.jjst-glass{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;padding:1.6rem 3.5rem;border-radius:8px;border:2px solid rgba(255,255,255,.11);background:rgba(0,0,0,.4);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);color:#fff;font-family:\'Joes Journey Headline\',sans-serif;font-size:1.2rem;font-weight:400;line-height:1;text-decoration:none;text-transform:none;cursor:pointer;transition:box-shadow .2s ease;-webkit-appearance:none;margin:0;}'+
  '.jjst-glass:hover{box-shadow:0 12px 20px -14px rgba(255,255,255,.68);background:rgba(160,160,160,.4);}.jjst-glass .button_text{position:relative;z-index:2;}'+   // grey base on hover, so the black fill wipe reads (as on click to begin)
  '.jjst-ov .card{text-align:center;color:#fff;padding:0 24px;max-width:640px;}'+
  '.jjst-ov .q{font-size:clamp(22px,2.6cqw,38px);font-weight:700;margin:0 0 12px;}'+
  '.jjst-ov .sub{font-size:clamp(15px,1.3cqw,20px);opacity:.9;margin:0 0 28px;}  .jjst-ov .sub b{color:#FF00F5;}'+
  '.jjst-ov .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}'+
  '.jjst-ov .row{gap:16px;}'+
  '.jjst-ov .q{line-height:1.15;}'+
  /* tavern Joe is a character you can prod: grows on hover, a warm glow blooms behind on press */
  '.jjst-layer.joehero{pointer-events:auto;cursor:pointer;transform-origin:50% 100%;transition:scale .35s cubic-bezier(.34,1.56,.64,1),filter .45s ease;}'+
  '.jjst-layer.joehero:hover{scale:1.07;}'+
  '.jjst-layer.joehero.lit{filter:drop-shadow(0 0 26px rgba(255,214,120,.95)) drop-shadow(0 0 80px rgba(255,180,60,.55));}'+
  '@keyframes jjstNextNudge{0%,100%{translate:0 0;}50%{translate:4px 0;}}'+
  '#jjst .jjcam-p{position:absolute;inset:0;pointer-events:none;transform-origin:0 0;}'+
  /* s103 · the Blender atmosphere plates: light on black, screen-blended over the scene (back under the figures, heat / front over them;
     z 4 = with the rig's front shade); the rocks still is plain alpha. Each fades in once it plays and dissolves with the rig. */
  '#jjst .jjfx:not(.on){visibility:hidden;transition:opacity var(--fxd,1.4s) var(--fxe,ease) var(--fxdl,0s),visibility 0s linear calc(var(--fxd,1.4s) + var(--fxdl,0s));}#jjst .jjfx.on{visibility:visible;}'+   // s110: a faded-out plate is not drawn (it still held a full screen of GPU tiles)
  '#jjst .jjfx{position:absolute;inset:0;pointer-events:none;transform-origin:0 0;opacity:0;transition:opacity 1.4s ease;}'+
  '#jjst .jjfx{transition:opacity var(--fxd,1.4s) var(--fxe,ease) var(--fxdl,0s);}#jjst .jjfx.on{opacity:var(--op,1);}#jjst .jjfx-grade{transform:none!important;translate:none!important;scale:none!important;}#jjst .jjfx-back,#jjst .jjfx-heat,#jjst .jjfx-front{mix-blend-mode:screen;}#jjst .jjfx-heat,#jjst .jjfx-front,#jjst .jjfx-rocks{z-index:4;}'+
  '#jjst .jjfx>video,#jjst .jjfx>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}#jjst .jjfx-heat>video,#jjst .jjfx-heat>img{inset:auto;object-fit:fill;}'+
  '#jjst .jjfx-on>video,#jjst .jjfx-on>img{inset:auto;object-fit:fill;}'+
  /* s106 · the new fx plates: the wide forest board's slide, the hills pan, layers stepping aside for a render, the code grade / sky glow giving way */
  '#jjst .jjfx-shift{right:auto;width:calc(100% + 7cqw);transform:translateX(clamp(-7cqw, var(--sl, 0cqw), 0cqw));}'+
  '#jjst .jjfx-pan{transform-origin:50% 50%;animation:jjstPan 15s linear infinite alternate;}'+
  '#jjst .fxhid{opacity:0!important;transition:opacity 1.2s ease!important;}#jjst .jjcam-grade.fxon,#jjst .jjcam-hz.fxon{display:none!important;}'+
  '#jjst .jjfx-hearth>video,#jjst .jjfx-hearth>img{transition:filter .4s ease;}#jjst .jjfx-hearth.warm>video,#jjst .jjfx-hearth.warm>img{filter:brightness(1.35) saturate(1.1);}'+
  '#jjst .jjfx-heat.on{opacity:.85;}#jjst .jjfx-heat.on[data-lit="fire"]{opacity:1;}'+   // his light swells when the camera looks at him (as the pools did)
  '#jjst.moody .jjfx-back.on{opacity:.5;}#jjst.moody .jjfx-front.on{opacity:.6;}'+   // 'darkness': the mist and motes sink, his glow is what's left
  '#jjst .jjcam-back.fxon .fire,#jjst .jjcam-front.fxon .fire{display:none;}'+
  '@media (max-aspect-ratio:1/1){#jjst:not(.lb) .jjfx-back.on{opacity:.55;}#jjst.moody:not(.lb) .jjfx-back.on{opacity:.3;}}'+   // portrait: the board is cover-fitted up, so the floor (and its mist) fills far more of the frame
  /* s96 · the cavern light pass: warm pools (screen-blended, so they read as light on the dark cave), rock shade on the walls, a lens vignette */
  '#jjst .jjcam-back{position:absolute;inset:0;pointer-events:none;transform-origin:0 0;mix-blend-mode:screen;transition:opacity .6s ease;}'+
  '#jjst .jjcam-front{position:absolute;inset:0;z-index:4;pointer-events:none;transition:opacity .6s ease;}'+
  '#jjst .jjcam-front>div{position:absolute;inset:0;transform-origin:0 0;}#jjst .jjcam-front .gl{mix-blend-mode:screen;}'+
  '#jjst .jjcam-back i,#jjst .jjcam-front i{position:absolute;display:block;opacity:.45;transition:opacity 1.8s ease;}'+
  '#jjst .jjcam-back i b,#jjst .jjcam-front i b{position:absolute;inset:0;border-radius:50%;animation:jjcamFlick 3.1s ease-in-out infinite;}'+
  '#jjst .jjcam-back .fire b{background:radial-gradient(closest-side,rgba(255,132,64,.46),rgba(255,110,60,.22) 45%,rgba(255,96,60,.07) 75%,rgba(255,96,60,0));}'+
  '#jjst .jjcam-back .gold b{background:radial-gradient(closest-side,rgba(255,206,92,.44),rgba(255,188,70,.2) 45%,rgba(255,180,60,.06) 75%,rgba(255,180,60,0));animation:jjcamGlint 4.3s ease-in-out infinite;}'+
  '#jjst .jjcam-front i{opacity:0;}'+
  '#jjst .jjcam-front .fire b{background:radial-gradient(closest-side,rgba(255,150,80,.2),rgba(255,120,70,.08) 55%,rgba(255,120,70,0));}'+
  '#jjst .jjcam-front .gold b{background:radial-gradient(closest-side,rgba(255,226,140,.26),rgba(255,200,90,.1) 50%,rgba(255,200,90,0));animation:jjcamGlint 4.3s ease-in-out infinite;}'+
  '#jjst .jjcam-back[data-lit="fire"] .fire,#jjst .jjcam-back[data-lit="gold"] .gold,#jjst .jjcam-front[data-lit="fire"] .fire,#jjst .jjcam-front[data-lit="gold"] .gold{opacity:1;}'+
  '#jjst.moody .jjcam-back .fire{opacity:.75;}#jjst.moody .jjcam-back[data-lit="fire"] .fire{opacity:1;}'+   // in the darkness his glow is what's left
  '#jjst .jjcam-front .sh{opacity:.7;transition:opacity 1.8s ease;background:radial-gradient(ellipse 30% 70% at 0% 42%,rgba(2,4,12,.62),rgba(2,4,12,.34) 45%,rgba(2,4,12,.1) 75%,rgba(2,4,12,0)),radial-gradient(ellipse 28% 66% at 100% 46%,rgba(2,4,12,.6),rgba(2,4,12,.32) 45%,rgba(2,4,12,.1) 75%,rgba(2,4,12,0)),radial-gradient(ellipse 70% 30% at 50% 0%,rgba(2,4,12,.5),rgba(2,4,12,.2) 50%,rgba(2,4,12,0));}'+
  '#jjst .jjcam-front .vg{opacity:.65;transition:opacity 1.8s ease;background:radial-gradient(ellipse 78% 74% at 50% 46%,rgba(3,5,14,0) 52%,rgba(3,5,14,.2) 70%,rgba(3,5,14,.48) 88%,rgba(3,5,14,.62) 100%);}'+
  '#jjst.moody .jjcam-front .vg,#jjst.moody .jjcam-front .sh{opacity:1;}'+
  '@keyframes jjcamFlick{0%,100%{opacity:1;}17%{opacity:.84;}29%{opacity:.96;}46%{opacity:.8;}61%{opacity:1;}78%{opacity:.88;}}'+
  '@keyframes jjcamGlint{0%,100%{opacity:.8;}40%{opacity:1;}70%{opacity:.88;}}'+
  /* s100 · the village light pass: a cool night grade on the board (multiply, clear round the moon), warm window glows that ride the board,
     a fire pool + a glow on the far sky that only burn while Trogdor's flame does, the night sky darkening at the frame's top and sides */
  '#jjst .jjcam-grade{position:absolute;inset:0;pointer-events:none;mix-blend-mode:multiply;transition:opacity .6s ease;background:radial-gradient(circle at var(--mx,43%) var(--my,18%),#fff 0,#fff var(--mr,60px),rgba(200,206,238,1) calc(var(--mr,60px) * 2.6),rgba(152,160,214,1) calc(var(--mr,60px) * 6),rgba(140,146,204,1) 100%);opacity:.62;}'+
  '#jjst .jjcam-win{position:absolute;inset:0;pointer-events:none;transform-origin:0 0;mix-blend-mode:screen;transition:opacity .6s ease;}'+
  '#jjst .jjcam-win i{position:absolute;display:block;transition:opacity .6s ease;}#jjst .jjcam-win i b{position:absolute;inset:0;border-radius:50%;}'+
  '#jjst .jjcam-win .w b{background:radial-gradient(closest-side,rgba(255,206,110,.85),rgba(255,176,76,.36) 36%,rgba(255,150,60,.11) 68%,rgba(255,150,60,0));animation:jjcamCandle 5.3s ease-in-out infinite;}'+
  '#jjst .jjcam-win .w:nth-child(2n) b{animation-duration:6.7s;animation-delay:-2.1s;}#jjst .jjcam-win .w:nth-child(3n) b{animation-duration:4.4s;animation-delay:-3.3s;}'+
  '#jjst .jjcam-hz{position:absolute;pointer-events:none;mix-blend-mode:screen;opacity:0;transition:opacity 1.4s ease;}#jjst .jjcam-hz b{position:absolute;inset:0;border-radius:50%;background:radial-gradient(closest-side,rgba(255,122,62,.42),rgba(255,98,56,.18) 50%,rgba(255,90,50,.05) 78%,rgba(255,90,50,0));animation:jjcamFlick 2.3s ease-in-out infinite;}'+
  '#jjst .jjcam-hz[data-flare]{opacity:1;}'+
  '#jjst [data-rig="village"] i{transition:opacity .5s ease;}'+
  '#jjst .jjcam-back[data-rig="village"] .fire,#jjst .jjcam-front[data-rig="village"] .fire{opacity:0;}'+   // no flame, no fire light (he arrives dark)
  '#jjst .jjcam-back[data-rig="village"][data-flare] .fire{opacity:.8;}#jjst .jjcam-front[data-rig="village"][data-flare] .fire{opacity:.45;}'+
  '#jjst .jjcam-back[data-rig="village"][data-flare][data-lit="fire"] .fire,#jjst .jjcam-front[data-rig="village"][data-flare][data-lit="fire"] .fire{opacity:1;}'+
  '#jjst [data-rig="village"][data-flare] .fire b{animation-duration:1.7s;}'+
  '#jjst .jjcam-back[data-rig="village"] .fire b{background:radial-gradient(closest-side,rgba(255,138,62,.6),rgba(255,112,56,.3) 40%,rgba(255,96,52,.1) 72%,rgba(255,96,52,0));}#jjst .jjcam-front[data-rig="village"] .fire b{background:radial-gradient(closest-side,rgba(255,156,84,.28),rgba(255,124,70,.11) 55%,rgba(255,124,70,0));}'+
  '#jjst .jjcam-front[data-rig="village"] .sh{opacity:.9;background:radial-gradient(ellipse 120% 52% at 50% -14%,rgba(3,5,18,.66),rgba(3,5,18,.32) 45%,rgba(3,5,18,.08) 78%,rgba(3,5,18,0)),radial-gradient(ellipse 24% 72% at 0% 52%,rgba(3,5,18,.46),rgba(3,5,18,.2) 50%,rgba(3,5,18,.05) 80%,rgba(3,5,18,0)),radial-gradient(ellipse 24% 72% at 100% 52%,rgba(3,5,18,.46),rgba(3,5,18,.2) 50%,rgba(3,5,18,.05) 80%,rgba(3,5,18,0));}'+
  '#jjst .jjcam-front[data-rig="village"] .vg{opacity:.75;}'+
  '@keyframes jjcamCandle{0%,100%{opacity:1;}23%{opacity:.86;}41%{opacity:.97;}58%{opacity:.82;}77%{opacity:.94;}}'+
  /* s101 · the tavern: the hearth's light on the floor and on Joe, always burning, quick flicker; lanterns + candles ride the board; the far side of
     the room and the corners in deep warm shadow (the window kept clear, for Trogdor); smoke hanging under the beams by the chimney */
  '#jjst .jjcam-front .hz2{pointer-events:none;overflow:visible;}#jjst .jjcam-front .hz2 b{position:absolute;inset:-6%;display:block;animation:jjcamHaze 19s ease-in-out infinite alternate;}'+
  '#jjst .jjcam-back[data-rig="tavern"] .fire{opacity:.82;}#jjst .jjcam-front[data-rig="tavern"] .fire{opacity:.55;}'+
  '#jjst .jjcam-back[data-rig="tavern"][data-lit="fire"] .fire,#jjst .jjcam-front[data-rig="tavern"][data-lit="fire"] .fire{opacity:1;}'+
  '#jjst [data-rig="tavern"] .fire b{animation-duration:1.9s;}'+
  '#jjst .jjcam-back[data-rig="tavern"] .fire b{background:radial-gradient(closest-side,rgba(255,150,70,.5),rgba(255,120,56,.24) 40%,rgba(255,100,50,.08) 72%,rgba(255,100,50,0));}'+
  '#jjst .jjcam-front[data-rig="tavern"] .fire b{background:radial-gradient(closest-side,rgba(255,170,96,.24),rgba(255,136,72,.1) 55%,rgba(255,136,72,0));}'+
  '#jjst .jjcam-win[data-rig="tavern"] .w b{background:radial-gradient(closest-side,rgba(255,210,120,.62),rgba(255,176,76,.26) 36%,rgba(255,150,60,.08) 68%,rgba(255,150,60,0));}'+
  '#jjst .jjcam-front[data-rig="tavern"] .sh{opacity:1;background:radial-gradient(ellipse 36% 84% at 100% 56%,rgba(16,6,2,.6),rgba(16,6,2,.3) 46%,rgba(16,6,2,.08) 78%,rgba(16,6,2,0)),radial-gradient(ellipse 34% 30% at 100% 0%,rgba(16,6,2,.5),rgba(16,6,2,.2) 50%,rgba(16,6,2,0)),radial-gradient(ellipse 22% 26% at 0% 0%,rgba(16,6,2,.34),rgba(16,6,2,.12) 55%,rgba(16,6,2,0)),radial-gradient(ellipse 26% 50% at 0% 100%,rgba(16,6,2,.5),rgba(16,6,2,.2) 50%,rgba(16,6,2,0)),radial-gradient(ellipse 80% 26% at 50% 106%,rgba(16,6,2,.46),rgba(16,6,2,.16) 55%,rgba(16,6,2,0));}'+
  '#jjst .jjcam-front[data-rig="tavern"] .vg{opacity:.8;background:radial-gradient(ellipse 80% 76% at 46% 44%,rgba(14,5,2,0) 54%,rgba(14,5,2,.2) 72%,rgba(14,5,2,.46) 90%,rgba(14,5,2,.6) 100%);}'+
  '#jjst .jjcam-front[data-rig="tavern"] .hz2 b{background:radial-gradient(ellipse 22% 30% at 18% 36%,rgba(255,160,90,.16),rgba(255,140,80,.06) 55%,rgba(255,140,80,0)),radial-gradient(ellipse 34% 13% at 22% 9%,rgba(190,160,140,.2),rgba(170,140,120,.08) 55%,rgba(170,140,120,0)),radial-gradient(ellipse 24% 10% at 76% 7%,rgba(170,140,120,.12),rgba(170,140,120,0)),radial-gradient(ellipse 60% 12% at 40% 80%,rgba(255,170,110,.07),rgba(255,170,110,0));mix-blend-mode:screen;}'+
  /* s101 · the castle: moonlight grade, the portal's purple on the ground and in the air, fire light only while his flame burns, a torch in the gate,
     a gold bloom behind the Designer, cool mist over the ground, the rocks and the top of the sky in deep shadow */
  '#jjst .jjcam-grade[data-rig="castle"]{opacity:.56;}'+
  '#jjst [data-rig="castle"] i{transition:opacity .5s ease;}'+
  '#jjst .jjcam-back[data-rig="castle"] .magic{opacity:.9;}#jjst .jjcam-front[data-rig="castle"] .magic{opacity:.5;}'+
  '#jjst .jjcam-back[data-rig="castle"] .magic b{background:radial-gradient(closest-side,rgba(206,110,255,.44),rgba(170,90,255,.2) 45%,rgba(150,80,255,.06) 75%,rgba(150,80,255,0));animation:jjcamGlint 3.7s ease-in-out infinite;}'+
  '#jjst .jjcam-front[data-rig="castle"] .magic b{background:radial-gradient(closest-side,rgba(220,140,255,.2),rgba(190,110,255,.07) 55%,rgba(190,110,255,0));animation:jjcamGlint 3.7s ease-in-out infinite;}'+
  '#jjst .jjcam-back[data-rig="castle"] .fire,#jjst .jjcam-front[data-rig="castle"] .fire{opacity:0;}'+
  '#jjst .jjcam-back[data-rig="castle"][data-flare] .fire{opacity:.85;}#jjst .jjcam-front[data-rig="castle"][data-flare] .fire{opacity:.5;}'+
  '#jjst .jjcam-back[data-rig="castle"][data-flare][data-lit="fire"] .fire,#jjst .jjcam-front[data-rig="castle"][data-flare][data-lit="fire"] .fire{opacity:1;}'+
  '#jjst [data-rig="castle"][data-flare] .fire b{animation-duration:1.5s;}'+
  '#jjst .jjcam-back[data-rig="castle"] .fire b{background:radial-gradient(closest-side,rgba(255,138,62,.6),rgba(255,112,56,.3) 40%,rgba(255,96,52,.1) 72%,rgba(255,96,52,0));}#jjst .jjcam-front[data-rig="castle"] .fire b{background:radial-gradient(closest-side,rgba(255,160,84,.3),rgba(255,124,70,.12) 55%,rgba(255,124,70,0));}'+
  '#jjst .jjcam-back[data-rig="castle"] .hero,#jjst .jjcam-front[data-rig="castle"] .hero{opacity:0;}#jjst .jjcam-back[data-rig="castle"][data-lit="hero"] .hero{opacity:1;}#jjst .jjcam-front[data-rig="castle"][data-lit="hero"] .hero{opacity:.8;}'+
  '#jjst .jjcam-back[data-rig="castle"] .hero b{background:radial-gradient(closest-side,rgba(255,214,120,.5),rgba(255,160,200,.2) 50%,rgba(255,150,220,.05) 78%,rgba(255,150,220,0));animation:jjcamGlint 2.9s ease-in-out infinite;}'+
  '#jjst .jjcam-front[data-rig="castle"] .hero b{background:radial-gradient(closest-side,rgba(255,226,150,.2),rgba(255,180,210,.07) 55%,rgba(255,180,210,0));animation:jjcamGlint 2.9s ease-in-out infinite;}'+
  '#jjst .jjcam-win[data-rig="castle"] .w b{background:radial-gradient(closest-side,rgba(255,196,100,.8),rgba(255,160,70,.3) 36%,rgba(255,140,60,.08) 68%,rgba(255,140,60,0));}'+
  '#jjst .jjcam-front[data-rig="castle"] .sh{opacity:1;background:radial-gradient(ellipse 120% 44% at 50% -12%,rgba(3,5,18,.5),rgba(3,5,18,.24) 45%,rgba(3,5,18,.06) 78%,rgba(3,5,18,0)),radial-gradient(ellipse 28% 76% at 0% 60%,rgba(3,5,18,.56),rgba(3,5,18,.26) 50%,rgba(3,5,18,.06) 80%,rgba(3,5,18,0)),radial-gradient(ellipse 24% 72% at 100% 62%,rgba(3,5,18,.5),rgba(3,5,18,.22) 50%,rgba(3,5,18,.05) 80%,rgba(3,5,18,0));}'+
  '#jjst .jjcam-front[data-rig="castle"] .vg{opacity:.78;}'+
  '#jjst .jjcam-front[data-rig="castle"] .hz2 b{background:radial-gradient(ellipse 60% 13% at 34% 76%,rgba(160,172,236,.13),rgba(160,172,236,.05) 55%,rgba(160,172,236,0)),radial-gradient(ellipse 40% 10% at 80% 66%,rgba(160,172,236,.11),rgba(160,172,236,0)),radial-gradient(ellipse 30% 9% at 52% 60%,rgba(190,150,255,.08),rgba(190,150,255,0));mix-blend-mode:screen;}'+
  /* s101 · the ride + the forest: moon halo, valley mist / snow glow, moonlight shafts through the canopy, dappled path, the orb's gold, the portal's purple */
  '#jjst .jjcam-moon{position:absolute;pointer-events:none;mix-blend-mode:screen;transition:opacity .6s ease;}#jjst .jjcam-moon b{position:absolute;inset:0;border-radius:50%;background:radial-gradient(closest-side,rgba(222,238,255,.3),rgba(200,222,255,.12) 38%,rgba(190,212,255,.035) 72%,rgba(190,212,255,0));animation:jjcamGlint 6.5s ease-in-out infinite;}'+
  '#jjst .jjcam-front[data-rig="woodland"] .sh{opacity:.85;background:radial-gradient(ellipse 120% 40% at 50% -12%,rgba(3,5,18,.44),rgba(3,5,18,.18) 50%,rgba(3,5,18,0)),radial-gradient(ellipse 24% 72% at 0% 56%,rgba(3,5,18,.46),rgba(3,5,18,.18) 50%,rgba(3,5,18,0)),radial-gradient(ellipse 24% 72% at 100% 56%,rgba(3,5,18,.46),rgba(3,5,18,.18) 50%,rgba(3,5,18,0));}'+
  '#jjst .jjcam-front[data-rig="woodland"] .hz2 b{background:radial-gradient(ellipse 70% 12% at 50% 66%,rgba(170,190,240,.1),rgba(170,190,240,0)),radial-gradient(ellipse 40% 10% at 20% 74%,rgba(170,190,240,.08),rgba(170,190,240,0));mix-blend-mode:screen;}'+
  '#jjst .jjcam-grade[data-rig="woodland"]{opacity:.5;}'+
  '#jjst .jjcam-front[data-rig="hills"] .sh,#jjst .jjcam-front[data-rig="mountains"] .sh{opacity:1;background:radial-gradient(ellipse 120% 34% at 50% -12%,rgba(3,5,18,.3),rgba(3,5,18,.1) 50%,rgba(3,5,18,0)),radial-gradient(ellipse 22% 70% at 0% 60%,rgba(3,5,18,.44),rgba(3,5,18,.16) 50%,rgba(3,5,18,0)),radial-gradient(ellipse 22% 70% at 100% 60%,rgba(3,5,18,.44),rgba(3,5,18,.16) 50%,rgba(3,5,18,0));}'+
  '#jjst .jjcam-front[data-rig="hills"] .hz2 b{background:radial-gradient(ellipse 80% 12% at 46% 60%,rgba(180,200,250,.13),rgba(180,200,250,.04) 60%,rgba(180,200,250,0)),radial-gradient(ellipse 50% 10% at 82% 70%,rgba(180,200,250,.1),rgba(180,200,250,0));mix-blend-mode:screen;}'+
  '#jjst .jjcam-front[data-rig="mountains"] .hz2 b{background:radial-gradient(ellipse 80% 34% at 50% 54%,rgba(200,226,255,.12),rgba(200,226,255,.04) 60%,rgba(200,226,255,0)),radial-gradient(ellipse 90% 12% at 50% 76%,rgba(210,230,255,.1),rgba(210,230,255,0));mix-blend-mode:screen;}'+
  '#jjst .jjcam-front[data-rig="forest"] .sh{opacity:1;background:radial-gradient(ellipse 130% 42% at 50% -14%,rgba(2,8,16,.56),rgba(2,8,16,.24) 50%,rgba(2,8,16,0)),radial-gradient(ellipse 24% 74% at 0% 56%,rgba(2,8,16,.5),rgba(2,8,16,.2) 50%,rgba(2,8,16,0)),radial-gradient(ellipse 24% 74% at 100% 56%,rgba(2,8,16,.46),rgba(2,8,16,.18) 50%,rgba(2,8,16,0));}'+
  '#jjst .jjcam-front[data-rig="forest"] .vg{opacity:.8;}'+
  '#jjst .jjcam-front[data-rig="forest"] .hz2 b{-webkit-mask-image:linear-gradient(to bottom,#000 0,#000 30%,rgba(0,0,0,.35) 70%,rgba(0,0,0,0) 92%);mask-image:linear-gradient(to bottom,#000 0,#000 30%,rgba(0,0,0,.35) 70%,rgba(0,0,0,0) 92%);background:linear-gradient(112deg,rgba(200,240,255,0) 14%,rgba(205,242,255,.15) 18%,rgba(200,240,255,0) 23%),linear-gradient(112deg,rgba(200,240,255,0) 31%,rgba(214,246,255,.2) 36%,rgba(200,240,255,0) 42%),linear-gradient(112deg,rgba(200,240,255,0) 52%,rgba(214,246,255,.13) 55%,rgba(200,240,255,0) 59%),linear-gradient(112deg,rgba(200,240,255,0) 66%,rgba(214,246,255,.17) 71%,rgba(200,240,255,0) 77%);mix-blend-mode:screen;animation-duration:14s;}'+
  '#jjst .jjcam-back[data-rig="forest"]{background:radial-gradient(ellipse 5% 1.6% at 22% 76%,rgba(200,240,255,.16),rgba(200,240,255,0)),radial-gradient(ellipse 7% 2% at 41% 79%,rgba(200,240,255,.13),rgba(200,240,255,0)),radial-gradient(ellipse 4% 1.4% at 58% 74%,rgba(200,240,255,.14),rgba(200,240,255,0)),radial-gradient(ellipse 6% 1.8% at 77% 78%,rgba(200,240,255,.12),rgba(200,240,255,0));}'+
  '#jjst .jjcam-back[data-rig="forest"] .orb,#jjst .jjcam-front[data-rig="forest"] .orb{opacity:0;}#jjst .jjcam-back[data-rig="forest"][data-lit="orb"] .orb{opacity:1;}#jjst .jjcam-front[data-rig="forest"][data-lit="orb"] .orb{opacity:.85;}'+
  '#jjst .jjcam-back[data-rig="forest"] .orb b{background:radial-gradient(closest-side,rgba(255,226,120,.72),rgba(255,206,90,.32) 42%,rgba(255,196,80,.08) 74%,rgba(255,196,80,0));animation:jjcamGlint 2.1s ease-in-out infinite;}'+
  '#jjst .jjcam-front[data-rig="forest"] .orb b{background:radial-gradient(closest-side,rgba(255,236,150,.28),rgba(255,214,110,.1) 55%,rgba(255,214,110,0));animation:jjcamGlint 2.1s ease-in-out infinite;}'+
  '#jjst .jjcam-back[data-rig="forest"] .magic,#jjst .jjcam-front[data-rig="forest"] .magic{opacity:0;}#jjst .jjcam-back[data-rig="forest"][data-flare] .magic{opacity:1;}#jjst .jjcam-front[data-rig="forest"][data-flare] .magic{opacity:.75;}'+
  '#jjst .jjcam-back[data-rig="forest"] .magic b{background:radial-gradient(closest-side,rgba(216,120,255,.78),rgba(176,96,255,.36) 42%,rgba(150,80,255,.1) 74%,rgba(150,80,255,0));animation:jjcamGlint 2.6s ease-in-out infinite;}'+
  '#jjst .jjcam-front[data-rig="forest"] .magic b{background:radial-gradient(closest-side,rgba(226,150,255,.3),rgba(190,110,255,.12) 55%,rgba(190,110,255,0));animation:jjcamGlint 2.6s ease-in-out infinite;}'+
  '@keyframes jjcamHaze{0%{transform:translate(-2.5%,0) scale(1);}50%{transform:translate(1%,-1.2%) scale(1.04);}100%{transform:translate(2.5%,.6%) scale(1.01);}}'+
  '@media (prefers-reduced-motion:reduce){#jjst .jjcam-front .hz2 b,#jjst .jjcam-moon b{animation:none;}}'+
  '@media (prefers-reduced-motion:reduce){#jjst .jjcam-back i b,#jjst .jjcam-front i b,#jjst .jjcam-win i b,#jjst .jjcam-hz b{animation:none;}}'+
  /* s98 · Replay Storytime: the last banner turns into the CTA while the vortex spins. The line blows away as motes, the
     parchment takes an arcane light, runes and sparks orbit it (the back half passes behind the scroll: two layers, #jjst-ctab
     under the banner and #jjst-ctaf over it, the same box as #jjst-cap), and the words write themselves in with a shimmer.
     Only opacity / transform animate; every glow is a radial gradient that fades to nothing (no edges). */
  '#jjst .jjst-ctabox{position:absolute;left:50%;bottom:7cqh;translate:-50% 0;width:min(83cqw,1350px);aspect-ratio:1295 / 200;pointer-events:none;}'+
  '#jjst-ctab{z-index:10;}#jjst-ctaf{z-index:12;}'+
  '#jjst-ctab .glow{position:absolute;inset:-110% -10%;background:radial-gradient(closest-side,rgba(165,80,255,.75),rgba(130,55,230,.42) 34%,rgba(255,180,70,.16) 64%,rgba(255,180,70,0) 100%);opacity:0;transition:opacity 1.6s ease;}'+
  '#jjst-ctab .rim{position:absolute;inset:0;filter:blur(clamp(6px,1cqw,16px));scale:1.035 1.12;opacity:0;transition:opacity 1.8s ease .3s;}'+
  '#jjst-ctab .rim i{position:absolute;inset:0;background:linear-gradient(90deg,#b46bff,#ffd36b 28%,#ff8af0 50%,#ffd36b 72%,#b46bff);-webkit-mask:url(\''+BANNER+'\') no-repeat center/contain;mask:url(\''+BANNER+'\') no-repeat center/contain;}'+
  '#jjst-ctab.on .rim{opacity:.95;animation:jjstCtaRim 2.6s ease-in-out infinite;}#jjst.cta-hot #jjst-ctab.on .rim{animation-duration:1.1s;}'+
  '@keyframes jjstCtaRim{0%,100%{opacity:.7;}50%{opacity:1;}}'+
  '#jjst-ctab.on .glow{opacity:.85;animation:jjstCtaGlow 3.4s ease-in-out infinite;}'+
  '#jjst.cta-hot #jjst-ctab.on .glow{opacity:1;animation-duration:1.6s;}'+
  '@keyframes jjstCtaGlow{0%,100%{scale:1;}50%{scale:1.07 1.16;}}'+
  '#jjst .jjst-ctabox .rn{position:absolute;left:0;top:0;font-size:clamp(13px,2cqw,34px);line-height:1;color:#ffe08a;text-shadow:0 0 .3em rgba(255,210,100,1),0 0 .8em rgba(255,170,60,.7),0 0 1.4em rgba(190,110,255,.9);will-change:transform,opacity;opacity:0;}'+
  '#jjst .jjst-ctabox .spk{position:absolute;left:0;top:0;width:clamp(12px,1.5cqw,26px);height:clamp(12px,1.5cqw,26px);background:radial-gradient(closest-side,#fff,rgba(255,226,150,.85) 28%,rgba(200,130,255,.35) 60%,rgba(200,130,255,0));will-change:transform,opacity;opacity:0;}'+
  '#jjst .jjst-ctabox .spk::before,#jjst .jjst-ctabox .spk::after{content:"";position:absolute;left:50%;top:50%;width:260%;height:10%;translate:-50% -50%;background:radial-gradient(closest-side,rgba(255,255,255,.95),rgba(255,230,170,0));}#jjst .jjst-ctabox .spk::after{rotate:90deg;}'+
  '#jjst-cap.cta{cursor:pointer;outline:none;transition:opacity .8s ease,scale .4s cubic-bezier(.22,1,.36,1);}'+
  '#jjst.cta-hot #jjst-cap.cta{scale:1.025;}#jjst #jjst-cap.cta.cta-down{scale:.985;transition-duration:.12s;}'+
  '#jjst-cap.cta #jjst-cap-text{opacity:0;filter:blur(6px);letter-spacing:.14em;transition:opacity 1s ease,filter 1s ease,letter-spacing 1.2s ease;}'+
  '#jjst-cap .jjst-ctasheen{position:absolute;inset:14% 11%;-webkit-mask:linear-gradient(90deg,transparent,#000 18%,#000 82%,transparent);mask:linear-gradient(90deg,transparent,#000 18%,#000 82%,transparent);pointer-events:none;background:radial-gradient(closest-side,rgba(255,236,170,.8),rgba(255,214,140,.45) 40%,rgba(214,150,255,.3) 70%,rgba(214,150,255,0) 100%);mix-blend-mode:screen;opacity:0;transition:opacity 1.4s ease .25s;}'+
  '#jjst-cap .jjst-ctatint{position:absolute;inset:6% 12% 12%;-webkit-mask:linear-gradient(90deg,transparent,#000 22%,#000 78%,transparent);mask:linear-gradient(90deg,transparent,#000 22%,#000 78%,transparent);pointer-events:none;background:radial-gradient(closest-side,rgba(150,80,230,0) 30%,rgba(150,80,230,.22) 60%,rgba(125,55,215,.34) 80%,rgba(125,55,215,0) 100%);mix-blend-mode:multiply;opacity:0;transition:opacity 1.6s ease .1s;}'+
  '#jjst-cap.cta-lit .jjst-ctatint{opacity:1;}'+
  '#jjst-cap .jjst-ctains{position:absolute;top:50%;translate:0 -50%;font-size:clamp(11px,1.45cqw,25px);letter-spacing:.5em;white-space:nowrap;color:#a0661d;pointer-events:none;}#jjst-cap .jjst-ctains.l{left:24%;}#jjst-cap .jjst-ctains.r{right:23.5%;letter-spacing:.5em;}#jjst-cap.cta,#jjst .jjst-ctabox{transition-property:opacity,scale,width,bottom;transition-duration:.8s,.4s,.9s,.9s;transition-timing-function:ease,cubic-bezier(.22,1,.36,1),cubic-bezier(.22,1,.36,1),cubic-bezier(.22,1,.36,1);}#jjst-cap.cta-small,#jjst.cta-small .jjst-ctabox{width:min(92cqw,max(330px,50cqw),780px);}#jjst-cap.cta-small .jjst-ctat{font-size:clamp(14px,1.75cqw,31px);}#jjst-cap.cta-small .jjst-ctains{font-size:clamp(9px,.9cqw,15px);letter-spacing:.35em;}@media (max-width:700px){#jjst-cap.cta-small,#jjst.cta-small .jjst-ctabox{width:90cqw;bottom:calc(7cqh + 64px);}#jjst-cap.cta-small .jjst-ctat{font-size:clamp(15px,4.6cqw,22px);}}'+
  '#jjst-cap .jjst-ctains i{font-style:normal;display:inline-block;opacity:0;}'+
  '#jjst-cap.cta-in .jjst-ctains i{animation:jjstCtaIns .9s ease-out calc(400ms + var(--i) * 240ms) forwards,jjstCtaFlick 2.8s ease-in-out calc(1400ms + var(--i) * 370ms) infinite;}'+
  '@keyframes jjstCtaIns{0%{opacity:0;color:#fff4c8;text-shadow:0 0 .8em #ffd36b,0 0 1.6em rgba(190,110,255,.95);}100%{opacity:.85;color:#a0661d;text-shadow:0 0 .35em rgba(255,200,90,.9),0 0 .8em rgba(190,110,255,.5);}}'+
  '@keyframes jjstCtaFlick{0%,100%{opacity:.85;text-shadow:0 0 .35em rgba(255,200,90,.9),0 0 .8em rgba(190,110,255,.5);}50%{opacity:1;color:#c27f22;text-shadow:0 0 .5em rgba(255,215,110,1),0 0 1.1em rgba(190,110,255,.8);}}'+
  '#jjst.cta-hot #jjst-cap.cta-in .jjst-ctains i{animation-duration:.9s,1s;}@media (max-width:700px){#jjst-cap .jjst-ctains{display:none;}}'+
  '#jjst-cap.cta-lit .jjst-ctasheen{opacity:.8;animation:jjstCtaSheen 3.4s ease-in-out infinite;}#jjst.cta-hot #jjst-cap.cta-lit .jjst-ctasheen{animation-duration:1.6s;}'+
  '@keyframes jjstCtaSheen{0%,100%{opacity:.62;scale:1;}50%{opacity:.95;scale:1.05 1.12;}}'+
  '#jjst-cap .jjst-ctamote{position:absolute;left:0;top:0;width:var(--s);height:var(--s);margin:calc(var(--s) / -2) 0 0 calc(var(--s) / -2);background:radial-gradient(closest-side,#fff,var(--c) 45%,rgba(0,0,0,0));opacity:0;pointer-events:none;animation:jjstCtaMote var(--d) cubic-bezier(.2,.6,.4,1) var(--dl) forwards;}'+
  '@keyframes jjstCtaMote{0%{opacity:0;transform:translate(0,0) scale(.4);}18%{opacity:1;transform:translate(calc(var(--dx) * .12),calc(var(--dy) * .12)) scale(1);}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.3);}}'+
  '#jjst-cap .jjst-ctat{position:absolute;left:0;right:0;top:50%;translate:0 -52%;text-align:center;white-space:nowrap;pointer-events:none;font-size:clamp(15px,2.9cqw,52px);line-height:1.1;letter-spacing:.02em;font-kerning:none;color:#3a0f63;}'+
  '#jjst-cap .jjst-ctat .wr i{display:inline-block;font-style:normal;opacity:0;text-shadow:0 0 .2em rgba(255,228,150,.95),0 0 .55em rgba(255,196,90,.6),0 0 1.1em rgba(170,90,255,.55);}'+
  '#jjst-cap.cta-in.cta-wave .jjst-ctat .wr i{opacity:1;animation:jjstCtaWave 2.8s ease-in-out calc(var(--i) * 85ms) infinite;}#jjst.cta-hot #jjst-cap.cta-wave .jjst-ctat .wr i{animation-duration:1.2s;}'+
  '@keyframes jjstCtaWave{0%,100%{transform:translateY(0);}50%{transform:translateY(-.07em);}}'+
  '#jjst-cap.cta-in .jjst-ctat .wr i{animation:jjstCtaLetter 1s cubic-bezier(.2,.7,.25,1) calc(var(--i) * 62ms) both;}'+
  '@keyframes jjstCtaLetter{0%{opacity:0;transform:translateY(.4em) scale(1.45);filter:blur(9px);color:#ffe7a0;text-shadow:0 0 .6em #ffd36b,0 0 1.4em rgba(190,110,255,.95);}55%{opacity:1;filter:blur(0);color:#fff1c4;}100%{opacity:1;transform:none;filter:blur(0);}}'+
  '#jjst-cap .jjst-ctat .sh{position:absolute;inset:0;color:transparent;background:linear-gradient(100deg,rgba(255,240,190,0) 38%,rgba(255,246,214,.95) 48%,rgba(255,205,110,.9) 52%,rgba(255,240,190,0) 62%) no-repeat;background-size:260% 100%;background-position:130% 0;-webkit-background-clip:text;background-clip:text;opacity:0;}'+
  '#jjst-cap.cta-shine .jjst-ctat .sh{opacity:1;animation:jjstCtaShine 3.6s ease-in-out infinite;}#jjst.cta-hot #jjst-cap.cta-shine .jjst-ctat .sh{animation-duration:1.5s;}'+
  '@keyframes jjstCtaShine{0%{background-position:130% 0;}55%,100%{background-position:-30% 0;}}'+
  '#jjst-cap .jjst-ctat .qp{position:absolute;top:50%;left:var(--q0);width:2.2em;height:2.2em;margin:-1.1em 0 0 -1.1em;background:radial-gradient(closest-side,#fff,rgba(255,215,120,.8) 30%,rgba(190,110,255,.3) 62%,rgba(190,110,255,0));opacity:0;}'+
  '#jjst-cap.cta-in .jjst-ctat .qp{animation:jjstCtaQuill var(--qd) linear forwards;}'+
  '@keyframes jjstCtaQuill{0%{left:var(--q0);opacity:0;}8%{opacity:1;}88%{opacity:1;}100%{left:var(--q1);opacity:0;}}'+
  '#jjst.cta-hot #jjst-cap .jjst-ctat{color:#4b137e;}'+
  '#jjst-cap.cta:focus-visible .jjst-ctat .wr i{text-shadow:0 0 .35em rgba(255,226,140,1),0 0 .9em rgba(200,120,255,.95);}'+
  '#jjst-cap.cta-go .jjst-ctat{transition:opacity .5s ease .1s,scale .6s cubic-bezier(.2,.7,.2,1),filter .6s ease;opacity:0;scale:1.18;filter:blur(6px);}'+
  '#jjst .jjst-ctaburst{position:absolute;left:var(--x);top:var(--y);width:0;height:0;}'+
  '#jjst .jjst-ctaburst .fl{position:absolute;left:0;top:0;width:60cqmin;height:60cqmin;margin:-30cqmin 0 0 -30cqmin;background:radial-gradient(closest-side,rgba(255,255,255,.95),rgba(255,214,130,.6) 24%,rgba(170,90,255,.35) 55%,rgba(170,90,255,0));scale:.1;opacity:1;transition:scale .8s cubic-bezier(.15,.7,.25,1),opacity .8s ease .15s;}'+
  '#jjst .jjst-ctaburst.go .fl{scale:1.6;opacity:0;}'+
  '#jjst .jjst-ctaburst .sp{position:absolute;left:0;top:0;width:var(--s);height:var(--s);margin:calc(var(--s) / -2) 0 0 calc(var(--s) / -2);background:radial-gradient(closest-side,#fff,var(--c) 45%,rgba(0,0,0,0));transition:transform var(--d) cubic-bezier(.1,.75,.25,1),opacity var(--d) ease-in;}'+
  '#jjst .jjst-ctaburst.go .sp{transform:translate(var(--dx),var(--dy)) scale(.35);opacity:0;}'+
  /* reduced motion: no motes, no orbit, no write-in — the words simply fade up on the lit scroll */
  '#jjst-cap.cta.rm .jjst-ctat .wr i{animation:none!important;opacity:1;}#jjst-cap.cta.rm .jjst-ctat{opacity:0;transition:opacity 1.2s ease .4s;}#jjst-cap.cta.rm.cta-in .jjst-ctat{opacity:1;}'+
  '#jjst-cap.cta.rm .jjst-ctasheen,#jjst.cta-rm #jjst-ctab.on .glow,#jjst.cta-rm #jjst-ctab.on .rim{animation:none!important;}#jjst-cap.cta.rm .jjst-ctains i{animation:none!important;opacity:.85;transition:opacity 1.2s ease .6s;}#jjst-cap.cta.rm #jjst-cap-text{filter:none;letter-spacing:inherit;}'+
  '';

  window.JJ_LB = !/[?&]lb=0\b/.test(location.search) && !!(window.CSS && window.CSS.supports && window.CSS.supports('width', '1cqw'));   // s140: the letterbox (see #jjst-pane; window.CSS: this file's own CSS is the style sheet text)
  var style = document.createElement('style'); style.id = 'jj-storytime-style'; style.textContent = CSS; document.head.appendChild(style);

  /* ---- markup ---- */
  var wrap = document.createElement('div'); wrap.id = 'jjst'; if (window.JJ_LB) wrap.className = 'lb';
  wrap.innerHTML =
    '<div id="jjst-pane"><div id="jjst-bgwrap"><img id="jjst-sky" alt=""><div id="jjst-night"></div></div><div id="jjst-dark"></div><div id="jjst-layers"></div></div><div id="jjst-lbf"></div><div id="jjst-paused" aria-hidden="true"><span>Paused</span><p>Press \u2018Space\u2019 to resume or pause whenever. You can also use the \u2018Left\u2019 &amp; \u2018Right\u2019 arrows to go to the next scene when ready</p></div>'+
    '<div id="jjst-black"></div>'+
    '<div id="jjst-fade"></div>'+
    '<div id="jjst-progress"><div id="jjst-progress-fill"></div></div>'+
    '<div id="jjst-cap"><div id="jjst-cap-text"></div></div>'+
    '<div id="jjst-skipcta" class="next-section-button" data-cursor="hover"><div class="button-text">Skip the story</div><svg class=\"ico\" viewBox=\"0 0 29 29\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M15.36 15.2987L7.45868 21.5688C7.27177 21.7172 7.04746 21.7897 6.82544 21.7897C6.52524 21.7897 6.22732 21.6571 6.02567 21.4045C5.67564 20.9639 5.74925 20.3227 6.19106 19.9726L13.0853 14.5013L6.19106 9.02998C5.75041 8.67995 5.67677 8.03876 6.02567 7.5981C6.3757 7.15745 7.01689 7.08267 7.45755 7.43271L15.3588 13.7028C15.6024 13.8965 15.744 14.1899 15.744 14.5014C15.744 14.8129 15.6024 15.1063 15.3588 15.3L15.36 15.2987ZM22.8096 13.7015L14.9083 7.43143C14.4676 7.0814 13.8265 7.15501 13.4764 7.59682C13.1264 8.03748 13.2 8.67867 13.6418 9.0287L20.5361 14.5L13.6418 19.9714C13.2012 20.3214 13.1275 20.9626 13.4764 21.4032C13.6781 21.657 13.9749 21.7884 14.2762 21.7884C14.4982 21.7884 14.7214 21.7159 14.9094 21.5675L22.8107 15.2975C23.0543 15.1038 23.1959 14.8104 23.1959 14.4988C23.1959 14.1873 23.0543 13.8939 22.8107 13.7002L22.8096 13.7015Z\"/></svg></div>'+
    '<div id="jjst-skipov" class="jjst-ov"><div class="card"><p class="q">Are you sure you want to skip the story?</p>'+
    '<p class="sub">There\u2019s only <b id="jjst-left">0</b> seconds left and it\u2019s about to get good!</p>'+
    '<div class="row"><button type="button" id="jjst-back" class="jjst-glass" data-cursor="hover"><div class="button_text">Back to the story</div></button><button type="button" id="jjst-skipgo" class="jjst-glass" data-cursor="hover"><div class="button_text">Skip this part</div></button></div></div></div>'+
    '<div id="jjst-sndov" class="jjst-ov"><div class="card"><p class="q">I\'ve noticed your sound is off!</p><p class="sub">You\'ll only be experiencing <b>50%</b> of the story if you continue without, no worries if not!</p>'+
    '<div class="row"><button type="button" id="jjst-nosnd" class="jjst-glass secondary" data-cursor="hover"><div class="button_text">Continue without sound</div></button><button type="button" id="jjst-yessnd" class="jjst-glass" data-cursor="hover"><div class="button_text">Turn on the sound!</div></button></div></div></div>'+
    '<div id="jjst-loader"><div class="ring"></div><div class="txt">Loading the tale…</div></div>';

  /* ---- composition: bg crossfade + character layers ---- */
  /* every story timer goes through sched() so Skip can freeze the whole tale and resume it exactly where it was */
  var pauseSweep = 0, TIMERS = {}, storyPaused = false, pausedVideos = [], pausedHowls = [];
  var GLIDE_PROPS = /^(left|right|top|bottom|width|height|transform|translate|scale|rotate)$/;   // s105: CSS transitions that move things (pause holds these; fades still land)
  function sched(fn, ms){ var rec = { fn: fn, due: performance.now() + ms, t: 0 };
    rec.t = setTimeout(function () { delete TIMERS[rec.t]; fn(); }, ms); TIMERS[rec.t] = rec; return rec.t; }
  function unsched(id){ if (id == null) return; clearTimeout(id); var r = TIMERS[id]; if (r) { clearTimeout(r.t); delete TIMERS[id]; } }
  function pauseStory(softAnims){ if (storyPaused) return; storyPaused = true; var now = performance.now();
    Object.keys(TIMERS).forEach(function (k) { var r = TIMERS[k]; clearTimeout(r.t); r.rem = Math.max(0, r.due - now); });
    pausedVideos = []; document.querySelectorAll('#jjst video').forEach(function (v) { if (!v.paused && !v.ended) { pausedVideos.push(v); v.pause(); } });
    var freeze = function () { if (!storyPaused) return; try { document.getElementById('jjst').getAnimations({ subtree: true }).forEach(function (a) { if (window.CSSTransition && a instanceof CSSTransition && !GLIDE_PROPS.test(a.transitionProperty || '')) return;   /* a crossfade caught halfway (the ride's Joe handing over to the aura pose) must land, or nobody is on screen while paused. s105: but a glide (left / bottom / width / transform…: the ride crossing the hills, the send-off, Trogdor over the mountains, the orb's flight) holds — it used to carry Joe on across a paused frame */ var tg = a.effect && a.effect.target; if (tg && tg.closest && tg.closest('#jjst-paused')) return; if (a.playState === 'running') a.pause(); }); } catch (e) {} };   // the PAUSED card itself keeps breathing
    if (softAnims) setTimeout(freeze, 1900); else freeze();      // softAnims: the new shot's crossfade/moves are allowed to land first
    pausedHowls = []; musPauseAt = now; var hush = function () { try { (window.Howler ? Howler._howls : []).forEach(function (h) { if (h.playing()) { var ids = (h._sounds || []).filter(function (q) { return !q._paused && !q._ended; }).map(function (q) { return q._id; });   /* s113: each playing instance by id, so a resume brings back exactly those (a Howl with two paused instances — a music crossfade — used to start a third) */
      if (!ids.length) { h.pause(); ids = [null]; } else ids.forEach(function (id) { h.pause(id); }); pausedHowls.push({ h: h, ids: ids }); } }); } catch (e) {} };
    hush(); clearInterval(pauseSweep);                          // a sound that was still loading, or a clip that starts late, would otherwise play on over the pause
    pauseSweep = setInterval(function () { if (!storyPaused) { clearInterval(pauseSweep); return; } hush();
      document.querySelectorAll('#jjst video').forEach(function (v) { if (!v.paused && !v.ended) { if (pausedVideos.indexOf(v) < 0) pausedVideos.push(v); v.pause(); } }); if (!softAnims || performance.now() - now > 1900) freeze(); }, 350);
  }
  /* ---- s123 · TURN YOUR PHONE (Joe's idea, both parts). On a phone held upright (a touch device with no hover, portrait, its short side under 600 CSS px; a tablet
     upright and a narrow desktop window are left alone) a full-screen card sits over the tale: a small phone that turns from upright to sideways, 'Turn your phone
     sideways for Storytime', and one quiet link, 'Skip to My Story'. While it is up the tale is paused exactly as the pause button would pause it (clock, clips, sound;
     nothing under the card can be pressed), and a tale that has not begun does not begin behind it (the loader and the sound prompt come first, as before). Turned
     sideways, the card fades and the tale starts or carries on by itself; turned upright again mid-tale, the card comes back and the tale waits. The orientation is
     never locked (iOS cannot). The card lives outside #jjst, so the pause does not freeze its own little animation. ?rotate=1 treats any window as a phone (upright =
     taller than wide), for testing on a desktop. The portrait layout under the card is untouched. ---- */
  var ROT_FORCE = /[?&]rotate=1\b/.test(location.search), rotEl = null, rotOn = false, rotPaused = false, rotWaitFn = null, rotDead = false, rotT = 0, rotArmed = false;   // rotArmed: the tale has reached its start (the loader and the sound prompt are done): the card may show from here on
  function rotNeed(){ if (rotDead || !document.getElementById('jjst')) return false; var w = window.innerWidth, h = window.innerHeight, q = function (m) { try { return window.matchMedia(m).matches; } catch (e) { return false; } };
    if (ROT_FORCE) return h > w; return q('(pointer: coarse)') && q('(hover: none)') && q('(orientation: portrait)') && Math.min(w, h) < 600; }
  function rotCard(){ if (rotEl) return rotEl; rotEl = document.createElement('div'); rotEl.id = 'jjst-rotate'; rotEl.setAttribute('role', 'dialog'); rotEl.setAttribute('aria-label', 'Turn your phone sideways for Storytime');
    rotEl.innerHTML = '<div class="pn"><i class="ph" aria-hidden="true"><svg viewBox="0 0 40 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="34" height="58" rx="7" stroke="currentColor" stroke-width="3.2"/><path d="M15 9.5h10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="53" r="2.4" fill="currentColor"/></svg></i>' +
      '<p>Turn your phone sideways for Storytime</p><button type="button" class="sk" data-cursor="hover">Skip to My Story</button></div>';
    rotEl.addEventListener('click', function (e) { e.stopPropagation(); }); rotEl.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    rotEl.querySelector('.sk').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); rotDead = true; rotOn = false; rotWaitFn = null; rotPaused = false; rotEl.classList.remove('on'); storyPaused = false;   // (as the Skip card does: the tale is left where it stood)
      if (XP && XP.leave) { try { XP.leave(); } catch (x) {} } if (window.jjStory && window.jjStory.navDrop) window.jjStory.navDrop(); skipStory(); });
    document.body.appendChild(rotEl); return rotEl; }
  function rotSync(){ if (!rotArmed) return; var need = rotNeed();
    if (need && !rotOn) { rotOn = true; var c = rotCard(); void c.offsetWidth; c.classList.add('on'); var ctl0 = document.getElementById('jjst-ctl');
      if (!storyPaused && !endLock) { rotPaused = true; pauseStory(); if (ctl0 && ctl0.classList.contains('on') && window.jjStory.ctlSync) window.jjStory.ctlSync(); } }   // (also before the first line: the opening shot's clips and its bed wait too)
    else if (!need && rotOn) { rotOn = false; if (rotEl) rotEl.classList.remove('on');
      if (rotPaused) { rotPaused = false; var sg = document.getElementById('jjst'), so = document.getElementById('jjst-skipov'); if (sg && !sg.classList.contains('user-paused') && !(so && so.classList.contains('on')) && !document.body.classList.contains('jj-modal-open') && !document.hidden) { resumeStory(); if (window.jjStory.ctlSync) window.jjStory.ctlSync(); } }
      if (rotWaitFn) { var f = rotWaitFn; rotWaitFn = null; f(); } } }
  function rotGate(fn){ rotArmed = true; rotSync(); if (rotOn) rotWaitFn = fn; else fn(); }   // a start (the first line) waits behind the card
  function rotSoon(){ clearTimeout(rotT); rotT = setTimeout(rotSync, 120); }
  window.addEventListener('resize', rotSoon); window.addEventListener('orientationchange', rotSoon);
  try { var rotMq = window.matchMedia('(orientation: portrait)'); if (rotMq.addEventListener) rotMq.addEventListener('change', rotSoon); else if (rotMq.addListener) rotMq.addListener(rotSoon); } catch (e) {}
  function resumeStory(){ var sg = document.getElementById('jjst'); if (sg) sg.classList.remove('user-paused'); if (!storyPaused) return; storyPaused = false; clearInterval(pauseSweep);
    Object.keys(TIMERS).forEach(function (k) { var r = TIMERS[k]; r.due = performance.now() + r.rem;
      r.t = setTimeout(function () { delete TIMERS[k]; r.fn(); }, r.rem); });
    pausedVideos.forEach(function (v) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () { setTimeout(function () { if (!storyPaused && v.isConnected && v.paused) { var p2 = v.play(); if (p2 && p2.catch) p2.catch(function () {}); } }, 300); }); }); pausedVideos = [];   // s108: a clip whose play() was refused on resume gets one more try
    try { document.getElementById('jjst').getAnimations({ subtree: true }).forEach(function (a) { if (a.playState === 'paused') a.play(); }); } catch (e) {}
    musClk.at += performance.now() - musPauseAt;               // s113: the music's story clock stood still with the tale
    pausedHowls.forEach(function (p) { p.ids.forEach(function (id) { try { if (id == null) p.h.play(); else { var q = p.h._soundById && p.h._soundById(id); if (q && q._ended) return; p.h.play(id); } } catch (e) {} }); }); pausedHowls = [];
    if (bookOn && bookCtl && bookCtl.resumed) bookCtl.resumed();   /* s126 · ?book=1 only: the shot held still under the storybook stays held */   // (an instance stopped while paused — a step dropped it — stays stopped)
  }
  var bgWrap, layersWrap, curComp = null, curBg = null, curBgLayer = null, animTimers = [], layerRecs = {};
  var BG_TR = ', transform 1.6s ease-in-out, filter 1.2s ease';
  var snowEl = null, sparkEl = null, hintEl = null, hintT = 0, hintPlace = null;
  function setSparkle(mode){                                // the enchanted forest: motes of light, a fresh scatter every shot; 'portal' = denser and coloured, clustered round the portal
    if (sparkEl) { var old = sparkEl; sparkEl = null; old.classList.remove('on'); setTimeout(function () { old.remove(); }, 1500); }
    if (capEl) { capEl.classList.toggle('forest', !!mode);          // a tree spirit and a mushroom perch on the banner through the forest
      if (mode && !capEl.querySelector('.jjst-capdeco')) { var cd = document.createElement('div'); cd.className = 'jjst-capdeco'; cd.innerHTML = '<img class="sp" alt="" src="' + F('spirit-1') + '"><span class="muw" style="--gc:rgba(196,130,255,.9)"><img class="mu" alt="" src="' + F('mush-purple') + '">' + sporeHtml(6) + '</span>'; capEl.appendChild(cd);
        var cc = document.createElement('img'); cc.className = 'jjst-capcrystal'; cc.alt = ''; cc.src = F('shards'); capEl.appendChild(cc); } }
    if (!mode) return;
    var portal = mode === 'portal', near = mode === 'near', n = portal ? 150 : 70, sc = near ? 1.9 : 1;
    var cols = portal ? ['#ff6ad5', '#c77dff', '#7df9ff', '#ffe27a', '#b8ffd9', '#ffffff', '#ff9de2', '#9d6bff', '#5ee7ff', '#ffd166'] : ['#fff7d6', '#e6ffe9', '#fff2b8', '#d8f3ff'];
    sparkEl = document.createElement('div'); sparkEl.id = 'jjst-sparkle'; if (portal) sparkEl.classList.add('portal'); var h = '';
    for (var i = 0; i < n; i++) {
      var cl = portal && i % 4 !== 0, big = i % 4 === 0, sz = ((big ? (7 + Math.random() * 8) : (2 + Math.random() * 3.5)) * sc).toFixed(1), c = cols[i % cols.length];
      var x = cl ? (54 + Math.random() * 46) : Math.random() * 100, y = cl ? (12 + Math.random() * 60) : (8 + Math.random() * 62);
      h += '<i' + (big ? ' class="st"' : '') + ' style="left:' + x.toFixed(1) + '%;top:' + y.toFixed(1) + '%;width:' + sz + 'px;height:' + sz + 'px;--c:' + c + ';--d:' + ((portal ? 1.4 : 2.4) + Math.random() * 2.4).toFixed(1) + 's;--dl:-' + (Math.random() * 5).toFixed(1) + 's;--fd:' + (7 + Math.random() * 9).toFixed(1) + 's;--fx:' + (Math.random() * 6 - 3).toFixed(1) + 'cqw;--fy:' + (-(3 + Math.random() * 7)).toFixed(1) + 'cqh"></i>'; }
    sparkEl.innerHTML = h; layersWrap.parentNode.insertBefore(sparkEl, layersWrap.nextSibling); pfxAdopt(sparkEl);   /* s130: drawn on one canvas */
    setTimeout(function () { if (sparkEl) sparkEl.classList.add('on'); }, 30);
  }
  /* the first scene: a bobbing arrow over everything that can be pressed, and a themed hint pill in the middle */
  function setHints(layers){
    clearInterval(hintT); hintT = 0; hintPlace = null;
    if (!layers) { if (hintEl) { hintEl.classList.remove('on'); setTimeout(function () { if (hintEl) { hintEl.remove(); hintEl = null; } }, 700); } return; }
    if (!hintEl) { hintEl = document.createElement('div'); hintEl.id = 'jjst-hints';
      hintEl.innerHTML = '<div id="jjst-hint"><span>Hint: Some things are interactive...</span></div>' + layers.filter(function (L) { return L.hint; }).map(function (L) { return '<i class="ar" data-k="' + L.key + '"><svg viewBox="0 0 24 24"><path d="M12 20 4 10h5V4h6v6h5z"/></svg></i>'; }).join('');
      layersWrap.parentNode.appendChild(hintEl); setTimeout(function () { if (hintEl) hintEl.classList.add('on'); }, 1600); }
    var place = function () { if (!hintEl) return; hintEl.querySelectorAll('.ar').forEach(function (a) { var rec = layerRecs[a.getAttribute('data-k')]; if (!rec) { a.style.opacity = '0'; return; }
      var r = rec.el.getBoundingClientRect(); if (!r.width) { a.style.opacity = '0'; return; } a.style.opacity = '';
      var cx = r.left + r.width * (a.getAttribute('data-k') === 'dragonloop' ? .62 : .5), top = r.top + r.height * (a.getAttribute('data-k') === 'dragonloop' ? .22 : 0);
      a.style.left = cx + 'px'; a.style.top = (cam ? Math.max(top - 14, 120) : top - 14) + 'px'; }); };   // (s96: a push can lift Trogdor's arrow into the nav — it stops under it)
    place(); hintT = setInterval(place, 400); hintPlace = place;   // the camera calls it every frame while it moves (s96)
  }
  /* ---- s96 · the cavern camera: a 2.5D rig in code (Joe liked the Blender version's camera and its shadows) ----
     The shot's plates move by depth: the night sky stays put (it's at infinity), the cave board takes .9 of the move, the
     chest .96, Trogdor and the props 1, the foreground rock shade 1.14 — so a push opens the cave mouth past the moon.
     Moves are keyed to words in the captions (`cam:` triggers carry no pause, so every line keeps its timing); the one
     delayed beat (the settle after line 1) runs on sched, so a pause holds it. WAAPI on translate/scale only (compositor
     work); pauseStory freezes them with every other animation. Every pose zooms about a point on screen and is clamped,
     so the board never shows an edge. Phones get a fraction of the zoom; prefers-reduced-motion gets no moves at all.
     Lighting: a lens vignette, darker cave walls, a warm fire pool on Trogdor and a gold pool on the chest that swell
     when the camera looks at them, with a slow flicker — pre-soft radial gradients, only opacity/transform ever change. */
  var CAM_STILL = false; try { CAM_STILL = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var CAM_EASE = 'cubic-bezier(.42,0,.36,1)';
  /* s100 · one rig, one config per scene (CAM_RIGS): the comps it covers, its shots, its word beats, its layer depths, its lights.
     shots · key: look at a point (bx, by) of that layer's box; board: a point of the scene art (fractions, cover-fitted); sx, sy: a
       point on screen; ax, ay: nudge it this far across the frame; lit: the light that swells while the camera looks there.
     beats · [shot, ms, delay, need]: a delay parks the move on sched (a pause holds it); need: skipped while that figure is not in
       the shot yet (stepped straight into a line before Trogdor lands).
     start / land: the pose the rig opens on, and the move it makes at once. clip: a beat on a clip's own clock (its light flares
       with it) — it only moves the camera if no word has moved it on already. */
  var FOREST_FAR = ['forest1', 'forest2', 'forest3', 'forest5b'], FOREST_NEAR = ['forest4b', 'forest4', 'forest5', 'forest6', 'forest7'];
  var CAM_RIGS = {
    cavern: { comps: ['cavern'], start: 'wide', depth: { chest: .96 },
      shots: {                                                 // key: look at a point (bx, by) of that layer's box; sx, sy: a point on screen; ax, ay: nudge it this far across the frame
        wide:    { z:1 },
        medium:  { z:1.05, sx:.5, sy:.5 },
        trogdor: { key:'dragonloop', bx:.36, by:.48, z:1.26, ax:.03, ay:-.03, lit:'fire' },   // his head
        chest:   { key:'chest', bx:.5, by:.55, z:1.3, ay:-.04, lit:'gold' }   // no sideways nudge: the chest sits too near the left edge to pull right without showing the board's edge, so the frame closes in round it
      },
      beats: { trogdor:['trogdor', 3000], chest:['chest', 2000], wide:['wide', 2100], settle:['medium', 2600, 3200] },   // the settle: 3.2s after line 1 lands, 2.6s back to medium
      pools: [['fire', 'dragonloop', [.5, .58, 1.05, .9], [.42, .6, .62, .5]], ['gold', 'chest', [.5, .62, 1.7, 1.45], [.5, .52, 1.15, 1.05]]],   // [light, on layer, floor pool cx cy w h, front glow cx cy w h] (fractions of its box)
      /* s103 · the Blender atmosphere (experiments/blender-fx/cavern): seamless loops, light on black, screen-blended (so no alpha
         channel); each rides a plate at its depth. back: moonlit floor mist + dust motes, warm round Trogdor (behind the figures);
         heat: the hoard's breathing glow + embers off the hoard and his nostrils, on his box (box: cx cy w h of it); front: a few big
         soft motes + falling grit; rocks: a still, out-of-focus rock lips in the corners. With fx on, the code's fire pools stand down
         (the renders carry that light). desk: not on phones; phones and reduced motion get the posters (stills) of the rest. */
      fx: [{ key:'back', vid:'fx-cav-back', d:.95 }, { key:'heat', vid:'fx-cav-heat', d:1, on:'dragonloop', box:[.54, .5, .84, .92] },
           { key:'front', vid:'fx-cav-front', d:1.1, desk:true }, { key:'rocks', img:'fx-cav-rocks', d:1.14, desk:true }] },
    /* the village (s100): opens high on the right-hand cottage and drifts across the houses; 'the local villagers!' pushes in on
       them; his flame (2.2s into his clip) takes the camera over to Trogdor and the fire; 'many names' creeps in on him, 'fear
       into the hearts of the locals' swings back to the chickens and the lit windows, 'Trogdor!' goes hard in on his head as the
       black comes down. The black is the handover: the rig dissolves under it when the tavern lands. */
    village: { comps: ['village1', 'village2', 'village3', 'village4'], fadeIn: true, depth: { chicks: 1.04 }, start: 'estab',   // s116: two moves in all — one slow drift across the houses to Trogdor as his flame starts, one slow push on 'Trogdor!' (the landing drift, the villagers and locals beats are gone)
      shots: {
        wide:      { z:1 },
        estab:     { board:[.85, .5], z:1.16 },
        drift:     { board:[.25, .56], z:1.12 },
        villagers: { key:'pitch', bx:.72, by:.45, z:1.18, ay:-.02 },   // s111: every move gentler (Joe: 'one too many times … bit jumpy')
        fire:      { key:'vildragon', bx:0.47, by:0.748, z:1.14, lit:'fire' },   /* s139: between him and the well */
        names:     { key:'vildragon', bx:0.621, by:0.65, z:1.26, lit:'fire' },
        locals:    { key:'chicks', bx:.5, by:.5, z:1.12, ay:-.04 },
        slam:      { key:'vildragon', bx:0.621, by:0.65, z:1.2, lit:'fire' }
      },
      beats: { villagers:['villagers', 3400], names:['names', 1400, 0, 'vildragon'], locals:['locals', 2800], slam:['slam', 2600, 0, 'vildragon'] },   // s111: 'names' is no longer cued (one move fewer); the rest slower
      clip: { key:'vildragon', at:3, beat:['fire', 5200], from:['estab', 'drift', 'villagers'] },   // s139: his first fire is 3 s into the new clip (cut-times.json)
      pools: [['fire', 'vildragon', [0.496, 0.851, 0.654, 0.85], [0.473, 0.751, 0.455, 0.386]]],   /* s139: the same pools on the screen, re-expressed for the new clip's box */
      windows: [[.06, .569, .022, .054], [.145, .573, .023, .047], [.056, .389, .012, .025], [.709, .537, .018, .04], [.759, .436, .019, .049]],   // the five lit windows, measured off the board's yellow (fractions of the 2400x1350 art)
      horizon: [.5, .47, 1.05, .34], sky: 'vil-bg', ar: 2400 / 1350,
      /* s106 · the Blender village (experiments/blender-fx/village): mist + motes, the roofs catching in three stages (the same flames at every
         stage, so each joins on the last one's clock and cross-fades — the fire grows), embers + ash over the lens, dark foliage in the corners,
         a multiply grade per stage (cool night → warmer / redder, clear round each fire). Stage 1 comes ~.5s after his flame starts (the clip's
         2.2s, fxAt) — a fallback 3.5s after 'the local villagers' —, 2 on 'many names', 3 on 'put fear'; all of it goes under the black. */
      fxGrade: true, fxAt: [6.9, 'stage=1'], fxAts: [[8.6, 'stage=2'], [10.3, 'stage=3']], stageFade: { grade: 1.6, fire: 1.1, delay: .6 },   // s117: each stage's grade warms over 1.6s; its fires (and the last stage's, crossing with them) wait .6s for it — they came up under the old cool grade and showed as green ghost flames halfway through his flame. Whole crossing 1.7s: done before the next stage ('many names' → 'put fear' ≈ 1.8s)
      fx: [{ key:'back', vid:'fx-vil-back', d:.95 },
           { key:'fire1', vid:'fx-vil-fire1', board:true, stages:{ 1:1 }, sync:'fire', op:1 }, { key:'fire2', vid:'fx-vil-fire2', board:true, stages:{ 2:1 }, sync:'fire' }, { key:'fire3', vid:'fx-vil-fire3', board:true, stages:{ 3:1 }, sync:'fire' },
           { key:'front', vid:'fx-vil-front', d:1.1, stages:{ 2:.5, 3:1 } }, { key:'fg', img:'fx-vil-fg', d:1.14 },
           { key:'grade0', img:'fx-vil-grade0', board:true, over:true, blend:'multiply', stages:{ 0:1 } }, { key:'grade1', img:'fx-vil-grade1', board:true, over:true, blend:'multiply', stages:{ 1:1 } },
           { key:'grade2', img:'fx-vil-grade2', board:true, over:true, blend:'multiply', stages:{ 2:1 } }, { key:'grade3', img:'fx-vil-grade3', board:true, over:true, blend:'multiply', stages:{ 3:1 } }] },   // the far sky over the rooftops glows while he burns; the night grade stays clear round the moon
    /* the tavern (s101): it comes up out of the village's black on the hearth, pushes over to Joe on 'a brave young man', eases out
       and up to the window on 'stop this evil' (Trogdor circles past outside; he rides a plate of his own behind the wall, so the
       window frames him with a little parallax), and 3s after the line lands drifts back to the full room before the ride.
       Light: the hearth throws a warm, fast-flickering pool across the floor and onto Joe, the two lanterns and the candle ring
       glow on the board, smoke hangs under the beams by the chimney, the far side of the room and the corners sink into shadow
       (the window is kept clear). adopt: a new shot on the same board (tavern2's Trogdor) joins the rig mid-move, no restart. */
    tavern: { comps: ['tavern', 'tavern2'], fadeIn: true, adopt: true, depth: { hearth: .9, hearth2: .9, peek: .84, winvil: .87 }, start: 'hearth', starts: { tavern2: 'wide' },
      shots: {
        wide:   { z:1 },
        hearth: { board:[.24, .5], z:1.14, lit:'fire' },
        joe:    { key:'joe', bx:.46, by:.36, z:1.2, lit:'fire' },
        window: { board:[.5, .3], z:1.1 }
      },
      beats: { joe:['joe', 2600], window:['window', 2400], back:['wide', 2600, 3000] },   // back: 3s after the line lands, before the ride takes over
      pools: [['fire', 'hearth', [.5, .95, 6, 2.8], [.95, .1, 4.6, 3.4]]],
      windows: [[.345, .28, .028, .05], [.663, .28, .028, .05], [.05, .175, .03, .025], [.13, .175, .03, .025]],   // the lanterns and the chandelier's candles (fractions of the 1448x1086 board)
      haze: true, ar: 1448 / 1086,
      /* s106 · the Blender tavern (experiments/blender-fx/tavern): the hearth fire burning inside the fireplace (it replaces the Seedance flame and
         its s105 glow while it shows; not on phones, which keep the clip), smoke under the beams + motes in the lamplight, soft motes in front,
         deep warm corners with an out-of-focus table and chair. tavern2 carries them on (adopt). */
      fx: [{ key:'hearth', vid:'fx-tav-hearth', board:true, desk:true, replaces:['hearth', 'hearth2'] }, { key:'air', vid:'fx-tav-air', d:.95 },
           { key:'front', vid:'fx-tav-front', d:1.1 }, { key:'shade', img:'fx-tav-shade', d:1.14 }] },
    /* the castle (s101, Part Two): the rig is up under the portal loader, on a low two-shot of the standoff. 'toe to toe' closes in
       on the pair, 'facing fire' goes over to Trogdor's flame, 'Wait a minute' pulls straight back out to the wide (the joke lands
       on the wide). 'Ah yes' leans in to Trogdor shrinking into his puff, 'different Joe' crosses to Joe in his pants, 'story of a
       Designer' is the one hard push (the reveal), and 'powerful Designer' creeps in on him into the fade.
       Light: a moonlight grade on the board (clear round the moon), the portal's purple on the ground and in the air, Trogdor's fire
       light only while his flame burns (on the clip's clock, 2.15-3.95s), a torch in the castle gate, a gold bloom behind the
       Designer, cool ground mist, the rocks and the sky's edge in deep shadow. */
    castle: { comps: ['castle1', 'castle2', 'castle3', 'castle4', 'castle5', 'castle6', 'castle13'], fadeIn: true, adopt: true, depth: { portal: .93, orb: .93 },
      start: 'standoff', starts: { castle4: 'wide', castle5: 'wide', castle6: 'wide', castle13: 'wide' },
      shots: {
        wide:     { z:1 },
        standoff: { z:1.08, sx:.5, sy:.62 },
        battle:   { z:1.16, sx:.46, sy:.64 },
        fire:     { key:'cdragon', bx:.5, by:.5, z:1.2, lit:'fire' },
        shrink:   { key:'cdragon', bx:.78, by:.8, z:1.1 },
        pants:    { key:'joe2', bx:.5, by:.42, z:1.16 },
        designer: { key:'joe3', bx:.5, by:.4, z:1.26, lit:'hero' },
        creep:    { key:'joe3', bx:.5, by:.4, z:1.3, lit:'hero' }
      },
      beats: { battle:['battle', 2000], fire:['fire', 1500], wait:['wide', 1100], shrink:['shrink', 1400], pants:['pants', 1500], designer:['designer', 1300], creep:['creep', 3400] },
      clip: { key:'cdragon', at:2.15, until:3.95 },   // his flame, measured off the clip's frames; a light only (it has already burnt under the loader on the way in)
      pools: [['magic', 'portal', [0, .96, 1.9, .5], [0, .5, 1.4, 1.1]], ['fire', 'cdragon', [.4, .86, 1, .42], [.4, .5, 1, .55]], ['hero', 'joe3', [.5, .94, 2.4, .6], [.5, .45, 1.9, 1.3]]],   // the portal's box starts at its centre (it is pulled back half its width by a transform), so its pools sit at cx 0
      windows: [[.832, .24, .018, .04]],   // a torch in the castle gate
      haze: true, sky: 'cas-bg', ar: 2400 / 1503,
      /* s106 · the Blender castle (blender-fx/cas): ground mist + motes, soft motes in front, rock lips in the corners, and his flame's light on
         Trogdor's box, lit on the clip's clock (2.15-3.95s, the rig's flare) */
      fx: [{ key:'back', vid:'fx-cas-back', d:.95 }, { key:'front', vid:'fx-cas-front', d:1.1 }, { key:'shade', img:'fx-cas-shade', d:1.14 },
           { key:'cfire', vid:'fx-cas-fire', d:1, on:'cdragon', box:[.5, .5, 1, 1], flare:true }] },
    /* the send-off (s101): the villagers cheer on the wide; 'set off' (the letterbox comes down) eases in after Joe as he rides off into
       the distance, still moving as the hills dissolve in. Moonlight grade (clear round the moon), low mist, dark edges. */
    woodland: { comps: ['woodland'], fadeIn: true, depth: { ufo: .6 }, start: 'wide',
      shots: { wide: { z:1 }, follow: { z:1.1, sx:.53, sy:.5 } },
      beats: { follow:['follow', 3800] }, pools: [], haze: true, sky: 'wood-bg', ar: 2400 / 1511 },
    /* the ride (s101): lights only — the boards already pan against the gallop (that is the camera). A halo round the moon, mist lying
       in the valleys (hills) / a cold glow off the snow (mountains), the frame's edges in night shadow (Trogdor's sky crossing kept clear). */
    hills:     { comps: ['hills'], still: true, fadeIn: true, depth: {}, start: 'wide', shots: { wide: { z:1 } }, beats: {}, pools: [], haze: true, moon: 'hills-bg',
      fx: [{ key:'back', vid:'fx-hills-back', d:.95, pan:true }, { key:'front', vid:'fx-hills-front', d:1.1 }, { key:'shade', img:'fx-hills-shade', d:1.14 }] },   // s106: valley mist on the board's pan, cool motes, dark bushes in the corners
    mountains: { comps: ['mountains'], still: true, fadeIn: true, depth: {}, start: 'wide', shots: { wide: { z:1 } }, beats: {}, pools: [], haze: true, moon: 'mtn-bg' },
    /* the enchanted forest to the portal (s101): lights only — the boards shift with the horse on its clip's clock, 'woodland aura' is its
       own push, the inspect beat is a dip, the tap prompt is pinned to the orb, the portal clip carries the rest. Moonlight shafts slanting
       through the canopy (breathing slowly), dappled light on the path, the canopy and edges in deep blue-green shadow; the orb throws a
       gold light once it wakes ('shake and glow'); the portal's purple floods the ground and the air for as long as it is open (on the
       clip's clock, 1.2-12s). */
    forest: { comps: ['forest1', 'forest2', 'forest3', 'forest4b', 'forest4', 'forest5b', 'forest5', 'forest6', 'forest7'], still: true, follow: true, fadeIn: true, depth: {},
      start: 'wide', starts: { forest4b: 'near', forest4: 'near', forest5b: 'wide' },
      shots: { wide: { z:1 }, near: { z:1 }, orb: { z:1, lit:'orb' } },
      beats: { orb:['orb', 0] },
      clip: { key:'pull', at:1.2, until:12 },   // the swirl opens ~1.2s into the clip, the runes die at 12s (pullGo's own beats)
      pools: [['orb', 'orb', [.5, .86, 4.6, 1.3], [.5, .5, 3.4, 3.4]], ['magic', 'pull', [.62, .87, .78, .22], [.63, .52, .62, .92]]], haze: true,
      /* s106 · the Blender forest: one set per board (blender-fx/ffar + fnear) — mist + motes on the path, soft motes in front, dark foliage in the
         corners. The wide board's set rides its --sl slide. The orb and the portal's one-shots are their own (orbFx, fxShot). fxLights keep: the
         code's orb / portal light stays (the renders are atmosphere only). */
      fxLights: 'keep',
      fx: [{ key:'fback', vid:'fx-ffar-back', d:.95, shift:true, comps:FOREST_FAR }, { key:'ffront', vid:'fx-ffar-front', d:1.1, shift:true, comps:FOREST_FAR }, { key:'fshade', img:'fx-ffar-shade', d:1.14, shift:true, comps:FOREST_FAR },
           { key:'nback', vid:'fx-fnear-back', d:.95, comps:FOREST_NEAR }, { key:'nfront', vid:'fx-fnear-front', d:1.1, comps:FOREST_NEAR }, { key:'nshade', img:'fx-fnear-shade', d:1.14, comps:FOREST_NEAR }] }
  };
  var cam = null;
  function camRigOf(name){ for (var k in CAM_RIGS) if (CAM_RIGS[k].comps.indexOf(name) >= 0) return k; return null; }
  function camHolds(name){                                   // the rig is still whole: the same board, and every figure of this shot already on one of its plates
    if (!cam || cam.bg !== curBgLayer) return false;
    return (COMP[name].layers || []).every(function (L) { var r = layerRecs[L.key]; return !r || !r.el || cam.layerPlates.indexOf(r.el.parentNode) >= 0; }); }
  function camComp(name){ camComp0(name); fxComp(name); }   // s105: comps-limited fx layers follow the shot
  function camComp0(name){ if (!CAMERA_PASS || !layersWrap) return; var rig = camRigOf(name);
    if (!rig) { camDetach(); return; }
    if (cam && cam.rig === rig && cam.cfg.still) { camTo((cam.cfg.starts && cam.cfg.starts[name]) || cam.cfg.start, 0); camPlace(); if (cam.cfg.clip) camClip(cam); return; }   // s101: a lights-only rig carries on across its shots (its lights re-seat, its clip light re-binds)
    if (cam && cam.rig === rig && camHolds(name)) return;    // village1 → 2 → 4: the same figures, one continuous move
    if (cam && cam.rig === rig && cam.cfg.adopt && cam.bg === curBgLayer && cam.layerPlates.some(function (pl) { return [].some.call(pl.children, camLive); })) { camAdopt(name); return; }   // s101: the next shot on the same board: its new figures join the rig (a Prev/Next jump empties the plates, so it still starts afresh)
    camAttach(rig, name); }
  function camBehind(c, r, d){                                // s101: a figure behind the board (tavern2's Trogdor) gets a plate of its own there, under the board
    var pl = { el: document.createElement('div'), d: d }, vw = r.el.tagName === 'VIDEO' && !r.el.paused; pl.el.className = 'jjcam-p';
    bgWrap.insertBefore(pl.el, r.aura && r.aura.parentNode === bgWrap ? r.aura : r.el); if (r.aura) pl.el.appendChild(r.aura); pl.el.appendChild(r.el);
    c.plates.push(pl); c.divs.push(pl.el); c.layerPlates.push(pl.el); camResume(r.el, vw); return pl; }
  function camAdopt(name){                                   // s101: new figures step onto plates in paint order, posed where the camera is right now, and ride out any move in progress
    var c = cam, R = c.cfg, added = [];
    (COMP[name].layers || []).forEach(function (L) { var r = layerRecs[L.key]; if (!r || !r.el || c.layerPlates.indexOf(r.el.parentNode) >= 0) return; var d = R.depth[L.key] || 1;
      if (r.el.parentNode === bgWrap) { added.push(camBehind(c, r, d)); return; }
      if (r.el.parentNode !== layersWrap) return;
      var head = r.aura && r.aura.parentNode === layersWrap ? r.aura : r.el, prev = head.previousElementSibling, p = null;
      c.plates.forEach(function (q) { if (q.el === prev && q.d === d) p = q; });
      if (!p) { p = { el: document.createElement('div'), d: d }; p.el.className = 'jjcam-p'; layersWrap.insertBefore(p.el, head); c.plates.push(p); c.divs.push(p.el); c.layerPlates.push(p.el); added.push(p); }
      var vw = r.el.tagName === 'VIDEO' && !r.el.paused, zi = parseInt(r.el.style.zIndex, 10);
      if (zi > (parseInt(p.el.style.zIndex, 10) || 0)) p.el.style.zIndex = zi;
      if (r.aura) p.el.appendChild(r.aura); p.el.appendChild(r.el); camResume(r.el, vw); });
    if (!added.length) return; camPlace();
    var gl = c.front.querySelector('.gl'), ga = gl.getAnimations().filter(function (a) { return a._jjcam && a.playState !== 'finished' && a.playState !== 'idle'; })[0];
    var num = function (v, i) { return parseFloat(String(v || '').split(' ')[i] || (i ? 0 : v)) || 0; };
    var at = function (tr, sc, d) { var z = parseFloat(sc) || 1; return { translate: (num(tr, 0) * d).toFixed(1) + 'px ' + (num(tr, 1) * d).toFixed(1) + 'px', scale: (1 + (z - 1) * d).toFixed(4) }; };   // the front glow plate sits at depth 1: its pose is the camera's
    var cs = getComputedStyle(gl);
    added.forEach(function (p) { var now = at(cs.translate === 'none' ? '0px 0px' : cs.translate, cs.scale === 'none' ? '1' : cs.scale, p.d); p.el.style.translate = now.translate; p.el.style.scale = now.scale;
      if (!ga) return; var k = ga.effect.getKeyframes(), t = ga.effect.getTiming();   // mid-move: the same move, scaled to its depth, at the same point in it
      p.a = p.el.animate([at(k[0].translate, k[0].scale, p.d), at(k[k.length - 1].translate, k[k.length - 1].scale, p.d)], { duration: t.duration, easing: t.easing, fill: 'forwards' }); p.a._jjcam = true;
      p.a.currentTime = ga.currentTime; if (ga.playState === 'paused') p.a.pause(); });
  }
  function camBox(key){ var r = layerRecs[key]; if (!r || !r.el || !r.el.isConnected) return null;
    var e = r.el, w = e.offsetWidth, h = e.offsetHeight;
    if (e.tagName === 'VIDEO' && r.aura) { w = r.aura.offsetWidth; h = r.aura.offsetHeight; }   // the aura has the clip's true aspect before its metadata lands
    else if (!h && w) h = w * (e.naturalWidth ? e.naturalHeight / e.naturalWidth : .64);
    return w ? [e.offsetLeft, e.offsetTop, w, h] : null; }
  function camCover(fx, fy, ar){                             // a point of cover-fitted art → the frame (px); [x, y, drawn w, drawn h]
    var W = layersWrap.clientWidth || innerWidth, H = layersWrap.clientHeight || innerHeight, dw, dh;
    if (W / H > ar) { dw = W; dh = W / ar; } else { dh = H; dw = H * ar; }
    return [(W - dw) / 2 + fx * dw, (H - dh) / 2 + fy * dh, dw, dh]; }
  function camIn(key){ var r = layerRecs[key]; return !!(r && r.el && r.el.isConnected && !r.el._lateHide && r.el.style.opacity !== '0'); }
  /* moving a <video> in the DOM pauses it, and Safari's HEVC-alpha clips can then paint nothing (Trogdor and the chicken vanished, s97):
     play on straight away if it was playing, and nudge a paused one onto a frame. A clip still waiting for its late cue (Trogdor in
     the village) must not be started early by the move (s100) */
  function camResume(v, was){ if (!v || v.tagName !== 'VIDEO' || v.classList.contains('fxhid')) return;
    if (was || ((v.loop || v.autoplay) && !v._lateHide && !v._lateWait)) { if (storyPaused) return; var pp = v.play(); if (pp && pp.catch) pp.catch(function () {}); }
    else { try { v.currentTime = v.currentTime; } catch (e) {} } }
  function camLive(el){ for (var k in layerRecs) { var r = layerRecs[k]; if (r && (r.el === el || r.aura === el)) return true; } return false; }
  function camAttach(rig, name){
    if (cam) camDetach(cam.rig === rig);                     // a jump back into the same scene: the old rig goes at once; another scene's dissolves under the crossfade
    var R = CAM_RIGS[rig], host = layersWrap.parentNode, mk = function (cls, parent, before, html) { var d = document.createElement('div'); d.className = cls; if (html) d.innerHTML = html; parent.insertBefore(d, before || null); return d; };
    var pool = R.pools.map(function (p) { return '<i class="' + p[0] + '"><b></b></i>'; }).join('');
    var st = (R.starts && R.starts[name]) || R.start;          // s101: stepped straight into a later shot of the scene: its own opening pose
    var c = cam = { rig: rig, cfg: R, plates: [], divs: [], fades: [], layerPlates: [], shot: st, settleT: null, raf: 0, bg: curBgLayer, flare: false, off: null };
    if (R.sky) { c.grade = mk('jjcam-grade', host, layersWrap); c.divs.push(c.grade); c.fades.push(c.grade); }   // the night grade on the board (multiply)
    if (R.horizon) { c.hz = mk('jjcam-hz', bgWrap, bgWrap.querySelector('.jjst-bg'), '<b></b>'); c.divs.push(c.hz); c.fades.push(c.hz); }   // behind the board, over the sky: only the sky shows it
    if (R.windows) { c.win = mk('jjcam-win', host, layersWrap, R.windows.map(function () { return '<i class="w"><b></b></i>'; }).join('')); c.divs.push(c.win); c.fades.push(c.win); }
    c.back = mk('jjcam-back', host, layersWrap, pool);        // warm light on the floor, under the figures (their rim)
    c.front = mk('jjcam-front', host, layersWrap.nextSibling, (R.haze ? '<div class="hz2"><b></b></div>' : '') + '<div class="sh"></div><div class="gl">' + pool + '</div><div class="vg"></div>');   // hz2 (s101): smoke / mist hanging in the air, just in front of the figures
    c.divs.push(c.back, c.front); c.fades.push(c.back, c.front);
    c.fades.forEach(function (d) { d.setAttribute('data-rig', rig); if (R.fadeIn) d.style.opacity = '0'; });   // it comes up with the board's crossfade
    if (R.moon) { c.moon = mk('jjcam-moon', host, layersWrap, '<b></b>'); c.divs.push(c.moon); c.fades.push(c.moon); c.moon.setAttribute('data-rig', rig); }   // s101: a halo round the moon (over the sky, under the figures)
    if (!R.still) {                                           // s101 · still: a rig of lights only — the comp's own motion (a pan, a shift, a tracked ride, a dip) stays the camera
    if (curBgLayer) c.plates.push({ el: curBgLayer, d: .9, o: 1 });   // o: the board scales about its centre (dressBg's origin)
    var SKY_D = .4, skyI = document.getElementById('jjst-sky'), pcx = (layersWrap.clientWidth / 2).toFixed(0) + 'px ' + (layersWrap.clientHeight / 2).toFixed(0) + 'px';   // s143: the far sky rides the camera too
    if (skyI) { skyI.style.transformOrigin = pcx; c.plates.push({ el: skyI, d: SKY_D, o: 1, sky: 1 }); }
    if (nightEl) { nightEl.style.transformOrigin = '50% 50%'; c.plates.push({ el: nightEl, d: SKY_D, o: 1, sky: 1 }); }
    if (c.moon) c.plates.push({ el: c.moon, d: SKY_D, o: 1, mo: 1 });   // (its transform origin is set where it is boxed: the picture's centre, in its own box)
    if (c.win) c.plates.push({ el: c.win, d: .9 });          // the window glows ride the board
    c.plates.push({ el: c.back, d: .95 });
    var cur = null;
    (COMP[name].layers || []).forEach(function (L) { var r = layerRecs[L.key]; if (!r || !r.el) return; var d = R.depth[L.key] || 1;
      if (r.el.parentNode === bgWrap) { camBehind(c, r, d); return; }   // (s101) behind the board: its own plate there
      if (!cur || cur.d !== d) { cur = { el: mk('jjcam-p', layersWrap), d: d }; c.plates.push(cur); c.divs.push(cur.el); c.layerPlates.push(cur.el); }
      var vw = r.el.tagName === 'VIDEO' && !r.el.paused, zi = parseInt(r.el.style.zIndex, 10);
      if (zi > (parseInt(cur.el.style.zIndex, 10) || 0)) cur.el.style.zIndex = zi;   // a figure that stood in front (the chickens' z 4) keeps its place: its plate takes the z
      if (r.aura) cur.el.appendChild(r.aura); cur.el.appendChild(r.el);   // DOM order kept: the figures paint exactly as before
      camResume(r.el, vw); });
    c.plates.push({ el: c.front.querySelector('.sh'), d: 1.14 }, { el: c.front.querySelector('.gl'), d: 1 });
    if (R.haze) c.plates.push({ el: c.front.querySelector('.hz2'), d: 1.06 });
    }
    if (R.fx && FX_PASS) { camFx(c); fxComp(name); }         // s103: the Blender atmosphere plates (s105: lights-only rigs take them too; comps-limited layers per shot)
    if (R.follow) c.fol = setInterval(function () { if (cam === c && !storyPaused) camPlace(); }, 250);   // s101: its lights sit on figures that travel (the ride, the growing orb)
    camPlace(); camTo(st, 0);
    if (R.fadeIn) { void c.back.offsetWidth; c.fades.forEach(function (d) { d.style.opacity = ''; }); }
    if (R.land) camTo(R.land[0], R.land[1]);
    if (R.clip) camClip(c);
  }
  function camDetach(now){
    var c = cam; if (!c) return; cam = null; unsched(c.settleT); if (c.raf) cancelAnimationFrame(c.raf); if (c.off) c.off(); clearInterval(c.fol);
    c.layerPlates.forEach(function (pl) { [].slice.call(pl.children).forEach(function (ch) { if (camLive(ch) && pl.parentNode) { var vw = ch.tagName === 'VIDEO' && !ch.paused; pl.parentNode.insertBefore(ch, pl); camResume(ch, vw); } }); });   // anything the next shot kept steps out of the rig
    var drop = function () { c.divs.forEach(function (d) { if (d.parentNode) d.remove(); }); if (c.fx) c.fx.forEach(fxKill); };
    var reset = function (p) { p.el.getAnimations().forEach(function (a) { if (a._jjcam) a.cancel(); }); p.el.style.translate = p.el.style.scale = ''; };
    if (now) { c.plates.forEach(reset); drop(); return; }
    c.plates.forEach(function (p) { if (p.el === curBgLayer) reset(p); });   // (a next shot on the same board keeps it: square again)
    if (c.fx) c.fx.forEach(function (x) { clearTimeout(x.offT); var m = x.m; if (m && m.tagName === 'VIDEO') { m.pause(); var i = pausedVideos.indexOf(m); if (i >= 0) pausedVideos.splice(i, 1); } });   // s108: the outgoing fx hold their frame as they dissolve (they kept decoding through the handover: the cave → village judder)
    c.fades.forEach(function (d) { d.style.opacity = '0'; });   // the outgoing shot keeps its framing while it dissolves (the camera finishes its move under the crossfade)
    setTimeout(function () { drop(); if (cam) return; c.plates.forEach(function (p) { if (p.sky) reset(p); }); }, T.bgFade + 900);   // s143: no new rig took the sky: it settles back square
  }
  /* s103 · the Blender atmosphere plates (CAM_RIGS.<rig>.fx). The plate is built with the rig (so it takes the camera's pose at once)
     but its media only loads once the loader has handed over (FX_LIVE) — the fx never compete with the loader's art; a plate fades
     in when its clip is actually playing (or its still has landed). Phones and reduced motion get the stills (posters). Moves,
     pause and the handover are the rig's: the plates ride c.plates, every #jjst video is held by pauseStory, and c.fades dissolve
     them under the next shot's crossfade. */
  var FX_LIVE = false;
  /* s105 · the fx list is generic: any CAM_RIGS entry (a camera rig or a lights-only one: hills, mountains, the forest) takes one. Per layer:
       key   its name (the class jjfx-<key>, and the name word triggers use)
       vid   'fx-<scene>-<key>' → story-fx-….webm/.mov + -poster.webp (loops of light on black: screen-blended unless blend says otherwise)
       img   a still (alpha, normal blend) · bg: a code-drawn layer, any CSS background (a fullscreen colour grade, a vignette)
       d     depth: < 1 behind the figures, >= 1 in front (rides the camera at that depth); grade:true = fullscreen, fixed to the frame, over the figures
       blend mix-blend-mode (screen / multiply / soft-light / overlay …) · op: its resting opacity (default 1) · z: its z-index
       on + box   sits on a figure's box [cx, cy, w, h] (the cavern's heat) · desk: not on phones
       comps only in these shots of the rig (e.g. ['village2']) · wait: starts dark until a word turns it on
     Word triggers (SCENES triggers fx): 'fx:<key>' = fade in, 'fx:<key>=0' = fade out, 'fx:<key>=.6' = to that level — so a scene can build up
     over its line (the village catching fire shot by shot: fire1 on 'Trogdor', fire2 on 'the locals' …). Fades are 1.4s (CSS; --fxd sets another). */
  /* s106 · more fx options, for the Blender sets of every scene:
       board:true  registered to the board art: rides the board's own plate (d .9, scaled about the frame's centre, as the board is)
       over:true   (with board) painted over the figures (the village's multiply grades) · shift:true: the wide forest board's 7cqw slide (--sl)
       pan:true    the hills board's pan (same keyframes, kept on the board's clock)
       stages:{n:op}  shown only at those stages of the rig (fx:stage=n; stages only climb), at that opacity · sync:'grp' a layer joining its
                   group starts at a playing member's time (the fire stages hold the same flames: a roof simply grows)
       flare:true  shown only while the rig's clip beat is lit (the castle's flame, on the clip's clock)
       replaces:[keys]  while it shows, those layers step aside (the tavern hearth render replaces the Seedance flame and its s105 glow)
     A video layer loads only when it is first wanted in the shot (plus the next stage, loaded paused), plays only while it shows, and is
     paused again once it has faded out: nothing decodes off screen. warmAhead fetches a scene's fx one scene early. */
  function camFx(c){
    var host = layersWrap.parentNode, phone = (layersWrap.clientWidth || innerWidth) < 700 || !!(window.jjLite && window.jjLite.on), after = c.front;   /* s138: the lite level takes the effect layers as a narrow window does: stills */
    c.fx = []; c.stage = 0; c.fxHoldUntil = performance.now() + fxHoldMs; if (c.cfg.fxLights !== 'keep') { [c.back, c.front, c.hz].forEach(function (d) { if (d) d.classList.add('fxon'); }); }   // the code's fire pools stand down: the renders carry the light (fxLights:'keep' leaves them)
    if (c.cfg.fxGrade && c.grade) c.grade.classList.add('fxon');   // the rig's code night grade gives way to the render's own grades
    c.cfg.fx.forEach(function (X) { if (phone && X.desk) return;
      var w = document.createElement('div'); w.className = 'jjfx jjfx-' + X.key + (X.grade ? ' jjfx-grade' : '') + (X.shift ? ' jjfx-shift' : '') + (X.pan ? ' jjfx-pan' : '') + (X.on ? ' jjfx-on' : '');
      var front = X.grade || X.over || (!X.board && X.d >= 1);
      if (!front) host.insertBefore(w, layersWrap); else { host.insertBefore(w, after.nextSibling); after = w; }   // behind the figures / in front, in list order
      if (X.blend) w.style.mixBlendMode = X.blend; else if (X.vid && !/^(back|heat|front)$/.test(X.key)) w.style.mixBlendMode = 'screen';
      if (X.z != null) w.style.zIndex = X.z; else if (front) w.style.zIndex = 4;
      if (X.op != null) w.style.setProperty('--op', X.op);
      if (X.bg) w.style.background = X.bg;
      if (X.stages && c.cfg.stageFade) { var SF = c.cfg.stageFade, gr = X.blend === 'multiply';   // s117: a new stage's grade warms first, its fires come up after it — they used to fade in under the old cool grade (no clear hole round them yet) and showed as green ghost flames halfway through his flame
        w.style.setProperty('--fxd', (gr ? SF.grade : SF.fire) + 's'); w.style.setProperty('--fxe', 'cubic-bezier(.45,0,.55,1)'); if (!gr) w.style.setProperty('--fxdl', SF.delay + 's'); }   // (the fires cross on the same delayed clock: the last stage's flames hold until the next one's are up)
      if (X.replaces) w.style.setProperty('--fxd', '.6s');   // s109: it comes up as fast as its board, while what it replaces fades out over 1.2s — the two overlap, the opening is never empty
      if (X.board) w.style.transformOrigin = '50% 50%';
      var x = { X: X, w: w, m: null, still: !!X.img || phone || CAM_STILL, ready: !!X.bg, want: !X.wait, inComp: true, lvl: null, flare: !X.flare }; c.fx.push(x);
      if (!X.grade) c.plates.push(X.board ? { el: w, d: .9, o: 1 } : { el: w, d: X.d == null ? 1 : X.d }); c.divs.push(w); c.fades.push(w);
      fxStageOf(c, x); });   // (shown by fxComp, once the rig knows its shot)
  }
  function fxWarm(on){ if (cam && cam.fx) cam.fx.forEach(function (x) { if (x.X.replaces) x.w.classList.toggle('warm', on); }); }   // s106: hovering the hearth swells the render's fire (the clip it replaced is still the hover target)
  function fxStageOf(c, x){ var S = x.X.stages; if (!S) return; var op = S[c.stage]; x.want = op != null; if (op != null) x.lvl = op; }
  function fxOn(x){ return x.want && x.inComp && x.flare; }
  function fxShow(x){ var w = x.w; if (!w.isConnected || !cam || !cam.fx || cam.fx.indexOf(x) < 0) return; var want = fxOn(x), m = x.m;   // (s109: a layer of a rig that has gone never acts again — a late 'ready' from the old tavern rig hid the new shot's flames) on = wanted (words, stages), in this shot (comps), lit (flare) — and loaded
    if (want && !m && !x.X.bg && FX_LIVE) { var hold = cam && cam.fxHoldUntil && !x.X.replaces ? cam.fxHoldUntil - performance.now() : 0;   // (a render that stands in for a figure never waits)
      if (hold > 0) { clearTimeout(x.holdT); x.holdT = setTimeout(function () { fxShow(x); }, hold + 20); } else { fxLoad(x); m = x.m; } }
    if (m && m.tagName === 'VIDEO') {
      if (want) { clearTimeout(x.offT); if (m.paused && !storyPaused) { fxSync(x); var pr = m.play(); if (pr && pr.catch) pr.catch(function () {}); } else if (m.paused && pausedVideos.indexOf(m) < 0) { fxSync(x); pausedVideos.push(m); } }
      else if (!m.paused || pausedVideos.indexOf(m) >= 0) { clearTimeout(x.offT); x.offT = setTimeout(function () { if (!fxOn(x)) { m.pause(); var i = pausedVideos.indexOf(m); if (i >= 0) pausedVideos.splice(i, 1);
        if (x.X.stages && cam && cam.fx && cam.fx.indexOf(x) >= 0 && !Object.keys(x.X.stages).some(function (k) { return +k > cam.stage; })) { fxKill(x); if (m.parentNode) m.remove(); x.m = null; x.ready = false; } } }, fxOffMs(x)); } }   // faded out: stop decoding it (s108: a fire stage the village has burnt past is let go entirely)
    if (x.lvl != null) w.style.setProperty('--op', x.lvl);
    var on = want && x.ready; w.classList.toggle('on', on);
    if (x.X.replaces) { if (on) { if (!x.repOn) fxReplace(x, true); x.repOn = true; } else if (x.repOn && x.ready) { fxReplace(x, false); x.repOn = false; } }   // (while the render is still loading, what it replaces stays down)
    if (on && x.X.pan) fxPanSync(x);
  }
  function fxOffMs(x){ var st = x.w.style, d = parseFloat(st.getPropertyValue('--fxd')) || 1.4, dl = parseFloat(st.getPropertyValue('--fxdl')) || 0; return Math.max(1700, (d + dl) * 1000 + 250); }   // s117: a layer stops decoding only once its (possibly delayed) fade is through
  function fxSync(x){ var g = x.X.sync; if (!g || !cam || !cam.fx) return; var peer = null;   // join the group on its clock
    cam.fx.forEach(function (y) { if (y !== x && y.X.sync === g && y.m && y.m.tagName === 'VIDEO' && y.m.readyState >= 2 && !y.m.paused) peer = y; });
    if (!peer || x.m.tagName !== 'VIDEO') return; var set = function () { try { x.m.currentTime = peer.m.currentTime % (x.m.duration || 99); } catch (e) {} };
    if (x.m.readyState >= 1) set(); else x.m.addEventListener('loadedmetadata', set, { once: true }); }
  function fxReplace(x, on, now){ x.X.replaces.forEach(function (k) { var r = layerRecs[k]; if (!r) return; if (!on && r.el && r.el._fxOwner && r.el._fxOwner !== x) return; if (r.el) r.el._fxOwner = on ? x : null;   // s109: only the render that stepped a layer aside can bring it back (the old rig's clean-up un-hid the new shot's flames: both burned at once)
    [r.el, r.aura].forEach(function (e) { if (e) e.classList.toggle('fxhid', on); });
    var v = r.el; if (!v || v.tagName !== 'VIDEO') return; clearTimeout(v._fxhT);
    if (on) v._fxhT = setTimeout(function () { if (v.classList.contains('fxhid')) { v.pause(); var i = pausedVideos.indexOf(v); if (i >= 0) pausedVideos.splice(i, 1); } }, now ? 0 : 1300);   // once it has faded, the replaced clip stops decoding (under the black: at once)
    else if (v.paused && !storyPaused) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } }); }
  function fxPanSync(x){ var b = curBgLayer, ba = b && b.getAnimations().filter(function (a) { return a.animationName === 'jjstPan'; })[0], pa = x.w.getAnimations().filter(function (a) { return a.animationName === 'jjstPan'; })[0];
    if (!ba || !pa) return; pa.currentTime = ba.currentTime; if (ba.playState === 'paused') pa.pause(); }
  function fxStage(n){ var c = cam; if (!c || !c.fx || n <= c.stage) return; c.stage = n;   // stages only climb: the village catches fire roof by roof
    c.fx.forEach(function (x) { fxStageOf(c, x); fxShow(x); }); }   // (s108: the next stage is fetched ahead by warmAhead, not held open in a decoder)
  function fxComp(name){ if (!cam || !cam.fx) return; cam.fx.forEach(function (x) { var cs = x.X.comps; x.inComp = !cs || cs.indexOf(name) >= 0; fxShow(x); }); }
  function fxFlare(on){ if (!cam || !cam.fx) return; cam.fx.forEach(function (x) { if (!x.X.flare) return; x.flare = on; fxShow(x); }); }
  function fxCue(arg){ if (!cam || !cam.fx) return; var dl = 0, at = arg.indexOf('@'); if (at > 0) { dl = parseInt(arg.slice(at + 1), 10) || 0; arg = arg.slice(0, at); }
    if (dl) { var c0 = cam; sched(function () { if (cam === c0) fxCue(arg); }, dl); return; }   // 'stage=1@3500': a fallback, if the stage has not come by then
    var k = arg, v = null, eq = arg.indexOf('=');   // 'fire2' / 'fire2=0' / 'fire2=.6' / 'stage=2'
    if (eq > 0) { k = arg.slice(0, eq); v = parseFloat(arg.slice(eq + 1)); }
    if (k === 'stage') { fxStage(v); return; }
    cam.fx.forEach(function (x) { if (x.X.key !== k) return; if (v === 0) x.want = false; else { x.want = true; if (v != null && !isNaN(v)) x.lvl = v; } fxShow(x); }); }
  function fxLoad(x, paused){
    if (x.m || x.X.bg) return; var X = x.X, w = x.w, on = function () { x.ready = true; fxShow(x); }, m;
    if (X.replaces && !x.still) { var on0 = on; on = function () {   // s109: a render that replaces a figure (the hearth) counts as ready only once its frames are actually advancing — the flame it stands in for stays up until then, so the fireplace is never empty
      var t0 = m.currentTime, go = function () { if (!x.ready) on0(); };
      if (m.requestVideoFrameCallback) m.requestVideoFrameCallback(function () { m.requestVideoFrameCallback(go); });
      var tu = function () { if (m.currentTime > t0 + .05) { m.removeEventListener('timeupdate', tu); go(); } }; m.addEventListener('timeupdate', tu); }; }
    if (x.still) { m = document.createElement('img'); m.alt = ''; m.decoding = 'async'; m.addEventListener('load', on, { once: true }); m.src = F(X.img || (X.vid + '-poster')); }
    else { m = document.createElement('video'); m.muted = true; m.loop = true; m.playsInline = true; m.preload = 'auto';
      m.setAttribute('muted', ''); m.setAttribute('playsinline', ''); m.addEventListener('playing', on, { once: true });
      m.innerHTML = jjClipSrc(GB + 'story-' + X.vid, AV); }
    x.m = m; w.appendChild(m); if (X.on && cam) camPlace();
    if (!x.still && !paused && fxOn(x)) { fxSync(x); if (storyPaused) pausedVideos.push(m); else { var pr = m.play(); if (pr && pr.catch) pr.catch(function () {}); } }   // born under a pause: it starts with the resume
  }
  function fxLoadAll(){ FX_LIVE = true; if (cam && cam.fx) cam.fx.forEach(fxShow); }
  function fxKill(x){ var m = x.m; clearTimeout(x.offT); if (x.X.replaces) fxReplace(x, false); if (!m || m.tagName !== 'VIDEO') return; try { m.pause(); m.innerHTML = ''; m.removeAttribute('src'); m.load(); } catch (e) {} }   // let the decoder go
  /* s106 · warm a rig's fx one scene early (the one format this browser plays; posters on phones) */
  function fxFiles(rig){ var R = CAM_RIGS[rig], out = []; if (!R || !R.fx || !FX_PASS || !CAMERA_PASS) return out; var phone = innerWidth < 700 || !!(window.jjLite && window.jjLite.on);
    R.fx.forEach(function (X) { if (phone && X.desk) return; if (X.img) out.push(F(X.img)); else if (X.vid) out.push((phone || CAM_STILL) ? F(X.vid + '-poster') : X.vid); }); return out; }
  function camPlace(){                                       // the lights sit on their figures (px, from their boxes) and on the board (cover-fitted)
    if (!cam) return; var R = cam.cfg, put = function (el, key, cx, cy, w, h) { var b = camBox(key); if (!el) return;
      if (!b) { el.style.display = 'none'; return; } el.style.display = '';
      var ww = b[2] * w, hh = b[3] * h; el.style.left = (b[0] + b[2] * cx - ww / 2).toFixed(0) + 'px'; el.style.top = (b[1] + b[3] * cy - hh / 2).toFixed(0) + 'px'; el.style.width = ww.toFixed(0) + 'px'; el.style.height = hh.toFixed(0) + 'px'; };
    var box = function (el, x, y, w, h) { el.style.left = (x - w / 2).toFixed(0) + 'px'; el.style.top = (y - h / 2).toFixed(0) + 'px'; el.style.width = w.toFixed(0) + 'px'; el.style.height = h.toFixed(0) + 'px'; };
    R.pools.forEach(function (p) { put(cam.back.querySelector('.' + p[0]), p[1], p[2][0], p[2][1], p[2][2], p[2][3]); });
    R.pools.forEach(function (p) { put(cam.front.querySelector('.' + p[0]), p[1], p[3][0], p[3][1], p[3][2], p[3][3]); });
    if (cam.fx) cam.fx.forEach(function (x) { if (x.X.on && x.m) put(x.m, x.X.on, x.X.box[0], x.X.box[1], x.X.box[2], x.X.box[3]); });   // s103: the heat sits on Trogdor's box
    if (cam.win) { var ws = cam.win.querySelectorAll('.w'); R.windows.forEach(function (w, i) { var q = camCover(w[0], w[1], R.ar); box(ws[i], q[0], q[1], Math.max(q[2] * w[2] * 4.4, 40), Math.max(q[3] * w[3] * 3.6, 40)); }); }
    if (cam.hz) { var q = camCover(R.horizon[0], R.horizon[1], R.ar); box(cam.hz, q[0], q[1], q[2] * R.horizon[2], q[3] * R.horizon[3]); }
    if (cam.grade && NIGHT[R.sky]) { var mn = NIGHT[R.sky].moon, m = camCover(mn[0] / 1000, mn[1] / 560, 1000 / 560);   // the moon, where nightSvg draws it (a 1000x560 sky, slice-fitted)
      cam.grade.style.setProperty('--mx', m[0].toFixed(0) + 'px'); cam.grade.style.setProperty('--my', m[1].toFixed(0) + 'px'); cam.grade.style.setProperty('--mr', (mn[2] / 560 * m[3]).toFixed(0) + 'px');
      if (cam.fx) { var mr = mn[2] / 560 * m[3], mk = 'radial-gradient(circle at ' + m[0].toFixed(0) + 'px ' + m[1].toFixed(0) + 'px,transparent 0,transparent ' + (mr * 1.3).toFixed(0) + 'px,rgba(0,0,0,.5) ' + (mr * 2.6).toFixed(0) + 'px,#000 ' + (mr * 4.5).toFixed(0) + 'px)';   // s106: the render's multiply grades keep clear round the moon too (a wide, soft hole)
        cam.fx.forEach(function (x) { if (x.X.blend !== 'multiply') return; x.w.style.webkitMaskImage = mk; x.w.style.maskImage = mk; }); } }
    if (cam.moon && NIGHT[R.moon]) { var mo = NIGHT[R.moon].moon, mm = camCover(mo[0] / 1000, mo[1] / 560, 1000 / 560), mr = mo[2] / 560 * mm[3]; box(cam.moon, mm[0], mm[1], mr * 11, mr * 11);
      var Wc = layersWrap.clientWidth || innerWidth, Hc = layersWrap.clientHeight || innerHeight; cam.moon.style.transformOrigin = (Wc / 2 - (mm[0] - mr * 5.5)).toFixed(1) + 'px ' + (Hc / 2 - (mm[1] - mr * 5.5)).toFixed(1) + 'px'; }   // s143: it scales about the picture's centre, with the sky   // s101: the moon's halo
  }
  function camPose(shot){
    var W = layersWrap.clientWidth || innerWidth, H = layersWrap.clientHeight || innerHeight, SH = cam.cfg.shots, S = SH[shot] || SH.wide;
    var k = W < 600 ? .35 : W < 1024 ? .65 : 1, z = 1 + (S.z - 1) * k;       // phones and tablets: a fraction of the push
    if (CAM_STILL || z <= 1.0001) return { z: 1, x: 0, y: 0, W: W, H: H };
    var fx = W * (S.sx == null ? .5 : S.sx), fy = H * (S.sy == null ? .5 : S.sy), b = S.key && camBox(S.key);
    if (b) { fx = b[0] + b[2] * S.bx; fy = b[1] + b[3] * S.by; }
    else if (S.board) { var q = camCover(S.board[0], S.board[1], cam.cfg.ar || 16 / 9); fx = q[0]; fy = q[1]; }
    var ax = fx + W * (S.ax || 0) * k, ay = fy + H * (S.ay || 0) * k;
    return { z: z, x: Math.min(0, Math.max(W * (1 - z), ax - z * fx)), y: Math.min(0, Math.max(H * (1 - z), ay - z * fy)), W: W, H: H };   // clamped: the board always covers the frame
  }
  function camTo(shot, ms){
    if (!cam) return; cam.shot = shot; var P = camPose(shot), lit = (cam.cfg.shots[shot] || {}).lit || 'none';
    [cam.back, cam.front].concat(cam.fx ? cam.fx.map(function (x) { return x.w; }) : []).forEach(function (d) { d.setAttribute('data-lit', lit); });   // the light follows the camera's subject (s103: the fx plates too)
    cam.plates.forEach(function (p) { var el = p.el; if (!el || !el.isConnected) return;
      var s = 1 + (P.z - 1) * p.d, tx = P.x * p.d, ty = P.y * p.d;
      if (p.o) { tx -= P.W / 2 * (1 - s); ty -= P.H / 2 * (1 - s); }
      var to = { translate: tx.toFixed(1) + 'px ' + ty.toFixed(1) + 'px', scale: s.toFixed(4) };
      var drop = function () { el.getAnimations().forEach(function (a) { if (a._jjcam) a.cancel(); }); p.a = null; };   // every camera move this element ever had, not just the last (a stale one must never show through)
      if (!ms) { drop(); el.style.translate = to.translate; el.style.scale = to.scale; return; }
      var cs = getComputedStyle(el), from = { translate: cs.translate === 'none' ? '0px 0px' : cs.translate, scale: cs.scale === 'none' ? '1' : cs.scale };   // from wherever it is now (mid-move included)
      drop(); el.style.translate = from.translate; el.style.scale = from.scale;   // the start pose is also the base, so nothing underneath can surface
      p.a = el.animate([from, to], { duration: ms, easing: CAM_EASE, fill: 'forwards' }); p.a._jjcam = true;
    });
    if (ms && !cam.raf) { var c = cam, loop = function () {   // the hint arrows ride along (their own 400ms tick would stutter)
        var moving = c.plates.some(function (p) { return p.a && (p.a.playState === 'running' || p.a.playState === 'paused'); });
        if (!moving || cam !== c) { c.raf = 0; if (hintPlace) hintPlace(); return; }
        if (hintPlace && !storyPaused) hintPlace(); c.raf = requestAnimationFrame(loop); };
      c.raf = requestAnimationFrame(loop); }
  }
  function camBeat(b){
    if (!cam) return; var m = cam.cfg.beats[b]; if (!m) return;   // a beat that isn't this scene's (or a rig that's gone) does nothing
    if (m[3] && !camIn(m[3])) return;
    unsched(cam.settleT); cam.settleT = null;
    if (m[2]) { cam.settleT = sched(function () { if (cam) { cam.settleT = null; camTo(m[0], m[1]); } }, m[2]); return; }
    camPlace(); camTo(m[0], m[1]);
  }
  function camClip(c){                                       // a beat on a clip's own clock: the flame flares the fire light (and the far sky) while it burns
    var K = c.cfg.clip, r = layerRecs[K.key], v = r && r.el; if (!v || v.tagName !== 'VIDEO' || v === c.clipEl) return;
    if (c.off) { c.off(); c.off = null; } c.clipEl = v;   // (s101) a lights-only rig re-binds when its shot brings the clip in
    var went = false, tick = function () { if (cam !== c) return;
      var on = v.currentTime >= K.at && (!K.until || v.currentTime < K.until) && !v._lateHide;        // its loop wraps back before the flame: the light drops with it (until, s101: a one-shot flame that ends)
      if (on !== c.flare) { c.flare = on; c.fades.forEach(function (d) { if (on) d.setAttribute('data-flare', ''); else d.removeAttribute('data-flare'); }); fxFlare(on); }
      if (c.cfg.fxAt && !c.fxAtDone && v.currentTime >= c.cfg.fxAt[0] && !v._lateHide) { c.fxAtDone = true; fxCue(c.cfg.fxAt[1]); }
      if (c.cfg.fxAts && !v._lateHide) { c.fxAtsDone = c.fxAtsDone || {}; for (var qa = 0; qa < c.cfg.fxAts.length; qa++) if (!c.fxAtsDone[qa] && v.currentTime >= c.cfg.fxAts[qa][0]) { c.fxAtsDone[qa] = true; fxCue(c.cfg.fxAts[qa][1]); } }   /* s139: further cues on the same clock */   // s106: an fx cue on the clip's clock (the village's first roof catches ~.5s after his flame)
      if (on && !went && K.beat) { went = true; if (K.from.indexOf(c.shot) >= 0) { unsched(c.settleT); c.settleT = null; camPlace(); camTo(K.beat[0], K.beat[1]); } } };
    v.addEventListener('timeupdate', tick); c.off = function () { v.removeEventListener('timeupdate', tick); }; tick(); }
  var camResizeT = 0;
  window.addEventListener('resize', function () { clearTimeout(camResizeT); camResizeT = setTimeout(function () { if (cam) { camPlace(); camTo(cam.shot, 0); } }, 200); });
  /* the montage bars: letterbox top and bottom, under the nav and the banner */
  var barsEl = null;
  function setBars(on){
    if (!barsEl) { barsEl = document.createElement('div'); barsEl.id = 'jjst-bars'; barsEl.innerHTML = '<div class="b t"></div><div class="b d"></div>'; layersWrap.parentNode.appendChild(barsEl); void barsEl.offsetWidth; }
    barsEl.classList.toggle('on', on);
  }
  function setSnow(on){                                     // the mountains: flakes drift down the frame; a cap of snow settles on the banner
    if (on && !snowEl) { snowEl = document.createElement('div'); snowEl.id = 'jjst-snow'; var h = '';
      for (var i = 0; i < 60; i++) { var fk = i % 3 === 0, sz = fk ? (9 + Math.random() * 9).toFixed(1) : (2 + Math.random() * 5).toFixed(1);   // every third one is a proper snowflake
        h += '<i' + (fk ? ' class="fk"' : '') + ' style="--sp:' + (5 + Math.random() * 6).toFixed(1) + 's;left:' + (Math.random() * 100).toFixed(1) + '%;width:' + sz + 'px;height:' + sz + 'px;--d:' + (7 + Math.random() * 8).toFixed(1) + 's;--dl:-' + (Math.random() * 14).toFixed(1) + 's;--sw:' + (2 + Math.random() * 6).toFixed(1) + 'cqw;opacity:' + (.45 + Math.random() * .5).toFixed(2) + '"></i>'; }
      snowEl.innerHTML = h; layersWrap.parentNode.insertBefore(snowEl, layersWrap.nextSibling); pfxAdopt(snowEl);   /* s130: drawn on one canvas */
      if (capEl && !capEl.querySelector('.jjst-capsnow')) { var cs = document.createElement('img'); cs.className = 'jjst-capsnow'; cs.alt = ''; cs.src = F('banner-snow'); capEl.appendChild(cs); void cs.offsetWidth; } }   // s104: its 0 lands first, so the cap settles over 3s instead of popping on
    if (snowEl) snowEl.classList.toggle('on', on);
    if (capEl) capEl.classList.toggle('snowy', on);
  }
  var cutNow = false, blackout = false;                    // blackout: the scene is under full black (the banner and controls stay); lifted by the next non-village comp                                        // comp.cut: a film cut — no crossfade on the board, no glide on the figures
  var slideT = 0;
  function dressBg(el, c){                                   // per-comp board treatment: a dim, a pan against the ride, the camera's zoom, a slide with a figure (the horse drifting at the dismount)
    c = c || {}; el.classList.toggle('pan', !!c.pan); unsched(slideT);
    el.style.transformOrigin = c.zoom ? c.zoom.ox + ' ' + c.zoom.oy : '50% 50%';
    el.classList.toggle('shift', !!c.shift); el.style.width = c.shift ? 'calc(100% + 7cqw)' : ''; el.style.transform = c.zoom ? 'scale(' + c.zoom.s + ')' : (c.shift ? 'translateX(clamp(-7cqw, var(--sl, 0cqw), 0cqw))' : ''); el.style.filter = c.bgFx || ''; if (c.bgPos || el.style.objectPosition) el.style.objectPosition = c.bgPos || '';   /* st2 · bgPos: which part of a cover-fitted board a narrow screen looks at (storytime2 drives it through the --bp variable, so its glide is one animation shared with the figures) */   /* shift: the board is 7cqw wider than the screen and rides --sl, so backing up never shows its edge (the gap Joe saw in a tall window) */   // shift: the board rides --sl, never past its own edge
    if (c.slide) { var sl = c.slide, go = function () { el.style.transition = 'opacity ' + T.bgFade + 'ms ease, transform ' + (sl.dur || 0) + 'ms ease-in-out, filter 1.2s ease'; el.style.transform = 'translateX(' + sl.dx + ')'; };
      if (sl.delay) slideT = sched(go, sl.delay); else go(); }   // sched, so a pause holds the slide too (s87)
  }
  var bgPre = {};                                            // s104: boards decoded ahead of their shot (name → a ready <img>)
  var bgPreQ = [];
  var posterPre = {};                                        // the next shot's figures (its stills, and its clips' posters — a fresh clip shows its poster first), warmed the same way
  function prePoster(url){ if (!url || posterPre[url] || !bgWrap) return;
    var im = document.createElement('img'); im.alt = ''; im.setAttribute('aria-hidden', 'true'); im.style.cssText = PRE_CSS.replace('inset:0;width:100%;height:100%', 'left:0;top:0;width:96px;height:96px').replace('cover', 'contain');   // s110: a figure's still is warmed small (its decode is what counts), not as another full-screen layer im.src = url; posterPre[url] = im; bgWrap.appendChild(im);
    setTimeout(function () { if (im.parentNode) im.remove(); if (posterPre[url] === im) delete posterPre[url]; }, 30000); }   // long enough to be used; the decode stays in the cache after
  function preBg(name){ if (!name || name === curBg || bgPre[name] || !bgWrap) return;   // mounted over the board at 0.2% (invisible), so the GPU has it decoded + uploaded before its crossfade: a detached decode() did not reach the raster cache, and the handover frame waited ~50-150ms on the 2400px webp (+ its figures' posters)
    var im = document.createElement('img'); im.alt = ''; im.setAttribute('aria-hidden', 'true'); im.style.cssText = PRE_CSS; im.src = F(name); bgPre[name] = im; bgWrap.appendChild(im);
    bgPreQ.push(name); while (bgPreQ.length > 2) { /* s110: two pre-decoded boards, not four full-screen layers */ var old = bgPreQ.shift(), oe = bgPre[old]; if (oe) { delete bgPre[old]; if (oe.parentNode) oe.remove(); } } }
  var PRE_CSS = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.002;pointer-events:none;will-change:opacity';   // its own layer: rastered once, never re-drawn with the sky's twinkle
  function showBg(name, c){
    if (name === curBg) { if (curBgLayer) { curBgLayer.style.transition = cutNow ? 'none' : 'opacity ' + T.bgFade + 'ms ease' + (c && c.shift ? ', filter 1.2s ease' : BG_TR); dressBg(curBgLayer, c); } return; }
    curBg = name;
    var incoming = bgPre[name]; delete bgPre[name]; var qi = bgPreQ.indexOf(name); if (qi >= 0) bgPreQ.splice(qi, 1);            // s104: the board decoded ahead (warmAhead), so the crossfade never waits on a 2400px decode
    if (incoming) { incoming.style.cssText = ''; incoming.removeAttribute('aria-hidden'); incoming.className = 'jjst-bg'; }
    else { incoming = document.createElement('img'); incoming.className = 'jjst-bg'; incoming.src = F(name); }
    incoming.style.opacity = '0'; dressBg(incoming, c); bgWrap.appendChild(incoming);
    var outgoing = curBgLayer; void incoming.offsetWidth;
    incoming.style.transition = cutNow ? 'none' : 'opacity ' + T.bgFade + 'ms ease' + (c && c.shift ? ', filter 1.2s ease' : BG_TR); incoming.style.opacity = '1';   /* a shifting board tracks the horse frame by frame: no transform transition to lag behind the layers */
    if (outgoing) { if (cutNow) { if (outgoing.parentNode) outgoing.remove(); } else {
      outgoing.style.transition = 'opacity ' + T.bgFade + 'ms ease'; outgoing.style.opacity = '0';
      setTimeout(function () { if (outgoing.parentNode) outgoing.remove(); }, T.bgFade + 80); } }
    curBgLayer = incoming;
  }
  function clearAnims(){ animTimers.forEach(function (t) { clearInterval(t); unsched(t); }); animTimers = []; }
  /* ---- a video layer's soundtrack: the clip's own audio, extracted to mp3 and played through Howler
     (the site's mute button rules it), kept in step with the muted <video>'s clock ---- */
  var SFX_TRIM = .8, SFX = 0.5 * SFX_TRIM;                     // s116: every Storytime sound effect 20% down (Joe)                                              // global gain on every story sound (beds, one-shots, cues) — on top of the per-sound vol
  function attachSound(video, snd){
    if (!window.Howl) return;
    var h = new Howl({ src: [GB + 'story-' + snd.src + '.mp3' + AV], volume: snd.vol == null ? .5 : snd.vol, preload: true });
    window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 };
    window.jjAudio.sounds.push(h);
    var id = null, lastT = 0;
    var started = false, vol = (snd.vol == null ? .5 : snd.vol) * SFX, fin = snd.fadeIn == null ? 2500 : snd.fadeIn, waitT = null;
    function sync(){
      if (video.paused || !video.isConnected) return;
      if (snd.once && started) return;                    // a one-shot: plays with the first pass of the picture, then stays quiet
      if (snd.delay && !started) { if (waitT == null) waitT = sched(function () { waitT = 0; sync(); }, snd.delay * 1000); if (waitT) return; }   // s119 · delay: the sound starts this long after the picture (the story clock: a pause holds it)
      try {
        if (id == null || !h.playing(id)) {
          id = h.play();
          if (!started) { started = true; h.volume(0, id); h.fade(0, vol, fin, id);   // ease in
            if (snd.fadeOutAt != null) { var fid = id; sched(function () { try { h.fade(h.volume(fid), 0, snd.fadeOut || 800, fid); } catch (e) {} }, snd.fadeOutAt * 1000); } }   // s113 · fadeOutAt (s into the sound): a one-shot's tail eased away
        }
        var d = h.duration() || 0;
        if (d && !snd.once) h.seek(video.currentTime % d, id);
      } catch (e) {}
    }
    video.addEventListener('playing', function () { if (!started) sync(); });
    video.addEventListener('seeked', sync);
    video.addEventListener('pause', function () { try { if (id != null) h.pause(id); } catch (e) {} });
    video.addEventListener('timeupdate', function () { var t = video.currentTime; if (t < lastT - 0.8) sync(); lastT = t; });   // the loop wrapped
    h.once('load', sync);
    h.once('unlock', sync);                               // first gesture: fall into step with the picture
    video._howl = h;
  }
  /* ---- the aura: a box exactly over a layer that carries its glow, label and code effects ---- */
  /* ---- one stage-level hit manager for every pixel-tested character (heroes + the window peek) ---- */
  var HITS = [];
  function hitTop(e){
    if (bookOn) return null;   /* s126 · ?book=1 only: while the storybook is up, nothing in the shot under it answers (a press on a page fell through to Trogdor asleep beneath it) */
    if (document.body.classList.contains('jj-modal-open') || storyPaused) return null;          // achievements / explainer open, or paused (s121 · R2) → nothing behind reacts
    var t = e.target; if (t && t.closest && t.closest('.prop, #jjst-cap, .jjst-ov, #jjst-skipcta, .hearthy')) return null;
    for (var i = HITS.length - 1; i >= 0; i--) { var h = HITS[i]; if (!h.el.isConnected) { HITS.splice(i, 1); continue; } if (h.over(e)) return h; }
    return null;
  }
  function stageCursor(on){ var b = curBgLayer; if (!b || b._cur === on) return; b._cur = on;
    if (on) b.setAttribute('data-cursor', 'hover'); else b.removeAttribute('data-cursor'); b.style.cursor = on ? 'pointer' : '';
    try { b.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); } catch (x) {} }   // the site cursor re-reads data-cursor on mouseover
  function clearHits(){ HITS.forEach(function (h) { h.setHov(false); }); stageCursor(false); }
  function wireStageHits(stage){
    stage.addEventListener('pointermove', function (e) { var top = hitTop(e); HITS.forEach(function (h) { h.setHov(h === top); }); stageCursor(!!top); });
    stage.addEventListener('pointerleave', clearHits);
    stage.addEventListener('click', function (e) { var top = hitTop(e); if (!top) return; e.stopPropagation(); top.click(e); }, true);
  }
  function sporeHtml(n){ var o = ''; for (var i = 0; i < n; i++) o += '<i class="spore" style="--x:' + Math.round(8 + Math.random() * 84) + '%;--y:' + Math.round(10 + Math.random() * 55) + '%;--s:' + (.18 + Math.random() * .3).toFixed(2) + 'cqw;--d:' + (3 + Math.random() * 3.5).toFixed(1) + 's;--dl:-' + (Math.random() * 6).toFixed(1) + 's;--sx:' + ((Math.random() < .5 ? -1 : 1) * (.3 + Math.random() * .9)).toFixed(2) + 'cqw"></i>'; return o; }
  function makeAura(L, el){
    if (L.aura && L.aura.spores) { el.style.setProperty('--mg', L.aura.glow); }
    var aura = document.createElement('div'); aura.className = 'jjst-aura';
    aura.style.cssText = L.css + ';aspect-ratio:' + (L.ar || 1) + ';';
    var h = L.hero || L.aura || {}; if (h.spores) aura.classList.add('spores'); if (h.hearth) aura.classList.add('hearth');
    aura.style.setProperty('--gc', h.glow || 'rgba(255,255,255,.4)');
    aura.innerHTML = '<div class="aglow"></div>' + (h.spores ? sporeHtml(10) : '') + (h.label ? '<div class="alabel" style="top:' + (h.lt == null ? -4 : h.lt) + '%">' + h.label + '</div>' : '');
    if (L.hero) {
      var hit = maskHit(L.vid);                             // pressable pixels: the precomputed mask, else the poster's alpha
      if (!hit && el.tagName === 'VIDEO') { var pim = new Image(); pim.crossOrigin = 'anonymous';
        pim.onload = function () { try { var c = document.createElement('canvas'), cx = c.getContext('2d'); c.width = 160; c.height = Math.max(1, Math.round(160 / (L.ar || 1)));
          cx.drawImage(pim, 0, 0, c.width, c.height); hit = { w: c.width, h: c.height, d: cx.getImageData(0, 0, c.width, c.height).data }; } catch (e) {} };
        pim.src = el.poster; }
      function over(e){
        var r = el.getBoundingClientRect(), fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
        if (hit) { var x = Math.floor(fx * hit.w), y = Math.floor(fy * hit.h); return x >= 0 && y >= 0 && x < hit.w && y < hit.h && hit.d[(y * hit.w + x) * 4 + 3] > 40; }
        var b = h.hit; return !b || (fx >= b[0] && fy >= b[1] && fx <= b[2] && fy <= b[3]);   // fallback: a box round the character
      }
      var isHov = false;
      function setHov(on){ if (on === isHov) return; isHov = on; el.classList.toggle('hov', on); aura.classList.toggle('hov', on); }
      el.style.pointerEvents = 'none';                      // the stage hit-tests his pixels; the box itself blocks nothing beneath it
      HITS.push({ el: el, over: over, setHov: setHov, click: function (ev) {
        if (L.tap) runFx(L.tap, L.key, ev);   // s112: the tap (Trogdor's 'wake') only on his pixels
        if (L.hero.seekTo == null || el.tagName !== 'VIDEO') return;
        try { el.currentTime = L.hero.seekTo; var p = el.play(); if (p && p.catch) p.catch(function () {}); } catch (err) {}
        aura.classList.add('lit'); clearTimeout(aura._litT);
        aura._litT = setTimeout(function () { aura.classList.remove('lit'); }, 1800);
      } });
    }
    el.parentNode.insertBefore(aura, el);                 // glow sits BEHIND the art (same parent — layers or, for behind:true, the bg wrap)
    (L.fx || []).forEach(function (fx) { startFx(aura, fx); });
    return aura;
  }
  function sparkleBurst(aura, n){
    for (var i = 0; i < n; i++) (function (i) { setTimeout(function () {
      if (!aura.isConnected) return;
      var g = document.createElement('i'); g.className = 'glint';
      g.style.left = (28 + Math.random() * 46) + '%'; g.style.top = (14 + Math.random() * 40) + '%';
      aura.appendChild(g); setTimeout(function () { g.remove(); }, 1000);
    }, i * 110); })(i);
  }
  /* named one-shot effects fired from caption words (triggers: { at:'jewels', fx:'chest' }) */
  var boardMaps = {};                                        // alpha maps of the scene boards — for a character that peeks through a hole
  function boardMap(name, cb){ if (boardMaps[name]) return cb(boardMaps[name]); if (maskHit(name)) return cb(boardMaps[name] = maskHit(name));
    var im = new Image(); im.crossOrigin = 'anonymous';
    im.onload = function () { try { var c = document.createElement('canvas'), cx = c.getContext('2d'); c.width = 240; c.height = Math.max(1, Math.round(240 * im.naturalHeight / im.naturalWidth));
      cx.drawImage(im, 0, 0, c.width, c.height); boardMaps[name] = { w: c.width, h: c.height, ar: im.naturalWidth / im.naturalHeight, d: cx.getImageData(0, 0, c.width, c.height).data }; cb(boardMaps[name]); } catch (e) {} };
    im.src = F(name); }
  function inHole(m, e){                                      // is this point on a TRANSPARENT pixel of the cover-fitted board?
    var W = window.innerWidth, H = window.innerHeight, L0 = 0, T0 = 0, dw, dh; if (window.JJ_LB && layersWrap) { var pb0 = layersWrap.getBoundingClientRect(); if (pb0.width) { W = pb0.width; H = pb0.height; L0 = pb0.left; T0 = pb0.top; } }
    if (cam && curBgLayer) { var bb = curBgLayer.getBoundingClientRect(); if (bb.width) { W = bb.width; H = bb.height; L0 = bb.left; T0 = bb.top; } }   // s101: the camera has the board scaled and moved: test against where it is drawn
    if (W / H > m.ar) { dw = W; dh = W / m.ar; } else { dh = H; dw = H * m.ar; }
    var fx = (e.clientX - L0 - (W - dw) / 2) / dw, fy = (e.clientY - T0 - (H - dh) / 2) / dh, x = Math.floor(fx * m.w), y = Math.floor(fy * m.h);
    return x >= 0 && y >= 0 && x < m.w && y < m.h && m.d[(y * m.w + x) * 4 + 3] < 30; }
  function wireThrough(el, L){                                // behind:true character, pressable only where he shows through the board
    if (!L.through || el._thruWired) return; el._thruWired = true;
    var hit = maskHit(L.vid), board = null, pim = new Image(); pim.crossOrigin = 'anonymous';
    if (!hit) pim.onload = function () { try { var c = document.createElement('canvas'), cx = c.getContext('2d'); c.width = 160; c.height = Math.max(1, Math.round(160 / (L.ar || 1)));
      cx.drawImage(pim, 0, 0, c.width, c.height); hit = { w: c.width, h: c.height, d: cx.getImageData(0, 0, c.width, c.height).data }; } catch (e) {} };
    if (!hit) pim.src = el.poster; boardMap(L.through.bg, function (m) { board = m; });
    function over(e){ if (!hit || !board || !el.isConnected || el._caught || !inHole(board, e)) return false;
      var r = el.getBoundingClientRect(), x = Math.floor((e.clientX - r.left) / r.width * hit.w), y = Math.floor((e.clientY - r.top) / r.height * hit.h);
      return x >= 0 && y >= 0 && x < hit.w && y < hit.h && hit.d[(y * hit.w + x) * 4 + 3] > 40; }
    HITS.push({ el: el, over: over, setHov: function (on) { el.classList.toggle('hov', on); }, click: function (e) {
      el._caught = true; el.classList.remove('hov');
      var fb = document.createElement('div'), fs = Math.max(el.offsetWidth, el.offsetHeight) * 1.2; fb.className = 'jjst-trogfire';   // s121 (Joe): caught! he goes in a burst of fire that swallows him (he used to bolt off to the right). The burst sits behind the board with him: it shows through the window only
      fb.style.cssText = 'left:' + (el.offsetLeft + el.offsetWidth / 2 - fs / 2).toFixed(0) + 'px;top:' + (el.offsetTop + el.offsetHeight / 2 - fs / 2).toFixed(0) + 'px;width:' + fs.toFixed(0) + 'px;height:' + fs.toFixed(0) + 'px'; el.parentNode.insertBefore(fb, el.nextSibling);
      if (fb.animate) fb.animate([{ scale: '.2', opacity: 0 }, { scale: '.85', opacity: 1, offset: .28 }, { scale: '1.1', opacity: 1, offset: .55 }, { scale: '1.45', opacity: 0 }], { duration: 950, easing: 'ease-out', fill: 'forwards' });
      el.style.transition = 'opacity .22s ease .26s'; el.style.opacity = '0'; setTimeout(function () { if (fb.parentNode) fb.remove(); }, 1100);
      if (window.jjScore) window.jjScore.award('trogdor', { x: e.clientX, y: e.clientY }); } });
  }
  function wireSoftLoop(el, L){                              // softLoop:t — no ping-pong and no hard wrap: at t the fire stops (the last frame melts away over the restart) and he huffs and puffs again from the top
    if (!L.softLoop || el._softWired) return; el._softWired = true; el.loop = false;
    var again = function () { if (!el.isConnected) return;
      try { var c = document.createElement('canvas'), r = el.getBoundingClientRect(); c.width = el.videoWidth / 2; c.height = el.videoHeight / 2; c.getContext('2d').drawImage(el, 0, 0, c.width, c.height);
        c.className = 'jjst-layer'; c.style.cssText = el.style.cssText + ';opacity:1;transition:opacity .6s ease;pointer-events:none;height:' + r.height + 'px'; el.parentNode.insertBefore(c, el.nextSibling);
        setTimeout(function () { c.style.opacity = '0'; }, 60); setTimeout(function () { c.remove(); }, 750); } catch (e) {}
      el.currentTime = 0; if (!storyPaused) { var p = el.play(); if (p && p.catch) p.catch(function () {}); } };
    el.addEventListener('timeupdate', function () { if (el.currentTime >= L.softLoop && !el._sl) { el._sl = true; again(); setTimeout(function () { el._sl = false; }, 1000); } });
    el.addEventListener('ended', again);
  }
  function wireLoopBack(el, L){
    if (!L.loopBack || el._lbWired) return; el._lbWired = true;
    el.addEventListener('timeupdate', function () { if (el.currentTime >= L.loopBack[0]) { try { el.currentTime = el.currentTime - L.loopBack[1]; } catch (e) {} } });
  }
  function wireSeg(el, L){                                   // seg:[a,b] = the idle stretch to loop; hop:[a,b] = the one-shot a tap plays before returning to it
    if (!L.seg || el._segWired) return; el._segWired = true; el._segL = L;
    el.addEventListener('timeupdate', function () { if (el._hop) { if (el.currentTime >= L.hop[1]) { el._hop = false; el.currentTime = L.seg[0]; } }
      else if (el.currentTime >= L.seg[1]) el.currentTime = L.seg[0]; });
  }
  function wireWarm(el, L){                                  // a bed-sound prop (the hearth): grows on hover, its bed swells with it
    if (!L.hoverBoost) return; el.style.pointerEvents = 'auto'; el.setAttribute('data-cursor', 'hover');   // re-applied every pass
    if (el._warmWired) return; el._warmWired = true;
    el.addEventListener('pointerenter', function () { el.classList.add('warm'); var wa = layerRecs.hearth && layerRecs.hearth.aura; if (wa) wa.classList.add('warm'); fxWarm(true); if (compHowl) try { compHowl.fade(compHowl.volume(), compVol * L.hoverBoost, 400); } catch (e) {} });
    el.addEventListener('pointerleave', function () { el.classList.remove('warm'); var wa = layerRecs.hearth && layerRecs.hearth.aura; if (wa) wa.classList.remove('warm'); fxWarm(false); if (compHowl) try { compHowl.fade(compHowl.volume(), compVol, 600); } catch (e) {} });
  }
  function wireMaskTap(el, L, k){ el.style.pointerEvents = 'none'; el.removeAttribute('data-cursor'); if (el._maskWired) return; el._maskWired = true;
    var hit = maskHit(L.vid || L.src);
    HITS.push({ el: el, over: function (e) { if (!el.isConnected) return false; var r = el.getBoundingClientRect(); if (!r.width) return false; var x = Math.floor((e.clientX - r.left) / r.width * hit.w), y = Math.floor((e.clientY - r.top) / r.height * hit.h);
        return x >= 0 && y >= 0 && x < hit.w && y < hit.h && hit.d[(y * hit.w + x) * 4 + 3] > 40; },
      setHov: function (on) { el.classList.toggle('hov', on); }, click: function (ev) { runFx(L.tap, k, ev); } }); }
  function wireTap(el, L, k){                                 // a pressable prop (the chest, the bones, the chickens, the spirits)
    if (L.tap && !L.hero && MASK[L.vid || L.src]) { wireMaskTap(el, L, k); return; }   // s112: a big prop with a silhouette mask (the portal) is pressed on its pixels only
    if (!L.tap || L.hero) return;   // s112: a hero (cavern Trogdor) is pressed through its silhouette mask (HITS) — its whole box used to take the pointer: 'the clickable area is waay too big'
    el.style.pointerEvents = 'auto'; el.style.cursor = 'pointer'; el.setAttribute('data-cursor', 'hover');   // re-applied every pass: a morph rewrites cssText and would leave it unpressable
    if (el._tapWired) return; el._tapWired = true;
    el.addEventListener('click', function (e) { e.stopPropagation(); if (storyPaused) return; runFx(L.tap, k, e); });
    if (L.hoverSnd) el.addEventListener('pointerenter', function () { var n = performance.now(); if (n - (el._hs || 0) < 1500) return; el._hs = n; oneShot(L.hoverSnd, .3); });   // the rattle
    if (L.hoverPlay && el.tagName === 'VIDEO') {                // an idle clip that only moves while the pointer is on it
      el.addEventListener('pointerenter', function () { el.loop = true; var p = el.play(); if (p && p.catch) p.catch(function () {}); });
      el.addEventListener('pointerleave', function () { el.pause(); });
    }
  }
  var fxGen = 0; function fxSched(fn, ms){ var g = fxGen; return sched(function () { if (g === fxGen) fn(); }, ms); }   /* s129 · A4 */
  function runFx(name, key, e){
    if (XP && name.indexOf('x:') === 0) { if (XP.fx) XP.fx(name.slice(2), key, e, window.jjStory.api); return; }   // st2: a registered part's own interactions
    if (name.indexOf('cam:') === 0) { if (CAMERA_PASS) camBeat(name.slice(4)); return; }   // a camera beat (s96)
    if (name.indexOf('fx:') === 0) { fxCue(name.slice(3)); return; }   // s105: a Blender fx layer on / off / to a level (CAM_RIGS.<rig>.fx)
    if (name === 'bedOut') { fadeBed(2500); return; }
    if (name === 'wake') {                                     // a prod at the sleeping Trogdor: he jolts, a big snort, and Rise and Shine
      var wk = layerRecs[key]; if (!wk || wk.el._jolt) return; wk.el._jolt = true;
      wk.el.classList.remove('jolt'); void wk.el.offsetWidth; wk.el.classList.add('jolt'); setTimeout(function () { wk.el.classList.remove('jolt'); wk.el._jolt = false; }, 1100);
      oneShot('dragon-snore', .5);
      if (e && window.jjScore) window.jjScore.award('wake', { x: e.clientX, y: e.clientY });
      return;
    }
    if (name.indexOf('blackout@') === 0) { var bwait = +name.slice(9) || 0; sched(function () { if (typeof curComp === 'string' && curComp.indexOf('village') === 0) runFx('blackout', key); }, bwait); return; }   /* s151: the black after a wait, and only if the village is still up (a Next in the wait skips it) */
    if (name === 'blackout') { musBlack(); blackout = true; var bf = document.getElementById('jjst-fade'); bf.style.transition = 'opacity 1s ease'; bf.style.opacity = '1'; return; }
    if (name === 'barsIn') { setBars(true); return; }
    if (name === 'barsOut') { setBars(false); return; }
    if (name === 'spirit') {                                   // a tap on a tree spirit: it rattles, and Forest Friend (→ the Tree Spirit companion)
      var sp = layerRecs[key]; if (sp) { sp.el.classList.remove('rattle'); void sp.el.offsetWidth; sp.el.classList.add('rattle'); setTimeout(function () { sp.el.classList.remove('rattle'); }, 750); }
      oneShot('bone-jiggle', .25);
      if (window.jjScore) window.jjScore.award('spirit', { x: e ? e.clientX : null, y: e ? e.clientY : null });
      return;
    }
    if (name === 'energy') {                                   // 'an energy flow through him': every mote in the forest streams into Joe, and he starts to glow
      var jr = layerRecs.joe; if (jr) energyInto(jr.el); return; }
    if (name === '__energyBody') { var st = document.getElementById('jjst'), tgt = key;
      var sr = st.getBoundingClientRect(), r = tgt.getBoundingClientRect(), hx = r.left + r.width * (tgt.tagName === 'VIDEO' ? .44 : .5) - sr.left, hy = r.top + r.height * (tgt.tagName === 'VIDEO' ? .5 : .2) - sr.top, rad = Math.max(40, r.height * (tgt.tagName === 'VIDEO' ? .12 : .2));
      var mcs = ['rgba(200,150,255,.95)', 'rgba(120,200,255,.95)', 'rgba(255,224,120,.95)', 'rgba(190,255,225,.95)'];
      for (var mi = 0; mi < 34; mi++) (function (mi) { var m = document.createElement('i'); m.className = 'jjst-mote';
        var x0 = Math.random() * sr.width, y0 = Math.random() * sr.height * .8, ang = Math.random() * 360, rr = rad * (.7 + Math.random() * .6), dur = 3 + Math.random() * 2.5;
        m.style.setProperty('--mc', mcs[mi % 4]); m.style.setProperty('--md', dur.toFixed(2) + 's');
        m.style.transform = 'translate(' + x0 + 'px,' + y0 + 'px) scale(1)'; st.appendChild(m);
        fxSched(function () { m.style.opacity = '1'; }, 40 + mi * 90);
        fxSched(function () { var a0 = ang * Math.PI / 180; m.style.transform = 'translate(' + (hx + Math.cos(a0) * rr) + 'px,' + (hy + Math.sin(a0) * rr * .6) + 'px) scale(.7)'; }, 200 + mi * 90);   // slow, staggered drift in
        fxSched(function () { m.classList.add('halo'); m.style.transition = 'opacity .6s ease'; m.style.setProperty('--hx', hx + 'px'); m.style.setProperty('--hy', hy + 'px'); m.style.setProperty('--hr', rr + 'px'); m.style.setProperty('--ha', ang + 'deg'); m.style.setProperty('--hd', (3 + Math.random() * 3).toFixed(2) + 's'); m.style.transform = ''; }, 200 + mi * 90 + dur * 1000);   // then it circles his head
      })(mi);
      fxSched(function () { st.classList.add('charged'); }, 2500); return; }
    if (name === 'force') { startForce(0); return; }
    if (name === 'orbUp') { if (!sfxQuiet) sfxShot('orb-whoosh', .35); var ou = layerRecs.orb; if (ou) { ou.el.classList.remove('cut');   /* s129 · A4 */ void ou.el.offsetWidth; ou.el.style.left = '47%'; ou.el.style.bottom = 'calc(' + FOREST_FEET + ' + 24.8cqw)';   /* 27cqw over the clip's arch foot (which now sits at FOREST_FEET - 2.2cqw, Joe on the path) */ ou.el.style.width = '7cqw'; }
      document.getElementById('jjst').classList.add('rumble');   // the whole scene trembles from here until the portal dies
      Array.prototype.forEach.call(document.querySelectorAll('#jjst .jjst-mote'), function (m) { m.classList.add('gone'); m.style.transition = 'opacity 1.2s ease'; m.style.opacity = '0'; setTimeout(function () { m.remove(); }, 1300); });
      return; }   // 'The orb shot into the air'
    if (name === 'pullGo') {                                   // 'force': the clip runs once, never paused, at 1.2x so the yank lands on 'suddenly'; its beats drive the rest
      var pv = layerRecs.pull && layerRecs.pull.el; if (!pv || pv._went) return; pv._went = true; pv.playbackRate = 1;   // one run at normal speed across both panels: swirl 1-2.5s, runes 3-4s, shock 5-6s, drift 7.5-10s, yanked 10.5s, runes off 12s, empty 13.5s
      if (!storyPaused) { var pp = pv.play(); if (pp && pp.catch) pp.catch(function () {}); } else if (pausedVideos.indexOf(pv) < 0) pausedVideos.push(pv);
      var st = document.getElementById('jjst'), beats = { quake: 7.5, pflash: 9.6, yank: 10.68, dark: 12.0, close: 12.85, fall: 13.15, end: 13.6 }, done = {}; pv.classList.remove('pclose');   // fall (s108): the portal's last flash as it closes (13.1-13.5s): the orb drops dead   // yank (s105): the clip's own starburst as the portal swallows him (10.8-10.9s, measured off its frames): our flash peaks on it
      (function watch(){ if (!pv.isConnected) return; var t = pv.currentTime;
        if (!done.pon) { done.pon = 1; if (t < PON.open - .45) portalOn(PON.hit - PON.open + t); }   // s115: stepped in without the tap: it joins on the clip's clock (not replayed past the hit); the fairies sink under the vortex
        if (t < PON.open) portalSync(t);                                  // the hit is held to the clip's big moment   // s114: the forest music drops well under the vortex   // s113: the swirl opens / the runes light (not replayed on a jump past it)
        if (t >= 4.3 && !done.vx) { done.vx = 1; vortexBed(.12, 2500); }   // the vortex bed rises under the end of portal-on
        if (t >= beats.quake && !done.q) { done.q = 1; st.classList.remove('quake'); void st.offsetWidth; st.classList.add('quake'); }
        if (t >= beats.pflash && !done.p) { done.p = 1; if (t < beats.pflash + .5) { var fp = stagePt(pv, .645, .52); if (fp) done.pv = fxShot('ffar-pflash', { x: fp[0], y: fp[1], size: Math.max(pv.parentNode.clientWidth || innerWidth, innerWidth) * 2 });  if (done.pv) { done.fs = 1; sfxFlash(true, 1150); }} }   // s106: the Blender flash — streaks spiral in, then it blooms (its peak 1.25s in = the clip's own starburst)
        if (t >= beats.yank && !done.y) { done.y = 1; orbGone();   /* s129 · C2 */ if (t < beats.yank + .6) { if (!done.fs) sfxFlash(true, 60); var yp = stagePt(pv, .645, .52); bloom(done.pv ? { kind:'portal', x: yp && yp[0], y: yp && yp[1], in:200, hold:60, out:1500, peak:.42, noCore:true } : { kind:'portal', x: yp && yp[0], y: yp && yp[1], in:170, hold:70, out:1700, peak:.95, core:1.1 }); } }   // merged with it: only a soft wash out to the frame's corners   // s105: the big flash as he is sucked in (not replayed on a jump past it)
        if (t >= beats.dark && !done.d) { done.d = 1;                                   // the portal has gone dark: the drawn arch (open to the forest) fades up under it, the clip fades away
          }
        if (t >= beats.close && !done.c) { done.c = 1; pv.classList.add('pclose'); if (t < beats.close + .5) sfxFlash(false, 350); }   // s114: the portal's closing flare (its peak ~13.3s)   /* s113: the clip's closing flash throws a hard horizontal streak across the whole frame (13.2-13.7s): a soft oval mask round the arch feathers it out just past the stones */
        if (t >= beats.fall && !done.f) { done.f = 1; }   /* s129 · C2: the orb no longer falls (it went in the flash) */   // s108: straight down where it hangs, flat on the path, and it stays
        if (t >= beats.end && !done.e) { done.e = 1; vortexBed(.04, 2000);   // the portal has shut: the vortex drops to a murmur until the tunnel
 st.classList.remove('quake', 'rumble', 'charged'); setSparkle(false); return; }   // still again, the motes gone
        requestAnimationFrame(watch); })();
      return; }
    if (name === 'slowFade') { var sf = document.getElementById('jjst-fade'); sf.style.transition = 'opacity 7s ease-in'; void sf.offsetWidth; sf.style.opacity = '.7'; return; }   // the black starts creeping in
    if (name === 'auraZoom') { fxSched(auraIn, 400); return; }   // s105: the dip starts at 400ms so the pose still changes ~700ms after the word, under the black
    if (name.indexOf('pose:') === 0) { var pr = layerRecs.joe, pn = name.slice(5); if (!pr || !POSES[pn] || !curJoeAt) return;   // a change of pose mid-line: same feet, same spot
      var nsrc = F('joe-' + pn); pr.el.src = nsrc; pr.src = nsrc; var pc = JOE(pn, curJoeAt[0], curJoeAt[1], curJoeAt[2]);
      pc.split(';').forEach(function (decl) { var c = decl.indexOf(':'); if (c > 0) pr.el.style.setProperty(decl.slice(0, c).trim(), decl.slice(c + 1).trim()); }); return; }
    if (name === 'orbGlow') { sfxShot('orb-shimmer', .3);   // s113: the orb wakes: its shimmer (s114: the forest music plays on through the tap wait)
      var og = layerRecs.orb; if (og) { og.el.src = F('orb-active'); og.src = F('orb-active'); og.el.style.width = '8.5cqw'; og.el.style.rotate = '0deg'; if (curComp === 'forest4b') { og.el.style.left = '46.96cqw'; og.el.style.bottom = 'calc(31cqh - 2.11cqw)'; }   /* s106: the lit art is bigger and upright; its point stays on the same spot */ og.el.classList.add('glow'); var gp = stagePt(og.el, .5, .5); if (gp) sparkBurst(gp[0], gp[1], 10, Math.max(gp[2], 50) * 1.2); orbState('active'); } return; }   // it wakes: the lit art, shivering (s105: with a little burst of sparkles, as in the 3D test)
    if (name === 'black') { toBlack(); return; }
    if (name === 'quake') { var q = document.getElementById('jjst'); q.classList.remove('quake'); void q.offsetWidth; q.classList.add('quake'); return; }
    if (name === 'loaderIn') { endLoaderIn(); return; }
    if (name === 'dark' || name === 'darkOff') { var on = name === 'dark', dk = document.getElementById('jjst-dark'), sg = document.getElementById('jjst'); if (dk) dk.classList.toggle('on', on); if (sg) sg.classList.toggle('moody', on); return; }
    if (name === 'chick') {                                    // the bones twitch, the chicken squawks and hops, then it's back to shivering (wireSeg)
      var cr = layerRecs[key]; if (!cr || cr.el._hop) return; var v = cr.el, hl = v._segL;
      v._hop = true; try { v.currentTime = hl.hop[0]; } catch (x) {}
      var pv = v.play(); if (pv && pv.catch) pv.catch(function () {});
      setTimeout(function () { oneShot('chicken-squawk', .45); }, 350);
      if (window.jjScore) window.jjScore.award('chick-cave', { x: e ? e.clientX : null, y: e ? e.clientY : null });   // → the Armoured Chicken in the store
      return;
    }
    if (name === 'chicks') {                                   // the village three: squawk + hop, once through; a second prod replays from the calm still
      var gr = layerRecs[key]; if (!gr || gr.el._busy) return; var gv = gr.el; gv._busy = true;
      try { gv.currentTime = 1.5; } catch (x) {}                    // the clip idles for 1.5s before the startle — skip straight to it (s114: from 1.5, the last idle frame, so nothing jumps; 1.7 landed on the clip's own blend into the hop)
      oneShot('chickens-squawk', .45);
      var gp = gv.play(); if (gp && gp.catch) gp.catch(function () {});
      var gfree = function () { gv._busy = false; }; gv.addEventListener('ended', gfree, { once: true }); setTimeout(gfree, 5500);
      if (e && window.jjScore) window.jjScore.award('chick-village', { x: e.clientX, y: e.clientY });   // the visitor's prod earns it, not Trogdor's automatic startle   // → the Battle Chicken in the store
      return;
    }
    if (name === 'portal') {                                   // the secret: only the Special cursor opens it (five stars + the big well-done)
      var pr = layerRecs[key]; if (!pr || pr.el.classList.contains('lit')) return;
      var special = document.documentElement.getAttribute('data-jj-cursor') === 'mixed';
      if (!special) { pr.el.classList.remove('nope'); void pr.el.offsetWidth; pr.el.classList.add('nope'); oneShot('bone-jiggle', .15); return; }   // a purple shiver: something is here, but not for this cursor
      pr.el.classList.add('lit');                             // NOT taken[]: a taken key is filtered out of the next comp — that pulled the whole portal at the vanish (s81). It stays, blazing
      if (pr.aura) sparkleBurst(pr.aura, 14); oneShot('chest-sparkle', .3);
      if (window.jjScore) window.jjScore.award('portal', { x: e ? e.clientX : null, y: e ? e.clientY : null });
      return;
    }
    if (name === 'ufo') {                                      // the sky alien bolts up and away; Stopped an Alien Invasion (+10)
      var ur = layerRecs[key]; if (!ur || taken[key]) return; taken[key] = true;
      ur.el.classList.add('gone'); delete layerRecs[key];
      setTimeout(function () { if (ur.el.parentNode) ur.el.remove(); }, 1300);
      if (window.jjScore) window.jjScore.award('invasion', { x: e ? e.clientX : null, y: e ? e.clientY : null });
      return;
    }
    if (name === 'bones') {                                    // whisk the pile away; Bone Collector ticks up (jjScore)
      var br = layerRecs[key]; if (!br || taken[key]) return; taken[key] = true;
      br.el.classList.add('taken'); delete layerRecs[key];
      setTimeout(function () { if (br.el.parentNode) br.el.remove(); }, 800);
      if (window.jjScore) window.jjScore.award('bones', { part: key, x: e ? e.clientX : null, y: e ? e.clientY : null });
      return;
    }
    if (name === 'chest') {
      var rec = layerRecs['chest']; if (!rec) return;
      if (e && window.jjScore) window.jjScore.award('treasure', { x: e.clientX, y: e.clientY });
      oneShot('chest-sparkle', .25);                          // the user's sparkle sound — plays if the file exists, silent otherwise
      var el = rec.el, aura = rec.aura;
      el.src = F('cav-chest-open'); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
      if (aura) { aura.classList.add('lit'); sparkleBurst(aura, 10); }
      clearTimeout(rec.fxT);
      rec.fxT = setTimeout(function () {
        el.src = F('cav-chest-closed'); el.classList.remove('pop');
        if (aura) aura.classList.remove('lit');
      }, 3200);
    }
  }
  /* ---- code-drawn effects on an aura box: nostril smoke, coin glints ---- */
  function startFx(aura, fx){
    var t;
    if (fx.type === 'smoke') {
      t = setInterval(function () {
        if (!aura.isConnected) { clearInterval(t); return; }
        for (var i = 0; i < 3; i++) (function (i) { setTimeout(function () {
          var p = document.createElement('i'); p.className = 'puff';
          p.style.left = (fx.at[0] + (Math.random() - .5) * 2) + '%'; p.style.top = fx.at[1] + '%';
          p.style.animationDuration = (2.3 + Math.random() * .8) + 's';
          aura.appendChild(p); setTimeout(function () { p.remove(); }, 3400);
        }, i * 260); })(i);
      }, 3600);
    } else if (fx.type === 'glint') {
      t = setInterval(function () {
        if (!aura.isConnected) { clearInterval(t); return; }
        var at = fx.at[Math.floor(Math.random() * fx.at.length)];
        var g = document.createElement('i'); g.className = 'glint';
        g.style.left = at[0] + '%'; g.style.top = at[1] + '%';
        aura.appendChild(g); setTimeout(function () { g.remove(); }, 1000);
      }, 1700 + Math.random() * 600);
    }
    animTimers.push(t);
  }
  function fadeRemove(el){ if (cutNow) { if (el._howl) { try { el._howl.unload(); } catch (e0) {} el._howl = null; } if (el.parentNode) el.remove(); return; }
    if (el.tagName === 'VIDEO') { if (el._howl) { var hw = el._howl; el._howl = null; try { hw.fade(hw.volume(), 0, 450); } catch (e0) {} setTimeout(function () { try { hw.unload(); } catch (e2) {} }, 600); } setTimeout(function () { try { el.pause(); } catch (e) {} }, 620); }   // pause AFTER the fade — the pause handler would cut the howl dead
    el.style.transition = 'opacity .5s ease'; el.style.opacity = '0';
    setTimeout(function () { if (el.parentNode) el.remove(); }, 560); }
  function keyOf(L, idx){ return L.key || (L.anim ? 'anim:' + L.anim[0] : L.src) || ('i' + idx); }
  function applyScale(el, L, prevSc){                        // a layer that scales between shots (the flame)
    if (L.sc == null) return;
    el.style.transformOrigin = L.so || '50% 50%';
    el.style.scale = prevSc === '' ? String(L.sc) : prevSc;      // start from where it was (cssText just wiped it)
    void el.offsetWidth;
    el.style.transition = 'opacity .55s ease, scale ' + (L.scDur || 4500) + 'ms ease-in-out';
    el.style.scale = String(L.sc);
  }
  function trackClip(el, tr){                                // --p (0→1) follows the clip's currentTime up to tr.end: travel and gallop are one clock; --c cancels the clip's own drift (tr.back)
    if (el._tracking) return; el._tracking = true;
    /* s108: the scene's back-up (--sl) follows the frame actually on screen (requestVideoFrameCallback's mediaTime), not an extrapolated clock —
       the clip's own drift moves in 24fps steps, so a board gliding at 60fps against it made the horse jolt as the forest panned */
    if (el.requestVideoFrameCallback && !el._rvfc) { el._rvfc = true; (function onF(){ el.requestVideoFrameCallback(function (n, meta) { el._pt = meta.mediaTime; if (el.isConnected && el._tracking) onF(); else el._rvfc = false; }); })(); }
    (function tick(){ if (!el.isConnected || el._trackOff) { el._tracking = false; return; }
      var ct = el.currentTime || 0, nw = performance.now(); if (ct !== el._mt || el.paused) { el._mt = ct; el._wt = nw; }   /* s105: re-based while paused, so a resume carries on from the frozen frame (the extrapolation used to leap by the whole pause, then snap back) */   /* currentTime only ticks per video frame: extrapolate between frames so the ride glides instead of stepping (the horse jitter) */
      var t = (el.paused || el.ended) ? ct : Math.min((el.duration || 99), el._mt + (nw - el._wt) / 1000 * (el.playbackRate || 1)), x = Math.min(1, t / tr.end), p = 1 - Math.pow(1 - x, 1.35), c = 0, B = tr.back;   // a touch of slow-down into the halt, as the stride shortens
      if (B) { var tb = el._pt != null && !el.paused ? el._pt : t;   // the presented frame's time (see above)
        if (tb >= B[B.length - 1][0]) c = B[B.length - 1][1]; else for (var i = 1; i < B.length; i++) if (tb < B[i][0]) { if (tb > B[i - 1][0]) { var h = B[i][0] - B[i - 1][0], u = (tb - B[i - 1][0]) / h, y0 = B[i - 1][1], y1 = B[i][1];   // s108: a smooth (monotone Hermite) curve through the measured drift instead of straight segments (their corners were small jolts)
          var sl = function (k) { if (k <= 0 || k >= B.length - 1) return 0; var a = (B[k][1] - B[k - 1][1]) / (B[k][0] - B[k - 1][0]), b = (B[k + 1][1] - B[k][1]) / (B[k + 1][0] - B[k][0]); return a * b <= 0 ? 0 : 2 * a * b / (a + b); };
          var m0 = sl(i - 1) * h, m1 = sl(i) * h, u2 = u * u, u3 = u2 * u; c = (2 * u3 - 3 * u2 + 1) * y0 + (u3 - 2 * u2 + u) * m0 + (-2 * u3 + 3 * u2) * y1 + (u3 - u2) * m1; } break; } }
      el.style.setProperty('--p', p.toFixed(4)); var rt = document.getElementById('jjst'); if (rt && B) rt.style.setProperty('--sl', (-c / 556 * tr.w).toFixed(3) + 'cqw');   // the scene (board, mushrooms, spirits) backs up with the horse: he never slides over it
      if (el.ended || (B ? (t >= B[B.length - 1][0] && c === B[B.length - 1][1]) : x >= 1)) { el._tracking = false; return; } requestAnimationFrame(tick); })();
  }
  /* 'to take in the woodland aura': the camera pushes in on Joe, the clip's Joe gives way to the aura pose standing exactly on
     him (the clip is cropped just past the horse's nose), and the forest's motes stream into him. Undone by the next shot. */
  function energyInto(el){ runFx('__energyBody', el); }
  var auraEl = null;
  /* s105: the cut to the close aura pose happens under a soft dip to black and back (Joe: it 'still kinda jumps' — an instant 1.75x cut with a
     change of pose); the way out (forest3) dips too, so the zoom-out, the pose swap and the walk-up's arrival all happen unseen */
  function auraIn(){ var rr = layerRecs.ride2; if (auraEl || !rr || !layersWrap) return;
    var f = document.getElementById('jjst-fade'); if (ending || blackout) { auraCut(); return; }
    var up = function () { if (ending || blackout) return; requestAnimationFrame(function () { requestAnimationFrame(function () { setTimeout(function () { if (ending || blackout) return; f.style.transition = 'opacity 520ms ease-out'; f.style.opacity = '0'; }, 60); }); }); };   // s110: the cut is painted under the black before it lifts (at 800px the lift could start before the new shot was drawn: the close-up popped in half-lit)
    f.style.transition = 'opacity 300ms ease-in'; void f.offsetWidth; f.style.opacity = '1';
    sched(function () { if (layerRecs.ride2 === rr && !auraEl && curComp === 'forest2') auraCut(); up(); }, 400); }   // (s110: 100ms of full black before the cut, not 30)
  function auraCut(){ var rr = layerRecs.ride2; if (auraEl || !rr || !layersWrap) return;
    var a = auraEl = document.createElement('img'); a.className = 'jjst-layer idle'; a.alt = ''; a.src = F('joe-aura');
    a.style.cssText = JOE('aura', JOE_WIDE[0], JOE_WIDE[1], JOE_WIDE[2]) + ';opacity:0;transition:opacity .45s ease'; layersWrap.appendChild(a);
    (function () { var vr = rr.el.getBoundingClientRect(), lw = layersWrap.getBoundingClientRect(); if (!vr.width) return;   // on the clip's own Joe (measured off its last frame: centre 65.1% across, 22.9% to 88.5% down), so nothing shrinks or hops at the swap
      var hh = vr.height * 0.62, ww = hh * 438 / 720, cx = vr.left + vr.width * 0.7033 - lw.left, bot = lw.bottom - (vr.top + vr.height * 0.885);
      a.style.left = (cx - ww / 2).toFixed(1) + 'px'; a.style.width = ww.toFixed(1) + 'px'; a.style.bottom = bot.toFixed(1) + 'px'; })();
    a.style.transition = 'none'; a.style.opacity = '1'; rr.el.style.transition = 'none'; rr.el.style.opacity = '0';   // the cut: dismount off, aura on, same frame
    rr.el._trackOff = true;   // s108: under the black the scene finishes backing up (it starts ~.5s sooner now), so nothing slides in the close-up
    var st = document.getElementById('jjst'), sr = st.getBoundingClientRect(), r = a.getBoundingClientRect(), ox = ((r.left + r.width / 2 - sr.left) / sr.width * 100).toFixed(1) + '%', oy = ((r.top + r.height * .45 - sr.top) / sr.height * 100).toFixed(1) + '%';
    [bgWrap, layersWrap].forEach(function (w) { w.style.transformOrigin = ox + ' ' + oy; w.style.transition = 'none'; w.style.transform = 'scale(1.75)'; });   // already in close
    fxZoom((parseFloat(ox) / 100 * sr.width).toFixed(1) + 'px ' + (parseFloat(oy) / 100 * sr.height).toFixed(1) + 'px', 1.75);   // s106: the board's own mist comes in close with it
    sched(function () { if (auraEl === a) energyInto(a); }, 600);
  }
  function fxZoom(o, z){ if (!cam || !cam.fx) return; cam.fx.forEach(function (x) { if (x.X.grade || x.X.d >= 1 && !x.X.board) return; x.w.style.transformOrigin = o || ''; x.w.style.scale = z ? String(z) : '1'; }); }   // (the lens-level motes and foliage stay put)
  function auraOut(now){ if (!auraEl) return; fxZoom(null); var a = auraEl; auraEl = null; if (now) a.remove(); else { a.style.transition = 'opacity .45s ease'; a.style.opacity = '0'; setTimeout(function () { a.remove(); }, 500); }   // now (s105): under the dip's black, no fade and no zoom-out   // s104: its cut in left transition:none, so it used to vanish in one frame
    var rr = layerRecs.ride2; if (rr) { rr.el.style.clipPath = ''; rr.el.style.opacity = ''; }
    [bgWrap, layersWrap].forEach(function (w) { w.style.transition = now ? 'none' : 'transform 1.4s cubic-bezier(.4,0,.2,1)'; w.style.transform = ''; });
    var st = document.getElementById('jjst'); if (st) st.classList.remove('charged'); }
  /* the force: Joe shudders and is dragged toward the portal in steps — never one glide. --fs lives on #jjst so it survives the shot change */
  var forceT = null, forceN = 0, curJoeAt = null;
  function startForce(from){ var st = document.getElementById('jjst'); if (forceT !== null) return; forceN = Math.max(forceN, from || 0); st.style.setProperty('--fs', (forceN * 1.6).toFixed(1) + 'cqw'); st.classList.add('forced', 'charged');
    (function step(){ forceT = sched(function () { forceT = null; if (forceN >= 10 || !layerRecs.joe) return; forceN++; st.style.setProperty('--fs', (forceN * 1.6).toFixed(1) + 'cqw'); step(); }, forceN ? 1000 : 300); })(); }
  function stopForce(reset){ unsched(forceT); forceT = null; var st = document.getElementById('jjst'); if (!st) return; st.classList.remove('forced');
    if (reset) { forceN = 0; st.style.removeProperty('--fs'); st.classList.remove('charged'); } }
  function applyMove(el, L){                                 // slow secondary move within a shot (e.g. Joe rides into the distance)
    [L.to, L.to2].forEach(function (t) { if (!t) return;       // to2: a second leg (the dismount clip drifts the horse back in its own frame; the layer walks it forward to cancel that)
    animTimers.push(sched(function () {
      el.classList.remove('cut');                              // a move after a cut still glides (the orb's flight)
      void el.offsetWidth;                                     // commit the start position first, or the glide is skipped and he is simply "already there" (off the far edge)
      var e = t.ease || 'ease-in-out', d = t.dur || 4000;
      el.style.transition = ['left', 'right', 'top', 'bottom', 'width'].map(function (p) { return p + ' ' + d + 'ms ' + e; }).join(',');
      t.css.split(';').forEach(function (decl) { var c = decl.indexOf(':'); if (c > 0) el.style.setProperty(decl.slice(0, c).trim(), decl.slice(c + 1).trim()); });
    }, Math.max(80, t.delay || 0))); });
  }
  function mountLayer(el, L){                                // behind:true → under the scene board (over the sky): shows only through holes like the tavern window
    if (L.behind) bgWrap.insertBefore(el, bgWrap.querySelector('.jjst-bg')); else layersWrap.appendChild(el);
  }
  var swapAt = 0;                                            // set per comp: costume changes happen this long after the comp lands (under the poof)
  var boardIn = false, jumping = false, fxHoldMs = 0;                     // jumping: runScene is running for Prev / Next                                       // s104: set while a comp with a new board (not a cut) builds its layers
  function fadeWith(el){                                     // s104: a fresh clip used to snap to full the frame it was made — over the OLD board (the village kids stood in the cave, the ride over the tavern) — now it dissolves in with its board
    if (!boardIn) return; var tr = 'opacity ' + T.bgFade + 'ms ease'; el.style.transition = tr;
    setTimeout(function () { if (el.style.transition === tr) el.style.transition = ''; }, T.bgFade + 120); }
  function reveal(el, L){ setTimeout(function () { if (!el._puffing) el.style.opacity = '1'; }, (swapAt && !L.now) ? swapAt : 16); }   // (s111: a figure arriving in a puff shows itself)
  function buildLayers(layers){
    clearAnims(); layers = (layers || []).filter(function (L) { return !taken[L.key]; });
    var next = {}; layers.forEach(function (L, idx) { next[keyOf(L, idx)] = true; });
    Object.keys(layerRecs).forEach(function (k) { if (!next[k]) { var gone = layerRecs[k]; delete layerRecs[k];
      var drop = function () { fadeRemove(gone.el); if (gone.aura) fadeRemove(gone.aura); };
      if (swapAt) setTimeout(drop, swapAt); else drop(); } });                 // swapAt: the old art stays until the smoke covers it
    layers.forEach(function (L, idx) {
      var k = keyOf(L, idx), first = F(L.anim ? L.anim[0] : L.src), rec = layerRecs[k], el; if (L.joe) curJoeAt = L.joe;
      var prevSc = (rec && rec.el && rec.el.style) ? rec.el.style.scale : '';
      var startSc = rec ? (prevSc || '1') : prevSc;            // a layer that was already up but never scaled starts from 1, not from the target
      if (rec && ((rec.el.tagName === 'VIDEO') !== !!L.vid)) {   // kind changed under the same key: start fresh
        fadeRemove(rec.el); if (rec.aura) fadeRemove(rec.aura); delete layerRecs[k]; rec = null;
      }
      if (L.vid) {                                           // ---- a transparent looping video layer ----
        first = L.vid;
        if (rec && rec.src === first) { el = rec.el; var pv = el.style.getPropertyValue('--p'), cv = ''; el._trackOff = !L.track; el.style.cssText = L.css + (el._lateHide ? ';opacity:0' : ''); if (L.track) { if (pv) el.style.setProperty('--p', pv); if (cv) el.style.setProperty('--c', cv); trackClip(el, L.track); } }
        else {
          if (rec) { fadeRemove(rec.el); if (rec.aura) fadeRemove(rec.aura); }
          el = document.createElement('video');
          el.className = 'jjst-layer' + (L.cls ? ' ' + L.cls : '') + (L.hero ? ' hero' : '') + (L.pop ? ' poof' : '');
          el.muted = true; el.loop = !L.hold; el.playsInline = true; el.autoplay = !L.idle && !L.late; el.preload = 'auto';   // hold:true → one-shot, freezes on its last frame; idle:true → waits on its poster until tapped
          el.setAttribute('muted', ''); el.setAttribute('playsinline', ''); if (L.start) el.addEventListener('loadedmetadata', function () { try { if (el.currentTime < L.start) el.currentTime = L.start; } catch (x) {} }, { once: true });
          el.poster = SB(L.vid) + '-poster.webp' + AV;
          if (L.cls && L.cls.indexOf('sky') >= 0) el.addEventListener('playing', function () { el.removeAttribute('poster'); }, { once: true });   // the looping alien: no poster flash at the wrap
          el.innerHTML = jjClipSrc(SB(L.vid), AV);   /* one source: Safari the HEVC alpha, everyone else the VP9 alpha */
          el.style.cssText = L.css + ';opacity:0'; mountLayer(el, L); fadeWith(el);
          if (L.late) {                                        // late: the shot breathes first (the village before Trogdor). lateShow = its first frame waits in view; otherwise it arrives with its cue
            if (L.lateShow) reveal(el, L); else el._lateHide = true;
            el._lateWait = true;                                 /* s139: waiting for its cue: nothing else may start it */
            (function (el) { sched(function () { if (!el.isConnected) return; el._lateHide = false; el._lateWait = false; el.style.opacity = '1';
              if (L.arrive) { el.classList.add(L.arrive); sched(function () { if (!el.isConnected) return; var pl = el.play(); if (pl && pl.catch) pl.catch(function () {}); }, 1100); return; }   // he flies in first, then the clip (the huff, the fire) starts once he has landed
              var pl = el.play(); if (pl && pl.catch) pl.catch(function () {}); }, L.late); })(el);
          }
          else { reveal(el, L);
          if (!L.idle && !storyPaused) { var pr = el.play(); if (pr && pr.catch) pr.catch(function () {}); }   // blocked → the poster stands in
          else if (!L.idle) pausedVideos.push(el); }                                                         // born under a pause: it starts with the resume
          rec = layerRecs[k] = { el: el, src: first };
          rec.aura = makeAura(L, el);
          if (L.snd) attachSound(el, L.snd);
          if (L.track) trackClip(el, L.track);
          if (L.puffIn) puffArrive(el, L);
          if (L.run) el.addEventListener('playing', function onPlay(){ el.classList.add(L.run); el.removeEventListener('playing', onPlay); });
        }
        applyScale(el, L, startSc); applyMove(el, L); wireTap(el, L, k); wireThrough(el, L); wireWarm(el, L); wireSeg(el, L); wireSoftLoop(el, L); wireLoopBack(el, L);
        return;                                                // the img branches below don't apply
      }
      if (rec && rec.src !== first) {                        // ART CHANGE = a pose cut: ghost of the OLD art at the
        el = rec.el;                                         // OLD position fades out while the NEW art SNAPS into
        var ghost = el.cloneNode(false);                     // place underneath. No position morph — sliding a
        ghost.src = el.currentSrc || el.src;                 // differently-padded canvas around reads as a weird jump.
        ghost.style.cssText = el.style.cssText + ';opacity:1;transition:opacity .55s ease;animation:none;';
        el.className = 'jjst-layer' + (L.cls ? ' ' + L.cls : '');
        el.src = first; el.style.cssText = L.css; rec.src = first;
        el.parentNode.insertBefore(ghost, el.nextSibling);
        requestAnimationFrame(function () { ghost.style.opacity = '0'; });
        setTimeout(function () { if (ghost.parentNode) ghost.remove(); }, 620);
        void el.offsetWidth;
        el.className = 'jjst-layer morph' + (L.cls ? ' ' + L.cls : '');
      } else if (rec) {                                      // same art: smooth position/size morph (walks, the shrink)
        el = rec.el;
        el.className = 'jjst-layer morph' + (L.cls ? ' ' + L.cls : '');
        el.style.cssText = L.css;
      } else if (L.cls && L.cls.indexOf('enter') >= 0) {     // fresh, slide-in
        el = document.createElement('img'); el.alt = ''; el.className = 'jjst-layer ' + L.cls;
        el.style.cssText = L.css; el.src = first; mountLayer(el, L);
        requestAnimationFrame(function () { el.classList.add('in'); });
        rec = layerRecs[k] = { el: el, src: first };
      } else {                                               // fresh, fade-in
        el = document.createElement(L.html ? 'div' : 'img'); el.alt = '';   /* st2-3 · html: a layer built of markup (a code-drawn sky, an effect that rides the board) instead of an image */
        el.className = 'jjst-layer morph' + (L.cls ? ' ' + L.cls : '');
        el.style.cssText = L.css + ';opacity:0'; if (L.html) el.innerHTML = L.html; else el.src = first; mountLayer(el, L); if (L.html) pfxAdopt(el);   /* s130: a land effect's embers / snow / foam / drops / ripples are drawn on one canvas */
        reveal(el, L);
        rec = layerRecs[k] = { el: el, src: first };
        if (L.aura || L.hero) rec.aura = makeAura(L, el);
      }
      if (cutNow) el.classList.add('cut');                   // a film cut: the figure is simply there, in its new place
      applyScale(el, L, startSc);
      if (L.cls && /\b(idle|scared)\b/.test(L.cls)) {        // each character on its own beat + tempo
        var trem = /\bscared\b/.test(L.cls);
        el.style.animationDelay = '-' + ((idx * 0.83) % 2.5).toFixed(2) + 's';
        el.style.animationDuration = trem ? (0.42 + (idx % 3) * 0.09).toFixed(2) + 's' : (2.2 + (idx % 3) * 0.4).toFixed(1) + 's';
      }
      wireTap(el, L, k);
      if (L.cls && L.cls.indexOf('joehero') >= 0 && !el._heroWired) {
        el._heroWired = true;
        el.setAttribute('data-cursor', 'hover');
        el.addEventListener('click', function (e) {
          e.stopPropagation();
          el.classList.add('lit');
          clearTimeout(el._litT);
          el._litT = setTimeout(function () { el.classList.remove('lit'); }, 2600);
          /* when the alternate-expression art lands (e.g. tav-joe-2), swap el.src here for the beat */
        });
      }
      if (L.anim) { var i = 0; (function (r, arr, intv) {
        animTimers.push(setInterval(function () { i = (i + 1) % arr.length; r.el.src = F(arr[i]); r.src = F(arr[i]); }, intv || 400));
      })(rec, L.anim, L.int); }
      applyMove(el, L);
    });
  }
  /* s118 · THE SPEECH BUBBLE (shared with Storytime 2, which adds its Next button, its dock and its own placing) + Part One's teaching bubbles.
     The look: the banner's parchment (classic), themed for the other four. The tail joins without a seam: its fill is the colour of the
     panel's own edge frame (--bf: an opaque inset ring of that colour runs round the panel), it covers the panel's border where they meet,
     and only its two outer edges carry the border colour (two clipped triangles). --bc / --bw = the border they share. */
  var BUB_FONT = "'Joes Journey Headline','Joes Journey',sans-serif";
  /* s120 · THE SPEECH BUBBLE and (under ?nartheme=1) THE NARRATION BOX take each theme's NAV design (the Themes / score / Menu pills: jj-score.js), so the nav,
     the bubbles and the narration box read as one set (Joe). Tokens per theme, read off the nav pills' computed styles:
       classic   the click-to-begin glass: black .4 + blur 20, a 1px 50%-white line, white text
       medieval  the stone block (score-block.webp as a border image); its narration box is the painted stone + parchment banner, so its bubble is a small
                 one of those: a stone frame round parchment, brown ink
       retro     the navy pixel pill with its cream line (retro-pill.webp as a border image, pixelated), white text, yellow accent
       alien     navy glass .82 + blur, a cyan line with its glow, white text
       mixed     ('Special') the navy gradient, a 4px dashed grey line and the stone ring, gold text
     pn = the panel · tf = the tail's (and the thought dots') fill · ln = its line [colour, px] · b = how far the tail's root runs up through the panel's frame
     (so its fill covers the frame where they meet: no seam; 0 for the glass panels, whose own line has a gap for the tail instead) · bo = the frame's width outside
     the padding box · flat = the fill used where the blur is switched off (#jjst.jj-noblur: heavy shots and narrow screens) · ac = the accent (the Next link, the
     progress line) · tc / nm = text / name. The tail is a filled root + triangle with only its two outer edges stroked. */
  var BUB_FONT = "'Joes Journey Headline','Joes Journey',sans-serif", NARTHEME = false;
  /* s146 · ?ui=2: the new dialogue UI (test) */
  var UI2 = /[?&]ui=2\b/.test(location.search), UI_WHO = { Narrator: '#6b4a1e', Joe: '#1f4fa0', Villager: '#2f7a3b', Grik: '#2a8a76', Clive: '#6a2c91' };
  var UI_BOOK = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#e9d6a8"/><path d="M10 20c8-3 15-2 22 3v25c-7-5-14-6-22-3z" fill="#fff8e6" stroke="#6b4a1e" stroke-width="2.5" stroke-linejoin="round"/><path d="M54 20c-8-3-15-2-22 3v25c7-5 14-6 22-3z" fill="#fff8e6" stroke="#6b4a1e" stroke-width="2.5" stroke-linejoin="round"/></svg>');
  function uiFace(n){ return n === 'Narrator' || !UI_WHO[n] ? UI_BOOK : F('face-' + n.toLowerCase()); }
  var UI_CSS = '#jjst.ui2 .jjst2-bub:not(.box){--bb:rgba(14,18,30,.9);--be:rgba(255,255,255,.5);font-size:clamp(14px,1.15cqw,20px);width:max-content;max-width:min(44cqw,520px);}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .pn{position:relative;z-index:2;display:grid;grid-template-columns:auto minmax(0,max-content);column-gap:9px;row-gap:1px;align-items:center;padding:7px 14px 7px 7px!important;border-radius:14px!important;border:1px solid var(--be)!important;background:var(--bb)!important;color:#fff!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;box-shadow:0 6px 18px rgba(0,0,0,.35)!important;-webkit-mask:none!important;mask:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .pn::before,#jjst.ui2 .jjst2-bub:not(.box) .pn::after{display:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .who{display:contents!important;}#jjst.ui2 .jjst2-bub:not(.box) .who i{display:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .jjui-bf{grid-column:1;grid-row:1 / span 2;width:2.6em!important;height:2.6em!important;border-radius:50%;border:2px solid var(--wc,#1f4fa0)!important;background:#e9d6a8 center/cover no-repeat;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .who b{grid-column:2;grid-row:1;align-self:end;font-weight:normal!important;font-size:.75em!important;opacity:.7;color:#fff!important;letter-spacing:normal!important;text-transform:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .tx,#jjst.ui2 .jjst2-bub:not(.box) .txw{grid-column:2;grid-row:2;align-self:start;color:#fff!important;font-size:1em!important;line-height:1.3!important;text-shadow:none!important;}#jjst.ui2 .jjst2-bub:not(.box) .txw .tx{font-size:1em!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).thought .tx{font-style:italic;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .tail{position:absolute!important;z-index:1!important;display:block!important;width:12px!important;height:12px!important;margin:0!important;left:calc(var(--tx,24px) - 6px)!important;right:auto!important;top:auto!important;bottom:-6px!important;background:var(--bb)!important;border:1px solid var(--be)!important;border-top:0!important;border-left:0!important;border-radius:0 0 3px 0!important;rotate:45deg!important;transform:none!important;translate:none!important;clip-path:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;filter:none!important;opacity:1!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .tail::before,#jjst.ui2 .jjst2-bub:not(.box) .tail::after{display:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).below .tail{top:-6px!important;bottom:auto!important;rotate:225deg!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).off-left .tail{left:auto!important;right:-6px!important;top:calc(var(--ty,50%) - 6px)!important;bottom:auto!important;rotate:-45deg!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).off-right .tail{left:-6px!important;top:calc(var(--ty,50%) - 6px)!important;bottom:auto!important;rotate:135deg!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).dock .tail,#jjst.ui2 .jjst2-bub:not(.box).notail .tail,#jjst.ui2 .jjst2-bub:not(.box).sub .tail{display:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).thought .tail{width:12px!important;height:12px!important;border:1px solid var(--be)!important;border-radius:50%!important;rotate:none!important;left:16px!important;top:auto!important;bottom:-12px!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).thought .tail::after{display:block!important;content:""!important;position:absolute!important;left:-7px!important;right:auto!important;top:auto!important;bottom:-10px!important;width:7px!important;height:7px!important;border-radius:50%!important;background:var(--bb)!important;border:1px solid var(--be)!important;clip-path:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;}'+
    '#jjst.ui2 .jjst2-bub:not(.box).thought.below .tail{top:-12px!important;bottom:auto!important;}#jjst.ui2 .jjst2-bub:not(.box).thought.below .tail::after{top:-10px!important;bottom:auto!important;}'+
    '#jjst.ui2 #jjst-cap-text{position:static!important;}'+
    '#jjst.ui2 #jjst-cap .jjst-nx.ui,#jjst.ui2 .jjst2-bub .nxl.ui{position:absolute!important;right:16px!important;bottom:10px!important;left:auto!important;top:auto!important;display:flex!important;align-items:center;gap:7px;margin:0;padding:0;border:0;background:none;font:inherit;font-size:calc(.72 * clamp(15px,1.6cqw,27px))!important;line-height:1.2!important;letter-spacing:normal!important;color:color-mix(in srgb,var(--who,#6b4a1e) 65%,#000)!important;animation:none!important;filter:none!important;white-space:nowrap;cursor:pointer;}'+
    '#jjst.ui2 #jjst-cap .jjst-nx.ui .jjst-pg,#jjst.ui2 .jjst2-bub .nxl.ui .pgl{position:static!important;display:block!important;width:72px!important;max-width:none!important;height:3px!important;border-radius:3px;overflow:hidden;opacity:1!important;background:color-mix(in srgb,var(--who,#6b4a1e) 22%,transparent)!important;-webkit-mask:none!important;mask:none!important;}'+
    '#jjst.ui2 #jjst-cap .jjst-nx.ui .jjst-pg b,#jjst.ui2 .jjst2-bub .nxl.ui .pgl b{display:block;height:100%;background:var(--who,#6b4a1e)!important;transform-origin:0 50%;}'+
    '#jjst.ui2 #jjst-cap .jjst-nx.ui .arw,#jjst.ui2 .jjst2-bub .nxl.ui .arw{width:12px;height:8px;fill:currentColor;animation:jjuiBob .9s ease-in-out infinite;}@keyframes jjuiBob{50%{transform:translateY(3px);}}'+
    '#jjst.ui2 .jjst2-bub:not(.box) .nxl.ui{position:static!important;grid-column:2;justify-self:end;margin-top:4px;color:rgba(255,255,255,.8)!important;}#jjst.ui2 .jjst2-bub:not(.box) .nxl.ui .pgl{background:rgba(255,255,255,.2)!important;}#jjst.ui2 .jjst2-bub:not(.box) .nxl.ui .pgl b{background:#fff!important;}'+
    '#jjst.ui2 #jjst-cap{--who:#6b4a1e;--fs:clamp(46px,4.6cqw,76px);background:#f3e2ba;background:color-mix(in srgb,#f3e2ba 84%,var(--who));aspect-ratio:auto;width:min(66cqw,1000px);bottom:8px;box-sizing:border-box;'+
    'padding:clamp(18px,1.7cqw,26px) clamp(76px,6.6cqw,110px) 12px calc(14px + var(--fs) + 12px);border-radius:16px;flex-direction:column;align-items:flex-start;justify-content:flex-start;transition:opacity .8s ease,background .35s ease,box-shadow .35s ease;'+
    'box-shadow:0 0 0 4px var(--who),0 0 0 6px rgba(0,0,0,.55),0 0 30px color-mix(in srgb,var(--who) 60%,transparent),0 8px 28px rgba(0,0,0,.6);}'+
    '#jjst.ui2 #jjst-cap-text{width:100%;height:auto!important;}'+
    '#jjst.ui2 #jjst-cap .jjui-face{position:absolute;left:14px;top:0;translate:0 -50%;width:var(--fs);aspect-ratio:1;z-index:3;border-radius:50%;border:4px solid var(--who);background:#e9d6a8 center/cover no-repeat;box-shadow:0 2px 6px rgba(0,0,0,.25);transition:border-color .35s ease,opacity .5s ease;}'+
    '#jjst.ui2 #jjst-cap .jjui-who{position:absolute;z-index:3;top:0;left:calc(14px + var(--fs) - 4px);translate:0 -50%;padding:4px 14px 5px;border-radius:999px;background:var(--who);color:#fff;font-size:clamp(13px,1.1cqw,19px);line-height:1.2;white-space:nowrap;box-shadow:0 0 0 2px rgba(0,0,0,.35),0 3px 8px rgba(0,0,0,.35);transition:background .35s ease,opacity .5s ease;}'+
    '#jjst.ui2 #jjst-cap .jjui-tap{margin-top:.25em;color:#7a2f9a;font-size:clamp(14px,1.35cqw,23px);opacity:0;transition:opacity .4s ease;}#jjst.ui2 #jjst-cap .jjui-tap.on{opacity:1;}'+
    '#jjst.ui2 #jjst-cap.cta .jjui-face,#jjst.ui2 #jjst-cap.cta .jjui-who,#jjst.ui2 #jjst-cap.cta .jjui-tap{opacity:0;}#jjst.ui2 #jjst-cap.cta{align-items:center;justify-content:center;width:min(44cqw,600px);min-height:0!important;height:clamp(64px,6cqw,108px);padding:0;}#jjst.ui2.cta-small .jjst-ctabox{width:min(44cqw,600px);}'+
    '#jjst.ui2 #jjst-cap .jjst-capsnow{left:-1%;width:102%;top:-7px;height:auto;object-fit:contain;}'+
    '#jjst.ui2 #jjst-cap .jjst-capdeco{bottom:calc(100% - 6px);height:clamp(40px,4.4cqw,78px);right:6%;}#jjst.ui2 #jjst-cap .jjst-capcrystal{left:auto;right:30%;bottom:calc(100% - 6px);height:clamp(34px,3.8cqw,66px);}'+
    '#jjst.ui2 .jjst2-bub .who .jjui-bf{width:2.2em;height:2.2em;flex:none;align-self:center;border-radius:50%;border:2px solid var(--wc,#fff);background:#e9d6a8 center/cover no-repeat;}#jjst.ui2 .jjst2-bub .who{align-items:center;}'+
    '#jjst-ctl .jb .mo{display:none;}#jjst-ctl.muted .jb .mo{display:block;}#jjst-ctl.muted .jb .mn{display:none;}'+
    '@media (max-height:430px) and (orientation:landscape){#jjst.ui2 #jjst-cap{width:min(66cqw,600px);--fs:38px;padding:14px 64px 8px calc(10px + var(--fs) + 8px);bottom:8px;}#jjst.ui2 #jjst-cap .jjui-face{border-width:2px;}#jjst.ui2 #jjst-cap .jjui-tap{margin-top:3px;font-size:13px;}}';
   /* s121 (Joe): the narration banner stays the painted one in every theme; ?nartheme=1 (the themed boxes preview) is retired (the flag is dead, the bubbles stay themed) */
  var JSWIRL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAQAAACqRKI5AAACeUlEQVR42qWW4XHjIBCFv/jUQVqAGtKCqCE1KDVcCzn3YlyLoQa3wP1gWRZJ1tgJGc/YRPvYffveirfCL5YDIE+/AHAEIP4MxOHw+nkxEwercACPm56uvCZvwxOQnynHpo6GQyITSWQyTAenBwl0JrhBnIlArj+nh6eHVXASBnomuqbdxo2nJ7J8PIvse677IBUg6HmVuAaRgUzAS4mu5zJm8iUZNN6ThNqiwlDWDkjCGd7HcIAsRfE4k0yU1LfhI73gCVIiQHntz5XvUteluLZ7etE3taDWBlmnl+2X9Jv/OUhjwvdcpgPLtW95RfOmzdNDw7XfWZqeD9q84n4pl3Ir63Ur32XWbszlIvvfde/P357FzCeffPC+Ke9ddu/cJb8PAO5VVZOB+NIykiSOmSKVh0geCvJcO8jMlzyWRLcYbVbwOl/Og24rLysd3srSlagcLMpT1alTVi7FVcU6Fs3ibPrQ1pVINN2zknO4JjYvAyAqhGNmVr1kU6Df/p6MtLKBWAhk/mlW6UjEJ5wQ1udmnW/+eSecTDFN3oEFL116EqRbOhnho+PpsYsNiN9Y2wuYV3in5WWR4PAenEjkvQmOJyhPYRCiPVDegFmtHeSRaBSaNasmgVEtNaKgeryJK7se1052qu+bnbMMQU30sz7W9i9qB2cOXaoxJhGZE14WIHIlE5XMOpSaq4O8Sntx4uKobDeYPAzFbLrU+xTX753Z8NDmmFtNPevmW5n7/yZ1ah88Hk+QApKWYS8bcVTzZAzfm1mBkinFmbtCNaYBeRvusfPmbrKWfF5nsQXZv+Ts3NKOQex9rXknm9vSrq/fytG9ER0SHI2F/5xQDXm2CIOOAAAAAElFTkSuQmCC';   // the J swirl of the banner's pennants, as a mask (the end caps of the code-built narration boxes)
  var THEMES = {
    classic:  { pn: 'background:var(--tf);-webkit-backdrop-filter:var(--blur);backdrop-filter:var(--blur);border-radius:22px;box-shadow:0 10px 30px rgba(0,0,0,.3);', glass: 1, tf: 'rgba(0,0,0,.4)', flat: 'rgba(0,0,0,.64)', ln: ['rgba(255,255,255,.5)', 1], b: 0, bo: 0, tc: '#fff', nm: 'rgba(255,255,255,.72)', ac: '#fff', ul: '#FF00F5' },
    medieval: { pn: 'border:12px solid transparent;border-image:url(' + GB + 'score-block.webp) 70 / 12px / 0 round;background:radial-gradient(120% 140% at 30% 20%,#fdf3d6,#efd9a4) padding-box;border-radius:0;box-shadow:0 10px 26px rgba(0,0,0,.35);', tf: '#8c8c8c', ln: ['#1c1c1c', 2], b: 12, bo: 12, tc: '#3a2a12', nm: '#7a5524', ac: '#8a5a22', ul: '#b9891f', painted: 1,
      stone: (function () { var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 34">' +   /* the frame's bottom band at 12px: a light strip (2–5.5), the dark bevel (5.5–10.5), the black outline (10.5–13.5); the tail carries each of them on round its V */
        '<path d="M2 10H38L20 30.5Z" fill="#616063"/><path d="M.5 12L20 32.2L39.5 12" fill="none" stroke="#1b1b1b" stroke-width="3" stroke-linejoin="round"/>' +
        '<path d="M9.8 2V11.4L20 21.9L30.2 11.4V2" fill="none" stroke="#959595" stroke-width="2.6" stroke-linejoin="round"/><path d="M11 0H29V10.9L20 20.2L11 10.9Z" fill="#f3e0b3"/></svg>'; return 'url("data:image/svg+xml;utf8,' + encodeURIComponent(s) + '")'; })() },   /* s121 (Joe): the tail is a notch of the stone frame: the frame's own stone and dark edge run down round it, and the parchment runs through the frame into it (no seam: it covers the frame's bottom edge where it joins) */
    retro:    { pn: 'border:12px solid transparent;border-radius:10px;z-index:0;box-shadow:5px 5px 0 rgba(255,0,245,.55);', frame: 'inset:-12px;border:12px solid transparent;border-image:url(' + GB + 'retro-pill.webp) 16 fill / 12px / 0 round;image-rendering:pixelated;border-radius:0;-webkit-clip-path:inset(0 round 10px);clip-path:inset(0 round 10px);z-index:-1;',   /* s121 (Joe: the navy box had square corners round a rounded white line): the frame is drawn on ::before and clipped to the panel's own slightly rounded box, so the navy, the white line and the pink offset shadow share one radius */ tf: '#00194a', ln: ['#eeeadc', 2], b: 11, bo: 12, tc: '#fff', nm: '#eeeadc', ac: '#FFD400', ul: '#FF00F5' },
    alien:    { pn: 'background:var(--tf);-webkit-backdrop-filter:var(--blur);backdrop-filter:var(--blur);border-radius:22px;box-shadow:0 0 14px rgba(79,227,255,.3),0 10px 30px rgba(0,0,0,.35);', glass: 1, tf: 'rgba(16,22,80,.82)', flat: 'rgba(16,22,80,.93)', ln: ['rgba(120,220,255,.85)', 1], b: 0, bo: 0, tc: '#fff', nm: '#9eeeff', ac: '#7de6ff', ul: '#FF00F5' },
    mixed:    { pn: 'background:linear-gradient(160deg,#0e1a33,#070f1d);border:4px dashed #a8a8a8;border-radius:22px;box-shadow:inset 0 0 0 2px #6d6d6d,0 0 0 2px #6d6d6d,0 0 16px rgba(255,197,49,.14);text-shadow:0 0 10px rgba(255,197,49,.4);', tf: '#0b1528', ln: ['#a8a8a8', 3], b: 6, bo: 6, tc: '#ffe9b0', nm: '#ffc531', ac: '#ffc531', ul: '#FFD400' } };   /* ul (s121): the underline under Next (and the bubble's progress line): pink in Classic / Retro / Alien, gold in Medieval, yellow in Special */
  var BUB_CSS = (function () {
    var sel = function (t, r) { return r.split(',').map(function (x) { return t === 'classic' ? x : 'html[data-jj-theme="' + t + '"] ' + x; }).join(','); };
    var stroke = function (c, w) { return 'url("data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 16" preserveAspectRatio="none"><path d="M0 0L13 15.2L26 0" fill="none" stroke="' + c + '" stroke-width="' + w + '" stroke-linejoin="round"/></svg>') + '")'; };
    var css = '.jjst2-bub{position:absolute;z-index:12;left:0;top:0;width:min(34cqw,470px);pointer-events:auto;cursor:pointer;opacity:0;translate:0 10px;transition:opacity .28s ease,translate .28s ease;font-family:' + BUB_FONT + ';}.jjst2-bub.on{opacity:1;translate:0 0;}' +
      '.jjst2-bub .pn{position:relative;padding:14px 18px 13px;color:var(--tc);}.jjst2-bub .pn::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;display:none;}' +
      '.jjst2-bub .who{display:flex;align-items:baseline;gap:8px;font-size:14px;letter-spacing:.04em;color:var(--nm);margin:0 0 5px;}.jjst2-bub .who i{font-style:normal;font-size:12px;opacity:.75;}' +
      '.jjst2-bub .tx{font-size:clamp(17px,1.45cqw,22px);line-height:1.32;overflow-wrap:break-word;}' +   /* s129: (a word can never run out of its panel) */
      /* the tail: a root that runs up through the panel's frame (--b) + a triangle; the fill on ::before, its two outer edges stroked on ::after */
      '.jjst2-bub:not(.below):not(.off-left):not(.off-right):not(.thought) .pn::before{-webkit-mask:linear-gradient(#000,#000) top/100% calc(100% - 3px) no-repeat,linear-gradient(to right,#000 calc(var(--tx,50%) - var(--tw) / 2 + 1px),transparent 0,transparent calc(var(--tx,50%) + var(--tw) / 2 - 1px),#000 0) bottom/100% 3px no-repeat;mask:linear-gradient(#000,#000) top/100% calc(100% - 3px) no-repeat,linear-gradient(to right,#000 calc(var(--tx,50%) - var(--tw) / 2 + 1px),transparent 0,transparent calc(var(--tx,50%) + var(--tw) / 2 - 1px),#000 0) bottom/100% 3px no-repeat;}'+'.jjst2-bub .tail{position:absolute;left:var(--tx,50%);top:calc(100% - var(--in));width:var(--tw);height:calc(var(--th) + var(--b));margin-left:calc(var(--tw) / -2);pointer-events:none;}' +
      '.jjst2-bub .tail::before{content:"";position:absolute;inset:-70px -90px 0 -90px;background:var(--tf);-webkit-backdrop-filter:var(--blur);backdrop-filter:var(--blur);clip-path:polygon(90px 70px,calc(100% - 90px) 70px,calc(100% - 90px) calc(70px + var(--b)),50% 100%,90px calc(70px + var(--b)));}' +
      '.jjst2-bub .tail::after{content:"";position:absolute;left:0;right:0;top:var(--b);height:var(--th);background:var(--ts) center/100% 100% no-repeat;}' +
      '.jjst2-bub.below .tail{top:auto;bottom:calc(100% - var(--in));rotate:180deg;}' +
      '.jjst2-bub.off-right .tail{left:calc(100% - var(--in) + (var(--th) + var(--b)) / 2 - var(--tw) / 2);top:calc(var(--ty,50%) - (var(--th) + var(--b)) / 2);margin-left:0;rotate:-90deg;}' +
      '.jjst2-bub.off-left .tail{left:calc(var(--in) - (var(--th) + var(--b)) / 2 - var(--tw) / 2);top:calc(var(--ty,50%) - (var(--th) + var(--b)) / 2);margin-left:0;rotate:90deg;}' +
      /* a thought: trailing dots for a tail */
      '.jjst2-bub.thought .tail{width:20px;height:20px;margin-left:-10px;top:calc(100% + var(--bo) + 7px);left:var(--tx,50%);rotate:none;}.jjst2-bub.thought .tail::before{clip-path:none;border-radius:50%;border:var(--dl);inset:0;}' +
      '.jjst2-bub.thought .tail::after{left:11px;right:auto;top:20px;width:9px;height:9px;border-radius:50%;background:var(--tf);border:var(--dl);-webkit-backdrop-filter:var(--blur);backdrop-filter:var(--blur);}' +
      '.jjst2-bub.thought.below .tail{top:auto;bottom:calc(100% + var(--bo) + 7px);rotate:none;}.jjst2-bub.thought.below .tail::after{top:-19px;}' +
      '.jjst2-bub.p1{z-index:6;width:max-content;max-width:min(62cqw,380px);pointer-events:none;cursor:default;}.jjst2-bub.p1 .pn{padding:11px 17px 12px;}.jjst2-bub.p1 .who{margin-bottom:3px;}';   // Part One's teaching bubbles: small, never in the way
    var GAP = '-webkit-mask:linear-gradient(#000 0 0),linear-gradient(#000 0 0) calc(var(--tx,50%) - 12px) 100%/24px 3px no-repeat;-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0),linear-gradient(#000 0 0) calc(var(--tx,50%) - 12px) 100%/24px 3px no-repeat;mask-composite:exclude;';
    Object.keys(THEMES).forEach(function (t) { var K = THEMES[t], V = '--tc:' + K.tc + ';--nm:' + K.nm + ';--ac:' + K.ac + ';--tf:' + K.tf + ';--blur:' + (K.glass ? 'blur(20px)' : 'none') + ';--in:' + (K.glass ? '0px' : '2px') + ';--b:' + (K.glass ? 0 : K.b + 2) + 'px;--bo:' + K.bo + 'px;--ts:' + stroke(K.ln[0], K.ln[1]) + ';--dl:' + K.ln[1] + 'px solid ' + K.ln[0] + ';--ul:' + K.ul + ';--tw:' + (K.stone ? 40 : 26) + 'px;--th:' + (K.stone ? 20 : 16) + 'px;';
      css += sel(t, '.jjst2-bub,#jjst-cap,#jjst-rotate') + '{' + V + '}' + sel(t, '.jjst2-bub .pn,#jjst-rotate .pn') + '{' + K.pn + '}';
      css += sel(t, '#jjst-rotate .pn::before') + '{' + (K.glass ? 'display:block;border:' + K.ln[1] + 'px solid ' + K.ln[0] + ';' : K.frame ? 'display:block;' + K.frame : 'display:none;') + '}';   /* s123: the 'turn your phone' card takes the theme's panel */
      if (K.glass) { css += sel(t, '.jjst2-bub .pn::before') + '{display:block;border:' + K.ln[1] + 'px solid ' + K.ln[0] + ';' + GAP + '}' +   // the glass panel's line, with a gap where the tail joins
          sel(t, '.jjst2-bub.below .pn::before') + '{-webkit-mask-position:0 0,calc(var(--tx,50%) - 12px) 0;mask-position:0 0,calc(var(--tx,50%) - 12px) 0;}' +
          sel(t, '.jjst2-bub.off-right .pn::before') + '{-webkit-mask-size:auto,3px 24px;mask-size:auto,3px 24px;-webkit-mask-position:0 0,100% calc(var(--ty,50%) - 12px);mask-position:0 0,100% calc(var(--ty,50%) - 12px);}' +
          sel(t, '.jjst2-bub.off-left .pn::before') + '{-webkit-mask-size:auto,3px 24px;mask-size:auto,3px 24px;-webkit-mask-position:0 0,0 calc(var(--ty,50%) - 12px);mask-position:0 0,0 calc(var(--ty,50%) - 12px);}' +
          sel(t, '.jjst2-bub.thought .pn::before,.jjst2-bub.dock .pn::before,.jjst2-bub.notail .pn::before,.jjst2-bub.sub .pn::before') + '{-webkit-mask:none;mask:none;}' +
          (t === 'classic' ? '' : 'html[data-jj-theme="' + t + '"] ') + '#jjst.jj-noblur .jjst2-bub,' + (t === 'classic' ? '' : 'html[data-jj-theme="' + t + '"] ') + '#jjst.jj-noblur #jjst-cap{--blur:none;--tf:' + K.flat + ';}'; }   // where the blur costs frames: no blur, a more opaque fill
      else if (K.frame) css += sel(t, '.jjst2-bub .pn::before') + '{display:block;' + K.frame + '}';
      else css += sel(t, '.jjst2-bub .pn::before') + '{display:none;}';
      if (K.glass) { var shm = /box-shadow:([^;]*);/.exec(K.pn);   /* s129 · A3 */
        if (shm) { var TX = 'var(--tx,50%)', TY = 'var(--ty,50%)', HW = 'var(--tw) / 2', TH = 'var(--th)', FAR = '-90px -90px',
            cut = function (holes) { return 'polygon(evenodd,' + FAR + ',calc(100% + 90px) -90px,calc(100% + 90px) calc(100% + 90px),-90px calc(100% + 90px),' + FAR + ',' + holes.map(function (h) { return h.join(',') + ',' + h[0] + ',' + FAR; }).join(',') + ')'; },
            dot = function (dx, yb, dy, r) { var o = [], i2; for (i2 = 0; i2 < 16; i2++) o.push('calc(' + TX + ' + ' + (dx + r * Math.cos(i2 * Math.PI / 8)).toFixed(2) + 'px) calc(' + yb + ' + ' + (dy + r * Math.sin(i2 * Math.PI / 8)).toFixed(2) + 'px)'); return o; },
            rule = function (q, holes) { var c = holes ? cut(holes) : 'none'; return sel(t, q) + '{-webkit-clip-path:' + c + ';clip-path:' + c + ';}'; };
          css += sel(t, '.jjst2-bub .pn') + '{box-shadow:none;}' + sel(t, '.jjst2-bub .pn::after') + '{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;box-shadow:' + shm[1] + ';}' +
            rule('.jjst2-bub .pn::after', [['calc(' + TX + ' - ' + HW + ') 100%', 'calc(' + TX + ' + ' + HW + ') 100%', TX + ' calc(100% + ' + TH + ')']]) +
            rule('.jjst2-bub.below .pn::after', [['calc(' + TX + ' - ' + HW + ') 0px', 'calc(' + TX + ' + ' + HW + ') 0px', TX + ' calc(0px - ' + TH + ')']]) +
            rule('.jjst2-bub.off-right .pn::after', [['100% calc(' + TY + ' - ' + HW + ')', '100% calc(' + TY + ' + ' + HW + ')', 'calc(100% + ' + TH + ') ' + TY]]) +
            rule('.jjst2-bub.off-left .pn::after', [['0px calc(' + TY + ' - ' + HW + ')', '0px calc(' + TY + ' + ' + HW + ')', 'calc(0px - ' + TH + ') ' + TY]]) +
            rule('.jjst2-bub.thought .pn::after', [dot(0, '100%', 17, 9.6), dot(6.5, '100%', 32.5, 5.1)]) + rule('.jjst2-bub.thought.below .pn::after', [dot(0, '0px', -17, 9.6), dot(6.5, '0px', -40.5, 5.1)]) +
            rule('.jjst2-bub.dock .pn::after,.jjst2-bub.notail .pn::after,.jjst2-bub.sub .pn::after', null); } }
      if (K.stone) css += sel(t, '.jjst2-bub:not(.thought) .tail::before') + '{-webkit-clip-path:none;clip-path:none;background:' + K.stone + ' center/100% 100% no-repeat;}' + sel(t, '.jjst2-bub:not(.thought) .tail::after') + '{display:none;}';
      css += sel(t, '.jjst2-bub.thought .pn') + '{' + (/border-image/.test(K.pn + (K.frame || '')) ? '' : 'border-radius:40px;') + 'padding-left:24px;padding-right:24px;}'; });
    /* the narration box (preview: ?nartheme=1): the painted banner stays for the theme whose nav it is (medieval: stone and parchment); the others get a panel
       built from their own tokens, in the painted banner's own box (same size, same text box: nothing else moves), with two end caps carrying the J swirl.
       On a narrow screen, where the line is taller than the banner, the panel is drawn round the text block itself so the words are never outside it. */
    if (NARTHEME) { var N = function (t, r) { return r.split(',').map(function (x) { return (t === 'classic' ? 'html.jj-nartheme:not([data-jj-theme]) ' + x + ',html.jj-nartheme[data-jj-theme="classic"] ' : 'html.jj-nartheme[data-jj-theme="' + t + '"] ') + x; }).join(','); };
      css += '#jjst-cap .jjnt-pn,#jjst-cap .jjnt-c{position:absolute;display:none;pointer-events:none;}#jjst-cap .jjnt-pn{left:10.6%;right:10.6%;top:5%;bottom:5%;}#jjst-cap .jjnt-c{top:50%;left:5%;height:58%;aspect-ratio:1;translate:-50% -50%;}#jjst-cap .jjnt-c.r{left:95%;}' +
        '#jjst-cap .jjnt-c::after{content:"";position:absolute;inset:21%;background:var(--ac);-webkit-mask:url(' + JSWIRL + ') center/contain no-repeat;mask:url(' + JSWIRL + ') center/contain no-repeat;}' +
        'html.jj-nartheme #jjst-cap-text{position:relative;z-index:1;}html.jj-nartheme #jjst-cap-text .jjst-nx{color:var(--ac);}html.jj-nartheme #jjst-cap-text .jjst-nx:hover{color:var(--ac);filter:brightness(1.2);}html.jj-nartheme #jjst-cap-text .jjst-nx:active{color:#FF00F5;}';
      Object.keys(THEMES).forEach(function (t) { var K = THEMES[t]; if (K.painted) return;
        css += N(t, '#jjst-cap') + '{background-image:none;}' + N(t, '#jjst-cap .jjnt-pn,#jjst-cap .jjnt-c') + '{display:block;' + K.pn.replace(/box-shadow:[^;]*;/, '') + '}' + N(t, '#jjst-cap .jjnt-pn,#jjst-cap .jjnt-c') + '{' + (K.glass ? 'border:' + K.ln[1] + 'px solid ' + K.ln[0] + ';' : '') + '}' +
          N(t, '#jjst-cap .jjnt-c') + '{' + (/border-image/.test(K.pn) ? '' : 'border-radius:50%;') + 'text-shadow:none;}' + N(t, '#jjst-cap-text') + '{color:var(--tc);' + (K.tc === '#ffe9b0' ? 'text-shadow:0 0 10px rgba(255,197,49,.35);' : '') + '}' +
          N(t, '#jjst-cap .jjst-capsnow') + '{display:none;}' + N(t, '#jjst-cap.snowy .jjnt-pn::after') + '{content:"";position:absolute;left:1%;right:1%;top:-12%;height:26%;background:radial-gradient(closest-side,#fff,rgba(255,255,255,.9) 55%,rgba(255,255,255,0)) 0 0/8% 100% round;filter:blur(.6px);}' +   // the mountains' snow cap, drawn in code
          N(t, '#jjst-cap .jjst-ctat') + '{color:var(--tc);}' + N(t, '#jjst-cap .jjst-ctains') + '{color:var(--ac);}' +
          '@media (max-width:699px){' + N(t, '#jjst-cap .jjnt-pn') + '{display:none;}' + N(t, '#jjst-cap-text::before') + '{content:"";position:absolute;inset:-11px -7%;z-index:-1;' + K.pn.replace(/box-shadow:[^;]*;/, '') + (K.glass ? 'border:' + K.ln[1] + 'px solid ' + K.ln[0] + ';' : '') + '}}'; }); }
    css += '#jjst-rotate{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;background:radial-gradient(ellipse at 50% 42%,rgba(16,26,50,.95),rgba(4,6,16,.98));font-family:' + BUB_FONT + ';text-align:center;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .35s ease,visibility 0s linear .35s;}#jjst-rotate.on{opacity:1;visibility:visible;pointer-events:auto;transition:opacity .35s ease;}' +
      '#jjst-rotate .pn{position:relative;width:min(84cqw,340px);box-sizing:border-box;padding:26px 22px 20px;color:var(--tc);}#jjst-rotate .pn::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;}' +
      '#jjst-rotate .ph{display:block;width:44px;height:70px;margin:0 auto 16px;color:var(--ac);transform-origin:50% 50%;animation:jjstRotPh 2.8s ease-in-out infinite;}#jjst-rotate .ph svg{display:block;width:100%;height:100%;}@keyframes jjstRotPh{0%,22%{transform:rotate(0);}46%,82%{transform:rotate(-90deg);}100%{transform:rotate(0);}}' +
      '#jjst-rotate p{margin:0;font-size:clamp(19px,5.6cqw,24px);line-height:1.3;}#jjst-rotate .sk{position:relative;z-index:1;margin:14px 0 0;padding:13px 14px;border:0;background:none;-webkit-appearance:none;appearance:none;font:inherit;font-size:15px;letter-spacing:.02em;color:var(--nm);text-decoration:underline;text-underline-offset:3px;cursor:pointer;}#jjst-rotate .sk:active{color:#FF00F5;}' +
      '@media (prefers-reduced-motion:reduce){#jjst-rotate .ph{animation:none;transform:rotate(-90deg);}}' +
      /* s123 · a landscape phone (about 740–930 × 340–430): a smaller banner lower down, smaller bubbles and transport, so faces and feet stay clear */
      '@media (max-height:430px) and (orientation:landscape){#jjst-cap{width:min(60cqw,540px);bottom:8px;}#jjst-cap-text{font-size:13px;line-height:1.2;}#jjst-ctl{gap:6px;}#jjst-ctl .jb{width:36px;height:36px;}#jjst-ctl .jb svg{width:14px;height:14px;}' +
      '.jjst2-bub{width:min(31cqw,262px);}.jjst2-bub .pn{padding:8px 12px 9px;}.jjst2-bub .tx{font-size:13.5px;line-height:1.24;}.jjst2-bub .who{font-size:11px;margin-bottom:2px;}.jjst2-bub .who i{font-size:10px;}.jjst2-bub.p1{max-width:min(46cqw,260px);}.jjst2-bub.p1 .pn{padding:7px 11px 8px;}' +
      '#jjst-hint{top:31%;padding:9px 16px;font-size:13px;}#jjst-paused span{font-size:clamp(40px,7cqw,64px);}#jjst-paused p{font-size:13px;margin-top:1cqh;}#jjst-paused{padding-bottom:16cqh;}}';
    return css; })();
  /* Part One's teaching bubbles: per shot — at (ms into the shot), key (who says it: a layer), pt (where on that layer its head is: x, y as
     fractions of its box), who, text, ms (how long it shows), think (a thought), fix (placed once: the speaker runs off under it) */
  var P1_SAYS = {
    village1: [{ at: 900, key: 'pitch', pt: [.42, .16], who: 'Villager', text: 'Is that...Trogdor!!!', ms: 3900, fix: true }],   // typed as he swoops in (1.4s), up before they run
    tavern:   [{ at: 2150, key: 'joe', pt: [.715, .31], who: 'Joe', text: 'Huzzah!', ms: 3000 }],                // s119: with the sword at the top, on the ta-da
    woodland: [{ at: 750, key: 'v1', pt: [.5, .1], who: 'Villager', text: 'Joe the Righteous!', ms: 4900 }],                    // as the line names him
    forest3:  [{ at: 3300, key: 'joe', pt: [.535, .5], who: 'Joe', text: 'What on earth is that...?', ms: 3800, think: true }] };   // as he walks up to the arch (he stands at 53.5% of the walk-up clip's frame)
  /* s120 · where the glass runs without its blur (a more opaque fill instead; same line and text): narrow screens, any shot the part names (Storytime 2: the 3.1
     pan over the 1440p clip), any Part One shot listed here, and any shot where the page is seen to stutter with a glass panel up (blurWatch: a quarter of the
     frames of a 2s window slower than 40ms; remembered for that shot for the visit). Measured on the build machine (1440, classic): the tavern, the village, the
     cavern, the forest walk-up, 3.1, 1.3, 3.3 and 3.5 all held their frame pace with the blur on, so no Part One shot is listed. */
  var NOBLUR = {}, blurSeen = {}, blurN = 0, blurBad = 0, blurT0 = 0, blurLast = 0;
  function blurWatch(t){ requestAnimationFrame(blurWatch); var jj = document.getElementById('jjst'); if (!jj) return; var d = t - blurLast; blurLast = t;
    if (storyPaused || document.hidden || jj.classList.contains('jj-noblur') || !(jj.querySelector('.jjst2-bub.on') || NARTHEME)) { blurN = blurBad = 0; blurT0 = t; return; }
    var th = document.documentElement.getAttribute('data-jj-theme') || 'classic'; if (!THEMES[th] || !THEMES[th].glass) { blurN = 0; blurT0 = t; return; }
    blurN++; if (d > 40 && d < 400) blurBad++;
    if (t - blurT0 > 2000) { if (blurN > 20 && blurBad / blurN > .25 && curComp) { blurSeen[curComp] = 1; jj.classList.add('jj-noblur'); } blurN = blurBad = 0; blurT0 = t; } }
  requestAnimationFrame(blurWatch);
  var sayT = [], sayEls = [];
  /* s146 · ?ui=2: who the box speaks for (Part Two may name its speakers through api.capWho); its prompt line; its one size: as tall as the longest line (+ the Next chip and a prompt) at this width */
  function capWho(n){ if (!UI2 || !capEl) return; n = n || 'Narrator'; capEl.style.setProperty('--who', UI_WHO[n] || UI_WHO.Narrator); var f = capEl.querySelector('.jjui-face'), w = capEl.querySelector('.jjui-who'); if (f) f.style.backgroundImage = 'url("' + uiFace(n) + '")'; if (w) w.textContent = n; }
  function capTap(s){ if (!UI2 || !capEl) return; var t = capEl.querySelector('.jjui-tap'); if (!t) return; if (s) t.textContent = s; t.classList.toggle('on', !!s); }
  var capLongest = null, capScene;   /* s149 (Joe: 'tighten it up'): one size per SCENE (the longest line of that scene), not the whole tale's longest; Next has its own slot in the box's right padding, so it is no longer measured in */
  var capGroups = null, capGroupsOf = null;   // (Part One's lines grouped by their scene too: the shot name without its number, cavern / village / tavern / hills / forest ...)
  function capSceneOf(i){ if (capGroupsOf !== SCENES) { var last = ''; capGroupsOf = SCENES; capGroups = SCENES.map(function (q) { if (q.st2) return 'st2:' + q.st2.scene; if (q.comp) last = String(q.comp).replace(/\d.*$/, ''); return last; }); } return capGroups[i]; }
  function capFit(){ if (!UI2 || !capEl || !textEl || capEl.classList.contains('cta')) return; var sc = capSceneOf(curScene); if (!capLongest || sc !== capScene) { capScene = sc; capLongest = SCENES.reduce(function (a, q, j) { return q.text && q.text.length > a.length && capSceneOf(j) === sc ? q.text : a; }, ''); }
    var h0 = textEl.innerHTML, sh = textEl.style.height, t = capEl.querySelector('.jjui-tap'), tc = t && t.textContent; capEl.style.minHeight = ''; textEl.style.height = 'auto'; var tapRow = sc === 'forest'; if (t) { t.textContent = tapRow ? 'Press the orb' : ''; if (!tapRow) t.style.display = 'none'; }   // (the box's prompt row is only ever used for the orb, in the forest: no room kept for it elsewhere)
    textEl.textContent = capLongest; var m = capEl.offsetHeight; textEl.innerHTML = h0; textEl.style.height = sh; if (t) { t.textContent = tc; t.style.display = ''; } if (m) capEl.style.minHeight = m + 'px'; capCover(); }
  function capCover(){ var st = document.getElementById('jjst'), pn = (window.JJ_LB && document.getElementById('jjst-pane')) || st; if (!st || !pn || !capEl) return; var pr = pn.getBoundingClientRect(), cr = capEl.getBoundingClientRect(); if (!pr.height || !cr.height) return;
    st.style.setProperty('--jjcap', Math.max(0, Math.round(pr.bottom - cr.top - 6)) + 'px'); }   // (6px: the hooves may just touch the frame)
  function sayClear(now){ sayT.forEach(unsched); sayT = []; sayEls.forEach(function (b) { b._dead = true; b.classList.remove('on'); setTimeout(function () { if (b.parentNode) b.remove(); }, now ? 0 : 320); }); sayEls = []; }
  function sayComp(name){ if (XP || PART2 || !P1_SAYS[name]) return; P1_SAYS[name].forEach(function (q) { sayT.push(sched(function () { sayShow(q); }, q.at)); }); }
  function sayShow(q){ var st = document.getElementById('jjst'), r = layerRecs[q.key]; if (!st || !r || !r.el || !r.el.isConnected) return;
    var b = document.createElement('div'); b.className = 'jjst2-bub p1' + (q.think ? ' thought' : ''); b.setAttribute('aria-hidden', 'true');
    b.innerHTML = '<i class="tail"></i><div class="pn"><div class="who"><b></b><i></i></div><div class="tx"></div></div>';   // s141: the tail beside the panel, not in it (a backdrop blur inside the panel's own blur sees only the panel), and BEFORE it (so its blur, which reaches up behind the panel, sees the scene and not the dark panel)
    b.querySelector('.who b').textContent = q.who; if (UI2) { var bf = document.createElement('span'); bf.className = 'jjui-bf'; bf.style.backgroundImage = 'url("' + uiFace(q.who) + '")'; b.style.setProperty('--wc', UI_WHO[q.who] || '#fff'); b.querySelector('.who').insertBefore(bf, b.querySelector('.who b')); } if (q.think) { if (UI2) b.querySelector('.who b').textContent = q.who + ', thinking'; else b.querySelector('.who i').textContent = 'Thinking'; } st.appendChild(b); sayEls.push(b);
    var tx = b.querySelector('.tx'), i = 0, last = ''; tx.textContent = q.text; tx.style.minHeight = tx.offsetHeight + 'px'; tx.style.minWidth = tx.offsetWidth + 'px'; tx.textContent = '';   // sized on the whole line: it never grows as it types
    var place = function () { if (b._dead || !b.isConnected) return; if (!q.fix) requestAnimationFrame(place); if (!r.el.isConnected) return;
      var sr = st.getBoundingClientRect(), W = sr.width, bw = b.offsetWidth, bh = b.offsetHeight, e = r.el.getBoundingClientRect(), cx = e.left + e.width * q.pt[0] - sr.left, top = e.top + e.height * q.pt[1] - sr.top;
      var x = Math.max(12, Math.min(W - bw - 12, cx - bw / 2)), y = top - bh - (q.think ? 46 : 24), keep = [];
      [document.getElementById('jjst-ctl'), document.getElementById('jjst-hint')].concat(window.innerHeight < 430 ? [document.getElementById('jj-sc-hud'), document.querySelector('.menu-container'), document.querySelector('.nav-logo-link')] : []).concat([].slice.call(st.querySelectorAll('.jjst-layer.prop,.jjst-tapme,#jjst-hints .ar'))).forEach(function (k) {   /* (s123: on a landscape phone the nav too) */   // what it must never sit on: the transport, the hint pill, the props and their hints
        if (!k || k === r.el || !k.offsetWidth) return; var cs = getComputedStyle(k); if (cs.visibility === 'hidden' || +cs.opacity < .05) return; var kr = k.getBoundingClientRect(); keep.push([kr.left - sr.left - 8, kr.top - sr.top - 8, kr.right - sr.left + 8, kr.bottom - sr.top + 8]); });
      var hits = function (x0, y0) { return keep.some(function (k) { return x0 < k[2] && x0 + bw > k[0] && y0 < k[3] && y0 + bh > k[1]; }); };
      if (hits(x, y)) { var ok = [bw * .4, -bw * .4, bw * .8, -bw * .8].map(function (d) { return Math.max(12, Math.min(W - bw - 12, x + d)); }).filter(function (nx) { return !hits(nx, y); })[0];
        if (ok != null) x = ok; else keep.forEach(function (k) { if (x < k[2] && x + bw > k[0] && y < k[3] && y + bh > k[1]) y = k[3] + 4; }); }
      var cap = capEl ? capEl.getBoundingClientRect() : null; if (cap && cap.height) y = Math.min(y, cap.top - sr.top - bh - 10);   // and never over the banner (its NEXT)
      var key = Math.round(x) + '|' + Math.round(y); if (key === last) return; last = key;
      b.style.left = Math.round(x) + 'px'; b.style.top = Math.round(y) + 'px'; b.style.setProperty('--tx', Math.max(22, Math.min(bw - 22, cx - x)).toFixed(0) + 'px'); };
    place(); requestAnimationFrame(function () { if (!b._dead) b.classList.add('on'); });
    tx.innerHTML = '<span></span><span style="visibility:hidden"></span>'; tx.lastChild.textContent = q.text;   /* s122: laid out whole from the first character (see typeText) */
    /* s129 · A2: the box was measured the moment the bubble was made; if its face of type was not in yet (the first bubble of a visit), it is measured again when it is, and placed again */
    try { if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (b._dead || !b.isConnected) return; tx.style.minWidth = ''; tx.style.minHeight = ''; var w2 = tx.offsetWidth, h2 = tx.offsetHeight; tx.style.minWidth = w2 + 'px'; tx.style.minHeight = h2 + 'px'; last = ''; place(); }); } catch (e) {}
    var step = function () { if (b._dead) return; i++; tx.firstChild.textContent = q.text.slice(0, i); tx.lastChild.textContent = q.text.slice(i); if (i < q.text.length) sayT.push(sched(step, 30)); };   // typed on the story's clock: a pause holds it
    sayT.push(sched(step, 160)); sayT.push(sched(function () { b._dead = true; b.classList.remove('on'); setTimeout(function () { if (b.parentNode) b.remove(); }, 320); }, q.ms));
  }
  var panelTimers = [];
  function clearPanels(){ panelTimers.forEach(function (t) { unsched(t); }); panelTimers = []; }
  function runVillageSeq(){                          // village1 is up — advance 2→3→4 at equal intervals
    clearPanels();
    ['village2'].forEach(function (name, i) {                 // shots 3 + 4 retired — two is plenty
      panelTimers.push(sched(function () { setComp(name); }, T.villagePanel * (i + 1)));
    });
  }
  /* a looping bed tied to a shot (the tavern fireplace): fades in on mount, out when the shot changes */
  var compHowl = null, compSrc = null, compVol = 0, storyLive = false;
  function dropHowl(h, ms){ if (!h) return; try { h.fade(h.volume(), 0, ms); } catch (e) {} setTimeout(function () { try { h.unload(); } catch (e2) {} }, ms + 100); }
  function setCompSound(snd){
    var src = snd ? snd.src : null; if (src === compSrc) return; compSrc = src;
    dropHowl(compHowl, 800); compHowl = null;
    if (!snd || !window.Howl) return;
    compVol = (snd.vol == null ? .4 : snd.vol) * SFX;
    var v0 = (!storyLive && snd.pre != null) ? snd.pre * SFX : compVol;      // `pre` = the level while the loader is still up
    var h = compHowl = new Howl({ src: [GB + 'story-' + snd.src + '.mp3' + AV], loop: snd.loop !== false, volume: 0, preload: true });
    window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 }; window.jjAudio.sounds.push(h);
    function go(){ if (compHowl !== h) return; try { if (!h.playing()) { h.play(); h.fade(0, v0, snd.fadeIn == null ? 1500 : snd.fadeIn); } } catch (e) {} }
    h.once('load', go); h.once('unlock', go);
  }
  function oneShot(name, vol){ if (!window.Howl) return; try { var h = new Howl({ src: [GB + 'story-' + name + '.mp3' + AV], volume: (vol == null ? .3 : vol) * SFX, onload: function () { h.play(); } }); window.jjAudio.sounds.push(h); } catch (e) {} }
  function fadeBed(ms){ if (!compHowl) return; try { compHowl.fade(compHowl.volume(), 0, ms); } catch (e) {} }   // ease the bed out ahead of a shot change
  function bedLive(){ storyLive = true; if (compHowl && compHowl.volume() < compVol) { try { compHowl.fade(compHowl.volume(), compVol, 3000); } catch (e) {} } }
  /* a one-shot centred in whatever time the shot has left (the woodland cheer): if the clip is longer than
     the shot it simply starts now and the shot change fades it; if shorter it waits (R - D) / 2 first */
  var cueHowl = null, cueT = null;
  function shotLeft(){ var s = SCENES[curScene], trs = s && s.triggers; if (!trs) return null; var from = -1, to = -1, at = function (tr) { var k = s.text.indexOf(tr.at); return k < 0 ? -1 : k + tr.at.length; };
    trs.forEach(function (tr) { if (tr.comp === curComp) from = at(tr); }); if (from < 0) return null;
    trs.forEach(function (tr) { var k = at(tr); if (tr.comp && tr.comp !== curComp && k > from && (to < 0 || k < to)) to = k; }); if (to < 0) return null;
    return typeDuration(s.text.slice(0, to), s.typeK) - typeDuration(s.text.slice(0, from), s.typeK) + trs.reduce(function (a, tr) { var k = at(tr); return a + (k >= from && k < to ? (tr.pause || 0) : 0); }, 0); }
  function playCue(cue){
    unsched(cueT); dropHowl(cueHowl, 800); cueHowl = null;
    if (!cue || !window.Howl) return;
    var v = (cue.vol == null ? .4 : cue.vol) * SFX, t0 = performance.now(), left = shotLeft(), end0 = left != null ? t0 + left : boxEnd;   // s113: the shot's own time (to the line's next shot change), not the whole line's: the woodland cheer waited for the end of the line, the hills took over first and it never played
    var h = cueHowl = new Howl({ src: [GB + 'story-' + cue.src + '.mp3' + AV], loop: false, volume: 0, preload: true });
    window.jjAudio.sounds.push(h);
    function arm(){ if (cueHowl !== h) return;
      var R = Math.max(0, end0 - performance.now()), D = (h.duration() || 0) * 1000, wait = Math.max(0, (R - D) / 2 - (performance.now() - t0));
      cueT = sched(function () { if (cueHowl !== h) return; try { h.play(); h.fade(0, v, 500); } catch (e) {} }, wait); }
    h.once('load', arm);
  }
  /* ---- s113 · Joe's music + the stand-in sound effects. Music ('music' group, h._jjCat): battle from the cave to the end of the
     tavern, on the story clock so its last hit (42.2s into the file) lands on 'Joe the Righteous'; hills on the send-off; forest from
     forest1 until the orb wakes ('shake and glow'). SFX ('sfx' group): orb shimmer / whoosh / thud one-shots, portal-on, and the vortex
     bed from the portal opening to the loader. One Howl per file, one instance per bed; pause holds them all (the hush above, by id);
     Prev / Next re-seek or stop them; they only ever play inside Howler, so the site's mute and the preview's silence shim apply. */
  var musClk = { t0: 0, at: 0 }, musPauseAt = 0, musLive = false, musLoopT = 0;
  function sndNew(file, cat, loop, sprite){ if (!window.Howl) return null; var o = { src: [GB + 'story-' + file + '.mp3' + AV], loop: !!loop, volume: 1, preload: true }; if (sprite) o.sprite = sprite; var h = new Howl(o); h._jjCat = cat;
    window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 }; window.jjAudio.sounds.push(h); return h; }
  function sndHold(h, id){ if (!storyPaused) return; try { h.pause(id); } catch (e) {} pausedHowls.push({ h: h, ids: [id] }); }   // started while the tale is paused (a step while paused): it waits for the resume
  function sceneStart(i){ var t = 0; for (var k = 0; k < i && k < SCENES.length; k++) { var s = SCENES[k], rd = s.end ? s.end.delay : ((s.read != null ? s.read : Math.max(T.readMin, s.text.length * T.readPerChar)) + (s.linger != null ? s.linger : T.linger)); t += typeDuration(s.text, s.typeK) + pauseMs(s) + rd; } return t / 1000; }
  function wordAt(i, w){ var s = SCENES[i], k = s.text.indexOf(w); if (k < 0) return sceneStart(i); k += w.length;   // the story time a word trigger fires (holds of earlier triggers included)
    var hold = (s.triggers || []).reduce(function (a, tr) { var j = s.text.indexOf(tr.at); return a + (j >= 0 && j + tr.at.length < k ? (tr.pause || 0) : 0); }, 0);
    return sceneStart(i) + (typeDuration(s.text.slice(0, k), s.typeK) + hold) / 1000; }
  function musAnchor(t){ musClk.t0 = t; musClk.at = storyPaused ? musPauseAt : performance.now(); }
  function musT(){ return musClk.t0 + ((storyPaused ? musPauseAt : performance.now()) - musClk.at) / 1000; }
  /* s114 · the music is one loop (every 50ms) that owns every music instance's volume: the track's level (the mountain track's own curve
     on the story clock, or the forest's set level) × its on / off envelope × the duck. The duck: any other sound playing (sfx or voice)
     takes the music down by its own loudness — its file's measured loudness plus its instance volume, -42 dB effective → 40%, -30 dB → 60%
     — in ~150ms and gives it back over ~600ms; the long beds (the snore, the fire, the gallop, the vortex) only take a fixed 15%, so nothing
     pumps. story-music-battle / -hills stay in the folder, unwired. */
  var FAIRY = { cyc: 33.3713, bar: 2.08696, phrase: 8.34783 };                    // s115 · the forest track (Joe's 'fairies in the garden', 115 bpm): the file is two copies of one seamless 16-bar cycle; it loops on the first (sample-exact, checked against the second)
  var MUS = { mountain: { f: 'music-mountain' }, forest: { f: 'music-fairies', sprite: { cyc: [0, FAIRY.cyc * 1000, true] }, lvl: .18 } };   // (story-music-forest, the birds, stays in the folder, unwired)
  var MUS_LVL = { forest: .23, tunnel: .30 };
  MUS.hills = { f: 'music-hills', lvl: .022 }; MUS.hills2 = { f: 'music-hills', lvl: .022 };   /* s129 · B5 */
  var hillsT = null, hillsCur = 'hills';
  function hillsEnd(ms){ unsched(hillsT); hillsT = null; musOff('hills', ms); musOff('hills2', ms); }
  function hillsGo(){ hillsEnd(300); hillsCur = 'hills'; musStart('hills', 0, 1300);
    var tick = function () { hillsT = sched(tick, 400); var m = MUS[hillsCur], h = m.h; if (!h || m.id == null) return; var p = 0, d = h.duration() || 40; try { p = h.seek(m.id); } catch (e) {}
      if (typeof p === 'number' && p >= d - 2.4) { var nx = hillsCur === 'hills' ? 'hills2' : 'hills'; musOff(hillsCur, 2200); hillsCur = nx; musStart(nx, 0, 2200); } };   // (40 s in: the next pass comes up under the end of this one)
    hillsT = sched(tick, 400); }
  function bookMusic(ph){ if (XP) { if (ph === 'start') hillsGo(); else hillsEnd(ph === 'cut' ? 900 : 2000); try { if (XP.bookMusic) XP.bookMusic(ph); } catch (e) {} return; } if (PART2) return; if (ph === 'start') hillsGo(); else hillsEnd(ph === 'cut' ? 600 : 900); }                                      // s116: the fairies a bit louder through the end of the forest (and kept up through the portal), louder still with Joe floating in the vortex
  var MTN_GRID = { bar: 4.21, at: .14 };                                           // the mountain track's bar lines (measured off its onsets): .14 + 4.21k; phrases end on odd bars (46.45, 54.87, 63.29…)
  var LOUD = { 'dragon-snore': -15.8, 'villagers-shouting': -14.6, 'vil-dragon-roar': -12.1, 'vil-curly': -21.6, 'chickens-squawk': -18.9, 'chicken-squawk': -19.4, 'bone-jiggle': -19.8,
    'tav-fire': -23.4, 'tav-joe-tada': -23.1, 'horse-gallop': -21.7, 'villager-cheer': -13.1, 'sfx-orb-shimmer': -18.8, 'sfx-orb-whoosh': -20.3, 'sfx-portal-on': -18.8, 'sfx-portal-on2': -16.3,
    'sfx-vortex-loop': -11.9, 'sfx-orb-thud': -20.6, 'sfx-flash': -23.7, 'sfx-flash-big': -23.0 };   // measured mean dB of each file
  var LOUD_SPAN = { 'villagers-shouting': [.5, 11.4], 'vil-dragon-roar': [2.8, 4.6], 'vil-curly': [0, 4.2], 'chickens-squawk': [.2, 2.1], 'chicken-squawk': [.3, 1.6], 'bone-jiggle': [.1, 2.4],
    'tav-joe-tada': [.6, 3.4], 'villager-cheer': [.3, 4.4], 'sfx-orb-shimmer': [.6, 2.3], 'sfx-orb-whoosh': [.1, 1.2], 'sfx-portal-on': [1.1, 3.2], 'sfx-portal-on2': [1.4, 7.2], 'sfx-orb-thud': [0, .3], 'sfx-flash': [0, .8], 'sfx-flash-big': [0, 1.1] };   // where each is loud (within 15 dB of its peak): the duck follows the sound, not its quiet tail
  var DUCK_BED = { 'dragon-snore': 1, 'tav-fire': 1, 'horse-gallop': 1, 'sfx-vortex-loop': 1 }, DUCK_MIN = { 'tav-joe-tada': .5 };   // (Joe: a dip under his ta-da too, quiet as it is)
  var musFading = [], musDuck = 1, musLast = 0, MTN_K = null;
  function mountainLvl(t){ var K = MTN_K || (MTN_K = [[0, 0], [1.5, .04], [10, .05], [wordAt(1, 'more sinister'), .052], [wordAt(3, 'Luckily one day'), .058], [wordAt(4, 'Joe the Righteous'), .062],
      [wordAt(4, 'Joe the Righteous') + 5, .062], [wordAt(4, 'nighttime fell') + 3, .075], [wordAt(4, 'treacherous mountains...'), .085], [9999, .085]]);   // s116: audible from the first seconds in the cave (was 0 → .02), rising gently through the village and the tavern; the ride as it was
    for (var i = 1; i < K.length; i++) if (t <= K[i][0]) { var a = K[i - 1], b = K[i]; return a[1] + (b[1] - a[1]) * Math.max(0, (t - a[0]) / ((b[0] - a[0]) || 1)); } return K[K.length - 1][1]; }
  function musH(n){ var m = MUS[n]; if (!m.h) { m.h = sndNew(m.f, 'music', false, m.sprite); } return m.h; }
  function fairyWrap(p){ return p < FAIRY.cyc ? Math.max(0, p) : p % FAIRY.cyc; }
  function sndName(h){ return ((h._src && (h._src.join ? h._src[0] : h._src)) + '').split('/').pop().split('?')[0].replace(/^story-/, '').replace(/\.mp3$/, ''); }
  function duckTarget(){ var d = 0;
    try { (window.Howler ? Howler._howls : []).forEach(function (h) { if (h._jjCat === 'music') return; var nm = sndName(h), L = LOUD[nm], voice = h._jjCat === 'voice' || /nar-|narr|speech|voice/.test(nm);
      if (L == null && !voice) return;
      (h._sounds || []).forEach(function (q) { if (q._paused || q._ended) return; var v = h.volume(q._id); if (!(v > .003)) return;
        var sp = LOUD_SPAN[nm]; if (sp) { var at = 0; try { at = h.seek(q._id); } catch (e) {} if (typeof at === 'number' && (at < sp[0] - .15 || at > sp[1])) return; }
        var dep = DUCK_BED[nm] ? .15 : voice ? .45 :   /* (s115/s116: Jim's narration now sits at 45%, so it takes a little less) */ Math.max(.4, Math.min(.6, .4 + .2 * (L + 20 * Math.log(v) / Math.LN10 + 42) / 12));
        if (DUCK_MIN[nm]) dep = Math.max(dep, DUCK_MIN[nm]); if (dep > d) d = dep; }); }); } catch (e) {}
    return 1 - d; }
  function musTick(){ var now = performance.now(), dt = Math.min(200, now - (musLast || now)); musLast = now; if (storyPaused) return;
    var tgt = duckTarget(); musDuck += (tgt - musDuck) * (1 - Math.exp(-dt / (tgt < musDuck ? 50 : 200)));   // attack ~150ms, release ~600ms
    Object.keys(MUS).forEach(function (n) { var m = MUS[n], h = m.h; if (!h || m.id == null) return;
      var step = dt / Math.max(16, m.gms || 1500); m.g = m.g < m.gt ? Math.min(m.gt, m.g + step) : Math.max(m.gt, m.g - step);   // the on-ramp
      var lvl = n === 'mountain' ? mountainLvl(musT()) : m.lvl; if (m.lv == null) m.lv = lvl; m.lv += (lvl - m.lv) * Math.min(1, dt / (m.lvlMs || 700));   // (a set level glides)
      var end = 1; if (m.endT != null) { var rem = m.endT - musT(); if (rem <= 0) { try { h.stop(m.id); } catch (e) {} m.id = null; m.endT = null; return; } end = Math.pow(Math.min(1, rem / m.endFade), 1.5); }   // s115: a planned musical ending
      try { h.volume(Math.max(0, m.lv * m.g * musDuck * end), m.id); } catch (e) {} });   // the tap wait outlasting the track: a crossfade back into the music
    musFading = musFading.filter(function (f) { if (f.v0 == null) { try { f.v0 = f.h.volume(f.id); } catch (e) { f.v0 = 0; } f.t0 = now; } var k = 1 - (now - f.t0) / f.ms;
      if (k <= 0) { try { f.h.stop(f.id); } catch (e) {} return false; } try { f.h.volume(f.v0 * k * k, f.id); } catch (e) {} return true; }); }
  function musStart(n, pos, ms){ var m = MUS[n], h = musH(n); if (!h) return; var want = typeof pos === 'function' ? pos : function () { return pos; }; m.gt = 1; m.gms = ms || 1500;
    if (!musLoopT) musLoopT = setInterval(musTick, 50);
    if (m.id != null) { musTo(n, want(), true); return; }                        // already playing: onto the right spot
    if (m.tok) return; var tok = m.tok = {}; m.endT = null;
    var start = function () { if (m.tok !== tok) return; m.tok = null; var p = want(); if (p >= (h.duration() || 999) - .3) return;
      var id = m.id = m.sprite ? h.play('cyc') : h.play(); m.g = 0; m.lv = null; try { h.seek(Math.max(0, p), id); h.volume(0, id); } catch (e) {} sndHold(h, id);
      h.once('unlock', function () { if (m.id === id) musTo(n, want()); });   // (a play the browser held until the sound was unlocked lands on the story's position)
      if (!m.sprite) h.once('end', function () { if (m.id === id) m.id = null; }, id); };   // (a looping sprite fires 'end' every pass)
    if (h.state() === 'loaded') start(); else h.once('load', start); }
  function musTo(n, p, quiet){ var m = MUS[n], h = m.h; if (!h || m.id == null) return; try { var cur = h.seek(m.id); if (typeof cur === 'number' && Math.abs(cur - p) > (quiet ? .35 : .15) && p >= 0) h.seek(p, m.id); } catch (e) {} }
  function musOff(n, ms){ var m = MUS[n], h = m.h, id = m.id; m.tok = null; m.endT = null; if (!h || id == null) return; m.id = null; musFading.push({ h: h, id: id, ms: ms || 1200 }); if (!musLoopT) musLoopT = setInterval(musTick, 50); }
  function musAllOff(ms){ Object.keys(MUS).forEach(function (n) { musOff(n, ms); }); }
  function forestPos(){ return fairyWrap(musT() - wordAt(5, 'dismount')); }        // s116: on the story clock from the aura beat (file 0), wrapping on the cycle
  function mountainEnd(){ var m = MUS.mountain; if (m.id == null && !m.tok) return; var now = musT(), p = now;   // s116: carried into the forest, it stops at the end of a phrase before the aura
    if (m.id != null) try { var q = m.h.seek(m.id); if (typeof q === 'number') p = q; } catch (e) {}                  // (the file's own position: the phrase is in the file, the aura on the story clock)
    var aura = wordAt(5, 'dismount') - now + p, b = MTN_GRID.at, k = 1;
    while (b <= p + 3) { b = MTN_GRID.at + MTN_GRID.bar * k; k += 2; } if (b > aura + .4 && b - 2 * MTN_GRID.bar >= p + 3) b -= 2 * MTN_GRID.bar;
    m.endT = now + (b - p); m.endFade = Math.max(2, b - p); if (!musLoopT) musLoopT = setInterval(musTick, 50); }
  /* where the music is at the start of line i — the first line, a replay, ?scene=, Prev / Next. The rest of the cues ride the shots (musComp) */
  function musScene(i){ if (PART2 || XP) { musAllOff(600); return; } musLive = true; musAnchor(sceneStart(i));
    if (i <= 5) { musOff('forest', 600); MUS.mountain.endT = null; musStart('mountain', musT, i === 0 ? 100 : 700); if (i === 5) mountainEnd(); return; }   // (the first line: the track's own quick rise is the fade-in; line 6 starts in the forest before the aura)
    musOff('mountain', 700);
    if (i <= 10) { var mf = MUS.forest; mf.lvl = MUS_LVL.forest; mf.lvlMs = 700; mf.lv = null; musStart('forest', forestPos, 1500); return; }
    musOff('forest', 800); }
  function musComp(name){ if (!musLive || PART2 || XP) return;
    if (name === 'hills' || name === 'mountains') { try { musH('forest'); } catch (e) {} }   /* s129 · A4 */
    if (name === 'forest1' && !jumping) { musAnchor(sceneStart(5)); mountainEnd(); }   // s116: the mountain track carries on into the forest, fading slowly to the end of its phrase before the aura
    if (name === 'forest2') { MUS.forest.lvl = MUS_LVL.forest; MUS.forest.lvlMs = 700; if (!jumping) musAnchor(wordAt(5, 'dismount')); musStart('forest', forestPos, 8000); } }   // the fairies come in slowly on the aura   // s115: the fairies come in very slowly from silence (~9s) as the mountain track fades (4s)
  function musBlack(){ if (musLive) musAnchor(wordAt(2, 'Trogdor! Trogdor')); }   // (the clock only)
  function musForestUp(ms){ MUS.forest.lvl = MUS_LVL.tunnel; MUS.forest.lvlMs = ms || 2000; }   // s116: Joe floating through the vortex: the fairies are the feature
  /* s115 · the fairies never cut: at the end they finish on a musical boundary — the end of this 4-bar phrase (at least a bar away), or the end
     of the cycle if that is within ~10s — fading over the last bar or two; leaving early (skip, My Story) ends it at the next bar line */
  function forestEnd(kind){ var m = MUS.forest, h = m.h; if (!h || m.id == null) return; var p = 0; try { p = h.seek(m.id); } catch (e) {} if (typeof p !== 'number') return;
    if (kind === 'quick') { var tq = musT() + 1.2; if (m.endT == null || m.endT > tq) { m.endT = tq; m.endFade = 1.2; } return; }   // s117: My Story is lifting and it isn't done: a quick 1.2s fade
    var b = kind === 'bar' ? Math.ceil((p + .4) / FAIRY.bar) * FAIRY.bar : Math.ceil((p + FAIRY.bar) / FAIRY.phrase) * FAIRY.phrase;
    if (kind !== 'bar' && FAIRY.cyc - p <= 10 && FAIRY.cyc - p >= FAIRY.bar) b = FAIRY.cyc; if (b > FAIRY.cyc - .05) b = FAIRY.cyc;
    var rem = b - p, t = musT() + rem; if (m.endT != null && m.endT <= t) return;   // (an ending already due sooner stands)
    m.endT = t; m.endFade = kind === 'bar' ? rem : Math.min(rem, 2 * FAIRY.bar); if (!musLoopT) musLoopT = setInterval(musTick, 50); }
  var FXH = {};
  function sfxShot(name, vol){ if (!window.Howl) return; var h = FXH[name] || (FXH[name] = sndNew('sfx-' + name, 'sfx')); if (!h) return;
    var id = h.play(); try { h.volume(vol * SFX, id); } catch (e) {} sndHold(h, id); }
  /* s115 · the portal switching on (Joe's pick): a slow build, its big hit 6.60s into the file, a decay to ~9s. The hit lands on the portal's
     big moment — the gem flares and the runes light, 3.75s into the portal clip — so it starts at the orb tap part-way in (the build runs
     under the orb shooting up) and is held to the clip's clock until the hit */
  var PON = { hit: 6.6, open: 3.75, vol: .25 }, ponId = null;
  function portalOn(pos){ if (!window.Howl) return; var h = FXH['portal-on2'] || (FXH['portal-on2'] = sndNew('sfx-portal-on2', 'sfx')); if (!h) return;
    if (ponId != null && h.playing(ponId)) return; var go = function () { ponId = h.play(); try { h.seek(Math.max(0, pos), ponId); h.volume(PON.vol * SFX, ponId); } catch (e) {} sndHold(h, ponId); };
    if (h.state() === 'loaded') go(); else h.once('load', go); }
  function portalSync(t){ var h = FXH['portal-on2']; if (!h || ponId == null || !h.playing(ponId)) return; var want = PON.hit - PON.open + t, cur = 0; try { cur = h.seek(ponId); } catch (e) {}
    if (typeof cur === 'number' && Math.abs(cur - want) > .12) try { h.seek(want, ponId); } catch (e) {} }
  var vortexH = null, vortexId = null, vortexLvl = 0, vortexKill = 0;
  function vortexBed(v, ms){ if (!window.Howl) return;   // one instance, ever: v = its level (0 = out)
    if (!v) { if (vortexId == null) return; var h0 = vortexH, id0 = vortexId; vortexId = null; vortexLvl = 0; try { h0.fade(h0.volume(id0), 0, ms || 1500, id0); } catch (e) {} clearTimeout(vortexKill); vortexKill = setTimeout(function () { try { h0.stop(id0); } catch (e) {} }, (ms || 1500) + 80); return; }
    vortexLvl = v; if (!vortexH) vortexH = sndNew('sfx-vortex-loop', 'sfx', true);
    if (vortexId != null) { try { vortexH.fade(vortexH.volume(vortexId), v * SFX, ms || 1500, vortexId); } catch (e) {} return; }
    var id = vortexId = vortexH.play(); try { vortexH.volume(0, id); vortexH.fade(0, v * SFX, ms || 1500, id); } catch (e) {} sndHold(vortexH, id); }
  function sfxPreload(){ ['orb-shimmer', 'orb-whoosh', 'portal-on2', 'flash', 'flash-big'].forEach(function (n) { if (!FXH[n]) FXH[n] = sndNew('sfx-' + n, 'sfx'); }); if (!vortexH) vortexH = sndNew('sfx-vortex-loop', 'sfx', true); }
  var flashAt = -1e9, flashT = [];
  function sfxFlash(big, delay){ var go = function () { var n = performance.now(); if (n - flashAt < 700) return; flashAt = n; sfxShot(big ? 'flash-big' : 'flash', .45); };   // s114: every flash of light gets its sound, timed to the flash's peak (the files' own attack is ~0.1s); two flashes on top of each other get one
    if (delay) flashT.push(sched(go, delay)); else go(); }
  function sfxJump(keep){ flashT.forEach(unsched); flashT = []; Object.keys(FXH).forEach(function (n) { var h = FXH[n]; if (replaying && /^flash/.test(n)) return;   /* (the Replay press's own flash rings on over the restart) */ if (keep && n === 'portal-on2') return;   /* (Next into 'Out of his control' keeps the running portal, and its sound) */ (h._sounds || []).forEach(function (q) { if (q._paused || q._ended) return; var id = q._id; try { h.fade(h.volume(id), 0, 200, id); } catch (e) {} setTimeout(function () { try { h.stop(id); } catch (e) {} }, 220); }); });
    pausedHowls = pausedHowls.filter(function (p) { return !Object.keys(FXH).some(function (n) { return FXH[n] === p.h; }); }); if (!keep) vortexBed(0, 600); }
  var sfxQuiet = false;   // set while a jump replays a line's opening fx (no whoosh for an orb already in the air)
  var dipT = 0, bloomCut = false, bloomGen = 0;   // bloomGen: bumped by a jump, so a bloom caught mid-flight never swaps the shot it no longer belongs to
  var dipWait = null;                                        // s129 · A4: the shot asked for that is still waiting for its dip's black (not built yet)
  var NS_ON = /[?&]ns=1\b/.test(location.search), nsV = null, nsIv = 0;   /* s144 · ?ns=1: the new-style village video (test) */
  function nsTest(name) { if (!NS_ON || XP || PART2) return; var on = String(name).indexOf('village') === 0;
    if (!on) { if (nsV) { var o = nsV; nsV = null; clearInterval(nsIv); o.style.opacity = '0'; setTimeout(function () { try { o.pause(); o.removeAttribute('src'); o.load(); } catch (x) {} o.remove(); }, 600); } return; }
    if (nsV) return; var pn = document.getElementById('jjst-pane'); if (!pn) return; var v = nsV = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.src = GB + 'test-newstyle-village.mp4' + AV; v.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;z-index:50;opacity:0;transition:opacity .5s ease;pointer-events:none;'; pn.appendChild(v);
    v.addEventListener('playing', function () { v.style.opacity = '1'; }, { once: true });
    nsIv = setInterval(function () { if (nsV !== v) return; if (storyPaused) { if (!v.paused) v.pause(); } else if (v.paused && !v.ended) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }, 200); }
  function setComp(name, dipped){
    if (bloomCut) { bloomCut = false; if (name !== curComp) dipped = true; }   // s105: built under the orb's bloom (a press): a clean cut, no crossfade
    if (name === curComp && !dipped) return; var c0 = COMP[name]; if (!(c0 && (c0.dip || (c0.bloom && !jumping)) && !dipped)) auraOut(!!dipped);   // s105: a dipped shot change takes the aura down under its black, at once
    if (name === 'village1' && typeof curComp === 'string' && curComp.indexOf('village') === 0) return; // don't restart the village once it's running (2nd caption keeps comp:'village1')
    curComp = name; dipWait = null; if (!XP && !PART2 && String(name).indexOf('forest') === 0) msPrefetch(); nsTest(name); vxPrefetch(name);   // s144 · s145   /* s130: the forest = the tale's last stretch: My Story may start fetching its first screen */
    var c = COMP[name]; if (!c) return;
    if (c.dip && !dipped) { dipWait = name;   /* s129 · A4 */                                   // dip:[out, in] — a quick fade to black, the shot swaps (a clean cut) under it, then back up (the move into the inspect beat)
      var df = document.getElementById('jjst-fade'), swapped = false; clearTimeout(dipT); if (df._dipEnd) df.removeEventListener('transitionend', df._dipEnd);
      var swap = function () { if (swapped) return; swapped = true; clearTimeout(dipT); df.removeEventListener('transitionend', swap); df._dipEnd = null;
        if (curComp === name) setComp(name, true);                // only once the black is complete (transitionend), so nothing of either shot shows mid-swap
        if (dipWait === name) dipWait = null;
        requestAnimationFrame(function () { requestAnimationFrame(function () { void df.offsetWidth; [].forEach.call(document.querySelectorAll('#jjst-layers > .cut'), function (el) { el.classList.remove('cut'); });   // landed: later moves in the shot (the orb waking) animate again (s110: two frames, so the new shot is drawn before the black lifts)
          df.style.transition = 'opacity ' + c.dip[1] + 'ms ease-out'; df.style.opacity = '0';
          dipT = setTimeout(function () { df.style.transition = ''; }, c.dip[1] + 60); }); }); };
      df.style.transition = 'opacity ' + c.dip[0] + 'ms ease-in'; void df.offsetWidth; df.style.opacity = '1';
      if (getComputedStyle(df).opacity === '1') swap(); else { df._dipEnd = swap; df.addEventListener('transitionend', swap); dipT = setTimeout(swap, c.dip[0] + 400); }   // fallback: a busy frame never strands the black
      return; }
    if (c.bloom && !dipped && !jumping) {       // s105 · bloom: the old shot leans in toward the thing (the orb) as it fills the frame with light; the new shot lands under the peak and settles
      var bo = layerRecs[c.bloom.from], bp = bo && stagePt(bo.el, .5, .5), g = bloomGen;
      bloom({ kind:'gold', cover:true, x: bp ? bp[0] : null, y: bp ? bp[1] : null, in:420, hold:90, out:760, push:c.bloom.push, settle:c.bloom.settle, onPeak:function () { if (curComp === name && g === bloomGen) setComp(name, true); } });
      return; }
    if (dipped) c = Object.assign({}, c, { cut: true });         // under the black: no crossfades, no glides — everything simply lands
    swapAt = c.swapAt || 0; cutNow = !!c.cut;
    if (c.push) { cutNow = false;                                // a camera push instead of a hard cut: the outgoing shot scales up about Joe's feet as the new one dissolves in
      var W = window.innerWidth, H = window.innerHeight, px = W * c.push.x / 100, py = H * c.push.y / 100; if (window.JJ_LB && layersWrap) { var pb1 = layersWrap.getBoundingClientRect(); if (pb1.width) { px = pb1.left + pb1.width * c.push.x / 100; py = pb1.top + pb1.height * c.push.y / 100; } }
      [curBgLayer].concat([].slice.call(document.querySelectorAll('#jjst-layers > *'))).forEach(function (el) { if (!el || !el.getBoundingClientRect) return;
        var r = el.getBoundingClientRect(); el.style.transformOrigin = (px - r.left).toFixed(0) + 'px ' + (py - r.top).toFixed(0) + 'px';
        el.style.transition = (el.style.transition ? el.style.transition + ',' : '') + 'scale ' + (c.push.ms || 700) + 'ms cubic-bezier(.45,0,.4,1)';
        requestAnimationFrame(function () { el.style.scale = String(c.push.s); }); }); }
    if (blackout && name.indexOf('village') !== 0) { if (cam) camDetach(true);   /* s121: the village's rig (its fire plates held their fade back .6s + 1.1s and showed over the tavern as the black lifted) goes at once, under the full black */ var cn0 = cutNow; cutNow = true; Object.keys(layerRecs).forEach(function (k) { var o = layerRecs[k]; delete layerRecs[k]; fadeRemove(o.el); if (o.aura) fadeRemove(o.aura); }); cutNow = cn0;   /* s121: and the village's figures with it (Trogdor and his flame faded out over the tavern as the black lifted: ‘fire in the tavern for the first second’) */
      [].forEach.call(document.querySelectorAll('#jjst video'), function (v) { v.pause(); var i = pausedVideos.indexOf(v); if (i >= 0) pausedVideos.splice(i, 1); });   // s108: under the black the village stops decoding before the tavern's clips start (14 clips ran at once through that handover)
      blackout = false; var bo = document.getElementById('jjst-fade'); setTimeout(function () { bo.style.transition = 'opacity 1.4s ease'; bo.style.opacity = '0'; }, 250); }
    setSnow(!!c.snow); setSparkle(c.sparkle || false); setHints(name === 'cavern' ? c.layers : null);
    boardIn = !cutNow && (c.bg !== curBg || jumping); fxHoldMs = boardIn ? T.bgFade + 250 : 0; if (cam && cam.fx && fxHoldMs) cam.fxHoldUntil = performance.now() + fxHoldMs;   /* s113: a rig carried on to a new board (the forest's far set → near set) holds its new layers too: they started with the crossfade and stalled it into a cut */   // s108: a new board's Blender layers start decoding once its crossfade is through (staggered, not all at once)        // (a Prev / Next rebuild: its clips fade in as its stills always did, instead of popping in on a poster frame)                     // s104: a new board dissolving in: its new figures dissolve in with it
    if (c.xfade && !cutNow) Object.keys(layerRecs).forEach(function (k) { var o = layerRecs[k]; delete layerRecs[k]; fadeRemove(o.el); if (o.aura) fadeRemove(o.aura); });   // s110 · xfade: every figure crossfades to its new framing (no sliding across to a new board's positions)
    if (XP && XP.comp) { try { XP.comp(name, jumping); } catch (e) { if (window.console) console.warn('[st2] comp hook', e); } }   /* st2 · the part is told a shot is about to build (it sets where on the board a narrow screen looks before the figures land) */
    showBg(c.bg, c); setNight(c.bg); buildLayers(c.layers); boardIn = false; setCompSound(c.snd); playCue(c.cue); musComp(name);
    if (name !== 'forest5b') vortexBed(0, 800); if (name === 'forest3' || name === 'forest4b') sfxPreload();   // s113: the vortex belongs to the portal shot; the orb / portal sounds are fetched a shot ahead
    var jq = document.getElementById('jjst'); if (jq) jq.classList.toggle('jj-noblur', (window.innerWidth || 1000) < 700 || !!NOBLUR[name] || !!blurSeen[name] || !!(XP && XP.noblur && XP.noblur(name)));   // s120: the glass panels drop their blur on the shots where it costs frames (and on narrow screens)
    sayComp(name);                                          // s118: this shot's teaching bubble, if it has one (never waits, never blocks)
    camComp(name);                                          // the scene's camera rig on / off / carried on (s96 cavern, s100 village)
    orbComp(name);                                          // s106: the Blender orb on the ground (forest3 → forest4b), flying (forest5b)
    if (name !== 'cavern') runFx('darkOff');            // the darkness belongs to the cave
    if (name === 'village1') { runVillageSeq();      // start the equal-timed dragon-fire sequence
      panelTimers.push(sched(function () { runFx('chicks', 'chicks'); }, VIL_LATE + 2500)); }   // the three by the house jump when Trogdor's fire starts (2.2s into his clip)
    else if (name.indexOf('village') !== 0) clearPanels();  // left the village → cancel any pending shots
  }

  function revealFromBlack(){ var b = document.getElementById('jjst-black');
    b.style.transition = 'width ' + T.revealDur + 'ms ease, height ' + T.revealDur + 'ms ease';
    b.style.width = '260cqmax'; b.style.height = '260cqmax';
    setTimeout(function () { b.style.display = 'none'; }, T.revealDur + 120); }
  /* the companion tags along with Joe (or, where he is not on screen, the scene's hero — Trogdor in the cave) */
  function storyFollow(){
    if (!document.getElementById('jjst')) return null;
    var ks = ['joe', 'ride', 'ride2', 'ride3', 'joe2', 'joe3'];
    for (var i = 0; i < ks.length; i++) { var r = layerRecs[ks[i]]; if (r && r.el && r.el.isConnected) return r.el; }
    return document.querySelector('#jjst .jjst-layer.hero');
  }
  // (not registered: Joe wants no companion during the tale — Part One or Two. storyFollow stays for when that changes.)
  /* My Story has its own address (/storytime#my-story, s90): Back from it replays the tale rather than leaving for wherever
     the visitor was before; opening the address directly lands on My Story. The path stays /storytime, so the menu keeps
     Storytime current. */
  var atMyStory = false;
  function markMyStory(){ if (atMyStory) return; atMyStory = true;
    try { if (location.hash !== '#my-story') history.pushState({ jjMyStory: 1 }, '', location.pathname + location.search + '#my-story'); } catch (e) {} }
  window.addEventListener('popstate', function () { if (atMyStory && location.hash !== '#my-story') location.reload(); });
  function liftStory(){ if (!MS.woke) { msWake(liftStory0, 0); return; } liftStory0(); }   /* s130: every lift is behind a wake (a path that reaches here without one is under its black) */
  function liftStory0(){ sayClear(true); musOff('mountain', 800); forestEnd('quick'); vortexBed(0, 800); ctaOff(); markMyStory(); document.documentElement.classList.remove('jjst-cover');                                    // lift the black away → My Story is revealed beneath
    if (window.jjCompanion && window.jjCompanion.follow) window.jjCompanion.follow('story', null);
    if (window.jjStory && window.jjStory.unlock) window.jjStory.unlock();
    window.scrollTo(0, 0);
    var w = document.getElementById('jjst');
    if (w) { w.style.transition = 'opacity 1.4s ease'; w.style.opacity = '0'; setTimeout(function () { if (w.parentNode) w.remove(); }, 1500); }
    msSay('jj:mystory-lift');   /* s130 */
  }
  function fadeToBlack(){ msPrefetch(); musAllOff(1500); vortexBed(0, 1500); var f = document.getElementById('jjst-fade'); void f.offsetWidth; f.style.opacity = '1';   // Part Two's ending (the fight)
    if (window.jjScore) window.jjScore.award('storytime');
    setTimeout(function () { setCompSound(null); playCue(null); msWake(function () { releaseAmbient(); liftStory(); }, 0); }, T.endFade + 300); }
  /* ---- Part One's ending: Joe is gone, the forest fades to black, the last lines type ON the black and the "To be continued"
     evolution loader comes up BEHIND the banner — the loader is slipped under #jjst, and #jjst goes see-through except for the
     banner. The loader holds until the last line has been read, then goes to black, and My Story is underneath. ---- */
  var endLock = false, endDrv = null, endTyped = false, endT = 0, ending = false;   // ending: the last two lines are running (dim → black → loader); resetEnd clears it
  /* s105 · a bloom of light: full frame, radial only (it fades to its colour toward the corners, never an edge). gold + cover: the frame fills with
     warm light and a shot change happens under its peak (onPeak) — the orb's transitions; portal: a purple / white flash, screen-blended, that
     blooms and decays (the yank, the hand-over to the tunnel). push: the stage leans in toward the light as it rises. Reduced motion: a slower,
     gentler wash, no scale, no push. WAAPI, so a pause holds it (and onPeak is on sched). */
  var BLOOM = {
    gold:   { wash: ['rgba(255,252,238,1)', 'rgba(255,236,176,1)', 'rgba(255,206,118,1)', 'rgba(242,168,82,1)'], core: 'radial-gradient(closest-side,#fff 0%,rgba(255,246,210,.95) 22%,rgba(255,214,120,.6) 52%,rgba(255,180,80,0) 100%)' },
    portal: { wash: ['rgba(255,255,255,.95)', 'rgba(238,200,255,.82)', 'rgba(196,112,255,.55)', 'rgba(130,56,232,.3)'], core: 'radial-gradient(closest-side,#fff 0%,rgba(250,228,255,.95) 20%,rgba(214,130,255,.6) 50%,rgba(170,80,255,0) 100%)' }
  };
  function bloom(o){
    var st = document.getElementById('jjst'), K = BLOOM[o.kind || 'gold'], rm = CAM_STILL; if (!st) { if (o.onPeak) o.onPeak(); return null; }
    var W = st.clientWidth, H = st.clientHeight, x = o.x == null ? W / 2 : o.x, y = o.y == null ? H / 2 : o.y, R = Math.hypot(Math.max(x, W - x), Math.max(y, H - y));
    var tin = rm ? Math.max(500, o.in || 400) : (o.in || 400), hold = o.hold || 0, tout = rm ? Math.max(1200, o.out || 900) : (o.out || 900), tot = tin + hold + tout, a1 = tin / tot, a2 = (tin + hold) / tot;
    var peak = o.peak == null ? 1 : o.peak; if (rm && !o.cover) peak = Math.min(peak, .4);
    var b = document.createElement('div'); b.className = 'jjst-bloom ' + (o.kind || 'gold'); b.setAttribute('aria-hidden', 'true');
    var w = K.wash, cs = Math.max(W, H) * (o.core || .9);
    b.innerHTML = '<i class="wash" style="background:radial-gradient(circle ' + R.toFixed(0) + 'px at ' + x.toFixed(0) + 'px ' + y.toFixed(0) + 'px,' + w[0] + ' 0,' + w[1] + ' 26%,' + w[2] + ' 62%,' + w[3] + ' 100%)"></i>' +
      (rm || o.noCore ? '' : '<i class="core" style="left:' + (x - cs / 2).toFixed(0) + 'px;top:' + (y - cs / 2).toFixed(0) + 'px;width:' + cs.toFixed(0) + 'px;height:' + cs.toFixed(0) + 'px;background:' + K.core + '"></i>');
    var fade = document.getElementById('jjst-fade'); st.insertBefore(b, fade ? fade.nextSibling : null);
    var anims = [], wash = b.querySelector('.wash'), core = b.querySelector('.core');
    anims.push(wash.animate([{ opacity: 0, easing: 'cubic-bezier(.55,0,.85,.45)' }, { opacity: peak, offset: a1 }, { opacity: peak, offset: a2, easing: 'cubic-bezier(.2,.6,.35,1)' }, { opacity: 0 }], { duration: tot, fill: 'forwards' }));
    if (core) anims.push(core.animate([{ opacity: 0, transform: 'scale(.12)', easing: 'cubic-bezier(.2,.7,.3,1)' }, { opacity: 1, transform: 'scale(1)', offset: a1 * .8 }, { opacity: 1, transform: 'scale(1.15)', offset: a2 }, { opacity: 0, transform: 'scale(1.6)' }], { duration: tot * 1.1, fill: 'forwards' }));
    var ox = x.toFixed(0) + 'px ' + y.toFixed(0) + 'px';
    if (o.push && !rm) {
      [bgWrap, layersWrap].forEach(function (el) { if (!el) return; el.style.transformOrigin = ox; var pa = el.animate([{ scale: '1' }, { scale: String(o.push) }], { duration: tin + hold, easing: 'cubic-bezier(.5,0,.8,.6)' }); pa.onfinish = pa.oncancel = function () { if (!o.settle) el.style.transformOrigin = ''; }; }); }
    anims[0].onfinish = anims[0].oncancel = function () { if (b.parentNode) b.remove(); };
    if (o.onPeak) sched(o.onPeak, tin + hold / 2);
    if (o.settle && !rm) sched(function () { [bgWrap, layersWrap].forEach(function (el) { if (!el) return; el.style.transformOrigin = ox; el.animate([{ scale: String(o.settle) }, { scale: '1' }], { duration: tout + 300, easing: 'cubic-bezier(.2,.7,.3,1)' }).onfinish = function () { el.style.transformOrigin = ''; }; }); }, tin + hold / 2 + 20);
    return b;
  }
  function sparkBurst(x, y, n, reach){                       // s105 · four-point sparkles thrown out of a point (stage px), spinning, rising, gone; and a soft ring
    var st = document.getElementById('jjst'); if (!st || CAM_STILL) return;
    var ring = document.createElement('i'); ring.className = 'jjst-spk ring'; ring.style.setProperty('--s', (reach * 1.3).toFixed(0) + 'px'); ring.style.transform = 'translate(' + x.toFixed(0) + 'px,' + y.toFixed(0) + 'px)'; st.appendChild(ring);
    ring.animate([{ transform: 'translate(' + x.toFixed(0) + 'px,' + y.toFixed(0) + 'px) scale(.2)', opacity: .9 }, { transform: 'translate(' + x.toFixed(0) + 'px,' + y.toFixed(0) + 'px) scale(1.5)', opacity: 0 }], { duration: 700, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' }).onfinish = function () { ring.remove(); };
    for (var i = 0; i < n; i++) (function (i) { var e = document.createElement('i'), a = Math.random() * Math.PI * 2, d = reach * (.45 + Math.random() * .7), sz = 10 + Math.random() * 16, dur = 700 + Math.random() * 600, dl = Math.random() * 160;
      e.className = 'jjst-spk'; e.style.setProperty('--s', sz.toFixed(0) + 'px'); e.style.opacity = '0'; st.appendChild(e);
      var x1 = x + Math.cos(a) * d, y1 = y + Math.sin(a) * d * .8 - reach * .25, sp = (Math.random() < .5 ? -1 : 1) * (90 + Math.random() * 120);
      e.animate([{ transform: 'translate(' + x + 'px,' + y + 'px) scale(0) rotate(0deg)', opacity: 1 }, { transform: 'translate(' + ((x + x1) / 2).toFixed(0) + 'px,' + ((y + y1) / 2).toFixed(0) + 'px) scale(1) rotate(' + (sp / 2).toFixed(0) + 'deg)', opacity: 1, offset: .35 }, { transform: 'translate(' + x1.toFixed(0) + 'px,' + y1.toFixed(0) + 'px) scale(0) rotate(' + sp.toFixed(0) + 'deg)', opacity: 0 }], { duration: dur, delay: dl, easing: 'cubic-bezier(.2,.7,.4,1)', fill: 'forwards' }).onfinish = function () { e.remove(); }; })(i);
  }
  function stagePt(el, fx, fy){ var st = document.getElementById('jjst'); if (!st || !el || !el.isConnected) return null; var sr = st.getBoundingClientRect(), r = el.getBoundingClientRect(); if (!r.width) return null; return [r.left - sr.left + r.width * fx, r.top - sr.top + r.height * fy, r.width, r.height]; }
  /* s111 · Trogdor arrives in the tavern window in a burst of flame and smoke that clears to show him (he used to simply appear), and his clip no
     longer wraps in one frame from one side of the sky to the other: at its end he goes up in the same puff and comes round again. Code-drawn:
     soft radial blobs only (screen-blended fire, grey smoke), on the plate he rides, so the camera carries it; a pause holds it. */
  function puffAt(el, fx, fy, then){ var host = el.parentNode; if (!host || CAM_STILL) { if (then) then(); return; }
    var w = el.offsetWidth, h = el.offsetHeight || w * .66, x = el.offsetLeft + w * fx, y = el.offsetTop + h * fy, R = w * .22;
    var box = document.createElement('div'); box.className = 'jjst-puff'; box.style.cssText = 'left:' + x.toFixed(0) + 'px;top:' + y.toFixed(0) + 'px;z-index:' + (getComputedStyle(el).zIndex === 'auto' ? '' : getComputedStyle(el).zIndex);
    host.insertBefore(box, el.nextSibling);
    var blob = function (cls, dx, dy, r, kf, dur, dl) { var b = document.createElement('i'); b.className = cls; b.style.cssText = 'width:' + (2 * r).toFixed(0) + 'px;height:' + (2 * r).toFixed(0) + 'px;margin:' + (-r + dy).toFixed(0) + 'px 0 0 ' + (-r + dx).toFixed(0) + 'px;opacity:0'; box.appendChild(b);
      b.animate(kf, { duration: dur, delay: dl || 0, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' }); };
    blob('fl', 0, 0, R * 1.3, [{ opacity: 0, transform: 'scale(.2)' }, { opacity: 1, transform: 'scale(1)', offset: .22 }, { opacity: 0, transform: 'scale(1.5)' }], 700);
    for (var i = 0; i < 7; i++) { var ang = i / 7 * Math.PI * 2 + Math.random() * .6, d = R * (.35 + Math.random() * .4), rr = R * (.55 + Math.random() * .35);
      blob('sm', Math.cos(ang) * d * .6, Math.sin(ang) * d * .45, rr, [{ opacity: 0, transform: 'translate(0,0) scale(.3)' }, { opacity: .95, transform: 'translate(' + (Math.cos(ang) * d * .5).toFixed(0) + 'px,' + (Math.sin(ang) * d * .4 - R * .15).toFixed(0) + 'px) scale(1)', offset: .3 },
        { opacity: 0, transform: 'translate(' + (Math.cos(ang) * d * 1.1).toFixed(0) + 'px,' + (Math.sin(ang) * d * .8 - R * .7).toFixed(0) + 'px) scale(1.7)' }], 1500 + Math.random() * 400, 60 + i * 25); }
    for (var k = 0; k < 8; k++) { var a2 = Math.random() * Math.PI * 2, d2 = R * (1 + Math.random() * .9);
      blob('em', 0, 0, 3 + Math.random() * 3, [{ opacity: 1, transform: 'translate(0,0)' }, { opacity: 0, transform: 'translate(' + (Math.cos(a2) * d2).toFixed(0) + 'px,' + (Math.sin(a2) * d2 - R * .4).toFixed(0) + 'px)' }], 700 + Math.random() * 500, 40); }
    sched(function () { if (then) then(); }, 260); sched(function () { if (box.parentNode) box.remove(); }, 2300); }
  function puffArrive(el, L){ var P = L.puffIn; el.loop = false; el.style.transition = 'opacity .45s ease'; el.style.opacity = '0'; el._puffing = true; el._lateHide = true;   // held on his first frame, so he comes out of the smoke where it is
    try { el.pause(); el.currentTime = 0; } catch (e) {}
    var show = function () { el._puffing = false; el._lateHide = false;
      if (storyPaused) { el.style.opacity = '1'; if (pausedVideos.indexOf(el) < 0) pausedVideos.push(el); return; }
      var shown = false, reveal = function () { if (shown || !el.isConnected) return; shown = true; el.style.opacity = '1'; };   // s114: he fades in only once his clip is really running (a browser slow to start it showed him frozen on frame 1, then leapt ahead to catch up)
      var pp = el.play(); if (pp && pp.catch) pp.catch(function () {});
      if (el.requestVideoFrameCallback) el.requestVideoFrameCallback(function () { el.requestVideoFrameCallback(reveal); }); else reveal();
      setTimeout(reveal, 500); };
    sched(function () { if (!el.isConnected) return; puffAt(el, P[0], P[1], show); }, 120);
    el.addEventListener('ended', function () { if (!el.isConnected) return;   // the end of his pass: up in smoke, and round again from the top
      el.style.opacity = '0'; puffAt(el, .5, .35, function () { if (!el.isConnected) return; try { el.currentTime = 0; } catch (e) {} var pp = storyPaused ? null : el.play(); if (pp && pp.catch) pp.catch(function () {}); sched(function () { puffAt(el, P[0], P[1], show); }, 250); }); }); }
  /* s106 · the orb as a real object (blender-fx/orb). A box (.jjorb) rides the orb still's own box every frame (so it follows the flights, the shake
     and the drop); inside it: its contact shadow on the ground, the Blender orb itself (idle: turning a little on its point; active: woken, on
     Chrome — the HEVC set is heavy, so Safari keeps the lit still), its gold pool, and the one-shots (the moonbeam that finds it, the tap flash, the
     landing after the drop). The still hides only once its clip is actually playing. Phones and reduced motion: the still + its shadow. ?fx=0: s105. */
  var FX_HEVC = /\.mov/.test(jjClipSrc('x'));
  function fxOK(){ return FX_PASS && CAMERA_PASS; }
  function fxDesk(){ return fxOK() && !CAM_STILL && !(window.jjLite && window.jjLite.on) && (layersWrap ? layersWrap.clientWidth : innerWidth) >= 700; }   /* s138: not in the lite level */
  var orbX = null;
  function orbVid(name, loop){ var v = document.createElement('video'); v.className = 'v'; v.muted = true; v.loop = !!loop; v.playsInline = true; v.preload = 'auto';
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.innerHTML = jjClipSrc(GB + 'story-fx-orb-' + name, AV); return v; }
  function orbBox(e, b){ e.style.left = ((b[0] - b[2] / 2) * 100).toFixed(2) + '%'; e.style.top = ((b[1] - b[3] / 2) * 100).toFixed(2) + '%'; e.style.width = (b[2] * 100).toFixed(1) + '%'; e.style.height = (b[3] * 100).toFixed(1) + '%'; }
  function orbPlay(v){ if (!v) return; if (storyPaused) { if (pausedVideos.indexOf(v) < 0) pausedVideos.push(v); return; } var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  function orbAdd(o, v, box, cls){ if (cls) v.className += ' ' + cls;
    if (cls && /\blt\b/.test(cls)) { v.className = v.className.replace(/\bv\b/, 'jjorb-lt'); var gl = /\bgl\b/.test(cls); o.lights.push({ el: v, b: box, z: gl ? '' : '3' }); layersWrap.parentNode.insertBefore(v, gl ? layersWrap : layersWrap.nextSibling); orbSync(o); return v; }   // light: beside the layers (#jjst-layers is its own stacking context, so a screen blend inside it had no board behind it and showed black); the pool under the figures, the beam / tap flash over them
    orbBox(v, box); o.w.appendChild(v); return v; }
  function orbDrop(){ var o = orbX; if (!o) return; orbX = null; cancelAnimationFrame(o.raf); o.el.classList.remove('jjorb-hid');
    Object.keys(o.v).forEach(function (k) { var v = o.v[k]; try { v.pause(); v.innerHTML = ''; v.removeAttribute('src'); v.load(); } catch (e) {} }); o.lights.forEach(function (l) { if (l.el.parentNode) l.el.remove(); }); if (o.w.parentNode) o.w.remove(); }
  function orbEnsure(){
    if (!fxOK()) return null; var r = layerRecs.orb; if (!r || !r.el || !r.el.isConnected || r.el.tagName !== 'IMG') { orbDrop(); return null; }
    if (orbX && orbX.el === r.el && orbX.w.isConnected) return orbX; orbDrop();
    var el = r.el, w = document.createElement('div'); w.className = 'jjorb'; w.setAttribute('aria-hidden', 'true');
    var sh = document.createElement('img'); sh.className = 'sh'; sh.alt = ''; sh.src = F('fx-orb-shadow'); w.appendChild(sh);
    el.parentNode.insertBefore(w, el.nextSibling);
    var o = orbX = { el: el, w: w, sh: sh, v: {}, lights: [], cur: null, hideImg: false, desk: fxDesk(), tilt: null, raf: 0 };
    (function loop(){ if (orbX !== o) return; if (!el.isConnected || !w.isConnected) { orbDrop(); return; } orbSync(o); o.raf = requestAnimationFrame(loop); })();
    return o; }
  function orbSync(o){ var el = o.el, w = o.w, cs = getComputedStyle(el);
    w.style.left = el.offsetLeft + 'px'; w.style.top = el.offsetTop + 'px'; w.style.width = el.offsetWidth + 'px'; w.style.height = el.offsetHeight + 'px'; w.style.zIndex = cs.zIndex;
    w.style.translate = cs.translate === 'none' ? '' : cs.translate;   // the flights, the drift, the shake — the ground shadow included (it is only on while the orb rests)
    var L = el.offsetLeft, T = el.offsetTop, W = el.offsetWidth, H = el.offsetHeight;
    o.lights = o.lights.filter(function (l) { if (!l.el.isConnected) return false; var b = l.b, st = l.el.style; st.left = (L + (b[0] - b[2] / 2) * W).toFixed(1) + 'px'; st.top = (T + (b[1] - b[3] / 2) * H).toFixed(1) + 'px'; st.width = (b[2] * W).toFixed(1) + 'px'; st.height = (b[3] * H).toFixed(1) + 'px'; st.translate = w.style.translate; st.zIndex = l.z; return true; });
    var tilt = (parseFloat(cs.rotate) || 0) < -8; if (tilt !== o.tilt) { o.tilt = tilt; orbBox(o.sh, tilt ? [.654, .806, 2, .5] : [.554, .834, 2, .5]); }
    if (o.cur) o.cur.style.rotate = cs.rotate === 'none' ? '0deg' : cs.rotate;
    if (o.hideImg !== el.classList.contains('jjorb-hid')) el.classList.toggle('jjorb-hid', o.hideImg); }
  function orbShow(o, v){ ['idle', 'active', 'fall'].forEach(function (k) { var x = o.v[k]; if (x && x !== v) { x.classList.remove('on'); if (!x.paused) x.pause(); var i = pausedVideos.indexOf(x); if (i >= 0) pausedVideos.splice(i, 1); } });
    o.cur = v; if (v) v.classList.add('on'); o.hideImg = !!v; }
  function orbState(st, fromTop){ var o = orbEnsure(); if (!o) return; o.state = st;
    if (st === 'fly') { orbShow(o, null); o.sh.classList.remove('on'); orbGlowOn(o, false); return; }
    o.sh.classList.add('on');
    var active = st === 'active', clip = o.desk && !(active && FX_HEVC) ? (active ? 'active' : 'idle') : null;   // Safari: the lit still stays up while it is awake
    orbGlowOn(o, active);
    if (!clip) { orbShow(o, null); return; }
    var v = o.v[clip] || (o.v[clip] = orbAdd(o, orbVid(clip, true), active ? [.5, .5, 1.12, 1.12] : [.5, .5, 1, 1]));
    if (fromTop) { try { v.currentTime = 0; } catch (e) {} }
    if (o.cur === v) return;
    var go = function () { if (orbX === o && o.state === st) orbShow(o, v); };
    if (v.readyState >= 2 && !v.paused) go(); else { v.addEventListener('playing', go, { once: true }); orbPlay(v); } }
  function orbGlowOn(o, on){ if (!o.desk) return; var g = o.v.glow;
    if (on && !g) { g = o.v.glow = orbAdd(o, orbVid('glow', true), [.554, .834, 3, 1], 'lt gl'); g.addEventListener('playing', function () { g.classList.add('on'); }, { once: true }); }
    if (!g) return; if (on) { orbPlay(g); g.classList.add('on'); } else { g.classList.remove('on'); setTimeout(function () { if (!g.classList.contains('on')) g.pause(); }, 900); } }
  function orbOnce(name, box){ var o = orbX; if (!o || !o.desk) return false;   // a light one-shot on the orb (the moonbeam, the tap)
    var v = orbAdd(o, orbVid(name, false), box, 'lt one'); v.addEventListener('playing', function () { v.classList.add('on'); }, { once: true });
    v.addEventListener('ended', function () { v.remove(); }, { once: true }); orbPlay(v); return true; }
  function orbPreload(names){ var o = orbX; if (!o || !o.desk) return; names.forEach(function (n) { if (o.v[n]) return; var box = n === 'fall' ? ORB_FALL.box : [.5, .5, 1, 1];
    o.v[n] = orbAdd(o, orbVid(n, n !== 'fall'), box); }); }
  /* s108 · the portal dies (the 'dark' beat): the orb drops STRAIGHT down from exactly where it hangs — the x it has on screen right now, drift
     included — and lies dead, flat on the path (Blender: story-fx-orb-fall, a 1.33s one-shot that strikes, slaps flat with dust and holds; its last
     frame is story-fx-orb-flat). Nothing changes after it lands. The clip assumes the orb starts 3.5 box heights above its resting spot; wherever it
     really hangs, the clip is lifted by the difference and falls it off over the drop (0-.55s, gravity), so frame 1 sits on the real orb and the
     landing is exact. Phones / reduced motion: a plain CSS fall, then the flat still. ?fx=0: the plain fall with the old dim (x held too).
     ORB_FALL is the hook: the clip, the still and their box (fractions of the resting orb's box). */
  var ORB_FALL = { clip: 'fall', still: 'fx-orb-flat', box: [.5, -1.1232, 2.2, 4.9536], lift: 3.5, drop: 550 };
  function orbGone(){ var r = layerRecs.orb; if (r && r.el) { r.el.style.transition = 'opacity .14s linear'; r.el.style.opacity = '0'; }   /* s129 · C2: gone in the flash */
    var o = orbX; if (o) { orbShow(o, null); o.sh.classList.remove('on'); orbGlowOn(o, false); o.state = 'gone'; } }
  function orbFall(){ var r = layerRecs.orb; if (!r || !r.el || !layersWrap) return; var el = r.el, lw = layersWrap.getBoundingClientRect(), b0 = el.getBoundingClientRect();
    if (el._fell) return; el._fell = true;
    var cx = b0.left + b0.width / 2 - lw.left, cy = b0.top + b0.height / 2 - lw.top;   // its centre on screen now (rotation and pulse are about the centre)
    el.classList.remove('orbrise', 'orbfly', 'orbdrop'); el.style.transition = 'none'; el.style.animation = 'none'; el.style.translate = '0px 0px'; el.style.rotate = '0deg'; el.style.scale = '1';
    var w = el.offsetWidth, h = el.offsetHeight || w; el.style.left = ((cx - w / 2) / lw.width * 100).toFixed(3) + '%';   // the same x, now in its own left
    var hoverBottom = lw.height - cy - h / 2;
    el.style.bottom = '27.6cqh'; void el.offsetWidth; var restBottom = lw.bottom - el.getBoundingClientRect().bottom, lift = hoverBottom - restBottom;
    el.style.bottom = hoverBottom.toFixed(1) + 'px';            // it hangs where it was until the fall starts
    var o = fxOK() ? orbEnsure() : null;
    if (o && o.desk) {                                          // the Blender fall
      orbShow(o, null); o.state = 'fall'; o.sh.classList.remove('on'); orbGlowOn(o, false); o.hideImg = false; el.style.filter = '';
      var v = o.v.fall || (o.v.fall = orbAdd(o, orbVid(ORB_FALL.clip, false), ORB_FALL.box)); v.loop = false;
      var off = -(lift - ORB_FALL.lift * h);                    // px: + lower, - higher than the clip's own start
      v.style.translate = '0px ' + off.toFixed(1) + 'px';
      var fell = false, plain = function () { if (fell || orbX !== o || o.state !== 'fall') return; fell = true; try { v.pause(); v.remove(); } catch (e) {} delete o.v.fall; orbShow(o, null);   /* s113: the clip never started (not ready, refused, stalled): the plain drop from where it hangs, then the still — never nothing */
        void el.offsetWidth; el.style.transition = 'bottom ' + ORB_FALL.drop + 'ms cubic-bezier(.55,0,1,.45)'; el.style.bottom = '27.6cqh'; sched(function () { sfxShot('orb-thud', .35); orbFlat(o, null); }, ORB_FALL.drop); };
      var guard = sched(plain, 450);
      v.addEventListener('playing', function () { if (fell || orbX !== o || o.state !== 'fall') return; fell = true; unsched(guard); sched(function () { sfxShot('orb-thud', .35); }, ORB_FALL.drop); el.style.bottom = '27.6cqh'; orbSync(o); orbShow(o, v); orbSync(o); v.style.rotate = '0deg';
        sched(function () { orbFlat(o, v); }, ((v.duration && isFinite(v.duration) ? v.duration : 2) * 1000) + 900);   /* s113: if 'ended' never comes, the still takes over anyway */
        var a = v.animate([{ translate: '0px ' + off.toFixed(1) + 'px' }, { translate: '0px 0px' }], { duration: ORB_FALL.drop, easing: 'cubic-bezier(.55,0,1,.45)', fill: 'forwards' }); a.onfinish = function () { v.style.translate = '0px 0px'; }; }, { once: true });
      v.addEventListener('ended', function () { orbFlat(o, v); }, { once: true });   // hold: the flat still (its last frame) takes over, the decoder goes
      orbPlay(v); return; }
    // phones, reduced motion, ?fx=0: a plain fall from where it hangs, straight down
    void el.offsetWidth;
    el.style.transition = 'bottom ' + ORB_FALL.drop + 'ms cubic-bezier(.55,0,1,.45)'; el.style.bottom = '27.6cqh';
    sched(function () { sfxShot('orb-thud', .35); }, ORB_FALL.drop);   // s113: it strikes the path
    if (!o) { el.style.filter = 'brightness(.55) saturate(.4)'; return; }
    o.state = 'fall'; sched(function () { o.sh.classList.remove('on'); orbFlat(o, null); }, ORB_FALL.drop);
  }
  function orbFlat(o, v){ if (orbX !== o || o.state !== 'fall') return; o.state = 'flat';   /* s113: the still is shown only once it has decoded; if it never comes, the clip's last frame (or the orb art) stays — the orb is never hidden without its replacement */
    var im = document.createElement('img'); im.className = 'v'; im.alt = ''; orbBox(im, ORB_FALL.box); o.w.appendChild(im);
    var show = function () { if (orbX !== o) return; orbShow(o, null); im.classList.add('on'); o.cur = im; o.hideImg = true; if (v) { try { v.pause(); v.remove(); } catch (e) {} delete o.v.fall; } };
    im.onload = function () { if (im.decode) im.decode().then(show, show); else show(); }; im.onerror = function () { im.remove(); if (!v && orbX === o) o.el.style.filter = 'brightness(.55) saturate(.4)'; };   /* no still at all: the orb art stays, dimmed (dead), as ?fx=0 has it */
    im.src = F(ORB_FALL.still); }
  function orbComp(name){ if (!fxOK()) return;
    if (name === 'forest3' || name === 'forest4b') { orbState(orbX && orbX.state === 'active' && name === 'forest4b' ? 'active' : 'idle');
      if (name === 'forest3') sched(function () { if (curComp === 'forest3' && orbX) orbOnce('reveal', [.5, -1.1, 3, 5]); }, 650);   // first sighting: a moonbeam finds it as the dip lifts
      if (name === 'forest4b') { shotPrep('ffar-burst'); orbPreload(['active']); } return; }
    if (name === 'forest5b') { if (orbEnsure()) { orbState('fly'); } shotPrep('ffar-pflash'); shotPrep('ffar-handover'); return; }
    orbDrop(); }
  function orbVis(){ return orbX && orbX.cur ? orbX.cur : null; }
  /* s106 · the portal's light one-shots (blender-fx/ffar): black at both ends, screen-blended over the shot (under the caption). Desktop only, not
     under reduced motion — there the s105 CSS blooms stand in. Warmed a scene early (shotPrep) so they start on the frame they are asked for. */
  var shotPre = {};
  function shotVid(name){ var v = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.innerHTML = jjClipSrc(GB + 'story-fx-' + name, AVX[name] || AV); return v; }
  var AVX = { 'ffar-pflash': '?a=7' };   // s113: a re-encoded file under its old name gets its own cache-buster (the pull flash's ring, feathered)
  function shotPrep(name){ if (!fxDesk() || shotPre[name]) return; var v = shotVid(name); try { v.load(); } catch (e) {} shotPre[name] = v; }
  function fxShot(name, o){ var st = document.getElementById('jjst'); if (!st || !fxDesk()) return null;
    var v = shotPre[name] || shotVid(name); delete shotPre[name]; v.className = 'jjfx-shot';
    var css = 'position:absolute;pointer-events:none;mix-blend-mode:screen;opacity:1;z-index:' + (o.z || 5) + ';';
    if (o.cover) css += 'inset:0;width:100%;height:100%;object-fit:cover;';
    else css += 'left:' + (o.x - o.size / 2).toFixed(0) + 'px;top:' + (o.y - o.size / 2).toFixed(0) + 'px;width:' + o.size.toFixed(0) + 'px;height:' + o.size.toFixed(0) + 'px;object-fit:fill;';
    v.style.cssText = css;
    if (o.after) st.insertBefore(v, o.after.nextSibling); else st.insertBefore(v, document.getElementById('jjst-cap'));
    if (o.from) { var seek = function () { try { v.currentTime = o.from; } catch (e) {} }; if (v.readyState >= 1) seek(); else v.addEventListener('loadedmetadata', seek, { once: true }); }
    v.addEventListener('ended', function () { v.remove(); }, { once: true }); setTimeout(function () { if (v.parentNode && v.ended) v.remove(); }, 8000);
    orbPlay(v); return v; }
  /* the cut-away after the portal closes: full screen, Joe tumbling through the vortex (one 6 s Dreamina shot), then back to the empty forest */
  function vortexCut(then){ var st = document.getElementById('jjst'), cap = document.getElementById('jjst-cap'); if (!st) { then(); return; }
    var v = document.createElement('video'); v.className = 'jjst-vortex'; v.muted = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.poster = GB + 'story-wood-vortex-poster.webp' + AV; v.innerHTML = '<source src="' + GB + 'story-wood-vortex.mp4' + AV + '" type="video/mp4"><source src="' + GB + 'story-wood-vortex.webm' + AV + '" type="video/webm">';
    st.insertBefore(v, cap || null); void v.offsetWidth; v.classList.add('on'); var pp = v.play(); if (pp && pp.catch) pp.catch(function () {});
    v.loop = true; var out = function () { if (v._out) return; v._out = true; then(); };   // no way back to the forest: the swirl keeps turning and the ending dims down over it
    sched(out, 6000); }
  function dimScene(next){                                 // Joe is gone: the forest dims (not out) under "Well, it is for now anyway."
    ending = true; var f = document.getElementById('jjst-fade'); f.style.transition = 'opacity 1.6s ease'; void f.offsetWidth; f.style.opacity = '.84';
    if (window.jjScore) window.jjScore.award('storytime');   // the tale row pays the theme AND a star; only the whole tale, never Skip
    setCompSound(null); playCue(null);
    setTimeout(function () { if (next) next(); }, 1300);
  }
  /* the fall through the portal: under the fade (held at 75%), between the black and the loader */
  var tunnelEl = null, tunnelPulseT = 0, endFlashT = 0;
  var VX2 = /[?&](vx|ui)=2\b/.test(location.search), vxVid = null;   /* s145 · ?vx=2: the painted vortex (test) */
  function vxMake(){ var small = (window.jjLite && window.jjLite.on) || innerWidth < 900, b = GB + 'story-vortex-painted' + (small ? '-s' : ''), v = document.createElement('video');
    v.muted = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.poster = b + '-poster.webp' + AV; v.src = b + '.mp4' + AV; return v; }
  function vxPrefetch(name){ if (!VX2 || XP || PART2 || vxVid || String(name).indexOf('forest') !== 0) return; vxVid = vxMake(); try { vxVid.load(); } catch (e) {} }
  function vx2In(){ var host = (window.JJ_LB && document.getElementById('jjst-pane')) || document.getElementById('jjst'), t = tunnelEl = document.createElement('div'); t.id = 'jjst-tunnel'; t.setAttribute('aria-hidden', 'true'); t.style.background = '#05030c';
    var v = vxVid || (vxVid = vxMake()); v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;'; t.appendChild(v); host.appendChild(t);
    try { v.currentTime = 0; } catch (e) {} var p = v.play(); if (p && p.catch) p.catch(function () {});
    var said = false, iv = setInterval(function () { if (tunnelEl !== t) { clearInterval(iv); return; } if (!said && v.currentTime >= 3.95) { said = true; oneShot('sfx-glitch', .32); } }, 80);   // the glitch's crackle, on the picture's own clock
    setTimeout(function () { t.classList.add('on'); }, 30); }
  function tunnelIn(){ vortexBed(.12, 1500); musForestUp(2500);                // s113: the vortex comes back up with the tunnel
    if (tunnelEl) return; if (VX2 && !XP && !PART2) { vx2In(); return; }   // s145
    var t = tunnelEl = document.createElement('div'); t.id = 'jjst-tunnel'; t.setAttribute('aria-hidden', 'true');
    var h = '<div class="sw"></div><div class="sw b"></div>';
    for (var r = 0; r < 5; r++) h += '<div class="rg" style="--dl:-' + (r * .48).toFixed(2) + 's"></div>';
    var cols = ['#fff', '#f0c8ff', '#ffc531', '#9fe8ff'], runes = ['ᛃ', 'ᛉ', 'ᛊ', 'ᛟ', 'ᚱ', 'ᛗ'];
    for (var i = 0; i < 46; i++) { var a = Math.round(Math.random() * 360), d = (.9 + Math.random() * 1.3).toFixed(2), dl = (Math.random() * 2.2).toFixed(2);
      h += '<div class="st" style="--a:' + a + 'deg"><i style="--d:' + d + 's;--dl:-' + dl + 's;--c:' + cols[i % cols.length] + '"></i></div>'; }
    for (var k = 0; k < 7; k++) h += '<div class="st" style="--a:' + Math.round(k * 51 + Math.random() * 30) + 'deg"><b style="--d:' + (2 + Math.random() * 1.4).toFixed(2) + 's;--dl:-' + (Math.random() * 3).toFixed(2) + 's">' + runes[k % runes.length] + '</b></div>';

    h += '<div class="core"></div><video class="jo jov" muted loop playsinline autoplay preload="auto" poster="' + F('vortex-joe-poster') + '">' + jjClipSrc(GB + 'story-vortex-joe', AV) + '</video>';   // Joe floating through the vortex (the Seedance clip, keyed); Chrome takes the VP9 alpha first
    t.innerHTML = h; document.getElementById('jjst').appendChild(t);
    var jv = t.querySelector('.jov'); if (jv) { var jp = jv.play(); if (jp && jp.catch) jp.catch(function () {}); }
    setTimeout(function () { t.classList.add('on'); }, 30);
  }
  function tunnelOut(){ clearTimeout(tunnelPulseT); var pf = document.getElementById('jjst-fade'); if (pf) pf.classList.remove('pulse'); if (!tunnelEl) return; var t = tunnelEl; tunnelEl = null; t.remove(); }
  function toBlack(){                                      // 'anyway.' → black. From here #jjst is only the banner: the black is the fade layer, then the loader's own
    var f = document.getElementById('jjst-fade'); f.style.transition = 'opacity .7s ease'; f.style.opacity = '1';
    if (sparkEl) sparkEl.classList.remove('on');             // the forest's motes go with the forest (they were drifting over the loader)
    endLock = true;                                          // from the black on there is no pausing or stepping: the loader is next (s89)
    [document.getElementById('jjst-skipcta'), document.getElementById('jjst-ctl')].forEach(function (e) { if (e) { e.style.transition = 'opacity .5s ease'; e.style.opacity = '0'; e.style.pointerEvents = 'none'; } });
    sfxFlash(true, 680);   // s114: the hand-over bloom's sound (peaks ~0.8s after 'now...'); s115: the fairies stay in, under the tunnel
    clearTimeout(endFlashT); var hv = fxDesk(); endFlashT = setTimeout(function () { if (!ending) return; if (!(hv && fxShot('ffar-handover', { cover:true, z:10, after:f }))) bloom({ kind:'portal', in:260, hold:80, out:1500, peak:.85, core:1.3 }); }, hv ? 350 : 540);   // s106: the Blender hand-over (peak .45s in) where it plays; the s105 bloom otherwise   // s105: the portal's last bloom — it peaks as the tunnel comes up under the black, and decays into it
    clearTimeout(endT); endT = setTimeout(function () {
      if (!ending) return;                                   // stepped back out before the black landed: leave the scene alone
      ['jjst-bgwrap', 'jjst-layers', 'jjst-dark', 'jjst-night'].forEach(function (id) { var e = document.getElementById(id); if (e) e.style.visibility = 'hidden'; });
      camDetach(true); orbDrop(); [].forEach.call(document.querySelectorAll('#jjst-bgwrap video, #jjst-layers video'), function (v) { v.pause(); var i = pausedVideos.indexOf(v); if (i >= 0) pausedVideos.splice(i, 1); });   // s108: the forest rig's plates (mist, foliage, shade, vignette) are not in those four: they stayed over the loader as a black mist and hid it
      document.getElementById('jjst').style.background = 'transparent';
      tunnelIn();
      requestAnimationFrame(function () { requestAnimationFrame(function () { if (!ending || !tunnelEl) return;   // s104: the black lifts only once the tunnel's first frame is up (its first raster used to stall ~0.4s, then it jumped in half-faded)
        f.style.transition = 'opacity 1.1s ease'; f.style.opacity = VX2 ? '.06' : '.75';   /* s145: the painted vortex is not dimmed */   // Joe falls through the portal under a 75% black
        clearTimeout(tunnelPulseT); tunnelPulseT = setTimeout(function () { if (tunnelEl && !VX2) f.classList.add('pulse'); }, 1150); }); });   // then it breathes lighter / darker
    }, 800);
  }
  function endLoaderIn(){ vortexBed(0, 2500); forestEnd('phrase');   // s115: the fairies finish on the end of their phrase (s117: planned from the Replay CTA; this only catches a skipped CTA)               // s113: the vortex fades under the loader
    if (!ending || !(window.JJLoader && window.JJLoader.start)) return;
    var o = evoOpts(); o.variant = 'pill'; o.layout = 'mystory'; o.bg = GB + 'loader-pill-mystory.webp'; o.assets.push(o.bg);   // Joe's pill loader (Sep '26)
    o.title = 'To be continued\u2026'; o.msg1 = 'To be continued'; o.msg2 = 'Hint: Check the achievements to find out more'; o.minTime = 7000; o.maxWait = 90000;
    MS.endAsk = MS.endOk = false; var msTok = ++MS.tok;   /* s130 */
    o.driver = function (onP, onD0) { var onD = function () { MS.endAsk = true; if (MS.endOk) onD0(); else MS.held = true; }; endDrv = { onP: onP, raw: onD0, onD: onD }; var p = 0;
      var iv = setInterval(function () { p = Math.min(.92, p + .018); onP(p); if (p >= .92) clearInterval(iv); }, 150);   // the row paints in at a steady pace while the line types
      if (endTyped) onD(); };
    o.onReady = function () { if (ending) liftStory(); };   // (s98: a replay pressed while the loader was closing must not lift the story it restarted)
    JJLoader.start(o);
    setTimeout(function () { if (!ending || msTok !== MS.tok) return;   /* s130: the cover is fully up → My Story wakes under it; the loader ends on its own clock unless 'ready' is later than that */
      msWake(function () { MS.endOk = true; if (MS.endAsk && endDrv && endDrv.raw) endDrv.raw(); }, 300, false); }, 1000);
    setTimeout(function () { if (ending && window.jjSay) window.jjSay('that-was-something', { wait: true }); }, 1400);   // s116: Joe's cleaned-up 'that was something' (was 'wrong-story'); it ducks the music as voice (nar-)   // (s98: dropped if Replay Storytime was pressed first)   // 'wrong story' over the evolution loader; 'let there be Joe' queues behind it in My Story
    var ld = document.getElementById('jjld'); if (ld) ld.style.zIndex = '1999';   // under #jjst (z 2000): the banner reads over it
    releaseAfterMusic();                                    // s117: My Story's music (the site's ambient) only once the fairies are silent — no overlap
    var f = document.getElementById('jjst-fade');
    if (tunnelEl) { clearTimeout(tunnelPulseT); f.classList.remove('pulse'); f.style.transition = 'opacity .7s ease'; f.style.opacity = '1'; setTimeout(function () { tunnelOut(); f.style.transition = 'opacity 1s ease'; f.style.opacity = '0'; }, 1000); }   // full black, held a beat, and only then the loader's scene   // the tunnel closes to black first
    else { f.style.transition = 'opacity 1s ease'; f.style.opacity = '0'; }   // the loader's own black is underneath: one continuous black, then its scene eases in
  }
  function resetEnd(){ msSleep();   /* s130: back into the tale after a wake (the Replay banner): My Story sleeps again */
    if (ending) vortexBed(0, 600);                                     // stepping back from the ending: the forest returns, the black lifts, the loader (if up) goes
    tunnelOut(); clearTimeout(endFlashT); clearTimeout(endDoneT); ending = false; endLock = false; var ec = document.getElementById('jjst-ctl'); if (ec) { ec.style.opacity = ''; ec.style.pointerEvents = ''; } clearTimeout(endT); var f = document.getElementById('jjst-fade'); if (f) { f.style.transition = 'opacity .4s ease'; f.style.opacity = '0'; }
    ['jjst-bgwrap', 'jjst-layers', 'jjst-dark', 'jjst-night'].forEach(function (id) { var e = document.getElementById(id); if (e) e.style.visibility = ''; });
    var sg = document.getElementById('jjst'); if (sg) sg.style.background = ''; if (sparkEl) sparkEl.classList.add('on');
    var ld = document.getElementById('jjld'); if (ld) ld.remove(); endDrv = null; endTyped = false;
    [capEl, prog, document.getElementById('jjst-skipcta')].forEach(function (e) { if (e) { e.style.opacity = ''; e.style.pointerEvents = ''; } });
  }
  var endDoneT = 0;
  function endPartOneDone(keepCap){                        // the last line has been read: the banner goes, the loader finishes on its own clock, My Story is under it   // keepCap (s98): the banner is the Replay CTA and stays over the loader
    endTyped = true;
    [keepCap ? null : capEl, prog, document.getElementById('jjst-skipcta'), document.getElementById('jjst-ctl')].forEach(function (e) { if (e) { e.style.transition = 'opacity 1s ease'; e.style.opacity = '0'; e.style.pointerEvents = 'none'; } });
    clearTimeout(endDoneT); if (endDrv) endDoneT = setTimeout(function () { if (endDrv) endDrv.onD(); }, 6500); else liftStory(); }   // the loader keeps its usual length

  /* ---- s98 · Replay Storytime: the final banner turns into the CTA while the vortex spins (Joe, 2026-09-25) ----
     A beat after the last line lands, its words blow away as motes, the scroll takes an arcane purple / gold light, runes and
     sparks orbit it (behind the scroll on the far side, over it on the near side) and 'Replay Storytime' writes itself in with
     a shimmer. The whole banner is the button (role=button, Enter / Space). It holds over the vortex for CTA_HOLD, then the
     "To be continued" loader comes up under it as before and My Story follows; it goes with the story when that lifts.
     Pressed: a burst, the black, everything the ending changed is put back (resetEnd), the cave is rebuilt under the black and
     the iris opens on it as it did the first time; line 1 starts on the original beat. Reduced motion: a plain fade to the CTA. */
  var CTA_HOLD = 7000;
  var ctaOn = false, ctaT = null, replaying = false, ctaOrb = null, ctaB = null, ctaF = null;
  var vxWaited = false;
  function endCta(){
    if (!ending) { endLoaderIn(); endPartOneDone(); return; }
    if (VX2 && tunnelEl && !vxWaited) { vxWaited = true; sched(endCta, 3000); return; }   // s145: painted Joe gets his moment before the Replay button  // stepped straight into the last line (no tunnel): the old hand-over
    ctaIn();
    unsched(ctaT); ctaT = sched(function () { ctaT = null; if (!ending || replaying) return; endLoaderIn(); endPartOneDone(true); }, CTA_HOLD);
  }
  function ctaHot(on){ var st = document.getElementById('jjst'); if (st) st.classList.toggle('cta-hot', !!on && ctaOn); }
  function ctaWire(){ if (capEl._cta) return; capEl._cta = true;
    capEl.addEventListener('pointerenter', function () { ctaHot(true); });
    capEl.addEventListener('pointerleave', function () { capEl.classList.remove('cta-down'); ctaHot(document.activeElement === capEl && capEl.matches(':focus-visible')); });
    capEl.addEventListener('focus', function () { ctaHot(true); });
    capEl.addEventListener('blur', function () { ctaHot(capEl.matches(':hover')); });
    capEl.addEventListener('pointerdown', function () { if (ctaOn) capEl.classList.add('cta-down'); });
    capEl.addEventListener('pointerup', function () { capEl.classList.remove('cta-down'); });
    capEl.addEventListener('keydown', function (e) { if (!ctaOn) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); e.stopPropagation(); replayStory(null); } });
  }
  function ctaMotes(){                                       // the finished line blows away, left to right, as motes of light
    var cr = capEl.getBoundingClientRect(), tr = textEl.getBoundingClientRect(); if (!cr.width || !tr.width) return;
    var cols = ['rgba(255,214,120,.95)', 'rgba(200,140,255,.95)', 'rgba(255,255,255,.9)', 'rgba(150,215,255,.9)'], k = Math.max(.6, cr.width / 1200), h = '';
    for (var i = 0; i < 80; i++) { var fx = Math.random(), x = tr.left - cr.left + fx * tr.width, y = tr.top - cr.top + Math.random() * tr.height;
      h += '<i class="jjst-ctamote jjst-ctax" style="left:' + x.toFixed(0) + 'px;top:' + y.toFixed(0) + 'px;--s:' + ((6 + Math.random() * 12) * k).toFixed(1) + 'px;--c:' + cols[i % 4] +
        ';--dx:' + ((Math.random() * 2 - .5) * cr.width * .07).toFixed(0) + 'px;--dy:' + (-(.35 + Math.random() * .95) * cr.height).toFixed(0) + 'px;--d:' + (1.1 + Math.random() * .9).toFixed(2) + 's;--dl:' + (fx * .5 + Math.random() * .15).toFixed(2) + 's"></i>'; }
    capEl.insertAdjacentHTML('beforeend', h);
  }
  function ctaOrbit(){                                       // runes + sparks on a tilted ellipse round the scroll; the near half rides over it, the far half behind
    var RUNES = ['ᛃ', 'ᛉ', 'ᛊ', 'ᛟ', 'ᚱ', 'ᛗ', 'ᚨ', 'ᛞ'], items = [], i;
    for (i = 0; i < 8; i++) items.push({ rn: RUNES[i], off: i / 8 * Math.PI * 2, r: 1, k: 1, o: 1 });
    for (i = 0; i < 14; i++) items.push({ off: Math.random() * Math.PI * 2, r: .84 + Math.random() * .32, k: .7 + Math.random() * .7, o: .55 + Math.random() * .45 });
    items.forEach(function (it) { var e = document.createElement(it.rn ? 'b' : 'i'); e.className = it.rn ? 'rn' : 'spk'; if (it.rn) e.textContent = it.rn; it.el = e; it.front = null; });
    var o = ctaOrb = { items: items, a: 0, sp: 1, rk: 1, fade: 0, t: performance.now(), burst: false };
    (function loop(now){ if (ctaOrb !== o || !ctaF || !ctaF.isConnected) return;
      var dt = Math.min(64, now - o.t); o.t = now;
      if (!storyPaused) { var hot = document.getElementById('jjst').classList.contains('cta-hot'), tgt = o.burst ? 9 : hot ? 3.4 : 1;   // hover: the runes spin faster
        o.sp += (tgt - o.sp) * Math.min(1, dt / (o.burst ? 120 : 320)); o.a += dt * .00038 * o.sp;
        if (o.burst) { o.rk += dt * .0012; o.fade = Math.max(0, o.fade - dt / 600); } else o.fade = Math.min(1, o.fade + dt / 1400); }
      ctaSync(); var W = ctaF.offsetWidth, H = Math.min(ctaF.offsetHeight, W * 200 / 1295);   // (H: the art's height — on phones a long line stretches the banner's box)
      items.forEach(function (it) { var a = o.a * it.k + it.off, c = Math.cos(a), sn = Math.sin(a), d = (sn + 1) / 2, front = sn > 0;
        var x = W / 2 + c * W * .515 * it.r * o.rk, y = H / 2 + sn * H * .62 * it.r * o.rk - c * H * .14;
        if (front !== it.front) { (front ? ctaF : ctaB).appendChild(it.el); it.front = front; }
        it.el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(-50%,-50%) scale(' + (.62 + .55 * d).toFixed(3) + ')' + (it.rn ? ' rotate(' + (a * 14).toFixed(1) + 'deg)' : '');
        it.el.style.opacity = (it.o * o.fade * (.3 + .7 * d)).toFixed(3); });
      requestAnimationFrame(loop); })(performance.now());
  }
  function ctaSync(){                                       // the two orbit layers keep the banner's own box (a line too long for a phone's banner makes it taller than its art)
    if (!ctaB || !ctaF || !capEl) return; var h = capEl.offsetHeight + 'px'; if (ctaB.style.height === h) return;
    [ctaB, ctaF].forEach(function (n) { n.style.height = h; n.style.aspectRatio = 'auto'; }); }
  window.addEventListener('resize', function () { if (ctaOn) ctaSync(); });
  function ctaIn(){
    if (ctaOn || !capEl || !textEl) return; ctaOn = true; ctaWire(); vortexBed(.06, 1500); forestEnd('phrase');   /* s117: the fairies' ending is planned from the Replay CTA, so they are done before My Story's music */   // s113: the vortex bed sits softly under the CTA
    var st = document.getElementById('jjst'), rm = CAM_STILL;
    if (typeFF) typeFF(); var nx = textEl.querySelector('.jjst-nx'); if (nx) nx.remove();
    capEl.classList.toggle('rm', rm); st.classList.toggle('cta-rm', rm);
    if (!rm) ctaMotes();
    capEl.classList.add('cta');                              // the line fades, blurs and spreads as its motes rise
    setTimeout(function () { if (!ctaOn) return; capEl.classList.add('cta-small'); st.classList.add('cta-small');   /* then it draws in to a big button, banners and all (Joe: 'too big', s99) */
      var t0 = performance.now(); (function tr() { ctaSync(); if (performance.now() - t0 < 1100 && ctaOn) requestAnimationFrame(tr); })(); }, rm ? 0 : 650);
    var sh = document.createElement('div'); sh.className = 'jjst-ctasheen jjst-ctax'; capEl.appendChild(sh);
    var tn = document.createElement('div'); tn.className = 'jjst-ctatint jjst-ctax'; capEl.appendChild(tn);
    capEl.insertAdjacentHTML('beforeend', '<span class="jjst-ctains l jjst-ctax" aria-hidden="true"><i style="--i:2">ᛟ</i><i style="--i:1">ᚱ</i><i style="--i:0">ᛗ</i></span><span class="jjst-ctains r jjst-ctax" aria-hidden="true"><i style="--i:0">ᛗ</i><i style="--i:1">ᚱ</i><i style="--i:2">ᛟ</i></span>');   // runes inscribed either side of the words light up, like the portal's
    var WORD = 'Replay Storytime', h = '<span class="wr">';
    for (var i = 0; i < WORD.length; i++) h += '<i style="--i:' + i + '">' + (WORD.charAt(i) === ' ' ? ' ' : WORD.charAt(i)) + '</i>';
    var t = document.createElement('div'); t.className = 'jjst-ctat jjst-ctax'; t.setAttribute('aria-hidden', 'true');
    t.innerHTML = h + '</span><span class="sh">' + WORD + '</span><b class="qp"></b>'; capEl.appendChild(t);
    capEl.setAttribute('role', 'button'); capEl.setAttribute('tabindex', '0'); capEl.setAttribute('aria-label', 'Replay Storytime'); capEl.setAttribute('data-cursor', 'hover');
    ctaB = document.createElement('div'); ctaB.id = 'jjst-ctab'; ctaB.className = 'jjst-ctabox'; ctaB.setAttribute('aria-hidden', 'true'); ctaB.innerHTML = '<div class="glow"></div><div class="rim"><i></i></div>';
    ctaF = document.createElement('div'); ctaF.id = 'jjst-ctaf'; ctaF.className = 'jjst-ctabox'; ctaF.setAttribute('aria-hidden', 'true');
    capEl.parentNode.insertBefore(ctaB, capEl); capEl.parentNode.insertBefore(ctaF, capEl.nextSibling); ctaSync();
    if (capEl.matches(':hover')) ctaHot(true);
    var qd = WORD.length * 62 + 700;                          // the write-in: one letter every 62ms, each landing over 1s; a spark of light leads it
    sched(function () { if (ctaOn && ctaB) { ctaB.classList.add('on'); capEl.classList.add('cta-lit'); } }, rm ? 0 : 250);
    sched(function () { if (!ctaOn) return; var wr = t.querySelector('.wr');
      t.style.setProperty('--q0', wr.offsetLeft + 'px'); t.style.setProperty('--q1', (wr.offsetLeft + wr.offsetWidth) + 'px'); t.style.setProperty('--qd', qd + 'ms');
      capEl.classList.add('cta-in'); }, rm ? 200 : 800);
    sched(function () { if (ctaOn) textEl.textContent = ''; }, 1400);
    if (!rm) { sched(function () { if (ctaOn) capEl.classList.add('cta-shine', 'cta-wave'); }, 800 + qd + 300); ctaOrbit(); }
  }
  function ctaBurst(e){ if (!ctaF) return; sfxFlash(false);   // s114: the Replay press burst
    var r = ctaF.getBoundingClientRect(), x = r.width / 2, y = r.height / 2;
    if (e && e.clientX) { x = e.clientX - r.left; y = e.clientY - r.top; }   // from the press (the keyboard: the middle)
    var cols = ['rgba(255,214,120,.95)', 'rgba(200,140,255,.95)', 'rgba(255,255,255,.95)', 'rgba(150,215,255,.9)'], h = '<i class="fl"></i>', reach = Math.max(r.width * .45, 220);
    for (var i = 0; i < 52; i++) { var a = Math.random() * Math.PI * 2, d = (.25 + Math.random() * .75) * reach;
      h += '<i class="sp" style="--s:' + (5 + Math.random() * 10).toFixed(1) + 'px;--c:' + cols[i % 4] + ';--dx:' + (Math.cos(a) * d).toFixed(0) + 'px;--dy:' + (Math.sin(a) * d * .55).toFixed(0) + 'px;--d:' + (.7 + Math.random() * .6).toFixed(2) + 's"></i>'; }
    var b = document.createElement('div'); b.className = 'jjst-ctaburst'; b.style.setProperty('--x', x.toFixed(0) + 'px'); b.style.setProperty('--y', y.toFixed(0) + 'px'); b.innerHTML = h;
    ctaF.appendChild(b); void b.offsetWidth; requestAnimationFrame(function () { b.classList.add('go'); });
    if (ctaOrb) ctaOrb.burst = true;                        // the runes whip round and fly out
  }
  function ctaOut(){                                         // the CTA taken down completely (the replay, under the black)
    ctaOn = false; ctaOrb = null; unsched(ctaT); ctaT = null;
    var st = document.getElementById('jjst'); if (st) st.classList.remove('cta-hot', 'cta-rm', 'cta-small');
    [ctaB, ctaF].forEach(function (n) { if (n && n.parentNode) n.remove(); }); ctaB = ctaF = null;
    if (!capEl) return; if (document.activeElement === capEl) capEl.blur();
    capEl.querySelectorAll('.jjst-ctax').forEach(function (n) { n.remove(); });
    capEl.classList.remove('cta', 'cta-lit', 'cta-in', 'cta-shine', 'cta-wave', 'cta-go', 'cta-down', 'rm', 'cta-small');
    ['role', 'tabindex', 'aria-label', 'data-cursor'].forEach(function (a) { capEl.removeAttribute(a); });
    capEl.style.pointerEvents = '';
  }
  function ctaOff(){ if (!ctaOn) return; ctaOn = false; ctaHot(false); if (capEl) { capEl.style.pointerEvents = 'none'; capEl.removeAttribute('tabindex'); } }   // My Story is lifting: the CTA goes with the story
  function replayStory(e){
    if (!ctaOn || replaying || !capEl) return; replaying = true;
    unsched(ctaT); ctaT = null; clearTimeout(endDoneT);
    var f = document.getElementById('jjst-fade'), rm = CAM_STILL;
    capEl.classList.remove('cta-down'); capEl.classList.add('cta-go'); capEl.style.pointerEvents = 'none'; ctaHot(false);
    if (!rm) ctaBurst(e);
    setTimeout(function () { f.classList.remove('pulse'); f.style.transition = 'opacity .7s ease'; void f.offsetWidth; f.style.opacity = '1';   // to black
      capEl.style.transition = 'opacity .6s ease'; capEl.style.opacity = '0'; if (ctaB) { ctaB.style.transition = 'opacity .6s ease'; ctaB.style.opacity = '0'; } }, rm ? 0 : 420);
    setTimeout(function () { if (ctaF) { ctaF.style.transition = 'opacity .6s ease'; ctaF.style.opacity = '0'; } }, rm ? 0 : 800);
    setTimeout(ctaRestart, rm ? 900 : 1450);
  }
  function ctaRestart(){
    var st = document.getElementById('jjst'), f = document.getElementById('jjst-fade'), b = document.getElementById('jjst-black'), ctl = document.getElementById('jjst-ctl');
    if (!st || !st.isConnected) { replaying = false; return; }
    if (storyPaused) resumeStory();
    resetEnd(); ctaOut();                                    // the tunnel, the loader, the hidden forest, the transport: all as the ending found them
    f.style.transition = 'none'; f.style.opacity = '1';      // …but the black holds while the cave is rebuilt under it
    [capEl, prog, ctl].forEach(function (e) { if (e) { e.style.transition = 'none'; e.style.opacity = '0'; e.style.pointerEvents = 'none'; } });
    if (fill) { unsched(progT); fill.style.transition = 'none'; fill.style.width = '0'; }
    textEl.textContent = ''; textEl.style.height = '';
    var A = window.jjAudio; if (A) { A.takeover = true;      // the tale takes the sound back from the site's ambient (as at mount); nothing new starts if it is muted
      try { var amb = A.ambient; if (amb && amb.playing()) { amb.fade(amb.volume(), 0, 600); setTimeout(function () { try { if (A.takeover && amb.playing()) amb.pause(); } catch (x) {} }, 650); } } catch (x) {} }
    var s0 = partBounds()[0];
    jumpScene(s0, T.firstTypeAt - T.revealAt + 400);         // the shot now (under the black), its line on the first time's beat
    if (window.jjStory && window.jjStory.ctlSync) window.jjStory.ctlSync();
    b.style.transition = 'none'; b.style.width = b.style.height = '0'; b.style.display = ''; void b.offsetWidth;   // the iris, closed…
    f.style.transition = 'opacity .3s ease'; f.style.opacity = '0';                                                  // (black on black: nothing shows)
    setTimeout(revealFromBlack, 400);                                                                                 // …opens as it did the first time
    setTimeout(function () { [capEl, prog, ctl].forEach(function (e) { if (e) { e.style.transition = 'opacity .8s ease'; e.style.opacity = ''; e.style.pointerEvents = ''; } }); }, 400 + T.boxFadeAt - T.revealAt);
    setTimeout(function () { [capEl, prog, ctl].forEach(function (e) { if (e) e.style.transition = ''; }); f.style.transition = ''; replaying = false; }, 400 + T.firstTypeAt - T.revealAt + 200);
  }

  /* ---- typing + scene runner ---- */
  var textEl, capEl, prog, fill;
  /* the bar rolls continuously: it eases to the scene's start, then runs linearly to its end over the
     scene's expected length (typing + reading), like a video's playhead — no jumps between captions */
  function pauseMs(s){ return (s.triggers || []).reduce(function (a, t) { return a + (t.pause || 0); }, 0); }
  function typeDuration(text, k){ var d = 0; k = k || 1;   /* s124 · k: a scene's own typing pace (typeK: Storytime 2 speeds a long line up so none types for over 2.5s; Part One sets none) */
    for (var i = 1; i <= text.length; i++) { var ch = text.charAt(i - 1), t = T.typeSpeed;
      if (ch === '…') t = T.pauseEllipsis;
      else if (ch === '.') { if (text.charAt(i) === '.') t = T.typeSpeed; else if (text.charAt(i - 2) === '.') t = T.pauseEllipsis; else t = T.pauseDot; }
      else if (ch === '!' || ch === '?') t = T.pauseDot;
      d += t * k; } return d; }
  var progT = null;
  function firstCastle(){ for (var si = 0; si < SCENES.length; si++) if (SCENES[si].comp === 'castle1') return si; return 0; }
  function partBounds(){ if (XP) return [0, SCENES.length - 1]; var a = PART2 ? firstCastle() : 0, b = a; while (b < SCENES.length - 1 && !SCENES[b].end) b++; return [a, b]; }   // this part's first and last scene
  function rollProgress(i, ms){ var pb = partBounds(), N = pb[1] - pb[0] + 1, ii = i - pb[0]; unsched(progT);
    fill.style.transition = 'width .35s ease'; fill.style.width = (ii / N * 100) + '%';           // ease to the scene's start (matters on Previous)
    progT = sched(function () { fill.style.transition = 'width ' + ms + 'ms linear'; fill.style.width = ((ii + 1) / N * 100) + '%'; }, 380); }
  var typeFF = null;                                       // while a line is typing: call to land it instantly
  var nextOn = true;                                        // off for a line that ends a part (nothing to go on to)
  var NEXT_HTML = UI2 ? '<span class="jjst-nx ui" data-cursor="hover" role="button" aria-label="Next"><i class="jjst-pg"><b></b></i>Next<svg class="arw" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1h10L6 7z"/></svg></span>' : '<span class="jjst-nx" data-cursor="hover" role="button" aria-label="Next scene"> - Next<i class="jjst-pg"><b></b></i></span>';   /* s147: ?ui=2, the painted scenes’ Next */   // s120: + a faint progress line under the hint (how long until the line moves on by itself)
  /* s120 · the progress line: purely a picture of the wait that is already scheduled (read-only: it starts no timer and changes none). A WAAPI animation inside
     #jjst, so a pause holds it with everything else; the hint is rebuilt with every line, so Prev / Next start it afresh. */
  function narProg(ms){ var b = textEl && textEl.querySelector('.jjst-nx .jjst-pg b'); if (!b || !b.animate || !(ms > 300)) return; try { b.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: ms, easing: 'linear', fill: 'forwards' }); } catch (e) {} }
  function typeText(text, triggers, done, tk){ tk = tk || 1;
    var trs = (triggers || []).map(function (tr) { var k = text.indexOf(tr.at); return { idx: k < 0 ? -1 : k + tr.at.length, comp: tr.comp, fx: tr.fx, pause: tr.pause || 0, fired: false }; });
    var holdMs = 0;                                          // a trigger's `pause`: the line waits here (the picture is doing the talking)
    /* measure the finished line first, then lock the block to that height: the banner centres a
       block of the final size, so the text ends up in the middle and nothing shifts while typing */
    textEl.style.height = 'auto'; textEl.style.visibility = 'hidden'; textEl.textContent = text; if (nextOn) textEl.insertAdjacentHTML('beforeend', NEXT_HTML);   // measured with its NEXT, so the block never grows when it lands
    textEl.style.height = textEl.offsetHeight + 'px'; textEl.style.visibility = '';
    /* s122 (Joe: a line shifted as it typed, when a growing word wrapped onto the next line): the WHOLE line is laid out from the first character (the part still to
       come is there but unseen, and so is the Next hint), so every word is already where it will end up and nothing moves or resizes while it types */
    textEl.innerHTML = '<span class="jjst-ty"></span><span class="jjst-tr" style="visibility:hidden" aria-hidden="true"></span>' + (nextOn ? NEXT_HTML : ''); var tyEl = textEl.firstChild, trEl = tyEl.nextSibling; trEl.textContent = text;
    var i = 0; unsched(textEl._tw); unsched(textEl._hold);
    var finished = false;
    function fireTo(n){ for (var j = 0; j < trs.length; j++) { if (!trs[j].fired && trs[j].idx >= 0 && n >= trs[j].idx) { trs[j].fired = true; if (trs[j].comp) setComp(trs[j].comp); if (trs[j].fx) runFx(trs[j].fx); holdMs += trs[j].pause; } } }
    function finish(){ if (finished) return; finished = true; unsched(textEl._tw); typeFF = null;
      if (tyEl.parentNode === textEl) { tyEl.textContent = text; trEl.textContent = ''; } else { textEl.textContent = text; if (nextOn) textEl.insertAdjacentHTML('beforeend', NEXT_HTML); }
      fireTo(text.length); var h = holdMs; holdMs = 0;
      if (nextOn) { var nx = textEl.querySelector('.jjst-nx'); if (nx) setTimeout(function () { if (nx.parentNode) nx.classList.add('on'); }, h + 60); }   // fades in (never typed) once the line and its pause are done; the banner's own press moves on
      if (done) { if (h) textEl._hold = sched(done, h); else done(); } }   // s104: _hold is dropped by a jump (a line's closing pause used to fire after Prev / Next and restart the new line, or send L8's tap prompt back)           // a pause on the line's last word still holds the picture
    typeFF = finish;
    function step(){
      i++; if (tyEl.parentNode === textEl) { tyEl.textContent = text.slice(0, i); trEl.textContent = text.slice(i); } else textEl.textContent = text.slice(0, i);
      fireTo(i);
      if (i >= text.length) { finish(); return; }
      var ch = text.charAt(i - 1), delay = T.typeSpeed;
      if (ch === '…') delay = T.pauseEllipsis;
      else if (ch === '.') { if (text.charAt(i) === '.') delay = T.typeSpeed; else if (text.charAt(i - 2) === '.') delay = T.pauseEllipsis; else delay = T.pauseDot; }
      else if (ch === '!' || ch === '?') delay = T.pauseDot;
      delay *= tk;
      if (holdMs) { delay += holdMs; holdMs = 0; }
      textEl._tw = sched(step, delay);
    }
    textEl._tw = sched(step, T.typeSpeed * tk);
  }
  /* 'press the orb': a pulsing ring and a label over the layer; pressing it moves the tale on */
  function tapPrompt(key, go){ var r = layerRecs[key]; if (!r || !r.el) { go(); return; } var el = r.el, st = document.getElementById('jjst'), sr = st.getBoundingClientRect(), b = el.getBoundingClientRect();
    var t = document.createElement('button'); t.type = 'button'; t.className = 'jjst-tapme'; t.setAttribute('data-cursor', 'hover'); t.setAttribute('aria-label', 'Press the orb');
    t.style.left = (b.left - sr.left + b.width / 2) + 'px'; t.style.top = (b.top - sr.top + b.height / 2) + 'px'; t.style.width = t.style.height = (Math.max(b.width, b.height) * 1.5) + 'px';
    t.innerHTML = '<span>Press the orb</span>'; st.appendChild(t); capTap('Press the orb \u2191');   // s146 (?ui=2): the prompt in the box too
    /* s105 · the feel of the 3D test: while it waits the orb breathes a halo; hover lifts it and swells the light; a press pops it, throws sparkles and a
       soft ring, and a gold bloom from the orb fills the frame — the next line starts under its peak (a clean cut to the portal shot, no crossfade) */
    var halo = document.createElement('div'); halo.className = 'jjst-orbhalo'; var hs = Math.max(el.offsetWidth, el.offsetHeight || el.offsetWidth) * 2.6;
    halo.style.cssText = 'left:' + (el.offsetLeft + el.offsetWidth / 2 - hs / 2).toFixed(0) + 'px;top:' + (el.offsetTop + (el.offsetHeight || el.offsetWidth) / 2 - hs / 2).toFixed(0) + 'px;width:' + hs.toFixed(0) + 'px;height:' + hs.toFixed(0) + 'px';
    var vis = function () { return orbVis() || el; };   // s106: the Blender orb when it is up (the ground shadow stays put as it lifts)
    el.parentNode.insertBefore(halo, el); el.classList.add('orbwait'); vis().classList.add('orbwait'); requestAnimationFrame(function () { halo.classList.add('on'); });
    var hov = function (on) { vis().classList.add('orbwait'); vis().classList.toggle('orbhov', on); el.classList.toggle('orbhov', on); halo.classList.toggle('hov', on); };
    t.addEventListener('pointerenter', function () { hov(true); }); t.addEventListener('pointerleave', function () { hov(false); });
    t.addEventListener('focus', function () { hov(true); }); t.addEventListener('blur', function () { hov(false); });
    t.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); t.remove(); hov(false); capTap('');
      var p = stagePt(el, .5, .5);
      if (!p) { halo.remove(); go(); return; }
      if (!CAM_STILL) vis().animate([{ scale: '1' }, { scale: '1.3', offset: .3 }, { scale: '.92', offset: .62 }, { scale: '1.04', offset: .82 }, { scale: '1' }], { duration: 560, easing: 'ease-out' });
      halo.classList.add('hov'); if (!orbOnce('tap', [.554, .468, 5, 5])) sparkBurst(p[0], p[1], 18, Math.max(p[2], 60) * 1.6); oneShot('chest-sparkle', .3);   // s106: the Blender tap flash (ring, rays, sparks) where it plays   // (reduced motion: no pop, no sparkles — the bloom is a slow warm wash)
      sfxFlash(false, CAM_STILL ? 360 : 560);   // s114: the gold bloom's peak (the Blender burst rides straight out of it: one sound)
      portalOn(PON.hit - PON.open - 1.0);   // s115: the portal's build starts with the tap (~1s before its clip): its hit lands on the runes; the fairies sink under it
      sched(function () { bloom({ kind:'gold', cover:true, x:p[0], y:p[1], in:460, hold:90, out:760, push:1.1, settle:1.05, onPeak:function () { halo.remove(); if (curAdvance !== go) return; bloomCut = true; go(); bloomCut = false;
        var no = layerRecs.orb, np = no && stagePt(no.el, .5, .5); if (np) fxShot('ffar-burst', { x: np[0], y: np[1], size: (document.getElementById('jjst').clientWidth || innerWidth) * 1.8, from: .3 }); } }); }, CAM_STILL ? 0 : 200); }); }   // s106: the Blender burst resolves the gold into the portal shot, from where the orb now is. The pop and the sparkles get a beat before the light swallows them
  var advTimer = null, curAdvance = null, curScene = 0, boxEnd = 0, beatLeave = null;    // the pending auto-advance + its manual twin; boxEnd = when this caption is due to end
  function runScene(i){
    if (i >= SCENES.length) return;
    if (UI2 && capLongest && capSceneOf(i) !== capScene) { var cs0 = curScene; curScene = i; capFit(); curScene = cs0; }   // s149: a new scene: the box takes that scene's size
    if (beatLeave) { var bl = beatLeave; beatLeave = null; try { bl(); } catch (e) {} }   // st2: the beat we are leaving tidies up (its bubble, its cards)
    var s = SCENES[i]; curScene = i; nextOn = !s.noNext; warmAhead(i); if (jumping || !musLive || i === 0) musScene(i);   // s113: the music for this line (first line, replay, ?scene=, Prev / Next)
    var slr = document.getElementById('jjst'); if (slr) { if (s.comp === 'forest1' || s.comp === 'forest2') slr.style.setProperty('--sl', '-6.469cqw'); else if (s.comp) slr.style.removeProperty('--sl'); }   // jumped in past the dismount: the scene is already backed up
    if (s.comp === 'forest6') startForce(5); else if (s.comp === 'forest5') { stopForce(false); var cs = document.getElementById('jjst'); if (cs) cs.classList.add('charged'); } else if (s.comp) stopForce(true);   // jumped in: the state each scene expects
    var qk = document.getElementById('jjst'); if (qk) qk.classList.remove('quake'); if (window.jjStory && window.jjStory.ctlSync) setTimeout(window.jjStory.ctlSync, 0);
    if (!XP && (barsEl || i === 5)) setBars(i === 5);                  // jumped in: the letterbox is on only for the ride into the forest (scene 4 raises it on 'set off', 5 drops it at the dismount)
    var readMs = s.end ? s.end.delay : ((s.read != null ? s.read : Math.max(T.readMin, s.text.length * T.readPerChar)) + (s.linger != null ? s.linger : T.linger));   // linger: time to press things, or press NEXT (s87); a scene can set its own
    boxEnd = performance.now() + typeDuration(s.text, s.typeK) + pauseMs(s) + readMs;
    rollProgress(i, typeDuration(s.text, s.typeK) + pauseMs(s) + readMs);
    var sc = (jumping && s.jumpComp) || s.comp; if (sc) setComp(sc);   // s104 · jumpComp: stepped straight into a line whose opening shot only lives under the black (L4's village) or for half a second (L5's tavern) — start on the shot it goes to
    if (s.pullAt != null) { var pl = layerRecs.pull && layerRecs.pull.el;   // the portal clip never started (a fresh build): seek to the portal already open, lift the orb, run the beats
      if (pl && !pl._went) { var seekP = function () { try { pl.currentTime = s.pullAt; } catch (x) {} };
        if (pl.readyState >= 1) seekP(); else pl.addEventListener('loadedmetadata', seekP, { once: true });
        sfxQuiet = true; try { runFx('orbUp'); runFx('pullGo'); } finally { sfxQuiet = false; } } }
    curAdvance = null;
    if (capEl && XP) { capEl.classList.toggle('xp-dim', !!(s.run && s.banner === 'dim')); capEl.classList.toggle('xp-hide', !!(s.run && !s.banner)); }   // st2-2: under a bubble the banner stays, out of focus, on the line the narration got to (st2-3: banner 'keep' = it stays as it is, in focus)
    if (s.onStart) { try { s.onStart(window.jjStory.api, jumping); } catch (e) { if (window.console) console.error('[st2] beat start', e); } }
    if (s.run) {                                             // st2 · a custom beat (a speech bubble, a choice, a cut, a hold): it owns the screen until it calls done()
      if (textEl) { unsched(textEl._tw); unsched(textEl._hold); var keepTx = ''; if (s.banner) for (var pi = i - 1; pi >= 0; pi--) if (SCENES[pi].text) { keepTx = SCENES[pi].text; break; }
        textEl.style.height = ''; textEl.textContent = keepTx; }
      var fin = false, done = function () { if (fin || curScene !== i) return; fin = true; advTimer = null; curAdvance = null; if (s.onEnd) { try { s.onEnd(window.jjStory.api); } catch (e) {} }
        if (s.end) s.end.run(); else runScene(i + 1); };
      curAdvance = s.auto ? null : done;
      try { s.run(window.jjStory.api, done, jumping); } catch (e) { done(); }
      if (window.jjStory && window.jjStory.ctlSync) setTimeout(window.jjStory.ctlSync, 0);
      return; }
    typeText(s.text, s.triggers, function () {
      var go = function () { advTimer = null; curAdvance = null; if (s.onEnd) { try { s.onEnd(window.jjStory.api); } catch (e) {} }
        if (s.end) s.end.run(); else runScene(i + 1); };
      curAdvance = go;
      if (s.waitTap) { tapPrompt(s.waitTap, go); return; }   // the scene holds (still quaking) until the visitor presses the thing
      advTimer = sched(go, readMs); narProg(readMs);
    }, s.typeK);
  }
  /* Previous / Next scene: drop whatever is pending (typing, auto-advance, village timer) and run caption i */
  function stopLayerSounds(){ Object.keys(layerRecs).forEach(function (k) { var v = layerRecs[k].el; if (v && v._howl) { var hw = v._howl; v._howl = null; try { hw.fade(hw.volume(), 0, 300); } catch (e) {} setTimeout(function () { try { hw.unload(); } catch (e2) {} }, 400); } }); playCue(null); }
  var leadT = null;
  function jumpScene(i, lead){                              // lead (s98): build the scene's shot now, start its line this much later (the replay opens the iris first)
    if (i < 0) return; fxGen++; stopLayerSounds(); sayClear(true);   // (s118: a step clears a teaching bubble caught on screen)
    if (auraEl) { auraEl.remove(); auraEl = null; } [bgWrap, layersWrap].forEach(function (w) { if (w) { w.style.transition = 'none'; w.style.transform = ''; } });   // a hard reset for prev / next (Joe: pressing them made Joe and the aura vanish)
    var keep = SCENES[i] && SCENES[i].pullAt != null && curComp === SCENES[i].comp && layerRecs.pull && layerRecs.pull.el._went;   // s104: Next from 'The orb shot…' into 'Out of his control': the portal clip is already running — it carries on (the rebuild blanked the portal for a few frames, then jumped it to 6.5s)
    sfxJump(keep);                                          // s113: a step drops the beat sounds still ringing (portal-on, the shimmer); the vortex only if the portal clip is rebuilt
    if (layersWrap && !keep) { Object.keys(layerRecs).forEach(function (k) { var r = layerRecs[k]; if (r && r.el && r.el.parentNode) r.el.remove(); if (r && r.aura && r.aura.parentNode) r.aura.remove(); }); layerRecs = {}; curComp = null; }
    var jst = document.getElementById('jjst'); if (jst) { if (!keep) jst.classList.remove('quake', 'rumble', 'charged'); capTap(''); jst.querySelectorAll('.jjst-mote, .jjst-tapme, .jjst-vortex, .jjst-bloom, .jjst-spk, .jjst-orbhalo, .jjfx-shot').forEach(function (m) { m.remove(); }); }   // (s105: a bloom / sparkles / the orb's halo caught mid-flight)
    bloomCut = false; bloomGen++; [bgWrap, layersWrap].forEach(function (w) { if (w) { w.getAnimations().forEach(function (a) { if (!(window.CSSTransition && a instanceof CSSTransition)) a.cancel(); }); w.style.transformOrigin = ''; } });
    unsched(advTimer); advTimer = null; curAdvance = null; typeFF = null; unsched(leadT); leadT = null;
    if (textEl) { unsched(textEl._tw); unsched(textEl._hold); } clearPanels();
    var pbj = partBounds(); if (i > pbj[1]) { var last = SCENES[pbj[1]]; if (last.end) last.end.run(); return; }   // past this part's last line = its ending
    if (lead) { if (SCENES[i].comp) setComp(SCENES[i].comp); leadT = sched(function () { leadT = null; runScene(i); }, lead); return; }
    jumping = true; try { runScene(i); } finally { jumping = false; }
  }
  /* the ambient music returns (My Story is about to appear) */
  function releaseAmbient(){
    try {
      var A = window.jjAudio; if (!A) return;
      A.takeover = false;
      var amb = A.ambient; if (!amb) return;
      if (!amb.playing()) amb.play();
      amb.volume(0); amb.fade(0, A.ambientTarget || 0.6, 4000);
    } catch (e) {}
  }
  var ambWait = 0;
  function releaseAfterMusic(){ clearInterval(ambWait); if (MUS.forest.id == null && !MUS.forest.tok) { if (!MS.held) { releaseAmbient(); return; } } else if (MUS.forest.endT == null) forestEnd('phrase');   /* s130: while the lift is held for My Story, the site's music waits with it */
    ambWait = setInterval(function () { if (MUS.forest.id == null && !MS.held) { clearInterval(ambWait); releaseAmbient(); } }, 100); }
  /* jump past the whole tale, straight to My Story waiting underneath */
  /* s130 · Skip under the contract. Nobody asleep (today, and always on the #my-story address): exactly as before, with the wake and lift cues sent as it goes.
     My Story dormant: the tale's sound stops at once, a black comes up over the shot (0.32 s), My Story wakes under it, and the old lift follows its 'ready'. */
  function skipStory(){ var w0 = document.getElementById('jjst');
    if (!(w0 && msDormant())) { if (!MS.woke) msWake(null, 0); skipStory0(); msSay('jj:mystory-lift'); return; }
    if (MS.skipping) return; MS.skipping = true; MS.held = true;
    sayClear(true); musOff('mountain', 800); forestEnd('quick'); vortexBed(0, 800); setCompSound(null); playCue(null); unsched(advTimer); advTimer = null; curAdvance = null; if (textEl) unsched(textEl._tw);
    var c = document.createElement('div'); c.id = 'jjst-msc'; c.style.cssText = 'position:absolute;inset:0;background:#000;opacity:0;z-index:2147483000;transition:opacity .32s ease;'; w0.appendChild(c); void c.offsetWidth; c.style.opacity = '1';
    setTimeout(function () { if (!MS.skipping) return; [].forEach.call(w0.querySelectorAll('video'), function (v) { try { v.pause(); } catch (e) {} });
      msWake(function () { MS.skipping = false; skipStory0(); msSay('jj:mystory-lift'); }, 0); MS.held = MS.skipping; }, 360);
  }
  function skipStory0(){ sayClear(true); musOff('mountain', 800); forestEnd('quick'); vortexBed(0, 800); markMyStory(); document.documentElement.classList.remove('jjst-cover'); setCompSound(null); playCue(null);
    releaseAfterMusic();
    unsched(advTimer); advTimer = null; curAdvance = null;
    if (textEl) unsched(textEl._tw);
    if (window.jjStory && window.jjStory.unlock) window.jjStory.unlock();
    window.scrollTo(0, 0);
    var w = document.getElementById('jjst');
    if (w) { w.style.transition = 'opacity .9s ease'; w.style.opacity = '0'; w.style.pointerEvents = 'none';
      setTimeout(function () { if (w.parentNode) w.remove(); }, 1000); }
  }

  /* ---- mount + choreography ---- */
  var PRELOAD = ['cav-bg','cav-dragon-loop-poster','cav-chest-closed','cav-chest-open','tav-joe-huzzah-poster','tav-crowd-poster','vil-dragon-loop-poster','vil-trogdor-well-poster','cav-dragon-1','vil-bg','vil-dragon-1','vil-dragon-2','vil-dragon-3','vil-dragon-4',
    'vil-char-1','vil-char-2','vil-char-3','vil-char-4','vil-char-5','vil-char-7','vil-pitch-drop','tav-bg-2','tav-joe','tav-char-1','tav-char-2','tav-char-3',
    'wood-bg','wood-joe-loop3-poster','wood-joe-walkup-poster','wood-joe-inspect2-poster','wood-portal-15-poster','vortex-joe-poster','wood-char-1-loop-poster','wood-char-2-loop-poster','hills-bg','mtn-bg','forest-bg','ride-loop-poster','ride-dismount2-poster','forest-far','forest-near','tav-trogdor-fly-poster','banner-snow','joe-idle','joe-step','joe-inspect','joe-recoil','joe-aura','joe-cower','joe-stepback','arch-off','orb-ground','orb-active','portal-grass','spirit-1','spirit-3','mush-purple','mush-blue','mush-yellow','shards','portal-loop-poster','cas-bg','cas-joe-sword2-poster','cas-joe-shield-poster',
    'cas-dragon-fc-poster','cas-pants2-poster','cas-hurrah2-poster','cas-smoke-poster'];
  function mount(){
    if (document.getElementById('jjst')) return;
    document.body.appendChild(wrap);
    try { new MutationObserver(moSync).observe(document.body, { attributes: true, attributeFilter: ['class'] }); } catch (e) {} moSync();   /* s132 */
    document.getElementById('jjst-sky').src = SKY;
    var docEl = document.documentElement;
    docEl.style.overflow = 'hidden'; document.body.style.overflow = 'hidden';
    window.jjStory = window.jjStory || {}; window.jjStory.unlock = function () { docEl.style.overflow = ''; document.body.style.overflow = ''; };
    /* the tale has its own sound (and a narration to come): the site's ambient track waits until the
       story hands over to My Story (or is skipped). site-footer.js honours jjAudio.takeover. */
    window.jjAudio = window.jjAudio || { sounds: [], muted: false, volume: 1.0 };
    window.jjAudio.takeover = true;
    try { var amb0 = window.jjAudio.ambient; if (amb0 && amb0.playing()) { amb0.fade(amb0.volume(), 0, 600); setTimeout(function () { try { amb0.pause(); } catch (e) {} }, 650); } } catch (e) {}
    window.jjStory.setComp = setComp;                  // debug hooks — jump straight to a comp (used by the local preview)
    window.jjStory.hold = function (n) { setComp(n); clearPanels(); };
    window.jjStory.now = function () { return { scene: curScene, comp: curComp, musT: musT(), paused: storyPaused }; };
    /* st2 · what a registered part (storytime2.js) may use of the engine */
    if (NARTHEME) { document.documentElement.classList.add('jj-nartheme'); var ncap = document.getElementById('jjst-cap'); if (ncap && !ncap.querySelector('.jjnt-pn')) ncap.insertAdjacentHTML('afterbegin', '<i class="jjnt-pn"></i><i class="jjnt-c l"></i><i class="jjnt-c r"></i>'); }
    if (!document.getElementById('jjst-bub-css')) { var bst = document.createElement('style'); bst.id = 'jjst-bub-css'; bst.textContent = BUB_CSS; document.head.appendChild(bst); }   // s118: the speech bubble's look (Part One's teaching bubbles, and all of Storytime 2's)
    window.jjStory.api = { sched: sched, unsched: unsched, setComp: setComp, F: F, GB: GB, AV: AV, T: T, oneShot: oneShot, sfx: sfxShot, flash: sfxFlash, vortex: vortexBed, bloom: bloom, stagePt: stagePt, runFx: runFx,
      layers: function () { return layerRecs; }, comps: function () { return COMP; }, paused: function () { return storyPaused; }, scene: function () { return curScene; }, comp: function () { return curComp; }, onLeave: function (fn) { beatLeave = fn; },
      stage: function () { return document.getElementById('jjst'); }, pane: function () { var p = window.JJ_LB && document.getElementById('jjst-pane'); return p || document.getElementById('jjst'); }, cap: function () { return capEl; }, capWho: capWho, capTap: capTap, ui2: function () { return UI2; }, building: function () { return dipWait; }, myStoryPrefetch: msPrefetch, pfx: pfxAdopt, next: function () { if (window.jjStory.ctlGo) window.jjStory.ctlGo(1); }, lines: function () { return SCENES.map(function (q) { return q.comp || ''; }); },   // s150: each line's shot name (where one is set), for the scene pickers
      jump: function (i) { if (endTyped || endLock) return; if (storyPaused) resumeStory(); resetEnd(); jumpScene(i); },   // s148: straight to line i (Storytime 2's ?scenes=1 picker), as Prev / Next do
      tunnel: function (on) { if (on) tunnelIn(); else tunnelOut(); }, award: function (id, o) { if (window.jjScore) window.jjScore.award(id, o); },
      finish: function () { var f = document.getElementById('jjst-fade'); if (f) { f.style.transition = 'opacity 1.2s ease'; void f.offsetWidth; f.style.opacity = '1'; } setTimeout(function () { setCompSound(null); playCue(null); msWake(function () { releaseAmbient(); liftStory(); }, 0); }, T.endFade + 300); } };
    window.addEventListener('message', function (e) { if (e.origin === location.origin && e.source === window.parent && e.data && e.data.jj === 'jump' && window.jjStory.api.jump) window.jjStory.api.jump(+e.data.scene); });   // s150: the demo's one-flow picker jumps inside the part playing (Part One or Two)
    window.jjStory.register = function (build) { window.jjStory._build = build; };   // s113: debug read-out (the local audio log)   // jump + freeze (no village auto-advance)
    bgWrap = document.getElementById('jjst-bgwrap'); layersWrap = document.getElementById('jjst-layers'); nightEl = document.getElementById('jjst-night');
    textEl = document.getElementById('jjst-cap-text'); capEl = document.getElementById('jjst-cap');
    if (UI2) { document.getElementById('jjst').classList.add('ui2'); var ucs = document.createElement('style'); ucs.id = 'jjst-ui2-css'; ucs.textContent = UI_CSS; document.head.appendChild(ucs);
      capEl.insertAdjacentHTML('afterbegin', '<i class="jjui-face"></i><b class="jjui-who"></b>'); capEl.insertAdjacentHTML('beforeend', '<div class="jjui-tap"></div>'); capWho('Narrator');
      capFit(); addEventListener('resize', capFit); if (document.fonts && document.fonts.ready) document.fonts.ready.then(capFit); }
    /* press the box: first press lands the typing line instantly, next press moves the story on */
    capEl.addEventListener('click', function (e) {
      e.stopPropagation(); if (ctaOn) { replayStory(e); return; }   // the last banner is the Replay Storytime CTA (s98)
      if (storyPaused || endLock) return;
      if (typeFF) { typeFF(); return; }
      if (advTimer !== null) { unsched(advTimer); advTimer = null;
        if (curAdvance) { var go = curAdvance; curAdvance = null; go(); } }
    });
    /* Skip: freeze everything, ask. 'X seconds left' = the rest of this caption + every caption after it. */
    function storyLeft(){ var ms = Math.max(0, boxEnd - performance.now());
      for (var k = curScene + 1; k <= partBounds()[1]; k++) { var sc = SCENES[k]; ms += typeDuration(sc.text, sc.typeK) + pauseMs(sc) + (sc.end ? sc.end.delay + 800 : (sc.read != null ? sc.read : Math.max(T.readMin, sc.text.length * T.readPerChar)) + (sc.linger != null ? sc.linger : T.linger)); }
      return Math.ceil(ms / 1000); }
    /* hover fill + pink press on the three buttons (site-footer wires these on load, before our markup exists) */
    function pressFx(el, kind) { el.setAttribute('data-jj', kind); if (el.querySelector('.jj-' + kind + '-fill')) return;
      var f = document.createElement('div'); f.className = 'jj-' + kind + '-fill'; el.insertBefore(f, el.firstChild);
      el.addEventListener('pointerdown', function (e) { var r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        var d = Math.max(Math.hypot(x, y), Math.hypot(r.width - x, y), Math.hypot(x, r.height - y), Math.hypot(r.width - x, r.height - y)) * 2.4;
        var c = document.createElement('div'); c.className = 'jj-' + kind + '-pink'; c.style.cssText = 'width:' + d + 'px;height:' + d + 'px;left:' + (x - d / 2) + 'px;top:' + (y - d / 2) + 'px;'; el.appendChild(c);
        void c.offsetWidth; c.style.transform = 'scale(1)'; setTimeout(function () { c.style.opacity = '0'; }, 600); setTimeout(function () { c.remove(); }, 1000); }); }
    pressFx(document.getElementById('jjst-skipcta'), 'btn'); pressFx(document.getElementById('jjst-back'), 'cta'); pressFx(document.getElementById('jjst-skipgo'), 'cta');
    pressFx(document.getElementById('jjst-nosnd'), 'cta'); pressFx(document.getElementById('jjst-yessnd'), 'cta');
    wireStageHits(document.getElementById('jjst'));
    window.addEventListener('jj:score:pause', function () { pauseStory(); clearHits(); document.querySelectorAll('#jjst .warm').forEach(function (n) { n.classList.remove('warm'); }); });
    window.addEventListener('jj:menu:open', function () { pauseStory(); });                       // the tale holds still behind the main menu
    function userHeld(){ var sg = document.getElementById('jjst'); return !!(sg && sg.classList.contains('user-paused')); }   /* s133 · the visitor's own pause: nothing but the visitor lifts it */
    window.addEventListener('jj:menu:close', function () { if (!ov.classList.contains('on') && !document.body.classList.contains('jj-modal-open') && !userHeld()) resumeStory(); });
    window.addEventListener('jj:score:resume', function () { if (!ov.classList.contains('on') && !userHeld()) resumeStory(); });
    /* s108: a hidden tab (or the browser pane put away) pauses the tale and picks it up on return. Chrome stops video-only clips on a hidden page by
       itself while our timers and CSS kept going, so the words, the fire stages and the figures' own moves ran on without their clips — figures
       missing or stuck when you came back */
    var visPaused = false;
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (!storyPaused && ctl.classList.contains('on') && !endLock && document.getElementById('jjst')) { visPaused = true; pauseStory(); } }
      else if (visPaused) { visPaused = false; var sg = document.getElementById('jjst'); if (sg && !sg.classList.contains('user-paused') && !ov.classList.contains('on') && !document.body.classList.contains('jj-modal-open') && !rotOn) resumeStory(); else if (rotOn) rotPaused = true; } });
    var ov = document.getElementById('jjst-skipov');
    document.getElementById('jjst-skipcta').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation();
      document.getElementById('jjst-left').textContent = storyLeft(); pauseStory(); document.body.classList.add('jj-modal-open'); moSync(); ov.classList.add('on'); });
    document.getElementById('jjst-back').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); ov.classList.remove('on'); document.body.classList.remove('jj-modal-open'); moSync(); if (!userHeld()) resumeStory(); });
    document.getElementById('jjst-skipgo').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); ov.classList.remove('on'); document.body.classList.remove('jj-modal-open'); moSync(); storyPaused = false; skipStory(); });
    ov.addEventListener('click', function (e) { e.stopPropagation(); });
    prog = document.getElementById('jjst-progress'); fill = document.getElementById('jjst-progress-fill');
    /* ---- previous / pause / next (also ← space →) ---- */
    var ctl = document.createElement('div'); ctl.id = 'jjst-ctl';
    ctl.innerHTML = '<button type="button" class="jb" id="jjst-prev" aria-label="Previous scene" data-cursor="hover"><svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM19 5v14L9 12z"/></svg></button>' +
      '<button type="button" class="jb" id="jjst-pause" aria-label="Pause" data-cursor="hover"><svg class="pa" viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg><svg class="pl" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>' +
      '<button type="button" class="jb" id="jjst-next" aria-label="Next scene" data-cursor="hover"><svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM5 5v14l10-7z"/></svg></button>' +
      (UI2 ? '<button type="button" class="jb" id="jjst-mute" aria-label="Mute" data-cursor="hover"><svg class="mn" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><svg class="mo" viewBox="0 0 24 24"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M16 9l5 6m0-6l-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' : '');
    wrap.appendChild(ctl);
    if (UI2) { var muB = document.getElementById('jjst-mute'), muSync = function () { var m = soundOff(); ctl.classList.toggle('muted', m); muB.setAttribute('aria-label', m ? 'Sound on' : 'Mute'); muB.setAttribute('aria-pressed', m); };   /* s146 · one press: all sound off (the moon's 'Mute all'), again: back on */
      muB.addEventListener('click', function (e) { e.stopPropagation(); var m = !soundOff();
        if (m) { if (window.jjSoundOff) window.jjSoundOff(); else { try { sessionStorage.setItem('jjUserMuted', '1'); } catch (x) {} if (window.jjAudio) window.jjAudio.muted = true; try { Howler.mute(true); } catch (x) {} } }
        else { if (window.jjSoundOn) window.jjSoundOn(); else { try { sessionStorage.setItem('jjUserMuted', '0'); } catch (x) {} if (window.jjAudio) window.jjAudio.muted = false; try { Howler.mute(false); } catch (x) {} } }
        muSync(); });
      document.addEventListener('click', function (e) { if (e.target && e.target.closest && e.target.closest('#jj-sound-btn, .jj-mx')) setTimeout(muSync, 60); }, true); setInterval(muSync, 1500); muSync(); }
    function placeCtl(){                                     // on the Menu's centre line; when the pills reach the middle it drops just under the nav instead (rule 24)
      var mc = document.querySelector('.menu-container'), hud = document.getElementById('jj-sc-hud'); if (!mc) return;
      var mr = mc.getBoundingClientRect(); if (!mr.height) return; var wr = wrap.getBoundingClientRect(), h = ctl.offsetHeight || 48, w = ctl.offsetWidth || 160;
      var hr = hud && hud.getBoundingClientRect(), crowd = hr && hr.width && (innerWidth / 2 + w / 2 + 14 > hr.left);
      var lg = document.querySelector('.nav-logo-link'), lr = lg && lg.getBoundingClientRect();   /* s123 · a landscape phone (short and wide): the transport sits on the nav's own line, between the logo and the pills, instead of dropping under the nav (there is no height to spare) */
      if (crowd && window.innerHeight < 430 && window.innerWidth > window.innerHeight) {
        if (lr && lr.width && hr.left - lr.right > w + 16) { ctl.style.left = Math.round((lr.right + hr.left) / 2 - wr.left) + 'px'; ctl.style.top = Math.round(mr.top + mr.height / 2 - h / 2 - wr.top) + 'px'; return; }
        var cq = capEl && capEl.getBoundingClientRect(); if (cq && cq.width && cq.left - wr.left > w + 12) { ctl.style.left = Math.round((cq.left - wr.left) / 2) + 'px'; ctl.style.top = Math.round(cq.top + cq.height / 2 - h / 2 - wr.top) + 'px'; return; } }   // (no room up there on a narrower one: bottom left, beside the banner)
      ctl.style.left = '';
      ctl.style.top = Math.round((crowd ? mr.bottom + 10 : mr.top + mr.height / 2 - h / 2) - wr.top) + 'px'; }
    /* s150 · the transport never sits on the score pills (Joe's phone, sideways in Messenger: the pills ran over Back and Pause). The placement above assumes the
       pills on the right beside a Menu; where they are not (the demo pages: no Menu, the pills on the left) it bails out and the transport stayed centred over them.
       Whatever the layout: if it still overlaps the pills, it moves beside them on their line when there is room, else just under them */
    function ctlClear(){ var hud = document.getElementById('jj-sc-hud'), hr = hud && hud.getBoundingClientRect(); if (!hr || !hr.width) return; var cr = ctl.getBoundingClientRect(); if (!cr.width) return;
      if (cr.left >= hr.right + 8 || cr.right <= hr.left - 8 || cr.top >= hr.bottom + 6 || cr.bottom <= hr.top - 6) return;
      var wr = wrap.getBoundingClientRect(), w = cr.width, h = cr.height, mc = document.querySelector('.menu-container'), mr = mc && mc.getBoundingClientRect(), lim = mr && mr.width ? mr.left - 12 : innerWidth - 16;
      if (hr.left > innerWidth / 2) { if (hr.left - 12 - w >= 16) { ctl.style.left = Math.round(hr.left - 12 - w / 2 - wr.left) + 'px'; ctl.style.top = Math.round(hr.top + hr.height / 2 - h / 2 - wr.top) + 'px'; return; } }   // (pills on the right: beside them, to their left)
      else if (hr.right + 12 + w <= lim) { ctl.style.left = Math.round(hr.right + 12 + w / 2 - wr.left) + 'px'; ctl.style.top = Math.round(hr.top + hr.height / 2 - h / 2 - wr.top) + 'px'; return; }   // (pills on the left: beside them, to their right)
      ctl.style.top = Math.round(hr.bottom + 10 - wr.top) + 'px'; }
    var placeCtl0 = placeCtl; placeCtl = function () { placeCtl0(); ctlClear(); var hp = document.getElementById('jjst-hint'), st0 = document.getElementById('jjst'); if (!hp || !st0 || !hp.offsetWidth) return;   /* s129 */
      hp.style.top = ''; var hq = hp.getBoundingClientRect(), low = 0, hud = document.getElementById('jj-sc-hud');   /* s150: clear of the score pills too, not only the transport (Joe's photos: the hint over the pills and the buttons) */
      [ctl, hud].forEach(function (o) { var q = o && o.getBoundingClientRect(); if (q && q.height && hq.left < q.right + 8 && hq.right > q.left - 8 && hq.top < q.bottom + 10 && hq.bottom > q.top - 10) low = Math.max(low, q.bottom); });
      if (low) { hp.style.top = Math.round(low + 12 + hq.height / 2 - st0.getBoundingClientRect().top) + 'px'; var hq2 = hp.getBoundingClientRect(); [ctl, hud].forEach(function (o) { var q = o && o.getBoundingClientRect(); if (q && q.height && hq2.left < q.right + 8 && hq2.right > q.left - 8 && hq2.top < q.bottom + 10 && hq2.bottom > q.top - 10) hp.style.top = Math.round(q.bottom + 12 + hq.height / 2 - st0.getBoundingClientRect().top) + 'px'; }); } };
    placeCtl(); setInterval(placeCtl, 300); window.addEventListener('resize', placeCtl);   // (s150: every 0.3 s, was 0.8: a hint that had just appeared sat over the buttons until the next look)
    function ctlSync(){ if (bookOn && bookCtl) { document.getElementById('jjst-prev').disabled = bookCtl.atStart(); document.getElementById('jjst-next').disabled = false; wrap.classList.toggle('paused', storyPaused); return; }   /* s125: the storybook is up */ var pb = partBounds(); document.getElementById('jjst-prev').disabled = curScene <= pb[0]; document.getElementById('jjst-next').disabled = curScene >= pb[1]; wrap.classList.toggle('paused', storyPaused); }
    var ctlLast = 0;
    function ctlGo(d){ if (endTyped || endLock) return; var nowT = performance.now(); if (nowT - ctlLast < 450) return; ctlLast = nowT;
      if (storyPaused) resumeStory();                          // previous / next always play the new scene — pause belongs to the scene you were on, as on any player (s83)
      if (bookOn && bookCtl) { bookCtl.go(d); ctlSync(); return; }   // s125: the storybook is up: its pages
      if (XP && d > 0 && SCENES[curScene] && SCENES[curScene].block) return;   // st2: a choice waits for its pick
      if (XP && d > 0 && curAdvance) { var g = curAdvance; curAdvance = null; unsched(advTimer); advTimer = null; g(); ctlSync(); return; }   // st2: a beat that is waiting (a bubble, a card, a read line) simply moves on: no rebuild
      var pb = partBounds(), i = Math.max(pb[0], Math.min(pb[1], curScene + d)); if (XP && d < 0) while (i > pb[0] && (SCENES[i].auto || SCENES[i].backSkip)) i--;   /* s129 · A4 */   // (st2: back over the cuts and other self-running beats)
      if (i === curScene && d > 0) return; resetEnd(); jumpScene(i);
      ctlSync(); }
    function ctlPause(){ if (endLock) return; if (storyPaused) resumeStory(); else { pauseStory(); document.getElementById('jjst').classList.add('user-paused'); } ctlSync(); }   // the visitor's own pause: the PAUSED card comes up
    document.getElementById('jjst-prev').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); ctlGo(-1); });
    document.getElementById('jjst-next').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); ctlGo(1); });
    document.getElementById('jjst-pause').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); ctlPause(); });
    /* s121 · R1 (Joe): Space ALWAYS pauses / resumes and Left / Right ALWAYS go to the previous / next line, whatever has the focus. The keys are taken at the
       document in the capture phase and swallowed (keydown AND keyup: a focused button fires its click on Space's keyup — he pressed Next, then Space, and the
       focused Next fired again), and a story control drops the focus after a pointer press. */
    var storyKeys = function (e) { if (rotOn || endLock || !ctl.classList.contains('on') || document.body.classList.contains('jj-modal-open') || document.body.classList.contains('jj-menu-open')) return false;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '') || (e.target && e.target.isContentEditable)) return false;
      return e.key === ' ' || e.key === 'Spacebar' || e.key === 'ArrowRight' || e.key === 'ArrowLeft'; };
    document.addEventListener('keydown', function (e) { if (!storyKeys(e)) return; e.preventDefault(); e.stopPropagation(); if (e.repeat) return;
      if (e.key === 'ArrowRight') ctlGo(1); else if (e.key === 'ArrowLeft') ctlGo(-1); else ctlPause(); }, true);
    document.addEventListener('keyup', function (e) { if (!storyKeys(e)) return; e.preventDefault(); e.stopPropagation(); }, true);
    document.addEventListener('pointerup', function () { setTimeout(function () { var ae = document.activeElement, jj = document.getElementById('jjst'); if (ae && ae !== document.body && jj && jj.contains(ae) && ae.blur) ae.blur(); }, 0); }, true);
    window.jjStory.ctlSync = ctlSync; window.jjStory.ctlGo = ctlGo; window.jjStory.ms = function () { return { woke: MS.woke, held: MS.held, pre: MS.pre, endAsk: MS.endAsk, endOk: MS.endOk, log: MS.log.slice(), tale: window.jjTale }; }; window.jjStory.skip = skipStory; window.jjStory.fxDensity = function (k) { if (k != null && !isNaN(+k)) PFX.density = Math.max(0, Math.min(1, +k)); return PFX.density; }; window.jjStory.pfx = function () { return { on: PFX.on, held: PFX.held, density: PFX.density, canvases: PFX.list.map(function (I) { return { kind: I.kind, n: I.P.length, px: [I.cv.width, I.cv.height], css: [I.cv.style.width, I.cv.style.height], R: +I.R.toFixed(2), t: Math.round(I.t), sprites: Object.keys(I.spr).length }; }) }; }; window.jjStory.book = function () { return bookOn && bookCtl ? bookCtl.state() : null; };


    /* ---- the gate: the evolution loader (jj-loader.js, variant C) fronts the whole page when
       it's available — real byte progress over the story's heaviest boards while the seven stages
       of Joe paint themselves in. Falls back to the little built-in loader if jj-loader is absent. */
    function beginStory() {
      var ld = document.getElementById('jjst-loader'); if (ld) ld.classList.add('hide');
      if (PART2) { for (var si = 0; si < SCENES.length; si++) if (SCENES[si].comp === 'castle1') { START_SCENE = si; break; } }
      /* s130: (the rest of the boards used to be asked for here, all at once: they now trickle in, in story order, once the first scene is whole: sceneIn) */
      if (location.hash === '#my-story') { navDrop(); skipStory(); return; }   // the My Story address: straight past the tale (and none of its clips fetched)
      warmPend = START_SCENE || 0; sceneIn(function () { warmOpen = true; warmAhead(warmPend); trickle(PRELOAD.map(F)); });   /* s130: nothing of a later scene is asked for until the first one is in */
      fxLoadAll();                                                             // s103: the cavern's Blender atmosphere starts loading now the loader is done (it fades in when it plays)
      if (window.JJ_STORY_HOLD) {                      // preview mode: instant reveal, no typing/choreography
        var blk = document.getElementById('jjst-black'); blk.style.display = 'none';
        capEl.classList.add('on'); prog.classList.add('on');
        textEl.textContent = 'Preview — jjStory.hold(\'tavern\') to jump comps';
        return;
      }
      var bookT = BOOK && !PART2 && !START_SCENE ? (XP ? XP.book : BOOK_P1) : null;   /* s125 · ?book=1: the storybook plays first, then hands over to the same start (never from a ?scene= jump or Part Two) */
      if (bookT && bookT.pages && bookT.pages.length) { bookBegin(bookT); return; }
      setTimeout(function () { revealFromBlack(); bedLive(); }, T.revealAt);
      setTimeout(function () {
        var go = function () {                                             // the box, the skip CTA, the nav, the first line — same beats as before
          capEl.classList.add('on'); prog.classList.add('on'); document.getElementById('jjst-ctl').classList.add('on');   // (the Skip CTA is retired — the transport covers it)
          setTimeout(navDrop, T.menuDropAt - T.boxFadeAt);
          setTimeout(function startNow() { if (rotOn) { rotWaitFn = startNow; return; } if (!XP) { runScene(START_SCENE); return; }   /* s121 · Storytime 2 only (Part One's timing is untouched): its first line never starts typing unseen — it waits until the page is showing, the loader is off and the banner is up (Joe saw the first line arrive whole; not reproduced in the lab, so the start is made safe) */
            var t0 = performance.now(), w = function () { var blk = document.getElementById('jjst-black'), seen = !document.hidden && !document.getElementById('jjld') && parseFloat(getComputedStyle(capEl).opacity) > .95 && !(blk && blk.style.display !== 'none' && parseFloat(getComputedStyle(blk).opacity) > .08);
              if (seen || performance.now() - t0 > 8000) runScene(START_SCENE); else setTimeout(w, 120); }; w(); }, T.firstTypeAt - T.boxFadeAt);
        };
        var go1 = function () { rotGate(go); };                           /* s123: on a phone held upright the tale does not begin behind the 'turn your phone' card */
        if (soundOff()) askSound(go1); else go1();                          // muted visitors get a word first; nothing is typing yet, so nothing to pause
      }, T.boxFadeAt);
    }
    /* s125 · the storybook start (?book=1 only). The sound prompt and the 'turn your phone' card come first, as they do for the tale; the tale's black stays up under
       the book (its first shot is built and waiting, as always); when the book hands over, the black is dropped under it, the book melts away, and the tale starts
       with its usual beats: the banner and the transport, the nav 0.3s later, the first line 0.8s after the banner. Part One's story clock (and so its music)
       starts with that first line, as it always has. */
    function bookBegin(B) {
      if (B.first && !XP) { var s0 = SCENES[0], rd = function (q) { return q.read != null ? q.read : Math.max(T.readMin, q.text.length * T.readPerChar); }, tot = typeDuration(s0.text, s0.typeK) + pauseMs(s0) + rd(s0) + (s0.linger != null ? s0.linger : T.linger), n0 = {};   // the first line, without its own 'many moons ago': shorter, in a scene exactly as long (so every later line starts when it always did)
        Object.keys(s0).forEach(function (k) { n0[k] = s0[k]; }); n0.text = B.first.text; n0.triggers = B.first.triggers; n0.read = Math.max(T.readMin, n0.text.length * T.readPerChar); n0.linger = Math.max(0, tot - typeDuration(n0.text, n0.typeK) - pauseMs(n0) - n0.read) + Math.max(0, s0.text.length - n0.text.length) * 3.4; SCENES[0] = n0; }   /* (+3.4 ms a character: each typed character really takes about that much longer than its nominal 30 ms (the timer latency: measured), so the shorter line would otherwise bring every later line ~0.13 s early) */
      document.documentElement.classList.add('jjst-book');                                           // the site's nav, the transport and the tale's hints stay out while the book is up (bookCss)
      try { if (compHowl) compHowl.fade(compHowl.volume(), 0, 300); } catch (e) {}                 // (the book is silent but for its pages: the cave's bed comes up at the hand-over, as it does at the reveal)
      var begin = function () { capEl.classList.add('on'); prog.classList.add('on'); document.getElementById('jjst-ctl').classList.add('on'); setTimeout(navDrop, T.menuDropAt - T.boxFadeAt);
        setTimeout(function startNow() { if (rotOn) { rotWaitFn = startNow; return; } if (!XP) { runScene(START_SCENE); return; }
          var t0 = performance.now(), w = function () { var seen = !document.hidden && !document.getElementById('jjld') && parseFloat(getComputedStyle(capEl).opacity) > .95; if (seen || performance.now() - t0 > 8000) runScene(START_SCENE); else setTimeout(w, 120); }; w(); }, T.firstTypeAt - T.boxFadeAt); };
      var start = function () { rotGate(function () { document.getElementById('jjst-ctl').classList.add('on');   // the transport (and Space / Left / Right) drive the book
          bookRun(B, { music: bookMusic, reveal: function () { var blk = document.getElementById('jjst-black'); if (blk) blk.style.display = 'none'; bedLive(); }, done: function () { var de = document.documentElement; de.classList.add('jjst-booked'); de.classList.remove('jjst-book'); setTimeout(function () { de.classList.remove('jjst-booked'); }, 1400); ctlSync(); begin(); } }); ctlSync(); }); };   // (the nav and the transport fade in as the tale starts, as at its own reveal)
      setTimeout(function () { if (soundOff()) askSound(start); else start(); }, T.revealAt);
    }
    window.jjStory.navDrop = function () { navDrop(); };
    function navDrop() {
      var nav = document.querySelectorAll('.nav-logo-link, .menu-container, #jj-sc-hud');   // the score pill rides in with the menu
      nav.forEach(function (n) { n.style.transition = 'none'; n.style.transform = 'translateY(-42px)'; n.style.opacity = '0'; });
      void document.body.offsetWidth;
      document.documentElement.classList.add('jj-nav-in');           // lifts the !important hide (page head + the rule injected below)
      nav.forEach(function (n) { n.style.transition = 'transform .9s cubic-bezier(.22,1,.36,1), opacity .9s ease'; n.style.transform = 'translateY(0)'; n.style.opacity = '1'; });
    }
    /* the site's moon button owns mute (session-scoped); we only read it, and press it on the visitor's behalf */
    function soundOff() { try { if (sessionStorage.getItem('jjUserMuted') === '1') return true; } catch (e) {}
      var b = document.getElementById('jj-sound-btn'); return !!(b && b.classList.contains('is-muted')) || !!(window.jjAudio && window.jjAudio.muted); }
    function askSound(go) {
      var so = document.getElementById('jjst-sndov'), done = false;
      function pick(on) { if (done) return; done = true;
        if (on) { var b = document.getElementById('jj-sound-btn'); if (window.jjSoundOn) { try { window.jjSoundOn(); } catch (e) {} } else if (b && b.classList.contains('is-muted')) b.click(); else if (window.jjAudio) window.jjAudio.muted = false;
          try { sessionStorage.setItem('jjUserMuted', '0'); } catch (e) {} }
        so.classList.remove('on'); document.body.classList.remove('jj-modal-open'); moSync(); go(); }
      document.getElementById('jjst-nosnd').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); pick(false); });
      document.getElementById('jjst-yessnd').addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); pick(true); });
      so.addEventListener('click', function (e) { e.stopPropagation(); });
      document.body.classList.add('jj-modal-open'); moSync(); so.classList.add('on');
    }
    function gate() {
    if (BOOK && !PART2 && !START_SCENE && (XP ? XP.book : BOOK_P1)) { bookStyle(); document.documentElement.classList.add('jjst-book'); bookPrep(XP ? XP.book : BOOK_P1); { try { musH('hills'); musH('hills2'); } catch (e) {} } }   /* s126 · ?book=1: the nav stays out from the start (it comes in as the tale begins) · s127: the book's art and type are fetched and decoded now, under the loader */
    if (XP) {                                                                  // st2 · Storytime 2: the portal loader, then its first shot
      setComp(SCENES[START_SCENE] && SCENES[START_SCENE].comp || SCENES[0].comp);
      if (window.JJLoader && window.JJLoader.start) { document.getElementById('jjst-loader').classList.add('hide');
        JJLoader.start({ variant: 'portal', frames: [F('portal-1'), F('portal-2'), F('portal-3'), F('portal-4')], assets: [F('portal-1'), F('portal-2'), F('portal-3'), F('portal-4'), BANNER].concat(XP.assets || [], BOOK && XP.book && !START_SCENE ? bookAssets(XP.book) : []),
          title: XP.title || 'Storytime 2', msg1: XP.msg1 || 'The tale continues through the portal', msg2: XP.msg2 || '', minTime: 3000, maxWait: 15000, decode: true, onReady: beginStory }); }
      else preloadCritical(beginStory);
      return; }
    if (window.JJLoader && window.JJLoader.start) {
      document.getElementById('jjst-loader').classList.add('hide');            // plain dark page while the art warms
      var ASSETS = gateList(PART2 ? 'castle1' : 'cavern');   /* s130: what the first scene needs (it was the boards of every scene: 1.5 MB before the first line; they now follow in story order, see warmAhead) */
      if (BOOK && !PART2 && !START_SCENE) ASSETS = ASSETS.concat(bookAssets(BOOK_P1));
      if (PART2) {                                                             // Part Two: the portal loader, the big hint, straight into the fight
        setComp('castle1');
        JJLoader.start({ variant: 'portal', frames: [F('portal-1'), F('portal-2'), F('portal-3'), F('portal-4')], assets: ASSETS.concat([F('portal-1'), F('portal-2'), F('portal-3'), F('portal-4')]),
          title: 'The Tale of Trogdor & Joe the Righteous \u00b7 Part Two', msg1: 'Grab your popcorn, it\u2019s about to go down', msg2: 'Hint: I like using my special cursor for this', minTime: 5000, maxWait: 18000, decode: true, onReady: beginStory });
      } else {                                                                 // Part One: Joe squares up to Trogdor (the still plate until the Seedance clip lands as loader-fight.webm/.mov)
        setComp('cavern');                                                     // first chapter up (hidden by the black)
        JJLoader.start({ variant: 'pill', layout: 'storytime', bg: GB + 'loader-pill-storytime.webp',            // Joe's pill loader (Sep '26): the fight clip in the moonlit frame
          img: GB + 'loader-fight-poster.webp', clip: { webm: GB + 'loader-fight.webm', mov: GB + 'loader-fight.mov' }, assets: ASSETS.concat([GB + 'loader-pill-storytime.webp']),
          title: 'The Tale of Trogdor & Joe the Righteous', msg1: 'Hint: This is an interactive story',
          minTime: 4500, maxWait: 18000, decode: true, onReady: beginStory });
      }
    } else {
      setComp(PART2 ? 'castle1' : 'cavern');
      preloadCritical(beginStory);
    }
    }
    if (ST2) {                                                                 // st2: fetch the sequel's file now (Part One never downloads it), let it register, then open the gate
      var s2 = document.createElement('script'); s2.src = GB + 'storytime2.js?v=' + (window.JJ_ST2_V || 1);
      s2.onload = function () { try { var bld = window.jjStory._build; XP = bld ? bld(window.jjStory.api) : null;
        if (XP && XP.scenes && XP.scenes.length) { SCENES = XP.scenes; Object.keys(XP.comps || {}).forEach(function (k) { COMP[k] = XP.comps[k]; }); Object.keys(XP.rigs || {}).forEach(function (k) { CAM_RIGS[k] = XP.rigs[k]; }); if (START_SCENE >= SCENES.length) START_SCENE = 0; } else XP = null; } catch (e) { XP = null; }
        gate(); };
      s2.onerror = function () { gate(); }; document.head.appendChild(s2); }
    else gate();
  }
  /* ---- s126 · THE STORYBOOK (a prototype, behind ?book=1 only: without the flag none of this runs and nothing changes). Joe's idea, after a classic storybook
     opening: before the tale a leather book lies on a table in a dark, candle-lit room; the camera drifts toward it; the cover opens; three illuminated spreads
     tell a six-line rhyme, one line and one miniature on every page; the pages turn by themselves; and the last miniature is a drawing of the tale's own first
     frame: the camera pushes into it until it sits exactly over the real shot, the ink and parchment melt away, and the tale begins. Part One gets a prologue,
     Storytime 2 a 'previously'. One mechanism, driven by a small table per part (BOOK_P1 here, the sequel's in storytime2.js):
       { pages: [ { text, red: [words in red], pic, band: 1…5, box?, div?, medal?, corners?, move?, print?, mouth?, singed? } x 6 ], first? }
       · text: the page's line (the copy is Joe's: edit it here) · pic: a picture key (BOOK_ART; bookPic draws its stand-in) · band: the strip along the foot
       · box: the colour of the painted box behind the page's illuminated initial (red, blue, green, gold: the pages that open a spread) · div: the flourish under
         the line (acorn, dragon, sunmoon) · medal: a small roundel on the band (chicken, dragon, knight, arch) · corners: two painted vine corners beside the miniature
       · move: { x, y, k, ms }: the picture's own slow move while the spread is up (the map closes in on the village)
       · print: this picture is the tale's first frame, printed (the match) · mouth: a cave mouth and night sky round it
     How it is drawn: every page is ONE bitmap (parchment, lettering, miniature, band, ornaments: a canvas), so a turning leaf is cheap: it is cut into BOOK_N
     strips of that bitmap, hinged one to the next, and only transforms and opacities move.
     Rules it keeps: Space pauses and Left / Right step (R1: the tale's own keys drive it); nothing answers while paused (R2: it lives inside the stage, under
     the pause card, and every timer and animation is the tale's pause-aware kind); a page never flips as a flat card (R3's spirit). ---- */
  var BOOK = !/[?&]book=0\b/.test(location.search), bookOn = false, bookCtl = null;   /* s136: on by default; ?book=0 plays the tale without its storybook */
  var BOOK_FACES = { uncial: 'Uncial Antiqua', fell: 'IM Fell English', almendra: 'Almendra', fondamento: 'Fondamento', grenze: 'Grenze', sharp: 'MedievalSharp', caudex: 'Caudex', jj: '' }, BOOK_FACE_DEFAULT = 'fondamento';   /* s135 · the faces Joe can try for the pages' lettering: ?bookfont=<key>. Each is a Google Font (OFL), fetched only when the book plays; 'jj' is the house face alone */
  var BOOK_FACE = (function () { var m = /[?&]bookfont=([a-z]+)/.exec(location.search); return m && BOOK_FACES[m[1]] !== undefined ? m[1] : BOOK_FACE_DEFAULT; })();
  var BOOK_FONT = (BOOK_FACES[BOOK_FACE] ? '"' + BOOK_FACES[BOOK_FACE] + '", ' : '') + '"Joes Journey Headline", sans-serif';   // the lettering of the pages: ONE constant. Uncial Antiqua (Google Fonts, OFL) is approved for the book's pages ONLY; it is fetched only when the book plays, and the JJ font stands in if it fails
  var BOOK_CAP_FONT = /[?&]bookcap=g\b/.test(location.search) ? '"Sketch Gothic School", Georgia, serif' : BOOK_FONT;   // the illuminated initials and the red versals: the uncial too (?bookcap=g shows them in the tale's gothic face, to compare)
  var BOOK_N = 16, BOOK_TURN = 1200;                           // strips to a leaf · a page turn, ms
  var BOOK_P1 = { pages: [
      { text: 'Many moons ago, in hills of green...', red: ['hills', 'green'], pic: 'book-p1-1', band: 1, box: 'red', div: 'acorn', medal: 'chicken', move: { x: .5, y: .535, k: 2, ms: 4000 } },   // the map: in on the village until its name is what is being read   /* s128 working text (a trial). Before: 'Many moons ago, where the hills rolled green and wide...', red: ['hills', 'green and wide'] */
      { text: '...there stood the proudest village ever seen.', red: ['proudest', 'village'], pic: 'book-p1-2', band: 1, div: 'acorn', corners: [1, 2] },   /* s128 working text (a trial). Before: '...there sat a little village, full of chickens, and of pride.', red: ['chickens', 'pride'] */
      { text: 'Its folk had taverns, hens and gold...', red: ['taverns', 'hens', 'gold'], pic: 'book-p1-3', band: 2, box: 'blue', div: 'acorn' },   /* s128 working text (a trial). Before: 'Its people had taverns, and pockets full of gold...', red: ['taverns', 'gold'] */
      { text: '...and roofs of thatch, a sight to behold.', red: ['thatch', 'behold'], pic: 'book-p1-4', band: 2, div: 'acorn', corners: [3, 4] },   /* s128 working text (a trial). Before: '...and roofs of finest thatch, a wonder to behold.', red: ['finest thatch', 'wonder'] */
      { text: 'But a beast lived in the sky, so it\'s told...', red: ['beast', 'sky'], pic: 'book-p1-5', band: 3, box: 'green', div: 'sunmoon' },   /* s128 working text (a trial). Before: 'But a beast lived in the sky, or so the tale is told...', red: ['beast', 'sky'] */
      { text: '...in a lair in the clouds, dark and cold.', red: ['lair', 'cold'], pic: 'book-p1-6', band: 3, div: 'dragon', medal: 'dragon', print: true, mouth: true } ],   /* s128 working text (a trial). Before: '...in a lair above the clouds, where the nights are cold.', red: ['lair', 'cold'] */
    /* with the book in front of it the tale's first line drops its own 'many moons ago' (the book has said it), in a scene exactly as long */
    first: { text: 'High in the mountain, where no villager dared to climb, the evil beast slept, dwelling deep in the darkness...', triggers: [ { at: 'beast', fx: 'cam:trogdor' }, { at: 'darkness', fx: 'dark' }, { at: 'darkness...', fx: 'cam:settle' } ] } };
  function bookHold(n) { return Math.max(1500, Math.min(4200, 600 + 28 * n)) + 800; }
  var BOOK_OPEN_AT = 3000;                                     // the opening shot: from the J on the cover to the cover starting to open, ms   // a spread holds by the narration's reading-time rule, and a little more air (Joe)
  function bookStyle() { if (document.getElementById('jjst-book-css')) return; var cs = document.createElement('style'); cs.id = 'jjst-book-css'; cs.textContent = bookCss(); (document.head || document.documentElement).appendChild(cs); }
  function bookCss() { var P = '#jjst-book ', LEATHER = 'radial-gradient(130% 100% at 28% 16%,#6d3022,#421a13 52%,#1f0b09)', EDGE = 'linear-gradient(90deg,#2a100b,#4a1d15 50%,#241009)';
    return '#jjst-book{position:absolute;inset:0;z-index:11;overflow:hidden;background:#050308;--pw:400px;--ph:540px;--u:1px;--th:6px;--zr:21px;-webkit-user-select:none;user-select:none;}' +
      'html.jjst-book.jjst-book .nav-logo-link,html.jjst-book.jjst-book .menu-container,html.jjst-book.jjst-book #jj-sc-hud,html.jjst-book #jjst-hint,html.jjst-book #jjst-hints{opacity:0!important;pointer-events:none!important;}' +   /* the site's nav and the tale's hints stay out while the book is up; s129: the tale's own transport (previous, pause, next) stays, where it always sits, and drives the pages */
      'html.jjst-booked .nav-logo-link,html.jjst-booked .menu-container,html.jjst-booked #jj-sc-hud{transition:opacity .8s ease!important;}' +
      P + '.rm,' + P + '.rm i,' + P + '.gw{position:absolute;pointer-events:none;}' + P + '.rm{inset:0;}' +
      P + '.gw{inset:-12%;z-index:2;background:radial-gradient(54% 62% at var(--cx,16%) var(--cy,30%),rgba(255,190,110,.17),rgba(255,170,90,.05) 52%,rgba(0,0,0,0) 78%);animation:jjbkFlick 1.7s ease-in-out infinite;}' +   /* the candle's light over everything, book and props and all: it flickers with the flame */
      '@keyframes jjbkFlick{0%,100%{opacity:.72}12%{opacity:1}21%{opacity:.58}33%{opacity:.92}47%{opacity:.68}58%{opacity:1}71%{opacity:.64}86%{opacity:.9}}' +
      P + '.mt{width:4px;height:4px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,228,176,.9),rgba(255,228,176,0));opacity:0;animation:jjbkMote var(--d) linear infinite;animation-delay:var(--dl);}' +
      '@keyframes jjbkMote{0%{transform:translate(0,0);opacity:0}16%{opacity:.75}84%{opacity:.5}100%{transform:translate(var(--mx),var(--my));opacity:0}}' +
      P + '.ps,' + P + '.cm,' + P + '.bk,' + P + '.sp,' + P + '.tb,' + P + '.pr,' + P + '.sh,' + P + '.bd,' + P + '.blk,' + P + '.hd,' + P + '.eg,' + P + '.pe,' + P + '.cf,' + P + '.cb,' + P + '.rb{will-change:transform;}' +   /* (every piece is drawn once: the camera's drift and its push into the page move the drawn layers, they are not redrawn at each size on the way) */
      P + '.ps,' + P + '.cm{position:absolute;inset:0;}' + P + '.ps{transform-origin:0 0;}' + P + '.cm{transform-origin:50% 50%;perspective:var(--per,4200px);perspective-origin:50% var(--poy,36%);display:flex;align-items:center;justify-content:center;padding-top:2cqh;box-sizing:border-box;}' +
      P + '.bk{position:relative;flex:none;width:calc(var(--pw)*2);height:var(--ph);transform-style:preserve-3d;transform:rotateX(var(--tilt,9deg));cursor:pointer;touch-action:manipulation;}' + '#jjst-book.one .bk{width:var(--pw);}' +
      P + '.sp{position:absolute;left:50%;top:0;width:0;height:100%;transform-style:preserve-3d;}' + '#jjst-book.one .sp{left:0;}' +
      P + '.sp>*,' + P + '.cv>*,' + P + '.cb>*,' + P + '.lf>*,' + P + '.jt>*,' + P + '.hd>*,' + P + '.fc>*{position:absolute;}' +
      /* the table: dark wood, its far edges lost in the dark; the candle's pool of light on it; the book's soft shadows */
      P + '.tb{left:calc(var(--pw)*-3.2);top:calc(var(--ph)*-1.5);width:calc(var(--pw)*6.4);height:calc(var(--ph)*4);transform:translateZ(-1px);pointer-events:none;}' + P + '.pr{transform:translateZ(-.4px);pointer-events:none;}' + P + '.fl{transform:translateZ(-.2px);transform-origin:50% 100%;pointer-events:none;border-radius:50% 50% 46% 46% / 62% 62% 38% 38%;background:radial-gradient(60% 70% at 50% 72%,#fff6c8,#ffc94a 46%,#f08a2c 78%,rgba(240,138,44,0));animation:jjbkFlame 1.7s ease-in-out infinite;}' + P + '.fl.gl{border-radius:50%;background:radial-gradient(closest-side,rgba(255,236,170,.75),rgba(255,190,90,.34) 44%,rgba(255,170,70,0));}' +   /* (over a painted candle, whose flame is painted: only its glow flickers) */
      '@keyframes jjbkFlame{0%,100%{transform:translateZ(-.2px) scale(1,1) rotate(-2deg);opacity:.95}22%{transform:translateZ(-.2px) scale(.92,1.08) rotate(3deg);opacity:1}45%{transform:translateZ(-.2px) scale(1.05,.94) rotate(-4deg);opacity:.86}70%{transform:translateZ(-.2px) scale(.95,1.1) rotate(2deg);opacity:1}}' +
      P + '.sh{top:-9%;height:124%;width:calc(var(--pw)*1.3);left:calc(var(--pw)*-.1);background:radial-gradient(closest-side,rgba(0,0,0,.86),rgba(0,0,0,.55) 60%,rgba(0,0,0,0));transform:translateZ(-.5px) translate(4%,6%);pointer-events:none;}' + P + '.sh.l{left:calc(var(--pw)*-1.2);opacity:0;}' +
      P + '.rb{left:calc(var(--pw)*.05);top:101%;width:calc(var(--pw)*.045);height:calc(var(--ph)*.17);transform:translateZ(-.3px) rotate(7deg);transform-origin:50% 0;pointer-events:none;}' + P + '.rb svg{display:block;width:100%;height:100%;overflow:visible;}' +
      /* the boards: dark leather, with a thickness; the page block on the right, its gilt edges catching the candle */
      P + '.bd,' + P + '.cf,' + P + '.cb{border-radius:1.6% / 1.2%;background:' + LEATHER + ';box-shadow:inset 0 0 calc(var(--pw)*.07) rgba(0,0,0,.72);}' +
      P + '.bd{left:calc(var(--pw)*-.004);top:-2.2%;width:calc(var(--pw)*1.05);height:104.4%;transform:translateZ(var(--th));}' +
      P + '.eg{background:' + EDGE + ';}' + P + '.eg.x{left:100%;top:0;width:var(--th);height:100%;transform-origin:0 50%;}' + P + '.eg.y{left:0;top:100%;width:100%;height:var(--th);transform-origin:50% 0;background:linear-gradient(180deg,#4a1d15,#1c0a07);}' +
      P + '.bd .eg.x{transform:rotateY(90deg);}' + P + '.bd .eg.y{transform:rotateX(-90deg);}' +
      P + '.blk{left:0;top:.2%;width:calc(var(--pw)*1.008);height:99.8%;transform:translateZ(var(--zr));transform-style:preserve-3d;background:#d8c08a;}' +
      P + '.blk .pe{background:repeating-linear-gradient(90deg,#b08a3c 0,#e9cf86 1.2px,#8f6c2c 2.4px);}' + P + '.blk .pe.x{left:100%;top:0;width:calc(var(--zr) - var(--th));height:100%;transform-origin:0 50%;transform:rotateY(90deg);}' +
      P + '.blk .pe.y{left:0;top:100%;width:100%;height:calc(var(--zr) - var(--th));transform-origin:50% 0;transform:rotateX(-90deg);background:repeating-linear-gradient(180deg,#b08a3c 0,#f0d78f 1.2px,#8f6c2c 2.4px);}' +
      P + '.blk .pe::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,rgba(255,236,170,0) 20%,rgba(255,236,170,.5) 42%,rgba(255,236,170,0) 60%);animation:jjbkFlick 2.7s ease-in-out infinite;}' +
      P + '.hd{left:var(--gut,0px);top:0;width:var(--pw);height:var(--ph);}' + P + '.hr{transform:translateZ(calc(var(--zr) + .6px));}' + P + '.hl{left:auto;right:var(--gut,0px);top:var(--pgt,0px);}' +
      P + 'canvas.bs{left:0;top:0;width:100%;height:100%;will-change:transform;pointer-events:none;}' + P + '.bsr{left:var(--cvl);top:var(--cvt);width:var(--cvw);height:var(--cvh);transform:translateZ(.3px);pointer-events:none;will-change:transform;}' + P + '.bsr canvas{position:absolute;left:0;top:0;width:100%;height:100%;}' +
      '#jjst-book.pt .bd,#jjst-book.pt .blk,#jjst-book.pt .rb{display:none;}' + '#jjst-book:not(.pt) .bsr,#jjst-book:not(.pt) .cb canvas.bs{display:none;}' + '#jjst-book.pt .cb{background:none;box-shadow:none;}' + '#jjst-book.pt .cf{box-shadow:none;background:none;}' +   /* (the painted book: its own boards, pages and edges) */
      P + '.hd canvas.pg{left:0;top:0;width:100%;height:100%;will-change:transform;-webkit-clip-path:var(--edge);clip-path:var(--edge);}' +
      P + '.cv{left:var(--cvl);top:var(--cvt);width:var(--cvw);height:var(--cvh);transform-origin:0 50%;transform:translateZ(var(--zr)) rotateY(0deg);transform-style:preserve-3d;will-change:transform;}' +
      P + '.cf,' + P + '.cb{inset:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;}' + P + '.cf{transform:translateZ(var(--th));}' + P + '.cb{transform:rotateY(180deg);background:radial-gradient(120% 100% at 70% 20%,#5a2a1f,#35150f 60%,#1b0a08);transform-style:preserve-3d;}' +
      P + '.cv .eg.x{transform:rotateY(-90deg);}' + P + '.cv .eg.y{transform:rotateX(90deg);}' +
      P + '.cf canvas{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:inherit;}' + P + '.cf .gx{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;opacity:0;will-change:transform,opacity;}' + P + '.cf .gx canvas{will-change:transform;border-radius:0;}' +   /* (the glint: the J again, bright, seen through three soft-stepped bands that slide across it) */
      /* the windows over a page: the map on its own plane; the first frame, printed */
      P + '.mw{overflow:visible;}' + P + '.mw .zw{position:absolute;inset:0;overflow:hidden;}' + P + '.mw .zm{position:absolute;left:0;top:0;width:300%;height:300%;transform-origin:0 0;transform:scale(.3333);will-change:transform;}' + P + '.mw .zm canvas{position:absolute;left:0;top:0;width:100%;height:100%;}' + P + '.mw canvas.mc{position:absolute;left:0;top:0;width:100%;height:100%;}' +
      P + '.pw canvas{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform;}' +
      /* the turning leaf: strips hinged to each other, each with a front and a back (a dark backing under each, so dimming the strip shades it) and a highlight */
      P + '.lw{left:0;top:0;width:0;height:100%;transform-style:preserve-3d;}' + P + '.lf,' + P + '.jt{top:0;height:100%;transform-origin:0 50%;transform-style:preserve-3d;will-change:transform;}' + P + '.lf{left:0;}' +
      P + '.fc{left:-.5px;right:-.5px;top:0;bottom:0;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;}' + P + '.fc.b{transform:rotateY(180deg);}' +
      P + '.fc canvas{left:0;top:0;width:100%;height:100%;will-change:filter;}' +
      P + '.shd{left:0;top:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-mask-image:linear-gradient(180deg,transparent 3%,#000 9%,#000 91%,transparent 96.5%);mask-image:linear-gradient(180deg,transparent 3%,#000 9%,#000 91%,transparent 96.5%);pointer-events:none;transform-origin:0 50%;background:linear-gradient(90deg,rgba(24,10,3,.7),rgba(24,10,3,.5) 62%,rgba(24,10,3,.16) 88%,rgba(24,10,3,0));will-change:transform,opacity;}' + P + '.hl .shd{transform-origin:100% 50%;background:linear-gradient(270deg,rgba(24,10,3,.7),rgba(24,10,3,.5) 62%,rgba(24,10,3,.16) 88%,rgba(24,10,3,0));}' +
      P + '.sk{position:absolute;left:max(14px,2.2cqw);bottom:max(10px,2.4cqh);z-index:3;min-width:48px;min-height:44px;padding:8px 10px;border:0;background:none;font-family:\'Joes Journey Headline\',sans-serif;font-size:14px;letter-spacing:.04em;color:rgba(255,255,255,.72);text-decoration:underline;text-decoration-color:#FF00F5;text-underline-offset:4px;cursor:pointer;opacity:0;transition:opacity .6s ease,color .2s ease;}' + P + '.sk.on{opacity:.8;}' + P + '.sk:hover{opacity:1;}' + P + '.sk:active{color:#FF00F5;}' +
      (typeof THEMES === 'object' && THEMES ? Object.keys(THEMES).map(function (t) { var K = THEMES[t], m = /^#([0-9a-f]{6})$/i.exec(K.nm || ''), dark = m && (parseInt(m[1].slice(0, 2), 16) * .3 + parseInt(m[1].slice(2, 4), 16) * .59 + parseInt(m[1].slice(4, 6), 16) * .11) < 140;   /* the Skip link is the one thing that follows the theme (its text-link colour and underline; a theme whose link colour is dark, made for its light panel, gives its light tone here: the room is dark) */
        return (t === 'classic' ? '' : 'html[data-jj-theme="' + t + '"] ') + '#jjst-book .sk{color:' + (dark ? '#f3e0b3' : K.nm) + ';text-decoration-color:' + K.ul + ';}'; }).join('') : '') +
      /* the bloom that hides the book's last picture giving way to the real shot: a warm glow spreading from the figure, a few sparkles; all of it soft */
      '#jjst-bloom{position:absolute;inset:0;z-index:12;overflow:hidden;pointer-events:none;}' + '#jjst-bloom i{position:absolute;display:block;opacity:0;will-change:transform,opacity;}' +
      '#jjst-bloom .g{border-radius:50%;background:radial-gradient(closest-side,rgba(255,241,204,.97),rgba(255,231,168,.95) 30%,rgba(255,214,132,.88) 52%,rgba(255,192,100,.52) 74%,rgba(255,178,84,0));}' +
      '#jjst-bloom .s{-webkit-clip-path:polygon(50% 0,57% 43%,100% 50%,57% 57%,50% 100%,43% 57%,0 50%,43% 43%);clip-path:polygon(50% 0,57% 43%,100% 50%,57% 57%,50% 100%,43% 57%,0 50%,43% 43%);background:radial-gradient(closest-side,#fffbe6 0,#ffdc66 16%,#eda01a 44%,#b96f08);}' +
      P + '.nx{position:absolute;z-index:7;height:max(1.5px,calc(var(--pw)*.0042));border-radius:2px;background:#2b1d14;opacity:0;transform-origin:0 50%;transform:scaleX(0);pointer-events:none;will-change:transform,opacity;}' +   /* s129: the line under a page's 'Next': it fills as the page's hold runs out */
      '@media (max-height:430px){#jjst-book .cm{padding-top:4cqh;}#jjst-book .sk{font-size:12px;}}'; }
  /* ---- the small painted things, drawn in code for now (each swappable for a cut-out of Joe's ornament sheet: BOOK_ART['book-orn-…'], ['book-band-N']) ---- */
  function bookGlyph(c, name, x, y, s, a, b) {                // a motif about (x, y), s across; a / b: its two colours
    var P2 = Math.PI * 2, i; c.save(); c.translate(x, y); c.lineJoin = 'round'; c.lineCap = 'round'; c.fillStyle = a; c.strokeStyle = b || a; c.lineWidth = Math.max(1, s * .09);
    if (name === 'star') { c.beginPath(); for (i = 0; i < 8; i++) { var r = i % 2 ? s * .2 : s * .5, t = i * Math.PI / 4 - Math.PI / 2; c.lineTo(Math.cos(t) * r, Math.sin(t) * r); } c.closePath(); c.fill(); }
    else if (name === 'diamond') { c.beginPath(); c.moveTo(0, -s * .5); c.lineTo(s * .36, 0); c.lineTo(0, s * .5); c.lineTo(-s * .36, 0); c.closePath(); c.fill(); c.fillStyle = b; c.beginPath(); c.moveTo(0, -s * .24); c.lineTo(s * .17, 0); c.lineTo(0, s * .24); c.lineTo(-s * .17, 0); c.closePath(); c.fill(); }
    else if (name === 'fleur') { c.beginPath(); c.moveTo(0, -s * .5); c.bezierCurveTo(s * .2, -s * .22, s * .14, s * .02, 0, s * .16); c.bezierCurveTo(-s * .14, s * .02, -s * .2, -s * .22, 0, -s * .5); c.fill();
      [-1, 1].forEach(function (k) { c.beginPath(); c.moveTo(k * s * .06, s * .14); c.bezierCurveTo(k * s * .2, -s * .1, k * s * .5, -s * .16, k * s * .46, s * .08); c.bezierCurveTo(k * s * .4, s * .0, k * s * .26, s * .04, k * s * .1, s * .2); c.fill(); }); c.fillRect(-s * .22, s * .16, s * .44, s * .08); c.beginPath(); c.moveTo(-s * .1, s * .26); c.lineTo(0, s * .5); c.lineTo(s * .1, s * .26); c.fill(); }
    else if (name === 'sun') { c.beginPath(); c.arc(0, 0, s * .24, 0, P2); c.fill(); c.beginPath(); for (i = 0; i < 8; i++) { var t2 = i * Math.PI / 4; c.moveTo(Math.cos(t2) * s * .32, Math.sin(t2) * s * .32); c.lineTo(Math.cos(t2) * s * .48, Math.sin(t2) * s * .48); } c.stroke(); }
    else if (name === 'chicken') { c.beginPath(); c.ellipse(-s * .04, s * .08, s * .3, s * .24, 0, 0, P2); c.fill(); c.beginPath(); c.arc(s * .22, -s * .16, s * .15, 0, P2); c.fill(); c.beginPath(); c.moveTo(-s * .3, s * .02); c.lineTo(-s * .5, -s * .22); c.lineTo(-s * .22, -s * .1); c.fill();
      c.fillStyle = b; c.beginPath(); c.arc(s * .2, -s * .32, s * .07, 0, P2); c.arc(s * .3, -s * .3, s * .06, 0, P2); c.fill(); c.beginPath(); c.moveTo(s * .36, -s * .16); c.lineTo(s * .5, -s * .12); c.lineTo(s * .36, -s * .08); c.fill(); c.strokeStyle = a; c.beginPath(); c.moveTo(-s * .08, s * .3); c.lineTo(-s * .08, s * .48); c.moveTo(s * .08, s * .3); c.lineTo(s * .08, s * .48); c.stroke(); }
    else if (name === 'tankard') { c.fillRect(-s * .26, -s * .28, s * .44, s * .7); c.lineWidth = s * .1; c.beginPath(); c.arc(s * .2, s * .06, s * .2, -Math.PI / 2, Math.PI / 2); c.stroke(); c.fillStyle = b; c.beginPath(); c.ellipse(-s * .04, -s * .32, s * .28, s * .13, 0, 0, P2); c.fill(); }
    else if (name === 'coin') { c.beginPath(); c.ellipse(0, s * .1, s * .34, s * .16, 0, 0, P2); c.fill(); c.strokeStyle = b; c.lineWidth = s * .05; c.stroke(); c.beginPath(); c.ellipse(0, -s * .08, s * .34, s * .16, 0, 0, P2); c.fill(); c.stroke(); }
    else if (name === 'flame') { c.beginPath(); c.moveTo(0, s * .5); c.bezierCurveTo(-s * .44, s * .3, -s * .24, -s * .16, s * .04, -s * .5); c.bezierCurveTo(s * .02, -s * .2, s * .4, -s * .04, 0, s * .5); c.fill(); c.fillStyle = b; c.beginPath(); c.moveTo(0, s * .44); c.bezierCurveTo(-s * .18, s * .3, -s * .08, s * .06, s * .04, -s * .08); c.bezierCurveTo(s * .04, s * .1, s * .18, s * .2, 0, s * .44); c.fill(); }
    else if (name === 'claws') { c.lineWidth = s * .1; c.beginPath(); for (i = -1; i <= 1; i++) { c.moveTo(i * s * .22 + s * .12, -s * .44); c.quadraticCurveTo(i * s * .22 - s * .04, 0, i * s * .22 - s * .14, s * .44); } c.stroke(); }
    else if (name === 'castle') { c.fillRect(-s * .34, -s * .1, s * .68, s * .58); c.fillRect(-s * .46, -s * .34, s * .22, s * .82); c.fillRect(s * .24, -s * .34, s * .22, s * .82); for (i = 0; i < 3; i++) c.fillRect(-s * .3 + i * s * .24, -s * .24, s * .12, s * .16); c.fillStyle = b; c.beginPath(); c.moveTo(-s * .1, s * .48); c.lineTo(-s * .1, s * .2); c.arc(0, s * .2, s * .1, Math.PI, 0); c.lineTo(s * .1, s * .48); c.fill(); }
    else if (name === 'branch') { c.lineWidth = s * .08; c.beginPath(); c.moveTo(0, s * .5); c.quadraticCurveTo(s * .06, 0, -s * .02, -s * .5); c.moveTo(0, s * .12); c.lineTo(-s * .3, -s * .16); c.lineTo(-s * .34, -s * .36); c.moveTo(0, -s * .06); c.lineTo(s * .3, -s * .3); c.lineTo(s * .44, -s * .28); c.moveTo(-s * .2, -s * .06); c.lineTo(-s * .42, -s * .04); c.stroke(); }
    c.restore(); }
  var BOOK_BANDS = [null, ['chicken', 'sun'], ['tankard', 'coin'], ['flame', 'claws'], ['castle', 'fleur'], ['branch', 'star']];   // the five strips: chickens and suns · tankards and coins · flames and claw marks · castles and fleurs-de-lis · dead branches and stars
  function bookRun(B, H) {                                    // H: { reveal(): the tale's first shot may now show under the book · done(): the book has gone }
    var st = document.getElementById('jjst'), N = BOOK_N, DUR = BOOK_TURN, P = B.pages, G = {}, unit = 0, opened = false, ended = false, ready = false, turning = null, drift = null, t0 = performance.now();
    var mk = function (cls, html) { var d = document.createElement('div'); d.className = cls; if (html) d.innerHTML = html; return d; }, cvs = function (w, h) { var c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };
    var rng = function (s) { s = (s * 2654435761) % 2147483647 || 7; return function () { s = (s * 16807) % 2147483647; return (s & 0xfffff) / 0xfffff; }; };
    bookStyle();
    var root = mk('', '<div class="rm"></div><div class="ps"><div class="cm"><div class="bk" data-cursor="hover"><div class="sp"></div></div></div></div><div class="gw"></div><button type="button" class="sk" data-cursor="hover">Skip</button>'); root.id = 'jjst-book';
    var rm = root.querySelector('.rm'), ps = root.querySelector('.ps'), cm = root.querySelector('.cm'), bk = root.querySelector('.bk'), sp = root.querySelector('.sp'), skip = root.querySelector('.sk');
    for (var mi = 0; mi < 9; mi++) { var mt = document.createElement('i'); mt.className = 'mt'; mt.style.cssText = 'left:' + (8 + (mi * 37) % 84) + '%;top:' + (12 + (mi * 53) % 70) + '%;--d:' + (11 + (mi * 7) % 9) + 's;--dl:-' + (mi * 2.3).toFixed(1) + 's;--mx:' + ((mi % 2 ? 1 : -1) * (30 + mi * 9)) + 'px;--my:' + (-40 - mi * 13) + 'px'; rm.appendChild(mt); }
    sp.innerHTML = '<canvas class="tb" width="1500" height="1260"></canvas><div class="sh r"></div><div class="sh l"></div><div class="rb"><svg viewBox="0 0 20 80" preserveAspectRatio="none"><path d="M3 0C1 20 6 40 3 62L1 80L10 72L19 80L17 62C20 40 15 20 17 0Z" fill="#8e1f1c"/><path d="M6 0C4 22 9 42 7 70" fill="none" stroke="#c0453a" stroke-width="1.6" opacity=".7"/></svg></div>' +
      '<div class="bd"><i class="eg x"></i><i class="eg y"></i></div><div class="blk"><i class="pe x"></i><i class="pe y"></i></div><div class="bsr"><canvas></canvas></div><div class="hd hr"><i class="shd"></i></div>' +
      '<div class="cv"><div class="cf"><canvas class="cc"></canvas><div class="gx"><canvas></canvas></div><div class="gx"><canvas></canvas></div><div class="gx"><canvas></canvas></div>' + '</div><i class="eg x"></i><i class="eg y"></i><div class="cb"><canvas class="bs"></canvas><div class="hd hl"><i class="shd"></i></div></div></div>';
    var hr = sp.querySelector('.hr'), hl = sp.querySelector('.hl'), cv = sp.querySelector('.cv'), shL = sp.querySelector('.sh.l'), sdR = hr.querySelector('.shd'), sdL = hl.querySelector('.shd');
    st.appendChild(root); bookOn = true;
    var pic = {}, artIm = (BOOK_PRE && BOOK_PRE.B === B ? BOOK_PRE.im : {}), plane = {}, printCv = null, bmp = {}, LAY = {};
    var art = function (k) { return BOOK_ART[k] && artIm[k] ? artIm[k] : null; };   // a painted file, if it has arrived (else its stand-in is drawn in code)
    /* ---- sizes. A narrow window shows one page at a time (each page is then its own step); a wider one a spread. K: bitmap pixels per CSS pixel ---- */
    var size = function () { var W = st.clientWidth, Hh = st.clientHeight, one = W < Hh * 1.02 && W < 820, pt = !!(art('book-spread') && art('book-cover')), SPD = BOOK_SPREAD, AR = pt ? (SPD.r[2] - SPD.r[0]) / (SPD.r[3] - SPD.r[1]) : .74, pw, ph;
      var KT = 1.07, cY = 0;
      if (pt) { var hs = (SPD.r[3] - SPD.r[1]) / SPD.h, ws = 2 * (SPD.w - SPD.spine) / SPD.h, bh = one ? Math.min(W * .78 / AR, Hh * .64) / hs : Math.min(W * .8 / ws, Hh * (Hh < 480 ? .82 : .73));   // (the painted open book, boards and all, inside 80% of the width and 73% of the height)
        /* s129 · the camera creeps in on the book for as long as it is up (to KT times its size by the end of the last spread), and the book is never cropped on the way:
           so the book is sized, and stood, to fit the screen at KT: clear of the screen's foot, and its lettering clear of the tale's transport at the top (the top
           board and the page's head margin may pass under the transport, as the picture does in the tale). cY: the middle of the book, about which it grows. */
        var ce = document.getElementById('jjst-ctl'), cb = 0, TXT = 0;   /* (TXT 0: the book's own top edge stays under the transport's foot at the creep's end: the transport is always over the table, never over the book) */ try { if (ce) { var cr0 = ce.getBoundingClientRect(), sr0 = st.getBoundingClientRect(); if (cr0.height) cb = cr0.bottom - sr0.top; } } catch (e) {}
        KT = one ? 1.08 : Hh < 480 ? 1.12 : 1.22; var bM = Hh * (Hh < 480 ? .02 : .028), topL = Math.max(Hh * .02, cb + 8);
        if (!one) bh = Math.min(bh, W * .965 / KT / ws, (Hh - bM - Hh * .02) / KT, (Hh - bM - topL) / ((1 - TXT) * KT));
        cY = Math.min(Math.max(Hh * .51, topL + bh * KT * (.5 - TXT)), Hh - bM - bh * KT / 2); ph = Math.round(bh * hs); pw = Math.round(ph * AR); }
      else { pw = Math.round(one ? Math.min(W * .8, Hh * .66 * .74) : Math.min(W * .365, Hh * (Hh < 480 ? .78 : .71) * .74)); ph = Math.round(pw / .74); }
      var u = pw / 450, ks = pt ? ph / (SPD.r[3] - SPD.r[1]) : 0, ch = !G.PW || G.PW !== pw || G.PH !== ph || G.one !== one || G.W !== W || G.H !== Hh || G.pt !== pt, lay = G.PW != null && G.one !== one;
      G = { W: W, H: Hh, one: one, pt: pt, PW: pw, PH: ph, u: u, ks: ks, KT: KT, cy: pt ? cY : Hh / 2, K: Math.min(window.devicePixelRatio || 1, 2), TH: (pt ? 2.5 : 6) * u, ZR: pt ? 3.5 * u : 21 * u, ZL: pt ? 3.5 * u : 6 * u + .6 };
      G.cv = pt ? [0, -SPD.r[1] * ks, (SPD.w - SPD.spine) * ks, SPD.h * ks] : [-.004 * pw, -.018 * ph, 1.05 * pw, 1.036 * ph]; G.gut = pt ? (SPD.r[0] - SPD.spine) * ks : 0; G.pgt = pt ? SPD.r[1] * ks : .0175 * 1.036 * ph;   // the cover's box (and, painted, each half of the open book's); a page's inset from the spine and from the top
      var V = { '--pw': pw + 'px', '--ph': ph + 'px', '--th': G.TH.toFixed(2) + 'px', '--zr': G.ZR.toFixed(2) + 'px', '--cvl': G.cv[0].toFixed(2) + 'px', '--cvt': G.cv[1].toFixed(2) + 'px', '--cvw': G.cv[2].toFixed(2) + 'px', '--cvh': G.cv[3].toFixed(2) + 'px', '--gut': (pt ? G.gut : 0).toFixed(2) + 'px', '--pgt': G.pgt.toFixed(2) + 'px' };
      /* the camera: almost straight down on the book (as its art is painted), a long lens (five book-widths away), the book tipped back only a little; and it stands over
         the top of the page, so a leaf standing up mid-turn does not climb above the book: it only leans a little toward the foot of the screen */
      var th = one ? 7 : 9, rad = th * Math.PI / 180, per = Math.round((pt ? G.cv[2] : pw * 1.05) * (one ? 1 : 2) * 5), pad = Hh * (Hh <= 430 ? .04 : .02), cy = pad + (Hh - pad - ph) / 2 + ph / 2;
      if (pt) { cy = cY - (SPD.h / 2 - (SPD.r[1] + SPD.r[3]) / 2) * ks; var dp = 2 * cy - Hh; cm.style.paddingTop = Math.max(0, dp).toFixed(1) + 'px'; cm.style.paddingBottom = Math.max(0, -dp).toFixed(1) + 'px'; cm.style.transformOrigin = '50% ' + cY.toFixed(1) + 'px'; } else { cm.style.paddingTop = cm.style.paddingBottom = cm.style.transformOrigin = ''; }   // (cy: the middle of the page box, which the layout centres; the boards reach a little further down than up)
      V['--per'] = per + 'px'; V['--poy'] = (cy - (ph * .4 + per * Math.sin(rad)) / Math.cos(rad)).toFixed(1) + 'px'; V['--tilt'] = th + 'deg';
      Object.keys(V).forEach(function (k) { root.style.setProperty(k, V[k]); }); if (!pt) hl.style.right = (pw * .006).toFixed(2) + 'px'; else hl.style.right = ''; root.classList.toggle('one', one); root.classList.toggle('pt', pt); return ch ? (lay ? 2 : 1) : 0; };
    size();
    var units = function () { var o = [], i; if (G.one) for (i = 0; i < P.length; i++) o.push({ l: null, r: i }); else for (i = 0; i < P.length; i += 2) o.push({ l: i, r: i + 1 < P.length ? i + 1 : null }); return o; };
    var sideOf = function (p) { return G.one ? 'r' : p % 2 ? 'r' : 'l'; };
    /* ---- a page, top to bottom: lettering, a miniature, the band (left-hand pages), or miniature, lettering, band (right-hand pages), as old books vary it ---- */
    var areas = function (p) { if (P[p].move && art(P[p].pic)) return { tx: [.052, .374], pc: [.38, .878] };   /* (the map is its page's star: nearly the page's width, straight under the lettering) */ return p % 2 ? { pc: [.05, .478], tx: [.492, .862] } : { tx: [.06, .445], pc: [.458, .868] }; };
    var picAR = function (p) { var d = P[p], im = art(d.pic); if (im) return im.naturalWidth / im.naturalHeight; return d.print ? G.W / G.H : BOOK_PIC_AR; };
    var picBox = function (p) { var d = P[p], A = areas(p).pc, ar = picAR(p), painted = !!art(d.pic), ah = (A[1] - A[0]) * G.PH, w = Math.min(G.PW * (painted ? (d.move ? .9 : .86) : d.print ? (d.mouth ? .72 : .8) : .8), ah * (!painted && d.print && d.mouth ? .82 : painted ? 1 : .97) * ar), h = w / ar; return [(G.PW - w) / 2, A[0] * G.PH + (ah - h) / 2, w, h]; };
    var EDGE = (function () { var r = rng(11), p = [], i, n = 9; for (i = 0; i <= n; i++) p.push([i / n, r() * .006]); for (i = 1; i <= n; i++) p.push([1 - r() * .005, i / n]); for (i = n - 1; i >= 0; i--) p.push([i / n, 1 - r() * .006]); for (i = n - 1; i >= 1; i--) p.push([r() * .005, i / n]); return p; })();   // a page's slightly uneven edge
    var blob = function (c, x, y, w, h, seed, sq) { var r = rng(seed), n = sq ? 34 : 22, pts = [], i, q, pw6 = sq || 6; for (i = 0; i < n; i++) { var a = i / n * Math.PI * 2, sx = Math.cos(a), sy = Math.sin(a), e = Math.pow(Math.abs(sx), pw6) + Math.pow(Math.abs(sy), pw6), rr = Math.pow(e, -1 / pw6) * (.95 + r() * .05); pts.push([x + w / 2 + sx * rr * w / 2, y + h / 2 + sy * rr * h / 2]); }
      c.beginPath(); c.moveTo((pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2); for (i = 0; i < n; i++) { q = pts[(i + 1) % n]; c.quadraticCurveTo(pts[i][0], pts[i][1], (pts[i][0] + q[0]) / 2, (pts[i][1] + q[1]) / 2); } c.closePath(); };   // a rounded-off block with a wandering edge (the unframed miniatures' shape)
    var GRAIN = (function () { var g = cvs(128, 128), c = g.getContext('2d'), d = c.createImageData(128, 128), r = rng(5), i; for (i = 0; i < d.data.length; i += 4) { var v = r(); d.data[i] = 90; d.data[i + 1] = 60; d.data[i + 2] = 30; d.data[i + 3] = v * v * 70; } c.putImageData(d, 0, 0); return g; })();
    /* ---- what the pages are made from: the fonts, the pictures (each rasterised once), the tale's first frame as a print ---- */
    var inkOf = function (c, on) { c.fillStyle = on ? '#a5402e' : '#2b1d14'; };
    /* the lettering of a page, laid out ONCE for the whole line (so nothing moves as it writes on): an illuminated initial (two rows tall) on the page that opens a
       spread, a red versal on the others; the words in dark ink, the emphasised ones in red; every letter a touch uneven, as written by hand */
    var layout = function (p) { if (LAY[p]) return LAY[p]; var d = P[p], A = areas(p).tx, K = G.K, c = cvs(4, 4).getContext('2d'), txt = d.text, capOn = p % 2 === 0 && /[A-Za-z]/.test(txt.charAt(0)), body = capOn ? txt.slice(1) : txt, off = capOn ? 1 : 0;
      var red = [], i, j; (d.red || []).forEach(function (w) { var k = txt.indexOf(w); if (k >= 0) for (j = k; j < k + w.length; j++) red[j] = 1; });
      var vers = -1, noRule = d.div === 'none', CR = 2;   // CR: the rows the initial stands beside (s128: two, not three: the shorter lines are lettered bigger, in two or three rows)   // (a line that carries a sentence on ('...so', '...which') starts plain: no versal)
      var maxW = G.PW * .8 * K, maxH = (A[1] - A[0]) * G.PH * K * .98, fs = G.PW * .125 * K, out = null, r = rng(p * 31 + 7);
      for (var guard = 0; guard < 34; guard++, fs *= .965) { var lh = fs * 1.36, cs = capOn ? lh * (CR === 3 ? 2.72 : 1.94) : 0, gap = capOn ? fs * .34 : 0, font = fs.toFixed(2) + 'px ' + BOOK_FONT, vfont = (fs * 1.5).toFixed(2) + 'px ' + BOOK_CAP_FONT;
        var wid = function (k) { c.font = k === vers ? vfont : font; return c.measureText(txt.charAt(k)).width * (k === vers ? 1.04 : 1); };
        var words = [], cur = null; for (i = off; i < txt.length; i++) { var ch = txt.charAt(i); if (ch === ' ') { cur = null; continue; } if (!cur) { cur = { a: i, b: i, w: 0 }; words.push(cur); } cur.b = i; cur.w += wid(i); }
        c.font = font; var spw = c.measureText(' ').width, wrap = function (lim) { var L = [], line = null; words.forEach(function (w) { var room = lim - (capOn && L.length - 1 < CR ? cs + gap : 0); if (line && line.w + spw + w.w <= room) { line.w += spw + w.w; line.words.push(w); } else { line = { w: w.w, words: [w] }; L.push(line); } }); return L; };
        var L = wrap(maxW); if (!capOn && L.length > 1) { var lo = maxW * .45, hi = maxW, n0 = L.length; for (var it = 0; it < 12; it++) { var mid = (lo + hi) / 2; if (wrap(mid).length <= n0) hi = mid; else lo = mid; } L = wrap(hi); }   // (evenly filled lines)
        var bh = Math.max(L.length * lh, cs), over = L.some(function (q, k) { return q.w > maxW - (k < CR && capOn ? cs + gap : 0) + 1; });
        var rH = fs * (noRule ? .2 : art('book-divider-' + (d.div || 'acorn')) ? 1.5 : .9); if ((bh + rH > maxH || L.length > 3 || over) && guard < 33) continue;
        var bw = 0; L.forEach(function (q, k) { bw = Math.max(bw, q.w + (k < CR && capOn ? cs + gap : 0)); }); var x0 = (G.PW * K - bw) / 2, ruleH = fs * (noRule ? .2 : art('book-divider-' + (d.div || 'acorn')) ? 1.5 : .9), y0 = A[0] * G.PH * K + ((A[1] - A[0]) * G.PH * K - bh - ruleH) / 2, gl = [];
        L.forEach(function (q, k) { var ind = k < CR && capOn ? cs + gap : 0, x = capOn ? x0 + ind : (G.PW * K - q.w) / 2, base = y0 + k * lh + lh * .76;
          q.words.forEach(function (w, wi) { if (wi) x += spw; for (var m = w.a; m <= w.b; m++) { var ww = wid(m); gl.push({ i: m, ch: txt.charAt(m), x: x, y: base + (r() - .5) * fs * .03, v: m === vers, red: !!red[m] || m === vers, rot: (r() - .5) * .028, a: .86 + r() * .14 }); x += ww; } }); });
        out = { fs: fs, lh: lh, font: font, vfont: vfont, gl: gl, cap: capOn ? { ch: txt.charAt(0), x: x0, y: y0 + lh * .08, s: cs, box: d.box } : null, rule: { x: G.PW * K / 2, y: y0 + bh + ruleH * .62, w: Math.min(bw, G.PW * K * .5), div: d.div }, lines: L.length, top: y0, bh: bh }; break; }
      return (LAY[p] = out); };
    var drawCap = function (c, L, al) { var q = L.cap; if (!q || al <= 0) return; var s = q.s, x = q.x, y = q.y, i, bx = art('book-initial-' + (q.box || 'red')); c.save(); c.globalAlpha = al; c.translate(x, y);
      if (bx) { c.drawImage(bx, -s * .02, -s * .02, s * 1.04, s * 1.04); c.font = (s * .7).toFixed(1) + 'px ' + BOOK_CAP_FONT; c.textAlign = 'center'; c.textBaseline = 'alphabetic'; c.lineJoin = 'round'; var m0 = c.measureText(q.ch), u0 = m0.actualBoundingBoxAscent || s * .5, d0 = m0.actualBoundingBoxDescent || 0, b0 = s / 2 + (u0 - d0) / 2;   // the painted box; the letter over it in cream, with a thin dark edge so it reads on any of the four colours
        c.strokeStyle = 'rgba(30,16,8,.9)'; c.lineWidth = s * .05; c.strokeText(q.ch, s / 2, b0); c.fillStyle = '#fbeecb'; c.fillText(q.ch, s / 2, b0); c.restore(); return; }
      c.fillStyle = '#2b1d14'; c.fillRect(-s * .03, -s * .03, s * 1.06, s * 1.06); var g = c.createLinearGradient(0, 0, s, s); g.addColorStop(0, '#e2bb55'); g.addColorStop(.5, '#b98a2c'); g.addColorStop(1, '#d9b04c'); c.fillStyle = g; c.fillRect(0, 0, s, s);   // the gilt box
      c.fillStyle = '#8f2f24'; c.fillRect(s * .075, s * .075, s * .85, s * .85); c.strokeStyle = 'rgba(233,220,184,.85)'; c.lineWidth = Math.max(1, s * .012); c.strokeRect(s * .105, s * .105, s * .79, s * .79);
      c.strokeStyle = '#e2bb55'; c.lineWidth = Math.max(1, s * .018); [[.105, .105], [.895, .105], [.105, .895], [.895, .895]].forEach(function (k) { var kx = k[0] * s, ky = k[1] * s, e = s * .075; c.beginPath(); c.ellipse(kx, ky, e, e * .5, Math.PI / 4, 0, 6.3); c.stroke(); c.beginPath(); c.ellipse(kx, ky, e, e * .5, -Math.PI / 4, 0, 6.3); c.stroke(); });   // a little knot at each corner
      c.fillStyle = 'rgba(226,187,85,.5)'; for (i = 0; i < 4; i++) { c.beginPath(); c.arc(s * (.3 + (i % 2) * .4), s * (.2 + (i >> 1) * .6), s * .014, 0, 6.3); c.fill(); }
      c.font = (s * .78).toFixed(1) + 'px ' + BOOK_CAP_FONT; c.textAlign = 'center'; c.textBaseline = 'alphabetic'; c.lineJoin = 'round'; c.strokeStyle = '#2b1d14'; c.lineWidth = s * .035; var m = c.measureText(q.ch), up = m.actualBoundingBoxAscent || s * .56, dn = m.actualBoundingBoxDescent || 0, by = s / 2 + (up - dn) / 2;
      c.strokeText(q.ch, s / 2, by); c.fillStyle = '#f0dfae'; c.fillText(q.ch, s / 2, by); c.restore(); };
    var drawWords = function (c, L, n) { var i, q; c.textAlign = 'left'; c.textBaseline = 'alphabetic'; for (i = 0; i < L.gl.length && i < n; i++) { q = L.gl[i]; c.save(); c.translate(q.x, q.y); c.rotate(q.rot); c.globalAlpha = q.a; c.font = q.v ? L.vfont : L.font; inkOf(c, q.red); c.fillText(q.ch, 0, 0); c.restore(); } };
    /* s129 · B4: a small 'Next' at the foot of every right-hand page, in the page's own ink: it belongs to the page (it turns with it). The line under it (.nx, a
       layer over the page that is up) fills as the page's hold runs out; a press anywhere on the page turns it now. */
    var nextBox = function (p) { var K = G.K, fs = G.PW * .048 * K, c = cvs(4, 4).getContext('2d'); c.font = fs.toFixed(2) + 'px ' + BOOK_FONT; var d = P[p], bi = art('book-band-' + (d.band || 1)), bw = G.PW * .86 * K, bh = bi ? bw * bi.naturalHeight / bi.naturalWidth : G.PH * .058 * K;   /* (40% bigger than it was, and above the right-hand end of the band: there is no room for it under the band at this size) */
      var tw = c.measureText('Next').width, ch = fs * .5, xr = G.PW * .93 * K, yb = G.PH * .915 * K - bh / 2 - Math.max(G.PH * .017 * K, fs * .34); return { fs: fs, tw: tw, ch: ch, x0: xr - ch - fs * .22 - tw, xr: xr, yb: yb }; };
    var drawNext = function (c, p, al) { if (al <= 0 || sideOf(p) !== 'r') return; var q = nextBox(p), fs = q.fs; c.save(); c.globalAlpha = .8 * al; c.fillStyle = c.strokeStyle = '#2b1d14'; c.font = fs.toFixed(2) + 'px ' + BOOK_FONT; c.textAlign = 'left'; c.textBaseline = 'alphabetic'; c.fillText('Next', q.x0, q.yb);
      c.lineWidth = Math.max(1, fs * .09); c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(q.xr - q.ch * .62, q.yb - fs * .5); c.lineTo(q.xr - q.ch * .12, q.yb - fs * .26); c.lineTo(q.xr - q.ch * .62, q.yb - fs * .02); c.stroke(); c.restore(); };   // (the word, and a small drawn chevron)
    var drawRule = function (c, L, al) { if (al <= 0 || L.rule.div === 'none') return; var q = L.rule, w = q.w, e = L.fs * .2, dv = art('book-divider-' + (q.div || 'acorn')); if (dv) { var dw = Math.min(G.PW * G.K * .4, L.fs * 5.2), dh = dw * dv.naturalHeight / dv.naturalWidth; c.save(); c.globalAlpha = al; c.drawImage(dv, q.x - dw / 2, q.y - dh * .42, dw, dh); c.restore(); return; }   // (the painted flourish under the line)
      c.save(); c.globalAlpha = al; c.translate(q.x, q.y); c.lineCap = 'round'; c.strokeStyle = '#a5402e'; c.lineWidth = Math.max(1, L.fs * .045); c.beginPath(); c.moveTo(-w / 2, -e * .3); c.lineTo(-e * 1.6, -e * .3); c.moveTo(e * 1.6, -e * .3); c.lineTo(w / 2, -e * .3); c.stroke();
      c.strokeStyle = '#c2952f'; c.beginPath(); c.moveTo(-w / 2 + e, e * .3); c.lineTo(-e * 1.6, e * .3); c.moveTo(e * 1.6, e * .3); c.lineTo(w / 2 - e, e * .3); c.stroke(); bookGlyph(c, 'diamond', 0, 0, e * 2.6, '#27406a', '#d9b04c'); c.restore(); };
    var ORN = { d: ['diamond', '#27406a', '#d9b04c'], s: ['star', '#c9a03c', '#c9a03c'], f: ['fleur', '#2f8f8a', '#2f8f8a'], r: ['rosette', '#a5402e', '#ecdcb4'] };
    /* the small things in the gaps (few: the lettering and the miniature stay the two biggest things on a page): a painted vine corner either side of a square
       miniature where a page asks for them, and a handful of little ornaments where there is room */
    var drawOrn = function (c, p, al) { if (al <= 0) return; var K = G.K, d = P[p], s = G.PW * .04 * K, b = picBox(p), A = areas(p), side = (G.PW - b[2]) / 2, list = [], pcY = (A.pc[0] + A.pc[1]) / 2;
      c.save(); c.globalAlpha = al;
      if (d.corners && side > G.PW * .13) d.corners.forEach(function (n, k) { var im = art('book-corner-' + n); if (!im) return; var w = Math.min(side * .94, G.PW * .23) * K, h = w * im.naturalHeight / im.naturalWidth, y = (b[1] - G.PH * .012) * K; c.save(); if (k) { c.translate(G.PW * K, 0); c.scale(-1, 1); } c.drawImage(im, G.PW * .03 * K, y, w, h); c.restore(); });   // (mirrored for the right-hand side: an ornament, not a character)
      if (side > G.PW * .1) { if (d.corners) list = [[.09, A.pc[1] - .05, 'r'], [.91, A.pc[1] - .05, 'r']]; else list = [[.09, pcY - .09, p % 4 ? 's' : 'd'], [.91, pcY - .09, p % 4 ? 's' : 'd'], [.09, pcY + .09, p % 4 ? 'f' : 'r'], [.91, pcY + .09, p % 4 ? 'f' : 'r']]; }
      else if (!d.move) list = [[.075, (A.tx[0] + A.tx[1]) / 2 + (p % 2 ? .0 : .13), 'd'], [.925, (A.tx[0] + A.tx[1]) / 2 + (p % 2 ? .0 : .13), 'd']];   // (the map fills its page: nothing beside it)
      list.forEach(function (q) { var o = ORN[q[2]], im = art('book-orn-' + o[0]); if (im) { var h = s * im.naturalHeight / im.naturalWidth; c.drawImage(im, q[0] * G.PW * K - s / 2, q[1] * G.PH * K - h / 2, s, h); } else bookGlyph(c, o[0] === 'rosette' ? 'star' : o[0], q[0] * G.PW * K, q[1] * G.PH * K, s * .8, o[1], o[2]); }); c.restore(); };
    var drawBand = function (c, p) { var K = G.K, d = P[p], n = d.band || 1, im = art('book-band-' + n), w = G.PW * .86 * K, x = (G.PW * K - w) / 2, h = im ? w * im.naturalHeight / im.naturalWidth : G.PH * .058 * K, y = G.PH * .915 * K - h / 2, m = BOOK_BANDS[n] || BOOK_BANDS[1], i, cnt = 9, r = rng(n * 13 + p), md = d.medal && art('book-medal-' + d.medal);
      if (im) c.drawImage(im, x, y, w, h);
      else { c.save(); c.beginPath(); c.moveTo(x, y + r() * h * .05); for (i = 1; i <= 12; i++) c.lineTo(x + w * i / 12, y + r() * h * .06); for (i = 12; i >= 0; i--) c.lineTo(x + w * i / 12, y + h - r() * h * .06); c.closePath(); c.fillStyle = '#27406a'; c.fill(); c.clip();   // (the stand-in: a deep blue strip, its edges hand-painted)
        c.fillStyle = 'rgba(12,22,44,.28)'; for (i = 0; i < 26; i++) c.fillRect(x + r() * w, y + r() * h, w * .05, h * .08);
        c.strokeStyle = '#d9b04c'; c.lineWidth = Math.max(1, h * .04); c.beginPath(); c.moveTo(x, y + h * .1); c.lineTo(x + w, y + h * .1); c.moveTo(x, y + h * .9); c.lineTo(x + w, y + h * .9); c.stroke();
        for (i = 0; i < cnt; i++) bookGlyph(c, m[i % 2], x + w * (i + .5) / cnt, y + h * .5, h * .6, i % 2 ? '#d9b04c' : '#ecdcb4', i % 2 ? '#ecdcb4' : '#c0453a'); c.restore(); }
      if (md) { var ms = G.PW * .135 * K, mh = ms * md.naturalHeight / md.naturalWidth; c.drawImage(md, G.PW * K / 2 - ms / 2, y + h / 2 - mh / 2, ms, mh); } };   // (a small roundel sitting on the middle of the band)
    /* a soft, slightly wandering edge for a painted panel (so it sits in the page like paint, with no hard line): a mask the panel is cut by */
    var feather = function (w, h, seed) { var k = (seed || 1) + '|' + Math.round(w) + '|' + Math.round(h); if (feather.c && feather.c[k]) return feather.c[k]; var m = cvs(w, h), x = m.getContext('2d'), e = Math.max(3, Math.min(w, h) * .024); x.save(); x.shadowColor = '#000'; x.shadowBlur = e * 1.1; x.shadowOffsetX = w * 3; x.translate(-w * 3, 0); blob(x, e * 1.5, e * 1.5, w - e * 3, h - e * 3, seed || 1, 10); x.fillStyle = '#000'; x.fill(); x.restore();
      x.save(); x.globalAlpha = .9; blob(x, e * 2.1, e * 2.1, w - e * 4.2, h - e * 4.2, (seed || 1) + 3, 10); x.fillStyle = '#000'; x.fill(); x.restore(); (feather.c = feather.c || {})[k] = m; return m; };
    var panel = function (src, sx, sy, sw, sh, w, h, seed) { var t = cvs(w, h), x = t.getContext('2d'); x.drawImage(src, sx, sy, sw, sh, 0, 0, w, h); x.globalCompositeOperation = 'destination-in'; x.drawImage(feather(w, h, seed), 0, 0); return t; };   // a piece of a painting, cut to that soft edge
    var drawPic = function (c, p, view) { var d = P[p], K = G.K, b = picBox(p), x = b[0] * K, y = b[1] * K, w = b[2] * K, h = b[3] * K, src, im = art(d.pic);
      if (im && BOOK_PANEL[d.pic]) { src = d.move && plane[d.pic] ? plane[d.pic] : im; var v = view || [0, 0, 1, 1], nw = src.naturalWidth || src.width, nh = src.naturalHeight || src.height; c.drawImage(panel(src, v[0] * nw, v[1] * nh, v[2] * nw, v[3] * nh, Math.round(w), Math.round(h), 5 + p), x, y); if (d.move) bookNames(c, x - v[0] / v[2] * w, y - v[1] / v[3] * h, w / v[2], h / v[3], MAP_NAMES, v); return; }   // an opaque painting (a map's names lettered over it: those wholly in view): laid on normally, its edge soft
      if (im) { c.save(); c.globalCompositeOperation = 'multiply'; c.drawImage(im, x, y, w, h); c.restore(); return; }                                    // a miniature (its paper is white): multiplied onto the page, so no rectangle shows
      if (d.print) { if (d.mouth) { var r = rng(77), i; c.save(); blob(c, x - w * .2, y - h * .52, w * 1.4, h * 1.66, 9); c.fillStyle = '#1a2238'; c.fill(); c.clip(); for (i = 0; i < 26; i++) bookGlyph(c, 'star', x - w * .18 + r() * w * 1.36, y - h * .5 + r() * h * .46, w * (.012 + r() * .016), i % 3 ? '#ecdcb4' : '#d9b04c');   // (the stand-in: the tale's first frame, printed) a patch of night sky…
            c.beginPath(); c.arc(x + w * .98, y - h * .3, w * .05, 0, 6.3); c.fillStyle = '#ecdcb4'; c.fill(); c.restore();
            c.save(); c.beginPath(); c.moveTo(x - w * .19, y + h * 1.13); c.lineTo(x - w * .13, y + h * .3); c.lineTo(x + w * .08, y - h * .13); c.lineTo(x + w * .3, y - h * .24); c.lineTo(x + w * .44, y - h * .4); c.lineTo(x + w * .58, y - h * .2); c.lineTo(x + w * .86, y - h * .12); c.lineTo(x + w * 1.1, y + h * .26); c.lineTo(x + w * 1.19, y + h * 1.13); c.closePath(); c.fillStyle = '#4a4e63'; c.fill(); c.strokeStyle = '#2b1d14'; c.lineWidth = Math.max(1.5, w * .008); c.lineJoin = 'round'; c.stroke();   // …and the mountain the cave is in
            c.strokeStyle = 'rgba(43,29,20,.5)'; c.lineWidth = Math.max(1, w * .004); for (i = 0; i < 22; i++) { var hx = x - w * .12 + r() * w * 1.24, hy = y - h * .1 + r() * h * 1.16; c.beginPath(); c.moveTo(hx, hy); c.lineTo(hx + w * .03, hy + h * .05); c.stroke(); } c.restore(); }
        if (printCv) c.drawImage(printCv, x, y, w, h); return; }
      if (d.move || plane[d.pic]) { src = plane[d.pic]; if (!src) return; var v2 = view || [0, 0, 1, 1]; c.save(); blob(c, x, y, w, h, 3 + p); c.clip(); c.drawImage(src, v2[0] * src.width, v2[1] * src.height, v2[2] * src.width, v2[3] * src.height, x, y, w, h); c.restore(); c.save(); blob(c, x, y, w, h, 3 + p); c.strokeStyle = '#2b1d14'; c.lineWidth = Math.max(1.5, w * .007); c.stroke(); c.restore(); return; }
      src = pic[d.pic]; if (src) c.drawImage(src, x, y, w, h); };
    /* a page with nothing written on it yet: the paper (warm, uneven, darker to the gutter and the edges), a faint ruled border, the miniature, the band */
    /* the painted page's own outline, read from the art: the paper is filled out from the middle of the page as far as its drawn edge line, and that line is taken in.
       Every page bitmap (and so every leaf) is cut to it: a leaf lifting off is the painted page itself. (If the art cannot be read back: a plain soft-cornered sheet.) */
    var PMASK = {}, pageMask = function (side) { if (PMASK[side]) return PMASK[side]; var R = BOOK_SPREAD[side], w = R[2] - R[0], h = R[3] - R[1], m = cvs(w, h), x = m.getContext('2d'), ok = false, i, j;
      try { x.drawImage(art('book-spread'), R[0], R[1], w, h, 0, 0, w, h); var id = x.getImageData(0, 0, w, h), px = id.data, n = w * h, seen = new Uint8Array(n), q = new Int32Array(n), a = 0, b = 0;
        var pap = function (k) { var o = k * 4; return !seen[k] && px[o + 3] > 200 && px[o] * .3 + px[o + 1] * .59 + px[o + 2] * .11 > 145; }, add = function (k) { if (pap(k)) { seen[k] = 1; q[b++] = k; } };
        add((h >> 1) * w + (w >> 1)); while (a < b) { i = q[a++]; j = i % w; if (j > 0) add(i - 1); if (j < w - 1) add(i + 1); if (i >= w) add(i - w); if (i < n - w) add(i + w); }
        if (b > n * .8 && b < n * .985) { for (i = 0; i < n; i++) { px[i * 4] = px[i * 4 + 1] = px[i * 4 + 2] = 0; px[i * 4 + 3] = seen[i] ? 255 : 0; } x.putImageData(id, 0, 0); var m2 = cvs(w, h), y = m2.getContext('2d'); for (j = 0; j < 8; j++) y.drawImage(m, Math.round(Math.cos(j * Math.PI / 4) * 2.6), Math.round(Math.sin(j * Math.PI / 4) * 2.6)); y.drawImage(m, 0, 0); m = m2; ok = true; } } catch (e) {}
      if (!ok) { m = cvs(w, h); x = m.getContext('2d'); var e2 = w * .03, x0 = side === 'l' ? w * .012 : 0, x1 = side === 'l' ? w : w * .988; x.beginPath(); x.moveTo(x0 + (side === 'l' ? e2 : 0), h * .016); x.lineTo(x1 - (side === 'l' ? 0 : e2), h * .016); if (side !== 'l') x.quadraticCurveTo(x1, h * .016, x1, h * .016 + e2); x.lineTo(x1, h * .984 - (side === 'l' ? 0 : e2)); if (side !== 'l') x.quadraticCurveTo(x1, h * .984, x1 - e2, h * .984); x.lineTo(x0 + (side === 'l' ? e2 : 0), h * .984); if (side === 'l') x.quadraticCurveTo(x0, h * .984, x0, h * .984 - e2); x.lineTo(x0, h * .016 + (side === 'l' ? e2 : 0)); if (side === 'l') x.quadraticCurveTo(x0, h * .016, x0 + e2, h * .016); x.closePath(); x.fill(); }
      PMASK[side] = m; PMASK[side + 'ok'] = ok; return m; };
    var cutPage = function (c, side, w, h) { c.save(); c.globalCompositeOperation = 'destination-in'; c.imageSmoothingEnabled = true; c.drawImage(pageMask(side), 0, 0, w, h); c.restore(); };
    var dressPage = function (p) { var key = 'd' + p; if (bmp[key]) return bmp[key]; var b = basePage(p), cv2 = cvs(b.width, b.height), c = cv2.getContext('2d'), L = layout(p); c.drawImage(b, 0, 0); drawOrn(c, p, 1); drawCap(c, L, 1); drawRule(c, L, 1); return (bmp[key] = cv2); };   /* s135 · a page as it ARRIVES: its paper and miniature (basePage) with its ornaments, its initial and its divider: every picture on it, and none of its words */
    var basePage = function (p, nopic) { var key = (nopic ? 'n' : 'b') + p; if (bmp[key]) return bmp[key]; var K = G.K, w = G.PW * K, h = G.PH * K, cv2 = cvs(w, h), c = cv2.getContext('2d'), side = sideOf(p), r = rng(p * 17 + 3), i, g;
      if (G.pt) { var R = BOOK_SPREAD[side], sim = art('book-spread'); c.drawImage(sim, R[0], R[1], R[2] - R[0], R[3] - R[1], 0, 0, w, h); if (!nopic) drawPic(c, p); drawBand(c, p); cutPage(c, side, w, h); return (bmp[key] = cv2); }   // the painted book's own paper (this page's part of it), so a leaf lifts off the painted page without a seam
      c.beginPath(); EDGE.forEach(function (q, k) { if (k) c.lineTo(q[0] * w, q[1] * h); else c.moveTo(q[0] * w, q[1] * h); }); c.closePath(); c.clip();
      g = c.createRadialGradient(w * .42, h * .34, w * .08, w * .5, h * .5, h * .78); g.addColorStop(0, '#f6e6bd'); g.addColorStop(.55, '#ecd7a6'); g.addColorStop(1, '#d2b57c'); c.fillStyle = g; c.fillRect(0, 0, w, h);
      for (i = 0; i < 7; i++) { var bx = r() * w, by = r() * h, br = w * (.18 + r() * .26); g = c.createRadialGradient(bx, by, 0, bx, by, br); g.addColorStop(0, i % 2 ? 'rgba(150,104,44,.07)' : 'rgba(255,244,214,.09)'); g.addColorStop(1, 'rgba(150,104,44,0)'); c.fillStyle = g; c.fillRect(bx - br, by - br, br * 2, br * 2); }   // the uneven tone of old paper
      c.save(); c.globalAlpha = .5; c.fillStyle = c.createPattern(GRAIN, 'repeat'); c.fillRect(0, 0, w, h); c.restore();
      if (P[p].singed) { g = c.createRadialGradient(w / 2, h * .48, h * .3, w / 2, h * .5, h * .7); g.addColorStop(0, 'rgba(60,34,14,0)'); g.addColorStop(.7, 'rgba(70,40,16,.34)'); g.addColorStop(1, 'rgba(26,14,8,.9)'); c.fillStyle = g; c.fillRect(0, 0, w, h); }
      g = c.createLinearGradient(side === 'l' ? w : 0, 0, side === 'l' ? w * .8 : w * .2, 0); g.addColorStop(0, 'rgba(66,36,12,.5)'); g.addColorStop(.45, 'rgba(66,36,12,.14)'); g.addColorStop(1, 'rgba(66,36,12,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h);   // into the gutter
      g = c.createLinearGradient(side === 'l' ? 0 : w, 0, side === 'l' ? w * .08 : w * .92, 0); g.addColorStop(0, 'rgba(96,58,22,.26)'); g.addColorStop(1, 'rgba(96,58,22,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h);
      g = c.createLinearGradient(0, h, 0, h * .93); g.addColorStop(0, 'rgba(96,58,22,.22)'); g.addColorStop(1, 'rgba(96,58,22,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h); g = c.createLinearGradient(0, 0, 0, h * .06); g.addColorStop(0, 'rgba(96,58,22,.18)'); g.addColorStop(1, 'rgba(96,58,22,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h);
      c.strokeStyle = 'rgba(122,62,30,.3)'; c.lineWidth = Math.max(1, w * .0026); c.strokeRect(w * .045, h * .034, w * .91, h * .932); c.strokeStyle = 'rgba(165,64,46,.24)'; c.strokeRect(w * .056, h * .042, w * .888, h * .916);   // a faint ruled border
      if (!nopic) drawPic(c, p); drawBand(c, p); return (bmp[key] = cv2); };
    var repic = function (c, p, view) { var q = picBox(p), K = G.K, x = Math.floor(q[0] * K) - 2, y = Math.floor(q[1] * K) - 2, w = Math.ceil(q[2] * K) + 4, h = Math.ceil(q[3] * K) + 4; c.drawImage(basePage(p, true), x, y, w, h, x, y, w, h); drawPic(c, p, view); };   // the picture alone, painted again on clean paper (a map caught at another view)
    var typedPage = function (p, view) { var key = 't' + p; if (bmp[key] && !view) return bmp[key]; var b = basePage(p), cv2 = cvs(b.width, b.height), c = cv2.getContext('2d'), L = layout(p); c.drawImage(b, 0, 0); if (P[p].move) repic(c, p, view || bookMoveTo(P[p].move).view);
      drawOrn(c, p, 1); drawCap(c, L, 1); drawWords(c, L, 1e9); drawRule(c, L, 1); drawNext(c, p, 1); if (!view) bmp[key] = cv2; return cv2; };
    var blank = function () { if (bmp.blank) return bmp.blank; var b = cvs(G.PW * G.K, G.PH * G.K), c = b.getContext('2d'); if (G.pt) { var R = BOOK_SPREAD.l; c.drawImage(art('book-spread'), R[0], R[1], R[2] - R[0], R[3] - R[1], 0, 0, b.width, b.height); cutPage(c, 'l', b.width, b.height); return (bmp.blank = b); } c.beginPath(); EDGE.forEach(function (q, k) { if (k) c.lineTo(q[0] * b.width, q[1] * b.height); else c.moveTo(q[0] * b.width, q[1] * b.height); }); c.closePath(); c.fillStyle = '#e6d09f'; c.fill(); return (bmp.blank = b); };
    /* ---- the pages on show. Each side holds three bitmaps: the page that is up (cur), the one a forward turn will bring (next) and the one a turn back will
       bring (prev), drawn ahead of time, so a turn only shows and hides them ---- */
    var HD = { l: { el: hl, cv: [], cur: 0, next: 1, prev: 2 }, r: { el: hr, cv: [], cur: 0, next: 1, prev: 2 } };
    var holders = function () { ['l', 'r'].forEach(function (k) { var h = HD[k]; h.cv.forEach(function (c) { c.remove(); }); h.cv = []; for (var i = 0; i < 3; i++) { var c = cvs(G.PW * G.K, G.PH * G.K); c.className = 'pg'; c.style.visibility = 'hidden'; h.el.insertBefore(c, h.el.firstChild); h.cv.push(c); } h.cur = 0; h.next = 1; h.prev = 2; }); };
    var put = function (side, role, bitmap, show, z) { var h = HD[side], c = h.cv[h[role]], x = c.getContext('2d'); x.clearRect(0, 0, c.width, c.height); if (bitmap) x.drawImage(bitmap, 0, 0); c.style.visibility = bitmap && show ? 'visible' : 'hidden'; c.style.zIndex = z || 1; };
    var vis = function (side, role, on, z) { var h = HD[side], c = h.cv[h[role]]; c.style.visibility = on ? 'visible' : 'hidden'; if (z) c.style.zIndex = z; };
    var rot = function (side, fwd) { var h = HD[side], c = h.cur, n = h.next, p = h.prev; if (fwd) { h.cur = n; h.prev = c; h.next = p; } else { h.cur = p; h.next = c; h.prev = n; } };
    var curCtx = function (p) { var h = HD[sideOf(p)]; return h.cv[h.cur].getContext('2d'); };
    /* ---- the leaf: N strips, each hinged to the one before it; front = a right-hand page, back = a left-hand page. Two are kept ready under the table: one for
       the next turn forward, one for a turn back ---- */
    var mkLeaf = function () { var lw = mk('lw'), lf = mk('lf'), host = lf, w = G.PW / N, J = [], F2 = [], B2 = [], cw = Math.round((w + 1) * G.K), chh = Math.round(G.PH * G.K);
      lw.style.transform = 'translateZ(-60px) scale(.5)'; lf.style.width = w.toFixed(3) + 'px';
      for (var k = 0; k < N; k++) { var jt = k ? mk('jt') : lf; if (k) { jt.style.cssText = 'left:100%;width:100%'; host.appendChild(jt); } J.push(jt);
        ['f', 'b'].forEach(function (f) { var fc = mk('fc ' + f), c = cvs(cw, chh); fc.appendChild(c); jt.appendChild(fc); (f === 'f' ? F2 : B2).push(c); });
        host = jt; }
      lw.appendChild(lf); sp.appendChild(lw); return { lw: lw, lf: lf, J: J, F: F2, B: B2, A: [], ok: false }; };
    var leafFace = function (lfo, front, bitmap) { var w = G.PW / N * G.K, list = front ? lfo.F : lfo.B; for (var k = 0; k < N; k++) { var c = list[k], x = c.getContext('2d'), sx = (front ? k : N - 1 - k) * w - .5 * G.K; x.clearRect(0, 0, c.width, c.height); if (bitmap) x.drawImage(bitmap, sx, 0, c.width, c.height, 0, 0, c.width, c.height); } };
    var LEAF = { f: null, b: null };
    var ease = function (u) { return u <= 0 ? 0 : u >= 1 ? 1 : .5 - .5 * Math.cos(Math.PI * u); };
    /* the curl: every strip turns through the same half circle on the same smooth curve, the free edge first and the spine last, so the bend travels through the leaf
       as a wave; the leaf lifts a little toward the camera on the way; each strip is lit by the way it faces the candle; its shadow sweeps the page beneath */
    var CURL = .26, SAMPLES = 36, LIGHT = [-.5, .866];
    /* a leaf's animations are MADE ahead of time too (held at their first frame), so the turn's first frame only starts them */
    var leafArm = function (lfo, fwd) { lfo.A.forEach(function (x) { try { x.cancel(); } catch (e) {} }); var A = [], w = G.PW / N, i, k, zA = fwd ? G.ZR + 1.4 : G.ZL + 1.4, zB = fwd ? G.ZL + 1.4 : G.ZR + 1.4, lift = 9 * G.u, O = { duration: DUR, easing: 'linear', fill: 'both' };
      var phi = function (k2, t) { var d = CURL * (1 - (k2 + .5) / N), e = ease((t - d) / (1 - CURL)); return fwd ? -180 * e : -180 * (1 - e); };
      var KF = [], KS = [], sR = [], sL = []; for (k = 0; k < N; k++) { KF.push([]); KS.push([[], []]); }
      for (i = 0; i <= SAMPLES; i++) { var t = i / SAMPLES, prev = 0, xe = 0, hmax = 0, hz = 0;
        for (k = 0; k < N; k++) { var a = phi(k, t), rad = a * Math.PI / 180, nx = Math.sin(rad), nz = Math.cos(rad), lam = (nx * LIGHT[0] + nz * LIGHT[1]) / LIGHT[1], bf = .58 + .42 * Math.max(0, lam), bb = .58 + .42 * Math.max(0, -lam);
          KF[k].push(k ? 'rotateY(' + (a - prev).toFixed(3) + 'deg)' : 'translateZ(' + (zA + (zB - zA) * ease(t) + lift * Math.sin(Math.PI * t)).toFixed(2) + 'px) rotateY(' + a.toFixed(3) + 'deg)');
          KS[k][0].push('brightness(' + Math.min(1.1, bf).toFixed(3) + ')'); KS[k][1].push('brightness(' + Math.min(1.1, bb).toFixed(3) + ')');   // (a strip is shaded by how it faces the candle: the page's own shape keeps its edge, there is no backing sheet)
          xe += w * Math.cos(rad); hz += w * -Math.sin(rad); hmax = Math.max(hmax, hz); prev = a; }
        var hgt = Math.min(1, hmax / (G.PW * .5)); sR.push({ transform: 'scaleX(' + Math.max(.02, Math.min(1, xe / G.PW + .06)).toFixed(3) + ')', opacity: (xe > -G.PW * .05 ? .62 * hgt : 0).toFixed(3) }); sL.push({ transform: 'scaleX(' + Math.max(.02, Math.min(1, -xe / G.PW + .06)).toFixed(3) + ')', opacity: (xe < G.PW * .05 ? .4 * hgt : 0).toFixed(3) }); }
      var an = function (el, kf) { if (el && el.animate) A.push(el.animate(kf, O)); };
      for (k = 0; k < N; k++) { an(lfo.J[k], KF[k].map(function (v) { return { transform: v }; })); an(lfo.F[k], KS[k][0].map(function (v) { return { filter: v }; })); an(lfo.B[k], KS[k][1].map(function (v) { return { filter: v }; })); }
      A.forEach(function (x) { try { x.pause(); x.currentTime = 0; } catch (e) {} }); lfo.A = A; lfo.sR = sR; lfo.sL = sL; lfo.fwd = fwd; lfo.O = O; };
    var leafGo = function (lfo, fwd) { if (!lfo.A.length || lfo.fwd !== fwd) leafArm(lfo, fwd); var A = lfo.A.slice(), O = lfo.O;
      if (sdR.animate) { A.push(sdR.animate(lfo.sR, O)); if (!G.one) A.push(sdL.animate(lfo.sL, O)); }
      if (G.one && lfo.lw.animate) A.push(lfo.lw.animate(fwd ? [{ opacity: 1 }, { opacity: 1, offset: .5 }, { opacity: 0, offset: .82 }, { opacity: 0 }] : [{ opacity: 0 }, { opacity: 0, offset: .18 }, { opacity: 1, offset: .5 }, { opacity: 1 }], O));   // (one page: the sheet goes over and out of sight)
      var tl = document.timeline && document.timeline.currentTime; A.forEach(function (x) { try { x.currentTime = 0; x.play(); if (tl != null) x.startTime = tl; } catch (e) {} });
      lfo.lw.style.transform = 'none'; lfo.up = true; lfo.A = A; return A; };
    var leafHold = function () { ['f', 'b'].forEach(function (k) { var l = LEAF[k]; if (l && !l.up) l.A.forEach(function (x) { try { x.pause(); x.currentTime = 0; } catch (e) {} }); }); };   // (the tale's resume plays every held animation in the stage: a leaf that is only waiting is held again)
    var leafPark = function (lfo) { if (!lfo) return; lfo.A.forEach(function (x) { try { x.cancel(); } catch (e) {} }); lfo.A = []; lfo.up = false; lfo.lw.style.transform = 'translateZ(-60px) scale(.5)'; lfo.lw.style.opacity = ''; lfo.ok = false; };   // (parked under the table, small, but still drawn: its strips are ready on the graphics card when its turn comes)
    var leafRest = function (lfo, fwd) { lfo.lf.style.transform = 'translateZ(' + ((fwd ? G.ZR : G.ZL) + 1.4).toFixed(2) + 'px) rotateY(' + (fwd ? 0 : -180) + 'deg)'; };
    /* ---- getting ready for the turns either side of the spread that is up, in the quiet moments (three small jobs, a frame apart) ---- */
    var prepT = [], prepOff = function () { prepT.forEach(unsched); prepT = []; };
    var prepF = function () { var U = units(), n = U[unit + 1]; if (!n || LEAF.f.ok) return; put('r', 'next', n.r != null ? dressPage(n.r) : null, true, 2); if (!G.one) put('l', 'next', n.l != null ? dressPage(n.l) : null, false, 2);
      leafFace(LEAF.f, true, typedPage(U[unit].r)); leafFace(LEAF.f, false, G.one ? blank() : dressPage(n.l)); leafRest(LEAF.f, true); leafArm(LEAF.f, true); LEAF.f.ok = true; };
    var prepB = function () { var U = units(), q = U[unit - 1]; if (!q || LEAF.b.ok) return; put('r', 'prev', typedPage(q.r), false, 2); if (!G.one) put('l', 'prev', typedPage(q.l), true, 2);
      leafFace(LEAF.b, true, typedPage(q.r)); leafFace(LEAF.b, false, G.one ? blank() : typedPage(U[unit].l)); leafRest(LEAF.b, false); leafArm(LEAF.b, false); LEAF.b.ok = true; };
    var prep = function () { prepOff(); if (ended) return; prepT.push(sched(function () { if (!turning) prepF(); }, 90)); prepT.push(sched(function () { if (!turning) prepB(); }, 220)); };
    /* ---- the windows over a page: the map on its plane (it moves), the first frame's print (the push-in ends on it) ---- */
    var win = null, winOff = function () { if (win) { if (win.an) { try { win.an.cancel(); } catch (e) {} } unsched(win.t); if (win.keep) win.el.style.zIndex = 0; else win.el.remove(); win = null; } };
    var FPAD = 2, frameOf = function (p, soft) { var b = picBox(p), K = G.K, pd = FPAD * K, fr = cvs(b[2] * K + 2 * pd, b[3] * K + 2 * pd), c = fr.getContext('2d'), w = fr.width - 2 * pd, h = fr.height - 2 * pd; c.drawImage(basePage(p, true), b[0] * K - pd, b[1] * K - pd, fr.width, fr.height, 0, 0, fr.width, fr.height); c.globalCompositeOperation = 'destination-out';
      if (soft) c.drawImage(feather(Math.round(w), Math.round(h), 5 + p), pd, pd, w, h); else { c.translate(pd, pd); blob(c, 0, 0, w, h, 3 + p); c.fill(); c.globalCompositeOperation = 'source-over'; blob(c, 0, 0, w, h, 3 + p); c.strokeStyle = '#2b1d14'; c.lineWidth = Math.max(1.5, w * .007); c.stroke(); }
      fr.className = 'mc'; fr.style.cssText = 'position:absolute;left:' + (-FPAD) + 'px;top:' + (-FPAD) + 'px;width:calc(100% + ' + 2 * FPAD + 'px);height:calc(100% + ' + 2 * FPAD + 'px);transform:none'; return fr; };   // the page itself with a hole the shape of its picture (soft-edged for a painting): what moves in the window shows through it, so its edge stays the page's. (It laps the window by 2px all round, so no hairline of the picture shows at the window's edge.)
    var mapWin = function (p) { var b = picBox(p), h = HD[sideOf(p)], el = mk('mw'), src = plane[P[p].pic], z = cvs(src.width, src.height), zm = mk('zm'), labs = [], painted = !!art(P[p].pic); z.getContext('2d').drawImage(src, 0, 0); zm.appendChild(z);
      if (painted) { var to = bookMoveTo(P[p].move), mc = cvs(4, 4).getContext('2d'); MAP_NAMES.forEach(function (q) { var pts = bookNameBox(mc, q, src.width, src.height); if (!bookNameIn(pts, [0, 0, 1, 1])) return; var x0 = 1, y0 = 1, x1 = 0, y1 = 0, e, out = -1; pts.forEach(function (t) { x0 = Math.min(x0, t[0]); y0 = Math.min(y0, t[1]); x1 = Math.max(x1, t[0]); y1 = Math.max(y1, t[1]); });   // each name on its own small sheet over the map, so it can fade
          var pad = q.size * .5; x0 -= pad; x1 += pad; y0 -= pad * 1.5; y1 += pad * 1.5; var lc = cvs((x1 - x0) * src.width, (y1 - y0) * src.height); bookNames(lc.getContext('2d'), -x0 * src.width, -y0 * src.height, src.width, src.height, [q]);
          lc.style.cssText = 'left:' + (x0 * 100).toFixed(3) + '%;top:' + (y0 * 100).toFixed(3) + '%;width:' + ((x1 - x0) * 100).toFixed(3) + '%;height:' + ((y1 - y0) * 100).toFixed(3) + '%;will-change:opacity'; zm.appendChild(lc);
          for (e = 1; e <= 40 && out < 0; e++) if (!bookNameIn(pts, to.at(e / 40))) out = e / 40;   // (how far into the move this name stops being wholly in view: it has faded out just before)
          labs.push({ el: lc, kf: out < 0 ? null : [{ opacity: 1, offset: 0 }, { opacity: 1, offset: Math.max(0, out - .2) }, { opacity: 0, offset: Math.max(.03, out - .04) }, { opacity: 0, offset: 1 }] }); }); }
      el.style.cssText = 'left:' + b[0].toFixed(2) + 'px;top:' + b[1].toFixed(2) + 'px;width:' + b[2].toFixed(2) + 'px;height:' + b[3].toFixed(2) + 'px;z-index:5'; var zw = mk('zw'); zw.appendChild(zm); el.appendChild(zw); el.appendChild(frameOf(p, painted)); h.el.appendChild(el); return { el: el, zm: zm, labs: labs, p: p, an: null, t: null, move: true }; };
    /* the last miniature, which the camera goes into. Painted: the painting itself, sharp, laid over the real shot by its main figure (BOOK_FIT): geo = where the
       whole painting sits on the screen at the end of the push ([left, top, width, height]; it always covers the screen). Its stand-in (the printed first frame)
       is the screen itself: [0, 0, W, H]. */
    var fitGeo = function (p) { var d = P[p], im = art(d.pic), f = BOOK_FIT[d.pic] || {}, sr = st.getBoundingClientRect(), Q = [], els = {}, sw = 0, px = 0, py = 0, qx = 0, qy = 0, a = 0, b = 0, nw = im ? im.naturalWidth : 1, nh = im ? im.naturalHeight : 1;
      (f.pts || []).forEach(function (t) { var el = els[t[2]]; if (el === undefined) { el = null; try { [].forEach.call(st.querySelectorAll(t[2]), function (e) { if (!el && !e.closest('#jjst-book') && e.getBoundingClientRect().width > 8) el = e; }); } catch (e) {} els[t[2]] = el; } if (!el) return;
        var r = el.getBoundingClientRect(); Q.push([t[0] * nw, t[1] * nh, r.left - sr.left + r.width * t[3], r.top - sr.top + r.height * t[4], t[5] || 1]); });
      Q.forEach(function (t) { sw += t[4]; px += t[0] * t[4]; py += t[1] * t[4]; qx += t[2] * t[4]; qy += t[3] * t[4]; }); if (sw) { px /= sw; py /= sw; qx /= sw; qy /= sw; }
      var c = sw ? [qx, qy] : [G.W * .5, G.H * .55]; if (!im) return { geo: [0, 0, G.W, G.H], c: c };   // (c: the middle of the figure on the screen: the bloom rises from there)
      /* (s128) the painting COVERS the screen at the end of the push, with a little to spare all round (so its own edge, and the page's soft edge round it, are off
         the screen by then), and it is placed so the middle of its figure lies on the middle of the real one: it is made a little bigger than a bare cover where
         that is what it takes (up to a quarter), and beyond that the painting is simply held at the screen's edge */
      var ar = nh / nw, MF = .025, base = Math.max(G.W / (1 - 2 * MF), G.H / (ar - 2 * MF)), cw = base, fx = px / nw, fy = py / nh;
      if (sw) cw = Math.max(base, Math.min(base * 1.25, Math.max(qx / Math.max(.05, fx - MF), (G.W - qx) / Math.max(.05, 1 - fx - MF), qy / Math.max(.05, fy * ar - MF), (G.H - qy) / Math.max(.05, (1 - fy) * ar - MF))));
      var ch = cw * ar, m = cw * MF, ox = sw ? qx - fx * cw : (G.W - cw) / 2, oy = sw ? qy - fy * ch : (G.H - ch) / 2;
      return { geo: [Math.min(-m, Math.max(G.W - cw + m, ox)), Math.min(-m, Math.max(G.H - ch + m, oy)), cw, ch], c: c }; };
    var pwin = null, printWin = function (p) { var b = picBox(p), h = HD[sideOf(p)], im = art(P[p].pic), src = im || printCv; if (!pwin || pwin.p !== p || pwin.src !== src || !pwin.el.isConnected) { if (pwin) pwin.el.remove(); var fit = fitGeo(p), geo = fit.geo, el = mk('pw'), nw = im ? im.naturalWidth : printCv.width, nh = im ? im.naturalHeight : printCv.height, c = cvs(nw, nh); c.getContext('2d').drawImage(src, 0, 0, nw, nh);
        c.style.width = geo[2].toFixed(2) + 'px'; c.style.height = geo[3].toFixed(2) + 'px'; c.style.transform = 'scale(' + (b[2] / geo[2]).toFixed(6) + ')';
        el.style.cssText = 'left:' + b[0].toFixed(3) + 'px;top:' + b[1].toFixed(3) + 'px;width:' + b[2].toFixed(3) + 'px;height:' + b[3].toFixed(3) + 'px;z-index:0'; el.appendChild(c); var fr = null; if (im) { fr = frameOf(p, true); fr.style.willChange = 'opacity'; el.appendChild(fr); }
        h.el.insertBefore(el, h.el.firstChild); pwin = { el: el, cv: c, fr: fr, geo: geo, c: fit.c, p: p, src: src, an: null, t: null, print: true, keep: true }; }
      return pwin; };   // (made once, ahead of time, and kept UNDER the pages until its spread is up: bringing it up is then only a change of order)
    var printUp = function (p) { var w = printWin(p); w.el.style.zIndex = 5; return w; };
    /* ---- a spread arrives: its pages blank of lettering; then each page in turn: its ornaments and initial fade in, its words write on, a rule lands under them ---- */
    var ty = null, holdT = null, lineT = null, holdWait = false;
    var paint = function (p, al, n, rl) { var c = curCtx(p), L = layout(p); c.clearRect(0, 0, c.canvas.width, c.canvas.height); c.drawImage(dressPage(p), 0, 0); drawWords(c, L, n); drawNext(c, p, rl); };   /* s135: the decorations are the page's (dressPage); only the words and, when they are written, the Next mark are added */
    var show = function (typed) { var U = units()[unit]; winOff(); put('r', 'cur', U.r != null ? (typed ? typedPage(U.r) : dressPage(U.r)) : null, true, 3); if (!G.one) put('l', 'cur', U.l != null ? (typed ? typedPage(U.l) : dressPage(U.l)) : null, true, 3); else put('l', 'cur', null, false, 3);
      [U.l, U.r].forEach(function (p) { if (p == null) return; if (P[p].print && (printCv || art(P[p].pic))) win = printUp(p); else if (P[p].move && plane[P[p].pic] && !typed) win = mapWin(p); }); };
    var moveEnd = function (toEnd) { if (!win || !win.move) return; var w = win, d = P[w.p], view = toEnd ? null : bookMoveView(w.zm), c = curCtx(w.p), L = layout(w.p); win = null; if (w.an) { try { w.an.cancel(); } catch (e) {} } unsched(w.t);
      repic(c, w.p, view || bookMoveTo(d.move).view); w.el.remove(); w.view = view; if (holdWait) { holdWait = false; if (toEnd && !ended && !turning) holdGo(1200); } return view; };   // (the page's own bitmap takes the picture where the move left it)
    var moveGo = function (p) { if (!win || !win.move || win.p !== p || win.an) return; var d = P[p].move, to = bookMoveTo(d), w = win, ms = d.ms || 4000, wait = d.wait == null ? 500 : d.wait;
      if (w.zm.animate) w.an = w.zm.animate([{ transform: to.t0 }, { transform: to.t }], { duration: ms, delay: wait, easing: 'cubic-bezier(.45,0,.3,1)', fill: 'both' }); w.labs.forEach(function (q) { if (q.kf && q.el.animate) q.el.animate(q.kf, { duration: ms, delay: wait, easing: 'cubic-bezier(.45,0,.3,1)', fill: 'both' }); }); w.t = sched(function () { if (win === w) moveEnd(true); }, ms + wait + 40); };
    var nxEl = null, nxA = null, nxOff = function () { if (nxA) { try { nxA.cancel(); } catch (e) {} nxA = null; } if (nxEl) nxEl.style.opacity = '0'; };
    var nxGo = function (ms) { var U = units()[unit]; if (!U || U.r == null) return; nxOff(); if (!nxEl || !nxEl.isConnected) { nxEl = document.createElement('i'); nxEl.className = 'nx'; hr.appendChild(nxEl); } var q = nextBox(U.r), K = G.K;
      nxEl.style.cssText = 'left:' + (q.x0 / K).toFixed(2) + 'px;top:' + ((q.yb + q.fs * .2) / K).toFixed(2) + 'px;width:' + ((q.xr - q.x0) / K).toFixed(2) + 'px;opacity:.62'; if (nxEl.animate) nxA = nxEl.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: Math.max(200, ms), easing: 'linear', fill: 'forwards' }); else nxEl.style.transform = 'none'; };
    var holdGo = function (ms) { unsched(holdT); if (win && win.move && win.an) { holdWait = true; return; } nxGo(ms); holdT = sched(function () { holdT = null; next(); }, ms); };
    var tdel = function (ch, nx, pv) { return ch === '.' ? (nx === '.' ? T.typeSpeed : pv === '.' ? T.pauseEllipsis : T.pauseDot) : ch === ',' ? 110 : (ch === '!' || ch === '?') ? T.pauseDot : T.typeSpeed; };
    var BOOK_SLOW = 1.6, BOOK_LINE_MAX = 4600, BOOK_BEAT = 650, BOOK_GAP = 1000, typeMs = function (p) { var L = layout(p), tot = 0, i; for (i = 0; i < L.gl.length; i++) tot += tdel(L.gl[i].ch, (L.gl[i + 1] || {}).ch, (L.gl[i - 1] || {}).ch); return Math.min(BOOK_LINE_MAX, tot * BOOK_SLOW) + 400; };   // a line's writing time (with its fade-in and its flourish)
    /* s129 · B1: as each line is written the camera leans a little toward its page (a slow slide of the whole view; none on a narrow, one-page window) */
    var panA = null, panOff = function () { if (panA) { try { panA.cancel(); } catch (e) {} panA = null; } };
    var panTo = function (side) { if (G.one || !cm.animate || ended) return; var room = Math.max(0, (G.W - 2 * G.cv[2] * (G.KT || 1)) / 2 - 4), d = Math.min(G.W * .012, room) * (side === 'l' ? 1 : -1), from = getComputedStyle(cm).translate, to = d.toFixed(1) + 'px 0px'; panOff(); cm.style.translate = to;
      panA = cm.animate([{ translate: !from || from === 'none' ? '0px 0px' : from }, { translate: to }], { duration: 2800, easing: 'cubic-bezier(.4,0,.3,1)' }); };
    var typePage = function (p, cb) { var L = layout(p), n = 0, tot = 0, i, k, al = 0; for (i = 0; i < L.gl.length; i++) tot += tdel(L.gl[i].ch, (L.gl[i + 1] || {}).ch, (L.gl[i - 1] || {}).ch); k = tot * BOOK_SLOW > BOOK_LINE_MAX ? BOOK_LINE_MAX / tot : BOOK_SLOW;   // (s129: a quarter slower than the tale's banner; no line takes longer than 3.1s to write)
      ty = { p: p, t: null }; if (P[p].move) moveGo(p); panTo(sideOf(p)); try { pupShotGo(p); } catch (e) {}   /* s135: whoever makes an entrance on this page makes it now, as its line starts */
      var intro = function () { paint(p, 1, 0, 0); ty.t = sched(step, 110); };   /* s135: nothing fades in here any more (the page arrived dressed); the words simply begin */
      var step = function () { n++; var c = curCtx(p), q = L.gl[n - 1]; c.save(); c.textAlign = 'left'; c.textBaseline = 'alphabetic'; c.translate(q.x, q.y); c.rotate(q.rot); c.globalAlpha = q.a; c.font = q.v ? L.vfont : L.font; inkOf(c, q.red); c.fillText(q.ch, 0, 0); c.restore();
        if (n >= L.gl.length) { al = 0; ty.t = sched(rule, 90); return; } ty.t = sched(step, tdel(q.ch, (L.gl[n] || {}).ch, (L.gl[n - 2] || {}).ch) * k); };
      var rule = function () { al = Math.min(1, al + .34); if (al >= 1) { whole(p, win && win.move && win.p === p ? typedBare(p) : typedPage(p)); ty = null; cb(); return; } paint(p, 1, 1e9, al); ty.t = sched(rule, 50); };
      intro(); };
    var whole = function (p, bm) { var c = curCtx(p); c.clearRect(0, 0, c.canvas.width, c.canvas.height); c.drawImage(bm, 0, 0); };   /* s129 · A4: the finished page REPLACES what was written on (it was drawn over it: the lettering's soft edges were laid twice, so a page reached by a turn back was not quite the page that had been written) */
    var typedBare = function (p) { var b = basePage(p), cv2 = cvs(b.width, b.height), c = cv2.getContext('2d'), L = layout(p); c.drawImage(b, 0, 0); drawOrn(c, p, 1); drawCap(c, L, 1); drawWords(c, L, 1e9); drawRule(c, L, 1); return cv2; };   // (a page whose picture is still moving in its window: the lettering only)
    var runUnit = function () { var U = units()[unit], seq = [U.l, U.r].filter(function (x) { return x != null; }), k = 0;
      var line = function () { lineT = null; if (ended) return; if (k >= seq.length) { holdGo(bookHold(P[seq[seq.length - 1]].text.length)); return; } var p = seq[k++]; typePage(p, function () { lineT = sched(line, k < seq.length ? BOOK_GAP : 260); }); }; lineT = sched(line, BOOK_BEAT); };   /* s135: the spread rests a beat before its first line; a second between its two lines */   // (s129: a beat of 0.7s between the left-hand line and the right-hand one)
    var typeEnd = function () { nxOff(); unsched(lineT); lineT = null; if (ty) { unsched(ty.t); ty = null; } unsched(holdT); holdT = null; holdWait = false; var U = units()[unit]; [U.l, U.r].forEach(function (p) { if (p == null) return; if (win && win.move && win.p === p) { whole(p, typedBare(p)); return; } whole(p, typedPage(p)); }); };
    /* ---- a turn ---- */
    var settleT = null, turn = function (dir, settled) { if (turning || ended || (settleT != null && !settled)) return; var U = units(), to = unit + dir; if (to < 0 || to >= U.length) return;
      if (!settled) { var sms = 0; try { sms = pupSettle(dir > 0 ? [U[unit].l, U[to].r] : [G.one ? null : U[to].l, U[unit].r]); } catch (e) { sms = 0; }   /* s134: whatever is mid-move on the page about to lift comes to rest first; then it lifts */
        if (sms) { settleT = sched(function () { settleT = null; turn(dir, true); }, sms); return; } }
      prepOff(); typeEnd(); var view = moveEnd(false), fwd = dir > 0, lfo = fwd ? LEAF.f : LEAF.b;
      if (fwd) { if (!lfo.ok) prepF(); if (view && U[unit].r != null && P[U[unit].r].move) leafFace(lfo, true, typedPage(U[unit].r, view)); vis('r', 'cur', false); if (!G.one) vis('l', 'next', true, 2); }
      else { if (!lfo.ok) prepB(); if (!G.one) vis('l', 'cur', false); vis('r', 'prev', true, 2); }
      if (win && !win.keep && ((fwd && sideOf(win.p) === 'r') || (!fwd && sideOf(win.p) === 'l'))) win.el.style.visibility = 'hidden';
      pupTurn(fwd ? [U[unit].l, U[to].r] : [G.one ? null : U[to].l, U[unit].r]);   /* s131: the page that lifts hands over to its leaf (pose 'a'); the page uncovered beneath it has its group, still; the page that stays carries on until it is covered */
      leafGo(lfo, fwd); sched(function () { sfxShot('page', .16); }, 120);
      var end = function () { if (turning !== tk) return; turning = null; winOff();
        if (fwd) { if (!G.one) { vis('l', 'cur', false); vis('l', 'next', true, 3); } vis('r', 'next', true, 3); rot('l', true); rot('r', true); }
        else { vis('r', 'cur', false); vis('r', 'prev', true, 3); if (!G.one) vis('l', 'prev', true, 3); rot('l', false); rot('r', false); }
        unit = to; ['l', 'r'].forEach(function (s) { var h = HD[s]; h.cv[h.cur].style.zIndex = 3; h.cv[h.next].style.visibility = 'hidden'; h.cv[h.prev].style.visibility = 'hidden'; });
        leafPark(LEAF.f); leafPark(LEAF.b); var Un = units()[unit]; [Un.l, Un.r].forEach(function (p) { if (p == null) return; if (P[p].print && (printCv || art(P[p].pic))) win = printUp(p); else if (fwd && P[p].move && plane[P[p].pic]) win = mapWin(p); });
        sync(); pupTurn(pupCur()); if (ended) return; pupPlay();   /* s131: the spread is at rest: its miniatures come to life */ if (fwd) runUnit(); else holdGo(bookHold(P[Un.r].text.length)); prep(); };
      var tk = turning = { end: end, t: sched(end, DUR + 34) }; sync(); };
    var turnEnd = function () { if (!turning) return; var t = turning; unsched(t.t); t.end(); };
    var next = function () { if (ended) return; if (unit >= units().length - 1) finish(false); else turn(1); };
    /* ---- s131 · st2-26 · THE PAGE PUPPETS. A miniature at rest in the open spread moves a little: its people change pose, a chicken hops, a shadow drifts, the swirl
       turns. Only while its page is AT REST: under the cover, on a turning leaf and on a page arriving or leaving, the picture is its composed self (every sprite in
       pose 'a'), exactly as before. When a spread comes to rest a group is laid over each of its miniatures: a PLATE (that part of the page with the background plate
       alone on it: the same paper, the same multiply, pixel for pixel) and, over it, each sprite's poses as small bitmaps of their own. A sprite is 'multiplied onto
       the page' by being painted on the page's own paper at its place and then cut to its own outline, which is the same picture as multiplying the whole miniature
       (sprites drawn over the plate first) onto the page: the brief's order, without a blend mode over the 3D book. The two wide paintings (the last page of each
       book, which the camera goes into) are not multiplied: their sprites ride in the painting's own window.
       Budget (the audit): nothing here runs on a frame loop or reads layout. Poses change by HARD CUTS (a stepped opacity animation: never a dissolve, R8), each
       sprite on its own clock; moves are transform animations; both are the compositor's, and both stop with the tale's pause (pauseStory pauses every animation in
       the stage). At most a dozen things move in a spread. Every bitmap is made in build(), under the cover. PUPS: the recipes, by picture. ---- */
    var PUPS = { 'book-p1-2': { flip: { woman: [3.2, .5, .3], blue: [2.6, .5, 1.2], green: [3.8, .5, 2.2] }, move: { chickhead: ['hop', 1.5, .42], chickqueue: ['peck', 1.9] } },
      'book-p1-3': { flip: { table: [1.3, .385, 0] } },
      'book-p1-4': { flip: { woman: [1.2, .5, 0] }, move: { chicken: ['hop', 1.7, .4] } },
      'book-p1-5': { flip: { shadow: [1.8, .5, 0], villagers: [2.2, .5, .5] }, move: { shadow: ['drift', 9, .022, .006] } },
      'book-p1-6': { flip: { trogdor: [2.4, .29, 0] } },
      'book-p2-1': { flip: { trogdor: [.9, .5, 0], runners: [.64, .5, .1] }, move: { trogdor: ['bob', 2.3, .012] } },
      'book-p2-2': { flip: { wavers: [1.1, .5, 0] }, move: { joe: ['ride', 10, .034, -.03, .92, 2] } },
      'book-p2-3': { move: { joe: ['gallop', .44, 4, 2] } },
      'book-p2-4': { flip: { horse: [3.2, .5, 0] }, tie: { joe: 'horse' } },
      'book-p2-5': { move: { swirl: ['spin', 24, 1, 0], joe: ['spin', 9, -1, .05] } },
      'book-p2-6': { shot: { joe: 1 } } };
    var PUP = { bm: {}, live: [], grp: {} }, pupL = function (p) { var im = BOOK_LAYERS_ON ? art(P[p].pic) : null; return im && im._layers ? im._layers : null; };
    var pupBuild = function (p) { var key = 'pp' + p; if (PUP.bm[key] !== undefined) return PUP.bm[key]; var L = pupL(p), d = P[p], o = null;
      if (L && cm.animate) { try { var K = G.K, b = picBox(p), panel = !!BOOK_PANEL[d.pic], paper = panel ? null : basePage(p, true), bg = L.bg ? artIm[d.pic + '-bg'] : null, cim = art(d.pic), SC = cvs(cim.width, cim.height), sx = SC.getContext('2d'); o = { p: p, panel: panel, sp: {}, plate: null, b: b };
          /* every bitmap here stands on whole CSS pixels and is a whole number of them wide and tall (the browser lays a box out on whole pixels: a plate 256.5 px wide was
             drawn 257 wide, a hair stretched, and its picture sat half a pixel off the page's own), and those are whole bitmap pixels too, so it lies on the page's own grid */
          var okK = function (n) { return Math.abs(n * K - Math.round(n * K)) < .01; }, dn = function (v) { var n = Math.floor(v), i2 = 0; while (!okK(n) && i2++ < 4) n--; return n; }, up = function (v) { var n = Math.ceil(v), i2 = 0; while (!okK(n) && i2++ < 4) n++; return n; };
          if (!panel) { var X0 = dn(b[0] - 2), Y0 = dn(b[1] - 2), x0 = Math.round(X0 * K), y0 = Math.round(Y0 * K), w = Math.round(up(b[0] + b[2] + 2 - X0) * K), h = Math.round(up(b[1] + b[3] + 2 - Y0) * K), pl = cvs(w, h), c = pl.getContext('2d');
            c.drawImage(paper, x0, y0, w, h, 0, 0, w, h); if (bg) { SC.getContext('2d').drawImage(bg, 0, 0, SC.width, SC.height); c.globalCompositeOperation = 'multiply'; c.drawImage(SC, b[0] * K - x0, b[1] * K - y0, b[2] * K, b[3] * K); }   // (the plate goes onto the page from a canvas of the composed picture's size, exactly as the composed picture did: the same resampling, so the same pixels)
            pl.style.cssText = 'position:absolute;left:' + (x0 / K).toFixed(3) + 'px;top:' + (y0 / K).toFixed(3) + 'px;width:' + (w / K).toFixed(3) + 'px;height:' + (h / K).toFixed(3) + 'px;transform:none;'; o.plate = pl; }
          Object.keys(L.sp).forEach(function (n) { o.sp[n] = {}; Object.keys(L.sp[n]).forEach(function (s) { var q = L.sp[n][s], im = artIm[d.pic + '-' + n + '-' + s]; if (!im) return; var cv2, x;
              if (panel) { cv2 = cvs(im.naturalWidth, im.naturalHeight); cv2.getContext('2d').drawImage(im, 0, 0); o.sp[n][s] = { cv: cv2, q: q }; return; }   // (a painting's sprite: as it is; placed in the painting's window when it goes up)
              var fx = (b[0] + q[0] * b[2]) * K, fy = (b[1] + q[1] * b[3]) * K, fw = q[2] * b[2] * K, fh = q[3] * b[3] * K, IX = dn(fx / K - 1), IY = dn(fy / K - 1), ix = Math.round(IX * K), iy = Math.round(IY * K), iw = Math.round(up((fx + fw) / K + 1 - IX) * K), ih = Math.round(up((fy + fh) / K + 1 - IY) * K), m = cvs(iw, ih), t = cvs(iw, ih), y = t.getContext('2d'), i;
              sx.clearRect(0, 0, SC.width, SC.height); sx.drawImage(im, q[0] * SC.width, q[1] * SC.height, q[2] * SC.width, q[3] * SC.height); m.getContext('2d').drawImage(SC, b[0] * K - ix, b[1] * K - iy, b[2] * K, b[3] * K);   // the sprite as it lies in the composed picture, brought to the page the way that picture is (the same resampling: the same pixels)
              for (i = 0; i < 6; i++) y.drawImage(m, 0, 0);                                                            // its colours, made solid out to its soft edge…
              cv2 = cvs(iw, ih); x = cv2.getContext('2d'); x.drawImage(paper, ix, iy, iw, ih, 0, 0, iw, ih); x.globalCompositeOperation = 'multiply'; x.drawImage(t, 0, 0);   // …multiplied onto the paper it stands on…
              x.globalCompositeOperation = 'destination-in'; x.drawImage(m, 0, 0);                                      // …and cut to its own outline
              cv2.style.cssText = 'position:absolute;left:' + (ix / K).toFixed(3) + 'px;top:' + (iy / K).toFixed(3) + 'px;width:' + (iw / K).toFixed(3) + 'px;height:' + (ih / K).toFixed(3) + 'px;';
              o.sp[n][s] = { cv: cv2, q: q, box: [fx / K, fy / K, fw / K, fh / K] }; }); });
          if (panel && bg) { o.bare = cvs(cim.width, cim.height); o.bare.getContext('2d').drawImage(bg, 0, 0, cim.width, cim.height); }   // (a painting's bare plate, drawn now: nothing as big as a painting is decoded or drawn when its spread comes to rest. Measured: doing it then was one 130 ms frame at 4x)
        } catch (e) { o = null; } }
      return (PUP.bm[key] = o); };
    var pupFlip = function (A, a, b2, per, f, off) { var O = { duration: per * 1000, iterations: Infinity, delay: -(off || 0) * 1000 }, k = Math.max(.02, Math.min(.98, 1 - f)), st = 'steps(1, end)';   // a for the first part of the cycle, b for the rest: hard cuts, the two changing in the same instant
      if (a) A.push(a.animate([{ opacity: 1, easing: st }, { opacity: 0, offset: k, easing: st }, { opacity: 0 }], O)); if (b2) A.push(b2.animate([{ opacity: 0, easing: st }, { opacity: 1, offset: k, easing: st }, { opacity: 1 }], O)); };
    var pupMove = function (A, g, inner, M, box, W, H) { var cx = box[0] + box[2] / 2, cy = box[1] + box[3] / 2, by = box[1] + box[3], k = M[0], px = function (v) { return v.toFixed(2) + 'px'; };   // box: the sprite's 'a' pose in the group's own px; W, H: the picture's size there
      if (k === 'hop') { g.style.transformOrigin = px(cx) + ' ' + px(by); A.push(g.animate([{ transform: 'translateY(0px) scale(1,1)', offset: 0 }, { transform: 'translateY(0px) scale(1,1)', offset: .6, easing: 'ease-in' }, { transform: 'translateY(0px) scale(1.05,.9)', offset: .68, easing: 'cubic-bezier(.2,.7,.4,1)' }, { transform: 'translateY(' + px(-box[3] * M[2]) + ') scale(.97,1.04)', offset: .8, easing: 'cubic-bezier(.6,0,.8,.4)' }, { transform: 'translateY(0px) scale(1.04,.93)', offset: .91, easing: 'ease-out' }, { transform: 'translateY(0px) scale(1,1)', offset: 1 }], { duration: M[1] * 1000, iterations: Infinity })); }
      else if (k === 'peck') { g.style.transformOrigin = px(cx) + ' ' + px(by); A.push(g.animate([{ transform: 'scale(1,1)', offset: 0 }, { transform: 'scale(1,1)', offset: .52, easing: 'ease-in-out' }, { transform: 'scale(1.06,.84)', offset: .6, easing: 'ease-in-out' }, { transform: 'scale(1,1)', offset: .69, easing: 'ease-in-out' }, { transform: 'scale(1.06,.84)', offset: .78, easing: 'ease-in-out' }, { transform: 'scale(1,1)', offset: .88 }, { transform: 'scale(1,1)', offset: 1 }], { duration: M[1] * 1000, iterations: Infinity })); }
      else if (k === 'drift') A.push(g.animate([{ transform: 'translate(' + px(-W * M[2]) + ',' + px(-H * M[3]) + ')' }, { transform: 'translate(' + px(W * M[2]) + ',' + px(H * M[3]) + ')' }], { duration: M[1] * 1000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out', delay: -M[1] * 500 }));
      else if (k === 'bob') A.push(g.animate([{ transform: 'translateY(' + px(-H * M[2]) + ')' }, { transform: 'translateY(' + px(H * M[2]) + ')' }], { duration: M[1] * 500, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out', delay: -M[1] * 250 }));
      else if (k === 'ride') { g.style.transformOrigin = px(cx) + ' ' + px(by); A.push(g.animate([{ transform: 'translate(0px,0px) scale(1)' }, { transform: 'translate(' + px(W * M[2]) + ',' + px(H * M[3]) + ') scale(' + M[4] + ')' }], { duration: M[1] * 1000, easing: 'cubic-bezier(.3,0,.5,1)', fill: 'forwards', delay: 700 }));   // away up the road, a little smaller, and there he stays
        inner.style.transformOrigin = px(cx) + ' ' + px(by); A.push(inner.animate([{ transform: 'rotate(' + (-M[5]) + 'deg)' }, { transform: 'rotate(' + M[5] + 'deg)' }], { duration: 430, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out', delay: -215 })); }
      else if (k === 'gallop') { inner.style.transformOrigin = px(cx) + ' ' + px(by); A.push(inner.animate([{ transform: 'rotate(' + (-M[2]) + 'deg) translateY(0px)' }, { transform: 'rotate(0deg) translateY(' + px(-M[3]) + ')' }, { transform: 'rotate(' + M[2] + 'deg) translateY(0px)' }], { duration: M[1] * 1000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out', delay: -M[1] * 500 })); }
      else if (k === 'spin') { g.style.transformOrigin = px(cx) + ' ' + px(cy); A.push(g.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(' + (360 * M[2]) + 'deg)' }], { duration: M[1] * 1000, iterations: Infinity, easing: 'linear' }));
        if (M[3]) { inner.style.transformOrigin = px(cx) + ' ' + px(cy); A.push(inner.animate([{ transform: 'scale(1)' }, { transform: 'scale(' + (1 + M[3]) + ')' }], { duration: 1700, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' })); } } };
    var pupDiv = function (css) { var e = document.createElement('div'); e.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;' + (css || ''); return e; };
    /* a multiplied miniature: its group lies over the page, in the page's own px, for AS LONG AS THE PAGE IS ON SHOW (still, every sprite in pose 'a', until the spread
       is at rest): it goes on and comes off only in the instant its page is swapped for a leaf or uncovered by one. (Measured: the browser draws a bitmap laid over
       the page a touch crisper than the page's own, and a left-hand page's lettering shifts by a hair when anything is laid over it; put on and taken off while the
       page sat in view, the group showed as a small snap at the start and end of every turn. Kept with the page, it is never seen arriving.) */
    var pupShow = function (p) { if (p == null || PUP.grp[p]) return; var o = pupBuild(p); if (!o || o.panel) return; var el = pupDiv('z-index:5;'), W = []; el.className = 'pp'; el.appendChild(o.plate);
      Object.keys(o.sp).forEach(function (n) { var S = o.sp[n], g = pupDiv(), inner = pupDiv(); if (!S.a) return; g.style.transformOrigin = ''; ['a', 'b'].forEach(function (s) { if (S[s]) { S[s].cv.style.opacity = s === 'a' ? '1' : '0'; inner.appendChild(S[s].cv); } }); g.appendChild(inner); el.appendChild(g); W.push({ n: n, S: S, g: g, inner: inner }); });
      HD[sideOf(p)].el.appendChild(el); PUP.grp[p] = { p: p, el: el, W: W, A: [], b: o.b }; };
    var pupHide = function (p) { var r = PUP.grp[p]; if (!r) return; delete PUP.grp[p]; r.A.forEach(function (a) { try { a.cancel(); } catch (e) {} }); r.el.remove(); };
    var pupSet = function (list) { list = list.filter(function (p) { return p != null; }); Object.keys(PUP.grp).forEach(function (k) { if (list.indexOf(+k) < 0) pupHide(+k); }); list.forEach(pupShow); };
    var pupStill = function () { Object.keys(PUP.grp).forEach(function (k) { var r = PUP.grp[k]; r.A.forEach(function (a) { try { a.cancel(); } catch (e) {} }); r.A = []; }); };
    var pupGo = function (p) { var r = PUP.grp[p]; if (!r || r.A.length) return; var R = PUPS[P[p].pic] || {}; r.W.forEach(function (w) { var F = (R.flip || {})[w.n] || ((R.tie || {})[w.n] ? (R.flip || {})[R.tie[w.n]] : null);
        if (F) pupFlip(r.A, w.S.a.cv, w.S.b ? w.S.b.cv : null, F[0], F[1], F[2]); if ((R.move || {})[w.n]) pupMove(r.A, w.g, w.inner, R.move[w.n], w.S.a.box, r.b[2], r.b[3]); }); };
    /* a painting (the last page): its sprites ride in the painting's own window, under the page's soft edge; the window's picture is the bare plate meanwhile */
    /* the painting's window holds two pictures of it, one on the other: the bare plate, and over it the painting whole (its own canvas, as before). While the sprites
       play the whole one is simply not shown; when they stop it is shown again (first given whoever made an entrance, standing). Nothing is redrawn at either moment. */
    var pupUnder = function (p) { var o = pupBuild(p); if (!o || !o.bare || !pwin || pwin.p !== p) return null; if (o.bare.parentNode !== pwin.el) { var c = pwin.cv; o.bare.style.cssText = 'position:absolute;left:0;top:0;transform-origin:0 0;width:' + c.style.width + ';height:' + c.style.height + ';transform:' + c.style.transform + ';'; pwin.el.insertBefore(o.bare, c); } return o; };
    var pupBare = function (p, withA) { var o = pupUnder(p); if (!o) return; var d = P[p], L = pupL(p), c = pwin.cv;
      if (!withA) { c.style.visibility = 'hidden'; return; }
      if (L && L.shot && !c._shot) { c._shot = true; var x = c.getContext('2d'); Object.keys(L.shot).forEach(function (n) { var S = (o.sp[n] || {}).a; if (S) x.drawImage(S.cv, S.q[0] * c.width, S.q[1] * c.height, S.q[2] * c.width, S.q[3] * c.height); }); }
      c.style.visibility = ''; };
    var pupPanel = function (p, o) { if (!pwin || pwin.p !== p || win !== pwin || !pwin.el.isConnected) return null; var R = PUPS[P[p].pic] || {}, geo = pwin.geo, b = o.b, A = [], clip = pupDiv('overflow:hidden;z-index:1;'), g0 = pupDiv('width:' + geo[2].toFixed(2) + 'px;height:' + geo[3].toFixed(2) + 'px;transform-origin:0 0;transform:scale(' + (b[2] / geo[2]).toFixed(6) + ');'), rec = { p: p, el: clip, A: A, t: null, off: function () { pupBare(p, true); } };
      var place = function (S) { var q = S.q, c = S.cv; c.style.cssText = 'position:absolute;left:' + (q[0] * geo[2]).toFixed(2) + 'px;top:' + (q[1] * geo[3]).toFixed(2) + 'px;width:' + (q[2] * geo[2]).toFixed(2) + 'px;height:' + (q[3] * geo[3]).toFixed(2) + 'px;transform-origin:50% 50%;transform:none;will-change:auto;'; return c; };
      clip.className = 'pp'; clip.appendChild(g0); pupBare(p, false);
      Object.keys(o.sp).forEach(function (n) { var S = o.sp[n], g = pupDiv(), F = (R.flip || {})[n]; if (!S.a) return; g0.appendChild(g);
        if ((R.shot || {})[n] && S.fall && S.land) {   // Joe's entrance: he drops in turning a quarter turn, lands in a puff of dust, and stands. One go; then he is part of the picture
          var fa = place(S.fall), la = place(S.land), aa = place(S.a), T0 = 180, GH = geo[3], dy0 = -(S.fall.q[1] + S.fall.q[3]) * GH - 12, dy1 = (S.land.q[1] + S.land.q[3] - S.fall.q[1] - S.fall.q[3]) * GH - S.fall.q[3] * GH * .12, pf = document.createElement('i'), pw2 = S.land.q[2] * geo[2] * 1.5;
          pf.style.cssText = 'position:absolute;left:' + ((S.land.q[0] + S.land.q[2] / 2) * geo[2] - pw2 / 2).toFixed(1) + 'px;top:' + ((S.land.q[1] + S.land.q[3]) * GH - pw2 * .3).toFixed(1) + 'px;width:' + pw2.toFixed(1) + 'px;height:' + (pw2 * .42).toFixed(1) + 'px;border-radius:50%;opacity:0;background:radial-gradient(closest-side,rgba(226,206,180,.85),rgba(206,184,156,.45) 55%,rgba(206,184,156,0));';
          fa.style.opacity = '0'; la.style.opacity = '0'; aa.style.opacity = '1'; g.appendChild(pf); g.appendChild(fa); g.appendChild(la); g.appendChild(aa);
          A.push(aa.animate([{ opacity: 0 }, { opacity: 0 }], { duration: T0 + 1600 }));
          A.push(fa.animate([{ opacity: 1, transform: 'translateY(' + dy0.toFixed(1) + 'px) rotate(-90deg)' }, { opacity: 1, transform: 'translateY(' + dy1.toFixed(1) + 'px) rotate(0deg)' }], { duration: 700, delay: T0, easing: 'cubic-bezier(.45,0,.85,.55)' }));
          A.push(la.animate([{ opacity: 1 }, { opacity: 1 }], { duration: 900, delay: T0 + 700 }));
          A.push(pf.animate([{ opacity: .8, transform: 'scale(.3)' }, { opacity: 0, transform: 'scale(1.7)' }], { duration: 750, delay: T0 + 700, easing: 'ease-out' }));
          rec.t = sched(function () { rec.t = null; pupDrop(rec); }, T0 + 1700); return; }
        ['a', 'b'].forEach(function (s) { if (S[s]) { place(S[s]).style.opacity = s === 'a' ? '1' : '0'; g.appendChild(S[s].cv); } });
        if (F) pupFlip(A, S.a.cv, S.b ? S.b.cv : null, F[0], F[1], F[2]); });
      if (pwin.fr && pwin.fr.parentNode === pwin.el) pwin.el.insertBefore(clip, pwin.fr); else pwin.el.appendChild(clip); return rec; };
    var pupDrop = function (r) { var i = PUP.live.indexOf(r); if (i >= 0) PUP.live.splice(i, 1); unsched(r.t); if (r.off) { try { r.off(); } catch (e) {} } r.A.forEach(function (a) { try { a.cancel(); } catch (e) {} }); r.el.remove(); };   // (a painting's sprites: the picture under them is whole again before they go: nothing blinks)
    var pupCur = function () { var U = units()[unit]; return U ? [U.l, U.r] : []; };
    var pupPlay = function () { if (ended || !opened || turning) return; pupSet(pupCur()); pupCur().forEach(function (p) { if (p == null) return; var o = pupBuild(p); if (!o) return; if (!o.panel) { try { pupGo(p); } catch (e) {} return; }
        if (PUP.live.some(function (r) { return r.p === p; })) return; if ((PUPS[P[p].pic] || {}).shot && !(PUP.shotGo && PUP.shotGo[p])) { try { pupBare(p, false); } catch (e) {} return; }   /* s135: a painting someone enters waits, empty, for its line */ var r = null; try { r = pupPanel(p, o); } catch (e) { r = null; } if (r) PUP.live.push(r); }); };   // the spread is at rest: its miniatures come to life (each from its start)
    var pupTurn = function (list) { PUP.shotGo = {}; PUP.live.slice().forEach(pupDrop); pupSet(list); };
    var pupShotGo = function (p) { if (!((PUPS[P[p].pic] || {}).shot)) return; if (!PUP.shotGo) PUP.shotGo = {}; if (PUP.shotGo[p]) return; PUP.shotGo[p] = true; pupPlay(); };   /* s135 */   // a turn starts or ends: the paintings' sprites rest; the groups follow the pages that are on show
    var pupFinal = function () { PUP.live.slice().forEach(pupDrop); /* s134: (was pupStill(): the left-hand page's puppets snapped to rest as the push-in began; they carry on now, and go with the book) */ P.forEach(function (d, p) { var L = pupL(p); if (L && L.shot && pwin && pwin.p === p) { var had = !!pwin.cv._shot && pwin.cv.style.visibility !== 'hidden'; pupBare(p, true); if (!had && pwin.cv.animate) { try { pwin.cv.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, easing: 'ease-out' }); } catch (e) {} } } }); };   /* s135: if he had not landed yet he fades in standing (he appeared in one frame) */   // (the push-in is about to start: everyone in pose 'a', still; whoever makes an entrance is standing)
    /* s134 · the groups that are about to come off (every one not in `keep`): whatever on them is away from rest eases back to it. Returns how long that takes (0: nothing to do).
       One read of each moving part's transform, at the press; nothing on a frame loop. Poses go to 'a' at once (hard cuts, as ever). */
    var pupSettle = function (keep) { var jobs = [], big = false; Object.keys(PUP.grp).forEach(function (k) { if (keep.indexOf(+k) >= 0) return; var r = PUP.grp[k], todo = []; if (!r || !r.A.length) return;
        r.W.forEach(function (w) { [w.g, w.inner].forEach(function (el) { var m = getComputedStyle(el).transform, v = m && m !== 'none' ? (/^matrix\(([^)]+)\)$/.exec(m) || [0, ''])[1].split(',').map(parseFloat) : null; if (!v || v.length !== 6) return;
            if (Math.abs(v[0] - 1) < .004 && Math.abs(v[1]) < .004 && Math.abs(v[2]) < .004 && Math.abs(v[3] - 1) < .004 && Math.abs(v[4]) < .6 && Math.abs(v[5]) < .6) return;
            todo.push([el, m]); if (Math.abs(Math.atan2(v[1], v[0])) > .14 || Math.abs(v[4]) > 14 || Math.abs(v[5]) > 14) big = true; }); });
        if (todo.length) jobs.push([r, todo]); });
      if (!jobs.length) return 0; var ms = big ? 300 : 170;
      jobs.forEach(function (j) { var r = j[0]; r.A.forEach(function (a) { try { a.cancel(); } catch (e) {} }); r.A = [];
        j[1].forEach(function (t) { r.A.push(t[0].animate([{ transform: t[1] }, { transform: 'none' }], { duration: ms, easing: 'cubic-bezier(.35,0,.3,1)' })); }); });
      return ms; };
    var pupLab = { off: function () { PUP.live.slice().forEach(pupDrop); pupSet([]); }, on: function () { pupPlay(); }, still: pupStill };
    /* ---- the things in the room that are painted once: the table, the book's cover, the few things from the tale that lie about on the table. All in the tale's
       own flat look (flat shapes, soft shadows, its palette). Each prop is a swappable picture: BOOK_ART['book-prop-tankard' / '-coins' / '-feather' / '-candle'] ---- */
    var drawTable = function (c, w, h, cx, cy) { var r = rng(23), x = 0, i, g; c.fillStyle = '#26150c'; c.fillRect(0, 0, w, h);
      while (x < w) { var bw = w * (.05 + r() * .025), t = r(); g = c.createLinearGradient(x, 0, x + bw, 0); g.addColorStop(0, t > .5 ? '#2e1a0f' : '#2a170d'); g.addColorStop(.5, t > .5 ? '#34200f' : '#2c190e'); g.addColorStop(1, t > .5 ? '#291609' : '#24130b'); c.fillStyle = g; c.fillRect(x, 0, bw + 1, h);
        c.strokeStyle = 'rgba(8,4,2,.28)'; c.lineWidth = Math.max(1, w * .0009); for (i = 0; i < 5; i++) { var gx = x + bw * (.12 + r() * .76), wob = bw * .05; c.beginPath(); c.moveTo(gx, 0); c.bezierCurveTo(gx + wob, h * .3, gx - wob, h * .6, gx + wob * .5, h); c.stroke(); }
        g = c.createLinearGradient(x - w * .004, 0, x + w * .004, 0); g.addColorStop(0, 'rgba(6,3,2,0)'); g.addColorStop(.5, 'rgba(6,3,2,.62)'); g.addColorStop(1, 'rgba(6,3,2,0)'); c.fillStyle = g; c.fillRect(x - w * .004, 0, w * .008, h); x += bw; }   // the seams between the boards, soft
      g = c.createRadialGradient(cx * w, cy * h, 0, cx * w, cy * h, w * .34); g.addColorStop(0, 'rgba(255,176,92,.34)'); g.addColorStop(.4, 'rgba(255,160,80,.13)'); g.addColorStop(1, 'rgba(255,160,80,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h);                 // the candle's pool of light
      g = c.createRadialGradient(w * .5, h * .5, h * .16, w * .5, h * .5, h * .5); g.addColorStop(0, 'rgba(5,3,8,0)'); g.addColorStop(.62, 'rgba(5,3,8,.8)'); g.addColorStop(1, '#050308'); c.save(); c.translate(w * .5, h * .5); c.scale(w / h, 1); c.translate(-w * .5, -h * .5); c.fillStyle = g; c.fillRect(-w, 0, w * 3, h); c.restore(); };   // …and its far edges lost in the dark
    var gilt = function (c, x0, y0, x1, y1) { var g = c.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, '#e9c768'); g.addColorStop(.35, '#b98a2c'); g.addColorStop(.6, '#f1d88a'); g.addColorStop(1, '#a87a24'); return g; };
    var jMask = function (w, h, fill) { var m = cvs(w, h), x = m.getContext('2d'), lg = document.querySelector('.nav-logo-link img, img.nav-logo'); if (lg && lg.complete && lg.naturalWidth) { var s = Math.min(w / lg.naturalWidth, h / lg.naturalHeight), dw = lg.naturalWidth * s, dh = lg.naturalHeight * s; x.drawImage(lg, (w - dw) / 2, (h - dh) / 2, dw, dh); }
      else { x.font = Math.round(h * .96) + 'px "Sketch Gothic School", Georgia, serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('J', w / 2, h * .54); }
      x.globalCompositeOperation = 'source-in'; x.fillStyle = fill; x.fillRect(0, 0, w, h); return m; };   // the site's own J (its exact shape), in any colour
    var JBOX = [.33, .255, .34, .37];                           // where the J sits on the cover (fractions of it): set by dress() for the painted cover
    var drawCover = function (c, w, h) { var r = rng(31), i, g = c.createRadialGradient(w * .3, h * .18, w * .05, w * .5, h * .5, h * .8); g.addColorStop(0, '#74351f'); g.addColorStop(.5, '#4a1e14'); g.addColorStop(1, '#210c09'); c.fillStyle = g; c.fillRect(0, 0, w, h);
      for (i = 0; i < 60; i++) { var bx = r() * w, by = r() * h, br = w * (.03 + r() * .09); g = c.createRadialGradient(bx, by, 0, bx, by, br); g.addColorStop(0, i % 2 ? 'rgba(20,6,4,.16)' : 'rgba(150,80,50,.09)'); g.addColorStop(1, 'rgba(20,6,4,0)'); c.fillStyle = g; c.fillRect(bx - br, by - br, br * 2, br * 2); }   // the leather's mottling
      [[0, 0, w * .09, 0], [w, 0, w * .91, 0], [0, 0, 0, h * .06], [0, h, 0, h * .94]].forEach(function (q) { g = c.createLinearGradient(q[0], q[1], q[2], q[3]); g.addColorStop(0, 'rgba(8,2,1,.62)'); g.addColorStop(1, 'rgba(8,2,1,0)'); c.fillStyle = g; c.fillRect(0, 0, w, h); });
      c.strokeStyle = gilt(c, 0, 0, w, h); c.lineCap = 'round'; c.lineJoin = 'round'; var ix = w * .07, iy = h * .055, L = w * .2, rr = w * .035, lw = Math.max(1.2, w * .0046);
      [[ix, iy, 1, 1], [w - ix, iy, -1, 1], [ix, h - iy, 1, -1], [w - ix, h - iy, -1, -1]].forEach(function (q) { c.save(); c.translate(q[0], q[1]); c.scale(q[2], q[3]); c.lineWidth = lw; c.beginPath(); c.moveTo(0, L); c.lineTo(0, rr); c.quadraticCurveTo(0, 0, rr, 0); c.lineTo(L, 0); c.stroke();
        c.lineWidth = lw * .7; c.beginPath(); c.moveTo(w * .028, L * .8); c.lineTo(w * .028, w * .05); c.quadraticCurveTo(w * .028, w * .028, w * .05, w * .028); c.lineTo(L * .8, w * .028); c.stroke();
        c.beginPath(); c.ellipse(w * .07, w * .07, w * .03, w * .014, Math.PI / 4, 0, 6.3); c.stroke(); c.beginPath(); c.ellipse(w * .07, w * .07, w * .03, w * .014, -Math.PI / 4, 0, 6.3); c.stroke();   // a little knot in each corner
        c.fillStyle = '#d8b55a'; c.beginPath(); c.arc(L, 0, lw * 1.6, 0, 6.3); c.arc(0, L, lw * 1.6, 0, 6.3); c.fill(); c.restore(); });
      c.lineWidth = lw * .7; c.globalAlpha = .7; c.beginPath(); c.moveTo(w * .36, iy); c.lineTo(w * .64, iy); c.moveTo(w * .36, h - iy); c.lineTo(w * .64, h - iy); c.moveTo(ix, h * .3); c.lineTo(ix, h * .7); c.moveTo(w - ix, h * .3); c.lineTo(w - ix, h * .7); c.stroke(); c.globalAlpha = 1;
      var jw = Math.round(JBOX[2] * w), jh = Math.round(JBOX[3] * h), jx = JBOX[0] * w, jy = JBOX[1] * h, e = w * .004; c.drawImage(jMask(jw, jh, 'rgba(10,3,2,.75)'), jx + e, jy + e * 1.4); c.globalAlpha = .4; c.drawImage(jMask(jw, jh, '#ffe9b0'), jx - e * .6, jy - e * .8); c.globalAlpha = 1;   // embossed: a shadow under it, a light edge over it
      var jg = jMask(jw, jh, '#000'), x2 = jg.getContext('2d'); x2.globalCompositeOperation = 'source-in'; x2.fillStyle = gilt(x2, 0, 0, jw, jh); x2.fillRect(0, 0, jw, jh); c.drawImage(jg, jx, jy);
      bookGlyph(c, 'diamond', w * .5, h * .72, w * .05, '#c9a04a', '#7a3a22'); };
    var drawProp = function (c, name, w, h) { var g, i, P2 = Math.PI * 2, sh = function (x, y, rx, ry, a) { g = c.createRadialGradient(x, y, 0, x, y, rx); g.addColorStop(0, 'rgba(4,2,1,' + (a || .55) + ')'); g.addColorStop(1, 'rgba(4,2,1,0)'); c.save(); c.translate(x, y); c.scale(1, ry / rx); c.translate(-x, -y); c.fillStyle = g; c.fillRect(x - rx, y - rx, rx * 2, rx * 2); c.restore(); };
      if (name === 'candle') { sh(w * .52, h * .88, w * .46, h * .1); c.fillStyle = '#b8862e'; c.beginPath(); c.ellipse(w * .5, h * .84, w * .36, h * .075, 0, 0, P2); c.fill(); c.fillStyle = '#8a5f1c'; c.beginPath(); c.ellipse(w * .5, h * .86, w * .36, h * .06, 0, 0, Math.PI); c.fill();   // a brass dish
        c.fillStyle = '#d9a640'; c.beginPath(); c.ellipse(w * .5, h * .825, w * .28, h * .05, 0, 0, P2); c.fill(); c.strokeStyle = '#b8862e'; c.lineWidth = w * .07; c.beginPath(); c.arc(w * .86, h * .8, w * .1, -Math.PI * .6, Math.PI * .7); c.stroke();
        g = c.createLinearGradient(w * .36, 0, w * .64, 0); g.addColorStop(0, '#fff2cf'); g.addColorStop(.6, '#f1dcab'); g.addColorStop(1, '#d6b982'); c.fillStyle = g; c.beginPath(); c.moveTo(w * .37, h * .82); c.lineTo(w * .37, h * .38); c.quadraticCurveTo(w * .5, h * .34, w * .63, h * .38); c.lineTo(w * .63, h * .82); c.closePath(); c.fill();
        c.fillStyle = '#fff6da'; c.beginPath(); c.ellipse(w * .5, h * .38, w * .13, h * .022, 0, 0, P2); c.fill(); c.fillStyle = '#f1dcab'; c.beginPath(); c.moveTo(w * .39, h * .4); c.quadraticCurveTo(w * .4, h * .5, w * .43, h * .47); c.quadraticCurveTo(w * .44, h * .42, w * .46, h * .4); c.fill();   // a run of wax
        c.strokeStyle = '#3a2a1c'; c.lineWidth = w * .025; c.lineCap = 'round'; c.beginPath(); c.moveTo(w * .5, h * .375); c.lineTo(w * .505, h * .33); c.stroke(); return; }
      if (name === 'tankard') { sh(w * .46, h * .9, w * .5, h * .09); c.strokeStyle = '#6b4a2b'; c.lineWidth = w * .1; c.beginPath(); c.arc(w * .74, h * .56, w * .17, -Math.PI * .45, Math.PI * .45); c.stroke();
        g = c.createLinearGradient(w * .14, 0, w * .72, 0); g.addColorStop(0, '#a8763f'); g.addColorStop(.5, '#8f5f30'); g.addColorStop(1, '#6b4422'); c.fillStyle = g; c.beginPath(); c.moveTo(w * .14, h * .3); c.lineTo(w * .72, h * .3); c.lineTo(w * .68, h * .88); c.quadraticCurveTo(w * .43, h * .93, w * .18, h * .88); c.closePath(); c.fill();
        c.fillStyle = '#5c5a64'; [.42, .74].forEach(function (y) { c.beginPath(); c.moveTo(w * .15, h * y); c.quadraticCurveTo(w * .43, h * (y + .045), w * .71, h * y); c.lineTo(w * .705, h * (y + .06)); c.quadraticCurveTo(w * .43, h * (y + .105), w * .155, h * (y + .06)); c.closePath(); c.fill(); });   // two iron bands
        c.fillStyle = '#fff4dc'; [[.22, .28, .1], [.36, .24, .13], [.52, .25, .12], [.64, .29, .09], [.44, .31, .14]].forEach(function (q) { c.beginPath(); c.arc(w * q[0], h * q[1], w * q[2], 0, P2); c.fill(); }); c.beginPath(); c.moveTo(w * .2, h * .3); c.quadraticCurveTo(w * .19, h * .46, w * .25, h * .42); c.quadraticCurveTo(w * .27, h * .34, w * .3, h * .3); c.fill(); return; }   // the froth, and a drip of it
      if (name === 'coins') { var r = rng(9), list = [[.2, .62, .15], [.36, .74, .16], [.56, .64, .15], [.44, .5, .14], [.72, .76, .15], [.84, .58, .12], [.62, .86, .13]]; list.forEach(function (q) { sh(w * (q[0] + .02), h * (q[1] + .07), w * q[2] * 1.15, h * q[2] * .5, .5); });
        list.forEach(function (q, k) { var x = w * q[0], y = h * q[1], rx = w * q[2], ry = rx * .52; c.fillStyle = '#c98a1e'; c.beginPath(); c.ellipse(x, y + ry * .34, rx, ry, 0, 0, P2); c.fill(); c.fillStyle = '#f6c744'; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, P2); c.fill(); c.fillStyle = '#fbe08a'; c.beginPath(); c.ellipse(x - rx * .08, y - ry * .1, rx * .62, ry * .58, 0, 0, P2); c.fill(); c.fillStyle = '#f6c744'; c.beginPath(); c.ellipse(x, y, rx * .42, ry * .4, 0, 0, P2); c.fill(); });
        [[.3, .36, '#e46aa8', '#f7a8cf'], [.74, .4, '#5aa6e8', '#a6d4f7']].forEach(function (q) { var x = w * q[0], y = h * q[1], s = w * .09; sh(x, y + s * .9, s * 1.1, s * .5, .45); c.fillStyle = q[2]; c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s * .8, y - s * .2); c.lineTo(x, y + s); c.lineTo(x - s * .8, y - s * .2); c.closePath(); c.fill(); c.fillStyle = q[3]; c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s * .8, y - s * .2); c.lineTo(x, y - s * .05); c.lineTo(x - s * .8, y - s * .2); c.closePath(); c.fill(); }); return; }   // …and two of the hoard's gems
      if (name === 'feather') { sh(w * .5, h * .62, w * .46, h * .2, .42); c.save(); c.translate(w * .5, h * .5); c.rotate(-.5); var L = w * .44; g = c.createLinearGradient(0, -L * .3, 0, L * .3); g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#e4dccd'); c.fillStyle = g; c.beginPath(); c.moveTo(-L, 0); c.bezierCurveTo(-L * .5, -L * .46, L * .5, -L * .4, L, 0); c.bezierCurveTo(L * .5, L * .36, -L * .5, L * .42, -L, 0); c.fill();
        c.fillStyle = '#e25a4a'; c.beginPath(); c.moveTo(L, 0); c.bezierCurveTo(L * .8, -L * .16, L * .66, -L * .22, L * .56, -L * .25); c.lineTo(L * .6, L * .22); c.bezierCurveTo(L * .72, L * .18, L * .86, L * .1, L, 0); c.fill();   // tipped in the chicken's red
        c.strokeStyle = '#cfc4b0'; c.lineWidth = w * .012; c.lineCap = 'round'; c.beginPath(); c.moveTo(-L * 1.2, L * .04); c.quadraticCurveTo(0, -L * .06, L * .96, 0); c.stroke(); c.strokeStyle = 'rgba(160,146,124,.6)'; c.lineWidth = w * .006; for (i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(i * L * .22, -L * .02); c.lineTo(i * L * .22 + L * .16, -L * .24); c.moveTo(i * L * .22, 0); c.lineTo(i * L * .22 + L * .16, L * .22); c.stroke(); } c.restore(); } };
    var PROPS = [], flame = null, dress = function () { var K = Math.min(G.K * 1.5, 3), W = G.W, Hh = G.H, pw = G.PW, ph = G.PH, short = Hh < 480, i, half = G.pt ? G.cv[2] / pw : 1.06;
      PROPS.forEach(function (e) { e.remove(); }); PROPS = []; if (flame) { flame.remove(); flame = null; }
      var list = G.one ? [['candle', -.02, -.2, .2, 1.25], ['coins', .78, 1.07, .34, .72]] : short ? [['candle', -half - .46, .42, .2, 1.25], ['coins', half + .26, .92, .34, .72], ['tankard', half + .3, .1, .28, 1.02], ['feather', -half - .36, .98, .34, .6]] : [['candle', -half + .1, -.05, .2, 1.25], ['tankard', half + .24, .2, .28, 1.02], ['coins', half + .2, .96, .34, .72], ['feather', -half - .3, 1.0, .34, .6]];   // [prop, x of its middle, y of its foot (in pages), width (in pages), height / width]
      if (!G.one && !short && (W / 2 - pw * half) < pw * .3) list = list.filter(function (q) { return q[0] === 'candle' || q[0] === 'coins'; });   // (no room at the sides: only the candle and the coins)
      list.forEach(function (q) { var im = art('book-prop-' + q[0]); if (im) { q[4] = im.naturalHeight / im.naturalWidth; q[3] *= q[0] === 'candle' ? 1.5 : q[0] === 'tankard' ? 1.05 : 1; } });
      var cd = list[0], cxs = W / 2 + cd[1] * pw + (G.one ? pw / 2 : 0), cys = (Hh - ph) / 2 + Hh * .01 + (cd[2] * ph - cd[3] * pw * cd[4] * .68) * .95; root.style.setProperty('--cx', Math.max(2, Math.min(98, cxs / W * 100)).toFixed(1) + '%'); root.style.setProperty('--cy', Math.max(2, Math.min(98, cys / Hh * 100)).toFixed(1) + '%');
      var tb = sp.querySelector('.tb'), tc = tb.getContext('2d'); drawTable(tc, tb.width, tb.height, .5 + cd[1] / 6.4, (1.5 + cd[2] - .1) / 4);
      list.forEach(function (q) { var w = q[3] * pw, h = w * q[4], c = cvs(w * K, h * K), im = art('book-prop-' + q[0]); c.className = 'pr'; c.style.cssText = 'left:' + (q[1] * pw - w / 2).toFixed(1) + 'px;top:' + (q[2] * ph - h).toFixed(1) + 'px;width:' + w.toFixed(1) + 'px;height:' + h.toFixed(1) + 'px';
        var x2 = c.getContext('2d'); if (im) x2.drawImage(im, 0, 0, c.width, c.height); else drawProp(x2, q[0], c.width, c.height);
        if (q[0] !== 'candle') { var away = q[1] > cd[1] ? 1 : 0, sg = x2.createLinearGradient(away ? 0 : c.width, 0, away ? c.width : 0, 0); sg.addColorStop(0, 'rgba(14,7,4,.22)'); sg.addColorStop(1, 'rgba(14,7,4,.66)'); x2.globalCompositeOperation = 'source-atop'; x2.fillStyle = sg; x2.fillRect(0, 0, c.width, c.height); x2.globalCompositeOperation = 'source-over'; }   // (half in shadow: the side away from the candle most)
        sp.insertBefore(c, sp.querySelector('.sh')); PROPS.push(c);
        if (q[0] === 'candle') { flame = document.createElement('i'); flame.className = im ? 'fl gl' : 'fl'; flame.style.cssText = im ? 'left:' + (q[1] * pw - w / 2 + w * .365 - w * .2).toFixed(1) + 'px;top:' + (q[2] * ph - h + h * .14 - w * .2).toFixed(1) + 'px;width:' + (w * .4).toFixed(1) + 'px;height:' + (w * .4).toFixed(1) + 'px'   /* (the painted candle has its own flame: a glow flickers over it) */
            : 'left:' + (q[1] * pw - w * .1).toFixed(1) + 'px;top:' + (q[2] * ph - h * .86).toFixed(1) + 'px;width:' + (w * .2).toFixed(1) + 'px;height:' + (h * .2).toFixed(1) + 'px'; sp.insertBefore(flame, sp.querySelector('.sh')); } });
      var cf = sp.querySelector('.cf'), cc = cf.querySelector('canvas.cc'), cvr = art('book-cover'), q2 = Math.min(3, Math.max(2, G.K * 1.5)), cw = Math.round(G.cv[2] * q2), chh = Math.round(G.cv[3] * q2), FC = BOOK_COVER.face, jm = null; cc.width = cw; cc.height = chh;
      if (G.pt && cvr) { cc.getContext('2d').drawImage(cvr, FC[0], FC[1], FC[2] - FC[0], FC[3] - FC[1], 0, 0, cw, chh); var J = BOOK_COVER.j; JBOX = [(J[0] - FC[0]) / (FC[2] - FC[0]), (J[1] - FC[1]) / (FC[3] - FC[1]), (J[2] - J[0]) / (FC[2] - FC[0]), (J[3] - J[1]) / (FC[3] - FC[1])];   // the painted cover (its leather face), and where its gilt J is
        try { jm = cvs(Math.round(JBOX[2] * cw), Math.round(JBOX[3] * chh)); var jx = jm.getContext('2d'); jx.drawImage(cvr, J[0], J[1], J[2] - J[0], J[3] - J[1], 0, 0, jm.width, jm.height); var id = jx.getImageData(0, 0, jm.width, jm.height), px = id.data; for (i = 0; i < px.length; i += 4) { var gold = px[i] > 200 && px[i + 1] > 130 && px[i + 2] < 120 && px[i] - px[i + 2] > 110; px[i] = 255; px[i + 1] = 246; px[i + 2] = 208; px[i + 3] = gold ? 255 : 0; } jx.putImageData(id, 0, 0); } catch (e) { jm = null; }   // (the glint's shape: the painted J's own gilt; if it cannot be read back there is simply no glint)
        var bs = sp.querySelector('.bsr canvas'), bl = sp.querySelector('.cb canvas.bs'), spd = art('book-spread'), SPD = BOOK_SPREAD, hw = SPD.w - SPD.spine; bs.width = bl.width = Math.round(G.cv[2] * G.K * 1.25); bs.height = bl.height = Math.round(G.cv[3] * G.K * 1.25);
        bs.getContext('2d').drawImage(spd, SPD.spine, 0, hw, SPD.h, 0, 0, bs.width, bs.height); var lx = bl.getContext('2d'), k2 = bl.width / hw; lx.clearRect(0, 0, bl.width, bl.height); lx.drawImage(spd, 0, 0, SPD.spine, SPD.h, bl.width - SPD.spine * k2, 0, SPD.spine * k2, bl.height); }   // the painted open book: its right half under the cover, its left half on the inside of the cover
      else { JBOX = [.33, .255, .34, .37]; drawCover(cc.getContext('2d'), cw, chh); }
      [].forEach.call(cf.querySelectorAll('.gx'), function (gx, k) { var bw = [.5, .32, .16][k], jw = JBOX[2] * 100, jh = JBOX[3] * 100, gc = gx.querySelector('canvas'); gx.style.cssText = 'left:' + JBOX[0] * 100 + '%;top:' + JBOX[1] * 100 + '%;width:' + (jw * bw).toFixed(2) + '%;height:' + jh + '%;transform-origin:0 0' + (G.pt && !jm ? ';display:none' : ''); gc.style.cssText = 'left:0;top:0;width:' + (100 / bw).toFixed(2) + '%;height:100%;transform-origin:0 0';
        var m = G.pt ? jm : jMask(Math.round(JBOX[2] * cw), Math.round(JBOX[3] * chh), '#fff6d0'); if (m) { gc.width = m.width; gc.height = m.height; gc.getContext('2d').drawImage(m, 0, 0); } gx._bw = bw; }); };
    /* the glint: a soft band of light crossing the J, once, as the camera pulls back from it */
    var glint = function (delay, ms) { var cf = sp.querySelector('.cf'), jw = JBOX[2] * G.cv[2]; [].forEach.call(cf.querySelectorAll('.gx'), function (gx, k) { if (!gx.animate) return; var bw = gx._bw * jw, a0 = -.22 * jw - bw / 2, a1 = 1.22 * jw - bw / 2, O = { duration: ms, delay: delay, easing: 'linear', fill: 'both' }, gc = gx.querySelector('canvas');
        gx.animate([{ transform: 'translateX(' + a0.toFixed(1) + 'px) skewX(-18deg)' }, { transform: 'translateX(' + a1.toFixed(1) + 'px) skewX(-18deg)' }], O); gc.animate([{ transform: 'skewX(18deg) translateX(' + (-a0).toFixed(1) + 'px)' }, { transform: 'skewX(18deg) translateX(' + (-a1).toFixed(1) + 'px)' }], O);   // (the band slides; the bright J inside it is slid back by as much, so it stays on the J)
        gx.animate([{ opacity: 0 }, { opacity: [.36, .46, .6][k], offset: .16 }, { opacity: [.36, .46, .6][k], offset: .84 }, { opacity: 0 }], O); }); };
    /* ---- the tale's first frame, as a print. The shot under the book is held still on its opening frame for as long as the book is up (its clips at their first
       frame, its little motions stopped), and drawn from the stage itself, piece by piece, exactly where each piece is on this screen: so at the end of the
       push-in the drawing lies on the real shot to the pixel, whatever the window's shape. Then the woodcut treatment: ink, three flat colours chosen by hue
       (faded red, deep blue, mustard), bare parchment for the lights, a rough key-line wherever two tones meet, and a rough inked edge. A painted miniature
       (BOOK_ART) replaces the stand-in when it lands: composed to the 1920 x 1080 first frame, laid over the screen, nudged by BOOK_FIT[key] = [dx, dy, scale]. ---- */
    var frozen = null, freeze = function () { PFX.held = true; var vids = [], ans = []; [].forEach.call(st.querySelectorAll('video'), function (v) { if (v.closest('#jjst-book')) return; if (!v.paused && !v.ended) { vids.push(v); try { v.pause(); } catch (e) {} } if (v.classList.contains('jjst-layer')) { try { v.currentTime = 0; } catch (e) {} } });
      try { st.getAnimations({ subtree: true }).forEach(function (a) { var t = a.effect && a.effect.target; if (!t || (t.closest && t.closest('#jjst-book,#jjst-paused,#jjst-rotate,#jjst-sndov,#jjst-ctl'))) return; if (window.CSSTransition && a instanceof CSSTransition) return;   /* s129 · A1: a fade that is under way (a figure of the first shot coming in, the transport) is left to LAND, as the tale's own pause leaves it: held halfway under the book it left a figure faint or missing */ if (a.playState === 'running') { a.pause(); ans.push(a); } }); } catch (e) {}
      frozen = frozen ? { v: frozen.v.concat(vids), a: frozen.a.concat(ans) } : { v: vids, a: ans }; };
    /* s129 · A1 (Joe: after pausing through the book, the cavern stood without Trogdor or the chicken). The clips held under the book are now started BEFORE the swap
       (as the bloom rises), so they are running, with a frame on screen, when the shot is shown; a clip that should be running and is not is started again at the
       swap and twice after it; and if the tale is paused at any of those moments the clips are handed to the tale's own pause, whose resume starts them. */
    var runClips = function (list) { (list || []).forEach(function (v) { if (!v.isConnected || v.ended) return; if (storyPaused) { if (pausedVideos.indexOf(v) < 0) pausedVideos.push(v); return; } if (!v.paused) return; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }); };
    var wake = function () { if (frozen) runClips(frozen.v); };
    var thaw = function () { PFX.held = false; var f = frozen; frozen = null; if (!f) return; f.a.forEach(function (a) { try { if (a.playState === 'paused') a.play(); } catch (e) {} }); runClips(f.v); [350, 1100].forEach(function (ms) { setTimeout(function () { runClips(f.v); }, ms); }); };
    var composePrint = function (painted) { var W = G.W, Hh = G.H, k = Math.min(G.K, 1.5, Math.sqrt(2.6e6 / (W * Hh))), cw = Math.round(W * k), ch = Math.round(Hh * k), src = cvs(cw, ch), c = src.getContext('2d'), sr = st.getBoundingClientRect(), list = [], out = cvs(cw, ch), o = out.getContext('2d');
      if (painted) { var f = BOOK_FIT[painted.key] || [0, 0, 1], s = Math.max(cw / painted.im.naturalWidth, ch / painted.im.naturalHeight) * f[2], dw = painted.im.naturalWidth * s, dh = painted.im.naturalHeight * s; o.fillStyle = '#ecdcb4'; o.fillRect(0, 0, cw, ch); o.drawImage(painted.im, (cw - dw) / 2 + f[0] * cw, (ch - dh) / 2 + f[1] * ch, dw, dh); return out; }
      [].forEach.call(st.querySelectorAll('img,video'), function (e, idx) { if (e.id === 'jjst-sky' || e.closest('#jjst-book,#jjst-cap,#jjst-ctl,#jjst-paused,#jjst-sndov,#jjst-skipov,#jjst-loader,#jjst-hints,#jjst-rotate')) return; var r = e.getBoundingClientRect(); if (r.width < 8 || r.height < 8 || r.right < sr.left || r.left > sr.right || r.bottom < sr.top || r.top > sr.bottom) return;
        var vid = e.tagName === 'VIDEO'; if (vid && (!e.classList.contains('jjst-layer') || e.readyState < 2)) return; if (!vid && !(e.complete && e.naturalWidth)) return;
        var op = 1, z = [], q = e; while (q && q !== st) { var cs2 = getComputedStyle(q); op *= parseFloat(cs2.opacity); if (cs2.display === 'none' || cs2.visibility === 'hidden') op = 0; z.unshift(cs2.zIndex === 'auto' ? 0 : parseInt(cs2.zIndex, 10) || 0); q = q.parentNode; } if (op < .5) return;
        list.push({ e: e, r: r, op: op, z: z, i: idx, vid: vid }); });
      list.sort(function (a, b) { for (var i = 0; i < Math.max(a.z.length, b.z.length); i++) { var d = (a.z[i] || 0) - (b.z[i] || 0); if (d) return d; } return a.i - b.i; });
      c.fillStyle = '#141a2c'; c.fillRect(0, 0, cw, ch);
      list.forEach(function (q) { var e = q.e, cs2 = getComputedStyle(e), nw = q.vid ? e.videoWidth : e.naturalWidth, nh = q.vid ? e.videoHeight : e.naturalHeight, x = (q.r.left - sr.left) * k, y = (q.r.top - sr.top) * k, w = q.r.width * k, h = q.r.height * k, fit = cs2.objectFit; if (!nw || !nh) return;
        c.globalAlpha = q.op; try { if (fit === 'cover' || fit === 'contain') { var s = fit === 'cover' ? Math.max(w / nw, h / nh) : Math.min(w / nw, h / nh), dw = nw * s, dh = nh * s; c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); c.drawImage(e, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh); c.restore(); } else c.drawImage(e, x, y, w, h); } catch (er) {} });
      c.globalAlpha = 1; o.fillStyle = '#ecdcb4'; o.fillRect(0, 0, cw, ch);
      var sm = cvs(Math.ceil(cw / 2), Math.ceil(ch / 2)), sc = sm.getContext('2d'); sc.drawImage(src, 0, 0, sm.width, sm.height); c.imageSmoothingEnabled = true; c.drawImage(sm, 0, 0, sm.width, sm.height, 0, 0, cw, ch);   // (softened a little first: a print has no specks)
      var d; try { d = c.getImageData(0, 0, cw, ch); } catch (er2) { o.globalAlpha = .9; o.globalCompositeOperation = 'luminosity'; o.drawImage(src, 0, 0); o.globalAlpha = 1; o.globalCompositeOperation = 'source-over'; return out; }   // (the art could not be read back: a plain tinted print)
      var px = d.data, n = cw * ch, band = new Uint8Array(n), nz = cvs(Math.ceil(cw / 9) + 2, Math.ceil(ch / 9) + 2), nc = nz.getContext('2d'), nd = nc.createImageData(nz.width, nz.height), r0 = rng(41), i, x2, y2;
      for (i = 0; i < nd.data.length; i += 4) { nd.data[i] = r0() * 255; nd.data[i + 1] = r0() * 255; nd.data[i + 3] = 255; } nc.putImageData(nd, 0, 0); var big = cvs(cw, ch), bc = big.getContext('2d'); bc.imageSmoothingEnabled = true; bc.drawImage(nz, 0, 0, nz.width, nz.height, 0, 0, nz.width * 9, nz.height * 9); var jit = bc.getImageData(0, 0, cw, ch).data, wob = Math.max(1.6, cw / 520);   // a soft noise: every edge is pushed about by it a little (a cut edge, not a speckle)
      var INK = [43, 29, 20], RED = [165, 64, 46], BLU = [47, 74, 114], MUS = [194, 149, 47], PAR = [236, 220, 180], col = [INK, BLU, RED, MUS, null, null, null, null, PAR], hist = new Uint32Array(256), acc = 0, T1 = 0, T2 = 0, T3 = 0;
      for (i = 0; i < n; i += 3) hist[(.2126 * px[i * 4] + .7152 * px[i * 4 + 1] + .0722 * px[i * 4 + 2]) | 0]++;   // the tones are cut by how much of THIS picture is that dark (a night scene still gets its lights): the darkest tenth is ink, then two tones, and the lightest quarter is bare parchment
      for (i = 0; i < 256; i++) { acc += hist[i] * 3 / n; if (!T1 && acc >= .1) T1 = i + 1; if (!T2 && acc >= .42) T2 = i + 1; if (!T3 && acc >= .74) T3 = i + 1; } T2 = Math.max(T2, T1 + 6); T3 = Math.max(T3, T2 + 6);
      for (i = 0; i < n; i++) { var R = px[i * 4], Gc = px[i * 4 + 1], Bc = px[i * 4 + 2], L = .2126 * R + .7152 * Gc + .0722 * Bc , mx = Math.max(R, Gc, Bc), mn = Math.min(R, Gc, Bc), sat = mx ? (mx - mn) / mx : 0, hue = 0;
        if (mx !== mn) { hue = mx === R ? ((Gc - Bc) / (mx - mn)) % 6 : mx === Gc ? (Bc - R) / (mx - mn) + 2 : (R - Gc) / (mx - mn) + 4; hue *= 60; if (hue < 0) hue += 360; }
        var spot = sat < .16 ? 1 : (hue < 14 || hue >= 318) ? 2 : hue < 75 ? 3 : 1;   // greys, greens, blues and purples → deep blue · reds and pinks → faded red · oranges and yellows → mustard
        band[i] = L < T1 ? 0 : sat > .3 && spot > 1 ? (L < T3 ? spot : spot + 4) : L < T2 ? spot : L < T3 ? spot + 4 : 8; }   // (a strongly coloured thing keeps its colour however light it is: the dragon is red, the gold is gold)
      var edge = Math.max(2, Math.round(Math.min(cw, ch) * .016));
      for (y2 = 0; y2 < ch; y2++) for (x2 = 0; x2 < cw; x2++) { i = y2 * cw + x2; var wx = Math.max(0, Math.min(cw - 3, Math.round(x2 + (jit[i * 4] - 128) / 128 * wob * 2))), wy = Math.max(0, Math.min(ch - 3, Math.round(y2 + (jit[i * 4 + 1] - 128) / 128 * wob * 2))), wi = wy * cw + wx, b = band[wi], cc, a = 1, key = band[wi + 2] !== b || band[wi + 2 * cw] !== b, de = Math.min(x2, y2, cw - 1 - x2, ch - 1 - y2);
        if (key || de < edge * (.35 + jit[i * 4] / 255)) cc = INK; else if (b === 8) cc = PAR; else if (b >= 5) { cc = col[b - 4]; a = .52; } else cc = col[b];
        px[i * 4] = cc[0] * a + PAR[0] * (1 - a); px[i * 4 + 1] = cc[1] * a + PAR[1] * (1 - a); px[i * 4 + 2] = cc[2] * a + PAR[2] * (1 - a); px[i * 4 + 3] = 255; }
      o.putImageData(d, 0, 0); return out; };
    /* ---- everything the pages need is fetched, decoded and drawn BEFORE the cover opens (so nothing is decoded during a turn and no line re-flows as it writes on) ---- */
    var wait = function (ms) { return new Promise(function (res) { setTimeout(res, ms); }); };
    var toURI = function (name) { return fetch(F(name)).then(function (r) { return r.blob(); }).then(function (b) { return new Promise(function (res) { var fr = new FileReader(); fr.onload = function () { BOOK_URI[name] = fr.result; res(); }; fr.onerror = function () { res(); }; fr.readAsDataURL(b); }); }).catch(function () {}); };
    var svgCv = function (svg, w, h) { return new Promise(function (res) { var im = new Image(); im.onload = function () { var c = cvs(w, h); try { c.getContext('2d').drawImage(im, 0, 0, w, h); } catch (e) {} res(c); }; im.onerror = function () { res(null); }; im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }); };
    var imgOf = function (name) { return new Promise(function (res) { var im = new Image(); im.onload = function () { res(im); }; im.onerror = function () { res(null); }; im.src = F(name); }); };
    var planes = function () { P.forEach(function (d, p) { var im = art(d.pic); if (!im || !d.move) return; var b = picBox(p), w = Math.round(Math.min(b[2] * (d.move.k || 2) * G.K, im.naturalWidth * 1.6)), c = cvs(w, w * im.naturalHeight / im.naturalWidth), x = c.getContext('2d'); x.drawImage(im, 0, 0, c.width, c.height); plane[d.pic] = c; }); };   // the painted map at the size its closest view needs (never much past the painting's own pixels); its names are lettered over it wherever it is shown
    var load = function () { var pre = bookPrep(B); artIm = pre.im;
      return pre.done.then(function () { if (ended) return; size(); var need = {}; P.forEach(function (d) { if (!art(d.pic) && !d.print) (BOOK_USES[d.pic] || []).forEach(function (n) { need[n] = 1; }); }); return Promise.all(Object.keys(need).map(toURI)); })   // (only a picture whose painted file failed needs its stand-in's pieces)
        .then(function () { var chain = Promise.resolve();
          P.forEach(function (d) { if (art(d.pic) || d.print) return; chain = chain.then(function () { if (BOOK_MAPS[d.pic]) return svgCv(bookPic(d.pic, true), d.move ? 2160 : 1080, d.move ? 1669 : 835).then(function (c) { if (c) { bookNames(c.getContext('2d'), 0, 0, c.width, c.height, MAP_NAMES0); plane[d.pic] = c; } });
              return svgCv(bookPic(d.pic), 1080, 840).then(function (c) { pic[d.pic] = c; }); }).then(function () { return wait(0); }); });
          return chain; })
        .then(function () { freeze(); var pp = P.filter(function (d) { return d.print; })[0]; return pp && !art(pp.pic) ? wait(380).then(function () { if (!ended) printCv = composePrint(null); }) : wait(60); })   // (the shot under the book is held on its first frame; its print is only made if the painted first frame is missing)
        .catch(function () {}).then(function () { if (ended) return; build(); ready = true; }); };
    var build = function () { bmp = {}; LAY = {}; if (feather.c) feather.c = {}; planes(); dress(); holders(); if (pwin) { pwin.el.remove(); pwin = null; } P.forEach(function (d, p) { if (d.print && (printCv || art(d.pic))) printWin(p); }); ['f', 'b'].forEach(function (k) { if (LEAF[k]) LEAF[k].lw.remove(); LEAF[k] = mkLeaf(); }); show(opened); units().forEach(function (U) { [U.l, U.r].forEach(function (p) { if (p != null) { basePage(p); typedPage(p); } }); }); PUP.live.slice().forEach(pupDrop); pupSet([]); PUP.bm = {}; P.forEach(function (d, p) { pupBuild(p); pupUnder(p); }); pupSet(pupCur()); };   /* s131: the puppets' bitmaps too, and the first spread's groups (still, under the cover): everything is drawn before the cover opens */
    /* ---- the cover opens about the spine, lifting as it comes over, lands with a small bounce and settles; the open book slides to the middle ---- */
    var openT = null, coverAt = function (t) { var m = Math.min(1, t / .78), a = -180 * ease(m), z = G.ZR - (G.ZR - G.TH) * ease(m) + 34 * G.u * Math.sin(Math.PI * m); if (t > .78) { var b = (t - .78) / .22, bo = Math.sin(Math.PI * b) * (1 - b); a += 7 * bo; z += 3 * G.u * bo; } return 'translateZ(' + z.toFixed(2) + 'px) rotateY(' + a.toFixed(3) + 'deg)'; };
    var open = function () { if (opened || ended) return; opened = true; unsched(openT); var O = { duration: 1450, easing: 'linear', fill: 'forwards' }, kf = [], i; for (i = 0; i <= 40; i++) kf.push({ transform: coverAt(i / 40) });
      if (cv.animate) { cv.animate(kf, O); if (!G.one) { shL.animate([{ opacity: 0 }, { opacity: 0, offset: .6 }, { opacity: 1 }], { duration: 1150, fill: 'forwards' }); }
        else cv.animate([{ opacity: 1 }, { opacity: 1, offset: .4 }, { opacity: 0, offset: .64 }, { opacity: 0 }], O);
        sdR.animate([{ opacity: .6, transform: 'scaleX(1)' }, { opacity: .34, transform: 'scaleX(.5)', offset: .5 }, { opacity: 0, transform: 'scaleX(.05)' }], { duration: 760, easing: 'ease-out' }); }
      cv.style.transform = coverAt(1); sp.style.transform = ''; if (G.one) cv.style.opacity = '0'; shL.style.opacity = G.one ? '0' : '1';
      sched(function () { sfxShot('book-open', .2); }, 1090); openT = sched(function () { openT = null; if (!ended) { pupPlay(); runUnit(); prep(); } }, 1480); sync(); };
    var tryOpen = function () { openT = null; if (ended || opened) return; if (ready || performance.now() - t0 > 9500) { if (!ready) { try { build(); } catch (e) {} ready = true; } open(); } else openT = sched(tryOpen, 140); };
    /* ---- the hand-over. The camera goes into the last miniature, the book coming up flat as it does, until the print lies exactly on the real shot (still held on
       its first frame under it); then the print melts away (0.9s, nothing moving); then the shot starts running and the tale begins ---- */
    var reg = null, finish = function (fast) { if (ended) return; ended = true; turnEnd(); pupFinal();   /* s131: pose 'a', and still, from the moment the push-in starts */ typeEnd(); moveEnd(true); prepOff(); unsched(openT); openT = null; skip.classList.remove('on'); skip.style.pointerEvents = 'none'; bk.style.pointerEvents = 'none';
      try { H.reveal(); } catch (e) {}
      var fin = function () { window.removeEventListener('resize', rzq); root.remove(); bookOn = false; bookCtl = null; thaw(); try { H.done(); } catch (e) {} };
      var pw = !fast && opened && win && win.print && root.animate ? win : null;
      if (!pw) { wake(); try { if (H.music) H.music('cut'); } catch (e) {} if (root.animate) root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, easing: 'ease', fill: 'forwards' }); sched(fin, 730); return; }
      var cmT = getComputedStyle(cm).transform, cmP = getComputedStyle(cm).translate; if (drift) { try { drift.cancel(); } catch (e) {} } panOff(); cm.style.transform = cmT === 'none' ? '' : cmT; cm.style.translate = !cmP || cmP === 'none' ? '' : cmP;   // (the creep and the lean are held where they stand: the push carries on from there)
      var tilt = getComputedStyle(bk).transform; bk.style.transform = 'none'; var r = pw.cv.getBoundingClientRect(), sr = root.getBoundingClientRect(); bk.style.transform = '';   // (measured as it will be once the book has come up flat; nothing is painted in between)
      var geo = pw.geo || [0, 0, G.W, G.H], S = geo[2] / r.width, tx = geo[0] - S * (r.left - sr.left), ty2 = geo[1] - S * (r.top - sr.top), O = { duration: 1700, easing: 'cubic-bezier(.6,0,.22,1)', fill: 'forwards' };   // (the push ends with the painting where its fit puts it over the real shot)
      /* the page's soft edge round the painting lets go once the painting's own edges have left the screen (so no edge of either is ever seen): from then to the end
         of the push it fades, and at the end the painting fills the screen */
      var l0 = r.left - sr.left, t0p = r.top - sr.top, pc = Math.max((l0 + 3) / Math.max(1, l0 - geo[0]), (t0p + 3) / Math.max(1, t0p - geo[1]), (G.W + 3 - l0 - r.width) / Math.max(1, geo[0] + geo[2] - l0 - r.width), (G.H + 3 - t0p - r.height) / Math.max(1, geo[1] + geo[3] - t0p - r.height));   // (how far through the push the last of the painting's edges leaves the screen)
      pc = Math.max(.5, Math.min(.97, pc + .012)); if (pw.fr && pw.fr.animate) pw.fr.animate([{ opacity: 1 }, { opacity: 1, offset: pc }, { opacity: 0, offset: Math.min(.995, pc + (1 - pc) * .75) }, { opacity: 0 }], O);   // (the offsets are in the push's own eased progress, as its moves are)
      bk.animate([{ transform: tilt }, { transform: 'matrix(1,0,0,1,0,0)' }], O); ps.animate([{ transform: 'translate(0px,0px) scale(1)' }, { transform: 'translate(' + tx.toFixed(3) + 'px,' + ty2.toFixed(3) + 'px) scale(' + S.toFixed(5) + ')' }], O);
      /* the swap is hidden, not dissolved through: as the push ends a warm bloom rises from the figure and covers the picture; under it, at its height, the painting
         goes and the real shot (held on its first frame) is simply there; the bloom clears and the shot starts running */
      var BL = bloom(pw.c || [G.W / 2, G.H / 2]); sched(function () { BL.rise(); wake(); }, 1390); sched(function () { try { if (H.music) H.music('end'); } catch (e) {} }, 1150);   // (the book's music is gone under the bloom)
      sched(function () { var q = pw.cv.getBoundingClientRect(); reg = [+(q.left - sr.left).toFixed(2), +(q.top - sr.top).toFixed(2), +q.width.toFixed(2), +q.height.toFixed(2)]; try { window.__bookReg = { at: reg, want: geo.map(function (v) { return +v.toFixed(2); }), screen: [G.W, G.H] }; } catch (e) {}
        root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 170, easing: 'linear', fill: 'forwards' }); }, 1745);
      sched(function () { fin(); BL.clear(); }, 1930); };
    var bloom = function (c) { var el = document.createElement('div'), g = document.createElement('i'), far = Math.max(Math.hypot(c[0], c[1]), Math.hypot(G.W - c[0], c[1]), Math.hypot(c[0], G.H - c[1]), Math.hypot(G.W - c[0], G.H - c[1])), R = far * 1.22, r = rng(23), i, S = [];
      el.id = 'jjst-bloom'; g.className = 'g'; g.style.cssText = 'left:' + (c[0] - R).toFixed(1) + 'px;top:' + (c[1] - R).toFixed(1) + 'px;width:' + (2 * R).toFixed(1) + 'px;height:' + (2 * R).toFixed(1) + 'px'; el.appendChild(g);
      for (i = 0; i < 12; i++) { var s = document.createElement('i'), a = (i + r() * .8) / 12 * 6.283, d = far * (.07 + r() * .36), sz = Math.max(18, G.H * (.042 + r() * .04)), x = Math.max(sz, Math.min(G.W - sz, c[0] + Math.cos(a) * d)), y = Math.max(G.H * .16, Math.min(G.H * .94, c[1] + Math.sin(a) * d * .62)); s.className = 's'; s.style.cssText = 'left:' + (x - sz / 2).toFixed(1) + 'px;top:' + (y - sz / 2).toFixed(1) + 'px;width:' + sz.toFixed(1) + 'px;height:' + sz.toFixed(1) + 'px'; el.appendChild(s); S.push([s, G.H * (.05 + r() * .06), 700 + r() * 120, (r() - .5) * 30]); }   // a dozen small gold four-point glints (like the ones in the painted night sky), each drifting up a little as it comes and goes
      st.appendChild(el);
      return { rise: function () { if (!g.animate) { g.style.opacity = '1'; return; } g.animate([{ opacity: 0, transform: 'scale(.1)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 350, easing: 'cubic-bezier(.2,.6,.3,1)', fill: 'forwards' });
          S.forEach(function (q, k) { q[0].animate([{ opacity: 0, transform: 'translateY(0px) scale(.25) rotate(' + (-q[3]).toFixed(0) + 'deg)' }, { opacity: 1, transform: 'translateY(' + (-q[1] * .35).toFixed(1) + 'px) scale(1) rotate(0deg)', offset: .32 }, { opacity: 1, transform: 'translateY(' + (-q[1] * .68).toFixed(1) + 'px) scale(.9) rotate(' + (q[3] * .5).toFixed(0) + 'deg)', offset: .64 }, { opacity: 0, transform: 'translateY(' + (-q[1]).toFixed(1) + 'px) scale(.4) rotate(' + q[3].toFixed(0) + 'deg)' }], { duration: q[2], delay: 40 + ((k * 5) % 12) * 36, easing: 'linear', fill: 'both' }); }); },
        clear: function () { var end = function () { el.remove(); }; if (!g.animate) { end(); return; } g.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(1.1)' }], { duration: 500, easing: 'cubic-bezier(.4,0,.6,1)', fill: 'forwards' }); sched(end, 780); } }; };   // (the last glints finish over the real shot, a moment after the glow has gone)
    var sync = function () { if (window.jjStory && window.jjStory.ctlSync) window.jjStory.ctlSync(); };
    /* the window changes size: whatever is in flight is finished, everything is drawn again for the new size, and the spread that was up comes back whole */
    var rzT = 0, rzWait = false, rz = function () { rzT = 0; if (ended) return; if (storyPaused) { rzWait = true; return; }   /* (held, e.g. under the 'turn your phone' card: it is laid out again when the tale runs again; a timer made while the tale is held would fire twice) */ var oldG = G, was = G.one, k = size(), newG = G; if (!ready || !k) return;   /* (nothing changed: nothing is touched) */ G = oldG; turnEnd(); PUP.live.slice().forEach(pupDrop); pupSet([]); typeEnd(); moveEnd(true); prepOff(); winOff(); G = newG;   /* (whatever was in flight is finished in the old layout) */
      if (k === 2) unit = was ? Math.floor(unit / 2) : unit * 2; var pp = P.filter(function (d) { return d.print; })[0]; if (pp && frozen && !art(pp.pic)) { try { printCv = composePrint(null); } catch (e) {} }
      build(); camRe(); if (!opened) return; cv.getAnimations().forEach(function (x) { x.cancel(); }); sp.getAnimations().forEach(function (x) { x.cancel(); }); cv.style.transform = coverAt(1); cv.style.opacity = G.one ? '0' : ''; shL.style.opacity = G.one ? '0' : '1'; sp.style.transform = '';
      if (openT == null) { pupPlay(); holdGo(1300); prep(); } };
    var rzq = function () { clearTimeout(rzT); rzT = setTimeout(rz, 160); }; window.addEventListener('resize', rzq);
    var bkBack = function (e) { return !!(e && typeof e.clientX === 'number' && e.clientX < window.innerWidth / 2 && unit > 0); }, bkCur = '';
    bk.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (storyPaused || ended) return; bookCtl.go(bkBack(e) && opened && openT == null ? -1 : 1); });
    bk.addEventListener('mousemove', function (e) { var v = ended ? 'none' : bkBack(e) && opened ? 'prev' : 'page'; if (v === bkCur) return; bkCur = v; bk.setAttribute('data-cursor', v);
      try { (e.target || bk).dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); } catch (x) {} });   /* s135: (the cursor reads its state when the pointer enters something: told again as the half changes) */
    skip.style.display = 'none';   /* s129 · B3: the tale's own transport is up through the book (Next gets through it); the Skip link is retired */
    skip.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (storyPaused) return; finish(true); });
    root.addEventListener('click', function (e) { e.stopPropagation(); });
    /* the opening shot, one move: tight on the J embossed on the cover (a glint crossing it), easing back until the whole closed book is on the table; a beat; the
       cover opens; and from there a slow drift in toward the book for as long as it is up */
    var camK = 1.07, camTot = 52000;
    var camRe = function () { if (!drift || !cm.animate) return; if (!opened) { camGo(0); return; } var t = drift.currentTime || 0, k = 1; try { k = new DOMMatrixReadOnly(getComputedStyle(cm).transform).a || 1; } catch (e) {} try { drift.cancel(); } catch (e) {} panOff(); cm.style.translate = ''; camK = G.KT || 1.07; k = Math.min(Math.max(1, k), camK);
      drift = cm.animate([{ transform: 'scale(' + k.toFixed(4) + ')' }, { transform: 'scale(' + camK.toFixed(4) + ')' }], { duration: Math.max(1500, camTot - t), easing: 'linear', fill: 'both' }); };   // (the window changed size: the creep carries on from where it was, to the new size's limit)
    var camGo = function (lead) { if (!cm.animate) return; if (drift) { try { drift.cancel(); } catch (e) {} } var cr = sp.querySelector('.cf').getBoundingClientRect(), sr = root.getBoundingClientRect(), jh = cr.height * JBOX[3], jx = cr.left + cr.width * (JBOX[0] + JBOX[2] / 2) - sr.left, jy = cr.top + cr.height * (JBOX[1] + JBOX[3] / 2) - sr.top;
      /* s129 · B1: ONE move for the whole book. Back from the J until the closed book is in view, and from there the camera never stops: it creeps in on the book
         (to KT times its size, about its own middle, with no change of angle) for as long as the three spreads take; the last push into the picture carries on from it */
      var S0 = Math.max(1.6, Math.min(3.2, G.H * .6 / jh)), PULL = BOOK_OPEN_AT - 650, oy = G.cy, est = 650 + 1480; units().forEach(function (U, k) { [U.l, U.r].forEach(function (p) { if (p != null) est += typeMs(p); }); est += BOOK_BEAT + (U.l != null && U.r != null ? BOOK_GAP : 0) + 260 + bookHold(P[U.r].text.length) + (k ? DUR + 60 : 0); });
      var TOT = PULL + est; camK = G.KT || 1.07; camTot = TOT;
      drift = cm.animate([{ transform: 'translate(' + (-S0 * (jx - G.W / 2)).toFixed(1) + 'px,' + (G.H / 2 - oy - S0 * (jy - oy)).toFixed(1) + 'px) scale(' + S0.toFixed(3) + ')', easing: 'cubic-bezier(.6,0,.2,1)' }, { transform: 'translate(0px,0px) scale(1)', offset: PULL / TOT, easing: 'cubic-bezier(.3,0,.72,.9)' }, { transform: 'translate(0px,0px) scale(' + camK.toFixed(4) + ')' }], { duration: TOT, delay: lead || 0, fill: 'both' }); glint(120 + (lead || 0), PULL - 520); };
    /* nothing of the book shows (the tale's black is up) until every picture is decoded and every page drawn; then the opening shot starts, with nothing left to do but move */
    root.style.opacity = '.004'; var began = false, begin = function () { if (began || ended) return; began = true; if (!ready) { try { build(); } catch (e) {} ready = true; }
      var n = 0, last = performance.now(), LEAD = 240, go = function () { if (ended) return; try { if (H.music) H.music('start'); } catch (e) {} if (root.animate) { root.style.opacity = ''; root.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700, delay: LEAD, easing: 'ease', fill: 'backwards' }); } else root.style.opacity = ''; camGo(LEAD); t0 = performance.now() + LEAD; openT = sched(tryOpen, BOOK_OPEN_AT + LEAD); };   // (the shot's moves are MADE a quarter of a second before they start, still unseen: the frame or two the browser needs to take them up is spent before anything shows)
      var warm = function () { var t = performance.now(), d = t - last; last = t; if (++n >= 3 && (d < 26 || n > 40)) { go(); return; } requestAnimationFrame(warm); }; requestAnimationFrame(warm); };   // (drawn, but as good as unseen, for the few frames the browser takes to put every piece of it on the graphics card; the shot starts once frames are coming steadily)
    load().then(begin); setTimeout(begin, 9000);
    bookCtl = { go: function (d) { if (ended || !began) return; if (!opened) { if (d > 0 && ready) open(); return; } if (openT != null) return; if (turning) turnEnd(); if (d > 0) next(); else if (unit > 0) turn(-1); },
      atStart: function () { return !opened || unit === 0; }, skip: function () { finish(true); }, resumed: function () { if (frozen) frozen.a.forEach(function (a) { try { if (a.playState === 'running') a.pause(); } catch (e) {} }); leafHold(); if (rzWait) { rzWait = false; rz(); } },
      state: function () { return { unit: unit, units: units().length, began: began && !!drift, opened: opened, turning: !!turning, typing: !!ty, one: G.one, ended: ended, ready: ready, reg: reg, pw: G.PW, hold: holdT != null || holdWait, mask: !!PMASK.rok, pups: PUP.live.map(function (r) { return P[r.p].pic + ':' + r.A.length; }).concat(Object.keys(PUP.grp).filter(function (k) { return PUP.grp[k].A.length; }).map(function (k) { return P[k].pic + ':' + PUP.grp[k].A.length; })), groups: Object.keys(PUP.grp).map(function (k) { return P[k].pic; }), lab: pupLab }; } };   /* (lab: the puppets taken off and put back, to compare a page with and without them) */
    return bookCtl; }
  /* ---- s126 · THE STORYBOOK'S PICTURES (stand-ins until Joe's painted miniatures land). Every page has one UNFRAMED miniature sitting on the parchment. Each is
     a key (book-p1-1 … book-p1-6, book-p2-1 … book-p2-6). BOOK_ART[key] set to a file name (say 'book-p1-2' → story-book-p1-2.webp) swaps a stand-in for a
     painted one. With no entry the stand-in is drawn in code as a WOODCUT: ink + flat spot colours (faded red, deep blue, mustard) on the bare parchment,
     rough-edged, with no border. Where a piece of the tale's art is used (a chicken, the village board, Trogdor's outline as a cast shadow, a rider) it goes
     through a print filter: an ink outline cut from its alpha, its darks thresholded to ink, its body one flat colour. Each stand-in is a stand-alone SVG (its
     pieces of art inlined: BOOK_URI) that the book rasterises ONCE into the page's bitmap. The sixth picture of each book is not here: it is the tale's own first
     frame, printed (bookRun: the match). ---- */
  /* s127 · the painted art is in (Joe's set, cut into page-ready files: story-<name>.webp). BOOK_ART: key → file name; a key with no entry, or whose file fails to
     load, falls back to the stand-in drawn in code. The square miniatures have their paper divided out (paper = white): they are MULTIPLIED onto the page, so no
     rectangle shows. The three wide ones (the map and the two first frames) are opaque panels, laid on with a soft deckled edge. */
  var BOOK_ART = {}, BOOK_URI = {}, BOOK_PRE = null;           // BOOK_URI: the pieces of the tale's art a code stand-in prints from, inlined · BOOK_PRE: everything fetched and decoded ahead (bookPrep)
  ['book-p1-1', 'book-p1-2', 'book-p1-3', 'book-p1-4', 'book-p1-5', 'book-p1-6', 'book-p2-1', 'book-p2-2', 'book-p2-3', 'book-p2-4', 'book-p2-5', 'book-p2-6', 'book-band-1', 'book-band-2', 'book-band-3', 'book-band-4', 'book-band-5',
    'book-orn-diamond', 'book-orn-star', 'book-orn-fleur', 'book-orn-rosette', 'book-initial-red', 'book-initial-blue', 'book-initial-green', 'book-initial-gold', 'book-corner-1', 'book-corner-2', 'book-corner-3', 'book-corner-4',
    'book-divider-dragon', 'book-divider-acorn', 'book-divider-sunmoon', 'book-medal-chicken', 'book-medal-dragon', 'book-medal-knight', 'book-medal-arch', 'book-cover', 'book-spread', 'book-prop-tankard', 'book-prop-coins', 'book-prop-feather', 'book-prop-candle'].forEach(function (k) { BOOK_ART[k] = k; });
  var BOOK_PANEL = { 'book-p1-1': 1, 'book-p1-6': 1, 'book-p2-6': 1 };   // the opaque, full-bleed paintings (the rest are multiplied onto the paper)
  /* a painted first frame is laid over the real shot by its MAIN FIGURE: `art` = a point of the painting (fractions of it), `layer` + `at` = the same point on the live
     figure (a layer of the shot, and where on that layer's box), `k` = the painting's size against just covering the screen, `nudge` = a last shift (fractions of the
     screen). The painting always still covers the screen. (They are painted to the first frames' layout but not to the pixel: the figure is a little bigger in each.) */
  var BOOK_HERO = 'video.jjst-layer.hero', BOOK_JOE = 'img.jjst-layer[src*="story2-joe"]', BOOK_LAND = 'img.jjst-layer[src*="wasteland-land"]';
  /* (st2-23, second pass) each painted first frame is laid over the real shot by its MAIN FIGURE: pairs of points, [x, y on the painting, the shot's layer, x, y on that
     layer's box, weight]; the one size and place that puts the painted points nearest their twins is used (the figure's box corner to corner, and its eye / helmet).
     The painting then need not fill the screen: a soft, dark, out-of-focus surround carries it to the screen's edges (printWin). */
  var BOOK_FIT = { 'book-p1-6': { pts: [[.505, .26, BOOK_HERO, .2775, .3205, 1], [.925, .26, BOOK_HERO, .835, .3205, 1], [.925, .8, BOOK_HERO, .835, .7973, 1], [.505, .8, BOOK_HERO, .2775, .7973, 1], [.589, .457, BOOK_HERO, .4196, .4835, 2]] },   // Trogdor, snout to tail and wing to coil; his closed eye
                   'book-p2-6': { pts: [[.478, .405, BOOK_JOE, .1975, .0459, 1], [.628, .405, BOOK_JOE, .8675, .0459, 1], [.628, .742, BOOK_JOE, .8675, .9839, 1], [.478, .742, BOOK_JOE, .1975, .9839, 1], [.5456, .422, BOOK_JOE, .386, .118, 1],   // Joe, cape to hand and helmet to boots
                                        [.775, .12, BOOK_LAND, .717, .121, .6], [.632, .45, BOOK_LAND, .608, .43, .6], [.902, .45, BOOK_LAND, .848, .43, .6]] } };   // the arch: its top stone, its two legs
  /* the painted open book (story-book-spread, 1421 x 884), in its own pixels: its gutter line (the hinge of the cover and of every leaf) and the box of each top page
     (from the gutter out past the page's drawn edge; the page's exact outline is read from the art inside that box: pageMask) */
  var BOOK_SPREAD = { w: 1421, h: 884, spine: 707, l: [65, 8, 707, 812], r: [707, 8, 1349, 812] };
  var BOOK_COVER = { w: 898, h: 1220, face: [4, 0, 898, 1094], j: [288, 306, 653, 793] };   // the painted closed book: its leather face (without the drawn spine and page edges), and the gilt J on it
  var BK = { ink: '#2b1d14', red: '#a5402e', blue: '#2f4a72', must: '#c2952f', pale: '#e9dcb8', ash: '#8f887b', purple: '#6a3d8a' };
  function bookDefs() { var m = function (hex) { var n = parseInt(hex.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255].map(function (v) { return v.toFixed(3); }); };
    var print = function (id, fill, thr, ring, mid, mthr) { var k = m(BK.ink), tv = [], tm = []; for (var i = 0; i < 10; i++) { tv.push(i >= thr ? 1 : 0); tm.push(i >= mthr ? 1 : 0); }
      return '<filter id="' + id + '" color-interpolation-filters="sRGB" x="-8%" y="-8%" width="116%" height="116%">' +
        '<feComponentTransfer in="SourceAlpha" result="a"><feFuncA type="discrete" tableValues="0 0 0 1 1 1"/></feComponentTransfer>' +
        '<feMorphology in="a" operator="dilate" radius="' + (ring || 1.1) + '" result="d"/><feComposite in="d" in2="a" operator="out" result="ring"/>' +
        '<feFlood flood-color="' + BK.ink + '"/><feComposite in2="ring" operator="in" result="outline"/>' +
        '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 ' + k[0] + ' 0 0 0 0 ' + k[1] + ' 0 0 0 0 ' + k[2] + ' -.2126 -.7152 -.0722 0 1"/><feComponentTransfer><feFuncA type="discrete" tableValues="' + tv.join(' ') + '"/></feComponentTransfer><feComposite in2="a" operator="in" result="dark"/>' +
        (fill ? '<feFlood flood-color="' + fill + '"/><feComposite in2="a" operator="in" result="body"/>' : '') +
        (mid ? '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 ' + m(mid).join(' 0 0 0 0 ') + ' -.2126 -.7152 -.0722 0 1"/><feComponentTransfer><feFuncA type="discrete" tableValues="' + tm.join(' ') + '"/></feComponentTransfer><feComposite in2="a" operator="in" result="midt"/>' : '') +
        '<feMerge>' + (fill ? '<feMergeNode in="body"/>' : '') + (mid ? '<feMergeNode in="midt"/>' : '') + '<feMergeNode in="dark"/><feMergeNode in="outline"/></feMerge></filter>'; };
    return '<defs>' +
      '<filter id="jjbk-rough" x="-3%" y="-3%" width="106%" height="106%"><feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="2" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/></filter>' +
      print('jjbk-pp', BK.pale, 6) + print('jjbk-pr', BK.red, 7) + print('jjbk-pm', BK.must, 6) + print('jjbk-pk', BK.ink, 0, .4) + print('jjbk-pt', BK.pale, 8, 1.2, BK.red, 5) +
      /* a board of the tale as a print: darks → ink, mid-tones → one flat colour, lights → the bare parchment */
      '<filter id="jjbk-board" color-interpolation-filters="sRGB">' + [[BK.must, '0 0 0 0 0 .8 .8 .8 .8 .8 .8 .8'], [BK.blue, '0 0 0 0 0 0 0 0 .86 .86 .86 .86'], [BK.ink, '0 0 0 0 0 0 0 0 0 0 1 1']].map(function (q, i) {
          return '<feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 ' + m(q[0]).join(' 0 0 0 0 ') + ' -.2126 -.7152 -.0722 0 1"/><feComponentTransfer><feFuncA type="discrete" tableValues="' + q[1] + '"/></feComponentTransfer><feComposite in2="SourceAlpha" operator="in" result="t' + i + '"/>'; }).join('') + '<feMerge><feMergeNode in="t0"/><feMergeNode in="t1"/><feMergeNode in="t2"/></feMerge></filter>' +
      '<filter id="jjbk-shadow" x="-20%" y="-20%" width="140%" height="140%"><feColorMatrix type="matrix" values="0 0 0 0 .08 0 0 0 0 .07 0 0 0 0 .12 0 0 0 .7 0"/><feGaussianBlur stdDeviation="2.6"/></filter>' +
      '</defs>'; }
  var VILLAGE = 'Thatchwick';                                  // the village's name (Joe's: final; one edit here would rename it on the map)
  /* the names on the STAND-IN map (drawn in code: only if the painted map fails to load). Every name is provisional except Thatchwick, Brighthelm and Formosa Isle (Joe's). (This is Part One's village. The burnt 'Welcome to ...head' sign of Storytime 2 belongs
     to a different village, in the land beyond the portal: nothing here should connect the two.) */
  var MAP_NAMES0 = [
    { name: 'The Wyrmspine', x: .69, y: .305, size: .044, angle: 3, kind: 'region', curve: -.1 },      // the mountains
    { name: 'Mount Scorch', x: .835, y: .115, size: .032, angle: -24, kind: 'place' },                // the dark peak
    { name: 'The Whisperwood', x: .2, y: .385, size: .04, angle: -4, kind: 'region', curve: -.08 }, // the forest
    { name: 'The Old Arch', x: .49, y: .375, size: .03, angle: 0, kind: 'place' },                   // the clearing
    { name: 'The Greenwold', x: .47, y: .79, size: .05, angle: 0, kind: 'region', curve: -.1 },     // the hills
    { name: VILLAGE, x: .505, y: .606, size: .036, angle: 0, kind: 'village' },
    { name: 'Here be chickens', x: .63, y: .69, size: .024, angle: 6, kind: 'note' },
    { name: 'River Amble', x: .395, y: .615, size: .028, angle: -40, kind: 'note' },
    { name: 'Brighthelm', x: .235, y: .875, size: .034, angle: 0, kind: 'place' },                    // the harbour town, on the south-west coast
    { name: 'The Misty Fens', x: .70, y: .885, size: .032, angle: -3, kind: 'place' },
    { name: 'The Old Keep', x: .815, y: .63, size: .028, angle: 0, kind: 'place' },
    { name: 'Formosa Isle', x: .915, y: .79, size: .026, angle: 0, kind: 'place' } ];                 // a small far-off island, out at sea in the east
  /* the names on the PAINTED map (story-book-p1-1), each placed by eye on the art. x, y: the middle of the name, as fractions of the map */
  var MAP_NAMES = [
    { name: 'The Wyrmspine', x: .27, y: .158, size: .034, angle: -2, kind: 'region', curve: 0 },      // the range along the top
    { name: 'Mount Scorch', x: .485, y: .128, size: .026, angle: -4, kind: 'place' },                 // the dark, smoking peak
    { name: 'The Greenwold', x: .335, y: .268, size: .034, angle: -3, kind: 'region', curve: -.08 },  // the hills across the middle-left
    { name: 'The Whisperwood', x: .735, y: .175, size: .034, angle: 2, kind: 'region', curve: -.06 }, // the great forest in the east
    { name: 'The Old Arch', x: .742, y: .338, size: .022, angle: 0, kind: 'place' },                  // its clearing
    { name: VILLAGE, x: .5, y: .622, size: .046, angle: 0, kind: 'village' },
    { name: 'Here be chickens', x: .625, y: .548, size: .017, angle: 5, kind: 'note' },
    { name: 'River Amble', x: .352, y: .565, size: .02, angle: -50, kind: 'note' },
    { name: 'Brighthelm', x: .19, y: .862, size: .028, angle: 0, kind: 'place' },                    // the harbour town, on the south-west coast
    { name: 'The Misty Fens', x: .7, y: .742, size: .024, angle: -3, kind: 'place' },
    { name: 'The Old Keep', x: .145, y: .392, size: .022, angle: 0, kind: 'place' },
    { name: 'Formosa Isle', x: .862, y: .262, size: .02, angle: 0, kind: 'place' },                   // a small far-off island, out at sea in the east
    { name: 'The Sea of', x: .86, y: .705, size: .019, angle: 0, kind: 'note' }, { name: 'Second Thoughts', x: .86, y: .738, size: .019, angle: 0, kind: 'note' } ];   // by the sea serpent
  var BOOK_MAPS = { 'book-p1-1': 1, 'book-p2-3': 1 };            // the pictures that are maps (their names are lettered over them in code)
  function bookPic(key, raw) {                                 // raw: the whole picture, uncut (a map on its plane)
    var I = BK.ink, n2 = function (v) { return (+v).toFixed(1); }, S = 'stroke="' + I + '" stroke-linecap="round" stroke-linejoin="round"';
    var rnd = (function (s) { return function () { s = (s * 16807) % 2147483647; return (s & 0xffff) / 0xffff; }; })(key.length * 7919 + key.charCodeAt(key.length - 1) * 104729);
    var img = function (name, x, y, w, h, filt, extra) { return '<image href="' + (BOOK_URI[name] || '') + '" x="' + n2(x) + '" y="' + n2(y) + '" width="' + n2(w) + '" height="' + n2(h) + '" preserveAspectRatio="xMidYMid meet"' + (filt ? ' filter="url(#jjbk-' + filt + ')"' : '') + (extra || '') + '/>'; };
    var crop = function (name, vb, x, y, w, h, filt, flip) { var k = w / vb[2], ix = x - vb[0] * k, iy = y - vb[1] * k, iw = vb[4] * k, ih = vb[5] * k;   // one image, scaled so its crop box lands on the target and clipped to it (the print filter's outline stays in the picture's own units)
      return '<g' + (flip ? ' transform="translate(' + n2(2 * x + w) + ' 0) scale(-1 1)"' : '') + '><image href="' + (BOOK_URI[name] || '') + '" x="' + n2(ix) + '" y="' + n2(iy) + '" width="' + n2(iw) + '" height="' + n2(ih) + '" preserveAspectRatio="none"' + (filt ? ' filter="url(#jjbk-' + filt + ')"' : '') + ' style="clip-path:inset(' + n2(vb[1] * k) + 'px ' + n2(iw - (vb[0] + vb[2]) * k) + 'px ' + n2(ih - (vb[1] + vb[3]) * k) + 'px ' + n2(vb[0] * k) + 'px)"/></g>'; };
    var chick = function (x, y, s, flip) { return crop('vil-chicken-poster', [30, 165, 290, 445, 548, 646], x - s / 2, y - s * 1.53, s, s * 1.53, 'pp', flip); };   // (the lone chicken, without its friend's bones)
    var hatch = function (x0, y0, x1, y1, gap, len, ang) { var o = '', dx = Math.cos(ang) * len, dy = Math.sin(ang) * len; for (var y = y0; y < y1; y += gap) for (var x = x0 + (Math.round((y - y0) / gap) % 2) * gap * .5; x < x1; x += gap * 1.7) o += 'M' + n2(x) + ' ' + n2(y) + 'l' + n2(dx) + ' ' + n2(dy); return '<path d="' + o + '" fill="none" ' + S + ' stroke-width="1" opacity=".75"/>'; };
    var hill = function (cx, by, rx, ry, fill) { return '<path d="M' + n2(cx - rx) + ' ' + by + 'Q' + n2(cx - rx * .5) + ' ' + n2(by - ry * 1.9) + ' ' + cx + ' ' + n2(by - ry) + 'T' + n2(cx + rx) + ' ' + by + 'Z" fill="' + (fill || 'none') + '" ' + S + ' stroke-width="2.2"/>' + '<path d="M' + n2(cx - rx * .45) + ' ' + n2(by - ry * .55) + 'q' + n2(rx * .2) + ' ' + n2(-ry * .35) + ' ' + n2(rx * .45) + ' ' + n2(-ry * .2) + '" fill="none" ' + S + ' stroke-width="1.2"/>'; };
    var mount = function (x, by, w, h, fill) { return '<path d="M' + n2(x - w / 2) + ' ' + by + 'L' + x + ' ' + n2(by - h) + 'L' + n2(x + w / 2) + ' ' + by + 'Z" fill="' + (fill || BK.pale) + '" ' + S + ' stroke-width="2.2"/><path d="M' + n2(x - w * .17) + ' ' + n2(by - h * .66) + 'l' + n2(w * .09) + ' ' + n2(h * .1) + 'l' + n2(w * .08) + ' ' + n2(-h * .08) + 'l' + n2(w * .08) + ' ' + n2(h * .1) + 'l' + n2(w * .09) + ' ' + n2(-h * .12) + 'L' + x + ' ' + n2(by - h) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1.4"/>' +
        '<path d="M' + n2(x + w * .08) + ' ' + n2(by - h * .5) + 'l' + n2(w * .16) + ' ' + n2(h * .36) + 'M' + n2(x + w * .16) + ' ' + n2(by - h * .42) + 'l' + n2(w * .13) + ' ' + n2(h * .3) + 'M' + n2(x + w * .01) + ' ' + n2(by - h * .46) + 'l' + n2(w * .14) + ' ' + n2(h * .38) + '" fill="none" ' + S + ' stroke-width="1.1"/>'; };
    var tree = function (x, by, s, fill) { return '<path d="M' + x + ' ' + by + 'v' + n2(-s * .5) + '" ' + S + ' stroke-width="2"/><path d="M' + n2(x - s * .38) + ' ' + n2(by - s * .3) + 'L' + x + ' ' + n2(by - s * 1.25) + 'L' + n2(x + s * .38) + ' ' + n2(by - s * .3) + 'Z" fill="' + (fill || BK.blue) + '" ' + S + ' stroke-width="1.6"/>'; };
    var dead = function (x, by, s) { return '<path d="M' + x + ' ' + by + 'c' + n2(s * .05) + ' ' + n2(-s * .5) + ' ' + n2(-s * .08) + ' ' + n2(-s * .8) + ' ' + n2(s * .04) + ' ' + n2(-s * 1.2) + 'M' + n2(x - s * .01) + ' ' + n2(by - s * .55) + 'l' + n2(-s * .3) + ' ' + n2(-s * .32) + 'l' + n2(-s * .02) + ' ' + n2(-s * .2) + 'M' + n2(x - s * .2) + ' ' + n2(by - s * .76) + 'l' + n2(-s * .2) + ' ' + n2(-s * .02) + 'M' + n2(x) + ' ' + n2(by - s * .78) + 'l' + n2(s * .3) + ' ' + n2(-s * .26) + 'l' + n2(s * .18) + ' ' + n2(s * .02) + 'M' + n2(x + s * .2) + ' ' + n2(by - s * .95) + 'l' + n2(s * .02) + ' ' + n2(-s * .22) + '" fill="none" ' + S + ' stroke-width="' + n2(Math.max(1.4, s * .07)) + '"/>'; };
    var house = function (x, by, s, roof) { return '<path d="M' + n2(x - s * .42) + ' ' + by + 'v' + n2(-s * .5) + 'h' + n2(s * .84) + 'v' + n2(s * .5) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1.6"/><path d="M' + n2(x - s * .55) + ' ' + n2(by - s * .48) + 'L' + x + ' ' + n2(by - s * 1.02) + 'L' + n2(x + s * .55) + ' ' + n2(by - s * .48) + 'Z" fill="' + (roof || BK.red) + '" ' + S + ' stroke-width="1.6"/><path d="M' + n2(x - s * .08) + ' ' + by + 'v' + n2(-s * .26) + 'h' + n2(s * .16) + 'v' + n2(s * .26) + '" fill="' + I + '" stroke="none"/>'; };
    var star = function (x, y, r, fill) { return '<path d="M' + x + ' ' + n2(y - r) + 'L' + n2(x + r * .26) + ' ' + n2(y - r * .26) + 'L' + n2(x + r) + ' ' + y + 'L' + n2(x + r * .26) + ' ' + n2(y + r * .26) + 'L' + x + ' ' + n2(y + r) + 'L' + n2(x - r * .26) + ' ' + n2(y + r * .26) + 'L' + n2(x - r) + ' ' + y + 'L' + n2(x - r * .26) + ' ' + n2(y - r * .26) + 'Z" fill="' + (fill || BK.must) + '" ' + S + ' stroke-width=".9"/>'; };
    var coin = function (x, y, r) { return '<ellipse cx="' + n2(x) + '" cy="' + n2(y) + '" rx="' + n2(r) + '" ry="' + n2(r * .42) + '" fill="' + BK.must + '" ' + S + ' stroke-width="1.3"/>'; };
    var coins = function (x, by, r, n) { var o = ''; for (var i = 0; i < n; i++) o += '<path d="M' + n2(x - r) + ' ' + n2(by - i * r * .5) + 'v' + n2(r * .5) + 'a' + n2(r) + ' ' + n2(r * .42) + ' 0 0 0 ' + n2(2 * r) + ' 0v' + n2(-r * .5) + '" fill="' + BK.must + '" ' + S + ' stroke-width="1.3"/>' + coin(x, by - i * r * .5, r); return o; };
    var tank = function (x, by, s) { return '<path d="M' + n2(x + s * .3) + ' ' + n2(by - s * .72) + 'h' + n2(s * .2) + 'a' + n2(s * .16) + ' ' + n2(s * .2) + ' 0 0 1 0 ' + n2(s * .44) + 'h' + n2(-s * .2) + '" fill="none" ' + S + ' stroke-width="' + n2(s * .09) + '"/><path d="M' + n2(x - s * .34) + ' ' + by + 'v' + n2(-s * .86) + 'h' + n2(s * .68) + 'v' + n2(s * .86) + 'Z" fill="' + BK.red + '" ' + S + ' stroke-width="1.6"/><path d="M' + n2(x - s * .34) + ' ' + n2(by - s * .28) + 'h' + n2(s * .68) + 'M' + n2(x - s * .34) + ' ' + n2(by - s * .6) + 'h' + n2(s * .68) + '" fill="none" ' + S + ' stroke-width="1.2"/>' +
        '<path d="M' + n2(x - s * .4) + ' ' + n2(by - s * .84) + 'q' + n2(s * .06) + ' ' + n2(-s * .22) + ' ' + n2(s * .22) + ' ' + n2(-s * .14) + 'q' + n2(s * .16) + ' ' + n2(-s * .2) + ' ' + n2(s * .3) + ' ' + n2(-s * .02) + 'q' + n2(s * .2) + ' ' + n2(-s * .1) + ' ' + n2(s * .26) + ' ' + n2(s * .16) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1.4"/>'; };
    var flame = function (x, by, s, c) { return '<path d="M' + x + ' ' + by + 'c' + n2(-s * .5) + ' ' + n2(-s * .2) + ' ' + n2(-s * .3) + ' ' + n2(-s * .7) + ' ' + n2(s * .02) + ' ' + n2(-s) + 'c' + n2(.04 * s) + ' ' + n2(s * .3) + ' ' + n2(s * .45) + ' ' + n2(s * .5) + ' 0 ' + n2(s) + 'Z" fill="' + (c || BK.red) + '" ' + S + ' stroke-width="1.1"/>'; };
    var runner = function (x, by, s) { return '<g fill="none" ' + S + ' stroke-width="' + n2(s * .13) + '"><circle cx="' + n2(x + s * .12) + '" cy="' + n2(by - s * .92) + '" r="' + n2(s * .11) + '" fill="' + I + '"/><path d="M' + n2(x + s * .08) + ' ' + n2(by - s * .8) + 'l' + n2(-s * .1) + ' ' + n2(s * .38) + 'l' + n2(s * .2) + ' ' + n2(s * .2) + 'l' + n2(-s * .04) + ' ' + n2(s * .22) + 'M' + n2(x - s * .02) + ' ' + n2(by - s * .42) + 'l' + n2(-s * .22) + ' ' + n2(s * .16) + 'l' + n2(-s * .12) + ' ' + n2(-s * .1) + 'M' + n2(x + s * .06) + ' ' + n2(by - s * .7) + 'l' + n2(s * .24) + ' ' + n2(-s * .16) + 'M' + n2(x + s * .04) + ' ' + n2(by - s * .68) + 'l' + n2(-s * .26) + ' ' + n2(-s * .12) + '"/></g>'; };
    var cloud = function (x, y, w, fill) { return '<path d="M' + n2(x - w * .5) + ' ' + y + 'q' + n2(-w * .02) + ' ' + n2(-w * .16) + ' ' + n2(w * .14) + ' ' + n2(-w * .14) + 'q' + n2(w * .04) + ' ' + n2(-w * .2) + ' ' + n2(w * .24) + ' ' + n2(-w * .12) + 'q' + n2(w * .12) + ' ' + n2(-w * .16) + ' ' + n2(w * .28) + ' ' + n2(w * .02) + 'q' + n2(w * .2) + ' ' + n2(-w * .04) + ' ' + n2(w * .2) + ' ' + n2(w * .12) + 'q' + n2(w * .16) + ' ' + n2(w * .02) + ' ' + n2(w * .14) + ' ' + n2(w * .12) + 'Z" fill="' + (fill || BK.pale) + '" ' + S + ' stroke-width="1.6"/>'; };
    var arch = function (x, by, s, swirl) { return '<path d="M' + n2(x - s * .5) + ' ' + by + 'v' + n2(-s * .7) + 'a' + n2(s * .5) + ' ' + n2(s * .5) + ' 0 0 1 ' + n2(s) + ' 0v' + n2(s * .7) + 'h' + n2(-s * .24) + 'v' + n2(-s * .68) + 'a' + n2(s * .26) + ' ' + n2(s * .26) + ' 0 0 0 ' + n2(-s * .52) + ' 0v' + n2(s * .68) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1.6"/>' + (swirl ? '<path d="M' + x + ' ' + n2(by - s * .52) + 'm' + n2(-s * .16) + ' 0a' + n2(s * .16) + ' ' + n2(s * .2) + ' 0 1 1 ' + n2(s * .16) + ' ' + n2(s * .2) + 'a' + n2(s * .1) + ' ' + n2(s * .12) + ' 0 1 1 ' + n2(-s * .02) + ' ' + n2(-s * .24) + '" fill="none" stroke="' + BK.purple + '" stroke-width="' + n2(s * .1) + '" stroke-linecap="round"/>' : ''); };
    var rose = function (x, y, r) { var o = '<circle cx="' + x + '" cy="' + y + '" r="' + n2(r * .62) + '" fill="' + BK.pale + '" ' + S + ' stroke-width="1.2"/>'; for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4, L = i % 2 ? r * .58 : r, wv = i % 2 ? .1 : .16; o += '<path d="M' + x + ' ' + y + 'L' + n2(x + Math.cos(a - wv * 2.4) * L * .34) + ' ' + n2(y + Math.sin(a - wv * 2.4) * L * .34) + 'L' + n2(x + Math.cos(a) * L) + ' ' + n2(y + Math.sin(a) * L) + 'L' + n2(x + Math.cos(a + wv * 2.4) * L * .34) + ' ' + n2(y + Math.sin(a + wv * 2.4) * L * .34) + 'Z" fill="' + (i % 2 ? BK.must : i % 4 ? BK.blue : BK.red) + '" ' + S + ' stroke-width="1"/>'; } return o + '<circle cx="' + x + '" cy="' + y + '" r="' + n2(r * .1) + '" fill="' + I + '"/>'; };
    var X0 = 24, Y0 = 24, W = 352, H = 272, B = '', motif = star;
    /* THE LAND, as a picture map (Part One's first page, and, with Joe's route on it, the treasure-map page of the recap). Simple inked shapes for now: Joe will
       commission a detailed map (key book-p1-1, large, NO lettering). The place names are never part of the picture: they are lettered over it in code (MAP_NAMES),
       so they can be renamed in one edit and stay sharp at any zoom. u, v: map units (352 x 272), from the picture's top-left corner. */
    var land = function (route) { var p = function (u, v) { return n2(X0 + u) + ' ' + n2(Y0 + v); }, o = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="' + H + '" fill="' + BK.blue + '" opacity=".2"/>', wv = '';
      [[14, 30], [20, 96], [10, 150], [26, 184], [12, 228], [60, 256], [316, 30], [330, 76], [312, 116], [336, 236], [300, 258], [326, 152], [170, 266]].forEach(function (q) { wv += 'M' + p(q[0], q[1]) + 'q3 -4 6 0t6 0'; });
      o += '<path d="' + wv + '" fill="none" stroke="' + BK.blue + '" stroke-width="1.3" stroke-linecap="round" opacity=".8"/>';                                                   // the sea
      o += '<path d="M' + p(46, 10) + 'Q' + p(150, -2) + ' ' + p(246, 10) + 'Q' + p(292, 8) + ' ' + p(296, 44) + 'Q' + p(304, 92) + ' ' + p(290, 132) + 'Q' + p(300, 182) + ' ' + p(284, 228) + 'Q' + p(266, 264) + ' ' + p(196, 258) + 'Q' + p(140, 266) + ' ' + p(112, 246) + 'Q' + p(98, 224) + ' ' + p(64, 226) + 'Q' + p(34, 216) + ' ' + p(46, 182) + 'Q' + p(62, 150) + ' ' + p(40, 120) + 'Q' + p(22, 74) + ' ' + p(46, 10) + 'Z" fill="#efe2bf" ' + S + ' stroke-width="2.2"/>';   // the land
      o += '<path d="M' + p(214, 78) + 'C' + p(200, 100) + ' ' + p(224, 114) + ' ' + p(198, 130) + 'S' + p(150, 168) + ' ' + p(130, 188) + 'S' + p(98, 204) + ' ' + p(78, 222) + '" fill="none" stroke="' + BK.blue + '" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>';                                                     // the river, from the mountains to the harbour
      [[168, 70, 40, 34, 0], [198, 64, 46, 44, 0], [230, 68, 42, 38, 0], [258, 66, 50, 54, 1], [280, 76, 34, 30, 0]].forEach(function (q) { o += mount(X0 + q[0], Y0 + q[1], q[2], q[3], q[4] ? '#3a2a26' : BK.pale); });   // the range; the dark peak
      o += '<path d="M' + p(258, 12) + 'l-5 9l5 -3l5 3Z" fill="' + BK.red + '" ' + S + ' stroke-width="1"/><path d="M' + p(258, 10) + 'c-4 -5 4 -6 1 -11" fill="none" ' + S + ' stroke-width="1" opacity=".7"/>';
      [[70, 46], [86, 40], [102, 48], [62, 62], [80, 60], [98, 64], [114, 58], [72, 78], [90, 80], [108, 80], [124, 74], [56, 84]].forEach(function (q) { o += tree(X0 + q[0], Y0 + q[1], 15, BK.blue); });
      o += arch(X0 + 140, Y0 + 96, 15, !!route);                                                                                                           // the old arch, in its clearing
      o += hill(X0 + 138, Y0 + 138, 34, 16, BK.must) + hill(X0 + 226, Y0 + 142, 38, 18, BK.must) + hill(X0 + 180, Y0 + 124, 26, 12, BK.pale);              // the hills
      o += '<path d="M' + p(170, 150) + 'Q' + p(130, 196) + ' ' + p(82, 214) + 'M' + p(190, 148) + 'Q' + p(230, 162) + ' ' + p(262, 156) + '" fill="none" ' + S + ' stroke-width="1.1" stroke-dasharray="1 4" opacity=".75"/>';   // the roads
      o += house(X0 + 168, Y0 + 150, 9) + house(X0 + 180, Y0 + 153, 11) + house(X0 + 192, Y0 + 149, 8, BK.blue) + house(X0 + 174, Y0 + 141, 7, BK.must);   // the village, in the middle of it all
      o += house(X0 + 70, Y0 + 216, 10, BK.blue) + house(X0 + 82, Y0 + 221, 12) + house(X0 + 92, Y0 + 214, 9) + '<path d="M' + p(54, 238) + 'h14l-3 5h-8ZM' + p(61, 238) + 'v-10l6 8" fill="' + BK.pale + '" ' + S + ' stroke-width="1.1"/>';   // the harbour town, and a boat
      o += '<path d="M' + p(256, 158) + 'q8 -10 16 0" fill="' + BK.pale + '" ' + S + ' stroke-width="1.4"/><path d="M' + p(260, 152) + 'v-16h-2v-4h3v2h2v-2h3v2h2v-2h3v4h-2v16Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1.3"/>';   // the old keep
      var fen = ''; [[224, 204], [240, 212], [258, 204], [232, 222], [250, 224], [268, 216]].forEach(function (q) { fen += 'M' + p(q[0] - 5, q[1] + 3) + 'h10M' + p(q[0], q[1] + 2) + 'v-7M' + p(q[0] - 3, q[1] + 2) + 'l-2 -5M' + p(q[0] + 3, q[1] + 2) + 'l2 -5'; });
      o += '<path d="' + fen + '" fill="none" ' + S + ' stroke-width="1" opacity=".8"/>';                                                                  // the fens
      o += '<path d="M' + p(318, 196) + 'q2 -9 10 -8q9 0 9 8q-2 6 -10 6q-8 0 -9 -6Z" fill="#efe2bf" ' + S + ' stroke-width="1.5"/>' + tree(X0 + 327, Y0 + 195, 7, BK.blue);   // a far-off island
      if (route) { o += '<path d="M' + p(182, 142) + 'C' + p(206, 132) + ' ' + p(236, 128) + ' ' + p(226, 106) + 'S' + p(206, 84) + ' ' + p(186, 92) + 'S' + p(158, 106) + ' ' + p(146, 96) + '" fill="none" stroke="' + BK.red + '" stroke-width="2.6" stroke-dasharray="1 6.5" stroke-linecap="round"/>';
        o += crop('ride-loop-poster', [370, 270, 380, 290, 1112, 834], X0 + 214, Y0 + 96, 24, 18.3, 'pk'); }
      return o + rose(X0 + 30, Y0 + 44, 17) + '<path d="M' + p(27, 20) + 'v-7l6 7v-7" fill="none" ' + S + ' stroke-width="1.3"/>'; };
    var map = false;
    if (key === 'book-p1-1') { map = true; B = land(false); motif = function (x, y, r) { return tree(x, y + r * .8, r * 1.3, BK.blue); }; }
    else if (key === 'book-p1-2') {                             // the village in daylight, with far too many chickens
      B = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="150" fill="' + BK.blue + '" opacity=".16"/><circle cx="' + (X0 + 290) + '" cy="' + (Y0 + 50) + '" r="24" fill="' + BK.must + '" ' + S + ' stroke-width="2"/>';
      for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; B += '<path d="M' + n2(X0 + 290 + Math.cos(a) * 30) + ' ' + n2(Y0 + 50 + Math.sin(a) * 30) + 'L' + n2(X0 + 290 + Math.cos(a) * (i % 2 ? 38 : 44)) + ' ' + n2(Y0 + 50 + Math.sin(a) * (i % 2 ? 38 : 44)) + '" ' + S + ' stroke-width="1.8"/>'; }
      B += cloud(X0 + 90, Y0 + 56, 70) + cloud(X0 + 196, Y0 + 40, 50);
      B += '<svg x="' + X0 + '" y="' + (Y0 + 74) + '" width="' + W + '" height="' + (H - 74) + '" viewBox="0 100 2400 1250" preserveAspectRatio="xMidYMax slice"><image href="' + (BOOK_URI['vil-bg'] || '') + '" width="2400" height="1350" filter="url(#jjbk-board)"/></svg>';
      [[40, 150, 22, 0], [70, 132, 20, 1], [104, 158, 18, 0], [150, 176, 16, 1], [232, 172, 16, 0], [276, 150, 20, 1], [312, 138, 22, 0], [338, 164, 18, 1], [60, 250, 34, 0], [124, 236, 28, 1], [180, 258, 38, 0], [236, 240, 28, 1], [292, 256, 34, 1], [330, 232, 24, 0], [206, 204, 18, 0], [158, 210, 16, 1]].forEach(function (q) { B += chick(X0 + q[0], Y0 + q[1], q[2], q[3]); });
      motif = function (x, y, r, i) { var f = i % 2 ? -1 : 1; return '<g transform="translate(' + n2(x) + ' ' + n2(y) + ') scale(' + f + ' 1)"><path d="M' + n2(-r * .7) + ' ' + n2(r * .1) + 'q' + n2(-r * .1) + ' ' + n2(-r * .9) + ' ' + n2(r * .5) + ' ' + n2(-r * .5) + 'q' + n2(r * .1) + ' ' + n2(-r * .7) + ' ' + n2(r * .7) + ' ' + n2(-r * .5) + 'q' + n2(r * .3) + ' ' + n2(r * .5) + ' ' + n2(-r * .1) + ' ' + n2(r * .8) + 'q' + n2(-r * .1) + ' ' + n2(r * .9) + ' ' + n2(-r * 1.1) + ' ' + n2(r * .2) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1"/><path d="M' + n2(r * .25) + ' ' + n2(-r * .95) + 'l' + n2(r * .16) + ' ' + n2(-r * .3) + 'l' + n2(r * .14) + ' ' + n2(r * .3) + '" fill="' + BK.red + '" stroke="' + BK.red + '" stroke-width="1"/><path d="M' + n2(-r * .1) + ' ' + n2(r * .62) + 'v' + n2(r * .36) + '" ' + S + ' stroke-width="1"/></g>'; }; }   // (the border's chickens are drawn, not printed from the sprite: fifty prints of it cost too much to copy for a page turn)
    else if (key === 'book-p1-3') {                             // the tavern, as a page of emblems: tankards, coin stacks and chickens in a heraldic grid
      var cw = W / 3, ch = H / 2; for (var gy = 0; gy < 2; gy++) for (var gx = 0; gx < 3; gx++) { var cx = X0 + gx * cw, cy = Y0 + gy * ch, odd = (gx + gy) % 2, k3 = (gx + gy * 2) % 3;
        B += '<rect x="' + n2(cx) + '" y="' + n2(cy) + '" width="' + n2(cw) + '" height="' + n2(ch) + '" fill="' + (odd ? BK.blue : BK.pale) + '" opacity="' + (odd ? .3 : .5) + '"/>' + (odd ? hatch(cx + 6, cy + 8, cx + cw - 6, cy + ch - 4, 9, 5, .8) : '');
        B += '<path d="M' + n2(cx + cw * .2) + ' ' + n2(cy + ch * .14) + 'h' + n2(cw * .6) + 'v' + n2(ch * .42) + 'q0 ' + n2(ch * .26) + ' ' + n2(-cw * .3) + ' ' + n2(ch * .34) + 'q' + n2(-cw * .3) + ' ' + n2(-ch * .08) + ' ' + n2(-cw * .3) + ' ' + n2(-ch * .34) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="2.2"/>';
        B += k3 === 0 ? tank(cx + cw * .47, cy + ch * .68, 44) : k3 === 1 ? coins(cx + cw * .4, cy + ch * .64, 13, 4) + coins(cx + cw * .62, cy + ch * .66, 11, 2) : chick(cx + cw * .5, cy + ch * .72, 42, gx === 2); }
      B += '<path d="M' + X0 + ' ' + n2(Y0 + ch) + 'h' + W + 'M' + n2(X0 + cw) + ' ' + Y0 + 'v' + H + 'M' + n2(X0 + 2 * cw) + ' ' + Y0 + 'v' + H + '" fill="none" ' + S + ' stroke-width="2.4"/>';
      motif = function (x, y, r, i) { return i % 2 ? coin(x, y, r * .9) : tank(x - r * .1, y + r * .8, r * 1.5); }; }
    else if (key === 'book-p1-5') {                             // the beast, hinted: a dusk sky over a tiny village, and only the shadow of wings and a tail across the clouds
      B = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="' + H + '" fill="' + BK.red + '" opacity=".3"/><rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="120" fill="' + BK.blue + '"/><rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="64" fill="#1a2238"/>';
      for (var b = 0; b < 9; b++) B += '<path d="M' + X0 + ' ' + n2(Y0 + 66 + b * 6.4) + 'h' + W + '" stroke="#1a2238" stroke-width="' + n2(4.6 - b * .5) + '" fill="none"/>';      // the sky steps down from night to dusk in cut bands
      for (var b2 = 0; b2 < 8; b2++) B += '<path d="M' + X0 + ' ' + n2(Y0 + 124 + b2 * 8) + 'h' + W + '" stroke="' + BK.blue + '" stroke-width="' + n2(5 - b2 * .6) + '" fill="none"/>';
      [[60, 36, 1.6], [130, 22, 1.2], [214, 44, 1.4], [290, 26, 1.7], [330, 52, 1.1], [30, 62, 1]].forEach(function (q) { B += star(X0 + q[0], Y0 + q[1], q[2] * 3.4, BK.pale); });
      B += cloud(X0 + 96, Y0 + 150, 130) + cloud(X0 + 250, Y0 + 132, 150) + cloud(X0 + 180, Y0 + 178, 110);
      B += '<g transform="translate(' + (X0 + 26) + ' ' + (Y0 + 78) + ') skewX(-24) scale(1 .62)">' + img('tav-trogdor-fly-poster', 0, 0, 430, 283, 'shadow') + '</g>';                              // …his shadow, cast across the clouds
      B += '<path d="M' + X0 + ' ' + (Y0 + H) + 'V' + (Y0 + 236) + 'q70 -30 150 -14t110 -8t92 14V' + (Y0 + H) + 'Z" fill="' + I + '"/>' + house(X0 + 150, Y0 + 226, 14, BK.must) + house(X0 + 168, Y0 + 229, 17, BK.red) + house(X0 + 132, Y0 + 230, 12, BK.red) + tree(X0 + 196, Y0 + 228, 14, BK.blue) + tree(X0 + 112, Y0 + 232, 12, BK.blue);
      B += '<path d="M' + (X0 + 170) + ' ' + (Y0 + 210) + 'c-8 -10 8 -16 0 -28s8 -18 0 -30s6 -14 2 -24" fill="none" stroke="' + BK.pale + '" stroke-width="2" stroke-linecap="round" opacity=".85"/>';   // a thin curl of smoke
      motif = function (x, y, r, i) { return i % 3 ? star(x, y, r * .9, BK.must) : '<path d="M' + n2(x + r * .5) + ' ' + n2(y - r * .8) + 'a' + n2(r * .9) + ' ' + n2(r * .9) + ' 0 1 0 0 ' + n2(r * 1.6) + 'a' + n2(r * .66) + ' ' + n2(r * .72) + ' 0 1 1 0 ' + n2(-r * 1.6) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1"/>'; }; }
    else if (key === 'book-p2-1') {                             // a tapestry strip: a tiny dragon breathes a ribbon of flame over a row of roofs; the villagers run in a line
      B = '<rect x="' + X0 + '" y="' + (Y0 + 30) + '" width="' + W + '" height="150" fill="' + BK.blue + '" opacity=".85"/><rect x="' + X0 + '" y="' + (Y0 + 180) + '" width="' + W + '" height="62" fill="' + BK.must + '" opacity=".5"/>';
      B += '<path d="M' + X0 + ' ' + (Y0 + 30) + 'h' + W + 'M' + X0 + ' ' + (Y0 + 180) + 'h' + W + 'M' + X0 + ' ' + (Y0 + 242) + 'h' + W + '" fill="none" ' + S + ' stroke-width="2.6"/>';
      for (var z = 0; z < 15; z++) B += '<path d="M' + n2(X0 + 6 + z * 23.6) + ' ' + (Y0 + 8) + 'l8 8l-8 8l-8 -8Z" fill="' + (z % 2 ? BK.red : BK.must) + '" ' + S + ' stroke-width="1"/>' + '<path d="M' + n2(X0 + 6 + z * 23.6) + ' ' + (Y0 + 248) + 'l8 8l-8 8l-8 -8Z" fill="' + (z % 2 ? BK.must : BK.red) + '" ' + S + ' stroke-width="1"/>';
      B += '<path d="M' + (X0 + 112) + ' ' + (Y0 + 70) + 'c40 -6 44 30 84 28s40 30 80 24s34 26 66 26l-4 22c-34 2 -40 -24 -74 -20s-44 -28 -80 -24s-44 -34 -72 -30Z" fill="' + BK.red + '" ' + S + ' stroke-width="2"/><path d="M' + (X0 + 122) + ' ' + (Y0 + 80) + 'c36 -2 40 30 76 28s42 30 78 24s34 24 58 26" fill="none" stroke="' + BK.must + '" stroke-width="3.4" stroke-linecap="round"/>';
      B += img('tav-trogdor-fly-poster', X0 + 2, Y0 + 44, 160, 105, 'pr');
      for (var hx = 0; hx < 6; hx++) { B += house(X0 + 60 + hx * 56, Y0 + 180, 34 - (hx % 2) * 6, hx % 2 ? BK.must : BK.pale); if (hx > 1) B += flame(X0 + 60 + hx * 56, Y0 + 146 + (hx % 2) * 6, 18, hx % 2 ? BK.red : BK.must); }
      for (var r1 = 0; r1 < 7; r1++) B += runner(X0 + 30 + r1 * 48, Y0 + 236, 40);
      motif = function (x, y, r, i) { return flame(x, y + r * .9, r * 1.8, i % 2 ? BK.red : BK.must); }; }
    else if (key === 'book-p2-2') {                             // Joe riding away, small, under a huge moon; the village waves him off (a view the tale never shows)
      B = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="' + H + '" fill="' + BK.blue + '"/>' + hatch(X0 + 6, Y0 + 8, X0 + W - 6, Y0 + 150, 12, 7, 0);
      B += '<circle cx="' + (X0 + 176) + '" cy="' + (Y0 + 108) + '" r="84" fill="' + BK.must + '" ' + S + ' stroke-width="2.6"/><path d="M' + (X0 + 214) + ' ' + (Y0 + 40) + 'a84 84 0 0 1 0 136a70 78 0 0 0 0 -136Z" fill="' + BK.pale + '" opacity=".55"/><circle cx="' + (X0 + 150) + '" cy="' + (Y0 + 84) + '" r="10" fill="none" ' + S + ' stroke-width="1.2" opacity=".6"/><circle cx="' + (X0 + 184) + '" cy="' + (Y0 + 134) + '" r="14" fill="none" ' + S + ' stroke-width="1.2" opacity=".6"/><circle cx="' + (X0 + 130) + '" cy="' + (Y0 + 128) + '" r="6" fill="none" ' + S + ' stroke-width="1.2" opacity=".6"/>';
      [[40, 40], [84, 86], [300, 50], [326, 110], [280, 150], [36, 140], [318, 24]].forEach(function (q, i) { B += star(X0 + q[0], Y0 + q[1], 4 + (i % 3), BK.pale); });
      B += '<path d="M' + X0 + ' ' + (Y0 + H) + 'V' + (Y0 + 200) + 'q60 -30 130 -22t100 -14t122 22V' + (Y0 + H) + 'Z" fill="#1a2238" ' + S + ' stroke-width="2.2"/>' + '<path d="M' + (X0 + 150) + ' ' + (Y0 + H) + 'q6 -50 44 -88" fill="none" stroke="' + BK.must + '" stroke-width="2.4" stroke-dasharray="2 7" stroke-linecap="round" opacity=".85"/>';
      B += crop('wood-joe', [454, 77, 476, 1222, 1400, 1400], X0 + 178, Y0 + 132, 22, 56.5, 'pk');   // from behind, riding away
      [[64, 296, 80, 0], [136, 306, 62, 1], [290, 300, 86, 0]].forEach(function (q) { B += crop('wood-char-1', [330, 230, 760, 900, 1400, 1400], X0 + q[0] - q[2] / 2, Y0 + q[1] - q[2] * 1.18, q[2], q[2] * 1.18, 'pt', q[3]); });
      motif = function (x, y, r, i) { return star(x, y, r * (i % 2 ? .7 : 1), i % 2 ? BK.pale : BK.must); }; }
    else if (key === 'book-p2-3') { map = true; B = land(true); motif = function (x, y, r, i) { return i % 2 ? '<circle cx="' + n2(x) + '" cy="' + n2(y) + '" r="' + n2(r * .34) + '" fill="' + BK.red + '"/>' : '<path d="M' + n2(x) + ' ' + n2(y - r * .7) + 'l' + n2(r * .7) + ' ' + n2(r * .7) + 'l' + n2(-r * .7) + ' ' + n2(r * .7) + 'l' + n2(-r * .7) + ' ' + n2(-r * .7) + 'Z" fill="' + BK.must + '" ' + S + ' stroke-width="1"/>'; }; }
    else if (key === 'book-p1-4') {                             // NEW: a proud row of cottages with enormous golden thatched roofs at sunset, a chicken on every ridge, a villager combing one
      B = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="' + H + '" fill="' + BK.red + '" opacity=".26"/><circle cx="' + (X0 + 176) + '" cy="' + (Y0 + 150) + '" r="62" fill="' + BK.must + '" ' + S + ' stroke-width="2.2"/>';
      for (var sb = 0; sb < 7; sb++) B += '<path d="M' + X0 + ' ' + n2(Y0 + 96 + sb * 9) + 'h' + W + '" stroke="' + BK.red + '" stroke-width="' + n2(1 + sb * .6) + '" fill="none" opacity=".55"/>';
      B += '<path d="M' + X0 + ' ' + (Y0 + H) + 'V' + (Y0 + 214) + 'q90 -12 176 -4t176 -6V' + (Y0 + H) + 'Z" fill="' + BK.must + '" opacity=".5" ' + S + ' stroke-width="1.8"/>';
      [[70, 236, 78], [176, 246, 96], [286, 238, 82]].forEach(function (q, ci) { var x = X0 + q[0], by = Y0 + q[1], s = q[2], th = '';
        B += '<path d="M' + n2(x - s * .36) + ' ' + by + 'v' + n2(-s * .34) + 'h' + n2(s * .72) + 'v' + n2(s * .34) + 'Z" fill="' + BK.pale + '" ' + S + ' stroke-width="1.8"/><path d="M' + n2(x - s * .08) + ' ' + by + 'v' + n2(-s * .22) + 'h' + n2(s * .16) + 'v' + n2(s * .22) + '" fill="' + I + '"/><path d="M' + n2(x - s * .28) + ' ' + n2(by - s * .28) + 'h' + n2(s * .14) + 'v' + n2(s * .12) + 'h' + n2(-s * .14) + 'ZM' + n2(x + s * .14) + ' ' + n2(by - s * .28) + 'h' + n2(s * .14) + 'v' + n2(s * .12) + 'h' + n2(-s * .14) + 'Z" fill="' + BK.blue + '" ' + S + ' stroke-width="1"/>';
        B += '<path d="M' + n2(x - s * .56) + ' ' + n2(by - s * .3) + 'C' + n2(x - s * .56) + ' ' + n2(by - s * 1.1) + ' ' + n2(x - s * .2) + ' ' + n2(by - s * 1.32) + ' ' + n2(x) + ' ' + n2(by - s * 1.32) + 'S' + n2(x + s * .56) + ' ' + n2(by - s * 1.1) + ' ' + n2(x + s * .56) + ' ' + n2(by - s * .3) + 'q' + n2(-s * .14) + ' ' + n2(s * .08) + ' ' + n2(-s * .28) + ' 0t' + n2(-s * .28) + ' 0t' + n2(-s * .28) + ' 0t' + n2(-s * .28) + ' 0Z" fill="' + BK.must + '" ' + S + ' stroke-width="2.2"/>';   // the thatch: far too much of it
        for (var t = 0; t < 9; t++) { var tx = x - s * .44 + t * s * .11, ty = by - s * (.5 + .62 * Math.sin(Math.PI * (t + .5) / 9)); th += 'M' + n2(tx) + ' ' + n2(ty) + 'l' + n2(-s * .02 + (t - 4) * s * .012) + ' ' + n2(s * .2) + 'M' + n2(tx + s * .05) + ' ' + n2(ty + s * .26) + 'l' + n2((t - 4) * s * .012) + ' ' + n2(s * .16); }
        B += '<path d="' + th + '" fill="none" ' + S + ' stroke-width="1.1" opacity=".8"/>' + chick(x + (ci - 1) * 6, by - s * 1.3, s * .26, ci === 2); });
      B += '<path d="M' + (X0 + 228) + ' ' + (Y0 + 246) + 'l14 -86m12 86l-14 -86M' + (X0 + 231) + ' ' + (Y0 + 226) + 'h13m-11 -20h13m-11 -20h12" fill="none" ' + S + ' stroke-width="2"/>' + crop('wood-char-1', [330, 230, 760, 900, 1400, 1400], X0 + 222, Y0 + 132, 34, 40, 'pt', true) + '<path d="M' + (X0 + 232) + ' ' + (Y0 + 148) + 'l-16 -12m3 -3l-6 8m9 -6l-6 8m9 -6l-6 8" fill="none" ' + S + ' stroke-width="1.6"/>'; }   // …and its ladder, and the comb
    else if (key === 'book-p2-4') {                             // NEW: the arch, a purple swirl pulling a small Joe in; his horse left standing behind
      B = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="' + H + '" fill="' + BK.blue + '" opacity=".22"/>' + hatch(X0 + 8, Y0 + 12, X0 + W - 8, Y0 + 90, 16, 7, .3);
      [[40, 120, 46], [78, 104, 60], [318, 112, 52], [338, 132, 40], [16, 140, 34]].forEach(function (q) { B += tree(X0 + q[0], Y0 + q[1] + 100, q[2] * 1.3, BK.blue); });
      B += '<path d="M' + X0 + ' ' + (Y0 + H) + 'V' + (Y0 + 226) + 'q88 -14 176 -6t176 -8V' + (Y0 + H) + 'Z" fill="' + BK.must + '" opacity=".45" ' + S + ' stroke-width="1.8"/>' + arch(X0 + 236, Y0 + 232, 150, false);
      for (var sw = 0; sw < 4; sw++) B += '<ellipse cx="' + (X0 + 236) + '" cy="' + (Y0 + 158) + '" rx="' + n2(34 - sw * 8) + '" ry="' + n2(56 - sw * 13) + '" fill="' + (sw % 2 ? BK.pale : BK.purple) + '" ' + S + ' stroke-width="1.4"/>';
      B += '<path d="M' + (X0 + 176) + ' ' + (Y0 + 150) + 'q-20 -8 -44 2M' + (X0 + 180) + ' ' + (Y0 + 172) + 'q-26 2 -46 16M' + (X0 + 178) + ' ' + (Y0 + 196) + 'q-18 6 -30 20" fill="none" stroke="' + BK.purple + '" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="6 5"/>';
      B += '<g transform="rotate(-28 ' + (X0 + 170) + ' ' + (Y0 + 176) + ')">' + crop('vortex-joe-poster', [56, 216, 148, 266, 680, 520], X0 + 148, Y0 + 138, 44, 79, 'pp') + '</g>';
      var hx0 = X0 + 62, hy0 = Y0 + 236;                         // the horse: left standing, drawn (the tale has no picture of him alone)
      B += '<g fill="' + BK.must + '" ' + S + ' stroke-width="1.8"><path d="M' + (hx0 - 26) + ' ' + (hy0 - 44) + 'q28 -12 54 -2l10 -22q4 -10 14 -8l8 4l-4 6l10 14l-6 6l-12 -6l-8 26q-2 12 -12 14l2 30h-7l-5 -28h-34l-4 28h-7l1 -34q-10 -8 -5 -28Z"/><path d="M' + (hx0 - 26) + ' ' + (hy0 - 42) + 'q-12 6 -10 30" fill="none" stroke-width="3"/></g><path d="M' + (hx0 - 8) + ' ' + (hy0 - 47) + 'h22v14h-22Z" fill="' + BK.blue + '" ' + S + ' stroke-width="1.4"/>'; }
    else if (key === 'book-p2-5') {                             // NEW: Joe tumbling down a tunnel of patterned purple rings (a manuscript's idea of the vortex)
      B = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + W + '" height="' + H + '" fill="#1a2238"/>';
      for (var rg = 0; rg < 8; rg++) { var rx = 188 - rg * 22, ry = 146 - rg * 17, cx5 = X0 + 176 + rg * 3, cy5 = Y0 + 136 + rg * 1.5;
        B += '<ellipse cx="' + n2(cx5) + '" cy="' + n2(cy5) + '" rx="' + n2(rx) + '" ry="' + n2(ry) + '" fill="' + [BK.purple, '#1a2238', BK.blue, BK.purple, '#1a2238', BK.red, BK.purple, '#0e1220'][rg] + '" ' + S + ' stroke-width="2"/>' + (rg < 7 ? '<ellipse cx="' + n2(cx5) + '" cy="' + n2(cy5) + '" rx="' + n2(rx - 9) + '" ry="' + n2(ry - 7) + '" fill="none" stroke="' + (rg % 2 ? BK.must : BK.pale) + '" stroke-width="2.2" stroke-dasharray="' + (rg % 2 ? '2 9' : '8 7') + '" stroke-linecap="round" opacity=".9"/>' : ''); }
      [[40, 38], [316, 44], [330, 236], [30, 230], [176, 20], [12, 136], [342, 140]].forEach(function (q, i) { B += star(X0 + q[0], Y0 + q[1], 5 + (i % 3) * 2, BK.must); });
      B += '<g transform="rotate(142 ' + (X0 + 186) + ' ' + (Y0 + 140) + ')">' + crop('vortex-joe-poster', [56, 216, 148, 266, 680, 520], X0 + 160, Y0 + 94, 52, 93, 'pp') + '</g>'; }
    var rr = (function (s) { return function () { s = (s * 16807) % 2147483647; return (s % 1000) / 1000; }; })(key.charCodeAt(key.length - 1) * 7919 + key.charCodeAt(key.length - 3) * 104729), pts = [], n = 22, i2, q;
    for (i2 = 0; i2 < n; i2++) { var a2 = i2 / n * Math.PI * 2, sx = Math.cos(a2), sy = Math.sin(a2), e = Math.pow(Math.abs(sx), 6) + Math.pow(Math.abs(sy), 6), r2 = Math.pow(e, -1 / 6) * (.955 + rr() * .045); pts.push([X0 + W / 2 + sx * r2 * W / 2, Y0 + H / 2 + sy * r2 * H / 2]); }   // a rounded-off block with a wandering edge
    var d = 'M' + n2((pts[0][0] + pts[n - 1][0]) / 2) + ' ' + n2((pts[0][1] + pts[n - 1][1]) / 2); for (i2 = 0; i2 < n; i2++) { q = pts[(i2 + 1) % n]; d += 'Q' + n2(pts[i2][0]) + ' ' + n2(pts[i2][1]) + ' ' + n2((pts[i2][0] + q[0]) / 2) + ' ' + n2((pts[i2][1] + q[1]) / 2); }
    if (raw) return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="' + [X0, Y0, W, H].join(' ') + '" width="' + W * 4 + '" height="' + H * 4 + '">' + bookDefs() + '<g filter="url(#jjbk-rough)">' + B + '</g></svg>';
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="' + [X0 - 4, Y0 - 4, W + 8, H + 8].join(' ') + '" width="' + (W + 8) * 3 + '" height="' + (H + 8) * 3 + '">' + bookDefs() + '<clipPath id="c"><path d="' + d + 'Z"/></clipPath><g filter="url(#jjbk-rough)"><g clip-path="url(#c)">' + B + '</g><path d="' + d + 'Z" fill="none" ' + S + ' stroke-width="2.2"/></g></svg>'; }
  var BOOK_PIC_AR = 360 / 280;                                 // a stand-in's shape (the map's window too)
  /* the names on the map, lettered in code in the map hand (Caveat: the My Story map's, an approved exception to the one-font rule), so they can be renamed in one
     edit and stay sharp at any zoom. x, y: the middle of the name, as fractions of the map · size: the letters, as a fraction of the map's width · angle: degrees
     · kind: region (larger, spaced out, on a gentle curve), place, village, or note (smaller). Sentence case. Drawn into a canvas whose box [x0, y0, w, h] is
     the whole map. */
  /* a name's corners on the map (fractions of it), and whether all of it is inside the part on show (view: [x, y, w, h]), clear of that panel's soft edge: a name is
     lettered whole or not at all, never cut by the edge */
  function bookNameBox(c, q, mw, mh) { var fs = q.size * mw, reg = q.kind === 'region'; c.font = (reg || q.kind === 'village' ? '700 ' : '600 ') + (q.kind === 'note' ? 'italic ' : '') + fs.toFixed(1) + 'px Caveat, "Segoe Script", cursive';
    var tw = c.measureText(q.name).width + (reg ? fs * .14 * (q.name.length - 1) : 0), a = (q.angle || 0) * Math.PI / 180, bow = reg ? Math.abs((q.curve == null ? .16 : q.curve) * tw * .5) : 0, hw = tw / 2 + fs * .14, up = fs * .82 + bow, dn = fs * .32 + bow;
    return [[-hw, -up], [hw, -up], [hw, dn], [-hw, dn]].map(function (p) { return [q.x + (p[0] * Math.cos(a) - p[1] * Math.sin(a)) / mw, q.y + (p[0] * Math.sin(a) + p[1] * Math.cos(a)) / mh]; }); }
  function bookNameIn(pts, v) { return pts.every(function (p) { var u = Math.abs((p[0] - v[0]) / v[2] * 2 - 1), w = Math.abs((p[1] - v[1]) / v[3] * 2 - 1); return Math.pow(Math.pow(u, 10) + Math.pow(w, 10), .1) <= .85; }); }
  function bookNames(c, x0, y0, w, h, table, view) { var ox = x0, oy = y0, mw = w, mh = h;
    (table || MAP_NAMES).forEach(function (q) { if (view && !bookNameIn(bookNameBox(c, q, mw, mh), view)) return; var x = ox + q.x * mw, y = oy + q.y * mh, fs = q.size * mw, reg = q.kind === 'region';
      c.save(); c.translate(x, y); if (q.angle) c.rotate(q.angle * Math.PI / 180); c.font = (reg || q.kind === 'village' ? '700 ' : '600 ') + (q.kind === 'note' ? 'italic ' : '') + fs.toFixed(1) + 'px Caveat, "Segoe Script", cursive';
      c.textBaseline = 'alphabetic'; c.lineJoin = 'round'; c.strokeStyle = '#efe2bf'; c.lineWidth = fs * .22; c.fillStyle = '#3b2414'; c.globalAlpha = q.kind === 'note' ? .85 : 1;
      if (!reg) { c.textAlign = 'center'; c.strokeText(q.name, 0, 0); c.fillText(q.name, 0, 0); c.restore(); return; }
      var sp = fs * .14, ws = [], tot = 0, i; for (i = 0; i < q.name.length; i++) { var cw = c.measureText(q.name.charAt(i)).width; ws.push(cw); tot += cw + (i ? sp : 0); }   // a region's name: spaced out, each letter set along a shallow arc
      var bow = (q.curve == null ? .16 : q.curve) * tot, cx = -tot / 2; c.textAlign = 'left';
      for (i = 0; i < q.name.length; i++) { var mx = cx + ws[i] / 2, u = mx / (tot / 2), yy = -bow * (1 - u * u) * .5, sl = bow * u / (tot / 2); c.save(); c.translate(mx, yy); c.rotate(Math.atan(sl)); c.strokeText(q.name.charAt(i), -ws[i] / 2, 0); c.fillText(q.name.charAt(i), -ws[i] / 2, 0); c.restore(); cx += ws[i] + sp; }
      c.restore(); }); }
  /* a page's own move inside its picture (Part One's map: in on the village until its name is what is being read). mv: { x, y, k }: the point (fractions of the
     map) and how many times closer. The map is drawn once, three windows wide, on a plane of its own; the move slides and scales that plane (nothing is redrawn
     on the way, and the names are sharp when it gets there). → t0 / t: the plane's transform at the start and the end · view: the part of the map then on show */
  var MAP_Q = 3;
  function bookMoveTo(mv) { var k = mv.k || 3, fx = Math.min(0, Math.max(1 - k, .5 - k * mv.x)), fy = Math.min(0, Math.max(1 - k, .5 - k * mv.y));   // (kept inside the window)
    return { t: 'translate(' + (fx / MAP_Q * 100).toFixed(3) + '%,' + (fy / MAP_Q * 100).toFixed(3) + '%) scale(' + (k / MAP_Q).toFixed(4) + ')', t0: 'translate(0%,0%) scale(' + (1 / MAP_Q).toFixed(4) + ')', view: [-fx / k, -fy / k, 1 / k, 1 / k], at: function (e) { var kk = 1 + (k - 1) * e; return [-fx * e / kk, -fy * e / kk, 1 / kk, 1 / kk]; } }; }   // (at: the part on show when the move is e of the way there)
  function bookMoveView(zm) { try { var m = new DOMMatrixReadOnly(getComputedStyle(zm).transform), fw = zm.parentNode.clientWidth, fh = zm.parentNode.clientHeight, a = m.a || 1 / MAP_Q; return [(-m.e / a) / (MAP_Q * fw), (-m.f / a) / (MAP_Q * fh), 1 / (MAP_Q * a), 1 / (MAP_Q * a)]; } catch (e) { return null; } }   // the part of the map on show right now, as fractions of it (a move caught half-way)
  var BOOK_USES = { 'book-p1-2': ['vil-bg', 'vil-chicken-poster'], 'book-p1-3': ['vil-chicken-poster'], 'book-p1-4': ['vil-chicken-poster', 'wood-char-1'], 'book-p1-5': ['tav-trogdor-fly-poster'], 'book-p2-1': ['tav-trogdor-fly-poster'], 'book-p2-2': ['wood-joe', 'wood-char-1'], 'book-p2-3': ['ride-loop-poster'], 'book-p2-4': ['vortex-joe-poster'], 'book-p2-5': ['vortex-joe-poster'] };   // the pieces of the tale's art each code stand-in prints from (fetched only if its painted picture fails)
  /* which painted files a book needs (its own six miniatures; the bands, boxes, dividers and medals its pages name; the ornaments, corners, cover, spread, props) */
  function bookKeys(B) { var out = [], add = function (k) { if (k && BOOK_ART[k] && out.indexOf(k) < 0) out.push(k); };
    (B.pages || []).forEach(function (d) { if (BOOK_LAYERS_ON && BOOK_LAYERS[d.pic]) bookLayerKeys(d.pic).forEach(add); else add(d.pic);   /* s131: a miniature that comes apart is fetched as its parts (not as the flat file as well) */ add('book-band-' + (d.band || 1)); if (d.box) add('book-initial-' + d.box); if (d.div) add('book-divider-' + d.div); if (d.medal) add('book-medal-' + d.medal); });
    ['book-orn-diamond', 'book-orn-star', 'book-orn-fleur', 'book-orn-rosette', 'book-corner-1', 'book-corner-2', 'book-corner-3', 'book-corner-4', 'book-cover', 'book-spread', 'book-prop-tankard', 'book-prop-coins', 'book-prop-feather', 'book-prop-candle'].forEach(add); return out; }
  function bookAssets(B) { return bookKeys(B).map(function (k) { return F(BOOK_ART[k]); }); }
  /* everything the book needs is fetched and DECODED ahead, under the tale's loader (so the opening shot has nothing left to wait for): the painted files, the
     faces of type. → BOOK_PRE = { im: { key: <img> or null }, done: a promise } */
  function bookPrep(B) { if (BOOK_PRE && BOOK_PRE.B === B) return BOOK_PRE; var im = {}, wait = function (ms) { return new Promise(function (res) { setTimeout(res, ms); }); }, face = BOOK_FONT.split(',')[0].replace(/"/g, ''), ln = null;
    if (face !== 'Joes Journey Headline' && !document.getElementById('jjst-book-font')) { ln = document.createElement('link'); ln.id = 'jjst-book-font'; ln.rel = 'stylesheet'; ln.href = 'https://fonts.googleapis.com/css2?family=' + face.replace(/ /g, '+') + '&display=swap'; document.head.appendChild(ln); }   // the book's own face (approved for the book's pages only), fetched only when the book is going to play
    var css = ln ? Promise.race([new Promise(function (res) { ln.onload = res; ln.onerror = res; }), wait(3000)]) : Promise.resolve();
    var fonts = css.then(function () { return Promise.all(['64px "' + face + '"', '700 30px Caveat', '600 30px Caveat', 'italic 600 30px Caveat', '64px "Joes Journey Headline"'].map(function (f) { try { return Promise.race([document.fonts.load(f, 'Many moons ago…,’'), wait(3500)]).catch(function () {}); } catch (e) { return null; } })); });
    var one = function (k) { return new Promise(function (res) { var go = function (cors) { var i2 = new Image(), fin = function (ok) { im[k] = ok ? i2 : null; res(); }; if (cors) i2.crossOrigin = 'anonymous'; i2.onload = function () { if (i2.decode) i2.decode().then(function () { fin(true); }, function () { fin(true); }); else fin(true); }; i2.onerror = function () { if (cors) go(false); else fin(false); }; i2.src = F(BOOK_ART[k]); }; go(true); }); };   // (asked for with CORS first, so the cover's J can be read for its glint; plainly if the host refuses)
    /* s131: the parts are in → each miniature is put together once (plate + every sprite's 'a' pose) and stands where its flat file stood; a page with a part missing falls back to its flat file, and nothing moves on it */
    var layered = function () { return Promise.all((B.pages || []).map(function (d) { var pic = d.pic; if (!BOOK_LAYERS_ON || !BOOK_LAYERS[pic]) return null; var ks = bookLayerKeys(pic);
        if (ks.every(function (k) { return !!im[k]; })) { try { im[pic] = bookCompose(pic, im); return null; } catch (e) {} } return one(pic); })); };
    return (BOOK_PRE = { B: B, im: im, done: Promise.race([Promise.all([fonts].concat(bookKeys(B).map(one))).then(layered), wait(12000)]) }); }
  /* s131 · st2-26 · THE PAGE PUPPETS' PARTS (only behind ?book=1, with the rest of the storybook). Joe's miniatures come apart: a clean background plate and the things
     that move, cut out, in one or two poses (made by experiments/storybook/make-book-layers.py; the table below is its book-layers.json: every box is [x, y, w, h]
     as fractions of the picture). File names: story-<page key>-bg.webp, story-<page key>-<sprite>-<state>.webp. The plate plus every sprite's 'a' pose IS the flat
     miniature the book showed until now, so a page at rest, a turning leaf and a page under the cover look exactly as they did: bookCompose puts them together once,
     ahead of time, and that picture stands in for the flat file everywhere (the flat file is then not fetched at all; it is fetched, and used as before with nothing
     moving, only if a layer fails to arrive). shot: a sprite that makes an entrance (Joe falling into the wasteland): it is left out of the composed picture, and
     drawn in when its entrance is over. ?booklayers=0 = the flat miniatures, nothing moving (to compare). */
  var BOOK_LAYERS_ON = !/[?&]booklayers=0\b/.test(location.search);
  var BOOK_LAYERS = {
    'book-p1-2': { size: [1254, 1254], bg: 1, sp: { woman: { a: [0.1818, 0.5582, 0.1451, 0.2943], b: [0.1818, 0.5582, 0.1746, 0.2887] }, blue: { a: [0.4131, 0.5518, 0.1571, 0.2648], b: [0.4131, 0.5518, 0.1834, 0.2648] }, green: { a: [0.6364, 0.5407, 0.1475, 0.2687], b: [0.6108, 0.5407, 0.1722, 0.2656] }, chickhead: { a: [0.4561, 0.4785, 0.0678, 0.0789] }, chickqueue: { a: [0.4514, 0.8325, 0.0638, 0.0766] } } },
    'book-p1-3': { size: [1254, 1254], bg: 1, sp: { table: { a: [0.0351, 0.3939, 0.9282, 0.4729], b: [0.0351, 0.3014, 0.9298, 0.5646] } } },
    'book-p1-4': { size: [1254, 1254], bg: 1, sp: { woman: { a: [0.5917, 0.4689, 0.1196, 0.252], b: [0.5805, 0.4833, 0.1308, 0.2352] }, chicken: { a: [0.6013, 0.2759, 0.0582, 0.071] } } },
    'book-p1-5': { size: [1254, 1254], bg: 1, sp: { villagers: { a: [0.2684, 0.7392, 0.5694, 0.2352], b: [0.2753, 0.7473, 0.5558, 0.2273] }, shadow: { a: [0.164, 0.0327, 0.7392, 0.4753], b: [0.1504, 0.0292, 0.7663, 0.4825] } } },
    'book-p1-6': { size: [1536, 1024], bg: 1, sp: { trogdor: { a: [0.4987, 0.252, 0.4316, 0.5508], b: [0.4909, 0.25, 0.4408, 0.5537] } } },
    'book-p2-1': { size: [1254, 1254], bg: 1, sp: { trogdor: { a: [0.1994, 0.0829, 0.7313, 0.3676], b: [0.1669, 0.081, 0.764, 0.3716] }, runners: { a: [0.1751, 0.6994, 0.6411, 0.2536], b: [0.1466, 0.7178, 0.6978, 0.2352] } } },
    'book-p2-2': { size: [1254, 1254], bg: 1, sp: { joe: { a: [0.5455, 0.3094, 0.1627, 0.2201] }, wavers: { a: [0.1244, 0.5024, 0.6523, 0.4386], b: [0.1021, 0.5359, 0.7002, 0.3979] } } },
    'book-p2-3': { size: [1254, 1254], bg: 1, sp: { joe: { a: [0.3604, 0.2919, 0.1396, 0.114] } } },
    'book-p2-4': { size: [1254, 1254], bg: 1, sp: { horse: { a: [0.0191, 0.3636, 0.362, 0.39], b: [0.0128, 0.3844, 0.3477, 0.3644] }, joe: { a: [0.3668, 0.4123, 0.3397, 0.3333] } } },
    'book-p2-5': { size: [1254, 1254], bg: 0, sp: { swirl: { a: [0.0351, 0.0335, 0.9314, 0.9346] }, joe: { a: [0.2169, 0.3222, 0.4825, 0.4179] } } },
    'book-p2-6': { size: [1536, 1024], bg: 1, shot: { joe: 1 }, sp: { joe: { a: [0.4766, 0.4082, 0.1562, 0.335], fall: [0.4406, 0.1684, 0.2025, 0.2637], land: [0.4146, 0.5552, 0.2799, 0.1934] } } } };
  function bookLayerKeys(pic) { var L = BOOK_LAYERS[pic], out = []; if (!L) return out; if (L.bg) out.push(pic + '-bg'); Object.keys(L.sp).forEach(function (n) { Object.keys(L.sp[n]).forEach(function (s) { out.push(pic + '-' + n + '-' + s); }); }); return out; }
  Object.keys(BOOK_LAYERS).forEach(function (pic) { bookLayerKeys(pic).forEach(function (k) { BOOK_ART[k] = k; }); });
  function bookCompose(pic, im) { var L = BOOK_LAYERS[pic], bg = L.bg ? im[pic + '-bg'] : null, w = bg ? bg.naturalWidth : L.size[0], h = bg ? bg.naturalHeight : L.size[1], c = document.createElement('canvas'), x; c.width = w; c.height = h; x = c.getContext('2d');
    if (bg) x.drawImage(bg, 0, 0, w, h); else { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); }
    Object.keys(L.sp).forEach(function (n) { if (L.shot && L.shot[n]) return; var q = L.sp[n].a, s = im[pic + '-' + n + '-a']; if (q && s) x.drawImage(s, q[0] * w, q[1] * h, q[2] * w, q[3] * h); });
    c.naturalWidth = w; c.naturalHeight = h; c._layers = L; return c; }
  /* s130 · THE TALE'S PARTICLES ON A CANVAS. Measured (the audit, 2026-10-07): every mote, flake, ember and fleck was an element with one or two CSS animations of its
     own (150 in the portal shot, about 200 on Storytime 2's oasis), and together they cost as much main-thread time as the whole of My Story (27 → 43 fps on a 4x
     slower processor with them paused). They are now DRAWN: the builders still write the same markup (same counts, places, sizes, colours, speeds and delays), and
     pfxAdopt(host) reads those elements, removes them, and puts ONE canvas in their place that draws the same pictures on the same clocks: the same keyframes and
     easings, evaluated here. 30 pictures a second, at most 1.5 device pixels per pixel, soft edged (every sprite is a gradient or a glow), stopped while the tale is
     paused (or held under the storybook), and not drawn at all while its host is switched off. Families: Part One's forest motes (dots and four-point stars) and
     the mountain's snow (dots and flakes); Storytime 2's embers, snow, foam, drops, ripples and the ruins' smoke on the land (.st2fx) and the flecks / wind embers in the air
     (#jjst2-atmo .p). Everything else (flames, smoke, eddies, mist, twinkles, spores) stays as it was.
     PFX.density: 1 = as designed, 0.5 = a stable half of them, 0 = none (the quality ladder's knob: jjStory.fxDensity(k), window.JJ_FX_DENSITY, ?fxd=).
     ?pfx=0 = the old elements, to compare. */
  var PFX = { on: !/[?&]pfx=0\b/.test(location.search) && !!window.CanvasRenderingContext2D, list: [], raf: 0, last: 0, held: false, density: 1 };
  try { var _fxd = /[?&]fxd=([0-9.]+)/.exec(location.search); PFX.density = _fxd ? +_fxd[1] : (window.JJ_FX_DENSITY != null ? +window.JJ_FX_DENSITY : 1); } catch (e) {}
  try { var _fxdLite = function () { if (!/[?&]fxd=/.test(location.search) && window.JJ_FX_DENSITY == null) PFX.density = (window.jjLite && window.jjLite.on) ? 0.5 : 1; }; _fxdLite(); window.addEventListener('jj:lite', _fxdLite); } catch (e) {}   /* s138: half the particles in the lite level */
  /* s149 · the lite level, watched for the whole tale (Joe, 3 Nov: Part One 'couldn't handle' it on an older Intel Mac). site-footer.js measures one look at the
     start, and a machine that is fine in the cave can still drop frames under the village fire or the forest's effects. Two 4 s windows in a row under 24 frames a
     second while the tale runs (not paused, the tab in front) turn the lite level on: the particles halve at once, the glass blur goes, the effect layers are stills
     and the clips the small cuts from the next shot. ?jjlite=0 keeps it off */
  (function () { if (/[?&]jjlite=0\b/.test(location.search)) return; var n = 0, t0 = 0, low = 0;
    var tick = function (now) { if (window.jjLite && window.jjLite.on) return; requestAnimationFrame(tick);
      var so = document.getElementById('jjst-sndov'), ld = document.getElementById('jjst-loader');
      if (storyPaused || document.hidden || !curComp || (so && so.classList.contains('on')) || (ld && !ld.classList.contains('hide') && ld.offsetParent)) { t0 = 0; low = 0; return; }   // (not under the sound question or the loader: loading is not playing)
      if (!t0) { t0 = now; n = 0; return; } n++; if (now - t0 < 4000) return; var fps = n * 1000 / (now - t0); t0 = now; n = 0;
      low = fps < 24 ? low + 1 : 0; /* (24, not 30: a browser in low-power mode, or one not in front, runs at 30 and is not struggling) */ if (low >= 2 && window.jjLite && window.jjLite.set) window.jjLite.set(true, 'storytime measured ' + Math.round(fps) + ' frames a second'); };
    requestAnimationFrame(tick); })();
  /* s150 · Joe tested his Intel Mac (3 Nov): ?fx=0 helped, ?jjlite=1 was best. So (1) a Mac on Intel graphics starts the tale in the lite level (no seconds of lag
     first; the watch above stays for every other machine), and (2) when the lite level comes on mid-shot, the effect videos already up fade out and stop there
     and then (the next shot builds with the lite stills). ?jjlite=0 keeps everything */
  (function () { if (/[?&]jjlite=0\b/.test(location.search)) return;
    try { if (/Mac/.test(navigator.platform || navigator.userAgent) && !(window.jjLite && window.jjLite.on)) { var c = document.createElement('canvas'), g = c.getContext('webgl'), dbg = g && g.getExtension('WEBGL_debug_renderer_info'), r = dbg ? String(g.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || '') : '';
        if (g && g.getExtension('WEBGL_lose_context')) g.getExtension('WEBGL_lose_context').loseContext();
        if (/Intel/i.test(r)) { var n = 0, go = function () { if (window.jjLite && window.jjLite.set) window.jjLite.set(true, 'Intel graphics (' + r.replace(/^ANGLE \(|\)$/g, '').slice(0, 60) + ')'); else if (++n < 50) setTimeout(go, 200); }; go(); } } } catch (e) {}
    window.addEventListener('jj:lite', function (ev) { if (!ev.detail || !ev.detail.on) return;
      document.querySelectorAll('#jjst .jjfx video, #jjst video.jjfx-shot').forEach(function (v) { v.style.transition = 'opacity .6s ease'; v.style.opacity = '0'; setTimeout(function () { try { v.pause(); } catch (x) {} }, 650); }); }); })();
  function pfxBez(x1, y1, x2, y2) { return function (x) { if (x <= 0) return 0; if (x >= 1) return 1; var t = x, i, cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx, cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
      for (i = 0; i < 6; i++) { var f = ((ax * t + bx) * t + cx) * t - x, d = (3 * ax * t + 2 * bx) * t + cx; if (Math.abs(f) < 1e-4 || !d) break; t -= f / d; } return ((ay * t + by) * t + cy) * t; }; }
  var PFX_E = { lin: function (t) { return t; }, io: pfxBez(.42, 0, .58, 1), out: pfxBez(0, 0, .58, 1) };
  function pfxKf(S, p, e) { for (var i = 2; i < S.length; i += 2) if (p <= S[i]) { var o0 = S[i - 2]; return S[i - 1] + (S[i + 1] - S[i - 1]) * e((p - o0) / ((S[i] - o0) || 1)); } return S[S.length - 1]; }   // S = offset, value, offset, value… (the easing runs between each pair, as a CSS animation's does)
  function pfxRgb(c) { c = String(c || '#fff').trim(); var m;
    if ((m = /^#([0-9a-f]{3})$/i.exec(c))) return [parseInt(m[1][0] + m[1][0], 16), parseInt(m[1][1] + m[1][1], 16), parseInt(m[1][2] + m[1][2], 16), 1];
    if ((m = /^#([0-9a-f]{6})$/i.exec(c))) return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4, 6), 16), 1];
    if ((m = /^rgba?\(([^)]+)\)$/i.exec(c))) { var q = m[1].split(',').map(parseFloat); return [q[0] || 0, q[1] || 0, q[2] || 0, q[3] == null || isNaN(q[3]) ? 1 : q[3]]; }
    return [255, 255, 255, 1]; }
  function pfxCol(c, a) { var q = pfxRgb(c); return 'rgba(' + q[0] + ',' + q[1] + ',' + q[2] + ',' + (a == null ? q[3] : a) + ')'; }
  function pfxCv(w, h) { var c = document.createElement('canvas'); c.width = Math.max(1, Math.ceil(w)); c.height = Math.max(1, Math.ceil(h)); return c; }
  /* a soft round blob, w x h css px (an ellipse when they differ): stops = offset, colour… along its radius; glows = [blur, spread, colour], drawn only OUTSIDE its edge, as a box-shadow is */
  function pfxBlob(w, h, stops, glows, R) { var pad = 0, i; (glows || []).forEach(function (g) { pad = Math.max(pad, g[0] * 1.6 + g[1] + 2); }); pad = Math.ceil(pad);
    var cv = pfxCv((w + pad * 2) * R, (h + pad * 2) * R), x = cv.getContext('2d'), cx = (w / 2 + pad) * R, cy = (h / 2 + pad) * R, rx = Math.max(.5, w / 2 * R), ry = Math.max(.5, h / 2 * R), far = cv.width * 2 + 64;
    (glows || []).forEach(function (g) { x.save(); x.shadowColor = g[2]; x.shadowBlur = g[0] * R; x.shadowOffsetX = far; x.fillStyle = '#000'; x.beginPath(); x.ellipse(cx - far, cy, rx + g[1] * R, ry + g[1] * R, 0, 0, 6.2832); x.fill(); x.restore(); });
    if (glows && glows.length) { x.save(); x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 6.2832); x.fill(); x.restore(); }
    x.save(); x.translate(cx, cy); x.scale(rx, ry); var g2 = x.createRadialGradient(0, 0, 0, 0, 0, 1); for (i = 0; i < stops.length; i += 2) g2.addColorStop(stops[i], stops[i + 1]); x.fillStyle = g2; x.beginPath(); x.arc(0, 0, 1, 0, 6.2832); x.fill(); x.restore();
    return { cv: cv, w: w + pad * 2, h: h + pad * 2 }; }
  /* the forest's four-point star: a white heart, four thin rays to the corners of its square, a glow of its colour (the old element's conic gradient + drop-shadow) */
  function pfxStar(sz, c, R) { var pad = 8, n = Math.ceil((sz + pad * 2) * R), t = pfxCv(n, n), x = t.getContext('2d'), o = pad * R, s = sz * R, m = n / 2, c0 = pfxCol(c, 0), k;
    x.save(); x.beginPath(); x.rect(o, o, s, s); x.clip();
    if (x.createConicGradient) { var g = x.createConicGradient(-Math.PI / 2, m, m); g.addColorStop(0, c0); for (k = 0; k < 4; k++) { g.addColorStop((90 * k + 40) / 360, c0); g.addColorStop((90 * k + 45) / 360, c); g.addColorStop((90 * k + 50) / 360, c); g.addColorStop((90 * k + 55) / 360, c0); } g.addColorStop(1, c0); x.fillStyle = g; x.fillRect(o, o, s, s); }
    else { x.fillStyle = c; for (k = 0; k < 4; k++) { var a = (90 * k + 47.5) * Math.PI / 180, w = 4 * Math.PI / 180; x.beginPath(); x.moveTo(m, m); x.lineTo(m + Math.sin(a - w) * s, m - Math.cos(a - w) * s); x.lineTo(m + Math.sin(a + w) * s, m - Math.cos(a + w) * s); x.closePath(); x.fill(); } }
    var r = .19 * s * .7071, hg = x.createRadialGradient(m, m, 0, m, m, r); hg.addColorStop(0, '#fff'); hg.addColorStop(.94, '#fff'); hg.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = hg; x.beginPath(); x.arc(m, m, r, 0, 6.2832); x.fill(); x.restore();
    var cv = pfxCv(n, n), y = cv.getContext('2d'); y.shadowColor = c; y.shadowBlur = 4 * R; y.drawImage(t, 0, 0); return { cv: cv, w: sz + pad * 2, h: sz + pad * 2 }; }
  /* the mountain's snowflake (the old element's little line drawing, with its soft white glow) */
  function pfxFlake(sz, R) { var pad = 6, n = Math.ceil((sz + pad * 2) * R), t = pfxCv(n, n), x = t.getContext('2d');
    x.translate(pad * R, pad * R); x.scale(sz * R / 24, sz * R / 24); x.strokeStyle = '#fff'; x.lineWidth = 1.6; x.lineCap = 'round';
    try { x.stroke(new Path2D('M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l-2 2')); } catch (e) { x.beginPath(); x.moveTo(12, 2); x.lineTo(12, 22); x.moveTo(2, 12); x.lineTo(22, 12); x.moveTo(4.9, 4.9); x.lineTo(19.1, 19.1); x.moveTo(19.1, 4.9); x.lineTo(4.9, 19.1); x.stroke(); }
    var cv = pfxCv(n, n), y = cv.getContext('2d'); y.shadowColor = 'rgba(255,255,255,.9)'; y.shadowBlur = 3 * R; y.drawImage(t, 0, 0); return { cv: cv, w: sz + pad * 2, h: sz + pad * 2 }; }
  function pfxAdopt(host) { if (!PFX.on || !host || host._pfx) return null;
    var kind = host.id === 'jjst-sparkle' ? 'spark' : host.id === 'jjst-snow' ? 'snow' : host.classList.contains('st2fx') ? 'land' : host.classList.contains('set') ? 'air' : null; if (!kind) return null;
    var P = [], first = null, LAND = { em: 'em', sn: 'sn', sp: 'sp', dp: 'dp', rp: 'rp', sk: 'sk' };
    [].slice.call(host.children).forEach(function (e) { if (e.tagName !== 'I') return; var c = e.className, st = e.style, g = function (k) { return st.getPropertyValue('--' + k).trim(); }, k = null;
      if (kind === 'spark') k = c === 'st' ? 'star' : c === '' ? 'dot' : null; else if (kind === 'snow') k = c === 'fk' ? 'flake' : c === '' ? 'fall' : null; else if (kind === 'land') k = LAND[c] || null; else k = c === 'p' ? 'p' : c === 'p e' ? 'pe' : null;
      if (!k) return;
      P.push({ k: k, i: P.length, left: st.left || g('x'), top: st.top || g('y'), w: st.width, s: g('s'), c: g('c'), o: g('o'), d: g('d'), dl: g('dl'), dx: g('dx'), dy: g('dy'), fd: g('fd'), fx: g('fx'), fy: g('fy'), sw: g('sw'), sp: g('sp'), op: st.opacity });
      if (!first) first = e; else e.remove(); });
    if (!P.length) return null;
    var cv = document.createElement('canvas'); cv.className = 'jjst-pfx'; cv.setAttribute('aria-hidden', 'true'); cv.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;display:block;max-width:none;'; host.replaceChild(cv, first);
    var I = host._pfx = { host: host, kind: kind, cv: cv, x: cv.getContext('2d'), P: P, t: 0, W: -1, H: -1, R: 1, ox: 0, oy: 0, spr: {}, free: kind === 'land', gate: kind === 'spark' || kind === 'snow', idle: 0, dirty: true, ro: null };
    try { if (window.ResizeObserver) { I.ro = new ResizeObserver(function () { I.dirty = true; }); I.ro.observe(host); } } catch (e) {}
    PFX.list.push(I); if (!PFX.raf) { PFX.last = 0; PFX.raf = requestAnimationFrame(pfxTick); } return I; }
  window.addEventListener('resize', function () { PFX.list.forEach(function (I) { I.dirty = true; }); });
  function pfxLay(I) { var W = I.host.clientWidth, H = I.host.clientHeight; if (!W || !H) return false; I.W = W; I.H = H; I.dirty = false;
    var pn = window.JJ_LB && document.getElementById('jjst-pane'), inP = !!(pn && pn.contains(I.host)), vw = (inP ? pn.clientWidth : innerWidth) / 100, vh = (inP ? pn.clientHeight : innerHeight) / 100, L = function (v, ref) { v = String(v || ''); var n = parseFloat(v) || 0; return /(vw|cqw)$/.test(v) ? n * vw : /(vh|cqh)$/.test(v) ? n * vh : /%$/.test(v) ? n * ref / 100 : n; };
    var x0 = 0, y0 = 0, x1 = W, y1 = H, box = function (ax, ay, bx, by, m) { x0 = Math.min(x0, ax - m, bx - m); x1 = Math.max(x1, ax + m, bx + m); y0 = Math.min(y0, ay - m, by - m); y1 = Math.max(y1, ay + m, by + m); };
    I.vh = vh; I.P.forEach(function (p) { var k = p.k; p.X = L(p.left, W); p.Y = k === 'fall' || k === 'flake' ? -4 * vh : L(p.top, H); p.D = Math.max(50, (parseFloat(p.d) || 1) * 1000); p.DL = (parseFloat(p.dl) || 0) * 1000;
      if (k === 'dot' || k === 'star') { p.S = parseFloat(p.w) || 3; p.FD = Math.max(50, (parseFloat(p.fd) || 12) * 1000); p.FX = L(p.fx, W); p.FY = L(p.fy, H); p.X += p.S / 2; p.Y += p.S / 2; }
      else if (k === 'fall' || k === 'flake') { p.S = parseFloat(p.w) || 3; p.SW = L(p.sw, W); p.SP = Math.max(50, (parseFloat(p.sp) || 7) * 1000); p.O = p.op === '' || p.op == null ? .85 : +p.op; p.X += p.S / 2; p.Y += p.S / 2; }
      else if (k === 'em' || k === 'sn' || k === 'p' || k === 'pe') { p.S = L(p.s, W); p.DX = L(p.dx, W); p.DY = L(p.dy, H); p.O = k === 'em' ? .95 : k === 'sn' ? .9 : (parseFloat(p.o) || 1); p.X += p.S / 2; p.Y += p.S / 2; box(p.X, p.Y, p.X + p.DX, p.Y + p.DY, p.S / 2 + 14); }
      else if (k === 'sp') { p.S = L(p.s, W); p.Hh = p.S / 1.6; p.Y -= p.Hh * .1; box(p.X, p.Y - p.Hh * .5, p.X, p.Y + p.Hh * .1, p.S * .7 + 2); }
      else if (k === 'dp') { p.S = W * .0045; p.DX = L(p.dx, W); p.X += p.S / 2; p.Y += p.S / 2; box(p.X, p.Y - 2.6 * vh, p.X + p.DX, p.Y + .6 * vh, p.S + 2); }
      else if (k === 'rp') { p.S = L(p.s, W); p.Hh = p.S / 3.2; box(p.X, p.Y, p.X, p.Y, p.S * .6 + 2); }
      else if (k === 'sk') { p.S = L(p.s, W); p.DX = L(p.dx, W); p.DY = L(p.dy, H); box(p.X, p.Y, p.X + p.DX, p.Y + p.DY, p.S * 1.3 + 2); } });
    if (!I.free) { x0 = 0; y0 = 0; x1 = W; y1 = H; } else { x0 = Math.max(x0, -2400); y0 = Math.max(y0, -2400); x1 = Math.min(x1, W + 2400); y1 = Math.min(y1, H + 2400); }
    x0 = Math.floor(x0); y0 = Math.floor(y0); var cw = Math.ceil(x1 - x0), ch = Math.ceil(y1 - y0), R = Math.min(window.devicePixelRatio || 1, 1.5); while (cw * ch * R * R > 5e6 && R > .5) R *= .85;
    I.ox = x0; I.oy = y0; I.R = R; I.spr = {}; I.cv.width = Math.max(1, Math.round(cw * R)); I.cv.height = Math.max(1, Math.round(ch * R)); I.cv.style.left = x0 + 'px'; I.cv.style.top = y0 + 'px'; I.cv.style.width = cw + 'px'; I.cv.style.height = ch + 'px'; return true; }
  function pfxSpr(I, p) { var k = p.k, s = Math.max(1, Math.round(p.S * 2) / 2), key = k === 'dot' || k === 'star' || k === 'p' || k === 'pe' ? k + '|' + p.c + '|' + s : k === 'sp' || k === 'rp' || k === 'dp' || k === 'sk' ? k : k + '|' + s, q = I.spr[key], R = I.R * 1.3, W1 = 'rgba(255,255,255,', c;
    if (q) return q;
    if (k === 'dot') { c = p.c || '#fff7d6'; q = pfxBlob(s, s, [0, c, 1, c], [[14, 0, c], [6, 0, c]], R); }
    else if (k === 'star') q = pfxStar(Math.round(p.S), p.c || '#fff6c8', R);
    else if (k === 'fall') q = pfxBlob(s, s, [0, '#fff', 1, '#fff'], [[6, 0, W1 + '.9)']], R);
    else if (k === 'flake') q = pfxFlake(Math.round(p.S), R);
    else if (k === 'em') q = pfxBlob(s, s, [0, '#ffe9a8', .55, '#ff9a3a', 1, 'rgba(255,120,40,0)'], [[6, 1, 'rgba(255,130,40,.6)']], R);
    else if (k === 'sn') q = pfxBlob(s, s, [0, '#fff', 1, W1 + '0)'], null, R);
    else if (k === 'p' || k === 'pe') { c = p.c || '#fff'; q = pfxBlob(s, s, [0, pfxCol(c), 1, pfxCol(c, 0)], k === 'pe' ? [[6, 1, 'rgba(255,140,50,.7)']] : null, R); }
    else if (k === 'sp') q = pfxBlob(96, 60, [0, W1 + '.95)', .55, W1 + '.4)', 1, W1 + '0)'], null, 1);
    else if (k === 'sk') q = pfxBlob(96, 96, [0, 'rgba(52,40,40,.62)', .55, 'rgba(60,48,46,.3)', 1, 'rgba(60,48,46,0)'], null, 1);
    else if (k === 'rp') q = pfxBlob(192, 60, [0, W1 + '0)', .5, W1 + '0)', .7, W1 + '.62)', .95, W1 + '0)', 1, W1 + '0)'], null, 1);
    else q = pfxBlob(12, 12, [0, '#fff', 1, W1 + '0)'], null, 1);
    return (I.spr[key] = q); }
  function pfxDraw(I, dt) { if (I.dirty || I.W < 0) { if (!pfxLay(I)) return; } I.t += dt;
    var x = I.x, R = I.R, t = I.t, den = PFX.density, E = PFX_E, P = I.P, n = P.length, vh = I.vh, i, p, k, q, ph, a, cx, cy, sc, w, h, e, f;
    x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, I.cv.width, I.cv.height); if (den <= 0) return; x.setTransform(R, 0, 0, R, -I.ox * R, -I.oy * R);
    for (i = 0; i < n; i++) { p = P[i]; if (den < 1 && ((i * .6180339887) % 1) >= den) continue; k = p.k; q = pfxSpr(I, p); ph = ((t - p.DL) % p.D) / p.D; sc = 1; w = q.w; h = q.h;
      if (k === 'dot' || k === 'star') { e = ph < .5 ? E.io(ph * 2) : 1 - E.io((ph - .5) * 2); a = .15 + .85 * e; sc = .6 + .65 * e; f = (t - p.DL) / p.FD; var it = Math.floor(f); f -= it; if (it % 2) f = 1 - f; e = E.io(f); cx = p.X + p.FX * e; cy = p.Y + p.FY * e; w *= sc; h *= sc; }
      else if (k === 'fall' || k === 'flake') { a = p.O; cx = p.X + p.SW * pfxKf([0, 0, .25, .6, .5, -.2, .75, .8, 1, 1], ph, E.lin); cy = p.Y + vh * pfxKf([0, 0, .25, 27, .5, 54, .75, 81, 1, 110], ph, E.lin);
        if (k === 'flake') { x.globalAlpha = a; x.translate(cx, cy); x.rotate(((t % p.SP) / p.SP) * 6.2832); x.drawImage(q.cv, -w / 2, -h / 2, w, h); x.setTransform(R, 0, 0, R, -I.ox * R, -I.oy * R); continue; } }
      else if (k === 'em' || k === 'pe') { a = pfxKf([0, 0, .1, p.O, .45, p.O * .4, .7, p.O, 1, 0], ph, E.lin); cx = p.X + p.DX * ph; cy = p.Y + p.DY * ph; }
      else if (k === 'sn' || k === 'p') { a = pfxKf([0, 0, .12, p.O, .85, p.O, 1, 0], ph, E.lin); cx = p.X + p.DX * ph; cy = p.Y + p.DY * ph; }
      else if (k === 'sp') { e = E.out(ph); sc = .35 + e; a = pfxKf([0, 0, .25, .9, 1, 0], ph, E.out); w = p.S * sc; h = p.Hh * sc; cx = p.X; cy = p.Y + (.2 - .55 * e) * p.Hh * sc; }
      else if (k === 'dp') { a = pfxKf([0, 0, .15, .95, .55, .9, 1, 0], ph, E.out); cx = p.X + p.DX * pfxKf([0, 0, .55, .6, 1, 1], ph, E.out); cy = p.Y + vh * pfxKf([0, 0, .55, -2.6, 1, .6], ph, E.out); w = h = p.S; }
      else if (k === 'sk') { sc = pfxKf([0, .5, .55, 1.5, 1, 2.6], ph, E.lin); a = pfxKf([0, 0, .12, .85, .55, .55, 1, 0], ph, E.lin); cx = p.X + p.DX * pfxKf([0, 0, .55, .38, 1, 1], ph, E.lin); cy = p.Y + p.DY * pfxKf([0, 0, .55, .62, 1, 1], ph, E.lin); w = h = p.S * sc; }
      else { sc = .2 + .95 * E.out(ph); a = pfxKf([0, 0, .2, .85, 1, 0], ph, E.out); w = p.S * sc; h = p.Hh * sc; cx = p.X; cy = p.Y; }
      if (a <= .004) continue; x.globalAlpha = a > 1 ? 1 : a; x.drawImage(q.cv, cx - w / 2, cy - h / 2, w, h); }
    x.globalAlpha = 1; }
  function pfxTick(now) { PFX.raf = 0; var L = PFX.list, i, I; for (i = L.length - 1; i >= 0; i--) if (!L[i].host.isConnected) { try { if (L[i].ro) L[i].ro.disconnect(); } catch (e) {} L.splice(i, 1); }
    if (!L.length) return; PFX.raf = requestAnimationFrame(pfxTick);
    if (now - PFX.last < 30) return; var dt = PFX.last ? Math.min(100, now - PFX.last) : 0; PFX.last = now;   // 30 pictures a second (every other frame of a 60 Hz screen)
    if (storyPaused || PFX.held) return;                                                                      // paused = the picture stays, its clocks stop
    for (i = 0; i < L.length; i++) { I = L[i]; if (I.gate && !I.host.classList.contains('on')) { if (I.idle > 2500) continue; I.idle += dt; } else I.idle = 0; try { pfxDraw(I, dt); } catch (e) {} } }
  /* the seven evolution figures — the "To be continued…" loader between the tale and My Story */
  function evoOpts() { var EVO = [], EVOG = [], EVOB = []; for (var ev = 1; ev <= 7; ev++) { EVO.push(GB + 'joe-evo-' + ev + '.webp'); EVOG.push(GB + 'joe-evo-grey-' + ev + '.webp'); EVOB.push(GB + 'joe-evo-' + ev + 'b.webp'); }
    return { variant: 'evolution', assets: EVO.concat(EVOG, EVOB), stages: EVO, stagesGrey: EVOG, stagesB: EVOB,
      stageBounds: [[0.390,0.590],[0.292,0.655],[0.278,0.740],[0.165,0.780],[0.163,0.805],[0.090,0.880],[0.115,0.838]], stageBoundsX: [[0.393,0.632],[0.268,0.733],[0.350,0.685],[0.237,0.750],[0.360,0.757],[0.212,0.757],[0.372,0.728]] }; }
  /* The clips are the only heavy assets not covered by the loader. Fetch them sequentially in story order
     (one format only — whichever this browser will actually play) so each sits in the HTTP cache before its
     scene mounts; the <video> then loads instantly instead of showing its poster while it buffers. */
  /* Clips load by chapter: each scene warms its own clips and the next two scenes' (one file at a time, in the order the tale
     needs them, in the one format this browser plays), so nobody downloads the castle while they are still in the cave. */
  var warmedClip = {}, warmQ = [], warmBusy = false, WARM_FMT = null;
  function sceneComps(i) { var sc = SCENES[i], out = []; if (!sc) return out; if (sc.comp) out.push(sc.comp); (sc.triggers || []).forEach(function (t) { if (t.comp) out.push(t.comp); }); return out; }
  /* s130 · LOADING ORDER. gateList: what the loader waits for = the first scene's board, stills and clip posters. sceneIn: the first scene is whole (its clips can
     play, its pictures are in), or 8 s have gone. Until then nothing of a later scene is asked for (warmOpen); after it, each scene fetches its own clips and the
     NEXT scene's (it was the next two), one file at a time, and the remaining boards trickle in two at a time. A clip whose <video> is already on the stage is not
     fetched a second time by the warm-ahead (it was: the opening shot's clips were asked for twice). */
  var warmOpen = false, warmPend = 0;
  function gateList(n) { var c = COMP[n] || {}, out = [F('cav-dragon-1'), BANNER], rg = camRigOf(n); if (n !== 'cavern') out = [BANNER];
    if (c.bg) out.push(F(c.bg)); (c.layers || []).forEach(function (L) { if (L.vid) { if (!L.late || L.lateShow) out.push(SB(L.vid) + '-poster.webp' + AV); } else if (L.src) out.push(F(L.src)); });
    (rg ? fxFiles(rg) : []).forEach(function (q) { if (q.indexOf('.webp') > 0) out.push(q); });
    return out.filter(function (u, i2) { return out.indexOf(u) === i2; }); }
  function sceneIn(cb) { var t0 = performance.now(), st = document.getElementById('jjst'), fired = false;
    (function chk() { if (fired) return; var ok = true, late = performance.now() - t0 > 8000;
      if (st && !late) { [].forEach.call(st.querySelectorAll('video'), function (v) { if (!(v.readyState >= (v.autoplay || !v.paused ? 3 : 1) || v.error || v.networkState === 3 || (!v.currentSrc && !v.querySelector('source')))) ok = false; });   // (a clip that plays must be able to play on; one that waits for its cue need only have arrived)
        [].forEach.call(st.querySelectorAll('#jjst-bgwrap img, #jjst-layers img'), function (im) { if (!im.complete) ok = false; }); }
      if (ok || late) { fired = true; cb(); } else setTimeout(chk, 250); })(); }
  function trickle(urls) { var i2 = 0, live = 0; (function next() { while (live < 2 && i2 < urls.length) { (function (u) { live++; var im = new Image(), fin = function () { live--; next(); }; try { im.fetchPriority = 'low'; } catch (e) {} im.onload = im.onerror = fin; im.src = u; })(urls[i2++]); } })(); }
  function clipUp(v) { var b = SB(v) + '.'; return [].some.call(document.querySelectorAll('#jjst video'), function (x) { return String(x.currentSrc || '').indexOf(b) === 0 || !!x.querySelector('source[src^="' + b + '"]'); }); }
  function warmAhead(i) {
    if (!warmOpen) { warmPend = i; return; }
    if (WARM_FMT === null) WARM_FMT = jjClipSrc('').indexOf('.mov') > 0 ? '.mov' : '.webm';
    var warmFar = XP ? i + 5 : SCENES.length - 1, front = [], want = function (v, near) { if (warmedClip[v] === 2) return; if (near) { var ix = warmQ.indexOf(v); if (ix >= 0) warmQ.splice(ix, 1); if (front.indexOf(v) < 0) front.push(v); warmedClip[v] = 1; } else if (!warmedClip[v]) { warmedClip[v] = 1; warmQ.push(v); } };   /* s137: near = the scene on show and the next (to the front of the queue); the rest of the tale follows in story order. warmedClip: 1 = queued, 2 = asked for */
    for (var k = i; k <= warmFar; k++) sceneComps(k).forEach(function (n) { ((COMP[n] || {}).layers || []).forEach(function (L) { if (L.vid) want(L.vid, k <= i + 1); }); });
    for (var kb = i; kb <= i + 1; kb++) sceneComps(kb).forEach(function (n) { if (!COMP[n]) return; preBg(COMP[n].bg); (COMP[n].layers || []).forEach(function (L) { if (L.vid && (!L.late || L.lateShow)) prePoster(SB(L.vid) + '-poster.webp' + AV); else if (L.src && !L.vid) prePoster(F(L.src)); }); });   // s104: this scene's and the next one's boards, decoded before they are needed
    var ORBFX = { forest3: ['fx-orb-idle', 'fx-orb-reveal', 'fx-orb-shadow.'], forest4b: ['fx-orb-glow', 'fx-orb-tap', 'fx-ffar-burst'].concat(FX_HEVC ? [] : ['fx-orb-active']), forest5b: ['fx-orb-fall', 'fx-orb-flat.', 'fx-ffar-pflash', 'fx-ffar-handover'] };
    for (var kf = i; kf <= warmFar; kf++) sceneComps(kf).forEach(function (n) {   // s106: this scene's and the next one's Blender fx, fetched ahead (one format; posters on phones)
      var rg = camRigOf(n), fs = rg ? fxFiles(rg) : []; if (ORBFX[n] && fxDesk()) fs = fs.concat(ORBFX[n].map(function (q) { return q.slice(-1) === '.' ? F(q.slice(0, -1)) : q; }));
      fs.forEach(function (q) { want(q, kf <= i + 1); }); });
    warmQ = front.concat(warmQ);
    if (warmBusy || !window.fetch) return;
    (function next() { var v = warmQ.shift(); if (!v) { warmBusy = false; return; } warmBusy = true; warmedClip[v] = 2;
      if (v.indexOf('.webp') < 0 && clipUp(v)) { next(); return; }   /* s130: its <video> is already on the stage and fetching it: not asked for twice */
      fetch(v.indexOf('.webp') > 0 ? v : SB(v) + WARM_FMT + (AVX[v.replace(/^fx-/, '')] || AV), { priority: 'low' }).then(function (r) { return r.blob(); }).catch(function () {}).then(next); })();
  }
  function warmImages(urls, ms, done){
    var left = urls.length, fired = false; function fin(){ if (!fired) { fired = true; done(); } }
    if (!left) return fin();
    urls.forEach(function (u) { var im = new Image(); im.onload = im.onerror = function () { if (--left <= 0) fin(); }; im.src = u; });
    setTimeout(fin, ms);
  }
  function preloadCritical(done){
    var urls = [F('cav-bg'), F('cav-dragon-1'), BANNER], left = urls.length, fired = false;
    function finish(){ if (!fired) { fired = true; done(); } }
    urls.forEach(function (u) { var im = new Image(); im.onload = im.onerror = function () { if (--left <= 0) finish(); }; im.src = u; });
    setTimeout(finish, 9000);
  }

  /* s130 · asked for as this file is read (it used to be at DOMContentLoaded, behind every other script): Storytime 2's own file; the opening shot's board and the
     banner (as the loader will fetch them, so they are the same request); and the lettering face as woff2 */
  (function early() { try { if (location.hash === '#my-story') return;
      var hint = function (href, as, co) { var l = document.createElement('link'); l.rel = 'preload'; l.as = as; l.href = href; if (co) l.crossOrigin = 'anonymous'; try { l.fetchPriority = 'high'; } catch (e) {} document.head.appendChild(l); };
      if (ST2) hint(GB + 'storytime2.js?v=' + (window.JJ_ST2_V || 1), 'script');
      else if (!PART2 && !START_SCENE && window.fetch) [F('cav-bg'), BANNER].forEach(function (u) { hint(u, 'fetch', true); });
      if (window.FontFace && document.fonts && document.fonts.add) document.fonts.add(new FontFace('Sketch Gothic School', 'url("' + GB + 'sketch-gothic-school.woff2") format("woff2"), url("' + GB + 'sketch-gothic-school.ttf") format("truetype")', { display: 'swap' }));
    } catch (e) {} })();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
