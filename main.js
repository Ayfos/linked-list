import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

// Añadir elementos
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("bird");

console.log("Lista:", list.toString());
console.log("Tamaño:", list.size());
console.log("Primero:", list.head());
console.log("Último:", list.tail());
console.log("En índice 1:", list.at(1));
console.log("¿Contiene 'cat'?", list.contains("cat"));
console.log("Índice de 'cat':", list.findIndex("cat"));

// Eliminar el primero
console.log("\nPop:", list.pop());
console.log("Lista:", list.toString());

// Insertar en medio
list.insertAt(1, "fish", "snake");
console.log("Después insertAt:", list.toString());

// Eliminar en medio
list.removeAt(2);
console.log("Después removeAt(2):", list.toString());