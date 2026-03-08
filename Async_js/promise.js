function check_order() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Checking order...")
            resolve()
        },1000)
    })
}

function create_order() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Order created")
            resolve()
        },1000)
    })
}

function charge_payment() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject("Payment failed")
            console.log("Payment charged")
        },1000)
       
    })
}

function send_invoice() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Invoice sent")
            resolve()
        },1000)
    })
}

// Chaining
check_order()
    .then(create_order)
    .then(charge_payment)
    .then(send_invoice)
    .catch((error)=>{
        console.log(error)
    })