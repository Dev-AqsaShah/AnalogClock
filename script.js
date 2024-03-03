let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds(); // Corrected the typo here

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
     
    hr.style.transform = `rotate(${hRotation}deg)`; // Corrected the typo here
    min.style.transform = `rotate(${mRotation}deg)`; // Corrected the typo here
    sec.style.transform = `rotate(${sRotation}deg)`; // Corrected the typo here

}

setInterval(displayTime, 1000);
