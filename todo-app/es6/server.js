//### todo-app server (for ES6 vanilla) ### 
const { log } = console

//Express: 
const no = require('node-html')                 
no.server(8003)
no.static() 
const { expressApp } = no 

//base template: 
const title = `todo app: <b>ES6 (vanilla)</b>`
const html = `<html>
<head>
  ${no.twLocalScript}
  ${no.twBasicStyle}
</head>          
<body class="p-6 bg-purple-100/50">

  <h1 class="mb-3">${title}</h1> 

  <div id="tasks"></div> 

  <script src="client.js"></script>

</body>
</html>`


//route: 
expressApp.get('/', (req, res) => 
  res.send(html) 
) 
