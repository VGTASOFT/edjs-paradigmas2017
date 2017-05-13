;
((c, d, ajax, j) => {
  const starwars = d.querySelector('#starwars'),
    pagination = d.querySelector('#pagination')

  function loadCharacters (startList) {
    let starwarsInfo,
       starwarsTemplate = ''

    if ( ajax.status >= 200 && ajax.status < 400 ) {
      starwarsInfo = j.parse(ajax.responseText)
      c(starwarsInfo)

      starwarsTemplate += `
        <h3>Personajes de Starwars encontrados: ${starwarsInfo.count}</h3>
        <ol start="${startList}">
      `
      
      starwarsInfo.results.forEach( people => starwarsTemplate += `<li>${people.name}</li>` )

      starwarsTemplate += `
        </ol>
        <nav id="pagination">
          <a href="${starwarsInfo.previous}" id="previous">atras</a>
          <a href="${starwarsInfo.next}" id="next">siguiente</a>
        </nav>
      `
    } else {
      starwarsTemplate = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
    }

    starwars.innerHTML = starwarsTemplate
  }

  d.addEventListener('DOMContentLoaded', e => {
    ajax.open('GET', 'http://swapi.co/api/people/', true)
    ajax.addEventListener('load', loadCharacters)
    ajax.send()
  })

  d.addEventListener('click', e => {
    e.preventDefault()
    c(e)
    if ( e.target.localName == 'a' && e.target.href.indexOf('null') === -1 ) {
      let startList = ( e.target.search.slice(-1) -1 ) * 10 + 1
      ajax.open('GET', e.target.href || 'http://swapi.co/api/people/', true)
      ajax.addEventListener('load', () => loadCharacters(startList) )
      ajax.send()
    }
  })
})(console.log, document, new XMLHttpRequest(), JSON);