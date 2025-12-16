# Soluzione in pseudocodice

### Richiesta

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio

### Dati

- `prezzo biglietto`: 0.21 €/km
- `sconto` per età < 18 anni: 20%
- `sconto` per età > 65 anni: 40%

### Svolgimento

- richiesta `km` da percorrere all'utente

  - validazione dato immesso
  - SE NOT(dato valido):
    - alert e generazione Errore

- richiesta `età` all'utente

  - validazione dato immesso
  - SE NOT(dato valido):
    - alert e generazione Errore

- SE(`età` < 18):
  - assegnazione `sconto` 20
- ALTRIMENTI SE(`età` > 65):
  - assegnazione `sconto` 40
- ALTRIMENTI:

  - assegnazione `sconto` 0

- Calcolo `prezzo`:

  `km` x `prezzo biglietto` x (1 - `sconto`/100)

- Generazione output del `prezzo` in formato:

  `€ parte intera.2 decimali`
