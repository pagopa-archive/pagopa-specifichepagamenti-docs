Richiesta di un pagamento
=========================

Un EC connesso alla piattaforma deve offire un servizio il quale
restituisce un pagamento legato ad una posizione debitoria attraverso la
funzione *getPayment*

Ogni richiesta viene specificata attraverso i paramentri *amount* e
*due_date* che sono stati restituiti dalla *paaVerifyPayment* ed un
altro paramentro *transferType* che definisce il tipo di accredito che
il PSP vorrebbe disporre ( attualmente l’unica opzione è la necessità di
un conto corrente postale).

Nel caso questi paramentri non siano presenti, sarà l’EC ad impostare
l’importo attualizzato.

In risposta, l’EC resitutisce tutti i dati necessari per il pagamento ed
autorizza la piattaforma a proseguire con l’eventuale incasso ed
accreditamento delle somme. In aggiunta, l’EC può definire una data di
validità delle informazioni inviate. Se presente, la piattaforma sarà
autorizzata a gestire autonomamente richieste similari senza
necessariamente contattare l’EC.
