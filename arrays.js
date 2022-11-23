class MyArray{
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    // Delete the last element
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteItem(index) {
    // Delete a specific element
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    // Delete a specific element
    for (let i = index; i < this.length; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    // Adds an element to the beginning of the array
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return item;
  }
  shift() {
    // Removes the first element of the array
    const firstItem = this.data[0];
    this.shiftIndex(0);
    return firstItem;
  }
}

const arr = new MyArray();
console.log('================== PUSH');
console.log(arr.push('brandon'));
console.log(arr.push('adriana'));
console.log(arr.push('karen'));
console.log(arr.push('josé'));
console.log('================== GET');
console.log(arr.get(1));
console.log('================== POP');
console.log(arr.pop());
console.log('================== DELETE ITEM');
console.log(arr.deleteItem(1));
console.log('================== UNSHIFT');
console.log(arr.unshift('juana'));
console.log(arr.unshift('marlon'));
console.log('================== SHIFT');
console.log(arr.shift());
console.log('================== ARRAY');
console.log(arr);
