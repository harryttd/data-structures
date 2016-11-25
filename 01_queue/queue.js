/* jshint esversion:6 */
// Solution video: https://youtu.be/96J_nObHWe0?t=3

function Queue() {
  this.queue = [];
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(data) {
  this.queue[this.tail] = data;
  this.tail++;
};

// with amortized garbage collection
Queue.prototype.dequeue = function() {
  if (!this.size());
  if (this.head > 50) {
    this.queue = this.queue.slice(this.head);
    this.tail = this.tail - this.head;
    this.head = 0;
  }
  return this.queue[this.head++];
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

// IMPLEMENTATION WITH LINKED LIST
///////////////////////////////
function Queue() {
  this.queue = new LinkedList();
  this.counter = 0;
}

Queue.prototype.enqueue = function(data) {
  this.counter++;
  this.queue.addToTail(data);
};

Queue.prototype.dequeue = function() {
  if (!this.counter) return;
  this.counter--;
  return this.queue.removeHead();
};

Queue.prototype.size = function() {
  return this.counter;
};

// Linked List
function Node (value, previous, next) {
  this.value = value;
  this.next = next || null;
  this.previous = previous || null;
}

function LinkedList () {}

LinkedList.prototype.addToTail = function(data) {
  const newNode = new Node(data, this.tail);

  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;

  this.tail = newNode;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return;

  const oldTailNodeValue = this.tail.value;

  this.tail = this.tail.previous;
  if (this.tail) this.tail.next = null;
  else this.head = null;

  return oldTailNodeValue;
};

LinkedList.prototype.addToHead = function(data) {
  const newNode = new Node(data, null, this.head);

  if (this.head) this.head.previous = newNode;
  else this.tail = newNode;

  this.head = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return;

  const oldHeadNodeValue = this.head.value;

  this.head = this.head.next;
  if (this.head) this.head.previous = null;
  else this.tail = null;

  return oldHeadNodeValue;
};
