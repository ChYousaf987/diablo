// last power (Spiritborn)
// glyph_ids: [1,3,5,11,12,13,16,21],str
// glyph_ids: [2,4,9,17,18],int
// glyph_ids: [6,7,,8,10,14,15,19,20,22],dex


// 2nd last power (Sorcerer)
// glyph_ids: [12,13,15,14,20,22],will
// glyph_ids: [1,2,3,7,8,9,17,21],int
// glyph_ids: [4,5,,6,10,11,14,18,19,23],dex

// 3 Necromancer Paragon
// glyph_ids: [8,9,14,15,16,18,22,],will
// glyph_ids: [2,3,4,5,6,7,10,12,17,20,19],int
// glyph_ids: [1,11,13,23,21],dex

// 4 (voleur/rogue)3aragon
glyph_ids: [1,2,9,11,18,22],str
glyph_ids: [3,6,7,10,16,17,20,21],int
glyph_ids: [4,5,8,12,13,14,15,19,23],dex



{
          image: "/paragon/barbarian/Int_ac.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],

          image: "/paragon/barbarian/Str_ac.png",
          label: "Nœud normal",
          options: ["+5 Force"],

          image: "/paragon/barbarian/Will_ac.png",
          label: "Nœud normal",
          options: ["+5 volonte"],

          image: "/paragon/barbarian/Dex_ac.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
},



{}
[
        {
          id: "druid_2_38",
          active: null,
          index: 5,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          is_icon: true,
        },

        {
          id: "necromancer_5_41",
          active: null,
          index: 15,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
          is_icon: true,
        },
  ]





