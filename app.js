const express=require('express')
const bodyParesr=require('body-parser')
const date=require(__dirname+"/date.js")

app=express()

app.set('view engine','ejs')
app.use(bodyParesr.urlencoded({extended:true}))
app.use(express.static("public"))


app.listen(3000,function(){
	console.log("Server is listening")
})
const task=[]
const work=[]
app.get("/",function(req,res){
	const hindiDay=date.getHindiDay()
	const englishDay=date.getEnglishDay()
	res.render('index',{hindiDay:hindiDay,englishDay:englishDay,newItem:task})
	
})

app.post("/",function(req,res){
	const item=req.body.task
	console.log(work)
	console.log(task)
	if(req.body.button=="Work List")
	{
		work.push(item)
		res.redirect("/work")
	}
	else
	{
		task.push(item)
		res.redirect("/")
	}
})

app.get("/work",function(req,res){
	const hindiDay=date.getHindiDay()
	res.render('index',{hindiDay:hindiDay,englishDay:"Work List",newItem:work})

})


app.get("/about",function(req,res){
	res.render('about')
})

// app.post("/work",function(req,res){
// 	work.push(req.body.task)
// 	console.log("ye raha")
// 	console.log(work)
// 	console.log(task)
// 	res.redirect("/")
// })


