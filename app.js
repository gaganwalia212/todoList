const express=require('express')
const bodyParesr=require('body-parser')
app=express()
app.set('view engine','ejs')
app.use(bodyParesr.urlencoded({extended:true}))

app.listen(3000,function(){
	console.log("Server is listening")
})

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html")
	
})

app.post("/",function(req,res){
	var n1=req.body.n1
	var n2=req.body.n2
	var result=Number(n1)+Number(n2)
	res.render("index",{result:result,n1:n1,n2:n2})

})
