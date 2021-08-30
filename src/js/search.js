let date_residence = document.getElementById('date_residence');
let angle_residence = document.getElementById('angle_residence');
let checkbox = document.querySelectorAll('input[type=checkbox]');
let divCheck = document.querySelectorAll('.checkbox');
let divComfort =document.getElementById('comfort');

addEventListener("click", function() {
  if(date_residence === document.activeElement){
    angle_residence.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    angle_residence.classList.replace("fa-angle-up", "fa-angle-down");
  }
});

divComfort.style.cursor = "pointer";
divComfort.onclick = function(){
  console.log("click");
}

for(let i = 0; i < divCheck.length; i++){

  divCheck[i].addEventListener("click", function(){
    divCheck[i].classList.toggle("active");

    let check = divCheck[i].querySelector('i');
    console.log(check);

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