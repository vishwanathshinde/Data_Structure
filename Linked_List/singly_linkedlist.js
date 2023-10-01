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
            let current = this.head
            while(current.next != null)
            {
              current = current.next
            }
            current.next = newNode(ele)
        }
    }

    insertFront(ele) 
    {
      // Create a new node with the given element
      let newnode = new newNode(ele);
      // Set the 'next' property of the new node to the current head of the linked list
      newnode.next = this.head;
      // Update the head of the linked list to be the new node
      this.head = newnode;
    }

    insertEnd(data) 
    {
      // Create a new node with the given data
      let newnode = new newNode(data);    
      // Set the current node to the head of the linked list
      let current = this.head;
      // Traverse the linked list until the last node is reached
      while (current.next != null) {
        current = current.next;
      }
      // Set the next pointer of the last node to the new node
      current.next = newnode;
    }

    insertInBetween(data, pos) 
    {
      // Create a new node with the given data and position
      let newnode = new newNode(data, pos);    
      // Start from the head of the linked list
      let temp = this.head;
      // Traverse the linked list until the desired position is reached
      for (let i = 1; i < pos - 1 && temp.next != null; i++) 
      {
        temp = temp.next;
      }
      // Insert the new node at the specified position
      newnode.next = temp.next;
      temp.next = newnode;
    }

    delFront() 
    {
      // Print a message indicating that an element is being deleted, along with the data of the element to be deleted.
      console.log("Element deleted: ", this.head.data);
    
      // Check if there is only one element in the list.
      if (this.head.next == null) 
      {
        // If there is only one element, set the head to null, indicating an empty list.
        this.head = null;
      } 
      else 
      {
        //If there is more than one element, i t sets this.head to the next element in the list, effectively removing the current front element.
        this.head = this.head.next;
      }
    }

    delEnd()
    {
      //initializes a temporary variable temp with the head of the linked list
      let temp = this.head
      // is a loop that traverses the linked list until it reaches the last node. In each iteration
      while(temp.next != null)
      {
        // sets q to the previous node before updating temp to the next node
        var secondLast = temp
        temp = temp.next
      }
      // breaks the link from the second-to-last node (q) to the last node (temp). This effectively removes the last node from the linked list.
      secondLast.next = null
      console.log("Element deleted: ", temp.data);
    }

    deleteInBetween(pos)
    {
      // Initializes a temporary variable temp with the head of the linked list. This variable will be used to traverse the linked list.
      let temp = this.head
      // traverse the linked list until it reaches the specified position (pos) or the end of the list (temp != null)
      for(let i=1; i<pos && temp != null; i++)
      {
        // In each iteration, it also keeps track of the previous node using the variable q.
        var previous = temp
        temp = temp.next
      }
      console.log("Element deleted: ", temp.data)
      // Updates the next pointer of the node before the specified position (previous.next). It now points to the node after the specified position (temp.next),
      // effectively bypassing the node at the specified position and excluding it from the linked list.
      previous.next = temp.next
    }

    display() 
    {
      if(this.head == null)
      {
        console.log("List is Empty !")
      }
      else
      {  
        let current = this.head
        while (current != null) 
        {
          console.log(current.data)
          current = current.next
        }
      }
    }
}

const list = new LinkedList()
list.create(90)
list.insertFront(10)
list.insertEnd(100)
list.insertInBetween(55,2)
list.delFront()
list.delEnd()
list.deleteInBetween(2)
list.display()