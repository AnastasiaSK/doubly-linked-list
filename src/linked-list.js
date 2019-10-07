const Node = require("./node");

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    let newNode = new Node(data);
    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
      newNode.prev = null;
      newNode.next = null;
    } else {
      newNode.prev = this._tail;
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this.length += 1;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  nodeAt(index) {
    let current = this._head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let current = this._head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  insertAt(index, data) {
    let newNode = new Node(data);
    let after = this.nodeAt(index);
    let before = null;

    if (after) {
      before = after.prev;
      after.prev = newNode;
    }

    if (before) {
      before.next = newNode;
    }

    newNode.prev = before;
    newNode.next = after;

    this.length += 1;
    return this;
  }

  isEmpty() {
    if (this._head === null) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    if (this._tail && this._head) {
      this._head.data = null;
      this._tail.data = null;
    }
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    let current = this.nodeAt(index);

    if (current == this._tail && current == this._head) {
      this._head = null;
      this._tail = null;
    } else if (current == this._head) {
      this._head = this._head.next;
      this._head.prev = null;
      this.length = this.length - 1;
    } else if (current == this._tail) {
      this._tail = this._tail.prev;
      this._tail.next = null;
      this.length = this.length - 1;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.length = this.length - 1;
    }
    return this;
  }

  reverse() {
    let termContainer = null;

    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      termContainer = this.nodeAt(i).data;
      this.nodeAt(i).data = this.nodeAt(this.length - i - 1).data;
      this.nodeAt(this.length - i - 1).data = termContainer;
    }
    return this;
  }

  indexOf(data) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }
}

module.exports = LinkedList;
