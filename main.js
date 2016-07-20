window.addEventListener("load", initApp);
 
var todos = [];
 
function initApp()
{
 var add = document.querySelector("#agregar");
 add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
 //prevenimos el evento del enlace
 event.preventDefault();
 //comprobamos que tenga texto
 if(document.querySelector("#todo").value === "") return;
 //creamos el objeto con la información del li
 var li = 
 {
 index: todos.length + 1,
 value: document.querySelector("#todo").value
 };
 todos.push(li);
 displayTodos(li);
}
 
function displayTodos(li)
{
    var node = document.createElement("li");  
    node.classList.add("col-md-12");   
    node.id = "todo"+li.index;
 
    //creamos el contenido del elementi li
 var textnode = document.createTextNode(li.value);    
 node.appendChild(textnode);   
 document.querySelector("#todoList").appendChild(node); 
 document.querySelector("#todo").value = "";
 
 //añadimos el botón
 var deleteButton = createButton(li);
    node.appendChild(deleteButton);
}
function createButton(li)
{
 var todo = document.createElement("input");
    todo.type = "button";
    todo.style.float = "right";
    todo.value = "Eliminar";
    todo.style.marginLeft = "15px";
    todo.classList.add("removeTodo", "btn", "btn-primary");
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#todo'+li.index);
        toDelete.parentNode.removeChild(toDelete);
    };
    return todo;
}