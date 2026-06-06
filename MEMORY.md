# Construction BTP Diaspora Memory

## Role du projet

`construction-btp-diaspora-showcase` est le premier nouveau site metier de la
serie Manda AI apres MadaVoyage, Garage Antananarivo et Factumation.

Objectif : creer un modele premium et duplicable pour une entreprise de
construction / renovation a destination de la diaspora qui veut construire au
pays a distance.

Dossier projet :

- `D:\webApp\construction-btp-diaspora-showcase`

Nom de demonstration temporaire : `BatiTana`.

Ce nom est fictif. Il sert a produire une preuve portfolio avant adaptation a
un vrai client.

Decision de nommage du 2026-06-04 :

- le dossier a ete renomme de `renovation-antananarivo-showcase` vers
  `construction-btp-diaspora-showcase` ;
- ce nom de base couvre mieux la construction BTP, la renovation et le
  positionnement diaspora sans limiter le modele a Antananarivo.

## Stade actuel

Stade : implementation V3-01 active.

Regle obligatoire du skill `site-web-metier` :

- ne pas coder le site tant qu'aucune direction visuelle n'est validee ;
- produire trois maquettes full-page avant implementation ;
- choisir une direction, puis seulement construire le projet Next.js.

Decision du 2026-06-05 :

- `V3 A - Diaspora Assurance` et `V3 B - Command Center` sont tous les deux
  juges bons ;
- ils doivent devenir deux sites/directions distinctes ;
- l'implementation a commence par `V3 A - Diaspora Assurance` (`v3-01`) ;
- `v3-02` reste a implementer separement apres validation/retours sur `v3-01`.

## Cadrage metier

Secteur : construction cle en main encadree pour la diaspora, renovation,
construction legere et amenagement interieur.

Ville cible du premier cas : Antananarivo et communes proches, puis Madagascar
selon capacite operationnelle. Le positionnement doit rester assez large pour
parler a toute diaspora qui construit dans son pays d'origine.

Clients cibles :

- membres de la diaspora vivant loin du chantier ;
- personnes qui veulent construire une maison familiale dans leur pays d'origine
  depuis l'etranger ;
- proprietaires qui ont deja un terrain mais ne savent pas a qui confier le
  chantier ;
- familles qui veulent eviter les travaux flous, les retards invisibles et les
  depenses sans preuves ;
- clients premium qui veulent un chantier clair, suivi et documente.

Offre principale :

- construction cle en main encadree pour diaspora ;
- suivi de chantier a distance ;
- reporting photo / video ;
- devis detaille et planning de jalons ;
- renovation interieure ;
- peinture et finition ;
- plomberie et electricite ;
- toiture et etancheite ;
- extension et petits travaux de gros oeuvre ;
- amenagement de locaux professionnels.

Objections visiteur :

- peur d'envoyer de l'argent au pays sans controle ;
- peur que l'argent soit mal utilise avant la fin de la maison ;
- peur de dependre uniquement de proches ou d'intermediaires informels ;
- peur des devis flous, des retards invisibles et des chantiers abandonnes ;
- peur de payer sans preuve d'avancement ;
- doute sur la qualite des materiaux et des finitions ;
- difficulte a savoir si l'entreprise intervient dans son quartier ;
- besoin de voir des preuves avant de contacter.

Preuves a mettre en avant :

- photos avant / apres ;
- visite technique avant devis final ;
- devis detaille ;
- planning de chantier ;
- responsable de suivi unique ;
- paiements par etapes validees ;
- compte rendu photo / video ;
- preuves d'achat et factures quand disponibles ;
- zones d'intervention ;
- garanties de finition et communication claire.

Conversion attendue :

- demande d'evaluation de projet a distance ;
- demande de devis qualifiee ;
- contact WhatsApp ou telephone ;
- formulaire avec pays de residence, ville/quartier du terrain, type de
  construction, surface, delai, budget indicatif, niveau d'accompagnement et
  possibilite d'ajouter des photos / documents.

Workflow reel apres formulaire :

1. reception de la demande ;
2. qualification manuelle ou via n8n ;
3. contact WhatsApp / appel ;
4. visite technique ;
5. devis detaille ;
6. validation ;
7. planning chantier et jalons de paiement ;
8. suivi avec photos, videos et points d'avancement.

