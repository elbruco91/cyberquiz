# Cyberquiz · Grande Quiz Anti-Scam VI

Quiz a squadre per l'aula, in pixel art, sulla lezione di Cybersecurity. In ogni round ogni squadra deve salvare una persona da una truffa. Il formatore inserisce i voti dal computer collegato al proiettore. Tutte le schermate sono pensate per stare in un unico schermo 16:9. I font sono inclusi nella cartella `fonts`, quindi il gioco funziona anche senza connessione.

## Come si gioca

1. **Menu.** Dal menu si inizia una nuova partita, oppure si riprende quella in sospeso, se ce n'è una non conclusa.
2. **Preparazione.** Il formatore sceglie il numero di squadre (da 1 a 4), il nome e il numero di componenti di ogni squadra.
3. **Regole.** Una schermata riassume come si risponde, le fasce di salvataggio e il punteggio.
4. **Round.** I round sono 4, nell'ordine: Fuffa guru, Phishing/Vishing/Smishing, Sextortion, Malware. Ogni round si apre con la presentazione della truffa e della persona che ogni squadra deve salvare. A ogni partita le persone vengono assegnate alle squadre a caso.
5. **Domande.** Per ogni squadra il formatore inserisce quante persone hanno votato A, B, C e D, con i tasti − e + oppure scrivendo il numero. Si può andare avanti anche se mancano dei voti: le risposte non date valgono come sbagliate.
6. **Risposta.** Dopo **Conferma risposte** la risposta giusta si illumina di verde, e per ogni squadra compaiono le risposte esatte e la percentuale. Qui il formatore spiega la domanda. Con **Correggi i voti** si torna a modificarli.
7. **Fine round.** Per ogni squadra compaiono l'esito del salvataggio, la percentuale e i punti, che salgono da zero con un'animazione, e la classifica parziale. Nell'ultimo round la classifica parziale non c'è, perché arriva subito dopo.
8. **Classifica finale.** Parte nascosta dietro il tasto **Mostra classifica finale**. Premendolo, le squadre compaiono una alla volta dall'ultima alla prima, con i punteggi che salgono, e le prime tre salgono sul podio.

## Punteggio

Punti del round = percentuale di risposte esatte della squadra × moltiplicatore del round × moltiplicatore del salvataggio. La percentuale si arrotonda all'intero: da ,5 in su per eccesso, sotto per difetto (85,3% → 85%, 85,5% → 86%).

| Round | Moltiplicatore |
|---|---|
| 1 · Fuffa guru | ×1,5 |
| 2 · Phishing, Vishing, Smishing | ×1 |
| 3 · Sextortion | ×1,5 |
| 4 · Malware | ×2 |

| Salvataggio | Risposte esatte | Moltiplicatore |
|---|---|---|
| Perfetto | 90–100% | ×2 |
| Efficace | 80–89% | ×1,6 |
| Mid | 70–79% | ×1,3 |
| Per un pelo | 60–69% | ×1 |
| Fallito | sotto il 60% | ×0 |

La fascia si decide sulla percentuale già arrotondata, quindi 89,5% vale come salvataggio perfetto. Esempio: 83% nel round 1 → 83 × 1,5 × 1,6 = 199 punti. Il massimo è 1.200 punti, a prescindere dal numero di domande.

## Schermo intero

Il tasto **Schermo intero** è in alto a destra, nel menu e durante il gioco. In alternativa si preme il tasto **F**. Per uscire si preme di nuovo il tasto, **F** oppure **Esc**.

## Salvataggio della partita

La partita si salva da sola a ogni voto, nel browser del computer che la proietta. Il tasto **Pausa** in alto a destra riporta al menu, da cui si può riprendere. La partita salvata resta disponibile finché non se ne inizia una nuova, che la sovrascrive. Una partita conclusa non compare più tra quelle da riprendere.

Il salvataggio resta in quel browser: aprendo il gioco su un altro computer non si ritrova.

## Modificare i contenuti

Round, persone da salvare, domande e moltiplicatori sono tutti in `content.js`. Per ogni round:

- `mult`: moltiplicatore del round.
- `vittime`: quattro persone, con `nome` e `situazione`. Il ritratto in pixel si genera dal nome.
- `domande`: tre per round. `q` è il testo, `options` le risposte, da 2 a 4 (A, B, C, D; per un vero/falso `["Vero", "Falso"]`), `correct` la posizione della risposta giusta (0 = A, 1 = B, 2 = C, 3 = D).
- `esiti`: il testo che si legge per ogni tipo di salvataggio.

L'ordine dei round è quello in cui compaiono nel file.

## Pubblicarlo online

Su GitHub vai in **Settings → Pages**. In "Build and deployment" scegli **Deploy from a branch**, poi il branch `main` e la cartella `/ (root)`, e salva.

Dopo un paio di minuti il gioco è raggiungibile su `https://elbruco91.github.io/cyberquiz/`.
