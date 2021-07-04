// Creating Clock using JavaScript
let data;
let date;
let time;
let option = {weekday:'long', year:'numeric', month:'long', day:'numeric'}
setInterval(() => {
     data = new Date;
     date = data.toLocaleDateString(undefined, option);
     time = data.getHours()+" : "+data.getMinutes()+" : "+data.getSeconds();
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}, 1000);
