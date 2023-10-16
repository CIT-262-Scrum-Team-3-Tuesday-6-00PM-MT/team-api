//Michael Anderson
//Brother Jensen
//CIT 262
//16 October 2023
//Hello World Program

import sayHello from "../utils/helloworld.mjs";
import assert from 'assert';

it("Tests Hello World", ()=>{

const hello = sayHello();

assert.equal(hello,"hello");

})