
let bagitemobjct
onload();


function onload(){
    loadBagItemobject();
    displaybagpag();
    displaybagsummary();
}


function displaybagsummary(){
    let bagsummary = document.querySelector('.bag-summary');

    let totalitem =bagitem.length;
    let totalmrp = 0;
    let totalDiscount =0;
    let fialpayment =0;

    bagitemobjct.forEach(item =>{
        totalmrp+=item.original_price;
        totalDiscount = item.original_price  - item.current_price;
    })

    fialpayment = totalmrp - totalDiscount + 99;

    bagsummary.innerHTML=`    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalitem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalmrp}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${fialpayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}

function loadBagItemobject() {
  
    bagitemobjct = bagitem.map(itemid =>{
        for(let i=0; i<items.length; i++){
            if(itemid == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagitemobjct);
}


function displaybagpag(){

    

    let contaner = document.querySelector('.bag-items-container')

     let innerHTML = '';
     bagitemobjct.forEach(element => {
        innerHTML+=genrate(element);
     });
       
     contaner.innerHTML = innerHTML;
     
}

function removefrombag(id){
    bagitem = bagitem.filter(bagitemid => bagitemid != id);
    localStorage.setItem('bagitem', JSON.stringify(bagitem));
    loadBagItemobject();
    bagcount();
    displaybagpag();
    displaybagsummary()
}


function genrate(item){
   return `<div class="bag-item-container">
   <div class="item-left-part">
     <img class="bag-item-img" src="${item.image}">
   </div>
   <div class="item-right-part">
     <div class="company">${item.company}</div>
     <div class="item-name">${item.item_name}</div>
     <div class="price-container">
       <span class="current-price">Rs ${item.current_price}</span>
       <span class="original-price">Rs ${item.original_price}</span>
       <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
     </div>
     <div class="return-period">
       <span class="return-period-days">${item.return_period} days</span> return available
     </div>
     <div class="delivery-details">
       Delivery by
       <span class="delivery-details-days">${item.delivery_date}</span>
     </div>
   </div>

   <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
 </div>`;

}