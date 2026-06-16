class Node {
	constructor(value) {
		this.right = null;
		this.left = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	insert(value) {
		if (!this.root) {
			this.root = new Node(value);
			return this;
		}
		
		if (this.root === value) {
			return this;
		}
		
		const newNode = new Node(value);
		let currentNode = this.root;
		
		while (true) {
			if (currentNode.right && currentNode.value < value) {
				currentNode = currentNode.right;
			} else if (currentNode.left && currentNode.value > value) {
				currentNode = currentNode.left;
			} else {
				break;
			}
		}
		
		if (currentNode.value < value) {
			currentNode.right = newNode;
		} else {
			currentNode.left = newNode;
		}
		
		return this;
		
	}
	
	lookup(value) {
		if (!this.root) {
			return false;
		}
		
		let currentNode = this.root;
		
		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}
			
			if (currentNode.value < value) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}
		
		return false;
	}
}

const tree = new BinarySearchTree();

console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(20));
console.log(tree.insert(1));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(179));

// console.log('lookup', tree.lookup(20));
console.log('lookup', tree.lookup(5));
console.log('lookup', tree.lookup(179));

/*
*       9
*    4      20
*  1   6   15  179
*/
