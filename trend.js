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
navbar.addEventListener("mouseover", function( event ) {
   navclickbar.classList.remove("hide");
   navclickbar.classList.add("moveleft");
   navbar.classList.add("tranbackground");
   // console.log("working");
 })




// mouseover the button to show the list;
// navbar.addEventListener("mouseover", function( event ) {
//
//   console.log("hovering over navbar");
//
// })

// navbar.addEventListener("mouseout", function( event ) {
//
//   console.log("left navbar");
//
// })
// mouseout nav to hide the list;
 navbar.addEventListener("mouseout", function( e1 ) {
    navclickbar.classList.add("hide");
    navbar.classList.remove("tranbackground");
    navclickbar.classList.remove("moveleft");
})
