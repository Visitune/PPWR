/* Enrichissement éditorial du wiki PPWR — rédigé et sourcé depuis le texte du règlement (UE) 2025/40.
   Les champs "ref" pointent vers des articles du règlement ; les statuts des actes sont indicatifs
   et doivent être revérifiés sur eur-lex.europa.eu. Dernière rédaction : août 2026. */
window.PPWR_META = window.PPWR_META || {};

window.PPWR_META.fr = {
  timeline: [
    { date: "2025-02-11", major: false, title: "Entrée en vigueur",
      desc: "Publication au JO du 22 janvier 2025 ; entrée en vigueur 20 jours après.", refs: ["art_71"] },
    { date: "2025-07-12", major: false, title: "Autorités compétentes désignées",
      desc: "Chaque État membre communique à la Commission ses autorités chargées de la surveillance du marché et du registre des producteurs.", refs: ["art_40"] },
    { date: "2026-02-12", major: false, title: "Normes compostables domestiques",
      desc: "La Commission demande aux organismes de normalisation européens des normes harmonisées sur l'emballage compostable à domicile.", refs: ["art_9"] },
    { date: "2026-08-12", major: true, title: "MISE EN APPLICATION DU RÈGLEMENT",
      desc: "Le règlement devient applicable dans tous les États membres. Publication attendue des actes d'exécution relatifs à l'étiquetage harmonisé.", refs: ["art_71", "art_12"] },
    { date: "2027-01-31", major: false, title: "Lignes directrices formats d'emballage",
      desc: "Lignes directrices expliquant l'annexe V (formats restreints), publiées en consultation avec les États membres et l'EFSA.", refs: ["art_25"] },
    { date: "2027-02-12", major: false, title: "Observatoire européen du réemploi",
      desc: "Mise en place d'un observatoire chargé de suivre la mise en œuvre et de collecter les données sur les pratiques de réemploi.", refs: ["art_31"] },
    { date: "2028-08-12", major: true, title: "Étiquetage harmonisé obligatoire",
      desc: "Les emballages mis sur le marché portent l'étiquette harmonisée : identification des matériaux, consignes de tri, pictogrammes, substances préoccupantes, QR code REP.", refs: ["art_12", "art_13"] },
    { date: "2029-02-12", major: false, title: "Application de l'article 67 §5",
      desc: "Début d'application des dispositions modifiant la directive SUP 2019/904 introduites par le PPWR.", refs: ["art_67"] },
    { date: "2030-01-01", major: true, title: "Échéance majeure : conformité des emballages",
      items: [
        ["Classes de recyclabilité A/B/C obligatoires pour la mise sur le marché", "art_6"],
        ["Contenu recyclé minimal : 30 % PET au contact, 10 % autres plastiques de contact, 30 % bouteilles boissons en plastique à usage unique, 35 % autres emballages plastiques", "art_7"],
        ["Objectifs de réemploi : 10 % des emballages de boissons (à emporter)", "art_29"],
        ["Interdiction des formats visés à l'annexe V : fruits & légumes frais emballés < 1,5 kg, mini-format hôtellerie…", "art_25"],
        ["Stations de recharge : effort de 10 % de la surface de vente > 400 m²", "art_28"],
        ["Preuve de réalisation des objectifs de réemploi (calcul art. 30)", "art_30"],
        ["Prévention : -5 % de déchets d'emballages par habitant vs 2018", "art_43"]
      ] },
    { date: "2035-01-01", major: true, title: "Recyclage à l'échelle & objectifs renforcés",
      items: [
        ["Évaluation de la recyclabilité fondée aussi sur les taux de recyclage effectifs à grande échelle", "art_6"],
        ["Prévention : -10 % de déchets d'emballages par habitant vs 2018", "art_43"],
        ["Examen par la Commission des exceptions à la conception pour le recyclage", "art_6"]
      ] },
    { date: "2038-01-01", major: true, title: "Classe B minimum",
      desc: "Seuls les emballages relevant au moins de la classe B de recyclabilité peuvent être mis sur le marché de l'UE.", refs: ["art_6"] },
    { date: "2040-01-01", major: true, title: "Objectifs 2040",
      items: [
        ["Contenu recyclé renforcé : jusqu'à 65 % (bouteilles boissons UU et autres emballages plastiques), 50 % plastiques de contact", "art_7"],
        ["Réemploi boissons : 40 % (à emporter)", "art_29"],
        ["Prévention : -15 % de déchets d'emballages par habitant vs 2018", "art_43"]
      ] }
  ],
  actors: [
    { id: "fabricant", name: "Fabricant d'emballages",
      summary: "Conçoit et fabrique des emballages ou matériaux d'emballage destinés au marché de l'UE.",
      duties: [
        ["Concevoir des emballages conformes aux exigences de durabilité : substances (art. 5), recyclabilité (art. 6), contenu recyclé (art. 7), biosourcé (art. 8), compostabilité (art. 9), minimisation (art. 10), réutilisabilité (art. 11)", "art_5"],
        ["Réaliser l'évaluation de la conformité selon la procédure de l'annexe VII", "art_38"],
        ["Établir la déclaration UE de conformité et la conserver 10 ans", "art_39"],
        ["Apposer marquage et étiquetage harmonisés", "art_12"],
        ["S'enregistrer au registre des producteurs de chaque État membre de mise sur le marché", "art_44"],
        ["Fournir toutes informations aux fournisseurs/distributeurs pour la chaîne de conformité", "art_16"]
      ] },
    { id: "producteur", name: "Producteur / metteur sur le marché de produits emballés",
      summary: "Remplit des produits emballés, importe des produits emballés ou vend des produits sous sa marque (« producteur » au sens REP).",
      duties: [
        ["Utiliser uniquement des emballages conformes (exigences art. 5 à 12)", "art_4"],
        ["Éviter les emballages excessifs : poids/volume réduits au minimum", "art_24"],
        ["S'inscrire au registre des producteurs avant la mise sur le marché", "art_44"],
        ["Adhérer à un schéma REP ou en organiser l'exécution individuelle ; contributions éco-modulées selon la recyclabilité", "art_45"],
        ["Déclarer les quantités d'emballages mises sur le marché", "art_56"]
      ] },
    { id: "importateur", name: "Importateur",
      summary: "Met sur le marché du UE des emballages ou produits emballés originaires de pays tiers.",
      duties: [
        ["Vérifier que le fabricant hors UE a réalisé l'évaluation de conformité et constitué la documentation technique", "art_18"],
        ["S'assurer de l'apposition du marquage/étiquetage et d'un responsable établi dans l'UE identifiable", "art_17"],
        ["Assumer les obligations de fabricant si le fabricant hors UE ne s'y conforme pas", "art_21"],
        ["Informer les autorités en cas de non-conformité ou de risque", "art_58"]
      ] },
    { id: "distributeur", name: "Distributeur / commerce de détail",
      summary: "Fournit des emballages ou produits emballés aux utilisateurs finaux (magasins, grossistes).",
      duties: [
        ["Ne pas mettre à disposition d'emballages non conformes ; vérifier DoC et marquage", "art_19"],
        ["Proposer la recharge : 10 % de la surface > 400 m² dédiée aux stations de recharge à partir de 2030", "art_28"],
        ["Vente à emporter : offrir une option de réemploi (10 % en 2030, 40 % en 2040) et informer le consommateur", "art_32"],
        ["Obligation d'offre de réemploi pour les distributeurs finaux du secteur de la vente à emporter", "art_33"],
        ["Agir comme fabricant en cas de reconditionnement ou d'apposition de sa marque", "art_21"]
      ] },
    { id: "ecommerce", name: "E-commerce & prestataires logistiques",
      summary: "Vente à distance et exécution des commandes : emballages d'expédition et de transport.",
      duties: [
        ["Respecter les exigences d'emballage pour l'expédition (minimisation, vide ≤ 50 % pour emballages groupés/transport e-commerce)", "art_24"],
        ["Les prestataires « fulfilment » vérifient la conformité des emballages qu'ils traitent", "art_20"],
        ["Étiquetage de tri également requis pour les emballages de transport du commerce en ligne", "art_12"],
        ["Responsabilité de producteur possible selon le modèle commercial (marque propre, importation)", "art_3"]
      ] },
    { id: "ppro", name: "Organisation REP & opérateurs de gestion des déchets",
      summary: "Schémas de responsabilité élargie des producteurs, collecte, tri et valorisation.",
      duties: [
        ["Couvrir les coûts de gestion des déchets d'emballages et moduler les contributions (recyclabilité)", "art_45"],
        ["Obtenir/maintenir l'autorisation d'exécution des obligations REP", "art_47"],
        ["Organiser systèmes de reprise/collecte séparée et contribuer aux systèmes de consigne", "art_48"],
        ["Atteindre les objectifs de recyclage par matériau (55 % plastique… 70 % global en 2030)", "art_52"],
        ["Communiquer les données de collecte/tri/recyclage aux producteurs et autorités", "art_23"]
      ] }
  ],
  glossary: [
    ["Emballage de vente", "Emballage primaire présenté à l'utilisateur final (ex-correspond à l'emballage primaire).", "art_3"],
    ["Emballage groupé", "Emballage secondaire regroupant plusieurs unités de vente (correspond à l'emballage secondaire).", "art_3"],
    ["Emballage de transport", "Emballage tertiaire facilitant la manutention et le transport (ex-caisses, palettes).", "art_3"],
    ["Producteur", "Toute personne qui met des emballages ou des produits emballés sur le marché pour la première fois sur le territoire national (fabricant, importateur, vendeur à distance, remplisseur).", "art_3"],
    ["Recyclabilité (classes A/B/C)", "Capacité d'un emballage à être conçu pour le recyclage puis effectivement recyclé à l'échelle ; performance notée A, B ou C — en dessous de C, mise sur le marché interdite dès 2030.", "art_6"],
    ["Contenu recyclé (PCR)", "Pourcentage minimum de matière issue de déchets plastiques post-consommation, calculé en moyenne par usine et par an.", "art_7"],
    ["Substance préoccupante", "Substances (dont PFAS) restreintes dans les emballages au-delà de seuils fixés par acte délégué.", "art_5"],
    ["Minimisation", "Le poids et le volume de l'emballage doivent être réduits au minimum nécessaire à sa fonctionnalité ; doubles fonds et parois factices interdits.", "art_10"],
    ["Emballage réutilisable", "Conçu, mis sur le marché et exploité pour accomplir plusieurs rotations dans un système de réemploi, tout en garantissant sécurité et hygiène.", "art_11"],
    ["REP", "Responsabilité élargie des producteurs : les producteurs couvrent les coûts de collecte et de gestion de leurs emballages en fin de vie, avec modulation écologique.", "art_45"],
    ["Consigne", "Système de dépôt-retour garantissant une collecte séparée élevée des emballages de boissons (90 % de collecte cible).", "art_50"],
    ["Déclaration UE de conformité (DoC)", "Document par lequel le fabricant atteste la conformité de l'emballage aux exigences des articles 5 à 12 ; modèle en annexe VIII.", "art_39"],
    ["Biosourcé", "Part de matière issue de biomasse dans les emballages plastiques, avec exigences de durabilité et biobasé minimal selon acte délégué.", "art_8"],
    ["Formats d'emballage interdits", "Formats retirés du marché dès 2030 : fruits/légumes frais emballés < 1,5 kg, mini-format hôtellerie (annexe V).", "art_25"],
    ["Recyclage à l'échelle", "Critère mesurant la quantité effective de matériaux recyclés par catégorie d'emballage, appliquée à partir de 2035.", "art_6"]
  ],
  acts: [
    { topic: "Méthode uniforme d'évaluation de la recyclabilité & critères de conception",
      type: "Acte délégué", base: "art_6", due: "2028-01-01",
      status: "inprogress", note: "Projet soumis à retour d'expérience en 2025 ; adoption attendue pour application au 01/01/2030." },
    { topic: "Étiquetage harmonisé des emballages (pictogrammes, QR, méthode d'identification des matériaux)",
      type: "Acte d'exécution", base: "art_12", due: "2026-08-12",
      status: "inprogress", note: "Doit être publié au plus tard le 12/08/2026 ; application de l'étiquetage à partir du 12/08/2028." },
    { topic: "Symbole harmonisé des systèmes de consigne",
      type: "Acte d'exécution", base: "art_12", due: "2026-08-12",
      status: "inprogress", note: "Symbole apposé sur les emballages soumis à consigne et sur les contenants de collecte." },
    { topic: "Format et schéma du registre des producteurs (interopérabilité)",
      type: "Actes d'exécution", base: "art_44", due: "2026-08-12",
      status: "inprogress", note: "Spécifications d'enregistrement et d'échange de données entre registres nationaux." },
    { topic: "Normes harmonisées (CEN) : réutilisabilité, minimisation, méthodes d'essai",
      type: "Mandat de normalisation", base: "art_36", due: null,
      status: "inprogress", note: "Présomption de conformité lorsque les normes harmonisées seront publiées au JO (EN 13428 en révision)." },
    { topic: "Seuils « substance préoccupante » (PFAS et autres)",
      type: "Acte délégué", base: "art_5", due: null,
      status: "expected", note: "Délégation pour fixer les seuils de concentration ; à surveiller au JO." },
    { topic: "Exigences détaillées biosourcé (méthode de calcul, certification)",
      type: "Acte délégué", base: "art_8", due: null,
      status: "expected", note: "Fixera les parts minimales de matières biosourcées et leur vérification." }
  ]
};

