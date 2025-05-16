const menuButton = document.querySelector("nav i");
const nav = document.querySelector(".nav-part2");
if(menuButton){
menuButton.addEventListener('click' , () => {
   nav.classList.toggle('active');
});
}