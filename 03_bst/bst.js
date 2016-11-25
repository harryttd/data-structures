/* jshint esversion:6 */ /* jshint -W097 */
'use strict';

function BinarySearchTree(value) {
  this.treeSize = 1;
  this.value = value;
}

BinarySearchTree.prototype.insert = function(value) {
  this.treeSize++;
  const newTree = new BinarySearchTree(value);
  const direction = value <= this.value ? 'left' : 'right';

  if (!this[direction]) this[direction] = newTree;
  else this[direction].insert(value);

  // LONGER WAY
	// this.treeSize++;
	// if(value <= this.value) {
	// 	if (!this.left) {
  //     this.left = new BinarySearchTree(value);
  //   } else {
  //     this.left.insert(value);
  //   }
	// } else {
  //   if (!this.right)
  //   this.right = new BinarySearchTree(value);
  //   else this.right.insert(value);
  // }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) return true;

  const direction = value <= this.value ? 'left' : 'right';
  if (this[direction]) return this[direction].contains(value);
  else return false;

  // Longer Way
  // if (value <= this.value && this.left) return this.left.contains(value);
  // else if (value > this.value && this.right) return this.right.contains(value);
  // else return false;
};

BinarySearchTree.prototype.depthFirstForEach = function(iterator, option) {
  if (option === 'pre-order') iterator(this.value);
  if (this.left) this.left.depthFirstForEach(iterator, option);
  if (!option || option === 'in-order') iterator(this.value);
  if (this.right) this.right.depthFirstForEach(iterator, option);
  if (option === 'post-order') iterator(this.value);

};

BinarySearchTree.prototype.breadthFirstForEach = function(iterator) {
  let queue = [this];
  let tree;

  while (queue.length) {
    tree = queue.shift();
    iterator(tree.value);
    if (tree.left) queue.push(tree.left);
    if (tree.right) queue.push(tree.right);
  }
};

BinarySearchTree.prototype.size = function() {
  return this.treeSize;
};
