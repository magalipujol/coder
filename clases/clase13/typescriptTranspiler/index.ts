const listita:Array<number> = [1,2,3,4,5,6,7,8,9,10];

listita.map((x:number) => x*x).forEach((x:number) => console.log(x));

// node_modules/.bin/tsc ./index.ts -w