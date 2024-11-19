setTimeout(() => {
    console.log("this will log in 2 seconds")
}, 2000);


function greet(){
    console.log("hello greet bro")
}
setTimeout(greet, 7000)


setTimeout (() =>{
    console.log("data fetched")
},2000)

console.log("data fetching")

setTimeout (() =>{
    console.log("datas")
},5000)


const sampleData = [
    {id:1, name:"item 1", description:"description for item 1"},
    {id:1, name:"item 2", description:"description for item 2"},
    {id:1, name:"item 3", description:"description for item 3"},
]
async function fetchdata(){
    console.log("fetching data........")
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data fetched successfuly", sampleData)
        },4000)
    })
}
fetchdata();