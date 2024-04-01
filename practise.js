let light = document.querySelector(".light");
let value = prompt("Enter 0 or 1");
let currLight = value ;

    if (currLight == 0) {
        currLight = "Red";
        document.querySelector("#green_light").style.background= "black";
        document.querySelector(".child_card").style.boxShadow =  "black";
    }
    else {
        currLight = "Green";
        document.querySelector("#red_light").style.background= "black";
        document.querySelector(".child_card").style.boxShadow = "black";
    }
console.log(currLight);