# Title

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit. Return `0` if input is already single digit.

## Input / Output

    39 / 3
    1) 3*9 = 27
    2) 2*7  = 14
    3) 1*4 = 4

    999 / 4
    1) 9*9*9 = 729
    2) 7*2*9 = 126
    3) 1*2*6 = 12
    4) 1*2 = 2

    4 / 0
