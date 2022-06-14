const express = require ('express');

var T = new Twit({
    consumer_key:         'psn8fBs3uxAdDwTT2Bk1SgFgm',
    consumer_secret:      'gRCEBxaZPgBhrQcdaj1y5oxWYft4Lp7E94vUJZqp4AGFm02pSc',
    access_token:         '1536366926213136387-s7pevcNPhCFRbgukqi5NqumJ09yQxb',
    access_token_secret:  'Pu9dGAkupErLE9wVhcu6ET2g24uQTiIx6LEhtdKyptuMn',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  })

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})



app.listen(3000,()=>{
    console.log('app is working on port 3000')
})