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

// Creating a function to allow a user to filter the data
function handleClick () {
    // Get datetime value for filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;

    // check to see if a date was entered and filter the data using the date
    if (date) {
        filteredData = filteredData.filter(row => row.dateTime === date);
    };

    // rebuilding the table using the filtered data
    // if no filter applied, the original tableData will be displayed
    buildTable(filteredData);
}

// Attach event to listen for the click of the button
d3.selectAll("#filter-btn").on("click", handleClick);

// build table when the page loads
buildTable(tableData);