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
          id: "rogue_10_173",
          active: null,
          index: 12,
          link: true,
          image: "/paragon/tile_bg_glyph.png",
          bg: "magic",
          is_icon: true,
        },
  ]





{}
 {
    id: 3,
    label: "Bone Breaker",
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
          id: "barbarian_3_1",
          active: false,
          index: 10,
          link: true,
          direction: "top",
          image: "/paragon/barbarian/Gate_active.png",
          label: "Porte de fixation de la carte",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
        },
      ],

      {
    id: 1,
    label: "Tableau de départ",
    top: 0,
    left: 0,
    image: "/paragon/barbarian/necromancer.png",
    str: 70,
    dex: 39,
    int: 10,
    will: 39,
    item_top: null,
    is_active: true,
    bord: [
      [
        {
          id: "barbarian_1_1",
          active: false,
          index: 10,
          direction: "top",
          link: true,
          image: "/paragon/barbarian/Gate_active.png",
          label: "Porte de fixation de la carte",
          options: ["5 Force", "5 Intelligence", "5 Volonté", "5 Dextérité"],
          activable_ids: ["barbarian_1_3"],
        },
      ],