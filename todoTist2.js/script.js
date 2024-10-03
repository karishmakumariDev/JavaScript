
const addButton = document.getElementById('add');
console.log(addButton);
const inputEle = document.getElementById('Input');
console.log(inputEle);
const list = document.getElementById('List');
console.log(list);

addButton.addEventListener('click', () => {  
    const name = inputEle.value;  
    console.log(name);

    if (name === '') {  
        alert('Please enter a task name!');  
        return;
    }

    const li = document.createElement('li');
    console.log(li);
    li.innerHTML = name;


    const deleteBtn = document.createElement('button');
    console.log("deleteBtn:"+deleteBtn)
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = function () {
        list.removeChild(li);  
    };

   console.log(li.appendChild(deleteBtn));
    console.log(list.appendChild(li));  

    inputEle.value = '';  
});
