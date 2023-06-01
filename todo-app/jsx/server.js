//### todo-app server (for JSX) ### 

//Express: 
const no = require('node-html')                 
no.server(8001)
no.static() 
const { expressApp } = no 

const html = `<html>
<head>
  ${no.twLocalScript}
  ${no.twBasicStyle}
</head>          
<body class="p-6 bg-cyan-100/50">

  <h1 class="mb-3">todo app: <b>JSX</b></h1> 

  <div id="tasks"></div> 

  <script src="client.bundle.js"></script>

</body>
</html>`

//index route: 
expressApp.get('/', (req, res) => 
  res.send(html) 
) 
