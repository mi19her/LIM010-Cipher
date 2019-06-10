window.cipher = {
  encode: (numero, texto) => {
    /* Acá va tu código que cifra*/
    let textoCodificado = " ";
    
    for (let i = 0; i < texto.length; i++) {
      let l = texto.charCodeAt(i);
      let letra = texto.charAt(i);
      textoCodificado += String.fromCharCode((l - 65 + numero) % 26 + 65);
      if (letra == " ") {
        textoCodificado += " ";
      }
    }
    return textoCodificado;
  },
  decode: (numero, texto) => {
    /* Acá va tu código que descifra*/
    let textoCodificado=" ";
    let i;
    for( i=0; i<texto.length; i++){
      let l= texto.charCodeAt(i);
      let letra= texto.charAt(i);
      textoCodificado += String.fromCharCode((l+65-numero)%26 + 65);
      if(letra == "  "){
        textoCodificado +="   ";
      }
      }
      return textoCodificado;
  }
};
