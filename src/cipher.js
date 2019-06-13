window.cipher = {
  encode: (numero, texto) => {
    let textoCodificado ="";
    /*repeticion para correr por cada letra ingresada*/
    for (let i = 0; i<texto.length; i++) {
      /*posicion de letra que se ingresa*/
      let l = texto.charCodeAt(i);
      /*posicion de la letra en el alfabeto*/
      let letra = texto.charAt(i);
      /*si hay espacios en el texto*/
      if(letra != " "){
        /*formula para devolver el valor codificado */
        textoCodificado += String.fromCharCode((l - 65 + numero)% 26 + 65);
      }else{
        textoCodificado +=" ";
       }
      }
    return textoCodificado;
  },
  decode: (numero, texto) => {
    /* Acá va tu código que descifra*/
    let textoCodificado="";
    let i;
    for( i=0; i<texto.length; i++){
      let l= texto.charCodeAt(i);
      let letra= texto.charAt(i);
      if(letra != " "){
        textoCodificado += String.fromCharCode((l+65-numero)%26 + 65);
      }else{
        textoCodificado +=" ";
      }
    }
      return textoCodificado;
  }
};