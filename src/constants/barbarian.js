import Paragon from "@/components/create/Paragon/Paragon";

export const siteTitle = "Next.js Starter Blog";

// constants/barbarian.js
export const aspectsBarbarianSeason8 = [
  {
    id: 1,
    image: "/aspects/barbarian/aspect_of_might.png",
    label: "Aspect of Might",
    description: "Basic Skills grant 20% Damage Reduction for 2-6 seconds.",
    category: "Defensive",
    allowedGear: ["Barre", "Gants", "Amulette", "Anneau"],
    season: "Season 8",
  },
  {
    id: 2,
    image: "/aspects/barbarian/aspect_of_disobedience.png",
    label: "Aspect of Disobedience",
    description: " seconds when you deal any form of damage, stacking up to 25-50%.",
    category: "Defensive",
    allowedGear: ["Barre", "Plastron", "Pantalon"],
    season: "Season 8",
  },
  // Add 6 more for Season 8 (total 8 aspects)
  // Example:
  {
    id: 3,
    image: "/aspects/barbarian/aspect_of_berserk_ripping.png",
    label: "Aspect of Berserk Ripping",
    description: "Whenever you deal direct damage while Berserking, inflict 20-30% of the Base damage dealt as additional Bleeding damage over 5 seconds.",
    category: "Offensive",
    allowedGear: ["Barre", "Arme à double usage 1", "Arme à double usage 2"],
    season: "Season 8",
  },
  // ... continue up to id: 8
];

export const aspectsBarbarianSeason9 = [
  {
    id: 1,
    image: "/aspects/barbarian/aspect_of_might.png",
    label: "Aspect of Might",
    description: "Basic Skills grant 20% Damage Reduction for 2-6 seconds.",
    category: "Defensive",
    allowedGear: ["Barre", "Gants", "Amulette", "Anneau"],
    season: "Season 9",
  },
  {
    id: 2,
    image: "/aspects/barbarian/aspect_of_ancestral_charge.png",
    label: "Aspect of Ancestral Charge",
    description: "Charge calls forth 4 Ancients who each deal 20-30% of normal damage for 6 seconds.",
    category: "Offensive",
    allowedGear: ["Barre", "Arme à double usage 1", "Arme à double usage 2"],
    season: "Season 9",
  },
  // Add 37 more for Season 9 (total 39 aspects)
  // Example:
  {
    id: 3,
    image: "/aspects/barbarian/aspect_of_limitless_rage.png",
    label: "Aspect of Limitless Rage",
    description: "Each point of Fury you generate while at Maximum Fury grants your next Core Skill 1-2% increased damage, up to 15-30%.",
    category: "Offensive",
    allowedGear: ["Barre", "Gants"],
    season: "Season 9",
  },
  // ... continue up to id: 39
];

// Use the same list for both sides unless specific differences are needed
export const aspectsRightBarbarianSeason8 = aspectsBarbarianSeason8;
export const aspectsRightBarbarianSeason9 = aspectsBarbarianSeason9;


