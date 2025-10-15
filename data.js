// ===============================
// MÉMOIRE DE CENDRE — data.js
// ===============================

window.MemoireDeCendre = {

  // === ACTE I ===
  "A1_S1": {
    "act": 1,
    "title": "Le Briefing",
    "text": "Bureau vitré, open-space trop calme. On m’a embauché pour « réduire les dérives émotionnelles ».\nJ’observe les tics, les micro-mensonges, la peur sous les sourires.\nJe peux appliquer la méthode, écouter, ou tricher.",
    "choices": [
      { "label": "Appliquer la méthode — disséquer, diagnostiquer, classer.", "next": "A1_S1a", "tone": "lucide", "log": "J’ai choisi la netteté au risque de devenir froid." },
      { "label": "Écouter les douleurs — perdre du pouvoir, gagner du réel.", "next": "A1_S1b", "tone": "blesse", "log": "J’ai écouté au lieu de conclure." },
      { "label": "Tricher au rapport — protéger les fragiles, mentir à soi.", "next": "A1_S1c", "tone": "febrile", "log": "J’ai maquillé la vérité pour sauver des visages." }
    ]
  },

  "A1_S1a": {
    "act": 1,
    "title": "Mi-humain",
    "text": "La lucidité sans compassion coupe net. Je deviens utile, pas humain.",
    "choices": [{ "label": "Continuer", "next": "A1_S2" }]
  },

  "A1_S1b": {
    "act": 1,
    "title": "Présence",
    "text": "Le réel parle si on se tait. Mon autorité baisse, leur vérité monte.",
    "choices": [{ "label": "Continuer", "next": "A1_S2" }]
  },

  "A1_S1c": {
    "act": 1,
    "title": "Masque propre",
    "text": "J’ai protégé au prix d’un mensonge. Le masque colle mieux que la peau.",
    "choices": [{ "label": "Continuer", "next": "A1_S2" }]
  },

  "A1_S2": {
    "act": 1,
    "title": "L'Écran blanc",
    "text": "Devant moi : un client vidé, écran noir devant lui. Je lui parle, il me demande : « Vous croyez encore qu'on peut guérir de soi ? »\nJe reste suspendu. La pièce est pleine de miroirs, chacun reflète une version de moi.",
    "choices": [
      { "label": "Je lui réponds que la guérison, c’est l’oubli.", "next": "A1_S3" },
      { "label": "Je lui dis que non, on apprend à vivre avec la faille.", "next": "A1_S3" },
      { "label": "Je ne dis rien, je note simplement : 'sujet lucide, dangereux'.", "next": "A1_S3" }
    ]
  },

  "A1_S3": {
    "act": 1,
    "title": "La Chambre sans portes",
    "text": "Le monde dort. Je comprends que la vérité est un poison lent.\nL'écran m’affiche un mot : 'OBÉIR' puis 'RÉVEILLE-TOI'.\nEt je sens que quelqu’un m’observe derrière le miroir.",
    "choices": [{ "label": "Fin de l’Acte I", "next": "A2_S1" }]
  },

  // === ACTE II ===
  "A2_S1": {
    "act": 2,
    "title": "Le Cabinet",
    "text": "Je me retrouve face à une silhouette immobile — mon double, mon adversaire. Sa voix résonne :\n« Tu veux sauver les âmes, mais la tienne, tu l’as vendue à l’image qu’ils veulent de toi. »",
    "choices": [
      { "label": "Je nie, je dis que je cherche la vérité.", "next": "A2_S2" },
      { "label": "Je lui demande : 'Et toi ? Tu cherches quoi ?'", "next": "A2_S2" },
      { "label": "Je reste silencieux.", "next": "A2_S2" }
    ]
  },

  "A2_S2": {
    "act": 2,
    "title": "Le Couloir des Signatures",
    "text": "Sur les murs, des contrats signés de mon nom. Des promesses, des trahisons, des illusions.\nIl me dit : 'Tu n’as jamais menti, tu as juste appris à séduire le vrai.'",
    "choices": [
      { "label": "Je veux déchirer les contrats.", "next": "A2_S3" },
      { "label": "Je les lis tous, un par un.", "next": "A2_S3" },
      { "label": "Je signe encore, pour ne pas perdre pied.", "next": "A2_S3" }
    ]
  },

  "A2_S3": {
    "act": 2,
    "title": "L’Encre et la Cendre",
    "text": "Ses yeux plongent dans les miens. Je comprends qu’il sait tout de moi, parce qu’il est fait des fragments que j’ai niés.",
    "adv": "« Si tu me détruis, tu feras ce que font tous les hommes quand ils veulent être purs : tu te prendras pour Dieu. Pas celui qui pardonne, non — celui qui juge, seul, en silence, persuadé qu’il ne tombera plus jamais. Et c’est là que je renaîtrai. »",
    "choices": [{ "label": "Fin de l’Acte II", "next": "A3_S1" }]
  },

  // === ACTE III ===
  "A3_S1": {
    "act": 3,
    "title": "La Place des Échos",
    "text": "J’avance sur la place. Des écrans me diffusent : on m’accuse, on rit. Une foule de visages qui me ressemblent.\nJe peux hurler, me taire, ou écrire.",
    "choices": [
      { "label": "Je hurle : qu’ils entendent enfin.", "next": "A3_S2" },
      { "label": "Je me tais, je laisse la peur parler pour moi.", "next": "A3_S2" },
      { "label": "J’écris, je laisse mes mots se propager sans visage.", "next": "A3_S2" }
    ]
  },

  "A3_S2": {
    "act": 3,
    "title": "La Tour",
    "text": "Ils me proposent un poste : Conseiller moral de la Tour. Influence, pouvoir, contrôle.\nL’Adversaire murmure : 'Tu pourrais faire le bien, à leur manière.'",
    "choices": [
      { "label": "J’accepte — pour changer le système de l’intérieur.", "next": "A3_S3" },
      { "label": "Je refuse — la vérité ne s’achète pas.", "next": "A3_S3" },
      { "label": "Je mens — j’entre pour saboter de l’intérieur.", "next": "A3_S3" }
    ]
  },

  "A3_S3": {
    "act": 3,
    "title": "Le Procès du Silence",
    "text": "On m’enferme dans une pièce blanche. Des voix me jugent, m’analysent, me pathologisent.\nJe parle, ou je reste muet ?",
    "adv": "« Tu parles de vérité, mais la vérité, sans amour, devient une arme. »",
    "choices": [
      { "label": "Je dis tout — qu’il est en moi, que je lutte.", "next": "A3_S4" },
      { "label": "Je joue la raison — je leur dis qu’ils ont raison.", "next": "A3_S4" },
      { "label": "Je parle en symboles — qu’ils croient à la folie.", "next": "A3_S4" }
    ]
  },

  "A3_S4": {
    "act": 3,
    "title": "L’Autel d’Un",
    "text": "Je me tiens devant un miroir. Il me propose de tout effacer — mes fautes, ma douleur, mes regrets.\nJe comprends que choisir, c’est perdre quelque chose de soi.",
    "choices": [
      { "label": "J’efface tout : devenir pur, parfait, vide.", "next": "A3_F1" },
      { "label": "Je garde mes failles : vivre avec la mémoire.", "next": "A3_F2" },
      { "label": "Je choisis l’incertitude : marcher sans garantie.", "next": "A3_F3" }
    ]
  },

  "A3_F1": {
    "act": 3,
    "title": "La Statue",
    "text": "Ils m’érigent en exemple. Je suis pur, sans tache, sans âme. L’Adversaire rit : 'Tu m’as tué, donc tu m’as créé ailleurs.'",
    "choices": [{ "label": "Recommencer", "next": "A1_S1" }]
  },

  "A3_F2": {
    "act": 3,
    "title": "La Fêlure",
    "text": "Ils m’appellent fou, malade. Mais je sens une clarté. Quelqu’un dans la foule baisse les yeux — je sais qu’il a compris.",
    "choices": [{ "label": "Recommencer", "next": "A1_S1" }]
  },

  "A3_F3": {
    "act": 3,
    "title": "Le Marcheur",
    "text": "Le monde se fissure. Je marche, porteur de contradictions, conscient et fragile. Peut-être que c’est ça, être vivant.",
    "choices": [{ "label": "Recommencer", "next": "A1_S1" }]
  }

};
