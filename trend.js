const navclick=document.querySelector("img");
const navclickbar=document.querySelector("ul");
console.log(navclickbar.className);

navclickbar.classList.add("hide");

function reveal(e){
  e.preventDefault();
  navclickbar.classList.toggle("hide");
}
navclick.onclick=reveal;
