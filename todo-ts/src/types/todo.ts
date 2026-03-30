export interface Todo{
    id: string,
    text:string,
    completed:boolean,
    
    // BONUS FEATURES
    dueDate?: string;        // Optional: store yyyy-mm-dd date
    category?: string;       // Optional: Work / Home / Personal etc.
    order: number;           // Required for drag & drop sorting
}