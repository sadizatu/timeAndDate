let todaysDate = new Date();
let day = todaysDate.getDay();
let daysOfTheWeek = todaysDate.get = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daysOfTheWeek[day] + ".")
let hours = todaysDate.getHours();
let minutes = todaysDate.getMinutes();
let seconds = todaysDate.getSeconds();
let logics = (hours >= 12) ? "PM" : "AM";
hours = (hours === 0) ? hours - 12 : hours;
if (hours === 0 && logics === "PM") {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        logics = "Noon";
    } else {
        hours = 12;
        logics = "PM";

    }
}
if (hours === 0 && logics === "AM") {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        logics = "Midnight";
    } else {
        hours = 12;
        logics = "AM";

    }
}
console.log("Current Time is " + hours + logics + " : " + minutes + " : " + seconds);