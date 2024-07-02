function calculateDateDifference(startDate, endDate) {
    // Calculate the difference in milliseconds
    let difference = endDate.getTime() - startDate.getTime();

    const millisecondsInMinute = 1000 * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30.436875; // Average month length
    const millisecondsInYear = millisecondsInDay * 365.25; // Average year length including leap years

    // Calculate years
    let years = Math.floor(difference / millisecondsInYear);
    difference -= years * millisecondsInYear;

    // Calculate months
    let months = Math.floor(difference / millisecondsInMonth);
    difference -= months * millisecondsInMonth;

    // Calculate days
    let days = Math.floor(difference / millisecondsInDay);
    difference -= days * millisecondsInDay;

    // Calculate hours
    let hours = Math.floor(difference / millisecondsInHour);
    difference -= hours * millisecondsInHour;

    // Calculate minutes
    let minutes = Math.floor(difference / millisecondsInMinute);

    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes
    };
}


let submitBtn = document.querySelector(".btn")
let startDateInput = document.getElementById("startdate");
let endDateInput = document.getElementById("enddate");
let resultDiv = document.querySelector(".result-inner");

// Example usage:

submitBtn.addEventListener("click", (e) => {
    let startValue =  startDateInput.value.split("-")
    let endValue =  endDateInput.value.split("-")
    console.log( startValue);

    if (startValue.length === 1 || endValue.length === 1) {
        alert("Please Fill The Both Date")
        return null;
    }
    
    let startDate = new Date(startValue[0], startValue[1], startValue[2]); // August is 7 (0-based index)
    let endDate = new Date(endValue[0], endValue[1], endValue[2]); // June is 5 (0-based index)
    
    
    let {years, months, days, hours, minutes } = calculateDateDifference(startDate, endDate);


    if (resultDiv.querySelector("h1")) {
        resultDiv.querySelector("h1").style.transition = 'scale 500ms ease';
        resultDiv.querySelector("h1").style.scale = 0;
    }

    
    setTimeout(() => {
        resultDiv.innerHTML =`<h2><span>${years} </span>YEARS </h2>
        <h2><span>${months} </span>months </h2>
        <h2><span>${days} </span>DAY </h2>
        <h2><span>${hours} </span>HOURS </h2>
        <h2><span>${minutes} </span>MINUTES </h2>
        `

        // resultDiv.querySelector("h2").style.transition = 'scale 500ms ease';
        // resultDiv.querySelector("h2").style.scale = 1;

        
        ToggleEvent(resultDiv);
    }, 501)
    

    
    // console.log(` ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes`);
    
})


const ToggleEvent = (resultDiv) => {

    // resultDiv.querySelector("h1").style.transition = 'all 0.5s ease';
    // resultDiv.querySelector("h1").scale = 0;
    Array.from(resultDiv.querySelectorAll("h2")).forEach(elem => {
        setTimeout(() => {
            elem.style.transition = 'scale 500ms ease';
            elem.style.scale = 1;
        }, 501)
    });






};
