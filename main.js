import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");

console.log("Índice 0:", list.at(0)); 
console.log("Índice 1:", list.at(1));  
console.log("Índice 2:", list.at(2));  
console.log("Índice 3:", list.at(3));  
console.log("Índice -1:", list.at(-1));  