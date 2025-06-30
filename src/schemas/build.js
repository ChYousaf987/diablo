import { z } from 'zod';

// Define the schema for a single paragon item
const ParagonSchema = z.object({
  id: z.string(),
  active: z.boolean()
});

// Define the schema for a single skill tree item
const SkillTreeSchema = z.object({
  id: z.string(),
  rank: z.number().optional() // Include `optional()` if `rank` can be undefined
});

// Define the main schema
export const buildSchema = z.object({
  name: z.string().min(2),
  notes: z.string().optional(),
  level: z.number().optional(),
  user_id: z.string().min(2),
  url: z.string().optional(),
  category: z.string().optional(),
  paragons: z.array(ParagonSchema).optional(),
  skill_tree: z.array(SkillTreeSchema).optional()
});
