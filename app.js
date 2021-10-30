const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/S1', (req, res) => {
    res.send('Hello World! S1')
  })

  app.get('/S2', (req, res) => {
    res.send('Hello World! S2')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})