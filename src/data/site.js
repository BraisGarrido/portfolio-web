export const SECTIONS = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contacto' },
]

export const PROJECTS = [
  {
    title: 'Framework de QA testing',
    desc: 'Framework de QA testing en una web de prueba con Selenium, Cucumber',
    tags: ['Cucumber', 'Selenium', 'Java'],
    repoUrl: 'https://github.com/BraisGarrido/QAWebTest',
  },
  {
    title: 'App de prueba en Android',
    desc: 'App de prueba de consumo de una API pública en Android',
    tags: ['Android', 'Postman', 'Jetpack Compose', 'Kotlin', 'REST API'],
    repoUrl: '#',
  },
]

export const EXPERIENCE = [
  {
    role: 'Associate software Engineer',
    date: '2024 · Actualidad',
    company: 'Capgemini Engineering',
    desc: 'Desarrollador en una amplia variedad de proyectos',
    bullets: [
      'Desarrollo completo de una aplicación Android interna usando Kotlin, Jetpack Compose y MVVM.',
      'Comunicación directa con el cliente y gestión de entregas.',
      'Diseño de framework de testing automatizado reutilizado por varios equipos.',
      'Participación en proyecto backend con Spring Boot y extracción de datos mediante IA'
    ],
  },
  {
    role: 'Junior Android Developer',
    date: '2023',
    company: 'Sixtema',
    desc: 'Desarrollador Android',
    bullets: [
      'Desarrollo de aplicación Android interna en equipo',
      'Testing unitario y control de calidad de código'
    ],
  },
  {
    role: 'Java & web developer',
    date: '2022 - 2023',
    company: 'Driver',
    desc: 'Desarrollo en Java y automatización de testing web con Selenium',
  },
]

export const SKILL_GROUPS = [
  {
    label: 'Mobile development',
    items: ['Kotlin', 'Jetpack compose', 'Clena architecture', 'Android Studio', 'MVVM'],
  },
  {
    label: 'Testing & quality',
    items: ['Selenium', 'JUnit', 'Cucumber', 'Testing automatizado'],
  },
  {
    label: 'Backend & DevOps',
    items: ['Spring Boot', 'RESt APIs', 'Docker', 'PostgreSQL'],
  },
  {
    label: 'Tools & workflow',
    items: ['Git/GitHub/GitLab', 'Agile/Scrum', 'Postman'],
  },
]

export const CONTACT_LINKS = {
  linkedin: 'https://www.linkedin.com/in/brais-garrido',
  github: 'https://github.com/BraisGarrido',
  email: 'braisgb@gmail.com',
}
