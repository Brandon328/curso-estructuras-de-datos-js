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
}

const arr = new MyArray();
console.log(arr.push('brandon'));
console.log(arr.push('adriana'));
console.log(arr.get(1));