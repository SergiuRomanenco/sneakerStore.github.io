//icon din header
const facebook = document.getElementById('fa-facebook-f');
facebook.addEventListener('click', function() {
  alert('Sorry! It is in the process of working...')
})
const instagram = document.getElementById('fa-instagram')
instagram.addEventListener('click', function() {
  alert('Sorry! It is in the process of working...')
})
const whatsapp = document.getElementById('fa-whatsapp')
whatsapp.addEventListener('click', function() {
  alert('Sorry! It is in the process of working...')
})
const telegram = document.getElementById('fa-telegram')
telegram.addEventListener('click', function() {
  alert('Sorry! It is in the process of working...')
})

//carousel din Container2
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

//Functie pentru butonul favorit din cards
document.querySelectorAll('.favorite-button').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('clicked'); 
  });
});


//Extensie pentru Container1 (Featured products)
const toggleButton = document.getElementById('toggleButton');
const cardContainer = document.getElementById('cardContainer');
const container1 = document.getElementById('container1');

// Ascunde containerul cu clasa "cardsdoi" la încărcarea paginii
cardContainer.style.display = 'none';

toggleButton.addEventListener('click', function() {
  if (cardContainer.style.display === 'none') {
    cardContainer.style.display = 'block'; 
    container1.style.height = '200vh'; 
    toggleButton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  } else {
    cardContainer.style.display = 'none'; 
    container1.style.height = '115vh'; 
    toggleButton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  }
});


// Funcție pentru a deschide modalul și a afișa imaginea corespunzătoare
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Funcție pentru a închide modalul când utilizatorul apasă pe butonul de închidere
document.getElementsByClassName("close")[0].onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

//Functie button view all products
function pageBrands() {
  window.location.href = "../Brands/indexBrands.html";}





