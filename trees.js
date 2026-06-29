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
	
	remove(value) {
		if (!this.root) {
			return false;
		}
		
		let currentNode = this.root ;
		let parentNode = null;
		
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if  (value === currentNode.value ) {
			// we have a match
			
			// 	OPTION 1: no right child
				if (!currentNode.right) {
					if (!parentNode) {
						this.root = currentNode.left;
					} else {
						
						// if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;
							
						// 	if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
						
					}
					
				// 	OPTION 2: right child which doesnt have a left child
				} else if (!currentNode.right.left) {
					if (!parentNode) {
						this.root = currentNode.left;
					} else {
						currentNode.right.left = currentNode.left;
						
						// if parent > current value, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;
							
							// 	if parent < current value, make right  child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}
					
				// 	OPTION 2: right child has a left child
				} else {
				
				// 	find the Right child's most left child
					let leftMost = currentNode.right.left
					let leftMostParent = currentNode.right;
					while (!leftMost.left) {
						leftMostParent = leftMost;
						leftMost = leftMost.left
					}
					
				// 	parent's left subtree now is leftMost's right subtree
					leftMostParent.left = leftMost.right;
					leftMost.left = currentNode.left;
					leftMost.right = currentNode.right;
					
					if (!parrentNode) {
						this.root = leftMost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftMost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftMost;
						}
					}
				}
				
				return true;
			}
		}
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
