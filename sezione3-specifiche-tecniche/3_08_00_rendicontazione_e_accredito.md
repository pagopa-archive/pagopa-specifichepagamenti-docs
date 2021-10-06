# Rendicontazione e Accredito

Per ogni pagamento avvenuto, il PSP si impegna a riversare le somme incassate verso gli IBAN contenuti nelle richieste di pagamento tramite disposizione di SCT cumulativi di tutti i pagamenti verso il medesimo conto corrente della PA.
Inoltre, a fronte di un pagamento avvenuto in data D, il PSP in data D+2 deve inviare un Flusso di Rendicontazione (FdR).

Il Flusso di Rendicontazione rappresenta il dettaglio dei pagamenti contenuti all'interno del medesimo SCT identificato (per mezzo del campo AT-05) con l'identificativo del flusso di rendicontazione.

## Pagamento tramite PSP

Nel caso di un pagamento effettuato direttamente tramite i servizi del PSP (si veda Sez-III "Pagamento di un Avviso"), a fronte di un addebito eseguito dal PSP, descritto dalla primitiva `sendPaymentOutcome`, nel corrispondente Flusso di Rendicontazione il campo `datiSingoloPagamento` viene così composto:

* `identificativoUnivocoVersamento`: IUV della richiesta di pagamento, il medesimo restituito all’interno della primitiva getPayment da parte dell’EC e contenuto all’interno della ricevuta acquisita dall’Ente Beneficiario.
* `identificativoUnivocoRiscossione`: pari al paymentToken generato dalla piattaforma e riportato all’interno della ricevuta acquisita dall’Ente Beneficiario.
* `indiceDatiSingoloPagamento`: identificativo della porzione dell’importo indicato all’interno della ricevuta
* `singoloImportoPagato`: importo parziale
* `codiceEsitoSingoloPagamento`: 0
* `dataEsitoSingoloPagamento`: data del pagamento riportata all’interno della ricevuta

Pertanto, qualsiasi Ente Beneficiario è in grado di riconciliare il pagamento ricercando per ogni _datoSingoloPagamento_ la corrispondente ricevuta identificata da _paymentToken_ e _IUV_, selezionando l’importo parziale corrispondente al campo _indiceDatiSingoloPagamento_.

### Pagamento Bollettino Postale

Nel caso di un pagamento multi-beneficiario effettuato tramite la sezione "Bollettino Postale" presente all'interno di un avviso di pagamento, a fronte di un addebito eseguito dal PSP Poste Italiane è possibile che i corrispettivi FdR per gli Enti Beneficiari vengano eseguiti da due PSP distinti.

In particolare :

* i versamenti destinati a conti correnti postali verranno eseguiti dal PSP Poste Italiane

* i versamenti destinati a conti correnti bancari verranno eseguiti dal PSP Postepay.

In conclusione, a fronte di un un'inca _receipt_ dove il PSP attestante è identificato come Poste Italiane potrebbero corrispondere ( in base alla composizione dei versamenti ) due FdR forniti da due PSP distinti.

La fase di riconciliazione non viene modificata in quanto i due enti beneficiari saranno sempre in grado di riconciliare ricercando per ogni _datoSingoloPagamento_ la corrispondente ricevuta identificata da _paymentToken_ e _IUV_, selezionando l’importo parziale corrispondente al campo _indiceDatiSingoloPagamento_.

## Pagamento in Wallet

Nel caso di un pagamento effettuato tramite i servizi di pagamento resi disponibili all'interno del wallet (WISP), a fronte di un addebito eseguito dal PSP, il corrispondente Flusso di Rendicontazione conterrà il campo `datiSingoloPagamento` così composto:

* `identificativoUnivocoVersamento`: IUV della richiesta di pagamento, il medesimo contenuto all'interno della RPT ricevuta
* `identificativoUnivocoRiscossione`: il medesimo contenuto all'interno della RT emessa dal PSP
* `singoloImportoPagato`: importo parziale
* `codiceEsitoSingoloPagamento`: 0
* `dataEsitoSingoloPagamento`: data del pagamento riportata all’interno della ricevuta.

## Nota _codiceEsitoSingoloPagamento_

E' importante evidenziare le possibili casistiche in funzione dell'esito della `sendPaymentOutcome()`, insieme al suo valore semantico, in virtù della retrocompatibilità nella generazione del FdR:

* `OK` => _codiceEsitoSingoloPagamento_ = **0**
	* EC configurato con il precedente modello: è possibile consegnare l'RT all'EC
	* EC configurato con il nuovo modello: è possibile consegnare la Receipt all'EC
* `PPT_TOKEN_SCADUTO` => _codiceEsitoSingoloPagamento_ = **9**
	* EC configurato con il precedente modello: è possibile consegnare l'RT all'EC (solo nel caso in cui le Retry vadano a buon fine)
	* EC configurato con il nuovo modello: è possibile consegnare la Receipt all'EC (a meno che il pagamento non si effettuato sul modello on-line)
* `PPT_PAGAMENTO_DUPLICATO` => _codiceEsitoSingoloPagamento_ = **9**
	* non è possibile consegnare l'RT/Receipt all'EC

Infine se non è possibile ottenere l'esito prima della generazione dei FdR allora non sarà possibile consegnare l'RT/Receipt all'EC. A tal proposito è importate sottolineare due considerazioni:

* si ritiene questa ultima casistica molto ridotta in quanto la durata dal token (al netto del limite superiore) è impostata dal PSP stesso in base alle proprie necessità e circostanze;
* a livello di servizio PagoPA SpA attua un monitoraggio su tali eventi con l'obiettivo di minimizzarli con opportune azioni.
