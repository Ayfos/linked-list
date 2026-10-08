import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("cat");  // duplicado a propósito

console.log("findIndex dog:", list.findIndex("dog"));       
console.log("findIndex cat:", list.findIndex("cat"));       
console.log("findIndex parrot:", list.findIndex("parrot")); 
console.log("findIndex fish:", list.findIndex("fish"));     