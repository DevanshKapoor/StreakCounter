let day=document.querySelectorAll(".container>button>div");
let count=1;

for(let x of day){
    x.innerText=count;
    count++;
}


let button=document.querySelectorAll(".container>button");


for(let y of button){
    y.addEventListener("click",()=>{
        y.style.backgroundColor="#9ADE7B";
    })
}