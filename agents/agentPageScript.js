// Get references to four HTML elements with IDs "btn1," "btn2," "btn3," and "btn4"
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

// Add click event listeners to each button
btn1.addEventListener("click", function() {
    // When btn1 is clicked, show an alert with the message "Show a tutorial video?"
    alert("Show a tutorial video?");
});

btn2.addEventListener("click", function() {
    alert("Show a tutorial video?");
});

btn3.addEventListener("click", function() {
    alert("Show a tutorial video?");
});

btn4.addEventListener("click", function() {
    alert("Show a tutorial video?");
});

document.addEventListener("DOMContentLoaded", function() {
    const abilityButtons = document.querySelectorAll(".btn-utils");
    const abilityDescriptions = document.querySelectorAll(".ability-description");

    abilityButtons.forEach(function(button, index) {
        button.addEventListener("mouseover", function() {
            const description = abilityDescriptions[index];
            if (description.classList.contains("open")) {
                description.classList.remove("open");
            } else {
                // Close all other descriptions before opening the clicked one
                abilityDescriptions.forEach((desc) => desc.classList.remove("open"));
                description.classList.add("open");
            }
        });
    });
});

