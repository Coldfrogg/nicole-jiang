document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my personal website!');
  });

const text = "welcome to my personal website!";
const typedTextElement = document.getElementById('typed-text');
let index = 0;

function typeText() {
  if (index < text.length) {
    typedTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust speed of typing here
  }
}

window.onload = typeText;
