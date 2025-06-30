const { z } = require("zod");

export const registerUser = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(2),
    avatar: z.string().optional()
});

export const loginUser = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});