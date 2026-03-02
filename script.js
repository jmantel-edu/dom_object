const myDiv = document.getElementById("myDiv");

myDiv.innerHTML += "<h1 class='highlight'>Welcome to DOM Homework.</h1>";
myDiv.innerHTML += "<p>This is your first DOM homework assignment.</p>";
myDiv.innerHTML += "<ul><li>DOM stands for Document Object Model</li><li>The DOM is used to manage the elements of an HTML document</li><li>Applications can be created by modifying the DOM in real time</li></ul>";
document.getElementsByClassName("highlight")[0].style.color = "#555555";