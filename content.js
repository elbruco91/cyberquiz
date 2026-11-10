// =====================================================================
//  CYBERQUIZ · contenuti del gioco
//  Modifica solo questo file per cambiare truffe, vittime e domande.
//
//  Il gioco ha 4 round, uno per truffa. Ogni round ha:
//    nome, intro:  titolo e breve descrizione della truffa
//    esiti:        cosa succede alla vittima in base al salvataggio
//    vittime:      4 persone, una per ogni valore della posta in gioco
//                  ("enorme", "alto", "medio", "basso"). Ogni valore
//                  deve comparire una sola volta per round.
//                  situazione: si legge durante il round (niente nomi)
//                  storia:     si legge nei titoli di coda
//    domande:      4 domande a scelta multipla
//                  q:           il testo della domanda
//                  options:     le quattro risposte, nell'ordine A, B, C, D
//                  correct:     la risposta giusta: 0 = A, 1 = B, 2 = C, 3 = D
//                  spiegazione: compare nel riepilogo di fine round
//
//  Se un testo contiene le virgolette doppie, scrivile così: \"
// =====================================================================

window.CYBERQUIZ = {
  eyebrow: "Lezioni by LV8 · Cybersecurity",
  title: "Soccorso digitale",

  // Moltiplicatori della posta in gioco
  valori: {
    enorme: { label: "Enorme", mult: 2 },
    alto:   { label: "Alta",   mult: 1.6 },
    medio:  { label: "Media",  mult: 1.3 },
    basso:  { label: "Bassa",  mult: 1 }
  },

  // Fasce di salvataggio, sulla percentuale di risposte esatte della squadra
  fasce: [
    { id: "perfetto", min: 90, label: "Salvataggio perfetto", mult: 2 },
    { id: "efficace", min: 75, label: "Salvataggio efficace", mult: 1.5 },
    { id: "perdite",  min: 60, label: "Salvataggio con perdite", mult: 1 },
    { id: "truffata", min: 0,  label: "Vittima truffata", mult: 0 }
  ],

  round: [
    // ------------------------------------------------------------- 1
    {
      nome: "Phishing",
      intro: "Email, SMS e messaggi che si fingono la banca, il corriere o un servizio che usi ogni giorno, per farti cliccare un link e consegnare password e dati.",
      esiti: {
        perfetto: "Ha riconosciuto la trappola al primo sguardo. Nessun dato perso.",
        efficace: "Ha aperto il link ma ha chiuso la pagina in tempo. Sono stati sottratti solo nome e indirizzo email.",
        perdite: "Ha inserito la password, poi ha capito e l'ha cambiata subito. Ha dovuto bloccare la carta e rifare gli accessi.",
        truffata: "Ha inserito password e dati della carta. Account e soldi sono finiti nelle mani dei truffatori."
      },
      vittime: [
        { valore: "enorme", nome: "Marta", eta: 52,
          situazione: "Riceve un'email dalla \"banca\": il conto è bloccato e va riattivato entro 24 ore dal link.",
          storia: "Gestisce la contabilità dell'azienda di famiglia. Da quel conto partono gli stipendi di dodici dipendenti." },
        { valore: "alto", nome: "Davide", eta: 19,
          situazione: "Riceve un SMS dal \"corriere\": c'è un pacco in giacenza, servono 1,99 € per la consegna.",
          storia: "Ha appena preso il primo stipendio. Sulla carta che stava per inserire c'erano i risparmi per la patente." },
        { valore: "medio", nome: "Sofia", eta: 17,
          situazione: "Riceve un DM da un \"account ufficiale\": il suo profilo ha violato le regole e verrà chiuso se non verifica i dati.",
          storia: "Sul suo profilo, seguito da tremila persone, vende i disegni che fa a mano." },
        { valore: "basso", nome: "Luca", eta: 16,
          situazione: "Trova un link che promette skin gratis per il suo videogioco preferito, basta fare login.",
          storia: "Usa quell'account solo per giocare. Avrebbe perso le skin, ma niente soldi." }
      ],
      domande: [
        { q: "Qual è il segnale più affidabile che un'email \"della banca\" è phishing?",
          options: [
            "Il logo è un po' sgranato",
            "Il mittente o il link portano a un dominio diverso da quello ufficiale",
            "C'è qualche errore di battitura",
            "È arrivata di sera, fuori orario d'ufficio"
          ],
          correct: 1,
          spiegazione: "Logo ed errori possono essere perfetti in un falso ben fatto. L'indirizzo reale del mittente e del link invece non si possono imitare del tutto." },
        { q: "Un SMS del \"corriere\" ti chiede 1,99 € per consegnare un pacco. Cosa fai?",
          options: [
            "Pago: la cifra è piccola, il rischio è basso",
            "Rispondo al messaggio chiedendo spiegazioni",
            "Controllo la spedizione dall'app o dal sito ufficiale, senza usare il link",
            "Inoltro il link a un amico per sapere se a lui funziona"
          ],
          correct: 2,
          spiegazione: "La cifra piccola serve a farti inserire i dati della carta. Si verifica sempre da un canale ufficiale, scelto da te." },
        { q: "Come si chiama il phishing fatto via SMS?",
          options: ["Smishing", "Vishing", "Quishing", "Spoofing"],
          correct: 0,
          spiegazione: "Smishing = SMS + phishing. Vishing avviene al telefono, quishing tramite QR code. Lo spoofing è la falsificazione del mittente." },
        { q: "Hai inserito la tua password su un sito falso. Qual è la prima cosa da fare?",
          options: [
            "Cancellare l'email che conteneva il link",
            "Aspettare di vedere se succede qualcosa di strano",
            "Disinstallare il browser",
            "Cambiare subito la password, anche dove l'hai riusata, e attivare la verifica in due passaggi"
          ],
          correct: 3,
          spiegazione: "Il tempo conta: cambiare subito la password chiude la porta. La verifica in due passaggi blocca chi conosce già la password." }
      ]
    },

    // ------------------------------------------------------------- 2
    {
      nome: "Fuffa guru",
      intro: "Finti esperti che promettono guadagni facili, corsi miracolosi e metodi segreti per diventare ricchi. In cambio chiedono soldi, subito.",
      esiti: {
        perfetto: "Ha capito il trucco e ha chiuso la chat. Non ha speso un euro.",
        efficace: "Ha lasciato email e numero per il \"webinar gratuito\". Ora riceve spam ogni giorno, ma i soldi sono salvi.",
        perdite: "Ha pagato il primo acconto, poi ha capito e ha smesso. Quei soldi non tornano più.",
        truffata: "Ha pagato tutto. Il guru è sparito, il gruppo Telegram è stato chiuso."
      },
      vittime: [
        { valore: "enorme", nome: "Simone", eta: 24,
          situazione: "Un \"trader\" su Instagram gli propone di raddoppiare in sei mesi qualunque somma investa con il suo metodo.",
          storia: "Stava per investire i 15.000 € che gli aveva lasciato la nonna. Era tutto quello che aveva da parte." },
        { valore: "alto", nome: "Giulia", eta: 20,
          situazione: "Le offrono un \"percorso di mentorship\" da 3.000 €, pagabile a rate con un finanziamento.",
          storia: "Per pagare avrebbe dovuto firmare un finanziamento a suo nome, con rate da pagare per due anni." },
        { valore: "medio", nome: "Kevin", eta: 18,
          situazione: "Un influencer promette 1.000 € al mese da casa. Basta comprare il suo corso da 497 €.",
          storia: "Ha messo da parte quei soldi facendo consegne a domicilio per tutta l'estate." },
        { valore: "basso", nome: "Martina", eta: 16,
          situazione: "Vede la pubblicità di un ebook da 29 € che promette di farla diventare influencer in 30 giorni.",
          storia: "Avrebbe perso la paghetta di un mese e l'indirizzo email." }
      ],
      domande: [
        { q: "\"Guadagna 1.000 € al mese da casa, ti basta il mio corso da 497 €.\" Qual è il segnale d'allarme principale?",
          options: [
            "Il guru parla in video invece che per iscritto",
            "Il guru ha molti follower",
            "Un guadagno facile e garantito, in cambio di un pagamento anticipato",
            "Usa tante parole in inglese"
          ],
          correct: 2,
          spiegazione: "Nessuno può garantire un guadagno. Chi lo fa e chiede soldi prima di tutto, di solito guadagna proprio vendendo la promessa." },
        { q: "Cos'è uno schema Ponzi?",
          options: [
            "Un sistema in cui i \"guadagni\" dei primi iscritti sono pagati con i soldi dei nuovi",
            "Un tipo di criptovaluta",
            "Un investimento in borsa ad alto rischio",
            "Una strategia di marketing sui social"
          ],
          correct: 0,
          spiegazione: "Non c'è nessun guadagno reale: i soldi passano dai nuovi ai vecchi iscritti. Quando smettono di entrarne di nuovi, crolla tutto." },
        { q: "Il guru pubblica foto con auto di lusso e screenshot dei suoi guadagni. Cosa dimostrano?",
          options: [
            "Che è serio, se sotto ci sono tanti commenti positivi",
            "Che il metodo funziona, se le foto sono recenti",
            "Che è affidabile, se ha la spunta blu",
            "Niente: auto e screenshot si affittano o si modificano, e i soldi possono venire proprio dai corsi venduti"
          ],
          correct: 3,
          spiegazione: "Lo stile di vita esibito fa parte della vendita. Spunte e commenti si comprano o si gestiscono, quindi non provano nulla." },
        { q: "\"Più amici porti nel programma, più guadagni.\" Se i soldi arrivano soprattutto da chi recluti e non da un prodotto venduto, di cosa si tratta?",
          options: [
            "Un programma di affiliazione",
            "Uno schema piramidale",
            "Un crowdfunding",
            "Un cashback"
          ],
          correct: 1,
          spiegazione: "Se il guadagno dipende dal reclutare persone, alla base resta sempre qualcuno che perde i soldi. In Italia gli schemi piramidali sono vietati." }
      ]
    },

    // ------------------------------------------------------------- 3
    {
      nome: "Sextortion",
      intro: "Ricatti online: qualcuno minaccia di diffondere immagini intime, vere o inventate, per ottenere soldi o altro materiale.",
      esiti: {
        perfetto: "Non ha risposto né pagato, ha conservato le prove e ha segnalato. Il ricattatore è sparito.",
        efficace: "Ha risposto al ricattatore, poi ha bloccato e segnalato. Ha passato giorni d'ansia, ma non ha perso nulla.",
        perdite: "Ha pagato una prima volta, poi ha chiesto aiuto. Quei soldi non tornano più.",
        truffata: "Ha pagato e continuato a pagare. Ogni pagamento ha portato una nuova richiesta."
      },
      vittime: [
        { valore: "enorme", nome: "Matteo", eta: 20,
          situazione: "Un profilo conosciuto in chat minaccia di mandare delle sue foto a tutti i suoi contatti, se non paga.",
          storia: "Il ricattatore aveva già salvato la lista dei suoi follower: familiari, amici, compagni di corso." },
        { valore: "alto", nome: "Chiara", eta: 26,
          situazione: "Riceve un'email: \"Ho hackerato la tua webcam\". Nel testo c'è una sua vecchia password vera.",
          storia: "Quella password, finita in un vecchio furto di dati, la usava ancora per l'home banking." },
        { valore: "medio", nome: "Andrea", eta: 19,
          situazione: "Una persona conosciuta in una chat di gioco, dopo giorni di complimenti, inizia a chiedere foto \"solo tra noi\".",
          storia: "Non aveva ancora mandato nulla. Era il momento giusto per fermarsi." },
        { valore: "basso", nome: "Paolo", eta: 45,
          situazione: "Trova nello spam un'email generica che chiede 500 € in bitcoin per non diffondere un video.",
          storia: "Era la stessa email mandata a milioni di indirizzi. Il ricattatore non aveva niente." }
      ],
      domande: [
        { q: "Cos'è la sextortion?",
          options: [
            "Un virus che spia la webcam",
            "Un tipo di phishing che ruba le password",
            "La diffusione di foto senza alcuna richiesta in cambio",
            "Un ricatto in cui qualcuno minaccia di diffondere immagini intime, vere o false, per ottenere soldi o altro"
          ],
          correct: 3,
          spiegazione: "Il cuore è il ricatto. A volte le immagini non esistono o sono generate con l'AI: la paura basta al truffatore." },
        { q: "Un'email di ricatto contiene una tua vecchia password vera. Cosa significa, molto probabilmente?",
          options: [
            "Che il ricattatore ha davvero accesso al tuo computer",
            "Che la password viene da un vecchio furto di dati: è un ricatto di massa",
            "Che hai un virus sul telefono",
            "Che qualcuno che conosci ti sta spiando"
          ],
          correct: 1,
          spiegazione: "Le password rubate in vecchi data breach circolano online. Il truffatore le usa per sembrare credibile. Va cambiata ovunque la usi ancora." },
        { q: "Qualcuno ti ricatta con delle tue foto. Cosa NON conviene fare?",
          options: [
            "Fare screenshot e conservare le prove",
            "Interrompere il contatto e bloccare il profilo",
            "Pagare per far finire tutto",
            "Chiedere aiuto a un adulto o a una persona di fiducia"
          ],
          correct: 2,
          spiegazione: "Pagare non chiude il ricatto: segnala che sei disposto a pagare ancora. Prove, blocco e aiuto sono le mosse giuste." },
        { q: "In Italia, a chi ci si rivolge per denunciare un ricatto online?",
          options: [
            "Alla Polizia Postale",
            "All'amministratore del gruppo dove è iniziato tutto",
            "A nessuno: non è un reato",
            "Al proprio gestore telefonico"
          ],
          correct: 0,
          spiegazione: "La Polizia Postale riceve denunce e segnalazioni anche online. Per bloccare la diffusione di immagini intime ci si può rivolgere anche al Garante privacy." }
      ]
    },

    // ------------------------------------------------------------- 4
    {
      nome: "Malware",
      intro: "Programmi malevoli nascosti in allegati, app e download che sembrano innocui. Rubano dati, spiano o bloccano i file per chiedere un riscatto.",
      esiti: {
        perfetto: "Non ha aperto niente di sospetto. Il dispositivo è pulito.",
        efficace: "Il malware è entrato, ma l'antivirus l'ha fermato. Ha perso solo qualche ora a sistemare.",
        perdite: "Ha dovuto formattare il dispositivo. Una parte dei file non c'era nel backup.",
        truffata: "Il malware ha preso tutto: file bloccati, dati rubati e un riscatto da pagare."
      },
      vittime: [
        { valore: "enorme", nome: "Roberto", eta: 58,
          situazione: "Riceve una \"fattura\" in allegato da un fornitore che non conosce, in formato .zip.",
          storia: "Lavora in uno studio dentistico. Sul computer ci sono le cartelle cliniche di duemila pazienti." },
        { valore: "alto", nome: "Elena", eta: 23,
          situazione: "Cerca un programma di grafica a pagamento e trova una versione \"crackata\" gratis da scaricare.",
          storia: "Sullo stesso computer c'era la tesi, da consegnare tra due settimane, senza nessun backup." },
        { valore: "medio", nome: "Samuele", eta: 17,
          situazione: "Su WhatsApp gli arriva un file \"Foto_festa.apk\" da un numero che non ha salvato.",
          storia: "Sul telefono aveva le chat, le foto degli ultimi tre anni e l'app della banca dei genitori." },
        { valore: "basso", nome: "Rosa", eta: 74,
          situazione: "Mentre legge le notizie sul tablet compare un avviso: \"Il tuo dispositivo è infetto! Scarica subito l'antivirus\".",
          storia: "Usa il tablet solo per le videochiamate con i nipoti. Nessun dato importante." }
      ],
      domande: [
        { q: "Ti arriva su WhatsApp un file \"Foto_festa.apk\". Cos'è?",
          options: [
            "Un'app Android da installare, che può nascondere un malware",
            "Una cartella compressa di foto",
            "Un'immagine in un formato più leggero",
            "Un video da guardare offline"
          ],
          correct: 0,
          spiegazione: "L'estensione .apk indica un'app. Una \"foto\" che chiede di essere installata è quasi sempre una trappola." },
        { q: "Cos'è un ransomware?",
          options: [
            "Un programma che riempie lo schermo di pubblicità",
            "Un programma che rallenta il computer per consumare corrente",
            "Un antivirus gratuito poco affidabile",
            "Un programma che blocca o cripta i tuoi file e chiede un riscatto"
          ],
          correct: 3,
          spiegazione: "Ransom significa riscatto. Il programma che riempie lo schermo di pubblicità si chiama adware." },
        { q: "Dopo un attacco ransomware, cosa ti permette di recuperare i file senza pagare?",
          options: [
            "Riavviare il computer",
            "Un backup recente, salvato su un supporto scollegato o su un cloud con le versioni precedenti",
            "Una password più lunga",
            "Installare un antivirus dopo l'attacco"
          ],
          correct: 1,
          spiegazione: "L'antivirus aiuta a prevenire, ma quando i file sono già cifrati serve una copia pulita. Il backup va tenuto separato, o il ransomware cifra anche quello." },
        { q: "Una pagina web ti avvisa: \"Il tuo telefono è infetto! Scarica subito questo antivirus\". Cosa fai?",
          options: [
            "Scarico l'antivirus: meglio essere prudenti",
            "Chiamo il numero di assistenza indicato nella pagina",
            "Chiudo la pagina: è un falso allarme pensato per farmi installare qualcosa",
            "Inserisco i dati della carta per la versione completa"
          ],
          correct: 2,
          spiegazione: "Un sito non può sapere se il tuo telefono è infetto. Questi avvisi si chiamano scareware: usano la paura per farti scaricare il malware." }
      ]
    }
  ]
};
