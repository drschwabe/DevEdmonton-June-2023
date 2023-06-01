//### todo-app server (for sprae) ### 

//Express: 
const no = require('node-html')                 
no.server(8002)
no.static() 
const { expressApp } = no 

//base template: 
const html = `<html>
<head>
  ${no.twLocalScript}
  ${no.twBasicStyle}
</head>          
<body class="p-6 bg-purple-100/50">

  <h1 class="mb-3">todo app: <b>spræ</b></h1> 

  <div id="tasks">
    <ul>
      <li :each="task in tasks" 
         class="py-2 border-b border-purple-400" > 
        <span :text="task"></span>
      </li>
    </ul>

    <div :if="adding" class="flex my-2">
      <input class="mr-2" placeholder="new task" />  
      <button :onclick="saveTask">save</button>
    </div>                

    <button class="mt-4" 
      :class="{ 'opacity-20': adding }"
      :onclick="enterTask">
      add task
    </button>        

  </div> 

  <script type="module" src="client.js"></script>

</body>
</html>`


//index route: 
expressApp.get('/', (req, res) => 
  res.send(html) 
) 
