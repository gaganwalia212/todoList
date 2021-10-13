const express=require('express')
const bodyParesr=require('body-parser')

app=express()

app.set('view engine','ejs')
app.use(bodyParesr.urlencoded({extended:true}))


app.listen(3000,function(){
	console.log("Server is listening")
})
var task=[]
app.get("/",function(req,res){
	var options = {  year: 'numeric', month: 'long', day: 'numeric',weekday: 'long' };
	var today  = new Date();
	var hindiDay=today.toLocaleDateString("en-US",options)
	var englishDay=today.toLocaleDateString("hi-IN",options)
	res.render('index',{hindiDay:hindiDay,englishDay:englishDay,newItem:task})
	
})

app.post("/",function(req,res){
	task.push(req.body.task)
	console.log(task)
	res.redirect("/")
})
