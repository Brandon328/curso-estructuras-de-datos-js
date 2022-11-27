//       10
//   4         20
// 2   8    17    170


class Node{
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree{
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        }
        else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }
  search(value) {
    let currentNode = this.root;
    while (true) {
      if (value == currentNode.value) break;
      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return currentNode;
  }
}

const mytree = new BinarySearchTree();