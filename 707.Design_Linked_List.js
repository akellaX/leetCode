
var MyLinkedList = function() {
    this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let head = this.head;
    while (head) {
        if (i === index) {
            return head.val;
        }
        i++;
        head = head.next;
    }
    return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newVal = {
        val,
        next: this.head,
    }
    this.head = newVal;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let head = this.head;
    if (!head) {
        this.addAtHead(val);
        return;
    }
    while (head.next) {
        head = head.next;
    }
    head.next = {
        val,
        next: null,
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let i = 0;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    let head = this.head;
    while (head) {
        if (i === index - 1) {
            const newVal = {
                val,
                next: head.next
            }
            head.next = newVal;
            break;
        }
        i++;
        head = head.next;
    }
};

MyLinkedList.prototype.log = function() {
    let head = this.head;
    while (head) {
        console.log('|', head);
        head = head.next;
    }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let i = 0;
    let head = this.head;
    if (index === 0) {
        this.head = head.next;
    }
    let newNextNode;
    while (head) {
        if (i === index) {
            newNextNode = head.next;
            break;
        }
        i++;
        head = head.next;
    }
    i = 0;
    head = this.head;
    while (head) {
        if (i === index - 1) {
            head.next = newNextNode;
            break;
        }
        i++;
        head = head.next;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
