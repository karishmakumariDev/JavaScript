console.log("karishma");

let playear = "x";
let arr = Array(9).fill(null);
// [null, null] , [0, x]
function CheckWinner() {
    if ((arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != null) || 
        (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != null) ||
        (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != null) ||
        (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != null) ||
        (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != null) ||
        (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != null) ||
        (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != null) ||
        (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != null)
    ) {
        
        document.write(`${playear} is the winner!`);
        return
    }
    

    let allFilled = arr.every(el => el !== null);
    if (allFilled) {
        document.write("draw");
        return;
    }
    
}


function handalClick(elem) {

   // this is giving clicked element 
   console.log("elem" + elem);
   const id = Number(elem.id);
   console.log("id" + id);
   arr[id] =  playear;
   console.log(arr[id]);
   elem.innerHTML = playear;
   console.log(elem);
   CheckWinner();
   playear = playear === "x" ? "o" : "x";
   console.log(playear)
}