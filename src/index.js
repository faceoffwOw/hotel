/*import css from "./css/style.css"
import Logo from "./img/Logo.svg"*/

const input_start = document.getElementById("start_one");
const input_end = document.getElementById("end_one")
let i_start = document.getElementById("start_expand");
let i_end = document.getElementById("end_expand");
let span_check = document.getElementById("info");
let div = document.getElementById("container__info");
let i_guests = document.getElementById("expand_guests");
let count_div = document.getElementById("count_div");

addEventListener("click", function() {
  if(input_start === document.activeElement){
    i_start.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    i_start.classList.replace("fa-angle-up", "fa-angle-down");
  }
  if(input_end === document.activeElement){
    i_end.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    i_end.classList.replace("fa-angle-up", "fa-angle-down");
  }
});

window.addEventListener('click', function (e) {
  if(span_check != e.target){
    div.classList.replace("expand", "not-expand");
    i_guests.classList.replace("fa-angle-up", "fa-angle-down");
    count_div.style.display = "none";
  }
});

function spanClick(){
  div.classList.replace("not-expand", "expand");
  i_guests.classList.replace("fa-angle-down", "fa-angle-up");
  count_div.style.display = "block"; 
}