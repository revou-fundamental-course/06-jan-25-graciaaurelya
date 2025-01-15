// JavaScript 
// prompt : meminta input ke user

function replaceName() {
  let userGreeting = prompt("Siapakah Nama Anda?", "");
  document.getElementById("userGreeting").innerHTML = userGreeting
}

document.getElementById("changeName").addEventListener("click", function () {
  replaceName();
})


const form = document.querySelector('form');
const outputSection = document.querySelector('.output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Ambil nilai input
  const nama = document.getElementById('nama').value;
  const tanggal = document.getElementById('tanggal').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('subject').value;

  // Clear output sebelumnya
  outputSection.querySelector('.current').innerHTML = '';

  // Buat elemen output baru
  const outputElements = [
    `Current time : ${new Date().toLocaleString()}`,
    `Nama : ${nama}`,
    `Tanggal Lahir : ${tanggal}`,
    `Email : ${email}`,
    `Pesan : ${pesan}`,
  ];

  outputElements.forEach(element => {
    const p = document.createElement('p');
    p.textContent = element;
    outputSection.querySelector('.current').appendChild(p);
  });
});

// Banner Autoslide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Banner Autoslide
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  // setiap 1 sekon
  plusDivs(1);
}, 1000);