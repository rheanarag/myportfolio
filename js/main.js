/**
 * RHEA MAE NARAG — PORTFOLIO JAVASCRIPT
 * Pixel-faithful recreation from 8 reference screenshots
 * Vanilla JavaScript (No frameworks / libraries)
 */

'use strict';

/* ==========================================================================
   CENTRALIZED CONTENT OBJECT
   All copy, data, and asset paths are maintained here for easy swapping.
   ========================================================================== */
const PORTFOLIO_CONTENT = {
  profile: {
    name: "Rhea Mae Narag",
    shortName: "Rhea Narag",
    brandLogo: "rmn.",
    heroScript: "Hey, I'm",
    role1: "UI/UX",
    role2: "DESIGNER",
    location: "STA. MESA, MANILA",
    university: "Polytechnic University of the Philippines",
    degree: "BS Information Technology",
    classYear: "2028",
    email: "naragrhea20@gmail.com"
  },

  about: {
    heading: "ABOUT ME",
    paragraphs: [
      "I'm a Junior Information Technology student at the Polytechnic University of the Philippines with a growing interest in frontend development and creating digital experiences that are both functional and easy to use.",
      "I enjoy turning ideas into working interfaces, exploring how systems work behind the scenes, and learning new technologies along the way.",
      "My experience includes frontend development, UI/UX design, database management, and network infrastructure, with a focus on continuously improving my skills through hands-on projects and collaboration."
    ],
    stats: [
      { title: "PUP", subtitle: "BSIT Class '28" },
      { title: "CONSISTENT", subtitle: "President's Lister" },
      { title: "SBFI", subtitle: "External Scholar" }
    ],
    callouts: [
      { id: "iskolar", label: "ISKOLAR NG\nBAYAN" },
      { id: "designer", label: "UI/UX\nDESIGNER" },
      { id: "bsit", label: "BSIT" },
      { id: "frontend", label: "FRONTEND\nDEVELOPER" }
    ]
  },

  education: [
    {
      title: "BS Information Technology",
      institution: "Polytechnic University of the Philippines",
      location: "STA. MESA, MANILA",
      description: "Preparing for a career in information systems development, creating solutions that meet real user needs.",
      tags: ["PROGRAMMING", "WEB DEVELOPMENT", "DATABASE DESIGN", "NETWORKING"],
      status: "Current",
      isUppercaseStatus: false,
      logo: "assets/images/pup-seal.png",
      alt: "PUP Seal"
    },
    {
      title: "Science, Technology, Engineering, and Mathematics (STEM)",
      institution: "Juan R. Liwag Memorial High School - SHS",
      location: "GAPAN CITY, NUEVA ECIJA",
      description: "Collaborated on the synthesis and characterization of hydrothermally grown copper oxide nanoparticles (CuO NPs).",
      tags: ["WITH HIGHEST HONORS", "RESEARCH", "JOURNALISM"],
      status: "2022-2024",
      isUppercaseStatus: false,
      logo: "assets/images/jrlmhs-seal.png",
      alt: "JRLMHS Seal"
    },
    {
      title: "Scholarship",
      institution: "Security Bank Foundation Inc.",
      location: "PHILIPPINES",
      description: "As a scholar, I am committed to academic excellence, continuous learning, and professional development.",
      tags: ["EXTERNAL SCHOLAR"],
      status: "CURRENT",
      isUppercaseStatus: true,
      logo: "assets/images/secbank-logo.png",
      alt: "Security Bank Logo"
    }
  ],

  skills: {
    screenHeadline: "Built on curiosity. Packed with tools.",
    screenSubtitle: "Open my laptop's toolkit to see what I work with.",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        subtitle: "Web & client",
        chips: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Web Design", "DOM Manipulation"]
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        subtitle: "Design & research",
        chips: ["Figma Prototyping", "Wireframing & Mockups", "User-Centered Design", "HCI Principles", "Design Systems", "Usability Testing"]
      },
      {
        id: "programming",
        title: "Programming",
        subtitle: "Core stack",
        chips: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL", "R", "COBOL"]
      },
      {
        id: "databases",
        title: "Databases",
        subtitle: "Data management",
        chips: ["MySQL", "SQL Queries", "Normalization (1NF–3NF)", "ERD Modeling", "Data Integrity & Constraints", "Relational Schema Design"]
      },
      {
        id: "networking",
        title: "Networking",
        subtitle: "Infrastructure",
        chips: ["Cisco Packet Tracer", "OSPF Routing", "Cisco ASA 5506-X", "Network Topology Design", "Subnetting (VLSM)", "LAN / WAN Architecture"]
      },
      {
        id: "devtools",
        title: "Developer Tools",
        subtitle: "Environment",
        chips: ["Git", "GitHub", "CLI / Bash", "VS Code", "Markdown", "Command Line Tools"]
      }
    ]
  },

  projects: [
    {
      num: "01",
      title: "SALN Submission Portal",
      image: "assets/images/saln-system.webp",
      type: "laptop",
      alt: "SALN Submission Portal laptop interface",
      link: "https://github.com/mrtnriel/SALN-system"
    },
    {
      num: "02",
      title: "Lab Room Booking App",
      image: "assets/images/pupwesto.jpg",
      type: "laptop-phone",
      alt: "PUPwesto lab room booking application preview",
      link: "https://www.figma.com/proto/gqwc5tSAWlLeSLLpxWD74U/High-Fidelity-Wireframe--Group-4-?node-id=273-3882&starting-point-node-id=273%3A3882"
    },
    {
      num: "03",
      title: "Campus Network Architecture",
      image: "assets/images/topology.png",
      type: "frame",
      alt: "Enterprise Cisco Packet Tracer network topology"
    },
    {
      num: "04",
      title: "System Architecture",
      image: null,
      type: "placeholder",
      alt: "Upcoming systems design project"
    },
    {
      num: "05",
      title: "Interactive Greeting Card",
      image: "assets/images/bday-card.png",
      type: "tablet",
      alt: "Tablet vintage illustration and digital greeting card"
    }
  ],

  experience: [
    {
      title: "Vice Chief Relations Officer",
      org: "Cisco NetConnect PUP - Manila",
      description: "Currently serving as Vice Chief Relations Officer (VCRO), leading external partnerships, organizational relations, and student outreach for the Cisco NetConnect organization across university chapters.",
      tags: ["Relations & Outreach", "External Partnerships", "Leadership", "Public Relations"],
      badge: "Current VCRO",
      badgeType: "maroon",
      logo: "assets/logos/cncp-pup.jpg",
      alt: "Cisco NetConnect PUP Logo",
      gallery: [
        {
          src: "assets/images/experience/cisco/1.jpg",
          alt: "Rhea hosting and facilitating a Cisco NetConnect event session",
          caption: "Event Emcee & Session Facilitation"
        },
        {
          src: "assets/images/experience/cisco/2.jpg",
          alt: "Cisco NetConnect PUP student members and community gathering",
          caption: "Chapter Community Gathering & Member Engagement"
        },
        {
          src: "assets/images/experience/cisco/3.jpg",
          alt: "Rhea with Cisco NetConnect executive committee officers",
          caption: "Executive Leadership & Relations Team"
        },
        {
          src: "assets/images/experience/cisco/4.jpg",
          alt: "Rhea with Cisco NetConnect student relations team",
          caption: "Student Outreach & Partner Relations Team"
        }
      ]
    },
    {
      title: "Marketing Strategy Officer",
      org: "Microsoft Campus Club (MCC) • PUP",
      description: "Currently serving as Marketing Strategy Officer (MSO), formulating promotional strategies, brand messaging, and campaign initiatives to expand campus visibility, student engagement, and tech event participation.",
      tags: ["Marketing Strategy", "Brand Outreach", "Campaign Planning", "Leadership"],
      badge: "Current MSO",
      badgeType: "maroon",
      logo: "assets/logos/msc-pup.jpg",
      alt: "Microsoft Campus Club Logo",
      galleryLayout: "portrait",
      gallery: [
        {
          src: "assets/images/experience/mcc/58f55766-1de9-409e-9b6a-05a2b31cc5cf.jpg",
          alt: "Rhea promoting Microsoft Campus Club PUP membership applications",
          caption: "Membership Application Promotional Campaign"
        },
        {
          src: "assets/images/experience/mcc/3ecd4c39-9433-4631-a3f4-cbc8b40b7fcc.jpg",
          alt: "Microsoft Campus Club PUP brand identity and new chapter launch campaign",
          caption: "Brand Strategy & New Chapter Identity Launch"
        },
        {
          src: "assets/images/experience/mcc/98458326-87dd-4866-82c0-f09f80c8c3ae.jpg",
          alt: "MCC PUP official Microsoft accreditation campaign announcement",
          caption: "Official Microsoft Chapter Accreditation Announcement"
        }
      ]
    },
    {
      title: "UI/UX DESIGNER",
      org: "AWS Cloud Club • PUP",
      description: "Active student member participating in AWS community events, volunteering, hands-on workshops, and recently joined the developer team as a UI/UX designer.",
      tags: ["Dev Team", "Volunteering", "Tech Events"],
      badge: "Current UI/UX DESIGNER",
      badgeType: "maroon",
      logo: "assets/logos/aws-logo.png",
      alt: "AWS Cloud Club Logo",
      gallery: [
        {
          src: "assets/images/experience/aws/1.jpg",
          alt: "AWS Cloud Club Developer Team and UI/UX Design Meeting",
          caption: "Dev Team UI/UX Design & Prototyping"
        },
        {
          src: "assets/images/experience/aws/2.jpg",
          alt: "AWS Cloud Workshop and Hands-on Student Architecture Lab",
          caption: "Hands-on Architecture Labs & Cloud Workshops"
        },
        {
          src: "assets/images/experience/aws/3.jpg",
          alt: "AWS Community Day and Student Volunteering",
          caption: "AWS Community Day & Student Volunteering"
        },
        {
          src: "assets/images/experience/aws/4.jpg",
          alt: "AWS Cloud Club Campus Tech Conference and Presentation",
          caption: "Campus Tech Conference & Meetups"
        }
      ]
    },
    {
      title: "Member",
      org: "Google Developer Groups (GDG) On Campus • PUP",
      description: "Active student member participating in study jams, developer workshops, and community meetups exploring modern development frameworks, cloud tooling, and open collaboration.",
      tags: ["Study Jams", "Developer Workshops"],
      badge: "Member",
      badgeType: "neutral",
      logo: "assets/logos/gdg-logo.jpg",
      alt: "GDG On Campus Logo"
    }
  ],

  contact: {
    headline: "Have a design challenge? Let's create a user-centered solution.",
    placeholders: {
      name: "Renz Angelo Cadaoas",
      email: "renzcadaoas@company.com",
      subject: "Frontend Internship / Project Collaboration",
      message: "Share your project goals, internship inquiry, or say hello..."
    }
  }
};

