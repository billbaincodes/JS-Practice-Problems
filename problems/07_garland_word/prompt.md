# Garland Word

A garland word is one that starts and ends with the same N letters in the same order, for some N greater than 0, but less than the length of the word. For instance, "onion" is a garland word of degree 2, because its first 2 letters "on" are the same as its last 2 letters. 

Write a function that, given a lowercase word, returns the degree of the word if it's a garland word, and 0 otherwise.

## Input / Output

* 'programmer' / 0
* 'ceramic'    / 1
* 'onion' / 2
* 'alfalfa' / 4
* 'hotshots' / 4
* 'abracadabra' / 4
* 'couscous' / 4
