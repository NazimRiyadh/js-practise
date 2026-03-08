//callback function
//using function in another function as arguement

const array=[1, 2, 4, 5, -1, -2, -3]
console.log("before: "+array)
function callback(x)
{
  if(x>0)return true;
  else return false;
}


function removeneg(myarray, callback)
{
    const notun=[]
    for(const x                                       of myarray)
    {
        if(callback(x))
        {
            notun.push(x);
        }
    }
    return notun
}

const ans=removeneg(array, callback)
console.log("after: ",ans)



//setTimeout function
function see_you_later()
{
    console.log("3 sec por jaite bolse")
}

setTimeout(see_you_later, 3000)

//

setTimeout(() => {
    console.log(" 2 sec pore jaitaisi")
    
}, 2000);

//imterval-> kotokhon por por dakbe
/*setInterval(()=>{
    console.log("1 sec por por dakben")
}, 2000)
*/

//shomoy dekhabo usig interval
function timer() {
  const d = new Date();
  document.getElementById("time").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

// Call it every 1 second
setInterval(timer, 1000);

document.getElementById("check").innerHTML="Alhamdulillah"


//promise & then & catch
let mypromise= new Promise(function(resolve, reject)
{
    let x=2;
    if(x>5)
    {
        return resolve(x)
    }
    else
    {
        return reject("error")
    }
})

mypromise.then(
    function(value)
    {
        console.log(value)
    },
    function(error){
        console.log(error)
    }
)

//async await
async function abcd(){
let raw=await fetch(`https://randomuser.me/api/`)

let dekho=await raw.json()

console.log(dekho)
}

abcd()
