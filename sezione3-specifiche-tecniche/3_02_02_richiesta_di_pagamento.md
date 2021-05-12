Richiesta di un pagamento 
=========================

Un EC connesso alla Piattaforma pagoPA deve offrire un servizio che restituisce un pagamento legato ad una posizione debitoria attraverso la primitiva *paGetPayment*.

Ogni richiesta viene specificata attraverso il parametro `notice_number` ed il parametro `transferType` che definisce il tipo di accredito che il PSP vorrebbe disporre:

* se `transferType=POSTAL` allora l'EC restituisce - se disponibili - con tutti i conti correnti postali presenti nei transfer; ed in particolare il conto corrente postale dell'EC "primario" deve essere il medesimo definito nel data matrix del bollettino postale
* altrimenti l'EC restituisce, a propria discrezione, qualsiasi tipo di conto corrente

La richiesta specifica anche il parametro `amount` che potrebbe o meno essere già stato attualizzato con la precedente *paVerifyPaymentNotice*; nel caso questo parametro non sia presente o sia errato, sarà l'EC ad impostare l'importo attualizzato.

I parametri `retentionDate` e `lastPayment` vengono ignorati dalla piattaforma (essendo riservati ad un uso futuro).

In risposta, l'EC restituisce tutti i dati necessari per il pagamento ed autorizza la piattaforma a proseguire con l'eventuale incasso ed accreditamento delle somme.

Si noti che dal punto di vista della piattaforma viene generato un _payment token_:

* se l'EC è configurato con il precedente modello il valore del token corrisponderà al parametro `CCP`
* se l'EC è configurato con il nuovo modello tale valore non è noto. A conclusione del pagamento l'EC riceverà una _receipt_ identificata in maniera univoca (_receiptId_) con il valore del _payment token_ utilizzato durante il pagamento.

## paaAttivaRPT

La primitiva *paaAttivaRPT* - già contenuta nelle precedenti versioni - continuerà ad essere utilizzata e supportata sino al 31/12/2021.

![paaAttivaRPT](../diagrams/sd_paaAttivaRPT.png) 

1. la piattaforma richiede un'occorrenza di pagamento (distinta attraverso un codice di contesto pagamento) all'EC tramite la primitiva *paaAttivaRPT* specificando l'avviso di pagamento (identificato da IUV e CF).
2. l'EC verifica lo stato della posizione debitoria correlata e restituisce i dati necessari per il pagamento (importo ed iban di accreditamento)
3. successivamente l'EC invia una richiesta di pagamento (RPT) contenente tutti i dettagli del pagamento.
