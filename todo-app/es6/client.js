const { log } = console

log('hello world')

const tasks = [] 
let adding

const template = () => `
  <ul>
    ${ tasks.map( task => `
      <li class="py-2 border-b border-gray-200">
        ${task}
      </li>
    `).join('')}  
  </ul>

  ${ adding ? 
    `
      <div class="flex my-2">
        <input class="mr-2" placeholder="new task" />  
        <button id="save" onclick="saveTask()">save</button>
      </div>
    `
    : ``
  }

  <button class=${adding ? 'opacity-50' : '' + `mt-4`} 
    onclick="enterTask()">
    add task
  </button>     
`                 

const enterTask = () => {
  log('clicked add task') 
  adding = true 
  render() 
  document.querySelector('input').focus() 
}  

const saveTask = () => {
  tasks.push( 
    document.querySelector('input').value ) 
  adding = false
  document.querySelector('input').value = ''
  render() 
}  


const render = () => 
 document.getElementById('tasks').innerHTML = 
  template()        

render() 