Ne pas promettre de prix fixe avant visite. Ne pas simuler une reservation
automatique de chantier. Ne pas promettre `zero risque` ou `argent garanti`
sans cadre juridique / sequestre reel.

## Pivot copywriting diaspora (2026-06-03)

Le positionnement BTP generique a ete juge trop faible et trop abstrait.

Nouvel angle prioritaire :

`Construire au pays depuis l'etranger, sans avancer a l'aveugle.`

Le copywriting complet est documente dans :

- `D:\webApp\construction-btp-diaspora-showcase\COPYWRITING-DIASPORA.md`

Mots cles a utiliser :

- `construction cle en main encadree pour la diaspora` ;
- `suivi de chantier a distance` ;
- `paiements par etapes validees` ;
- `reporting photo et video` ;
- `responsable de chantier unique` ;
- `validation avant decaissement` ;
- `chantier suivi, pas chantier a l'aveugle`.

Les prochaines maquettes doivent etre refaites avec ce positionnement. Les
maquettes V1 sont a considerer comme brouillons rejetes : elles manquaient de
vraies images et donnaient un rendu trop abstrait.

## Maquettes V2 diaspora produites

Trois nouvelles directions ont ete generees le 2026-06-03 avec de vraies images
de chantier / renovation et le copywriting diaspora :

- Direction V2 A - Diaspora Assurance :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v2-01-diaspora-assurance.png`
  (`1440x6850`) ;
- Direction V2 B - Command Center :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v2-02-command-center.png`
  (`1440x6817`) ;
- Direction V2 C - Maison + Preuves :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v2-03-maison-preuves.png`
  (`1440x6922`).

Assets photo utilises :

- `assets/design-directions/source-images/renovation-hero-team.png` ;
- `assets/design-directions/source-images/renovation-before-after.png` ;
- `assets/design-directions/source-images/renovation-supervision.png`.

Ces V2 ont aide a clarifier la structure, mais elles sont remplacees par les
maquettes V3 generees directement avec `gpt-image-2`.

## Correction methode maquette (2026-06-03)

Le skill global `site-web-metier` a ete corrige : les maquettes full-page ne
doivent plus etre fabriquees avec un renderer HTML/CSS/Playwright. Le code sert
apres validation. Pour choisir une direction artistique, generer directement des
maquettes bitmap avec l'image generation, de preference `gpt-image-2` quand le
controle modele est demande et que `OPENAI_API_KEY` est disponible.

Trois maquettes V3 ont ete generees directement avec le CLI `gpt-image-2`,
format `1440x2560`, qualite `medium` :

- V3 A - Diaspora Assurance :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v3-01-diaspora-assurance.png` ;
- V3 B - Command Center :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v3-02-command-center.png` ;
- V3 C - Maison Suivie :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v3-03-maison-preuves.png`.

Les prompts sources sont conserves dans :

- `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\v3-prompts\`

Observation : les V3 sont nettement plus proches de la qualite attendue pour
des directions artistiques. Elles peuvent contenir des chiffres ou libelles
inventes par l'image generation ; ne pas les reprendre tels quels en
implementation. Les textes finaux devront repartir du copywriting valide et de
donnees verifiees.

Etat de choix actuel :

- `V3 A - Diaspora Assurance` : validee pour une premiere implementation et
  construite en Next.js ;
- `V3 B - Command Center` : a conserver comme direction distincte pour une
  deuxieme version/site ;
- `V3 C - Maison Suivie` : reserve de direction possible, non prioritaire.

## Implementation V3-01 - Diaspora Assurance (2026-06-05)

Base creee :

- projet Next.js dans le dossier courant ;
- page d'accueil `v3-01` inspiree de
  `assets/design-directions/v3-01-diaspora-assurance.png` ;
- contenu centralise dans `data/bati-diaspora.js` et `lib/site.js` ;
- formulaire client dans `components/forms/ProjectEvaluationForm.jsx` ;
- route API `app/api/project-evaluation/route.js` prete pour un webhook n8n
  via `N8N_BATI_DIASPORA_WEBHOOK_URL` et `BATI_DIASPORA_WEBHOOK_SECRET` ;
- SEO de base : metadata, sitemap, robots, JSON-LD LocalBusiness/FAQ.

Fidelite design :

- les pictogrammes specifiques de la maquette ont ete recrees en SVG custom
  dans `components/icons/BatiIcons.jsx` au lieu d'utiliser une banque d'icones ;
- les assets visuels utiles pour le prototype ont ete places dans
  `public/images/bati-diaspora/` ;
- le badge de developpement Next est desactive pour une revue navigateur propre.

Verification :

- `npm install` puis upgrade Next/React vers les versions `latest` disponibles ;
- override `postcss: 8.5.10` ajoute pour supprimer les alertes npm audit ;
- `npm audit --omit=dev` : 0 vulnerabilite apres override ;
- `npm run build` : OK avec Next.js 16.2.7 ;
- verification Playwright desktop `1440x1100` et mobile `390x900` :
  aucune erreur console, aucune requete echouee, aucune image cassee, aucun
  overflow horizontal ;
- serveur local lance sur `http://127.0.0.1:3000` pour revue design.

