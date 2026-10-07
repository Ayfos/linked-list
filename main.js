import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");

console.log("Tamaño:", list.size());  

const emptyList = new LinkedList();
console.log("Tamaño vacía:", emptyList.size());  