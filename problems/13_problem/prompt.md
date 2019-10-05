# Directions Reduction

### Once upon a time, on a way through the old wild west…
… a man was given directions to go from one point to another. The directions were `"NORTH", "SOUTH", "WEST", "EAST"`. Clearly `"NORTH"` and `"SOUTH"` are opposite, `"WEST"` and `"EAST"` too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

### How I crossed the desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

`["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]`

You can immediatly see that going `"NORTH"` and then `"SOUTH"` is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply: `["WEST"]`

## Notes
Not all paths can be made simpler. The path `["NORTH", "WEST", "SOUTH", "EAST"]` is not reducible. `"NORTH"` and `"WEST"`, `"WEST"` and `"SOUTH"`, `"SOUTH"` and `"EAST"` are not directly opposite of each other and can't become such. Hence the result path is itself : `["NORTH", "WEST", "SOUTH", "EAST"]`

## Input / Output

`["NORTH", "SOUTH", "EAST", "WEST"]` // `[]`

`["NORTH", "WEST", "SOUTH", "EAST"]` // `["NORTH", "WEST", "SOUTH", "EAST"]`

`["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]` // `["WEST"]`