// slice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  aspects,
  data,
  gems,
  gearLeft as initialGearLeft,
  gearRight as initialGearRight,
  itemState,
  skills,
  techniques,
  bossPowers as initialBossPowers,
  bossPowers9,
  bossPowers9main,
  catalystPowers,
  aspectMap,
} from "@/constants";

// Define glyph socket positions per class (without prefix)
const glyphSocketPositions = {
  barbarian: [
    "1_23",
    "2_173",
    "3_145",
    "4_79",
    "5_37",
    "6_133",
    "7_39",
    "8_41",
    "9_118",
    "10_38",
  ],
  druid: [
    "2_38",
    "3_118",
    "4_173",
    "5_145",
    "1_23",
    "6_134",
    "7_37",
    "8_79",
    "9_41",
    "10_39",
  ],
  necromancer: [
    "1_23",
    "2_134",
    "3_118",
    "4_145",
    "5_41",
    "8_79",
    "9_134",
    "10_38",
  ], // 3,4,5,8,9,10
  rogue: [
    "1_23",
    "2_79",
    "3_38",
    "4_39",
    "5_37",
    "6_41",
    "7_118",
    "8_145",
    "9_134",
    "10_173",
  ], // 5,6,7,8,9,10
  sorcerer: [
    "1_23",
    "2_145",
    "3_118",
    "4_37",
    "5_38",
    "6_173",
    "7_39",
    "8_134",
    "9_41",
    "10_79",
  ],
  spiritborn: [
    "1_23",
    "2_37",
    "3_118",
    "4_134",
    "5_41",
    "6_145",
    "7_38",
    "8_173",
    "9_79",
  ],
};

