;
((c) => {
  //Anidación de Objetos
    //Un objeto es una colección de variables y funciones agrupadas de manera estructural
      //A las variables definidas dentro de un objeto se las denomina atributos
      //A las funciones definidas dentro de un objeto se las denomina métodos
    
    //Entonces un objeto puede tener propiedades y estas propiedades tener en su interior más propiedades que incluso sean objetos
    
    //Esto se representa en forma de árbol y podemos acceder a sus propiedades con:
      //1) Notación de punto
      //2) Notación de array
      //3) Notación mixta
  c('**********Anidación de Objetos**********')

  const curso = {
    titulo: 'Curso JS Avanzado: Paradigmas de Programación',
    docente: {
      nombre: 'Jonathan MirCha',
      edad: 33,
      nacionalidad: 'Mexicana',
      contacto: {
        email: 'jonamircha@gmail.com',
        url: 'http://jonmircha.com',
        twitter: '@jonmircha',
        ubicacion: 'CDMX'
      }
    },
    costo: 40,
    url: 'http:ed.team/cursos/javascript-avanzado',
    online: true,
    plataforma: {
      nombre: 'EDteam',
      url: 'https://ed.team',
      oficinas: [ 'Lima', 'Bogotá', 'Namekusei' ]
    }
  }

  c( curso.docente.nombre )
  c( curso['docente'].contacto['url'] )
  c( curso['plataforma']['nombre'] )
  c( curso.plataforma['url'] )
  c( curso.plataforma['oficinas'][2] )
})(console.log);

((c) => {
  //POO con Closures
  c('**********POO con Closures**********')
  function Carrito (articulo) {
    let _articulo = articulo,
      _carrito =  {}

    function agregar (articulo, cantidad) {
      _carrito[articulo] = cantidad
    }

    function quitar (articulo) {
      delete _carrito[articulo]
    }

    function _iterable () {
      let message = 'Carrito: \n'
      for ( let key in _carrito )
        message += `\t${_carrito[key]} ${key}\n`
      
      return message
    }

    function ver ( articulo = 'todos' ) {
      return ( articulo === 'todos' )
        //? _carrito
        ? _iterable()
        : ( _carrito.hasOwnProperty(articulo) )
          ? `${_carrito[articulo]} ${articulo}`
          : `El articulo ${articulo} no existe en el Carrito`
    }

    return {
      agregar: agregar,
      quitar: quitar,
      ver: ver
    }
  }

  const comics = Carrito('Comics')
  c(comics)
  comics.agregar('Flash Point Paradox', 2)
  comics.agregar('The Return of the Dark Knight', 3)
  comics.agregar('Civil War', 3)
  comics.agregar('Final Crisis', 1)
  c( comics.ver() )
  c( comics.ver('Flash Point Paradox') )
  c( comics.ver('Civil War') )
  comics.quitar('Civil War')
  c( comics.ver('Civil War') )
  c( comics.ver() )
})(console.log);

((c) => {
  //POO con Funciones Constructoras
  c('**********POO con Funciones Constructoras**********')
  function Carrito (articulo) {
    this._articulo = articulo
    this._carrito =  {}

    this.agregar =  (articulo, cantidad) => this._carrito[articulo] = cantidad

    this.quitar =  articulo => delete this._carrito[articulo]

    this._iterable = () => {
      let message = 'Carrito: \n'
      for ( let key in this._carrito )
        message += `\t${this. _carrito[key]} ${key}\n`
      
      return message
    }

    this.ver = ( articulo = 'todos' ) => {
      return ( articulo === 'todos' )
        //? this._carrito
        ? this._iterable()
        : ( this._carrito.hasOwnProperty(articulo) )
          ? `${this._carrito[articulo]} ${articulo}`
          : `El articulo ${articulo} no existe en el Carrito`
    }
  }

  const comics = new Carrito('Comics')
  c(comics)
  comics.agregar('Flash Point Paradox', 2)
  comics.agregar('The Return of the Dark Knight', 3)
  comics.agregar('Civil War', 3)
  comics.agregar('Final Crisis', 1)
  c( comics.ver() )
  c( comics.ver('Flash Point Paradox') )
  c( comics.ver('Civil War') )
  comics.quitar('Civil War')
  c( comics.ver('Civil War') )
  c( comics.ver() )
  c('**********Patrón de Diseño: Factoria o Fábrica**********')
  /*
    Esta forma de codificar las funciones como clases se conoce como Factory Pattern o Template functions
    
    Un problema importante que tiene este tipo de estructura, es que cuando creamos un nuevo objeto a partir de estas funciones, se reservará espacio en memoria para toda las funciones
    
    Con un objeto creado no supone mucha desventaja, pero con varios objetos sí
  */
  const libros = new Carrito("Libros"),
    musica = new Carrito("Música"),
    juegos = new Carrito("Juegos"),
    peliculas = new Carrito("Peliculas"),
    series = new Carrito("Series")
  
  //Esto supone que los métodos agregar, quitar ver, e _iterable están siendo replicados en memoria, lo que es ineficiente
  c(
    libros, '\n',
    musica, '\n',
    juegos, '\n',
    peliculas, '\n',
    series
  )

  //Para solucionar esto podemos hacer uso del objeto Prototype que permite que objetos de la misma clase compartan métodos y no sean replicados en memoria de manera ineficiente
})(console.log);

