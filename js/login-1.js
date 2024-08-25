document.querySelector("#pas-lc9").addEventListener("focus", () => {
    document.querySelector(".css-2j5").setAttribute("style", "border-color: rgb(255, 132, 45)!important;");
    document.querySelector(".css-1u6q9e").setAttribute("style", "color: rgb(255, 132, 45)!important;");
})

document.querySelector("#pas-lc9").addEventListener("focusout", () => {
    document.querySelector(".css-2j5").setAttribute("style", "border-color: ''");
    document.querySelector(".css-1u6q9e").setAttribute("style", "color: ''");
})