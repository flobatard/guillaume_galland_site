# TODO — brief Guillaume du 23/08/2026

Reste à faire après le lot 1 (traité le 29/08/2026 : carte service n°3, À propos
au « nous », carte copropriété, engagement 72 h, libellé Heineken, date de build
au footer, lastmod du sitemap, suppression du lien Google Fonts).

Référence : `brief-site-guillaumegalland-pour-florian.pdf`.

## Bloquant (§3 du brief)

- [x] **Carte « Artelia » → « Musée du Louvre, consultant PMO côté maîtrise
      d'ouvrage »** (§3.3, fait le 30/08/2026). Sans mention d'Artelia, sans
      détail technique. Visuel : photo de la cour Carrée du Louvre
      (`src/assets/images/louvre.jpg`, Wikimedia Commons, CC0 — palais
      historique, pas la pyramide de Pei qui reste protégée).
      ⚠️ L'accord écrit du Louvre (point 8.2) reste à récupérer côté Guillaume.

## Rendu « moins d'IA, plus de tenue » (§2 — l'enjeu principal du brief)

- [x] Retirer les labels en majuscules espacées utilisés comme titres
      (fait le 29/08/2026 — les majuscules venaient du texte des locales, pas
      du CSS) : « Une structure indépendante », « Nos accompagnements »,
      « Nos références », « Où nous intervenons » (+ équivalents en.ts).
- [x] Réécrire les 3 slogans creux (fait le 29/08/2026) :
      - `contact.subtitle` → « Parlez-nous de votre projet, nous verrons
        ensemble comment vous accompagner »
      - `services.subtitle` → « Du cadrage à la livraison, un appui au maître
        d'ouvrage à chaque étape du projet »
      - `portfolio.subtitle` → « Un aperçu des missions sur lesquelles nous
        intervenons actuellement »
- [ ] Chaque page se valide **rendue dans un navigateur**, desktop large et
      mobile réel — jamais sur le code seul.

## Contenu (§4 et §6)

- [ ] **Lien LinkedIn** dans la section Contact (§4.5). URL exacte à demander à
      Guillaume — ne pas la deviner (point 8.1).
- [ ] **Section références complète en deux zones** (§6) — remplace
      intégralement « Ils nous font confiance » :
      - Zone 1 « Depuis janvier 2026, missions portées par Galland » :
        Heineken France · Musée du Louvre · opérateur de data centers ·
        appartement haut de gamme Paris · gestionnaire d'actifs international
        (due diligence Amsterdam/Francfort/Varsovie).
      - Zone 2 « Missions menées sous un employeur précédent » : Tour Duo ·
        Giorgio Armani France · 4 références anonymisées.
      - Respecter à la lettre les libellés et réserves de confidentialité du
        brief (pages 9–10) : ne rien ajouter qui permette d'identifier les
        clients anonymes ; photos uniquement extérieures prises par Guillaume
        depuis l'espace public, sinon carte typographique.

## Technique (§5)

- [ ] **Image de partage og:image / twitter:image** (§5.4) : produire une image
      1200 × 630 (`public/og-image.png`) puis décommenter les deux blocs dans
      `src/components/Seo.tsx` (TODO_GUILLAUME déjà en place).
- [ ] **Formulaire Formspree** : test de bout en bout (§5.6) — vérifier où
      arrivent réellement les messages.

## Décisions / inputs attendus de Guillaume (§7–§8)

- [ ] Nom public : « Galland » (comme dans le brief) ou « Galland Group »
      (utilisé partout sur le site : footer, titres SEO, JSON-LD). Le brief
      interdit « le groupe Galland » au sens salarial — écart possible avec les
      mentions légales (micro-entreprise) à trancher.
- [ ] URL LinkedIn exacte (point 8.1).
- [ ] Libellé exact autorisé pour le Louvre + accord écrit (point 8.2).
- [ ] Adresse du siège : registre vs correspondance (point 8.3).
- [ ] Photos de références : lesquelles sont bien des prises de vue de
      Guillaume depuis l'espace public (point 8.4) — les deux visuels
      actuellement en ligne sont à vérifier avant réutilisation.
- [ ] Data center : ce que l'accord de confidentialité autorise à dire
      (point 8.5) ; la typologie n'apparaît que dans le JSON-LD aujourd'hui (§7.2).
- [ ] Assurance : nom de l'assureur et montant de garantie à afficher (§7.4).
- [ ] Posture « côté maître d'ouvrage » à formuler en positif (§7.5).
- [ ] Contenu « citable par une IA » : page(s) répondant à de vraies questions
      d'acheteurs (§7.3) — levier jugé le plus rentable du chantier.
