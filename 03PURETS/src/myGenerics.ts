const score:Array<number> = [1,2,3,4];
const names:Array<string> = ["Harsh","John","Doe"];

function identityOne(val:boolean|number):boolean|number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}
function identityThree<Type>(val:Type):Type{
    return val;
}

function identityFour<T>(val:T):T{
    return val;
}
interface Bottle{
    brand:string,
    type:number
}
identityFour<Bottle>({brand:"Coke",type:1});

function getSearchProducts<T>(products:T[]):T{
    const myIndex=3
    if (products[myIndex]) return products[myIndex];
    //return products[myIndex]
    
}
getSearchProducts<string>(["a","b","c"]);

function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {valOne,valTwo};
}
anotherFunction<number,string>(3,"Hello");
anotherFunction<boolean,number>(true,4);
class Sellable<T>{
    public cart:T[]=[];

    addToCart(product:T){
        this.cart.push(product);
    }   
}

const sellable=new Sellable<string>();
sellable.addToCart("Product 1");
sellable.addToCart("Product 2");

interface quiz{
    name:string,
    type:string
}

interface course{
    name:string,
    author:string,
    subject:string
}

class sellableTwo<T>{
    public cart:T[]=[];
    addToCart(products:T){
        this.cart.push(products);
    }


}