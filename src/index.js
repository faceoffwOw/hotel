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


const remove_adults = document.getElementById("remove_adults");
const add_adults = document.getElementById("add_adults");
const remove_children = document.getElementById("remove_children");
const add_children = document.getElementById("add_children");
const remove_babies = document.getElementById("remove_babies");
const add_babies = document.getElementById("add_babies");

remove_adults.disabled = true;
remove_children.disabled = true;
remove_babies.disabled = true;



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
  if(span_check != e.target && !div.contains(e.target)){
    div_pick = document.getElementById("pick");
    div.classList.replace("expand", "not-expand");
    i_guests.classList.replace("fa-angle-up", "fa-angle-down");
    count_div.style.display = "none";
    div_pick.style.display = "block";
  }
});

function spanClick(){
  div_pick = document.getElementById("pick");
  div.classList.replace("not-expand", "expand");
  i_guests.classList.replace("fa-angle-down", "fa-angle-up");
  count_div.style.display = "block";
  div_pick.style.display = "none";
}

function Remove(value){
  value = parseInt(value) - 1;
  return value;
}

function Add(value){
  value = parseInt(value) + 1;
  return value;
}

function removeAdults(){
  let count_adults = document.getElementById("count_adults");
  if(count_adults.innerHTML != 0){
    count_adults.innerHTML = Remove(count_adults.innerHTML);
    if(count_adults.innerHTML == 0){
      remove_adults.disabled = true;
    }
    else{
      remove_adults.disabled = false;
    }
  }
}

function addAdults(){
  let count_adults = document.getElementById("count_adults");
  count_adults.innerHTML = Add(count_adults.innerHTML);
  if(count_adults.innerHTML != 0){
    remove_adults.disabled = false;
  }
}

function removeChildren(){
  let count_children = document.getElementById("count_children");
  if(count_children.innerHTML != 0){
    count_children.innerHTML = Remove(count_children.innerHTML);
    if(count_children.innerHTML == 0){
      remove_children.disabled = true;
    }
    else{
      remove_children.disabled = false;
    }
  }
}

function addChildren(){
  let count_children = document.getElementById("count_children");
  count_children.innerHTML = Add(count_children.innerHTML);
  if(count_children.innerHTML != 0){
    remove_children.disabled = false;
  }
}

function removeBabies(){
  let count_babies = document.getElementById("count_babies");
  if(count_babies.innerHTML != 0){
    count_babies.innerHTML = Remove(count_babies.innerHTML);
    if(count_babies.innerHTML == 0){
      remove_babies.disabled = true;
    }
    else{
      remove_babies.disabled = false;
    }
  }
}

function addBabies(){
  let count_babies = document.getElementById("count_babies");
  count_babies.innerHTML = Add(count_babies.innerHTML);
  if(count_babies.innerHTML != 0){
    remove_babies.disabled = false;
  }
}

function Clear(){
  let count_babies = document.getElementById("count_babies");
  let count_children = document.getElementById("count_children");
  let count_adults = document.getElementById("count_adults");

  span_check.innerHTML = "Сколько гостей";
  count_adults.innerHTML = 0;
  count_children.innerHTML = 0;
  count_babies.innerHTML = 0;

  remove_adults.disabled = true;
  remove_children.disabled = true;
  remove_babies.disabled = true;  
}

function Submit(){
  let count_babies = document.getElementById("count_babies");
  let count_children = document.getElementById("count_children");
  let count_adults = document.getElementById("count_adults");

  total = parseInt(count_babies.innerHTML) + parseInt(count_children.innerHTML) + parseInt(count_adults.innerHTML);
  if(total == 0){
    span_check.innerHTML = "Сколько гостей";
  }
  if(total > 0 && total < 5){
    span_check.innerHTML = total + " гостя";
  }
  if(total > 4){
    span_check.innerHTML = total + " гостей";
  }

  div.classList.replace("expand", "not-expand");
  i_guests.classList.replace("fa-angle-up", "fa-angle-down");
  count_div.style.display = "none";
}