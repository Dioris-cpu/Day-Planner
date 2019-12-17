* html
- create nav bar or some kind of jumbotron
- create a form with multiple lines to 
- have that form inside of a div.
- create buttons at the end of each form ending.
- create buttons for each of the times place holders
- create text boxes for each of the times place holders.

* css 
- 


* local storage example:
- localStorage.setItem("dog","max");
- to retrive a value use the method for example: localStorage.getItem("dog")
-  to delete an item use the method : localStorage.removeItem("dog");
-  localStorage stores strings 
-  if you want to store an object you have to set it into a string first.
- you can set an object into a string by using the method: 

var stringObj =  JSON.stringify(obj) //and save the sting of the object like this localStorage.getItem("obj", stringObj);

- to get the sting object back to an object youll wanna uses the method JSON.parse() and youll wanna set it up like this : 

var objFromLocalStorage = localStorage.getItem("obj"); 
var toObj = JSON.parse(objFromLocalStorage);



