import {
  handleResponse,
  createSuccessResponse,
  createErrorResponse,
} from '../handlers/response-handler';

import type { ApiResponse } from '../types/api-response';

// ----------------------------
// Test 1: User API
// ----------------------------

interface User {
  id: number;
  name: string;
  email: string;
}

const userResponse: ApiResponse<User> = {
  status: 'success',
  data: {
    id: 1,
    name: 'John',
    email: 'john@example.com',
  },
  timestamps: new Date(),
};

const user = handleResponse(userResponse);
console.log('User:', user);



// ----------------------------
// Test 2: Product API
// ----------------------------

interface Product {
  id: string;
  price: number;
  title: string;
}

const productResponse: ApiResponse<Product> = createSuccessResponse({
  id: 'prod-1',
  price: 99.99,
  title: 'Widget',
});

const product = handleResponse(productResponse);
console.log('Product:', product);



// ----------------------------
// Test 3: Array type
// ----------------------------

const usersResponse: ApiResponse<User[]> = {
  status: 'success',
  data: [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ],
  timestamps: new Date(),
};

const users = handleResponse(usersResponse);
console.log('Users:', users);



// ----------------------------
// Test 4: Error response
// ----------------------------

const errorResponse = createErrorResponse(
  'NOT_FOUND',
  'User not found'
);

try {
  handleResponse(errorResponse);
} catch (error) {
  console.log('Caught error:', (error as Error).message);
}