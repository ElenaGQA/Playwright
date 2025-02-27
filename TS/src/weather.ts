let cityName: String = "Toronto";
let current_temp: number = 20;
let isRaining: boolean = false;
let current_wind: number = 12.5;
let isSunny: boolean = true;

let adviceMessage: String;

if (isRaining && current_temp > 15) {
    adviceMessage = "Please, take umbrella"
}
else if (isSunny && current_temp > 15){
    adviceMessage = "Please, go for a walk"
}
else if (current_temp < 0){
    adviceMessage = "Wear warm clothes"
}
else if (current_wind > 20){
    adviceMessage = "Wear windbreaker"
}
else{
    adviceMessage = "The weather is nice"
}

console.log(`The weater in ${cityName} currently: the tempreture is ${current_temp} C, wind speed is ${current_wind} km/h. ${adviceMessage} `)