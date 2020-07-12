// Tests for task 1

describe('copy', () => {
    it('should be a copy of ourCar', () => {
        const ourCar = {
            type: 'Nissan',
            color: 'Silver',
            class: 'D',
            year: 2002,
            fuel: 'petrol',
        };

        expect(copy(ourCar)).to.deep.equal(ourCar);
        expect(copy(ourCar)).to.deep.equal(thirdCar);
    });
});

describe('clone', () => {
    it('should not be equal', () => {
        expect(ourCar).to.not.equal(newCar);
    });
});

// Test for task 2

describe('number of strings', () => {
    it('should give number of strings', () => {
        expect(numberOfStrings(ourCar)).to.equal(4);
    });

    it('should give number of strings', () => {
        expect(numberOfStrings(anotherCar)).to.equal(5);
    });
});