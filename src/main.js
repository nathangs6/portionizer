export function addRecipeRow() {
    var table = document.getElementById("recipe-table").getElementsByTagName('tbody')[0];
    var newRowNum = table.getElementsByTagName("tr").length + 1;
    var newRow = table.insertRow();

    // Make text cell
    var newCell = newRow.insertCell(0);
    var textInput = document.createElement("input");
    textInput.type = "text";
    textInput.name = "recipe-text-" + newRowNum;
    textInput.id = "recipe-text-" + newRowNum;
    textInput.style.width = "100%";
    textInput.addEventListener("input", updateDistributionTable);
    newCell.appendChild(textInput);

    // Make integer cell
    newCell = newRow.insertCell(1);
    var intInput = document.createElement("input");
    intInput.type = "number";
    intInput.name = "recipe-integer-" + newRowNum;
    intInput.id = "recipe-integer-" + newRowNum;
    intInput.style.width = "100%";
    intInput.addEventListener("input", updateDistributionTable);
    newCell.appendChild(intInput);
}
window.addRecipeRow = addRecipeRow;

export function addPortionRow() {
    var table = document.getElementById("portion-table").getElementsByTagName('tbody')[0];
    var newRowNum = table.getElementsByTagName("tr").length + 1;
    var newRow = table.insertRow();

    // Make text cell
    var newCell = newRow.insertCell(0);
    var textInput = document.createElement("input");
    textInput.type = "text";
    textInput.name = "portion-text-" + newRowNum;
    textInput.id = "portion-text-" + newRowNum;
    textInput.style.width = "100%";
    textInput.addEventListener("input", updateDistributionTable);
    newCell.appendChild(textInput);

    // Make integer cell
    newCell = newRow.insertCell(1);
    var intInput = document.createElement("input");
    intInput.type = "number";
    intInput.name = "portion-integer-" + newRowNum;
    intInput.id = "portion-integer-" + newRowNum;
    intInput.style.width = "100%";
    intInput.addEventListener("input", updateDistributionTable);
    newCell.appendChild(intInput);
}
window.addPortionRow = addPortionRow;

function updateDistributionTable() {
    var recipeTable = document.getElementById("recipe-table").getElementsByTagName('tbody')[0];
    var portionTable = document.getElementById("portion-table").getElementsByTagName('tbody')[0];
    var distributionTable = document.getElementById("distribution-table").getElementsByTagName('tbody')[0];
    var distributionHeader = document.getElementById("distribution-table").getElementsByTagName('thead')[0].rows[0];

    // Clear existing distribution table
    distributionTable.innerHTML = "";

    // Update header
    while (distributionHeader.cells.length > 1) {
        distributionHeader.deleteCell(-1);
    }
    for (var i = 0; i < portionTable.rows.length; i++) {
        var portionName = portionTable.rows[i].cells[0].getElementsByTagName("input")[0].value;
        var newHeaderCell = document.createElement("th");
        newHeaderCell.className = "col" + (i + 2);
        newHeaderCell.innerText = portionName;
        distributionHeader.appendChild(newHeaderCell);
    }

    // Calculate total portion weight
    var totalPortionWeight = 0;
    for (var i = 0; i < portionTable.rows.length; i++) {
        var portionWeight = parseFloat(portionTable.rows[i].cells[1].getElementsByTagName("input")[0].value) || 0;
        totalPortionWeight += portionWeight;
    }

    // Update body
    for (var i = 0; i < recipeTable.rows.length; i++) {
        var newRow = distributionTable.insertRow();
        var ingredientName = recipeTable.rows[i].cells[0].getElementsByTagName("input")[0].value;
        var ingredientWeight = parseFloat(recipeTable.rows[i].cells[1].getElementsByTagName("input")[0].value) || 0;

        var newCell = newRow.insertCell(0);
        newCell.className = "col1";
        newCell.innerText = ingredientName;

        for (var j = 0; j < portionTable.rows.length; j++) {
            newCell = newRow.insertCell(j + 1);
            newCell.className = "col" + (j + 2);
            var portionWeight = parseFloat(portionTable.rows[j].cells[1].getElementsByTagName("input")[0].value) || 0;
            var portionIngredientWeight = (totalPortionWeight > 0) ? (portionWeight / totalPortionWeight) * ingredientWeight : 0;
            newCell.innerText = portionIngredientWeight.toFixed(2);
        }
    }
}
window.updateDistributionTable = updateDistributionTable;