interface Users{
    readonly dbId:string,
    email:string,
    userId:number,
    googleId?:string,
    //startTrail:()=>string
    startTrail():string
    getCoupon(couponname:string):number
}

interface Users{
    githubToken?:string
}

interface Admin extends Users{
    role: "admin" | "ta" | "learner"
}

const harsh:Admin={dbId:"23",email:"a@mail.com",userId:4534,
    githubToken:"ghjkl23",
    role: "admin",
    startTrail:()=>{
        return "trail started"
    },
    getCoupon:(name:"harsh10")=>{
        return 10;
    }
}

export {}