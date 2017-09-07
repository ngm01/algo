function SList(){
	this.head = null;

	this.copyList = function(){
		var newSL = new SList();
		newSL.head = new Node(this.head.val);
		if (!this.head.next){
			return newSL;
		}
		else{
			var current = this.head.next;
			var newNode = newSL.head;
			while{current}{
				newNode.next = new Node(current.val);
				current = current.next;
				newNode = newNode.next;
			}
			return newSL;
		}
	}


	this.filter = function(hi, low){
		if (!this.head){
			return null;
		}

		var current = this.head;
		var newSL = new SList();

		while (current){
			if (current.val < hi && current.val > low){
				if(!newSL.head){
					newSL.head = new Node(current.val);
					var newNode = newSL.head;
				}
				else{
					newNode.next = new Node(current.val);
					newNode = newNode.next;
				}
			}
			current = current.next;
		}
		return newSL;
	}

}