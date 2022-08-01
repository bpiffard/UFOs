// import the data
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// creating the function to fill the teable with data
function buildTable(data) {
    // Clearing existing data
    tbody.html("");

    // Looping through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        
        // loop through each field in the dataRow and add
        // each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}