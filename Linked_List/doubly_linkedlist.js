class newNode
{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
}

class LinkedList 
{
    constructor()
    {
        this.head = null
    }

    create(ele)
    {
        if(this.head == null)
        {
            this.head = new newNode(ele)
        }
        else
        {
            let temp = this.head
            while(temp.next != null)
                temp = temp.next
            temp.next = newNode(ele)
        }
    }

    display() {

        let temp = this.head
        while (temp != null) {
          console.log(temp.data)
          temp = temp.next
        }
    }
}

const list = new LinkedList()
list.create(3)
list.display()