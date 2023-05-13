let stick_one = document.querySelector(".one");
let stick_two = document.querySelector(".two");
let stick_three = document.querySelector(".three");
let burger = document.querySelector(".burger");
let list_itmes = document.querySelector(".nav-items");

let position_check = false;


burger.addEventListener("click", function(){
  if(!position_check){

    burger.style.margin = "20px 0 0 0";

    stick_two.style.display = "none";

    stick_one.style.position = "absolute";
    stick_three.style.position= "absolute";
    
    stick_one.style.transform = "rotate(45deg)";
    stick_three.style.transform = "rotate(-45deg)";

    list_itmes.style.transform = "translateY(0)";

    position_check = true;
  }
  else if(position_check){

    burger.style.margin = "0 0 0 0";

    stick_two.style.display = "block";

    stick_one.style.position = "unset";
    stick_three.style.position= "unset";

    stick_one.style.transform = "rotate(0deg)";
    stick_three.style.transform = "rotate(0deg)";

    list_itmes.style.transform = "translateY(-139%)";

    position_check = false;
  }

})