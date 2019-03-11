+-----------------------------------------------------------------------+
| |AGID_logo_carta_intestata-02.png|                                    |
+-----------------------------------------------------------------------+

+-------------------------------------------+
| **Capitolo 3. IL NODO DEI PAGAMENTI-SPC** |
+-------------------------------------------+

Il Nodo dei Pagamenti-SPC
=========================

Il Nodo dei Pagamenti-SPC è un’infrastruttura abilitante a disposizione
di tutti gli Enti Creditori per fornire servizi e rendere disponibili
funzioni di cooperazione applicativa tra i differenti soggetti - Enti
Creditori e prestatori di servizi di pagamento - rappresentabili come
Mittenti o Destinatari di uno scambio di “messaggi” (documenti
informatici) tra i vari attori in una logica di modello “molti-a-molti”.

La Pubblica Amministrazione, in questi termini, si configura come un
unico soggetto nei confronti del sistema dei pagamenti (gruppo unico di
acquisto) con benefici non solo nel miglioramento del servizio
all’utilizzatore finale e nella efficienza delle procedure di back
office interne alle amministrazioni ma anche nelle migliori condizioni
applicabili.

La piattaforma può essere utilizzata, su base volontaria, anche dai
gestori di pubblici servizi.

Gli Enti Creditori - PA e gestori di pubblici servizi - possono inoltre
utilizzare soggetti pubblici o privati, definiti “intermediari”, per
gestire i servizi di front-office e di interconnessione al Nodo dei
Pagamenti-SPC, compresi quindi quelli di pagamento informatico, offerti
agli utenti dell’ente.

I benefici nell’utilizzo del Nodo dei Pagamenti-SPC si estendono anche
ai prestatori di servizi di pagamento che possono in tal modo
implementare in modo uniforme il colloquio telematico relativo ai
servizi di pagamento.

Caratteristiche generali del Nodo dei Pagamenti-SPC
---------------------------------------------------
.. _Caratteristiche generali del Nodo dei Pagamenti-SPC:

Il Nodo dei Pagamenti-SPC è strutturato per rispondere alle necessità
di:

-  consentire l’esecuzione delle operazioni di pagamento previste dalle
   Linee guida di cui al comma 4 dell’articolo 5 del CAD;

-  adottare gli strumenti di pagamento esistenti, con particolare
   riferimento a quelli previsti dalla SEPA e comunque nel rispetto
   delle regole dettate dalla PSD;

-  permettere all’utilizzatore finale di poter eseguire il pagamento
   attraverso tutti i canali esistenti (ATM, POS, Internet Banking,
   uffici postali, chioschi, Lottomatica, Grande Distribuzione
   Organizzata, dispositivi mobili, ecc.) oppure direttamente per
   mezzo delle applicazioni messe a disposizione dall’Ente
   Creditore;

-  configurarsi come una componente del SPC ed adottarne gli standard di
   sicurezza e cooperazione per assicurare il colloquio con ogni
   Prestatore di Servizi di Pagamento (sistema bancario, Poste
   Italiane e altri prestatori di servizi di pagamento), senza
   peraltro obbligare il PSP ad aderire al Sistema pubblico di
   connettività;

-  interfacciarsi con i circuiti di pagamento esistenti;

-  permettere agli aderenti al sistema di avvalersi di terze parti per
   gestire i servizi;

-  mantenere inalterata l’attuale gestione dei mandati di pagamento per
   le PA centrali, garantendone l’evoluzione secondo i piani concordati
   con la Ragioneria Generale dello Stato e Banca d’Italia.

Il Nodo dei Pagamenti-SPC definisce modalità standard per la gestione
dei flussi finanziari:

-  adotta gli standard XML ISO 20022 per i tracciati dei flussi
   finanziari correlati alle singole operazioni;

-  introduce uno standard per la richiesta di pagamento telematico (RPT)
   e per la ricevuta telematica di pagamento (RT) adottato a livello
   nazionale su qualunque canale di pagamento, al fine di
   automatizzare la tratta G2B (*Government to Bank*);

-  nell’ambito delle attività legate al commercio elettronico abilita
   l’interconnessione con i circuiti internazionali di
   autorizzazione di tali pagamenti;

-  assicura l’univocità del pagamento attraverso la definizione di un
   codice identificativo del pagamento (IUV). Al suddetto
   identificativo può essere associato uno o più oggetti grafici
   (codice a barre, glifo, QR-code, ecc.), al fine di consentire e
   facilitare l’effettuazione del pagamento attraverso qualunque
   canale oggi esistente;

-  de-materializza tutte le ricevute di pagamento restituite all’EC;

