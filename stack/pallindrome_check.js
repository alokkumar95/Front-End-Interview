let word="raceca";

let stack =[];

let n = word.length;

for(let i=0;i<n;i++){
    stack.push(word[i]);
}

let rword="";

for(let i=word.length-1;i>=0;i--){
    rword+=stack[i];
}

if(word===rword){
    console.log("Pallindrome number",rword);
}
else{
    console.log("not pallindrome",rword);
}