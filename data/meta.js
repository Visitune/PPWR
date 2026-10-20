/* Enrichissement éditorial du wiki PPWR — rédigé et sourcé depuis le texte du règlement (UE) 2025/40.
   Les champs "ref" pointent vers des articles du règlement ; les statuts des actes sont indicatifs
   et doivent être revérifiés sur eur-lex.europa.eu. Dernière vérification éditoriale : 20 octobre 2026. */
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
    { date: "2026-12-31", major: false, title: "Actes relatifs au contenu recyclé plastique",
      desc: "Échéance prévue pour les actes d'exécution et l'acte délégué relatifs au calcul, à la vérification et aux critères de durabilité du contenu recyclé plastique. Cette échéance ne fixe pas à elle seule la date d'obligation pour les opérateurs.", refs: ["art_7"] },
    { date: "2027-02-12", major: false, title: "Observatoire européen du réemploi",
      desc: "Mise en place d'un observatoire chargé de suivre la mise en œuvre et de collecter les données sur les pratiques de réemploi.", refs: ["art_31"] },
    { date: "2027-06-30", major: false, title: "Méthode de calcul des objectifs de réemploi",
      desc: "La Commission adopte l'acte d'exécution établissant la méthode de calcul des objectifs de réemploi. L'obligation de démonstration peut être décalée de 18 mois après son entrée en vigueur.", refs: ["art_30"] },
    { date: "2028-08-12", major: true, title: "Échéance de l'étiquetage harmonisé",
      desc: "L'étiquetage harmonisé s'applique à partir du 12 août 2028 ou 24 mois après l'entrée en vigueur des actes d'exécution pertinents, si cette date est postérieure.", refs: ["art_12", "art_13"] },
    { date: "2029-02-12", major: false, title: "Application de l'article 67 §5",
      desc: "Début d'application des dispositions modifiant la directive SUP 2019/904 introduites par le PPWR.", refs: ["art_67"] },
    { date: "2030-01-01", major: true, title: "Échéance majeure : conformité des emballages",
      items: [
        ["Les emballages hors classes A, B ou C ne peuvent plus être mis sur le marché, sous réserve du mécanisme de report lié à l'entrée en vigueur des actes délégués", "art_6"],
        ["Contenu recyclé minimal : 30 % PET au contact, 10 % autres plastiques de contact, 30 % bouteilles de boissons à usage unique, 35 % autres emballages plastiques — ou trois ans après l'acte d'exécution si cette date est postérieure", "art_7"],
        ["Objectifs de réemploi : 10 % des emballages de boissons (à emporter)", "art_29"],
        ["Interdiction des formats visés à l'annexe V : fruits & légumes frais emballés < 1,5 kg, mini-format hôtellerie…", "art_25"],
        ["Stations de recharge : effort de 10 % de la surface de vente > 400 m²", "art_28"],
        ["Démonstration des objectifs de réemploi : à partir de 2030 ou 18 mois après l'acte d'exécution méthodologique, si cette date est postérieure", "art_30"],
        ["Prévention : -5 % de déchets d'emballages par habitant vs 2018", "art_43"]
      ] },
    { date: "2035-01-01", major: true, title: "Recyclage à l'échelle & prévention renforcée",
      items: [
        ["L'exigence de recyclage à l'échelle s'applique, sauf report jusqu'à cinq ans après l'acte d'exécution pertinent", "art_6"],
        ["Prévention : -10 % de déchets d'emballages par habitant vs 2018", "art_43"],
        ["Examen par la Commission des exceptions à la conception pour le recyclage", "art_6"]
      ] },
    { date: "2038-01-01", major: true, title: "Classe B minimum",
      desc: "Seuls les emballages relevant au moins de la classe B de recyclabilité peuvent être mis sur le marché de l'UE.", refs: ["art_6"] },
    { date: "2040-01-01", major: true, title: "Objectifs 2040",
      items: [
        ["Contenu recyclé : 50 % PET au contact, 25 % autres plastiques au contact, 65 % bouteilles de boissons à usage unique, 65 % autres emballages plastiques", "art_7"],
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
        ["Vente à emporter : proposer la recharge des contenants personnels à partir de 2027 et respecter les objectifs de réemploi applicables au secteur", "art_32"],
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
    ["Recyclabilité (classes A/B/C)", "Capacité d'un emballage à satisfaire les critères de conception et, selon l'étape applicable, de recyclage à l'échelle ; performance notée A, B ou C, avec des dates d'application liées aux actes européens.", "art_6"],
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
      status: "inprogress", note: "Échéance d'adoption au plus tard le 01/01/2028 ; l'application des critères intervient 24 mois après l'entrée en vigueur des actes délégués.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Étiquetage harmonisé des emballages (pictogrammes, QR, méthode d'identification des matériaux)",
      type: "Acte d'exécution", base: "art_12", due: "2026-08-12",
      status: "review", note: "Échéance d'adoption dépassée au 12/08/2026 ; l'application intervient 24 mois après l'entrée en vigueur de l'acte pertinent si cette date est postérieure au 12/08/2028.", source: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC03084" },
    { topic: "Symbole harmonisé des systèmes de consigne",
      type: "Acte d'exécution", base: "art_12", due: "2026-08-12",
      status: "review", note: "Échéance d'adoption dépassée au 12/08/2026 ; état de publication à confirmer dans le Journal officiel.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Format et schéma du registre des producteurs (interopérabilité)",
      type: "Actes d'exécution", base: "art_44", due: "2026-08-12",
      status: "review", note: "Le registre national doit être établi dans les 18 mois suivant l'entrée en vigueur du premier acte d'exécution adopté au titre de l'article 44(14) ; il ne s'agit pas d'une échéance fixe au 12/08/2026.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Normes harmonisées (CEN) : réutilisabilité, minimisation, méthodes d'essai",
      type: "Mandat de normalisation", base: "art_36", due: null,
      status: "inprogress", note: "La présomption de conformité dépend de la publication des références des normes harmonisées au Journal officiel ; aucune date d'entrée en vigueur ne doit être inventée.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Seuils « substance préoccupante » (PFAS et autres)",
      type: "Acte délégué", base: "art_5", due: null,
      status: "expected", note: "Délégation permettant de préciser les seuils de concentration ; à suivre dans le registre des actes délégués et au Journal officiel.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Exigences détaillées biosourcé (méthode de calcul, certification)",
      type: "Acte délégué", base: "art_8", due: null,
      status: "expected", note: "Fixera les parts minimales de matières biosourcées et les modalités de vérification.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Exemption de certains opérateurs utilisant des films étirables et sangles de palettes",
      type: "Acte délégué", base: "art_29", due: null,
      status: "adopted", note: "Décision déléguée (UE) 2026/429 adoptée le 25/02/2026 et publiée au JO le 06/05/2026 ; acte en vigueur.", source: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026D0429" }
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
    { date: "2026-12-31", major: false, title: "Plastic recycled-content acts",
      desc: "Deadline provided for implementing and delegated acts on calculating, verifying and setting sustainability criteria for recycled plastic content. This deadline does not by itself set the operator compliance date.", refs: ["art_7"] },
    { date: "2027-02-12", major: false, title: "European Observatory on Re-use",
      desc: "Establishment of an observatory tracking implementation and collecting re-use practice data.", refs: ["art_31"] },
    { date: "2027-06-30", major: false, title: "Method for calculating re-use targets",
      desc: "The Commission adopts the implementing act establishing the calculation method for re-use targets. The demonstration obligation may begin 18 months after its entry into force if later.", refs: ["art_30"] },
    { date: "2028-08-12", major: true, title: "Harmonised labelling deadline",
      desc: "Harmonised labelling applies from 12 August 2028 or 24 months after the relevant implementing acts enter into force, whichever is later.", refs: ["art_12", "art_13"] },
    { date: "2029-02-12", major: false, title: "Article 67(5) applies",
      desc: "Start of application of the provisions amending Directive (EU) 2019/904 introduced by the PPWR.", refs: ["art_67"] },
    { date: "2030-01-01", major: true, title: "Major deadline: packaging conformity",
      items: [
        ["Packaging outside recyclability grades A, B or C may no longer be placed on the market, subject to the mechanism linked to the entry into force of the delegated acts", "art_6"],
        ["Minimum recycled content: 30% contact-sensitive PET, 10% other contact-sensitive plastics, 30% single-use beverage bottles, 35% other plastic packaging — or three years after the implementing act if later", "art_7"],
        ["Re-use targets: 10% of takeaway beverage packaging", "art_29"],
        ["Ban on formats listed in Annex V: fresh fruit & veg < 1.5 kg, hotel miniatures…", "art_25"],
        ["Refill stations: effort to dedicate 10% of sales area > 400 m²", "art_28"],
        ["Demonstration of re-use targets: from 2030 or 18 months after the methodological implementing act, if later", "art_30"],
        ["Prevention: -5% packaging waste per capita vs 2018", "art_43"]
      ] },
    { date: "2035-01-01", major: true, title: "Recycling at scale & stronger prevention",
      items: [
        ["The recycled-at-scale requirement applies, subject to a possible delay of up to five years after the relevant implementing act", "art_6"],
        ["Prevention: -10% packaging waste per capita vs 2018", "art_43"],
        ["Commission review of design-for-recycling exemptions", "art_6"]
      ] },
    { date: "2038-01-01", major: true, title: "Grade B minimum",
      desc: "Only packaging graded at least class B for recyclability may be placed on the EU market.", refs: ["art_6"] },
    { date: "2040-01-01", major: true, title: "2040 targets",
      items: [
        ["Recycled content: 50% contact-sensitive PET, 25% other contact-sensitive plastics, 65% single-use beverage bottles, 65% other plastic packaging", "art_7"],
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
        ["Takeaway: allow consumers to bring their own containers from 2027 and meet the re-use targets applicable to the sector", "art_32"],
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
    ["Recyclability (grades A/B/C)", "Ability of packaging to meet design-for-recycling and, at the relevant stage, recycled-at-scale criteria; graded A, B or C, with application dates linked to the European acts.", "art_6"],
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
      status: "inprogress", note: "Adoption deadline is 01/01/2028; the design criteria apply 24 months after the delegated acts enter into force.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Harmonised packaging labelling (pictograms, QR, material identification method)",
      type: "Implementing act", base: "art_12", due: "2026-08-12",
      status: "review", note: "Adoption deadline passed on 12/08/2026; labelling applies 24 months after the relevant act enters into force if later than 12/08/2028.", source: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC03084" },
    { topic: "Harmonised deposit-system symbol",
      type: "Implementing act", base: "art_12", due: "2026-08-12",
      status: "review", note: "Adoption deadline passed on 12/08/2026; publication status must be confirmed in the Official Journal.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Producer register format & schema (interoperability)",
      type: "Implementing acts", base: "art_44", due: "2026-08-12",
      status: "review", note: "National registers must be established within 18 months of the entry into force of the first implementing act adopted under Article 44(14); this is not a fixed 12/08/2026 deadline.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Harmonised standards (CEN): reusability, minimisation, test methods",
      type: "Standardisation mandate", base: "art_36", due: null,
      status: "inprogress", note: "The presumption of conformity depends on publication of harmonised-standard references in the Official Journal; no application date should be invented.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "\"Substance of concern\" thresholds (PFAS and others)",
      type: "Delegated act", base: "art_5", due: null,
      status: "expected", note: "Delegation allowing the Commission to specify concentration thresholds; monitor the delegated-acts register and the Official Journal.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Detailed bio-based requirements (calculation method, certification)",
      type: "Delegated act", base: "art_8", due: null,
      status: "expected", note: "Will set minimum bio-based shares and verification rules.", source: "https://eur-lex.europa.eu/eli/reg/2025/40/oj" },
    { topic: "Exemption for certain operators using pallet wrappings and straps",
      type: "Delegated act", base: "art_29", due: null,
      status: "adopted", note: "Commission Delegated Decision (EU) 2026/429 adopted on 25/02/2026 and published in the OJ on 06/05/2026; in force.", source: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32026D0429" }
  ]
};
