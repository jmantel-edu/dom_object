const myDiv = document.getElementById("myDiv");

let liNo = 4;

myDiv.innerHTML += "<h1 class='highlight'>Welcome to DOM Homework.</h1>";
myDiv.innerHTML += "<p>This is your first DOM homework assignment.</p>";
myDiv.innerHTML += "<ul id='mylist'><li>DOM stands for Document Object Model</li><li>The DOM is used to manage the elements of an HTML document</li><li>Applications can be created by modifying the DOM in real time</li></ul>";
document.getElementsByClassName("highlight")[0].style.backgroundColor = "#555555";
myDiv.innerHTML += "<button id='addli' onclick='addLI()'>Add new list item</button>"

function addLI() {
    var list = document.getElementById("mylist");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("List Item No. " + liNo));
    li.setAttribute("id", "newli");
    list.appendChild(li);
    liNo++;
}

function getRandomColor() { // This code borrowed from StackOverflow
  var letters = '0123456789ABCDEF'; // https://stackoverflow.com/questions/1484506/random-color-generator
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBGColor() {
    document.body.style.backgroundColor = getRandomColor()
}
myDiv.addEventListener("click", changeBGColor)