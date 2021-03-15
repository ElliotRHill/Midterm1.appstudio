let myAnimals = [ 'dog', 'cat', 'horse', 'meerkat']
let yourAnimal = prompt('Enter in an animal')
let animalLC = yourAnimal.toLowerCase()
myAnimals.push(animalLC)


console.log(`The last animal is a/an ${myAnimals[4]}`)