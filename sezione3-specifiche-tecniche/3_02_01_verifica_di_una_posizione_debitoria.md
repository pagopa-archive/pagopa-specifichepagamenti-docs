Verifica di una posizione debitoria
===================================

Un EC connesso alla piattaforma pagoPA deve offrire il servizio di interrogazione delle proprie posizioni  debitorie con la primitiva *paaVerifyPaymentNotice*.

Ogni posizione debitoria ottenuta può contenere più opzioni di pagamento, ogni opzione di pagamento definisce un importo, una data di scadenza, ed una descrizione.

I casi più comuni sono:

* Rateizzazione della posizione debitoria
* Opzione multipla di pagamento
* Pignoramenti / Acconti

## Rateizzazione della posizione debitoria

In tale scenario, il medesimo avviso di pagamento fa riferimento ad una posizione debitoria che può essere pagata in una soluzione unica oppure con un piano rateale. Si prenda ad esempio il pagamento del tributo TARI dell'anno 2021 per il quale il Comune vuole mettere a disposizione le seguenti opzioni di pagamento:

* rata unica pari a 100 EUR con scadenza entro 31/03/2021
* prima rata semestrale, pari a 50 EUR con scadenza 30/06/2021
* seconda rata semestrale, pari a 50 EUR con scadenza 31/12/2021

Attraverso la primitiva *paaVerifyPaymentNotice* l'EC viene interrogato per verificare quali sono contestualmente le opzioni disponibili al cittadino.

Nell'esempio, se interrogato in data antecedente al 31/03/2021, la risposta dovrebbe contenere solamente le opzioni "rata unica" e "prima rata semestrale". Nel caso in cui l'utente non effettui alcun pagamento entro la data di scadenza della rata unica, qualora l'EC venisse interrogato in data successiva al 31/03/2021, l'unica opzione disponibile sarebbe la prima rata semestrale (l'opzione rata unica risulterebbe scaduta e l'opzione di pagamento seconda rata dovrebbe essere mostrata solamente dopo il pagamento della prima rata).

Nel caso invece l'utente abbia pagato la rata unica, da quel momento in poi la posizione debitoria risulterebbe pagata e quindi senza alcun opzione di pagamento.

Nel caso in cui l'utente effettui il pagamento della prima rata, l'unica opzione disponibile (dal momento della ricezione della ricevuta) sarà la seconda rata semestrale.

## Opzione Multipla di Pagamento

In tale scenario il medesimo avviso di pagamento fa riferimento ad una posizione debitoria il cui ammontare può variare a seconda delle condizioni al contorno.

Prendiamo ad esempio il caso di un pagamento di una multa stradale che tipicamente prevede tre opzioni di pagamento:

* pagamento scontato del 30%, se pagato entro 5 giorni dalla notifica
* pagamento dell'importo totale riportato nell'avviso se pagato entro 60 giorni dalla notifica
* pagamento con more se pagamento oltre i 60 giorni dalla notifica

Solitamente non essendo nota a priori la data di notifica, la data di scadenza delle opzioni di pagamento è puramente indicativa.

Attraverso la *paaVerifyPaymentNotice* verranno quindi proposte tutte le opzioni disponibili fino a quando non si verifichi uno dei seguenti eventi:

* viene notificata una ricevuta di pagamento, pertanto la posizione debitoria risulta chiusa e nessuna opzione di pagamento sarà più disponibile.
* l'EC diviene in possesso della data di notifica, pertanto può aggiornare le opzioni di pagamento inserendo la data di scadenza corretta per ognuna delle opzioni.

## Pignoramenti / Acconti

In tale scenario l'avviso di pagamento fa riferimento ad una posizione debitoria la quale indica un importo figurativo, ma ammette la possibilità che sia l'utente, di volta in volta, a definire l'importo da versare. La posizione debitoria si considererà conclusa una volta raggiunta la somma totale riportata all'interno dell'avviso `[TBD è comunque cura dell'EC aggiornare la Posizione Debitoria secondo tali logiche]`

Si prenda ad esempio il caso di un pignoramento, dove l'avviso di pagamento viene notificato, ma l'utente ha disponibilità solo parziale dell'importo richiesto.

In tal caso esiste un'unica opzione di pagamento che specifica un importo totale che può ammettere valori minori al dato mostrato. Pertanto una qualsiasi richiesta di pagamento verrà accettata per importi anche diversi (minori o uguali) da quello riportato all'interno della risposta della chiamata.

# paaVerificaRPT

L'interfaccia *paaVerificaRPT* già contenuta nelle precedenti versioni, continuerà ad essere utilizzata e supportata sino al 31/12/2021.
