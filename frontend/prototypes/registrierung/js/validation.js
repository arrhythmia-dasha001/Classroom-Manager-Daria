// validation.js – Client-Side Validierung mit Fehlerübersicht

const form = document.getElementById("registrierung");
const summary = document.getElementById("error-summary");
const status = document.getElementById("form-status");

// JS übernimmt die Prüfung → Browser-Blasen ausschalten.
// Ohne JS prüft der Browser trotzdem (wegen "required").
form.setAttribute("novalidate", "");

// Fehlertexte für leere Pflichtfelder
const emptyMessages = {
  vorname: "Bitte gib deinen Vornamen ein.",
  nachname: "Bitte gib deinen Nachnamen ein.",
  email: "Bitte gib deine E-Mail-Adresse ein.",
  klasse: "Bitte wähle deine Klasse aus.",
  passwort: "Bitte gib ein Passwort ein.",
  passwort2: "Bitte wiederhole dein Passwort.",
};

// Prüft ein Feld und gibt den Fehlertext zurück (leer = alles ok)
function checkField(input) {
  if (input.type === "checkbox" && !input.checked) {
    return "Bitte akzeptiere die Datenschutzerklärung.";
  }
  if (input.value.trim() === "") {
    return emptyMessages[input.id];
  }
  if (input.type === "email" && !input.validity.valid) {
    return "Die E-Mail-Adresse braucht ein @ und eine Domain, z. B. name@bbs2leer.de.";
  }
  if (input.id === "passwort" && input.value.length < 8) {
    return "Das Passwort muss mindestens 8 Zeichen lang sein.";
  }
  if (input.id === "passwort2" && input.value !== form.passwort.value) {
    return "Die Passwörter stimmen nicht überein.";
  }
  return "";
}

// Zeigt den Fehler am Feld an oder entfernt ihn
function showFieldError(input, message) {
  const errorText = document.getElementById(`${input.id}-error`);
  const hint = document.getElementById(`${input.id}-hint`);

  if (message) {
    errorText.textContent = `Fehler: ${message}`;
    input.setAttribute("aria-invalid", "true");
    // Hinweis UND Fehler werden beim Fokus vorgelesen
    input.setAttribute("aria-describedby", hint ? `${hint.id} ${errorText.id}` : errorText.id);
  } else {
    errorText.textContent = "";
    input.removeAttribute("aria-invalid");
    if (hint) {
      input.setAttribute("aria-describedby", hint.id);
    } else {
      input.removeAttribute("aria-describedby");
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Seite nicht neu laden (Prototyp ohne Server)
  status.textContent = "";

  const errors = [];
  for (const input of form.querySelectorAll("input, select")) {
    const message = checkField(input);
    showFieldError(input, message);
    if (message) {
      errors.push({ id: input.id, message });
    }
  }

  if (errors.length > 0) {
    // Fehlerübersicht mit Links zu den Feldern
    const items = errors.map((e) => `<li><a href="#${e.id}">${e.message}</a></li>`).join("");
    summary.innerHTML = `<h2>${errors.length} Fehler gefunden</h2><ul>${items}</ul>`;
    summary.hidden = false;
    summary.focus(); // Tastatur- und Screenreader-Nutzer landen direkt bei den Fehlern
    return;
  }

  summary.hidden = true;
  summary.innerHTML = "";
  form.reset();
  status.textContent = "Registrierung erfolgreich. Du kannst dich jetzt anmelden.";
});

// Nach dem ersten Fehler: Feld beim Verlassen erneut prüfen, damit der Fehler verschwindet
form.addEventListener("focusout", (event) => {
  const input = event.target;
  if (input.getAttribute("aria-invalid") === "true") {
    showFieldError(input, checkField(input));
  }
});

// Klick auf einen Link in der Fehlerübersicht → Fokus direkt ins Feld
summary.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    document.getElementById(event.target.getAttribute("href").slice(1)).focus();
  }
});
