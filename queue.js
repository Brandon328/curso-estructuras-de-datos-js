class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    // Agrega un elemento a la cola
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // Quita el primer elemento de la cola
    if (this.length > 0) {
      this.first = this.first.next;
      this.length--;
      return this;
    }
    else return undefined
  }
  peek() {
    // Retorn el primer elemento
    return this.length <= 0 ? undefined : this.first;
  }
}

const myQueue = new Queue();
