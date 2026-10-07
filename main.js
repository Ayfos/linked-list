import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");

console.log("Primer nodo:", list.head());  
console.log("Último nodo:", list.tail());  

const emptyList = new LinkedList();
console.log("Vacía - primer:", emptyList.head());   
console.log("Vacía - último:", emptyList.tail());   