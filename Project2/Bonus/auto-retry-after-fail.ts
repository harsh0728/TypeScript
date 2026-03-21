import {ApiResponse} from "../types/api-response"
import { handleResponse } from "../handlers/response-handler"

export async function withRetry<T>(fn:()=>Promise<ApiResponse<T>>,maxRetries=3):Promise<T>{
    for (let i=0;i<maxRetries;i++)
    {
        try {
            const response=await fn();
            if (response.status==="success") return handleResponse(response);
        } catch (error) {
            if (i==maxRetries-1) throw error;

            // Exponential backoff: 1s → 2s → 4s
            await new Promise((resolve)=>setTimeout(resolve,Math.pow(2,i)*1000));
        }
    }
    throw new Error("Max retries Exceeded!");
}

