const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

// Trip category filters
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.trip-card').forEach(card => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

// Save/favourite trip cards (demo interaction)
document.querySelectorAll('.heart').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('saved');
    button.textContent = button.classList.contains('saved') ? '♥' : '♡';
  });
});

// Trip enquiry opens WhatsApp with the selected trip name
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const trip = button.dataset.trip;
    const message = `Hi Namma Sanchara, I am interested in the ${trip}. Please share the upcoming dates, itinerary, inclusions and price.`;
    window.open(`https://wa.me/918139954601?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Small toast for demo feedback when clicking the WhatsApp floating shortcut
const toast = document.querySelector('.toast');
document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-list details').forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