/* Force browser to start at the top on refresh instead of jumping to previous position or hash */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/* ==========================================================================
   INITIALIZATION & DOM CONTROLLERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
  initIdPreloader();
  initNavigation();
  initScrollspyAndNavTheme();
  initSkillsToolkit();
  // Hero & About hover parallax enabled:
  initHeroParallax();
  initAboutParallax();
  initAboutScrollReveal();
  initEducationScrollReveal();
  initSkillsScrollReveal();
  initProjectsScrollReveal();
  initProjectsCarousel();
  initExperienceScrollReveal();
  initExperienceAccordion();
  initExperienceGalleries();
  initContactScrollReveal();
  initAboutPhotoClick();
  initContactForm();
  // initScrollReveal();
  initResumeModal();
  initEmailButtons();
});

/* ==========================================================================
   LANYARD ID CARD PRE-LOADER / WELCOME SCREEN CONTROLLER
   ========================================================================== */
function initIdPreloader() {
  const preloader = document.getElementById('id-preloader');
  const enterBtn = document.getElementById('id-enter-btn');
  const hangingUnit = document.getElementById('id-hanging-unit');
  const idCard = document.getElementById('id-card');
  const ambientShadow = preloader ? preloader.querySelector('.id-ambient-shadow') : null;
  if (!preloader || !enterBtn || !hangingUnit || !idCard) return;

  // Prevent scroll during welcome screen
  document.body.classList.add('preloader-active');

  let hasEntered = false;

  /* --------------------------------------------------------------------------
     PHYSICS-BASED NATURAL PENDULUM SWAY INTERACTION
     -------------------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let swayRafId = null;
  let angle = 0;
  let velocity = 0;
  let lastTime = null;
  let isSwaying = false;

  const STIFFNESS = 30;    // Natural pendulum restoration frequency
  const DAMPING = 3.2;     // Smooth atmospheric / fabric friction decay
  const MAX_VELOCITY = 24; // Maximum rotational velocity on repeated taps (caps around ~5 deg)
  const PENDULUM_ARM = 24; // Subtle horizontal drift factor in pixels

  function applyImpulse(impulseMagnitude) {
    if (prefersReducedMotion || hasEntered) return;

    // Disengage CSS ambient sway to allow dynamic physics control
    hangingUnit.style.animation = 'none';

    // Add momentum seamlessly to existing velocity
    velocity += impulseMagnitude;

    // Clamp velocity to preserve aesthetic elegance on rapid tapping
    if (velocity > MAX_VELOCITY) velocity = MAX_VELOCITY;
    if (velocity < -MAX_VELOCITY) velocity = -MAX_VELOCITY;

    if (!isSwaying) {
      isSwaying = true;
      lastTime = performance.now();
      swayRafId = requestAnimationFrame(swayStep);
    }
  }

  function swayStep(currentTime) {
    if (hasEntered) {
      isSwaying = false;
      swayRafId = null;
      return;
    }

    const dt = Math.min((currentTime - lastTime) / 1000, 0.04);
    lastTime = currentTime;

    // Physics equation: angular acceleration = -stiffness * angle - damping * velocity
    const acceleration = -STIFFNESS * angle - DAMPING * velocity;
    velocity += acceleration * dt;
    angle += velocity * dt;

    const tx = Math.sin(angle * (Math.PI / 180)) * PENDULUM_ARM;
    hangingUnit.style.transform = `rotate(${angle.toFixed(3)}deg) translateX(${tx.toFixed(2)}px)`;

    if (ambientShadow) {
      ambientShadow.style.transform = `translate(calc(-50% + ${(tx * 0.75).toFixed(2)}px), -50%)`;
    }

    // When movement naturally subsides below threshold, settle smoothly to rest
    if (Math.abs(angle) < 0.04 && Math.abs(velocity) < 0.06) {
      angle = 0;
      velocity = 0;
      isSwaying = false;
      swayRafId = null;
      hangingUnit.style.transform = 'rotate(0deg) translateX(0px)';
      if (ambientShadow) {
        ambientShadow.style.transform = 'translate(-50%, -50%)';
      }
      // Re-engage gentle ambient pendular sway
      hangingUnit.style.animation = 'idCardSway 5.5s ease-in-out infinite alternate';
      return;
    }

    swayRafId = requestAnimationFrame(swayStep);
  }

  function onCardClick(e) {
    if (hasEntered) return;
    // Don't trigger sway if clicking the enter button directly
    if (e.target && (e.target === enterBtn || e.target.closest('#id-enter-btn'))) {
      return;
    }

    let direction = 1;
    let power = 16;

    if (e.clientX && idCard) {
      const rect = idCard.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      // Tapping left of center pushes to the right (+ rotation)
      // Tapping right of center pushes to the left (- rotation)
      direction = relX < 0.5 ? 1 : -1;
      const distFromCenter = Math.abs(relX - 0.5) * 2;
      power = 14 + distFromCenter * 8; // 14 to 22 deg/sec impulse
    } else {
      direction = velocity >= 0 ? -1 : 1;
    }

    applyImpulse(direction * power);
  }

  // Pointerdown provides instant tactile response on both desktop and mobile
  idCard.addEventListener('pointerdown', onCardClick);
  hangingUnit.addEventListener('pointerdown', onCardClick);

  function dismissPreloader() {
    if (hasEntered) return;
    hasEntered = true;

    // Cancel physics loop if active
    if (swayRafId) {
      cancelAnimationFrame(swayRafId);
      swayRafId = null;
    }
    hangingUnit.style.transform = '';
    hangingUnit.style.animation = '';

    // Disable button to prevent duplicate clicks
    enterBtn.disabled = true;

    // Trigger physical pull-up animation & backdrop fade
    preloader.classList.add('is-exiting');

    // Trigger existing hero section entrance animations sequence seamlessly
    document.body.classList.add('hero-revealed');

    // Remove window keydown listener
    window.removeEventListener('keydown', handleKeydown);

    // After animation finishes (~800ms)
    setTimeout(() => {
      preloader.setAttribute('inert', '');
      preloader.setAttribute('aria-hidden', 'true');
      preloader.style.display = 'none';
      document.body.classList.remove('preloader-active');

      // Transfer focus to main content for accessibility
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus({ preventScroll: true });
      }
    }, 850);
  }

  // Click handler on button
  enterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dismissPreloader();
  });

  // Global Enter key support
  function handleKeydown(e) {
    if (e.key === 'Enter' || e.code === 'Enter') {
      dismissPreloader();
    }
  }

  window.addEventListener('keydown', handleKeydown);
}

/* --------------------------------------------------------------------------
   NAVIGATION & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navLinksList = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navLinksList) {
    function closeNav() {
      navLinksList.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('mobile-nav-open');
    }

    function toggleNav() {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;
      mobileToggle.setAttribute('aria-expanded', String(newState));
      navLinksList.classList.toggle('open', newState);
      document.body.classList.toggle('mobile-nav-open', newState);
    }

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNav();
    });

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeNav();
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinksList.classList.contains('open') &&
          !navLinksList.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksList.classList.contains('open')) {
        closeNav();
        mobileToggle.focus();
      }
    });
  }
}

/* --------------------------------------------------------------------------
   SCROLLSPY & DYNAMIC NAV STYLING (Light vs Dark Sections)
   -------------------------------------------------------------------------- */
function initScrollspyAndNavTheme() {
  const siteHeader = document.getElementById('site-header');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const darkSectionIds = new Set(['footer']);

  function onScroll() {
    const scrollPos = window.scrollY + 160;

    let currentSectionId = 'home';
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Update active nav link
    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Toggle dark nav styling based on current section
    if (darkSectionIds.has(currentSectionId)) {
      siteHeader.classList.add('nav-on-dark');
    } else {
      siteHeader.classList.remove('nav-on-dark');
    }
  }

  let scrollRafId = null;
  function handleScroll() {
    if (scrollRafId) return;
    scrollRafId = requestAnimationFrame(() => {
      scrollRafId = null;
      onScroll();
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  onScroll(); // initial trigger
}

/* --------------------------------------------------------------------------
   SKILLS TOOLKIT MODAL / REVEAL INTERACTION
   -------------------------------------------------------------------------- */
function initSkillsToolkit() {
  const btnReveal = document.getElementById('btn-reveal-stack');
  const revealedPanel = document.getElementById('revealed-toolkit-panel');
  const btnCloseX = document.getElementById('btn-close-toolkit-x');
  const btnCloseBottom = document.getElementById('btn-close-toolkit-bottom');

  if (!btnReveal || !revealedPanel) return;

  function openToolkit() {
    revealedPanel.classList.add('active');
    if (btnCloseBottom) btnCloseBottom.classList.add('active');
    revealedPanel.setAttribute('aria-hidden', 'false');
    btnReveal.setAttribute('aria-expanded', 'true');
    if (btnCloseX) btnCloseX.focus({ preventScroll: true });
  }

  function closeToolkit() {
    revealedPanel.classList.remove('active');
    if (btnCloseBottom) btnCloseBottom.classList.remove('active');
    revealedPanel.setAttribute('aria-hidden', 'true');
    btnReveal.setAttribute('aria-expanded', 'false');
    btnReveal.focus({ preventScroll: true });
  }

  btnReveal.addEventListener('click', openToolkit);
  if (btnCloseX) btnCloseX.addEventListener('click', closeToolkit);
  if (btnCloseBottom) btnCloseBottom.addEventListener('click', closeToolkit);

  // Close on click outside the panel
  document.addEventListener('click', (e) => {
    if (
      revealedPanel.classList.contains('active') &&
      !revealedPanel.contains(e.target) &&
      !btnReveal.contains(e.target) &&
      (!btnCloseBottom || !btnCloseBottom.contains(e.target))
    ) {
      closeToolkit();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && revealedPanel.classList.contains('active')) {
      closeToolkit();
    }
  });
}

/* --------------------------------------------------------------------------
   HELPER: MOBILE & TOUCH DETECTION (For Parallax & Interactive Physics)
   -------------------------------------------------------------------------- */
function isMobileDevice() {
  return window.innerWidth <= 991 || 
    window.matchMedia('(max-width: 991px)').matches ||
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

/* --------------------------------------------------------------------------
   HERO PARALLAX EFFECT (Mousemove & Scroll - Desktop Only)
   -------------------------------------------------------------------------- */
function initHeroParallax() {
  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const heroSection = document.getElementById('home');
  const giantText = document.querySelector('.hero-giant-text');
  const heroPhoto = document.querySelector('.hero-photo-wrapper');

  if (!heroSection || !giantText || !heroPhoto) return;

  let rafId = null;
  let targetXRatio = 0;
  let targetYRatio = 0;

  function resetHero() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    giantText.style.transform = '';
    heroPhoto.style.transform = '';
  }

  function updateHero() {
    rafId = null;
    if (isMobileDevice()) {
      resetHero();
      return;
    }
    giantText.style.transform = `translateX(calc(-50% + ${targetXRatio * -36}px)) translateY(${targetYRatio * -20}px)`;
    heroPhoto.style.transform = `translateX(calc(-50% + ${targetXRatio * 28}px)) translateY(${targetYRatio * 16}px)`;
  }

  function onMouseMove(e) {
    if (isMobileDevice()) return;
    if (document.body.classList.contains('preloader-active') && !document.body.classList.contains('hero-revealed')) return;
    const rect = heroSection.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    targetXRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    targetYRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    if (!rafId) {
      rafId = requestAnimationFrame(updateHero);
    }
  }

  function onMouseLeave() {
    if (isMobileDevice()) {
      resetHero();
      return;
    }
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    giantText.style.transform = 'translateX(-50%) translateY(0)';
    heroPhoto.style.transform = 'translateX(-50%) translateY(0)';
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave);

  // Clean reset when window resizes or device orientation changes
  window.addEventListener('resize', () => {
    if (isMobileDevice()) {
      resetHero();
    }
  }, { passive: true });

  // Initial check
  if (isMobileDevice()) {
    resetHero();
  }
}

/* --------------------------------------------------------------------------
   ABOUT PARALLAX & HOVER EFFECT (Photo & Surrounding Texts - Desktop Only)
   -------------------------------------------------------------------------- */
function initAboutParallax() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const aboutSection = document.getElementById('about');
  const aboutPhoto = document.querySelector('.about-photo-wrapper');
  const ghostText = document.querySelector('.about-ghost-text');

  if (!aboutSection || !aboutPhoto) return;

  const calloutPairs = [
    {
      el: document.querySelector('.callout-group.callout-iskolar'),
      factorX: 16,
      factorY: 10
    },
    {
      el: document.querySelector('.callout-group.callout-designer'),
      factorX: 20,
      factorY: -12
    },
    {
      el: document.querySelector('.callout-group.callout-bsit'),
      factorX: 14,
      factorY: -10
    },
    {
      el: document.querySelector('.callout-group.callout-frontend'),
      factorX: 18,
      factorY: 12
    }
  ];

  let aboutRafId = null;
  let aboutXRatio = 0;
  let aboutYRatio = 0;

  function resetAbout() {
    if (aboutRafId) {
      cancelAnimationFrame(aboutRafId);
      aboutRafId = null;
    }
    aboutPhoto.style.transform = '';
    if (ghostText) ghostText.style.transform = '';
    calloutPairs.forEach(pair => {
      if (pair.el) pair.el.style.transform = '';
    });
  }

  function updateAbout() {
    aboutRafId = null;
    if (isMobileDevice()) {
      resetAbout();
      return;
    }
    aboutPhoto.style.transform = `translateX(${aboutXRatio * 18}px) translateY(${aboutYRatio * 12}px)`;
    if (ghostText) {
      ghostText.style.transform = `translateX(${aboutXRatio * -24}px) translateY(${aboutYRatio * -16}px)`;
    }
    calloutPairs.forEach(pair => {
      const tx = aboutXRatio * pair.factorX;
      const ty = aboutYRatio * pair.factorY;
      if (pair.el) pair.el.style.transform = `translate(${tx}px, ${ty}px)`;
    });
  }

  function onAboutMouseMove(e) {
    if (isMobileDevice()) return;
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    aboutXRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    aboutYRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    if (!aboutRafId) {
      aboutRafId = requestAnimationFrame(updateAbout);
    }
  }

  function onAboutMouseLeave() {
    if (isMobileDevice()) {
      resetAbout();
      return;
    }
    if (aboutRafId) {
      cancelAnimationFrame(aboutRafId);
      aboutRafId = null;
    }
    aboutPhoto.style.transform = 'translate(0, 0)';
    if (ghostText) ghostText.style.transform = 'translate(0, 0)';
    calloutPairs.forEach(pair => {
      if (pair.el) pair.el.style.transform = 'translate(0, 0)';
    });
  }

  window.addEventListener('mousemove', onAboutMouseMove, { passive: true });
  document.addEventListener('mouseleave', onAboutMouseLeave);

  // Clean reset when window resizes or device orientation changes
  window.addEventListener('resize', () => {
    if (isMobileDevice()) {
      resetAbout();
    }
  }, { passive: true });

  // Initial check
  if (isMobileDevice()) {
    resetAbout();
  }
}

/* --------------------------------------------------------------------------
   ABOUT SECTION SCROLL-IN ANIMATION
   -------------------------------------------------------------------------- */
function initAboutScrollReveal() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('in-view');
        observer.unobserve(aboutSection);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(aboutSection);

  // Clear animations once completed so hover states and transforms are 100% free
  aboutSection.addEventListener('animationend', (e) => {
    e.target.style.animation = 'none';
    e.target.style.opacity = '1';
    if (!e.target.classList.contains('about-ghost-text') && !e.target.classList.contains('about-photo-wrapper')) {
      e.target.style.transform = '';
    }
  });
}

/* --------------------------------------------------------------------------
   EDUCATION SECTION SCROLL-IN ANIMATION
   -------------------------------------------------------------------------- */
function initEducationScrollReveal() {
  const eduSection = document.getElementById('education');
  if (!eduSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        eduSection.classList.add('in-view');
        observer.unobserve(eduSection);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(eduSection);

  // Clear animations once completed so hover state on .edu-card works seamlessly
  eduSection.addEventListener('animationend', (e) => {
    e.target.style.animation = 'none';
    e.target.style.opacity = '1';
    e.target.style.transform = '';
  });
}

/* --------------------------------------------------------------------------
   SKILLS SECTION SCROLL-IN ANIMATION
   -------------------------------------------------------------------------- */
function initSkillsScrollReveal() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillsSection.classList.add('in-view');
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(skillsSection);

  // Clear animations once completed so hover states and transforms are 100% free
  skillsSection.addEventListener('animationend', (e) => {
    e.target.style.animation = 'none';
    e.target.style.opacity = '1';
    e.target.style.transform = '';
  });
}

/* --------------------------------------------------------------------------
   PROJECTS SECTION SCROLL-IN ANIMATION
   -------------------------------------------------------------------------- */
function initProjectsScrollReveal() {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectsSection.classList.add('in-view');
        observer.unobserve(projectsSection);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(projectsSection);

  // Clear animations once completed so hover states on project cards are 100% free
  projectsSection.addEventListener('animationend', (e) => {
    e.target.style.animation = 'none';
    e.target.style.opacity = '1';
    e.target.style.transform = '';
  });
}

/* --------------------------------------------------------------------------
   PROJECTS SECTION INTERACTIVE CAROUSEL
   Adapted from Experience Gallery behavior with precision snapping,
   boundary clamping, live counter & pagination dots.
   -------------------------------------------------------------------------- */
function initProjectsCarousel() {
  const carousel = document.getElementById('projects-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('#projects-track');
  const prevBtn = carousel.querySelector('#projects-prev-btn');
  const nextBtn = carousel.querySelector('#projects-next-btn');
  const counterEl = carousel.querySelector('#projects-current-num');
  const dots = carousel.querySelectorAll('.project-dot');
  const slides = carousel.querySelectorAll('.project-slide');

  if (!track || !slides.length) return;

  function getSlideStep() {
    const firstSlide = slides[0];
    if (!firstSlide) return 400;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap) || 24;
    return firstSlide.offsetWidth + gap;
  }

  function updateCarouselState() {
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const scrollLeft = track.scrollLeft;

    // Boundary checks with 4px tolerance
    const atStart = scrollLeft <= 4;
    const atEnd = scrollLeft >= maxScroll - 6 || maxScroll <= 4;

    if (prevBtn) {
      prevBtn.disabled = atStart;
      prevBtn.classList.toggle('is-disabled', atStart);
    }

    if (nextBtn) {
      nextBtn.disabled = atEnd;
      nextBtn.classList.toggle('is-disabled', atEnd);
    }

    // Determine current active slide based on scroll offset
    const step = getSlideStep();
    let activeIndex = Math.round(scrollLeft / step);
    if (atEnd) {
      activeIndex = slides.length - 1;
    } else if (atStart) {
      activeIndex = 0;
    }
    activeIndex = Math.max(0, Math.min(slides.length - 1, activeIndex));

    // Update numerical counter (e.g. "01")
    if (counterEl) {
      const displayNum = String(activeIndex + 1).padStart(2, '0');
      if (counterEl.textContent !== displayNum) {
        counterEl.textContent = displayNum;
      }
    }

    // Update pagination dots
    dots.forEach((dot, idx) => {
      const isActive = idx === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  }

  // Previous Button
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const step = getSlideStep();
      track.scrollBy({ left: -step, behavior: 'smooth' });
    });
  }

  // Next Button
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const step = getSlideStep();
      track.scrollBy({ left: step, behavior: 'smooth' });
    });
  }

  // Pagination Dots
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      if (isNaN(targetIndex) || !slides[targetIndex]) return;

      const targetSlide = slides[targetIndex];
      const targetLeft = targetSlide.offsetLeft - track.offsetLeft;
      track.scrollTo({ left: targetLeft, behavior: 'smooth' });
    });
  });

  // Scroll Listener with rAF throttling
  let ticking = false;
  track.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateCarouselState();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Keyboard navigation when carousel container has focus
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      track.scrollBy({ left: -getSlideStep(), behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      track.scrollBy({ left: getSlideStep(), behavior: 'smooth' });
    }
  });

  window.addEventListener('resize', updateCarouselState, { passive: true });

  // Initial calculation
  updateCarouselState();
}

