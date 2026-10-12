# Evaluări

Fiecare unealtă are propriul set de evaluare: `evals/<unealtă>/cazuri.json`.

## Format

```json
[
  {
    "id": "caz-001",
    "intrebare": "Întrebarea trimisă agentului",
    "asteptat": "Răspunsul sau datele așteptate",
    "tip": "trebuie-sa-gaseasca"
  },
  {
    "id": "caz-002",
    "intrebare": "...",
    "asteptat": "nimic",
    "tip": "nu-trebuie-sa-gaseasca-nimic"
  }
]
```

## Reguli

- 20–50 de cazuri pentru fiecare unealtă, fiecare cu răspunsul așteptat.
- Includ și cazuri în care răspunsul corect este „nu am găsit nimic”.
- Verdictul îl dă cod care compară cu răspunsul așteptat, nu un model AI.
- Pragul de trecere și numărul de rulări (pass^k) se stabilesc la aprobarea fiecărei unelte.
- Transcrierile cazurilor picate se citesc de om.
- Cazurile existente nu se modifică pentru ca un test să treacă.

Scriptul care rulează evaluările se adaugă odată cu prima unealtă.
