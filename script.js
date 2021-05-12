var database=[
{
	username: "rahul vashisth",
	password: "rahuvas"
},
{
	username: "jai chauhan",
	password: "amandeep"
},
{
	username: "jai",
	password: "a1wala"
},
{
	username: "vinay",
	password: "nagativity"
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
},
{
username: "jai",
timeline:"you guys are studying javascript"
}
];
function isUserValid(username,password)
{
	for(var i=0; i<database.length;i++)
	{
		if(database[i].username===username &&
			database[i].password===password)
		{
			return true;
		}
	}
	return false;
}






function signIn(username, password)
{
   /* console.log(isUserValid(username,password));*/
    
	if (isUserValid(username,password)){

 console.log(newsFeed);
}

 else
 {
 	alert("sorry , wrong username and password");
 }
}
var userNamePrompt = prompt("what\'s your username?");
var passwordPrompt = prompt("whats\'s your password?");

signIn(userNamePrompt,passwordPrompt);