Correction de fidelite du 2026-06-05 :

- le rendu initial etait trop long (`1440x4300`) par rapport a la maquette
  `v3-01` (`1440x2560`) ;
- la FAQ visible ajoutee hors maquette a ete retiree de la page ;
- les caracteres/symboles casses du JSX ont ete remplaces par des formes CSS
  ou du HTML propre ;
- un bug CSS remettait `body` sur la police heritee du navigateur, ce qui
  donnait une typo serif au lieu du rendu sans-serif attendu : corrige ;
- le hero a ete recale avec les ruptures de lignes de la maquette ;
- les sections probleme/solution, preuves, jalons, suivi distance, diaspora,
  formulaire, CTA final et footer ont ete compacte/es pour retrouver la densite
  du design ;
- nouveaux crops propres ajoutes pour `hero-construction`,
  `remote-report`, `contact-house-top` et `contact-house-bottom` ;
- nouvelle verification Playwright : desktop `1440px` a `2578px` de hauteur,
  sans erreur console, sans requete echouee, sans image cassee, sans overflow ;
- verification mobile `390px` : sans erreur console, sans requete echouee, sans
  image cassee, sans overflow horizontal ;
- `npm run build` : OK apres corrections.

Traitement Drawbridge `/bridge` du 2026-06-05 :

- 2 annotations Drawbridge traitees et marquees `done` dans `.moat/` ;
- logo/header refait en lockup : icone + nom, tagline `Construire au pays, en
  toute confiance.` figée sous le logo ;
- suppression de l'eyebrow orange au-dessus du H1 du hero ;
- police globale remplacee par Montserrat via `next/font/google` ;
- fond hero ajuste pour ne plus donner un grand aplat blanc jusqu'a la gauche
  et laisser percevoir l'image sous le contenu ;
- CTA hero separes de la bannière devis, plus de chevauchement ;
- verification Playwright desktop `1536x738` et mobile `390x900` :
  aucune erreur console, aucune requete echouee, aucune image cassee, aucun
  overflow horizontal ;
- `npm run build` : OK.

Patch hero V3-01 section par section du 2026-06-05 :

- remplacement du faux pictogramme CSS du CTA `Parler a un conseiller` par un
  SVG WhatsApp custom dans `components/icons/BatiIcons.jsx` ;
- logo de marque affine en SVG custom pour se rapprocher du lockup de la
  maquette `v3-01` ;
- typo hero recalee en Montserrat, H1 reduit et copie hero accentuee ;
- photo du hero recadree depuis la maquette et proportions desktop ajustees ;
- header, CTA, H1 et bande de confiance recalibres sur la capture `1440px` ;
- fond blanc du bloc hero transforme en couche CSS dediee
  `.hero-section::before` pour cadrer le H1, le texte et les CTA avec un fondu
  vers la photo ;
- ajustement typo hero apres retour design : H1 desktop `54px / 700`,
  paragraphe desktop `16px / 500`, mobile H1 `43px` puis `38px` sur petit
  mobile ;
- ajout d'une couche image gauche `.hero-section::after` pour laisser voir un
  peu le chantier sous le contour blanc du H1 ;
- correction suivante : voile blanc remis en haut du H1, reduction de
  l'opacite sur le bord gauche, H1 conserve a `54px` avec `letter-spacing: 0`
  et kerning optique/normal ;
- correction zoom hero : le fond principal utilise maintenant
  `background-size: contain` sur la regle desktop active pour dezoomer l'image
  sans deformation ;
