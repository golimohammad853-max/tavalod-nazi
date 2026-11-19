const openButton = document.getElementById('openLetter');
const letterPaper = document.getElementById('letterPaper');

openButton.addEventListener('click', () => {
  const isHidden = letterPaper.hidden;
  letterPaper.hidden = !isHidden;
  openButton.textContent = isHidden ? 'بستن نامه' : 'نامه رو باز کن';
});
