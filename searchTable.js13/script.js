console.log('karisma');

let userData = [
    {Name: "Manish", Age: "28", RollNo: "1"},
    {Name: "Vikash", Age: "24", RollNo: "2"},
    {Name: "Karishma", Age: "20", RollNo: "3"},
    {Name: "Sakshy", Age: "6", RollNo: "4"},
];

localStorage.removeItem('name');
const name = document.getElementById('Name');

name.addEventListener('click', () => {
    localStorage.setItem('ClickElem', 'Name');
    name.style.backgroundColor = "pink";
    roll.style.backgroundColor="";
    age.style.backgroundColor = "";
    let userName = [];
    for (let i = 0; i < userData.length; i++) {
        userName.push(userData[i]);
        console.log(userData[i]); 
    }
    userName.sort((a, b) => a.Name.localeCompare(b.Name));
    
    console.log(userName);
    localStorage.setItem('data', JSON.stringify(userName));
    createTable(userName);
});


const age = document.getElementById('Age');
age.addEventListener('click',() => {
    localStorage.setItem('ClickElem', 'Age');
    age.style.backgroundColor = "red";
    roll.style.backgroundColor="";
    name.style.backgroundColor = "";
    let userAge = [];
    for (let i = 0; i < userData.length; i++) {
        userAge.push(userData[i]);
        console.log(userData[i]); 
    }
    userAge.sort((a, b) => parseInt(a.Age) - parseInt(b.Age));
    console.log("userAge" + userAge);
    localStorage.setItem('data', JSON.stringify(userAge));
    createTable(userAge);
})



const roll = document.getElementById('Roll');
roll.addEventListener('click',() => {
    localStorage.setItem('ClickElem', 'Roll');
    roll.style.backgroundColor="green";
    name.style.backgroundColor = "";
    age.style.backgroundColor = "";
    let userRoll = [];
    for (let i = 0; i < userData.length; i++) {
        userRoll.push(userData[i]);
        console.log(userData[i]); 
    }
    userRoll.sort((a, b) => parseInt(a.RollNo) - parseInt(b.RollNo));
    console.log("userroll" + userRoll);
    localStorage.setItem('data', JSON.stringify(userRoll));
    createTable(userRoll); 
})



const search = document.getElementById('search');
console.log(search);
search.addEventListener('keyup', () => {
    const searchValue = search.value.toLowerCase();
    console.log("searchValue " + searchValue );
    // const filteredData = userData.filter(user => user.Name.toLowerCase().includes(searchValue));
    const filterData = userData.filter(user => 
        user.Name.toLowerCase().includes(searchValue) || 
        String(user.Age).includes(searchValue) 
    );
    console.log("filteredData" + filterData )
    createTable(filterData);
});


function createTable(data) {
    const table = document.getElementById('userData');
     console.log("Table" + table);
    table.innerHTML = '';  

    
    for (let i = 0; i < data.length; i++) {
        let rowTable = `
        <tr>
            <td>${data[i].Name}</td>
            <td>${data[i].Age}</td>
            <td>${data[i].RollNo}</td>
        </tr>`;
        
        table.innerHTML += rowTable;  
        console.log("table"+ table.innerHTML);  
    }
}

if(localStorage.getItem('data')) {
    createTable(JSON.parse(localStorage.getItem('data')));
    document.getElementById(localStorage.getItem('ClickElem')).style.backgroundColor = 
        localStorage.getItem('ClickElem') === 'Name' ? 'pink' : 
        localStorage.getItem('ClickElem') === 'Age' ? 'red' : 'green';
} else {
    createTable(userData);
}

