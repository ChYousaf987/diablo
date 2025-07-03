// index.js

import {
  aspectsBarbrian,
  aspectsFilterBarbrian,
  aspectsRightBarbrian,
  gearLeftBarbrian,
  gearRightBarbrian,
  gemsBarbrian,
  GemsOptionsBarbrian,
  itemStateBarbrian,
  optionSkillsBarbrian,
  optionSParagonBarbrian,
  optiontechsBarbrian,
  skillsBarbrian,
  techniquesBarbrian,
} from "./barbarian";
import {
  aspectsSpiritborn,
  aspectsFilterSpiritborn,
  aspectsRightSpiritborn,
  gearLeftSpiritborn,
  gearRightSpiritborn,
  gemsSpiritborn,
  GemsOptionsSpiritborn,
  itemStateSpiritborn,
  optionSkillsSpiritborn,
  optionSParagonSpiritborn,
  optiontechsSpiritborn,
  skillsSpiritborn,
  techniquesSpiritborn,
} from "./spiritborn";
import {
  aspectsDruid,
  aspectsFilterDruid,
  aspectsRightDruid,
  gearLeftDruid,
  gearRightDruid,
  gemsDruid,
  GemsOptionsDruid,
  itemStateDruid,
  optionSkillsDruid,
  optionSParagonDruid,
  optiontechsDruid,
  skillsDruid,
  techniquesDruid,
} from "./druid";
import {
  aspectsSorcerer,
  aspectsFilterSorcerer,
  aspectsRightSorcerer,
  gearLeftSorcerer,
  gearRightSorcerer,
  gemsSorcerer,
  GemsOptionsSorcerer,
  itemStateSorcerer,
  optionSkillsSorcerer,
  optionSParagonSorcerer,
  optiontechsSorcerer,
  skillsSorcerer,
  techniquesSorcerer,
} from "./sorcerer";
import {
  aspectsRogue,
  aspectsFilterRogue,
  aspectsRightRogue,
  gearLeftRogue,
  gearRightRogue,
  gemsRouge,
  GemsOptionsRogue,
  itemStateRogue,
  optionSkillsRogue,
  optionSParagonRogue,
  optiontechsRogue,
  skillsRogue,
  techniquesRogue,
} from "./rogue";
import {
  aspectsNecromancer,
  aspectsFilterNecromancer,
  aspectsRightNecromancer,
  gearLeftNecromancer,
  gearRightNecromancer,
  gemsNecromancer,
  GemsOptionsNecromancer,
  itemStateNecromancer,
  optionSkillsNecromancer,
  optionSParagonNecromancer,
  optiontechsNecromancer,
  skillsNecromancer,
  techniquesNecromancer,
} from "./necromancer";

export const siteTitle = "Next.js Starter Blog";

export const navbarLinks = [
  { route: "/about-us", label: "À propos" },
  { route: "/pricing", label: "Tarification" },
  { route: "/privacy-policy", label: "Politiques" },
  { route: "/contact-us", label: "Contactez-nous" },
];

export const navigationLinks = [
  { route: "/", label: "Méta Builds" },
  { route: "/my-builds", label: "Mes Builds" },
  { route: "/build-planner", label: "Planificateur de Build" },
];

export const footerLinks = [
  { route: "/about-us", label: "À propos" },
  { route: "/privacy-policy", label: "Politiques" },
  { route: "/contact-us", label: "Contactez-nous" },
];

export const socialLinks = [
  { route: "https://x.com/vercel", label: "Twitter" },
  { route: "https://linkedin.com/in/vercel", label: "LinkedIn" },
];

export const seasons = [
  { value: "Season 8", label: "Saison 8" },
  { value: "Season 9", label: "Saison 9" },
];

