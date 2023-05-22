class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;

    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;

        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    // pop(val) {
    //     if (!this.first) {
    //         return null;

    //     }
    //     if (this.size == 1) {

    //         this.first = null;
    //         this.last = null;
    //         this.size = 0;
    //         return temp;
    //     } else {
    //        var temp = this.first;
    //         this.first = this.first.next;

    //         --this.size;
    //         return temp;

    //     }
    // }
}
var stack = new Stack();
stack.push(20);
stack.push(50);
// stack.pop();
console.log(stack);
console.log('sdfsd');
