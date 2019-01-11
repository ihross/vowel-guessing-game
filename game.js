window.addEventListener('load', function () {
    const title = document.getElementById("title");
        title.addEventListener("click", () => {
            console.log("Title clicked")
        });

    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    let totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        totalSeconds++;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    const oneSecond = 1000;
    let num = 0;
    setInterval(function() {
        num++;
        console.log("time passed: " + num);
    }, oneSecond);

}, false);



// document.getElementsByClassName('title');
// document.getElementsByClassName('content');



// // title.addEventListener('click', function () {
// //     console.log("You've clicked the title!");
// // });


// console.log("JavaScript activated");

