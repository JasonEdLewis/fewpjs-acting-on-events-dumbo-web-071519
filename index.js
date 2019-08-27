// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#354def";



const moveDodgerLeft =() =>{
    var leftNumbers = dodger.style.left.replace("px","");
    var left = parseInt(leftNumbers, 10);
    if(left < 0){

        dodger.style.left = `${left -10}px`
    }

}; 
const moveDodgerRight =() =>{
    var rightNumbers = dodger.style.right.replace("px","");
    var right = parseInt(rightNumbers, 10);
    if(right < 0){

        dodger.style.right = `${right -10}px`
    

}
};
const moveDodgerUp =() =>{
    var upNumbers = dodger.style.bottom.replace("px","");
    var bottom = parseInt(upNumbers, 10);
    if(bottom < 0){

        dodger.style.up = `${bottom - 10}px`
    
}
};
const moveDodgerDown =() =>{
    var topNumbers = dodger.style.top.replace("px","");
    var top = parseInt(topNumbers, 10);
    if(top < 0){

        dodger.style.down = `${top -10}px`
    

};
}
document.addEventListener("keydown", function(e){
    debugger
    switch (e.key) {
        case "ArrowLeft":
         moveDodgerLeft()
            break;
        case "ArrowRight": 
        moveDodgerRight()
            break;
        case "ArrowUp": 
         moveDodgerUp()
            break;
        case "ArrowDown": 
        moveDodgerDown()
            break;
    }

}


)