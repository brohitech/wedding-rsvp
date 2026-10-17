const form = document.getElementById('rsvp-form');
const thankYou = document.getElementById('thank-you');
const submitBtn = document.getElementById('submit-btn');
const attendingRadios = document.querySelectorAll('input[name="attending"]');
const guestsSection = document.getElementById('guests-section');

// Toggle guest count field based on attendance
attendingRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'Yes') {
      guestsSection.classList.remove('hidden');
      guestsSection.querySelector('select').required = true;
    } else {
      guestsSection.classList.add('hidden');
      guestsSection.querySelector('select').required = false;
    }
  });
});

// Initialize state on load
const yesChecked = document.querySelector('input[name="attending"]:checked');
if (yesChecked) {
  if (yesChecked.value === 'Yes') {
    guestsSection.classList.remove('hidden');
    guestsSection.querySelector('select').required = true;
  } else {
    guestsSection.classList.add('hidden');
    guestsSection.querySelector('select').required = false;
  }
}

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    // TODO: Replace with your Formspree endpoint or preferred form backend
    // Example: https://formspree.io/f/your-submission-id
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      form.classList.add('hidden');
      thankYou.classList.remove('hidden');
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    console.error(err);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send RSVP';
    alert('Something went wrong. Please email us directly at rohitbale1998@gmail.com');
  }
});
