Pagamento di un Avviso
======================

Il processo di pagamento di un avviso può essere visto come composto da due fasi distinte:

* la verifica di un avviso, che permette di capire se l'avviso stesso sia ancora valido, o di attualizzare gli importi dovuti
* l'attuazione del pagamento vero e proprio

Entrambe vengono descritte nei capitoli seguenti.

## Verifica dell'Avviso

Il prestatore di servizi di pagamento (PSP) è in possesso di un avviso di pagamento di un utente, obiettivo del PSP è verificare che le informazioni contenute nell’avviso siano ancora attuali (es: l’importo viene attualizzato a quanto effettivamente dovuto al momento della verifica).

Attraverso la lettura del _QR Code_, o attraverso l'inserimento manuale dei dati (`fiscalCode`, `noticeNumber`), si richiedono alla Piattaforma pagoPA, mediante la primitiva `verifyPaymentNotice`​, i dati aggiornati del​l’avviso di pagamento.

![sd_psp_verifica_avviso](../diagrams/sd_psp_verifica_avviso.png)

In risposta alla richiesta la Piattaforma restituisce le informazioni aggiornate dell’avviso di pagamento, tra cui l'importo aggiornato.

La precedente chiamata non ha effetti sullo stato del pagamento, che pertanto resta invariato. Quindi in caso di timeout, errore di connessione, etc. la chiamata può essere nuovamente invocata senza _side effects_.

## Pagamento dell'Avviso

Una volta verificato l'avviso di pagamento è facoltà dell'utente autorizzarne il pagamento. Ciò avviene anzitutto attivando una sessione di pagamento (che evita pagamenti concorrenti dello stesso avviso) e poi effettuando il pagamento vero e proprio (che chiude la sessione).

### Attivazione della sessione di pagamento

Il prestatore di servizi di pagamento (PSP) apre una sessione di pagamento di un avviso tramite la primitiva ​`activatePaymentNotice​`. 

In risposta la piattaforma pagoPA genera il token (`paymentToken`) necessario per eseguire il pagamento e successivamente comunicare l’esito alla piattaforma stessa. La generazione del token ha l'effetto di bloccare la posizione debitoria sulla piattaforma per il tempo indicato nel campo `expiringTime` o, se non specificato, per la sua durata di default (30 minuti) impostata dal sistema. Con questa soluzione si impediscono i pagamenti doppi per la durata del token.

Inoltre vengono restituiti tutti dati della richiesta di pagamento, in particolare quelli necessari per le operazioni di addebito ed accredito (es: importo totale con lista dei conti di accredito e quota parte dell’importo).

I possibili casi in cui non si ottiene una risposta positiva sono:

* Se i dati forniti dal PSP non sono corretti la piattaforma risponde con un `KO`: il PSP non potrà quindi avviare il pagamento (**caso 2**)
* Se risulta aperta una precedente sessione di pagamento la piattaforma risponde con un `KO`: ciò inibisce ad altri PSP l'apertura di sessioni di pagamento concorrenti per lo stesso avviso (**caso 2**)
* Se il PSP non ottiene risposta dalla piattaforma alla richiesta di attivazione della sessione, può avviare un processo di retry (**caso 3**). La chiamata `activatePaymentNotice​` è idempotente (prevede il parametro opzionale `idempotencyKey`), ovvero a fronte di un'invocazione con la stessa chiave la piattaforma risponderà con il medesimo output.

### Pagamento

Il prestatore di servizi di pagamento (PSP) effettua l’addebito dell’importo e notifica l’operazione alla piattaforma tramite la primitiva `sendPaymentOutcome`​, specificando in particolare:

* `paymentToken` : token della sessione di pagamento
* `fee` : commissioni applicate
* `paymentMethod` : strumento di pagamento utilizzato
* `payer` _opzionale_ : identificativo dell’utente che ha effettuato l’operazione
* `applicationDate` : data applicativa
* `transferDate` : data di accredito

![sd_psp_pagamento_avviso-outcome-ok](../diagrams/sd_psp_pagamento_avviso-outcome-ok-01.png)

