let users = [
    { name: "Manish", age: 25, email: "john@example.com", password: "john123" },
    { name: "Bikash", age: 30, email: "jane@example.com", password: "jane456" },
    { name: "Karishma", age: 35, email: "bob@example.com", password: "bob789" }
];

function addUser() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    users.push({
        name: nameInput,
    });
    document.getElementById('name').value = '';
}
