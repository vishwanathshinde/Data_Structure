// Vishwanath Manik Shinde
// 2301179

class PQueue
{
  constructor () 
  {
    this.front = null
    this.rear = null
  }

  insert(ele,pri)
  {
	    var node = new newNode(ele,pri)
	    if(this.front == null) 
	    {
        this.front = node
        this.rear = node
	    }
	    else
      {
        var temp = this.front
        var prev=null
	      while((temp != null) && (temp.pri <= pri))
	      {
	          prev=temp
	    	    temp=temp.next
	      }
	    	node.next = temp
	    	if(prev!=null)
	    	    prev.next = node
		    else
		      this.front=node
		    if(node.next==null)
		      this.rear=node
	    	
      }

  }

  del()
  {
	    if(this.front==null)
		    console.log("Queue Empty")
	    else
	    {
	      var temp=this.front
		    console.log("Deleted element is: " + temp.data)
		    this.front=this.front.next
		    temp=null
	    }
		  if(this.front==null)
			  console.log("Now Queue Empty")

  }

  display()
  {
    
      var temp=this.front
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
  
}
  
class newNode 
{
  constructor (data, pri, next) 
  {
    this.data = data
    this.pri = pri
    this.next = null
  }

}
const front = new PQueue()
front.insert(10,3)
front.insert(20,8)
front.insert(30,5)
front.insert(40,1)
front.insert(50,15)
console.log("After INSERT...")
front.display()
front.del()
console.log("After DELETE...")
front.display()
front.del()
console.log("After DELETE...")
front.display()
