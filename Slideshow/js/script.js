let currentSlide = 0;


const imgArray = ["hast.jpg", "hund.jpg", "varg.jpg"];

const rubrik = ["Horse", "Dog", "Wolf"];

const description =  ["This is a horse, Super duper fast", "This is a dog, Super loyal and friendly (except small ones they always mad for no reason)", "This is a wolf, bigger dogs pretty much."];

const animalName =   document.getElementById("slide-heading");
const animalDescription = document.getElementById("slide-text");
const animalImage =   document.getElementById("slide-img");
const slideNumber =   document.getElementById("slide-nr");

/*

let animal = [{
        animalHeader: "Horse",
        description: "This is a horse.",
    },
    {
        animalHeader: "dog",
        description: "This is a dog.",
    },
    {
        animalHeader: "wolf",
        description: "This is a wolf.",
    }
];

*/


let changePage = () =>{
    animalName.innerHTML = rubrik[currentSlide];
    animalDescription.innerHTML = description[currentSlide];
    animalImage.src= "img/" +imgArray[currentSlide];
    slideNumber.innerHTML = `${currentSlide +1 } / 3`;
};



function changeSlide(direction){
    currentSlide = currentSlide + direction;

    let arrayLength = imgArray.length;
    if(currentSlide >= arrayLength){
        currentSlide = 0;
    }
    else if (currentSlide < 0){
        currentSlide = arrayLength -1;
    }
    console.log(currentSlide);
    changePage();
};

document.addEventListener("DOMContentLoaded", (event) =>{
    changePage();
});