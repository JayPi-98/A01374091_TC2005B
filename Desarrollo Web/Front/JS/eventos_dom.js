// Ejercicio 1
// CodigoChatGPT
document.addEventListener("mousemove", function(event) {// Agregar un evento de tipo mousemove al documento
   let x = event.clientX;// Obtener la posición X del mouse
    let y = event.clientY;// Obtener la posición Y del mouse
    document.getElementById("mousePositionDiv").innerHTML = "X: " + x + " Y: " + y;// Mostrar la posición del mouse en el div
  });
// CodigoCoPiloto
//Mostrar la posición del mouse en el documento con el id mousePositionPilot:
document.addEventListener("mousemove", function(event) {// Agregar un evento de tipo mousemove al documento
    let x = event.clientX;// Obtener la posición X del mouse
    let y = event.clientY;// Obtener la posición Y del mouse
    document.getElementById("mousePositionPilot").innerHTML = "X: " + x + " Y: " + y;// Mostrar la posición del mouse en el div
  });
// Ejercicio 2
document.getElementById("formChatGPT-submit").addEventListener("click", function(event) {
     event.preventDefault();  //Prevenir el envío del formulario
     let firstName = document.getElementById("formChat-fname").value;
     let lastName = document.getElementById("formChat-lname").value;
     let fullName = firstName + " " + lastName;
     let fullNameElement = document.createElement("p");
     fullNameElement.innerHTML = "Nombre completo: " + fullName;
     document.getElementById("formChatGPT").appendChild(fullNameElement);
   });
// CodigoCoPiloto
document.getElementById("formChatPilot-submit").addEventListener("click", function(event) {
      event.preventDefault();  //Prevenir el envío del formulario
      let firstName = document.getElementById("formPilot-fname").value;
      let lastName = document.getElementById("formPilot-lname").value;
      let fullName = firstName + " " + lastName;
      let fullNameElement = document.createElement("p");
      fullNameElement.innerHTML = "Nombre completo: " + fullName;
      document.getElementById("formChatPilot").appendChild(fullNameElement);
    });
// Ejercicio 3
// CodigoChatGPT
  let addTable = document.getElementById("sampleTable");

  document.getElementById("btn-insert-r").addEventListener("click", function() {
    let newRow = addTable.insertRow();
    let newCell1 = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    newCell1.innerHTML = "New row column 1";
    newCell2.innerHTML = "New row column 2";
  });
  
  document.getElementById("btn-insert-c").addEventListener("click", function() {
    let rows = addTable.rows;
    for (let i = 0; i < rows.length; i++) {
      let newCell = rows[i].insertCell();
      newCell.innerHTML = "New column";
    }
  });
// CodigoCoPiloto
let addTable2 = document.getElementById("sampleTable2");// Obtener la tabla con el id sampleTable2


// Ejercicio 4
let inTable = document.getElementById("myTable");

document.getElementById("btn-change").addEventListener("click", function() {
  let rowIndex = parseInt(document.getElementById("rowIndex").value);
  let colIndex = parseInt(document.getElementById("colIndex").value);
  let newValue = document.getElementById("newValue").value;
  
  if (rowIndex < inTable.rows.length && colIndex < inTable.rows[rowIndex].cells.length) {
    inTable.rows[rowIndex].cells[colIndex].innerHTML = newValue;
  } else {
    alert("Invalid row or column index!");
  }
});

// Ejercicio 5
const colorSelect = document.getElementById("colorSelect");

// Función para agregar un color a la lista de opciones
// El color se genera aleatoriamente
document.getElementById("btn-add-color").addEventListener("click", function() {// Agregar un color a la lista de opciones
  let newColor = document.createElement("option");// Crea un elemento de tipo option
  newColor.text = getRandomColor(); // Genera un color aleatorio
  colorSelect.add(newColor);
});

// Función para quitar el color seleccionado de la lista de opciones
document.getElementById("btn-rmv-color").addEventListener("click", function() {
  let selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex >= 0) {
    colorSelect.remove(selectedIndex);
  }
});
// helper function
// Función para generar un color aleatorio
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Ejercicio 6

let imagen = document.getElementById("imagenGato");

    imagen.addEventListener("mouseenter", function() {
        let newWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        let newHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        imagen.src = "http://placekitten.com/" + newWidth + "/" + newHeight;
    });
    
// CodigoCoPiloto
let imagen2 = document.getElementById("imagenGato2");// Obtener la imagen con el id imagenGato2