- captures de revue section par section mises a jour :
  `assets/section-review/01-hero-maquette.png`,
  `assets/section-review/01-hero-site.png`,
  `assets/section-review/01-hero-comparaison.png`,
  `assets/section-review/01-hero-site-mobile.png` ;
- `npm run build` : OK apres patch.

## Revue ecarts hero V3-01 du 2026-06-05 (comparaison maquette fournie)

Ecarts identifies via Chrome DevTools MCP et corriges sur le hero (et global) :

1. Accents absents partout (le plus visible) : tout le contenu etait en ASCII
   sans accents. Restaures dans `data/bati-diaspora.js`, `lib/site.js`,
   `components/forms/ProjectEvaluationForm.jsx`, `app/page.jsx`, `app/layout.jsx`
   (nav, trust chips, problem/solution, jalons, reporting, stats, formulaire,
   FAQ, footer, JSON-LD, metadata, alts).
2. Image hero : elle s'etalait sur toute la largeur et transparaissait derriere
   le titre. Cause = second bloc `@media (min-width:841px)` (vers ligne 2099 de
   `app/globals.css`) qui reactivait `.hero-section::after` (image fantome a
   gauche, `opacity:0.26`) et remettait `.hero-bg` en pleine largeur
   `background-size:contain`. Corrige : `.hero-section::after` -> `display:none`,
   `.hero-bg` -> `width:60%`, `inset:94px 0 0 auto`, `background-size:cover`,
   `background-position:center right`, masque de fondu gauche
   (`mask-image: linear-gradient(90deg, transparent 0%, .45 15%, #000 35%)`).
   Idem applique sur la regle de base et le 1er bloc 841 pour coherence.
3. `.hero-section::before` (boite/voile blanc) neutralise en `display:none`.
4. Tagline logo : passait sur 2 lignes -> `white-space:nowrap`, `padding-left:0`,
   `max-width:none` (s'aligne sous l'icone comme la maquette).
5. Menu nav trop gras (`font-weight:850`) -> `600`, et `Accueil` actif en `800`.
   `Voir nos realisations` (`.secondary-action`) passe de `900` a `700`.
6. H1 hero desktop : `54px/700` -> `58px/800` pour matcher le poids maquette.
7. Mobile `.hero-bg` : masque neutralise (`mask-image:none`) pour garder le fond
   pleine largeur attenue (`opacity:0.44`).

ATTENTION pour la suite : `app/globals.css` contient DEUX blocs
`@media (min-width:841px)` (~ligne 1132 et ~ligne 2099). Le SECOND gagne en
desktop (meme specificite, plus bas dans le source). Toujours editer le bloc
~2099 pour les changements desktop effectifs du hero.

Verifie : `npm run build` OK, desktop `1440px` sans overflow horizontal,
mobile `390px` OK.

A FAIRE ensuite : recueillir les ecarts des sections suivantes (probleme/
solution, preuves, jalons, suivi distance, diaspora, contact, CTA, footer) puis
attaquer `v3-02` (Command Center) en site distinct.

## Revue ecarts section 2 (Probleme/Solution) du 2026-06-05

Ecart signale : "tout le texte est en gras alors que certains doivent l'etre et
d'autres non". Corrige pour matcher la hierarchie de la maquette :

- `.section-intro` (+ `.diaspora-copy p`, `.contact-copy p`) : `font-weight`
  620 -> 450 (normal). Les intros "Vivre a l'etranger..." et "Bati Diaspora
  prend en charge..." ne sont plus en gras.
- `.cross-list, .check-list` : `font-weight` 700 -> 450 (normal). Les puces ne
  sont plus toutes en gras.
- Liste solution : seul le debut de chaque puce est en gras. `solutionPoints`
  dans `data/bati-diaspora.js` passe de strings a objets `{ lead, rest }` ;
  rendu dans `app/page.jsx` avec `<strong>{lead}</strong>{rest}` ; regle
  `.check-list li strong { font-weight: 700 }` ajoutee.
- La regle generique `.cross-list span, .check-list span` (orange, 24px) a ete
  scopee aux seuls marqueurs `.mark-x`/`.mark-check` pour ne pas colorer le
  nouveau span de texte.
- `.result-line` et "Vous restez maitre..." restent en gras (corrects).

Verifie : `npm run build` OK, rendu desktop conforme a la maquette.

## Revue sections galerie + jalons du 2026-06-05

