/* 
For a range of numbers(0..100)
    if the number is div evenly by 3
    3 -> fizz
    5 -> buzz
    3 & 5 -> fizzBuzz
    otherwise -> number

*/



let i = 1

while(i<=100){
    console.log(i);
    i++
}

for(let i =1; i<=100; i++){
    if(i % 3 == 0 && i%5==0){
        console.log('fizzBuzz')
    } else if(i %3 == 0){
        console.log('fizz')
    } else if(i%5 ==0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}

let i =1
while(i<=100){
    if(i%3==0 && i%5 ==0){
        console.log('fizzBuzz')
    } else if(i%3==0){
        console.log('fizz')
    } else if(i%5==0){
        console.log('buzz')
    } else {
        console.log(i)
    }
    i++
}

let i =1
while(i<=100){
    switch(change){

    }
}


for(let i=0; i<=100; i++){
    if(i%3==0 && i%5==0){  // if(i% 15 ===0){
        console.log('fizzbuzz')
    } else if(i%5==0){
        console.log('buzz')
    } else if(i%3==0){
        console.log('fizz')
    } 
}

for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){  // if(i% 15 ===0){
        console.log('fizzbuzz')
    } else if(i%5==0){
        console.log('buzz')
    } else if(i%3==0){
        console.log('fizz')
    } else {
        console.log(i)
    }
}

// Silver if you solve it with a while loop and switch
let x=1
while(x<=100){
    switch(true){
        case x%15 ==0:
            console.log('fizzBuzz')
            break;
        case x%5 ==0:
            console.log('fizz')
            break;
        case x%3 ==0:
            console.log('buzz')
            break;
        default:
            console.log(x)
    }
    x++
}

// Gold if you solve with a for loop and ternaries

for(let z=1; z<=100; z++){
    (z%3==0 && z%5==0)  ?    console.log('fizzbuzz')
    : (z%5==0)    ?    console.log('buzz')
    : (z%3==0)    ?    console.log('fizz')
    : console.log(z)
    
}

for
if 
if
else

else if
else 