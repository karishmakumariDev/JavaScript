const nameInput = document.getElementById('nameInput');
const button = document.getElementById('red-button');
const userDetail = document.getElementById('userDetail');
const message = document.getElementById('message'); 
const submitButton = document.getElementById('submitButton'); 

let users = [
    { name: "Manish", age: 28, email: "Manish@example.com", RollNo: "1" },
    { name: "Bikash", age: 24, email: "Bikash@example.com", RollNo: "2" },
    { name: "Karishma", age: 20, email: "Karishma@example.com", RollNo: "3" }
];
console.log(users);
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
    

    if (prvSearchInput === currentInput) {
        button.style.backgroundColor = 'red';
    } else {
        button.style.backgroundColor = 'green';
    }
});

submitButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const roll = document.getElementById('roll').value;

    if (name && age && email && roll) {
        users.push({
            name: name,
            age: age,
            email: email,
            RollNo: roll 
        });
        console.log(users);
        alert('Submission is successful');
    } else {
        alert('Submission is not successful');
    }

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('email').value = "";
    document.getElementById('roll').value = "";
});