-  de-materializza gli avvisi di pagamento.

Architettura e contenuti del Nodo dei Pagamenti-SPC
---------------------------------------------------
.. _Architettura e contenuti del Nodo dei Pagamenti-SPC:

La piattaforma del Nodo dei Pagamenti-SPC si basa sulle componenti
appresso indicate.

Gestore del Workflow Applicativo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Gestore del Workflow Applicativo:

È la macro-componente principale mediante la quale istanzia i modelli di
pagamento di cui al capitolo 2. Ha lo scopo di coordinare l’esecuzione
delle richieste di servizio, richiamando componenti di utilità (quali ad
esempio, il modulo per la diagnostica) ed interfacciare l’infrastruttura
di Rete SPC tramite una specifica Porta di Dominio.

Il Gestore del *Workflow* Applicativo interfaccia sia le applicazioni
degli Enti Creditori da cui provengono le richieste di servizio e a cui
devono essere indirizzate le relative risposte applicative, sia i PSP
che abilitano il pagamento sui diversi canali.

Comprende degli agenti software tra cui i principali sono quelli che
permettono:

-  la gestione del “Giornale degli Eventi” dove sono registrati - per
   ogni operazione - tutti gli scambi necessari alla corretta
   esecuzione del processo;

-  la gestione del “Tavolo Operativo” dove sono monitorati tutti i
   componenti del sistema e lo stato di esecuzione delle operazioni;

-  l’indirizzamento ai singoli servizi e/o sotto-servizi in funzione
   delle richieste e delle risposte previste dai diversi modelli di
   funzionamento;

-  la memorizzazione e la gestione delle “richieste di servizio” per la
   tracciatura delle operazioni e la gestione delle eccezioni;

-  la gestione degli errori;

-  il mantenimento del sincronismo temporale.

Gestore della Porta di Dominio
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Gestore della Porta di Dominio:

Questa componente, mantenuta per retro compatibilità, si occupa dello
scambio dei messaggi da e verso SPC per il colloquio con l’Ente
Creditore secondo gli accordi di servizio stabiliti dalle regole
tecniche SPCoop e pubblicati sui registri SICA. In coerenza con le
logiche SPCoop, permette di reindirizzare i messaggi alle Pubbliche
Amministrazioni aderenti a SPC anche in via indiretta attraverso le reti
territoriali, eventualmente per mezzo di soggetti intermediari.

Tra le principali attività svolte dalla componente si richiamano, a
titolo esemplificativo:

-  incapsulamento delle chiamate dei metodi *Web service*, rendendole
   disponibili in forma mediata verso la Porta di Dominio;

-  memorizzazione temporanea e trattamento, secondo la priorità
   indicata, dei messaggi verso la Porta di Dominio;

-  tracciamento dei riferimenti univoci dei messaggi;

-  trattamento degli header dei messaggi scambiati via Porta di Dominio
   ai fini della correlazione applicativa attuata dalla Porta di
   Dominio stessa;

-  gestione degli errori e delle conferme di natura trasmissiva;

-  generazione e propagazione dei messaggi d’errore di natura
   applicativa;

-  mantenimento di un proprio registro degli eventi finalizzato
   all’aggiornamento del Giornale degli Eventi;

-  mantenimento del sincronismo temporale.

Interfaccia di Canale
~~~~~~~~~~~~~~~~~~~~~
.. _Interfaccia di Canale:

Le attività svolte da questa componente sono analoghe a quelle svolte
dal gestore della Porta di Dominio per gli Enti Creditori, ma istanziate
per il rapporto con i singoli PSP. A tale scopo, espone una modalità
standard verso i PSP, descritta nel capitolo 9 della Sezione III. Nel
caso di peculiari modalità tecnico trasmissive richieste dai PSP, sempre
che di validità generale, possono essere realizzate allo scopo
specifiche interfacce software.

Qualora il PSP lo richieda, la componente permette di interfacciare il
PSP attraverso un intermediario (soggetto giuridico o circuito) scelto
dallo stesso PSP. Tutti gli oneri derivanti sono a carico del PSP che
mantiene la titolarità del rapporto con il Nodo dei Pagamenti-SPC.

Di seguito le principali attività svolte dalla componente:

-  incapsulamento delle chiamate al fine di renderle disponibili in
   forma mediata verso gli specifici canali;

-  memorizzazione temporanea dei messaggi applicativi verso i canali;

-  tracciamento dei riferimenti univoci dei messaggi
   memorizzati/inviati;

-  gestione degli errori e delle conferme di natura trasmissiva;

-  generazione e propagazione dei messaggi d’errore di natura
   applicativa;

