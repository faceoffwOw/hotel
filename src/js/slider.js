let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let price = document.getElementById("price");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

window.onload = function(){
  slideOne();
  slideTwo();
}

function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  price.value = sliderOne.value.toString() + " - " + sliderTwo.value.toString();

  fillColor();
}

function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  price.value = sliderOne.value.toString() + " - " + sliderTwo.value.toString();
  fillColor();
}

function fillColor(){
  percent1 = (sliderOne.value/sliderMaxValue) * 100;
  percent2 = (sliderTwo.value/sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #ffffff ${percent1}%, #6FCF97 ${percent1}%,  #66D2EA ${percent2}%, #FFFFFF ${percent2}%)`;
}

