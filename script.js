// Task 1

function copy(obj) {
    let clone = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = obj[key];
        }
    }

    return clone;  
}

const ourCar = {
    type: 'Nissan',
    color: 'Silver',
    class: 'D',
    year: 2002,
    fuel: 'petrol',
}

let newCar = copy(ourCar);
let thirdCar = copy(ourCar);

console.log(newCar);
console.log(thirdCar);
console.log(ourCar === newCar);
console.log(ourCar === thirdCar);


// Task 2

function numberOfStrings(obj) {
    let counter = 0;

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof(obj[key]) === 'string') { 
          counter++;
        };
    };
    
    return counter;
};

console.log(numberOfStrings(ourCar));

const anotherCar = {
    type: 'Nissan',
    color: 'Silver',
    class: 'D',
    year: 2002,
    fuel: 'petrol',
    model: 'Primera',
}

console.log(numberOfStrings(anotherCar));