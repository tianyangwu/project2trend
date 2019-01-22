const navclick=document.querySelector("img");
const navclickbar=document.querySelector("ul");
const navbar=document.querySelector(".n");

console.log(navclickbar.className);
// click on the button to show the list;
navclickbar.classList.add("hide");
navbar.classList.remove("tranbackground");

function reveal(e){
  e.preventDefault();
  navclickbar.classList.toggle("hide");
  navbar.classList.toggle("tranbackground");
}
navclick.onclick=reveal;


// mouseover the button to show the list;
navclick.addEventListener("mouseover", function( event ) {
   navclickbar.classList.remove("hide");
   navbar.classList.add("tranbackground");
 })

// mouseout the button to hide the list;
 navclick.addEventListener("mouseout", function( e1 ) {
    navclickbar.classList.add("hide");
    navbar.classList.remove("tranbackground");
})
