import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");

console.log("Lista inicial:", list.toString());


list.removeAt(1);  // eliminar "cat"
console.log("Después de removeAt(1):", list.toString());


list.removeAt(0);  // eliminar "dog" (el primero)
console.log("Después de removeAt(0):", list.toString());


// Probar el error
try {
    list.removeAt(10);
} catch (e) {
    console.log("Error capturado:", e.message);
}