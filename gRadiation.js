function init(https,express,app){
  app.use('/fpdb',function(req,res){
    const option = {
      'host':'jag.cami.jccbi.gov',
      'path':'//cariprofile2.asp/' + ,DateOfFlight=12%2F2016&Ocode=CYUL&Dcode=CYYZ&NumOfSteps=3&ClimbTime=10&StepAlt_1=10000&StepMin_1=15&StepAlt_2=15000&StepMin_2=20&StepAlt_3=10000&StepMin_3=10&MinDown=10&btnSubmit=Continue'
      }
    };
    https.request(option,function(response){
      var rspData = ''
      response.on('data',function(chunk){
        rspData += chunk;
      });
      response.on('end',function(){
        res.end(rspData);
      });
    }).end();
  });
}


module.exports = init;
