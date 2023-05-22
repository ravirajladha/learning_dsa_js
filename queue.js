class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
        0
    }
    enqueue(value){
        const newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    dequeue(){
if(this.size==0){
    return null;
}else if(this.size==1){
    const value = this.first.value;
    this.first = null;
    this.last = null;
    this.size--;
    return value;
}else{
    const value = this.first.value;
    this.first = this.first.next;
    this.size--;
    return value;
}
    }
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(20);
queue.dequeue();
console.log(queue);