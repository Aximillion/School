const yesBtn = document.getElementsByClassName("yes");
let noClickCount = 0; // Counter for "No" button clicks

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
