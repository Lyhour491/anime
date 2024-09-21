const wraper = document.querySelector('.wraper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup= document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=> {
    wraper.classList.add('active');
});
loginLink.addEventListener('click',()=> {
    wraper.classList.remove('active');
});
btnPopup.addEventListener('click',()=> {
    wraper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wraper.classList.remove('active-popup');
});


function Search(){
    var searchitem=document.getElementById("search-items").value;

    var product=document.getElementsByClassName('product');

    var productname=document.getElementsByClassName('product-name');

    for(var i=0;i<product.length;i++){
        if(productname[i].innerText.toUpperCase().indexOf(searchitem.toUpperCase())>=0){
            product[i].style.display="";
        }else{
            product[i].style.display="none";
        }
    }
}