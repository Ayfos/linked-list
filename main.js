import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.prepend("bird");
list.prepend("fish");

console.log(list.toString());


