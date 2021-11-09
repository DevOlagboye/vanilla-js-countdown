let todayDate = document.querySelector("#today");
let countingTo = document.querySelector("#countingto");

todayDate.innerHTML = "Today's Date is: " + "<br>" + new Date();
countingTo.innerHTML =
    "We are Counting Down to: " + "<br>" + new Date("Jul 16, 2022 00:00:00");

//Date we are counting down to

let countDownDate = new Date("July 16 , 2022 00:00:00");

//Update the count down every 1 second

let interval = setInterval(function() {
    //Let's get today's date and time
    let today = new Date().getTime();
    //Finding the distance between today and the day we are counting down to

    let distance = countDownDate - today;

    //Here is time calculations for days, hours, minutes and seconds

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Showing the Results in the DOM
    let myCountDown = document.getElementById("countdown-text");
    myCountDown.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    let gif = document.querySelector("#image");
    if (distance < 0) {
        clearInterval(interval);
        gif.style.display = "block";
        myCountDown.innerHTML = "Happy Birthday to You!!!";
        todayDate.innerHTML = "Happy Birthday to You!!!";
        countingTo.innerHTML = "Happy Birthday to You!!!";
    }
});

let button = document.querySelector("#btn");
let countDown = () => {
    // let hHours = hDistance;
    // const hSeconds = Math.floor(hDistance) % 60;
    // let hMinutes = Math.floor(hDistance / 60) % 60;
    // console.log(hHours, hMinutes, hSeconds);
    let runCount = setInterval(function() {
        let now = new Date().getSeconds();
        //21,600,000 miliseconds is 6hrs
        let hDistance = 21600 - now;
        let Hhours = Math.floor(hDistance / 3600);
        let Hminutes = Math.floor((hDistance % 3600) / 60);
        let Hseconds = hDistance % 60;
        //console.log(now, hDistance, Hhours, Hminutes, Hseconds);
        button.innerHTML = Hhours + " h " + Hminutes + " m " + Hseconds + " s ";
        if (hDistance < 0) {
            clearInterval(runCount);
        }
    }, 1000);
};
//setInterval(runCount, 1000);
button.addEventListener("click", countDown);

console.log(today);
console.log(countDownDate);