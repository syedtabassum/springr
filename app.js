// .................function for responsive side menu...........
function burger(){
// ............accessing DOM elements.............
const burg = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
// ...........event............
   burg.addEventListener('click', function(e){
    menu.classList.toggle('menu-active');
   })

}
burger();