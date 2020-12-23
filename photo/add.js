var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url!=='/favicon.ico'){
        if(res.headersSent)
            console.log('響應頭已傳送');
        else
            console.log('響應頭未傳送');
        res.writeHead(200,{'Content-Type':'text/plain','Access-Control-Allow-Origin':'http://localhost:63342'});
        if(res.headersSent)
            console.log('響應頭已傳送');
        else
            console.log('響應頭未傳送');       
        res.write('你好啊!');
    }
    res.end();
});
server.listen(1337,'localhost',function(){
    console.log('開始監聽…');
});