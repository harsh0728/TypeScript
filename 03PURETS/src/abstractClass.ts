abstract class TakePhoto{
    constructor(
        cameraMode:string,
        filter:string
    ){}
    
    abstract getSepia():void
    getReelTime():number{
        return 8;
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter);
    }
    getSepia(): void {
        console.log("Sepia filter applied");
    }
}

const harsh=new Instagram("test","test",10);
harsh.getReelTime();
harsh.getSepia();