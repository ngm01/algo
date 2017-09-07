// Coding Dojo Algorithm Challenges
// Chapter 6 -- Queues and Stacks (pp. 73-79)


// Tues 9/5
function SLNode(value){
	this.val = value;
	this.next = null;
}

function SLQueue(val){
	this.head= null;
	this.tail = null;
	this.enqueue = function(val){
		if(this.head){
			this.head = new Node(val);
			this.tail = this.head;
			return this;
		}
		this.tail.next = new Node(val);
		this.tail = this.tail.next;
		return this;
	}

	this.dequeue = function(){
		if(!this.head){
			return this.head;
		}
		if (this.head === this.tail){
			var temp = this.head.val;
			this.head = this.head.next;
			return temp;
		}
	}

// Wed 9/6

	this.front = function(){
		return this.head.val;
	}

	this.contains = function(val){
		if(!this.head){
			return false;
		}
		var current = this.head;
		while(current){
			if(current.val === val){
				return true;
			}
			current = current.next;
		}
		return false;
	}

	this.isEmpty = function(){
		if(!this.head){
			return true;
		}
		else{
			return false;
		}
	}

	this.size = function(){
		var count = 0;
		var current = this.head;
		while current{
			count++;
			current = current.next;
		}
		return count;

	}
}

function compareQueues(q1, q2){
	if(q1.isEmpty() || q2.isEmpty()){
		console.log("At least one queue is empty");
		return [q1, q2];
	}
	if(q1.size() != q2.size()){
		console.log("Queues are of unequal length, cannot be identical");
		return [q1, q2];
	}
	var current1 = q1.head;
	var current2 = q2.head;

	while(current1 && current2){
		if(current1.val != current2.val){
			console.log("Queues are not equal");
			return [q1, q2];
		}
		current1=current1.next;
		current2=current2.next;
	}
	console.log("Queues are equal");
	return [q1. q2];
}


// Thurs 9/7
function ArrStack(){
	var arr = [];
	this.push = function(val){
		arr[arr.length] = val;
	}

	this.pop = function(){
		//I don't think this will work.
		arr.length -= 1;
	}

	this.top = function(){
		return arr[arr.length - 1];
	}

	this.contains = function(val){
		for(i=0; i<arr.length, i++){
			if(arr[i]===val){
				return true;
			}
			return false;
		}
	}

	this.size = function(){
		return arr.length;
	}

	this.isEmpty = function(){
		if(arr.length==0){
			return true;
		}
		else{return false;}
	}
}

function SLStack(){
	this.top = null;

	this.push = function(val){
		if(!this.top){
			this.top = new Node(val);
			return this;
		}
		var node = new Node(val);
		node.next = this.top;
		this.top = node;
		return this;
	}

	this.pop = function(){
		if(!this.top){
			return null;
		}
		else if(!this.top.next){
			var temp = this.top.val;
			this.top = null;
			return temp;
		}
		else{
			var temp = this.top.val;
			this.top = this.top.next;
			return temp;
		}
	}
}