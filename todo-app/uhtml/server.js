//### todo-app server (for uhtml) ### 

//Express: 
const no = require('node-html')                 
no.server()
no.static() 
const { expressApp } = no 

//base template: 
const html = `<html>
<head>
  ${no.twLocalScript}
  ${no.twBasicStyle}
</head>          
<body class="p-6">

  <h1 class="mb-3">todo app: <b><i>µ</i>html</b></h1> 

  <div id="tasks"></div> 

  <script src="client.bundle.js"></script>

</body>
</html>`

//index route: 
expressApp.get('/', (req, res) => {
  res.send(html) 
}) 
