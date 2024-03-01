// Sample data for clients
const clients = [
	{ name: "Ambuja Cement", photo: "../img/clients/Ambuja_cement.png" },
	{ name: "Asian Paints", photo: "../img/clients/Asian-Paints.png" },
	{ name: "Blue Star", photo: "../img/clients/BlueStar.png" },
	{ name: "Britania", photo: "../img/clients/britania.png" },
	{ name: "GRSE", photo: "../img/clients/GRSE.png" },
	{ name: "IRCTC", photo: "../img/clients/IRCTC.png" },
	{ name: "JSW", photo: "../img/clients/jsw.png" },
	{ name: "LG", photo: "../img/clients/LG.png" },
	{ name: "Shyam Steel", photo: "../img/clients/Shyam_steel.png" },
	{ name: "Star Cement", photo: "../img/clients/Star-Cement.png" },
	// Add more clients as needed
];

// Function to dynamically create client cards
function createClientCard(client) {
	return `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center align-items-center">
                <div class="client-card">
                    <img src="${client.photo}" class="card-img-top" alt="${client.name}">
                    <div class="client-card-body">
                        <h5 class="card-title text-montserrat">${client.name}</h5>
                    </div>
                </div>
            </div>
        `;
}

// Function to render client cards
function renderClients(clients) {
	const clientsRow = document.getElementById("clientsRow");
	clientsRow.innerHTML = ""; // Clear previous content

	clients.forEach((client) => {
		const cardHTML = createClientCard(client);
		clientsRow.insertAdjacentHTML("beforeend", cardHTML);
	});
}

// Render initial set of client cards
renderClients(clients);

// You may also want to re-render the client cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderClients(clients);
});
