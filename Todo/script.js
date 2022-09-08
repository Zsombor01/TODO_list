// window.addEventListener('DOMContentLoaded', () => {
    
    const input = document.getElementById("addtask");
    const button = document.getElementById("add-btn");
    const logo1 = document.getElementById("logo1");
    const taskContainer = document.querySelector(".task-container");

    button.addEventListener("click", addTodo);
    input.addEventListener("keyup", event => {
        event.preventDefault();
        if (event.keyCode === 13) {
            addTodo();
        }
    })
    
    function addTodo() {
        // event.preventDefault(); /* to stop refresh the page */
    
        // to make the user enter a task
        if(!input.value){
            alert("Please enter a task.")
        } else { // task div

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("task");
        todoDiv.innerText = input.value;

        taskContainer.appendChild(todoDiv);
    
        // Span Container
        todoSpanCont = document.createElement("div");
        todoSpanCont.classList.add("span-container");
        
        todoDiv.appendChild(todoSpanCont);
    
        // check logo
        const todoSpan1 = document.createElement("span");
        todoSpan1.classList.add("logo1");
        todoSpan1.classList.add("material-symbols-outlined");
        todoSpan1.setAttribute('id', 'logo1');
        todoSpan1.innerText = "done_outline";
    
        todoSpanCont.appendChild(todoSpan1);
    
        const todoSpan2 = document.createElement("span");
        todoSpan2.classList.add("logo2");
        todoSpan2.classList.add("material-symbols-outlined");
        todoSpan2.setAttribute('id', 'logo2');
        todoSpan2.innerText = "delete";
        
        todoSpanCont.appendChild(todoSpan2);
        // clear input value
        input.value = "";
        
        todoSpan1.addEventListener("click", (e) => {
            // const paragraph = document.getElementById("paragraph");
            checkItem = todoSpan1.parentElement.parentElement;
            checkItem.classList.toggle("todoText");
        });

        todoSpan2.addEventListener("click", (e) => {
            taskContainer.removeChild(todoDiv);
        })
        
    }; 

}

// })