const slice = createSlice({
  name: "gear",
  initialState: (category = "barbarian") => ({
    id: null,
    defaultIndex: 0,
    notes: "",
    level: 1,
    maxLevel: 71,
    maxLevelParagon: 328,
    url: "",
    name: "",
    bossPowers: [
      { id: 1, label: "", image: "", slot: "top", season: "Season 8" },
      { id: 2, label: "", image: "", slot: "bottom", season: "Season 8" },
      { id: 3, label: "", image: "", slot: "left", season: "Season 8" },
      { id: 4, label: "", image: "", slot: "right", season: "Season 8" },
      { id: 5, label: "", image: "", slot: "catalyst1", season: "Season 8" },
      { id: 6, label: "", image: "", slot: "catalyst2", season: "Season 8" },
    ],
    category: category || "barbarian",
    season: "Season 8",
    gearLeft: data[category || "barbarian"].gearLeft,
    gearRight: data[category || "barbarian"].gearRight,
    gems: data[category || "barbarian"].gems,
    skills: data[category || "barbarian"].skills,
    techniques: data[category || "barbarian"].techniques,
    optionSkills: data[category].optionSkills,
    optionTechs: data[category || "barbarian"].optiontechs,
    paragon_builds: data[category || "barbarian"].paragon_builds.map(
      (paragon) => ({
        ...paragon,
        bord: paragon.bord.map((row) =>
          row.map((node) => ({
            ...node,
            active: node.active || false,
            is_glyph_socket:
              glyphSocketPositions[category]?.includes(
                node.id.split("_").slice(1).join("_")
              ) || false,
            glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
            glyph_ids:
              node.glyph_ids ||
              (node.glyph_id && !node.is_glyph_socket ? [node.glyph_id] : []),
          }))
        ),
      })
    ),
    glyphs: data[category || "barbarian"].glyphs.map((glyph) => ({
      ...glyph,
      node_id: null,
    })),
    aspects: aspectMap[category || "barbarian"]?.Season8?.left || [],
    aspectsRight: aspectMap[category || "barbarian"]?.Season8?.right || [],
    variants: [
      {
        name: "",
        gearLeft: data[category || "barbarian"].gearLeft,
        gearRight: data[category || "barbarian"].gearRight,
        gems: data[category || "barbarian"].gems,
        skills: data[category || "barbarian"].skills,
        techniques: data[category || "barbarian"].techniques,
        bossPowers: [
          { id: 1, label: "", image: "", slot: "top", season: "Season 8" },
          { id: 2, label: "", image: "", slot: "bottom", season: "Season 8" },
          { id: 3, label: "", image: "", slot: "left", season: "Season 8" },
          { id: 4, label: "", image: "", slot: "right", season: "Season 8" },
          {
            id: 5,
            label: "",
            image: "",
            slot: "catalyst1",
            season: "Season 8",
          },
          {
            id: 6,
            label: "",
            image: "",
            slot: "catalyst2",
            season: "Season 8",
          },
        ],
        glyphs: data[category || "barbarian"].glyphs.map((glyph) => ({
          ...glyph,
          node_id: null,
        })),
        paragon_builds: data[category || "barbarian"].paragon_builds.map(
          (paragon) => ({
            ...paragon,
            bord: paragon.bord.map((row) =>
              row.map((node) => ({
                ...node,
                active: node.active || false,
                is_glyph_socket:
                  glyphSocketPositions[category]?.includes(
                    node.id.split("_").slice(1).join("_")
                  ) || false,
                glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
                glyph_ids:
                  node.glyph_ids ||
                  (node.glyph_id && !node.is_glyph_socket
                    ? [node.glyph_id]
                    : []),
              }))
            ),
          })
        ),
      },
    ],
  }),
  reducers: {
    updateGearLeft: (state, action) => {
      const { index, newGear } = action.payload;
      state.gearLeft[index] = { ...state.gearLeft[index], ...newGear };
      state.variants[state.defaultIndex].gearLeft = [...state.gearLeft];
    },
    updateGearRight: (state, action) => {
      const { index, newGear } = action.payload;
      state.gearRight[index] = { ...state.gearRight[index], ...newGear };
      state.variants[state.defaultIndex].gearRight = [...state.gearRight];
    },
    updateBossPowers: (state, action) => {
      const { id, newBossPowers, slot } = action.payload;
      state.bossPowers = state.bossPowers.map((bossPower) => {
        if (bossPower.id === id && bossPower.slot === slot) {
          return { ...bossPower, ...newBossPowers, slot, season: state.season };
        }
        return bossPower;
      });
      state.variants[state.defaultIndex].bossPowers = [...state.bossPowers];
    },
    updateSeason: (state, action) => {
      const seasonKey = action.payload.replace(" ", "");
      state.season = action.payload;
      state.aspects = aspectMap[state.category]?.[seasonKey]?.left || [];
      state.aspectsRight = aspectMap[state.category]?.[seasonKey]?.right || [];
      state.bossPowers = state.bossPowers.map((bp) => ({
        ...bp,
        label: "",
        image: "",
        season: action.payload,
      }));
      state.variants[state.defaultIndex].bossPowers = [...state.bossPowers];
    },
    updateAspectPower: (state, action) => {
      const { index, side, aspect_power_id } = action.payload;
      const gearArray = side === "left" ? state.gearLeft : state.gearRight;
      gearArray[index] = { ...gearArray[index], aspect_power_id };
      const variantGear =
        side === "left"
          ? state.variants[state.defaultIndex].gearLeft
          : state.variants[state.defaultIndex].gearRight;
      variantGear[index] = { ...variantGear[index], aspect_power_id };
    },
    updateAspectPower2: (state, action) => {
      const { index, side, aspect_power_id_2 } = action.payload;
      const gearArray = side === "left" ? state.gearLeft : state.gearRight;
      gearArray[index] = { ...gearArray[index], aspect_power_id_2 };
      const variantGear =
        side === "left"
          ? state.variants[state.defaultIndex].gearLeft
          : state.variants[state.defaultIndex].gearRight;
      variantGear[index] = { ...variantGear[index], aspect_power_id_2 };
    },
    updateNotes: (state, action) => {
      state.notes = action.payload;
    },
    updateCategory: (state, action) => {
      const newCategory = action.payload;
      state.category = newCategory;
      state.season = "Season 8";
      state.aspects = aspectMap[newCategory]?.Season8?.left || [];
      state.aspectsRight = aspectMap[newCategory]?.Season8?.right || [];
      state.gearLeft = data[newCategory].gearLeft;
      state.gearRight = data[newCategory].gearRight;
      state.gems = data[newCategory].gems;
      state.skills = data[newCategory].skills;
      state.techniques = data[newCategory].techniques;
      state.optionSkills = data[newCategory].optionSkills;
      state.optionTechs = data[newCategory].optiontechs;
      state.paragon_builds = data[newCategory].paragon_builds.map(
        (paragon) => ({
          ...paragon,
          is_active: paragon.is_active || false,
          top: paragon.top || 0,
          left: paragon.left || 0,
          bord: paragon.bord.map((row) =>
            row.map((node) => ({
              ...node,
              active: false, // Reset active state to prevent carryover
              is_glyph_socket:
                glyphSocketPositions[newCategory]?.includes(
                  node.id.split("_").slice(1).join("_")
                ) || false,
              glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
              glyph_ids:
                node.glyph_ids ||
                (node.glyph_id && !node.is_glyph_socket ? [node.glyph_id] : []),
            }))
          ),
        })
      );
      state.glyphs = data[newCategory].glyphs.map((glyph) => ({
        ...glyph,
        node_id: null,
      }));
      state.bossPowers = [
        { id: 1, label: "", image: "", slot: "top", season: "Season 8" },
        { id: 2, label: "", image: "", slot: "bottom", season: "Season 8" },
        { id: 3, label: "", image: "", slot: "left", season: "Season 8" },
        { id: 4, label: "", image: "", slot: "right", season: "Season 8" },
        { id: 5, label: "", image: "", slot: "catalyst1", season: "Season 8" },
        { id: 6, label: "", image: "", slot: "catalyst2", season: "Season 8" },
      ];
      state.variants = [
        {
          name: "",
          gearLeft: data[newCategory].gearLeft,
          gearRight: data[newCategory].gearRight,
          gems: data[newCategory].gems,
          skills: data[newCategory].skills,
          techniques: data[newCategory].techniques,
          bossPowers: [
            { id: 1, label: "", image: "", slot: "top", season: "Season 8" },
            { id: 2, label: "", image: "", slot: "bottom", season: "Season 8" },
            { id: 3, label: "", image: "", slot: "left", season: "Season 8" },
            { id: 4, label: "", image: "", slot: "right", season: "Season 8" },
            {
              id: 5,
              label: "",
              image: "",
              slot: "catalyst1",
              season: "Season 8",
            },
            {
              id: 6,
              label: "",
              image: "",
              slot: "catalyst2",
              season: "Season 8",
            },
          ],
          glyphs: data[newCategory].glyphs.map((glyph) => ({
            ...glyph,
            node_id: null,
          })),
          paragon_builds: data[newCategory].paragon_builds.map((paragon) => ({
            ...paragon,
            bord: paragon.bord.map((row) =>
              row.map((node) => ({
                ...node,
                active: false, // Reset active state to prevent carryover
                is_glyph_socket:
                  glyphSocketPositions[newCategory]?.includes(
                    node.id.split("_").slice(1).join("_")
                  ) || false,
                glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
                glyph_ids:
                  node.glyph_ids ||
                  (node.glyph_id && !node.is_glyph_socket
                    ? [node.glyph_id]
                    : []),
              }))
            ),
          })),
        },
      ];
    },
    updateAspects: (state, action) => {
      const { category, season } = action.payload;
      const seasonKey = season.replace(" ", "");
      state.aspects = aspectMap[category]?.[seasonKey]?.left || [];
      state.aspectsRight = aspectMap[category]?.[seasonKey]?.right || [];
    },
    updateNameVariant: (state, action) => {
      const { newName, index } = action.payload;
      if (index === undefined) {
        state.variants[state.defaultIndex].name = newName;
      } else {
        state.variants[index].name = newName;
      }
    },
    updateLevel: (state, action) => {
      state.level = action.payload;
    },
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateGems: (state, action) => {
      const { index, newGem } = action.payload;
      state.gems[index] = newGem;
      state.variants[state.defaultIndex].gems = [...state.gems];
    },
    updateSkills: (state, action) => {
      const { index, newSkill } = action.payload;
      state.skills[index] = newSkill;
      state.variants[state.defaultIndex].skills = [...state.skills];
    },
    updateTechnique: (state, action) => {
      const { index, newTechnique } = action.payload;
      state.techniques[index] = newTechnique;
      state.variants[state.defaultIndex].techniques = [...state.techniques];
    },
    updateDefaultIndex: (state, action) => {
      const index = action.payload;
      state.defaultIndex = index;
      state.gearLeft = [...state.variants[index].gearLeft];
      state.gearRight = [...state.variants[index].gearRight];
      state.gems = [...state.variants[index].gems];
      state.skills = [...state.variants[index].skills];
      state.techniques = [...state.variants[index].techniques];
      state.bossPowers = [...state.variants[index].bossPowers];
      state.glyphs = [...state.variants[index].glyphs];
      state.paragon_builds = [...state.variants[index].paragon_builds];
    },
    handleCopyVariant: (state, action) => {
      const index = action.payload;
      const newVariant = {
        ...state.variants[index],
        name: `${state.variants[index].name} (Copy)`,
        gearLeft: [...state.variants[index].gearLeft],
        gearRight: [...state.variants[index].gearRight],
        gems: [...state.variants[index].gems],
        skills: [...state.variants[index].skills],
        techniques: [...state.variants[index].techniques],
        bossPowers: [...state.variants[index].bossPowers],
        glyphs: [...state.variants[index].glyphs],
        paragon_builds: state.variants[index].paragon_builds.map((paragon) => ({
          ...paragon,
          bord: paragon.bord.map((row) => [...row]),
        })),
      };
      state.variants.push(newVariant);
      state.defaultIndex = state.variants.length - 1;
      state.gearLeft = [...newVariant.gearLeft];
      state.gearRight = [...newVariant.gearRight];
      state.gems = [...newVariant.gems];
      state.skills = [...newVariant.skills];
      state.techniques = [...newVariant.techniques];
      state.bossPowers = [...newVariant.bossPowers];
      state.glyphs = [...newVariant.glyphs];
      state.paragon_builds = [...newVariant.paragon_builds];
    },
    addNewVariant: (state, action) => {
      const newVariant = {
        name: `Variant ${state.variants.length + 1}`,
        gearLeft: [...data[state.category].gearLeft],
        gearRight: [...data[state.category].gearRight],
        gems: [...data[state.category].gems],
        skills: [...data[state.category].skills],
        techniques: [...data[state.category].techniques],
        bossPowers: [
          { id: 1, label: "", image: "", slot: "top", season: state.season },
          { id: 2, label: "", image: "", slot: "bottom", season: state.season },
          { id: 3, label: "", image: "", slot: "left", season: state.season },
          { id: 4, label: "", image: "", slot: "right", season: state.season },
          {
            id: 5,
            label: "",
            image: "",
            slot: "catalyst1",
            season: state.season,
          },
          {
            id: 6,
            label: "",
            image: "",
            slot: "catalyst2",
            season: state.season,
          },
        ],
        glyphs: data[state.category].glyphs.map((glyph) => ({
          ...glyph,
          node_id: null,
        })),
        paragon_builds: data[state.category].paragon_builds.map((paragon) => ({
          ...paragon,
          bord: paragon.bord.map((row) =>
            row.map((node) => ({
              ...node,
              active: node.active || false,
              is_glyph_socket:
                glyphSocketPositions[state.category]?.includes(
                  node.id.split("_").slice(1).join("_")
                ) || false,
              glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
              glyph_ids:
                node.glyph_ids ||
                (node.glyph_id && !node.is_glyph_socket ? [node.glyph_id] : []),
            }))
          ),
        })),
      };
      state.variants.push(newVariant);
      state.defaultIndex = state.variants.length - 1;
      state.gearLeft = [...newVariant.gearLeft];
      state.gearRight = [...newVariant.gearRight];
      state.gems = [...newVariant.gems];
      state.skills = [...newVariant.skills];
      state.techniques = [...newVariant.techniques];
      state.bossPowers = [...newVariant.bossPowers];
      state.glyphs = [...newVariant.glyphs];
      state.paragon_builds = [...newVariant.paragon_builds];
    },
    updateOptionSkillScore: (state, action) => {
      const { skillId, newScore } = action.payload;
      const updateSkillsScore = (skills) => {
        return skills.map((skill) => {
          let updatedSkill = { ...skill };
          if (skill.id === skillId) {
            return { ...skill, rank: newScore };
          }
          if (skill.options && skill.options.length > 0) {
            const updatedOptions = skill.options.map((option) => {
              if (option.id === skillId) {
                return { ...option, rank: newScore };
              }
              if (option.children && option.children.length > 0) {
                const updatedChildren = option.children.map((child) => {
                  if (child.id === skillId) {
                    return { ...child, rank: newScore };
                  }
                  return child;
                });
                return { ...option, children: updatedChildren };
              }
              return option;
            });
            updatedSkill = { ...updatedSkill, options: updatedOptions };
          }
          if (skill.secondOptions && skill.secondOptions.length > 0) {
            const updatedSecondOptions = skill.secondOptions.map((option) => {
              if (option.id === skillId) {
                return { ...option, rank: newScore };
              }
              if (option.children && option.children.length > 0) {
                const updatedChildren = option.children.map((child) => {
                  if (child.id === skillId) {
                    return { ...child, rank: newScore };
                  }
                  return child;
                });
                return { ...option, children: updatedChildren };
              }
              return option;
            });
            updatedSkill = {
              ...updatedSkill,
              secondOptions: updatedSecondOptions,
            };
          }
          return updatedSkill;
        });
      };
      state.optionSkills = updateSkillsScore(state.optionSkills);
      state.variants[state.defaultIndex].optionSkills = [...state.optionSkills];
    },
    updateParagonBuildDemansion: (state, action) => {
      const { id, newDemansion } = action.payload;
      state.paragon_builds = state.paragon_builds.map((paragon) => {
        if (paragon.id === id) {
          return {
            ...paragon,
            top: newDemansion.top,
            left: newDemansion.left,
            is_active: true,
          };
        }
        return paragon;
      });
      state.variants[state.defaultIndex].paragon_builds = [
        ...state.paragon_builds,
      ];
    },
    updateBordItem: (state, action) => {
      const { id, active } = action.payload;
      state.paragon_builds = state.paragon_builds.map((paragon) => ({
        ...paragon,
        bord: paragon.bord.map((row) =>
          row.map((item) => (item.id === id ? { ...item, active } : item))
        ),
      }));
      state.variants[state.defaultIndex].paragon_builds = [
        ...state.paragon_builds,
      ];
    },
    updateGlyph: (state, action) => {
      const { node_id, glyph_ids, paragon_id } = action.payload;
      // Update glyphs to track node assignments
      state.glyphs = state.glyphs.map((glyph) => {
        const isSelected = glyph_ids.includes(glyph.id);
        const isCurrentlyAssigned = glyph.node_id === node_id;
        if (isSelected && !isCurrentlyAssigned) {
          return { ...glyph, node_id };
        } else if (!isSelected && isCurrentlyAssigned) {
          return { ...glyph, node_id: null };
        }
        return glyph;
      });
      // Update paragon_builds with glyph_ids (array) or glyph_id (single for glyph sockets)
      state.paragon_builds = state.paragon_builds.map((paragon) => {
        if (paragon.id === paragon_id) {
          return {
            ...paragon,
            bord: paragon.bord.map((row) =>
              row.map((node) => {
                if (node && node.id === node_id) {
                  return {
                    ...node,
                    glyph_id: node.is_glyph_socket
                      ? glyph_ids.length > 0
                        ? glyph_ids[0]
                        : null
                      : null,
                    glyph_ids: node.is_glyph_socket ? [] : glyph_ids,
                  };
                }
                return node;
              })
            ),
          };
        }
        return paragon;
      });
      state.variants[state.defaultIndex].glyphs = [...state.glyphs];
      state.variants[state.defaultIndex].paragon_builds = [
        ...state.paragon_builds,
      ];
    },
    initializeGear: (state, action) => {
      const { build, variants } = action.payload;
      const paragons = build.paragons;
      const skill_tree = build.skill_tree;
      state.name = build.name;
      state.level = build.level;
      state.url = build.url;
      state.notes = build.notes;
      state.id = build._id ?? build.id;
      state.maxLevel = build.maxLevel ?? 58;
      state.category = build.category;
      state.season = build.season ?? "Season 8";
      state.aspects =
        aspectMap[build.category]?.[
          (build.season ?? "Season 8").replace(" ", "")
        ]?.left || [];
      state.aspectsRight =
        aspectMap[build.category]?.[
          (build.season ?? "Season 8").replace(" ", "")
        ]?.right || [];
      state.optionTechs = build.optionTechs ?? data[build.category].optiontechs;
      state.optionSkills =
        build.optionSkills ?? data[build.category].optionSkills;

      state.paragon_builds =
        paragons && paragons.length > 0
          ? state.paragon_builds.map((paragon) => {
              const buildParagon =
                paragons.find((p) => p.id === paragon.id) || {};
              return {
                ...paragon,
                bord: paragon.bord.map((row) =>
                  row.map((node) => {
                    const update = buildParagon.bord
                      ?.flat()
                      .find((n) => n.id === node.id);
                    return update
                      ? {
                          ...node,
                          active: update.active,
                          glyph_id: update.is_glyph_socket
                            ? update.glyph_id || null
                            : null,
                          glyph_ids:
                            update.glyph_ids ||
                            (update.glyph_id && !update.is_glyph_socket
                              ? [update.glyph_id]
                              : []),
                        }
                      : {
                          ...node,
                          glyph_id: node.is_glyph_socket
                            ? node.glyph_id || null
                            : null,
                          glyph_ids:
                            node.glyph_ids ||
                            (node.glyph_id && !node.is_glyph_socket
                              ? [node.glyph_id]
                              : []),
                        };
                  })
                ),
              };
            })
          : state.paragon_builds.map((paragon) => ({
              ...paragon,
              bord: paragon.bord.map((row) =>
                row.map((node) => ({
                  ...node,
                  active: node.active || false,
                  is_glyph_socket:
                    glyphSocketPositions[build.category]?.includes(
                      node.id.split("_").slice(1).join("_")
                    ) || false,
                  glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
                  glyph_ids:
                    node.glyph_ids ||
                    (node.glyph_id && !node.is_glyph_socket
                      ? [node.glyph_id]
                      : []),
                }))
              ),
            }));

      state.optionSkills =
        skill_tree && skill_tree.length > 0
          ? state.optionSkills.map((skill) => {
              return {
                ...skill,
                options: skill.options
                  ? skill.options.map((option) => {
                      const update = skill_tree.find((s) => s.id === option.id);
                      const children =
                        option.children && option.children.length > 0
                          ? option.children.map((child) => {
                              const update = skill_tree.find(
                                (s) => s.id === child.id
                              );
                              return update
                                ? { ...child, rank: update.rank }
                                : child;
                            })
                          : [];
                      return update
                        ? { ...option, rank: update.rank, children }
                        : { ...option, children };
                    })
                  : [],
                secondOptions: skill.secondOptions
                  ? skill.secondOptions.map((option) => {
                      const update = skill_tree.find((s) => s.id === option.id);
                      const children =
                        option.children && option.children.length > 0
                          ? option.children.map((child) => {
                              const update = skill_tree.find(
                                (s) => s.id === child.id
                              );
                              return update
                                ? { ...child, rank: update.rank }
                                : child;
                            })
                          : [];
                      return update
                        ? { ...option, rank: update.rank, children }
                        : { ...option, children };
                    })
                  : [],
              };
            })
          : state.optionSkills;

      state.variants = variants.map((variant) => ({
        name: variant.name || "",
        gearLeft: variant.gearLeft || data[build.category].gearLeft,
        gearRight: variant.gearRight || data[build.category].gearRight,
        gems: variant.gems || data[build.category].gems,
        skills: variant.skills || data[build.category].skills,
        techniques: variant.techniques || data[build.category].techniques,
        bossPowers: variant.bossPowers || [
          { id: 1, label: "", image: "", slot: "top", season: state.season },
          { id: 2, label: "", image: "", slot: "bottom", season: state.season },
          { id: 3, label: "", image: "", slot: "left", season: state.season },
          { id: 4, label: "", image: "", slot: "right", season: state.season },
          {
            id: 5,
            label: "",
            image: "",
            slot: "catalyst1",
            season: state.season,
          },
          {
            id: 6,
            label: "",
            image: "",
            slot: "catalyst2",
            season: state.season,
          },
        ],
        glyphs:
          variant.glyphs ||
          data[build.category].glyphs.map((glyph) => ({
            ...glyph,
            node_id: null,
          })),
        paragon_builds:
          variant.paragon_builds ||
          data[build.category].paragon_builds.map((paragon) => ({
            ...paragon,
            bord: paragon.bord.map((row) =>
              row.map((node) => ({
                ...node,
                active: node.active || false,
                is_glyph_socket:
                  glyphSocketPositions[build.category]?.includes(
                    node.id.split("_").slice(1).join("_")
                  ) || false,
                glyph_id: node.is_glyph_socket ? node.glyph_id || null : null,
                glyph_ids:
                  node.glyph_ids ||
                  (node.glyph_id && !node.is_glyph_socket
                    ? [node.glyph_id]
                    : []),
              }))
            ),
          })),
      }));
      state.defaultIndex = 0;
      state.gearLeft = state.variants[0].gearLeft;
      state.gearRight = state.variants[0].gearRight;
      state.gems = state.variants[0].gems;
      state.skills = state.variants[0].skills;
      state.techniques = state.variants[0].techniques;
      state.bossPowers = state.variants[0].bossPowers;
      state.glyphs = state.variants[0].glyphs;
      state.paragon_builds = state.variants[0].paragon_builds;
    },
  },
});

