# Who Likes It?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

## Input / Output
* [] // must be "no one likes this"
* ["Peter"] // must be "Peter likes this"
* ["Jacob", "Alex"] // must be "Jacob and Alex like this"
* ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
* ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"