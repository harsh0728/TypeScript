import type { ApiResponse , Result} from "../types/api-response";

export function handleResponse<T>(response:ApiResponse<T>):T{
    if (response.status==="success")
    {
        if (!response.data) throw new Error("Success but no data!");
        return response.data;
    }
    const error=response.error;
    throw new Error(`[${error?.code}] ${error?.message}`)
}

export function handleResult<T>(result:Result<T>):T{
    if (result.status==="success") return result.data;
    throw new Error(`${result.error.message}`)
}

export function createSuccessResponse<T>(data:T):Result<T>{
    return {
        status:"success",
        data,
        timestamps: new Date()
    };
}

export function createErrorResponse<T>(code:string,message:string):Result<T>{
    return {
        status:"error",
        error:{code,message},
        timestamps:new Date(),
    }
}