-  mantenimento di un proprio registro degli eventi finalizzato
   all’aggiornamento del Giornale degli Eventi;

-  mantenimento del sincronismo temporale.

Repository
~~~~~~~~~~
.. _Repository:

Il *Repository* costituisce l’archivio in cui sono memorizzate tutte le
Ricevute Telematiche processate dal NodoSPC e non ancora consegnate,
finalizzato al buon funzionamento del sistema.

Il *Repository* consente una verifica in merito al corretto trattamento
dei flussi di pagamento del Nodo dei Pagamenti-SPC.

Componente Web-FESP
~~~~~~~~~~~~~~~~~~~
.. _Componente Web-FESP:

La componente “Web-FESP” permette di effettuare il pagamento
reindirizzando l’utente verso una *landing page* messa a disposizione
dal PSP.

In questo caso:

-  il PSP consente all’utilizzatore finale di eseguire il pagamento con
   i diversi strumenti di pagamento;

-  la componente Web-FESP agisce da normalizzatore e provvede ad
   uniformare le informazioni ricevute, re-inviandole attraverso il
   Nodo dei Pagamenti-SPC all’Ente Creditore per consentire di
   completare l’operazione di pagamento.

Componente WISP
~~~~~~~~~~~~~~~
.. _Componente WISP:

La componente “WISP” (*Wizard* Interattivo di Scelta del PSP) consente
all'utilizzatore finale di effettuare la scelta del PSP in modalità
accentrata presso il NodoSPC, che mette a disposizione apposite pagine
che standardizzano a livello nazionale la *user experience* dei
pagamenti verso la Pubblica Amministrazione, garantendo ai PSP aderenti
che l'esposizione dei servizi da loro offerti sia proposta
all'utilizzatore finale attraverso schemi che consentano pari
opportunità di trattamento, concorrenza e non discriminazione.

La componente WISP inoltre fornisce funzioni di supporto per il pagatore
introducendo vari accorgimenti per semplificare la *user experience*,
anche nel caso di pagamento con dispositivi mobili. Inoltre l’utente
potrà memorizzare i servizi di pagamento utilizzati, evitando di dover
effettuare una nuova ricerca nelle occasioni successive.

Componente Wrapper MyBank
~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Componente Wrapper MyBank:

Nell'ambito del collegamento tra il Nodo dei pagamenti-SPC ed il
circuito *e-commerce* MyBank (`vedi Capitolo 16 in Appendice 2 <../26-Capitolo_16/Capitolo16.rst>`__), la
componente "Wrapper MyBank" si occupa di effettuare le necessarie
conversioni di tracciati e gestire il colloquio tra il Nodo dei
Pagamenti-SPC e la componente *Initiating Party* messa a disposizione
dalla *Seller Bank*, rendendo possibile l’inoltro della richiesta di
pagamento alla *Buyer Bank* ed il ritorno dell'esito del pagamento
stesso.

In tale contesto, le *Seller Bank* aderenti al Nodo dei Pagamenti-SPC
sono tenute ad utilizzare le specifiche di interfacciamento della
componente “Wrapper MyBank”.

Gestione dell'avvisatura digitale in modalità *push*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Gestione dell'avvisatura digitale in modalità *push*:

La gestione dell'avvisatura digitale in modalità *push* avviene
attraverso l'utilizzo di componenti del NodoSPC che consentono:

-  agli Enti Creditori l'invio degli avvisi sia in modalità SFTP (File
   transfer sicuro), sia attraverso l'utilizzo di appositi *web service*
   (vedi rispettivamente `§§ 8.5 <../15-Capitolo_8/Capitolo8.rst#interfacce-per-il-servizio-di-file-transfer-sicuro>`_ e `8.1.6 <../15-    Capitolo_8/Capitolo8.rst#processo-di-avvisatura-digitale-push-su-iniziativa-dellente-creditore>`__);

-  ai PSP di inviare via *web service* al NodoSPC le richieste di
   iscrizione al servizio (`vedi § 9.2.7 della Sezione III <../16-Capitolo_9/Capitolo9.rst#avvisatura-digitale-push-su-iniziativa-          dellente-creditore>`__);

-  al NodoSPC di:

   -  inviare gli avvisi digitali ai PSP via *web service*;

   -  inviare gli avvisi digitali agli utilizzatori finali tramite
      e-mail (protocollo SMTP);

   -  notificare ai servizi di Italia Login gli avvisi digitali
      (predisposizione per funzionalità future);

File Transfer sicuro
~~~~~~~~~~~~~~~~~~~~
.. _File Transfer sicuro:

