function codificar() {
    const texto = document.getElementById("texto"); // obtenemos el texto del usuario
    const textoCodificado = codificarTexto(texto.value); // Invocacmos a la funcion codificarTexto y le pasamos el texto del usuario
    //texto.value = textoCodificado; // Mostramos el texto en la caja de texto
    document.getElementById("resultado").textContent = textoCodificado;
  }

  function decodificar() {
    const texto = document.getElementById("texto"); // obtenemos el texto del usuario
    const textoDecodificado = decodificarTexto(texto.value); // Invocacmos a la funcion decodificarTexto y le pasamos el texto del usuario
    //texto.value = textoDecodificado; // Mostramos el texto en la caja de texto
    document.getElementById("resultado").textContent = textoDecodificado;
  }

  function codificarTexto(texto) {
    texto = texto.toLowerCase(); // convertimos la cadena de texto a minúsculas
    const vocales = ["a", "e", "i", "o", "u"];// creamos un array con todas las vocales
    let resultado = "";// recorremos la cadena de texto letra por letra
    for (let i = 0; i < texto.length; i++){
        const letra = texto.charAt(i);
        // si la letra es una vocal, le agregamos dos "i" al resultado
        if (vocales.includes(letra)) {
            resultado += letra + "ii";
        } else {
            resultado += letra;
        }
    }
        return resultado;
  }

  function decodificarTexto(texto) {
    const vocales = ["a", "e", "i", "o", "u"];// creamos un array con todas las vocales
    let resultado = "";
    // recorremos la cadena de texto letra por letra
    for (let i = 0; i < texto.length; i++) {
        const letra = texto.charAt(i);
        // si la letra es una vocal y las dos letras siguientes son "ii", la agregamos al resultado y avanzamos dos posiciones
        if (vocales.includes(letra) && texto.charAt(i + 1) === "i" && texto.charAt(i + 2) === "i") {
            resultado += letra;
            i += 2;
        } else {
            resultado += letra;
        }
    }

    return resultado;
  }