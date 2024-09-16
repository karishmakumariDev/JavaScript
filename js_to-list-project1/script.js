
const input = document.getElementById("input-text");
// console.log(input);
const listContainer = document.getElementById("list-container");
// console.log(listContainer);
const btnElem = document.getElementById("btn");
// console.log(btnElem);
 btnElem.addEventListener("click", () => { 
  if(input.value === '' ){
   alert("you must write somthing");
  }else{
    let li = document.createElement("li");
    // console.log(li);
    li.innerHTML = input.value;
    // console.log(li.innerHTML);
    let span = document.createElement("span");
    // console.log(span);
    span.innerHTML = "\u00d7";
    // console.log(span.innerHTML);
    li.appendChild(span);
    listContainer.appendChild(li);
    input.value = "";

    span.addEventListener("click",function() {
        li.remove();
    })

    li.addEventListener("click",function(){
        console.log(true);
        li.classList.toggle('checked');
    })
  }

});