/* --------------------------------------------------------------------------
   EXPERIENCE SECTION SCROLL-IN ANIMATION
   -------------------------------------------------------------------------- */
function initExperienceScrollReveal() {
  const expSection = document.getElementById('experience');
  if (!expSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        expSection.classList.add('in-view');
        observer.unobserve(expSection);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(expSection);

  // Clear animations once completed so row styles and hovers are 100% free
  expSection.addEventListener('animationend', (e) => {
    if (e.target && (e.target.classList.contains('experience-row') || e.target.classList.contains('section-num') || e.target.classList.contains('slash') || e.target.classList.contains('section-title-text') || e.target.classList.contains('section-subtitle'))) {
      e.target.style.animation = 'none';
      e.target.style.opacity = '1';
      e.target.style.transform = '';
    }
  });
}

/* --------------------------------------------------------------------------
   EXPERIENCE SECTION INTERACTIVE ACCORDION
   -------------------------------------------------------------------------- */
function initExperienceAccordion() {
  const accordionContainer = document.getElementById('experience-accordion');
  if (!accordionContainer) return;

  const rows = accordionContainer.querySelectorAll('.experience-row');

  rows.forEach(row => {
    const trigger = row.querySelector('.exp-accordion-trigger');
    const panel = row.querySelector('.exp-collapse');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyExpanded = row.classList.contains('is-expanded');

      // Close all other accordion rows (single-open accordion rule)
      rows.forEach(otherRow => {
        if (otherRow !== row && otherRow.classList.contains('is-expanded')) {
          closeAccordionRow(otherRow);
        }
      });

      // Toggle this clicked row
      if (isCurrentlyExpanded) {
        closeAccordionRow(row);
      } else {
        openAccordionRow(row);
      }
    });
  });
}

