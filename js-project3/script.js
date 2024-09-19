
const nameInput = document.getElementById('nameInput');
const button = document.getElementById('red-button');
const userDetail = document.getElementById('userDetail');
const message = document.getElementById('message'); 

let users = [
    { name: "Manish", age: 28, email: "Manish@example.com", RollNo: "123" },
    { name: "Bikash", age: 24, email: "Bikash@example.com", RollNo: "456" },
    { name: "Karishma", age: 20, email: "Karishma@example.com", RollNo: "789" }
];

let prvSearchInput = '';

button.addEventListener('click', () => {
    let name = nameInput.value.toLowerCase();

    if (prvSearchInput === name) {
        button.style.backgroundColor = 'green';
        alert("Data is already available");
        return;
    }

    prvSearchInput = name;
    let searchVal = null;
    userDetail.innerHTML = "";
    message.innerHTML = ""; 

    users.forEach((obj) => {
        if (obj.name.toLowerCase() === name) {
            searchVal = obj;
        }
    });

    if (searchVal !== null) {
        const details = [
            searchVal.name,
            searchVal.age,
            searchVal.email,
            searchVal.RollNo
        ];

        let index = 0;

        let id = setInterval(() => {
            userDetail.innerHTML += `<div>${details[index]}</div>`;
            index++;
            if (index === details.length) {
                clearInterval(id);
            }
        }, 1000);
    } else {
        userDetail.innerHTML = '<h2>User not found</h2>'; 
    }

    nameInput.value = "";
});

nameInput.addEventListener('keyup', () => {
    let currentInput = nameInput.value.toLowerCase();
    message.innerHTML = ""; 

    if (prvSearchInput === currentInput) {
        button.style.backgroundColor = 'red';
    }else {
        button.style.backgroundColor = 'green';
    }
});