export const gearLeftBarbarian = [
  {
    image: "/gears/helm.png",
    label: "Barre",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/chest_armor.png",
    label: "Armure de poitrine",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/gloves.png",
    label: "Gloves",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/pants.png",
    label: "Pantalon",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/boots.png",
    label: "Bottes",
    description: "Vide",
    aspect_id: null,
    type: "Implicit State",
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/bludgeoning_weapon.png",
    label: "Bludgeonging Weapon",
    description: "Vide",
    type: "Weapon",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/slashing_weapon.png",
    label: "Arme à double usage 1",
    type: "Weapon",
    description: "Vide",
    aspect_id: null,
    type: "Weapon",
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
];

export const gearRightBarbarian = [
  {
    image: "empty.png",
    label: "",
    description: "",
    aspect_id: null,
    details: { selects1: [], selects2: [], selects3: [] },
  },
  {
    image: "/gears/amulet.png",
    label: "Amulette",
    description: "Vide",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/ring_1.png",
    label: "Anneau 1",
    description: "Vide",
    type: "Implicit State",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/ring_1.png",
    label: "Anneau 2",
    description: "Vide",
    type: "Implicit State",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "empty.png",
    label: "",
    description: "",
    aspect_id: null,
    details: { selects1: [], selects2: [], selects3: [] },
  },
  {
    image: "/gears/slashing_weapon.png",
    label: "Slashing Weapon",
    type: "Weapon",
    description: "Vide",
    aspect_id: null,
    type: "Weapon",
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
  {
    image: "/gears/dual-wield_weapon_2.png",
    label: "Arme à double usage 2",
    description: "Vide",
    type: "Weapon",
    aspect_id: null,
    details: {
      selects1: [
        {
          value:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
          selectedValue:
            "L'esquive confère +125 % de vitesse de déplacement pendant 1,5 seconde",
        },
      ],
      selects2: [{ value: "Épines", selectedValue: "Épines" }],
      selects3: [
        {
          value:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
          selectedValue:
            "[12-17,5%] Durée de contrôle des foules (Fortune Wordly - Utilité)",
        },
      ],
    },
  },
];

// Barbarian Gems
export const gemsBarbarian = [
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
  { image: "empty.png", label: "", option_id: null },
];

export const GemsOptionsBarbarian = [
  {
    id: 1,
    label: "Royal Ruby",
    image: "/gems/ruby.png",
    code: "Gem",
    options: [
      "Weapon: +54% Overpower Damage",
      "Armor: +9% Maximum Life",
      "Jewelry: 45% Fire Resistance",
    ],
  },
  {
    id: 2,
    label: "Saphir royal",
    image: "/gems/sapphire.png",
    code: "Gem",
    options: [
      "Weapon: +20% Vulnerable Damage",
      "Armor: 100 Willpower",
      "Jewelry: 45% Cold Resistance",
    ],
  },
  {
    id: 3,
    label: "Émeraude royale",
    image: "/gems/emerald.png",
    code: "Gem",
    options: [
      "Weapon: +25% Critical Strike Damage",
      "Armor: 100 Dexterity",
      "Jewelry: 45% Poison Resistance",
    ],
  },
  {
    id: 4,
    label: "Topaze royal",
    image: "/gems/topaz.png",
    code: "Gem",
    options: [
      "Weapon: +45% Basic Skill Damage",
      "Armor: 100 Intelligence",
      "Jewelry: 45% Lightning Resistance",
    ],
  },
  {
    id: 5,
    label: "Améthyste royal",
    image: "/gems/amethyst.png",
    code: "Gem",
    options: [
      "Weapon: +18% Damage Over Time",
      "Armor: 100 Strength",
      "Jewelry: 45% Shadow Resistance",
    ],
  },
  {
    id: 6,
    label: "Diamant royal",
    image: "/gems/diamond.png",
    code: "Gem",
    options: [
      "Weapon: +35% Ultimate Skill Damage",
      "Armor: +11% Barrier Generation",
      "Jewelry: 8% All Resistances",
    ],
  },
  {
    id: 7,
    label: "Crâne royal",
    image: "/gems/skull.png",
    code: "Gem",
    options: [
      "Weapon: +48 Life on Kill",
      "Armor: +15% Healing Received",
      "Jewelry: +525 Armor",
    ],
  },
];

export const aspectsBarbarian = [
  {
    id: 1,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 2,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 3,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 4,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 5,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 6,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 7,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
];

export const aspectsRightBarbarian = [
  {
    id: 1,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 2,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 3,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 4,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 5,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 6,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    id: 7,
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
];

export const aspectsFilterBarbarian = [
  {
    label: "Codex",
  },
  {
    label: "Uniquement en butin",
  },
  {
    label: "Unique",
  },
  {
    label: "Légendaire",
  },
  {
    label: "Mobilité",
  },
];

export const itemStateBarbarian = [
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
];

export const itemStateFooterBarbarian = [
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
  {
    image: "/gears/charge.png",
    label: "Arme",
    description: "Description de l'arme",
  },
];

export const skillsBarbarian = [
  {
    image: "/skill-tech/empty_skill.png",
    parent_id: null,
    skill_id: null,
    options: [
      {
        label: "",
        image: "/skill-tree/barbarian/Basic/category_basic.png",
        options: [{ label: "", image: "" }],
      },
    ],
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

export const techniquesBarbarian = [
  {
    image: "/skill-tech/empty_skill.png",
    option_id: null,
  },
];

export const optiontechsBarbarian = [
  {
    image: "/skill-tech/1h_axe.png",
    id: 1,
    label: "Expertise de la hache à une main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 2,
    label: "Expertise de la masse à une main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 3,
    label: "Expertise de l'épée à une main",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 4,
    label: "Expertise Ae à deux mains",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 5,
    label: "Expertise en bras d'arceau",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 6,
    label: "Expertise de l'épée à deux mains",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
  {
    image: "/skill-tech/1h_axe.png",
    id: 7,
    label: "Expertise de la masse à deux mains",
    code: "Hache 1M",
    details:
      "+ [10.0%] de chance de coup critique contre les ennemis blessés. Double ce montant en utilisant deux haches.",
  },
];

export const optionSkillsBarbarian = [
  
];

export const optionSParagonBarbarian = [
  
];
