function sayHello(name,callback){
console.log (`Hello ${name}`)
callback();
}

function sayGoodbye(){
    console.log("Welcome to my App")
}
sayHello("martins",sayGoodbye)

function sayHello(name,callback){
console.log (`Hello ${name}`)
callback();
}

function sayGoodbye(){
    console.log("Welcome to my App")
}
sayHello("martins",sayGoodbye)



const sayHello1 = function (name,callback){
    console.log (`isaac bidemy ${name}`)
    callback();
    }

   const sayGoodbye1 = function(){
        console.log("Welcome to my App")
    }
    sayHello1("martins",sayGoodbye)
    
    sayHello1 = function (name,callback){
    console.log (`Hello ${name}`)
    callback();
    }
    
    sayGoodbye1 = function sayGoodbye1(){
        console.log(" to my App")
    }
    sayHello("yunisa",sayGoodbye)
//not correct

//const greet = (name, callback)=>{


const greetuser = (name, firstcallback, secondcallback) => {
    console.log(`hello $[name]`)
    firstcallback()
    secondcallback()
}

const Welcome = () =>{
    console.log ("welcome to our App")
}

const offerservice = () =>{
    console.log ("pls how can we help you?")
}

greetuser("martins",Welcome,offerservice)




const greetuser = (name, firstcallback, secondcallback) => {
    console.log(`hello $[name]`)
    firstcallback()
    secondcallback()
}

const Welcome = () =>{
    console.log ("welcome to our App")
}

const offerservice = () =>{
    console.log ("pls how can we help you?")
}

greetuser("martins",Welcome,offerservice)



const user = (name,schoolandcourse, company,about,) => {
    console.log (`my name is & {name}`)
    schoolandcourse()
    company()
}

const schoolandcourse = ()=>{
    console.log(`i am studying frontend development`)
}

const company = ()=>{
    console.log(`i will like to work as mobile developer`)
}

user("lola",schoolandcourse,company)