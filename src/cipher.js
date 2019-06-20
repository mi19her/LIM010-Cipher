window.cipher = {
  encode: (numero, texto) => {
    let textoCodificado ="";
    /*repeticion para correr por cada letra ingresada*/
    for (let i = 0; i<texto.length; i++) {
      /*posicion de letra que se ingresa*/
      let l = texto.charCodeAt(i);
      /*si hay espacios en el texto*/
      if(l>=65 && l<=90){
        /*formula para devolver el valor cifrado en mayusculas*/
        textoCodificado += String.fromCharCode((l - 65 + numero)% 26 + 65);
      }else if(l>=48 && l<=57){
        /*formula para devolver el valor cifrado en numeros */
          textoCodificado += String.fromCharCode((l - 48 + numero)% 10 + 48); 
       }else if(l>=97 && l<=122){
        /*formula para devolver el valor cifrado en minusculas */
         textoCodificado += String.fromCharCode((l - 97 + numero)% 26 + 97);
       }else if(l==32){
        /*formula para devolver el cifrado de espacios */
        textoCodificado +=" ";
      }
     }
    return textoCodificado;
  },
  decode: (numero, texto) => {
    /* Acá va tu código que descifra*/
    let textoCodificado="";
    for(let i=0; i<texto.length; i++){
      let l= texto.charCodeAt(i);
      if(l>=65 && l<=90){
        /*formula para devolver el valor descifrado en mayusculas*/
        textoCodificado += String.fromCharCode((l + 65 - numero)% 26 + 65);
        }else if(l>=97 && l<=122){
        /*formula para devolver el valor descifrado en minusculas s*/
        textoCodificado += String.fromCharCode((l - 45 - numero)% 26 + 97);
        }else if(l>=48 && l<=57){
        /*formula para devolver el valor descifrado en numeros */
        textoCodificado += String.fromCharCode((l - 18 - numero)% 10 + 48); 
        }else if(l==32){
        /*formula para devolver el descifrado de espacios */
        textoCodificado +=" ";
    }
  }
      return textoCodificado;
 }
};