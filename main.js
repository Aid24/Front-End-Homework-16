const input = document.getElementById('myInput');
const div = document.getElementById('myDiv');


input.addEventListener('focus', () => {
  div.style.display = 'block';
});


input.addEventListener('blur', () => {
  div.style.display = 'none';
});
