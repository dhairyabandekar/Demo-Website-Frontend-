//Scroll code

const heroWrapper = document.querySelector(".hero-wrapper");

if(heroWrapper) {
    let scrollAmount = 0;
    
setInterval(() => {
    scrollAmount += window.innerWidth;

    if (scrollAmount >= heroWrapper.scrollWidth){
        scrollAmount = 0;
    }

    heroWrapper.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}, 3000);

}

//Pop-up Message

const concerns = document.querySelectorAll(".box, .shop-by-concern, .shop-by-ingredients, .cart-logo");

concerns.forEach(card => {
    card.addEventListener("click", function() {
        alert("We are working on this page!");
    });
});