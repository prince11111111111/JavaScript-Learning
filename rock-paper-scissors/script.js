let choices = document.querySelectorAll(".choices");
let plr = document.querySelector("#Player");
let cmp = document.querySelector("#Comp");
let btn = document.querySelector("button");
let msg = document.querySelector("#msg");

let pp = 0;
let cp = 0;
plr.innerText = "Player\n" + pp;
cmp.innerText = "Computer\n" + cp;

choices = Array.from(choices);

const restart = () =>{
    pp = 0;
    cp = 0;
    plr.innerText = "Player\n" + pp;
    cmp.innerText = "Computer\n" + cp;
    msg.innerText = "";
}

btn.addEventListener("click",restart);

for(let choice of choices){
    choice.addEventListener("click",() =>{
        console.log(`${choice} was clicked`);
        let cc = Math.ceil(Math.random()*3);
        if(choices.indexOf(choice)==0 && cc==3 ||
        choices.indexOf(choice)==1 && cc==1 ||
        choices.indexOf(choice)==2 && cc==2){
            console.log(`${cc},${choice},you won`);
            pp++;
            plr.innerText = "Player\n" + pp;
            msg.innerText = "You Won!!!";
        }else if(choices.indexOf(choice)==2 && cc==1 ||
        choices.indexOf(choice)==0 && cc==2 ||
        choices.indexOf(choice)==1 && cc==3){
            console.log(`${cc},${choice},you lost`);
            cp++;
            cmp.innerText = "Computer\n" + cp;
            msg.innerText = "You Lost, Try AGAIN";
        }else{
            console.log(`${cc},${choice},you drew`);
            pp++;
            plr.innerText = "Player\n" + pp;
            cp++;
            cmp.innerText = "Computer\n" + cp;
            msg.innerText = "You Drew, Try AGAIN";
        }
        
    });
}

