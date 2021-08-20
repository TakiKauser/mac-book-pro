// update memory cost
function updateMemoryCost(catagory) {
    const memoryPrice = document.getElementById("memory-price");
    if (catagory == "default") {
        memoryPrice.innerText = 0;
    }
    else if (catagory == "extended") {
        memoryPrice.innerText = 180;
    }
}
// eventlistner to update memory cost
document.getElementById("default-memory").addEventListener("click", function () {
    // call function to update
    updateMemoryCost("default");
    updateTotalCost();
});

document.getElementById("extended-memory").addEventListener("click", function () {
    // call function to update
    updateMemoryCost("extended");
    updateTotalCost();
});

// update storage cost
function updateStorageCost(catagory) {
    const storagePrice = document.getElementById("storage-price");
    if (catagory == "default") {
        storagePrice.innerText = 0;
    }
    else if (catagory == "first-extended") {
        storagePrice.innerText = 100;
    }
    else if (catagory == "second-extended") {
        storagePrice.innerText = 180;
    }
}
// eventlistner to update storage cost
document.getElementById("default-ssd").addEventListener("click", function () {
    // call function to update
    updateStorageCost("default");
    updateTotalCost();
});
document.getElementById("first-extended-ssd").addEventListener("click", function () {
    // call function to update
    updateStorageCost("first-extended");
    updateTotalCost();
});
document.getElementById("second-extended-ssd").addEventListener("click", function () {
    // call function to update
    updateStorageCost("second-extended");
    updateTotalCost();
});
// update delivery cost
function updateDeliveryCost(catagory) {
    const deliveryCharge = document.getElementById("delivery-charge");
    if (catagory == "free") {
        deliveryCharge.innerText = 0;
    }
    else if (catagory == "chargeable") {
        deliveryCharge.innerText = 20;
    }
}
document.getElementById("free-delivery").addEventListener("click", function () {
    // call function to update
    updateDeliveryCost("free");
    updateTotalCost();
});
document.getElementById("chargeable-delivery").addEventListener("click", function () {
    // call function to update
    updateDeliveryCost("chargeable");
    updateTotalCost();
});
// update total cost
function updateTotalCost() {
    // get extended equipments & service costs
    const originalPrice = parseInt(document.getElementById("best-price").innerText);
    const memoryCost = parseInt(document.getElementById("memory-price").innerText);
    const storageCost = parseInt(document.getElementById("storage-price").innerText);
    const deliveryCost = parseInt(document.getElementById("delivery-charge").innerText);

    // update UI
    const totalCost = originalPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById("total-price").innerText = totalCost;
    // call function to update discount total UI
    discountTotal(totalCost);
}
// promo code verify
function verifyPromoCode() {
    const userInput = document.getElementById("promo-code").value;
    // checking validity of user inputted code
    if (userInput == "stevekaku") {
        // clear user input field
        document.getElementById("promo-code").value = "";
        // button disabled to prevent frequent apply
        document.getElementById("promo-apply-btn").setAttribute("disabled", "true");
        return true;
    }
    else {
        // alert user
        alert("Invalid Promo Code!");
        return false;
    }
}
// eventlistener to apply promo code 
document.getElementById("promo-apply-btn").addEventListener("click", function () {
    // get total price
    const totalPrice = parseInt(document.getElementById("total-price").innerText);
    // calculate discount price
    const discountPrice = (totalPrice - (totalPrice / 5));
    // call function to verify promocode
    const verification = verifyPromoCode();
    if (verification) {
        // call function to update discount total UI
        discountTotal(discountPrice);
    }
    else {
        // call function to update discount total UI
        discountTotal(totalPrice);
    }
});
// promocode applied total for 20% discount
function discountTotal(totalAmount) {
    // get discount total field
    const payablePrice = document.getElementById("promo-applied-price");
    // update UI
    payablePrice.innerText = totalAmount;
}