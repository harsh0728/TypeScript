"use strict";
// class User{
//     public email:string;
//     name:string;
//     private city:string=""
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    email;
    name;
    userId;
    _coureCount = 1;
    city = "";
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._coureCount;
    }
    set courseCCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._coureCount = courseNum;
    }
}
const harsh = new User("h@gmail.com", "Harsh", "1234");
//harsh.city="Delhi";
//# sourceMappingURL=index.js.map