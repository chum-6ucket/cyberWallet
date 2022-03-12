import {object, string} from "zod";

export const validation = object({
    email: string().email().nonempty({
        message: "Email is required",
    }),
    password: string().min(6).nonempty({
        message: "Password is required",
    }),
});
