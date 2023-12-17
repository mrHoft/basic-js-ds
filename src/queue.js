const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *Там ещё есть reversed вариант. Я долго тупил
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else this.head = this.tail = node;

    return ++this.size;
  }

  dequeue() {
    if (!this.head) return null;
    const node = this.head;
    const next = this.head?.next;
    if (next) {
      this.head = next;
    } else this.tail = this.head = null;

    --this.size;
    return node.value;
  }
}

module.exports = {
  Queue,
};
