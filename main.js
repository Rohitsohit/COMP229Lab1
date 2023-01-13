import { halfof,multiplyof } from "./first.js";
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';
 
console.log("halfof : "+halfof(40));
console.log("multiplyof : "+multiplyof(4,16));

doSomething();


console.log(flag);
touch();
console.log(flag);