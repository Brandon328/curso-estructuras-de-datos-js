class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
  hashMethod(key){
    let hash = 0;
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    // si no existe el key retorna undefined
    return undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key) {
          const keyValue = currentBucket[i];
          currentBucket.splice(i, 1);
          return keyValue;
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    const keys = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let keyValue of bucket) {
          keys.push(keyValue[0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
console.log('=========== SET');
console.log(myHashTable.set('brandon', 22));
console.log(myHashTable.set('kevin', 22));
console.log(myHashTable.set('alejandra', 22));
console.log(myHashTable.set('jose', 22));
console.log(myHashTable.set('danilo', 18));
console.log('=========== GET');
console.log(myHashTable.get('danilo'));
console.log(myHashTable.get('andrea'));
console.log('=========== DELETE');
console.log(myHashTable.delete('danilo'));
console.log('=========== GET ALL KEYS');
console.log(myHashTable.getAllKeys());
console.log('=========== HASH TABLE');
console.log(myHashTable.data);
