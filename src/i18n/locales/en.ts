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
    services: "Services",
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
    title: "AN INDEPENDENT FIRM",
    intro: [
      "Founded in 2025, GALLAND GROUP is an independent firm specialised in supporting construction-industry players on high-stakes real estate projects.",
      "Positioned as a trusted partner, GALLAND GROUP works alongside existing organisations, with an agile, rigorous and hands-on approach.",
      "Accustomed to working with leading consulting and project-management firms, GALLAND GROUP integrates naturally into the teams in place, respecting their methods, tools and project standards.",
      "The firm relies on a qualified network of consultants, engineering offices and specialised partners, ensuring it can adapt quickly to complex situations and to the shifting conditions of the real estate market.",
    ],
    values:
      "Rigour, high standards, efficiency, the quality of human relationships and a deep understanding of end uses form the foundation of GALLAND GROUP's commitment.",
    motto: "Quality through high standards.",
    portraitAlt: "Guillaume Galland, founder of Galland Group",
  },
  services: {
    title: "FROM IDEA TO DELIVERY",
    subtitle:
      "Comprehensive expertise to bring your most ambitious projects to life",
    items: [
      {
        title: "Scoping & Analysis",
        description:
          "I take part in analysing site constraints, project objectives and technical and economic assumptions. This step sets a clear framework to anticipate risks and secure decisions from the earliest stages, while fitting into the client's methods and standards.",
      },
      {
        title: "Technical design support",
        description:
          "I strengthen your project teams by reviewing and validating technical and regulatory studies. I contribute to coordinating technical stakeholders and analysing tender documents, integrating into your existing processes and practices.",
      },
      {
        title: "Construction phase monitoring",
        description:
          "I work operationally alongside your teams to monitor contractors and coordinate technical work packages. I support schedule management and cost control, and help identify and resolve critical issues while respecting your organisation.",
      },
      {
        title: "Handover and project close-out",
        description:
          "I assist your teams with pre-handover inspections, clearing punch-list items and consolidating close-out documentation. I also take part in commissioning and in the administrative and technical closure of the project, making sure the work of your teams and contractors is properly finalised.",
      },
    ],
  },
  localisation: {
    title: "LOCATION",
    p1: "I am based in Paris, which allows me to respond quickly on your projects in the Île-de-France region.",
    p2: "Originally from the South-East of France, I also have strong local roots there, making it easy to follow projects in that region and stay close to local players.",
    p3: "My organisation allows me to work anywhere in France, depending on the needs of your projects. I can operate flexibly:",
    bullets: [
      "on-site presence at critical moments,",
      "direct support to your teams in your offices,",
      "targeted remote involvement for monitoring and document review.",
    ],
    mapAlt: "Map of Galland Group's areas of operation in France",
  },
  portfolio: {
    title: "THEY TRUST US",
    subtitle:
      "Discover a selection of current and upcoming projects that illustrate our excellence and know-how",
    items: [
      {
        title: "Heineken",
        description:
          "Owner's PM assistance - Refurbishment of the Heineken \nFrance head office in Rueil-Malmaison, 7,500 sqm",
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
    subtitle: "Let's discuss your project and bring your ambitions to life together",
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
    toastSuccess: "Thank you for your message! We will get back to you very soon.",
    toastError:
      "An error occurred while sending your message. Please try again later.",
  },
  footer: {
    country: "France",
    legalLink: "Legal Notice",
    rights: "All rights reserved.",
    lastUpdated: "Last updated: 1 March 2026",
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
