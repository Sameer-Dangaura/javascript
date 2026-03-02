//! array methods

// higher order methods

const numbers = [23, 4, 5, 676, 56]

//* looping array
//? forEach
// arr.forEach(callback)

const callBack = (value, index, arr) => {
    console.log(index, ":", value, "of", arr)
}

numbers.forEach(callBack)

console.log()

numbers.forEach((value,index,arr) =>{
    console.log(index, ":", value, "of", arr)
})

console.log()




//! transformation //* map
// arr.map(callback)
// X => Y, return new array

const result = numbers.map((value)=>{
    return value*2
})

console.log(numbers)
console.log(result)

// Or,
const result1 = numbers.map((value)=> value*2)
console.log(result1)


console.log()

//! filter
// arr.filter(callback)
// returns new array

const filtered = numbers.filter((value,index,arr)=>{
    if(value % 2 == 0){
        return value
    }
})
console.log(numbers)
console.log(filtered)

// Or,
const filtered1 = numbers.filter((value)=>value % 2 === 0)
console.log(filtered1)


// 
const index = numbers.findIndex((value)=>{
    if(value % 2 === 0){
        return value
    }
})

console.log(index)




// every / some
// return boolean
// const is_every_even = numbers.every((value)=> value % 2 === 0)
// OR
const is_every_even = numbers.every((value)=>{
    if(value % 2 === 0){
        return true
    }else{
        return false
    }
})
console.log(is_every_even)

const is_some_even = numbers.some((value)=> value % 2 === 0)
console.log(is_some_even)



//! reduce
// single value => final result
// array -> reduce -> single value
// array.reduce(callback)

const number = [23, 4, 5, 676, 56];
const sum = number.reduce((acc,value)=>{
    return acc = acc + value
},0)

console.log(sum)


// Q.
const students = [
    {
        name: 'Ram',
        roll: 10,
        std: 10,
        marks: [65, 30, 27, 57, 56],
    },
    {
        name: "Shyam",
        roll: 11,
        std: 10,
        marks: [65, 30, 27, 57, 56],
    },
    {
        name: "John",
        roll: 12,
        std: 10,
        marks: [50, 60, 78, 57, 75],
    },
];

// solution:
// 60 >= pass
// map
// reduce => avg calculate
// filter passes students
// map passed students => named array

const new_arr = students.map((student)=>{
    // console.log(student);
    const total_marks = student.marks.reduce((acc,mark)=>{
        return acc += mark
    },0)
    const avg = total_marks/student.marks.length;
    student['avg_mark'] = avg
    return student
})
console.log(new_arr);

// filter passed students
const passed_stds = new_arr.filter((value)=>{
    // console.log(value.avg_mark)
    if(value.avg_mark >= 60){
        // console.log(value.name);
        return value.name;
    }
})

console.log(passed_stds);

const passed_std_names = passed_stds.map((value)=>{
    return `${value.name} = ${value.avg_mark}`
})

console.log(passed_std_names);
