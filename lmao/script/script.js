const yesBtn = document.getElementsByClassName("yes");
let yesClickCount = 0; // Counter for Yes button clicks

function no() {
    noClickCount++; // Increment the counter each time the "No" button is clicked

    // Iterate through each "Yes" button
    for (let i = 0; i < yesBtn.length; i++) {
        let currentPadding = window.getComputedStyle(yesBtn[i]).padding;

        // Extract the numeric value (assume it's in pixels)
        let currentPaddingValue = parseInt(currentPadding) || 0;

        // Increase padding by 3x
        yesBtn[i].style.padding = `${currentPaddingValue * 3}px`;
    }

    // Check if "No" button has been clicked 3 or 4 times
    if (noClickCount >= 3) {
        document.querySelector(".no").remove(); // Remove the "No" button
    }
}

function yes() {
    // Hide page-1
    document.querySelector(".page-1").style.display = "none";

    // Show page-2
    document.querySelector(".page-2").style.display = "flex";

    // Show the reveal text
    document.querySelector("#reveal").style.display = "flex";
}

// Question 2 Functionality
function ax() {
    // Hide page-2
    document.querySelector(".page-2").style.display = "none";

    // Show page-3
    document.querySelector(".page-3").style.display = "flex";
}

// Add event listener for the Yes button on Page 3
const yesBtn2 = document.getElementById("yes2");
yesBtn2.addEventListener("click", randomizeYesLocation);

function randomizeYesLocation() {
    yesClickCount++; // Increment Yes button click count

    // Randomize button position
    const button = document.getElementById("yes2");
    button.style.position = "absolute";
    button.style.top = `${Math.random() * 80}vh`; // Random vertical position
    button.style.left = `${Math.random() * 80}vw`; // Random horizontal position

    // Change button text to "No" after 3–4 clicks
    if (yesClickCount >= 3) {
        button.innerHTML = "No";
        button.removeEventListener("click", randomizeYesLocation); // Remove randomize behavior
        button.addEventListener("click", no); // Change behavior to the "No" function
    }
}

