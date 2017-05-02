const numbers = [1, 2, 3, 4, 5]

/* Código Imperativo */

console.time('Imperativo')
function squared(numbers) {
  let arr = []
  for ( let i = 0; i < numbers.length; i++ ) {
    arr.push( numbers[i] * numbers[i] )
  }

  return console.log(arr)
}

squared(numbers)
console.timeEnd('Imperativo')

/* Código Declarativo */
console.time('Declarativo')

console.log( numbers.map( num => num * num ) )

console.timeEnd('Declarativo')