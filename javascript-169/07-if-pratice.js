function calculate() {
    const priceEl=document.querySelector("#price");
    let price=priceEl.value;
document.querySelector("#discountedprice");

    if(price>500) {
        price*=0.9;

    }

    priceEl.innerText='disconted price:${price}';
    priceEl.value=""
};