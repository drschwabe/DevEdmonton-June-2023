const { log } = console
import sprae from '/node_modules/sprae/sprae.min.js'  

log('hello world')

let state 
const tasks = [] 
const adding = false           

const enterTask = () => {
  log('clicked add task') 
  state.adding = true 
  setTimeout( () => 
    document.querySelector('input').focus() 
  , 1 )
}  

const saveTask = () => {
  state.tasks.push( 
    document.querySelector('input').value ) 
  log(tasks)                    
  state.adding = false
  document.querySelector('input').value = ''
}  

const container = document.getElementById('tasks') 
state = sprae(container, 
  { tasks, adding, enterTask, saveTask })    
