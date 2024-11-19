function createCounter(){
    let counter = 0;

    return {
        increment: function() {
            counter++;
            return counter
        },
        decrement: function() {
            counter--;
            return counter
        },
        getCounter:function() {
            return counter;
        }
    }
}

const counterFunctions = createCounter();

const countDisplay = document.getElementById("counterDisplay");
const incrementbutton = document.getElementById("incrementbutton");
const decrementbutton = document.getElementById("decrementbutton");

function updateDisplay(){
 countDisplay.textContent = counterFunctions.getCounter();
}

incrementbutton.addEventListener("click",()=>{
    counterFunctions.increment();
    updateDisplay();
})

decrementbutton.addEventListener("click",()=>{
    counterFunctions.decrement();
    updateDisplay();
})

updateDisplay();




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