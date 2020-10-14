'use strict';

function randomeColor() {
  return (
    '#' +
    ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)
  );
}

function getColorByBgColor(bg_color) {
  if (!bg_color) {
    return '';
  }
  return parseInt(bg_color.replace('#', ''), 16) > 0xffffff / 2
    ? '#000000'
    : '#ffffff';
}

function copyColorString() {
  console.log(`copyColorString`);
  const copyText = document.querySelector('body > div > h1');

  let range, selection;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(copyText);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  document.execCommand('copy');
}

function initColor() {
  const bg_color = randomeColor();
  const font_color = getColorByBgColor(bg_color);

  const body = document.querySelector('body');
  const h1 = document.querySelector('body > div > h1');

  body.style.backgroundColor = bg_color;
  h1.innerHTML = bg_color;
  h1.style.color = font_color;
}

document.addEventListener('DOMContentLoaded', (event) => {
  initColor();
});
