const taskList = [];

class Task {

    constructor(title) {
        this.title = title;
        this.completed = false;
    }
    

    complete() {
        this.completed = true;
    }

    toString() {
        if (this.completed) {
            return `${this.title} [COMPLETED]   `;
        }
        return `${this.title} [INCOMPLETE]  `;
    }
}   



function submit() {
    let title = document.getElementById("task").value;


    let task = new Task(title);
    taskList.push(task);

    //document.getElementById("list").textContent = taskList;
    renderList();

    document.getElementById("task").value = "";
}

function renderList() {
    const list = document.getElementById("list");
    list.innerHTML = "";


    for (let i = 0; i < taskList.length; i++) {
        const li = document.createElement("li");
        li.textContent = taskList[i].toString();

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            taskList[i].complete();
            renderList();
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.splice(i, 1);
            renderList();
        }

        li.append(completeButton);
        li.append(deleteButton);
        list.appendChild(li);

    }
}