export const categories = [
  {
    value: "barbarian",
    label: "Barbare",
    bg: "bg-[#311e1d]",
    image: "barbarian.png",
    description: "Calculateur de planification de construction pour Diablo 4",
  },
  {
    value: "druid",
    label: "Druide",
    bg: "bg-[#392c1d]",
    image: "druid.png",
    description: "Calculateur de planification de construction pour Diablo 4",
  },
  {
    value: "necromancer",
    label: "Nécromancien",
    bg: "bg-[#173533]",
    image: "necromancer.png",
    description: "Calculateur de planification de construction pour Diablo 4",
  },

  {
    value: "rogue",
    label: "Voleur",
    bg: "bg-[#261e31]",
    image: "rogue.png",
    description: "Calculateur de planification de construction pour Diablo 4",
  },
  {
    value: "sorcerer",
    label: "Sorcier",
    bg: "bg-[#17283b]",
    image: "sorcerer.png",
    description: "Calculateur de planification de construction pour Diablo 4",
  },
  {
    value: "spiritborn",
    label: "Spiritborn",
    bg: "bg-[#17283b]",
    image: "sorcerer.png",
    description: "Calculateur de planification de construction pour Diablo 4",
  },
];

export const data = {
  barbarian: {
    gearLeft: gearLeftBarbrian,
    gearRight: gearRightBarbrian,
    gems: gemsBarbrian,
    gemsOptions: GemsOptionsBarbrian,
    aspects: aspectsBarbrian,
    aspectsRight: aspectsRightBarbrian,
    aspectsFilter: aspectsFilterBarbrian,
    itemState: itemStateBarbrian,
    skills: skillsBarbrian,
    optiontechs: optiontechsBarbrian,
    techniques: techniquesBarbrian,
    optionSkills: optionSkillsBarbrian,
    paragon_builds: optionSParagonBarbrian,
  },
  spiritborn: {
    gearLeft: gearLeftSpiritborn,
    gearRight: gearRightSpiritborn,
    gems: gemsSpiritborn,
    gemsOptions: GemsOptionsSpiritborn,
    aspects: aspectsSpiritborn,
    aspectsRight: aspectsRightSpiritborn,
    aspectsFilter: aspectsFilterSpiritborn,
    itemState: itemStateSpiritborn,
    skills: skillsSpiritborn,
    optiontechs: optiontechsSpiritborn,
    techniques: techniquesSpiritborn,
    optionSkills: optionSkillsSpiritborn,
    paragon_builds: optionSParagonSpiritborn,
  },
  druid: {
    gearLeft: gearLeftDruid,
    gearRight: gearRightDruid,
    gems: gemsDruid,
    gemsOptions: GemsOptionsDruid,
    aspects: aspectsDruid,
    aspectsRight: aspectsRightDruid,
    aspectsFilter: aspectsFilterDruid,
    itemState: itemStateDruid,
    skills: skillsDruid,
    optiontechs: optiontechsDruid,
    techniques: techniquesDruid,
    optionSkills: optionSkillsDruid,
    paragon_builds: optionSParagonDruid,
  },
  necromancer: {
    gearLeft: gearLeftNecromancer,
    gearRight: gearRightNecromancer,
    gems: gemsNecromancer,
    gemsOptions: GemsOptionsNecromancer,
    aspects: aspectsNecromancer,
    aspectsRight: aspectsRightNecromancer,
    aspectsFilter: aspectsFilterNecromancer,
    itemState: itemStateNecromancer,
    skills: skillsNecromancer,
    optiontechs: optiontechsNecromancer,
    techniques: techniquesNecromancer,
    optionSkills: optionSkillsNecromancer,
    paragon_builds: optionSParagonNecromancer,
  },
  rogue: {
    gearLeft: gearLeftRogue,
    gearRight: gearRightRogue,
    gems: gemsRouge,
    gemsOptions: GemsOptionsRogue,
    aspects: aspectsRogue,
    aspectsRight: aspectsRightRogue,
    aspectsFilter: aspectsFilterRogue,
    itemState: itemStateRogue,
    skills: skillsRogue,
    optiontechs: optiontechsRogue,
    techniques: techniquesRogue,
    optionSkills: optionSkillsRogue,
    paragon_builds: optionSParagonRogue,
  },
  sorcerer: {
    gearLeft: gearLeftSorcerer,
    gearRight: gearRightSorcerer,
    gems: gemsSorcerer,
    gemsOptions: GemsOptionsSorcerer,
    aspects: aspectsSorcerer,
    aspectsRight: aspectsRightSorcerer,
    aspectsFilter: aspectsFilterSorcerer,
    itemState: itemStateSorcerer,
    skills: skillsSorcerer,
    optiontechs: optiontechsSorcerer,
    techniques: techniquesSorcerer,
    optionSkills: optionSkillsSorcerer,
    paragon_builds: optionSParagonSorcerer,
  },
};

