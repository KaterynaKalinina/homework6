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
newCar.model = 'Primera';

console.log(newCar);
console.log(ourCar === newCar);


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

const ourCar = {
    type: 'Nissan',
    color: 'Silver',
    class: 'D',
    year: 2002,
    fuel: 'petrol',
}

console.log(numberOfStrings(ourCar));