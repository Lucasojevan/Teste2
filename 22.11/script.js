// Add products to local storage for cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.getAttribute('data-name'),
            price: parseFloat(button.getAttribute('data-price')),
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product.name} foi adicionado ao carrinho!`);
    });
});

// Toggle dark mode
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
});