Sections "Des projets. Des preuves." et "Paiements par jalons" jugees deja
proches de la maquette. Ajustements de fidelite :

- `.milestone-note` ("Chaque jalon est valide...") : etait en gras navy
  (`700`/navy), passe en legende fine grise (`font-weight:500`,
  `color: var(--muted)`) comme la maquette.
- `.progress-card span` (etiquettes galerie Avant/Fondations/...) :
  `font-weight` 900 -> 800.
- Accent oublie corrige dans `app/page.jsx` : "Nous sommes a vos cotes." ->
  "Nous sommes à vos côtés." (panneau diaspora).

Verifie : `npm run build` OK.

## Traitement Drawbridge /bridge du 2026-06-05 (batch 6 taches)

6 taches Drawbridge traitees et marquees `done` dans `.moat/` :

- e1a309e9 + 009b362e : la bande de confiance (`.trust-strip`) descend et
  chevauche la section 2. `transform: translateY(36px)` -> `translateY(100px)`
  dans le bloc actif `@media (min-width:841px)` (~2099). Resultat mesure :
  badge top 615 / bottom 716, frontiere hero 650 -> ~35% hero, 65% section 2.
- 98aa66f6 : `.split-section` padding-top 160 -> 210px (bloc 2099) pour laisser
  la place au badge descendu avant les kickers.
- 080a123f : kickers "LE PROBLEME" / "NOTRE SOLUTION" alignes. `.split-grid`
  `align-items: center` -> `start` (ligne ~1275, bloc actif). Mesure : les deux
  kickers a top 734.
- 1250eaa9 : fleche galerie centree dans l'ecart entre images. `.gallery-arrow`
  `right: -16px` -> `-25px` (bloc 1335 actif) et base `-17px` -> `-26px`.
  Mesure : centre fleche = centre ecart (delta 0).
- c61831c7 : icones de la bande de confiance verifiees, deja conformes a la
  maquette en SVG net. Pas de regeneration raster gpt-image-2 (degraderait,
  approche SVG validee).

Accent oublie corrige au passage : "Nous sommes à vos côtés." (panneau diaspora).

Tache bb542e6b traitee ensuite : la section trop chargee "diaspora + contact"
a ete remplacee par une section conversion minimaliste, apres direction image
generee type `gpt-image-2`.

## Refonte minimaliste contact / diaspora du 2026-06-05

Sur demande de Manda : supprimer la surcharge de la zone diaspora/contact et
aller vers une section plus simple, centree sur le parcours user.

- direction visuelle generee et conservee :
  `assets/design-directions/v3-01-contact-minimal-gpt-image-2-direction.png` ;
- retrait du composant `DiasporaSection` de la homepage ;
- `ContactSection` reconstruite en trois zones desktop : texte de rassurance,
  formulaire, image laterale ;
- textes reduits : promesse courte, trois benefices, formulaire d'etude ;
- suppression du panneau carte/pins/stats et de la deuxieme image contact ;
- CSS final ajoute en fin de `app/globals.css` pour ecraser les anciennes
  regles contact sans casser les sections precedentes ;
- captures de verification :
  `assets/section-review/09-full-after-contact-redesign.png` et
  `assets/section-review/09-full-mobile-after-contact-redesign.png` ;
- tache Drawbridge `/bridge` bb542e6b marquee `done`.

Retouche du 2026-06-06 :

- image laterale du formulaire retiree de `ContactSection` ;
- grille contact repassee en deux colonnes desktop : texte de rassurance +
  formulaire ;
- pictogrammes de la liste "Votre projet merite le meilleur depart" recentres
  dans leurs cercles orange ;
- champs, listes, zone de texte et bouton du formulaire passes a `16px` pour
  renforcer le role CTA de la section contact ;
- captures ajoutees :
  `assets/section-review/10-contact-no-side-image-desktop.png` et
  `assets/section-review/10-contact-no-side-image-mobile.png`,
  `assets/section-review/11-contact-form-font-16-desktop.png` et
  `assets/section-review/11-contact-form-font-16-mobile.png` ;
- `npm run build` : OK.

Traitement Drawbridge `/bridge` du 2026-06-06 :

- taches 21 a 23 traitees et marquees `done` dans `.moat/` ;
- image `remote-report` gardee en grand cadre `380px`, mais dezoomee avec
  `object-fit: contain` et un fond floute discret pour eviter le zoom/crop ;
