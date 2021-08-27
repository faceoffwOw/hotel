let date_residence = document.getElementById('date_residence');
let angle_residence = document.getElementById('angle_residence');
let checkbox = document.querySelectorAll('input[type=checkbox]');
let divCheck = document.querySelectorAll('.checkbox');


addEventListener("click", function() {
  if(date_residence === document.activeElement){
    angle_residence.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    angle_residence.classList.replace("fa-angle-up", "fa-angle-down");
  }
});



for(let i = 0; i < divCheck.length; i++){

  divCheck[i].addEventListener("click", function(){
    divCheck[i].classList.toggle("active");

    if(divCheck[i].classList.contains("active")){
      checkbox[i].checked = true;
    }
    else{
      checkbox[i].checked = false;
    }
  })
}