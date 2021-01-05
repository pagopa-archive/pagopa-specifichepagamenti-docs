Pagamento On-Line
=================================

Tramite la piattaforma pagoPA, un EC può innescare un pagamento on-line di uno o più posizioni debitorie (carrelli).

![pagamento on line](../diagrams/sd_pagamento_online.png)

1. l'EC compone il carrello di richieste di pagamento delle posizioni debitorie tramite la primitiva nodoInviaCarrelloRPT. Ogni RPT contenuta all'interno del messaggio descrive il pagamento di una posizione debitoria.
2. la piattaforma crea una sessione di pagamento
3. la piattaforma pagoPA restituisce la checkout _url_ a cui rendirizzare il browser dell'utente per eseguire il pagamento.
4. Il browser dell'utente viene redirezionato verso la url ottenuta corredandola eventualmente dei _query parameter_ di lingua e logo.
5. Viene mostrata la landingPage del WISP
6. L'utente naviga la webapp denominata WISP per l'autenticazione  e la selezione dello strumento di pagamento. E' possibile eseguire operazioni di pagamento sia in modalità anomina (inserendo esclusivamente una mail) oppure in modalità registrata utilizzando credenziali SPID.
7. viene eseguito il pagamento utilizzando lo strumento utilizzato.
8. Al termine delle operazioni on-line, l'utente viene re-indirizzato sulla pagina dell'EC impostata in configurazione (vedi _link_ ) corredata dall'esito dell'operazione.
9. l'EC riceve inoltre una ricevuta telematica che descrive l'intera operazione di pagamento.
10. l'EC comunica la ricezione della ricevuta.
