document.getElementById('generateTableBtn').addEventListener('click', function() {
    // Get number of rows and columns from the user
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));

    // Validate input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Create table element
    const table = document.createElement('table');

    // Generate table headers
    const headerRow = document.createElement('tr');
    for (let i = 0; i < cols; i++) {
        const th = document.createElement('th');
        th.textContent = `Header ${i + 1}`;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Generate table rows and cells
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            const cellContent = prompt(`Enter content for Row ${i + 1}, Cell ${j + 1}:`);
            td.textContent = cellContent || ''; // Use empty string if user cancels or enters nothing
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    // Clear previous table if exists and append new table
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Clear previous content
    tableContainer.appendChild(table);
});