function openAccordionRow(row) {
  row.classList.add('is-expanded');
  const trigger = row.querySelector('.exp-accordion-trigger');
  const panel = row.querySelector('.exp-collapse');
  if (trigger) {
    trigger.setAttribute('aria-expanded', 'true');
  }
  if (panel) {
    panel.removeAttribute('inert');
    panel.setAttribute('aria-hidden', 'false');
  }

  // Update gallery arrow states once accordion finishes opening
  const gallery = row.querySelector('.exp-gallery');
  if (gallery && typeof gallery._updateArrows === 'function') {
    setTimeout(() => gallery._updateArrows(), 80);
    setTimeout(() => gallery._updateArrows(), 320);
  }
}

function closeAccordionRow(row) {
  row.classList.remove('is-expanded');
  const trigger = row.querySelector('.exp-accordion-trigger');
  const panel = row.querySelector('.exp-collapse');
  if (trigger) {
    trigger.setAttribute('aria-expanded', 'false');
  }
  if (panel) {
    panel.setAttribute('inert', '');
    panel.setAttribute('aria-hidden', 'true');
  }
}

/* --------------------------------------------------------------------------
   EXPERIENCE MINIMALIST HORIZONTAL IMAGE STRIP GALLERY
   Smooth scrolling photo strip with discreet external arrow controls,
   native mobile swipe support, and keyboard navigation.
   -------------------------------------------------------------------------- */
