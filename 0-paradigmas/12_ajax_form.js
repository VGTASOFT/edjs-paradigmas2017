;
((c, d, ajax) => {
  const READY_STATE_COMPLETE = 4,
    OK = 200,
    NOT_FOUND = 404,
    form = d.forms[0],
    preload = form.querySelector('.preload'),
    message = form.querySelector('.message')

  form.addEventListener('submit', e => {
    let formsElements = d.querySelectorAll('[required]'),
      formData = ''
    
    e.preventDefault()
    
    ajax.open('POST', './assets/send_mail.php', true)
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    ajax.addEventListener('load', e => {
      preload.classList.remove('hidden')

      if ( ajax.readyState === READY_STATE_COMPLETE ) {
        preload.classList.add('hidden')
        message.classList.remove('hidden')

        if ( ajax.status === OK) {
          message.innerHTML = ajax.response
          form.reset()
        } else if ( ajax.status === NOT_FOUND ) {
          message.innerHTML = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
        }
      }
    })

    formsElements.forEach( input => formData += `${input.name}=${input.value}&` )

    c(formData)

    ajax.send( encodeURI(formData) )
  })
})(console.log, document, new XMLHttpRequest());