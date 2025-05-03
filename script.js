const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  document.querySelectorAll('.video-item').forEach(item => {
    const title = item.querySelector('p').innerText.toLowerCase();
    item.style.display = title.includes(keyword) ? 'block' : 'none';
  });
});
