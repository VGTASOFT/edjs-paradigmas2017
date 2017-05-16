;
((c) => {
  /*
    reduce, map y filter - métodos funcionales implementados en ES5

    reduce
      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
      Reune resultados
      Se usa como acumulador de resultados
      Espera una expresión que cuente con un parámetro acumulador y el elemento en el que se encuentra el iterador
      Lo que devuelve reduce es el valor acumulado
      Se comporta parecido un 'GROUP BY' de SQL

    map
      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
      Transforma datos
      Recorre un array de elementos y transforma sus datos por medio de una función en nuevo array
      Recibe una expresión como parámetro que realiza la transformación

    filter
      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
      Elimina datos no deseados
      Espera una expresión que indique si el elemento en el que se encuentra es deseado o no
      Ideal para hacer búsquedas en un array
      Se comporta parecido a un 'WHERE' de SQL
  */

  c('**********Métodos Funcionales de ES5**********')
  c('reduce')
  c( [1, 2, 3, 4, 5].reduce( (acumulado, elemento) => acumulado + elemento) )
  c( [1, 2, 3, 4, 5].reduce( (acumulado, elemento) => acumulado * elemento) )
  c('map')
  c( [1, 2, 3, 4, 5].map( elemento => -elemento ) )
  c( [1, 2, 3, 4, 5].map( elemento => elemento * elemento ) )
  c('filter')
  c( [1, 2, 3, 4, 5].filter( elemento => elemento % 2 === 0 ) )
  c( [1, 2, 3, 4, 5].filter( elemento => elemento % 2 === 1 ) )
})(console.log);

((c) => {
  // Taller Avanzado de JS en el canal de YouTube EDteam https://www.youtube.com/watch?v=iwQaUs9nYWU
  c('**********Métodos Funcionales con Vanilla JS**********')
  const reducir = (vector, funcion, inicial) => {
    return (function recursiva(vector, funcion, indice, acumulado) {
      return indice > vector.length - 1
        ? acumulado
        : recursiva(vector, funcion, indice + 1, funcion( acumulado, vector[indice], indice, vector ) )
    })(vector, funcion, 0, inicial)
  }

  const transformar = (vector, funcion) => {
    return reducir(vector, (acumulado, elemento, indice, vector) => {
      return acumulado.concat( funcion( elemento, indice, vector ) )
    }, [])
  }

  const filtrar = (vector, funcion) => {
    return reducir(vector, (acumulado, elemento, indice, vector) => {
      return funcion( elemento, indice, vector )
        ? acumulado.concat(elemento)
        : acumulado
    }, [])
  }

  c('reducir')
  c( reducir( [1, 2, 3, 4, 5], (acumulado, elemento) => acumulado + elemento, 0) )
  c( reducir( [1, 2, 3, 4, 5], (acumulado, elemento) => acumulado * elemento, 1) )
  c('transformar')
  c( transformar( [1, 2, 3, 4, 5], elemento => -elemento ) )
  c( transformar( [1, 2, 3, 4, 5], elemento => elemento * elemento ) )
  c('filtrar')
  c( filtrar( [1, 2, 3, 4, 5], elemento => elemento % 2 === 0 ) )
  c( filtrar( [1, 2, 3, 4, 5], elemento => elemento % 2 === 1 ) )
})(console.log);