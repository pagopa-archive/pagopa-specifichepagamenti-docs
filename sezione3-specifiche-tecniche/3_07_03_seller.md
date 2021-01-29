
## Banca Seller
`[TBD da ricontrollare ]`
MyBank compare come un unico strumento di pagamento all’interno della componente WISP del sistema pagoPA. La Banca Buyer viene selezionata dall’utente dalla lista delle banche che offrono il servizio MyBank, mentre la Banca Seller viene proposta in maniera automatica tramite un algoritmo (`[TBD vedi Selezione della Banca Seller]`), l’utente potrà eventualmente rifiutare la selezione proposta dal sistema ed effettuare una scelta dalla lista dei PSP che offrono il servizio di banca seller.

### Workflow di pagamento

1. L’utente procedere come consueto all’autenticazione nel WISP prima di procedere con il pagamento.
2. All’interno del WISP l’utente trova esposto il servizio MyBank con il relativo logo; il servizio non ha associato alcun esplicito riferimento al costo dell’operazione.
3. Selezionato il servizio MyBank viene presentata la pagina di selezione della banca Buyer. L’utente può ricercare e selezionare la propria banca da una lista, oppure può digitare la denominazione della propria banca in modo che la lista delle banche disponibili venga  dinamicamente aggiornata (essa viene mostrata nella lingua selezionata dall’utente in fase di accesso).
4. Una volta selezionata la banca buyer, il sistema presenta una pagina di riepilogo che mostrerà il logo MyBank, la banca Seller proposta dal sistema per inizializzare la transazione ed il costo della commissione richiesta per il servizio. All’utente è sempre concessa la possibilità di modificare la scelta della Banca Seller proposta dal sistema accedendo a un'apposita schermata che mostra le Banche Seller disponibili ed i costi di commissione richiesti. Si noti che il costo della commissione visualizzato è quello richiesto dalla Banca Seller (l’utente viene avvisato che il costo complessivo _è comprensivo_ anche delle commissioni applicate dalla Banca Buyer)
5. Su pressione del tasto "continua" nella pagina di riepilogo, l’utente viene indirizzato direttamente presso il sito web della Banca Buyer selezionata per autorizzare il pagamento. La Banca Seller riceve dal sistema i seguenti messaggi: `[TBD occorre dare tutti i dettagli qui ?]`
	* `pspInviaCarrelloRPT` con specificato all’interno del parametro `parametriProfiloPagamento` il campo `ValidationServiceID` con il valore associato alla selezione della Banca Buyer da parte dell’utente.
	* redirect verso il servizio web esposto dal servizio MyBank della banca Seller selezionata specificando all’interno dei parametri del canale. Durante la redirect viene utilizzato il medesimo `parametriProfiloPagamento` inviato nella primitiva `pspInviaCarrelloRPT`.
6. Il servizio web esposto dalla Banca Seller deve elaborare i dati ricevuti ed inoltrare automaticamente il Browser dell’utente verso la Banca Buyer istruendo il pagamento MyBank, dove l’utente segue tutti i passi necessari per poter autorizzare il pagamento.
7. Concluso il pagamento, la Banca Buyer effettua un redirect sul portale della Banca Seller la quale, preso nota dell’esito della transazione effettua redirect verso il WISP comunicando l’esito della transazione (OK o KO).
8. Il WISP mostra una pagina di riepilogo del pagamento avvenuto evidenziandone l’esito.
9. La Banca Seller provvede, in base all’esito ricevuto, ad emettere una RT verso l’EC.
10. La Banca Seller provvederà, in base all’esito ricevuto, ad emettere il flusso di rendicontazione entro D+2.

### Workflow di riconciliazione

Il servizio di pagamento MyBank, non influisce sul ciclo di riconciliazione del pagamento specificato nelle linee guida pagoPA `[TBD SANP ?]`.

L’introduzione del servizio di pagamento MyBank introduce all’interno del flusso di pagamento un ulteriore soggetto (Banca Buyer) che genera un SCT verso la Banca Seller. I tempi di istruzione e riversamento di tale SCT non devono compromettere la tempistica del normale workflow di riconciliazione di pagoPA. Definito con:

