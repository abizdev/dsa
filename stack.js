class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// stack (linked list implementation)
class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0;
	}
	
	peek() {
		return this.top;
	}
	
	push(value) {
		const newNode = new Node(value);
		
		if (!this.top) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const currentNode = this.top;
			this.top = newNode;
			this.top.next = currentNode;
		}
		
		this.length++;
		return this;
	}
	
	pop () {
		if (!this.top) return null;
		if (!this.top.next) {
			this.top = null;
			this.bottom = null;
			this.length = 0;
			return this;
		}
		
		this.top = this.top.next 
		
		this.length--;
		return this;
	}
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.peek()

stack.pop()
stack.pop()
stack.pop()

console.log(stack);

