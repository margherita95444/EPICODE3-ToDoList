var btn;
var taskTxt;
var taskList;
var arrayList = [];

window.addEventListener("load", init);

function init(){
    btn = document.querySelector("#add_btn");
    taskTxt = document.querySelector("#task_txt");
    taskList = document.querySelector("#tasks_list_html");
    btn.addEventListener("click", addTask);

    checkData();
}

function checkData(){
    if(localStorage.getItem('tasks')){
        arrayList = localStorage.getItem('tasks').split(",");
    }
    buildList();
}

function addTask(){
    arrayList.push(taskTxt.value);
    buildList();
    saveData();
    taskTxt.value = '';
}

function buildList(){
    let li="";
    for(var i=0; i < arrayList.length; i++){
        li += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + arrayList[i] + "<span onclick='removeTask("+i+")' class='remove_btn badge bg-danger rounded-pill pointer'>X</span></li>";
    }
    taskList.innerHTML = li;
}

function saveData(){
    localStorage.setItem('tasks', arrayList);
}

function removeTask(id){
    arrayList.splice(id, 1);
    saveData();
    buildList();
}