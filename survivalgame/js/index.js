function game() {
alert("This is the SURVIVAL TEST. Count your points to see your rank.");

var questiontwo= prompt("Imagine you were trapped on an unhabited tropical island, with nothing but some clothes. What would you do on the first night, find shelter, food or fresh water?");
 

if(questiontwo==="shelter"){
  alert("you survived for the night(1 point)");
}

else if(questiontwo==="food"){alert("your clothes and food became wet after the rain, all the food you collected became wet and you could not eat it as it has become rotten");}

else if(questiontwo==="water"){alert("your clothes became wet after the rain but you collected lots of water during the rain(0.5 points)");}


var questionthree=prompt("On the next day, after the rain, you survived but you don't have food, so you see frogs and a bird, so what do you choose to eat, frog or bird?");

if(questionthree==="frog"){alert("You are clever, frogs are easy to catch and there are plenty of them in forests(1 point)");}

else if(questionthree==="bird"){alert("you are dumb, birds are hard to catch and you need to build weapons to kill it, so you may be starved to death.");}


var questionfour=prompt("After that night, you feel cold and you are shivering, which means you are sick, so what should you do-make a fire, don't mind the sickness or find help?");

if(questionfour==="make a fire"){alert("your sickness is hyperthermia, you will feel very cold and you feel that you could not move, so making a fire is the best choice as you can become warmer and survive.(1 point)");}

else if(questionfour==="don't mind the sickness"){alert("your sickness is hyperthermia, you will feel very cold and you feel that you could not move, so not minding the sickness may cause death");}

else if(questionfour==="find help"){alert("your sickness is hyperthermia, you will feel very cold and you feel that you could not move,mso finding help is already too late and you may die but if you are lucky, you might find some people to help you.(0.5 points)");}


var questionfive=prompt("it has been over three days, you have not found help, and you have not drank water for a few days and you will die if you don't drink some today, what should you do? Drink lots of sea water or drink  very little purified water made from sea water. sea water or purified water.");
if(questionfive==="sea water"){alert("Although you want to drink sea water, you must resist it as sea water has lots of sodium and unhealthy minerals, it may cause death.");}

else if(questionfive==="purified water"){alert("Purified water is much more better than drinking sea water, so you live for a day.(1 point)");}


var questionsix=prompt("just before you want to die, you see a  boat stopping not far away, but the waters ahead have sharks. You also see helicopter, but the pilot does not seem to see you. So what do you do, swim to the boat or signal the helicopter to help you. helicopter or boat");

if(questionsix==="boat"){alert("I am sorry but you die in the sea. You should have chosen the helicopter");}

else if(questionsix==="helicopter"){alert("A genius to choose not to swim in the water. You can signal the helicopter by making smoke and shinning metal to the helicopter.(1 point)");}

alert("Thank you for finishing the quiz. If you got all of them right, you're the King of survival. If you got three to four questions right, you are a pro-survivalist. If you got, one to two questions right, you are survival student. If you got none right, I'm sorry but you are just a dead man. ");
  
}