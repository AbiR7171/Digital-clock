
var clock = setInterval(setLocalTime, 1000);
function setLocalTime(){
    var date = new Date();
    var time  = date.toLocaleTimeString();
    document.getElementById('Clock').innerHTML = time;
    
}
