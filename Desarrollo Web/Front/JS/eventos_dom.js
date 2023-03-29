// Ejercicio 1
document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mousePositionDiv").innerHTML = "X: " + x + " Y: " + y;
  });
// Ejercicio 2
document.getElementById("form1-submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    let firstName = document.getElementById("form-fname").value;
    let lastName = document.getElementById("form-lname").value;
    let fullName = firstName + " " + lastName;
    let fullNameElement = document.createElement("p");
    fullNameElement.innerHTML = "Nombre completo: " + fullName;
    document.getElementById("form1").appendChild(fullNameElement);
  });

// Ejercicio 3
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
document.getElementById("btn-add-color").addEventListener("click", function() {
  let newColor = document.createElement("option");
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