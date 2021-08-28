const arr =[{
	quotes:"Be healthy and take care of yourself, but be happy with the beautiful things that make you, you." ,
	author:" Beyonce "
},
{
	quotes:"Beauty is everywhere. You only have to look to see it.",
	author:"Bob Ross"
},
{
	quotes:"You can’t stop the waves, but you can learn to swim.",
	author:"Jon Kabat Zinn"
},
{
	quotes:"Life is the dancer and you are the dance.",
	author:"Eckhart Tolle"
},
{
	quotes:"The point is not to pay back kindness but to pass it on.",
	author:"Julia Alvarez"
},
{
	quotes:"If you have only one smile in you give it to the people you love.",
	author:"Maya Angelou"
},
{
	quotes:"The only thing that will make you happy is being happy with who you are.",
	author:"Goldie Hawn"
},
{
	quotes:"If you have good thoughts, they will shine out of your face like sunbeams and you will always look lovely.",
	author:"Roald Dahl"
},
{
	quotes:"Simplicity makes me happy.",
	author:"Alicia Keys"
},
{
	quotes:"We love because it's the only true adventure.",
	author:"Nikki Giovanni"
}]

function quotesgenerate(){
	var random= Math.floor(Math.random()*arr.length);
	var quotes  = document.getElementById("inner");
	var author = document.getElementById("outer"); 
	quotes.innerHTML= arr[random].quotes;
	author.innerHTML= "Written by : " + arr[random].author;
}