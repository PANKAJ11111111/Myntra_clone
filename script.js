let bagitem;

onload();


function onload(){
    let bagitemstring = localStorage.getItem('bagitem')
    bagitem = bagitemstring ? JSON.parse(bagitemstring) : [] ;
    displayitemonpage();
    bagcount();
}


function displayitemonpage(){
    let item_conatiner = document.querySelector('.items-conatiner');

    if(!item_conatiner){
        return;
    }

let innerHTML = ``;


items.forEach(items => {

     innerHTML+=`
     <div class="item-conatiner">
     
         <img src="${items.image}" alt="ite-image" class="item_img">
     
         <div class="rating">
             ${items.rating.stars}⭐ | ${items.rating.count}
         </div>
     
         <div class="company-name">${items.company}</div>
     
         <div class="item_name">${items.item_name}</div>
     
         <div class="price">
             <span class="current_price"> ${items.current_price}</span>
             <span class="original_price">${items.original_price}</span>
             <span class="discount">(${items.discount_percentage}% OFF)</span>
         </div>
     
         <button class="btn-add-bag" onclick="addtobag(${items.id})">ADD TO BAG </button>
     </div>`
});


item_conatiner.innerHTML = innerHTML;

}




function addtobag(itemId){
      bagitem.push(itemId);
      localStorage.setItem('bagitem', JSON.stringify(bagitem));
      bagcount();
}

function bagcount(){
    let bagitemcount = document.querySelector('.bag_item-count');
    if(bagitem.length>0){
        bagitemcount.style.visibility='visible'
    bagitemcount.innerText = bagitem.length;
    }
    else{
        bagitemcount.style.visibility='hidden';
    }
}

