Componenti tecniche del Nodo
============================

Il Nodo definisce modalità standard per la gestione dei flussi finanziari `[TBD in realtà noi non facciamo flussi finanziari]`:

* adotta gli standard [XML ISO 20022](https://en.wikipedia.org/wiki/ISO_20022) per i tracciati dei flussi finanziari correlati alle singole operazioni;
* introduce uno standard per la richiesta di pagamento telematico e per la ricevuta telematica di pagamento adottato a livello nazionale su qualunque canale di pagamento, al fine di automatizzare la tratta G2B (*Government to Bank*);
* nell'ambito delle attività legate al commercio elettronico abilita l'interconnessione con i circuiti internazionali di autorizzazione di tali pagamenti; `[TBD- eliminerei]`
* assicura l'univocità del pagamento attraverso la definizione di un codice identificativo del pagamento (IUV). Al suddetto identificativo può essere associato uno o più oggetti grafici (codice a barre, glifo, QR-code, etc), al fine di consentire e facilitare l'effettuazione del pagamento attraverso qualunque canale oggi esistente;
* de-materializza tutte le ricevute di pagamento restituite all'EC;
* de-materializza gli avvisi di pagamento.

Nella figura che segue sono evidenziate le componenti ed i soggetti che interagiscono tra di loro per consentire lo svolgersi del processo di pagamento telematico secondo i modelli descritti in precedenza:

![architettura-pagoPA](../images/bbd_architettura.png)

`[TBD check]`
Si noti che sebbene le funzionalità di alto livello ed i relativi flussi di informazione siano ben definiti, le sottostanti implementazioni e le architetture interne possono evolvere nel tempo (es: le PdD sono state deprecate nel 2017 ma attualmente ancora utilizzate).

## Gestore del Workflow Applicativo

È la macro-componente principale che ha lo scopo di coordinare l'esecuzione delle richieste di servizio, richiamando componenti di utilità (quali ad esempio, il modulo per la diagnostica) ed interfacciare l'infrastruttura di Rete SPC.È la macro-componente principale che ha lo scopo di coordinare l'esecuzione delle richieste di servizio, richiamando componenti di utilità quali ad esempio, il modulo per la diagnostica, e di interfacciare l'infrastruttura di Rete. 

Il *Gestore del Workflow Applicativo* interfaccia sia le applicazioni degli EC da cui provengono le richieste di servizio e a cui devono essere indirizzate le relative risposte applicative, sia i PSP che abilitano il pagamento sui diversi canali.

Comprende vari agenti software tra cui i principali sono quelli che permettono:

* la gestione del "Giornale degli Eventi" dove sono registrati - per ogni operazione - tutti gli scambi necessari alla corretta esecuzione del processo;
* la gestione del "Tavolo Operativo" dove sono monitorati tutti i componenti del sistema e lo stato di esecuzione delle operazioni;
* l'indirizzamento ai singoli servizi e/o sotto-servizi in funzione delle richieste e delle risposte previste dai diversi modelli di funzionamento;
* la memorizzazione e la gestione delle "richieste di servizio" per la tracciatura delle operazioni e la gestione delle eccezioni;
* la gestione degli errori;
* il mantenimento del sincronismo temporale.

## Gestore della Connessione

La connessione al Nodo in applicazione al vigente modello di interoperabilità avviene nelle forme e nei metodi descritti nel documento collegato ["Specifiche di Connessione al sistema pagoPA"](https://github.com/pagopa/lg-pagopa-docs/blob/master/documentazione_tecnica_collegata/documentazione_collegata/Sistema_pagoPA_-_Specifiche%20connessione_2.3.pdf), disponibile sul sito istituzionale di PagoPA S.p.A.

## Gestore della Porta di Dominio

`[TBD soon deprecated]`

Questa componente, deprecata e mantenuta per retro compatibilità, si occupa dello scambio dei messaggi da e verso SPC per il colloquio con l'EC secondo gli accordi di servizio stabiliti dalle regole tecniche SPCoop e pubblicati sui registri SICA. In coerenza con le logiche SPCoop, permette di reindirizzare i messaggi alle Pubbliche Amministrazioni aderenti a SPC anche in via indiretta attraverso le reti territoriali, eventualmente per mezzo di soggetti intermediari.

Tra le principali attività svolte dalla componente si richiamano, a titolo esemplificativo:

* incapsulamento delle chiamate dei metodi *Web service*, rendendole disponibili in forma mediata verso la Porta di Dominio;
* memorizzazione temporanea e trattamento, secondo la priorità indicata, dei messaggi verso la Porta di Dominio;
* tracciamento dei riferimenti univoci dei messaggi;
* trattamento degli header dei messaggi scambiati via Porta di Dominio ai fini della correlazione applicativa attuata dalla Porta di Dominio stessa;
* gestione degli errori e delle conferme di natura trasmissiva;
* generazione e propagazione dei messaggi d'errore di natura applicativa;
* mantenimento di un proprio registro degli eventi finalizzato all'aggiornamento del Giornale degli Eventi;
* mantenimento del sincronismo temporale.

## Interfaccia di Canale

Le attività svolte da questa componente sono analoghe a quelle svolte dal gestore della Porta di Dominio per gli Enti Creditori, ma istanziate per il rapporto con i singoli PSP. A tale scopo, il Nodo espone una modalità standard di colloquio verso i PSP, descritta nella Sezione IV `[TBD o Sez.4 ?]`. Nel caso di peculiari modalità tecnico trasmissive richieste dai PSP, sempre che di validità generale, possono essere realizzate allo scopo specifiche interfacce software.

Qualora il PSP lo richieda, la componente permette di interfacciare il PSP attraverso un intermediario (soggetto giuridico o circuito) scelto dallo stesso PSP. Tutti gli oneri derivanti sono a carico del PSP che mantiene la
titolarità del rapporto con il Nodo.

Di seguito le principali attività svolte dalla componente:

* incapsulamento delle chiamate al fine di renderle disponibili in forma mediata verso gli specifici canali;
* memorizzazione temporanea dei messaggi applicativi verso i canali;
* tracciamento dei riferimenti univoci dei messaggi memorizzati/inviati;
* gestione degli errori e delle conferme di natura trasmissiva;
* generazione e propagazione dei messaggi d'errore di natura applicativa;
* mantenimento di un proprio registro degli eventi finalizzato all'aggiornamento del Giornale degli Eventi;
* mantenimento del sincronismo temporale.

## Repository ricevute telematiche

Il *Repository* costituisce l'archivio in cui sono memorizzate tutte le ricevute telematiche processate dal Nodo e non ancora consegnate, finalizzato al buon funzionamento del sistema. Esso consente una verifica in merito al corretto trattamento dei flussi di pagamento del Nodo.

## Componente Web-FESP

La componente "Web-FESP" permette di effettuare il pagamento reindirizzando l'Utilizzatore finale verso una *landing page* messa a disposizione dal PSP.

In questo caso:

* il PSP consente all'Utilizzatore finale di eseguire il pagamento con i diversi strumenti di pagamento;
* la componente Web-FESP agisce da normalizzatore e provvede ad uniformare le informazioni ricevute, re-inviandole, attraverso il Nodo, all'EC per consentire di completare l'operazione di pagamento.

## Componente WISP

La componente "WISP" (*Wizard Interattivo di Scelta del Prestatore di Servizi di Pagamento*) consente all'utilizzatore finale di effettuare la scelta del PSP in modalità accentrata presso il Nodo, che mette a disposizione apposite pagine che standardizzano a livello nazionale la *user experience* dei pagamenti verso la Pubblica Amministrazione, garantendo ai PSP aderenti che l'esposizione dei servizi da loro offerti sia proposta all'Utilizzatore finale attraverso schemi che consentano pari opportunità di trattamento, concorrenza e non discriminazione.

La componente WISP inoltre fornisce all'Utilizzatore finale funzioni di supporto introducendo vari accorgimenti per semplificare la *user experience*, anche nel caso di pagamento con dispositivi mobili. Inoltre l'Utilizzatore finale potrà memorizzare gli strumenti di pagamento utilizzati, evitando di dover effettuare una nuova ricerca nelle occasioni successive.

## File Transfer sicuro

Il Nodo mette a disposizione dei soggetti aderenti una piattaforma *client-server* per il trasferimento sicuro dei dati in modalità *File Transfer*. Tale piattaforma sostituirà progressivamente l'utilizzo delle primitive oggi impiegate per lo scambio di informazioni in modalità massiva (ad esempio: i flussi di rendicontazione, i totali di traffico, etc).

## Giornale degli Eventi

È la componente che raccoglie tutte le informazioni attinenti ad ogni singola operazione sintetizzando le registrazioni effettuate dalle singole componenti del Nodo: FESP; Web FESP; *Repository*, etc

Le principali attività svolte dalla componente riguardano:

* la raccolta delle informazioni attinenti alle operazioni svolte dalle componenti del Nodo, come ad esempio:
	* tipo di operazione (RPT; RT; ...),
    * identificativo univoco associato all'operazione,
    * timestamp dell'evento e della registrazione, componente in cui si verifica l'evento (FESP; Web-FESP; Repository);
	* esposizione di un'interfaccia di interrogazione per l'accesso alle registrazioni degli eventi che consente:
		* la selezione degli eventi in base a criteri di ricerca (tipo di operazione, id, ecc.),
		* l'esame nel dettaglio di un evento selezionato;
		* la disponibilità di dati di sintesi (totali di tipo di operazione per stato, per intervallo temporale, ecc.).

## Componenti di utilità

`[TBD valutare la rimozione dalle SANP]`

Le componenti di utilità rappresentano un insieme di componenti "di servizio" invocate, in base alle necessità, dal *Workflow Applicativo* per svolgere ruoli informativi specifici e utilizzabili da più servizi applicativi all'interno del Nodo:

* traduttore XML: struttura e assembla i messaggi XML dei servizi;
* modulo crittografia: cifra/decifra informazioni e gestisce i certificati crittografici;
* modulo diagnostico: effettua controlli di natura sintattica e alcuni controlli semantici.

Ognuna delle componenti di utilità, oltre ad attività specifiche alla propria funzione, svolge le attività di interfacciamento ed integrazione con il gestore del *Workflow Applicativo*.

## Sistema di monitoring

`[TBD valutare la rimozione dalle SANP]`

Il sistema di *monitoring* svolge attività di controllo complessivo per quanto attiene alle tematiche di monitoraggio. Tale componente deve essere considerata come una entità logica indipendente, con un proprio *workflow* specifico e proprie regole di funzionamento, in grado, quindi, di verificare malfunzionamenti e condizioni di errore di qualsiasi altro modulo.

Nel sistema di *monitoring* è allocata la funzione di *throttling* che limita l'utilizzo del Sistema pagoPA oltre le possibilità di carico da cui possa conseguire il verificarsi di disservizi generali. Tale funzionalità viene innescata automaticamente nel caso in cui un EC tenti di avviare, nell'unità di tempo, un numero di operazioni di pagamento superiori ai fabbisogni da esso stesso dichiarati. Le regole di *throttling* sono indicate nel documento "*Indicatori di qualità per i Soggetti Aderenti*" `[TBD url]` pubblicato sul sito di PagoPA S.p.A.

## Sistema di Gestione del Tavolo Operativo

Il sistema Sistema di Gestione del Tavolo Operativo ha lo scopo di fornire il supporto necessario alle attività del Tavolo Operativo, monitorando le altre componenti applicative e avendo accesso alle informazioni relative ad ogni richiesta di intervento.

Fra le funzioni di supporto al Tavolo operativo è messo a disposizione un sistema di *Interactive Voice Response* (IVR, Risposta Vocale Interattiva) per istradare le chiamate vocali, integrato a un sistema di *trouble-ticketing* per tracciare tutte le attività di assistenza.

## Controlli

Tutti i flussi/dati scambiati e previsti dai Servizi di Nodo devono risultare conformi agli Standard di Servizio.

Qualora fosse riscontrata una mancata conformità a detti Standard di Servizio, il soggetto ricevente ha l'obbligo:

* di bloccare l'esecuzione del relativo flusso elaborativo e di trattamento dei dati;
* rendere disponibile un'evidenza dello stato del flusso a fronte di una eventuale situazione di blocco del flusso stesso.

## Servizi applicativi opzionali

Rientrano in questa tipologia le funzioni che il Servizio mette a disposizione dei soggetti appartenenti al Dominio e che possono da questi essere utilizzate nell'ambito dello svolgimento delle proprie attività.
`[TBD check-> da eliminare]`

### Totali di traffico

Il servizio di quadratura dei flussi di traffico mette a disposizione dei soggetti appartenenti al Dominio che ne facciano richiesta, un flusso periodico relativo a tutte le interazioni (RPT e RT) transitate attraverso il Nodo e di stretta pertinenza del singolo richiedente.

Il Nodo mette a disposizione dell'EC e del PSP gli strumenti per la ricezione di tali flussi.

Il periodo temporale durante il quale saranno disponibili i flussi relativi ai "Totali di Traffico" non potrà superare i 10 giorni di calendario e sarà comunque pubblicato sul sito di PagoPA S.p.A. `[TBD check-> mai messo in piedi, da eliminare]`
