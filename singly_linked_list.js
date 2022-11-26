// 1 -- > 2 -- > 3 -- > 4 -- > 5 -- > null;

// Singly Linked List
// let singlyLinkedList = {
//   head: {
//     value: 0,
//     next: {
//       value: 1,
//       next: {
//         value: 2,
//         next: {
//           value: 3,
//           next: {
  //           value: 4,
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
  }
}

class MySinglyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // agrega un nodo al final (tail) del singly linked list
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // agrega un nodo al inicio (head) del singly linked list
    const newNode = new Node(value);
    newNode.next = this.head;
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
    if (index > this.length - 1) return this.append(value);
    const newNode = new Node(value);
    if (index > 0) {
      const firstPointer = this.getTheIndex(index - 1);
      const holdingPointer = firstPointer.next;
      firstPointer.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
    else this.prepend(value);

    return this;
  }
}

let myLinkedList = new MySinglyLinkedList(1);

console.log(myLinkedList.append(5));
console.log(myLinkedList.append(15));
console.log(myLinkedList.prepend(21));
console.log(myLinkedList.insert(1, 69));