console.log("Working")

const add = (a,b) => {
    return a+ b;
};

//console.log(add(55,1,100));

const user = {
    name: "David",
    cities:["guadalajara","Alicante","Vancouver"],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => `${this.name} has lived in ${city}!`);
        return(cityMessages);
    }
};

//console.log(user.printPlacesLived());

const multiplier = {
    numbers:[10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
