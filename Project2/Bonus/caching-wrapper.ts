import { handleResponse } from '../handlers/response-handler';
import type { ApiResponse } from '../types/api-response';

export function withCache<T>(fn:()=>Promise<ApiResponse<T>>,ttl=60000){
    const cache=new Map<string,{data:T,expires:number}>();

    return async(key:string):Promise<T>=>{
        const cached=cache.get(key);
        
        if (cached && cached.expires>Date.now()) return cached.data;

        const response=await fn();
        const data=handleResponse(response);

        cache.set(key,{data,expires:Date.now()+ttl});
        return data;
    };
}