function initExperienceGalleries() {
  const galleries = document.querySelectorAll('.exp-gallery');
  galleries.forEach(setupExperienceGallery);
}

function setupExperienceGallery(galleryEl) {
  const strip = galleryEl.querySelector('.gallery-strip');
  const prevBtn = galleryEl.querySelector('.gallery-prev');
  const nextBtn = galleryEl.querySelector('.gallery-next');

  if (!strip) return;

  function getScrollStep() {
    const firstItem = strip.querySelector('.gallery-item');
    if (firstItem) {
      const style = window.getComputedStyle(strip);
      const gap = parseFloat(style.columnGap || style.gap) || 18;
      return firstItem.offsetWidth + gap;
    }
    return 320;
  }

  function updateArrowStates() {
    if (!strip) return;
    const maxScroll = strip.scrollWidth - strip.clientWidth;
    if (maxScroll <= 4) {
      if (prevBtn) {
        prevBtn.disabled = true;
        prevBtn.classList.add('is-disabled');
      }
      if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.classList.add('is-disabled');
      }
      return;
    }

    const current = strip.scrollLeft;
    const atStart = current <= 4;
    const atEnd = current >= maxScroll - 4;

    if (prevBtn) {
      prevBtn.disabled = atStart;
      prevBtn.classList.toggle('is-disabled', atStart);
    }
    if (nextBtn) {
      nextBtn.disabled = atEnd;
      nextBtn.classList.toggle('is-disabled', atEnd);
    }
  }

  // Previous arrow button
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const step = getScrollStep();
      strip.scrollBy({ left: -step, behavior: 'smooth' });
    });
  }

  // Next arrow button
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const step = getScrollStep();
      strip.scrollBy({ left: step, behavior: 'smooth' });
    });
  }

  // Scroll listener to update arrow disabled states
  let ticking = false;
  strip.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateArrowStates();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Keyboard navigation when gallery has focus
  galleryEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      strip.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      strip.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    }
  });

  // Expose updater for when accordion row expands or viewport resizes
  galleryEl._updateArrows = updateArrowStates;

  window.addEventListener('resize', updateArrowStates, { passive: true });

  // Initial check
  updateArrowStates();
}