export const {
  updateGearLeft,
  updateGearRight,
  updateNameVariant,
  updateDefaultIndex,
  updateName,
  updateLevel,
  updateUrl,
  addNewVariant,
  updateGems,
  updateSkills,
  updateTechnique,
  initializeGear,
  updateOptionSkillScore,
  updateParagonBuildDemansion,
  updateBordItem,
  handleCopyVariant,
  updateBossPowers,
  updateNotes,
  updateCategory,
  updateSeason,
  updateAspectPower,
  updateAspectPower2,
  updateGlyph,
  updateAspects,
} = slice.actions;

export const selectGearLeft = (state) => state.gear.gearLeft;
export const selectGearRight = (state) => state.gear.gearRight;
export const selectGems = (state) => state.gear.gems;
export const selectSkills = (state) => state.gear.skills;
export const selectTechnique = (state) => state.gear.techniques;
export const selectVariants = (state) => state.gear.variants;
export const selectDefaultIndex = (state) => state.gear.defaultIndex;
export const selectCategory = (state) => state.gear.category;
export const selectName = (state) => state.gear.name;
export const selectLevel = (state) => state.gear.level;
export const selectUrl = (state) => state.gear.url;
export const selectNotes = (state) => state.gear.notes;
export const selectId = (state) => state.gear.id;
export const selectOptionSkills = (state) => state.gear.optionSkills;
export const selectMaxLevel = (state) => state.gear.maxLevel;
export const selectParagonBuilds = (state) => state.gear.paragon_builds;
export const selectMaxLevelParagon = (state) => state.gear.maxLevelParagon;
export const selectBossPowers = (state) => state.gear.bossPowers;
export const selectOptionTechs = (state) => state.gear.optionTechs;
export const selectSeason = (state) => state.gear.season;
export const selectGlyphs = (state) => state.gear.glyphs;
export const selectAspects = (state) => state.gear.aspects;
export const selectAspectsRight = (state) => state.gear.aspectsRight;

export default slice.reducer;
