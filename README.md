# Cyberquiz · Soccorso digitale

Quiz a squadre per l'aula, in pixel art, sulla lezione di Cybersecurity. Le squadre devono salvare quattro persone, una per ogni truffa: phishing, fuffa guru, sextortion, malware. Il formatore inserisce i voti dal computer collegato al proiettore.

## Come si gioca

1. **Preparazione.** Il formatore sceglie il numero di squadre (da 1 a 4), il nome e il numero di componenti di ogni squadra.
2. **Round.** Ci sono 4 round, uno per truffa. All'inizio di ogni round ogni squadra vede la situazione della persona da salvare, senza nome e con il ritratto oscurato.
3. **Domande.** Ogni round ha 4 domande a scelta multipla. Per ogni squadra il formatore inserisce quante persone hanno votato A, B, C e D, con i tasti − e + oppure scrivendo il numero. Chi non vota conta come risposta sbagliata.
4. **Esito del round.** Ogni squadra scopre solo se la sua vittima è stata salvata, e come. Non vede punti né percentuali. Il formatore può mostrare le risposte giuste con le spiegazioni.
5. **Titoli di coda.** A fine partita scorrono i titoli: per ogni squadra si scopre chi erano le persone, quanto era alta la posta in gioco e quanti punti valeva ciascun salvataggio.
6. **Classifica.** Squadra, persone salvate, media delle risposte esatte, punteggio finale.

## Punteggio

Per ogni round: percentuale di risposte esatte della squadra (arrotondata per eccesso) × moltiplicatore della posta in gioco × moltiplicatore del salvataggio.

| Salvataggio | Risposte esatte | Moltiplicatore |
|---|---|---|
| Perfetto | 90–100% | ×2 |
| Efficace | 75–89% | ×1,5 |
| Con perdite | 60–74% | ×1 |
| Vittima truffata | sotto il 60% | nessun punto |

| Posta in gioco | Moltiplicatore |
|---|---|
| Enorme | ×2 |
| Alta | ×1,6 |
| Media | ×1,3 |
| Bassa | ×1 |

Esempio: 83% su una vittima con posta media → 83 × 1,3 × 1,5 = 162 punti. Il massimo teorico è 1.180 punti.

All'inizio di ogni partita il gioco assegna a caso le vittime alle squadre, in modo equo: ogni squadra incontra una vittima per ogni livello di posta in gioco, e nello stesso round due squadre non hanno mai lo stesso livello.

## Salvataggio della partita

La partita si salva da sola a ogni voto, nel browser del computer che la proietta. Il tasto **Pausa** in alto a destra la sospende. Riaprendo la pagina compare la scelta tra **Riprendi** e **Nuova partita**: la partita salvata resta disponibile finché non se ne inizia una nuova, che la sovrascrive.

Il salvataggio resta in quel browser: aprendo il gioco su un altro computer non si ritrova.

## Modificare i contenuti

Truffe, vittime, domande e moltiplicatori sono tutti in `content.js`. Per ogni round:

- `vittime`: quattro persone, una per ogni livello (`enorme`, `alto`, `medio`, `basso`). `situazione` si legge durante il round, `storia` nei titoli di coda.
- `domande`: `q` è il testo, `options` le quattro risposte (A, B, C, D), `correct` la posizione della risposta giusta (0 = A, 1 = B, 2 = C, 3 = D), `spiegazione` compare nel riepilogo.
- `esiti`: il testo che si legge per ogni tipo di salvataggio.

Il ritratto in pixel di ogni vittima si genera dal nome e dall'età.

## Pubblicarlo online

Su GitHub vai in **Settings → Pages**. In "Build and deployment" scegli **Deploy from a branch**, poi il branch `main` e la cartella `/ (root)`, e salva.

Dopo un paio di minuti il gioco è raggiungibile su `https://elbruco91.github.io/cyberquiz/`.
