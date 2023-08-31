const products = document.querySelectorAll('.item-quantity');

products.forEach(product => {
    const quantityField = product.querySelector('.quantity-field');
    const incButton = product.querySelector('.inc-quantity');
    const decButton = product.querySelector('.dec-quantity');
    const itemPrice = product.querySelector(".price-riyal");

    incButton.addEventListener('click', () => {
        const quantity = parseInt(quantityField.value) + 1;
        quantityField.value = quantity;
    });

    decButton.addEventListener('click', () => {
        if (parseInt(quantityField.value) > 1) {
            const quantity = parseInt(quantityField.value) - 1;
            quantityField.value = quantity;
        }
    });


});