export const gearLeft = [
  {
    image: "/gears/helm.png",
    label: "Casque",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/chest_armor.png",
    label: "Armure de Torse",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/gloves.png",
    label: "Gants",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/pants.png",
    label: "Pantalon",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/boots.png",
    label: "Bottes",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/bludgeoning_weapon.png",
    label: "Arme Contondante",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/dual-wield_weapon_1.png",
    label: "Arme Double 1",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
];

export const gearRight = [
  {
    image: "empty.png",
    label: "",
    description: "",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/amulet.png",
    label: "Amulette",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/ring_1.png",
    label: "Anneau 1",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/ring_1.png",
    label: "Anneau 2",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "empty.png",
    label: "",
    description: "",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/slashing_weapon.png",
    label: "Arme Tranchante",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
  {
    image: "/gears/dual-wield_weapon_2.png",
    label: "Arme Double 2",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [],
      selects2: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
      selects3: [
        { value: 0, selectedValue: "" },
        { value: 0, selectedValue: "" },
      ],
    },
  },
];

export const gems = [
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
];

export const GemsOptions = [
  {
    id: 1,
    label: "Améthyste",
    image: "/gems/amethyst.png",
    code: "Gemme",
    options: [
      "Arme : +18 % de dégâts sur la durée",
      "Armure : 100 de force",
      "Bijoux : 45 % de résistance à l'ombre",
    ],
  },
  {
    id: 2,
    label: "Émeraude",
    image: "/gems/emerald.png",
    code: "Gemme",
    options: [
      "Arme : +25 % de dégâts de coup critique",
      "Armure : 100 de dextérité",
      "Bijoux : 45 % de résistance au poison",
    ],
  },
  {
    id: 3,
    label: "Rubis",
    image: "/gems/ruby.png",
    code: "Gemme",
    options: [
      "Arme : +54 % de dégâts de surpuissance",
      "Armure : 9 % de vie maximale",
      "Bijoux : 45 % de résistance au feu",
    ],
  },
  {
    id: 4,
    label: "Topaze",
    image: "/gems/topaz.png",
    code: "Gemme",
    options: [
      "Arme : +45 % de dégâts de compétence de base",
      "Armure : 100 d'intelligence",
      "Bijoux : 45 % de résistance à la foudre",
    ],
  },
  {
    id: 5,
    label: "Saphir",
    image: "/gems/sapphire.png",
    code: "Gemme",
    options: [
      "Arme : +20 % de dégâts de vulnérabilité",
      "Armure : 100 de volonté",
      "Bijoux : 45 % de résistance au froid",
    ],
  },
  {
    id: 6,
    label: "Diamant",
    image: "/gems/diamond.png",
    code: "Gemme",
    options: [
      "Arme : +35 % de dégâts ultimes",
      "Armure : +11 % de génération de barrière",
      "Bijoux : 8 % de résistance à tous les éléments",
    ],
  },
  {
    id: 7,
    label: "Crâne",
    image: "/gems/skull.png",
    code: "Gemme",
    options: [
      "Arme : +48 Vie par élimination",
      "Armure : +15% de soins reçus",
      "Bijoux : +525 Armure",
    ],
  },
];

export const aspects = [
  {
    id: 1,
    image: "/gears/charge.png",
    label: "Visage d'Andariel",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 2,
    image: "/gears/charge.png",
    label: "Aspect de l'anémie",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 3,
    image: "/gears/charge.png",
    label: "Aspect de l'assistance",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 4,
    image: "/gears/charge.png",
    label: "Aspect de l'audace",
    description: "Description de l'Arme",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 5,
    image: "/gears/charge.png",
    label: "Aspect des bul-kathos",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 40,
    image: "/gears/charge.png",
    label: "Aspect des bul-kathos",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 6,
    image: "/gears/charge.png",
    label: "Aspect des frappes commotionnelles",
    description: "Description de l'Arme",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 7,
    image: "/gears/charge.png",
    label: "Aspect des foulées glaciales",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 8,
    image: "/gears/charge.png",
    label: "Aspect de la saisie du tourbillon",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Barre"],
  },
  {
    id: 9,
    image: "/gears/charge.png",
    label: "Aspect de la puissance",
    description: "Description de l'Arme",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 10,
    image: "/gears/charge.png",
    label: "Aspect de la colère engourdissante",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 11,
    image: "/gears/charge.png",
    label: "Aspect de la misère partagée",
    description: "Description de l'Arme",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 12,
    image: "/gears/charge.png",
    label: "Aspect des étapes sournoises",
    description: "Description de l'Arme",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 13,
    image: "/gears/charge.png",
    label: "Aspect des coups",
    description: "Description de l'Arme",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 14,
    image: "/gears/charge.png",
    label: "Aspect de la sauge bondée",
    description: "Description de l'Arme",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 14,
    label: "Aspect de la barrière de déviation",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 15,
    label: "Aspect de la forteresse",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 16,
    label: "Aspect du Fron Warrior",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 17,
    label: "Aspect du protecteur",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 18,
    label: "Aspect du cœur prudent",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 19,
    label: "Aspect de l'assimilation",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 20,
    label: "Couronne de Lucion",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 21,
    label: "Aspect échappé",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 22,
    label: "Couronne de la gueule",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 23,
    label: "Crête arlequin",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 24,
    label: "Aspect mouvementé",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Barre"],
  },
  {
    id: 25,
    label: "Héritier de la perdition",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 26,
    label: "Aspect sanguin de fer",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Barre"],
  },
  {
    id: 27,
    label: "Aspect de Juggernaut",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 28,
    label: "Aspect Luckbringer",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 29,
    label: "PROTÉRER ASPECT",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 30,
    label: "Aspect de Berserker implacable",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 31,
    label: "Aspect de Berserker constant",
    image: "/gears/charge.png",
    features: ["Unique", "Barre"],
  },
  {
    id: 32,
    label: "Aspect d'autocollant",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 33,
    label: "Tushkhelm de jortiz le puissant",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 34,
    label: "Laid de bâtard",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique", "Barre"],
  },
  {
    id: 35,
    label: "Aspect éternel",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Défensive", "Légendaire"],
  },
  {
    id: 36,
    label: "Aspect du maître d'arme",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Légendaire"],
  },
  {
    id: 37,
    label: "Aspect sauvage",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Utilitaire", "Légendaire"],
  },
];

export const aspectsRight = [
  {
    id: 1,
    label: "Aspect accéléré",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 2,
    label: "Aspect du toucher",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 3,
    label: "Aspect de la charge ancestrale",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 4,
    label: "Aspect des échos ancestraux",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 5,
    label: "Aspect de la force ancestrale",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 6,
    label: "Aspect de la gestion de la colère",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 7,
    label: "Aspect de la fureur apogéique",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 8,
    label: "Aspect de la déchirure de Berserk",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 9,
    label: "Aspect de la rage brûlante",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 10,
    label: "Aspect de la mort rampante",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 11,
    label: "Aspect de l'extinction retardée",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 12,
    label: "Aspect des tremblements de terre",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 13,
    label: "Aspect des éléments",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 14,
    label: "Aspect de l'empiéte de la colère",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 15,
    label: "Aspect des vents féroces",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 16,
    label: "Aspect du spectacle herculéen",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 17,
    label: "Aspect des fissures incendiaires",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 18,
    label: "Aspect du destin inévitable",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 19,
    label: "Aspect du calme intérieur",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 20,
    label: "Aspect de rage illimité",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 21,
    label: "Aspect de la rétribution",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 22,
    label: "Aspect de l'acier bouleversant",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 23,
    label: "Aspect du sol",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 24,
    label: "Aspect du tourbillon désastreux",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 25,
    label: "Aspect de l'attente",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 26,
    label: "Aspect du déchaînement flamboyant",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 27,
    label: "Aspect de la lune",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 28,
    label: "Azurewrath",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique 1h Sword"],
  },
  {
    id: 29,
    label: "Aspect de combat contre la bataille",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 30,
    label: "Aspect bouillant du sang",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 31,
    label: "Aspect de Brawler",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 32,
    label: "Aspect vaniteux",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 33,
    label: "Aspect de la mort de souhaits",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 34,
    label: "Aspect diabolique",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 35,
    label: "Doombringer",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique 1h Sword"],
  },
  {
    id: 36,
    label: "Aspect de la poussière du diable",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 37,
    label: "Aspect de Earthstriker",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 38,
    label: "Aspect d'Edgemaster",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 39,
    label: "Aspect du bourreau",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 40,
    label: "Aspect de l'exploitant",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 41,
    label: "Aspect à aiguille",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 42,
    label: "Magnum Opus de Ramaladni",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique 1h Sword"],
  },
  {
    id: 43,
    label: "Aspect rapide",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 44,
    label: "Shard de Verathiel",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique 1h Sword"],
  },
  {
    id: 45,
    label: "Aspect de Sjullbreaker",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 46,
    label: "Aspect frappé",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 47,
    label: "Le bouillage de boucherie",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique 1h Sword"],
  },
  {
    id: 48,
    label: "La troisième lame",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Unique 1h Sword"],
  },
  {
    id: 49,
    label: "Aspect de Brawler véhément",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 50,
    label: "Aspect de Veteram Brawler",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 51,
    label: "Aspect de rupture gratuite",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
  {
    id: 52,
    label: "Aspect Windlasher",
    image: "/gears/charge.png",
    description: "Mythic Unique Helm",
    features: ["Offensif", "Légendaire"],
  },
];

export const aspectsFilter = [
  {
    label: "Codex",
  },
  { label: "Drop-seulement" },
  {
    label: "Spécifique à la classe",
  },
  {
    label: "Unique",
  },
  {
    label: "Légendaire",
  },
  {
    label: "Offensif",
  },
  {
    label: "Défensive",
  },
  {
    label: "Mobilité",
  },
  {
    label: "Ressource",
  },
  {
    label: "Utilitaire",
  },
];

export const itemState = [
  {
    image: "/gears/charge.png",
    label: "Andariel's Visage",
    description: "Unique Helm",
    features: ["Unique", "Légendaire"],
  },
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'Arme",
  },
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'Arme",
  },
];

