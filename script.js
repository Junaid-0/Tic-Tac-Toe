// let boxtext = document.getElementsByClassName("boxText");
let box = document.getElementsByClassName("grid");
let info = document.getElementsByClassName("info")[0];
let boxes = document.getElementsByClassName("boxText");
let winner = document.getElementsByClassName("winner")[0]
let trump = document.getElementsByClassName("trump")[0];

let cross = document.getElementsByClassName("cross")[0];

// console.log(trump);

let turn = "X";
let sound = new Audio("./Tap.wav");

let won = false;

let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];



const changeTurn = ()=>{
    return turn = turn==="X" ? "O" : "X";
}

const checkWin = ()=>{

    // Checking if won
        if(boxes[0].innerHTML==="X" && boxes[1].innerHTML==="X" && boxes[2].innerHTML==="X" ||
           boxes[3].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[5].innerHTML==="X" ||
           boxes[6].innerHTML==="X" && boxes[7].innerHTML==="X" && boxes[8].innerHTML==="X")
           {
            winner.innerHTML = "X Won";
            won = true;
    }
        if(boxes[0].innerHTML==="X" && boxes[3].innerHTML==="X" && boxes[6].innerHTML==="X" ||
           boxes[1].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[7].innerHTML==="X" ||
           boxes[2].innerHTML==="X" && boxes[5].innerHTML==="X" && boxes[8].innerHTML==="X")
           {
            winner.innerHTML = "X Won";
            won = true;
    }
        if(boxes[0].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[8].innerHTML==="X" ||
           boxes[2].innerHTML==="X" && boxes[4].innerHTML==="X" && boxes[6].innerHTML==="X")
           {
            winner.innerHTML = "X Won";
            won = true;
    }

        if(boxes[0].innerHTML==="O" && boxes[1].innerHTML==="O" && boxes[2].innerHTML==="O" ||
           boxes[3].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[5].innerHTML==="O" ||
           boxes[6].innerHTML==="O" && boxes[7].innerHTML==="O" && boxes[8].innerHTML==="O")
           {
            winner.innerHTML = "O Won";
            won = true;
    }
        if(boxes[0].innerHTML==="O" && boxes[3].innerHTML==="O" && boxes[6].innerHTML==="O" ||
           boxes[1].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[7].innerHTML==="O" ||
           boxes[2].innerHTML==="O" && boxes[5].innerHTML==="O" && boxes[8].innerHTML==="O")
           {
            winner.innerHTML = "O Won";
            won = true;
    }
        if(boxes[0].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[8].innerHTML==="O" ||
           boxes[2].innerHTML==="O" && boxes[4].innerHTML==="O" && boxes[6].innerHTML==="O")
           {
            winner.innerHTML = "O Won";
            won = true;
    }

    // Checking if draw
    if((boxes[0].innerHTML !== "" && !won) && (boxes[1].innerHTML !== "" && !won) && (boxes[2].innerHTML !== "" && !won) &&
       (boxes[3].innerHTML !== "" && !won) && (boxes[4].innerHTML !== "" && !won) && (boxes[5].innerHTML !== "" && !won) &&
       (boxes[6].innerHTML !== "" && !won) && (boxes[7].innerHTML !== "" && !won) && (boxes[8].innerHTML !== "" && !won))
       {
        winner.setAttribute("style", "color:yellow")
        winner.innerHTML = "Draw"
       }

    // Adding strike line when won

    // Horizontal wins

    if(boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" & boxes[2].innerHTML === "X" ||
       boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" & boxes[2].innerHTML === "O"){
        cross.setAttribute("style", "display:block; transform: rotate(0deg); margin-top:47px");
    }

    if(boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" & boxes[5].innerHTML === "X" ||
       boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" & boxes[5].innerHTML === "O"){
        cross.setAttribute("style", "display:block; transform: rotate(0deg); margin-top:147px");
    }

    if(boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" & boxes[8].innerHTML === "X" ||
       boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" & boxes[8].innerHTML === "O"){
        cross.setAttribute("style", "display:block; transform: rotate(0deg); margin-top:247px");
    }

    // Vertical wins

    if(boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" & boxes[6].innerHTML === "X" ||
       boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" & boxes[6].innerHTML === "O"){
        cross.setAttribute("style", "display:block; margin-left:-100px");
    }

    if(boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" & boxes[7].innerHTML === "X" ||
       boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" & boxes[7].innerHTML === "O"){
        cross.setAttribute("style", "display:block; margin-left:0px");
    }

    if(boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" & boxes[8].innerHTML === "X" ||
       boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" & boxes[8].innerHTML === "O"){
        cross.setAttribute("style", "display:block; margin-left:100px");
    }

    // Diagonal wins

    if(boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" & boxes[8].innerHTML === "X" ||
       boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" & boxes[8].innerHTML === "O"){
        cross.setAttribute("style", "display:block; transform:rotate(45deg); margin-left:0px");
    }

    if(boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" & boxes[6].innerHTML === "X" ||
       boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" & boxes[6].innerHTML === "O"){
        cross.setAttribute("style", "display:block; transform:rotate(135deg); margin-left:0px");
    }

    if(won){
        trump.style.width = "13vw";
        trump.style.height = "13vw";
    }

    if(!won){
        trump.style.width = "0";
        trump.style.height = "0";
    }


}

const reset = ()=>{
    Array.from(box).forEach(e =>{
        let boxtext = e.querySelector(".boxText");
        boxtext.innerHTML = "";
        winner.innerHTML = "";
        winner.setAttribute("style", "color:lime");
    })
    cross.setAttribute("style", "display:none");
    won = false;
    checkWin();
}




Array.from(box).forEach(e =>{
    let boxtext = e.querySelector(".boxText");
    e.addEventListener("click",function(){
        if(!won){
            if (boxtext.innerText==="") {
                boxtext.innerText = turn;
                if(boxtext.innerHTML === "X"){
                    boxtext.style.color = "red"
                }
                else if(boxtext.innerHTML === "O"){
                    boxtext.style.color = "blue"
                }
                else{
                    boxtext.style.color = "yellow"
                }
                changeTurn();
                checkWin();
                sound.play();
                info.innerHTML = `Turn for ${turn}`
            }
        }
    })
})