document.addEventListener("DOMContentLoaded", function () {
    var keys = ['Name', 'Class', 'Division', 'Roll_no'];

    var headersDiv = document.getElementById("headers");

    // Dynamically create input fields
    keys.forEach((key) => {
        var div = document.createElement("div");
        div.className = "mb-2";

        var label = document.createElement("label");
        label.textContent = key + ": ";
        label.className = "form-label";

        var input = document.createElement("input");
        input.type = "text";
        input.className = "form-control";
        input.id = key.toLowerCase();

        div.appendChild(label);
        div.appendChild(input);
        headersDiv.appendChild(div);
    });

    var submitButton = document.querySelector(".submit");
    var tablesDiv = document.getElementById("tables");

    var table = document.createElement("table");
    table.className = "table table-bordered mt-3";

    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    tbody.id = "table-body"; 

    var headerRow = document.createElement("tr");
    keys.forEach((key) => {
        var th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    var actionTh = document.createElement("th");
    actionTh.textContent = "Actions";
    headerRow.appendChild(actionTh);

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    tablesDiv.appendChild(table);

    var editIndex = null; 

    function loadStoredData() {
        var storedData = JSON.parse(localStorage.getItem("tableData")) || [];
        var tableBody = document.getElementById("table-body");
        tableBody.innerHTML = ""; 

        storedData.forEach((rowData, index) => addRowToTable(rowData, index));
    }

    function addRowToTable(rowData, index) {
        var newRow = document.createElement("tr");

        keys.forEach((key) => {
            var td = document.createElement("td");
            td.textContent = rowData[key.toLowerCase()] || "";
            newRow.appendChild(td);
        });

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-warning btn-sm me-2";
        editButton.onclick = function () {
            editRow(index);
        };

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.onclick = function () {
            deleteRow(index);
        };

        var actionTd = document.createElement("td");
        actionTd.appendChild(editButton);
        actionTd.appendChild(deleteButton);
        newRow.appendChild(actionTd);

        document.getElementById("table-body").appendChild(newRow);
    }

    loadStoredData(); 

    submitButton.addEventListener("click", function () {
        var rowData = {};
        keys.forEach((key) => {
            var inputField = document.getElementById(key.toLowerCase());
            rowData[key.toLowerCase()] = inputField.value.trim();
            inputField.value = ""; 
        });

        var storedData = JSON.parse(localStorage.getItem("tableData")) || [];

        if (editIndex !== null) {
            storedData[editIndex] = rowData;  
            editIndex = null; 
        } else {
            storedData.push(rowData);  
        }

        localStorage.setItem("tableData", JSON.stringify(storedData));

        submitButton.textContent = "Submit";
        submitButton.classList.remove("btn-success");
        submitButton.classList.add("btn-primary");

        loadStoredData(); 
    });

    function deleteRow(index) {
        var storedData = JSON.parse(localStorage.getItem("tableData")) || [];
        storedData.splice(index, 1);
        localStorage.setItem("tableData", JSON.stringify(storedData));

        loadStoredData();
    }

    function editRow(index) {
        var storedData = JSON.parse(localStorage.getItem("tableData")) || [];
        var rowData = storedData[index];

        keys.forEach((key) => {
            document.getElementById(key.toLowerCase()).value = rowData[key.toLowerCase()];
        });

        editIndex = index;  

        submitButton.textContent = "Update";
        submitButton.classList.remove("btn-primary");
        submitButton.classList.add("btn-success");
    }
});
