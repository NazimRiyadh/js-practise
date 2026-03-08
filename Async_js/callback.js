function check_order(){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Checking order...")
            resolve("Order checked")
        },2000)
    })
    return promise
}   

function create_order(){
   const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Order created")
        resolve("Order created")
    },1000)
   })
   return promise
}

function charge_payment(){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Payment charged")
            resolve("Payment charged")
        },3000)
    })
    return promise
}

function send_invoice(){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("invoice sent")
            resolve("invoice sent")
        },1000)
    })
    return promise
}
    
check_order()
    .then(create_order)
    .then(charge_payment)
    .then(send_invoice)
