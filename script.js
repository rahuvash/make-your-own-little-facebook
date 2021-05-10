var database=[
{
	username: "rahul vashisth",
	password: "rahuvas"
}

];

var newsFeed =[
{
username: "bobby",
timeline:"so tired from all this learning!"
},
{
	username: "selly",
	timeline: "javascript is so cool!"
}

];

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("whats your password?");

function signIn(user, pass)
{
	if (user===database[0].username &&
		pass===database[0].password)
 console.log(newsFeed);

 else
 {
 	alert("sorry , wrong username and password");
 }
}
signIn(userNamePrompt,passwordPrompt);
