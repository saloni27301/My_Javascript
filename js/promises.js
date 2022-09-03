console.log('This is promises Demo')


/*promises is like give promise to anyone thta you will do this or that
promises consist of three stages
1.resolve:either the promise can be fulfilled
2.reject:or prmises can not be fulfilled
3.pending:when process happen promise is called pending stage*/


function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            let error=true
            if(!error){
                console.log("Your promise has been resolved")
                resolve();
            }
            else{
                console.log("Your promise has not been resolved")
                reject("Sorry not fulfilled");
            }
        }, 2000);
    }
    )}
fun1().then(function(){
    console.log("Saloni:thanks for resolving me")
}).catch(function(error){
    console.log("Saloni:thanks for rejecting me  "+ error)
})
