var express = require('express');
var app = express();
var port =  process.env.PORT || 7899;
app.use(express.static(__dirname));
app.use(function(req,res){ res.sendFile(__dirname+'/index.html'); });

app.listen(port,function(){
  console.log('runnnig on http://localhost:'+port);
})
