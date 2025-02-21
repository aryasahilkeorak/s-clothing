document.addEventListener("DOMContentLoaded", function () {
    const imageWrappers = document.querySelectorAll(".image-wrapper");
    const largeViewImage = document.querySelector("#largeView img");

    if (largeViewImage) {
        imageWrappers.forEach(wrapper => {
            wrapper.addEventListener("click", function () {
                const img = this.querySelector("img");
                if (img) {
                    // Update large view image
                    largeViewImage.src = img.src;
                    largeViewImage.alt = img.alt;

                    // Remove 'selected-image' from all image wrappers
                    imageWrappers.forEach(w => w.classList.remove("selected-image"));

                    // Add 'selected-image' class to the clicked image wrapper
                    this.classList.add("selected-image");
                }
            });
        });
    }

    

    // script to update the cart quantity
    const addButtons = document.querySelectorAll(".addItem");
    const removeButtons = document.querySelectorAll(".removeItem");

    addButtons.forEach(button => {
        button.addEventListener("click", function () {
            const quantityInput = this.closest(".sc-product-item").querySelector(".product-quantity"); // Find the closest quantity input
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const quantityInput = this.closest(".sc-product-item").querySelector(".product-quantity"); // Find the closest quantity input
            if (parseInt(quantityInput.value) > 0) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
    });



    // script to select the size
    const sizeButtons = document.querySelectorAll(".size-btn");

    sizeButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'selected-size' from all buttons
            sizeButtons.forEach(btn => btn.classList.remove("selected-size"));

            // Add 'selected-size' to the clicked button
            this.classList.add("selected-size");
        });
    });

    // script for update colors box's color
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach(box => {
        box.addEventListener("click", function () {
            // Remove 'selected-color' from all color boxes
            colorBoxes.forEach(color => color.classList.remove("selected-color"));

            // Add 'selected-color' to the clicked color box
            this.classList.add("selected-color");
        });
    });

    // script to update the cloths colors
    const productImages = document.querySelectorAll(".product-images-wrapper img");

    colorBoxes.forEach(box => {
        box.addEventListener("click", function () {
            // Remove 'selected-color' from all color boxes
            colorBoxes.forEach(color => color.classList.remove("selected-color"));

            // Add 'selected-color' to the clicked color box
            this.classList.add("selected-color");

            // Get the selected color ID
            const selectedColorId = this.id; // Example: "color314F4A"

            // Extract color code from ID (removing "color" prefix)
            const colorCode = selectedColorId.replace("color", "");

            // Update all product images
            productImages.forEach(img => {
                img.src = `img-${colorCode}.png`;
            });
        });
    });



    // for report abuse popup
    document.addEventListener("DOMContentLoaded", function () {
        const reportBtns = document.querySelectorAll('.reportBtn'); // Select all report buttons
        const popups = document.querySelectorAll('.reportAbusePopup'); // Select all popups

        reportBtns.forEach((btn, index) => {
            const popup = popups[index]; // Get corresponding popup

            if (!popup) return; // Skip if no matching popup

            // Show popup when hovering over the report button
            btn.addEventListener('mouseenter', () => {
                popup.classList.add('show');
            });

            // Keep popup visible when hovered over the popup itself
            popup.addEventListener('mouseenter', () => {
                popup.classList.add('show');
            });

            // Hide popup when the mouse leaves both the button and the popup
            btn.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!popup.matches(':hover')) {
                        popup.classList.remove('show');
                    }
                }, 300);
            });

            popup.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!btn.matches(':hover')) {
                        popup.classList.remove('show');
                    }
                }, 300);
            });

            // Close popup when clicking outside
            document.addEventListener('click', (event) => {
                if (!popup.contains(event.target) && !btn.contains(event.target)) {
                    popup.classList.remove('show');
                }
            });

            // Handle click inside popup
            const reportActionBtn = popup.querySelector('.reportActionBtn'); // Find button inside popup
            if (reportActionBtn) {
                reportActionBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent closing when clicking inside popup
                    alert('Report submitted!');
                    popup.classList.remove('show'); // Hide popup after action (optional)
                });
            }
        });
    });
});
