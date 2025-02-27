let value :any = 11;
value = "abcd";
value = true;
console.log(value) // true      variable works like in JS

let unknown_value : unknown = 11;
unknown_value = "abcd";
if(typeof unknown_value === "string"){
    console.log(unknown_value.toUpperCase()) // ABCD
}
else{
    console.log("Not a string") 
}