/* --------------------------------------------------------------------------
   CONTACT SECTION SCROLL-IN ANIMATION
   -------------------------------------------------------------------------- */
function initContactScrollReveal() {
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add('in-view');
        observer.unobserve(contactSection);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(contactSection);

  // Clear animations once completed so button hover and focus states are 100% free
  contactSection.addEventListener('animationend', (e) => {
    e.target.style.animation = 'none';
    if (!e.target.classList.contains('contact-ghost-text')) {
      e.target.style.opacity = '1';
      e.target.style.transform = '';
    }
  });
}

/* --------------------------------------------------------------------------
   ABOUT PHOTO CLICK TO REVEAL CALLOUTS
   -------------------------------------------------------------------------- */
function initAboutPhotoClick() {
  const visualCol = document.querySelector('.about-visual-col');
  const photoWrapper = document.querySelector('.about-photo-wrapper');

  if (!visualCol || !photoWrapper) return;

  photoWrapper.setAttribute('role', 'button');
  photoWrapper.setAttribute('tabindex', '0');
  photoWrapper.setAttribute('aria-expanded', 'false');
  photoWrapper.setAttribute('title', 'Click portrait to toggle annotations');

  photoWrapper.addEventListener('click', () => {
    visualCol.classList.toggle('callouts-active');
    const isExpanded = visualCol.classList.contains('callouts-active');
    photoWrapper.setAttribute('aria-expanded', isExpanded);
  });

  photoWrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      photoWrapper.click();
    }
  });
}

