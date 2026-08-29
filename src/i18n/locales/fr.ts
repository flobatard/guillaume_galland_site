/**
 * Dictionnaire français — source de vérité du schéma de traduction.
 * en.ts est contraint par `satisfies TranslationSchema` : toute clé ajoutée
 * ici sans équivalent anglais devient une erreur de compilation.
 *
 * Les segments contenant du balisage inline (liens) sont rendus via <Trans>
 * avec des composants nommés : <mailLink>, <legalLink>, <cnilLink>.
 */
const fr = {
  nav: {
    accueil: "Accueil",
    apropos: "À propos",
    services: "Services",
    localisation: "Localisation",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    baseline: "Assistant Maître d'Ouvrage et conseil en immobilier d’entreprise",
    sectors: "Tertiaire · Hôtellerie · Retail",
    scrollAria: "Faire défiler vers la section À propos",
  },
  about: {
    title: "STRUCTURE INDÉPENDANTE",
    intro: [
      "Fondée en 2025, GALLAND GROUP est une structure indépendante spécialisée dans l’accompagnement des acteurs du bâtiment sur des projets immobiliers à forts enjeux.",
      "Positionnée comme un partenaire de confiance, GALLAND GROUP intervient en complément des organisations existantes, avec une approche agile, exigeante et opérationnelle.",
      "Habituée à évoluer aux côtés de grands acteurs du conseil et de la maîtrise d’ouvrage, GALLAND GROUP s’intègre naturellement aux équipes en place, dans le respect des méthodes, outils et standards projet.",
      "La structure s’appuie sur un réseau qualifié de consultants, bureaux d’études et partenaires spécialisés, garantissant une capacité d’adaptation rapide aux contextes complexes et aux contraintes conjoncturelles du marché immobilier.",
    ],
    values:
      "Les valeurs de rigueur, exigence, efficacité, qualité des relations humaines et de compréhension des usages constituent le socle de l’engagement de GALLAND GROUP.",
    motto: "La qualité par l’exigence.",
    portraitAlt: "Guillaume Galland, fondateur de Galland Group",
  },
  services: {
    title: "DE L'IDÉE À LA RÉALISATION",
    subtitle:
      "Une expertise complète pour donner vie à vos projets les plus ambitieux",
    anyStage:
      "Ponctuellement ou sur toute la durée de l'opération, nous intervenons à n'importe laquelle de ces étapes, selon vos besoins.",
    // Phases de la loi MOP affichées dans le bandeau animé en arrière-plan.
    // L'équivalent anglais (en.ts) utilise les stages du RIBA Plan of Work.
    phases: [
      { code: "ESQ", label: "Esquisse" },
      { code: "APS", label: "Avant-projet sommaire" },
      { code: "APD", label: "Avant-projet définitif" },
      { code: "PRO", label: "Projet" },
      { code: "DCE", label: "Consultation des entreprises" },
      { code: "EXE", label: "Exécution" },
      { code: "AOR", label: "Réception" },
    ],
    items: [
      {
        phase: "ESQ · APS",
        title: "Cadrage & Analyse",
        description:
          "Nous participons à l’analyse des contraintes du site, des objectifs du projet et des hypothèses techniques et économiques. Cette étape permet de définir un cadre clair pour anticiper les risques et sécuriser les décisions dès la phase amont, tout en nous intégrant aux méthodes et standards du client.",
      },
      {
        phase: "APD · PRO · DCE",
        title: "Appui à la conception technique",
        description:
          "Nous renforçons vos équipes projet en relisant et validant les études techniques et réglementaires. Nous contribuons à la coordination des intervenants techniques et à l’analyse des dossiers de consultation, en nous intégrant à vos processus et pratiques existants.",
      },
      {
        phase: "EXE",
        title: "Suivi de la phase travaux",
        description:
          "Nous intervenons opérationnellement aux côtés de vos équipes pour suivre les entreprises et coordonner les lots techniques. Nous soutenons le pilotage du planning et la maîtrise des coûts, et nous aidons à identifier et résoudre les points sensibles tout en respectant votre organisation.",
      },
      {
        phase: "AOR",
        title: "Livraison et clôture de projet",
        description:
          "Nous assistons vos équipes lors des opérations préalables à la réception, à la levée des réserves et à la consolidation des documents de fin d’opération. Nous participons également à la mise en service et à la clôture administrative et technique du projet, en garantissant que le travail de vos équipes et des entreprises est correctement finalisé.",
      },
    ],
  },
  localisation: {
    title: "LOCALISATION",
    p1: "Nous sommes basés à Paris, ce qui nous permet d’intervenir rapidement sur vos projets en Île-de-France.",
    p2: "Originaire du sud-Est, notre équipe bénéficie également d’un ancrage local, nous permettant de suivre facilement des projets dans cette région et de rester proches des acteurs locaux.",
    p3: "Notre organisation nous permet d’être mobilisables sur l’ensemble du territoire français, selon les besoins de vos projets. Nous pouvons intervenir de manière flexible :",
    bullets: [
      "présence sur site aux moments critiques,",
      "soutien direct à vos équipes dans vos locaux,",
      "intervention ponctuelle à distance pour le suivi et l’analyse des dossiers.",
    ],
    mapAlt: "Carte des zones d’intervention de Galland Group en France",
  },
  portfolio: {
    title: "ILS NOUS FONT CONFIANCE",
    subtitle:
      "Découvrez une sélection de projets, en cours ou à venir, qui illustrent notre excellence et notre savoir-faire",
    items: [
      {
        title: "Heineken",
        description:
          "Assistant Maître d'Ouvrage - Réaménagement du Siège Social de Heineken \nFrance à Rueil-Malmaison 7500m²",
      },
      {
        title: "Artelia",
        description:
          "Suivi de la phase travaux – Rénovation des postes électriques HTA",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Discutons de votre projet et donnons vie ensemble à vos ambitions",
    getInTouch: "Prenons Contact",
    emailLabel: "Email",
    placeholders: {
      name: "Votre nom",
      email: "Votre email",
      phone: "Votre téléphone",
      message: "Parlez-nous de votre projet...",
    },
    rgpd: "Vos données sont collectées par Guillaume Galland pour répondre à votre demande et conservées le temps nécessaire à son traitement. Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition en écrivant à <mailLink>contact@guillaumegalland.com</mailLink>. Pour en savoir plus, consultez nos <legalLink>mentions légales</legalLink>.",
    submit: "Envoyer le message",
    toastSuccess:
      "Merci pour votre message ! Nous vous recontacterons très prochainement.",
    toastError:
      "Une erreur est survenue lors de l'envoi du message, veuillez réessayer ultérieurement.",
  },
  footer: {
    country: "France",
    legalLink: "Mentions Légales",
    rights: "Tous droits réservés.",
    lastUpdated: "Dernière mise à jour : 1 mars 2026",
  },
  legal: {
    seo: {
      title: "Mentions légales — Galland Group",
      description:
        "Mentions légales du site guillaumegalland.com : éditeur, hébergement, propriété intellectuelle, données personnelles et cookies.",
    },
    title: "Mentions Légales",
    subtitle: "Informations légales et politique de confidentialité",
    backHome: "← Retour à l'accueil",
    editor: {
      title: "1. Éditeur du site",
      intro: "Le présent site est édité par :",
      rows: [
        { label: "Nom", value: "Guillaume Galland" },
        { label: "Statut juridique", value: "Micro-entreprise" },
        { label: "Adresse du siège", value: "48 rue de Malte, 75011, Paris" },
        { label: "SIRET", value: "92745621000016" },
        { label: "Code APE", value: "7112b" },
      ],
      phoneLabel: "Téléphone",
      emailLabel: "Email",
    },
    director: {
      title: "2. Directeur de la publication",
      body: "Le directeur de la publication du site est Guillaume Galland, en sa qualité de fondateur de la micro-entreprise.",
    },
    hosting: {
      title: "3. Hébergement",
      intro: "Le site est hébergé par :",
      rows: [
        { label: "Hébergeur", value: "Vercel" },
        {
          label: "Adresse",
          value: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
        },
        { label: "Contact", value: "privacy@vercel.com — https://vercel.com" },
      ],
    },
    ip: {
      title: "4. Propriété intellectuelle",
      paragraphs: [
        "L'ensemble du contenu présent sur ce site (textes, images, photographies, graphismes, logos, icônes, vidéos, sons, ainsi que leur mise en forme) est la propriété exclusive de Guillaume Galland ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
        "Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, par quelque procédé et sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de Guillaume Galland. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.",
      ],
    },
    privacy: {
      title: "5. Données personnelles",
      intro:
        "Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, les données personnelles que vous transmettez via le formulaire de contact (nom, adresse email, numéro de téléphone, contenu du message) sont collectées par Guillaume Galland.",
      items: [
        {
          label: "Finalité",
          value:
            "répondre à votre demande de contact et, le cas échéant, assurer le suivi de la relation commerciale qui pourrait en découler.",
        },
        {
          label: "Base légale",
          value:
            "votre consentement exprès, manifesté par l'envoi volontaire du formulaire.",
        },
        {
          label: "Durée de conservation",
          value:
            "les données sont conservées pendant le temps strictement nécessaire au traitement de votre demande, puis archivées ou supprimées selon les obligations légales applicables.",
        },
        {
          label: "Destinataires",
          value:
            "vos données sont destinées à Guillaume Galland exclusivement. Le formulaire est traité via le service Formspree, qui agit en qualité de sous-traitant.",
        },
      ],
      rightsLabel: "Vos droits",
      rights:
        "vous disposez d'un droit d'accès, de rectification, de suppression, d'opposition, de limitation du traitement et de portabilité de vos données. Vous pouvez exercer ces droits en écrivant à <mailLink>contact@guillaumegalland.com</mailLink>.",
      cnil: "Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL — <cnilLink>www.cnil.fr</cnilLink>) si vous estimez que le traitement de vos données ne respecte pas la réglementation en vigueur.",
    },
    cookies: {
      title: "6. Cookies",
      body: "Le présent site n'utilise aucun cookie, qu'il soit de mesure d'audience, de publicité ou émis par des tiers. Aucune information n'est déposée ni lue sur votre terminal lors de votre navigation.",
    },
    law: {
      title: "7. Loi applicable et juridiction compétente",
      body: "Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    },
    contact: {
      title: "8. Contact",
      body: "Pour toute question relative aux présentes mentions légales ou à l'exercice de vos droits, vous pouvez écrire à <mailLink>contact@guillaumegalland.com</mailLink>.",
    },
  },
  seo: {
    home: {
      title: "Galland Group, Assistant Maître d'Ouvrage et conseil en immobilier d'entreprise",
      description:
        "Assistant Maître d'Ouvrage et conseil en immobilier d'entreprise. Nous accompagnons les maîtres d'ouvrage sur des projets tertiaires, hôteliers et retail, en France et en Europe, du cadrage à la livraison.",
    },
    jsonLd: {
      jobTitle: "Fondateur, Assistant Maître d'Ouvrage et conseil en immobilier d'entreprise",
      description:
        "Assistance à maîtrise d'ouvrage et conseil en immobilier d'entreprise, projets tertiaires, hôteliers et retail.",
      knowsAbout: [
        "Assistance à maîtrise d'ouvrage",
        "Tertiaire",
        "Hôtellerie",
        "Retail",
        "Copropriété",
        "Due diligence technique",
        "Data center",
        "Gestion de projet",
        "Construction",
      ],
    },
  },
};

export type TranslationSchema = typeof fr;

export default fr;
