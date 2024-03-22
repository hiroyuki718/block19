const possibleNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];
const possibleOccupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Photographer'];
const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
];

function generateFreelancer() {
    const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
    const startingPrice = Math.floor(Math.random() * 100) + 30; // Random price between 30 and 130
    freelancers.push({ name, occupation, startingPrice });
}

function calculateAverage() {
    const sum = freelancers.reduce((acc, { startingPrice }) => acc + startingPrice, 0);
    const average = (sum / freelancers.length).toFixed(2);
    document.getElementById('averagePrice').textContent = `The average starting price is $${average}.`;
}

function renderFreelancers() {
    const table = document.getElementById('freelancersTable');
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Starting Price</th>
        </tr>
    `;
    freelancers.forEach(freelancer => {
        const row = table.insertRow();
        row.insertCell().textContent = freelancer.name;
        row.insertCell().textContent = freelancer.occupation;
        row.insertCell().textContent = `$${freelancer.startingPrice}`;
    });
}

// Initial render and calculation
renderFreelancers();
calculateAverage();

// Add a new freelancer every few seconds
setInterval(() => {
    generateFreelancer();
    renderFreelancers();
    calculateAverage();
}, 5000); // Adjust time as necessary
