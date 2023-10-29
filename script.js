const possibleNames = ['Alice', 'Bob', 'Carol', 'David', 'Emma'];
const possibleOccupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Engineer'];

let freelancers = [
    {name: 'Alice', occupation: 'Writer', startingPrice: 30},
    {name: 'Bob', occupation: 'Teacher', startingPrice: 50}
];

function renderFreelancers() {
    const table = document.getElementById("freelancersTable");
    // Clear previous data
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Starting Price</th>
        </tr>
    `;
    for(let freelancer of freelancers) {
        table.innerHTML += `
            <tr>
                <td>${freelancer.name}</td>
                <td>${freelancer.occupation}</td>
                <td>$${freelancer.startingPrice}</td>
            </tr>
        `;
    }
}

function calculateAverage() {
    let total = 0;
    for(let freelancer of freelancers) {
        total += freelancer.startingPrice;
    }
    const average = total / freelancers.length;
    document.getElementById("averagePrice").innerText = `The average starting price is $${average}`;
}

function generateFreelancer() {
    const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
    const startingPrice = Math.floor(Math.random() * 100) + 30; // Random price between 30 and 130
    freelancers.push({name, occupation, startingPrice});
}

// Initial render and calculation
renderFreelancers();
calculateAverage();

// Add a new freelancer every few seconds
setInterval(() => {
    generateFreelancer();
    renderFreelancers();
    calculateAverage();
}, 5000);
