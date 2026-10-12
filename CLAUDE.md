# Proiect
Instrument civic anticorupție pentru anchete jurnalistice independente, aplicat pe România.
Funcțiile se adaugă treptat, câte una, doar după aprobarea autorului.

# Reguli de lucru
- O sarcină = un obiectiv. Explorare → plan → aprobare → implementare → verificare.
- IMPORTANT: nimic nu se modifică fără aprobare explicită. Fără commit, push sau deploy fără aprobare.
- După orice modificare: rulează testele, arată rezultatul, `git diff --stat`, `git status --short`.
- Orice afirmație produsă de instrument trebuie să aibă sursa ei. Un semnal nu e o dovadă.

# Nu atinge
- Uneltele existente din src/tools/ și testele lor, cât timp lucrezi la altă unealtă.
- Fișierele de evaluare (evals/) existente, ca să treacă un test.
- Dependențe noi sau framework-uri noi fără aprobare.
- Secrete (.env, chei API): nu le citi, nu le scrie în cod.

# Comenzi
- `npm install` – instalează dependențele
- `npm test` – rulează testele (trecut/picat)
- `npm run typecheck` – verifică tipurile
- `npm start -- "<întrebare>"` – pornește agentul (necesită ANTHROPIC_API_KEY)
