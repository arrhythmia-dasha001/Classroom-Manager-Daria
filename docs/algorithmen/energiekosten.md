# Energiekosten – Struktogramm und Pseudocode

LF11A UW10

## 1.1 Struktogramm

Eingabe: Verbrauch (kWh), Preis pro kWh, Grundgebühr. Ausgabe: Gesamtkosten für einen Monat.

Rabatt: Ab 300 kWh gibt es 10 % auf den Preis für den Verbrauch. Die Grundgebühr bleibt gleich.

![Struktogramm Energiekosten für einen Monat](struktogramm-energiekosten.svg)

## 1.2 Pseudocode

```
RABATT_GRENZE := 300
RABATT_SATZ := 0,10

EINGABE verbrauch, preisProKWh, grundgebuehr
arbeitspreis := verbrauch * preisProKWh
WENN verbrauch >= RABATT_GRENZE DANN
    rabatt := arbeitspreis * RABATT_SATZ
    arbeitspreis := arbeitspreis - rabatt
SONST
    // nichts
ENDE WENN
gesamtkosten := arbeitspreis + grundgebuehr
AUSGABE gesamtkosten
```

Test mit 0,35 € pro kWh und 12 € Grundgebühr:

- 250 kWh → 87,50 + 12 = 99,50 € (kein Rabatt)
- 320 kWh → 112,00 − 11,20 + 12 = 112,80 € (mit Rabatt)
