import type { TranslationSchema } from "./fr";

/**
 * Dictionnaire anglais. `satisfies TranslationSchema` garantit la parité
 * structurelle avec fr.ts : clé manquante ou en trop = erreur de compilation.
 *
 * « AMO » (assistance à maîtrise d'ouvrage) est rendu par « owner's project
 * management assistance », l'usage le plus courant en immobilier d'entreprise.
 * Les données invariantes (SIRET, adresses, coordonnées) restent identiques.
 */
const en = {
  nav: {
    accueil: "Home",
    apropos: "About",
    services: "Advisory",
    localisation: "Location",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    baseline: "Owner’s project management assistance & corporate real estate consulting",
    sectors: "Offices · Hospitality · Retail",
    scrollAria: "Scroll to about section",
  },
  about: {
    title: "An independent firm",
    intro: [
      "Founded in 2025, Galland Group is an independent firm specialised in supporting project owners on high-stakes real estate projects.",
      "We act in project management and advisory roles, with a permanent core and a network of consultants, engineering offices and specialised partners mobilised according to the needs of each operation.",
    ],
    values:
      "Rigour, high standards, efficiency, the quality of human relationships and a deep understanding of end uses: this is the foundation of our commitment.",
    motto: "Quality through high standards.",
    portraitAlt: "Guillaume Galland, founder of Galland Group",
  },
  services: {
    title: "How we support you",
    subtitle:
      "From initial scoping to handover, support for the project owner at every stage",
    anyStage:
      "Whether for a single phase or the entire project, we can step in at any of these stages, depending on your needs.",
    // RIBA Plan of Work stages, mirroring the French MOP phases (fr.ts).
    phases: [
      { code: "RIBA 0", label: "Strategic Definition" },
      { code: "RIBA 1", label: "Preparation & Briefing" },
      { code: "RIBA 2", label: "Concept Design" },
      { code: "RIBA 3", label: "Spatial Coordination" },
      { code: "RIBA 4", label: "Technical Design" },
      { code: "RIBA 5", label: "Construction" },
      { code: "RIBA 6", label: "Handover" },
    ],
    items: [
      {
        phase: "RIBA 0–2",
        title: "Scoping & Analysis",
        description:
          "We take part in analysing site constraints, project objectives and technical and economic assumptions. This step sets a clear framework to anticipate risks and secure decisions from the earliest stages, while fitting into the client's methods and standards.",
      },
      {
        phase: "RIBA 3–4",
        title: "Technical design support",
        description:
          "We strengthen your project teams by reviewing and validating technical and regulatory studies. We contribute to coordinating technical stakeholders and analysing tender documents, integrating into your existing processes and practices.",
      },
      {
        phase: "RIBA 5",
        title: "Construction phase monitoring",
        description:
          "We assist the project owner throughout execution: reviewing the schedule and progress statements, flagging deviations, arbitrating changes and their cost and time implications. We remain the owner's point of contact with the parties already in place, without substituting for them.",
      },
      {
        phase: "RIBA 6",
        title: "Handover and project close-out",
        description:
          "We assist your teams with pre-handover inspections, clearing punch-list items and consolidating close-out documentation. We also take part in commissioning and in the administrative and technical closure of the project, making sure the work of your teams and contractors is properly finalised.",
      },
    ],
    copro: {
      title: "Co-ownership and common areas",
      description:
        "We support co-owners' associations and their managing agents in framing a works programme: defining the scope, budget, phasing and schedule, consulting contractors, and preparing the votes for general meetings. A single point of contact between the owners' council, the managing agent and the contractors.",
    },
  },
  localisation: {
    title: "Where we work",
    p1: "We are based in Paris, which allows us to respond quickly on your projects in the Île-de-France region.",
    p2: "Originally from the South-East of France, our team also has strong local roots there, making it easy to follow projects in that region and stay close to local players.",
    p3: "Our organisation allows us to work anywhere in France as well as internationally — Switzerland, Frankfurt, Warsaw, Amsterdam — depending on the needs of your projects. We can operate flexibly:",
    bullets: [
      "on-site presence at critical moments,",
      "direct support to your teams in your offices,",
      "targeted remote involvement for monitoring and document review.",
    ],
    mapAlt: "Map of Galland Group's areas of operation in France and Europe",
  },
  portfolio: {
    title: "Our references",
    subtitle:
      "A look at some of the projects we are currently working on",
    items: [
      {
        title: "Heineken",
        description:
          "Owner's PM assistance - Refurbishment of the Heineken France head office in Rueil-Malmaison, 7,500 sqm",
      },
      {
        title: "Artelia",
        description:
          "Construction phase monitoring – Renovation of MV electrical substations",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Tell us about your project and we will see together how we can help",
    getInTouch: "Get in Touch",
    emailLabel: "Email",
    placeholders: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone number",
      message: "Tell us about your project...",
    },
    rgpd: "Your data is collected by Guillaume Galland in order to answer your request and is kept for as long as necessary to process it. You have the right to access, rectify, delete and object to the processing of your data by writing to <mailLink>contact@guillaumegalland.com</mailLink>. To learn more, see our <legalLink>legal notice</legalLink>.",
    submit: "Send message",
    reply72h: "We answer every enquiry ourselves, within 72 hours.",
    toastSuccess: "Thank you for your message! We will get back to you very soon.",
    toastError:
      "An error occurred while sending your message. Please try again later.",
  },
  footer: {
    country: "France",
    legalLink: "Legal Notice",
    rights: "All rights reserved.",
    lastUpdated: "Last updated: {{date}}",
  },
  legal: {
    seo: {
      title: "Legal notice — Galland Group",
      description:
        "Legal notice of guillaumegalland.com: publisher, hosting, intellectual property, personal data and cookies.",
    },
    title: "Legal Notice",
    subtitle: "Legal information and privacy policy",
    backHome: "← Back to home",
    editor: {
      title: "1. Website publisher",
      intro: "This website is published by:",
      rows: [
        { label: "Name", value: "Guillaume Galland" },
        {
          label: "Legal status",
          value: "Micro-entreprise (French sole proprietorship)",
        },
        { label: "Registered office", value: "48 rue de Malte, 75011 Paris, France" },
        { label: "SIRET (French company ID)", value: "92745621000016" },
        { label: "APE code", value: "7112b" },
      ],
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    director: {
      title: "2. Publication director",
      body: "The publication director of this website is Guillaume Galland, in his capacity as founder of the micro-entreprise.",
    },
    hosting: {
      title: "3. Hosting",
      intro: "This website is hosted by:",
      rows: [
        { label: "Host", value: "Vercel" },
        {
          label: "Address",
          value: "340 S Lemon Ave #4133, Walnut, CA 91789, United States",
        },
        { label: "Contact", value: "privacy@vercel.com — https://vercel.com" },
      ],
    },
    ip: {
      title: "4. Intellectual property",
      paragraphs: [
        "All content on this website (texts, images, photographs, graphics, logos, icons, videos, sounds, as well as their layout) is the exclusive property of Guillaume Galland or his partners, and is protected by French and international intellectual property laws.",
        "Any reproduction, representation, modification, publication, adaptation or exploitation of all or part of the elements of this website, by any process and on any medium whatsoever, is prohibited without the prior written authorisation of Guillaume Galland. Any unauthorised use of the website or of any of its elements will be considered an infringement and prosecuted in accordance with articles L.335-2 et seq. of the French Intellectual Property Code.",
      ],
    },
    privacy: {
      title: "5. Personal data",
      intro:
        "In accordance with the General Data Protection Regulation (GDPR — Regulation EU 2016/679) and the French Data Protection Act of 6 January 1978 as amended, the personal data you submit through the contact form (name, email address, phone number, message content) is collected by Guillaume Galland.",
      items: [
        {
          label: "Purpose",
          value:
            "to answer your contact request and, where applicable, to follow up on any business relationship that may result from it.",
        },
        {
          label: "Legal basis",
          value:
            "your express consent, given by voluntarily submitting the form.",
        },
        {
          label: "Retention period",
          value:
            "the data is kept for the time strictly necessary to process your request, then archived or deleted in accordance with the applicable legal obligations.",
        },
        {
          label: "Recipients",
          value:
            "your data is intended exclusively for Guillaume Galland. The form is processed through the Formspree service, which acts as a data processor.",
        },
      ],
      rightsLabel: "Your rights",
      rights:
        "you have the right to access, rectify, delete, object to, restrict the processing of, and port your data. You can exercise these rights by writing to <mailLink>contact@guillaumegalland.com</mailLink>.",
      cnil: "You also have the right to lodge a complaint with the French data protection authority (CNIL — <cnilLink>www.cnil.fr</cnilLink>) if you consider that the processing of your data does not comply with the applicable regulations.",
    },
    cookies: {
      title: "6. Cookies",
      body: "This website does not use any cookies, whether for audience measurement, advertising or issued by third parties. No information is stored on or read from your device while you browse.",
    },
    law: {
      title: "7. Governing law and jurisdiction",
      body: "This legal notice is governed by French law. In the event of a dispute and failing an amicable resolution, the French courts shall have exclusive jurisdiction.",
    },
    contact: {
      title: "8. Contact",
      body: "For any question regarding this legal notice or the exercise of your rights, you can write to <mailLink>contact@guillaumegalland.com</mailLink>.",
    },
  },
  seo: {
    home: {
      title: "Galland Group, owner’s PM assistance & corporate real estate consulting",
      description:
        "Owner's project management assistance and corporate real estate consulting. We support project owners on office, hospitality and retail projects across France and Europe, from initial scoping to handover.",
    },
    jsonLd: {
      jobTitle:
        "Founder, owner's project management assistance and corporate real estate consulting",
      description:
        "Owner's project management assistance and corporate real estate consulting for office, hospitality and retail projects.",
      knowsAbout: [
        "Owner's project management assistance",
        "Office real estate",
        "Hospitality",
        "Retail",
        "Co-ownership",
        "Technical due diligence",
        "Data centers",
        "Project management",
        "Construction",
      ],
    },
  },
} satisfies TranslationSchema;

export default en;
