
// const array = ['apples', 'oranges', 'bananas']
// linked list: apples --> oranges --> bananas
//
// apples
// 8976 --> oranges
//          7867    --> bananas
//                      3455

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value) {
        if (index === 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);

        const nextNode = leader.next;

        leader.next = newNode;
        newNode.next = nextNode;

        this.length++;
        return this;
    }

    remove(index) {
        if (index === 0) return this.head = this.head.next;
        if (index >= this.length) return this.tail = this.tail.next;

        const leader = this.traverseToIndex(index - 1);
        const removedNode = leader.next;

        leader.next = removedNode.next;
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}


const list = new LinkedList('apples');

list.append('oranges');
list.append('bananas');
list.append('pineapples');
list.prepend('kiwi');
list.insert(3, 'mango');
list.remove(1);

console.log(list.printList())



