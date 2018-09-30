
//XMLHttpRequest  object maken, vervolgens database inladen, en request sturen naar server (ref Javascript en jQuery pg373)
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', true);
xhr.send();

//hoofdfunctie die pas werkt als de pagina geladen is
xhr.onload = function() {
    if(xhr.status === 200) {
      //functie oproepen met de juiste data
      parkingStates();
    }
};

function parkingStates(){
  let parkings = JSON.parse(xhr.responseText);
  console.log("If you can see this, everything is ok!");
  for (i = 0; i < 5; i++){
    let parkFree = parkings[i]['parkingStatus']['availableCapacity'];
    let parkMax = parkings[i]['parkingStatus']['totalCapacity'];
   //console.log(parkings[i]);
   
   
   //als er minder dan 20% vrije parking is, dan wordt de achtergrond rood
    if(parkFree < parkMax/5){
      //console.log("rood");
      document.getElementById('container').innerHTML += '<div class="parkings" style="background-color:orange;"> <h3>' + (parkings[i]['name'] + '</h3></div>');
    
    
      //als er minder dan 50% vrije parking is, dan wordt de achtergrond oranje
    }else if(parkFree < parkMax/2){
      //console.log("oranje");
      document.getElementById('container').innerHTML += '<div class="parkings" style="background-color:red;"> <h3>' + (parkings[i]['name'] + '</h3></div>');
    
    
      //als voorgaande if statements niet van toepassing waren, dan wordt de achtergrond kleur groen
    }else{
      //console.log("groen");
      document.getElementById('container').innerHTML += '<div class="parkings" style="background-color:green;"> <h3>' + (parkings[i]['name'] + '</h3></div>');
    };
    //console.log(parkFree + " from " + parkMax + " =" + parkFree/parkMax);
    
  }
};