console.log("this is the best class ever!");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  Insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;

      this.length++;
      return this;
    }
  }
  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.tail;
      let newTail = current;

      while (current.next) {
        this.tail = newTail;
        this.tail.next = null;
      }

      this.length--;
      return current;
    }
  }
}
let linkedlist = new linklist();
console.log(linkedlist.Insert(39));
console.log(linkedlist.Insert(34));

console.log(linkedlist.Insert([6, 8, 9]));

console.log(linkedlist.Insert(79));
console.log(linkedlist.Insert({ name: "okus" }));
console.log(linkedlist.Insert(09));
console.log("");
console.log(linkedlist.length);
linkedlist.remove();
console.log("");
console.log(linkedlist.length);
console.clear();
