//=============FILTRU SORTARE
let filterBox = document.getElementsByClassName("productBrand"); 

document.getElementById("nume_brand").addEventListener("click", (event) => {
    if(event.target.className !== "numeBrandItem") {
        return false; // cand dau click in afara elementului sa nu dispara blocurile 
    }  //event.target --> elementul pe care am dat click

    let filterClass = event.target.dataset["id"];
    console.log(filterClass);


    for(let i = 0; i < filterBox.length; i++){ 
        filterBox[i].classList.remove("hide")
        if(!filterBox[i].classList.contains(filterClass) && filterClass !== "all"){
            filterBox[i].classList.add("hide")
        } 
    }

});

//===========SCROLL TO TOP BUTTON
const myButton = document.getElementById("myBtn");
//cand dau scroll mai mult de 50 px, apare butonul
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        myButton.classList.remove("btnNone");
        myButton.classList.add("myBtn");
        myButton.classList.remove("disparitieBtn");
    } else {
        myButton.classList.remove("myBtn");
        myButton.classList.add("disparitieBtn");
    }
};
//cand dau click pe buton ma aduce la inceput
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0 //for Chrome, Firefox, IE and Opera
};