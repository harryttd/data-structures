/* jshint esversion:6 */

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

function isFunc(input) {
  return typeof input === 'function';
}

LinkedList.prototype.search = function(value) {
  const correct = isFunc(value) ? value : (nodeValue) => {
    return nodeValue == value;
  };

  let currentNode = this.head;
  while (currentNode) {
    if (correct(currentNode.value)) return currentNode.value;
    else currentNode = currentNode.next;
  }
  return null;
};

// const linkedList = new LinkedList();
// linkedList.addToTail('first');
// linkedList.addToTail('second');
// linkedList.addToTail('third');
// linkedList.removeHead();
// console.log(linkedList);
