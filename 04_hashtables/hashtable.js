/* jshint esversion:6 */ /* jshint -W097 */
'use strict';

function HashTable(size) {
  this.buckets = new Array(size || 35);
  this.numBuckets = this.buckets.length;
}

HashTable.prototype.hash = function(str) {
  let charCodeSum = 0;

  str.split('').forEach((letter) => {
    charCodeSum += letter.charCodeAt();
  });

  return charCodeSum % this.numBuckets;
};

HashTable.prototype.set = function(key, value) {
  if (typeof key !== 'string') throw TypeError('Keys must be strings');

  let hashKey = this.hash(key);
  if (!this.buckets[hashKey]) this.buckets[hashKey] = {};

  this.buckets[hashKey][key] = value;
};

HashTable.prototype.get = function(key) {
  let hashKey = this.hash(key);
  return this.buckets[hashKey][key];
};

HashTable.prototype.hasKey = function(searchKey) {
  let hashKey = this.hash(searchKey);
  return !!this.buckets[hashKey][searchKey];
};
