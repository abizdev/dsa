class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	
	peek() {
		return this.first;
	}
	
	enqueue(value) {
		const newNode = new Node(value);
		
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		
		this.length++;
		return this;
	}
	
	dequeue() {
		if (!this.first) {
			return null
		}
		
		if (this.first === this.last) {
			this.last = null
		}
		
		this.first = this.first.next;
		this.length--;
		return this;
	}
}

const queue = new Queue();
queue.enqueue('user 1');
queue.enqueue('user 2');
queue.enqueue('user 3');

queue.peek();

queue.dequeue();
queue.dequeue();
queue.dequeue();
