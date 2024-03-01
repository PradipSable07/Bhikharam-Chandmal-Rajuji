// Sample data for products
// for  sweets
const sweetProducts = [
	{
		name: "Product 1",
		photo: "../img/Rajuji Products/10.png",
		description: "Description of Product 1",
	},
	{
		name: "Product 1",
		photo: "../img/Rajuji Products/10.png",
		description: "Description of Product 1",
	},
	{
		name: "Product 2",
		photo: "../img/Rajuji Products/11.png",
		description: "Description of Product 2",
	},
	{
		name: "Product 3",
		photo: "../img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "Product 4",
		photo: "../img/Rajuji Products/13.png",
		description: "Description of Product 4",
	},
];

// Function to dynamically create product cards
function createProductCard(product) {
	return `
    <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="rounded sweets-card">
        <div class="">
            <img src="${product.photo}"
                class="img-fluid w-100 rounded-top" alt="" />
        </div>

        <div
            class="p-4 border text-dark .text-montserrat text-start border-top-0">
            <h4>${product.name}</h4>
            <p class=" text-cocon m-0">
                ${product.description}
            </p>
        </div>
    </div>
</div>
        `;
}

// Function to render product cards
function renderProducts(products, productRowId) {
	const ProductsRow = document.getElementById(productRowId);
	ProductsRow.innerHTML = ""; // Clear previous content

	// Render product cards
	products.forEach((product) => {
		const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
		ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
	});
}

// Render initial set of product cards
renderProducts(sweetProducts, "sweetsProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(sweetProducts, "sweetsProductsRow");
});
