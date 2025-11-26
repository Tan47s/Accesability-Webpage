function addToCart() {
    const cartStatus = document.getElementById('cart-status');
    cartStatus.textContent = "Item added to cart! Proceed to checkout.";
    cartStatus.style.display = 'block';
    cartStatus.style.backgroundColor = '#d1fae5';
    cartStatus.style.color = '#065f46';
    cartStatus.style.border = '1px solid #065f46'; 
}

function changeColor(colorName, newImg) {
        console.log("Color switched to: " + colorName);

        // update image
        document.getElementById("productImage").src = newImg;

        // update color text if exists
        const currentColor = document.getElementById("current-color");
        if (currentColor) {
            currentColor.textContent = colorName;
        }
    }

    // Attach event to circles
    const circles = document.querySelectorAll(".color-circle");

    circles.forEach(circle => {
        circle.addEventListener("click", () => {
            const newImg = circle.getAttribute("data-img");
            const colorName = circle.getAttribute("data-color"); 
            changeColor(colorName, newImg);
        });
    });

window.onload = function() {
    document.getElementById('next-product-span').addEventListener('click', function() {
        alert('Viewing next product (non-focusable)'); 
    });
}
