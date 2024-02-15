function fetchData() {
    const dataElement = document.getElementById('dataContainer');
    const dataType = dataElement.getAttribute('data-type');

    fetch(`/api/${dataType}`)
        .then(response => response.json())
        .then(data => {
            displayDataGeneric(data, dataElement);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayDataGeneric(data, container) {
    // Clear existing content
    container.innerHTML = '';

    // Assuming data is an array of objects
    data.forEach(item => {
        // Create a container for this item
        const itemContainer = document.createElement('div');

        // Loop through each property in the item object
        for (const [key, value] of Object.entries(item)) {
            // Create an element for the property
            const propertyElement = document.createElement('p');
            propertyElement.textContent = `${key}: ${value}`;
            itemContainer.appendChild(propertyElement);
        }

        // Append the item container to the main container
        container.appendChild(itemContainer);
    });
}

window.onload = fetchData;