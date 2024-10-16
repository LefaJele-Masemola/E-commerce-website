document.addEventListener('DOMContentLoaded', function() {
    const orderSummary = document.getElementById('order-summary');

    // Fetch cart or order details from backend server
    fetch('api/getOrderDetails')
        .then(response => response.json())
        .then(data => {
            // Update order summary HTML with retrieved data
            orderSummary.innerHTML = `
                <h2>Order Summary</h2>
                <ul>
                    <!-- Dynamically generate list of items in cart or order -->
                    ${data.items.map(item => `<li>${item.name} - ${item.price}</li>`).join('')}
                </ul>
                <p>Total: ${data.total}</p>
            `;

            // Show the checkout button
            const checkoutButton = document.getElementById('checkout-button');
            checkoutButton.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching order details:', error);
        });

    // Handle checkout process when button is clicked
    const shippingForm = document.getElementById('shipping-form');
    const checkoutButton = document.getElementById('checkout-button');

    checkoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Collect shipping information from the form
        const name = document.getElementById('name').value;
        // Collect payment information from the form
        const cardNumber = document.getElementById('card-number').value;
        // Add more fields for other payment information
        
        // Use payment gateway API to process the payment
        // Example: Stripe integration
        Stripe.card.createToken({
            number: cardNumber,
            // Add other payment details here (expiration date, CVV, etc.)
        }, function(status, response) {
            if (response.error) {
                // Handle payment error
                console.log('Payment failed:', response.error.message);
            } else {
                // Payment successful, send token to server for further processing
                const token = response.id;
                console.log('Payment successful! Token:', token);
                // Redirect to confirmation page or display confirmation message
                window.location.href = 'confirmation.html';
            }
        });
    });
});
