class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.pre = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(size) {
    this.size = size;
    this.count = 0;
    this.hashMap = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.head.pre = null;
    this.tail.pre = this.head;
    this.tail.next = null;
  }
  deleteNode(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
  }
  addToHead(node) {
    node.next = this.head.next;
    node.next.pre = node;
    node.pre = this.head;
    this.head.next = node;
  }
  get(key) {
    let node = this.hashMap.get(key);
    if (node) {
      this.deleteNode(node);
      this.addToHead(node);
      return node.val;
    }
    return -1;
  }
  put(key, val) {
    let node = this.hashMap.get(key);
    if (node) {
      node.val = val;
      this.deleteNode(node);
      this.addToHead(node);
    } else {
      let newNode = new Node(key, val);
      this.hashMap.set(key, newNode);
      if (this.count < this.size) {
        this.count++;
        this.addToHead(newNode);
      } else {
        this.hashMap.delete(this.tail.pre.key);
        this.deleteNode(this.tail.pre);
        this.addToHead(newNode);
      }
    }
  }
}
