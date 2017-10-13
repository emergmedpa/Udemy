var todos = [];
var input = prompt ("What would you like to do?");

while input !="quit" {
  if (input == "list") {
    console.log(todos);
  else if (input == "new") {
    var newTodo = (prompt("Please enter item to add to your To Do List: "))
    todos.push(newTodo);
  }
  else if (input =="quit") {
    break
  }
  else {
    alert("That is an invalid entry. Please try again")
  }
  var input = prompt ("What would you like to do?");
}
alert("Thank you for using the To Do List Application")
}
