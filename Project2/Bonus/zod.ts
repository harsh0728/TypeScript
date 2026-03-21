import z from "zod"
import {ApiResponse} from "../types/api-response"
import { isSuccess } from "../handlers/type-guards";


const userSchema=z.object({
    id:z.number(),
    name:z.string(),
    email:z.email()
});

export type User=z.infer<typeof userSchema>;

export function validateResponse<T>(response:ApiResponse<T>,schema:z.ZodSchema):T{
    if (!isSuccess(response)) throw new Error(response.error?.message);
    const validated=schema.parse(response.data);
    return validated as T;
}

// Usage:
// const validatedUser = validateResponse(userResponse, UserSchema);