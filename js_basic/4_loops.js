//! loops
// {}

//! do while 
let i = 0
do{
    console.log(i)
    i++
}while(i <= 10)

console.log()

//! while
let j = 0
while(j <= 10){
    console.log(j)
    j++
}

console.log()

//! for
for(let i=0; i<=10; i++){
    console.log(i)
}

console.log()

//! control transfer statements
// break, continue


//Q. Print even number 1-10 using break or continue:
for(let i=0; i<=10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i)
}

