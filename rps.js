let us =0;
let ci=0;
const   cs=document.querySelectorAll(".c");
const gc=()=>{
    let op =["rock","paper","scissors"];
    let ri = Math.floor(Math.random()*3);
    return op[ri];
};
const usp = document.querySelector("#us");
const csp = document.querySelector("#cs");
const msg =document.querySelector(".msg");
const mc =document.querySelector(".mc");

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game draw"
    mc.style.backgroundColor= "maroon";
   
}

const sw=(uw,cc)=>{
    if(uw){
        us++;
        usp.innerText=us;
    console.log("you win");
    msg.innerText="You win"
    mc.style.backgroundColor="green";
}
else{
    ci++;
    csp.innerText=ci;
console.log("you lose");
msg.innerText="You lose";
mc.style.backgroundColor="blue";
}
}
const playgame =(uc)=>{
console.log("user choice",uc);
const cc= gc();
console.log("computer choice",cc);
if (uc===cc){
    drawgame();
} else{
    let uw = true;
if(uc==="rock"){
uw =cc==="paper"?false:true;
}
 else if(uc ==="paper"){
    uw=cc=="scissors" ? false:true;
}
else {
    uw=cc=="rock" ? false:true;
}
sw(uw,cc);
}}
cs.forEach((c)=>{
   
    c.addEventListener("click",()=>{
        const uc=c.getAttribute("id")
        console.log(uc," was clicked");
playgame(uc)
    })
});

