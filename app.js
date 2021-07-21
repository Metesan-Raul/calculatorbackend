const { response } = require('express');
const express = require('express')
const app = express()
const request = require('request');
const port = 5000

app.get('/TemperaturaBucuresti', (req, res) => {
request('http://api.weatherstack.com/current?access_key=3c8bfd0485a940287d501df2f67394df&query=Bucuresti',
function(error,response,body) {
    if(!error && response.statusCode == 200){
        var ParseT = JSON.parse(body);
        var temperature = ParseT['current']['temperature']
    res.send({temperature});
    }
})
})


app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at https://calculatorstiintific.herokuapp.com/`)
})