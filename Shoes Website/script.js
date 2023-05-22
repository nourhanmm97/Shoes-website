/////////////////////Swaps the source image of a larger image with a smaller image//////////////////////////////////

function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}

////////////////////////////////////////////////Add to Cart///////////////////////////////////////////////////////////

var buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => {
  button.addEventListener("click", addToCart);
})

function addToCart() {
    // Get the icon and count span
    var icon = document.querySelector(".cart-icon");
    var count = document.querySelector(".cart-count");
  
    // Update the count
    count.textContent = parseInt(count.textContent) + 1;
    
    // Add a "added" class to show it was added
    icon.classList.add("added");
    
    // Remove the "added" class 
    setTimeout(() => icon.classList.remove("added"), 300);

  };


//////////////////////////////////////////////Add Heart/////////////////////////////////////////////////////////////////////////

  var hearts = document.querySelectorAll(".add-heart");
  hearts.forEach(i => {
    i.addEventListener("click", addHeart);
})
  
    function addHeart(){
        // Get the heart and count span
        var heart = document.querySelector(".heart-icon");
        var count = document.querySelector(".heart-count");

        // Update the count
        count.textContent = parseInt(count.textContent) + 1;


        // Add a "coloradd" class to show it was added
         heart.classList.add("coloradd");

         // Remove the "coloradd" class 
         setTimeout(() => heart.classList.remove("coloradd"), 300);
    };
  
  ///////////////////////////////////////Rating Star////////////////////////////////////////////////////////

var stars = document.querySelectorAll(".star");

let selectedStar = 0;

// Deselect all stars initially
rateStar(selectedStar);

// Click listener to each star
stars.forEach(star => {
  star.addEventListener("click", (e) => {
    selectedStar = e.target.dataset.value;
    rateStar(selectedStar);
  });
});

function rateStar(starNum) {
  // Remove "selected" class from all stars
  stars.forEach(star => {
    star.classList.remove("selected");
  });
  
  // Add "selected" class to appropriate number of stars
  for (let i = 1; i <= starNum; i++) {
    document.querySelector(`.star[data-value="${i}"]`).classList.add("selected");
  }
}

// Function to reset rating
function resetRating() {
  // Set selectedStar back to 0
  selectedStar = 0;
  
  // Call rateStar() to deselect all stars
  rateStar(selectedStar);
}


const topButton = document.getElementById("topButton");

topButton.addEventListener('click', () => {
  window.scrollTo({ 
    top: 0,
    left: 0,  
    behavior: "smooth" 
  });
});

window.addEventListener('scroll', () => {  
  if (window.pageYOffset > 300) {
    topButton.classList.add("show");
  } else {
   topButton.classList.remove("show"); 
  }
})
