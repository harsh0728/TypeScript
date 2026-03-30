import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string,initialValue:T){
    // Load existing value from localStorage
    const storedValue=localStorage.getItem(key);

     // Parse if exists, otherwise use default
    const [value,setValue]=useState<T>(()=>{
        return storedValue?JSON.parse(storedValue):initialValue;
    })

    // Custom setter that ALSO updates localStorage
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue] as const; // TS Literal Tuple
}