;
((c) => {
  //1. Asignación implícita: 
    //Caso 1
      //this está siendo invocado dentro de un método
      //this, hace referencia al objeto, que contiene el método donde se invoca
  c('**********Asígnación de this Implícita**********')

  let yo = {
    nombre: 'Jonathan MirCha',
    edad: 33,
    saludar: function () {
      c(`Hola mi nombre es ${this.nombre}`)
    }
  }
  
  yo.saludar()
  //Caso 2
    //existe una función que recibe un objeto como parámetro, dentro de ella se le asigna un método al objeto
    //this en este caso hace referencia al objeto que se le añade el método

  let preparandoSaludo = function (obj) {
    obj.saludar = function () {
      c(`Hola mi nombre es ${this.nombre}`)
    }
  }

  const jon = {
    nombre: 'Jonathan',
    edad: 33
  }, alvaro = {
    nombre: 'Álvaro',
    edad: 37
  }

  preparandoSaludo(jon)
  preparandoSaludo(alvaro)

  jon.saludar()
  alvaro.saludar()

  //Caso 3
  //una función que retorna un objeto, que contiene un método que invoca this
  let Humano = function (nombre, edad, perro) {
    return {
      nombre: nombre,
      edad: edad,
      saludar: function () {
        c(`Hola mi nombre es ${this.nombre}`)
      },
      perro: {
        nombre: perro,
        saludar: function () {
          c(`${this.nombre} guauuu guauuu!!!`)
        }
      }
    }
  }

  const mircha = Humano('Jonathan', 33, 'kEnAi')
  mircha.saludar()
  mircha.perro.saludar()
  //Conclusión: this es invocado dentro de un método, implícitamente este hace referencia al objeto que contiene el método, sin importar si el método es añadido luego de haber sido creado el objeto, o si es una función que retorna un objeto
})(console.log);

((c) => {
  //2. Asignación explícita:
    //Desde ES5 cuando deseamos explícitamente referenciar this contamos con 3 métodos call, apply y bind
  c('**********Asígnación de this Explícita**********')

  const nombrar = function ( f1, f2, f3 ) {
    c(`${this.nombre} es el lenguaje Front end de la Web y tiene librerías y frameworks muy poderosos como: ${f1}, ${f2}, ${f3}`)
  }

  const lenguaje = {
    nombre: 'JavaScript',
    version: 6
  }

  let frameworks = ['Angular', 'React', 'Vue.js']

  //call: Permite definir a que va a hacer referencia this, en su primer parámetro, los parámetros siguientes son los que recibe la función
  nombrar.call( lenguaje, frameworks[0], frameworks[1], frameworks[2] )
  //apply: Permite referenciar this en el primer parámetro, pero este nos permite pasar un array, como los parámetros de la funcion
  nombrar.apply( lenguaje, frameworks )
  //bind: devuelve una función, en dónde this, hace referencia al objeto que pasamos en su parámetro
  let frameworksJS = nombrar.bind( lenguaje, frameworks[0], frameworks[1], frameworks[2] )
  frameworksJS()
})(console.log);

((c) => {
  //3. Asignación con new
    //Cuando invocamos this en un constructor, éste hace referencia al objeto que se ha instanciando
  c('**********Asignación con new**********')
  
  let Framework = function (nombre, url, lenguaje) {
    this.nombre = nombre
    this.url = url
    this.lenguaje = lenguaje
  }

  const react = new Framework('React', 'https://facebook.github.io/react/', 'JavaScript'),
    vue = Object.create(Framework)
  vue.nombre = 'Vue.js'
  c(react, vue)
})(console.log);

((c) => {
  //4. Asignación Global
    //Uno de los grandes errores con this, es que cuando no se tiene una referencia al objeto, que representa this, este hace referencia al objeto global:
      //window en los navegadores
      //global en Node.js
  c('**********Asignación Global**********')
  const dimeUnFramework = function () {
    c(this.nombre)
  }

  dimeUnFramework()
  //variable global
  //nombre = 'Angular'
  window.nombre = 'Angular'
  dimeUnFramework()
})(console.log);

((c) => {
  //5. Arrow Functions
  c('**********Arrow Functions y el problema de this**********')

  const lenguaje = {
    name: 'JavaScript',
    version: 6,
    frameworks: [
      { name: 'Angular', url: 'https://angular.io/' },
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Vue.js', url: 'https://vuejs.org/' }
    ],
    nombrar: function () {
      //El problema de this en JavaScript
      /*this.frameworks.forEach(function (fw) {
          c(`${fw.name} es un framework de ${this.name}`)
      })*/
      //Solución ES3
      /*let that = this
      this.frameworks.forEach(function (fw) {
        c(`${fw.name} es un framework de ${that.name}`)
      })*/
      //Solución ES5
      /*this.frameworks.forEach(function (fw) {
          c(`${fw.name} es un framework de ${this.name}`)
      }.bind(this))*/
      //Solución ES6
      this.frameworks.forEach( fw => c(`${fw.name} es un framework de ${this.name}`) )
    }
  }
  
  lenguaje.nombrar()
})(console.log);