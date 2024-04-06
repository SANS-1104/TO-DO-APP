let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");


// adding a task

btn.addEventListener("click",function(){
    if (inp.value != ""){
        // add element to list
        let item = document.createElement("li");
        item.innerText = inp.value;
        ol.appendChild(item);

        // add a delete button
        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        delbtn.classList.add("delete");
        item.appendChild(delbtn);

        // clear input window
        inp.value = "";

        //confirmation
        console.log("Task Added");
    }else alert("Enter Valid Task!!")

});

// deleting the task

ol.addEventListener("click", function(e){
    if(e.target.nodeName == "BUTTON"){
        let listItem  = e.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});