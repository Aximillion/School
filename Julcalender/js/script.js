const tarjoukset = {
    "christmasSpecials": [
      { "label": "Läppärit -20%", "code": "ASDJKL9023" },
      { "label": "Ilmainen toimitus", "code": "VNKJDO0987" },
      { "label": "Muistikortit ja muistitikut puoleen hintaan", "code": "IOSDFJ872" },
      { "label": "Geforce näytönohjaimet -30%", "code": "KLHJ8976" },
      { "label": "Samsung 55'' televisio 399€", "code": "SDFJKL9080" },
      { "label": "Robottipölynimuri 129€", "code": "PQWO23894" },
      { "label": "Verkkotuotteet -40%", "code": "Doe" },
      { "label": "1Tb SSD 49€", "code": "Doe" },
      { "label": "Intel tuotteet -22%", "code": "Doe" },
      { "label": "AMD 6600XT 249€", "code": "Doe" }
    ]
  };

const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth() +1 ;

function createDoors(){
  const calendarBody = document.getElementById("calendar-body");
  for(let i = 1; i <= 24; i++){
  const door = document.createElement("div");
  door.className = "calendar-door";
  door.id = `door${i}`;
  door.innerHTML = i;

  door.addEventListener("click", function(){
    if(i <= currentDate){;
    openDoor(i,door);
  }
  else {
    alert("You can't open that yet! go away shoo!!");
  }
  } 
);

  calendarBody.appendChild(door);
}
}

createDoors();

function openDoor(doorNumber, doorElement){
  doorElement.style.backgroundImage = 'url("/img/bild2.jpg")';
  const offer = randomOfferFunc();
  alert(`congratulations! you opened door number ${doorNumber}! and you got ${offer.label}`);
 
};



  function randomOfferFunc() {
    let randomIndex = Math.floor(Math.random() * tarjoukset.christmasSpecials.length);
    let randomizedOffer = tarjoukset.christmasSpecials[randomIndex];
    return randomizedOffer;
  }
  
