export const Util = {
    add: (x: number = 0,y:number = 0) => {        
        const sum = x+y;
        Util.log('add: result' + sum);
        return sum;
    },
    postiveSub: (x: number, y:number) => {
        const result = x-y;
        const finalResult = result < 0 ? 0 : result; 
        Util.log('postiveSub: result' + finalResult);
        return finalResult;
    },
    log: (msg:string) => {
        console.log(msg);
    }
};
