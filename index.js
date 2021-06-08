function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}
let wordExe = function(fuelLevel){

  if(checkFuel(fuelLevel) === "green"){
    return fuelLevel - 99999;
  } else if (checkFuel(fuelLevel) === "yellow"){
    return fuelLevel - 49999;
  } else {
    return fuelLevel;
  }
  };

  let notAPirate = function(arrBooty) 
  {
    let swag = arrBooty.splice(3,2);
    arrBooty.push("Cheese","Crackers");
    return swag;
  
  }

  function irs(fuelLevel, cargoHold)
  {
    let arr = notAPirate(cargoHold);
    return ( `Raided ${wordExe(fuelLevel)} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`)
  }

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

console.log(irs(fuelLevel,cargoHold));

