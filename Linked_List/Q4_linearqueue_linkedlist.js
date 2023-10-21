// Vishwanath Manik Shinde
// 2301179

class Queue
{
  constructor () 
  {
    this.front = null
    this.rear = null
  }

  insert(ele)
  {
	    var node = new newNode(ele)
	    if(this.front==null)							
	      this.front=node
	    else
		    this.rear.next=node
	    this.rear=node
  }

  del()
  {
	    if(this.front==null)
		    console.log("Queue Empty")
	    else
	    {
	      var temp=this.front
		    console.log(temp.data)
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
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}
const front = new Queue()
front.insert(10)
front.insert(20)
front.insert(30)
front.insert(40)
front.insert(50)
console.log("After INSERT...")
front.display()
front.del()
console.log("After DELETE...")
front.display()
front.del()
console.log("After DELETE...")
front.display()
