const tempEle = document.getElementById('tamp');
console.log(tempEle);
const franEle = document.getElementById('feren');
console.log(franEle);
const kelEle  = document.getElementById('kelvin');
console.log(kelEle);

tempEle.addEventListener('input',() => {
    const tempVlau = parseInt(tempEle.value);
    console.log(tempVlau);
    let farenhight = (9/5 * tempVlau) + 32;
    console.log("farenhight" + farenhight);
    franEle.innerHTML = farenhight;

    let kelvin = tempVlau + 273.15;
    console.log(kelvin);
    kelEle.innerHTML = kelvin;
})