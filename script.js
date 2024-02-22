let boxes = document.querySelectorAll('.box');
let turn = 'X';
let isGameover = false;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener('click', ()=>{
        if(!isGameover && e.innerHTML === ""){
            e.innerHTML = turn;
            chekWin();
            chekDraw();
            changTurn();
        }
    })
})
function changTurn(){
    if(turn === 'X'){
        turn = 'O';
        document.querySelector('.bg').style.left = "85px"
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0px"
    }
}


function chekWin(){
    let winConditon = [
        [0, 1 ,2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditon.length; i++){
        let v0 = boxes[winConditon[i][0]].innerHTML;
        let v1 = boxes[winConditon[i][1]].innerHTML;
        let v2 = boxes[winConditon[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameover = turn;
            document.querySelector("#result").innerHTML = turn +" "+ "Wine";
            document.querySelector("#play-again").style.display = "inline";

            for(j = 0; j<3; j++){
                boxes[winConditon[i][j]].style.backgroundColor = "#08d9d6";
                boxes[winConditon[i][j]].style.color = "#000"
            }
        }
    }
}

function chekDraw(){
    if(!isGameover){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })
        if(isDraw){
            isGameover = turn;
            document.querySelector("#result").innerHTML ="Draw";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

// document.querySelector("#play-again").addEventListener("click",()=>{
//     isGameover = false;
//     turn = "X";
//     document.querySelector(".bg").style.left = '0';
//     document.querySelector("#resul").innerHTML = '';
//     document.querySelector("#play-again").style.display = 'none';
//     window.location.reload();

//     boxes.forEach(e =>{
//         e.innerHTML = "";
//         e.style.removeProperty('backgroundColor');
//         e.style.color = '#fff'
//     })
// })

function reloadPage() {
    location.reload();
}

// Add event listener to the button
document.getElementById("play-again").addEventListener("click", reloadPage);