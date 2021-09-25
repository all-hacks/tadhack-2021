const express = require('express');
const bodyParser = require('body-parser');

var axios = require('axios');
var qs = require('qs');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log(`New message from ${req.body.from}: ${req.body.body}`);
    console.log('received message', JSON.stringify(req.body, null, 4));
    res.json({ messagae: "ok" });
});

app.get('/api/newpolicy', (req, res) => {

console.log(req.query);

var ic = req.query.id != undefined ? req.query.id : '640901101235';
console.log('ic', ic);

var data = qs.stringify({
  'name': 'vincent wong',
  'dob': '1964-09-01',
  'ic': ic,
  'postcode': '40000',
  'email': 'vincent.tsn@gmail.com',
  'risk_effective_date': '2021-10-20',
  'plan': 'B' 
});
var config = {
  method: 'post',
  url: 'https://senangpks.com.my/api/public/api/testingapi/new',
  headers: { 
    'Authorization': 'Bearer YiVsvMU4KkSuMauaDWT_jVuTT56AQkAQHrtk4OfZBXZeybQEEgzgeAS4YyY1gDqHNPPbju5j2eg5.s5bIpRr4MfStivKz8jHZ79', 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': 'PHPSESSID=52de0cd9ea8082f524d563fb1e8f86ee'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  res.set('Access-Control-Allow-Origin', '*');
  res.json(response.data);
})
.catch(function (error) {
  console.log(error);
});

});


app.get('/api/updatepolicy', (req, res) => {
console.log(req.query);

var policy_no = req.query.ref != undefined ? req.query.ref : '2021092532F0E';
console.log('policy_no', policy_no);

var data = qs.stringify({
  'reference_no': policy_no 
});
var config = {
  method: 'post',
  url: 'https://senangpks.com.my/api/public/api/testingapi/update',
  headers: { 
    'Authorization': 'Bearer YiVsvMU4KkSuMauaDWT_jVuTT56AQkAQHrtk4OfZBXZeybQEEgzgeAS4YyY1gDqHNPPbju5j2eg5.s5bIpRr4MfStivKz8jHZ79', 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': 'PHPSESSID=52de0cd9ea8082f524d563fb1e8f86ee'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  res.set('Access-Control-Allow-Origin', '*');
  res.json(response.data);
})
.catch(function (error) {
  console.log(error);
});




});




const port = 8000;
app.listen(port, () => console.log(`App running on port ${port}`));
