var dateField = document.getElementById("date")
var timeField = document.getElementById("time")

function setTime(){
    let currentDate = new Date();
    timeField.innerText = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    dateField.innerText = `${currentDate.toLocaleDateString()}`
}

setInterval(setTime, 1000)
