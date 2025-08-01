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
} from "@/constants";

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
            is_glyph_socket: node.id === "barbarian_1_23" || false,
            glyph_id: node.glyph_id || null, // Preserve glyph_id from data
          }))
        ),
      })
    ),
    glyphs: data[category || "barbarian"].glyphs.map((glyph) => ({
      ...glyph,
      node_id: null,
    })),
    variants: [
      {
        name: "",
        gearLeft: data[category || "barbarian"].gearLeft,
        gearRight: data[category || "barbarian"].gearRight,
        gems: data[category || "barbarian"].gems,
        skills: data[category || "barbarian"].skills,
        techniques: data[category || "barbarian"].techniques,
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
                is_glyph_socket: node.id === "barbarian_1_23" || false,
                glyph_id: node.glyph_id || null, // Preserve glyph_id from data
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
          return { ...bossPower, ...newBossPowers };
        }
        return bossPower;
      });
    },
    updateSeason: (state, action) => {
      state.season = action.payload;
      state.bossPowers = state.bossPowers.map((bp) => ({
        ...bp,
        label: "",
        image: "",
        season: action.payload,
      }));
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
              active: node.active || false,
              is_glyph_socket: node.id === "barbarian_1_23" || false,
              glyph_id: node.glyph_id || null, // Preserve glyph_id from data
            }))
          ),
        })
      );
      state.glyphs = data[newCategory].glyphs.map((glyph) => ({
        ...glyph,
        node_id: null,
      }));
      state.variants = [
        {
          name: "",
          gearLeft: data[newCategory].gearLeft,
          gearRight: data[newCategory].gearRight,
          gems: data[newCategory].gems,
          skills: data[newCategory].skills,
          techniques: data[newCategory].techniques,
          glyphs: data[newCategory].glyphs.map((glyph) => ({
            ...glyph,
            node_id: null,
          })),
          paragon_builds: data[newCategory].paragon_builds.map((paragon) => ({
            ...paragon,
            bord: paragon.bord.map((row) =>
              row.map((node) => ({
                ...node,
                active: node.active || false,
                is_glyph_socket: node.id === "barbarian_1_23" || false,
                glyph_id: node.glyph_id || null, // Preserve glyph_id from data
              }))
            ),
          })),
        },
      ];
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
      state.gearLeft = state.variants[index].gearLeft;
      state.gearRight = state.variants[index].gearRight;
      state.gems = state.variants[index].gems;
      state.skills = state.variants[index].skills;
      state.techniques = state.variants[index].techniques;
      state.glyphs = state.variants[index].glyphs;
      state.paragon_builds = state.variants[index].paragon_builds;
    },
    handleCopyVariant: (state, action) => {
      const index = action.payload;
      state.variants[index].gearLeft = [
        ...state.variants[state.defaultIndex].gearLeft,
      ];
      state.variants[index].gearRight = [
        ...state.variants[state.defaultIndex].gearRight,
      ];
      state.variants[index].gems = [...state.variants[state.defaultIndex].gems];
      state.variants[index].skills = [
        ...state.variants[state.defaultIndex].skills,
      ];
      state.variants[index].techniques = [
        ...state.variants[state.defaultIndex].techniques,
      ];
      state.variants[index].glyphs = [
        ...state.variants[state.defaultIndex].glyphs,
      ];
      state.variants[index].paragon_builds = [
        ...state.variants[state.defaultIndex].paragon_builds,
      ];
    },
    addNewVariant: (state, action) => {
      state.variants.push({
        name: "",
        gearLeft: [...data[state.category].gearLeft],
        gearRight: [...data[state.category].gearRight],
        gems: [...data[state.category].gems],
        skills: [...data[state.category].skills],
        techniques: [...data[state.category].techniques],
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
              is_glyph_socket: node.id === "barbarian_1_23" || false,
              glyph_id: node.glyph_id || null, // Preserve glyph_id from data
            }))
          ),
        })),
      });
      const index = state.variants.length - 1;
      state.defaultIndex = index;
      state.gearLeft = state.variants[index].gearLeft;
      state.gearRight = state.variants[index].gearRight;
      state.gems = state.variants[index].gems;
      state.skills = state.variants[index].skills;
      state.techniques = state.variants[index].techniques;
      state.glyphs = state.variants[index].glyphs;
      state.paragon_builds = state.variants[index].paragon_builds;
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
      const { node_id, glyph_id, paragon_id } = action.payload;
      // Update the glyph's node_id
      state.glyphs = state.glyphs.map((glyph) =>
        glyph.id === glyph_id
          ? { ...glyph, node_id }
          : glyph.node_id === node_id
          ? { ...glyph, node_id: null }
          : glyph
      );
      // Update only the specific node_id in paragon_builds
      state.paragon_builds = state.paragon_builds.map((paragon) => {
        if (paragon.id === paragon_id) {
          return {
            ...paragon,
            bord: paragon.bord.map((row) =>
              row.map((node) =>
                node && node.id === node_id ? { ...node, glyph_id } : node
              )
            ),
          };
        }
        return paragon;
      });
      // Sync with variants
      state.variants[state.defaultIndex].glyphs = [...state.glyphs];
      state.variants[state.defaultIndex].paragon_builds = [
        ...state.paragon_builds,
      ];
    },
    initailizeGear: (state, action) => {
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
                          glyph_id: update.glyph_id || node.glyph_id || null, // Preserve glyph_id from data
                        }
                      : { ...node, glyph_id: node.glyph_id || null }; // Preserve glyph_id from data
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
                  is_glyph_socket: node.id === "barbarian_1_23" || false,
                  glyph_id: node.glyph_id || null, // Preserve glyph_id from data
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
                is_glyph_socket: node.id === "barbarian_1_23" || false,
                glyph_id: node.glyph_id || null, // Preserve glyph_id from data
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
  initailizeGear,
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

export default slice.reducer;
