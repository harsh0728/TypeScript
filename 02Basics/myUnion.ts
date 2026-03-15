let score:number | string | boolean=33

score=44
score="55"
score=true

type User={
    name:string,
    id:number
}

type Admin={
    username:string,
    id:number
}

let harsh:User | Admin={name:"Harsh",id:1234}

harsh={username:"hk",id:234}


function getDbId(id:string | number){
    console.log(`Db Id is ${id}`);   
    if (typeof id==="string")
    {
        id.toLowerCase();
    }
    
}
getDbId(3);
getDbId("3");

// array

const data:number[]=[1,2,3,];
const data2:string[]=["1","2","3"];
const data3:(string | number | boolean)[]=[1,"2",3,true,false];


export {}