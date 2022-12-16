let user=document.querySelector('#email');
let password=document.querySelector('#password');

//get highscore
let highScoreCounter = document.querySelector('.high-score');
let scoreCounter = document.querySelector('.score');

let submit=document.querySelector('.join')
//traffic lights
let semaforo= document.querySelector('.traffic');
//buttons
const btn1= document.querySelector(".btn-walk");
const btn2=document.querySelector(".btn-walk2");
const btn3=document.querySelector(".btn-start");
let count=0;
var highscore=0;
let isRed=false;


btn1.addEventListener("click",()=>{
    count++
    btn2.style.visibility = "visible";
    if(count % 2 ==0 ){
        count=0;
        alert('Te han matado por tropezarte'); 
    }if(red.classList.contains('active')){
        count=0;
        alert('Te han matado por moverte');
    }if(count===0){
        btn2.style.visibility = "hidden";
    }
    
    updateDisplay()
  });
    
 btn2.addEventListener("click",()=>{
    count ++
    
    if(count % 2 ==0 && count!=1 ){
        console.log('Sigue asi!')
    }else{
        count=0;
        alert('Te han matado por tropezarte'); 
    }
    if(red.classList.contains('active')){
        count=0;
        alert('Te han matad por moverte')
    }if(count===0){
        btn2.style.visibility = "hidden";
    }
      updateDisplay()
   });



function updateDisplay(){
    scoreCounter.innerHTML=count;
    if (count>highscore){
        highscore=count
        highScoreCounter.innerHTML=highscore;
    }
    
}


function dissapearButton(){

    btn3.addEventListener("click",()=>{
        btn1.style.visibility = "visible";
        
        btn3.style.visibility = "hidden";
          
       });
}
function dissapearButtons(){

        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";  
 
}


//traffic lights
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

function changeLights(){
    setTimeout(() => {
        redLight()
    }, 0);
    setTimeout(() => {
        greenLight()
    }, 4000);
    
}

function redLight(){
    
    green.classList.remove('active');
        red.classList.add('active')
        setTimeout(() => {
        red.classList.remove('active')
        }, 3000);
    
    
}

function greenLight(){
    
    green.classList.add('active')
    console.log('Contador :' , count);
    var totalFloat= Math.max(10000 - count * 100) + Math.random(-1500, 1500);
    var total=Math.round(totalFloat);
    console.log(total);
    if(total<=2000){
        total=2000;
    }
    if(count==0){
        setTimeout(() => {
            green.classList.remove('active')
            }, 10000 );
    }if (count!=0){
        setTimeout(() => {
            green.classList.remove('active')
            }, total);
    }
}


setInterval(changeLights,9000)


