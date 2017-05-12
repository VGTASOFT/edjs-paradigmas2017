# ECMAScript 6

# aka ES6 o ES2015

![ECMAScript 6](http://bextlan.com/img/para-cursos/es6-logo.jpg)

## Índice

1. [ECMAScript](#ecmascript)
1. [Babel](#babel)
1. [Características ECMAScript 6](#características-ecmascript-6)
	1. [Variables de bloque y constantes](#variables-de-bloque-y-constantes)
	1. [Nivel de Bloques](#nivel-de-bloques)
	1. [Plantillas de cadenas de texto](#plantillas-de-cadenas-de-texto)
	1. [Funciones flecha](#funciones-flecha)
	1. [Objetos literales](#objetos-literales)
	1. [Destructuración](#destructuración)
	1. [Parámetros por defecto](#parámetros-por-defecto)
	1. [Parámetros rest](#parámetros-rest)
	1. [Operador de propagación](#operador-de-propagación)
	1. [Clases](#clases)
	1. [Módulos](#módulos)
	1. [Promesas](#promesas)
	1. [Iteradores](#iteradores)
	1. [Símbolos](#símbolos)
	1. [Generadores](#generadores)
	1. [Proxies](#proxies)
	1. [Reflexión](#reflexión)
	1. [Decoradores](#decoradores)
	1. [Funciones Asíncronas](#funciones-asíncronas)
	1. [Métodos clase String](#métodos-clase-string)
	1. [Números octales y binarios](#números-octales-y-binarios)
	1. [Métodos clase Math](#métodos-clase-math)
	1. [Métodos clase Array](#métodos-clase-array)
	1. [Métodos clase Object](#métodos-clase-object)
	1. [Maps, Sets y Weaks](#maps-sets-y-weaks)


# ECMAScript

* ECMAScript es el nombre del estándar internacional que define JavaScript
* Definido por un comité técnico (TC-39) de ecma international
* Identificado como Ecma-262 y ISO/IEC 16262
* No es parte del W3C
* La versión actual es la ES6 o [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/)

--------------------------------------------------
| Edición | Publicación | Cambios |
| ------- | ----------- | ------- |
| 1 | 1997 |  Primera edición |
| 2 | 1998 |  Cambios editorales para mentener la especificación completa alineada con el estándar internacional ISO/IEC 16262 |
| 3 | 1999 |  Se agregaron expresiones regulares, mejor manejo de strings, nuevo control de declaraciones, manejo de excepciones con try/catch, definición más estricta de errores, formato para la salida numérica y otras mejoras |
| 4 | Abandonado | La cuarta edición fue abandonada debido a diferencias políticas respecto a la complejidad del lenguaje. Muchas características propuestas para la cuarta edición fueron completamente abandonadas; algunas fueron propuestas para la edición ECMAScript Harmony |
| 5 | 2009 | Agrega el modo estricto **`strict mode`**, un subconjunto destinado a proporcionar una mejor comprobación de errores y evitar constructores propensos a errores. Aclara varias ambigüedades de la tercera edición, y afina el comportamiento de las implementaciones del "mundo real" que difieren consistentemente desde esa especificación. Agrega algunas nuevas características, como getters y setters, librería para el soporte de JSON, y una más completa reflexión sobre las propiedades de los objetos |
| 5.1 | 2011 | Está completamente alineada con la tercera edición del estándar internacional ISO/IEC 16262:2011 |
| 6 | 2015 | La sexta edición agrega cambios significativos en la sintaxis para escribir aplicaciones complejas, incluyendo clases y módulos, definiéndolos sémanticamente en los mismos términos del modo estricto de la edición ECMAScript 5. Otras nuevas características incluyen iteradores for/of loops, generadores y generador de expresiones estilo Python, funciones de dirección, datos binarios, colecciones (mapas, sets, mapas débiles), y proxies (metaprogramación para objetos virtuales y wrappers). Al ser la primera especificación “ECMAScript Harmony”, es también conocida como “ES6 Harmony” |
| 7 |  En progreso | La séptima edición está orientada a continuar con la reforma del lenguaje, aislamiento de códigos, control de efectos y librerías/herramientas habilitadas desde ES6. Nuevas características propuestas incluyen promesas/concurrencia, matemáticas y datos numéricos mejorados, guards y trademarks (una alternativa al tipado estático), sobrecarga de operadores, value types (first-class number-like objects), nuevas estructuras de registro (registros, tuplas y vectores tipados), pattern matching, y traits |
--------------------------------------------------

### Recursos

* [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/)
* [ECMAScript 6 Tools](https://github.com/addyosmani/es6-tools)
* [ECMAScript 6 Features](http://es6-features.org/)
* [ECMAScript 6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
* [Exploring ES6](http://exploringjs.com/es6/)
* [ECMAScript 6 support in Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)
* [Airbnb ECMAScript 6 Styles](https://github.com/airbnb/javascript#ecmascript-6-styles)

**[⬆ regresar al índice](#Índice)**


# Babel

Es un compilador de JavaScript, te permite usar el JavaScript del futuro, **HOY**

* [Babel](http://babeljs.io/)
* [Learn ES2015 Babel](http://babeljs.io/docs/learn-es2015/)
* [Using Babel](http://babeljs.io/docs/setup/)
* [CLI Tools](http://babeljs.io/docs/usage/cli/)
* [Plugins Babel](http://babeljs.io/docs/plugins/)

![Babel](http://bextlan.com/img/para-cursos/babel-logo.png)

### Instalación de paquetes

```Terminal
npm install -D babel-cli babel-preset-es2015 babel-preset-stage-2
```

### Crear el archivo de configuarción **`.babelrc`**

```JSON
{
  "presets": [ "es2015", "stage-2" ],
  "plugins": []
}
```

### Crear el script necesario para compilar ES6 con Babel en el archivo **`.package.json`**

```JSON
{
  "name": "taller-es6",
  "version": "1.0.0",
  "description": "Aprendiendo ECMAScript6",
  "main": "index.js",
  "scripts": {
    "es6": "babel src --watch --out-dir dist"
  },
  "author": "Jonathan MirCha <jonmircha@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-stage-2": "^6.18.0"
  }
}
```

### Ejecutar el script en la terminal

```Terminal
npm run es6
```

**[⬆ regresar al índice](#Índice)**


# Características ECMAScript 6

## Variables de bloque y constantes

### aka let y const

### Variables de bloque

En ES6 se agrega una nueva forma de definir variables usando la palabra **`let`**, se diferencia de **`var`** en que el scope de una variable definida con **`let`** es, el bloque en el cual se encuentra la variable y no la función.

```JavaScript
let x = 'Hola kEnAi';

if (true) {
	let x = 'Hola Jon';
	console.log(x);  // Imprime en consola Hola Jon
}

console.log(x);  // Imprime en consola Hola kEnAi

for (let i = 0; i < 5; i++) {
	console.log(i); // Imprime del 0 al 4
};

console.log(i); // Imprime Uncaught ReferenceError: i is not defined
```

### Constantes

Una constantes es un tipo **INMUTABLE**, NO puede cambiar una vez definida, se usa la palabra **`const`** en lugar de **`var`**, al igual que **`let`** su scope es de bloque, son tipos de sólo lectura y se le debe asignar un valor en el momento de su declaración. Son referencias inmutables, pero sus valores no necesariamente.

```JavaScript
const DIEZ = 10;
DIEZ = 5;
console.log(DIEZ); // Imprime Uncaught TypeError: Assignment to constant variable

const hola = 'hola mundo';
hola = 'hola mundo'; // Imprime Uncaught TypeError: Assignment to constant variable

const PI;
PI = 3.141592653589793; //Imprime Missing initializer in const declaration

const obj = {};
obj.prop = 'x';
console.log(obj); //Imprime { prop: 'x' }
obj.prop = 'y';
console.log(obj); //Imprime { prop: 'y' }

const D = document;
console.log(D); //Imprime el objeto document
console.log(D.documentElement); //Imprime el elemento <html>
```

**[⬆ regresar al índice](#Índice)**


## Nivel de Bloques

### aka Block level function declarations

En ES5 los ámbitos de declaración (**`scope`**) estaban diseñados a nivel de funciones, con ES6 podemos declarar funciones a nivel de bloque

En ES6, como en muchos otros lenguajes de programación, el bloque se define entre llaves y genera un nuevo scope (**`block scope`**).

```JavaScript
//Sin bloques
function f() { return 1; }

console.log( f() ); //Imprime 2

function f() { return 2; }

console.log( f() ); //Imprime 2

console.log( f() ); //Imprime 2

//Con bloques
function f() { return 1; }

{
	console.log( f() ); //Imprime 2

	function f() { return 2; }

	console.log( f() ); //Imprime 2
}

console.log( f() ); //Imprime 1
```

**[⬆ regresar al índice](#Índice)**


## Plantillas de cadenas de texto

### aka Template Strings

Los template string son una forma más fácil de crear:

* Cadenas con variables dentro (interpolación)
* Generar cadenas multilínea
* Ejecutar expresiones, funciones y etiquetados

```JavaScript
let saludo = `Hola soy un Template String`;
console.log(saludo); //Imprime Hola soy un Template String

//strings multilínea
let mensaje = `No es quien seas en el interior,
tus actos son los que te definen...
Batman`;
console.log(mensaje); 
/*
Imprime 
No es quien seas en el interior,
tus actos son los que te definen...
Batman
*/

//variables en strings (interpolación)
let nombre = 'Jonathan';
console.log(`Hola ${nombre}`); //Imprime Hola Jonathan

//ejecutar expresiones
console.log(`Hola ${nombre}, tienes ${30 + 2} años`); //Imprime Hola Jonathan, tienes 32 años

//ejecutar funciones
let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'],
	ol = `<ol>
		${
			estaciones.map(function (estacion) {
				return `<li>${estacion}</li>`;
			}).join('')
		}
	</ol>`;

console.log(ol); //Imprime <ol><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ol>

//función de etiquetado
const etiqueta = function (cadena, variable) {
	console.log(cadena); //Imprime ["Hola ", "", raw: Array[2]]
	console.log(variable); //Imprime Ulises
	console.log(cadena[0] + variable); //Imprime Hola Ulises
};

let otroNombre = 'Ulises';

etiqueta`Hola ${otroNombre}`;
```

**[⬆ regresar al índice](#Índice)**


## Funciones flecha

### aka Arrow Functions

Es una nueva forma de definir funciones, hay distintas variantes en la sintaxis:

### Función de un solo parámetro

Al crear una arrow function de un solo parámetro no es necesario escribír los paréntesis, tampoco es necesario escribír las llaves, esto se puede cuando la función es de una sola línea y devuelve un valor.

```JavaScript
//Antes
var saludo = function (nombre) {
	return 'Hola ' + nombre;
};
console.log( saludo('Jonathan') ); //Imprime Hola Jonathan

//Ahora
let saludo = nombre => `Hola ${nombre}`;
console.log( saludo('Jonathan') ); //Imprime Hola Jonathan
```

### Función de varios parámetros

Cuando la función tenga más de un parámetro es necesario envolver el nombre de estos entre paréntesis.

```JavaScript
//Antes
var sumar = function (a, b) {
	return a + b;
};
console.log( sumar(10, 9) ); //Imprime 19

//Ahora
let sumar = (a, b) => a + b;
console.log( sumar(10, 9) ); //Imprime 19
```

### Función sin parámetros

Cuando la función no reciba parámetros también son necesarios los paréntesis.

```JavaScript
//Antes
var saludo = function () {
	return 'Hola a tod@s';
};
console.log( saludo() ); //Imprime Hola a tod@s

//Ahora
let saludo = () => `Hola a tod@s`;
console.log( saludo() ); //Imprime Hola a tod@s
```

### Función con cuerpo

Cuando la función tiene más de una línea (o no devuelve ningún valor) es necesario utilizar las llaves.

```JavaScript
//Antes
var fecha = new Date(),
	hora = fecha.getHours();

var saludo = function (hr) {
	if (hr <= 5) {
		return 'No me jodas!!!';
	} else if(hr >= 6 && hr <= 11) {
		return 'Buenos días!!!';
	} else if(hr >= 12 && hr <= 18) {
		return 'Buenas tardes!!!';
	} else {
		return 'Buenas noches!!!';
	}
};

console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del día

//Ahora
let fecha = new Date(),
	hora = fecha.getHours();

let saludo = (hr) => {
	if (hr <= 5) {
		return 'No me jodas!!!';
	} else if(hr >= 6 && hr <= 11) {
		return 'Buenos días!!!';
	} else if(hr >= 12 && hr <= 18) {
		return 'Buenas tardes!!!';
	} else {
		return 'Buenas noches!!!';
	}
};

console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del día

//Antes
var numeros = [1, 2, 3, 4];

numeros.forEach(function (num) {
	console.log(num); //Imprime el número en turno
	console.log(num * 10); //Imprime el número en turno por 10
});

//Ahora
let numeros = [1, 2, 3, 4];

numeros.forEach((num) => {
	console.log(num); //Imprime el número en turno
	console.log(num * 10); //Imprime el número en turno por 10
});
```

### Contexto Léxico de `this`

Las arrow function tienen la capacidad de capturar el objeto `this` del contexto donde la `arrow` se ejecuta y así utilizarlo dentro de su bloque de sentencias.

```JavaScript
//El problema de `this` Antes
function Persona(nombre) {
	//El constructor Persona() define `this` como una instancia de él mismo
	this.nombre = nombre;
	this.edad = 0;

	setInterval(function () {
		//La función anónima define `this` como una instancia de ella misma
		this.edad++;
	}, 1000);
}

var jon = new Persona('Jonathan');
console.log(jon); //Imprime la edad en 0 por cada segundo que pasa


//La solución al problema de `this` Antes
function Persona(nombre) {
	//Se declara una variable self (algunos prefieren that) para guardar el `this` del constructor Persona()
	var self = this;

	self.nombre = nombre;
	self.edad = 0;

	setInterval(function () {
		//La función anónima define su propio `this` pero el valor que aumenta es edad del `this` de Persona()
		self.edad++;
	}, 1000);
}

var jon = new Persona('Jonathan');
console.log(jon); //Imprime el valor de edad más uno por cada segundo que pasa


//La solución al problema de `this` Ahora
function Persona(nombre) {
	//El constructor Persona() define `this` como una instancia de él mismo
	this.nombre = nombre;
	this.edad = 0;

	setInterval(() => {
		//`this` hace referencia al objeto Persona()
		this.edad++;
	}, 1000);
}

const jon = new Persona('Jonathan');
console.log(jon); //Imprime el valor de edad más uno por cada segundo que pasa
console.log(jon.edad); //Imprime la edad
```

**[⬆ regresar al índice](#Índice)**


## Objetos literales

### Atajos en la escritura de atributos y métodos

```JavaScript	
//Antes
var nombre = 'kEnAi',
	edad = 4;

var perro = {
	nombre : nombre,
	edad : edad,
	ladrar : function () {
		alert('guau guau!!!');
	}
};

console.log(perro); //Imprime Object {nombre: "kEnAi", edad: 4}
perro.ladrar(); //Manda alerta

//Ahora
let nombre = 'kEnAi',
	edad = 4;

const perro = {
	nombre,
	edad,
	ladrar() {
		alert('guau guau!!!');
	}
};

console.log(perro); //Imprime Object {nombre: "kEnAi", edad: 4}
perro.ladrar(); //Manda alerta
```

### Nombres de atributos y métodos calculados (o computados)

```JavaScript
let nombreAtributo = 'nombre',
	nombreOtroAtributo = 'ad',
	nombreMetodo = 'ladrar';

const perro = {
	[nombreAtributo] : 'kEnAi',
	[`ed${nombreOtroAtributo}`] : 4,
	[nombreMetodo]() {
		alert('guau guau!!!');
	}
};

console.log(perro); //Imprime Object {nombre: "kEnAi", edad: 4}
perro.ladrar(); //Manda alerta
```

**[⬆ regresar al índice](#Índice)**


## Destructuración

### aka Destructuring o Descomposición

Nuevas formas de asignar valores a Arrays y Objetos. 

```JavaScript
//Destructuración de Arreglos
let numeros = [1, 2, 3];

//sin destructuración
let uno = numeros[0],
	dos = numeros[1],
	tres = numeros[2];

console.log(numeros, uno, dos, tres); //Imprime [1, 2, 3] 1 2 3

//con destructuración
let [one, two, three] = numeros;

console.log(numeros, one, two, three); //Imprime [1, 2, 3] 1 2 3

//Destructuración de Objetos
let persona = { nombre: 'Jonathan', apellido: 'MirCha' };
let { nombre, apellido } = persona;

console.log(persona); //Imprime Object {nombre: "Jonathan", apellido: "MirCha"}
console.log(nombre); //Imprime Jonathan
console.log(apellido); //Imprime MirCha

let datos = { correo: 'jonmircha@gmail.com', telefono: 5566778899 };

let { correo: email, telefono: phone } = datos;

console.log(datos); //Imprime Object {correo: "jonmircha@gmail.com", telefono: 5566778899}
console.log(email); //Imprime jonmircha@gmail.com
console.log(phone); //Imprime 5566778899
```

**[⬆ regresar al índice](#Índice)**


## Parámetros por defecto

### aka Default Parameters

Ahora es completamente posible definir un valor por defecto a los parámetros de nuestras funciones al igual que en otros lenguajes de programación.

```JavaScript
//Antes
function pais(nombre) {
	nombre = nombre || 'Terrestre';
	console.log(nombre);
}

pais(); //Imprime Terrestre
pais('México'); //Imprime México

//Ahora
function pais(nombre = 'Terrestre') {
	console.log(nombre);
}

pais(); //Imprime Terrestre
pais('México'); //Imprime México
```

**[⬆ regresar al índice](#Índice)**


## Parámetros rest

### aka Rest Parameters

Los parámetros rest son una forma de utilizar parámetros virtualmente infinitos, se definen agregando **`...`** adelante del nombre del parámetro rest, éste tiene que ser siempre el último parámetro de la función.

```JavaScript
function sumar(a, b, ...c) {	
	let resultado = a + b;

	c.forEach(n => {
		resultado += n;
	});

	return console.log(resultado);
}

sumar(1,2); //Imprime 3
sumar(1,2,3); //Imprime 6
sumar(1,2,3,4); //Imprime 10
sumar(1,2,3,4,5); //Imprime 15
```

**[⬆ regresar al índice](#Índice)**


## Operador de propagación

### aka Spread Operator

Permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos o elementos.

```JavaScript
let arr1 = [1, 2, 3, 4],
	arr2 = [5, 6, 7, 8];

console.log(arr1); //Imprime [1, 2, 3, 4]
console.log(...arr1); //Imprime 1 2 3 4

arr1.push(...arr2);
console.log(arr1); //Imprime [1, 2, 3, 4, 5, 6, 7, 8]

let superiores = ['hombros', 'brazos', 'tronco'],
	inferiores = ['pelvis', 'piernas', 'rodillas'],
	cuerpo = ['cabeza', ...superiores, ...inferiores, 'pies'];

console.log(cuerpo); //Imprime ["cabeza", "hombros", "brazos", "tronco", "pelvis", "piernas", "rodillas", "pies"]

console.log(...cuerpo); //Imprime cabeza hombros brazos tronco pelvis piernas rodillas pies
```

**[⬆ regresar al índice](#Índice)**


## Clases

### aka Classes

En ES6 se incorporan al lenguaje clases para poder hacer Programación Orientada a Objetos más facilmente (sin prototipos), soportan herencia, polimorfismo, superclases, instancias, métodos estáticos, constructores, setters y getters.

### Definición de clase, constructor e instancia de objetos

```JavaScript
class Animal {
	//el constructor es un método especial que se ejecuta en el momento de instanciar la clase
	constructor(nombre, edad, genero) {
		this.nombre = nombre;
		this.edad = edad;
		this.genero = genero;
	}

	//métodos públicos de la clase
	comunicar() {
		console.log('Me comunico con sonidos');
	}

	comer() {
		console.log('Ingiero alimentos');
	}

	respirar() {
		console.log('Respiro oxígeno');
	}

	reproducir() {
		console.log('Me reproduzco sexualmente');
	}
}

let lucy = new Animal('Lucy', 20, 'Hembra');
console.log(lucy); //Imprime Animal {nombre: "Lucy", edad: 20, genero: "Hembra"} 
lucy.comunicar(); //Imprime Me comunico con sonidos
lucy.comer(); //Imprime Ingiero alimentos
lucy.respirar(); //Imprime Respiro oxígeno
lucy.reproducir(); //Imprime Me reproduzco sexualmente
```

### Herencia, polimorfismo, métodos estáticos, setters y getters

```JavaScript
//con la palabra extends la clase Humano hereda de Animal
class Humano extends Animal {
	//el constructor es un método especial que se ejecuta en el momento de instanciar la clase
	constructor(nombre, edad, genero) {
		//con el método super() se manda a llamar el constructor de la clase padre
		super(nombre, edad, genero);
		this.razonar = true;
		this._nacionalidad = 'Terrestre';
	}

	//un método estático se pueden ejecutar sin necesidad de instanciar la clase
	static saludar() {
		console.log('Hola soy un Humano');
	}

	//Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
	set nacionalidad(pais) {
		this._nacionalidad = pais;
	}

	get nacionalidad() {
		return this._nacionalidad;
	}

	//métodos públicos de la clase redefinidos gracias al polimorfismo
	comunicar() {
		console.log('Me comunico hablando');
	}

	comer() {
		console.log('Como de todo, soy omnívoro');
	}

	respirar() {
		console.log('Respiro oxígeno con ayuda de mis pulmones');
	}

	reproducir() {
		console.log('Me reproduzco sexualmente, soy mamífero y vivíparo');
	}

	pensar() {
		console.log('Pienso por que tengo intelecto');
	}
}

Humano.saludar(); //Imprime Hola soy un Humano
let jon = new Humano('Jonathan', 32, 'Macho');
console.log(jon); //Imprime Humano {nombre: "Jonathan", edad: 32, genero: "Macho", razonar: true, _nacionalidad: "Terrestre"}
jon.comunicar(); //Imprime Me comunico hablando
jon.comer(); //Imprime Como de todo, soy omnívoro
jon.respirar(); //Imprime Respiro oxígeno con ayuda de mis pulmones
jon.reproducir(); //Imprime Me reproduzco sexualmente, soy mamífero y vivíparo
jon.pensar(); //Imprime Pienso por que tengo intelecto
jon.nacionalidad = 'México';
console.log(jon.nacionalidad); //Imprime México
console.log(jon); //Imprime Humano {nombre: "Jonathan", edad: 32, genero: "Macho", razonar: true, _nacionalidad: "México"}
```

**[⬆ regresar al índice](#Índice)**


## Módulos

### aka Modules

Antes de ES6, utilizamos bibliotecas como [Browserify] (http://browserify.org/) para crear módulos en el lado del cliente (**navegadores**), y [require] (https://nodejs.org/api/modules.html#modules_module_require_id) en el servidor (**Node.js**). Con ES6, ahora podemos utilizar directamente módulos de todos los tipos (AMD, CommonJS y EcmaScript).

### Más info

* [Documentación declaraciones de Exportación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
* [Documentación declaraciones de Importación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](https://addyosmani.com/writing-modular-js/)
* [Exportación y Requerimiento de Módulos en Node.js](https://www.youtube.com/watch?v=QZCEkMK7SKs&list=PLvq-jIkSeTUY3gY-ptuqkNEXZHsNwlkND) :movie_camera:

### Exportando en formato CommonJS

```JavaScript
module.exports = 1;
module.exports = { foo: 'bar' };
module.exports = ['foo', 'bar'];
module.exports = function bar () {};
```

### Exportando en formato ES6

En ES6 tenemos diferentes formas de exportación

#### Por nombres

```JavaScript
export let nombre = 'Jonathan';
export let edad  = 33;​​
```

#### Por lista de objetos

```JavaScript
function sumar( a, b ) {
	return a + b;
}

function restar( a, b ) {
	return a - b;
}

export { sumar, restar };
```

#### Usando **`export`** individualmente

```JavaScript
export function sumar( a, b ) {
	return a + b;
}

export function restar( a, b ) {
	return a - b;
}
```

#### Usando **`default`**

```JavaScript
function sumar( a, b ) {
	return a + b;
}

function restar( a, b ) {
	return a - b;
}

let operaciones = {
	sumar,
	restar
}

export default operaciones;

//otra forma
export { operaciones as default };
```

> **Mejores Prácticas**: Utiliza siempre el método **`export default`** al final de módulos **ES6**, esto dejará claro lo que se está exportando y lo que no. En los módulos **CommonJS** suele exportarse un sólo valor u objeto. Siguiendo con este paradigma, hacemos que nuestro código sea fácil, legible y que podamos combinar entre módulos **CommonJS** y **ES6**.

### Importando en formato CommonJS

```JavaScript
//considerando que existe una carpeta libs y dentro un archivo llamado rutas con extensión .js o .json
const rutas = require('./libs/rutas');
```

### Importando en ES6

En ES6 tenemos diferentes formas de importación

#### Archivo completo

```JavaScript
import 'react';
import './libs/operaciones';
```

#### Por nombre de las importaciones

```JavaScript
import React from 'react';
import { sumar, restar } from './libs/operaciones';
```

#### También se pueden renombrar las importaciones

```JavaScript
import { 
	sumar as mas,
	restar as menos
} from './libs/operaciones';
```

#### Importación por espacio de nombres

```JavaScript
import * as aritmetica from './libs/operaciones';
```

#### Importar una lista de valores de un módulo

```JavaScript
import * as aritmetica from './libs/operaciones';

const { sumar, restar } = aritmetica;
```

#### Al importar un módulo exportado usando la sintaxis Commonjs (como React) podemos hacer lo siguiente

```javascript
import React from 'react';
const { Component, PropTypes } = React;
```

#### Simplificando

```javascript
import React, { Component, PropTypes } from 'react';
```

> **Nota**: Los valores que se exportan son **enlaces**, no referencias. Por lo tanto, cambiar el enlace de una variable en un módulo, afectará su valor. Evita cambiar la interfaz pública de módulos exportados.

**[⬆ regresar al índice](#Índice)**


## Promesas

### aka Promises

Es una manera alternativa a las **`callbacks`** para modelar asincronía.

* Construcción explícita del flujo de ejecución
* Separación en bloques consecutivos
* Manejo de errores más controlado
* Combinación de diferentes flujos asíncronos
* [Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Callbacks VS Promesas

![Callbacks VS Promesas](http://bextlan.com/img/para-cursos/callbacks-vs-promise.png)

### Promesas en el navegador

```JavaScript
function adivinarNumero() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let n = Math.floor(Math.random() * 10);
			
			return (n >= 1 && n <= 5)
				? resolve(`Adivinaste el número: ${n}`)
				: reject(new Error(`No adivinaste el número: ${n}`));
		}, 1000);
	});
}

adivinarNumero()
	.then( num => console.log(num) )
	.catch(error => console.log(error) );
```

### Promesas en el servidor

```JavaScript
const fs = require('fs'),
	file = './nombres.txt',
	newFile = './nombres_promises_es6.txt';

let promise = new Promise((resolve, reject) => {
	fs.access(file, fs.F_OK, (err) => {
		return (err) 
			? reject( new Error('El archivo no existe') ) 
			: resolve(true);
	});
});

promise
	.then((dataPromise) => {
		console.log('El archivo existe');
		
		return new Promise((resolve, reject) => {
			fs.readFile(file, (err, data) => {
				return (err) 
				? reject( new Error('El archivo no se pudo leer') ) 
				: resolve(data);
			});
		});
	})
	.then((dataPromise) => {
		console.log('El archivo se ha leído exitosamente');

		return new Promise((resolve, reject) => {
			fs.writeFile(newFile, dataPromise, (err) => {
				return (err)
					? reject( new Error('El archivo no se pudo copiar') ) 
					: resolve('El archivo se ha copiado con éxito');
			});
		});
	})
	.then((dataPromise) => { console.log(dataPromise); })
	.catch((err) => { console.log(err.message); });
```

**[⬆ regresar al índice](#Índice)**


## Iteradores

### aka Iterators

Un **Iterador** es un mecanismo que tienen los lenguajes de programación para recorrer secuencialmente distintas estructuras de datos.

Para que un objeto sea iterable en JavaScript es necesario que:
* Implemente el tipo **`Symbol.iterator`**
* Implemente la función **`next`** que devuelve un objeto con dos valores:
	1. **`done`** que indica si ha terminado de iterar y 
	1. **`value`** que devuelve el valor actual

### Ejemplos de Iteradores

```JavaScript
console.log(typeof String.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Array.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Map.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Set.prototype[Symbol.iterator]); // Imprime function
console.log(typeof Object.prototype[Symbol.iterator]); // Imprime undefined
```

### Recorriendo iteradores con el bucle **`for...of`**

Es un ciclo que nos permite recorrer objetos iterables.

```JavaScript
//Antes
var anArray = ['Hola', 1, true, {}],
	aString = 'Hola soy iterable';

for (var i = 0; i < anArray.length; i++) {
	console.log( anArray[i] );
}

for (var i = 0; i < aString.length; i++) {
	console.log( aString[i] );
}

//Ahora
let anArray = ['Hola', 1, true, {}],
	aString = 'Hola soy iterable';

for ( let item of anArray ) {
	console.log( item ); //Imprime cada elemento del arreglo
}

for ( let character of aString ) {
	console.log( character ); //Imprime cada caracter de la cadena de texto
}
```

**[⬆ regresar al índice](#Índice)**


## Símbolos

### aka Symbols

Un **Símbolo** es un tipo de datos único e inmutable, puede ser utilizado como un identificador para las propiedades de los objetos.

Son útiles cuando queremos agregar métodos o atributos propios a objetos nativos del lenguaje o a los de alguna librería de terceros para evitar que, si existiése algún método o atributo con el nombre del que queremos crear evitar que el original se sobre escriba con esto se evita un **antipatrón**.

Cuando se recorran las propiedades de un objeto, las que sean definidas como símbolo no aparecerán.

### Recorriendo los elementos de un Objeto

```JavaScript
let anObject = {
		name: 'Jonathan',
		age: 32,
		email: 'jonmircha@gmail.com'
	},
	//Un símbolo se instancia sin new, porque no es un objeto y por tal no tiene constructor
	email = Symbol('email');

//Asignación de un símbolo en un objeto
anObject[email] = 'jonmircha@bextlan.com';

for( let item of anObject ) {
	console.log(item); //Uncaught TypeError: anObject[Symbol.iterator] is not a function
}

for( let item in anObject ) {
	console.log(item); //Imprime name, age, email
}

console.log( Object.keys(anObject) ); // Imprime ["name", "age", "email"]
console.log( Object.getOwnPropertyNames(anObject) ); // Imprime ["name", "age", "email"]
console.log( Object.getOwnPropertySymbols(anObject) ); // Imprime [Symbol(email)]

console.log(
	anObject, //Imprime Object {name: "Jonathan", age: 32, email: "jonmircha@gmail.com", Symbol(email): "jonmircha@bextlan.com"}
	anObject.name, //Imprime "Jonathan"
	anObject.age, //Imprime 32
	anObject.email, //Imprime "jonmircha@gmail.com"
	anObject[email] //Imprime "jonmircha@bextlan.com"
);
```

### Convirtiéndo un Objeto en Iterable

```JavaScript
let iterable = {
	0: 'Jonathan',
	1: 32,
	2: 'jonmircha@gmail.com',
	length: 3,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let item of iterable) {
	console.log(item); //Imprime Jonathan, 32, jonmircha@gmail.com
}
```

**[⬆ regresar al índice](#Índice)**


## Generadores

### aka Generators

Los generadores son un tipo especial de función que devuelve un valor y permite luego volver a entrar en la función en el mismo lugar en que se quedó, al tiempo que conserva el contexto de ejecución.

Son funciones que pueden ser pausadas y resumidas cuando llamamos a la función generador, no ejecuta el cuerpo de la función, sino que devuelve un objeto generador. El generador implementa una interfaz que le proporciona un método **`next()`**, que ejecutará el cuerpo de la función hasta encontrar un **`yield`**. En este punto, se detendrá.

El secreto del generador radica justamente en la palabra clave **`yield`**, que es un tipo especial de **`return`** que, en lugar de devolver un solo valor y salirse de la función, entrará nuevamente en esta y continuará ejecutándola hasta que se acabe o encuentre otra cláusula **`yield`**.

Para que una función se considere generador debe declararse anteponiento un asterísco **`function*`**.

Para obtener los resultados del generador lo hacemos con el método **`next()`** que devuelve un objeto de tipo:

```JavaScript
{
	value: el valor retornado por yield
	done: indica si ha finalizado o no la ejecución del cuerpo de la función
}
```

Los generadores, al implementar **`.next()`**, son iterables y suelen ser una forma más sencilla de describir un iterador.

```JavaScript
function* generador(nombre) {
    yield `Hola ${name}`;
    yield 'Esta línea saldrá en la segunda ejecución';
    yield 'Esta otra, en la tercera';
    if ( nombre === 'Jonathan' ) {
    	yield 'Esta otra, saldrá en la cuarta solo si te llamas Jonathan';
    }
}

let gen = generador('Jonathan');
console.log( gen.next() ); //Imprime Object {value: "Hola Jonathan", done: false}
console.log( gen.next().value ); //Imprime Esta línea saldrá la segunda ejecución
console.log( gen.next().value ); //Imprime Esta otra, en la tercera
console.log( gen.next().value ); //Imprime Esta otra, saldrá en la cuarta solo si te llamas Jonathan
console.log( gen.next() ); //Imprime Object {value: undefined, done: true}
```

### Más ejemplos con Generadores

```JavaScript
class LoremIpsum {
	constructor( text ) {
		this._text = text;
	}

	*words() {
		const re = /\S+/g;
		let match;

		while( match = re.exec( this._text ) ){
			yield match[0];
		}
	}
}

const lorem = new LoremIpsum('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptatem eveniet ipsum in similique maxime sunt eaque veritatis sapiente. Fuga minus, non cumque deleniti consequatur. Odit reprehenderit non fugit cum!');

for ( let word of lorem.words() ) {
  console.log( word );
}

class Usuarios {
	constructor( gente ) {
		this._gente = gente;
	}

	*alias() {
		for ( let persona of this._gente ) {
			yield ( persona.sexo === 'H' ) ? `Sr. ${persona.nombre}` : `Sra. ${persona.nombre}`;
		}
	}
}

const gente = new Usuarios([
	{ sexo: 'H', nombre: 'Jon' },
	{ sexo: 'M', nombre: 'Irma' }
]);

for ( let persona of gente.alias() ){
	console.log( persona );
}
```

**[⬆ regresar al índice](#Índice)**


## Proxies

### aka Proxies

Los proxies proporcionan una API para capturar o interceptar cualquier operación realizada sobre un objeto y para modificar cómo se comporta ese objeto. Son útiles para:

* Intercepción
* Virtualización de objetos
* Gestión de recursos
* Hacer profiling y generar logs durante la depuración de una aplicación
* Seguridad y control de acceso
* Definición de "contratos" al usar objetos
* [Más info](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Proxy)

La API Proxy define un constructor al que se le pasa como primer argumento el objeto que se va a capturar llamado **`target`** y como segundo argumento el **`handler`** que realizará la captura. Ejemplo:

```JavaScript
let target = { /* propiedades y métodos */ },
	handler = { /* funciones capturadoras */ },
	proxy = new Proxy(target, handler);
```
El **`handler`** es el encargado de modificar el comportamiento original del objeto **`target`**. Este **`handler`** contiene métodos "capturadores" ( por ejemplo .get(), .set(), .apply() ) que se ejecutan al realizar la llamada correspondiente del proxy.

```JavaScript
const persona = new Proxy({}, {
	set( obj, prop, val ) {
		if ( prop === 'edad' && ( !Number.isInteger( val ) || val < 0 ) ) {
			throw new Error( `Valor inválido para la propiedad ${prop}` );
		}
		return obj[prop] = val;
	}
});

persona.edad = 33;
console.log( persona.edad ); //Imprime 33

persona.edad = -10; //Imprime Error: Valor inválido para la propiedad edad
```

**[⬆ regresar al índice](#Índice)**


## Reflexión

### aka Reflection

Objeto global que proporciona funciones estáticas capaces de intereceptar operaciones de JavaScript, es muy útil cuando se trabaja con **`proxies`** y de hecho, comparten muchos métodos.

La mayoría de sus métodos estáticos tienen una equivalencia en el objeto **`Object`** o **`Function`**.

Las ventajas que ofrece el uso de **`Reflect`** son:

* Aplicación de funciones más fiable
* Valores de retorno más útiles
* Sintaxis menos verbosa
* Mejora la forma en la que se capturan los getters y setters
* [Más info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

ES5 ya incluye varias funcionalidades íntimamente relacionadas con la reflexión, como por ejemplo **`Array.isArray()`** o **`Object.getOwnPropertyDescriptor()`**. ES6 introduce la API **`Reflection`** para agrupar todos estos métodos y los nuevos que se vayan definiendo.

```JavaScript
const obj = { x: 1, y: 2 };
console.log( obj ); //Imprime Object {x: 1, y: 2}

console.log( Reflect.has( obj, 'z' ) ); //Imprime false
console.log( Reflect.has( obj, 'x' ) ); //Imprime true

Reflect.deleteProperty( obj, 'x' );

console.log( Reflect.has( obj, 'x' ) ); //Imprime false
console.log( obj ); //Imprime Object {y: 2}
```

**[⬆ regresar al índice](#Índice)**


## Decoradores

### aka Decorators

Permiten anotar y modificar las clases y propiedades en tiempo de diseño. Mientras que en ES5 los objetos literales admiten expresiones arbitrarias en la posición del valor, las clases de ES6 sólo admiten funciones como valores literales, un decorador restaura la capacidad de ejecutar código en tiempo de diseño, mientras se mantiene una sintaxis declarativa.

Un decorador:

* Es una expresión
* Evalúa una función
* Toma el **`target`**, **`name`** y el **`descriptor`** del decorador como argumentos
* Opcionalmente retorna un **`descriptor`** del decorador para instalar en el objeto **`target`**
* [Más Info](https://github.com/wycats/javascript-decorators/blob/master/README.md)

Parámetros de un decorador:

* **`target`:** El objeto al que queremos modificar su definición de propiedades
* **`name`:** El nombre de la propiedad a modificar
* **`descriptor`:** La descripción de la propiedad del objeto, que a su vez es:
	* **`configurable`:** indica si puede ser modificada
	* **`enumerable`:** se puede usar con un **`for...of`**
	* **`value`:** valor asociado a la propiedad
	* **`writable`:** indica si la propiedad puede ser cambiada con una asignación
	* **`get`:** indica si la propiedad es un **`getter`**
	* **`set`:** indica si la propiedad es un **`setter`**

```JavaScript
const soloLectura = (target, name, descriptor) => {
	descriptor.writable = false;
	return descriptor;
};

class Persona {
	constructor( {nombre, apellido} ) {
		this.nombre = nombre;
		this.apellido = apellido;
	}

	@soloLectura
	nombrar() { 
		return `${this.nombre} ${this.apellido}`;
	}
}

const alguien = new Persona({
	nombre: 'Jonathan',
	apellido: 'MirCha'
});

console.log( alguien.nombrar() ); //Imprime Jonathan MirCha

alguien.nombrar = () => { 
	return `${this.nombre}`;
} //Ejecutará Cannot assign to read only property 'nombrar' of object '#<Persona>'
```

**[⬆ regresar al índice](#Índice)**


## Funciones Asíncronas

### aka Async Functions

Son una nueva característica aun no soportada en ES6, que nos permitirá realizar las mismas cosa que se pueden lograr con Generadores y Promesas pero con menos esfuerzo. Es un gran recurso para ponerse en marcha con ES7.

### Más Info

* [Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Async Functions](https://tc39.github.io/ecmascript-asyncawait/)
* [ES7 async functions](https://jakearchibald.com/2014/es7-async-functions/)
* [USING ES7 ASYNC/AWAIT TODAY WITH BABEL](http://masnun.com/2015/11/11/using-es7-asyncawait-today-with-babel.html)

```JavaScript
function createUser(name) {
	alert(`Usuario ${name} creado`);
}

function getFriends(name) {
	alert( `Obteniendo amigos de ${name}` );
	return 150;
}

async function setNewUser(name) {  
	let newUser = await createUser(name),
		friends = await getFriends(name);

	if (friends !== 0) {
		alert( `${name} tienes ${friends} amigos` );
	} else {
		alert( `${name} eres un antisocial sin amigos` );
	}
}

setNewUser('Jonathan');
```

### En Node.js

```JavaScript
const fs = require('fs'),
	file = './nombres.txt',
	newFile = './nombres_async_es6.txt';


function accessFile(file) {
	fs.access(file, fs.F_OK, (err) => {
		return (err) 
			? new Error('El archivo no existe')
			: console.log('El archivo existe');
	});
}

function readFile(file) {
	fs.readFile(file, (err, data) => {
		return (err) 
			? new Error('El archivo no se pudo leer') 
			: data;
	});
}

function writeFile(newFile, data) {
	fs.writeFile(newFile, data, (err) => {
		return (err)
			? new Error('El archivo no se pudo copiar')
			: console.log('El archivo se ha copiado con éxito');
	});
}

async function copyFile() {
	let af1 = await accessFile(file),
		af2 = await readFile(file),
		af3 = await writeFile(newFile, af2);
}

copyFile();
```

**[⬆ regresar al índice](#Índice)**


## Métodos clase String

Nuevos métodos para Cadenas de Texto.

* [**`.startsWith()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
* [**`.endsWith()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
* [**`.includes()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
* [**`.repeat()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
* [**`.normalize()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
* [**`.raw()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
* [**`.fromCodePoint()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)
* [**`.codePointAt()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)

```JavaScript
let nombre = 'Jonathan';

console.log( nombre.startsWith('jo') ); //Imprime false
console.log( nombre.endsWith('an') ); //Imprime true
console.log( nombre.includes('th') ); //Imprime true
console.log( nombre.repeat(3) ); //Imprime JonathanJonathanJonathan}
```

**[⬆ regresar al índice](#Índice)**


## Números octales y binarios

```JavaScript
//octales
console.log(0o17); //Imprime 15

//binarios
console.log(0b100); //Imprime 4
```

**[⬆ regresar al índice](#Índice)**


## Métodos clase Math

Nuevos métodos de la Clase Matemáticas, apto sólo para ñoños :stuck_out_tongue_winking_eye:.

* [**`.acosh()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh)
* [**`.asinh()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh)
* [**`.atanh()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh)
* [**`.cbrt()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt)
* [**`.clz32()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32)
* [**`.cosh()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh)
* [**`.expm1()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1)
* [**`.fround()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround)
* [**`.hypot()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
* [**`.imul()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)
* [**`.log10()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10)
* [**`.log1p()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p)
* [**`.log2()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2)
* [**`.sign()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
* [**`.sinh()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh)
* [**`.tanh()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh)
* [**`.trunc()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

```JavaScript
console.log( Math.acosh(3) ); //Imprime 1.7627471740390859
console.log( Math.asinh(2) ); //Imprime 1.4436354751788103
console.log( Math.atanh(1) ); //Imprime Infinity
console.log( Math.cbrt(4) ); //Imprime 1.5874010519681996
console.log( Math.clz32(5) ); //Imprime 29
console.log( Math.cosh(7) ); //Imprime 548.317035155212
console.log( Math.expm1(8) ); //Imprime 2979.9579870417283
console.log( Math.fround(9.56789) ); //Imprime 9.567890167236328
console.log( Math.hypot(11,23) ); //Imprime 25.495097567963924
console.log( Math.imul(13, 3) ); //Imprime 39
console.log( Math.log10(54) ); //Imprime 1.7323937598229686
console.log( Math.log1p(34) ); //Imprime 3.5553480614894135
console.log( Math.log2(100) ); //Imprime 6.643856189774724
console.log( Math.sign(46) ); //Imprime 1
console.log( Math.sinh(22) ); //Imprime 1792456423.065796
console.log( Math.tanh(19) ); //Imprime 0.9999999999999999
console.log( Math.trunc(40.56) ); //Imprime 40
```

**[⬆ regresar al índice](#Índice)**


## Métodos clase Array

Nuevos métodos para Arreglos.

* [**`.from()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [**`.of()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
* [**`.copyWithin()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
* [**`.find()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [**`.findIndex()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
* [**`.fill()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
* [**`.includes()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```JavaScript
let nombre = 'Jonathan';
	
console.log( Array.from(nombre) ); //Imprime Array [ "J", "o", "n", "a", "t", "h", "a", "n" ]

console.log( Array.of(7) ); //Imprime [7]
console.log( Array.of(1, 2, 3) ); //Imprime [1, 2, 3]

console.log( Array(7) ); //Imprime [ , , , , , , ]
console.log( Array(1, 2, 3) ); //Imprime [1, 2, 3]

console.log( ['a', 'b', 'c', 'd', 'e'] ); //Imprime ["a", "b", "c", "d", "e"]
console.log( ['a', 'b', 'c', 'd', 'e'].copyWithin(3, 0) ); //Imprime ["a", "b", "c", "a", "b"]

console.log( [20, 40, 100, 60, 80] ); //Imprime [20, 40, 100, 60, 80]
console.log( [20, 40, 100, 60, 80].find( n => n > 50 ) ); //Imprime 100
console.log( [20, 40, 100, 60, 80].findIndex( n => n > 50 ) ); //Imprime 2

console.log( [1, 2, 3].fill(4) ); //Imprime [4, 4, 4]
console.log( [1, 2, 3].fill(4, 1) ); //Imprime [1, 4, 4]
console.log( [1, 2, 3].fill(4, 0, 1) ); //Imprime [4, 2, 3]

console.log( [1, 2, 3].includes(2) ); //Imprime true
console.log( [1, 2, 3].includes(4) ); //Imprime false
```

**[⬆ regresar al índice](#Índice)**


## Métodos clase Object

Nuevos métodos para Objetos.

* [**`.assign()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* [**`.values()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
* [**`.entries()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)


```JavaScript
const a = { a: 1 },
	b = { b: 2 },
	c = {};

Object.assign(c, a, b);

console.log( a ); //Imprime {a: 1}
console.log( b ); //Imprime {b: 2}
console.log( c ); //Imprime {a: 1, b: 2}

console.log( Object.values(c) ); //Imprime [1, 2]
console.log( Object.entries(c) ); //Imprime [ ["a", 1], ["b", 2] ]
```

**[⬆ regresar al índice](#Índice)**


## Maps, Sets y Weaks

### aka Map, WeakMap, Set & WeakSet

ES6 incorpora 4 nuevas estructuras de datos, que son **`Map`**, **`WeakMap`**, **`Set`** y **`WeakSet`**. Si has trabajado con lenguajes como Java o Python ya te harás una idea de para que sirven.

### Más info

* [**`Map`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [**`WeakMap`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
* [**`Set`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [**`WeakSet`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

### Map

El objecto **`Map`** nos permite relacionar (mapear) unos valores con otros como si fuera un diccionario, en formato clave/valor. Cualquier valor (tanto objetos como valores primitivos) puede ser usados como clave o valor.

Los Maps nos permiten saber de inmediato si existe una clave o borrar un par clave/valor concreto. Además, podemos crear Maps a partir de un array de pares:

```JavaScript
let map = new Map();
map.set('clave', 123);

let user = { userId: 1 };
map.set(user, 'Jonathan');

console.log( map ); //Imprime Map {"clave" => 123, Object {userId: 1} => "Jonathan"}
console.log( map.get('clave') ); //Imprime 123
console.log( map.get(user) ); //Imprime Jonathan

console.log( map.size ); //Imprime 2

console.log( map.has('clave') ); // Imprime true
console.log( map.delete('clave') ); //Imprime true
console.log( map.has('clave') ); //Imprime false

map.clear(); 
console.log( map.size ); //Imprime 0

map = new Map( [ ['user1', 'Jonathan'], ['user2', 'Irma'], ['user3', 'kEnAi'] ] );
console.log( map.size ); //Imprime 3

for( let [key, value] of map ){
  console.log( key, value );
}

//Imprime user1 Jonathan
//Imprime user2 Irma
//Imprime user3 kEnAi

console.log( map.keys() ); //Imprime MapIterator {"user1", "user2", "user3"}
console.log( map.values() ); //Imprime MapIterator {"Jonathan", "Irma", "kEnAi"}
console.log( map.entries() ); //Imprime MapIterator {["user1", "Jonathan"], ["user2", "Irma"], ["user3", "kEnAi"]}
```

### WeakMap

Los WeakMaps son similares a los Maps, pero con algunas diferencias:

Un **`WeakMap`** solo acepta objetos como claves, la referencia a las claves es débil, lo que significa que si no hay otras referencias al objeto que actúa como clave, el recolector de basura podrá liberarlo.

Debido a que usa referencias débiles, un **`WeakMap`** NO dispone del método **`.keys()`** para recuperar las claves, NI de propiedades o métodos relacionados con más de un elemento a la vez, como **`.values()`**, **`.entries()`**, **`.clear()`** o **`.size`**.

Tampoco podemos iterar un **`WeakMap`** con el bucle **`for of`**.

```JavaScript
let clave = { userId: 1 },
	clave2 = { userId: 2 },
	weakmap = new WeakMap();

weakmap.set( clave, 'Jonathan' );
console.log( weakmap ); //Imprime WeakMap {Object {userId: 1} => "Jonathan"}

console.log( weakmap.has(clave) ); //Imprime true
console.log( weakmap.get(clave) ); //Imprime Jonathan
console.log( weakmap.size ); //Imprime undefined

weakmap.delete(clave);
console.log( weakmap.get(clave) ); //Imprime undefined
console.log( weakmap ); //Imprime WeakMap {}

weakmap.set( clave2, 'Irma' );
console.log( weakmap.get(clave2) ); //Imprime Irma
console.log( weakmap ); //Imprime WeakMap {Object {userId: 2} => "Irma"}
```

### Set

Los sets son conjuntos de elementos no repetidos, que pueden ser tanto objetos, como valores primitivos.

Tiene métodos equivalentes a un **`Map`**, con la diferencia que utilizamos **`.add()`** para añadir elementos, y que las **`keys`** y los **`values`** son lo mismo, el valor del objeto.

Del mismo modo, **`.entries()`** devuelve una pareja **`[value, value]`**

```JavaScript
let set = new Set();

set.add('Jonathan');
set.add('Irma');
set.add('Irma');

console.log( set.size ); //Imprime 2

for ( let item of set ) {
	console.log(item);
}

//Imprime Jonathan
//Imprime Irma

for ( let item of set.entries() ){
	console.log(item);
}

//Imprime ["Jonathan", "Jonathan"]
//Imprime ["Irma", "Irma"]

console.log( set.has('Jonathan') ); //Imprime true

set.delete('Jonathan');
console.log( set.has('Jonathan') ); //Imprime false

console.log( set.size ); //Imprime 1

set.clear();

console.log( set.size ); //Imprime 0
```

### WeakSet

Similar al **`WeakMap`**, pero con los Sets. Las dos principales diferencias de un **`WeakSet`** respecto a un **`Set`** son:

1. Únicamente pueden contener colecciones de objetos.
1. La referencia a los objetos es débil, por lo que si no hay otra referencia a uno de los objetos contenidos en el **`WeakSet`**, el recolector de basura lo podrá liberar. Esto implica que:
	* No hay una lista de objetos almacenados en la colección
	* Los WeakSet no son enumerables.

Básicamente, los métodos de los que dispone un **`WeakSet`** son:

* **`.add()`**
* **`.delete()`**
* **`.has()`**

```JavaScript
let objs = [ 'Jonathan', 'Irma', 'kEnAi' ],
	weakset = new WeakSet();

console.log( weakset ); //Imprime WeakSet {}

weakset.add(objs);
console.log( weakset ); //Imprime WeakSet {["Jonathan", "Irma", "kEnAi"]}
console.log( weakset.has(objs) ); //Imprime true

weakset.delete(objs);
console.log( weakset.has(objs) ); //Imprime false
```

**[⬆ regresar al índice](#Índice)**