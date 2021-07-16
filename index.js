const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

// const leftPosition = menu.getBoundingClientRect().left;
// Left position didnot worked
openNav.addEventListener("click", () => {
    // if(leftPosition < 0){
    //     menu.classList.add("show");
    // }
    menu.classList.add("show");
    
});

closeNav.addEventListener("click", ()=> {
    // if(leftPosition < 0){
    //     menu.className.remove("show");
    // }
    menu.classList.remove("show");
});