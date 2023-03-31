// Decidí solo incluir los resultados que me dio ChatGPT
// ya que Copilot me daba la misma respuesta que ChatGPT
// por lo que no veo la necesidad de incluirlos.
// Además de que en algunas ocasiones Copilot al ver el código
// de chatGPT no trabajaba correctamente y no generaba nigun resultado.

// Ejercicio 1
// CodigoChatGPT
document.addEventListener("mousemove", function(event) {// Agregar un evento de tipo mousemove al documento
    let x = event.clientX;// Obtener la posición X del mouse
    let y = event.clientY;// Obtener la posición Y del mouse
    document.getElementById("mousePositionDiv").innerHTML = "X: " + x + " Y: " + y;// Mostrar la posición del mouse en el div
  });
// Ejercicio 2
document.getElementById("formChatGPT-submit").addEventListener("click", function(event) {
     event.preventDefault();  //Prevenir el envío del formulario
     let firstName = document.getElementById("formChat-fname").value;// Obtener el valor del input con id formChat-fname
     let lastName = document.getElementById("formChat-lname").value;// Obtener el valor del input con id formChat-lname
     let fullName = firstName + " " + lastName;
     let fullNameElement = document.createElement("p");
     fullNameElement.innerHTML = "Nombre completo: " + fullName;
     document.getElementById("formChatGPT").appendChild(fullNameElement);
   });
// Ejercicio 3
  let addTable = document.getElementById("sampleTable");// Obtener la tabla con id sampleTable

  document.getElementById("btn-insert-r").addEventListener("click", function() {// Agregar un evento de tipo click al botón con id btn-insert-r
    let newRow = addTable.insertRow();// Insertar una nueva fila en la tabla
    let newCell1 = newRow.insertCell();// Insertar una nueva celda en la fila
    let newCell2 = newRow.insertCell();// Insertar una nueva celda en la fila
    newCell1.innerHTML = "New row column 1";// Agregar texto a la celda
    newCell2.innerHTML = "New row column 2";// Agregar texto a la celda
  });
  
  document.getElementById("btn-insert-c").addEventListener("click", function() {// Agregar un evento de tipo click al botón con id btn-insert-c
    let rows = addTable.rows;// Obtener todas las filas de la tabla
    for (let i = 0; i < rows.length; i++) {// Recorrer todas las filas de la tabla
      let newCell = rows[i].insertCell();// Insertar una nueva celda en la fila
      newCell.innerHTML = "New column";// Agregar texto a la celda
    }
  });



// Ejercicio 4
let inTable = document.getElementById("myTable");// Obtener la tabla con id myTable

document.getElementById("btn-change").addEventListener("click", function() {// Agregar un evento de tipo click al botón con id btn-change
  let rowIndex = parseInt(document.getElementById("rowIndex").value);// Obtener el valor del input con id rowIndex
  let colIndex = parseInt(document.getElementById("colIndex").value);// Obtener el valor del input con id colIndex
  let newValue = document.getElementById("newValue").value;// Obtener el valor del input con id newValue
  
  if (rowIndex < inTable.rows.length && colIndex < inTable.rows[rowIndex].cells.length) {// Si el índice de la fila y columna son válidos
    inTable.rows[rowIndex].cells[colIndex].innerHTML = newValue;// Cambiar el valor de la celda
  } else {// Si el índice de la fila y columna no son válidos
    alert("Invalid row or column index!");// Mostrar un mensaje de error
  }
});

// Ejercicio 5
const colorSelect = document.getElementById("colorSelect");// Obtener la lista de opciones con id colorSelect

// Función para agregar un color a la lista de opciones
// El color se genera aleatoriamente
document.getElementById("btn-add-color").addEventListener("click", function() {// Agregar un color a la lista de opciones
  let newColor = document.createElement("option");// Crea un elemento de tipo option
  newColor.text = getRandomColor(); // Genera un color aleatorio
  colorSelect.add(newColor);// Agrega el color a la lista de opciones
});

// Función para quitar el color seleccionado de la lista de opciones
document.getElementById("btn-rmv-color").addEventListener("click", function() {
  let selectedIndex = colorSelect.selectedIndex;// Obtener el índice del color seleccionado
  if (selectedIndex >= 0) {// Si hay un color seleccionado
    colorSelect.remove(selectedIndex);// Quitar el color seleccionado de la lista de opciones
  }
});
// helper function
// Función para generar un color aleatorio
function getRandomColor() {// Genera un color aleatorio
  let letters = "0123456789ABCDEF";// Letras que se pueden usar para generar un color
  let color = "#";// El color debe empezar con #
  for (let i = 0; i < 6; i++) {// Se deben generar 6 caracteres
    color += letters[Math.floor(Math.random() * 16)];// Se elige un caracter aleatorio de la lista de letras
  }
  return color;
}

// Ejercicio 6
let imagen = document.getElementById("imagenGato");// Obtener la imagen

    imagen.addEventListener("mouseenter", function() {// Agregar un evento de tipo mouseenter a la imagen
        let newWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;// Generar un número aleatorio entre 300 y 600
        let newHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;// Generar un número aleatorio entre 300 y 600
        imagen.src = "http://placekitten.com/" + newWidth + "/" + newHeight;// Cambiar el tamaño de la imagen
    });
    

