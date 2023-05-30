const { log } = console
const { render, html } = require('uhtml') 
const $j = require('jquery')  

log('hello world') 

const tasks = [] 
let adding 

const template = () => html`
  <ul>
    ${ tasks.map( task => html`
      <li class="py-2 border-b border-gray-200">
        ${task}
      </li>
    `)}  
  </ul>

  ${ adding ? 
    html`
      <div class="flex mt-2">
        <input class="mr-2" placeholder="new task" />  
        <button id="save">save</button>
      </div>
    `
    : ``
  }
`

$j('button#add').on( 'click', () => {
  log('clicked add task') 
  adding = true 
  render(document.getElementById('tasks'), 
    template) 
  $j('button#add').addClass('opacity-50') 
  $j('input').focus() 
})

$j(document).on( 'click', 'button#save', ()=> {
  tasks.push( $j('input').val() ) 
  log(tasks)                    
  adding = false
  render(document.getElementById('tasks'), 
    template) 
  $j('button#add').removeClass('opacity-50') 
}) 




