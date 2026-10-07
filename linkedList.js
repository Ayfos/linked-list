//creo las clases para crear la lista enlazada
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // Agrega un nuevo nodo al final de la lista
    append(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }
}
export { Node, LinkedList };