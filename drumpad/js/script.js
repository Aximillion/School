pad1Data = {};
pad2Data = {};

let activePad = 1;

fetch("audio.Json")
.then(response => response.json())
.then(data =>{
    pad1Data = data;
    console.log("Audio data loaded:", pad1Data);
    assignSounds();
})
.catch(error => {
    console.log("error loading json file", error)
});

fetch("audio2.Json")
.then(response => response.json())
.then(data =>{
    pad2Data = data;
    console.log("Audio data loaded:", pad2Data);
})
.catch(error => {
    console.log("error loading json file", error)
});



function assignSounds(){
    const buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++){
        if (activePad === 1){
            buttons[i].dataset.audio = pad1Data.pad1Audio[i % pad1Data.pad1Audio.length];
        } else{
            buttons[i].dataset.audio = pad2Data.pad2Audio[i % pad2Data.pad2Audio.length];
        }
    }
}

function playSound(buttonIndex){
    const button = document.getElementById(`btn${buttonIndex}`);
    const audioSrc = button.dataset.audio;

    if(audioSrc){
        const audio = new Audio(audioSrc);
        audio.play();
    } else {
        console.log("No audio avaliable.");
    }
}


function container() {
    
    const padContainer = document.getElementById("pad1");
    for (let i = 1; i <= 12; i++) {
        const btn = document.createElement("div");
        btn.classList.add("btn"); // adds buttons to the class with the value of "i"
        btn.id = `btn${i}`;
        btn.setAttribute("tabindex", "0");
        btn.addEventListener("click", function(){
            if(activePad === 1){
                console.log(`btn${i} pad 1`);
                playSound(i);
            }
            else{
                console.log(`btn${i} pad 2`);
                playSound(i);
            }
        })
        padContainer.appendChild(btn);
        }
}
container();

function padChanger(){
    const padContainer = document.getElementById("pad1");
    const padButton1 = document.getElementById("padButton1");
    const padButton2 = document.getElementById("padButton2");

    padButton1.addEventListener("click", function(){
        activePad = 1;
        padContainer.classList.add("pad1-active");
        padContainer.classList.remove("pad2-active");
        console.log("pad 1 activated");

        // pad color changer
        const buttons = padContainer.getElementsByClassName("btn");
        for(i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "purple";
        }
        assignSounds();
    });

    padButton2.addEventListener("click", function () {
        activePad = 2;
        padContainer.classList.add("pad2-active");
        padContainer.classList.remove("pad1-active");
        console.log("Pad 2 activated");

        const buttons = padContainer.getElementsByClassName("btn");
        for(i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "red";
        }
        assignSounds();
    })

};


padChanger();
