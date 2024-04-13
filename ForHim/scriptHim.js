// Adăugăm un ascultător de eveniment pentru butonul de căutare
document.getElementById("searchButton").addEventListener("click", searchProducts);

// Adăugăm un ascultător de eveniment pentru inputul de căutare pentru a permite și căutarea la apăsarea tastei Enter
document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchProducts();
  }
});

// Funcție pentru căutarea produselor în funcție de textul introdus
function searchProducts() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  
  document.querySelectorAll(".product").forEach(product => {
    const productName = product.textContent.toLowerCase();
    
    if (productName.includes(searchText)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Adăugăm un ascultător de eveniment pentru fiecare filtru
document.querySelectorAll(".filter input").forEach(checkbox => {
    checkbox.addEventListener("change", filterProducts);
  });
  
  // Funcție pentru filtrarea produselor în funcție de filtrele selectate
  function filterProducts() {
    const selectedFilters = Array.from(document.querySelectorAll(".filter input:checked")).map(checkbox => checkbox.id);
    
    document.querySelectorAll(".product").forEach(product => {
      const filters = product.dataset.filters.split(",");
      
      if (selectedFilters.length === 0 || filters.some(filter => selectedFilters.includes(filter))) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }


  // Adăugăm un ascultător de eveniment pentru butonul de resetare
document.getElementById("resetButton").addEventListener("click", function() {
    document.querySelectorAll(".filter input:checked").forEach(checkbox => {
      checkbox.checked = false;
    });
    filterProducts();
  });

  // Funcție pentru a număra și a afișa numărul de produse pentru fiecare filtru
function updateFilterLabels() {
    // Obține toate elementele filtru
const filterLabels = document.querySelectorAll('.filter label');

// Iterează prin fiecare filtru
filterLabels.forEach(label => {
    // Obține id-ul filtrului
    const filterId = label.getAttribute('for');
    // Obține numărul de produse asociate cu acest filtru
    const productCount = document.querySelectorAll(`[data-filters="${filterId}"]`).length;
    // Modifică textul label-ului pentru a include numărul de produse
    label.innerText = `${label.innerText} (${productCount})`;
});
}

// Apelăm funcția pentru actualizarea etichetelor filtrului la încărcarea paginii
updateFilterLabels();



//galerie modal================================
// Obține modalul, imaginea modală și elementele de închidere
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var span = document.getElementsByClassName("close")[0];

modal.style.display = "none";

// Adaugă evenimente de clic pentru fiecare produs
var products = document.querySelectorAll(".product");
products.forEach(product => {
    product.addEventListener("click", function() {
        modal.style.display = "block";
        var imgSrc = this.querySelector("img").getAttribute("src");
        modalImg.src = imgSrc;
    });
});

// Adaugă eveniment de clic pentru închiderea modalului
span.onclick = function() {
  modal.style.display = "none";
}


//filtru pret======================
document.getElementById("filterPriceButton").addEventListener("click", function() {
  var minPrice = parseFloat(document.getElementById("minPrice").value);
  var maxPrice = parseFloat(document.getElementById("maxPrice").value);

  var selectedBrand = document.querySelector('input[name="brand"]:checked');
  var brandFilter = selectedBrand ? selectedBrand.id : null;

  var products = document.querySelectorAll(".product");
  products.forEach(product => {
      var brand = product.getAttribute("data-filters");
      var price = parseFloat(product.querySelector(".pret1").textContent.replace(" RON", ""));
      var brandMatch = !brandFilter || brand === brandFilter;
      var priceMatch = (isNaN(minPrice) || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice);
      
      if (brandMatch && priceMatch) {
          product.style.display = "block";
      } else {
          product.style.display = "none";
      }
  });
});

document.querySelectorAll('input[name="brand"]').forEach(input => {
  input.addEventListener("click", function() {
      document.getElementById("filterPriceButton").click();
  });
});

// Resetarea afișării tuturor produselor la încărcarea paginii
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("filterPriceButton").click();
});


//Extensie pentru Container1 (Featured products)
const toggleButton = document.getElementById('toggleButton');
const cardContainer = document.getElementById('cardContainer');

cardContainer.style.display = 'none';

toggleButton.addEventListener('click', function() {
  if (cardContainer.style.display === 'none') {
    cardContainer.style.display = 'flex'; 
    toggleButton.innerHTML = 'Ascunde <i class="fa-solid fa-chevron-up"></i>';
  } else {
    cardContainer.style.display = 'none'; 
    toggleButton.innerHTML = 'Mai mult <i class="fa-solid fa-chevron-down"></i>';
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





/* 
//Filtru Culori==================
// Adăugăm un eveniment de schimbare pentru fiecare input care poate modifica filtrul
document.querySelectorAll('input[type="checkbox"], input[type="number"]').forEach(function(input) {
  input.addEventListener("change", function() {
      // Extragem valorile de preț și brand selectate
      var minPrice = parseFloat(document.getElementById("minPrice").value);
      var maxPrice = parseFloat(document.getElementById("maxPrice").value);
      var selectedBrand = document.querySelector('input[name="brand"]:checked');
      var brandFilter = selectedBrand ? selectedBrand.id : null;

      // Extragem culorile selectate
      var selectedColors = Array.from(document.querySelectorAll('input[type="checkbox"][name="color"]:checked')).map(input => input.id);

      // Aplicăm filtrarea pe fiecare produs
      var products = document.querySelectorAll(".product");
      products.forEach(product => {
          var productBrand = product.dataset.filters;

          // Verificăm dacă produsul corespunde filtrului de brand
          var brandMatch = !brandFilter || productBrand === brandFilter;

          // Verificăm dacă produsul corespunde intervalului de preț
          var priceMatch = !isNaN(minPrice) && !isNaN(maxPrice) && parseFloat(product.querySelector(".pret1").textContent.replace(" RON", "")) >= minPrice && parseFloat(product.querySelector(".pret1").textContent.replace(" RON", "")) <= maxPrice;

          // Verificăm dacă produsul corespunde culorilor selectate
          var colorMatch = selectedColors.length === 0 || selectedColors.some(color => product.classList.contains(color));

          // Ascundem sau afișăm produsul în funcție de criteriile de filtrare
          if (brandMatch && priceMatch && colorMatch) {
              product.style.display = "block";
          } else {
              product.style.display = "none";
          }
      });
  });
});
*/















  