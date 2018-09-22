
                                                                // arrow functions part 1
// // es5
// const square = function(x) {
//     return x * x;
// };
// // es6
// const squareArrow = (x) => x * x;
// console.log(squareArrow(5));
// const getFirstName = (name) => {
// if(name) {
//     return name.split(' ')[0]
// }
// };

// const getFirstName1 = (name) => name.split(' ')[0]

// console.log(getFirstName1('Ali Tahir'));


                                                                // arrow functions part 2

const user = {
    name: "Usama",
    cities: ['Bahawalpur', 'Islamabad', 'Lahore'],
    printLivedPlaces: function() {
        this.cities.forEach((city) => {
        })
    },
    printLivedPlaces2() {
        return this.cities.map((city) => this.name + " " + "has lived in " + city)
    }
}

console.log(user.printLivedPlaces2());

const multiplier = {
    arrNumber: [1,2,3,4,5],
    multiplyBy: 4,
    multiply() {
        return this.arrNumber.map((number) => number * this.multiplyBy)
    }
}

console.log("AAAA ", multiplier.multiply());