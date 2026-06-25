import { test, it, assert, expect, describe } from 'vitest';
import { add, divide } from './calcUtils';

// test('Addition works correctly', () => {});

describe('Add functionallity', () => {

    it('Should return positive number when adding two positive numbers', () => {
        //AAA Pattern

        // Arrange
        const firstNumber = 1;
        const secondNumber = 2;
        const expectedResult = 3;

        // Act
        const actualResult = add(firstNumber, secondNumber);

        // Assert

        // TDD - test driven check
        assert.equal(expectedResult, actualResult);

        // BDD - behavior driven check
        expect(actualResult).toBe(expectedResult);
    });

    it('Should return negative result number when adding two negative numbers', () => {
        const firstNumber = -1;
        const secondNumber = -2;
        const expectedResult = -3;

        expect(add(firstNumber, secondNumber)).toBe(expectedResult);
    });
})

describe('Divide funcionallity', () => {
    it('Should return half the number value after division by two', () => {
        const inputNumber = 6;
        const dividerNumber = 2;
        const expectedResult = 3;

        expect(divide(inputNumber, dividerNumber)).toBe(expectedResult);
    })
})
