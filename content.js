// =====================================================================
//  CYBERQUIZ · contenuti del gioco
//  Modifica solo questo file per cambiare truffe, vittime e domande.
//
//  Il gioco ha 4 round, uno per truffa, nell'ordine in cui compaiono qui.
//  Ogni round ha:
//    nome, intro: titolo e breve descrizione della truffa
//    mult:        moltiplicatore del round (uguale per tutte le squadre)
//    esiti:       cosa succede alla vittima per ogni tipo di salvataggio
//    vittime:     4 persone da salvare. A ogni partita il gioco ne
//                 assegna una a caso a ogni squadra.
//    domande:     domande a scelta multipla o vero/falso
//                 q:       il testo della domanda
//                 options: da 2 a 4 risposte, nell'ordine A, B, C, D
//                          (per un vero/falso: ["Vero", "Falso"])
//                 correct: la risposta giusta: 0 = A, 1 = B, 2 = C, 3 = D
//
//  Se un testo contiene le virgolette doppie, scrivile così: \"
// =====================================================================

window.CYBERQUIZ = {
  eyebrow: "Lezioni by LV8 · Cybersecurity",
  title: "Soccorso digitale",

  // Fasce di salvataggio, sulla percentuale di risposte esatte della squadra nel round.
  // Punti del round = percentuale (arrotondata all'intero) × mult del round × mult della fascia
  fasce: [
    { id: "perfetto", min: 90, label: "Salvataggio perfetto",    mult: 2 },
    { id: "efficace", min: 80, label: "Salvataggio efficace",    mult: 1.6 },
    { id: "mid",      min: 70, label: "Salvataggio mid",         mult: 1.3 },
    { id: "pelo",     min: 60, label: "Salvataggio per un pelo", mult: 1 },
    { id: "fallito",  min: 0,  label: "Salvataggio fallito",     mult: 0 }
  ],

  round: [
    // ------------------------------------------------------------- 1
    {
      nome: "Fuffa guru",
      mult: 1.5,
      intro: "Finti esperti che promettono guadagni facili, corsi miracolosi e metodi segreti per diventare ricchi. In cambio chiedono soldi, subito.",
      esiti: {
        perfetto: "Ha capito il trucco e ha chiuso la chat. Non ha speso un euro.",
        efficace: "Ha lasciato email e numero per il \"webinar gratuito\". Ora riceve spam ogni giorno, ma i soldi sono salvi.",
        mid: "Ha comprato l'ebook \"introduttivo\" da 29 €, poi ha capito che era tutta fuffa e ha chiuso lì.",
        pelo: "Ha pagato il primo acconto del corso, poi ha capito e ha smesso. Quei soldi non tornano più.",
        fallito: "Ha pagato tutto. Il guru è sparito, il gruppo Telegram è stato chiuso."
      },
      vittime: [
        { nome: "C. Redulone", situazione: "Un \"trader\" su Instagram gli propone di raddoppiare in sei mesi qualunque somma investa con il suo metodo." },
        { nome: "R. Iccosubito", situazione: "Le offrono un \"percorso di mentorship\" da 3.000 €, pagabile a rate con un finanziamento." },
        { nome: "S. Oldifacili", situazione: "Un influencer promette 1.000 € al mese da casa. Basta comprare il suo corso da 497 €." },
        { nome: "I. Ngenuo", situazione: "Vede la pubblicità di un ebook da 29 € che promette di farla diventare influencer in 30 giorni." }
      ],
      domande: [
        { q: "Un fuffa guru è un sedicente esperto che vende corsi online promettendo guadagni lenti, costanti e sicuri.",
          options: ["Vero", "Falso"],
          correct: 1 },
        { q: "Quale di queste cose tipiche millantate da un fuffa guru è sicuramente FALSA?",
          options: ["Vive a Dubai", "Guida macchine sportive", "Guadagna attraverso i metodi che insegna nei suoi corsi", "Ha centinaia di seguaci che lo finanziano"],
          correct: 2 },
        { q: "Quale di queste cose starebbe pensando una persona circuita dai fuffa guru, se leggesse queste domande?",
          options: ["Queste sono semplificazioni", "Tizio Caio che conosco io non è un fuffa guru", "Io conosco un metodo che funziona", "Tutte le precedenti"],
          correct: 3 }
      ]
    },
    // ------------------------------------------------------------- 2
    {
      nome: "Phishing, Vishing, Smishing",
      mult: 1,
      intro: "Email, SMS e telefonate che si fingono la banca, il corriere o un servizio che usi ogni giorno, per farti cliccare un link o dettare password, codici e dati.",
      esiti: {
        perfetto: "Ha riconosciuto la trappola al primo sguardo. Nessun dato perso.",
        efficace: "Ha aperto il link ma ha chiuso la pagina in tempo. Sono stati sottratti solo nome e indirizzo email.",
        mid: "Ha inserito la password, ma dopo pochi minuti ha capito e l'ha cambiata. Ha passato la serata a rifare gli accessi.",
        pelo: "Ha inserito password e dati della carta, poi ha capito e ha bloccato tutto. Ha perso un addebito e dovuto rifare la carta.",
        fallito: "Ha consegnato password e dati della carta. Account e soldi sono finiti nelle mani dei truffatori."
      },
      vittime: [
        { nome: "S. Badato", situazione: "Riceve un'email dalla \"banca\": il conto è bloccato e va riattivato entro 24 ore dal link." },
        { nome: "F. Urboni", situazione: "Riceve un SMS dal \"corriere\": c'è un pacco in giacenza, servono 1,99 € per la consegna." },
        { nome: "C. Liccatutto", situazione: "Riceve un DM da un \"account ufficiale\": il suo profilo ha violato le regole e verrà chiuso se non verifica i dati." },
        { nome: "D. Istratto", situazione: "Trova un link che promette skin gratis per il suo videogioco preferito, basta fare login." }
      ],
      domande: [
        { q: "Quale di queste NON è una leva emotiva utilizzata dal phishing per truffare le persone?",
          options: ["Nostalgia", "Fiducia", "Paura", "Urgenza"],
          correct: 0 },
        { q: "L'AI sta rendendo sempre più facile scoprire le truffe.",
          options: ["Vero", "Falso"],
          correct: 1 },
        { q: "Come fa un truffatore a sapere che possiedi un account Netflix?",
          options: ["Perché non hai il controllo dei tuoi dati", "Perché hai accettato qualche cookie strano", "Sparano a caso", "Ti osservano attraverso la fotocamera del telefono o del pc"],
          correct: 2 }
      ]
    },
    // ------------------------------------------------------------- 3
    {
      nome: "Sextortion",
      mult: 1.5,
      intro: "Ricatti online: qualcuno minaccia di diffondere immagini intime, vere o inventate, per ottenere soldi o altro materiale.",
      esiti: {
        perfetto: "Non ha risposto né pagato, ha conservato le prove e ha segnalato. Il ricattatore è sparito.",
        efficace: "Ha risposto al ricattatore, poi ha bloccato e segnalato. Qualche giorno d'ansia, ma nessuna perdita.",
        mid: "Ha trattato con il ricattatore per giorni prima di chiedere aiuto. Alla fine ha bloccato e denunciato, senza pagare.",
        pelo: "Ha pagato una prima volta, poi ha chiesto aiuto. Quei soldi non tornano più.",
        fallito: "Ha pagato e continuato a pagare. Ogni pagamento ha portato una nuova richiesta."
      },
      vittime: [
        { nome: "N. Ottambulo", situazione: "Un profilo conosciuto in chat minaccia di mandare delle sue foto a tutti i suoi contatti, se non paga." },
        { nome: "C. Hiacchierone", situazione: "Riceve un'email: \"Ho hackerato la tua webcam\". Nel testo c'è una sua vecchia password vera." },
        { nome: "S. Ocievole", situazione: "Una persona conosciuta in una chat di gioco, dopo giorni di complimenti, inizia a chiedere foto \"solo tra noi\"." },
        { nome: "W. Ifisempre", situazione: "Trova nello spam un'email generica che chiede 500 € in bitcoin per non diffondere un video." }
      ],
      domande: [
        { q: "Qualcuno ti manda un messaggio dicendo che possiede foto intime di te e che, se non gliene mandi altre, le diffonderà a tutti i tuoi amici e ai tuoi genitori. Questo è un caso di sextortion.",
          options: ["Vero", "Falso"],
          correct: 0 },
        { q: "La sextortion è un fenomeno che riguarda soprattutto…",
          options: ["Uomini sopra i 50 anni", "Donne fra i 20 e i 30 anni", "Uomini sotto i 20 anni", "Donne sopra i 60 anni"],
          correct: 2 },
        { q: "Una di queste azioni NON aiuta a tutelarsi dal rischio di subire sextortion. Quale?",
          options: ["Evitare di mandare materiale intimo a chi non si conosce di persona", "Limitarsi a condividere certe immagini solo con il proprio partner", "Mettere il profilo privato su IG", "Non mantenere salvati certi materiali sul proprio pc"],
          correct: 1 }
      ]
    },
    // ------------------------------------------------------------- 4
    {
      nome: "Malware",
      mult: 2,
      intro: "Programmi malevoli nascosti in allegati, app e download che sembrano innocui. Rubano dati, spiano o bloccano i file per chiedere un riscatto.",
      esiti: {
        perfetto: "Non ha aperto niente di sospetto. Il dispositivo è pulito.",
        efficace: "Il malware è entrato, ma l'antivirus l'ha fermato. Solo qualche ora persa a sistemare.",
        mid: "Ha dovuto reinstallare tutto, ma il backup era recente. Ha perso solo gli ultimi giorni di lavoro.",
        pelo: "Ha dovuto formattare il dispositivo. Una parte dei file non c'era nel backup.",
        fallito: "Il malware ha preso tutto: file bloccati, dati rubati e un riscatto da pagare."
      },
      vittime: [
        { nome: "A. Llegato", situazione: "Riceve una \"fattura\" in allegato da un fornitore che non conosce, in formato .zip." },
        { nome: "C. Rackato", situazione: "Cerca un programma di grafica a pagamento e trova una versione \"crackata\" gratis da scaricare." },
        { nome: "S. Caricatutto", situazione: "Su WhatsApp gli arriva un file \"Foto_festa.apk\" da un numero che non ha salvato." },
        { nome: "P. Opup", situazione: "Mentre legge le notizie sul tablet compare un avviso: \"Il tuo dispositivo è infetto! Scarica subito l'antivirus\"." }
      ],
      domande: [
        { q: "Alla fine possiamo dire che i malware sono quelli che tutti chiamano \"virus del pc\"?",
          options: ["Sì dai", "No bro"],
          correct: 0 },
        { q: "Quale di questi non è un malware?",
          options: ["Trojan", "Ransomware", "Firewall", "Spyware"],
          correct: 2 },
        { q: "Aggiornare telefono e pc serve a diminuire la possibilità di beccarsi dei virus.",
          options: ["Vero", "Falso"],
          correct: 0 }
      ]
    }
  ]
};
