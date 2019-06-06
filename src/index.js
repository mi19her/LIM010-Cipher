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
    if ( intento<=2){
        document.getElementById('si').innerHTML = "INTENTA DE NUEVO";
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
    let textoCodificado=" ";
    let i;
    for( i=0; i<texto.length; i++){
      let l= texto.charCodeAt(i);
      let letra =texto.charAt(i);
      textoCodificado += String.fromCharCode((l-65+numero)%26 + 65);
      if(letra == " "){
        textoCodificado +=" ";      
      }
      }  
    document.getElementById('page3').classList.remove('hide');
    document.getElementById('page2').classList.add('hide');
    document.getElementById('resultado').innerHTML=textoCodificado;
    
    
});
descifrar.addEventListener('click',()=>{
    const texto= document.getElementById('ingresaTexto').value.toUpperCase();
    const numero= parseInt(document.getElementById('escala').value);
    let textoCodificado=" ";
    let i;
    for( i=0; i<texto.length; i++){
      let l= texto.charCodeAt(i);
      let letra= texto.charAt(i);
      textoCodificado += String.fromCharCode((l-65-numero)%26 + 65);
      if(letra == " "){
        textoCodificado +=" ";
      }
      }
    document.getElementById('page3').classList.remove('hide');
    document.getElementById('page2').classList.add('hide');
    document.getElementById('resultado').innerHTML=textoCodificado;
});

copiar.addEventListener('click',()=>{
    document.fin.resultado.select();
    window.clipboardData.setData("text", document.fin.resultado.value);
}) 

  

