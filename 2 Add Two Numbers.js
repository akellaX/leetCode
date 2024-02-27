
var addTwoNumbers = function(l1, l2, carry = 0) {
    let left = 0;
    let node = null;
    if (l1 || l2) {
        let newVal;
        if (l1 && l2) {
            newVal = (l1.val + l2.val + carry) % 10;
            left = Math.floor((l1.val + l2.val + carry) / 10)
        } else {
            const nodeVal = l1?.val ?? l2?.val
            newVal = (nodeVal + carry) % 10;
            left = Math.floor((nodeVal + carry) / 10)
        }
        node = {
            val: newVal,
            next: addTwoNumbers(l1?.next, l2?.next, left === 0 ? 0 : 1)
        }
    }
    else {
        if (carry) {
            node = {
                val: carry,
                next: null,
            }
        }
    }
    return node;
};
