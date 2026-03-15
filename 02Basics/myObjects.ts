// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }


function createUser(user:User):User{
    return {_id:"123",name:"",email:"",isActive:true};
}

createUser({_id:"123",name:"",email:"",isActive:true})

type User={
    readonly _id:string, // in case of mongodb, should not change _id
    name:string,
    email:string,
    isActive:boolean,
    credcardDEtails?:number
}

type cardNumber ={
    cardnumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv:number
}
