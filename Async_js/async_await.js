function check_order() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checking order...")
            resolve()
        }, 1000)
    })
}

function create_order() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order created")
            resolve()
        }, 1000)
    })
}

function charge_payment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment charged")
            resolve()
        }, 1000)
    })
}

function send_invoice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Invoice sent")
            resolve()
        }, 1000);
    })
}

async function main() {
    await check_order()
    await create_order()
    await charge_payment()
    await send_invoice()
}

main()