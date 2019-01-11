window.addEventListener('load', function () {

    const title = document.getElementById("title");
    const submitButton = document.getElementById("submit");
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    const quote = document.getElementById("quote");

    title.addEventListener("click", () => {
        console.log("Title clicked");
    });

    submitButton.addEventListener("click", () => {
        stopTimer();
        console.log("Stopped the timer");
    });
 
    function updateQuote() {
        quote.innerHTML = "This is a test";
    }

    updateQuote();

    const oneSecond = 1000;
    let totalSeconds = 0;


    let interval = setInterval(setTime, oneSecond);

    function setTime() {
        totalSeconds++;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        console.log("Seconds passed since loading: " + totalSeconds);
    }

    function stopTimer() {
        clearInterval(interval);
    }

    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

}, false);



// document.getElementsByClassName('title');
// document.getElementsByClassName('content');



// // title.addEventListener('click', function () {
// //     console.log("You've clicked the title!");
// // });


// console.log("JavaScript activated");

