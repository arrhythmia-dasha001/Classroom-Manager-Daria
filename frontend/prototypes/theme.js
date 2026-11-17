// theme.js – Umschalten zwischen hellem und dunklem Modus.
// Die Farben stehen in tokens.css. Hier wird nur data-theme="dark" an <html> gesetzt.

const html = document.documentElement;

// 1. Gespeicherten Modus sofort setzen.
//    Das Skript steht im <head> → die Seite blitzt nicht erst hell auf.
if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark");
}

// 2. Wenn die Seite geladen ist: Button suchen und auf Klick reagieren
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");

  if (html.getAttribute("data-theme") === "dark") {
    button.textContent = "☀️ Hell";
  }

  button.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      button.textContent = "🌙 Dunkel";
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      button.textContent = "☀️ Hell";
    }
  });
});
