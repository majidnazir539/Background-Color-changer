//generate random colors

function randomColors(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let intervalId
const startChangingColor = function(){
   if(intervalId == null)
      intervalId = setInterval(bgColor, 1000);
   
   function bgColor(){
    document.body.style.backgroundColor = randomColors();
   }
};
   

const stopChangingColor = function(){
   clearInterval(intervalId);
   intervalId = null;
}

start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChangingColor);