/*************************************************************************
 updateTime fuction is used to update the time of the clock. It show the updates the time in DOM as well as generate the greeting dinamically according to the time of the day
**************************************************************************/
function updateTime(){
    const HR = document.querySelector("#hr-container > div > p");
    const MIN = document.querySelector("#min-container > div > p");
    const SEC = document.querySelector("#sec-container > div > p");
    const MERIDIEM = document.querySelector("#meridiem");
    const GREETING = document.querySelector("#greeting");

    let currTime = new Date();
    let currHour = currTime.getHours();
    let currMin = currTime.getMinutes();
    let currSec = currTime.getSeconds();

    if(currHour < 12){
        MERIDIEM.innerText = "AM";
        GREETING.innerText = "Good Morning!"
    } else {
        MERIDIEM.innerText = "PM";
        if(currHour < 17){
            GREETING.innerText = "Good Afternoon!"
        } else {
            GREETING.innerText = "Good Evening!"
        }

    }

    currHour = currHour > 12 ? currHour == 24 ? currHour / 2 : currHour % 12 : currHour;
    HR.innerText = currHour < 10 ? "0" + currHour: currHour;
    MIN.innerText = currMin < 10 ? "0" + currMin : currMin;
    SEC.innerText = currSec < 10 ? "0" + currSec : currSec;
}

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(updateTime,10);
})