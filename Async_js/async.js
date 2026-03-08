function check_order(){
    setTimeout(()=>{
        console.log("Checking order...")
    },1000)
}   

function create_order(){
    setTimeout(()=>{
        console.log("Order created")
    },1000)
}

function charge_payment(){
    setTimeout(()=>{
        console.log("Payment charged")
    },1000)
}

function send_invoice(){
    setTimeout(()=>{
        console.log("invoice sent")
    },1000)
}
    
check_order()
create_order()
charge_payment()
send_invoice()
