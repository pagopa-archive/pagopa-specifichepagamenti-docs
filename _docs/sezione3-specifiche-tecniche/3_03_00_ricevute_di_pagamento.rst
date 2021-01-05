Ricevute di pagamento
=====================

A fronte di qualsiasi pagamento avvenuto sulla piattaforma viene
generata e notificata tempestivamente una ricevuta che attesta il
pagamento avvenuto con i riferimenti alla posizione debitoria e con i
dettagli.

Le ricevute vengono inviate:

-  nel caso di pagamento online alla stazione richiedente del pagamento
-  nel caso di pagamento tramite avviso di pagamento alla stazione
   indicata all’interno dell’avviso
-  a tutte le stazioni identificate come “broadcast” qualora
   l’ente-beneficiario contenuto all’interno del pagamneto non sia
   ssociato alle stazioni descritte precedentemente.

Per poter ricevere tali ricevute, l’EC deve disporre dell’operazione
*sendRT* e *paaInviaRT*.

La piattaforma tenterà per 5 volte di inviare ls ricevuta all’EC. In
caso di mancata notifica della ricevuta verrà attivato il tavolo
operativo ed eventualmente ripristinata l’operazione di invio.

Nota : le ricevute non possono essere rifiutate, l’esistenza della
ricevuta stessa attesta l’avvenuto pagamento secondo i processi
descritti e notifica future operazioni di accreditamento. Eventuali
storni/annulli dovranno essere gestiti direttamente dall’EC.
