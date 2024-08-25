let mob_menu_open = false;

let nav_mob = document.querySelector(".nav_mob_btn");
let nav_mob_ = document.querySelector(".presentation_background");

nav_mob.addEventListener("click", () => {
    if (mob_menu_open){
        document.querySelector(".presentation").style.setProperty('display', 'none', 'important');;
        mob_menu_open = false;
    } else {
        document.querySelector(".presentation").style.setProperty('display', 'block', 'important');;
        mob_menu_open = true;
    }
})

nav_mob_.addEventListener("click", () => {
    if (mob_menu_open){
        document.querySelector(".presentation").style.setProperty('display', 'none', 'important');;
        mob_menu_open = false;
    } else {
        document.querySelector(".presentation").style.setProperty('display', 'block', 'important');;
        mob_menu_open = true;
    }
})