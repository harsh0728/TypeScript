// 1. Get first element of array
function getFirst<T>(arr:T[]):T{
    return arr[0];
}
// 2. Get last element of array
function getLast<T>(arr:T[]):T | undefined{
    return arr[arr.length-1];
}
// 3. Filter array by property value
function filterByProperty<T,K extends keyof T>(arr:T[],key:K,value:T[K]):T[]{
    return arr.filter(item=>item[key]===value);
}
// 4. Map array to property values
function pluck<T,K extends keyof T>(arr:T[],key:K):T[K][]{
    return arr.map(item=>item[key]);
}
// 5. Group array by property
function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
  return arr.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// ========== TESTING ==========

type User = {
  id: number;
  name: string;
  age: number;
  role: string;
};

const users: User[] = [
  { id: 1, name: "Alice", age: 25, role: "admin" },
  { id: 2, name: "Bob", age: 30, role: "user" },
  { id: 3, name: "Charlie", age: 25, role: "user" },
  { id: 4, name: "Diana", age: 28, role: "admin" }
];

// 1. Get first and last
console.log("First user:", getFirst(users));
console.log("Last user:", getLast(users));

// 2. Filter by role
console.log("\nAdmins:", filterByProperty(users, "role", "admin"));

// 3. Pluck all names
console.log("\nAll names:", pluck(users, "name"));

// 4. Group by age
console.log("\nGrouped by age:", groupBy(users, "age"));

// Works with different types too!
const numbers = [1, 2, 3, 4, 5];
console.log("\nFirst number:", getFirst(numbers));
console.log("Last number:", getLast(numbers));