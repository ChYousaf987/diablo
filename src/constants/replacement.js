{
    id: 7,
    label: "Force of Nature",
    top: 0,
    left: 0,
    image: "/paragon/barbarian/necromancer.png",
    str: 70,
    dex: 39,
    int: 10,
    will: 39,
    item_top: null,
    is_active: false,
    bord: [
      [
        {
          id: "barbarian_7_1",
          active: false,
          index: 10,
          link: true,
          direction: "top",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_7_2",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_9", "barbarian_7_3"],
        },
        {
          id: "barbarian_7_3",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_7_2", "barbarian_7_4"],
        },
        {
          id: "barbarian_7_4",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_3", "barbarian_7_5"],
        },
        {
          id: "barbarian_7_5",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_7_6",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_5", "barbarian_7_7"],
        },
        {
          id: "barbarian_7_7",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_6", "barbarian_7_8"],
        },
        {
          id: "barbarian_7_8",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_11", "barbarian_7_7"],
        },
      ],
      [
        {
          id: "barbarian_7_9",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_2", "barbarian_7_12"],
        },
        {
          id: "barbarian_7_10",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_5"],
        },
        {
          id: "barbarian_7_11",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_8", "barbarian_7_17"],
        },
      ],
      [
        {
          id: "barbarian_7_12",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_9", "barbarian_7_18", "barbarian_7_13"],
        },
        {
          id: "barbarian_7_13",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_19", "barbarian_7_12", "barbarian_7_14"],
        },
        {
          id: "barbarian_7_14",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_20", "barbarian_7_13"],
        },
        {
          id: "barbarian_7_15",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_7_22", "barbarian_7_16"],
        },
        {
          id: "barbarian_7_16",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_23", "barbarian_7_15", "barbarian_7_17"],
        },
        {
          id: "barbarian_7_17",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_11", "barbarian_7_24", "barbarian_7_16"],
        },
      ],
      [
        {
          id: "barbarian_7_18",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_12", "barbarian_7_26", "barbarian_7_19"],
          bg: "magic",
        },
        {
          id: "barbarian_7_19",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/DustDevilSize_active.png",
          bg: "magic",
          activable_ids: [
            "barbarian_7_13",
            "barbarian_7_27",
            "barbarian_7_18",
            "barbarian_7_20",
          ],
        },
        {
          id: "barbarian_7_20",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_14",
            "barbarian_7_28",
            "barbarian_7_19",
            "barbarian_7_21",
          ],
        },
        {
          id: "barbarian_7_21",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_29", "barbarian_7_20", "barbarian_7_22"],
        },
        {
          id: "barbarian_7_22",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_15",
            "barbarian_7_30",
            "barbarian_7_21",
            "barbarian_7_23",
          ],
        },
        {
          id: "barbarian_7_23",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_7_16",
            "barbarian_7_31",
            "barbarian_7_22",
            "barbarian_7_24",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_24",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_17", "barbarian_7_32", "barbarian_7_23"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_7_25",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_35", "barbarian_7_26"],
        },
        {
          id: "barbarian_7_26",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/DustDevilSize_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],

          activable_ids: [
            "barbarian_7_18",
            "barbarian_7_36",
            "barbarian_7_25",
            "barbarian_7_27",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_7_27",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/DustDevilSize_active.png",
          activable_ids: [
            "barbarian_7_19",
            "barbarian_7_37",
            "barbarian_7_26",
            "barbarian_7_28",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_28",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_20",
            "barbarian_7_38",
            "barbarian_7_27",
            "barbarian_7_29",
          ],
        },
        {
          id: "barbarian_7_29",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_21",
            "barbarian_7_39",
            "barbarian_7_28",
            "barbarian_7_30",
          ],
        },
        {
          id: "barbarian_7_30",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_22",
            "barbarian_7_40",
            "barbarian_7_29",
            "barbarian_7_31",
          ],
        },
        {
          id: "barbarian_7_31",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_7_23",
            "barbarian_7_41",
            "barbarian_7_30",
            "barbarian_7_32",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_32",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          activable_ids: [
            "barbarian_7_24",
            "barbarian_7_42",
            "barbarian_7_31",
            "barbarian_7_33",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_7_33",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_7_43", "barbarian_7_32"],
        },
      ],
      [
        {
          id: "barbarian_7_34",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_7_35"],
        },
        {
          id: "barbarian_7_35",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_7_25",
            "barbarian_7_45",
            "barbarian_7_34",
            "barbarian_7_36",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_36",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/DustDevilSize_active.png",
          activable_ids: [
            "barbarian_7_26",
            "barbarian_7_46",
            "barbarian_7_35",
            "barbarian_7_37",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_37",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_27",
            "barbarian_7_47",
            "barbarian_7_36",
            "barbarian_7_38",
          ],
        },
        {
          id: "barbarian_7_38",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "barbarian_7_28",
            "barbarian_7_48",
            "barbarian_7_37",
            "barbarian_7_39",
          ],
        },
        {
          id: "barbarian_7_39",
          active: null,
          index: 10,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
        },
        {
          id: "barbarian_7_40",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_7_30",
            "barbarian_7_50",
            "barbarian_7_39",
            "barbarian_7_41",
          ],
        },
        {
          id: "barbarian_7_41",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_31",
            "barbarian_7_51",
            "barbarian_7_40",
            "barbarian_7_42",
          ],
        },
        {
          id: "barbarian_7_42",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_7_32",
            "barbarian_7_52",
            "barbarian_7_41",
            "barbarian_7_43",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_43",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_33",
            "barbarian_7_53",
            "barbarian_7_42",
            "barbarian_7_44",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_44",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_43"],
        },
      ],
      [
        {
          id: "barbarian_7_45",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_35", "barbarian_7_59", "barbarian_7_46"],
        },
        {
          id: "barbarian_7_46",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_36",
            "barbarian_7_60",
            "barbarian_7_45",
            "barbarian_7_47",
          ],
        },
        {
          id: "barbarian_7_47",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_7_37",
            "barbarian_7_61",
            "barbarian_7_46",
            "barbarian_7_48",
          ],
        },
        {
          id: "barbarian_7_48",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_38", "barbarian_7_47", "barbarian_7_49"],
        },
        {
          id: "barbarian_7_49",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_39", "barbarian_7_48", "barbarian_7_50"],
        },
        {
          id: "barbarian_7_50",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_7_40", "barbarian_7_49", "barbarian_7_51"],
        },
        {
          id: "barbarian_7_51",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_41",
            "barbarian_7_62",
            "barbarian_7_50",
            "barbarian_7_52",
          ],
        },
        {
          id: "barbarian_7_52",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_42",
            "barbarian_7_63",
            "barbarian_7_51",
            "barbarian_7_53",
          ],
        },
        {
          id: "barbarian_7_53",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_43", "barbarian_7_64", "barbarian_7_52"],
        },
      ],
      [
        {
          id: "barbarian_7_54",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_70", "barbarian_7_55"],
        },
        {
          id: "barbarian_7_55",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_71", "barbarian_7_54", "barbarian_7_56"],
        },
        {
          id: "barbarian_7_56",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_55", "barbarian_7_57"],
        },
        {
          id: "barbarian_7_57",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_72", "barbarian_7_56", "barbarian_7_58"],
        },
        {
          id: "barbarian_7_58",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_73", "barbarian_7_57", "barbarian_7_59"],
        },
        {
          id: "barbarian_7_59",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_45", "barbarian_7_58", "barbarian_7_60"],
        },
        {
          id: "barbarian_7_60",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_46",
            "barbarian_7_74",
            "barbarian_7_59",
            "barbarian_7_61",
          ],
        },
        {
          id: "barbarian_7_61",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_47", "barbarian_7_75", "barbarian_7_60"],
        },
        {
          id: "barbarian_7_62",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_51", "barbarian_7_77", "barbarian_7_63"],
        },
        {
          id: "barbarian_7_63",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "barbarian_7_52",
            "barbarian_7_78",
            "barbarian_7_62",
            "barbarian_7_64",
          ],
        },
        {
          id: "barbarian_7_64",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_7_53", "barbarian_7_63", "barbarian_7_65"],
        },
        {
          id: "barbarian_7_65",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_79", "barbarian_7_64", "barbarian_7_66"],
        },
        {
          id: "barbarian_7_66",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_80", "barbarian_7_65", "barbarian_7_67"],
        },
        {
          id: "barbarian_7_67",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_66", "barbarian_7_68"],
        },
        {
          id: "barbarian_7_68",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_81", "barbarian_7_67", "barbarian_7_69"],
        },
        {
          id: "barbarian_7_69",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_82", "barbarian_7_68"],
        },
      ],
      [
        {
          id: "barbarian_7_70",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_54", "barbarian_7_84", "barbarian_7_71"],
        },
        {
          id: "barbarian_7_71",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_55", "barbarian_7_85", "barbarian_7_70"],
        },
        {
          id: "barbarian_7_72",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/CriticalDamageEarth_active.png",

          activable_ids: ["barbarian_7_57", "barbarian_7_86", "barbarian_7_73"],
          bg: "magic",
        },
        {
          id: "barbarian_7_73",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DustDevilArea_active.png",

          activable_ids: ["barbarian_7_58", "barbarian_7_87", "barbarian_7_72"],
          bg: "magic",
        },
        {
          id: "barbarian_7_74",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_60", "barbarian_7_75"],
        },
        {
          id: "barbarian_7_75",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_61", "barbarian_7_88", "barbarian_7_74"],
        },
        {
          id: "barbarian_7_76",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_90"],
        },
        {
          id: "barbarian_7_77",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_62", "barbarian_7_92", "barbarian_7_78"],
        },
        {
          id: "barbarian_7_78",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_63", "barbarian_7_77"],
        },
        {
          id: "barbarian_7_79",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_7_65", "barbarian_7_93", "barbarian_7_80"],
          bg: "magic",
        },
        {
          id: "barbarian_7_80",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_7_66", "barbarian_7_94", "barbarian_7_79"],
          bg: "magic",
        },
        {
          id: "barbarian_7_81",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_68", "barbarian_7_95", "barbarian_7_82"],
        },
        {
          id: "barbarian_7_82",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_69", "barbarian_7_96", "barbarian_7_81"],
        },
      ],
      [
        {
          id: "barbarian_7_83",
          active: false,
          index: 0,
          link: true,
          direction: "left",
          image: "/paragon/barbarian/Gate_active.png",
        },
        {
          id: "barbarian_7_84",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          opened: true,
        },
        {
          id: "barbarian_7_85",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_71", "barbarian_7_98", "barbarian_7_84"],
        },
        {
          id: "barbarian_7_86",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/CriticalDamageEarth_active.png",

          activable_ids: ["barbarian_7_72", "barbarian_7_99", "barbarian_7_87"],
          bg: "rare",
        },
        {
          id: "barbarian_7_87",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/CriticalDamageEarth_active.png",

          activable_ids: [
            "barbarian_7_73",
            "barbarian_7_100",
            "barbarian_7_86",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_88",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_75",
            "barbarian_7_103",
            "barbarian_7_89",
          ],
        },
        {
          id: "barbarian_7_89",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_104",
            "barbarian_7_88",
            "barbarian_7_90",
          ],
        },
        {
          id: "barbarian_7_90",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_76",
            "barbarian_7_105",
            "barbarian_7_89",
            "barbarian_7_91",
          ],
        },
        {
          id: "barbarian_7_91",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_106",
            "barbarian_7_90",
            "barbarian_7_92",
          ],
        },
        {
          id: "barbarian_7_92",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_77",
            "barbarian_7_107",
            "barbarian_7_91",
          ],
        },
        {
          id: "barbarian_7_93",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Armor_active.png",

          activable_ids: [
            "barbarian_7_79",
            "barbarian_7_110",
            "barbarian_7_94",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_94",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",
          bg: "magic",
          activable_ids: [
            "barbarian_7_80",
            "barbarian_7_111",
            "barbarian_7_93",
          ],
        },
        {
          id: "barbarian_7_95",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_81",
            "barbarian_7_112",
            "barbarian_7_96",
          ],
        },
        {
          id: "barbarian_7_96",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          opened: true,
        },
        {
          id: "barbarian_7_171",
          active: false,
          index: 20,
          link: true,
          direction: "right",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_7_97",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_84",
            "barbarian_7_114",
            "barbarian_7_98",
          ],
        },
        {
          id: "barbarian_7_98",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_85",
            "barbarian_7_115",
            "barbarian_7_97",
          ],
        },
        {
          id: "barbarian_7_99",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/CriticalDamageEarth_active.png",

          activable_ids: [
            "barbarian_7_86",
            "barbarian_7_117",
            "barbarian_7_100",
          ],
          label: "normalde socket",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
          activable_ids: [
            "barbarian_7_86",
            "barbarian_7_117",
            "barbarian_7_100",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_100",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DustDevilArea_active.png",
          label: "Nœud magique",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
          activable_ids: [
            "barbarian_7_87",
            "barbarian_7_118",
            "barbarian_7_99",
            "barbarian_7_101",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_100",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DustDevilArea_active.png",
          activable_ids: [
            "barbarian_7_87",
            "barbarian_7_118",
            "barbarian_7_99",
            "barbarian_7_101",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_101",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_119",
            "barbarian_7_100",
            "barbarian_7_102",
          ],
        },
        {
          id: "barbarian_7_102",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_120",
            "barbarian_7_101",
            "barbarian_7_103",
          ],
        },
        {
          id: "barbarian_7_103",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_88",
            "barbarian_7_121",
            "barbarian_7_102",
            "barbarian_7_104",
          ],
        },
        {
          id: "barbarian_7_104",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_89",
            "barbarian_7_103",
            "barbarian_7_105",
          ],
        },
        {
          id: "barbarian_7_105",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_90",
            "barbarian_7_122",
            "barbarian_7_104",
            "barbarian_7_106",
          ],
        },
        {
          id: "barbarian_7_106",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",

          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_7_91",
            "barbarian_7_105",
            "barbarian_7_107",
          ],
        },
        {
          id: "barbarian_7_107",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_92",
            "barbarian_7_123",
            "barbarian_7_106",
            "barbarian_7_108",
          ],
        },
        {
          id: "barbarian_7_108",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_124",
            "barbarian_7_107",
            "barbarian_7_109",
          ],
        },
        {
          id: "barbarian_7_109",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_125",
            "barbarian_7_108",
            "barbarian_7_110",
          ],
        },
        {
          id: "barbarian_7_110",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Armor_active.png",
          activable_ids: [
            "barbarian_7_93",
            "barbarian_7_126",
            "barbarian_7_109",
            "barbarian_7_111",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_111",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: [
            "barbarian_7_94",
            "barbarian_7_127",
            "barbarian_7_110",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_112",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_95",
            "barbarian_7_129",
            "barbarian_7_113",
          ],
        },
        {
          id: "barbarian_7_113",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_96",
            "barbarian_7_130",
            "barbarian_7_112",
          ],
        },
      ],
      [
        {
          id: "barbarian_7_114",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_97", "barbarian_7_115"],
        },
        {
          id: "barbarian_7_115",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_98",
            "barbarian_7_114",
            "barbarian_7_116",
          ],
        },
        {
          id: "barbarian_7_116",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_115", "barbarian_7_117"],
        },
        {
          id: "barbarian_7_117",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_99",
            "barbarian_7_116",
            "barbarian_7_118",
          ],
        },
        {
          id: "barbarian_7_118",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_100",
            "barbarian_7_117",
            "barbarian_7_119",
          ],
        },
        {
          id: "barbarian_7_119",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_101",
            "barbarian_7_118",
            "barbarian_7_120",
          ],
        },
        {
          id: "barbarian_7_120",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_102",
            "barbarian_7_119",
            "barbarian_7_121",
          ],
        },
        {
          id: "barbarian_7_121",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_103",
            "barbarian_7_131",
            "barbarian_7_120",
          ],
        },
        {
          id: "barbarian_7_122",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_105", "barbarian_7_132"],
        },
        {
          id: "barbarian_7_123",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_107",
            "barbarian_7_133",
            "barbarian_7_124",
          ],
        },
        {
          id: "barbarian_7_124",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_7_108",
            "barbarian_7_123",
            "barbarian_7_125",
          ],
        },
        {
          id: "barbarian_7_125",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_109",
            "barbarian_7_124",
            "barbarian_7_126",
          ],
        },
        {
          id: "barbarian_7_126",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_110",
            "barbarian_7_125",
            "barbarian_7_127",
          ],
        },
        {
          id: "barbarian_7_127",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_111",
            "barbarian_7_126",
            "barbarian_7_128",
          ],
        },
        {
          id: "barbarian_7_128",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_127", "barbarian_7_129"],
        },
        {
          id: "barbarian_7_129",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_112",
            "barbarian_7_128",
            "barbarian_7_130",
          ],
        },
        {
          id: "barbarian_7_130",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_113", "barbarian_7_129"],
        },
      ],
      [
        {
          id: "barbarian_7_131",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_121", "barbarian_7_136"],
        },
        {
          id: "barbarian_7_132",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/barbarian.png",

          activable_ids: ["barbarian_7_122", "barbarian_7_137"],
          bg: "rare",
        },
        {
          id: "barbarian_7_133",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_123", "barbarian_7_138"],
        },
      ],
      [
        {
          id: "barbarian_7_134",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: ["barbarian_7_141", "barbarian_7_135"],
          bg: "magic",
        },
        {
          id: "barbarian_7_135",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Armor_active.png",

          activable_ids: [
            "barbarian_7_142",
            "barbarian_7_134",
            "barbarian_7_136",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_136",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_131",
            "barbarian_7_143",
            "barbarian_7_135",
          ],
        },
        {
          id: "barbarian_7_137",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_132", "barbarian_7_145"],
        },
        {
          id: "barbarian_7_138",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_133",
            "barbarian_7_147",
            "barbarian_7_139",
          ],
        },
        {
          id: "barbarian_7_139",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/EarthquakeDamage_active.png",

          activable_ids: [
            "barbarian_7_148",
            "barbarian_7_138",
            "barbarian_7_140",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_140",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/EarthquakeDamage_active.png",

          activable_ids: ["barbarian_7_149", "barbarian_7_139"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_7_141",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",
          bg: "magic",
          activable_ids: [
            "barbarian_7_134",
            "barbarian_7_150",
            "barbarian_7_142",
          ],
        },
        {
          id: "barbarian_7_142",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",
          activable_ids: [
            "barbarian_7_135",
            "barbarian_7_151",
            "barbarian_7_141",
            "barbarian_7_143",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_143",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_136",
            "barbarian_7_152",
            "barbarian_7_142",
            "barbarian_7_144",
          ],
        },
        {
          id: "barbarian_7_144",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_153",
            "barbarian_7_143",
            "barbarian_7_145",
          ],
        },
        {
          id: "barbarian_7_145",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_7_137",
            "barbarian_7_154",
            "barbarian_7_144",
            "barbarian_7_146",
          ],
        },
        {
          id: "barbarian_7_146",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_7_155",
            "barbarian_7_145",
            "barbarian_7_147",
          ],
        },
        {
          id: "barbarian_7_147",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_7_138",
            "barbarian_7_156",
            "barbarian_7_146",
            "barbarian_7_148",
          ],
        },
        {
          id: "barbarian_7_148",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/EarthquakeDamage_active.png",
          activable_ids: [
            "barbarian_7_139",
            "barbarian_7_157",
            "barbarian_7_147",
            "barbarian_7_149",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_7_149",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/EarthquakeDamage_active.png",

          activable_ids: [
            "barbarian_7_140",
            "barbarian_7_158",
            "barbarian_7_148",
          ],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_7_150",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Armor_active.png",

          activable_ids: ["barbarian_7_141", "barbarian_7_151"],
          bg: "magic",
        },
        {
          id: "barbarian_7_151",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: [
            "barbarian_7_142",
            "barbarian_7_150",
            "barbarian_7_152",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_152",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_7_143",
            "barbarian_7_159",
            "barbarian_7_151",
            "barbarian_7_153",
          ],
        },
        {
          id: "barbarian_7_153",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_7_144",
            "barbarian_7_152",
            "barbarian_7_154",
          ],
        },
        {
          id: "barbarian_7_154",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_145",
            "barbarian_7_153",
            "barbarian_7_155",
          ],
        },
        {
          id: "barbarian_7_155",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_146",
            "barbarian_7_154",
            "barbarian_7_156",
          ],
        },
        {
          id: "barbarian_7_156",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_7_147",
            "barbarian_7_160",
            "barbarian_7_155",
            "barbarian_7_157",
          ],
        },
        {
          id: "barbarian_7_157",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/DamagePhysical_active.png",

          activable_ids: [
            "barbarian_7_148",
            "barbarian_7_156",
            "barbarian_7_158",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_7_158",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/DamagePhysical_active.png",

          activable_ids: ["barbarian_7_149", "barbarian_7_157"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_7_159",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_152", "barbarian_7_161"],
        },
        {
          id: "barbarian_7_160",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_156", "barbarian_7_164"],
        },
      ],
      [
        {
          id: "barbarian_7_161",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_7_159",
            "barbarian_7_165",
            "barbarian_7_162",
          ],
        },
        {
          id: "barbarian_7_162",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_7_166", "barbarian_7_161"],
        },
        {
          id: "barbarian_7_163",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_7_168", "barbarian_7_164"],
        },
        {
          id: "barbarian_7_164",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_7_160",
            "barbarian_7_169",
            "barbarian_7_163",
          ],
        },
      ],
      [
        {
          id: "barbarian_7_165",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_7_161", "barbarian_7_166"],
        },
        {
          id: "barbarian_7_166",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_7_162",
            "barbarian_7_165",
            "barbarian_7_167",
          ],
        },
        {
          id: "barbarian_7_167",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_7_168",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_7_163",
            "barbarian_7_167",
            "barbarian_7_169",
          ],
        },
        {
          id: "barbarian_7_169",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_7_164", "barbarian_7_168"],
        },
      ],
      [
        {
          id: "barbarian_7_170",
          active: false,
          index: 10,
          link: true,
          direction: "bottom",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
    ],
  },
  {
    id: 8,
    label: "Hemmorhage",
    top: 0,
    left: 0,
    image: "/paragon/barbarian/necromancer.png",
    str: 70,
    dex: 39,
    int: 10,
    will: 39,
    item_top: null,
    is_active: false,
    bord: [
      [
        {
          id: "barbarian_8_1",
          active: false,
          index: 10,
          link: true,
          direction: "top",
          image: "/paragon/barbarian/Gate_active.png",

          activable_ids: ["barbarian_8_3"],
        },
        {
          id: "barbarian_8_2",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_8"],
        },
      ],
      [
        {
          id: "barbarian_8_3",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_8_4",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_11", "barbarian_8_3", "barbarian_8_5"],
        },
        {
          id: "barbarian_8_5",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_12", "barbarian_8_4", "barbarian_8_6"],
        },
        {
          id: "barbarian_8_6",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_13", "barbarian_8_5", "barbarian_8_7"],
        },
        {
          id: "barbarian_8_7",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_14", "barbarian_8_6", "barbarian_8_8"],
          bg: "magic",
        },
        {
          id: "barbarian_8_8",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "barbarian_8_2",
            "barbarian_8_15",
            "barbarian_8_7",
            "barbarian_8_9",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_9",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_16", "barbarian_8_8"],
        },
      ],
      [
        {
          id: "barbarian_8_10",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: ["barbarian_8_3", "barbarian_8_18", "barbarian_8_11"],
        },
        {
          id: "barbarian_8_11",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_4", "barbarian_8_10", "barbarian_8_12"],
        },
        {
          id: "barbarian_8_12",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_5", "barbarian_8_11", "barbarian_8_13"],
        },
        {
          id: "barbarian_8_13",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_6",
            "barbarian_8_19",
            "barbarian_8_12",
            "barbarian_8_14",
          ],
        },
        {
          id: "barbarian_8_14",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "barbarian_8_7",
            "barbarian_8_20",
            "barbarian_8_13",
            "barbarian_8_15",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_15",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "barbarian_8_8",
            "barbarian_8_21",
            "barbarian_8_14",
            "barbarian_8_16",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_8_16",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_9",
            "barbarian_8_22",
            "barbarian_8_15",
            "barbarian_8_17",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_17",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_8_16"],
        },
      ],
      [
        {
          id: "barbarian_8_18",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_10", "barbarian_8_24"],
        },
        {
          id: "barbarian_8_19",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_13", "barbarian_8_27", "barbarian_8_20"],
        },
        {
          id: "barbarian_8_20",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_8_14",
            "barbarian_8_28",
            "barbarian_8_19",
            "barbarian_8_21",
          ],
        },
        {
          id: "barbarian_8_21",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/DamageBleed_active.png",
          activable_ids: [
            "barbarian_8_15",
            "barbarian_8_29",
            "barbarian_8_20",
            "barbarian_8_22",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_22",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_16", "barbarian_8_21"],
        },
        {
          id: "barbarian_8_23",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_31"],
        },
      ],
      [
        {
          id: "barbarian_8_24",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_18", "barbarian_8_36", "barbarian_8_25"],
        },
        {
          id: "barbarian_8_25",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_37", "barbarian_8_24", "barbarian_8_26"],
        },
        {
          id: "barbarian_8_26",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_38", "barbarian_8_25", "barbarian_8_27"],
        },
        {
          id: "barbarian_8_27",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "barbarian_8_19",
            "barbarian_8_39",
            "barbarian_8_26",
            "barbarian_8_28",
          ],
        },
        {
          id: "barbarian_8_28",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_20",
            "barbarian_8_40",
            "barbarian_8_27",
            "barbarian_8_29",
          ],
        },
        {
          id: "barbarian_8_29",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_21", "barbarian_8_41", "barbarian_8_28"],
        },
        {
          id: "barbarian_8_30",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_42", "barbarian_8_31"],
        },
        {
          id: "barbarian_8_31",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_8_23",
            "barbarian_8_43",
            "barbarian_8_30",
            "barbarian_8_32",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_32",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_44", "barbarian_8_31"],
        },
      ],
      [
        {
          id: "barbarian_8_33",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_47", "barbarian_8_34"],
        },
        {
          id: "barbarian_8_34",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_48", "barbarian_8_33", "barbarian_8_35"],
        },
        {
          id: "barbarian_8_35",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_49", "barbarian_8_34", "barbarian_8_36"],
        },
        {
          id: "barbarian_8_36",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_8_24",
            "barbarian_8_50",
            "barbarian_8_35",
            "barbarian_8_37",
          ],
        },
        {
          id: "barbarian_8_37",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_25", "barbarian_8_36", "barbarian_8_38"],
        },
        {
          id: "barbarian_8_38",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_26",
            "barbarian_8_51",
            "barbarian_8_37",
            "barbarian_8_39",
          ],
        },
        {
          id: "barbarian_8_39",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_27",
            "barbarian_8_52",
            "barbarian_8_38",
            "barbarian_8_40",
          ],
        },
        {
          id: "barbarian_8_40",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_28", "barbarian_8_39", "barbarian_8_41"],
        },
        {
          id: "barbarian_8_41",
          active: null,
          index: 15,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
        },
        {
          id: "barbarian_8_42",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_30", "barbarian_8_55", "barbarian_8_43"],
        },
        {
          id: "barbarian_8_42",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",

          activable_ids: ["barbarian_8_30", "barbarian_8_55", "barbarian_8_43"],
          bg: "magic",
        },
        {
          id: "barbarian_8_43",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",
          activable_ids: [
            "barbarian_8_31",
            "barbarian_8_56",
            "barbarian_8_42",
            "barbarian_8_44",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_8_44",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",
          activable_ids: [
            "barbarian_8_32",
            "barbarian_8_57",
            "barbarian_8_43",
            "barbarian_8_45",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_45",
          active: false,
          index: 20,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_44"],
        },
      ],
      [
        {
          id: "barbarian_8_46",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",

          activable_ids: ["barbarian_8_63", "barbarian_8_47"],
          bg: "magic",
        },
        {
          id: "barbarian_8_47",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_33", "barbarian_8_46", "barbarian_8_48"],
        },
        {
          id: "barbarian_8_48",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_8_34",
            "barbarian_8_70",
            "barbarian_8_47",
            "barbarian_8_49",
          ],
        },
        {
          id: "barbarian_8_49",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_8_35", "barbarian_8_48", "barbarian_8_50"],
        },
        {
          id: "barbarian_8_50",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_36", "barbarian_8_49"],
        },
        {
          id: "barbarian_8_51",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_38", "barbarian_8_64", "barbarian_8_52"],
        },
        {
          id: "barbarian_8_52",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_39", "barbarian_8_51"],
        },
        {
          id: "barbarian_8_53",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_41", "barbarian_8_66", "barbarian_8_54"],
        },
        {
          id: "barbarian_8_54",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",

          options: ["5 Intelligence"],

          activable_ids: ["barbarian_8_67", "barbarian_8_53", "barbarian_8_55"],
        },
        {
          id: "barbarian_8_55",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_42",
            "barbarian_8_69",
            "barbarian_8_54",
            "barbarian_8_56",
          ],
        },
        {
          id: "barbarian_8_56",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",

          activable_ids: ["barbarian_8_43", "barbarian_8_55", "barbarian_8_57"],
          bg: "magic",
        },
        {
          id: "barbarian_8_57",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_44", "barbarian_8_71", "barbarian_8_56"],
        },
      ],
      [
        {
          id: "barbarian_8_58",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_72", "barbarian_8_59"],
        },
        {
          id: "barbarian_8_59",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_8_73", "barbarian_8_58", "barbarian_8_60"],
        },
        {
          id: "barbarian_8_60",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_8_74", "barbarian_8_59", "barbarian_8_61"],
        },
        {
          id: "barbarian_8_61",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",

          activable_ids: ["barbarian_8_60", "barbarian_8_62"],
          bg: "magic",
        },
        {
          id: "barbarian_8_62",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",

          activable_ids: ["barbarian_8_75", "barbarian_8_61", "barbarian_8_63"],
          bg: "rare",
        },
        {
          id: "barbarian_8_63",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_8_46", "barbarian_8_76", "barbarian_8_62"],
          bg: "magic",
        },
        {
          id: "barbarian_8_64",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_51", "barbarian_8_81"],
        },
        {
          id: "barbarian_8_65",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_83", "barbarian_8_66"],
        },
        {
          id: "barbarian_8_66",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_53",
            "barbarian_8_84",
            "barbarian_8_65",
            "barbarian_8_67",
          ],
        },
        {
          id: "barbarian_8_67",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_54",
            "barbarian_8_85",
            "barbarian_8_66",
            "barbarian_8_69",
          ],
        },

        {
          id: "barbarian_8_69",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_55", "barbarian_8_67"],
        },
        {
          id: "barbarian_8_70",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_48", "barbarian_8_78"],
        },
        {
          id: "barbarian_8_71",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_8_57", "barbarian_8_87"],
        },
      ],
      [
        {
          id: "barbarian_8_72",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_58", "barbarian_8_88", "barbarian_8_73"],
        },
        {
          id: "barbarian_8_73",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_59",
            "barbarian_8_89",
            "barbarian_8_72",
            "barbarian_8_74",
          ],
        },
        {
          id: "barbarian_8_74",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_60", "barbarian_8_73"],
        },
        {
          id: "barbarian_8_75",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_8_62", "barbarian_8_76"],
          bg: "magic",
        },
        {
          id: "barbarian_8_76",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/ResistancePoison_active.png",
          activable_ids: [
            "barbarian_8_63",
            "barbarian_8_90",
            "barbarian_8_75",
            "barbarian_8_77",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_77",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_8_91", "barbarian_8_76", "barbarian_8_78"],
        },
        {
          id: "barbarian_8_78",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          activable_ids: [
            "barbarian_8_70",
            "barbarian_8_92",
            "barbarian_8_77",
            "barbarian_8_79",
          ],
        },
        {
          id: "barbarian_8_79",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_93", "barbarian_8_78"],
        },
        {
          id: "barbarian_8_80",
          active: false,
          index: 11,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: ["barbarian_8_95", "barbarian_8_81"],
          bg: "magic",
        },
        {
          id: "barbarian_8_81",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",
          activable_ids: [
            "barbarian_8_64",
            "barbarian_8_96",
            "barbarian_8_80",
            "barbarian_8_82",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_82",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_8_81", "barbarian_8_83"],
        },
        {
          id: "barbarian_8_83",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_8_65", "barbarian_8_82", "barbarian_8_84"],
        },
        {
          id: "barbarian_8_84",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_66",
            "barbarian_8_97",
            "barbarian_8_83",
            "barbarian_8_85",
          ],
        },
        {
          id: "barbarian_8_85",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_67", "barbarian_8_98", "barbarian_8_84"],
        },
        {
          id: "barbarian_8_86",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_99", "barbarian_8_87"],
        },
        {
          id: "barbarian_8_87",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_71",
            "barbarian_8_100",
            "barbarian_8_86",
          ],
        },
      ],
      [
        {
          id: "barbarian_8_88",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_72",
            "barbarian_8_102",
            "barbarian_8_89",
          ],
        },
        {
          id: "barbarian_8_89",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_73", "barbarian_8_88"],
        },
        {
          id: "barbarian_8_90",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_76", "barbarian_8_91"],
        },
        {
          id: "barbarian_8_91",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_77", "barbarian_8_90", "barbarian_8_92"],
        },
        {
          id: "barbarian_8_92",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_78",
            "barbarian_8_103",
            "barbarian_8_91",
            "barbarian_8_93",
          ],
        },
        {
          id: "barbarian_8_93",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_79", "barbarian_8_92", "barbarian_8_94"],
        },
        {
          id: "barbarian_8_94",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",

          activable_ids: ["barbarian_8_93", "barbarian_8_95"],
          bg: "magic",
        },
        {
          id: "barbarian_8_95",
          active: false,
          index: 11,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",
          activable_ids: [
            "barbarian_8_80",
            "barbarian_8_104",
            "barbarian_8_94",
            "barbarian_8_96",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_8_96",
          active: false,
          index: 12,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: ["barbarian_8_81", "barbarian_8_95"],
          bg: "magic",
        },
        {
          id: "barbarian_8_97",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_84",
            "barbarian_8_106",
            "barbarian_8_98",
          ],
        },
        {
          id: "barbarian_8_98",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_85",
            "barbarian_8_107",
            "barbarian_8_97",
          ],
        },
        {
          id: "barbarian_8_99",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_86",
            "barbarian_8_109",
            "barbarian_8_100",
          ],
        },
        {
          id: "barbarian_8_100",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_87",
            "barbarian_8_110",
            "barbarian_8_99",
          ],
        },
      ],
      [
        {
          id: "barbarian_8_101",
          active: false,
          index: 0,
          link: true,
          direction: "left",
          image: "/paragon/barbarian/Gate_active.png",
        },
        {
          id: "barbarian_8_102",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          opened: true,
        },
        {
          id: "barbarian_8_103",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_92", "barbarian_8_115"],
        },
        {
          id: "barbarian_8_104",
          active: false,
          index: 11,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: ["barbarian_8_95", "barbarian_8_117"],
          bg: "magic",
        },
        {
          id: "barbarian_8_105",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_119", "barbarian_8_106"],
        },
        {
          id: "barbarian_8_106",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_8_97",
            "barbarian_8_120",
            "barbarian_8_105",
            "barbarian_8_107",
          ],
        },
        {
          id: "barbarian_8_107",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_98",
            "barbarian_8_106",
            "barbarian_8_108",
          ],
        },
        {
          id: "barbarian_8_108",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_107", "barbarian_8_109"],
        },
        {
          id: "barbarian_8_109",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_99",
            "barbarian_8_108",
            "barbarian_8_110",
          ],
        },
        {
          id: "barbarian_8_110",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          opened: true,
        },
        {
          id: "barbarian_8_111",
          active: false,
          index: 20,
          link: true,
          direction: "right",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_8_112",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_102", "barbarian_8_121"],
        },
        {
          id: "barbarian_8_113",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_123", "barbarian_8_114"],
        },
        {
          id: "barbarian_8_114",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_124",
            "barbarian_8_113",
            "barbarian_8_115",
          ],
        },
        {
          id: "barbarian_8_115",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_103",
            "barbarian_8_114",
            "barbarian_8_116",
          ],
        },
        {
          id: "barbarian_8_116",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_125", "barbarian_8_115"],
        },
        {
          id: "barbarian_8_117",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_104",
            "barbarian_8_127",
            "barbarian_8_118",
          ],
        },
        {
          id: "barbarian_8_118",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_128", "barbarian_8_117"],
        },
        {
          id: "barbarian_8_119",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_105",
            "barbarian_8_129",
            "barbarian_8_120",
          ],
        },
        {
          id: "barbarian_8_120",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_106",
            "barbarian_8_130",
            "barbarian_8_119",
          ],
        },
      ],
      [
        {
          id: "barbarian_8_121",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_112",
            "barbarian_8_131",
            "barbarian_8_122",
          ],
        },
        {
          id: "barbarian_8_122",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_132", "barbarian_8_121"],
        },
        {
          id: "barbarian_8_123",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_113",
            "barbarian_8_134",
            "barbarian_8_124",
          ],
        },
        {
          id: "barbarian_8_124",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_114", "barbarian_8_123"],
        },
        {
          id: "barbarian_8_125",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",

          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_116",
            "barbarian_8_136",
            "barbarian_8_126",
          ],
        },
        {
          id: "barbarian_8_126",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_125", "barbarian_8_127"],
        },
        {
          id: "barbarian_8_127",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_117",
            "barbarian_8_137",
            "barbarian_8_126",
            "barbarian_8_128",
          ],
        },
        {
          id: "barbarian_8_128",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_118",
            "barbarian_8_138",
            "barbarian_8_127",
          ],
        },
        {
          id: "barbarian_8_129",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_119",
            "barbarian_8_139",
            "barbarian_8_130",
          ],
        },
        {
          id: "barbarian_8_130",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_120",
            "barbarian_8_140",
            "barbarian_8_129",
          ],
        },
      ],
      [
        {
          id: "barbarian_8_131",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_121",
            "barbarian_8_141",
            "barbarian_8_132",
          ],
        },
        {
          id: "barbarian_8_132",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_122",
            "barbarian_8_142",
            "barbarian_8_131",
          ],
        },
        {
          id: "barbarian_8_133",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_143", "barbarian_8_134"],
        },
        {
          id: "barbarian_8_134",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_123",
            "barbarian_8_144",
            "barbarian_8_133",
          ],
        },
        {
          id: "barbarian_8_135",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_146", "barbarian_8_136"],
        },
        {
          id: "barbarian_8_136",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_125",
            "barbarian_8_147",
            "barbarian_8_135",
          ],
        },
        {
          id: "barbarian_8_137",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_127",
            "barbarian_8_148",
            "barbarian_8_138",
          ],
        },
        {
          id: "barbarian_8_138",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_128",
            "barbarian_8_149",
            "barbarian_8_137",
          ],
        },
        {
          id: "barbarian_8_139",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_129",
            "barbarian_8_151",
            "barbarian_8_140",
          ],
        },
        {
          id: "barbarian_8_140",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_130", "barbarian_8_139"],
        },
      ],
      [
        {
          id: "barbarian_8_141",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_131",
            "barbarian_8_152",
            "barbarian_8_142",
          ],
        },
        {
          id: "barbarian_8_142",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_132",
            "barbarian_8_153",
            "barbarian_8_141",
          ],
        },
        {
          id: "barbarian_8_143",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_133",
            "barbarian_8_155",
            "barbarian_8_144",
          ],
        },
        {
          id: "barbarian_8_144",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_8_134",
            "barbarian_8_156",
            "barbarian_8_143",
            "barbarian_8_145",
          ],
        },
        {
          id: "barbarian_8_145",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_157",
            "barbarian_8_144",
            "barbarian_8_146",
          ],
        },
        {
          id: "barbarian_8_146",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_135",
            "barbarian_8_145",
            "barbarian_8_147",
          ],
        },
        {
          id: "barbarian_8_147",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_136", "barbarian_8_146"],
        },
        {
          id: "barbarian_8_148",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_137", "barbarian_8_149"],
        },
        {
          id: "barbarian_8_149",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/CCDurationReduction_active.png",
          activable_ids: [
            "barbarian_8_138",
            "barbarian_8_158",
            "barbarian_8_148",
            "barbarian_8_150",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_150",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dodge_active.png",

          activable_ids: [
            "barbarian_8_159",
            "barbarian_8_149",
            "barbarian_8_151",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_151",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/CCDurationReduction_active.png",

          activable_ids: ["barbarian_8_139", "barbarian_8_150"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_8_152",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_141", "barbarian_8_153"],
        },
        {
          id: "barbarian_8_153",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_142",
            "barbarian_8_160",
            "barbarian_8_152",
          ],
        },
        {
          id: "barbarian_8_154",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_8_162", "barbarian_8_155"],
        },
        {
          id: "barbarian_8_155",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/barbarian.png",
          activable_ids: [
            "barbarian_8_143",
            "barbarian_8_163",
            "barbarian_8_154",
            "barbarian_8_156",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_8_156",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_144",
            "barbarian_8_155",
            "barbarian_8_157",
          ],
        },
        {
          id: "barbarian_8_157",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_145", "barbarian_8_156"],
        },
        {
          id: "barbarian_8_158",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dodge_active.png",

          activable_ids: ["barbarian_8_149", "barbarian_8_159"],
          bg: "magic",
        },
        {
          id: "barbarian_8_159",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/CCDurationReduction_active.png",

          activable_ids: [
            "barbarian_8_150",
            "barbarian_8_164",
            "barbarian_8_158",
          ],
          bg: "rare",
        },
      ],
      [
        {
          id: "barbarian_8_160",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_153",
            "barbarian_8_165",
            "barbarian_8_161",
          ],
        },
        {
          id: "barbarian_8_161",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_166",
            "barbarian_8_160",
            "barbarian_8_162",
          ],
        },
        {
          id: "barbarian_8_162",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_8_154",
            "barbarian_8_167",
            "barbarian_8_161",
            "barbarian_8_163",
          ],
        },
        {
          id: "barbarian_8_163",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_155", "barbarian_8_162"],
        },
        {
          id: "barbarian_8_164",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/CCDurationReduction_active.png",

          activable_ids: ["barbarian_8_159", "barbarian_8_169"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_8_165",
          active: false,
          index: 2,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: [
            "barbarian_8_160",
            "barbarian_8_171",
            "barbarian_8_166",
          ],
          label: "de normal",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
          activable_ids: [
            "barbarian_8_160",
            "barbarian_8_171",
            "barbarian_8_166",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_166",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",
          label: "Nœud magique",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
          activable_ids: [
            "barbarian_8_161",
            "barbarian_8_172",
            "barbarian_8_165",
            "barbarian_8_167",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_166",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",
          activable_ids: [
            "barbarian_8_161",
            "barbarian_8_172",
            "barbarian_8_165",
            "barbarian_8_167",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_167",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_162",
            "barbarian_8_173",
            "barbarian_8_166",
          ],
        },
        {
          id: "barbarian_8_168",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_179", "barbarian_8_169"],
        },
        {
          id: "barbarian_8_169",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_164",
            "barbarian_8_180",
            "barbarian_8_168",
          ],
        },
      ],
      [
        {
          id: "barbarian_8_170",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/DamageToVulnerable_active.png",

          activable_ids: ["barbarian_8_171"],
          bg: "magic",
        },
        {
          id: "barbarian_8_171",
          active: false,
          index: 2,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",
          activable_ids: [
            "barbarian_8_165",
            "barbarian_8_181",
            "barbarian_8_170",
            "barbarian_8_172",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_8_172",
          active: false,
          index: 3,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: [
            "barbarian_8_166",
            "barbarian_8_171",
            "barbarian_8_173",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_8_173",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_167",
            "barbarian_8_172",
            "barbarian_8_174",
          ],
        },
        {
          id: "barbarian_8_174",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_182",
            "barbarian_8_173",
            "barbarian_8_175",
          ],
        },
        {
          id: "barbarian_8_175",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_183",
            "barbarian_8_174",
            "barbarian_8_176",
          ],
        },
        {
          id: "barbarian_8_176",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_184",
            "barbarian_8_175",
            "barbarian_8_177",
          ],
        },
        {
          id: "barbarian_8_177",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_185", "barbarian_8_176"],
        },
        {
          id: "barbarian_8_178",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_188", "barbarian_8_179"],
        },
        {
          id: "barbarian_8_179",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_8_168",
            "barbarian_8_189",
            "barbarian_8_178",
            "barbarian_8_180",
          ],
        },
        {
          id: "barbarian_8_180",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_169",
            "barbarian_8_190",
            "barbarian_8_179",
          ],
        },
      ],
      [
        {
          id: "barbarian_8_181",
          active: false,
          index: 2,
          link: false,
          image:
            "/paragon/barbarian/DamageReductionFromBleedingTarget_active.png",

          activable_ids: ["barbarian_8_171"],
          bg: "magic",
        },
        {
          id: "barbarian_8_182",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_174", "barbarian_8_183"],
        },
        {
          id: "barbarian_8_183",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_8_175",
            "barbarian_8_182",
            "barbarian_8_184",
          ],
        },
        {
          id: "barbarian_8_184",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_176",
            "barbarian_8_183",
            "barbarian_8_185",
          ],
        },
        {
          id: "barbarian_8_185",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_8_177",
            "barbarian_8_184",
            "barbarian_8_186",
          ],
        },
        {
          id: "barbarian_8_186",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_8_185", "barbarian_8_187"],
        },
        {
          id: "barbarian_8_187",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_8_188",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_8_178",
            "barbarian_8_187",
            "barbarian_8_189",
          ],
        },
        {
          id: "barbarian_8_189",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_8_179",
            "barbarian_8_188",
            "barbarian_8_190",
          ],
        },
        {
          id: "barbarian_8_190",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_8_180", "barbarian_8_189"],
        },
      ],
      [
        {
          id: "barbarian_8_191",
          active: false,
          index: 10,
          link: true,
          direction: "bottom",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
    ],
  },
  {
    id: 9,
    label: "Warbringer",
    top: 0,
    left: 0,
    image: "/paragon/barbarian/necromancer.png",
    str: 70,
    dex: 39,
    int: 10,
    will: 39,
    item_top: null,
    is_active: false,
    bord: [
      [
        {
          id: "barbarian_9_1",
          active: false,
          index: 10,
          link: true,
          direction: "top",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_9_2",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_5", "barbarian_9_3"],
        },
        {
          id: "barbarian_9_3",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_9_4",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_7", "barbarian_9_3"],
        },
      ],
      [
        {
          id: "barbarian_9_5",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_9_2", "barbarian_9_8", "barbarian_9_6"],
        },
        {
          id: "barbarian_9_6",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_3",
            "barbarian_9_9",
            "barbarian_9_5",
            "barbarian_9_7",
          ],
        },
        {
          id: "barbarian_9_7",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_4", "barbarian_9_10", "barbarian_9_6"],
        },
      ],
      [
        {
          id: "barbarian_9_8",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_5", "barbarian_9_12", "barbarian_9_9"],
        },
        {
          id: "barbarian_9_9",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_6",
            "barbarian_9_13",
            "barbarian_9_8",
            "barbarian_9_10",
          ],
        },
        {
          id: "barbarian_9_10",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_9_7", "barbarian_9_14", "barbarian_9_9"],
        },
      ],
      [
        {
          id: "barbarian_9_11",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_17", "barbarian_9_12"],
        },
        {
          id: "barbarian_9_12",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_8",
            "barbarian_9_18",
            "barbarian_9_11",
            "barbarian_9_13",
          ],
        },
        {
          id: "barbarian_9_13",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_9", "barbarian_9_12", "barbarian_9_14"],
        },
        {
          id: "barbarian_9_14",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_10",
            "barbarian_9_19",
            "barbarian_9_13",
            "barbarian_9_15",
          ],
        },
        {
          id: "barbarian_9_15",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",

          activable_ids: ["barbarian_9_20", "barbarian_9_14"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_16",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_24", "barbarian_9_17"],
        },
        {
          id: "barbarian_9_17",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_11",
            "barbarian_9_25",
            "barbarian_9_16",
            "barbarian_9_18",
          ],
        },
        {
          id: "barbarian_9_18",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_12", "barbarian_9_26", "barbarian_9_17"],
        },
        {
          id: "barbarian_9_19",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",

          activable_ids: ["barbarian_9_14", "barbarian_9_27", "barbarian_9_20"],
          bg: "magic",
        },
        {
          id: "barbarian_9_20",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: ["barbarian_9_15", "barbarian_9_28", "barbarian_9_19"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_21",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_30", "barbarian_9_22"],
          bg: "magic",
        },
        {
          id: "barbarian_9_22",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_31", "barbarian_9_21", "barbarian_9_23"],
          bg: "magic",
        },
        {
          id: "barbarian_9_23",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_32", "barbarian_9_22", "barbarian_9_24"],
          bg: "magic",
        },
        {
          id: "barbarian_9_24",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_16", "barbarian_9_23", "barbarian_9_25"],
          bg: "magic",
        },
        {
          id: "barbarian_9_25",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_17",
            "barbarian_9_33",
            "barbarian_9_24",
            "barbarian_9_26",
          ],
        },
        {
          id: "barbarian_9_26",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_9_18", "barbarian_9_34", "barbarian_9_25"],
        },
        {
          id: "barbarian_9_27",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",

          activable_ids: ["barbarian_9_19", "barbarian_9_36", "barbarian_9_28"],
          bg: "magic",
        },
        {
          id: "barbarian_9_28",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceFire_active.png",

          activable_ids: ["barbarian_9_20", "barbarian_9_27"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_29",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_37", "barbarian_9_30"],
        },
        {
          id: "barbarian_9_30",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_21",
            "barbarian_9_38",
            "barbarian_9_29",
            "barbarian_9_31",
          ],
        },
        {
          id: "barbarian_9_31",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_22", "barbarian_9_30", "barbarian_9_32"],
          bg: "magic",
        },
        {
          id: "barbarian_9_32",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_23", "barbarian_9_31"],
          bg: "rare",
        },
        {
          id: "barbarian_9_33",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_25", "barbarian_9_34"],
        },
        {
          id: "barbarian_9_34",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_26", "barbarian_9_33", "barbarian_9_35"],
        },
        {
          id: "barbarian_9_35",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_39", "barbarian_9_34", "barbarian_9_36"],
        },
        {
          id: "barbarian_9_36",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: ["barbarian_9_27", "barbarian_9_35"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_37",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_29", "barbarian_9_43", "barbarian_9_38"],
        },
        {
          id: "barbarian_9_38",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_30", "barbarian_9_44", "barbarian_9_37"],
        },
        {
          id: "barbarian_9_39",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_35", "barbarian_9_45"],
        },
        {
          id: "barbarian_9_40",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_9_47", "barbarian_9_41"],
          bg: "rare",
        },
        {
          id: "barbarian_9_41",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/HealingBonus_active.png",

          activable_ids: ["barbarian_9_48", "barbarian_9_40", "barbarian_9_42"],
          bg: "magic",
        },
        {
          id: "barbarian_9_42",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_9_49", "barbarian_9_41"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_43",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_37", "barbarian_9_56", "barbarian_9_44"],
        },
        {
          id: "barbarian_9_44",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_38", "barbarian_9_43"],
        },
        {
          id: "barbarian_9_45",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_39", "barbarian_9_60"],
        },
        {
          id: "barbarian_9_46",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/HealingBonus_active.png",

          activable_ids: ["barbarian_9_63", "barbarian_9_47"],
          bg: "magic",
        },
        {
          id: "barbarian_9_47",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_9_40", "barbarian_9_46", "barbarian_9_48"],
          bg: "magic",
        },
        {
          id: "barbarian_9_48",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_9_41", "barbarian_9_47", "barbarian_9_49"],
          bg: "magic",
        },
        {
          id: "barbarian_9_49",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_42",
            "barbarian_9_64",
            "barbarian_9_48",
            "barbarian_9_50",
          ],
        },
        {
          id: "barbarian_9_50",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_65", "barbarian_9_49", "barbarian_9_51"],
        },
        {
          id: "barbarian_9_51",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_66", "barbarian_9_50", "barbarian_9_52"],
        },
        {
          id: "barbarian_9_52",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_67", "barbarian_9_51"],
        },
      ],
      [
        {
          id: "barbarian_9_53",
          active: false,
          index: 0,
          link: true,
          direction: "left",
          image: "/paragon/barbarian/Gate_active.png",
        },
        {
          id: "barbarian_9_54",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          opened: true,
        },
        {
          id: "barbarian_9_55",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_70", "barbarian_9_54", "barbarian_9_56"],
        },
        {
          id: "barbarian_9_56",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_43", "barbarian_9_71", "barbarian_9_55"],
        },
        {
          id: "barbarian_9_57",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_73"],
        },
        {
          id: "barbarian_9_58",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_75", "barbarian_9_59"],
        },
        {
          id: "barbarian_9_59",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_76", "barbarian_9_58", "barbarian_9_60"],
        },
        {
          id: "barbarian_9_60",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_45",
            "barbarian_9_77",
            "barbarian_9_59",
            "barbarian_9_61",
          ],
        },
        {
          id: "barbarian_9_61",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_60", "barbarian_9_62"],
        },
        {
          id: "barbarian_9_62",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_61", "barbarian_9_63"],
        },
        {
          id: "barbarian_9_63",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_46", "barbarian_9_78", "barbarian_9_62"],
        },
        {
          id: "barbarian_9_64",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_9_49", "barbarian_9_81", "barbarian_9_65"],
        },
        {
          id: "barbarian_9_65",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_50",
            "barbarian_9_82",
            "barbarian_9_64",
            "barbarian_9_66",
          ],
        },
        {
          id: "barbarian_9_66",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_51",
            "barbarian_9_83",
            "barbarian_9_65",
            "barbarian_9_67",
          ],
        },
        {
          id: "barbarian_9_67",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          opened: true,
        },
        {
          id: "barbarian_9_68",
          active: false,
          index: 20,
          link: true,
          direction: "right",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_9_69",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_54", "barbarian_9_70"],
        },
        {
          id: "barbarian_9_70",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_55",
            "barbarian_9_85",
            "barbarian_9_69",
            "barbarian_9_71",
          ],
        },
        {
          id: "barbarian_9_71",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_56",
            "barbarian_9_86",
            "barbarian_9_70",
            "barbarian_9_72",
          ],
        },
        {
          id: "barbarian_9_72",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_87", "barbarian_9_71", "barbarian_9_73"],
        },
        {
          id: "barbarian_9_73",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_57",
            "barbarian_9_88",
            "barbarian_9_72",
            "barbarian_9_74",
          ],
        },
        {
          id: "barbarian_9_74",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_89", "barbarian_9_73"],
        },
        {
          id: "barbarian_9_75",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_58", "barbarian_9_90", "barbarian_9_76"],
        },
        {
          id: "barbarian_9_76",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_59",
            "barbarian_9_91",
            "barbarian_9_75",
            "barbarian_9_77",
          ],
        },
        {
          id: "barbarian_9_77",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_60", "barbarian_9_92", "barbarian_9_76"],
        },
        {
          id: "barbarian_9_78",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_63", "barbarian_9_93", "barbarian_9_79"],
        },
        {
          id: "barbarian_9_79",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_94", "barbarian_9_78", "barbarian_9_80"],
        },
        {
          id: "barbarian_9_80",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_95", "barbarian_9_79", "barbarian_9_81"],
        },
        {
          id: "barbarian_9_81",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_64",
            "barbarian_9_96",
            "barbarian_9_80",
            "barbarian_9_82",
          ],
        },
        {
          id: "barbarian_9_82",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_65", "barbarian_9_81", "barbarian_9_83"],
        },
        {
          id: "barbarian_9_83",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_66", "barbarian_9_82", "barbarian_9_84"],
        },
        {
          id: "barbarian_9_84",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_67", "barbarian_9_83"],
        },
      ],
      [
        {
          id: "barbarian_9_85",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_70", "barbarian_9_86"],
        },
        {
          id: "barbarian_9_86",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_71",
            "barbarian_9_97",
            "barbarian_9_85",
            "barbarian_9_87",
          ],
        },
        {
          id: "barbarian_9_87",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_72",
            "barbarian_9_98",
            "barbarian_9_86",
            "barbarian_9_88",
          ],
        },
        {
          id: "barbarian_9_88",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_73",
            "barbarian_9_99",
            "barbarian_9_87",
            "barbarian_9_89",
          ],
        },
        {
          id: "barbarian_9_89",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_9_74",
            "barbarian_9_100",
            "barbarian_9_88",
          ],
        },
        {
          id: "barbarian_9_90",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/barbarian.png",

          activable_ids: ["barbarian_9_75", "barbarian_9_91"],
          bg: "rare",
        },
        {
          id: "barbarian_9_91",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_9_76", "barbarian_9_90", "barbarian_9_92"],
        },
        {
          id: "barbarian_9_92",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_77", "barbarian_9_91"],
        },
        {
          id: "barbarian_9_93",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_9_78", "barbarian_9_94"],
        },
        {
          id: "barbarian_9_94",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_79",
            "barbarian_9_102",
            "barbarian_9_93",
            "barbarian_9_95",
          ],
        },
        {
          id: "barbarian_9_95",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_80",
            "barbarian_9_103",
            "barbarian_9_94",
            "barbarian_9_96",
          ],
        },
        {
          id: "barbarian_9_96",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_81", "barbarian_9_95"],
        },
      ],
      [
        {
          id: "barbarian_9_97",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_9_86", "barbarian_9_98"],
        },
        {
          id: "barbarian_9_98",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_87",
            "barbarian_9_106",
            "barbarian_9_97",
            "barbarian_9_99",
          ],
        },
        {
          id: "barbarian_9_99",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_88",
            "barbarian_9_107",
            "barbarian_9_98",
            "barbarian_9_100",
          ],
        },
        {
          id: "barbarian_9_100",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_9_89",
            "barbarian_9_99",
            "barbarian_9_101",
          ],
        },
        {
          id: "barbarian_9_101",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_108", "barbarian_9_100"],
        },
        {
          id: "barbarian_9_102",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: [
            "barbarian_9_94",
            "barbarian_9_112",
            "barbarian_9_103",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_103",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_9_95", "barbarian_9_102"],
        },
      ],
      [
        {
          id: "barbarian_9_104",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_114", "barbarian_9_105"],
          bg: "magic",
        },
        {
          id: "barbarian_9_105",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: ["barbarian_9_115", "barbarian_9_104"],
          bg: "magic",
        },
        {
          id: "barbarian_9_106",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_9_98",
            "barbarian_9_117",
            "barbarian_9_107",
          ],
        },
        {
          id: "barbarian_9_107",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_99",
            "barbarian_9_118",
            "barbarian_9_106",
          ],
        },
        {
          id: "barbarian_9_108",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_9_101",
            "barbarian_9_120",
            "barbarian_9_109",
          ],
        },
        {
          id: "barbarian_9_109",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_9_121",
            "barbarian_9_108",
            "barbarian_9_110",
          ],
        },
        {
          id: "barbarian_9_110",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_122", "barbarian_9_109"],
        },
        {
          id: "barbarian_9_111",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: ["barbarian_9_124", "barbarian_9_112"],
          bg: "rare",
        },
        {
          id: "barbarian_9_112",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: [
            "barbarian_9_102",
            "barbarian_9_125",
            "barbarian_9_111",
          ],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_113",
          active: false,
          index: 0,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_114"],
        },
        {
          id: "barbarian_9_114",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_9_104",
            "barbarian_9_126",
            "barbarian_9_113",
            "barbarian_9_115",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_115",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_9_105",
            "barbarian_9_127",
            "barbarian_9_114",
            "barbarian_9_116",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_9_116",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_128",
            "barbarian_9_115",
            "barbarian_9_117",
          ],
        },
        {
          id: "barbarian_9_117",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_9_106",
            "barbarian_9_116",
            "barbarian_9_118",
          ],
        },
        {
          id: "barbarian_9_118",
          active: null,
          index: 5,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
        },
        {
          id: "barbarian_9_119",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_9_130",
            "barbarian_9_118",
            "barbarian_9_120",
          ],
        },
        {
          id: "barbarian_9_120",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_108",
            "barbarian_9_131",
            "barbarian_9_119",
            "barbarian_9_121",
          ],
        },
        {
          id: "barbarian_9_121",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_109",
            "barbarian_9_132",
            "barbarian_9_120",
            "barbarian_9_122",
          ],
        },
        {
          id: "barbarian_9_122",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_110",
            "barbarian_9_133",
            "barbarian_9_121",
            "barbarian_9_123",
          ],
        },
        {
          id: "barbarian_9_123",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_122"],
        },
        {
          id: "barbarian_9_124",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: [
            "barbarian_9_111",
            "barbarian_9_136",
            "barbarian_9_125",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_125",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/FuryOnKill_active.png",

          activable_ids: [
            "barbarian_9_112",
            "barbarian_9_137",
            "barbarian_9_124",
          ],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_9_126",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_114", "barbarian_9_127"],
        },
        {
          id: "barbarian_9_127",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_115",
            "barbarian_9_138",
            "barbarian_9_126",
            "barbarian_9_128",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_128",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: [
            "barbarian_9_116",
            "barbarian_9_139",
            "barbarian_9_127",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_129",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_118",
            "barbarian_9_141",
            "barbarian_9_130",
          ],
        },
        {
          id: "barbarian_9_130",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_9_119",
            "barbarian_9_129",
            "barbarian_9_131",
          ],
        },
        {
          id: "barbarian_9_131",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_120",
            "barbarian_9_142",
            "barbarian_9_130",
            "barbarian_9_132",
          ],
        },
        {
          id: "barbarian_9_132",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_121",
            "barbarian_9_143",
            "barbarian_9_131",
            "barbarian_9_133",
          ],
        },
        {
          id: "barbarian_9_133",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_9_122",
            "barbarian_9_144",
            "barbarian_9_132",
          ],
        },
        {
          id: "barbarian_9_134",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_146", "barbarian_9_135"],
        },
        {
          id: "barbarian_9_135",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_147",
            "barbarian_9_134",
            "barbarian_9_136",
          ],
        },
        {
          id: "barbarian_9_136",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_124",
            "barbarian_9_148",
            "barbarian_9_135",
            "barbarian_9_137",
          ],
        },
        {
          id: "barbarian_9_137",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/HPPercent_active.png",

          activable_ids: ["barbarian_9_125", "barbarian_9_136"],
        },
      ],
      [
        {
          id: "barbarian_9_138",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_127", "barbarian_9_139"],
        },
        {
          id: "barbarian_9_139",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_128",
            "barbarian_9_149",
            "barbarian_9_138",
            "barbarian_9_140",
          ],
        },
        {
          id: "barbarian_9_140",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",

          activable_ids: [
            "barbarian_9_150",
            "barbarian_9_139",
            "barbarian_9_141",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_141",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_9_129",
            "barbarian_9_151",
            "barbarian_9_140",
          ],
        },
        {
          id: "barbarian_9_142",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_131", "barbarian_9_143"],
        },
        {
          id: "barbarian_9_143",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_9_132",
            "barbarian_9_153",
            "barbarian_9_142",
            "barbarian_9_144",
          ],
        },
        {
          id: "barbarian_9_144",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_133",
            "barbarian_9_154",
            "barbarian_9_143",
            "barbarian_9_145",
          ],
        },
        {
          id: "barbarian_9_145",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_155",
            "barbarian_9_144",
            "barbarian_9_146",
          ],
        },
        {
          id: "barbarian_9_146",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_134",
            "barbarian_9_145",
            "barbarian_9_147",
          ],
        },
        {
          id: "barbarian_9_147",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_135",
            "barbarian_9_146",
            "barbarian_9_148",
          ],
        },
        {
          id: "barbarian_9_148",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_136", "barbarian_9_147"],
        },
      ],
      [
        {
          id: "barbarian_9_149",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_9_139", "barbarian_9_150"],
        },
        {
          id: "barbarian_9_150",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_9_140",
            "barbarian_9_156",
            "barbarian_9_149",
            "barbarian_9_151",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_151",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",
          activable_ids: [
            "barbarian_9_141",
            "barbarian_9_157",
            "barbarian_9_150",
            "barbarian_9_152",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_9_152",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",

          activable_ids: ["barbarian_9_158", "barbarian_9_151"],
          bg: "magic",
        },
        {
          id: "barbarian_9_153",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_143", "barbarian_9_154"],
        },
        {
          id: "barbarian_9_154",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_9_144",
            "barbarian_9_159",
            "barbarian_9_153",
            "barbarian_9_155",
          ],
        },
        {
          id: "barbarian_9_155",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_9_145",
            "barbarian_9_160",
            "barbarian_9_154",
          ],
        },
      ],
      [
        {
          id: "barbarian_9_156",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_9_150", "barbarian_9_157"],
        },
        {
          id: "barbarian_9_157",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/DamageWhileFortified_active.png",
          activable_ids: [
            "barbarian_9_151",
            "barbarian_9_161",
            "barbarian_9_156",
            "barbarian_9_158",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_9_158",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_9_152", "barbarian_9_157"],
          bg: "magic",
        },
        {
          id: "barbarian_9_159",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_154", "barbarian_9_160"],
        },
        {
          id: "barbarian_9_160",
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
          id: "barbarian_9_161",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_9_157"],
        },
        {
          id: "barbarian_9_162",
          active: false,
          index: 10,
          link: true,
          direction: "bottom",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
    ],
  },
  {
    id: 10,
    label: "Weapons Master",
    top: 0,
    left: 0,
    image: "/paragon/barbarian/necromancer.png",
    str: 70,
    dex: 39,
    int: 10,
    will: 39,
    item_top: null,
    is_active: false,
    bord: [
      [
        {
          id: "barbarian_10_1",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          _id: 2,

          activable_ids: ["barbarian_10_4"],
        },
        {
          id: "barbarian_10_2",
          active: false,
          index: 10,
          link: true,
          direction: "top",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_10_3",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_12", "barbarian_10_4"],
        },
        {
          id: "barbarian_10_4",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_1",
            "barbarian_10_13",
            "barbarian_10_3",
            "barbarian_10_5",
          ],
        },
        {
          id: "barbarian_10_5",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_10_14",
            "barbarian_10_4",
            "barbarian_10_6",
          ],
        },
        {
          id: "barbarian_10_6",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_5", "barbarian_10_7"],
        },
        {
          id: "barbarian_10_7",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_6", "barbarian_10_8"],
        },
        {
          id: "barbarian_10_8",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_7", "barbarian_10_9"],
        },
        {
          id: "barbarian_10_9",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_10_10",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_10_16", "barbarian_10_9"],
        },
      ],
      [
        {
          id: "barbarian_10_11",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_12"],
        },
        {
          id: "barbarian_10_12",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],

          _id: 2,
          activable_ids: [
            "barbarian_10_3",
            "barbarian_10_18",
            "barbarian_10_11",
            "barbarian_10_13",
          ],
        },
        {
          id: "barbarian_10_13",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_4",
            "barbarian_10_19",
            "barbarian_10_12",
            "barbarian_10_14",
          ],
        },
        {
          id: "barbarian_10_14",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_10_5",
            "barbarian_10_20",
            "barbarian_10_13",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_15",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_9",
            "barbarian_10_23",
            "barbarian_10_16",
          ],
        },
        {
          id: "barbarian_10_16",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_10_10",
            "barbarian_10_24",
            "barbarian_10_15",
          ],
        },
      ],
      [
        {
          id: "barbarian_10_17",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          _id: 2,

          activable_ids: ["barbarian_10_26"],
        },
        {
          id: "barbarian_10_18",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          _id: 2,

          activable_ids: ["barbarian_10_12", "barbarian_10_19"],
        },
        {
          id: "barbarian_10_19",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_13",
            "barbarian_10_28",
            "barbarian_10_18",
            "barbarian_10_20",
          ],
        },
        {
          id: "barbarian_10_20",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_10_14",
            "barbarian_10_29",
            "barbarian_10_19",
            "barbarian_10_21",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_21",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: [
            "barbarian_10_30",
            "barbarian_10_20",
            "barbarian_10_22",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_10_22",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_31", "barbarian_10_21"],
          bg: "magic",
        },
        {
          id: "barbarian_10_23",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_15", "barbarian_10_24"],
        },
        {
          id: "barbarian_10_24",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",

          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_10_16",
            "barbarian_10_32",
            "barbarian_10_23",
          ],
        },
      ],
      [
        {
          id: "barbarian_10_25",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_34", "barbarian_10_26"],
        },
        {
          id: "barbarian_10_26",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_17",
            "barbarian_10_35",
            "barbarian_10_25",
            "barbarian_10_27",
          ],
        },
        {
          id: "barbarian_10_27",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_36", "barbarian_10_26"],
        },
        {
          id: "barbarian_10_28",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_19",
            "barbarian_10_38",
            "barbarian_10_29",
          ],
        },
        {
          id: "barbarian_10_29",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          _id: 2,
          activable_ids: [
            "barbarian_10_20",
            "barbarian_10_39",
            "barbarian_10_28",
            "barbarian_10_30",
          ],
        },
        {
          id: "barbarian_10_30",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_10_21",
            "barbarian_10_40",
            "barbarian_10_29",
            "barbarian_10_31",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_31",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: [
            "barbarian_10_22",
            "barbarian_10_41",
            "barbarian_10_30",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_32",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_24"],
        },
      ],
      [
        {
          id: "barbarian_10_33",
          active: false,
          index: 0,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          _id: 2,

          activable_ids: ["barbarian_10_34"],
        },
        {
          id: "barbarian_10_34",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_25",
            "barbarian_10_45",
            "barbarian_10_33",
            "barbarian_10_35",
          ],
        },
        {
          id: "barbarian_10_35",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_26",
            "barbarian_10_46",
            "barbarian_10_34",
            "barbarian_10_36",
          ],
        },
        {
          id: "barbarian_10_36",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_27",
            "barbarian_10_47",
            "barbarian_10_35",
            "barbarian_10_37",
          ],
        },
        {
          id: "barbarian_10_37",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_10_48",
            "barbarian_10_36",
            "barbarian_10_38",
          ],
        },
        {
          id: "barbarian_10_38",
          active: null,
          index: 5,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
        },
        {
          id: "barbarian_10_39",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_10_29",
            "barbarian_10_38",
            "barbarian_10_40",
          ],
        },
        {
          id: "barbarian_10_40",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_30",
            "barbarian_10_50",
            "barbarian_10_39",
            "barbarian_10_41",
          ],
        },
        {
          id: "barbarian_10_41",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_31",
            "barbarian_10_51",
            "barbarian_10_40",
            "barbarian_10_42",
          ],
        },
        {
          id: "barbarian_10_42",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_10_52",
            "barbarian_10_41",
            "barbarian_10_43",
          ],
        },
        {
          id: "barbarian_10_43",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_10_42"],
        },
        {
          id: "barbarian_10_44",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_10_53"],
        },
        {
          id: "barbarian_10_45",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_53"],
        },
      ],
      [
        {
          id: "barbarian_10_45",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_10_34",
            "barbarian_10_54",
            "barbarian_10_46",
          ],
        },
        {
          id: "barbarian_10_46",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_10_35",
            "barbarian_10_45",
            "barbarian_10_47",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_47",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          _id: 2,
          activable_ids: [
            "barbarian_10_36",
            "barbarian_10_55",
            "barbarian_10_46",
            "barbarian_10_48",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_48",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "barbarian_10_37",
            "barbarian_10_56",
            "barbarian_10_47",
            "barbarian_10_49",
          ],
        },
        {
          id: "barbarian_10_49",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_38",
            "barbarian_10_57",
            "barbarian_10_48",
          ],
        },
        {
          id: "barbarian_10_50",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_40", "barbarian_10_51"],
        },
        {
          id: "barbarian_10_51",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          _id: 2,
          activable_ids: [
            "barbarian_10_41",
            "barbarian_10_59",
            "barbarian_10_50",
            "barbarian_10_52",
          ],
        },
        {
          id: "barbarian_10_52",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: [
            "barbarian_10_42",
            "barbarian_10_60",
            "barbarian_10_51",
          ],
        },
        {
          id: "barbarian_10_53",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: ["barbarian_10_44", "barbarian_10_62"],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_10_54",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_45", "barbarian_10_63"],
        },
        {
          id: "barbarian_10_55",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: [
            "barbarian_10_47",
            "barbarian_10_64",
            "barbarian_10_56",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_10_56",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",
          activable_ids: [
            "barbarian_10_48",
            "barbarian_10_65",
            "barbarian_10_55",
            "barbarian_10_57",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_57",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_49",
            "barbarian_10_66",
            "barbarian_10_56",
            "barbarian_10_58",
          ],
        },
        {
          id: "barbarian_10_58",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_67", "barbarian_10_57"],
        },
        {
          id: "barbarian_10_59",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",

          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_51", "barbarian_10_60"],
        },
        {
          id: "barbarian_10_60",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_52",
            "barbarian_10_69",
            "barbarian_10_59",
          ],
        },
        {
          id: "barbarian_10_61",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: ["barbarian_10_70", "barbarian_10_62"],
          bg: "rare",
        },
        {
          id: "barbarian_10_62",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/MoveSpeedEliteKill_active.png",

          _id: 2,

          activable_ids: [
            "barbarian_10_53",
            "barbarian_10_71",
            "barbarian_10_61",
          ],
          bg: "magic",
        },
      ],
      [
        {
          id: "barbarian_10_63",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_54", "barbarian_10_79"],
        },
        {
          id: "barbarian_10_64",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_55", "barbarian_10_65"],
          bg: "magic",
        },
        {
          id: "barbarian_10_65",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: [
            "barbarian_10_56",
            "barbarian_10_64",
            "barbarian_10_66",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_66",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_57",
            "barbarian_10_80",
            "barbarian_10_65",
            "barbarian_10_67",
          ],
        },
        {
          id: "barbarian_10_67",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_58",
            "barbarian_10_81",
            "barbarian_10_66",
            "barbarian_10_68",
          ],
        },
        {
          id: "barbarian_10_68",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_82", "barbarian_10_67"],
        },
        {
          id: "barbarian_10_69",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_60", "barbarian_10_84"],
        },
        {
          id: "barbarian_10_70",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: [
            "barbarian_10_61",
            "barbarian_10_86",
            "barbarian_10_71",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_71",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: [
            "barbarian_10_62",
            "barbarian_10_70",
            "barbarian_10_72",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_72",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/MoveSpeedEliteKill_active.png",

          _id: 2,

          activable_ids: ["barbarian_10_71", "barbarian_10_73"],
          bg: "magic",
        },
        {
          id: "barbarian_10_73",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_87",
            "barbarian_10_72",
            "barbarian_10_74",
          ],
        },
        {
          id: "barbarian_10_74",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_88",
            "barbarian_10_73",
            "barbarian_10_75",
          ],
        },
        {
          id: "barbarian_10_75",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_10_89",
            "barbarian_10_74",
            "barbarian_10_76",
          ],
        },
        {
          id: "barbarian_10_76",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_75", "barbarian_10_77"],
        },
        {
          id: "barbarian_10_77",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_10_90",
            "barbarian_10_76",
            "barbarian_10_78",
          ],
        },
        {
          id: "barbarian_10_78",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_91", "barbarian_10_77"],
        },
      ],
      [
        {
          id: "barbarian_10_79",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_63", "barbarian_10_93"],
        },
        {
          id: "barbarian_10_80",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          glyph_ids: [2, 10, 15, 22, 23],
          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: [
            "barbarian_10_66",
            "barbarian_10_96",
            "barbarian_10_81",
          ],
        },
        {
          id: "barbarian_10_81",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          glyph_ids: [3, 7, 8, 11, 16, 19, 21],
          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: [
            "barbarian_10_67",
            "barbarian_10_80",
            "barbarian_10_82",
          ],
        },
        {
          id: "barbarian_10_82",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_68",
            "barbarian_10_81",
            "barbarian_10_83",
          ],
        },
        {
          id: "barbarian_10_83",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_82", "barbarian_10_84"],
        },
        {
          id: "barbarian_10_84",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_69",
            "barbarian_10_97",
            "barbarian_10_83",
            "barbarian_10_85",
          ],
        },
        {
          id: "barbarian_10_85",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],

          _id: 2,

          activable_ids: ["barbarian_10_84", "barbarian_10_86"],
        },
        {
          id: "barbarian_10_86",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_70",
            "barbarian_10_98",
            "barbarian_10_85",
          ],
        },
        {
          id: "barbarian_10_87",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],

          _id: 2,

          activable_ids: ["barbarian_10_73", "barbarian_10_88"],
        },
        {
          id: "barbarian_10_88",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: [
            "barbarian_10_74",
            "barbarian_10_87",
            "barbarian_10_89",
          ],
        },
        {
          id: "barbarian_10_89",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_75",
            "barbarian_10_100",
            "barbarian_10_88",
          ],
        },
        {
          id: "barbarian_10_90",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_77",
            "barbarian_10_101",
            "barbarian_10_91",
          ],
        },
        {
          id: "barbarian_10_91",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_78",
            "barbarian_10_102",
            "barbarian_10_90",
          ],
        },
      ],
      [
        {
          id: "barbarian_10_92",
          active: false,
          index: 0,
          link: true,
          direction: "left",
          image: "/paragon/barbarian/Gate_active.png",
        },
        {
          id: "barbarian_10_93",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          opened: true,
        },
        {
          id: "barbarian_10_94",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_105",
            "barbarian_10_93",
            "barbarian_10_95",
          ],
        },
        {
          id: "barbarian_10_95",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_106", "barbarian_10_94"],
        },
        {
          id: "barbarian_10_96",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          glyph_ids: [1, 4, 5, 6, 9, 12, 13, 14, 17, 18, 20],
          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_80", "barbarian_10_108"],
        },
        {
          id: "barbarian_10_97",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],

          _id: 2,

          activable_ids: ["barbarian_10_84", "barbarian_10_111"],
        },
        {
          id: "barbarian_10_98",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_86",
            "barbarian_10_113",
            "barbarian_10_99",
          ],
        },
        {
          id: "barbarian_10_99",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_98"],
        },
        {
          id: "barbarian_10_100",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_10_89"],
        },
        {
          id: "barbarian_10_101",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_90",
            "barbarian_10_116",
            "barbarian_10_102",
          ],
        },
        {
          id: "barbarian_10_102",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          opened: true,
        },
        {
          id: "barbarian_10_103",
          active: false,
          index: 20,
          link: true,
          direction: "right",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
      [
        {
          id: "barbarian_10_104",
          active: false,
          index: 1,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",

          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_93", "barbarian_10_105"],
        },
        {
          id: "barbarian_10_105",
          active: false,
          index: 2,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_94",
            "barbarian_10_104",
            "barbarian_10_106",
          ],
        },
        {
          id: "barbarian_10_106",
          active: false,
          index: 3,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_95",
            "barbarian_10_105",
            "barbarian_10_107",
          ],
        },
        {
          id: "barbarian_10_107",
          active: false,
          index: 4,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_106", "barbarian_10_108"],
        },
        {
          id: "barbarian_10_108",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_96",
            "barbarian_10_118",
            "barbarian_10_107",
          ],
        },
        {
          id: "barbarian_10_109",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: ["barbarian_10_120", "barbarian_10_110"],
          bg: "rare",
        },
        {
          id: "barbarian_10_110",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",
          bg: "magic",
          activable_ids: [
            "barbarian_10_121",
            "barbarian_10_109",
            "barbarian_10_111",
          ],
        },
        {
          id: "barbarian_10_111",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_97",
            "barbarian_10_110",
            "barbarian_10_112",
          ],
        },
        {
          id: "barbarian_10_112",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_122",
            "barbarian_10_111",
            "barbarian_10_113",
          ],
        },
        {
          id: "barbarian_10_113",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_98",
            "barbarian_10_123",
            "barbarian_10_112",
          ],
        },
        {
          id: "barbarian_10_114",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_10_126", "barbarian_10_115"],
          bg: "rare",
        },
        {
          id: "barbarian_10_115",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Armor_active.png",

          activable_ids: ["barbarian_10_127", "barbarian_10_114"],
          bg: "magic",
        },
        {
          id: "barbarian_10_116",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_101",
            "barbarian_10_130",
            "barbarian_10_117",
          ],
        },
        {
          id: "barbarian_10_117",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_102",
            "barbarian_10_131",
            "barbarian_10_116",
          ],
        },
      ],
      [
        {
          id: "barbarian_10_118",
          active: false,
          index: 5,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_108", "barbarian_10_119"],
        },
        {
          id: "barbarian_10_119",
          active: false,
          index: 6,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",

          activable_ids: ["barbarian_10_118", "barbarian_10_120"],
          bg: "magic",
        },
        {
          id: "barbarian_10_120",
          active: false,
          index: 7,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",
          activable_ids: [
            "barbarian_10_109",
            "barbarian_10_119",
            "barbarian_10_121",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_121",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Fury_active.png",
          activable_ids: [
            "barbarian_10_110",
            "barbarian_10_132",
            "barbarian_10_120",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_122",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_112", "barbarian_10_123"],
        },
        {
          id: "barbarian_10_123",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_113",
            "barbarian_10_122",
            "barbarian_10_124",
          ],
        },
        {
          id: "barbarian_10_124",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_133",
            "barbarian_10_123",
            "barbarian_10_125",
          ],
        },
        {
          id: "barbarian_10_125",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_10_124", "barbarian_10_126"],
        },
        {
          id: "barbarian_10_126",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Armor_active.png",
          activable_ids: [
            "barbarian_10_114",
            "barbarian_10_125",
            "barbarian_10_127",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_127",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",
          activable_ids: [
            "barbarian_10_115",
            "barbarian_10_134",
            "barbarian_10_126",
            "barbarian_10_128",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_128",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_10_127", "barbarian_10_129"],
          bg: "magic",
        },
        {
          id: "barbarian_10_129",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_128", "barbarian_10_130"],
        },
        {
          id: "barbarian_10_130",
          active: false,
          index: 18,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_116",
            "barbarian_10_129",
            "barbarian_10_131",
          ],
        },
        {
          id: "barbarian_10_131",
          active: false,
          index: 19,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_117", "barbarian_10_130"],
        },
      ],
      [
        {
          id: "barbarian_10_132",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Damage_active.png",

          activable_ids: ["barbarian_10_121", "barbarian_10_135"],
          bg: "magic",
        },
        {
          id: "barbarian_10_133",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_124", "barbarian_10_137"],
        },
        {
          id: "barbarian_10_134",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_127", "barbarian_10_139"],
        },
      ],
      [
        {
          id: "barbarian_10_135",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_132",
            "barbarian_10_141",
            "barbarian_10_136",
          ],
        },
        {
          id: "barbarian_10_136",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_142", "barbarian_10_135"],
        },
        {
          id: "barbarian_10_137",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",

          activable_ids: ["barbarian_10_133", "barbarian_10_144"],
          bg: "magic",
        },
        {
          id: "barbarian_10_138",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_146", "barbarian_10_139"],
        },
        {
          id: "barbarian_10_139",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_134",
            "barbarian_10_138",
            "barbarian_10_140",
          ],
        },
        {
          id: "barbarian_10_140",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Int_active.png",

          label: "Nœud normal",
          options: ["5 Intelligence"],

          activable_ids: ["barbarian_10_147", "barbarian_10_139"],
        },
      ],
      [
        {
          id: "barbarian_10_141",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_135",
            "barbarian_10_149",
            "barbarian_10_142",
          ],
        },
        {
          id: "barbarian_10_142",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_136",
            "barbarian_10_150",
            "barbarian_10_141",
          ],
        },
        {
          id: "barbarian_10_143",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/ResistanceLightning_active.png",

          activable_ids: ["barbarian_10_152", "barbarian_10_144"],
          bg: "rare",
        },
        {
          id: "barbarian_10_144",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceLightning_active.png",
          activable_ids: [
            "barbarian_10_137",
            "barbarian_10_153",
            "barbarian_10_143",
            "barbarian_10_145",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_145",
          active: false,
          index: 13,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_144", "barbarian_10_146"],
        },
        {
          id: "barbarian_10_146",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_138",
            "barbarian_10_154",
            "barbarian_10_145",
          ],
        },
        {
          id: "barbarian_10_147",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_140",
            "barbarian_10_156",
            "barbarian_10_148",
          ],
        },
        {
          id: "barbarian_10_148",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Will_active.png",

          label: "Nœud normal",
          options: ["+5 volonte"],

          activable_ids: ["barbarian_10_157", "barbarian_10_147"],
        },
      ],
      [
        {
          id: "barbarian_10_149",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_141",
            "barbarian_10_158",
            "barbarian_10_150",
          ],
        },
        {
          id: "barbarian_10_150",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "barbarian_10_142",
            "barbarian_10_149",
            "barbarian_10_151",
          ],
        },
        {
          id: "barbarian_10_151",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/ResistanceLightning_active.png",

          activable_ids: ["barbarian_10_150", "barbarian_10_152"],
          bg: "magic",
        },
        {
          id: "barbarian_10_152",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/ResistanceAll_active.png",
          activable_ids: [
            "barbarian_10_143",
            "barbarian_10_151",
            "barbarian_10_153",
          ],
          bg: "rare",
        },
        {
          id: "barbarian_10_153",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/ResistanceLightning_active.png",
          activable_ids: [
            "barbarian_10_144",
            "barbarian_10_159",
            "barbarian_10_152",
          ],
          bg: "magic",
        },
        {
          id: "barbarian_10_154",
          active: false,
          index: 14,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_146", "barbarian_10_155"],
        },
        {
          id: "barbarian_10_155",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_160",
            "barbarian_10_154",
            "barbarian_10_156",
          ],
        },
        {
          id: "barbarian_10_156",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_147",
            "barbarian_10_161",
            "barbarian_10_155",
            "barbarian_10_157",
          ],
        },
        {
          id: "barbarian_10_157",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_148",
            "barbarian_10_162",
            "barbarian_10_156",
          ],
        },
      ],
      [
        {
          id: "barbarian_10_158",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_149", "barbarian_10_163"],
        },
        {
          id: "barbarian_10_159",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",

          options: ["+5 Force"],

          activable_ids: ["barbarian_10_153", "barbarian_10_167"],
        },
        {
          id: "barbarian_10_160",
          active: false,
          index: 15,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_155", "barbarian_10_161"],
        },
        {
          id: "barbarian_10_161",
          active: false,
          index: 16,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_156",
            "barbarian_10_160",
            "barbarian_10_162",
          ],
        },
        {
          id: "barbarian_10_162",
          active: false,
          index: 17,
          link: false,
          image: "/paragon/barbarian/barbarian.png",

          activable_ids: ["barbarian_10_157", "barbarian_10_161"],
          bg: "rare",
        },
      ],
      [
        {
          id: "barbarian_10_163",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_158",
            "barbarian_10_168",
            "barbarian_10_164",
          ],
        },
        {
          id: "barbarian_10_164",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_169",
            "barbarian_10_163",
            "barbarian_10_165",
          ],
        },
        {
          id: "barbarian_10_165",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_170",
            "barbarian_10_164",
            "barbarian_10_166",
          ],
        },
        {
          id: "barbarian_10_166",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          activable_ids: [
            "barbarian_10_171",
            "barbarian_10_165",
            "barbarian_10_167",
          ],
        },
        {
          id: "barbarian_10_167",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",
          label: "Nœud normal",
          options: ["5 Dextérité"],
          activable_ids: [
            "barbarian_10_159",
            "barbarian_10_172",
            "barbarian_10_166",
          ],
        },
      ],
      [
        {
          id: "barbarian_10_168",
          active: false,
          index: 8,
          link: false,
          image: "/paragon/barbarian/Str_active.png",

          label: "Nœud normal",
          options: ["+5 Force"],

          activable_ids: ["barbarian_10_163", "barbarian_10_169"],
        },
        {
          id: "barbarian_10_169",
          active: false,
          index: 9,
          link: false,
          image: "/paragon/barbarian/Str_active.png",
          label: "Nœud normal",
          options: ["+5 Force"],
          activable_ids: [
            "barbarian_10_164",
            "barbarian_10_168",
            "barbarian_10_170",
          ],
        },
        {
          id: "barbarian_10_170",
          active: false,
          index: 10,
          link: false,
          image: "/paragon/barbarian/Will_active.png",
          label: "Nœud normal",
          options: ["+5 volonte"],
          opened: true,
        },
        {
          id: "barbarian_10_171",
          active: false,
          index: 11,
          link: false,
          image: "/paragon/barbarian/Int_active.png",
          label: "Nœud normal",
          options: ["5 Intelligence"],
          activable_ids: [
            "barbarian_10_166",
            "barbarian_10_170",
            "barbarian_10_172",
          ],
        },
        {
          id: "barbarian_10_172",
          active: false,
          index: 12,
          link: false,
          image: "/paragon/barbarian/Dex_active.png",

          label: "Nœud normal",
          options: ["5 Dextérité"],

          activable_ids: ["barbarian_10_167", "barbarian_10_171"],
        },
      ],
      [
        {
          id: "barbarian_10_173",
          active: false,
          index: 10,
          link: true,
          direction: "bottom",
          image: "/paragon/barbarian/Gate_active.png",
        },
      ],
    ],
  },