// Ejercicio Palindromo
function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar los espacios en blanco
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
    // Comparar la cadena original con su reverso
    for (let i = 0; i < cadena.length / 2; i++) {
      if (cadena[i] !== cadena[cadena.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  //Regresa true si es un palindromo y Falso si no lo es
  const cadena1 = 'radar';
  const cadena2 = 'oso';
  const cadena3 = 'Hola mundo';
  
  console.log(esPalindromo(cadena1)); 
  console.log(esPalindromo(cadena2));
  console.log(esPalindromo(cadena3)); 

// Ejericio longitud cadena
function longitudCadenaMasCorta(listaCadenas) {
  // Inicializar la longitud mínima como la longitud de la primera cadena
  let longitudMinima = listaCadenas[0].length;

  // Recorrer la lista de cadenas y actualizar la longitud mínima si se encuentra una cadena más corta
  for (let i = 1; i < listaCadenas.length; i++) {
    if (listaCadenas[i].length < longitudMinima) {
      longitudMinima = listaCadenas[i].length;
    }
  }

  // Devolver la longitud mínima
  return longitudMinima;
}

const listaCadenas = ['Memoria', 'Mundo', 'JavaScript', 'Mexico', 'genial'];
console.log(longitudCadenaMasCorta(listaCadenas));


//Ejercicio Mediana y Moda
function medianaYModa(lista) {
  // Ordena la lista de números en orden ascendente
  lista.sort(function(a, b){return a - b});

  // Calcula la mediana
  let mediana = 0;
  let longitud = lista.length;
  if (longitud % 2 === 0) {
    mediana = (lista[longitud/2 - 1] + lista[longitud/2]) / 2;
  } else {
    mediana = lista[(longitud - 1) / 2];
  }

  // Calcula la moda
  let contador = {};
  let maximo = 0;
  let moda = [];
  for (let i = 0; i < longitud; i++) {
    let numero = lista[i];
    if (contador[numero] === undefined) {
      contador[numero] = 0;
    }
    contador[numero]++;
    if (contador[numero] > maximo) {
      maximo = contador[numero];
      moda = [numero];
    } else if (contador[numero] === maximo) {
      moda.push(numero);
    }
  }

  // Devuelve un objeto con la mediana y la moda
  return { mediana: mediana, moda: moda };
}

let lista = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9];
let resultado = medianaYModa(lista);
console.log(resultado.mediana); 
console.log(resultado.moda); 

