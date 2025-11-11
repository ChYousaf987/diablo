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
          id: "necromancer_5_1",
          active: false,
          index: 10,
          link: true,
          direction: "top",
          image: "/paragon/barbarian/Gate_active.png",

          activable_ids: ["necromancer_5_3"],
        },
        {
          id: "necromancer_5_2",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_8"],
        },
      ],
      [
        {
          id: "necromancer_5_3",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "necromancer_5_4",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_11",
            "necromancer_5_3",
            "necromancer_5_5",
          ],
        },
        {
          id: "necromancer_5_5",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_12",
            "necromancer_5_4",
            "necromancer_5_6",
          ],
        },
        {
          id: "necromancer_5_6",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_13",
            "necromancer_5_5",
            "necromancer_5_7",
          ],
        },
        {
          id: "necromancer_5_7",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_14",
            "necromancer_5_6",
            "necromancer_5_8",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_8",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "necromancer_5_2",
            "necromancer_5_15",
            "necromancer_5_7",
            "necromancer_5_9",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_9",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_5_16", "necromancer_5_8"],
        },
      ],
      [
        {
          id: "necromancer_5_10",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_3",
            "necromancer_5_18",
            "necromancer_5_11",
          ],
        },
        {
          id: "necromancer_5_11",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_4",
            "necromancer_5_10",
            "necromancer_5_12",
          ],
        },
        {
          id: "necromancer_5_12",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_5",
            "necromancer_5_11",
            "necromancer_5_13",
          ],
        },
        {
          id: "necromancer_5_13",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_6",
            "necromancer_5_19",
            "necromancer_5_12",
            "necromancer_5_14",
          ],
        },
        {
          id: "necromancer_5_14",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "necromancer_5_7",
            "necromancer_5_20",
            "necromancer_5_13",
            "necromancer_5_15",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_15",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "necromancer_5_8",
            "necromancer_5_21",
            "necromancer_5_14",
            "necromancer_5_16",
          ],
          bg: "rare",
        },
        {
          id: "necromancer_5_16",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_5_9",
            "necromancer_5_22",
            "necromancer_5_15",
            "necromancer_5_17",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_17",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["necromancer_5_16"],
        },
      ],
      [
        {
          id: "necromancer_5_18",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_10", "necromancer_5_24"],
        },
        {
          id: "necromancer_5_19",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3,6,7,10,16,17,20,21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_5_13",
            "necromancer_5_27",
            "necromancer_5_20",
          ],
        },
        {
          id: "necromancer_5_20",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_5_14",
            "necromancer_5_28",
            "necromancer_5_19",
            "necromancer_5_21",
          ],
        },
        {
          id: "necromancer_5_21",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "necromancer_5_15",
            "necromancer_5_29",
            "necromancer_5_20",
            "necromancer_5_22",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_22",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_5_16", "necromancer_5_21"],
        },
        {
          id: "necromancer_5_23",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_5_31"],
        },
      ],
      [
        {
          id: "necromancer_5_24",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_18",
            "necromancer_5_36",
            "necromancer_5_25",
          ],
        },
        {
          id: "necromancer_5_25",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_37",
            "necromancer_5_24",
            "necromancer_5_26",
          ],
        },
        {
          id: "necromancer_5_26",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_38",
            "necromancer_5_25",
            "necromancer_5_27",
          ],
        },
        {
          id: "necromancer_5_27",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "necromancer_5_19",
            "necromancer_5_39",
            "necromancer_5_26",
            "necromancer_5_28",
          ],
        },
        {
          id: "necromancer_5_28",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_20",
            "necromancer_5_40",
            "necromancer_5_27",
            "necromancer_5_29",
          ],
        },
        {
          id: "necromancer_5_29",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_21",
            "necromancer_5_41",
            "necromancer_5_28",
          ],
        },
        {
          id: "necromancer_5_30",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_42", "necromancer_5_31"],
        },
        {
          id: "necromancer_5_31",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_5_23",
            "necromancer_5_43",
            "necromancer_5_30",
            "necromancer_5_32",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_32",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_5_44", "necromancer_5_31"],
        },
      ],
      [
        {
          id: "necromancer_5_33",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_47", "necromancer_5_34"],
        },
        {
          id: "necromancer_5_34",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_48",
            "necromancer_5_33",
            "necromancer_5_35",
          ],
        },
        {
          id: "necromancer_5_35",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_5_49",
            "necromancer_5_34",
            "necromancer_5_36",
          ],
        },
        {
          id: "necromancer_5_36",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_5_24",
            "necromancer_5_50",
            "necromancer_5_35",
            "necromancer_5_37",
          ],
        },
        {
          id: "necromancer_5_37",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_25",
            "necromancer_5_36",
            "necromancer_5_38",
          ],
        },
        {
          id: "necromancer_5_38",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_5_26",
            "necromancer_5_51",
            "necromancer_5_37",
            "necromancer_5_39",
          ],
        },
        {
          id: "necromancer_5_39",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_5_27",
            "necromancer_5_52",
            "necromancer_5_38",
            "necromancer_5_40",
          ],
        },
        {
          id: "necromancer_5_40",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_28",
            "necromancer_5_39",
            "necromancer_5_41",
          ],
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
        {
          id: "necromancer_5_42",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_30",
            "necromancer_5_55",
            "necromancer_5_43",
          ],
        },
        {
          id: "necromancer_5_42",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",

          activable_ids: [
            "necromancer_5_30",
            "necromancer_5_55",
            "necromancer_5_43",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_43",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",
          activable_ids: [
            "necromancer_5_31",
            "necromancer_5_56",
            "necromancer_5_42",
            "necromancer_5_44",
          ],
          bg: "rare",
        },
        {
          id: "necromancer_5_44",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",
          activable_ids: [
            "necromancer_5_32",
            "necromancer_5_57",
            "necromancer_5_43",
            "necromancer_5_45",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_45",
          active: false,
          index: 20,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_44"],
        },
      ],
      [
        {
          id: "necromancer_5_46",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",

          activable_ids: ["necromancer_5_63", "necromancer_5_47"],
          bg: "magic",
        },
        {
          id: "necromancer_5_47",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_33",
            "necromancer_5_46",
            "necromancer_5_48",
          ],
        },
        {
          id: "necromancer_5_48",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "necromancer_5_34",
            "necromancer_5_70",
            "necromancer_5_47",
            "necromancer_5_49",
          ],
        },
        {
          id: "necromancer_5_49",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "necromancer_5_35",
            "necromancer_5_48",
            "necromancer_5_50",
          ],
        },
        {
          id: "necromancer_5_50",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_36", "necromancer_5_49"],
        },
        {
          id: "necromancer_5_51",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_38",
            "necromancer_5_64",
            "necromancer_5_52",
          ],
        },
        {
          id: "necromancer_5_52",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_39", "necromancer_5_51"],
        },
        {
          id: "necromancer_5_53",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_5_41",
            "necromancer_5_66",
            "necromancer_5_54",
          ],
        },
        {
          id: "necromancer_5_54",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",

          options: ["5 Intelligence"],

          activable_ids: [
            "necromancer_5_67",
            "necromancer_5_53",
            "necromancer_5_55",
          ],
        },
        {
          id: "necromancer_5_55",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_42",
            "necromancer_5_69",
            "necromancer_5_54",
            "necromancer_5_56",
          ],
        },
        {
          id: "necromancer_5_56",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",

          activable_ids: [
            "necromancer_5_43",
            "necromancer_5_55",
            "necromancer_5_57",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_57",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_5_44",
            "necromancer_5_71",
            "necromancer_5_56",
          ],
        },
      ],
      [
        {
          id: "necromancer_5_58",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["necromancer_5_72", "necromancer_5_59"],
        },
        {
          id: "necromancer_5_59",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_73",
            "necromancer_5_58",
            "necromancer_5_60",
          ],
        },
        {
          id: "necromancer_5_60",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_74",
            "necromancer_5_59",
            "necromancer_5_61",
          ],
        },
        {
          id: "necromancer_5_61",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",

          activable_ids: ["necromancer_5_60", "necromancer_5_62"],
          bg: "magic",
        },
        {
          id: "necromancer_5_62",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",

          activable_ids: [
            "necromancer_5_75",
            "necromancer_5_61",
            "necromancer_5_63",
          ],
          bg: "rare",
        },
        {
          id: "necromancer_5_63",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: [
            "necromancer_5_46",
            "necromancer_5_76",
            "necromancer_5_62",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_64",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_51", "necromancer_5_81"],
        },
        {
          id: "necromancer_5_65",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_5_83", "necromancer_5_66"],
        },
        {
          id: "necromancer_5_66",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_53",
            "necromancer_5_84",
            "necromancer_5_65",
            "necromancer_5_67",
          ],
        },
        {
          id: "necromancer_5_67",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          glyph_ids: [4,5,8,12,13,14,15,19,23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_5_54",
            "necromancer_5_85",
            "necromancer_5_66",
            "necromancer_5_69",
          ],
        },

        {
          id: "necromancer_5_69",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_5_55", "necromancer_5_67"],
        },
        {
          id: "necromancer_5_70",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_5_48", "necromancer_5_78"],
        },
        {
          id: "necromancer_5_71",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["necromancer_5_57", "necromancer_5_87"],
        },
      ],
      [
        {
          id: "necromancer_5_72",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_58",
            "necromancer_5_88",
            "necromancer_5_73",
          ],
        },
        {
          id: "necromancer_5_73",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_59",
            "necromancer_5_89",
            "necromancer_5_72",
            "necromancer_5_74",
          ],
        },
        {
          id: "necromancer_5_74",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["necromancer_5_60", "necromancer_5_73"],
        },
        {
          id: "necromancer_5_75",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["necromancer_5_62", "necromancer_5_76"],
          bg: "magic",
        },
        {
          id: "necromancer_5_76",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",
          activable_ids: [
            "necromancer_5_63",
            "necromancer_5_90",
            "necromancer_5_75",
            "necromancer_5_77",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_77",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_91",
            "necromancer_5_76",
            "necromancer_5_78",
          ],
        },
        {
          id: "necromancer_5_78",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "necromancer_5_70",
            "necromancer_5_92",
            "necromancer_5_77",
            "necromancer_5_79",
          ],
        },
        {
          id: "necromancer_5_79",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["necromancer_5_93", "necromancer_5_78"],
        },
        {
          id: "necromancer_5_80",
          active: false,
          index: 11,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: ["necromancer_5_95", "necromancer_5_81"],
          bg: "magic",
        },
        {
          id: "necromancer_5_81",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",
          activable_ids: [
            "necromancer_5_64",
            "necromancer_5_96",
            "necromancer_5_80",
            "necromancer_5_82",
          ],
          bg: "magic",
        },
        {
          id: "necromancer_5_82",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["necromancer_5_81", "necromancer_5_83"],
        },
        {
          id: "necromancer_5_83",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "necromancer_5_65",
            "necromancer_5_82",
            "necromancer_5_84",
          ],
        },
        {
          id: "necromancer_5_84",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1,2,9,11,18,22],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "necromancer_5_66",
            "necromancer_5_97",
            "necromancer_5_83",
            "necromancer_5_85",
          ],
        },
        {
          id: "necromancer_5_85",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "necromancer_5_67",
            "necromancer_5_98",
            "necromancer_5_84",
          ],
        },
        {
          id: "necromancer_5_86",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["necromancer_5_99", "necromancer_5_87"],
        },
        {
          id: "necromancer_5_87",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "necromancer_5_71",
            "necromancer_5_100",
            "necromancer_5_86",
          ],
        },
      ],


