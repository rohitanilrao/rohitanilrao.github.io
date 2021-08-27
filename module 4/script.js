
var names=new Array();
names[0]="Yakov";
names[1]="rob";
names[2]="Rahul";
names[3]="bob";
names[4]="ben";
names[5]="John";
names[6]="root";
names[7]="jammie";
names[8]="Jimmy";	


for (var i=0; i< names.length ;i++)
   {
	if (names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
		console.log("goodbye "+ names[i]);
    
    else
    {
	console.log("hello " + names[i]);
     }
}

