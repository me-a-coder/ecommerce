// script.js

document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.product');
    const productDetails = document.getElementById('product-details');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');
    const closeDetails = document.getElementById('close-details');
    
    products.forEach(product => {
        product.addEventListener('click', () => {
            const description = product.getAttribute('data-description');
            const price = product.getAttribute('data-price');
            
            productDescription.textContent = description;
            productPrice.textContent = price;
            productDetails.classList.remove('hidden');
        });
    });
    
    closeDetails.addEventListener('click', () => {
        productDetails.classList.add('hidden');
    });
});
