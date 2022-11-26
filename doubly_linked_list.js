// 1 -- > 2 -- > 3 -- > 4 -- > 5 -- > null;

// Singly Linked List
// let singlyLinkedList = {
//   head: {
//     value: 0,
//     prev: null,
//     next: {
//       value: 1,
//       prev: [...],
//       next: {
//         value: 2,
//         prev: [...],
//         next: {
//           value: 3,
//           prev: [...],
//           next: {
  //           value: 4,
  //           prev: [...],
  //           next: null
  //         }
//         }
//       }
//     }
//   }
// }

class Node{
  constructor(value) {
    // Estructura de un nodo
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // agrega un nodo al final (tail) del singly linked list
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // agrega un nodo al inicio (head) del singly linked list
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value) {
    if (index >= this.length - 1) return this.append(value);
    const newNode = new Node(value);
    if (index > 0) {
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
      holdingPointer.prev = newNode;
      newNode.prev = firstPointer;
      newNode.next = holdingPointer;
      this.length++;
    }
    else this.prepend(value);

    return this;
  }
  remove(index) {
    index = index > this.length - 1 ? this.length - 1 : index;
    if (index > 0) {
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next.next;
      firstPointer.next = holdingPointer;
      holdingPointer.prev = firstPointer;
    }
    else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }
}

let myLinkedList = new MyDoublyLinkedList(1);

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(15));
console.log(myLinkedList.prepend(21));
console.log(myLinkedList.insert(1, 69));
console.log(myLinkedList.remove(1));
console.log(myLinkedList.remove(1));