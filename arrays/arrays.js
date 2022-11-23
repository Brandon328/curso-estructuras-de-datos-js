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
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteItem(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
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
console.log('================== ARRAY');
console.log(arr);
