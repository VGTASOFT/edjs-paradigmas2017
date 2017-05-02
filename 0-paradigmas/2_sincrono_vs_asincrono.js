const fs = require('fs'),
	file = './assets/archivo.txt'

 /* Código Síncrono */
/*console.time('Síncrono')

console.log( '\nAbriendo Archivo...' )

let content

try {
  content = fs.readFileSync(file, 'utf8')
  console.log(content)
} catch(err) {
  console.log(err.message)
}

console.log( '\nHaciendo otra cosa\n' )

console.log( '\nHaciendo otra cosa más\n' )

 console.timeEnd('Síncrono')*/

 console.time('Asíncrono')

console.log( '\nAbriendo Archivo...' )

let content = fs.readFile( file, 'utf8', (err, content) => (err) ? console.log(err.message) : console.log(content) )

console.log( '\nHaciendo otra cosa\n' )

console.log( '\nHaciendo otra cosa más\n' )

console.timeEnd('Asíncrono')