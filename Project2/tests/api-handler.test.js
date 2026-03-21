"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_handler_1 = require("../handlers/response-handler");
var userResponse = {
    status: 'success',
    data: {
        id: 1,
        name: 'John',
        email: 'john@example.com',
    },
    timestamps: new Date(),
};
var user = (0, response_handler_1.handleResponse)(userResponse);
console.log('User:', user);
var productResponse = (0, response_handler_1.createSuccessResponse)({
    id: 'prod-1',
    price: 99.99,
    title: 'Widget',
});
var product = (0, response_handler_1.handleResponse)(productResponse);
console.log('Product:', product);
// ----------------------------
// Test 3: Array type
// ----------------------------
var usersResponse = {
    status: 'success',
    data: [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' },
    ],
    timestamps: new Date(),
};
var users = (0, response_handler_1.handleResponse)(usersResponse);
console.log('Users:', users);
// ----------------------------
// Test 4: Error response
// ----------------------------
var errorResponse = (0, response_handler_1.createErrorResponse)('NOT_FOUND', 'User not found');
try {
    (0, response_handler_1.handleResponse)(errorResponse);
}
catch (error) {
    console.log('Caught error:', error.message);
}
