console.log("This is fetchApi demo")

function getRequest(){
    console.log("started getdata")
    url="Ajax/saloni.txt"
    //this fetch code is asynchornous fucntion
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text()
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}
function getrequest(){
    console.log("started getdata")
    url="https://api.github.com/users"
    //this fetch code is asynchornous fucntion
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json()
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}
console.log("Before Running getdata")
getrequest()
console.log("After running getdata")

function postrequest(){
    
    url="https://fakestoreapi.com/products"
    
    params={
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            title: 'test product15786281',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electroni'
        })
    }
    fetch(url,params).then(response=>response.json()
    ).then((data)=>console.log(data)
    )
}
postrequest()

