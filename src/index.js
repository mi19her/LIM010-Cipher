const claveCorecta= "LABORATORIA";
let intento = 0;
//funcion lee clave corecta 
ingreso.addEventListener('click',(evento)=>{
    evento.preventDefault();
const clave= document.getElementById("secreto").value;
if (clave === claveCorecta){
        document.getElementById('page1').classList.add('hide');
        document.getElementById('page2').classList.remove('hide');
        document.getElementById('page3').classList.add('hide');
} //segundo intento clave incorecta
else{
    if ( intento<2){
        document.getElementById('si').innerHTML = " ERROR INTENTA DE NUEVO";
        clave.value='';
        intento++;
    } else{
        document.getElementById('si').innerHTML = "YA NO PUEDES INGRESAR VUELVE MAS TARDE ";
    }
}
})

cifrar.addEventListener('click',()=>{
    const texto= document.getElementById('ingresaTexto').value.toUpperCase();
    const numero= parseInt(document.getElementById('escala').value);
    //conexion con el cipher
   let result = cipher.encode(numero, texto);
    document.getElementById('page3').classList.remove('hide');
    document.getElementById('page2').classList.add('hide');
    document.getElementById('resultado').value=result;
    
});
descifrar.addEventListener('click',()=>{
    const texto= document.getElementById('ingresaTexto').value.toUpperCase();
    const numero= parseInt(document.getElementById('escala').value);
    //conexion con el cipher
    let result = cipher.decode(numero,texto);
    document.getElementById('page3').classList.remove('hide');
    document.getElementById('page2').classList.add('hide');
    document.getElementById('resultado').value=result;
});

copiar.addEventListener('click',(evento)=>{
    evento.preventDefault();
    const TextoCop= document.getElementById('resultado');
    TextoCop.select();
    document.execCommand('copy'); 
}) 

volver.addEventListener('click',(evento)=>{
    document.getElementById('ingresaTexto').value ='';
    document.getElementById('resultado').value='';
    document.getElementById('escala').value='';
    evento.preventDefault();
    document.getElementById('page1').classList.add('hide');
    document.getElementById('page3').classList.add('hide');
    document.getElementById('page2').classList.remove('hide');
})
  

