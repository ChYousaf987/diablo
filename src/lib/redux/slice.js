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
  bossPowers,
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
    bossPowers: bossPowers,
    category: category || "barbarian",
    gearLeft: data[category || "barbarian"].gearLeft,
    gearRight: data[category || "barbarian"].gearRight,
    gems: data[category || "barbarian"].gems,
    skills: data[category || "barbarian"].skills,
    techniques: data[category || "barbarian"].techniques,
    optionSkills: data[category].optionSkills,
    optionTechs: data[category || "barbarian"].optiontechs,
    paragon_builds: data[category || "barbarian"].paragon_builds,
    variants: [
      {
        name: "",
        gearLeft: data[category || "barbarian"].gearLeft,
        gearRight: data[category || "barbarian"].gearRight,
        gems: data[category || "barbarian"].gems,
        skills: data[category || "barbarian"].skills,
        techniques: data[category || "barbarian"].techniques,
      },
    ],
  }),
  reducers: {
    updateBossPowers: (state, action) => {
      const { id, newBossPowers } = action.payload;
      const newBossPowersList = state.bossPowers.map((bossPower) => {
        if (bossPower.id === id) {
          return {
            ...bossPower,
            powers: newBossPowers,
          };
        }
        return bossPower;
      });
      state.bossPowers = newBossPowersList;
    },
    updateNotes: (state, action) => {
      state.notes = action.payload;
    },
    updateCategory: (state, action) => {
      const newCategory = action.payload;
      state.category = newCategory;
      state.gearLeft = data[newCategory].gearLeft;
      state.gearRight = data[newCategory].gearRight;
      state.gems = data[newCategory].gems;
      state.skills = data[newCategory].skills;
      state.techniques = data[newCategory].techniques;
      state.optionSkills = data[newCategory].optionSkills;
      state.optionTechs = data[newCategory].optiontechs;
      // Reset paragon_builds to the new class's default Paragon boards
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
            }))
          ),
        })
      );
      console.log(
        `Updated paragon_builds for category: ${newCategory}`,
        state.paragon_builds
      );
      state.variants = [
        {
          name: "",
          gearLeft: data[newCategory].gearLeft,
          gearRight: data[newCategory].gearRight,
          gems: data[newCategory].gems,
          skills: data[newCategory].skills,
          techniques: data[newCategory].techniques,
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
    updateGearLeft: (state, action) => {
      const { index, newGear } = action.payload;
      const newGearLeft = [...state.gearLeft];
      newGearLeft[index] = newGear;
      state.gearLeft = newGearLeft;
      state.variants[state.defaultIndex].gearLeft = newGearLeft;
    },
    updateGearRight: (state, action) => {
      const { index, newGear } = action.payload;
      const newGearRight = [...state.gearRight];
      newGearRight[index] = newGear;
      state.gearRight = newGearRight;
      state.variants[state.defaultIndex].gearRight = newGearRight;
    },
    updateGems: (state, action) => {
      const { index, newGem } = action.payload;
      const newGems = [...state.gems];
      newGems[index] = newGem;
      state.gems = newGems;
      state.variants[state.defaultIndex].gems = newGems;
    },
    updateSkills: (state, action) => {
      const { index, newSkill } = action.payload;
      const newSkills = [...state.skills];
      newSkills[index] = newSkill;
      state.skills = newSkills;
      state.variants[state.defaultIndex].skills = newSkills;
    },
    updateTechnique: (state, action) => {
      const { index, newTechnique } = action.payload;
      const newTechniques = [...state.techniques];
      newTechniques[index] = newTechnique;
      state.techniques = newTechniques;
      state.variants[state.defaultIndex].techniques = newTechniques;
    },
    updateDefaultIndex: (state, action) => {
      const index = action.payload;
      state.defaultIndex = index;
      state.gearLeft = state.variants[index].gearLeft;
      state.gearRight = state.variants[index].gearRight;
      state.gems = state.variants[index].gems;
      state.skills = state.variants[index].skills;
      state.techniques = state.variants[index].techniques;
    },
    handleCopyVariant: (state, action) => {
      const index = action.payload;
      state.variants[index].gearLeft =
        state.variants[state.defaultIndex].gearLeft;
      state.variants[index].gearRight =
        state.variants[state.defaultIndex].gearRight;
      state.variants[index].gems = state.variants[state.defaultIndex].gems;
      state.variants[index].skills = state.variants[state.defaultIndex].skills;
      state.variants[index].techniques =
        state.variants[state.defaultIndex].techniques;
    },
    addNewVariant: (state, action) => {
      state.variants.push({
        name: "",
        gearLeft: data[state.category].gearLeft,
        gearRight: data[state.category].gearRight,
        gems: data[state.category].gems,
        skills: data[state.category].skills,
        techniques: data[state.category].techniques,
      });
      const index = state.variants.length - 1;
      state.defaultIndex = index;
      state.gearLeft = state.variants[index].gearLeft;
      state.gearRight = state.variants[index].gearRight;
      state.gems = state.variants[index].gems;
      state.skills = state.variants[index].skills;
      state.techniques = state.variants[index].techniques;
    },
    updateOptionSkillScore: (state, action) => {
      const { skillId, newScore } = action.payload;
      const updateSkillsScore = (skills) => {
        return skills.map((skill) => {
          if (skill.id === skillId) {
            return { ...skill, rank: newScore };
          }

          if (skill.secondOptions && skill.secondOptions.length > 0) {
            for (let i = 0; i < skill.secondOptions?.length; i++) {
              if (skill.secondOptions[i].id === skillId) {
                skill.secondOptions[i].rank = newScore;
                return skill;
              }
            }
          }

          if (skill.options && skill.options.length > 0) {
            for (let i = 0; i < skill.options?.length; i++) {
              if (skill.options[i].id === skillId) {
                skill.options[i].rank = newScore;
                return skill;
              }
              for (let j = 0; j < skill.options[i].children?.length; j++) {
                if (skill.options[i].children[j].id === skillId) {
                  skill.options[i].children[j].rank = newScore;
                  return skill;
                }
              }
            }
          }

          return skill;
        });
      };
      state.optionSkills = updateSkillsScore(state.optionSkills);
    },
    updateParagonBuildDemansion: (state, action) => {
      const { id, newDemansion } = action.payload;
      const newParagonBuilds = state.paragon_builds.map((paragon) => {
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
      state.paragon_builds = newParagonBuilds;
      console.log(`Updated demansion for id: ${id}`, state.paragon_builds);
    },
    updateBordItem: (state, action) => {
      const { id, active } = action.payload;
      const newParagonBuilds = state.paragon_builds.map((paragon) => {
        return {
          ...paragon,
          bord: paragon.bord.map((row) =>
            row.map((item) =>
              item.id === id ? { ...item, active: active } : item
            )
          ),
        };
      });
      state.paragon_builds = newParagonBuilds;
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
      state.optionTechs = build.optionTechs ?? data[build.category].optiontechs;
      state.optionSkills =
        build.optionSkills ?? data[build.category].optionSkills;

      state.paragon_builds =
        paragons && paragons.length > 0
          ? state.paragon_builds.map((paragon) => {
              return {
                ...paragon,
                bord: paragon.bord.map((row) =>
                  row.map((node) => {
                    const update = paragons.find((p) => p.id === node.id);
                    return update ? { ...node, active: update.active } : node;
                  })
                ),
              };
            })
          : state.paragon_builds;

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
                  ? skill.secondOptions?.map((option) => {
                      const update = skill_tree.find((s) => s.id === option.id);
                      return update ? { ...option, rank: update.rank } : option;
                    })
                  : [],
              };
            })
          : state.optionSkills;

      state.variants = variants;
      state.gearLeft = variants[0].gearLeft;
      state.gearRight = variants[0].gearRight;
      state.gems = variants[0].gems;
      state.skills = variants[0].skills;
      state.techniques = variants[0].techniques;
    },
  },
});

export const {
  updateGearLeft,
  updateGearRight,
  updateNameVariant,
  updateDefaultIndex,
  updateNotes,
  updateName,
  updateLevel,
  updateUrl,
  addNewVariant,
  updateGems,
  updateSkills,
  updateTechnique,
  updateCategory,
  initailizeGear,
  updateOptionSkillScore,
  updateParagonBuildDemansion,
  updateBordItem,
  handleCopyVariant,
  updateBossPowers,
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
export default slice.reducer;
