class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(value)
    {
        const newNode = {value: value, next: null};
        if(this.tail)
        this.tail.next = newNode;
        this.tail = newNode;
        if(!this.head)
        this.head = newNode;
    }

    prepend(value){
        const newNode = {value: value, next: this.head};
       this.head = newNode; 
       if(!this.tail)
       this.tail = newNode;       
    }
    print(){
        let temp = this.head;
        while(temp)
        {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

const list1 = new LinkedList();

list1.append(1);
list1.append(2);
list1.append(4);
list1.append(7);
list1.append(11);
list1.append(16543);
list1.append(0909);
list1.prepend("john");
list1.prepend("thomas");

list1.print();

