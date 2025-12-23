// Simple contact form validation and message
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if(name === '' || email === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill all fields!';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your message has been sent.';
    
    // Clear form
    document.getElementById('contactForm').reset();
});
