function foo(a,b){
	var person1 = { name : "Shubham", lastName: " Kamat", gender: "female", location: "NJ", graduated: true};
	var person2 = { name: "Bob", lastName:"W", gender:"male", location:"NY", graduated: true};
	var person3 = { name: "Vivaan", lastName: "Kamat", gender: "male", location : "NJ", graduated: false};

	var people = [person1, person2, person3];

	for(i=0; i<people.length;i++)
		if(people[i].graduated)
			document.getElementById("demo").innerHTML  += people[i].name + "  " + people[i].lastName + " is graduated.<br>"; 
		else
			document.getElementById("demo").innerHTML  += people[i].name + " " + people[i].lastName + " is not graduated.<br>";
}