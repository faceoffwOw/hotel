/*import css from "./css/style.css"
import Logo from "./img/Logo.svg"*/

const input_start = document.getElementById("start_one");
const input_end = document.getElementById("end_one")
let i_start = document.getElementById("start_expand");
let i_end = document.getElementById("end_expand");

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