/** @jsx h *//** @jsxFrag h */
const { log } = console
const { html, render } = require('uhtml/cjs/x.js') 
const { createPragma} = require('jsx2tag') 
const h = createPragma(html)

const tasks = [] 
let adding 

const template = () => (
  <div>
    <ul>
      { tasks.map( task => (
        <li class="py-2 border-b border-cyan-500">
          {task}
        </li> )
      )}  
    </ul>

    { adding ? (
        <div class="flex my-2">
          <input class="mr-2" placeholder="new task" />  
          <button id="save" onclick={saveTask}>save</button>
        </div>
      ) : null 
    }

    <button class={`${adding ? 'opacity-50' : '' } mt-4`}
      onclick={enterTask}>
      add task
    </button>     
  </div> 
) 

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
  adding = false
  doRender() 
} 


doRender() 

