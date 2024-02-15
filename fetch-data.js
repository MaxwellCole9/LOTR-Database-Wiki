function fetchData(endpoint, elementId) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById(elementId);
            list.innerHTML = ''; // Clear existing content
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name + ': ' + item.characterDescription; // Customize based on data structure
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}