- textes des champs du formulaire contact repasses en regular (`font-weight:
  400`) tout en gardant le bouton CTA fort ;
- preuves du bandeau final repassees en regular et forcees sur une ligne en
  desktop ;
- captures ajoutees :
  `assets/section-review/12-bridge-final-todos-desktop.png` et
  `assets/section-review/12-bridge-final-todos-mobile.png` ;
- `npm run build` : OK.

Verifie : `npm run build` OK.

## Refonte icones via Unicons (Iconscout) du 2026-06-05

Sur demande de Manda : rapprocher les icones de celles de la maquette en
utilisant https://github.com/Iconscout/unicons (style "line").

Methode : tracés SVG Unicons COPIES directement dans
`components/icons/BatiIcons.jsx` (pas d'ajout de dependance npm -> evite les
risques pinning/CVE). Licence Iconscout Simple License (usage commercial OK).
Deux wrappers dans le composant : `UIcon` (rempli, viewBox 24, Unicons) et
`Svg` (trait, viewBox 48, pictos chantier custom).

Icones passees en Unicons line : document=file-alt, coins=money-stack,
camera=camera, user=user (bande de confiance) ; team=users-alt, chat=comment-
alt-lines, clipboardCheck=clipboard-notes, archive=archive (reporting) ;
globe=globe, users=users-alt, shield=shield-check (stats) ; clock=clock,
documentCheck=file-check-alt, lightbulb=lightbulb-alt (formulaire) ; lock=lock-
alt, checkShield=shield-check (CTA).

Conserves en SVG custom (trait) : les 7 pictos chantier des jalons
(documentSearch, shovel, foundation, bricks, houseLine, roller, wrench) car
aucune librairie UI generaliste ne propose ces pictos metier ; ils collent
deja a la maquette et la rangee reste homogene.

A NOTER : dans la maquette les icones de la bande de confiance sont ORANGE ;
sur le site elles heritent du navy de `.icon-ring`. Couleur laissee en navy
(non demande explicitement). Option a proposer : passer les icones de la trust-
strip en orange pour coller au design.

Verifie : `npm run build` OK, rendu desktop coherent (trust strip, reporting,
stats, formulaire, CTA).

## Traitement Drawbridge /bridge du 2026-06-06 (batch 11 taches)

Tasks 10-20 traitees et marquees `done` (toutes sur `app/globals.css` sauf 14) :

- 10 #realisations padding-top -> 38px ; 11 #methode -> 52px ; 12 #services ->
  32px (overrides ajoutes dans le bloc actif `@media (min-width:841px)` ~2099).
- 13 contact-copy alignee en haut (align-items/align-self start) PUIS task 20
  l'a annulee ("pardon frero") : revenu en `align-items: center` /
  `.contact-copy { align-self: center }` (centre par rapport au formulaire).
- 14 bouton "Demarrer mon projet maintenant" retire de `FinalCta`
  (`app/page.jsx`) ; `.final-cta` grille 3 -> 2 colonnes (h2 + preuves).
- 15 labels bandeau CTA final +3px : `.final-proofs span` desktop 11 -> 14px
  (regle gagnante dans le bloc 1601).
- 16 `.final-cta` padding top/bottom -> 32px (+20).
- 17 `.split-grid` padding-top: 10px.
- 18 image client (section 2) : fondu cream a gauche via `.client-photo::after`
  (gradient 90deg cream -> transparent).
- 19 image "Suivi de chantier" agrandie : `.remote-image img` desktop 240 ->
  380px (bloc 1844) ; contenu droite deja centre via `.remote-section`
  `align-items: center`.
- task 9 (refonte minimaliste diaspora+contact) : marquee done cote Manda ;
  section contact refaite en bloc "Minimal conversion section" (~ligne 2507 de
  globals.css), 2 colonnes copy + form-panel.

ATTENTION : Drawbridge ajoute de nouvelles taches en continu pendant le
traitement (le repere annote en parallele). Toujours re-grep `"status":` dans
`.moat/moat-tasks-detail.json` avant de cloturer. Le JSON est resynchronise par
l'extension (re-lire avant edit sinon "modified since read").

Verifie : `npm run build` OK a chaque etape, desktop sans overflow.

## Psychologie visiteur

Checklist d'acceptation pour les maquettes :

