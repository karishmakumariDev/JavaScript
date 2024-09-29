const body = document.querySelector("body");
console.log(body);
const toggle = document.querySelector(".toggle");
console.log(toggle);

toggle.addEventListener("click", () => {
   body.classList.toggle("dark");
});

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
});



