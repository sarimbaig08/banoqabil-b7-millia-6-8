// alert("File connected")


// let userName = prompt("Enter your UserName")
// console.log(userName)


// let num1 = +prompt("Enter Num1")
// let num2 = +prompt("Enter Num2")

// console.log(num1 % num2)

//BODMAS
// let number = 20 + 10 * (5-2) / 3 + (2-0)

// console.log(number)


//Assignment Operators

// let number = 100

// number += 50 // number = number +  50
// number -= 50 // number = number -  50
// number *= 50 // number = number *  50

// console.log(number)



// -> Legal and illegal variable names

      // illegal variables
      // #name special chac can't be used in start and middle except $ _
      // 2name can't use number in start
      // can't use js reserved words
      // can't give space between variable


//Conditional Statements

if (10 == 10) {
    console.log("Values are equal")
} else {
    console.log("Values are not equal")
    
}

let msg = "123"

if(msg == "Class is cancelled"){
    console.log("Will take off")
}else{
    console.log("Will go for class")
}


let percent = +prompt("Enter your percentage")

if(percent >= 80 && percent <= 99){
    console.log("Apply for Fast")
}else if(percent >= 70 && percent <= 79){
    console.log("Apply for Sir Syed")
}else if(percent >= 60 && percent <= 69){
    console.log("Apply for Paf Kiet")
}else if(percent >= 50 && percent <= 59){
    console.log("Apply for IQRA")
}
else{
    console.log("Pharai chordonga")
}
