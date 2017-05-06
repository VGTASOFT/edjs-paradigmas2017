;
((c, d) => {
  //Formas de crear un objeto

  //1. Objeto Literal
  c('**********Objeto Literal**********')

  const perro = {
    nombre: 'kEnAi',
    edad: 4,
    raza: 'Mestizo',
    genero: 'Macho',
    esterilizado: true,
    ladrar () {
      c('guauu guauuu!')
    },
    comer(comida = 'croqueta') {
      c(`${this.nombre} come ${comida}`)
    },
    aparecer (imagen) {
      d.write(`<img src="${imagen}">`)
    }
  }

  c(
    perro, 
    perro.nombre,
    perro.edad,
    perro.raza,
    perro.genero,
    perro.esterilizado
  )

  perro.ladrar()
  perro.comer()
  perro.comer('tacos')
  perro.aparecer('http://bextlan.com/dogs/wp-content/uploads/2015/08/unicos3-169x300.jpg')

  //2. Prototipo Object
  c('**********Prototipo Object**********')
  const perro2 = new Object()
  perro2.nombre = 'Firulais'
  perro2.edad = 2
  perro2.raza = 'Dalmata'
  perro2.genero = 'Macho'
  perro2.esterilizado = false
  perro2.ladrar = () => c('guauu guauuu!')
  //perro2.comer = (comida = 'croqueta') => c(`${this.nombre} come ${comida}`)
  //perro2.comer = (comida = 'croqueta') => c(`${perro2.nombre} come ${comida}`)
  perro2.comer = function (comida = 'croqueta') { 
    c(`${this.nombre} come ${comida}`)
  }
  perro2.aparecer = imagen => d.write(`<img src="${imagen}">`)

  c(
    perro2,
    perro2.nombre,
    perro2.edad,
    perro2.raza,
    perro2.genero,
    perro2.esterilizado
  )

  perro2.ladrar()
  perro2.comer()
  perro2.aparecer('http://bextlan.com/dogs/wp-content/uploads/2015/08/dalmata3-300x230.jpg')

  //3. Función Constructora
  c('**********Función Constructora**********')
  function Perro (nombre, edad, raza, genero, esterilizado) {
    //atributos
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
    this.genero = genero
    this.esterilizado = esterilizado

    //métodos
    this.ladrar = () => c('guau guau!!!')

    this.comer = (comida) => c(`${this.nombre} come ${comida}`)
    
    this.aparecer = (imagen) => d.write(`<img src="${imagen}">`)
  }

  const perro3 = new Perro('Lazy', 10, 'Gran Danés', 'Macho', false),
    perro3_2 = new Perro('Lola', 7, 'Border Collie', 'Hembra', true)
  
  c(
    perro3,
    perro3.nombre,
    perro3.edad,
    perro3.raza,
    perro3.genero,
    perro3.esterilizado,
    perro3_2,
    perro3_2.nombre,
    perro3_2.edad,
    perro3_2.raza,
    perro3_2.genero,
    perro3_2.esterilizado
  )

  perro3.ladrar()
  perro3.comer('zapato')
  perro3.aparecer('http://bextlan.com/dogs/wp-content/uploads/2015/08/gran-danes2-222x300.jpg')
  perro3_2.ladrar()
  perro3_2.comer('albondigas')
  perro3_2.aparecer('http://bextlan.com/dogs/wp-content/uploads/2015/08/border-collie3-300x216.jpg')

  //4. Clases apartir de ES6
  c('**********Clases apartir de ES6**********')
  class Dog {
    //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor (nombre, edad, raza, genero, esterilizado) {
      //atributos
      this.nombre = nombre
      this.edad = edad
      this.raza = raza
      this.genero = genero
      this.esterilizado = esterilizado
    }

    //métodos
    ladrar () {
      c('guau guau!!!')
    } 

    comer (comida) {
      c(`${this.nombre} come ${comida}`)
    }
    
    aparecer (imagen) {
      d.write(`<img src="${imagen}">`)
    }
  }

  const perro4 = new Dog('Cachito', 3, 'Chihuahua', 'Macho', false),
    perro4_2  = new Dog('Boni', 5, 'Boxer', 'Hembra', true)

  c(
    perro4,
    perro4.nombre,
    perro4.edad,
    perro4.raza,
    perro4.genero,
    perro4.esterilizado,
    perro4_2,
    perro4_2.nombre,
    perro4_2.edad,
    perro4_2.raza,
    perro4_2.genero,
    perro4_2.esterilizado
  )

  perro4.ladrar()
  perro4.comer('huesos')
  perro4.aparecer('http://bextlan.com/dogs/wp-content/uploads/2015/08/chihuahua3-200x300.jpg')
  perro4_2.ladrar()
  perro4_2.comer('bife')
  perro4_2.aparecer('http://bextlan.com/dogs/wp-content/uploads/2015/08/boxer2-225x300.jpg')
})(console.log, document);
