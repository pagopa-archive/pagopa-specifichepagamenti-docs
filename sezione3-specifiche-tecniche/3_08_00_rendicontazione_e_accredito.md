Rendicontazione e Accredito
===========================

`[TBD rivedere anche in base a quanto presente in ./3_04_00_rendicontazione_e_accredito.md]`
`[TBD ## 3_08_01 Descrizione]`
`[TBD ## 3_08_01 Invio dei Flussi di Rendicontazione]`

`[TBD ripreso da "Monografia - processo di pagamento presso PSP con Ente multi-beneficiario"]`

A fronte di un pagamento avvenuto in data D, il PSP in data D+2 deve inviare un Flusso di Riconciliazione.

A fronte di un addebito eseguito dal PSP, descritto dalla primitiva `sendPaymentOutcome`, il corrispondente flusso di rendicontazione conterrà il campo `datiSingoloPagamento` così composto:

* `identificativoUnivocoVersamento`: IUV della richiesta di pagamento, il medesimo restituito all’interno della primitiva getPayment da parte dell’EC e contenuto all’interno della ricevuta acquisita dall’Ente Beneficiario.
* `identificativoUnivocoRiscossione`: pari al paymentToken generato dalla piattaforma e riportato all’interno della ricevuta acquisita dall’Ente Beneficiario.
	* indiceDatiSingoloPagamento: identificativo della porzione dell’importo indicato all’interno della ricevuta
* `singoloImportoPagato`: importo parziale
* `codiceEsitoSingoloPagamento`: 1
* `dataEsitoSingoloPagamento`: data del pagamento riportata all’interno della ricevuta.

Pertanto, qualsiasi Ente Beneficiario è in grado di riconciliare il pagamento ricercando per ogni _datoSingoloPagamento_ la corrispondente ricevuta identificata da _paymentToken_ e _IUV_, selezionando l’importo parziale corrispondente al campo _indiceDatiSingoloPagamento_.
