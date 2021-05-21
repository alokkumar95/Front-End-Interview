
// Creates a stack

var stack = function(){
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Remove an element from the top of the stack
    this.pop = function(){
        if(this.count==0) return undefined;
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new stack();
console.log(myStack.peek())

const word="alok";
let n = word.length;
for(let i=0;i<n;i++){
    myStack.push(word[i]);
}

let rword="";

for(let i=word.length-1;i>=0;i--){
    rword+=myStack.pop();
}

if(word===rword){
    console.log("Pallindrome number",rword);
}
else{
    console.log("not pallindrome",rword);
}