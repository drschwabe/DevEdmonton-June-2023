const { log } = console
const fs = require('fs') 
const no = require('node-html')                 

let slides = fs.readdirSync('./slides') 

//sort solution to workaround Inkscape's export
//convention (ie: "Page 1.svg, ..., Page 10.svg") 
slides = slides.sort((a, b) => {
  const aPageNumber = parseInt(a.match(/\d+/)[0])
  const bPageNumber = parseInt(b.match(/\d+/)[0])
  return aPageNumber - bPageNumber
}).map( slide => 
  slide = '/slides/' + slide 
) 

//server: 
no.server(9000) 
no.static() 

//here we will write the page and client JS 
//since our client script is quite basic: 
//(and sprae doesn't need backticks)
no.expressApp.get('/', (req, res) =>
  res.send(
`<html>
  <head>${no.twLocalScript}</head>
  <body>
    <img :src="currentSlide" class="w-full max-h-screen" /> 
  
  <script type="module">

import sprae from '/node_modules/sprae/sprae.min.js'  
const { log } = console

const slides = ${JSON.stringify(slides)} 
let currentSlideIndex = 0 
let currentSlide = slides[currentSlideIndex] 

const state = sprae( document.body, { currentSlide }) 

document.addEventListener('keydown', e => {

  if(e.key === "ArrowRight") {
    if(currentSlideIndex === slides.length -1) return 
    currentSlideIndex++
    state.currentSlide = slides[currentSlideIndex] 
    log(currentSlide) 

  } else if(e.key === "ArrowLeft") {
    if(currentSlideIndex === 0) return 
    currentSlideIndex--
    state.currentSlide = slides[currentSlideIndex] 
    log(currentSlide) 
  }
}) 

  </script>
  </body>
</html>`
  )
) 
