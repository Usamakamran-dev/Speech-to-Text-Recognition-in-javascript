'use strict';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const words=document.querySelector('.words');
const recognition=new SpeechRecognition();
recognition.interimResults=true;
let p=document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result',function(event){
    const transcript=Array.from(event.results[0][0].transcript).join('');
    p.textContent=transcript;

    if(event.results[0].isFinal)
    {
        p=document.createElement('p');
        words.appendChild(p);
    }
   
})

recognition.addEventListener('end',recognition.start);
recognition.start();