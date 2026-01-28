let plr1 = document.querySelector("#P1");
let plr2 = document.querySelector("#P2");
let boxes = document.querySelectorAll(".box");
let SR = document.querySelector("#SR");
let GR = document.querySelector("#GR");


let p1p = 0;
let p2p = 0;
plr1.innerText = "Player1\n" + p1p;
plr2.innerText = "Player2\n" + p2p;

let turn = "O";
let tc = 0;


const win = (turn) => {
    if((boxes[0].innerText==boxes[1].innerText && boxes[1].innerText==boxes[2].innerText) && boxes[0].innerText==turn ||
        (boxes[0].innerText==boxes[4].innerText && boxes[4].innerText==boxes[8].innerText) && boxes[0].innerText==turn||
        (boxes[0].innerText==boxes[3].innerText && boxes[3].innerText==boxes[6].innerText) && boxes[0].innerText==turn||
        (boxes[1].innerText==boxes[4].innerText && boxes[4].innerText==boxes[7].innerText) && boxes[1].innerText==turn||
        (boxes[2].innerText==boxes[5].innerText && boxes[5].innerText==boxes[8].innerText) && boxes[2].innerText==turn||
        (boxes[2].innerText==boxes[4].innerText && boxes[4].innerText==boxes[6].innerText) && boxes[2].innerText==turn||
        (boxes[3].innerText==boxes[4].innerText && boxes[4].innerText==boxes[5].innerText) && boxes[3].innerText==turn||
        (boxes[6].innerText==boxes[7].innerText && boxes[7].innerText==boxes[8].innerText)&& boxes[6].innerText==turn) return true;
    return false;
}

const gameReset = () =>{
    turn = "O";
    tc = 0;
    for(let box of boxes){
        box.innerText = "";
    }
    console.log("GR called");
    return;
}

const scoreReset = () =>{
    turn = "O";
    tc = 0;
    for(let box of boxes){
        box.innerText = "";
    }
    p1p = 0;
    p2p = 0;
    plr1.innerText = "Player1\n" + p1p;
    plr2.innerText = "Player2\n" + p2p;
    console.log("SR called");
    return;

}

SR.addEventListener("click",scoreReset);
GR.addEventListener("click",gameReset);
for(let box of boxes){
    box.addEventListener("click",() =>{
    if(box.innerText == ""){
        box.innerText = turn;
        tc++;
        if(tc>=5){
            if(win(turn)){
                if(turn=="O"){
                    p1p++;
                    plr1.innerText = "Player1\n" + p1p;
                    setTimeout(()=>{
                        alert("Player 1 won!!!!");
                        gameReset();
                    },100);
                }else{
                    p2p++;
                    plr2.innerText = "Player2\n" + p2p;
                    setTimeout(()=>{
                        alert("Player 2 won!!!!");
                        gameReset();
                    },100);
                }
                return;
            }else if(tc==9){
                setTimeout(()=>{
                        alert("It's a Draw.");
                        gameReset();
                },100);
                p1p++;
                plr1.innerText = "Player1\n" + p1p;
                p2p++;
                plr2.innerText = "Player2\n" + p2p;
                return;
            }
        }
        turn=="O" ? turn = "X" : turn = "O";
    }else alert("Pick another Square!!");
});
}