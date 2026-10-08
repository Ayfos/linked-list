import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log("Inicial:", list.toString());
// ( 1 ) -> ( 2 ) -> ( 3 ) -> null

list.insertAt(1, 10, 11);
console.log("Después insertAt(1, 10, 11):", list.toString());
// ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null

list.insertAt(0, 100, 200);
console.log("Después insertAt(0, 100, 200):", list.toString());
// ( 100 ) -> ( 200 ) -> ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null

list.insertAt(list.size(), 99);
console.log("Después insertAt(size, 99):", list.toString());
// ( 100 ) -> ( 200 ) -> ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> ( 99 ) -> null

try {
    list.insertAt(100, 5);
} catch (e) {
    console.log("Error capturado:", e.message);
}