window.PPWR_META.en = {
  timeline: [
    { date: "2025-02-11", major: false, title: "Entry into force",
      desc: "Published in the OJ on 22 January 2025; entered into force 20 days later.", refs: ["art_71"] },
    { date: "2025-07-12", major: false, title: "Competent authorities designated",
      desc: "Each Member State notifies the Commission of its market-surveillance and producer-register authorities.", refs: ["art_40"] },
    { date: "2026-02-12", major: false, title: "Home-compostable standards",
      desc: "The Commission asks European standardisation organisations to prepare harmonised standards for home-compostable packaging.", refs: ["art_9"] },
    { date: "2026-08-12", major: true, title: "REGULATION BECOMES APPLICABLE",
      desc: "The regulation applies across all Member States. Implementing acts on harmonised labelling are expected around this date.", refs: ["art_71", "art_12"] },
    { date: "2027-01-31", major: false, title: "Packaging format guidelines",
      desc: "Guidelines explaining Annex V (restricted formats), issued in consultation with Member States and EFSA.", refs: ["art_25"] },
    { date: "2027-02-12", major: false, title: "European Observatory on Re-use",
      desc: "Establishment of an observatory tracking implementation and collecting re-use practice data.", refs: ["art_31"] },
    { date: "2028-08-12", major: true, title: "Harmonised labelling mandatory",
      desc: "Packaging placed on the market carries the harmonised label: material identification, sorting instructions, pictograms, substances of concern, EPR QR code.", refs: ["art_12", "art_13"] },
    { date: "2029-02-12", major: false, title: "Article 67(5) applies",
      desc: "Start of application of the provisions amending Directive (EU) 2019/904 introduced by the PPWR.", refs: ["art_67"] },
    { date: "2030-01-01", major: true, title: "Major deadline: packaging conformity",
      items: [
        ["Recyclability grades A/B/C mandatory for market access", "art_6"],
        ["Minimum recycled content: 30% contact-sensitive PET, 10% other contact-sensitive plastics, 30% single-use beverage bottles, 35% other plastic packaging", "art_7"],
        ["Re-use targets: 10% of takeaway beverage packaging", "art_29"],
        ["Ban on formats listed in Annex V: fresh fruit & veg < 1.5 kg, hotel miniatures…", "art_25"],
        ["Refill stations: effort to dedicate 10% of sales area > 400 m²", "art_28"],
        ["Proof of achievement of re-use targets (calculation under Art. 30)", "art_30"],
        ["Prevention: -5% packaging waste per capita vs 2018", "art_43"]
      ] },
    { date: "2035-01-01", major: true, title: "Recycling at scale & tighter criteria",
      items: [
        ["Recyclability assessment also based on actual large-scale recycling rates", "art_6"],
        ["Prevention: -10% packaging waste per capita vs 2018", "art_43"],
        ["Commission review of design-for-recycling exemptions", "art_6"]
      ] },
    { date: "2038-01-01", major: true, title: "Grade B minimum",
      desc: "Only packaging graded at least class B for recyclability may be placed on the EU market.", refs: ["art_6"] },
    { date: "2040-01-01", major: true, title: "2040 targets",
      items: [
        ["Higher recycled content: up to 65% (single-use beverage bottles and other plastic packaging), 50% contact plastics", "art_7"],
        ["Beverage re-use: 40% (takeaway)", "art_29"],
        ["Prevention: -15% packaging waste per capita vs 2018", "art_43"]
      ] }
  ],
  actors: [
    { id: "manufacturer", name: "Packaging manufacturer",
      summary: "Designs and manufactures packaging or packaging materials for the EU market.",
      duties: [
        ["Design compliant packaging: substances (Art. 5), recyclability (Art. 6), recycled content (Art. 7), bio-based (Art. 8), compostability (Art. 9), minimisation (Art. 10), reusability (Art. 11)", "art_5"],
        ["Carry out conformity assessment following the procedure in Annex VII", "art_38"],
        ["Draw up the EU Declaration of Conformity and keep it for 10 years", "art_39"],
        ["Affix marking and harmonised labelling", "art_12"],
        ["Register in the producer register of each Member State of placement", "art_44"],
        ["Provide all information upstream/downstream in the supply chain", "art_16"]
      ] },
    { id: "producer", name: "Producer / packed-goods marketer",
      summary: "Fills packaged products, imports packaged goods or sells under own brand ('producer' under EPR).",
      duties: [
        ["Use only compliant packaging (requirements of Arts. 5–12)", "art_4"],
        ["Avoid excessive packaging: weight/volume kept to the necessary minimum", "art_24"],
        ["Register in the producer register before placing on the market", "art_44"],
        ["Join an EPR scheme or organise individual compliance; eco-modulated fees based on recyclability", "art_45"],
        ["Report quantities of packaging placed on the market", "art_56"]
      ] },
    { id: "importer", name: "Importer",
      summary: "Places packaging or packaged products from third countries on the EU market.",
      duties: [
        ["Verify the non-EU manufacturer carried out conformity assessment and holds technical documentation", "art_18"],
        ["Ensure marking/labelling and an identifiable responsible person established in the EU", "art_17"],
        ["Take over manufacturer obligations where the non-EU manufacturer does not comply", "art_21"],
        ["Notify authorities in case of non-compliance or risk", "art_58"]
      ] },
    { id: "retailer", name: "Distributor / retail",
      summary: "Supplies packaging or packaged products to end users (shops, wholesalers).",
      duties: [
        ["Do not make non-compliant packaging available; check DoC and marking", "art_19"],
        ["Offer refill: dedicate 10% of sales areas > 400 m² to refill stations from 2030", "art_28"],
        ["Takeaway: offer a re-use option (10% in 2030, 40% in 2040) and inform consumers", "art_32"],
        ["Re-use offer obligation for final distributors in takeaway sector", "art_33"],
        ["Act as manufacturer when repacking or selling under own brand", "art_21"]
      ] },
    { id: "ecommerce", name: "E-commerce & fulfilment providers",
      summary: "Distance selling and order fulfilment: shipping and transport packaging.",
      duties: [
        ["Comply with packaging requirements for shipping (minimisation, void space ≤ 50% for grouped/transport e-commerce packaging)", "art_24"],
        ["Fulfilment providers verify compliance of packaging they handle", "art_20"],
        ["Sorting labelling also required for transport packaging in online commerce", "art_12"],
        ["Possible producer responsibility depending on business model (own brand, importing)", "art_3"]
      ] },
    { id: "ppro", name: "PRO & waste-management operators",
      summary: "Extended producer responsibility schemes, collection, sorting and recovery.",
      duties: [
        ["Cover waste-management costs and eco-modulate producer fees", "art_45"],
        ["Obtain/maintain authorisation to execute EPR obligations", "art_47"],
        ["Organise take-back/separate collection systems and contribute to deposit-return systems", "art_48"],
        ["Meet recycling targets per material (55% plastic… 70% overall by 2030)", "art_52"],
        ["Report collection/sorting/recycling data to producers and authorities", "art_23"]
      ] }
  ],
  glossary: [
    ["Sales packaging", "Primary packaging presented to the end user (formerly primary packaging).", "art_3"],
    ["Grouped packaging", "Secondary packaging grouping several sales units.", "art_3"],
    ["Transport packaging", "Tertiary packaging facilitating handling and transport (crates, pallets).", "art_3"],
    ["Producer", "Anyone who first places packaging or packaged products on the national territory (manufacturer, importer, distance seller, filler).", "art_3"],
    ["Recyclability (grades A/B/C)", "Ability of packaging to be designed for recycling and actually recycled at scale; graded A, B or C — below grade C, market access banned from 2030.", "art_6"],
    ["Recycled content (PCR)", "Minimum share of material recovered from post-consumer plastic waste, averaged per plant and per year.", "art_7"],
    ["Substance of concern", "Substances (incl. PFAS) restricted in packaging above thresholds set by delegated act.", "art_5"],
    ["Minimisation", "Packaging weight and volume reduced to the minimum needed for functionality; double walls/false bottoms banned.", "art_10"],
    ["Reusable packaging", "Designed, placed on the market and used for multiple rotations within a re-use system while ensuring safety and hygiene.", "art_11"],
    ["EPR", "Extended Producer Responsibility: producers cover the cost of managing their end-of-life packaging, with ecological modulation.", "art_45"],
    ["Deposit-return system", "Deposit system ensuring high separate collection of beverage packaging (90% collection target).", "art_50"],
    ["EU Declaration of Conformity (DoC)", "Document whereby the manufacturer attests conformity with Articles 5 to 12; model in Annex VIII.", "art_39"],
    ["Bio-based", "Share of biomass-derived material in plastic packaging, with sustainability and minimum bio-based requirements set by delegated act.", "art_8"],
    ["Banned packaging formats", "Formats removed from the market from 2030: packaged fresh fruit/vegetables < 1.5 kg, hotel miniatures (Annex V).", "art_25"],
    ["Recycling at scale", "Criterion measuring the actual amount of material recycled per packaging category, applying from 2035.", "art_6"]
  ],
  acts: [
    { topic: "Uniform method for assessing recyclability & design-for-recycling criteria",
      type: "Delegated act", base: "art_6", due: "2028-01-01",
      status: "inprogress", note: "Draft submitted for feedback in 2025; adoption expected for application from 01/01/2030." },
    { topic: "Harmonised packaging labelling (pictograms, QR, material identification method)",
      type: "Implementing act", base: "art_12", due: "2026-08-12",
      status: "inprogress", note: "Must be published by 12/08/2026 at the latest; labelling applies from 12/08/2028." },
    { topic: "Harmonised deposit-system symbol",
      type: "Implementing act", base: "art_12", due: "2026-08-12",
      status: "inprogress", note: "Symbol affixed to deposit packaging and collection receptacles." },
    { topic: "Producer register format & schema (interoperability)",
      type: "Implementing acts", base: "art_44", due: "2026-08-12",
      status: "inprogress", note: "Specifications for registration and data exchange between national registers." },
    { topic: "Harmonised standards (CEN): reusability, minimisation, test methods",
      type: "Standardisation mandate", base: "art_36", due: null,
      status: "inprogress", note: "Presumption of conformity once harmonised standards are cited in the OJ (EN 13428 under revision)." },
    { topic: "\"Substance of concern\" thresholds (PFAS and others)",
      type: "Delegated act", base: "art_5", due: null,
      status: "expected", note: "Empowers the Commission to set concentration thresholds; watch the OJ." },
    { topic: "Detailed bio-based requirements (calculation method, certification)",
      type: "Delegated act", base: "art_8", due: null,
      status: "expected", note: "Will set minimum bio-based shares and verification rules." }
  ]
};
