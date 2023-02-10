//variables que se usan en los campos en el index osea html
const moneda_uno= document.getElementById('moneda-uno');
const moneda_dos= document.getElementById('moneda-dos');
const cantidad_uno= document.getElementById('cantidad-uno');
const cantidad_dos= document.getElementById('cantidad-dos');
const cambio= document.getElementById('cambio');
const taza= document.getElementById('taza');


//funcion que calcula los procesos

function calculte(){

    const moneda1= moneda_uno.value;
    const moneda2= moneda_dos.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda1}`)
    .then(res => res.json())
   .then(data => {
    const taza = data.rates[moneda2];
  
    cambio.innerText =  `1 ${moneda1} = ${taza} ${moneda2}`;
    cantidad_dos.value = (cantidad_uno.value * taza).toFixed(5);

});

}

//lista de eventos
moneda_uno.addEventListener('change',calculte);
cantidad_uno.addEventListener('input',calculte);
moneda_dos.addEventListener('change',calculte);
cantidad_dos.addEventListener('input',calculte);

calculte();


