import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");

console.log("Primer nodo:", list.head());

const emptyList = new LinkedList();
console.log("Lista vacía:", emptyList.head());