'use strict';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true; // for continuous updates

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    // console.log(e.results);
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');

    console.log(transcript);

    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }

    // Check for particular thing that is being said.
    // So 'check weather' is being said - then call weather api to get the current weather.
    // Notice that the function would be called often though, so debounce it :)
    if(transcript.includes('get the weather')) {
        console.log("🔥🔥🔥🔥🔥🔥🔥🔥");
    }
})

recognition.addEventListener('end', recognition.start);
recognition.start();