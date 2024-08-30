let time=document.getElementById("time");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let timer;
let isRunning=false;
let timeleft=1*60; //25minutes in seconds

function updateTimer(){
    const minutes=Math.floor(timeleft/60);
    const seconds=timeleft %60;
    time.textContent=`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function starting(){
    if(!isRunning){
        isRunning=true;
        timer=setInterval(()=>{
            if(timeleft >0){
                timeleft--;
                updateTimer();
            }else{
                clearInterval(timer);
                isRunning=false;
                alert("Time's up!Take a break.");
            }
        },1000);

    }
}

function reseting(){
    clearInterval(timer);
    isRunning=false;
    timeleft= 25 * 60;
    updateTimer();
}

function stoping(){
    const stopbutton=document.querySelector('#stop button');
    // isRunning=!isRunning;
    if(isRunning){
        clearInterval(timer);
        stopbutton.textContent='RESUME';
        
        isRunning=null;
    }
    else{

        starting();
        stopbutton.textContent='STOP';

    }
}