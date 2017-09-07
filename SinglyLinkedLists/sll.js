// Coding Dojo Algorithm Challenges
// Chapter 5 -- Linked Lists (pp. 59-69)

function Node(val){
	this.val = val;
	this.next = null;
}

function SLL(){
	this.head = null;

	this.insert = function(value){
		if (!this.head){
			this.head = new Node(value);
			return this;
		}

		var current = this.head;
		while(current.next){
			current = current.next;
		}

		current.next = new Node(value);
		return this;
	}

	this.printAll = function(){
		if (!this.head){
			console.log("Empty List");
			return this;
		}
		var current = this.head;
		var count = 1;
		while(current){
			console.log("Node " + count + ": " + current.val);
			current = current.next;
			count += 1;
		}
		return this;
	}

	this.addFront = function(value){
		if(!this.head){
			this.head = new Node(value);
			return this.head;
		}

		var tempNode = this.head;
		this.head = new Node(value);
		this.head.next = tempNode;
		return this.head;
	}

	this.contains = function(value){
		if(!this.head){
			console.log("Node not found")
			this.head = new Node(value);
			return this;
		}
		var current = this.head;
		while(current){
			if(current.val == value){
				console.log("Node exists");
				return true;
			}
			current = current.next;
		}
		console.log("Node not found");
		return false;
	}

	this.removeFront = function(){
		if(!this.head){
			return null;
		}
		this.head = this.head.next;
		return this;
	}

	this.front = function(){
		if(!this.head){
			return null;
		}
		return this.head.val;
	}
}

var sl1 = new SLL();

sl1.insert(5).insert(-3).insert(100).insert(20);

sl1.printAll();

sl1.addFront('rudy');

sl1.printAll();

sl1.removeFront();

sl1.printAll()