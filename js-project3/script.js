const nameInput = document.getElementById('nameInput');
const button = document.getElementById('red-button');
const userDetail = document.getElementById('userDetail');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const messag = document.getElementsByClassName('errormessage');
const showButton = document.getElementById('all-user');

let users = [
    { name: "Manish", age: 28, email: "Manish@example.com", RollNo: "1" },
    { name: "Bikash", age: 24, email: "Bikash@example.com", RollNo: "2" },
    { name: "Karishma", age: 20, email: "Karishma@example.com", RollNo: "3" }
];
// console.log(users);


let prvSearchInput = '';

button.addEventListener('click', () => {
    let name = nameInput.value.toLowerCase();


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
        // console.log("details" + details);

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

showButton.addEventListener('click', () => {
    userDetail.innerHTML = "";
    users.forEach((user) => {
        userDetail.innerHTML += `
            <div>
                Name: ${user.name} 
                Age: ${user.age}
                Email: ${user.email}
                Roll No: ${user.RollNo}
            </div> 
            <button onclick="deleteUser(${user.RollNo})">delete</delete>
            `;
    });
});

const deleteUser = (rollNo) => {
    users = users.filter((userObj) => userObj.RollNo !== "" +rollNo);
    showButton.click();
}

submitButton.disabled = true;
submitButton.style.backgroundColor = 'red';
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameElem = document.getElementById('name');
    const ageElem = document.getElementById('age');
    const emailElem = document.getElementById('email');
    const rollElem = document.getElementById('roll');

    const nameError = document.getElementById('nameError');
    const ageEr = document.getElementById('ageEr');
    const emailError = document.getElementById('emailError');
    const rollError = document.getElementById('rollError');

    const name = nameElem.value;
    const age = ageElem.value;
    const email = emailElem.value;
    const roll = rollElem.value;

    if (name.trim() === '') {
        nameError.style.display = 'block';
        nameElem.style.border = "1px solid red";
    } else {
        nameError.style.display = 'none';
        nameElem.style.border = "1px solid black";
    }

    if (age === '') {
        ageEr.style.display = 'block';
        ageElem.style.border = "1px solid red";
    } else {
        ageEr.style.display = 'none';
        ageElem.style.border = "1px solid black";
    }

    if (email === '') {
        emailError.style.display = 'block';
        emailElem.style.border = "1px solid red";
    } else {
        emailError.style.display = 'none';
        emailElem.style.border = "1px solid black";
    }

    if (roll === '') {
        rollError.style.display = 'block';
        rollElem.style.border = "1px solid red";
    } else {
        rollError.style.display = 'none';
        rollElem.style.border = "1px solid black";
    }

    if (name && age && email && roll) {
        users.push({
            name: name,
            age: age,
            email: email,
            RollNo: roll
        });

        nameElem.value = "";
        ageElem.value = "";
        emailElem.value = "";
        rollElem.value = "";
        console.log(users);
        alert('Submission is successful');
        showButton.click();

    } else {
        alert('Submission is not successful, fill all fields');
    }


});


// disable button if any fiels is empty

const nameElem = document.getElementById('name');
const ageElem = document.getElementById('age');
const emailElem = document.getElementById('email');
const rollElem = document.getElementById('roll');

let nameValue = ''; // manish
let ageValue = '';
let emailValue = '';
let rollValue = '';

const checkIsEmpty = () => {
    if (nameValue == ''
        || ageValue == ''
        || emailValue == ''
        || rollValue == ''
    ) {
        return true;
    }

    return false;
}

nameElem.addEventListener('keyup', () => {
    nameValue = nameElem.value; // manish
    console.log("name", nameValue);
    if (checkIsEmpty() == false) {
        console.log("green")
        submitButton.style.backgroundColor = 'green';
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = 'red';
        submitButton.disabled = true;
    }
})


ageElem.addEventListener('change', () => {
    ageValue = ageElem.value; // manish
    console.log("age", ageValue);
    if (checkIsEmpty() == false) {
        console.log("green")
        submitButton.style.backgroundColor = 'green';
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = 'red';
        submitButton.disabled = true;
    }
})

emailElem.addEventListener('keyup', () => {
    emailValue = emailElem.value; // manish
    console.log("email", emailValue);
    if (checkIsEmpty() == false) {
        console.log("green") 
        submitButton.style.backgroundColor = 'green';
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = 'red';
        submitButton.disabled = true;
    }
})

rollElem.addEventListener('keyup', () => {
    rollValue = rollElem.value; // manish
    console.log("roll", rollValue);
    if (checkIsEmpty() == false) {
        console.log("green")
        submitButton.style.backgroundColor = 'green';
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = 'red';
        submitButton.disabled = true;
    }
})



