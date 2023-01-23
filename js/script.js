let users = [
	{
		name: "anvar"
	},
	{
		name: "shahzod"
	},
	{
		name:"narimon"
		
	},
	{
		name:"lulu"
		
	},
	{
		name:"sara"
		
	},
	{
		name:"lisa"
		
	},
	{
		name:"otabek"
		
	},
	{
		name:"asilbek"
		
	},
	{
		name:"sarvar"
		
	},
	{
		name:"aziz"
		
	}

];
let i = 0
let report 
function usersInfo(){
	report = users[i].name.length
	if(report > 5){
	   console.log(users[i].name, "bu ismni harflari besh harfdan ko'p")
	}else if(report == 5){
		 console.log(users[i].name, "bu ismni harflari besh harfdan iborat")
	}else{
		console.log( users[i].name ,"bu ismni harflari besh harfdan kam")
	}
}


for (; i < 10; i++){
	usersInfo()
}

	