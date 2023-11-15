window.alert("Hello Yogesh sanjeev");

let bigcity=true;
let job=true;

/* Logical And example*/
let eligibleformarriage= bigcity && job;
console.log("eligibility:"+eligibleformarriage);

document.write("eligibility:"+eligibleformarriage);
document.write("<br>");

/* Logical OR || Example */

let flat= true;
let work=false;

let marriage= flat || work;
console.log("marriage:"+marriage);
document.write("marriage:"+marriage);
document.write("<br>");

/* Logical Not Example */

let work1=true;

console.log(!work1);
document.write(!work1);
document.write("<br>");

//conditional statement-  Switch Case  to display school name

let school = "S";

switch(school){
    case "K":
        console.log("Kolhapur Public School");
        document.write("Kolhapur Public School");
        document.write("<br>");
        break;
    case "N":
        console.log("New Highschool");
        document.write("New High School");
        document.write("<br>");
        break;
    case "S":
        console.log("Shantiniketan School");
        document.write("Shantiniketan School");
        document.write("<br>");
        break;
    default :
        console.log("Wrong keyword selected");
        document.write("Wrong keyword selected");
        document.write("<br>");
}

// Conditional statement-  If statement. to display good evening if hour more than 18.00 in time

let hour;
let greeting;

if (hour > 18)
{
    greeting="Good Evening";
}
console.log(greeting);
document.write(greeting);
document.write("<br>");

// conditional else statement: to display good day if hour less than 18, else display "Good evening"


if(hour < 18)
{
    greeting= "Good Day";
}
else{
    greeting="Good Evening";
}
console.log(greeting);
document.write(greeting);
document.write("<br>");

// conditional else.. if statement.

/* If the time is less than 12 create a good morning greeting, if not, but time is less than 20:00, create a "Good Day" greeting,
otherwise a "Good Evening" greeting*/

let time;

if(time < 12){
    greeting= "Good Morning";
}
else if (time < 20) {
    greeting=" Good Day";
} else  {
    greeting= "Good Evening";
}

console.log(greeting);
document.write(greeting);
document.write("<br>");

