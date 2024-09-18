let hr = document.querySelector('#hr');  
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');


setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;   
    let minute = day.getMinutes() * 6;  
    let second = day.getSeconds() * 6;  
    
    hr.style.transform = `rotate(${hour + (minute / 12)}deg)`;  
    mn.style.transform = `rotate(${minute}deg)`;  
    sc.style.transform = `rotate(${second}deg)`; 
}, 1000);  
