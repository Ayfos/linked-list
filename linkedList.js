// creo las clases para crear la lista enlazada
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
    }

    // Agrega un nuevo nodo al final de la lista
    append(value) {
        const newNode = new Node(value);

        if (this._head === null) {
            this._head = newNode;
            return;
        }

        let current = this._head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // Añadir un nuevo nodo al principio de la lista
    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this._head;
        this._head = newNode;
    }

    // Convierte la lista a una cadena de texto
    toString() {
        if (this._head === null) {
            return "";
        }

        let result = "";
        let current = this._head;
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }

    //Devolver el número total de nodos de la lista

    size() {
        let count = 0;
        let current = this._head;

        while(current !== null) {
            count ++;
            current = current.nextNode;
        }
        return count;
    }

    //Devolver el valor del primer nodo de la lista, si la lista está vacía es undefined

    head() {
        if (this._head === null) {
            return undefined;
        }
        return this._head.value;
    }

    //Devolver el valor del último nodo de la lista, si la lista está vacía es undefined

    tail() {
        if (this._head === null) {
            return undefined;
        }

        let current = this._head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current.value;
    }

    // devuelve el valor del nodo en el índice indicado, si no existe devuelve undefined

    at(index) {
        if (index < 0) {
            return undefined;
        }

        let current = this._head;
        let i = 0;
        while(current !== null) {
            if (i === index) {
                return current.value;
            }
            current = current.nextNode;
            i++;
        }
        return undefined;
    }

    // elimina el primer nodo de la lista, si la lista está vacía es undefined

    pop() {
        if(this._head === null) {
            return undefined;
        }
        const value = this._head.value;
        this._head = this._head.nextNode;
        return value;
    }

}

export { Node, LinkedList };