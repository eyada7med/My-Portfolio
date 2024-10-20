let btn = document.querySelector(".btn-back");
let nav = document.querySelector("nav")
let loader = document.querySelector(".loader");
let taskbar = document.querySelector(".taskbar")
let btn_taskbar = document.querySelector(".nav-bar");
let x_mark = document.querySelector(".bi-x-circle");
let navbtns = document.querySelectorAll(".nav-btn")
window.onscroll = function () {
  if (window.scrollY >= 700) {
    btn.style.display = "block";
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.background = "linear-gradient(45deg ,#ced4dad6 , #4f5bd5)";
    nav.style.zIndex = "999"
  } else {
    btn.style.display = "none";
    nav.style.position = "";
    nav.style.background = "transparent"
  }
};
btn.addEventListener("click" , function(){
  window.scrollTo({top: 0 , behavior: 'smooth' })
});
window.addEventListener("load" , function(){
loader.classList.add("hide-loader")
});
btn_taskbar.addEventListener("click" , function(){
  taskbar.classList.add("show-taskbar")
});
x_mark.addEventListener("click" , function(){
  taskbar.classList.remove("show-taskbar")
})