Il PSP ha l'obbligo di notificare alla piattaforma, entro il tempo di validità del `token`, l'esito sia in caso di pagamento avvenuto con successo (esito positivo) che in caso di pagamento non avvenuto (esito negativo). E' inoltre necessario assicurarsi che la piattaforma abbia ricevuto l'esito del pagamento attraverso il corretto ottenimento della _response_ della primitiva sopra citata.

Si osservi che è compito del PSP fare il possibile per notificare alla piattaforma l'esito del pagamento entro la scadenza del _token_. In particolare si hanno benefici sia per l'utente finale che per l'EC:

* in caso di esito negativo l'utente finale potrà avviare subito una nuova sessione di pagamento;
* in caso di esito positivo si eliminano le possibilità di pagamento doppio.

Il PSP ha quindi l’obbligo, in caso di mancato recapito dell'esito, di avviare un _processo di retry_.

Se il retry avviene **entro la scadenza** del token della sessione di pagamento non si identificano potenziali problemi. Qualora, invece, il processo di retry si completa **oltre la scadenza** del token il PSP otterrà in risposta che il token è scaduto (oss: ci si aspetta un numero ridotto di tali casi, che vengono comunque monitorati).

Si identificano i seguenti casi:

* incasso effettuato e timeout sull'invio dell'esito (**caso 4**)
* incasso non effettuato e timeout sull'invio dell'esito (**caso 5**)

### Eccezioni 

Nel seguito vengono illustrate le eccezioni specificate in precedenza (casi 2, 3, 4 e 5).

**Caso 2 - attivazione non possibile**

![sd_psp_pagamento_avviso-attivazione-ko](../diagrams/sd_psp_pagamento_avviso-attivazione-ko-02.png)

La piattaforma notifica al PSP, attraverso il `KO`, l'impossibilità di attivare il pagamento con i parametri ricevuti. Il PSP deve notificare all'utente di non poter procedere al pagamento, con opportuna motivazione secondo il messaggio di errore ottenuto dal sistema. Es:

* Pagamento in Corso
* Importo Errato
* Avviso di Pagamento Pagato
* Avviso Non valido
* Avviso Non Trovato


**Caso 3 - timeout sull'attivazione**

![sd_psp_pagamento_avviso-attivazione-timeout](../diagrams/sd_psp_pagamento_avviso-attivazione-timeout-03.png)

Il PSP può avviare un processo di retry in caso di mancata risposta da parte della Piattaforma.


**Caso 4 - incasso effettuato e timeout su invio dell'esito**

![sd_psp_pagamento_avviso-timeout-su-outcome-positivo](../diagrams/sd_psp_pagamento_avviso-timeout-su-outcome-positivo-04.png)

Nel caso in cui il token non sia ancora scaduto la piattaforma, rispondendo con un `OK` al PSP, dà conferma del fatto che il pagamento non potrà subire variazioni.

Nel caso, invece, che la conferma da parte del PSP arriva dopo la scadenza del token ed il pagamento non abbia subito variazioni allora la piattaforma avvierà un processo di retry verso l'EC.

Infine, se la conferma da parte del PSP arriva dopo la scadenza del token ed il pagamento è stato nel frattempo già effettuato allora la piattaforma risponde al PSP con un `PPT_PAGAMENTO_DUPLICATO`. In tal caso si avranno dei c.d. "cod.9" ad indicare questa particolare casistica.


**Caso 5 - incasso non effettuato e timeout su invio dell'esito**

![sd_psp_pagamento_avviso-timeout-su-outcome-negativo](../diagrams/sd_psp_pagamento_avviso-timeout-su-outcome-negativo-05.png)

Nel caso in cui il token non sia ancora scaduto la piattaforma, rispondendo con un `OK` all'outcome negativo del PSP, dà conferma del fatto che ha correttamente ricevuto l'informazione.

Nel caso, invece, che la conferma del mancato pagamento da parte del PSP arriva dopo la scadenza del token allora la piattaforma riceve comunque questa informazione e risponderà con il codice opportuno.



