
document.getElementById("play-button").addEventListener("click", function() {
    let audio = document.getElementById("myAudio");
    audio.play();
});


let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}



// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByClassName("goal");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Don't leave the form blank!");
    } else {
        document.getElementById("myOL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('fullscreen-video');
    video.webkitRequestFullscreen = undefined;
    video.mozRequestFullScreen = undefined;
    const fullscreenButton = document.getElementById('fullscreen-button');

    fullscreenButton.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    });
});


document.getElementById("fullscreen-button1").addEventListener("click", function () {
    const video1 = document.getElementById("fullscreen-video1");
    if (video1.style.display === "none") {
        video1.style.display = "block";
    } else {
        video1.style.display = "none";
    }
})
document.getElementById("fullscreen-button2").addEventListener("click", function () {
    const video2 = document.getElementById("fullscreen-video2");
    if (video2.style.display === "none") {
        video2.style.display = "block";
    } else {
        video2.style.display = "none";
    }
})
document.getElementById("fullscreen-button3").addEventListener("click", function () {
    const video3 = document.getElementById("fullscreen-video3");
    if (video3.style.display === "none") {
        video3.style.display = "block";
    } else {
        video3.style.display = "none";
    }
})



// // Add an event listener to the form with the id "myForm"
//     document.getElementById("myForm").addEventListener("submit", function (event) {
//         // Get the email input element and its value
//         const emailInput = document.getElementById("email");
//         const emailValue = emailInput.value;
//
//         // Regular expression to validate email format
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//
//         // Check if the email value matches the regular expression
//             if (!emailRegex.test(emailValue)) {
//                 // If it doesn't match, show an alert and prevent form submission
//                 alert("Please try again.");
//                 event.preventDefault(); // Prevent the form from submitting
//             }
//             else {
//                 alert("Successfully logged in!");
//             }
//     });



function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked'),
        q6: document.querySelector('input[name="q6"]:checked'),
        q7: document.querySelector('input[name="q7"]:checked'),
        q8: document.querySelector('input[name="q8"]:checked'),
        q9: document.querySelector('input[name="q9"]:checked'),
        q10: document.querySelector('input[name="q10"]:checked')
    };

    let score = 0;

    if (answers.q1 && answers.q1.value === "a") {
        score++;
    }

    if (answers.q2 && answers.q2.value === "b") {
        score++;
    }

    if (answers.q3 && answers.q3.value === "a") {
        score++;
    }

    if (answers.q4 && answers.q4.value === "c") {
        score++;
    }

    if (answers.q5 && answers.q5.value === "a") {
        score++;
    }

    if (answers.q6 && answers.q6.value === "b") {
        score++;
    }

    if (answers.q7 && answers.q7.value === "c") {
        score++;
    }

    if (answers.q8 && answers.q8.value === "b") {
        score++;
    }

    if (answers.q9 && answers.q9.value === "c") {
        score++;
    }

    if (answers.q10 && answers.q10.value === "c") {
        score++;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score is: ${score} out of 10`;
}


// Set the date and time for the new season
const newSeasonDate = new Date('2023-12-01T00:00:00').getTime();
function updateCountdown() {
    const now = new Date().getTime(); // Get the current date and time
    const distance = newSeasonDate - now; // Calculate the time difference between now and the new season start

    // Check if the new season has already started
    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "Season has started!";
    } else {
        // Calculate days, hours, minutes, and seconds remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the remaining time with leading zeros
        document.getElementsByClassName("time")[0].innerHTML = formatTime(days);
        document.getElementsByClassName("time")[1].innerHTML = formatTime(hours);
        document.getElementsByClassName("time")[2].innerHTML = formatTime(minutes);
        document.getElementsByClassName("time")[3].innerHTML = formatTime(seconds);
    }
}

// Helper function to format time with leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateCountdown(); // Initial call to update the countdown
setInterval(updateCountdown, 1000); // Update the countdown every second


// Add an event listener to the form with the ID "feedbackForm"
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Thank you for your feedback!"); // Display an alert message to thank the user for their feedback

    // Get a reference to the "feedbackForm" element
    const feedbackForm = document.getElementById("feedbackForm");

    // Hide the "feedbackForm" by changing its CSS display property to "none"
    feedbackForm.style.display = "none";
});


