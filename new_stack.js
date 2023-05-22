class Node{
    constructor(value){
        this.value  = value;
        this.next  = null;

    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size  = 0;

    }
    push(val){
        var newNode = new Node(val);
        if(this.length ==0){
            this.first  = newNode;
            this.last = newNode;
        }else{
          var  temp = this.first;
            this.first =newNode;
            this.first.next = temp;
        }
       return ++this.size;
    }
    pop(){
        if(this.length==0){
            return null;
        }else if(this.length==1){
           var temp = this.first;
            this.first = this.last = null;
            this.size--;
            return temp.value;
        }else{
          var  temp = this.first;
            this.first = this.first.next;
            this.size--;

            return temp.value;
        }
    }

}
var stack = new Stack();
stack.push(20);
stack.push(50);
console.log(stack.pop());
console.log(stack);
console.log('sdfsd');
