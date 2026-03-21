"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = handleResponse;
exports.handleResult = handleResult;
exports.createSuccessResponse = createSuccessResponse;
exports.createErrorResponse = createErrorResponse;
function handleResponse(response) {
    if (response.status === "success") {
        if (!response.data)
            throw new Error("Success but no data!");
        return response.data;
    }
    var error = response.error;
    throw new Error("[".concat(error === null || error === void 0 ? void 0 : error.code, "] ").concat(error === null || error === void 0 ? void 0 : error.message));
}
function handleResult(result) {
    if (result.status === "success")
        return result.data;
    throw new Error("".concat(result.error.message));
}
function createSuccessResponse(data) {
    return {
        status: "success",
        data: data,
        timestamps: new Date()
    };
}
function createErrorResponse(code, message) {
    return {
        status: "error",
        error: { code: code, message: message },
        timestamps: new Date(),
    };
}
