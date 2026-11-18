## Was ändert dieser PR?

<!-- 1–3 Sätze. Welche Tickets? Beispiel: Closes #9, Closes #10 -->

## Review-Checkliste

**Funktion**
- [ ] Alle „Fertig, wenn“-Punkte der verlinkten Tickets sind erfüllt
- [ ] Im Browser getestet: Handy (375 px), Tablet (768 px), Desktop (1280 px)
- [ ] Keine Fehler in der Konsole (DevTools)

**Code**
- [ ] Code ist kommentiert, Namen sind verständlich
- [ ] Farben, Abstände und Schriften nur über Tokens (`tokens.css`), keine festen Werte
- [ ] Header und Footer wie auf den anderen Seiten (`common.css`)
- [ ] Keine Dateien, die nicht ins Repo gehören (`node_modules`, `.env`, Testausgaben)

**Barrierefreiheit**
- [ ] Alles mit der Tastatur bedienbar (Tab, Enter, Esc), Fokus immer sichtbar
- [ ] Kontrast Text/Hintergrund mindestens 4,5 : 1
- [ ] Buttons und Bilder haben verständliche Namen für Screenreader
- [ ] Lighthouse Accessibility ≥ 90

**Git**
- [ ] Ein Commit pro Ticket, Commit-Nachricht sagt, was passiert ist
- [ ] PR schließt die Tickets automatisch (`Closes #…`)
