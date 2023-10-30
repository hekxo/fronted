
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


// Add an event listener to the form with the id "myForm"
    document.getElementById("myForm").addEventListener("submit", function (event) {
        // Get the email input element and its value
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value;

        // Regular expression to validate email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Check if the email value matches the regular expression
            if (!emailRegex.test(emailValue)) {
                // If it doesn't match, show an alert and prevent form submission
                alert("Please enter a valid email address.");
                event.preventDefault(); // Prevent the form from submitting
            }
            else {
                alert("Successfully logged in your email!");
            }
    });

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
        document.getElementsByClassName("time").innerHTML = formatTime(days);
        document.getElementsByClassName("time").innerHTML = formatTime(hours);
        document.getElementsByClassName("time").innerHTML = formatTime(minutes);
        document.getElementsByClassName("time").innerHTML = formatTime(seconds);
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






