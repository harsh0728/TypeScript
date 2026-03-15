"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
score = true;
var harsh = { name: "Harsh", id: 1234 };
harsh = { username: "hk", id: 234 };
function getDbId(id) {
    console.log("Db Id is ".concat(id));
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
// array
var data = [1, 2, 3,];
var data2 = ["1", "2", "3"];
var data3 = [1, "2", 3, true, false];
