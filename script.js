
//ARRAY METHODS

// CONVERT TO STRING
let A = ["sam", "ram", "Lam"];
document.getElementById("collection").innerHTML = A.toString();

let values=[1,2,3,4];
console.log(values)
let B=values.toString(); //converts the array to string
console.log(B,typeof B)

let c=values.join("_&_")
console.log(c)

values.pop() //removes the element from the array
values.push(3,2) //adds the element to the array

let r=values.pop() //removes 2
console.log(r)
console.log(values)

values.shift() //removes the frst element
console.log(values)

values.unshift(2) //adds elements at start
console.log(values)

let num=[1,2,3,4]
delete num[1] 
console.log(num)
console.log(num.length) //after deleting array length will be same


//to concatinate
let num1=[1,2,3,4]
let num2=[5,6,7,8]
let numbers=num1.concat(num2)

//sorting method

let compare=(a,b)=>{
    return b-a;   // in ascending or descending
}
let S=[9,4,8,0,34]
S.sort(compare)     //sort alphabatically not in ascending


A.reverse()
console.log(A)
let a=[1,2,,5]
a.push(33)
let b=a.toString()
console.log(b)

//SPLICE AND SLICE

let val=[1,2,3,4,5,6,7,8,]
val.splice(2,1,34)   //in 2nd index added 1 value"34"
console.log(val)

 let newval=val.slice(3)
console.log(newval)

let name1="deepu";
let length=name1.length

let L=name1.toUpperCase
console.log(name1.toUpperCase)


//replace 
let letters="sam"
let  newletters=letters.replace("sam","ram")

let plans="ASAS"+"BAS"+"CAS"
console.log(plans[0])
console.log(plans[1])
console.log(plans[2])
console.log(plans[7])