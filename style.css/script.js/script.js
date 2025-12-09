Script.js

const modal = document.getElementById("readmeModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Open modal
openBtn.onclick = () => { modal.style.display = "block"; }

// Close modal
closeBtn.onclick = () => { modal.style.display = "none"; }

// Close if clicking outside modal