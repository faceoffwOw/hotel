let date_residence = document.getElementById('date_residence');
let angle_residence = document.getElementById('angle_residence');
let checkbox = document.querySelectorAll('input[type=checkbox]');
let divCheck = document.querySelectorAll('.checkbox');
let divComfort = document.getElementById('comfort');
let divComfortExpand = document.getElementsByClassName("comfort__choose");
let angle_comfort = document.getElementsByClassName("angle-comfort");
let divComfortAdvanced = document.getElementById("comfort-clickable");

addEventListener("click", function() {
  if(date_residence === document.activeElement){
    angle_residence.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    angle_residence.classList.replace("fa-angle-up", "fa-angle-down");
  }
});

//divComfort.style.cursor = "pointer";
divComfort.onclick = function(){
  divComfort.classList.add("comfort-expand");
  if(divComfort.classList.contains('comfort-expand')){
    divComfortExpand[0].style.display = 'block';
    angle_comfort[0].classList.replace("fa-angle-down", "fa-angle-up");
  }
}

divComfortAdvanced.style.cursor = "pointer";
divComfortAdvanced.onclick = function(){
  let comfortCheckboxes = document.getElementById("comfort-checkboxes");
  let advanced_angle = document.getElementById("advanced-angle");
  comfortCheckboxes.style.display = comfortCheckboxes.style.display == "none" ? comfortCheckboxes.style.display = "" : "none";
  if(advanced_angle.classList.contains("fa-angle-down")){
    advanced_angle.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    advanced_angle.classList.replace("fa-angle-up", "fa-angle-down");
  }
}

window.addEventListener('click', function (e) {
  if(divComfort != e.target && !divComfort.contains(e.target)){
    let comfort_info = document.getElementById("info");
    let count_bedrooms = document.getElementById("count_bedrooms");
    let count_beds = document.getElementById("count_beds");
    let count_bathrooms = document.getElementById("count_bathrooms");

    divComfort.classList.remove("comfort-expand");
    divComfortExpand[0].style.display = 'none';
    angle_comfort[0].classList.replace("fa-angle-up", "fa-angle-down");

    if(count_bedrooms.innerHTML != 0 || count_beds.innerHTML != 0 || count_bathrooms.innerHTML != 0){
      console.log(count_bedrooms.innerHTML + " спальни, " + count_beds.innerHTML + " кровати, " + count_bathrooms.innerHTML + " ванные комнаты");
      comfort_info.innerHTML = count_bedrooms.innerHTML + " спальни, " + count_beds.innerHTML + " кровати, " + count_bathrooms.innerHTML + " ванные комнаты";
    }
    else{
      comfort_info.innerHTML = "Выберете удобства";
    }
  }
})

for(let i = 0; i < divCheck.length; i++){

  divCheck[i].addEventListener("click", function(){
    divCheck[i].classList.toggle("active");

    let check = divCheck[i].querySelector('i');

    if(divCheck[i].classList.contains("active")){
      checkbox[i].checked = true;
      check.style.display = "inline";
    }
    else{
      checkbox[i].checked = false;
      check.style.display = "none";
    }
  })
}

function Counting(id){
  let btn = document.getElementById(id);
  let span_bedrooms = document.getElementById("count_bedrooms");
  let span_beds = document.getElementById("count_beds");
  let span_bathrooms = document.getElementById("count_bathrooms");

  switch(id){
    case "remove_bedrooms":
      span_bedrooms.innerHTML = Remove(span_bedrooms.innerHTML);
      if(span_bedrooms.innerHTML == 0){
        btn.disabled = true;
      }
      break;
    case "add_bedrooms":
      span_bedrooms.innerHTML = Add(span_bedrooms.innerHTML);
      if(span_bedrooms.innerHTML != 0){
        btn = document.getElementById("remove_bedrooms");
        btn.disabled = false;
      }
      break;
      case "remove_beds":
        span_beds.innerHTML = Remove(span_beds.innerHTML);
        if(span_beds.innerHTML == 0){
          btn.disabled = true;
        }
        break;
      case "add_beds":
        span_beds.innerHTML = Add(span_beds.innerHTML);
        if(span_beds.innerHTML != 0){
          btn = document.getElementById("remove_beds");
          btn.disabled = false;
        }
        break;
        case "remove_bathrooms":
          span_bathrooms.innerHTML = Remove(span_bathrooms.innerHTML);
          if(span_bathrooms.innerHTML == 0){
            btn.disabled = true;
          }
          break;
        case "add_bathrooms":
          span_bathrooms.innerHTML = Add(span_bathrooms.innerHTML);
          if(span_bathrooms.innerHTML != 0){
            btn = document.getElementById("remove_bathrooms");
            btn.disabled = false;
          }
          break;
  }

}

function Remove(value){
  value = parseInt(value) - 1;
  return value;
}

function Add(value){
  value = parseInt(value) + 1;
  return value;
}