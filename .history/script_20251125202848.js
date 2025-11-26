function addToCart() {
    const cartStatus = document.getElementById('cart-status');
    cartStatus.textContent = "Item added to cart! Proceed to checkout.";
    cartStatus.style.display = 'block';
    cartStatus.style.backgroundColor = '#d1fae5';
    cartStatus.style.color = '#065f46';
    cartStatus.style.border = '1px solid #065f46'; 
}

function changeColor(colorName) {
    console.log("Color switched to: " + colorName);
    document.getElementById('product-image').src = `https://placehold.co/400x400/1e3a8a/f0f0f0?text=Product+${colorName.toUpperCase()}`;
    document.getElementById('current-color').textContent = colorName;
}

window.onload = function() {
    document.getElementById('next-product-span').addEventListener('click', function() {
        alert('Viewing next product (non-focusable)'); 
    });
}
