const interval = setInterval(() => {
  const el = document.querySelector('.fc-ab-root .fc-close');

  if (el) {
    el.dispatchEvent(new Event('click'));

    clearInterval(interval);
  }
});

window.onload = () => setTimeout(() => clearInterval(interval), 10000);