- le visiteur comprend en moins de 5 secondes que l'entreprise fait des travaux
  a Antananarivo ;
- les services sont lisibles sans jargon ;
- la page rassure avant de demander le contact ;
- le devis semble serieux : visite, details, planning, suivi ;
- les preuves sont visuelles et concretes ;
- le formulaire demande assez d'information pour qualifier sans fatiguer ;
- le ton reste premium, clair et local, pas une landing page marketing vague.

## Directions de maquette a produire

### Direction A - Chantier clair

Positionnement : propre, lumineux, rassurant, ideal pour une entreprise de
renovation familiale mais professionnelle.

Style :

- fond sable / blanc casse ;
- accents orange chantier et bleu nuit ;
- grandes cartes avant / apres ;
- typography claire, beaucoup d'espace.

Promesse :

`Des travaux mieux planifies, du premier devis a la derniere finition.`

### Direction B - Bureau technique premium

Positionnement : plus haut de gamme, presque architecte / maitrise d'oeuvre.
Bon pour viser bureaux, villas, commerces et clients a budget plus eleve.

Style :

- fond anthracite ;
- grille technique ;
- plans, lignes, mesures ;
- accent cuivre / ambre ;
- rendu tres structure.

Promesse :

`Un chantier suivi comme un projet, pas comme une improvisation.`

### Direction C - Maison confiance

Positionnement : plus humain, chaleureux et proche des familles.
Bon pour renovations de maisons, appartements, cuisines, salles de bain.

Style :

- fond creme ;
- accents vert sauge et terre cuite ;
- photos de foyer, confort et finitions ;
- langage simple et rassurant.

Promesse :

`Renover sans perdre le fil : une equipe, un planning, un suivi.`

## SEO / GEO prevu

Requetes cibles :

- entreprise renovation Antananarivo ;
- renovation maison Antananarivo ;
- devis travaux Antananarivo ;
- entreprise construction Antananarivo ;
- peinture plomberie electricite Antananarivo ;
- amenagement bureau Antananarivo.

Schema.org pressenti :

- `HomeAndConstructionBusiness` si adapte ;
- `LocalBusiness` ;
- `FAQPage` si les questions sont visibles.

Contenus GEO a rendre explicites :

- services ;
- zones ;
- methode de devis ;
- garanties ;
- workflow apres demande ;
- FAQ sur prix, delais, visite et suivi.

## Automation prevue

Pattern :

`Frontend form -> Next API route -> n8n webhook -> notification + suivi`

Payload minimum :

- source : `construction-btp-diaspora-showcase` ;
- nom ;
- telephone / WhatsApp ;
- quartier ;
- type de travaux ;
- surface approximative ;
- delai souhaite ;
- budget indicatif ;
- message ;
- pieces jointes ou lien photos si ajoute plus tard.

## Sources marche consultees

- Trade.gov, `Madagascar - Design and Construction Services Sector`, publie le
  2025-08-04 : opportunites dans construction, services architecturaux,
  construction, interior design, landscape design, infrastructures et ville
  satellite pres d'Antananarivo.
- Banque mondiale, `Bridging the Productivity Divide`, 2025 : besoin de
  productivite, services, infrastructure, digital et entreprises plus efficaces.
- DataReportal, `Digital 2025: Madagascar` : base internet et reseaux sociaux
  suffisante pour une strategie de preuve + prospection digitale.

## Prochaines etapes

## Maquettes V1 produites

Trois maquettes full-page V1 ont ete generees le 2026-06-03, puis rejetees comme
trop abstraites :

- Direction A - Chantier clair :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\01-chantier-clair.png`
  (`1440x4155`) ;
- Direction B - Bureau technique premium :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\02-bureau-technique.png`
  (`1440x4189`) ;
- Direction C - Maison confiance :
  `D:\webApp\construction-btp-diaspora-showcase\assets\design-directions\03-maison-confiance.png`
  (`1440x4134`).

Le script de rendu est :

- `D:\webApp\construction-btp-diaspora-showcase\scripts\render-design-directions.js`

## Prochaines etapes

1. Choisir une direction.
2. Raffiner la direction choisie si besoin.
3. Creer le projet Next.js seulement apres validation.
4. Centraliser le contenu dans `data/` et `lib/site.ts`.
5. Ajouter SEO/GEO, formulaire de devis et API route n8n.
