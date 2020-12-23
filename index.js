// 把express套件載入程式中
var express= require("express");
// 產生Express Application物件
var app= express();
// 當使用者連線到伺服器的跟目錄{/}時，做出回應
// app.get("/", function(req,res){
//     res.send("<b>Hello</b> world");    
// });

// 當使用者連線到/myhome時做出回應
app.post("/myhome", function(req,res){
// res.send("歡迎光臨Myhome");
var data= {
    contactId:1,
    forstName:'John',
    lastNam:'Doe',
    email:'John.email',
    phone:09090909,
};
res.send(data);
});

app.listen(5566,function(){
console.log("伺服器已經啟動在 http://localhost:5566/")

});
