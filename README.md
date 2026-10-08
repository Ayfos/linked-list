# Linked List

Implementación de una lista enlazada en JavaScript, desarrollada como parte del currículo de [The Odin Project](https://www.theodinproject.com/).

## ¿Qué es una lista enlazada?

Una lista enlazada es una estructura de datos formada por **nodos**, donde cada nodo contiene un valor y una referencia al siguiente nodo. A diferencia de los arrays, no tiene índices directos: para acceder a un elemento hay que recorrer la lista desde el principio.

## Estructura del proyecto

- `linkedList.js` — Contiene las clases `Node` y `LinkedList` con todos los métodos.
- `main.js` — Archivo de pruebas para verificar el funcionamiento.
- `package.json` — Configuración para usar módulos ES6 en Node.

## Clases

### `Node`

Representa un nodo individual de la lista.

- `value` — El valor almacenado (por defecto `null`).
- `nextNode` — Referencia al siguiente nodo (por defecto `null`).

### `LinkedList`

Representa la lista completa.

- `_head` — Referencia al primer nodo (propiedad interna).

## Métodos implementados

### Métodos básicos

| Método | Descripción |
|---|---|
| `append(value)` | Añade un nuevo nodo al final de la lista. |
| `prepend(value)` | Añade un nuevo nodo al principio de la lista. |
| `size()` | Devuelve el número total de nodos. |
| `head()` | Devuelve el valor del primer nodo (o `undefined` si está vacía). |
| `tail()` | Devuelve el valor del último nodo (o `undefined` si está vacía). |
| `at(index)` | Devuelve el valor del nodo en el índice dado (o `undefined` si no existe). |
| `pop()` | Elimina el primer nodo y devuelve su valor (o `undefined` si está vacía). |
| `contains(value)` | Devuelve `true` si el valor está en la lista, `false` si no. |
| `findIndex(value)` | Devuelve el índice del primer nodo con ese valor, o `-1` si no está. |
| `toString()` | Devuelve la lista como string: `( value ) -> ( value ) -> null`. |

### Crédito extra

| Método | Descripción |
|---|---|
| `insertAt(index, ...values)` | Inserta uno o varios nodos en la posición `index`. Lanza `RangeError` si el índice está fuera de los límites. |
| `removeAt(index)` | Elimina el nodo en la posición `index`. Lanza `RangeError` si el índice está fuera de los límites. |

## Cómo ejecutar

```bash
node main.js
```

## Ejemplo de uso

```javascript
import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("bird");
list.insertAt(1, "fish");

console.log(list.toString());
// ( bird ) -> ( fish ) -> ( dog ) -> ( cat ) -> null

console.log(list.size());           // 4
console.log(list.head());           // "bird"
console.log(list.tail());           // "cat"
console.log(list.at(2));            // "dog"
console.log(list.contains("cat"));  // true
console.log(list.findIndex("dog")); // 2

list.removeAt(1);
console.log(list.toString());
// ( bird ) -> ( dog ) -> ( cat ) -> null
```

## Aprendizajes

- Manipulación de punteros con `nextNode`.
- Recorrido de estructuras enlazadas con `while`.
- Diferencia entre propiedades y métodos (colisión `head` / `_head`).
- Uso de parámetros rest (`...values`).
- Manejo de errores con `throw new RangeError(...)`.
- Uso de módulos ES6 en Node (`import` / `export`).

## Recursos

- [The Odin Project - Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists)
- [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)