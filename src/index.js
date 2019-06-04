const claveCorecta= "LABORATORIA";
let intento = 0;
//funcion lee clave corecta 
ingreso.addEventListener('click',()=>{
const clave= document.getElementById("secreto").value;
if (clave.value == claveCorecta){
        document.getElementById('si').innerHTML = "CLAVE CORECTA";
        document.getElementById('page1').classList.add('hide');
        document.getElementById('mensaje').classList.remove('hide');
} //segundo intento clave incorecta
else{
    if ( intento<2){
        document.getElementById('si').innerHTML = "INTENTA DE NUEVO MÁS TARDE";
        clave.value='';
        intento++;
    } else{
        document.getElementById('si').innerHTML = "vuelve mas tarde";
    }
}
})
