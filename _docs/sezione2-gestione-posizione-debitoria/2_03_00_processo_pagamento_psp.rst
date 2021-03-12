Processo di pagamento attivato presso il Prestatore di Servizi di Pagamento
===========================================================================

Questo processo prevede che l’esecuzione del pagamento avvenga presso le
infrastrutture messe a disposizione dal PSP quali, ad esempio, sportelli
ATM, applicazioni di *Home banking* e *mobile* *payment*, uffici
postali, punti della rete di vendita dei generi di Monopolio (Tabaccai),
SISAL e Lottomatica, casse predisposte presso la Grande Distribuzione
Organizzata, etc.

L’acquisizione delle informazioni necessarie per colloquiare con la
piattaforma sono contenute all’interno di un QR-CODE presente
all’interno dell’avviso di pagamento che può facilitare l’inserimento
dei dati. Le stesse informazioni sono presenti in chiaro all’interno
dell’avviso e consentono un inserimento manuale dei dati da parte di un
utente (o operatore).

Vengono rese disponibili al PSP due funzioni principali:

-  verifica dell’avviso di pagamento
-  pagamento di un avviso di pagamento

Verifica di un avviso di pagamento
----------------------------------

Attraverso questa funzione il PSP è in grado di acquisire informazioni
di dettaglio relative alle modalità di pagamento e l’importo
dell’avviso.

Pagamento di un avviso di pagamento
-----------------------------------

Attraverso tale funzione il PSP è in grado di aprire una sessione di
pagamento che preventivamente bloccherà i tentativi di pagamento di
altri PSP per il medesimo avviso. Attraverso la medesima chiamata, il
PSP acquisisce l’importo del pagamento ed i dati necessari per il
riversamento della somma, in particolare per ogni versamento:

-  importo parziale
-  codice fiscale dell’Ente
-  IBAN

A seguito dell’operazione di incasso, il PSP notifica alla Piattaforma
pagoPA l’esito del pagamento.

*Nota*: per agevolare l’integrazione dei diversi sistemi di incasso, la
sessione di pagamento può essere richiesta con un tempo limite. Alla
scadenza di tale tempo, il pagamento si considererà non avvenuto.

Al termine dell’operazione il PSP ,in linea con le norme vigenti,
consegna un’attestazione di pagamento la quale dovrà contenere (in
aggiunta a quanto previsto dalle normative) l’identificativo della
sessione di pagamento ottenuto durante le operazioni di pagamento
(*paymentToken*)

Quindi, l’EC riceverà contestualmente una ricevuta telematica
dell’operazione notificata dal PSP (solo in caso di pagamento concluso
con esito positivo).

Attestazione di pagamento
-------------------------

Le copie analogiche prodotte dal PSP a fronte di un pagamento devono
necessariamente contenere almeno le seguenti informazioni:

-  Data e ora dell’operazione
-  Codice fiscale e denominazione dell’EC
-  Identificativo univoco versamento (IUV) - Identificativo univoco
   assegnato dall’EC
-  Identificativo del PSP (es: ragione sociale, codice fiscale, etc)
-  Numero univoco del pagamento (*paymentToken*)
-  Importo dell’operazione
-  Causale del versamento

Trasmissione dati di accredito e rendicontazione
------------------------------------------------

Il PSP accrediterà le somme sui conti dell’EC, ricevuti durante la
creazione della sessione di pagamento, per mezzo di bonifico SCT il
giorno successivo (D+1); mentre entro due giorni (D+2) invierà il flusso
di rendicontazione dettagliando l’elenco puntuale dei pagamenti
contenuti all’interno dei diversi bonifici effettuati.
