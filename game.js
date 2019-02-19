window.addEventListener('load', function () {

    // Grabbing elements from the DOM
    const title = document.getElementById("title");
    const submitButton = document.getElementById("submit");
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    const quote = document.getElementById("quote");

    // Array of displayable quotes
    const quotesList = [
        "This is the initial test",
        "Now here is the second quote",
        "Here is the third quote",
        "Hello there, this is the fourth quote",
        "Fifth quote, checkin in"
    ];

    const randomNum = Math.floor(Math.random() * quotesList.length);

    // Puts a random quote on the page at load
    function loadQuote() {
        quote.innerHTML = quotesList[randomNum];
    }
    loadQuote();

    // Establishing array to fill with the appropriate amount of random numbers
    let randomNumList = [];

    // TODO: newNum variable to be addressed
    for (let i = 0; i < quotesList.length; i++) {
        newNum = i;
        randomNumList.push();
        console.log(randomNumList);
    }

    // Testing Event Listener on the DOM
    title.addEventListener("click", () => {
        console.log("Title clicked");
    });

    // Submit button currently only stops the timer, and does not submit anything
    submitButton.addEventListener("click", () => {
        stopTimer();
        console.log("Stopped the timer");
    });

    // Declared variables to be refactored in code
    const oneSecond = 1000;
    let totalSeconds = 0;
    const interval = setInterval(setTime, oneSecond);

    function setTime() {
        totalSeconds++;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        console.log("Seconds passed since loading: " + totalSeconds);
    }

    // Simple function to stop the timer
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
