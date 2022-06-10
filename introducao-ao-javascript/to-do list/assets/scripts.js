window.addEventListener('load', () =>{
    const $form = document.querySelector('#new-task-form');
    const $input = document.querySelector('#new-task-input');
    const $list_el = document.querySelector('#tasks');
   

    $form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = $input.value;
        if(!task){
            alert("Please fill out the task!");
            return
        }else{
            addNewTask(task);
            $form.reset();
        }
    })

    function addNewTask(task)
    {
        const taskLi = document.createElement('li');
        const newTask = document.createElement('input');
        const taskLabel = document.createElement('label');
        const taskNode = document.createTextNode(task);

        newTask.setAttribute('type', 'checkbox');
        newTask.setAttribute('name', task);
        newTask.setAttribute('id', task);

        taskLabel.setAttribute('for', task);
        taskLabel.appendChild(taskNode);

        taskLi.classList.add('task-item');
        taskLi.appendChild(newTask);
        taskLi.appendChild(taskLabel);

        $list_el.appendChild(taskLi);
    }

})  