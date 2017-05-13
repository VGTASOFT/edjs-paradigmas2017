;
((c, d) => {
  const respuestaFetch = d.querySelector('#fetch')
  let tpl = ''

  fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then( response => response.json() )
    .then( albums => {
      c(albums)
      albums.forEach( el => tpl += `<a href="${el.url}"><img src="${el.thumbnailUrl}"></a>` )
      respuestaFetch.innerHTML = tpl
    })
    .catch( err => c(err.message) )
})(console.log, document);

((c, d) => {
  const img = d.querySelector('#fetch-img')

  fetch('./assets/img/js-logo.png')
    .then( response => response.blob() )
    .then( blob => {
      c(blob)
      let objectURL = URL.createObjectURL(blob)
      img.src = objectURL
      img.style.maxWidth = '300px'
    })
    .catch( err => c(err.message) )
})(console.log, document);

((c, d) => {
  const movies = d.querySelector('#fetch-movies')
  let tpl = ''

  fetch('./assets/movies.json')
    .then( response => response.json() )
    .then( json => {
      c(json)
      json.movies.forEach( movie => {
        tpl += `
          <article>
            <h2>${movie.title}</h2>
            <p><b>${movie.year}</b></p>
            <p><i>${movie.genres}</i></p>
            <img src="${movie.poster}">
          </article>`
      })

      movies.innerHTML = tpl
    })
    .catch( err => c(err.message) )
})(console.log, document);