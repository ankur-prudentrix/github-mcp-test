const message = document.getElementById("message");
const countEl = document.getElementById("count");
let count = 0;

document.getElementById("greetBtn").addEventListener("click", () => {
  message.textContent = "Hello from Prudentix! 👋";
});

document.getElementById("countBtn").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
  message.textContent = `You clicked ${count} time${count === 1 ? "" : "s"}.`;
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  message.textContent = isDark ? "Dark mode on." : "Light mode on.";
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
  document.body.classList.remove("dark");
  message.textContent = "Click a button to get started.";
});
