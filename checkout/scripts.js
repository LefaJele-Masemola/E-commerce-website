document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const expirationDate = document.getElementById('expiration-date').value;
        const cvv = document.getElementById('cvv').value;

        // You can perform validation and submit the payment details to a payment processing service here
        // For this example, let's just log the payment details
        console.log('Card Number:', cardNumber);
        console.log('Expiration Date:', expirationDate);
        console.log('CVV:', cvv);

        // After processing the payment, you can redirect the user to a confirmation page
        window.location.href = 'confirmation.html';
    });
});
