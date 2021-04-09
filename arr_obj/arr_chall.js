const { count } = require("node:console")

let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// Console.log a sub array containing only J names

let res = start.filter((name) => {
    return name[0] === "J"
})

console.log(res)

console.log(start.filter(name => name[0]==="J"))

let newArr = []
for(let i =0; i< start.length; i++){
    if(start[i][0] === "J"){
//    if(start[i].startsWith("J")){
        newArr.push(start[i])
    }
}

console.log(newArr)

//Find the average of all the students grades

let students = [
    {
        name: 'Viseth',
        grade: 4.0
    },
    {
        name: "Bill",
        grade: 4.0
    },
    {
        name: 'Jackie',
        grade: 2.0
    },
    {
        name: "Eli",
        grade: 3.0
    },
    {
        name: "Zach",
        grade: 2.6
    },
]

let total=0
for(let student of students){
    console.log(student.grade)
    total += student.grade
}

let average = total / students.length
console.log(average)

// 2
let total2 = 0
students.forEach(s => total2 += s.grade)
let average2 = total2 / students.length
console.log(average2)

console.log(
    students.map(s => s.grade).reduce((gpa, sg) => gpa += sg) / students.length
)
console.log(
    students.reduce((gpa, student) => gpa += student.grade, 0) / students.length
)