const { log } = console
const { render, html } = require('uhtml') 

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
      <div class="flex my-2">
        <input class="mr-2" placeholder="new task" />  
        <button id="save" @click=${saveTask}>save</button>
      </div>
    `
    : ``
  }

  <button class=${adding ? 'opacity-50' : '' + `mt-4`} 
    @click=${enterTask}>
    add task
  </button>     
`
const doRender = () => render(document.getElementById('tasks'), 
  template)    

const enterTask = () => {
  log('clicked add task') 
  adding = true 
  doRender() 
  document.querySelector('input').focus() 
}

const saveTask = () => {
  tasks.push( document.querySelector('input').value ) 
  log(tasks)                    
  adding = false
  doRender() 
} 


doRender() 

