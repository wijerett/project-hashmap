import { hash } from "./hash.js";
import { HashMap } from "./hash.js";

console.log(hash("John"));
console.log(hash("Martha"));

const test = new HashMap()

test.set('apple', 'red');
test.set('poop', 'brown');
console.log(test.buckets);
// able to add to my hash map with test.set but still need to 
// run values through hash function