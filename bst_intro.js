class Node{
    constructor(value){
        this.value =value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root==null){
            this.root =   newNode;
            return this;
        }else{
          var current = this.root;
          while(true){
            if(value == current.value){
                return undefined;
            }
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left;
                }
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }else{
                    current   = current.right;
                }
            }
          }
        }
    }

    find(value){
        if(this.root==null) return false;
        var current = this.root;
        var found = false;
        while(!found && current){
            if(value<current.value){
                current = current.left;
            }else if(value>current.value){
                current = current.right;
            }else{
               return true
            }
        }
      return false
    }
    printElements() {
        var arr = [];
        this.inOrderTraversal(this.root, arr);
        console.log(arr);
      }
      
      inOrderTraversal(node, arr) {
        if (node !== null) {
          this.inOrderTraversal(node.left, arr);
          arr.push(node.value);
          this.inOrderTraversal(node.right, arr);
        }
      }
      
}


//        10
//       6  13
//     2 7 11 14

// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(13);
// tree.insert(2);
// tree.insert(7);
// tree.insert(11);
// tree.insert(14);
// console.log(tree)

// Create a new binary search tree
var tree = new BinarySearchTree();

// Insert values into the tree
tree.insert(10);
tree.insert(6);
tree.insert(13);
// tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(14);

// Print all elements of the tree
tree.printElements();
// console.log(tree.find(11110))
