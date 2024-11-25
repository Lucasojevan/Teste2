window.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio!</p>';
        } else {
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'd-flex justify-content-between align-items-center border-bottom py-2';
                itemElement.innerHTML = `
                    <span>${item.name}</span>
                    <span>R$ ${item.price.toFixed(2)}</span>
                    <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remover</button>
                `;
                cartItemsContainer.appendChild(itemElement);
                total += item.price;
            });
        }

        totalPriceElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    };

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1); // Remove o item do array
            localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o localStorage
            renderCart(); // Atualiza o carrinho na tela
        }
    });

    renderCart();
});
