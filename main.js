import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");

console.log("¿Contiene 'cat'?", list.contains("cat"));     
console.log("¿Contiene 'dog'?", list.contains("dog"));     
console.log("¿Contiene 'parrot'?", list.contains("parrot")); 
console.log("¿Contiene 'fish'?", list.contains("fish"));  
console.log("¿Contiene 'Dog'?", list.contains("Dog"));     