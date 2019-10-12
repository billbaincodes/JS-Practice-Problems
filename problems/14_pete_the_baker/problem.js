
const problem = (recipe, ingredients) => {
  // Your code here
  let ingredientList = Object.keys(recipe)
  let availability = []

  for (let i = 0; i < ingredientList.length; i++) {
    let res = ingredients[ingredientList[i]] / recipe[ingredientList[i]]
    if (isNaN(res)){
      return 0
    } else {
      availability.push(Math.floor(res))
    }
  }
  return availability.sort(function(a, b){return a-b})[0]
}

module.exports = problem



// ROUND I
// let ingredientList = []
// let availability = []

// for (let item in recipe) {
//   ingredientList.push(item);
// }

// for (let i = 0; i < ingredientList.length; i++) {
//   let required = recipe[ingredientList[i]]
//   let available = ingredients[ingredientList[i]]
//   if (available < required || available === undefined) {
//     return 0
//   } else {
//     availability.push(Math.floor(available / required))
//   }
// }
// return availability.sort(function(a, b){return a-b})[0]
