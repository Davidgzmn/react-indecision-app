var nameVar = "Andrew";
var nameVar = "Mike"
console.log('namevar', nameVar);

let nameLet = "David"
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Bobby"
console.log("nameConst" , nameConst);

function getPetName(){
    let petName = "Hal";
    return petName;
}

const petName = getPetName();
console.log(petName);

var fullName = "Andrew Mead";

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);