{}
   [
        {
          id: "necromancer_3_53",
          active: false,
          index: 0,
          link: true,
          direction: "left",
          image: "/paragon/barbarian/Gate_active.png",
        },
        {
          id: "necromancer_3_54",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          opened: true,
        },
        {
          id: "necromancer_3_55",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_70",
            "necromancer_3_54",
            "necromancer_3_56",
          ],
        },
        {
          id: "necromancer_3_56",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_43",
            "necromancer_3_71",
            "necromancer_3_55",
          ],
        },
        {
          id: "necromancer_3_57",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_73"],
        },
        {
          id: "necromancer_3_58",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_75", "necromancer_3_59"],
        },
        {
          id: "necromancer_3_59",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_76",
            "necromancer_3_58",
            "necromancer_3_60",
          ],
        },
        {
          id: "necromancer_3_60",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_45",
            "necromancer_3_77",
            "necromancer_3_59",
            "necromancer_3_61",
          ],
        },
        {
          id: "necromancer_3_61",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_60", "necromancer_3_62"],
        },
        {
          id: "necromancer_3_62",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_61", "necromancer_3_63"],
        },
        {
          id: "necromancer_3_63",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_46",
            "necromancer_3_78",
            "necromancer_3_62",
          ],
        },
        {
          id: "necromancer_3_64",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "necromancer_3_49",
            "necromancer_3_81",
            "necromancer_3_65",
          ],
        },
        {
          id: "necromancer_3_65",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_50",
            "necromancer_3_82",
            "necromancer_3_64",
            "necromancer_3_66",
          ],
        },
        {
          id: "necromancer_3_66",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_51",
            "necromancer_3_83",
            "necromancer_3_65",
            "necromancer_3_67",
          ],
        },
        {
          id: "necromancer_3_67",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          opened: true,
        },
        {
          id: "necromancer_3_68",
          active: false,
          index: 20,
          link: true,
          direction: "right",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "necromancer_3_69",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_54", "necromancer_3_70"],
        },
        {
          id: "necromancer_3_70",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_55",
            "necromancer_3_85",
            "necromancer_3_69",
            "necromancer_3_71",
          ],
        },
        {
          id: "necromancer_3_71",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_56",
            "necromancer_3_86",
            "necromancer_3_70",
            "necromancer_3_72",
          ],
        },
        {
          id: "necromancer_3_72",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_3_87",
            "necromancer_3_71",
            "necromancer_3_73",
          ],
        },
        {
          id: "necromancer_3_73",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_3_57",
            "necromancer_3_88",
            "necromancer_3_72",
            "necromancer_3_74",
          ],
        },
        {
          id: "necromancer_3_74",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_89", "necromancer_3_73"],
        },
        {
          id: "necromancer_3_75",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_58",
            "necromancer_3_90",
            "necromancer_3_76",
          ],
        },
        {
          id: "necromancer_3_76",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_59",
            "necromancer_3_91",
            "necromancer_3_75",
            "necromancer_3_77",
          ],
        },
        {
          id: "necromancer_3_77",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_60",
            "necromancer_3_92",
            "necromancer_3_76",
          ],
        },
        {
          id: "necromancer_3_78",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_63",
            "necromancer_3_93",
            "necromancer_3_79",
          ],
        },
        {
          id: "necromancer_3_79",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_94",
            "necromancer_3_78",
            "necromancer_3_80",
          ],
        },
        {
          id: "necromancer_3_80",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_95",
            "necromancer_3_79",
            "necromancer_3_81",
          ],
        },
        {
          id: "necromancer_3_81",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_3_64",
            "necromancer_3_96",
            "necromancer_3_80",
            "necromancer_3_82",
          ],
        },
        {
          id: "necromancer_3_82",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_65",
            "necromancer_3_81",
            "necromancer_3_83",
          ],
        },
        {
          id: "necromancer_3_83",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_66",
            "necromancer_3_82",
            "necromancer_3_84",
          ],
        },
        {
          id: "necromancer_3_84",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_67", "necromancer_3_83"],
        },
      ],
      [
        {
          id: "necromancer_3_85",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_70", "necromancer_3_86"],
        },
        {
          id: "necromancer_3_86",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_3_71",
            "necromancer_3_97",
            "necromancer_3_85",
            "necromancer_3_87",
          ],
        },
        {
          id: "necromancer_3_87",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_3_72",
            "necromancer_3_98",
            "necromancer_3_86",
            "necromancer_3_88",
          ],
        },
        {
          id: "necromancer_3_88",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_73",
            "necromancer_3_99",
            "necromancer_3_87",
            "necromancer_3_89",
          ],
        },
        {
          id: "necromancer_3_89",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_3_74",
            "necromancer_3_100",
            "necromancer_3_88",
          ],
        },
        {
          id: "necromancer_3_90",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/barbarian.png",

          activable_ids: ["necromancer_3_75", "necromancer_3_91"],
          bg: "rare",
        },
        {
          id: "necromancer_3_91",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "necromancer_3_76",
            "necromancer_3_90",
            "necromancer_3_92",
          ],
        },
        {
          id: "necromancer_3_92",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_77", "necromancer_3_91"],
        },
        {
          id: "necromancer_3_93",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["necromancer_3_78", "necromancer_3_94"],
        },
        {
          id: "necromancer_3_94",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_79",
            "necromancer_3_102",
            "necromancer_3_93",
            "necromancer_3_95",
          ],
        },
        {
          id: "necromancer_3_95",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_80",
            "necromancer_3_103",
            "necromancer_3_94",
            "necromancer_3_96",
          ],
        },
        {
          id: "necromancer_3_96",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_81", "necromancer_3_95"],
        },
      ],
      [
        {
          id: "necromancer_3_97",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["necromancer_3_86", "necromancer_3_98"],
        },
        {
          id: "necromancer_3_98",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_3_87",
            "necromancer_3_106",
            "necromancer_3_97",
            "necromancer_3_99",
          ],
        },
        {
          id: "necromancer_3_99",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_3_88",
            "necromancer_3_107",
            "necromancer_3_98",
            "necromancer_3_100",
          ],
        },
        {
          id: "necromancer_3_100",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_89",
            "necromancer_3_99",
            "necromancer_3_101",
          ],
        },
        {
          id: "necromancer_3_101",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_108", "necromancer_3_100"],
        },
        {
          id: "necromancer_3_102",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: [
            "necromancer_3_94",
            "necromancer_3_112",
            "necromancer_3_103",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_103",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["necromancer_3_95", "necromancer_3_102"],
        },
      ],
      [
        {
          id: "necromancer_3_104",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_114", "necromancer_3_105"],
          bg: "magic",
        },
        {
          id: "necromancer_3_105",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: ["necromancer_3_115", "necromancer_3_104"],
          bg: "magic",
        },
        {
          id: "necromancer_3_106",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "necromancer_3_98",
            "necromancer_3_117",
            "necromancer_3_107",
          ],
        },
        {
          id: "necromancer_3_107",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_99",
            "necromancer_3_118",
            "necromancer_3_106",
          ],
        },
        {
          id: "necromancer_3_108",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_3_101",
            "necromancer_3_120",
            "necromancer_3_109",
          ],
        },
        {
          id: "necromancer_3_109",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_121",
            "necromancer_3_108",
            "necromancer_3_110",
          ],
        },
        {
          id: "necromancer_3_110",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_122", "necromancer_3_109"],
        },
        {
          id: "necromancer_3_111",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["necromancer_3_124", "necromancer_3_112"],
          bg: "rare",
        },
        {
          id: "necromancer_3_112",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: [
            "necromancer_3_102",
            "necromancer_3_125",
            "necromancer_3_111",
          ],
          bg: "magic",
        },
      ],
      [
        {
          id: "necromancer_3_113",
          active: false,
          index: 0,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_114"],
        },
        {
          id: "necromancer_3_114",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "necromancer_3_104",
            "necromancer_3_126",
            "necromancer_3_113",
            "necromancer_3_115",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_115",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "necromancer_3_105",
            "necromancer_3_127",
            "necromancer_3_114",
            "necromancer_3_116",
          ],
          bg: "rare",
        },
        {
          id: "necromancer_3_116",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_128",
            "necromancer_3_115",
            "necromancer_3_117",
          ],
        },
        {
          id: "necromancer_3_117",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_3_106",
            "necromancer_3_116",
            "necromancer_3_118",
          ],
        },
        {
          id: "necromancer_3_118",
          active: null,
          index: 5,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
        },
        {
          id: "necromancer_3_119",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_3_130",
            "necromancer_3_118",
            "necromancer_3_120",
          ],
        },
        {
          id: "necromancer_3_120",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_108",
            "necromancer_3_131",
            "necromancer_3_119",
            "necromancer_3_121",
          ],
        },
        {
          id: "necromancer_3_121",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_109",
            "necromancer_3_132",
            "necromancer_3_120",
            "necromancer_3_122",
          ],
        },
        {
          id: "necromancer_3_122",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_110",
            "necromancer_3_133",
            "necromancer_3_121",
            "necromancer_3_123",
          ],
        },
        {
          id: "necromancer_3_123",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_122"],
        },
        {
          id: "necromancer_3_124",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: [
            "necromancer_3_111",
            "necromancer_3_136",
            "necromancer_3_125",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_125",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: [
            "necromancer_3_112",
            "necromancer_3_137",
            "necromancer_3_124",
          ],
          bg: "magic",
        },
      ],
      [
        {
          id: "necromancer_3_126",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_114", "necromancer_3_127"],
        },
        {
          id: "necromancer_3_127",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_3_115",
            "necromancer_3_138",
            "necromancer_3_126",
            "necromancer_3_128",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_128",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: [
            "necromancer_3_116",
            "necromancer_3_139",
            "necromancer_3_127",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_129",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_118",
            "necromancer_3_141",
            "necromancer_3_130",
          ],
        },
        {
          id: "necromancer_3_130",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_3_119",
            "necromancer_3_129",
            "necromancer_3_131",
          ],
        },
        {
          id: "necromancer_3_131",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_120",
            "necromancer_3_142",
            "necromancer_3_130",
            "necromancer_3_132",
          ],
        },
        {
          id: "necromancer_3_132",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_3_121",
            "necromancer_3_143",
            "necromancer_3_131",
            "necromancer_3_133",
          ],
        },
        {
          id: "necromancer_3_133",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "necromancer_3_122",
            "necromancer_3_144",
            "necromancer_3_132",
          ],
        },
        {
          id: "necromancer_3_134",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_146", "necromancer_3_135"],
        },
        {
          id: "necromancer_3_135",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_147",
            "necromancer_3_134",
            "necromancer_3_136",
          ],
        },
        {
          id: "necromancer_3_136",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_124",
            "necromancer_3_148",
            "necromancer_3_135",
            "necromancer_3_137",
          ],
        },
        {
          id: "necromancer_3_137",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: ["necromancer_3_125", "necromancer_3_136"],
        },
      ],
      [
        {
          id: "necromancer_3_138",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_127", "necromancer_3_139"],
        },
        {
          id: "necromancer_3_139",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_128",
            "necromancer_3_149",
            "necromancer_3_138",
            "necromancer_3_140",
          ],
        },
        {
          id: "necromancer_3_140",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",

          activable_ids: [
            "necromancer_3_150",
            "necromancer_3_139",
            "necromancer_3_141",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_141",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_3_129",
            "necromancer_3_151",
            "necromancer_3_140",
          ],
        },
        {
          id: "necromancer_3_142",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_131", "necromancer_3_143"],
        },
        {
          id: "necromancer_3_143",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_3_132",
            "necromancer_3_153",
            "necromancer_3_142",
            "necromancer_3_144",
          ],
        },
        {
          id: "necromancer_3_144",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_3_133",
            "necromancer_3_154",
            "necromancer_3_143",
            "necromancer_3_145",
          ],
        },
        {
          id: "necromancer_3_145",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_155",
            "necromancer_3_144",
            "necromancer_3_146",
          ],
        },
        {
          id: "necromancer_3_146",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_134",
            "necromancer_3_145",
            "necromancer_3_147",
          ],
        },
        {
          id: "necromancer_3_147",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_135",
            "necromancer_3_146",
            "necromancer_3_148",
          ],
        },
        {
          id: "necromancer_3_148",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: ["necromancer_3_136", "necromancer_3_147"],
        },
      ],
      [
        {
          id: "necromancer_3_149",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["necromancer_3_139", "necromancer_3_150"],
        },
        {
          id: "necromancer_3_150",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_3_140",
            "necromancer_3_156",
            "necromancer_3_149",
            "necromancer_3_151",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_151",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",
          activable_ids: [
            "necromancer_3_141",
            "necromancer_3_157",
            "necromancer_3_150",
            "necromancer_3_152",
          ],
          bg: "rare",
        },
        {
          id: "necromancer_3_152",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",

          activable_ids: ["necromancer_3_158", "necromancer_3_151"],
          bg: "magic",
        },
        {
          id: "necromancer_3_153",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_143", "necromancer_3_154"],
        },
        {
          id: "necromancer_3_154",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_3_144",
            "necromancer_3_159",
            "necromancer_3_153",
            "necromancer_3_155",
          ],
        },
        {
          id: "necromancer_3_155",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_3_145",
            "necromancer_3_160",
            "necromancer_3_154",
          ],
        },
      ],
      [
        {
          id: "necromancer_3_156",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_3_150", "necromancer_3_157"],
        },
        {
          id: "necromancer_3_157",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",
          activable_ids: [
            "necromancer_3_151",
            "necromancer_3_161",
            "necromancer_3_156",
            "necromancer_3_158",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_3_158",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_3_152", "necromancer_3_157"],
          bg: "magic",
        },
        {
          id: "necromancer_3_159",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_154", "necromancer_3_160"],
        },
        {
          id: "necromancer_3_160",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
      ],
      [
        {
          id: "necromancer_3_161",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_3_157"],
        },
        {
          id: "necromancer_3_162",
          active: false,
          index: 10,
          link: true,
          direction: "bottom",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],