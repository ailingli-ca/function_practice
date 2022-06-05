// Add demo
function add (a,b) {
    const total = a + b;
    return total;
}

console.log(add(4,5));

let total = function add (a,b){
    sum = a+b;
    return sum
}
console.log(total(10)); //show NaN

// Rude Bot
function insult (a) {
    let i = parseInt(Math.random()*3); 
    if (i === 0) {
        return a+ ", you doofus!";
    } else if (i === 1) {
        return `${a}, be happy!`;
    } else {
        return `${a}, come here!`;
    }
    
}
console.log(insult("Bob"));

// Count Letters
function occurencesOf (char, str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        
        if (char === str[i]){
            count = count + 1;
        }             
    }
    return count;   
}
console.log(occurencesOf("l", "hello world"));
console.log(occurencesOf(" ", "bob likes tea"));
console.log(occurencesOf("c", "this is this"));