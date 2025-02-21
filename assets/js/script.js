// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Select all elements with the class "sc-product-card"
    document.querySelectorAll(".sc-product-card").forEach((productCard) => {

        // Add a click event listener to each product card
        productCard.addEventListener("click", function () {

            // Redirect the user to the product details page
            window.location.href = "product-details.html";

        });
    });

});