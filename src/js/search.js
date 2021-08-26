let date_residence = document.getElementById('date_residence');
let angle_residence = document.getElementById('angle_residence');

addEventListener("click", function() {
  if(date_residence === document.activeElement){
    angle_residence.classList.replace("fa-angle-down", "fa-angle-up");
  }
  else{
    angle_residence.classList.replace("fa-angle-up", "fa-angle-down");
  }
});