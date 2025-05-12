document.getElementById("toggleTable").addEventListener("click", () => {
  const table = document.getElementById("modelTable");
  table.style.display = table.style.display === "none" ? "table" : "none";
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  alert("Theme changed!");
});

function showTrivia() {
  alert("Did you know? GPT-3 has 175 billion parameters!");
}
