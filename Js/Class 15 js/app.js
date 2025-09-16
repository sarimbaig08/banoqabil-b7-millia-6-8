// let userNames = ["sarim","yasir","nagori","haider","habib"]

// console.log(userNames)
// console.log(userNames[4])

// let fruits = ["mango","strawberry","pineapple"]

//add or remove values from end

// fruits.push("watermelon")
// fruits.pop()

//add or remove values from start

// fruits.unshift("starfruit")
// fruits.shift()

// console.log(fruits)

// let userNames = ["sarim","yasir","nagori","haider","habib","ahsan","iqbal"]
// console.log(userNames)

//Slice: To pick a range of values from an array
// let selectedUsers = userNames.slice(1,-1)

//Splice: (index, how many values to delete, values to add)

// userNames.splice(0,0,"mirza","baig")

// console.log(userNames)


// let typeArray = ["name",20,null,undefined,true,false]
// console.log(typeArray)




let userNames = ["sarim","yasir","nagori","haider","yasir","habib","ahsan","iqbal"]

let userLogin = "yasi3r"

// if(userLogin == userNames[0]){
//     console.log("Logged In")
// }

// console.log(userNames[0])
// console.log(userNames[1])
// console.log(userNames[2])
// console.log(userNames[3])

//For Loop

// for(var i=0; i<10; i++){
//     console.log("No of matches",i)

//    if(userLogin == userNames[i]){
//     console.log("Logged In",i)
//     break
// }
// }

var flag = false

for(var i=0; i<10; i++){
    // console.log("No of matches",i)
   if(userLogin == userNames[i]){
    flag = true
}
}

if(flag){
    alert("Logged In")
}
else{
    alert("Not Authorized")
}

