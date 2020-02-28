/* Implement a Queue datastructuresing two stacks.
Do not craete an array inside of the "Queue class
Queue should implement the methods 'add', 'remove' and peek' 
For a reminder on what each method  does, look back at the queue exercise
--Examples
const q = new Queue();
q.add(1);
q.add(2);
q.peek(); // retruns 1
q.remove() // returns 1
q.remove() // returns 2

*/

const Stack = require('./stack');

class Queue { 
constructor() {
this.first = new Stack();
this.second = new Stack();
}
 add(record) {
	 this.first.push(record)
 }
 remove() {
	 while (this.first.peek()) {
		 this.second.push(this.first.pop())
	 }
  const record = this.second.pop()
  while (this.second.peek()) {
	  this.first.push(this.second.pop())
	  
 }
return record;
 }
 peek() {
	 while (this.first.peek()) {
		 this.second.push(this.first.pop())
}
 }
 }
const q = new Queue();
q.add(1);
q.add(2);
q.add(3) ;
q.peek() ;
q.remove();
q.remove();
/*q.remove();
*/
q.peek() ;
console.log(q);