/* --------------------------------------------------------------------------
   CONTACT FORM HANDLER & LIVE CHARACTER COUNTER
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 500`;
      if (len >= 500) {
        charCounter.style.color = '#D66C94';
        charCounter.style.fontWeight = 'bold';
      } else {
        charCounter.style.color = '#9E9696';
        charCounter.style.fontWeight = 'normal';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showToast('Please fill out all required fields (*).', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
      }

      // Simulated success feedback
      showToast('Thank you! Your message has been sent successfully.', 'success');
      form.reset();
      if (charCounter) charCounter.textContent = '0 / 500';
    });
  }
}

/* Toast message helper */
function showToast(msg, type = 'success') {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translate(-50%, 20px);
      max-width: min(440px, calc(100vw - 32px));
      width: max-content;
      text-align: center;
      background: #D66C94;
      color: #fff;
      padding: 14px 24px;
      border-radius: 999px;
      font-family: var(--font-body);
      font-size: 15px;
      font-weight: 600;
      line-height: 1.35;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 99999;
      transition: opacity 300ms ease, transform 300ms ease;
      opacity: 0;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.backgroundColor = type === 'error' ? '#C0261A' : '#D66C94';
  toast.style.opacity = '1';
  toast.style.transform = 'translate(-50%, 0)';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 20px)';
  }, 4000);
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach((el, index) => {
    // Subtle staggered delay
    el.style.transitionDelay = `${(index % 4) * 70}ms`;
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   RESUME LINK HANDLER
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const resumeBtns = document.querySelectorAll('#btn-view-resume, .btn-resume');
  if (!resumeBtns.length) return;

  resumeBtns.forEach(btn => {
    btn.setAttribute('href', 'assets/resume/Rhea_Mae_Narag_Resume.pdf');
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

/* --------------------------------------------------------------------------
   WORK WITH ME & GMAIL COMPOSE WITH SMART MULTI-DEVICE FALLBACK
   -------------------------------------------------------------------------- */
function initEmailButtons() {
  const email = 'rhea.narag22@gmail.com';
  const subject = 'Collaboration / Project Inquiry — Rhea Narag Portfolio';
  const body = 'Hi Rhea,\n\nI came across your portfolio and would love to discuss a project / collaboration opportunity with you.\n\n[Project details / timeline / inquiries]\n\nLooking forward to hearing from you!\n\nBest regards,';

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const workWithMeBtn = document.getElementById('btn-work-with-me');
  const footerGmailBtn = document.getElementById('footer-btn-gmail');

  const buttons = [workWithMeBtn, footerGmailBtn].filter(Boolean);

  buttons.forEach(btn => {
    btn.setAttribute('href', gmailUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');

    btn.addEventListener('click', () => {
      // 1. Copy email address to clipboard as immediate convenience
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }

      // 2. Helpful toast notification
      showToast('Opening Gmail draft... (Email copied: rhea.narag22@gmail.com)', 'success');
    });
  });
}
