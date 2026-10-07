// creo las clases para crear la lista enlazada
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

    // Añadir un nuevo nodo al principio de la lista
    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    // Convierte la lista a una cadena de texto
    toString() {
        if (this.head === null) {
            return "";
        }

        let result = "";
        let current = this.head;
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}

export { Node, LinkedList };