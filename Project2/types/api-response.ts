export type ApiResponse<T>={
    status:'success' | 'error',
    data?:T,
    error?:{
        code:string,
        message:string
    },
    timestamps:Date,
}

export type SuccessResponse<T>=Omit<ApiResponse<T>,"error"> & {
    status:'success',
    data:T
}

export type ErrorResponse=Omit<ApiResponse<never>,'data'> & {
    status:'error',
    error:{
        code:string,
        message:string
    }
}

export type Result<T>= SuccessResponse<T> | ErrorResponse;