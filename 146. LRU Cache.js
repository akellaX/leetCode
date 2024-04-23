/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.size = 0;
    this.cache = {};
    this.head = {
        key:0,
        val: 0
    };
    this.tail = {
        key:0,
        val: 0
    };
    this.head.prev = this.tail;
    this.tail.next = this.head;
};

LRUCache.prototype.remove = function (node) {
    const nextNode = node.next;
    const prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}

LRUCache.prototype.insert = function (node) {
    const topNode = this.head.prev;
    topNode.next = node;
    node.next = this.head;
    this.head.prev = node;
    node.prev = topNode;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache[key];
    if (!node) {
        return -1;
    }
    this.remove(node);
    this.insert(node);

    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const existingNode = this.cache[key];
    const newNode = {
        key,
        val: value
    };
    if (existingNode) {
        this.remove(existingNode);
        this.insert(newNode);
        this.cache[key] = newNode;
        return;
    }
    this.insert(newNode);
    this.cache[key] = newNode;
    this.size++;

    if (this.size > this.cap) {
        const lru = this.tail.next;
        this.remove(lru);
        delete this.cache[lru.key]
        this.size--;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
