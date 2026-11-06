const form = document.getElementById('contactForm');
const status = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');

// Your API Gateway endpoint
const API_URL = 'https://0s0912zoc8.execute-api.us-east-2.amazonaws.com/contact';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Disable button while sending
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  status.style.display = 'none';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (response.ok) {
      status.textContent = data.message || 'Thank you! Your message was received.';
      status.className = 'success';
      form.reset();
    } else {
      throw new Error(data.message || 'Something went wrong');
    }
  } catch (error) {
    status.textContent = 'Error: ' + error.message;
    status.className = 'error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});