const express = require('express'); //Line 1
const app = express(); //Line 2
const bodyParser=require('body-parser')
const cors=require('cors')
const port = process.env.PORT || 5000; //Line 3


//enable cors
app.use(cors())

//parse incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
// This displays message that the server running and listening to specified port

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// create a GET route
app.get('/send', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11