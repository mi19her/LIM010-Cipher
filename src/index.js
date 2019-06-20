const NextPage = ()=>{
    document.getElementById('page2').classList.add('hide');
    document.getElementById('page3').classList.remove('hide');
}
const NextPage3 = ()=>{
    document.getElementById('page1').classList.add('hide');
    document.getElementById('page2').classList.remove('hide');
    document.getElementById('page3').classList.add('hide');
}
const cambiarFondo=()=>{
    document.body.classList.remove('login-bg');
    document.body.classList.add('mensaje-bg');  
}
const cambiarFondo2=()=>{
    document.body.classList.remove('login-bg');
    document.body.classList.add('resultado-bg');
}
const claveCorecta= "LABORATORIA";
let intento = 0;
//funcion lee clave corecta 
const ingreso=document.getElementById('ingreso');
ingreso.addEventListener('click',(evento)=>{
    evento.preventDefault();
const clave= document.getElementById("secreto").value;
if (clave === claveCorecta){
        cambiarFondo();
        NextPage3();
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
const cifrar=document.getElementById('cifrar');
cifrar.addEventListener('click',()=>{
    const texto= document.getElementById('ingresaTexto').value;
    const numero= parseInt(document.getElementById('escala').value);
    //conexion con el cipher
   let result = cipher.encode(numero, texto);
    cambiarFondo2();
    NextPage();
    document.getElementById('resultado').value=result;
});
const descifrar=document.getElementById('descifrar');
descifrar.addEventListener('click',()=>{
    const texto= document.getElementById('ingresaTexto').value;
    const numero= parseInt(document.getElementById('escala').value);
    //conexion con el cipher
    let result = cipher.decode(numero,texto);
    cambiarFondo2();
    NextPage();
    document.getElementById('resultado').value=result;
});
const copiar=document.getElementById('copiar');
copiar.addEventListener('click',(evento)=>{
    evento.preventDefault();
    const TextoCop= document.getElementById('resultado');
    TextoCop.select();
    document.execCommand('copy'); 
}) 
const volver=document.getElementById('volver');
volver.addEventListener('click',(evento)=>{
    document.getElementById('ingresaTexto','resultado').value ='';
    document.getElementById('escala').value=1;
    evento.preventDefault();
    cambiarFondo();
    NextPage3();
})