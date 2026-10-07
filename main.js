import { Node, LinkedList } from './linkedList.js';

// Prueba 1: crear el nodo

const nodo = new Node("dog");
console.log("Nodo", nodo);

// Prueba 2: crear la lista enlazada
const lista = new LinkedList();
console.log("Lista", lista);

// Prueba 3: agregar nodos a la lista

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list. append("hamster");
list.append("snake");
list.append("turtle");
console.log(JSON.stringify(list, null, 2));


