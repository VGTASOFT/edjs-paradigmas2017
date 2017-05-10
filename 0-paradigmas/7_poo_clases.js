((c) => {
  //POO con Clases
    //Con la llegada ES6 la definición de una función constructora ha cambiado y nos ofrece la posibilidad de crear clases
    //ES6 aporta un 'azúcar sintáctico' para declarar una clase como en la mayoría de los lenguajes POO, pero por debajo sigue siendo una función prototipal
    //El método especial constructor recibe los parametros que anteriormente recibía la función constructora
    //Las clases ES6 sustituyen a las funciones prototipales de ES5
    //Las declaraciones de clases no siguen las reglas de hoisting como sí lo hacen las declaraciones de funciones, esto quiere decir que solo existen tras ser declaradas
    //De forma implícita un clase se comporta como una constante, no siendo posible redeclararla más adelante en un mismo ámbito o scope
    //Los métodos no se declaran de forma explícita con var, let o const
    //Al tratarse de un constructor y no una función, no hay una salida de datos explícita con return
    //Encontramos nuevas palabras reservadas: constructor, super, get, set y static
  c('**********POO con Clases**********')
  class Carrito {
    constructor (articulo) {
      this._articulo = articulo
      this._carrito =  {}
    }

    agregar (articulo, cantidad) {
      this._carrito[articulo] = cantidad
    }
    
    quitar (articulo) {
      delete this._carrito[articulo]
    }
    
    _iterable () {
      let message = 'Carrito: \n'
      for ( let key in this._carrito )
        message += `\t${this. _carrito[key]} ${key}\n`
      
      return message
    }
    
    ver ( articulo = 'todos' ) {
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
})(console.log);

((c) => {
  //Herencia Prototípica
    //Las Funciones Constructoras pueden heredar directamente de otros constructores gracias al Prototype
    //Este ejemplo también te lo explico con PHP :) https://www.youtube.com/watch?v=hxgT8PfNUnU&index=7&list=PLvq-jIkSeTUZEHvKw7Gx3g5CjlcvA3jr1

  c('**********Herencia, Polimorfismo, Método Constructor, Setters y Getters, Módificadores de Acceso (público, estático, privado), Super Constructores, Super Llamadas y Mixins**********')

  //Privacidad en JavaScript
    //En JS las propiedades de los objetos son públicas, en las clases es igual
    //Para aislar ciertas propiedades y evitar que puedan ser modificadas de forma externa, tenemos que recurrir al uso de WeakMap
    //Un WeakMap es un Map que solo acepta objetos como claves, la referencia a las claves es débil, lo que significa que si no hay otras referencias al objeto que actúa como clave, el recolector de basura podrá liberarlo
    //Revisa el archivo de teoria-es6.md
      //Map: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
      //WeakMap: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/WeakMap
    
  let privado = new WeakMap()

  class Telefono {
    //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor (marca, modelo, numero) {
      this.marca = marca
      this.modelo = modelo
      //this._numero = numero
      privado.set(this, { _numero: numero })
      this.puedoLlamar = true
    }

    //un método estático se pueden ejecutar sin necesidad de instanciar la clase, por lo general, este tipo de métodos se reservan a clases que coleccionan utilidades y que no se espera que sean instanciadas
    //Estamos hablando de las típicos 'helpers' habituales en la mayoría de frameworks y librerías
    static queEs() {
      c('El teléfono es un dispositivo de telecomunicación diseñado para transmitir señales acústicas a distancia por medio de señales eléctricas')
    }

    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase, aunque son métodos se acceden por ASIGNACIÓN y NO por INVOCACIÓN, es decir como si fueran atributos
    set numero (numero) {
      //this._numero = numero
      privado.get(this)._numero = numero
    }

    get numero () {
      //return c(this._numero)
      return c( privado.get(this)._numero )
    }

    llamar () {
      c('Riiiing Riiiing!!!')
    }

    verInfo () {
      return c(
        `${this.constructor.name}\n`,
        `\tModelo: ${this.modelo}\n`,
        `\tMarca: ${this.marca}\n`,
        `\tPuedo llamar: ${this.puedoLlamar}\n`
      )
    }
  }

  Telefono.queEs()
  let tel = new Telefono('Panasonic', 'KX-TS550', '5544332211')
  c(tel._numero)
  tel.llamar()
  tel.numero
  tel.numero = '9988776600'
  tel.numero
  tel.verInfo()

  //Mixins
    //En los lenguajes de POO, un mixin es una clase que ofrece cierta funcionalidad para ser heredada por una subclase, pero que no está ideada para ser autónoma
    //Es una especie de clase Abstracta
    //Los conceptos de superclase y subclase no existen como tipos de objetos concretos
      //Una subclase es la clase que hereda (extiende) de otra (clase hija)
      //Una superclase es la clase a partir de la cual heredan (extienden) otras (clase madre)
    //En JavaScript, las clases pueden ser utilizadas como expresiones
      //Gracias a esto, es posible crear una nueva clase cada vez que dicha expresión es evaluada
      //La cláusula extends permite actuar sobre expresiones, lo cual habilita que una clase extienda de otra creada en tiempo de ejecución

  const Operadora = Superclass => class extends Superclass {
    asignarOperadora( operadora ) {
      return c(`La operadora asignada es ${operadora}`)
    }
  }

  const Red = Superclass => class extends Superclass {
    asignarRed( red ) {
      return c(`La red de datos asignada es ${red}`)
    }
  }

  class Celular extends Operadora( Red ( Telefono ) ) {
    constructor(marca, modelo , numero) {
      //con el método super() se manda a llamar el constructor de la clase padre
      //En el constructor de una clase hija, es obligatorio llamar a super antes de utilizar this
      super(marca, modelo, numero)
      this.tengoCables = false
    }
    
    vibrar () {
      c('Vbbbbrrrr Vbbbrrrr!!!')
    }

    //Polimorfismo: Diferentes Clases podrían definir el mismo método o propiedad
    verInfo () {
      //Superllamada: con super se manda a llamar el método verInfo() de la clase padre
      //return super.verInfo()
      return c(
        `${this.constructor.name}\n`,
        `\tModelo: ${this.modelo}\n`,
        `\tMarca: ${this.marca}\n`,
        `\tPuedo llamar: ${this.puedoLlamar}\n`,
        `\tTengo cables: ${this.tengoCables}\n`
      )
    }
  }

  let cel = new Celular('Nokia', '5120', '044550099887766')
  cel.verInfo()
  cel.llamar()
  cel.vibrar()
  cel.numero
  cel.numero = '044551122334455'
  cel.numero
  cel.asignarRed('4G')
  cel.asignarOperadora('Telcel')

  class Smartphone extends Celular {
    constructor (marca, modelo, numero) {
      super(marca, modelo, numero)
      this.tengoInternet = true
    }
    
    conectar () {
      c('Conectado a Internet!!!')
    }

    verInfo () {
      //return super.verInfo()
      return c(
        `${this.constructor.name}\n`,
        `\tModelo: ${this.modelo}\n`,
        `\tMarca: ${this.marca}\n`,
        `\tPuedo llamar: ${this.puedoLlamar}\n`,
        `\tTengo cables: ${this.tengoCables}\n`,
        `\tTengo Internet: ${this.tengoInternet}\n`
      )
    }
  }

  let sm = new Smartphone('Motorola', 'G4', '044551133557799')
  sm.verInfo()
  sm.llamar()
  sm.vibrar()
  sm.conectar()
  sm.numero
  sm.numero = '044552244668800'
  sm.numero
  sm.asignarOperadora('AT&T')
  sm.asignarRed('5G')
})(console.log);