import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");

console.log("Lista inicial:", list.toString());

console.log("Pop 1:", list.pop());
console.log("Lista después:", list.toString());

console.log("Pop 2:", list.pop());
console.log("Lista después:", list.toString());

console.log("Pop 3:", list.pop());
console.log("Lista después:", list.toString());

console.log("Pop 4 (vacía):", list.pop());