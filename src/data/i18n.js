// Centralized i18n strings and helpers (no external deps)

export const SUPPORTED_LOCALES = /** @type {const} */ (['es', 'en'])

export const DEFAULT_LOCALE = 'es'

export function normalizeLocale(input) {
  const s = String(input ?? '').trim().toLowerCase()
  if (!s) return DEFAULT_LOCALE
  // 'es-ES' -> 'es'
  const base = s.split('-')[0]
  return SUPPORTED_LOCALES.includes(base) ? base : DEFAULT_LOCALE
}

export function getSystemLocale() {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE
  return normalizeLocale(navigator.language || navigator.languages?.[0])
}

export function getInitialLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage?.getItem('locale')
  if (stored) return normalizeLocale(stored)
  return getSystemLocale()
}

export const STRINGS = {
  es: {
    topbar: {
      navLabel: 'Navegación principal',
      themeToggleLabel: 'Cambiar tema',
      localeToggleLabel: 'Cambiar idioma',
      localeShort: 'ES',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contactar',
    },
    footer: {
      madeWith: 'Hecho con React + Vite',
      backToTop: 'Volver arriba',
    },
    hero: {
      eyebrow: 'Fullstack · Mobile · QA',
      titlePrefix: 'Hola, soy',
      lead: 'Desarrollo aplicaciones Android escalables combinando automatización de testing y visión full-cycle del software.',
      ctaProjects: 'Explorar proyectos',
      ctaContact: 'Hablemos',
      highlightsLabel: 'Puntos clave',
      highlights: [
        'Kotlin, Jetpack Compose, MVVM y Clean architecture para apps escalables.',
        'Testing automatizado y frameworks reutilizables orientados a valor.',
        'APIs REST, Spring Boot y foco en rendimiento y estabilidad.',
      ],
      terminal: {
        command: 'javac HelloWorld.java && java HelloWorld',
        status: 'building…',
        ok: '✓ Hello, world!',
      },
    },
    about: {
      title: 'Sobre mí',
      intro:
        'Soy desarrollador Android especializado en aplicaciones nativas con Kotlin y Jetpack Compose. Trabajo con foco en arquitectura limpia, calidad de código y automatización de testing, participando en todo el ciclo de desarrollo, desde el diseño técnico hasta la entrega al cliente.',
      cards: [
        {
          title: 'Android & Arquitectura',
          text:
            'Desarrollo de aplicaciones Android con Kotlin y Jetpack compose, aplicando MVVM y Clean Architecture para crear soluciones mantenibles, escalables y fáciles de evolucionar.',
        },
        {
          title: 'Calidad y testing',
          text:
            'Experiencia en testing automatizado con Selenium, JUnit y Cucumber. Diseño de frameworks reutilizables y tests donde realmente aportan valor al producto.',
        },
        {
          title: 'Visión full-cycle',
          text:
            'Experiencia trabajando con APIs REST, backend en Spring Boot y despliegues con Docker, priorizando rendimiento, estabilidad y una buena experiencia de usuario.',
        },
      ],
    },
    experience: {
      title: 'Experiencia profesional',
      subtitle: 'Añade aquí tu experiencia real. Esto es un ejemplo de timeline (placeholder) para que lo edites.',
      ariaLabel: 'Experiencia',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Ejemplos (placeholder). Sustituye por tus repos y demos.',
      ariaOpenRepo: 'abrir repositorio',
      ctaRepo: 'Ver repo',
      ariaTech: 'Tecnologías',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Una mezcla de frontend, tooling y entrega de producto.',
    },
    contact: {
      title: '¿Trabajamos juntos?',
      subtitle: 'Escríbeme y cuéntame qué necesitas. Respondo rápido.',
      srLinkedIn: 'LinkedIn',
      srGitHub: 'GitHub',
      srEmail: 'Email',
    },
  },
  en: {
    topbar: {
      navLabel: 'Primary navigation',
      themeToggleLabel: 'Toggle theme',
      localeToggleLabel: 'Toggle language',
      localeShort: 'EN',
      ctaProjects: 'View projects',
      ctaContact: 'Contact',
    },
    footer: {
      madeWith: 'Built with React + Vite',
      backToTop: 'Back to top',
    },
    hero: {
      eyebrow: 'Fullstack · Mobile · QA',
      titlePrefix: "Hi, I'm",
      lead: 'I build scalable Android apps combining test automation and a full-cycle software mindset.',
      ctaProjects: 'Explore projects',
      ctaContact: "Let's talk",
      highlightsLabel: 'Highlights',
      highlights: [
        'Kotlin, Jetpack Compose, MVVM and Clean Architecture for scalable apps.',
        'Test automation and reusable frameworks focused on real value.',
        'REST APIs, Spring Boot, and a focus on performance and stability.',
      ],
      terminal: {
        command: 'javac HelloWorld.java && java HelloWorld',
        status: 'building…',
        ok: '✓ Hello, world!',
      },
    },
    about: {
      title: 'About me',
      intro:
        "I'm an Android developer specialized in native apps with Kotlin and Jetpack Compose. I focus on clean architecture, code quality, and test automation, and I work across the full development lifecycle—from technical design to delivery.",
      cards: [
        {
          title: 'Android & Architecture',
          text:
            'Android development with Kotlin and Jetpack Compose, applying MVVM and Clean Architecture to create maintainable, scalable solutions.',
        },
        {
          title: 'Quality & testing',
          text:
            'Experience with test automation using Selenium, JUnit and Cucumber. I design reusable frameworks and tests that truly add product value.',
        },
        {
          title: 'Full-cycle mindset',
          text:
            'Experience working with REST APIs, Spring Boot backend and Docker deployments, prioritizing performance, stability, and user experience.',
        },
      ],
    },
    experience: {
      title: 'Professional experience',
      subtitle: 'Add your real experience here. This is a placeholder timeline you can edit.',
      ariaLabel: 'Experience',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Examples (placeholder). Replace with your repos and demos.',
      ariaOpenRepo: 'open repository',
      ctaRepo: 'View repo',
      ariaTech: 'Technologies',
    },
    skills: {
      title: 'Skills',
      subtitle: 'A mix of frontend, tooling, and product delivery.',
    },
    contact: {
      title: "Let's work together?",
      subtitle: "Send me a message and tell me what you need. I reply fast.",
      srLinkedIn: 'LinkedIn',
      srGitHub: 'GitHub',
      srEmail: 'Email',
    },
  },
}

export function t(locale) {
  const loc = normalizeLocale(locale)
  return STRINGS[loc] ?? STRINGS[DEFAULT_LOCALE]
}
