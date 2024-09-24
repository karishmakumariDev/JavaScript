const tempEle = document.getElementById('tamp');
console.log(tempEle);
const franEle = document.getElementById('feren');
 console.log(franEle);
 const kelEle  = document.getElementById('kelvin');
 console.log(kelEle);


tempEle.addEventListener('input', () => {
    const tempValue = parseFloat(tempEle.value);
    console.log(tempValue);
    
    if (!isNaN(tempValue)) {
        let fahrenheit = (9/5 * tempValue) + 32;
        console.log("fahrenheit" + fahrenheit);
        let kelvin = tempValue + 273.15;
        console.log("kelvin" + kelvin);
         franEle.value = fahrenheit;
         console.log("franEle.value:" + franEle.value);
         kelEle.value = kelvin;
         console.log("kelEle.value:"+kelEle.value);      
    }
});

franEle.addEventListener('input',() => {
  const franValue = parseInt(franEle.value);
  console.log("franValue" + franValue);
  
  let calsius = (franValue - 32) * 5 / 9;
  console.log(calsius);
  let kalvin = (franValue - 32) * 5 / 9 + 273.15;
  console.log(kalvin);

  tempEle.value = calsius;
  kelEle.value = kalvin;
});

kelEle.addEventListener('input',()=> {
 const kelvalue = parseInt(kelEle.value);
 console.log(kelvalue);

 let calsius = kelvalue - 273.15;
 console.log("calsius"+calsius);

 let ferenheight = (kelvalue - 273.15) * 9/5 + 32;
 console.log("ferenheght"+ferenheight);
 
 tempEle.value = calsius;
 franEle.value = ferenheight; 

});