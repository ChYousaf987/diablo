const { z } = require("zod");


export const variantBuildSchema = z.object({
    build_id: z.string(),
    name: z.string().min(2),
    gearLeft: z.object(),
    gearRight: z.object(),
    gems: z.object(),
    skills: z.object(),
    techniques: z.object(),
});