Il Nodo dei Pagamenti-SPC mette a disposizione dei soggetti aderenti una
piattaforma *client-server* per il trasferimento sicuro dei dati in
modalità *File Transfer*. Tale piattaforma sostituirà progressivamente
l'utilizzo delle primitive SOAP oggi impiegate per lo scambio di
informazioni in modalità massiva (ad esempio: i flussi di
rendicontazione, i totali di traffico, ecc.).

Giornale degli Eventi
~~~~~~~~~~~~~~~~~~~~~
.. _Giornale degli Eventi:

È la componente che evidenzia tutte le informazioni attinenti ad ogni
singola operazione sintetizzando le registrazioni effettuate dalle
singole componenti del Nodo dei Pagamenti-SPC: FESP; Web FESP;
*Repository*, ecc.

Le principali attività svolte dalla componente riguardano:

-  la raccolta delle informazioni attinenti alle operazioni svolte dalle
   componenti del Nodo dei Pagamenti-SPC:

   -  tipo di operazione (RPT; RT; …),

   -  identificativo univoco associato all’operazione,

   -  *timestamp* dell’evento e della registrazione,

   -  componente in cui si verifica l’evento (FESP; Web-FESP;
      *Repository*),

   -  ecc.

-  esposizione di un’interfaccia di interrogazione per l’accesso alle
   registrazioni degli eventi che consenta:

   -  la selezione degli eventi in base a criteri di ricerca (tipo di
      operazione, id, ecc.),

   -  l’esame nel dettaglio di un evento selezionato,

   -  la disponibilità di dati di sintesi (totali di tipo di operazione per
      stato, per intervallo temporale, ecc.).

Componenti di utilità
~~~~~~~~~~~~~~~~~~~~~
.. _Componenti di utilità:

Le Componenti di utilità rappresentano un insieme di componenti “di
servizio” invocate, in base alle necessità, dal *Workflow* Applicativo
per svolgere ruoli informativi specifici e utilizzabili da più servizi
applicativi all'interno del Nodo dei Pagamenti-SPC:

-  traduttore XML: struttura e assembla i messaggi XML dei servizi

-  modulo crittografia: cifra/decifra informazioni e gestisce i
   certificati crittografici

-  modulo diagnostico: effettua controlli di natura sintattica e alcuni
   controlli semantici

Ognuna delle componenti di utilità, oltre ad attività specifiche alla
propria funzione, svolge le attività di interfacciamento ed integrazione
con il gestore del *Workflow* Applicativo.

Sistema di Monitoring
~~~~~~~~~~~~~~~~~~~~~
.. _Sistema di Monitoring:

Il sistema di Monitoring svolge attività di controllo complessivo per
quanto attiene alle tematiche di monitoraggio. tale componente deve
essere considerata come una entità logica indipendente, con un proprio
workflow specifico e proprie regole di funzionamento, in grado - quindi
- di verificare malfunzionamenti e condizioni di errore di qualsiasi
altro modulo.

Nel sistema di monitoring è allocata la funzione di throttling che
limita l’utilizzo del sistema pagoPA oltre le possibilità di carico da
cui possa conseguire il verificarsi di disservizi generali. Tale
funzionalità viene innescata automaticamente nel caso in cui un Ente
Creditore tenti di avviare, nell’unità di tempo, un numero di operazioni
di pagamento superiori ai fabbisogni da esso stesso dichiarati. Le
regole di *throttling* sono indicate nel documento
“*Indicatori di qualità per i Soggetti Aderenti*” pubblicato sul sito istituzionale
dell’Agenzia per l’Italia Digitale.

Sistema di Gestione del Tavolo Operativo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. _Sistema di Gestione del Tavolo Operati:

Il sistema ha lo scopo di fornire il supporto necessario alle attività
del Tavolo Operativo, monitorando le altre componenti applicative e
avendo accesso alle informazioni relative ad ogni richiesta di
intervento.

Fra le funzioni di supporto al Tavolo operativo è messo a disposizione
un sistema di *Interactive Voice Response* (IVR, Risposta Vocale
Interattiva) per istradare le chiamate vocali, integrato a un sistema di
*trouble-ticketing* per tracciare tutte le attività di assistenza.

Sistema di Reporting
~~~~~~~~~~~~~~~~~~~~
.. _Sistema di Reporting:

Il sistema assicura la produzione e pubblicazione di informazioni a
carattere statistico, attraverso un sito all’uopo dedicato e attraverso
la gestione dei livelli di accesso secondo profili definiti.

`Torna all'indice <../../index.rst>`__

.. |AGID_logo_carta_intestata-02.png| image:: ../media/header.png
   :width: 5.90551in
   :height: 1.30277in
