/* Core interactive scripts for Version9 transfer */
document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  fetchServicesAPI();
  setupBookingForm();
}

function fetchServicesAPI() {
  // Use a static, English-only demo dataset to guarantee professional English copy.
  const staticServices = [
    { title: 'Signature Wash', body: 'Advanced exterior wash with clay decontamination and hand-dry finish.', price: 65 },
    { title: 'Interior Luxury', body: 'Deep interior conditioning, leather treatment, and scent restoration.', price: 85 },
    { title: 'Full Detail', body: 'Complete exterior and interior refinishing with premium products.', price: 260 },
    { title: 'Ceramic Protection', body: 'Long-lasting high-gloss ceramic barrier for superior protection.', price: 420 },
    { title: 'Headlight Refit', body: 'Precision restoration and protective coating for improved night visibility.', price: 95 }
  ];

  const tbody = document.querySelector('#servicesTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  staticServices.forEach(item => {
    const tr = document.createElement('tr');
    const price = formatCurrency(item.price);
    tr.innerHTML = `<td>${escapeHtml(item.title)}</td><td>${escapeHtml(item.body)}</td><td>${price}</td>`;
    tbody.appendChild(tr);
  });
}

function setupBookingForm() {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const data = gatherFormData(form);
    // Example API POST (fake endpoint)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resp => {
      alert('Booking submitted (demo). Reference: ' + resp.id);
      form.reset();
    })
    .catch(err => {
      console.error('Booking submit failed', err);
      alert('Failed to submit booking (demo). Check console.');
    });
  });
}

function gatherFormData(form) {
  const fd = {};
  new FormData(form).forEach((v,k) => fd[k] = v);
  return fd;
}

function formatCurrency(n) {
  return '$' + Number(n).toFixed(2);
}

function escapeHtml(str){
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]; });
}

// Small helper functions for interactive examples
function addService(name, desc, price){
  const ul = document.getElementById('serviceList');
  if(!ul) return;
  const li = document.createElement('li');
  li.innerHTML = `<strong>${escapeHtml(name)}:</strong> ${escapeHtml(desc)} <span class="text-muted">${formatCurrency(price)}</span>`;
  ul.appendChild(li);
}

function toTitleCase(s){
  if(!s) return '';
  return s.split(/[\s-_]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Example usage of additional DOM functions exposed for console testing
window.appHelpers = { addService, fetchServicesAPI };