* `P`: il pagamento dovuto verso l’EC da parte dell’utente
* `X`: la commissione pubblicata su pagoPA del servizio di Banca Seller
* `Y`: la commissione applicata dalla Banca Buyer per l’esecuzione del bonifico (definita negli accordi tra l’utente e la propria banca)

Allora: 

* La Banca Seller istruirà un pagamento tramite MyBank alla Banca Buyer pari a `P+X`
* La Banca Buyer mostrerà all’utente il _costo totale dell’operazione_, pari a` P+X+Y`
* La Banca Buyer eseguirà un bonifico pari a `P+X` verso un conto tecnico della Banca Seller
* La Banca Seller eseguirà un bonifico pari a `P` verso l’EC (eventualmente cumulativo)

### Redirect HTTP dal WISP al servizio Banca Seller 

Il Servizio offerto dalla Banca Seller viene richiamato con un URL composto nel seguente modo:

`<urlPortalePSP>?[idDominio=<identificativoDominio>]&cfEnteCreditore=<identificativoDominio>IDVS=<ValidationServiceID>&<parametriPagamentoImmediato>&[idCarrello=<identificativoCarrello>][&lang=it]`
	
Dove:

* `urlPortalePSP` - è lo URL del Portale del Prestatore del Servizio Banca Seller. Viene indicato all’interno della configurazione del servizio (Catalogo Dati Informativi / urlPaymentService)
* `idDominio` - identificativo dell’EC che ha inviato la nodoInviaRPT. E' opzionale per motivi di retrocompatibilità, definito dalla presenza o meno di nodoInviaRPT.  
* `cfEnteCreditore` - identificativo dell’EC che ha eseguito la richiesta di pagamento. Dovrebbe coincidere con almeno un EC all’interno del carrello RPT. `[TBD "Dovrebbe" o "Deve" ?]`
* `IDVS` - (identificativo validation service) corrisponde al codice MyBank "Participant ID"
* `parametriPagamentoImmediato` - query string contenente parametri specifici del PSP nel formato `idBruciatura=<valore>`. Viene restituita dal PSP all’interno della response alla primitiva pspInviaCarrelloRPT
* `idCarrello` - identificativo del carrello inviato tramite la primitiva pspInviaCarrelloRPT, è 
opzionale per motivi di retrocompatibilità
* `lang` - specifica la lingua scelta dall'utilizzatore finale, secondo il formato RFC 5646 (default lingua italia)

### Response alla pspInviaCarrelloRPT / pspInviaRPT

La response alla primitiva` pspInviaCarrelloRPT`, o `pspInviaRPT`, deve contenere il parametro `parametriPagamentoImmediato` nel formato `idBruciatura=<valore>`. Tale valore deve essere utilizzato al PSP affinché possa correlare la richiesta effettuata dal back-end con la relativa redirect al servizio.

```
<esitoComplessivoOperazione>OK</esitoComplessivoOperazione>
<identificativoCarrello>cart15978256934316186</identificativoCarrello>  // è inteso obbligatorio per questo modello ma opzionale nell'interfaccia per retrocompatibilità.
<parametriPagamentoImmediato>idBruciatura=15978256934316186</parametriPagamentoImmediato>            
...
```

### HTTP redirect di ritorno dal PSP verso il WISP

A conclusione delle operazioni di pagamento, il PSP deve chiamare la pagina del WISP tramite un URL composto nel seguente modo::

`<urlWeb-FESP>?[idDominio=<identificativoDominio>&]<parametriPagamentoImmediato> [&idCarrello=<identificativoCarrello>]&<codiceRitornoPSP>`

Dove

* `urlWeb-FESP` - è lo URL della componente Web pagoPA
* `parametriPagamentoImmediato` - query string contenente parametri specifici del PSP, deve contenere il medesimo valore della redirect verso il servizio del PSP
* `idCarrello` - identificativo del carrello di cui si indica l’esito, deve contenere il medesimo valore della redirect verso il servizio del PSP
* `codiceRitornoPSP` - definisce l’esito dell’operazione, può assumere i valori: OK | KO | DIFFERITO


### Catalogo Dati Informativi

`[TBD riversiamo qui il contenuto del doc "MyBank CDI Update" ? - https://docs.google.com/document/d/16-Kl8jyItkeQqNq7l62kMkt1u1VXn7XB7QNS2_C_yjw]`










