# Use-Case-Diagramm Bestell-System

LF11A UW7

Bestell-System für den Schulshop: Schüler:innen und Lehrkräfte bestellen Hefte, Stifte und Technik.

## 1.1 Akteure

- Primäre Akteure (starten einen Use-Case, weil sie ein Ziel haben): Kunde, Lagerist
- Sekundärer Akteur (wird vom System dazugeholt): Zahlungsdienst

## 1.2 Diagramm

![Use-Case-Diagramm Bestell-System](use-case-bestellsystem.svg)

- include: Zu „Bestellung aufgeben“ gehört immer „Bezahlen“.
- extend: „Gutschein einlösen“ kommt nur dazu, wenn der Kunde einen Gutscheincode hat.
