;
((c) => {
  c('**********Programación Asíncrona**********')
  c('**********Callbacks**********')

  const cuadrado = (value, callback) => {
    setTimeout(() => {
      callback(value, value * value)
    }, 0 | Math.random() * 100)
  }

  cuadrado(0, (value, result) => {
    c('Inicio Callback')
    c(`Callback: ${value}, ${result}`)
    cuadrado(1, (value, result) =>  {
      c(`Callback: ${value}, ${result}`)
      cuadrado(2, (value, result) =>  {
        c(`Callback: ${value}, ${result}`)
        cuadrado(3, (value, result) =>  {
          c(`Callback: ${value}, ${result}`)
          cuadrado(4, (value, result) =>  {
            c(`Callback: ${value}, ${result}`)
            cuadrado(5, (value, result) =>  {
              c(`Callback: ${value}, ${result}`)
              cuadrado(6, (value, result) =>  {
                c(`Callback: ${value}, ${result}`)
                cuadrado(7, (value, result) =>  {
                  c(`Callback: ${value}, ${result}`)
                  cuadrado(8, (value, result) =>  {
                    c(`Callback: ${value}, ${result}`)
                    cuadrado(9, (value, result) =>  {
                      c(`Callback: ${value}, ${result}`)
                      cuadrado(10, (value, result) =>  {
                        c(`Callback: ${value}, ${result}`)
                        c('Fin Callback')
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
  c('**********Callback Hell yeeiii!!!!**********')
})(console.log);

((c) => {
  c('**********Promises**********')

  const cuadrado = value => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ value: value, result: value * value })
      }, 0 | Math.random() * 100)
    })
  }

  cuadrado(0)
    .then(obj => {
      c('Inicio Promise')
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(1)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(2)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(3)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(4)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(5)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(6)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(7)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(8)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(9)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(10)  
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      c('Fin Promise')
    })
    .catch( err => c(err) )
  c('**********Promises Hell yeeiii!!!!**********')
})(console.log);

((c) => {
  c('**********Generators**********')
})(console.log);