((c) => {
  //POO con Prototype
  c('**********POO con Prototype**********')
  function Carrito (articulo) {
    this._articulo = articulo
    this._carrito =  {}
  }

  Carrito.prototype = {
    agregar: function (articulo, cantidad) {
      this._carrito[articulo] = cantidad
    },
    quitar: function (articulo) {
      delete this._carrito[articulo]
    },
    _iterable: function () {
      let message = 'Carrito: \n'
      for ( let key in this._carrito )
        message += `\t${this. _carrito[key]} ${key}\n`
      
      return message
    },
    ver: function ( articulo = 'todos' ) {
      return ( articulo === 'todos' )
        //? this._carrito
        ? this._iterable()
        : ( this._carrito.hasOwnProperty(articulo) )
          ? `${this._carrito[articulo]} ${articulo}`
          : `El articulo ${articulo} no existe en el Carrito`
    }
  }

  /*Carrito.prototype.agregar = function () {}
  Carrito.prototype.quitar = function () {}
  Carrito.prototype.ver = function () {}*/

  const comics = new Carrito('Comics')
  c(comics)
  comics.agregar('Flash Point Paradox', 2)
  comics.agregar('The Return of the Dark Knight', 3)
  comics.agregar('Civil War', 3)
  comics.agregar('Final Crisis', 1)
  c( comics.ver() )
  c( comics.ver('Flash Point Paradox') )
  c( comics.ver('Civil War') )
  comics.quitar('Civil War')
  c( comics.ver('Civil War') )
  c( comics.ver() )
  
  const libros = new Carrito("Libros"),
    musica = new Carrito("Música"),
    juegos = new Carrito("Juegos"),
    peliculas = new Carrito("Peliculas"),
    series = new Carrito("Series")
  
  c(
    libros, '\n',
    musica, '\n',
    juegos, '\n',
    peliculas, '\n',
    series
  )

  //De esta manera creando nuevos objetos, su espacio en memoria es menor y ya no hay replicación de métodos, internamente será más eficiente el uso de la memoria por parte de JavaScript y obtendremos un mejor rendimiento en la aplicación
})(console.log);

((c) => {
  //Herencia Prototípica
    //Las Funciones Constructoras pueden heredar directamente de otros constructores gracias al Prototype
    //Este ejemplo también te lo explico con PHP :) https://www.youtube.com/watch?v=hxgT8PfNUnU&index=7&list=PLvq-jIkSeTUZEHvKw7Gx3g5CjlcvA3jr1

  c('**********Herencia Prototípica**********')

  function Telefono () {
    this.puedoLlamar = true
  } 
  Telefono.prototype = {
    llamar: function () {
      c('Riiiing Riiiing!!!')
    }
  }

  function Celular () {
    this.tengoCables = false
  }
  Celular.prototype = new Telefono()
  Celular.prototype.vibrar = function () {
    c('Vbbbbrrrr Vbbbrrrr!!!')
  }

  function Smartphone () {
    this.tengoInternet = true
  }
  Smartphone.prototype = new Celular()
  Smartphone.prototype.conectar = function () {
    c('Conectado a Internet!!!')
  }

  let g4 = new Smartphone()
  c(g4)
  g4.llamar()
  c(g4.puedoLlamar)
  g4.vibrar()
  c(g4.tengoCables)
  g4.conectar()
  c(g4.tengoInternet)

  let nokia5120 = new Celular()
  c(nokia5120)
  nokia5120.llamar()
  c(nokia5120.puedoLlamar)
  nokia5120.vibrar()
  c(nokia5120.tengoCables)
  nokia5120.conectar()
  c(nokia5120.tengoInternet)
})(console.log);