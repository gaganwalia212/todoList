

exports.getHindiDay=function (){
	const options = {  year: 'numeric', month: 'long', day: 'numeric',weekday: 'long' };
	const today  = new Date();
	return today.toLocaleDateString("hi-IN",options)

}

exports.getEnglishDay=function(){
	const options = {  year: 'numeric', month: 'long', day: 'numeric',weekday: 'long' };
	const today  = new Date();
	return today.toLocaleDateString("en-US",options)

}