export const itemStateFooter = [
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'Arme",
  },
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'Arme",
  },
];

export const skills = [
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
  },
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
  },
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
  },
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
  },
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
  },
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
  },
];

export const techniques = [
  {
    image: "/skill-tech/empty_skill.png",
    option_id: null,
  },
];

export const optiontechs = [
  {
    image: "/skill-tech/1h_axe.png",
    id: 1,
    label: "Expertise Hache à Une Main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 2,
    label: "Expertise Hache à Une Main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 3,
    label: "Expertise Hache à Une Main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 4,
    label: "Expertise Hache à Une Main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 5,
    label: "Expertise Hache à Une Main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 6,
    label: "Expertise Hache à Une Main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
];

export const optionSkills = [
  {
    image: "/skill-tech/category_basic.png",
    id: 1,
    next_id: 2,
    label: "Base",
    top: "9.16945%",
    left: "47.4826%",
    options: [
      {
        id: 1,
        image: "/skill-tech/bash.png",
        label: "Coup",
        details: [
          "Génération de Furie : 15",
          "Coup de Chance : 50% ",
          "<span class='text-gray-500'>Frappez l'ennemi avec votre arme, infligeant <span class='text-yellow-500'>[33%]</span> de dégâts. Après avoir frappé les ennemis 4 fois, votre prochain Coup les étourdira pendant 1,25 secondes, passant à 2 secondes si vous utilisez une arme à deux mains.</span>",
        ],
        footer: "Dégâts Physiques",
      },
      {
        id: 2,
        image: "/skill-tech/flay.png",
        label: "Écorcher",
        details: [
          "Génération de Furie : 15",
          "Coup de Chance : 50% ",
          "<span class='text-gray-500'>Écorchez l'ennemi, infligeant <span class='text-yellow-500'>[5%]</span> de dégâts et infligeant <span class='text-yellow-500'>[44%]</span> de dégâts de Saignement sur 5 secondes.</span>",
        ],
        footer: "Dégâts Physiques <br/> Nécessite une arme tranchante",
      },
      {
        id: 3,
        image: "/skill-tech/frenzy.png",
        label: "Frénésie",
        details: [
          "Génération de Furie : 4",
          "Coup de Chance : 30% ",
          "<span class='text-gray-500'>Déchaînez une rafale rapide de coups, infligeant <span class='text-yellow-500'>[24%]</span> de dégâts avec chaque paire de coups.</span>",
          "<span class='text-gray-500'>Si Frénésie touche un ennemi, sa Vitesse d'Attaque est augmentée de +20% pendant 3 secondes, jusqu'à +60%.</span>",
        ],
        footer: "Dégâts Physiques <br/> Nécessite des armes doubles",
      },
    ],
  },
  {
    image: "/skill-tech/category_core.png",
    id: 2,
    next_id: 3,
    label: "Principal",
    top: "19.7813%",
    left: "24.2791%",
    options: [
      {
        id: 1,
        image: "/skill-tech/chain_lightning.png",
        label: "Chaîne d'Éclairs",
        details: [
          "Coût en Mana : 15",
          "Coup de Chance : 50% ",
          "<span class='text-gray-500'>Lancez un éclair qui rebondit entre les ennemis proches, infligeant <span class='text-yellow-500'>[33%]</span> de dégâts.</span>",
        ],
        footer: "Dégâts de Foudre",
      },
      {
        id: 2,
        image: "/skill-tech/charged_bolts.png",
        label: "Éclairs Chargés",
        details: [
          "Coût en Mana : 15",
          "Coup de Chance : 50% ",
          "<span class='text-gray-500'>Tirez des éclairs chargés qui se déplacent aléatoirement, infligeant <span class='text-yellow-500'>[5%]</span> de dégâts chacun.</span>",
        ],
        footer: "Dégâts de Foudre",
      },
      {
        id: 3,
        image: "/skill-tech/fireball.png",
        label: "Boule de Feu",
        details: [
          "Coût en Mana : 20",
          "Coup de Chance : 30% ",
          "<span class='text-gray-500'>Lancez une boule de feu qui explose à l'impact, infligeant <span class='text-yellow-500'>[24%]</span> de dégâts dans la zone.</span>",
        ],
        footer: "Dégâts de Feu",
      },
      {
        id: 4,
        image: "/skill-tech/frozen_orb.png",
        label: "Orbe Gelé",
        details: [
          "Coût en Mana : 25",
          "Coup de Chance : 40% ",
          "<span class='text-gray-500'>Créez un orbe de glace qui explose en éclats glacés, infligeant <span class='text-yellow-500'>[30%]</span> de dégâts.</span>",
        ],
        footer: "Dégâts de Glace",
      },
      {
        id: 5,
        image: "/skill-tech/ice_shards.png",
        label: "Éclats de Glace",
        details: [
          "Coût en Mana : 15",
          "Coup de Chance : 33% ",
          "<span class='text-gray-500'>Lancez des éclats de glace acérés, infligeant <span class='text-yellow-500'>[18%]</span> de dégâts et ralentissant les ennemis.</span>",
        ],
        footer: "Dégâts de Glace",
      },
      {
        id: 6,
        image: "/skill-tech/incinerate.png",
        label: "Incinérer",
        details: [
          "Coût en Mana : 10 par seconde",
          "Coup de Chance : 20% ",
          "<span class='text-gray-500'>Canalisez un jet de flammes, infligeant <span class='text-yellow-500'>[40%]</span> de dégâts par seconde aux ennemis touchés.</span>",
        ],
        footer: "Dégâts de Feu",
      },
    ],
  },
  {
    image: "/skill-tech/category_defensive.png",
    id: 3,
    next_id: null,
    label: "Défensif",
    top: "35.2723%",
    left: "57.3472%",
    options: [
      {
        id: 1,
        image: "/skill-tech/bash.png",
        label: "Coup",
        details: [
          "Génération de Furie : 15",
          "Coup de Chance : 50% ",
          "<span class='text-gray-500'>Frappez l'ennemi avec votre arme, infligeant <span class='text-yellow-500'>[33%]</span> de dégâts. Après avoir frappé les ennemis 4 fois, votre prochain Coup les étourdira pendant 1,25 secondes, passant à 2 secondes si vous utilisez une arme à deux mains.</span>",
        ],
        footer: "Dégâts Physiques",
      },
      {
        id: 2,
        image: "/skill-tech/flay.png",
        label: "Écorcher",
        details: [
          "Génération de Furie : 15",
          "Coup de Chance : 50% ",
          "<span class='text-gray-500'>Écorchez l'ennemi, infligeant <span class='text-yellow-500'>[5%]</span> de dégâts et infligeant <span class='text-yellow-500'>[44%]</span> de dégâts de Saignement sur 5 secondes.</span>",
        ],
        footer: "Dégâts Physiques <br/> Nécessite une arme tranchante",
      },
      {
        id: 3,
        image: "/skill-tech/frenzy.png",
        label: "Frénésie",
        details: [
          "Génération de Furie : 4",
          "Coup de Chance : 30% ",
          "<span class='text-gray-500'>Déchaînez une rafale rapide de coups, infligeant <span class='text-yellow-500'>[24%]</span> de dégâts avec chaque paire de coups.</span>",
          "<span class='text-gray-500'>Si Frénésie touche un ennemi, sa Vitesse d'Attaque est augmentée de +20% pendant 3 secondes, jusqu'à +60%.</span>",
        ],
        footer: "Dégâts Physiques <br/> Nécessite des armes doubles",
      },
    ],
  },
];

export const levelRanges = [
  { min: 0, max: 2, index: 0 },
  { min: 2, max: 6, index: 1 },
  { min: 6, max: 11, index: 2 },
  { min: 11, max: 16, index: 3 },
  { min: 16, max: 23, index: 4 },
  { min: 23, max: 33, index: 5 },
];

export const bossPowers = [
  { id: 1, label: "Les serres de Allek", image: "/gears/charge.png" },
  { id: 2, label: "Skull enflammé d'Andariel", image: "/gears/charge.png" },
  { id: 3, label: "Ashavas Poison Breath", image: "/gears/charge.png" },
  { id: 4, label: "Minerai explosif de l'avarice", image: "/gears/charge.png" },
  {
    id: 5,
    label: "Bête dans le grésil de la glace",
    image: "/gears/charge.png",
  },
  { id: 6, label: "Traing de Beastmaster", image: "/gears/charge.png" },
  {
    id: 7,
    label: "Le leurre de cristal de Belial",
    image: "/gears/charge.png",
  },
  {
    id: 8,
    label: "Les faisceaux oculaires de Belial",
    image: "/gears/charge.png",
  },
  { id: 9, label: "Sabotage du chantage", image: "/gears/charge.png" },
  { id: 10, label: "Duriel's Bendow", image: "/gears/charge.png" },
  {
    id: 11,
    label: "La perturbation de Fair Reaper",
    image: "/gears/charge.png",
  },
  { id: 12, label: "Square de Grigoire", image: "/gears/charge.png" },
  {
    id: 13,
    label: "Harbinger de la volée de Haterd",
    image: "/gears/charge.png",
  },
  {
    id: 14,
    label: "La hâte de l'étreinte de Haterd",
    image: "/gears/charge.png",
  },
  { id: 15, label: "Les étincelles de Kirma", image: "/gears/charge.png" },
  {
    id: 16,
    label: "Le vent de la haine de Lilith",
    image: "/gears/charge.png",
  },
  { id: 17, label: "Pool de sang de Lord Zir", image: "/gears/charge.png" },
  {
    id: 18,
    label: "Oeil de tireur d'élite hors-la-loi",
    image: "/gears/charge.png",
  },
  { id: 19, label: "Les flammes de Sinerat", image: "/gears/charge.png" },
  { id: 20, label: "Toxines de Slerg", image: "/gears/charge.png" },
  { id: 21, label: "Rage de Torusk", image: "/gears/charge.png" },
  { id: 22, label: "Bombes lobées d'Urivar", image: "/gears/charge.png" },
  { id: 23, label: "La vie de Varshan vole", image: "/gears/charge.png" },
  {
    id: 24,
    label: "Poutre thoracique de Deat errant",
    image: "/gears/charge.png",
  },
];
