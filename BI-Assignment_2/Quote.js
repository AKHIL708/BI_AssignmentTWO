
let a = "Programming isn't about what you know; it's about what you can figure out"
let b = "The only way to learn a new programming language is by writing programs in it"
let c = "Sometimes it's better to leave something alone, to pause, and that's very true of programming "
let d = "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them."
let e = "Testing leads to failure, and failure leads to understanding."
let f = "The best error message is the one that never shows up."
let g = "The most damaging phrase in the language is.. it's always been done this way"
let h = "Make it work, make it right, make it fast."
let i = "Talk is Cheap , Show me the Code!"
let j = "Programs must be written for people to read, and only incidentally for machines to execute."
let k = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."


document.getElementById("Quote_Handler").innerHTML = "click on Change the Quote to See 😊 "





function Change(){
    let quotes = [a, b , c , e , f , g , h , i , j, k ]
    let info = quotes[Math.floor(Math.random()* quotes.length)]
    document.getElementById("Quote_Handler").innerHTML = info
    
// btn style 
    
    let btn = document.getElementById("btn");
    if(btn.className == "btn"){
       btn.className = "btn2"
    }else if (btn.className == "btn2"){
        btn.className = "btn3"
    }else if (btn.className == "btn3"){
        btn.className = "btn4"
    }else if(btn.className == "btn4"){
        btn.className = "btn5"
    }else if (btn.className == "btn5"){
        btn.className = "btn6"
    }else if (btn.className == "btn6"){
        btn.className = "btn7"
    }else if (btn.className == "btn7"){
        btn.className = "btn8"
    }else{
        btn.className = "btn"
    }

// quotes style 
let containerID = document.getElementById("containerID")
if(containerID.className == "container"){
    containerID.className = "one"
}else if (containerID.className == "one"){
    containerID.className = "two"
}else if (containerID.className == "two"){
    containerID.className = "three"
}else if (containerID.className == "three"){
    containerID.className = "four"
}else if (containerID.className == "four"){
    containerID.className = "five"
}else if (containerID.className == "five"){
    containerID.className = "six"
}
else if (containerID.className == "six"){
    containerID.className = "seven"
}
else{
    containerID.className = "container"
}
}
let date = new Date();
let time = date.toLocaleString('en-US', { hour : 'numeric',hour12 : false})
console.log(time)

if(time <= 12){
    document.getElementById("time").innerHTML = "Good Morning"
}else if (time <= 15){
    document.getElementById("time").innerHTML = "Good Afternoon"
}else if( time <= 18){
    document.getElementById("time").innerHTML = "Good Evening"
}else if (time <= 24){
    document.getElementById("time").innerHTML = "Good Night"
}else {
    console.log("stay awake");
}







