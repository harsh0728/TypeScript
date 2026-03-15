// Tuples
const user:(string | number)[]=["1",1];
let tuser:[string,number,boolean];

tuser=["h",2,false];

let rgb:[number,number,number]=[2555,1234,75];

type User=[number,string];

const newUser:User=[23,"admin"];
newUser[1]="hk.co"

//newUser.push(true); => Will give error bcz bool is not defined in User type.
